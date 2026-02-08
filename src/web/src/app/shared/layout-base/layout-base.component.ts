import { Component, signal } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';

@Component({
  selector: 'app-layout-base',
  imports: [
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule
  ],
  templateUrl: './layout-base.component.html',
  styleUrl: './layout-base.component.scss'
})
export class LayoutBaseComponent {
  protected readonly pageTitle = signal('Dashboard');
  protected readonly isMobileMenuOpen = signal(false);

  protected readonly menuItems = [
    { path: '/dashboard', icon: 'home', label: 'Home' },
    { path: '/court-booking', icon: 'calendar_month', label: 'Reserva de Pistas' },
    { path: '/open-matches', icon: 'groups', label: 'Partidas Abiertas' },
    { path: '/classes', icon: 'school', label: 'Clases' },
    { path: '/tournaments', icon: 'emoji_events', label: 'Torneos' }
  ];

  updateTitle(title: string) {
    this.pageTitle.set(title);
    // Cerrar menú móvil al navegar
    this.isMobileMenuOpen.set(false);
  }

  toggleMobileMenu() {
    this.isMobileMenuOpen.set(!this.isMobileMenuOpen());
  }
}
