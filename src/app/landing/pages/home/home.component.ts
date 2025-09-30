import { NavbarComponent } from './../../components/navbar/navbar.component';
import { Component } from '@angular/core';
import { HeroComponent } from '../../components/hero/hero.component';import { FooterComponent } from '../../components/footer/footer.component';
import { BeneficiosComponent } from "../../components/beneficios/beneficios.component";
import { TrabajosComponent } from "../../components/trabajos/trabajos.component";
import { TestimoniosComponent } from "../../components/testimonios/testimonios.component";
import { CtaComponent } from "../../components/cta/cta.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavbarComponent, HeroComponent, BeneficiosComponent, TrabajosComponent, TestimoniosComponent, CtaComponent, FooterComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {}
