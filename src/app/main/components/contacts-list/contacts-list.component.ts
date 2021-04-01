import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { ContactInterface } from '../../models/contact.model';


@Component({
  selector: 'app-contacts-list',
  templateUrl: './contacts-list.component.html',
  styleUrls: ['./contacts-list.component.scss']
})
export class ContactsListComponent implements OnInit {

  contacts: ContactInterface[];

  constructor(
    private apiService: ApiService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.apiService.getAllContacts().subscribe((contactsList) => {
      this.contacts = contactsList
    });
  }

  editContact(contactId: number) {
    this.router.navigate(['edit', contactId]);
  }

  addContact() {
    this.router.navigate(['new']);
  }
}
