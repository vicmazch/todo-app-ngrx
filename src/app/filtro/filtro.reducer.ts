import { createReducer, on } from '@ngrx/store';
import * as _ from 'lodash';

import * as ACTIONS from './filtro.actions';
import { filtrosValidos } from './filtro.actions';

export const estadoInicial: filtrosValidos = 'todos';

const _filtroReducer = createReducer(
  estadoInicial,
  on(ACTIONS.setFiltro, (state, { filtro }) => filtro)
);

export function filtroReducer(state, action) {
  return _filtroReducer(state, action);
}
