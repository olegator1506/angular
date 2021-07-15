import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
// Карусель
import { DragScrollModule } from 'ngx-drag-scroll';
// Карточка
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { PlCollectionComponent } from './pl-collection/pl-collection.component';
import { TarckListModalComponent } from './tarck-list-modal/tarck-list-modal.component';
// модальный диалог
import {MatDialogModule} from '@angular/material/dialog';

@NgModule({
  declarations: [
    AppComponent,
    PlCollectionComponent,
    TarckListModalComponent
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
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
