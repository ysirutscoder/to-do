import {Component, Input, OnInit} from '@angular/core';
import {List} from '../shared/list';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.sass']
})
export class ListItemComponent implements OnInit {
  @Input() item;

  isExtended: boolean = false;

  constructor() { }

  ngOnInit() {
  }

}
