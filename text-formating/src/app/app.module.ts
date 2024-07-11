import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserdataModule } from './modules/userdata/userdata.module';
import { HttpClientModule } from '@angular/common/http';
import { ApiscomponentModule } from './modules/apiscomponent/apiscomponent.module';
import { HighchartsChartModule } from 'highcharts-angular';
import { HighchartsModule } from './modules/highcharts/highcharts.module';


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
    HighchartsModule
 ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
