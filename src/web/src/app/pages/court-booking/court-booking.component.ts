import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-court-booking',
  imports: [MatCardModule, MatButtonModule],
  templateUrl: './court-booking.component.html',
  styleUrl: './court-booking.component.scss'
})
export class CourtBookingComponent {
}
