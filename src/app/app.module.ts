import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { DragDropModule } from '@angular/cdk/drag-drop';

import { AppComponent } from './app.component';
import { DateFormatPipe } from './date-format.pipe';
import { ListListComponent } from './list-list/list-list.component';
import { ListItemComponent } from './list-item/list-item.component';
import { ListFilterComponent } from './list-filter/list-filter.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatInputModule, MatTableModule, MatPaginatorModule, MatSortModule, MatFormField, MatDatepickerModule} from '@angular/material';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {  MatSelectModule} from '@angular/material';
import {MatNativeDateModule} from '@angular/material';
import { ModalComponent } from './modal/modal.component';


@NgModule({
  declarations: [
    AppComponent,
    DateFormatPipe,
    ListListComponent,
    ListItemComponent,
    ListFilterComponent,
    ModalComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    DragDropModule,
    FormsModule,
    ReactiveFormsModule,
    MatPaginatorModule,
    MatInputModule,
    MatSortModule,
    MatTableModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
