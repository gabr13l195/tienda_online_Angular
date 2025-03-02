import { Component } from '@angular/core';
import { FooterComponent } from "../../components/footer/footer.component";
import { DetallesProductoComponent } from "../detalles-producto/detalles-producto.component";

@Component({
  selector: 'app-productos',
  imports: [FooterComponent, DetallesProductoComponent],
  templateUrl: './productos.component.html',
  styleUrl: './productos.component.css'
})
export class ProductosComponent {

}
