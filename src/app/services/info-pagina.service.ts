import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { InfoPagina } from '../interfaces/info-pagina.interface';

@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {

  info: InfoPagina = {};
  cargada = false;
  equipo: any[] = [];

  constructor( private http: HttpClient) { 
    this.cargarInfo();
    this.cargarEquipo();
  }

  private cargarInfo(){
    // leer el json y tomar propiedades para mostrar en la pagina
     this.http.get('assets/data/data-pagina.json')
      .subscribe( (resp: InfoPagina) => {
        this.cargada = true;
        this.info = resp;
      });
  }

  private cargarEquipo(){
    this.http.get('https://angular-html-8c9b4.firebaseio.com/equipo.json')
      .subscribe((resp: any[]) => {
        this.equipo = resp;
      });
  }
}
