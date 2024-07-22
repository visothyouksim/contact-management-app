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
  filteredContacts: Contact[] = [];
  selectedContact: Contact | null = null;
  searchText: string = '';

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
      this.filterContacts();
    }
  }

  supprimerContact(index: number) {
    this.contacts.splice(index, 1);
    this.saveContacts();
    this.filterContacts();
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
      this.filterContacts();
    }
  }

  filterContacts() {
    this.filteredContacts = this.contacts.filter(contact =>
      contact.nom.toLowerCase().includes(this.searchText.toLowerCase()) ||
      contact.prenom.toLowerCase().includes(this.searchText.toLowerCase())
    );
  }

  onSearchChange(event: any) {
    this.searchText = event.target.value;
    this.filterContacts();
  }
}
