import { createAction, props } from '@ngrx/store';
import { Todo } from './models/todo.model';

export const crear = createAction(
  '[TODO] Crear Todo',
  props<{ texto: string }>()
);

export const toggle = createAction(
  '[TODO] Toggle Todo',
  props<{ id: number }>()
);

export const editar = createAction(
  '[TODO] Edit Todo',
  props<{ id: number; text: string }>()
);

export const eliminar = createAction(
  '[TODO] Eliminar Todo',
  props<{ id: number }>()
);

export const toggleAll = createAction(
  '[TODO] ToggleALL Todo',
  props<{ completado: boolean }>()
);

export const eliminarCompletadas = createAction(
  '[TODO] EliminarCompletadas Todo'
);
