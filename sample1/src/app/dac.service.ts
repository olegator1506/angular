import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Collection, Cover, PlayList,YmData,Track} from './model';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DacService {
  private baseUrl:string = 'http://localhost:8000/';
  constructor(private http: HttpClient) {}
  sendTracks(tracks :Track[]) : Observable<any> {
    let url = `${this.baseUrl}?cmd=player&op=loadplaylist`;
    return this.http.post(url,{tracks:tracks});
  }
}
