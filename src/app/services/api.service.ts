import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { ContactInterface } from '../main/models/contact.model';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  baseUrl= environment.baseUrl;

  constructor(
    private http: HttpClient
  ) { }

  getAllContacts() {
    return this.http.get<ContactInterface[]>(this.baseUrl + 'contacts');
  }

  getContactData(contactId: number) {
    return this.http.get<ContactInterface>(this.baseUrl + 'contacts/' + contactId);
  }

  addContact(contactData: ContactInterface) {
    return this.http.post<ContactInterface>(this.baseUrl + 'contacts', {...contactData});
  }

  updateContact(contactId: number, contactData: ContactInterface) {
    return this.http.put<ContactInterface>(this.baseUrl + 'contacts/' + contactId, {...contactData});
  }

  deleteContact(contactId: number) {
    return this.http.delete(this.baseUrl + 'contacts/' + contactId);
  }
}
