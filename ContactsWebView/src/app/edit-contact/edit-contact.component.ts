import { Component, OnInit } from '@angular/core';
import { Contact } from '../../model/contact.model';
import {ActivatedRoute, Router} from '@angular/router';
import {ContactsService} from '../../services/contacts.service';

@Component({
  selector: 'app-edit-contact',
  templateUrl: './edit-contact.component.html',
  styleUrls: ['./edit-contact.component.css']
})
export class EditContactComponent implements OnInit {
  contact: Contact = new Contact();
  mode: Number = 1;
  idContact: Number;
  constructor(
    public activatedRoute: ActivatedRoute,
    public contactsService: ContactsService,
    public router: Router
  ) {
    this.idContact = activatedRoute.snapshot.params['id'];
   }

  ngOnInit() {
    this.contactsService.getContact(this.idContact).subscribe(data => {
      this.contact = data;
    }, err => {
      console.error(err);
    });
  }

  editContact() {
    this.contactsService.editContact(this.contact).subscribe(data => {
      alert('Update with success');
      this.router.navigate(['/contact']);
    }, err => {
      console.error(err);
    });
  }

}
