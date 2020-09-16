import { UserService } from './../user.service';
import { Component, OnInit } from '@angular/core';
import { User } from '../user.model';

@Component({
  selector: 'app-service-documentation',
  templateUrl: './service-documentation.component.html',
  styleUrls: ['./service-documentation.component.scss']
})
export class ServiceDocumentationComponent implements OnInit {

  public user = new User();
  constructor(public userService: UserService) { }

  ngOnInit(): void {

    this.userService.getUserById(1).subscribe({
      next: (response: any) => {
        this.user = response;
      },
      error: (error) => {
        console.log(error);
      },
      complete: () => {
        console.log('Done');
      }

 });
}
}
