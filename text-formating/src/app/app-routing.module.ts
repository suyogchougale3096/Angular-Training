import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserdataComponent } from './modules/userdata/userdata.component';
import { ApiscomponentComponent } from './modules/apiscomponent/apiscomponent.component';
import { HighchartsComponent } from './modules/highcharts/highcharts.component';
import { GojsComponent } from './modules/gojs/gojs.component';


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
  },
  {
    path : 'apis', component : ApiscomponentComponent
  },
  {
    path : 'highcharts', component : HighchartsComponent
  },
  {
    path : 'gojs', component : GojsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
