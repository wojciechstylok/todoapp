import { Component, OnInit, Input } from '@angular/core';
import { ToDoItem } from 'src/models/ToDoItem';

@Component({
  selector: 'app-to-do-item',
  templateUrl: './to-do-item.component.html',
  styleUrls: ['./to-do-item.component.css']
})
export class ToDoItemComponent implements OnInit {

  @Input() toDoItems: ToDoItem[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  deleteItem(deletingItem: ToDoItem) {
    var index = this.toDoItems.indexOf(deletingItem);
    this.toDoItems.splice(index, 1);
  }
}
