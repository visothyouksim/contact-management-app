import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { EditContactComponent } from './edit-contact/edit-contact.component';

const routes: Routes = [
  { path: '', component: AppComponent },
  { path: 'edit-contact', component: EditContactComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
