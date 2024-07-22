import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Contact } from './models/contact.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  contactForm: FormGroup;
  contacts: Contact[] = [];
  selectedContact: Contact | null = null;

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      nom: ['', Validators.required],
      prenom: ['', Validators.required],
      email: [''],
      telephone: [''],
      adresse: ['']
    });
  }

  ngOnInit() {
    this.loadContacts();
  }

  ajouterContact() {
    if (this.contactForm.valid) {
      const newContact: Contact = this.contactForm.value;
      this.contacts.push(newContact);
      this.saveContacts();
      this.contactForm.reset();
    }
  }

  supprimerContact(index: number) {
    this.contacts.splice(index, 1);
    this.saveContacts();
  }

  selectContact(contact: Contact) {
    this.selectedContact = contact;
  }

  saveContacts() {
    localStorage.setItem('contacts', JSON.stringify(this.contacts));
  }

  loadContacts() {
    const storedContacts = localStorage.getItem('contacts');
    if (storedContacts) {
      this.contacts = JSON.parse(storedContacts);
    }
  }
}
