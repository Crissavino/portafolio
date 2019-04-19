import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { InfoPagina } from '../interfaces/info-pagina.interface';

@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {

  info: InfoPagina = {};
  cargada = false;

  constructor( private http: HttpClient) {
    // console.log('Servicio de info pagina listo');

     // leer el json y tomar propiedades para mostrar en la pagina
     this.http.get('assets/data/data-pagina.json')
      .subscribe( (resp: InfoPagina) => {
        this.cargada = true;
        console.log(resp.email);
        console.log(resp.twitter);
        this.info = resp;
      });
  }
}
