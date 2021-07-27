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

  sendTracks(tracks :Track[],owner:number = 0) : Observable<any> {
    let url = `${this.baseUrl}?cmd=player&op=loadplaylist`;
    return this.http.post(url,{tracks:tracks,owner:owner});
  }
  sendCommand(cmd : string) : Observable<any> {
    let url = `${this.baseUrl}?cmd=player&op=${cmd}`;
    return this.http.get(url);
  }
}
