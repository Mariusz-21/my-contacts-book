import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';

import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { TableModule } from 'primeng/table';
import { CalendarModule } from 'primeng/calendar';

import { AppComponent } from './app.component';
import { ContactsListComponent } from './main/components/contacts-list/contacts-list.component';
import { EditContactComponent } from './main/components/edit-contact/edit-contact.component';
import { NewContactComponent } from './main/components/new-contact/new-contact.component';
import { ApiService } from './services/api.service';
import { SharedModule } from './shared/shared.module';
import { ContactResolve } from './services/contact-resolve.service';


@NgModule({
  declarations: [
    AppComponent,
    ContactsListComponent,
    NewContactComponent,
    EditContactComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    SharedModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ButtonModule,
    InputTextModule,
    TableModule,
    CalendarModule
  ],
  providers: [
    ApiService,
    ContactResolve
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
