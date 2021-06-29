import { NgModule, Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Feed } from './model';
import { YmService } from './ym.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers:[YmService]
})
export class AppComponent {
  title = 'sample1';
  feeds : Feed[] = [];
  showScroll : boolean = false;
  constructor (private ymServise : YmService){
  }

  ngOnInit(){
    this.ymServise.getFeeds().subscribe(
      (data : Feed[])=>{
        this.feeds = data;
      });
  }

}
