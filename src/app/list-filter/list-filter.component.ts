import { Component, OnInit, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
@Component({
  selector: 'app-list-filter',
  templateUrl: './list-filter.component.html',
  styleUrls: ['./list-filter.component.sass']
})
export class ListFilterComponent implements OnInit {
  @Output() sortTypeSelected = new EventEmitter<string>();
  constructor() { }
  ngOnInit() {
  }
  handleSelectChange(value: string) {
    this.sortTypeSelected.emit(value);
  }
}
