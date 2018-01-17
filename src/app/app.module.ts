// modules
import { NgModule }                  from '@angular/core';
import { BrowserModule }             from '@angular/platform-browser';
import { HttpClientModule }          from '@angular/common/http';
import { AngularFireModule }         from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule }     from 'angularfire2/auth';

// components
import { AppComponent }              from './app.component';
import { NavbarComponent }           from './components/navbar/navbar.component';

// environment
import { environment }               from './../environments/environment';

@NgModule({
  // modules
  imports: [ BrowserModule, HttpClientModule, AngularFireModule.initializeApp(environment.firebase), AngularFireDatabaseModule, AngularFireAuthModule ],
  // components
  declarations: [ AppComponent, NavbarComponent ],
  // services
  providers: [],
  // bootstrap
  bootstrap: [ AppComponent ]
})
export class AppModule {}