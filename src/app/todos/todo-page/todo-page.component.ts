import { Component, OnInit } from '@angular/core';
// NGRX...
import { Store } from '@ngrx/store';
// MIS ACCIONES
import * as ACTIONS from '../todo.actions';

@Component({
  selector: 'app-todo-page',
  templateUrl: './todo-page.component.html',
  styleUrls: ['./todo-page.component.scss'],
})
export class TodoPageComponent implements OnInit {
  toggle: boolean = false;

  constructor(private store: Store) {}

  ngOnInit(): void {}

  toggleALL() {
    this.toggle = !this.toggle;
    this.store.dispatch(ACTIONS.toggleAll({ completado: this.toggle }));
  }
}
