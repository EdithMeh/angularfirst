import {Component, OnInit} from '@angular/core';
import {DestinoViaje} from "../models/destino-viaje.model";

@Component({
  selector: 'app-lista-destinos',
  templateUrl: './lista-destinos.component.html',
  styleUrls: ['./lista-destinos.component.css']
})
export class ListaDestinosComponent implements OnInit {

  destinos: DestinoViaje[];
  nombres: string[];

  constructor() {
    this.destinos = [];
    this.nombres = ['Carolina', 'Edith', 'Mary', 'America'];
  }

  ngOnInit(): void {
  }

  agregar(titulo: HTMLInputElement)	{
    console.log(titulo.value);
  }

  guardar(nombre: string, url: string) : boolean {
    this.destinos.push(new DestinoViaje(nombre, url))
    console.log(this.destinos)
    // retornamos false para que no recargue la pagina
    return false;
  }

}
