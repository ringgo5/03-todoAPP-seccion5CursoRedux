import { createAction, props } from '@ngrx/store';

export type filtrosValidos = string;//creo uno por cada botón,así sólo permitiremos estas 3 palabras a la hora de filtrar
    //'todos' | 'completados' | 'pendientes' tenia esto, pero no me funcionaba. ¿Como lo hice? poniendo aqui string, y en el todo-footer.component,
    //que es donde creo la variable exactamente igual , le meto las 3 palabras, de forma que esas 3 palabras solo afectan a la copia.
    //si algun día quiero lñimitar a ciertas palabras para poner, mejor ponerlo en el complemento que controle "la copia"

export const setFiltro = createAction(
    '[Filtro] Set  Filtro',
    props<{ filtro1: filtrosValidos }>() //necesitamos un dato,ya que queremos saber donde estamos en los botones de abajooooooo
    ) ;




