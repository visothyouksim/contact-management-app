import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Contact } from '../models/contact.model';

@Component({
  selector: 'app-edit-contact',
  templateUrl: './edit-contact.component.html',
  styleUrls: ['./edit-contact.component.scss'],
})
export class EditContactComponent implements OnInit {
  editContactForm: FormGroup;
  contact: Contact;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.editContactForm = this.fb.group({
      nom: ['', Validators.required],
      prenom: ['', Validators.required],
      email: [''],
      telephone: [''],
      adresse: ['']
    });

    // Vérification de la réception des données
    console.log('Received state:', history.state);
    this.contact = history.state.contact || { nom: '', prenom: '', email: '', telephone: '', adresse: '' };
  }

  ngOnInit() {
    if (this.contact) {
      this.editContactForm.patchValue(this.contact);
    }
  }

  modifierContact() {
    if (this.editContactForm.valid) {
      const updatedContact = this.editContactForm.value;
      // Sauvegarder les modifications (par exemple, localStorage, service, etc.)
      const contacts = JSON.parse(localStorage.getItem('contacts') || '[]');
      const index = contacts.findIndex((c: Contact) => c.nom === this.contact.nom && c.prenom === this.contact.prenom);
      if (index !== -1) {
        contacts[index] = updatedContact;
        localStorage.setItem('contacts', JSON.stringify(contacts));
      }
      this.router.navigateByUrl('/');
    }
  }
}
