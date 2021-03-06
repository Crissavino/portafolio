import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductosService } from 'src/app/services/productos.service';
import { ProductoDescripcion } from 'src/app/interfaces/productoDescripcion.interface';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  cargando = true;
  producto: ProductoDescripcion;
  productoId: string;

  constructor( private route: ActivatedRoute, public productoService: ProductosService) { }

  ngOnInit() {
    this.route.params
      .subscribe( parametros => {
        // console.log(parametros['id']);
        this.productoService.getProducto(parametros['id'])
          .subscribe( (producto: ProductoDescripcion) => {
            this.producto = producto
            this.productoId = parametros['id'];
            this.cargando = false;
          });
      });
  }

}
