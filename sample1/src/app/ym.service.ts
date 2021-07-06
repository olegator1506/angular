import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Collection, Cover, PlayList,YmData,Track} from './model';
import {Observable} from 'rxjs';
import { map } from 'rxjs/operators';
@Injectable()
export class YmService {
  private baseUrl:string = 'http://localhost:3000/collection';
  constructor(private http: HttpClient){ }

  private _parseLandings(data : any) : PlayList[]{
    let result : PlayList[] = [];
    data.forEach((land : any) => {
      let landType = land.blocks[0].type;
      let landTitle = land.blocks[0].title;
      land.blocks[0].entities.forEach((ent:any) => {
        if(ent.data.data === undefined) 
          return;
        let plType = ent.data.type;
        let plData = ent.data.data;
        let coverData = plData.cover;
        let cover = new Cover(coverData.type, coverData.dir, coverData.version, coverData.custom, `https://avatars.yandex.net${coverData.dir}200x200`);
        result.push(new PlayList(
          plData.uid,
          plType,
          plData.title,
          plData.description,
          plData.created,
          plData.modified,
          plData.trackCount,
          plData.durationMs,
          cover,
          []
      ));  
     }); 
    });
    return result;
  }
  private _getCover(data:any) : Cover {
    let coverData = data.cover;
    let uri = '';
    if(coverData.dir != undefined)
      uri = `https://avatars.yandex.net${coverData.dir}200x200`;
    else if(Array.isArray(coverData.itemsUri))  {
      uri = 'https://' + coverData.itemsUri.shift().replace('%%','200x200');
    } 
    return  new Cover(coverData.type, coverData.dir, coverData.version, coverData.custom, uri);
  }
  getData(): Observable<YmData> {
    var l = location;
    var url : string  = `${location.protocol}//${location.hostname}:3000/collection`;
    return this.http.get(url).pipe(map((data : any) => {
      var result : YmData = new YmData();
      let pll : PlayList[] = [];
      data.playLists.forEach((el : any) => {
        pll.push(new PlayList(el.uid, "owned", el.title, "", el.created, el.modified, el.trackCount,el.durationMs,this._getCover(el),[]));
       });
      result.addCollection("Мои плейлисты",pll); 
      var feeds : PlayList[] = [];
      data.feed.generatedPlaylists.forEach((el : any) => {
           var tracks = el.data.tracks;
           var trackUids : number[] = [];
           tracks.forEach((element : any) => {
             trackUids.push(element.id);
           });
           503646255
        feeds.push(new PlayList(
          el.data.uid,
          el.type,
          el.data.title,
          el.data.description,
          el.data.created,
          el.data.modified,
          el.data.trackCount,
          el.data.durationMs,
          this._getCover(el.data),
          trackUids
      ));  
     });
     result.addCollection("Рекомендации",feeds);
//    var landings : PlayList[] = this._parseLandings(data.landings); 
      return result;
   }));
  }

  getPlayListContent(plUid : number) : Observable<Track[]> {
    var url = `http://localhost:8000/responder.php?action=playlisttracks&playlist=${plUid}`;
    return this.http.get(url).pipe(map((data : any)=>{
      var result : Track[] = [];
      result.push(new Track(1,"Song name","Artist",100000,"",""));
      return result;
    }));
  }

}
