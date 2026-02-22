import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { Trip } from '../models/trip';
import { Authentication } from '../services/authentication';
import { TripData } from '../services/trip-data';

@Component({
  selector: 'app-trip-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './trip-card.html',
  styleUrl: './trip-card.css',
  host: { style: 'display: block;' },
})
export class TripCardComponent implements OnInit {
  @Input('trip') trip: any;
  @Output() tripDeleted = new EventEmitter<void>();

  constructor(
    private router: Router,
    private authentication: Authentication,
    private tripData: TripData
  ) { }

  ngOnInit(): void {
  }

  public isLoggedIn() {
    return this.authentication.isLoggedIn();
  }

  public getPerPersonNumber(perPerson: string): number {
    if (!perPerson) return 0;
    const num = parseFloat(String(perPerson).replace(/[^0-9.-]/g, ''));
    return isNaN(num) ? 0 : num;
  }

  public editTrip(trip: Trip) {
    localStorage.removeItem('tripCode');
    localStorage.setItem('tripCode', trip.code);
    this.router.navigate(['edit-trip']);
  }

  public deleteTrip(trip: Trip) {
    this.tripData.deleteTrip(trip._id).subscribe({
      next: () => this.tripDeleted.emit(),
      error: () => {}
    });
  }
}