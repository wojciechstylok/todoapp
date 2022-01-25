import { Injectable } from '@angular/core';
import { ToDoItem } from 'src/models/ToDoItem';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {
  storageName: string = 'ToDoItems';

  constructor() { }

  setToDoItems(toDoItems: ToDoItem[]) {
    localStorage.setItem(this.storageName, JSON.stringify(toDoItems));
  }

  getToDoItems() {
    var toDoItems = localStorage.getItem(this.storageName);
    if (toDoItems != null)
      return JSON.parse(toDoItems);
  }

  clearStorage() {
    localStorage.clear();
  }
}
