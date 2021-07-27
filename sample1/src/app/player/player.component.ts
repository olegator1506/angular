import { Component, OnInit,Input, Output, SimpleChange } from '@angular/core';
import {Subject, Observable} from 'rxjs';
import { Track } from '../model';
import { DacService} from '../dac.service';


interface IChanges {tracks : Track[], tracknum:number};  


@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss']
})
export class PlayerComponent implements OnInit {
  @Input("tracks")
    tracks : Track[] = []; 
  @Input("tracknum")
    tracknum : number = -1; 
  @Input("owner")
    owner : number = 0;  
  public message : string = '';
  public shuffle : boolean = false;
  public repeat : boolean = false;
  public isPaused :boolean = false;
  public isPlaying : boolean = false;
  public curTrackTitle : string = "";
  public curTrackArtist : string = "";
  
//  constructor(changeDetector : ChangeDetectorRef) { }
  constructor(private dacService : DacService) { }
  ngOnInit(): void {
  }
  ngOnChanges(changes : IChanges) : void {
    if(changes.tracks != undefined) {
//      var tracks : Track[] = changes.tracks.currentValue;
      this.handleTrackListChange();
    }
    
  }

  handleTrackListChange() {
    if(this.tracks.length == 0) return;
    this.dacService.sendTracks(this.tracks,this.owner).subscribe((response:any) =>{
      this.play();
    });
    if(this.tracks == undefined) return;
    if(this.tracks.length == 0) return;
    this.tracknum = 0;
    this.shuffle  = false;
    this.repeat = false;
   }
   
   playToggle(){
     if(!this.isPlaying) 
      this.play();
     else if(this.isPaused)
      this.play();
     else this.pause(); 
   }

   pause(){
      this.dacService.sendCommand('pause').subscribe((response:any)=>{
        this.updateStatus(response);
      });
   }
   play(){
    this.dacService.sendCommand('play').subscribe((response:any)=>{
      this.updateStatus(response);
    });

  }
   prevTrack(){
     if(this.tracknum < 1) return;
     this.tracknum--;
     
   }
   nextTrack(){
    if(this.tracknum == (this.tracks.length -1)) return;
    this.tracknum++;
  }
  updateStatus(response : any) {
    let data : any = response.data; 
    this.isPaused = data.is_paused;
    this.isPlaying = data.is_playing;
    this.curTrackTitle = data.track_title;
    this.curTrackArtist = data.track_artist;
  }
 
}
