import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserdataRoutingModule } from './userdata-routing.module';
import { UserdataComponent } from './userdata/userdata.component';


@NgModule({
  declarations: [
    UserdataComponent
  ],
  imports: [
    CommonModule,
    UserdataRoutingModule
  ]
})
export class UserdataModule { }
