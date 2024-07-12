import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GojsRoutingModule } from './gojs-routing.module';
import { GojsComponent } from './gojs.component';


@NgModule({
  declarations: [
    GojsComponent
  ],
  imports: [
    CommonModule,
    GojsRoutingModule,
  ]
})
export class GojsModule { }
