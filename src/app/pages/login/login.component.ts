import { Component, inject } from '@angular/core';
import { LoginService } from '../../services/login.service';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { FooterComponent } from "../../components/footer/footer.component";
import { FormularioProductosComponent } from "../../components/formulario-productos/formulario-productos.component";
import { TablaComponent } from "../../components/tabla/tabla.component";

@Component({
  selector: 'app-login',
  imports: [FormsModule, RouterLink, FooterComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  email: any;
  password: any;

  servicio = inject (LoginService)

  login(formulario: any){
    //console.log(formulario.value);
    this.servicio.postLogin(formulario.value).subscribe(acceso =>{
      console.log(acceso);
      let token = acceso.accessToken
      if(token != ""){
        localStorage.setItem("login", "true")
        window.location.href="bodega"
      }
    })
  }
}
