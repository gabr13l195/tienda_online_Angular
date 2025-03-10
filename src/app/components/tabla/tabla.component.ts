import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ProductoService } from '../../services/producto.service';
import { FooterComponent } from "../footer/footer.component";

@Component({
  selector: 'app-tabla',
  imports: [RouterLink, ],
  templateUrl: './tabla.component.html',
  styleUrl: './tabla.component.css'
})
export class TablaComponent {

  id: any
  producto: any
  tipo: any
  precio: any
  cantidad: any

  productos:any

  servicio = inject(ProductoService)

  ngOnInit(){
    this.servicio.getProductos().subscribe(p=>{
      this.productos= p
      this.productos= Object.values(this.productos)
    })
  }

  eliminar(id:any){
    this.servicio.deleteProductos(id).subscribe()
  }

}
