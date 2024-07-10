import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserdataModule } from './modules/userdata/userdata.module';
import { HttpClientModule } from '@angular/common/http';
import { ApiscomponentModule } from './modules/apiscomponent/apiscomponent.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UserdataModule,
    HttpClientModule,
    ApiscomponentModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
