import {Component, Input, OnInit} from '@angular/core';
import {PostComponent} from '../post/post.component';



@Component({
  selector: 'app-post-list-component',
  templateUrl: './post-list-component.component.html',
  styleUrls: ['./post-list-component.component.css']
})
export class PostListComponentComponent implements OnInit {

  @Input()posts: [{
    title: string,
    content: string,
    loveIts: number,
    created_at: Date
  }];


  constructor() { }

  ngOnInit(): void {
  }

}
