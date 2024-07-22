import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { EditContactComponent } from './edit-contact/edit-contact.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [AppComponent, EditContactComponent],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule.forRoot(),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
