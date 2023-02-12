import { Injectable } from "@angular/core";
import { Comment } from "./comment.model";

@Injectable()

export class CommentServices {
    comments: Comment[] = [
        new Comment("Tiziano","Hola, me llamo Tiziano","https://images.ctfassets.net/4f3rgqwzdznj/KwBiwCex2h7pTXtFhl7T8/5d7b08142e1fdd2d08ac8ea3d668b646/puppy_going_to_bathroom_on_grass_GettyImages-994816678.jpg","publicado el 14 de marzo"),
    ];
    
    addComment(comment: Comment) {
        this.comments.push(comment);
    }

}