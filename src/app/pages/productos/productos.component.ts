import { Component } from '@angular/core';
import { FooterComponent } from "../../components/footer/footer.component";
import { DetallesProductoComponent } from "../detalles-producto/detalles-producto.component";
import { RouterLink } from '@angular/router';
import { TablaComponent } from "../../components/tabla/tabla.component";
import { TablaVentasComponent } from "../../components/tabla-ventas/tabla-ventas.component";

@Component({
  selector: 'app-productos',
  imports: [FooterComponent, TablaVentasComponent],
  templateUrl: './productos.component.html',
  styleUrl: './productos.component.css'
})
export class ProductosComponent {

}
