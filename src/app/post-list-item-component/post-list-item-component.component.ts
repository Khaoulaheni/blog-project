import { Post } from './../Post';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-post-list-item-component',
  templateUrl: './post-list-item-component.component.html',
  styleUrls: ['./post-list-item-component.component.css']
})
export class PostListItemComponentComponent implements OnInit {
  @Input() post: Post;
  constructor() {
  }

  ngOnInit() {
  }
 onLike(): void {
   console.log('un like');
    this.post.loveIts += 1;
  }
 onDislike(): void {
  console.log('un dislike');
    this.post.loveIts -= 1;
  }

  getColor() {
     if (this.post.loveIts > 2) {
        return 'green';
      } else if (this.post.loveIts <= 2) {
          return 'red';
        }
  }
  getNumberofLikes() {
         return this.post.loveIts;
 }
}
