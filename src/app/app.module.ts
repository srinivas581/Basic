import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
 
import { AppComponent } from './app.component';
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { PortfoliioComponent } from './portfoliio/portfoliio.component';
import { TeamComponent } from './team/team.component';

const router:Routes=[
  {path:"home",component:HomeComponent },
  {path:"team",component:TeamComponent},
  {path:"contact",component:ContactComponent},
  {path:"aboutus",component:AboutusComponent},
  {path:"port",component:PortfoliioComponent},
  

]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactComponent,
    AboutusComponent,
    PortfoliioComponent,
    TeamComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(router)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
