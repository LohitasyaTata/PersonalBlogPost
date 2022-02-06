import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { PostListComponent } from "./posts/post-list/post-list.component";
import { PostCreateComponent } from "./posts/post-create/post-create.component";
import { LoginComponent } from "./login/login.component";
import { RegisterComponent } from "./register/register.component";
import { registerLocaleData } from "@angular/common";
//import { RegisterComponent } from "./register/register.component";

const routes: Routes = [
  { path: '', component: RegisterComponent },
  { path: 'postlist', component: PostListComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'create', component: PostCreateComponent },
  { path: 'edit/:postId', component: PostCreateComponent },
  { path: 'login', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
