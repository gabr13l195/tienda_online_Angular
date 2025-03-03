import { Component } from '@angular/core';
import { FooterComponent } from "../../components/footer/footer.component";
import { CommonModule } from '@angular/common';
import { FormularioContactoComponent } from "../../components/formulario-contacto/formulario-contacto.component";
import { FormularioProductosComponent } from "../../components/formulario-productos/formulario-productos.component";
import { TablaComponent } from "../../components/tabla/tabla.component";

@Component({
  selector: 'app-contactos',
  imports: [CommonModule, FormularioProductosComponent, FooterComponent, TablaComponent],
  templateUrl: './contactos.component.html',
  styleUrl: './contactos.component.css'
})
export class ContactosComponent {

}
