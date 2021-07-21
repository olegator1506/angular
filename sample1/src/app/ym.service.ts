import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Collection, Cover, PlayList,YmData,Track} from './model';
import {Observable} from 'rxjs';
import { map } from 'rxjs/operators';
@Injectable()
export class YmService {
  private baseUrl:string = 'http://localhost:8080/responder.php';
  constructor(private http: HttpClient){ }
/*
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
*/
  private _parseFeeds(data:any) : PlayList[] {
    var result : PlayList[] = [];
    data.generatedPlaylists.forEach((el : any) => {
      var tracks = el.data.tracks;
      var trackUids : number[] = [];
      tracks.forEach((element : any) => {
        trackUids.push(element.id);
      });
      result.push(new PlayList(
        el.data.uid,
        el.data.kind,
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
    return result;
  }

  private _parseUserPlaylist(data:any) : PlayList[] {
    var result : PlayList[] = [];
    data.playLists.forEach((el : any) => {
      result.push(new PlayList(el.uid,el.kind, "owned", el.title, "", el.created, el.modified, el.trackCount,el.durationMs,this._getCover(el),[]));
    });
    result.push(this._parseLikedTracks(data.likedTracks));
    return result;
  } 
  
  private _parseLikedTracks(data : any) : PlayList {
    var trackIds : number[] = [];
    data.tracks.forEach((el : any) => {
      trackIds.push(el.id);
    });
    return new PlayList(data.uid, 0, 'likedTracks',"Избранные треки","То что мне нравится","","",trackIds.length, 0, new Cover(), trackIds);  
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
    return this.http.get(this.baseUrl).pipe(map((data : any) => {
      var result : YmData = new YmData();
      result.addCollection("Избранное", this._parseUserPlaylist(data));
      result.addCollection("Собрано для вас",this._parseFeeds(data.feed));
//    var landings : PlayList[] = this._parseLandings(data.landings); 
      return result;
   }));
  }

  getPlayListContent(playlist : PlayList) : Observable<Track[]> {

    var url = `${this.baseUrl}?action=playlisttracks`;
    var requestData = (playlist.trackUids.length == 0) ? {
        type:playlist.type,
        uid:playlist.uid,
        kind:playlist.kind
      } : {trackids:playlist.trackUids};
    return this.http.post(url,requestData).pipe(map((data : any)=>{
      var result : Track[] = [];
      data.tracks.forEach((el : any) => {
        result.push(new Track(el.id, el.title, el.artists[0].name,el.durationMs,el.coverUrl,el.ogImage));
      });
      return result;
    }));
  }

}
