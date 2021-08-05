import { Component, OnInit,Input, Output, SimpleChange } from '@angular/core';
import {Subject, Observable} from 'rxjs';
import { Track } from '../model';
import { DacService} from '../dac.service';
//import {MatSnackBar} from '@angular/material/snack-bar';


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
  public plLoading : boolean = false;  
  public message : string = '';
  public shuffle : boolean = false;
  public repeat : boolean = false;
  public isPaused :boolean = false;
  public isPlaying : boolean = false;
  public curTrackTitle : string = "";
  public curTrackArtist : string = "";
  public error : string = "";
  public totalTracks : number = 0;
  
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
  listReady() : boolean {
    return ((this.tracks.length > 0) && !this.plLoading);
  }
  handleTrackListChange() {
    if(this.tracks.length == 0) return;
    this.plLoading = true;
    this.dacService.sendTracks(this.tracks,this.owner).subscribe((response:any) =>{
      this.plLoading = false;
      this.play();
    },(response:any)=>{
      this.plLoading = false;
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
    this.plLoading = true;
    this.dacService.sendCommand('play').subscribe((response:any)=>{
      this.plLoading = false;
      this.updateStatus(response);
    });

  }
   prevTrack(){
//     if(this.tracknum < 1) return;
     this.dacService.sendCommand('prev').subscribe((response:any)=>{
      this.updateStatus(response);
    });
     
     
   }
   nextTrack(){
//    if(this.tracknum == (this.tracks.length -1)) return;
    this.dacService.sendCommand('next').subscribe((response:any)=>{
      this.updateStatus(response);
    },(err:any)=>{
      this.showError(err.message);
    });
}
  updateStatus(response : any) {
    let data : any = response.data; 
    this.isPaused = data.is_paused;
    this.isPlaying = data.is_playing;
    this.curTrackTitle = data.track_title;
    this.curTrackArtist = data.track_artist;
    this.tracknum = data.track_num;
    this.totalTracks = data.total_tracks;
  }
  showError(errmess :string) :void {
    this.error = errmess;
  }
}
