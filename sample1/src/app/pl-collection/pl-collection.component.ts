import { Component, OnInit, Input } from '@angular/core';
import { PlayList, Collection,Track } from '../model';
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
  constructor(private ymService : YmService) { }
  openPlayList(playlist : PlayList) {
    if(this.tracks.length == 0) {
      this.ymService.getPlayListContent(playlist).subscribe(
        (data : Track[])=>{
          this.tracks = data;
        });
      }    
  }
  ngOnInit(): void {
  }

}
