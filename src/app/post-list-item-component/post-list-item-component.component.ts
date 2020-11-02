import {Component, Input, OnInit} from '@angular/core';
import {PostComponent} from '../post/post.component';


@Component({
  selector: 'app-post-list-item-component',
  templateUrl: './post-list-item-component.component.html',
  styleUrls: ['./post-list-item-component.component.css']
})
export class PostListItemComponentComponent implements OnInit {
    @Input() postTitle: string;
    @Input() postContent: string;
    @Input() postloveIts: number;
    @Input() postcreatedat: Date;


  constructor() { }

  ngOnInit(): void {
  }

onLike(postloveIts): number{
    return postloveIts += 1;
  }
onDislike(postloveIts): number{
    if (postloveIts > 0){
      return postloveIts -= 1;
    }
  }
}
