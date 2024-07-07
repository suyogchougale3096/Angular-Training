import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { SharedService } from '../../services/shared.service';


@Component({
  selector: 'app-formatter',
  templateUrl: './formatter.component.html',
  styleUrls: ['./formatter.component.css']
})
export class FormatterComponent implements OnInit {

  text1 : string = '';
  word_count = 0;
  char_count = 0;
  btn_id : any = '';
  color_id : any = '';


  // @Output() clickedButtonEvent = new EventEmitter<any>();

  constructor(private _sharedService : SharedService) { 
    
  }
  ngOnInit(): void {
    this._sharedService.dataChange.subscribe(data =>{
      this.text1 = data;
      this.char_count = this.text1.length;
      let temp = this.text1.trim().split(" ");
      this.word_count = temp.length;
      if(this.char_count == 0) this.word_count = 0;
    })
  }

  @Output() updateDataEvent = new EventEmitter<any>();

  getId(event : any){
    console.log("1")
    if(event.target.id == 'favcolor'){
      // alert("yes")
      this.color_id = event.target.value;
      this.updateDataEvent.emit(this.color_id)
    }else{
      this.btn_id = event.target.id;
      this.updateDataEvent.emit(this.btn_id)
      // alert("no")
    }
    }
    
}
