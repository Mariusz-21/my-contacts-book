import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactsListComponent } from './main/components/contacts-list/contacts-list.component';
import { EditContactComponent } from './main/components/edit-contact/edit-contact.component';
import { NewContactComponent } from './main/components/new-contact/new-contact.component';
import { ContactResolve } from './services/contact-resolve.service';


const routes: Routes = [
  {
    path: '', component: ContactsListComponent
  },
  {
    path: 'list', component: ContactsListComponent
  },
  {
    path: 'new', component: NewContactComponent
  },
  {
    path: 'edit/:id', component: EditContactComponent, resolve: {contact: ContactResolve}
  }
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
