export class Comment {
    username: string;
    comment: string;
    image: string;
    date: string
    constructor (
        username: string, 
        comment: string, 
        image: string, 
        date: string) {
        this.username = username;
        this.comment = comment;
        this.image = image;
        this.date = date;
    }
}