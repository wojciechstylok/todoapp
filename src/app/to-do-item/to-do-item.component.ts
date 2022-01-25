import { Component, OnInit, Input } from '@angular/core';
import { ToDoItem } from 'src/models/ToDoItem';
import { DataServiceService } from 'src/services/data-service.service';

@Component({
  selector: 'app-to-do-item',
  templateUrl: './to-do-item.component.html',
  styleUrls: ['./to-do-item.component.css']
})
export class ToDoItemComponent implements OnInit {

  @Input() toDoItems: ToDoItem[] = [];

  constructor(private dataService: DataServiceService) { }

  ngOnInit(): void {
    this.toDoItems = this.dataService.getToDoItems();
  }

  deleteItem(deletingItem: ToDoItem) {
    var index = this.toDoItems.indexOf(deletingItem);
    this.toDoItems.splice(index, 1);
    this.dataService.setToDoItems(this.toDoItems);

    if(this.toDoItems.length == 0) this.dataService.clearStorage();
  }
}
