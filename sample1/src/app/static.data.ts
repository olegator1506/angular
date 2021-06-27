import {Injectable} from "@angular/core";
import { Observable } from "rxjs";
import {Cover, Track, Feed } from './model';
import "rxjs/add/observable/from";

@Injectable()
export class StaticDataSource {
    private feeds : Feed[] = [];
    getFeeds() : Observable<Feed[]> {
        return Observable.from([this.feeds]);
    }
}