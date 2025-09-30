import { Component, HostListener } from '@angular/core';
import { NgClass, NgIf } from '@angular/common';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [NgClass, NgIf, RouterLink],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  isScrolled = false;
isOpen = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isScrolled = window.scrollY > 50;
  }



  toggleMenu() {
    this.isOpen = !this.isOpen;
  }

  activeSection: string = '';

  setActiveSection(section: string) {
    this.activeSection = section;
  }
}
