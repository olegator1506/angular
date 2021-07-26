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
  public playState :boolean = false;
  
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
      
    });
    if(this.tracks == undefined) return;
    if(this.tracks.length == 0) return;
    this.tracknum = 0;
    this.shuffle  = false;
    this.repeat = false;
    this.playState = true;
    
   }
   playToggle(){
     if(this.playState)
      this.pause();
     else
      this.play() 
   }
   pause(){
     this.playState = false;
   }
   play(){
    this.playState = true;
   }
   prevTrack(){
     if(this.tracknum < 1) return;
     this.tracknum--;
   }
   nextTrack(){
    if(this.tracknum == (this.tracks.length -1)) return;
    this.tracknum++;
  }
 
}
