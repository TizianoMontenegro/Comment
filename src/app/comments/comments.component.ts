import { Component, OnInit } from '@angular/core';
import { Comment } from '../comment.model';
import { CommentServices } from '../comment.services';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit{
  comments: Comment[] = this.commentServices.comments;

  constructor(private commentServices: CommentServices) {}

  ngOnInit() {
    console.log(this.comments)
  }

}
