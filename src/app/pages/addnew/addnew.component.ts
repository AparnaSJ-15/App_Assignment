import { Component, OnInit } from '@angular/core';

import { FormGroup, FormControl, Validators } from '@angular/forms'
import { ApiService } from 'src/app/api.service';


@Component({
  selector: 'app-addnew',
  templateUrl: './addnew.component.html',
  styleUrls: ['./addnew.component.css']
})
export class AddnewComponent implements OnInit {

  bookform: any = new FormGroup({
    'name': new FormControl(''),
    'takenDate': new FormControl(''),
    'returnDate': new FormControl('')
  })

  constructor(private api: ApiService) { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.api.addBook(this.bookform.value).subscribe({
      complete: () => {
        alert('data saved successfully')
      }
    }
    )

  }

}
