import { NgModule, Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Collection, YmData, Track, PlayList } from './model';
import { YmService } from './ym.service';
import { PlCollectionComponent } from './pl-collection/pl-collection.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers:[YmService]
})
export class AppComponent {
  title = 'sample1';
  public tracks : Track[] = [];
  public tracksLoaded : boolean = false;
  public selectedPlaylist !: PlayList;
  public selectedTrackNum : number = -1;
  public playListOwner : number = 0;
  ymData : YmData = new YmData;
  showScroll : boolean = false;
  constructor (private ymServise : YmService){
  }

  ngOnInit(){
    this.ymServise.getData().subscribe(
      (data : YmData)=>{
        this.ymData = data;
      });
  }

  getPlaylistContent(playlist : PlayList) : void {
    this.tracksLoaded = false;
    this.tracks = [];
    this.ymServise.getPlayListContent(playlist).subscribe(
      (data : Track[])=>{
        this.tracks = data;
        this.tracksLoaded = true;
        this.selectedTrackNum = 0;
      });    
  } 
  
  playlistSelectHandler(playlist:PlayList){
    this.selectedPlaylist = playlist; 
    this.getPlaylistContent(playlist);
    this.playListOwner = playlist.uid |0;
  }


 

}
