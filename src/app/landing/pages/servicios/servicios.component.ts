import { Component } from '@angular/core';
import { FooterComponent } from "../../components/footer/footer.component";
import { NavbarComponent } from "../../components/navbar/navbar.component";
import { CtaComponent } from "../../components/cta/cta.component";

@Component({
  selector: 'app-servicios',
  standalone: true,
  imports: [FooterComponent, NavbarComponent, CtaComponent],
  templateUrl: './servicios.component.html',
  styleUrl: './servicios.component.css'
})
export class ServiciosComponent {

}
