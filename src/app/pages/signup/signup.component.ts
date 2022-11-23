import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  User={
    email:'',
    password:''
  }
  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  userverify(){
      alert('Successfully Logged In')
      this.router.navigate(['/booklist'])
    }
  }

