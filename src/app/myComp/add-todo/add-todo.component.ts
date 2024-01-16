import { Component, EventEmitter, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Todo } from 'src/app/Todo';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent {
  title!: string;
  desc!: string;
  @Output() addTodo:EventEmitter<Todo>=new EventEmitter();

  onClick(form: NgForm){
    const t={
      sno:5,
      title:this.title,
      desc:this.desc,
      active:true
    }

    form.resetForm();
    this.addTodo.emit(t);
  }
}
