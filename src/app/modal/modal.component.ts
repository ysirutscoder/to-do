import {Component, ElementRef, Input, OnInit, Output, ViewChild} from '@angular/core';
import {EventEmitter} from '@angular/core';
import {Item} from '../shared/item';
import {MatDatepicker, MatSelect} from '@angular/material';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.sass']
})
export class ModalComponent implements OnInit {
  @ViewChild('inputName', {static: false}) name: ElementRef;
  @ViewChild('inputDesc', {static: false}) desc: ElementRef;
  @ViewChild('picker', {static: false}) date: MatDatepicker;
  @ViewChild('priority', {static: false}) priority: MatSelect;
  @ViewChild('status', {static: false}) status: MatSelect;
  @Output() taskWasEdit = new EventEmitter<Item>();
  @Input() editable;
  constructor() {
  }

  ngOnInit() {
  }

  takeData() {
    let changedItem: Item;
    changedItem = {
      taskname: this.name.nativeElement.value,
      status: this.status._elementRef.nativeElement.textContent,
      descr: this.desc.nativeElement.value,
      date: this.date._datepickerInput._datepicker._datepickerInput._elementRef.nativeElement.value,
      priority: this.priority._elementRef.nativeElement.textContent,
    };
    this.taskWasEdit.emit(changedItem);
  }

}
