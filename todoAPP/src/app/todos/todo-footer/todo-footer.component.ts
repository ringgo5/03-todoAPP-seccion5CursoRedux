
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../app.reducer';
import {  filtrosValidos, setFiltro } from '../filtro/filtro.actions';
import { borrarCompletados } from '../todo.actions';

@Component({
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.component.html',
  styleUrls: ['./todo-footer.component.css']
})
export class TodoFooterComponent implements OnInit {

  filtroActual: filtrosValidos ='todos';   //este y el de abajo lo ahgo para cambiar el filtro
  filtros: filtrosValidos[]=['todos','completados','pendientes'];
  pendientes: number = 0;
  

constructor( private store: Store<AppState> ){}

  ngOnInit(): void {

    //this.store.select('filtro')

     // console.log(filtro);
     //.subscribe(filtro=>this.filtroActual=filtro);

     this.store.subscribe( ({filtro, todos}) =>{ //usamos desestructuracion ,asi no te nemos que poner state ni aqui, ni abajo poner state.filtro/state.todos.filtro

      this.filtroActual = filtro;
      this.pendientes = todos.filter(todo=>!todo.completado).length  //que me filtre todos los que no estan completados
     })
    
    
  }

  cambiarFiltro(filtro1:filtrosValidos){


    //console.log(filtro1)
    this.store.dispatch(setFiltro({filtro1}))
    

  }
  limpiarCompletados(){

    this.store.dispatch(borrarCompletados())


  }


}
