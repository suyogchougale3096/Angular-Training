import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { FormatterComponent } from './components/formatter/formatter.component';
import { TextDisplayComponent } from './components/text-display/text-display.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    HomeComponent,
    FormatterComponent,
    TextDisplayComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    FormsModule
  ],
  providers :[]
})
export class HomeModule { }
