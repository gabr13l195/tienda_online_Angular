import { Component } from '@angular/core';
import { FooterComponent } from "../../components/footer/footer.component";
import { DetallesProductoComponent } from "../detalles-producto/detalles-producto.component";
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-productos',
  imports: [FooterComponent, RouterLink],
  templateUrl: './productos.component.html',
  styleUrl: './productos.component.css'
})
export class ProductosComponent {

}
