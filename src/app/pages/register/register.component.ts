import { Component, inject } from '@angular/core';
import { RegisterService } from '../../services/register.service';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { FooterComponent } from "../../components/footer/footer.component";

@Component({
  selector: 'app-register',
  imports: [FormsModule, RouterLink, FooterComponent],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  email: string = "";
  password: string = "";

  servicio = inject(RegisterService);

  register(formulario: any) {
    if (!this.email || !this.password) {
      alert("Por favor, completa todos los campos.");
      return;
    }

    this.servicio.postRegister({ email: this.email, password: this.password }).subscribe(
      (response) => {
        console.log("Registro exitoso:", response);
        if (response.accessToken) {
          localStorage.setItem("login", "true");
          window.location.href = "/bodega"; // Redirigir tras el registro
        }
      },
      (error) => {
        console.error("Error en el registro:", error);
        alert("Error al registrarse, intenta con otro correo.");
      }
    );
  }
}
