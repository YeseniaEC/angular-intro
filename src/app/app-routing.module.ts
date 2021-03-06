import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { TodoComponent } from './todo/todo.component';
import { HeroComponent } from './hero/hero.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { AmiibosComponent } from './amiibos/amiibos.component';
import { AmiiboComponent } from './amiibo/amiibo.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  // the open path here will redirect the page to the home component view
  { path: 'contact', component: ContactComponent },
  { path: 'todo', component: TodoComponent },
  { path: 'hero', component: HeroComponent },
  { path: 'hero/:id', component: HeroDetailComponent },
  { path: 'amiibos', component: AmiibosComponent },
  { path: 'amiibo/:id', component: AmiiboComponent }, // this calls individual amiibo when we click view
  { path: 'amiibos/:category/:value', component: AmiibosComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
