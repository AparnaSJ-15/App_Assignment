import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class ApiService { 
  // apiUrl:String = 'http://localhost:8524/api'
  constructor(private http :HttpClient) { }
  apiUrl:String = 'http://localhost:8524/api'
  //to fetch all data list
getBookList(){
  return this.http.get(`${this.apiUrl}/booklist`)
}

// to delete student
deleteBook(id:any){
  return this.http.delete(`${this.apiUrl}/book/${id}`)
}

// to add new student 

addBook(data:any){
  return this.http.post(`${this.apiUrl}/book`, data)

}


// to update existing student 
updateBook(data:any, id:any){
  return this.http.post(`${this.apiUrl}/book`, {data,id})

}


// to fetch data of a single student 

getSingleBook(id:any){
  return this.http.get(`${this.apiUrl}/book/${id}`)
}
}
