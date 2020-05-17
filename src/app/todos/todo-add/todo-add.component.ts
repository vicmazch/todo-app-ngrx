import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
// NGRX
import { Store } from '@ngrx/store';
// MIS ACCIONES...
import * as ACTIONS from '../todo.actions';

@Component({
  selector: 'app-todo-add',
  templateUrl: './todo-add.component.html',
  styleUrls: ['./todo-add.component.scss'],
})
export class TodoAddComponent implements OnInit {
  txtInput: FormControl;

  constructor(private store: Store) {
    this.txtInput = new FormControl('Huevos...', Validators.required);
  }

  ngOnInit(): void {}

  agregar() {
    if (this.txtInput.invalid) return;
    this.store.dispatch(ACTIONS.crear({ texto: this.txtInput.value }));
    this.txtInput.reset();
  }
}
