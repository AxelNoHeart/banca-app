import { Component, Input } from '@angular/core';
import { Lista } from '../lista';

@Component({
  selector: 'app-lista-dettagli-dati',
  templateUrl: './lista-dettagli-dati.component.html',
  styleUrls: ['./lista-dettagli-dati.component.css']
})
export class ListaDettagliDatiComponent {

  @Input()
  lista?: Lista;
}
