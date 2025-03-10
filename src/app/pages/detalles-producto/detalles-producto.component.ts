import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ProductoService } from '../../services/producto.service';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { TablaComponent } from "../../components/tabla/tabla.component";
import { FooterComponent } from "../../components/footer/footer.component";

@Component({
  selector: 'app-detalles-producto',
  imports: [FormsModule, FooterComponent],
  templateUrl: './detalles-producto.component.html',
  styleUrl: './detalles-producto.component.css'
})
export class DetallesProductoComponent {

  id: any
  producto: any
  tipo: any
  precio: any
  cantidad: any

  item: any

  servicio = inject(ProductoService)
  ruta = inject(ActivatedRoute)

  getTotalaPagar():any{
    return this.producto.reduce
  }

  editar(formulario: any) {
    this.servicio.putProductos(formulario.value).subscribe()
  }

  ngOnInit() {
    this.ruta.params.subscribe(p => {
      this.servicio.getUnicoProducto(p["idProducto"]).subscribe(producto => {
        this.item = producto
        this.id = this.item.id
        this.producto = this.item.producto
        this.precio = this.item.precio
      })
    })
  }

}
