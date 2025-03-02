import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { Component } from '@angular/core';
import { NosotrosComponent } from './pages/nosotros/nosotros.component';
import { ProductosComponent } from './pages/productos/productos.component';
import { ContactosComponent } from './pages/contactos/contactos.component';
import { Error404Component } from './pages/error404/error404.component';

export const routes: Routes = [
    {path:'home', component: HomeComponent},
    {path:'nosotros', component: NosotrosComponent},
    {path:'productos', component: ProductosComponent},
    {path: 'contactos', component: ContactosComponent},

    {path: '', redirectTo:'home', pathMatch:'full'},

    {path:'**', component:Error404Component},




];
