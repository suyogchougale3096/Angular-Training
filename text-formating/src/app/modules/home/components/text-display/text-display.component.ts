import { Component, OnInit } from '@angular/core';
import { SharedService } from '../../services/shared.service';

@Component({
  selector: 'app-text-display',
  templateUrl: './text-display.component.html',
  styleUrls: ['./text-display.component.css']
})
export class TextDisplayComponent implements OnInit {

  name : string = '';
  constructor(private _sharedService : SharedService) { }

  ngOnInit(): void {
  }

  display(){
    this._sharedService.setDataChange(this.name);
  }

}
