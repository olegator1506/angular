import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Feed} from './model';
import {Observable} from 'rxjs';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class YmService {
  private baseUrl:string = 'http://localhost:3000/';
  constructor(private http: HttpClient){ }
  getFeeds(): Observable<Feed[]> {
    let url = `${this.baseUrl}feed`;
//    if(type) url += `?type=${type}`;
    return this.http.get(url).pipe(map((response : any) => {
        return response;
      }));
   }

}
