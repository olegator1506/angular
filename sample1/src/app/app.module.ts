import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
// Карусель
import { DragScrollModule } from 'ngx-drag-scroll';
// ---------- Material design components -------------- //
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import { MatSliderModule } from '@angular/material/slider';
import { MatButtonModule } from '@angular/material/button';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import { MatCheckboxModule } from '@angular/material/checkbox';
import {MatBottomSheetModule} from '@angular/material/bottom-sheet';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { PlCollectionComponent } from './pl-collection/pl-collection.component';
import { TarckListModalComponent } from './tarck-list-modal/tarck-list-modal.component';
// модальный диалог
import {MatDialogModule} from '@angular/material/dialog';
// Таблица
import {MatTableModule} from '@angular/material/table';
// Списки
import {MatListModule} from '@angular/material/list';
import { PlayerComponent } from './player/player.component';
// Спиннер
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
// SnackBar
//import {MatSnackBar} from '@angular/material/snack-bar';

@NgModule({
  declarations: [
    AppComponent,
    PlCollectionComponent,
    TarckListModalComponent,
    PlayerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    DragScrollModule,
    MatCardModule,
    MatIconModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatTableModule,
    MatListModule,
    MatSliderModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCheckboxModule,
    MatBottomSheetModule,
    MatProgressSpinnerModule,
//    MatSnackBar
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
