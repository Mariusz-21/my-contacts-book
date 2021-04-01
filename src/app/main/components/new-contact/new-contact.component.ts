import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-new-contact',
  templateUrl: './new-contact.component.html',
  styleUrls: ['./new-contact.component.scss']
})
export class NewContactComponent implements OnInit {

  contactForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private apiService: ApiService
  ) { }

  ngOnInit(): void {
    this.contactForm = this.fb.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      dateOfBirth: new Date,
      photo: '',
    })
  }

  addContract() {
    this.apiService.addContact(this.contactForm.value).subscribe(() => {
      this.router.navigate(['list'])
    })
  }

  cancel() {
    this.router.navigate(['list'])
  }

}
