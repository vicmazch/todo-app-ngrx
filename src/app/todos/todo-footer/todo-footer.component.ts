import { Component, OnInit } from '@angular/core';
import { filtrosValidos } from 'src/app/filtro/filtro.actions';

import * as _ from 'lodash';
import { Store } from '@ngrx/store';

import * as ACTIONSFILTERS from '../../filtro/filtro.actions';
import * as ACTIONS from '../todo.actions';
import { AppSate } from 'src/app/app.reduce';

@Component({
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.component.html',
  styleUrls: ['./todo-footer.component.scss'],
})
export class TodoFooterComponent implements OnInit {
  noTodosPendientes: number = 0;
  filtroActivo: filtrosValidos;
  filtros: filtrosValidos[] = ['todos', 'completados', 'pendientes'];

  constructor(private store: Store<AppSate>) {}

  ngOnInit(): void {
    // this.store.select('filtro').subscribe((filtro) => {
    //   console.log('::: STORE/FILTER: ', filtro);
    // });
    this.store.subscribe((state) => {
      this.filtroActivo = state.filtro;
      this.noTodosPendientes = _.filter(
        state.todos,
        (todo) => !todo.completado
      ).length;
    });
  }

  seleccionFiltro(filtro: filtrosValidos) {
    this.store.dispatch(ACTIONSFILTERS.setFiltro({ filtro: filtro }));
  }

  eliminarCompletadas() {
    this.store.dispatch(ACTIONS.eliminarCompletadas());
  }
}
