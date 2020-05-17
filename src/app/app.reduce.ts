import { ActionReducerMap } from '@ngrx/store';
// MI MODELO TODO
import { Todo } from './todos/models/todo.model';
// MIS REDUCERS
import { todoReducer } from './todos/todo-reducer';
import { filtroReducer } from './filtro/filtro.reducer';
// MIS TIPOS VALIDOS
import { filtrosValidos } from './filtro/filtro.actions';

export interface AppSate {
  todos: Todo[];
  filtro: filtrosValidos;
}

export const appReducers: ActionReducerMap<AppSate> = {
  todos: todoReducer,
  filtro: filtroReducer,
};
