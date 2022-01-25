import { Component, OnInit } from '@angular/core';
import { ToDoItem } from 'src/models/ToDoItem';
import { DataServiceService } from 'src/services/data-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  newToDoItemTitle: string = '';
  newToDoItemDescription: string = '';
  toDoItems: ToDoItem[] = [];

  constructor(private dataService: DataServiceService) { }

  ngOnInit(): void {
    if(this.dataService.getToDoItems())
      this.toDoItems = this.dataService.getToDoItems();
    else
      this.toDoItems = [];
  }

  addItem() {
    if(this.newToDoItemTitle != ''){
      var toDoItem: ToDoItem = new ToDoItem();
      toDoItem.title = this.newToDoItemTitle;
      toDoItem.description = this.newToDoItemDescription;

      this.toDoItems.push(toDoItem);
      this.clearInputs();

      this.dataService.setToDoItems(this.toDoItems);
      this.ngOnInit();
    }
  }

  updateTitle(title: string) {
    this.newToDoItemTitle = title;
  }

  updateDescription(description: string) {
    this.newToDoItemDescription = description;
  }

  clearInputs() {
    this.newToDoItemTitle = '';
    this.newToDoItemDescription = '';
  }
}
