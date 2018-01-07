import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { PipesComponent } from './components/pipes/pipes.component';

//lineas que debemos añadir
import { LOCALE_ID } from '@angular/core';
import localeEs from '@angular/common/locales/es';
import { registerLocaleData } from '@angular/common';
registerLocaleData(localeEs);


@NgModule({
  declarations: [
    AppComponent,
    PipesComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    //añadimos esta linea en el apartado de providers
    {provide: LOCALE_ID, useValue:"es" }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
