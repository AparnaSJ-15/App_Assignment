import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddnewComponent } from './pages/addnew/addnew.component';
import { BooklistComponent } from './pages/booklist/booklist.component';
import { HomeComponent } from './pages/home/home.component';
import { LibrarayComponent } from './pages/libraray/libraray.component';
import { LoginComponent } from './pages/login/login.component';
import { MainComponent } from './pages/main/main.component';
import { SignupComponent } from './pages/signup/signup.component';


const routes: Routes = [{path:'library',component:LibrarayComponent},{path:'home',component:HomeComponent},{path:'signup',component:SignupComponent},{path:'login',component:LoginComponent},
{path:'main',component:MainComponent},
{path:'booklist',component:BooklistComponent},
{path:'addnew',component:AddnewComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
