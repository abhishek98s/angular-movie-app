import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewsTopPageComponent } from './news-top-page/news-top-page.component';

const routes: Routes = [
  { path: '', redirectTo: "top", pathMatch: 'full' },
  { path: 'top', component: NewsTopPageComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NewsRoutingModule { }
