// Modules
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
// Components
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CommentsComponent } from './comments/comments.component';
import { SupportComponent } from './support/support.component';
import { WrongRouteComponent } from './wrong-route/wrong-route.component';
import { WriteCommentComponent } from './write-comment/write-comment.component';
// Services
import { CommentServices } from './comment.services';

const appRoutes: Routes = [
  {path: "", component: HomeComponent},
  {path: "comments", component: CommentsComponent},
  {path: "write-a-comment", component: WriteCommentComponent},
  {path: "support", component: SupportComponent},
  {path: "**", component: WrongRouteComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CommentsComponent,
    SupportComponent,
    WrongRouteComponent,
    WriteCommentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    FormsModule
  ],
  providers: [CommentServices],
  bootstrap: [AppComponent]
})
export class AppModule { }
