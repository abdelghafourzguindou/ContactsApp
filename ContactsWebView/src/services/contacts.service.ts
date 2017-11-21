import {Injectable} from '@angular/core';
import { Http } from '@angular/http';
import { Contact } from '../model/contact.model';

@Injectable()
export class ContactsService {
    constructor(public http: Http) {}

    getContacts(keyword: String, size: Number, page: Number) {
        return this.http.get('http://localhost:8080/searchContacts?mc=' + keyword + '&size=' + size + '&page=' + page)
        .map(resp => resp.json());
    }

    getContact(id: Number) {
        return this.http.get('http://localhost:8080/contacts/' + id)
        .map(resp => resp.json());
    }

    saveContact(contact: Contact) {
        return this.http.post('http://localhost:8080/contacts', contact)
        .map(resp => resp.json());
    }

    editContact(contact: Contact) {
        return this.http.put('http://localhost:8080/contacts/' + contact.id, contact)
        .map(resp => resp.json());
    }

    deleteContact(id: Number) {
        return this.http.delete('http://localhost:8080/contacts/' + id)
        .map(resp => resp.json());
    }
}
