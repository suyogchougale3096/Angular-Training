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

  flag : boolean = false;

  constructor(private data : ApidataService) {

  }
  ngOnInit(): void {
  }

  setId(){
    this.data.setId(this.id);
  }

  onDeleteData(){
    this.data.deleteUser(this.id).subscribe(
      (response) => console.log(response)
    )
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
        this.errorMsg = ''; // Clear error message on successful response
      }
    },(err) =>{
      this.errorMsg = err.message;
    });
  }


  operations(event : any){
    // console.log(event.target.id);
    if(event.target.id == 'deletebtn'){
      this.onDeleteData()
    }
  }

}
