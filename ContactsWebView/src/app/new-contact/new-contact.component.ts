import { Component, OnInit } from '@angular/core';
import { Contact } from '../../model/contact.model';
import { ContactsService } from '../../services/contacts.service'; 

@Component({
  selector: 'app-new-contact',
  templateUrl: './new-contact.component.html',
  styleUrls: ['./new-contact.component.css']
})
export class NewContactComponent implements OnInit {
  contact: Contact = new Contact();
  mode: Number = 1;
  constructor(public contactsService: ContactsService) { }

  ngOnInit() {
  }

  saveContact() {
    this.contactsService.saveContact(this.contact).subscribe(data => {
      this.contact = data;
      this.mode = 2;
    }, err => {
      console.error('error');
    });
  }

}
