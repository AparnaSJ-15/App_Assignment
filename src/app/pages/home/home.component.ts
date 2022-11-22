import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router : Router) { }

  // signup(): void{
  //   this.router.navigate(['/signup'])
  // }

  ngOnInit(): void {
  }

  signup(){
    this.router.navigate(['/signup'])
  }

  login(){
    this.router.navigate(['/login'])
  }

  logout(){
    this.router.navigate([''])
  }

}
