import { Component, OnInit, Input } from '@angular/core';
import { PlayList } from '../model';

@Component({
  selector: 'app-pl-collection',
  templateUrl: './pl-collection.component.html',
  styleUrls: ['./pl-collection.component.scss']
})
export class PlCollectionComponent implements OnInit {
  @Input("title")
    title : string = "";
  @Input("collection")
    collection : PlayList[] = [];  

  public showScroll : boolean = false;  
  constructor() { }

  ngOnInit(): void {
  }

}
