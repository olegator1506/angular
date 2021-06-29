import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Feed, Cover} from './model';
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
    return this.http.get(url).pipe(map((data : any) => {
      var result : Feed[] = [];
      data.forEach((element : any) => {
        let coverData = element.cover;
        let cover = new Cover(coverData.type, coverData.dir, coverData.version, coverData.custom, `https://avatars.yandex.net${coverData.dir}200x200`);
        let item = new Feed(element.id, element.type, element.title, element.description,element.description,element.modified, cover);
        result.push(item);
      });
      return result;
      }));
   }

}
