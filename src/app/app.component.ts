import { Component } from '@angular/core';
import { ToDoItem } from 'src/models/ToDoItem';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  newToDoItemTitle: string = '';
  newToDoItemDescription: string = '';
  toDoItems: ToDoItem[] = [];

  addItem() {
    if(this.newToDoItemTitle != ''){
      var toDoItem: ToDoItem = new ToDoItem();
      toDoItem.title = this.newToDoItemTitle;
      toDoItem.description = this.newToDoItemDescription;

      this.toDoItems.push(toDoItem);
      this.clearInputs();
    }
  }

  updateTitle(title: string) {
    this.newToDoItemTitle = title;
  }

  updateDescription(description: string) {
    this.newToDoItemDescription = description;
  }

  deleteItem(deletingItem: ToDoItem) {
    var index = this.toDoItems.indexOf(deletingItem);
    this.toDoItems.splice(index, 1);
  }

  clearInputs() {
    this.newToDoItemTitle = '';
    this.newToDoItemDescription = '';
  }
}
