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
  errorMsg: string = '';
  input_body : any= '';
  flag : boolean = false;
  method : any;

  information = {
    "id": this.id,
    "body" : this.input_body
  }

  storedData : any= {}
  constructor(private data : ApidataService) {

  }
  ngOnInit(): void {
  }

  setId(){
    this.data.setId(this.id);
  }

  onCreateData(){
    this.data.setInputBody(this.input_body);
    this.data.createData(this.id).subscribe(
      (response) => {
        this.info = response
      }
    );
  }

  onUpdateData(){
    this.data.setInputBody(this.input_body);
    this.data.updateUser(this.id).subscribe();
  }

  onDeleteData(){
    this.data.deleteUser(this.id).subscribe()
  }

  getbtn(event: any) {

    if (!this.id.trim()) {
      this.errorMsg = 'User ID cannot be blank.';
      return;
    }
    this.btn_value = event.target.id;
    console.log(this.btn_value)
    this.data.setEndPoint(event.target.id);
    this.data.getData().subscribe(apiInfo => {
      if (apiInfo) {
        this.info = apiInfo;
        console.log(this.info);
        this.errorMsg = '';
      }
    },(err) =>{
      this.errorMsg = err.message;
      this.info = '';
    });
  }


  operations(event : any){
    this.method = event.target.id;
    if(event.target.id == 'deletebtn'){
      this.onDeleteData()
    }else if(event.target.id == 'createbtn'){
      this.data.setEndPoint(this.btn_value);
      this.onCreateData();
      console.log(this.id);
    }else if(event.target.id == 'updatebtn'){
      this.data.setEndPoint(this.btn_value);
      this.onUpdateData();
    }
  }

}
