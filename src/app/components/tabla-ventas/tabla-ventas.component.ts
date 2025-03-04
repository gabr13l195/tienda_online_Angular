import { Component, inject } from '@angular/core';
import { ProductoService } from '../../services/producto.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-tabla-ventas',
  imports: [],
  templateUrl: './tabla-ventas.component.html',
  styleUrl: './tabla-ventas.component.css'
})
export class TablaVentasComponent {
  
    id: any
    producto: any
    tipo: any
    precio: any
  
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
