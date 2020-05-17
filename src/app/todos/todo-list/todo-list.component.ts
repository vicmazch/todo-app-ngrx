import { Component, OnInit } from '@angular/core';
// NGRX
import { Store } from '@ngrx/store';
// MI MODELO...
import { Todo } from '../models/todo.model';
import { AppSate } from '../../app.reduce';
import { filtrosValidos } from 'src/app/filtro/filtro.actions';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
})
export class TodoListComponent implements OnInit {
  todos: Todo[];
  filtroActivo: filtrosValidos;

  constructor(private store: Store<AppSate>) {
    // this.store.select('todos').subscribe((todos) => {
    //   this.todos = todos;
    // });
    this.store.subscribe(({ todos, filtro }) => {
      this.todos = todos;
      this.filtroActivo = filtro;
    });
  }

  ngOnInit(): void {}
}
