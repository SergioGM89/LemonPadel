import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OpenMatchesComponent } from './open-matches.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { provideZonelessChangeDetection } from '@angular/core';

describe('OpenMatchesComponent', () => {
  let component: OpenMatchesComponent;
  let fixture: ComponentFixture<OpenMatchesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OpenMatchesComponent, MatCardModule, MatButtonModule],
      providers: [provideZonelessChangeDetection()]
    }).compileComponents();

    fixture = TestBed.createComponent(OpenMatchesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});
