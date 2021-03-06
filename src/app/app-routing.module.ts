import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import {ExploreComponent} from "./explore/explore.component";
import {PostsListComponent} from "./posts/posts-list/posts-list.component";
import {MessagesComponent} from "./messages/messages.component";
import {FollowersComponent} from "./follows/followers/followers.component";
import {FollowingComponent} from "./follows/following/following.component";
import {NotificationsComponent} from "./notifications/notifications.component";
import {HomeComponent} from "./home/home.component";
import {RegistrationComponent} from "./auth/registration/registration.component";

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent},
  { path: 'explore', component: ExploreComponent},
  { path: 'notifications', component: NotificationsComponent},
  { path: 'messages', component: MessagesComponent},
  { path: 'followers', component: FollowersComponent},
  { path: 'following', component: FollowingComponent},
  { path: 'registration', component: RegistrationComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
