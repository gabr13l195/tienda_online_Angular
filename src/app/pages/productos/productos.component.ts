import { Component } from '@angular/core';
import { FooterComponent } from "../../components/footer/footer.component";
import { DetallesProductoComponent } from "../detalles-producto/detalles-producto.component";
import { RouterLink } from '@angular/router';
import { TablaComponent } from "../../components/tabla/tabla.component";

@Component({
  selector: 'app-productos',
  imports: [FooterComponent, TablaComponent],
  templateUrl: './productos.component.html',
  styleUrl: './productos.component.css'
})
export class ProductosComponent {

}
