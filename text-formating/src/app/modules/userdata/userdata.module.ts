import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { UserdataRoutingModule } from './userdata-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { UserdataComponent } from './userdata.component';
import { CookieService } from 'ngx-cookie-service';



@NgModule({
  declarations: [
    UserdataComponent
  ],
  imports: [
    CommonModule,
    UserdataRoutingModule,
    ReactiveFormsModule
  ],
  providers: [CookieService]
})
export class UserdataModule { }
