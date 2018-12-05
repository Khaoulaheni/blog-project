import { Post } from './../Post';
import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { PostService } from '../services/post.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-post-list-component',
  templateUrl: './post-list-component.component.html',
  styleUrls: ['./post-list-component.component.css']
})
export class PostListComponentComponent implements OnInit, OnDestroy {
 @Input() postList: Post[];
postsSubscription: Subscription;
 /* postList: Post[] = [
    { title: 'post 1', content: 'hello', loveIts: 1, created_at: new Date },
    { title: 'post 2', content: 'hello', loveIts: 2, created_at: new Date },
    { title: 'post 3', content: 'hello', loveIts: 3, created_at: new Date }
  ];*/
  constructor (private postsService: PostService, private router: Router) {}


  ngOnInit() {
    this.postsSubscription = this.postsService.postsSubject.subscribe(
      (posts: Post[]) => {
        this.postList = posts;

        console.log( posts);
      }
    );
    this.postsService.getPosts();
    this.postsService.emitPosts();
  }

  onNewPost() {
    this.router.navigate(['/posts', 'new']);
  }

  onDeletePost(post: Post) {
    this.postsService.removePost(post);
  }

  onViewPost(title: string) {
    this.router.navigate(['/posts', 'view', title]);
  }

  ngOnDestroy() {
    this.postsSubscription.unsubscribe();
  }
}

