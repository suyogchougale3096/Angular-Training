import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  private inputData : string = '';
  dataChange : EventEmitter<string> = new EventEmitter<string>();
  constructor() { }

  setDataChange(data : string){
    this.inputData = data;
    this.dataChange.emit(this.inputData);
  }
}
