import { Component, Input, OnInit } from '@angular/core';
import { LoaderType } from './enum/loader-type.enum';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss']
})
export class LoaderComponent implements OnInit {

  @Input() public isLoading = false;
  @Input() public LoaderType: LoaderType = LoaderType.Circular;
  public LoaderType = LoaderType;

  public get loadingText (): string {
    return `${this.loading}`;

  }

  private loading = 'loading';
  private loadingPeriods = '.\0\0';


  ngOnInit(): void {
    if(this.LoaderType === LoaderType.Loading) {
      this.updateLoaderPeriods();

    }


  }
  private updateLoaderPeriods() {
    let currentStep = 0;

    setInterval(() => {

      switch(currentStep % 3) {
        case 0 :
          this.loadingPeriods = '..';
          currentStep++;
          break;

        case 1 :
            this.loadingPeriods = '...';
            currentStep++;
            break;

        case 2:
          this.loadingPeriods= '.';
          currentStep = 0;
          break;


      }

    }, 500);

  }

}
