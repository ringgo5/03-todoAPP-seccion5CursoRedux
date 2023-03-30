import { ActionReducerMap } from "@ngrx/store";
import { Todo } from "../models/todo.model";
import { filtrosValidos } from "./filtro/filtro.actions";
import { filtroReducer } from "./filtro/filtro.reducer";
import { todoReducer } from "./todo.reducer";

export interface AppState{
    todos: Todo[],
   // usuario:{}
   //id: {} aqui pondremos de la forma en la que queramos verlo. En este caso solo vamos a ver el arreglo con los todos
   filtro: filtrosValidos; //lo añado una vez creo el appReducer y creo la accion, que es donde le decimos que necesitamos el argumento filtro
}

//combinar 2 reducers:  hacemos una funcion donde indicquemos que reducer va a usar cada parte del appState

export const appReducers: ActionReducerMap<AppState>= { //ahora debemos cambiarlo en app.module.
    todos: todoReducer,
    filtro: filtroReducer      
    
}