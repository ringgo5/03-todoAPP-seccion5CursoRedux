import { createReducer, on } from '@ngrx/store';
import { filtrosValidos} from './filtro.actions';
import {setFiltro} from './filtro.actions';

export const estadoInicial:filtrosValidos = 'todos'; //aqui solo permitira los que hemos deficinido en acciones

const _filtroReducer = createReducer(estadoInicial,
    on(setFiltro, (state, { filtro1 }) => filtro1),
    
);


export function filtroReducer(state:any, action:any) {
    return _filtroReducer(state, action);
}   