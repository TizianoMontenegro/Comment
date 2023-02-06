import { Injectable } from "@angular/core";
import { Comment } from "./comment.model";

@Injectable()

export class CommentServices {
    comments: Comment[] = [
        new Comment("Tiziano","Hola, me llamo Tiziano","image.jpg","publicado el 14 de marzo"),
    ];
    
    addComment(comment: Comment) {
        this.comments.push(comment);
    }

}