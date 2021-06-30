import { NgModule, Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Collection } from './model';
import { YmService } from './ym.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers:[YmService]
})
export class AppComponent {
  title = 'sample1';
  collection : Collection = new Collection;
  showScroll : boolean = false;
  constructor (private ymServise : YmService){
  }

  ngOnInit(){
    this.ymServise.getCollection().subscribe(
      (data : Collection)=>{
        this.collection = data;
      });
  }

}
