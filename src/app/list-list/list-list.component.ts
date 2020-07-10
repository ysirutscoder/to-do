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
          date: '10/22/2000',
          priority: 'Low',
          editable:false,
        },
        {
          taskname: 'Brush teeth',
          status: 'Resolved',
          descr: 'take body out of the bad' ,
          date: '10/22/2000',
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
            editable: false
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

  closeModal(k: number, j: number ) {
    this.lists[k].items[j].editable = false;
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
  handleSort(value: string, index: number) {
    if ( value === 'priority' ) {
      this.lists[index].items.sort( (firstItem: Item, secondItem: Item) => {
        const firstPriority = firstItem.priority;
        const secondPriority = secondItem.priority;
        if (firstPriority == secondPriority ) return 0;
        else if( (firstPriority === 'Hight' && (secondPriority === 'Medium' || secondPriority === 'Low')) || (firstPriority === 'Medium' && secondPriority === 'Low')) {
          return -1;
        }
        else {
          return 1;
        }
      })
    }
    else if ( value === 'date') {
      this.lists[index].items.sort( (firstItem: Item, secondItem: Item) => {
        const firstDate = firstItem.date.split(/\.|\//g);
        const secondDate = secondItem.date.split(/\.|\//g);
        const firstDay = firstDate[0];
        const firstMonth = firstDate[1]
        const firstYear = firstDate[2]
        const secondDay = secondDate[0];
        const secondMonth = secondDate[1]
        const secondYear = secondDate[2]
        if ( firstItem.date === secondItem.date ) return 0
        else if ( (firstYear < secondYear)
            || (firstYear === secondYear && firstMonth < secondMonth)
            || (firstYear === secondYear && firstMonth === secondMonth && firstDay < secondDay)) return -1;
        else return 1;
      })
    }
  }
}
