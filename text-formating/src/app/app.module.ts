import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { TextDisplayComponent } from './components/home/text-display/text-display.component';
import { FormatterComponent } from './components/home/formatter/formatter.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TextDisplayComponent,
    FormatterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
