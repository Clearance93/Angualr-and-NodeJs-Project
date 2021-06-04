import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OnlinetestComponent } from './onlinetest/onlinetest.component';
import { BackgroundDirective } from './background.directive';
import { HeaderComponent } from './header/header.component';
import { ServiceComponent } from './service/service.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { BlogComponent } from './blog/blog.component';
import { HomeComponent } from './home/home.component';
import { EmployeesComponent } from './employees/employees.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CandidateFormComponent } from './candidate-form/candidate-form.component';
import { NewsLetterComponent } from './news-letter/news-letter.component';

@NgModule({
  declarations: [
    AppComponent,
    OnlinetestComponent,
    BackgroundDirective,
    HeaderComponent,
    ServiceComponent,
    AboutComponent,
    ContactComponent,
    BlogComponent,
    HomeComponent,
    EmployeesComponent,
    DashboardComponent,
    CandidateFormComponent,
    NewsLetterComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
