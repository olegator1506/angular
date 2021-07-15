import { Component, OnInit, Input } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { PlayList, Collection,Track } from '../model';
import { TarckListModalComponent } from '../tarck-list-modal/tarck-list-modal.component';
import { DragScrollModule } from 'ngx-drag-scroll';
import { YmService } from '../ym.service';

@Component({
  selector: 'app-pl-collection',
  templateUrl: './pl-collection.component.html',
  styleUrls: ['./pl-collection.component.scss']
})
export class PlCollectionComponent implements OnInit {
  @Input("collection")
    entity : Collection = new Collection("",[]);  

  public showScroll : boolean = false;  
  public tracks : Track[] = [];
  private _selectedPlayList : PlayList = new PlayList();
  constructor(private dialog : MatDialog, private ymService : YmService) { }
  openPlayList(playlist : PlayList) {
    this._selectedPlayList = playlist
    if(this.tracks.length == 0) {
      this.ymService.getPlayListContent(playlist).subscribe(
        (data : Track[])=>{
          this.tracks = data;
          let dialog = this.dialog.open(
            TarckListModalComponent,
            {data:{
              title:this.entity.title,
              trackList:this.tracks
            }}
          );
        });
      }    
  }
  ngOnInit(): void {
  }

}
