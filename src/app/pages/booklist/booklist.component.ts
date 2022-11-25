import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { __values } from 'tslib';

@Component({
  selector: 'app-booklist',
  templateUrl: './booklist.component.html',
  styleUrls: ['./booklist.component.css']
})
export class BooklistComponent implements OnInit {

  constructor(private apiService :ApiService, private router: Router) { }
  books:any =[];
  bookform:any

  ngOnInit(): void {
    this.getData();
  }
  getData(){
    this.apiService.getBookList().subscribe(res=>{
      this.books = res;
    })
  }

  // editBook(){
    // this.apiService.updateBook(data,id).subscribe(res=>{
    //   this.books = res
    // })
  // }

  editBook(id:String){
    this.router.navigate(['/addnew']);
  }

  refresh(): void {
    window.location.reload();
  }

  deleteBook(id:any){
    this.apiService.deleteBook(id).subscribe(res=>{
      this.books = res;
      alert('Succesfully Deleted')
      this.refresh(); 
  })   
}
}
