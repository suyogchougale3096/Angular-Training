import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ApidataService } from './services/apidata.service';
import { catchError } from 'rxjs/operators';
import { of } from 'rxjs';

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

  // getbtn(event : any){
  //   this.btn_value = event.target.id;
  //   this.data.setEndPoint(event.target.id)
  //   this.data.getData().subscribe((apiInfo) =>{
  //     this.info = apiInfo;
  //     console.log(this.info);
  //   })
  // }

  getbtn(event: any) {

    if (!this.id.trim()) {
      this.errorMsg = 'User ID cannot be blank.';
      return;
    }
    this.btn_value = event.target.id;
    this.data.setEndPoint(event.target.id);
    this.data.getData().pipe(
      catchError(error => {
        this.errorMsg = 'Failed to fetch data. Please try again.'; // Set error message
        return of(null); // Return observable with null value to continue the stream
      })
    ).subscribe(apiInfo => {
      if (apiInfo) {
        this.info = apiInfo;
        console.log(this.info);
        this.errorMsg = ''; // Clear error message on successful response
      }
    });
  }

}
