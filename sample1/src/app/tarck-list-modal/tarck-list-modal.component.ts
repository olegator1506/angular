import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

import { Track } from '../model';
import { YmService } from '../ym.service';
@Component({
  selector: 'app-tarck-list-modal',
  templateUrl: './tarck-list-modal.component.html',
  styleUrls: ['./tarck-list-modal.component.scss']
})
export class TarckListModalComponent implements OnInit {
  displayedColumns: string[] = ['actions','name'];
  constructor(@Inject(MAT_DIALOG_DATA) public data: {title:string,trackList: Track[]}) { 

  }

  ngOnInit(): void {
  }

}
