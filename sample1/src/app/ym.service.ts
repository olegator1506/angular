import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Collection, Cover, PlayList} from './model';
import {Observable} from 'rxjs';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})

export class YmService {
  private baseUrl:string = 'http://localhost:3000/collection';
  constructor(private http: HttpClient){ }
  getCollection(): Observable<Collection> {
    return this.http.get(this.baseUrl).pipe(map((data : any) => {
      var feeds : PlayList[] = [];
      data.feed.generatedPlaylists.forEach((el : any) => {
        let coverData = el.data.cover;
        let cover = new Cover(coverData.type, coverData.dir, coverData.version, coverData.custom, `https://avatars.yandex.net${coverData.dir}200x200`);
        feeds.push(new PlayList(
          el.data.uid,
          el.type,
          el.data.title,
          el.data.description,
          el.data.created,
          el.data.modified,
          el.data.trackCount,
          el.data.durationMs,
          cover
      ));  
    });
    var landings : PlayList[] = []; 
    data.landings.forEach((land : any) => {
      let landType = land.blocks[0].type;
      let landTitle = land.blocks[0].title;
      land.blocks[0].entities.forEach((ent:any) => {
        if(ent.data.data === undefined) 
          return;
        let plType = ent.data.type;
        let plData = ent.data.data;
        let coverData = plData.cover;
        let cover = new Cover(coverData.type, coverData.dir, coverData.version, coverData.custom, `https://avatars.yandex.net${coverData.dir}200x200`);
        landings.push(new PlayList(
          plData.uid,
          plType,
          plData.title,
          plData.description,
          plData.created,
          plData.modified,
          plData.trackCount,
          plData.durationMs,
          cover
      ));  

          
      }); 
    });
    return new Collection(feeds,landings);
   }));
  }

}
