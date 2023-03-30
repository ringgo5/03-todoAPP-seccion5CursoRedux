import { isDevMode, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//NgRx
import {StoreModule} from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

//formularios:
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TodoModule } from './todos/todo.module';
import { FooterComponent } from './footer/footer.component';
//import { todoReducer } from './todos/todo.reducer';   la quitamos una vez hemos hecho la appReducers, que es la funcion que nos indica que reducer maneja cada cosa en app.reducers
import { appReducers } from './todos/app.reducer';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    TodoModule,
    ReactiveFormsModule,
    StoreModule.forRoot(appReducers),   //dentro había {todos:todoReducer} que lo cambiamos una vez hemos hecho la funcion para indicar que reducer maneja cada cosa
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: !isDevMode(), // Restrict extension to log-only modeaa
      
    }),
    
  ],
  providers: [],
  bootstrap: [AppComponent]
  
})
export class AppModule { }
