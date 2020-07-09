import { Component, OnInit } from '@angular/core';
import {List} from '../shared/list';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import {Item} from '../shared/item';
import {FormGroup} from '@angular/forms';

@Component({
  selector: 'app-list-list',
  templateUrl: './list-list.component.html',
  styleUrls: ['./list-list.component.sass']
})
export class ListListComponent implements OnInit {
  lists: List[] = [
    {
      name: 'todo' ,
      items:  [
        {
          taskname: 'Get up' ,
          status: 'Resolved',
          descr: 'take body out of the bad' ,
          date: '22.10.2000',
          priority: 'Low',
          editable:false,
        },
        {
          taskname: 'Brush teeth',
          status: 'Resolved',
          descr: 'take body out of the bad' ,
          date: '22.10.2000',
          priority: 'Low',
          editable:false
        },
      ]
    },
  ];
  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
          event.container.data,
          event.previousIndex,
          event.currentIndex);
    }
  }

  constructor() { }

  ngOnInit() {
  }

  addList() {
      let list: List;
      list = {
        name: 'New List',
        items: [
          {
            taskname: 'New Task',
            status: 'ToDo',
            descr: ' ' ,
            date: 'NaN',
            priority: 'Medium',
            editable:false
          }
        ]
      };
      this.lists.push(list);
  }

  addItem(i: number) {
    let newItem: Item;
    newItem = {
      taskname: 'New Task',
      status: 'ToDo',
      descr: 'Enter new description',
      date: 'NaN',
      priority: 'Medium',
      editable: false,
    },
    this.lists[i].items.push(newItem);

  }

  deleteItem(k: number, j: number ) {
    console.log(k,j);
    return this.lists[k].items.splice(j, 1 );
  }

  deleteList( i: number ) {
    return this.lists.splice(i, 1 );
  }
  openForm(k: number, j: number){
    this.lists[k].items[j].editable = true;
  }

  editItem(k: number, j: number , input: Item) {
    this.lists[k].items[j].editable = false;
    this.lists[k].items[j] = input;
  }
}
