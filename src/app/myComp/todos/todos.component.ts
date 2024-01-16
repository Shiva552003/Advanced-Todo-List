import { Component, OnInit } from '@angular/core';
import { Todo } from '../../../../../todo-list/src/app/Todo';
import { SharedService } from 'src/app/shared.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent {
  size:string;
  todos:Todo[];
  filteredTodo: Todo[]=[];

  searchQuery$!: Observable<string>;

  constructor(private sharedService: SharedService){
    this.size=localStorage.getItem("todos") as string;
    if(this.size===null){
      this.todos=[];
    }
    else{
      this.todos=JSON.parse(this.size);
    }
    this.filteredTodo=this.todos;
  }

  ngOnInit(): void {
    this.searchQuery$ = this.sharedService.getSearchQuery().asObservable();
    this.filterItems()
  }

  filterItems(): void {
    this.searchQuery$.subscribe((query: string) => {
      this.filteredTodo = this.todos.filter((item: Todo) =>
        item.title.includes(query)
      );
    });
  }

  // deleteTodo(todo:Todo){
  //   // console.log(todo);
  //   const index=this.todos.indexOf(todo);
  //   this.todos.splice(index,1);
  //   localStorage.setItem("todos",JSON.stringify(this.todos));
  //   this.filterItems();
  // }

  addToArray(todo:Todo){
    console.log(todo);
    this.todos.push(todo);
    localStorage.setItem("todos",JSON.stringify(this.todos));
    this.filterItems();
  }
  
}
