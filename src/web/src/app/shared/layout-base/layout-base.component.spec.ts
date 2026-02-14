import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LayoutBaseComponent } from './layout-base.component';
import { provideRouter } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { provideZonelessChangeDetection } from '@angular/core';

describe('LayoutBaseComponent', () => {
  let component: LayoutBaseComponent;
  let fixture: ComponentFixture<LayoutBaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LayoutBaseComponent, MatIconModule, MatButtonModule, MatToolbarModule],
      providers: [provideRouter([]), provideZonelessChangeDetection()]
    }).compileComponents();

    fixture = TestBed.createComponent(LayoutBaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have default page title', () => {
    expect(component['pageTitle']()).toBe('Dashboard');
  });

  it('should have mobile menu closed by default', () => {
    expect(component['isMobileMenuOpen']()).toBe(false);
  });

  it('should have menu items defined', () => {
    expect(component['menuItems'].length).toBe(5);
    expect(component['menuItems'][0].path).toBe('/dashboard');
    expect(component['menuItems'][0].icon).toBe('home');
    expect(component['menuItems'][0].label).toBe('Home');
  });

  it('should update title when updateTitle is called', () => {
    component.updateTitle('Settings');
    expect(component['pageTitle']()).toBe('Settings');
  });

  it('should close mobile menu when updateTitle is called', () => {
    component['isMobileMenuOpen'].set(true);
    component.updateTitle('Test');
    expect(component['isMobileMenuOpen']()).toBe(false);
  });

  it('should toggle mobile menu', () => {
    expect(component['isMobileMenuOpen']()).toBe(false);
    component.toggleMobileMenu();
    expect(component['isMobileMenuOpen']()).toBe(true);
    component.toggleMobileMenu();
    expect(component['isMobileMenuOpen']()).toBe(false);
  });

  it('should have correct menu structure', () => {
    const menuItems = component['menuItems'];
    expect(menuItems).toEqual([
      { path: '/dashboard', icon: 'home', label: 'Home' },
      { path: '/court-booking', icon: 'calendar_month', label: 'Reserva de Pistas' },
      { path: '/open-matches', icon: 'groups', label: 'Partidas Abiertas' },
      { path: '/classes', icon: 'school', label: 'Clases' },
      { path: '/tournaments', icon: 'emoji_events', label: 'Torneos' }
    ]);
  });
});
