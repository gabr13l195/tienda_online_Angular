import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ProductoService } from '../../services/producto.service';

@Component({
  selector: 'app-formulario-productos',
  imports: [FormsModule],
  templateUrl: './formulario-productos.component.html',
  styleUrl: './formulario-productos.component.css'
})
export class FormularioProductosComponent {

  producto: any
  tipo: any
  precio: any

  productos:any

  servicio = inject(ProductoService)

  guardar(formulario: any) {
    console.log(formulario.value);
    this.servicio.postProductos(formulario.value).subscribe()    
  }

  ngOnInit(){
    this.servicio.getProductos().subscribe(p=>{
      this.productos= p
      this.productos= Object.values(this.productos)
    })
  }
}
