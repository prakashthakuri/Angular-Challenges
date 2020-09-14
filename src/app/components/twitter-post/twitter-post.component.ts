import { Component, Input, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-twitter-post',
  templateUrl: './twitter-post.component.html',
  styleUrls: ['./twitter-post.component.scss']
})
export class TwitterPostComponent implements OnInit {

  @Input() public baseHref = 'https://prakashthakuri.com';
  @Input() public hashTags: string[] = ['PrakashShahi', 'JavaScript', 'TypeScript', 'Angular', 'Challenges'];

  constructor(public titleService: Title) { }

  public twitterUrl(): string {

    const base = this.getBaseWithHashTagsAndROutes();
    const message = encodeURIComponent(`Check out  ${this.titleService.getTitle()} and become a coding God!!` );
    return `${base} ${message}`;
  }
  private getBaseWithHashTagsAndROutes() {
    const route = encodeURI(this.baseHref);
    const hashTags = this.hashTags.join(',');

    return `https://twitter.com/intent/tweet?hastags=${encodeURIComponent(hashTags)}&related=prakashthakuri&url=${route}`;
  }

  ngOnInit(): void {
  }

}
