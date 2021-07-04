import { Component, OnInit, Input } from '@angular/core';
import { PlayList, Collection } from '../model';
import { DragScrollModule } from 'ngx-drag-scroll';

@Component({
  selector: 'app-pl-collection',
  templateUrl: './pl-collection.component.html',
  styleUrls: ['./pl-collection.component.scss']
})
export class PlCollectionComponent implements OnInit {
  @Input("collection")
    entity : Collection = new Collection("",[]);  

  public showScroll : boolean = false;  
  constructor() { }

  ngOnInit(): void {
  }

}
