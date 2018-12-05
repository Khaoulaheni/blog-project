import { Post } from './../Post';
import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-post-list-item-component',
  templateUrl: './post-list-item-component.component.html',
  styleUrls: ['./post-list-item-component.component.css']
})
@export class PostListItemComponentComponent implements OnInit {

@Input() post: Post;
  constructor(private route: ActivatedRoute,
    private postsService: PostService,
    private router: Router) {
      console.log('constructor called');
    }

    ngOnInit() {
      //this.post = new Post();
      const title = this.route.snapshot.params['title'];
      this.postsService.getSinglePost(title).then(
        (post: Post) => {
          this.post = post;
          console.log(post);
        }
      );
      console.log('ngOnInit called');
    }

  onBack() {
    this.router.navigate(['/posts']);
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
