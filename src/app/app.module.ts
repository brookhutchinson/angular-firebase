// modules
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// components
import { AppComponent }  from './app.component';

@NgModule({
  // modules
  imports: [ BrowserModule ],
  // components
  declarations: [ AppComponent ],
  // services
  providers: [],
  // bootstrap
  bootstrap: [ AppComponent ]
})
export class AppModule {}