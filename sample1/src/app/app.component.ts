import { NgModule, Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Collection, YmData } from './model';
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

}
