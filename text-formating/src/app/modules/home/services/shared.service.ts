import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  private inputData : Subject<string> = new Subject<string>();

  inputDataChange : Observable<string> = this.inputData.asObservable();
  constructor() { }

  setDataChange(data : string){
    this.inputData.next(data);
  }
}
