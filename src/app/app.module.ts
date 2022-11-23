import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { MainComponent } from './pages/main/main.component';
import { SignupComponent } from './pages/signup/signup.component';
import { LoginComponent } from './pages/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BooklistComponent } from './pages/booklist/booklist.component';
import { AddnewComponent } from './pages/addnew/addnew.component';
import { ApiService } from './api.service';
import { LibrarayComponent } from './pages/libraray/libraray.component';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MainComponent,
    SignupComponent,
    LoginComponent,
    BooklistComponent,
    AddnewComponent,
    LibrarayComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
    
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
