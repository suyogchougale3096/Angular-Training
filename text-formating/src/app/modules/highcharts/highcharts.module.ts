import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HighchartsRoutingModule } from './highcharts-routing.module';
import { HighchartsComponent } from './highcharts.component';
import { HighchartsChartModule } from 'highcharts-angular';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    HighchartsComponent
  ],
  imports: [
    HighchartsChartModule,
    CommonModule,
    HighchartsRoutingModule,
    FormsModule
  ]
})
export class HighchartsModule { }
