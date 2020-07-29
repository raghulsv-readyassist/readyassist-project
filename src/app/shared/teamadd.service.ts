import { Injectable } from '@angular/core';
import { Teamadd } from './teamadd.model';
import {HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class TeamaddService {
  formdata: Teamadd;
  list: Teamadd[];
  readonly rootURL = "http://[::1]:3000/teammasters/"

  constructor(private http: HttpClient) { }
  postTeam(formdata:Teamadd){
   return this.http.post(this.rootURL,formdata)

  }
  refreshList()
  {
    this.http.get(this.rootURL)
    .toPromise().then(res => this.list = res as Teamadd[]);
  }
  deleteTeam(id:number){
    return this.http.delete(this.rootURL+id);
  }
}
