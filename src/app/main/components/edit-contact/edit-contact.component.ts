import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { ContactInterface } from '../../models/contact.model';

@Component({
  selector: 'app-edit-contact',
  templateUrl: './edit-contact.component.html',
  styleUrls: ['./edit-contact.component.scss']
})
export class EditContactComponent implements OnInit {

  contactForm: FormGroup;
  contactInfo: ContactInterface;

  constructor(
    private fb: FormBuilder,
    private apiService: ApiService,
    private router: Router,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.route.data.subscribe(contactData => {
      this.contactInfo = contactData['contact'];
        this.contactForm = this.fb.group({
        firstname: this.contactInfo.firstname,
        lastname: this.contactInfo.lastname,
        dateOfBirth: new Date (this.contactInfo.dateOfBirth),
        photo: this.contactInfo.photo,
      });
    });
  }

  updateContact() {
    this.apiService.updateContact(this.contactInfo.id, this.contactForm.value).subscribe(() => {
      this.router.navigate(['list']);
    })
  }

  deleteContact() {
    this.apiService.deleteContact(this.contactInfo.id).subscribe(() => {
      this.router.navigate(['list']);
    })
  }

  cancel() {
    this.router.navigate(['list']);
  }
}
