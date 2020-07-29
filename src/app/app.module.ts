import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TeammasterComponent } from './teammaster/teammaster.component';
import { TeamaddComponent } from './teammaster/teamadd/teamadd.component';
import { TeamviewComponent } from './teammaster/teamview/teamview.component';
import { TeamaddService } from './shared/teamadd.service';
import {FormsModule} from '@angular/forms'
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
 
import { ToastrModule } from 'ngx-toastr';



@NgModule({
  declarations: [
    AppComponent,
    TeammasterComponent,
    TeamaddComponent,
    TeamviewComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
    
    
  ],
  providers: [TeamaddService],
  bootstrap: [AppComponent]
})
export class AppModule { }
