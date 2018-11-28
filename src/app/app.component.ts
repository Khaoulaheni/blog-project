import { Post } from './Post';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
   title = 'blog-project';
   postList: Post[] = [
    { title: 'post 1', content: 'hello', loveIts: 1, created_at: new Date },
    { title: 'post 2', content: 'hello', loveIts: 2, created_at: new Date },
    { title: 'post 3', content: 'hello', loveIts: 3, created_at: new Date }
  ];
}

