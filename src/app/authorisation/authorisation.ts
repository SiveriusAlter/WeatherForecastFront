import {inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class Authorisation {
  http:HttpClient = inject(HttpClient);
//TODO Create autorisation class
  //login(payload:{username: string, password: string}){
    //return this.http.post<User>('login', payload, {})
  //}

}
