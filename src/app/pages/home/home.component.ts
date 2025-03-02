import { Component } from '@angular/core';
import { NavbarComponent } from "../../components/navbar/navbar.component";
import { FooterComponent } from "../../components/footer/footer.component";
import { DetallesProductoComponent } from "../detalles-producto/detalles-producto.component";

@Component({
  selector: 'app-home',
  imports: [FooterComponent, DetallesProductoComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
