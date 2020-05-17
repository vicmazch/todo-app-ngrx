import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { Store } from '@ngrx/store';
// MI MODELO
import { Todo } from '../models/todo.model';
import { FormControl, Validators } from '@angular/forms';
import * as ACTIONS from '../todo.actions';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss'],
})
export class TodoItemComponent implements OnInit {
  @Input() todo: Todo;
  @ViewChild('inputEdicion') inputEdicion: ElementRef;
  chkCompletado: FormControl;
  txtInput: FormControl;
  editando: boolean = false;

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.chkCompletado = new FormControl(this.todo.completado);
    this.txtInput = new FormControl(this.todo.texto, [Validators.required]);

    this.chkCompletado.valueChanges.subscribe((change) => {
      console.log(':::CHANGE CHK: ', this.chkCompletado.value);
      this.store.dispatch(ACTIONS.toggle({ id: this.todo.id }));
    });
  }

  ngAfterViewInit() {}

  editar() {
    this.editando = true;
    this.txtInput.setValue(this.todo.texto);

    setTimeout(() => {
      this.inputEdicion.nativeElement.select();
    }, 1);
  }

  terminarEdicion() {
    this.editando = false;

    if (this.txtInput.invalid || this.todo.texto === this.txtInput.value)
      return;

    this.store.dispatch(
      ACTIONS.editar({ id: this.todo.id, text: this.txtInput.value })
    );
  }

  eliminar() {
    this.store.dispatch(ACTIONS.eliminar({ id: this.todo.id }));
  }
}
