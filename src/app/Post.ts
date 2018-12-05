
export class Post {
/*
 title: String = 'a post';
  content: String =  'a content';
  loveIts: Number = 0;
  created_at: Date = new Date();
*/
constructor (public title: string, public content: string , public loveIts: number, public created_at: Date) {
  this.title = 'a post';
  this.content =  'a content';
  this.loveIts = 0;
  this.created_at = new Date();
 }
}
