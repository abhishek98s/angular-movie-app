import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactTopPageComponent } from './contact-top-page/contact-top-page.component';

const routes: Routes = [
  { path: '', redirectTo: "top", pathMatch: 'full' },
  { path: "top", component: ContactTopPageComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContactUsRoutingModule { }
