import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from 'src/app/Todo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent {
  @Input() x:Todo=new Todo();
  @Output() delete:EventEmitter<Todo>= new EventEmitter();


  constructor(){

  }

  handleClick(x: Todo){
    this.delete.emit(x);
    console.log("delete is clicked");
  }

}
