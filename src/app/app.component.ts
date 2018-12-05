import { Post } from './Post';
import { Component } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
   title = 'blog-project';
   constructor() {
   const config = {
    apiKey: 'AIzaSyCUkok7ZvY0a5HhlFmfLv-OlkdzmJy57F4',
    authDomain: 'blog-project-8ea05.firebaseapp.com',
    databaseURL: 'https://blog-project-8ea05.firebaseio.com',
    projectId: 'blog-project-8ea05',
    storageBucket: 'blog-project-8ea05.appspot.com',
    messagingSenderId: '234455856573'
  };
  firebase.initializeApp(config);
}
}

