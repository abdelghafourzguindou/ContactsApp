import { Component, OnInit } from '@angular/core';
import {ContactsService} from '../../services/contacts.service';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.css']
})
export class AddContactComponent implements OnInit {

  constructor(public contactsService: ContactsService) { }

  ngOnInit() {
  }

  onSaveContact(formDate) {
    this.contactsService.saveContact(formDate).
      subscribe(data => {
        console.log('Oky');
      }, err => {
        console.error(JSON.parse(err.body).message);
      });
  }

}
