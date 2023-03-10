import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ListaDatiComponent } from './lista-dati/lista-dati.component';
import { ListaDettagliDatiComponent } from './lista-dettagli-dati/lista-dettagli-dati.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaDatiComponent,
    ListaDettagliDatiComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
