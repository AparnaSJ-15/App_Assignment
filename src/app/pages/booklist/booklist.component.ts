import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-booklist',
  templateUrl: './booklist.component.html',
  styleUrls: ['./booklist.component.css']
})
export class BooklistComponent implements OnInit {

  constructor(private apiService :ApiService, private router: Router) { }
  books:any =[]
  ngOnInit(): void {
    this.getData();
  }

  getData(){
    this.apiService.getBookList().subscribe(res=>{
      this.books = res
    })
  }

  editBook(){
    // this.apiService.updateBook(data,id).subscribe(res=>{
    //   this.books = res
    // })
  }
  deleteBook(id:any){
    this.apiService.deleteBook(id).subscribe(res=>{
      this.books = res;
      alert('Succesfully Deleted')
    })  
    // this.router.navigate(['/booklist'])
    
}
}
