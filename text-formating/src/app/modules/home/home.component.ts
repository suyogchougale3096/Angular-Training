import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  btn_class : any = '';
  constructor() { }

  ngOnInit(): void {
  }

  updateData(item : any){
    // alert(item)
    console.log("2")
    this.btn_class = item;
    // console.log(this.btn_class);
  }

}
