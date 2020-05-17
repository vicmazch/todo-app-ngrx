import { Pipe, PipeTransform } from '@angular/core';
import * as _ from 'lodash';

import { Todo } from './models/todo.model';
import { filtrosValidos } from '../filtro/filtro.actions';

@Pipe({
  name: 'filtroTodo',
})
export class FiltroPipe implements PipeTransform {
  transform(todos: Todo[], filtro: filtrosValidos): Todo[] {
    switch (filtro) {
      case 'completados':
        return _.filter(todos, (todo) => todo.completado);
      case 'pendientes':
        return _.filter(todos, (todo) => !todo.completado);
      case 'pendientes':
        return todos;

      default:
        return todos;
    }
  }
}
