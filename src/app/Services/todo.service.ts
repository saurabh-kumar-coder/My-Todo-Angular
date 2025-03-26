import { Injectable } from '@angular/core';
import { Todo } from '../Models/todo';
// @Injectable({
//   providedIn: 'root'
// })
export class TodoService {
  private todos: Todo[] = [];  
  constructor() { 
    this.loadTodos();
  }

  private loadTodos(): void {
    const savedTodos = localStorage.getItem('todos');
    if(savedTodos) {
      this.todos = JSON.parse(savedTodos);
    }
  }

  getTodos() : Todo[] {
    return this.todos;
  }

  addTodo(title : string) : void {
    const newTodo : Todo = {
      id: Date.now(),
      title: title,
      status: false
    };
    this.todos.push(newTodo);
    this.saveTodos();
  }

  updateTodo(id: number) : void {
    const todo = this.todos.find(t => t.id === id);
    if(todo) {
      todo.status = !todo.status;
      this.saveTodos();
    }
  }

  deleteTodo(id : number) : void {
    this.todos = this.todos.filter(todo => todo.id !== id);
    this.saveTodos();
  }

  private saveTodos() : void {
    localStorage.setItem('todos', JSON.stringify(this.todos));
  }

}
