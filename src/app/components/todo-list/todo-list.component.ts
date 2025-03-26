import { Component } from '@angular/core';
import { Todo } from '../../Models/todo';
import { TodoService } from '../../Services/todo.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-todo-list',
  imports: [CommonModule, FormsModule],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.css'
})
export class TodoListComponent {
  todos: Todo[] = [];
  newTodoTitle = "";

  constructor(private todoService : TodoService) {}

  ngOnInit(): void {
    this.loadTodos();
  }

  loadTodos() : void {
    this.todos = this.todoService.getTodos();
  }

  addTodo() : void {
    if(this.newTodoTitle.trim())
    this.todoService.addTodo(this.newTodoTitle);
    this.newTodoTitle = '';
    this.loadTodos();
  }

  updateTodo(id: number) : void {
    this.todoService.updateTodo(id);
    this.loadTodos();
  }

  deleteTodo(id: number) : void {
    this.todoService.deleteTodo(id);
    this.loadTodos();
  }

}
