import { Component } from '@angular/core';
import { Comment } from '../comment.model';
import { CommentServices } from '../comment.services';
import { Router } from '@angular/router';

@Component({
  selector: 'app-write-comment',
  templateUrl: './write-comment.component.html',
  styleUrls: ['./write-comment.component.css']
})
export class WriteCommentComponent {
  username!: string;
  comment!: string;
  image: string = "assets/incognito.webp";
  date: string = "publicado el xx de xx del xxxx";

  constructor(
    private commentServices: CommentServices,
    private router:Router) {

  }

  addNewComment() {
    let newComment: Comment = new Comment(this.username, this.comment, this.image, this.date)  
    // console.log(`Publicado el  de ${new Date().getUTCMonth()} ${new Date().getUTCFullYear()}`)
    console.log(newComment)
    console.log(this.image)
    this.commentServices.addComment(newComment)
    this.router.navigate(["comments"])
  }
}
