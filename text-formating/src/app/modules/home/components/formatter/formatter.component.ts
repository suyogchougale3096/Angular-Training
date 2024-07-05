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

  constructor(private _sharedService : SharedService) { 
    
  }
  @Output() clearallClicked = new EventEmitter<any>();
  ngOnInit(): void {
    this._sharedService.dataChange.subscribe(data =>{
      this.text1 = data;
      this.char_count = this.text1.length;
      let temp = this.text1.trim().split(" ");
      this.word_count = temp.length;
      if(this.char_count == 0) this.word_count = 0;
    })
  }

}
