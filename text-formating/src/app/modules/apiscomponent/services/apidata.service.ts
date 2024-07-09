import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { ApiscomponentComponent } from '../apiscomponent.component';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApidataService {

  url : string = 'https://jsonplaceholder.typicode.com';
  endpoint = '';
  id = '';
  input_body : any;

  information : any = {}
  constructor(private http : HttpClient) {
   }

   setId(id : any){
    this.id = id;
   }

   setInputBody(temp : any){
    this.input_body = temp;
   }
   setEndPoint(endpoint : any){
    this.endpoint = endpoint;
   }

   getData(){
    return this.http.get<any>(`${this.url}/${this.endpoint}/${this.id}`)
   }

   deleteUser(num : number){
    return this.http.delete<any>(`${this.url}/comments/${this.id}`)
   }

   createData(temp : any){
    this.information = {
      'id' : this.id,
      'body' : this.input_body
    }
    return this.http.post<any>(`${this.url}/${this.endpoint}/`,this.information)
   }

   updateUser(temp : any){
    this.information = {
      'body' : this.input_body
    }
    return this.http.put<any>(`${this.url}/${this.endpoint}/${this.id}`,this.information)
   }
}
