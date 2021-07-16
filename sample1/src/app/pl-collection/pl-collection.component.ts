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
  private _selectedPlayList!: PlayList;
  public get selectedPlayList(): PlayList {
    return this._selectedPlayList;
  }
  public set selectedPlayList(value: PlayList) {
    this._selectedPlayList = value;
  }
  constructor(private dialog : MatDialog, private ymService : YmService) {

   }
  openPlayList(playlist : PlayList) {
    this._selectedPlayList = playlist;
    this.ymService.getPlayListContent(playlist).subscribe(
        (data : Track[])=>{
          this.tracks = data;
          let dialog = this.dialog.open(
            TarckListModalComponent,
            {data:{
              title:this._selectedPlayList.title,
              trackList:this.tracks
            }}
          );
        });
  }
  ngOnInit(): void {
  }

}
