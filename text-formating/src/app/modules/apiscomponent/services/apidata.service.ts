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

  constructor(private http : HttpClient) {

   }

   setId(id : any){
    this.id = id;
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





  //  getCommentsData(){
  //   this.url = 'https://jsonplaceholder.typicode.com/comments'
  //   return this.http.get(this.url);
  //  }

  //  getAlbumsData(){
  //   this.url = 'https://jsonplaceholder.typicode.com/albums';
  //   return this.http.get(this.url);
  //  }

  //  getPhotosData(){
  //   this.url = 'https://jsonplaceholder.typicode.com/photos';
  //   return this.http.get(this.url);
  //  }

  //  getTodosData(){
  //   this.url = 'https://jsonplaceholder.typicode.com/todos';
  //   return this.http.get(this.url);
  //  }
}
