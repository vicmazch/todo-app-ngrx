import { createReducer, on } from '@ngrx/store';
import * as ACTIONS from './todo.actions';
import { Todo } from './models/todo.model';
import * as _ from 'lodash';

export const estadoInicial: Todo[] = [new Todo('Ir a cagar...')];

const _todoReducer = createReducer(
  estadoInicial,
  on(ACTIONS.crear, (state, { texto }) => [...state, ...[new Todo(texto)]]),
  on(ACTIONS.toggle, (state, { id }) => {
    return _.map(_.cloneDeep(state), (s) => {
      if (s.id === id) s.completado = !s.completado;
      return s;
    });
  }),
  on(ACTIONS.editar, (state, { id, text }) => {
    return _.map(_.cloneDeep(state), (s) => {
      if (s.id === id) s.texto = text;
      return s;
    });
  }),
  on(ACTIONS.eliminar, (state, { id }) => {
    console.log('id: ', id);

    return _.filter(state, (s) => id != s.id);
  }),
  on(ACTIONS.toggleAll, (state, { completado }) => {
    return _.map(_.cloneDeep(state), (s) => {
      s.completado = completado;
      return s;
    });
  }),
  on(ACTIONS.eliminarCompletadas, (state) => {
    return _.filter(state, (s) => !s.completado);
  })
);

export function todoReducer(state, action) {
  return _todoReducer(state, action);
}
