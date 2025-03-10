import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { Component } from '@angular/core';
import { NosotrosComponent } from './pages/nosotros/nosotros.component';
import { ProductosComponent } from './pages/productos/productos.component';
import { ContactosComponent } from './pages/contactos/contactos.component';
import { Error404Component } from './pages/error404/error404.component';
import { DetallesProductoComponent } from './pages/detalles-producto/detalles-producto.component';
import { FormularioProductosComponent } from './components/formulario-productos/formulario-productos.component';
import { TablaComponent } from './components/tabla/tabla.component';
import { BodegaComponent } from './pages/bodega/bodega.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { loginGuard } from './guards/login.guard';
import { registerGuard } from './guards/register.guard';
import { privadoGuard } from './guards/privado.guard';
import { TablaCarritoComponent } from './components/tabla-carrito/tabla-carrito.component';

export const routes: Routes = [
    {path:'home', component: HomeComponent},
    {path:'nosotros', component: NosotrosComponent},
    {path:'productos', component: ProductosComponent},
    {path: 'contactos', component: ContactosComponent},
    {path: 'producto/:idProducto', component: DetallesProductoComponent},
    {path: 'productos/:formulario-productos', component: FormularioProductosComponent},
    {path: 'tabla', component: TablaComponent},
    {path: 'bodega', component:BodegaComponent, canActivate:[loginGuard]},
    {path: 'login', component:LoginComponent, canActivate:[privadoGuard]},
    {path: 'register', component:RegisterComponent},
    {path: 'carrito', component:TablaCarritoComponent},

    {path: '', redirectTo:'home', pathMatch:'full'},

    {path:'**', component:Error404Component},




];
