import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserdataComponent } from './modules/userdata/userdata.component';


const routes: Routes = [
  {
    path : 'home', loadChildren : ()=> import('./modules/home/home.module').then(m => m.HomeModule)
  },
  {
    path : '', redirectTo : '/home', pathMatch : 'full'
  },
  {
    path : 'userdata', component : UserdataComponent
    // path : 'userdata', loadChildren : ()=> import('./modules/userdata/userdata.module').then(m => m.UserdataModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
