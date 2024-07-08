import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ApidataService } from './services/apidata.service';

@Component({
  selector: 'app-apiscomponent',
  templateUrl: './apiscomponent.component.html',
  styleUrls: ['./apiscomponent.component.css']
})
export class ApiscomponentComponent implements OnInit {

  id : any = '';
  info : any = '';
  btn_value : any = '';

  flag : boolean = true;

  constructor(private data : ApidataService) { 
    
  }
  ngOnInit(): void {
    
  }

  setId(){
    this.data.setId(this.id);
  }

  getbtn(event : any){
    this.btn_value = event.target.id;
    this.data.setEndPoint(event.target.id)
    this.data.getData().subscribe((apiInfo) =>{
      this.info = apiInfo;
      console.log(this.info);
    })
  }

}
