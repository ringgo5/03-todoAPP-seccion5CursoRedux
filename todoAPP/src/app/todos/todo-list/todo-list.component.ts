import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Todo } from 'src/app/models/todo.model';
import { AppState } from '../app.reducer';
import { filtrosValidos } from '../filtro/filtro.actions';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  todos: Todo[] = [];
  filtroActual!: filtrosValidos;

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
 /*   this.store.select('todos')
      .subscribe(todos => this.todos = todos); // ahora podemos usar esto directamente con ngfor en el html. No creamos acciones, porque lo queremos
            //automatico, que cada vez que añadamos uno, aparezca abajo como lista*/

            this.store.subscribe(state=>{

              this.todos=state.todos;
              this.filtroActual=state.filtro;
            })
  }
}
