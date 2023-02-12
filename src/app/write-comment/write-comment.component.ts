import { Component, OnInit } from '@angular/core';
import { Comment } from '../comment.model';
import { CommentServices } from '../comment.services';
import { Router } from '@angular/router';
import * as moment from "moment";
import "moment/locale/es";

@Component({
  selector: 'app-write-comment',
  templateUrl: './write-comment.component.html',
  styleUrls: ['./write-comment.component.css']
})
export class WriteCommentComponent implements OnInit{
  username!: string;
  comment!: string;
  image!: string;;
  date!: string;;

  constructor(
    private commentServices: CommentServices,
    private router:Router) {
  }
  ngOnInit(): void {
    moment().locale("es")
    
  }
  catchFile(event: Event) {
    // console.log(event.target.files[0])
  }
  addNewComment() {
    if(
    this.image.includes("http") &&
    this.image.includes("://")) {
      let newComment: Comment = new Comment(this.username, this.comment, this.image, `Publicado el ${moment().format("LL")} a las ${moment().format("LTS")}`)  
      console.log(newComment)
      this.commentServices.addComment(newComment)
    }else {
      this.image = "assets/incognito.webp"
      let newComment: Comment = new Comment(this.username, this.comment, this.image, `Publicado el ${moment().format("LL")} a las ${moment().format("LTS")}`)  
      console.log(newComment)
      this.commentServices.addComment(newComment)
    }
    console.log(this.image)
    this.router.navigate(["comments"])
  }
}
