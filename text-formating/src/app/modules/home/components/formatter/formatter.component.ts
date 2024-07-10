import { Component, OnInit, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
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
  favcolor : any;

  passBtnData = {
    btn_value : '',
  }

  @Output() updateDataEvent = new EventEmitter<any>();

  constructor(private _sharedService : SharedService) {
  }


  ngOnInit(): void {
    this._sharedService.inputDataChange.subscribe(data =>{
      this.text1 = data;
      this.char_count = this.text1.length;
      let temp = this.text1.trim().split(" ");
      this.word_count = temp.length;
      if(this.char_count == 0) this.word_count = 0;
    })
  }

  getId(event : any){
    if(event.target.id == 'favcolor'){
      // this.color_id = event.target.value;
      this.updateDataEvent.emit(event.target.value)
    }else{
      this.passBtnData = {
        btn_value : event.target.id,
      }
      this.updateDataEvent.emit(this.passBtnData)
    }
    }

}
