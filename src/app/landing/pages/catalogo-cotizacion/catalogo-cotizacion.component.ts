import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from "../../components/navbar/navbar.component";
import { FooterComponent } from "../../components/footer/footer.component";
import { NgIf, NgForOf } from "@angular/common";
import { ProductoService } from '../../../services/producto.service';
import { HttpClientModule } from '@angular/common/http';
import { ProductoSupabaseService, Producto } from '../../../services/producto-supadatabase.service';
import { Subscription } from 'rxjs';

@Component({
  standalone: true,
  selector: 'app-catalogo-cotizacion',
  templateUrl: './catalogo-cotizacion.component.html',
  imports: [FormsModule, NavbarComponent, FooterComponent, NgIf, NgForOf, HttpClientModule],
})
export class CatalogoCotizacionComponent implements OnInit, OnDestroy {
  productos: Producto[] = [];
  productoSeleccionado: Producto | null = null;
  mostrarFormulario = false;
  cargando = true;
  error = '';
  nombre = '';
  email = '';
  telefono = '';
  mensaje = '';
  
  private subscription?: Subscription;

  constructor(private productoSupabaseService: ProductoSupabaseService) {}

  ngOnInit() {
    this.cargarProductos();
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  private cargarProductos() {
    this.cargando = true;
    this.error = '';
    
    this.subscription = this.productoSupabaseService.getProductos().subscribe({
      next: (productos) => {
        this.productos = productos;
        this.cargando = false;
      },
      error: (error) => {
        console.error('Error al cargar productos:', error);
        this.error = 'Error al cargar los productos. Por favor, intenta de nuevo.';
        this.cargando = false;
      }
    });
  }

  verDetalle(producto: any) {
    this.productoSeleccionado = producto;
    this.mostrarFormulario = false;
  }

  cotizar() {
    this.mostrarFormulario = true;
  }

  enviarWhatsApp() {
    if (!this.productoSeleccionado) {
      console.error('No hay producto seleccionado');
      return;
    }

    const numeroEmpresa = '51956650831';
    const texto = `Hola soy ${this.nombre}, me interesa cotizar el producto: ${this.productoSeleccionado.nombre}.
Mis datos:
- Email: ${this.email}
- Teléfono: ${this.telefono}
- Mensaje: ${this.mensaje}`;
    const url = `https://wa.me/${numeroEmpresa}?text=${encodeURIComponent(texto)}`;
    window.open(url, '_blank');
  }

  recargarProductos() {
    this.cargarProductos();
  }
}