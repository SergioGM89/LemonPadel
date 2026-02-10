import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CourtBookingComponent } from './court-booking.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { provideZonelessChangeDetection } from '@angular/core';

describe('CourtBookingComponent', () => {
  let component: CourtBookingComponent;
  let fixture: ComponentFixture<CourtBookingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CourtBookingComponent, MatCardModule, MatButtonModule],
      providers: [provideZonelessChangeDetection()]
    }).compileComponents();

    fixture = TestBed.createComponent(CourtBookingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});
