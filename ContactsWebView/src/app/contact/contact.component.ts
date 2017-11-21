import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { Router } from '@angular/router';
import { Contact } from '../../model/contact.model';
import 'rxjs/add/operator/map';

import { ContactsService } from '../../services/contacts.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  pageContacts: any;
  keyWord: String = '';
  size: Number = 5;
  currentPage: Number = 0;
  pages: Array<number>;
  constructor(
    public http: Http,
    public contactsService: ContactsService,
    public router: Router) { }

  ngOnInit() { }

  doSearch() {
    this.contactsService.getContacts(this.keyWord, this.size, this.currentPage).subscribe(data => {
      this.pageContacts = data;
      this.pages = new Array(data.totalPages);
    }, err => {
      console.error('error loading data');
    });
  }

  search() {
    this.doSearch();
  }

  gotoPage(i: Number) {
    this.currentPage = i;
    this.doSearch();
  }

  onEditContact(id: number) {
    this.router.navigate(['edit-contact', id]);
  }

  onRemoveContact(contact: Contact) {
    const confirm = window.confirm('Are you sure ?');
    if (confirm) {
      this.contactsService.deleteContact(contact.id).subscribe(data => {
        this.pageContacts.content.splice(
          this.pageContacts.content.indexOf(contact), 1
        );
      }, err => {
        console.error(err);
      });
    }
  }

}
