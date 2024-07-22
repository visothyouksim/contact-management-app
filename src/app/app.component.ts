import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Contact } from './models/contact.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
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

  ajouterContact() {
    if (this.contactForm.valid) {
      const newContact: Contact = this.contactForm.value;
      this.contacts.push(newContact);
      this.contactForm.reset();
    }
  }

  supprimerContact(index: number) {
    this.contacts.splice(index, 1);
  }

  selectContact(contact: Contact) {
    this.selectedContact = contact;
  }
}
