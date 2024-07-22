import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
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
  isSearching: boolean = false;

  constructor(private fb: FormBuilder, private router: Router) {
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

    if (this.filteredContacts.length > 0) {
      this.selectedContact = this.filteredContacts[0];
    } else {
      this.selectedContact = null;
    }
  }

  onSearchChange(event: any) {
    this.searchText = event.target.value;
    this.isSearching = this.searchText.length > 0;
    this.filterContacts();
  }

  editContact() {
    if (this.selectedContact) {
      console.log('Navigating to edit page with contact:', this.selectedContact);
      this.router.navigate(['/edit-contact'], { state: { contact: this.selectedContact } });
    } else {
      console.log('No contact selected');
    }
  }
}
