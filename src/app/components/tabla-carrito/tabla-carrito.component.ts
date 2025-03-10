import { Component, inject } from '@angular/core';
import { ProductoService } from '../../services/producto.service';

@Component({
  selector: 'app-tabla-carrito',
  imports: [],
  templateUrl: './tabla-carrito.component.html',
  styleUrl: './tabla-carrito.component.css'
})
export class TablaCarritoComponent {
  id: any
  producto: any
  tipo: any
  precio: any

  productos: any

  servicio = inject(ProductoService)

  ngOnInit() {
    this.servicio.getProductos().subscribe(p => {
      this.productos = p
      this.productos = Object.values(this.productos)
    })
  }

  eliminar(id: any) {
    this.servicio.deleteProductos(id).subscribe()
  }


}

