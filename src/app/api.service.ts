import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class ApiService { 
  // apiUrl:String = 'http://localhost:8524/api'
  apiUrl:String = 'api';
  constructor(private http :HttpClient) { }
  // apiUrl:String = 'http://localhost:8524/api'
  //to fetch all data list
getBookList(){
  return this.http.get<any>(`${this.apiUrl}/booklist`)
}

// to delete 
deleteBook(id:any){
  return this.http.delete(`${this.apiUrl}/book/${id}`)
}

// to add new 

addBook(data:any){
  return this.http.post(`${this.apiUrl}/book`, data)

}


// to update existing 
updateBook(data:any, id:any){
  return this.http.post(`${this.apiUrl}/book`, {data,id})

}


// to fetch data of single  

getSingleBook(id:any){
  return this.http.get<any>(`${this.apiUrl}/book/${id}`)
}
}
