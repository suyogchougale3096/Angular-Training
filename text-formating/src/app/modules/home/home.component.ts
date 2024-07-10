import { ChangeDetectorRef, Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  btn_class : any;
  constructor() { }

  ngOnInit(): void {
  }

  updateData(item : any){
    this.btn_class = item;
    console.log(this.btn_class)
  }

}
