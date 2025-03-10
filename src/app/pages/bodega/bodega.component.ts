import { Component } from '@angular/core';
import { FormularioProductosComponent } from "../../components/formulario-productos/formulario-productos.component";
import { TablaComponent } from "../../components/tabla/tabla.component";
import { FooterComponent } from "../../components/footer/footer.component";
import { TablaCarritoComponent } from "../../components/tabla-carrito/tabla-carrito.component";

@Component({
  selector: 'app-bodega',
  imports: [FormularioProductosComponent, TablaComponent, FooterComponent],
  templateUrl: './bodega.component.html',
  styleUrl: './bodega.component.css'
})
export class BodegaComponent {

  logout(){
    localStorage.setItem('login', 'false')
    window.location.href="login"
  }

}
