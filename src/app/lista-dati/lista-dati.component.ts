import { Component } from '@angular/core';
import { Lista } from '../lista';
import { LISTA } from '../lista-dati';

@Component({
  selector: 'app-lista-dati',
  templateUrl: './lista-dati.component.html',
  styleUrls: ['./lista-dati.component.css']
})
export class ListaDatiComponent {
  liste: Lista[] = LISTA;
}
