import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TripCardComponent } from '../trip-card/trip-card';
import { Trip } from '../models/trip';
import { TripData } from '../services/trip-data';
import { Router } from '@angular/router';
import { Authentication } from '../services/authentication';

@Component({
  selector: 'app-trip-listing',
  standalone: true,
  imports: [CommonModule, TripCardComponent],
  templateUrl: './trip-listing.html',
  styleUrl: './trip-listing.css',
  providers: [TripData],
  host: { style: 'display: block;' },
})
export class TripListingComponent implements OnInit {
  trips: Trip[] = [];
  message: string = '';

  constructor(
    private tripData: TripData,
    private router: Router,
    private cdr: ChangeDetectorRef,
    private authentication: Authentication
  ) {}

  public isLoggedIn() {
    return this.authentication.isLoggedIn();
  }

  public addTrip(): void {
    this.router.navigate(['/add-trip']);
  }

  refreshTrips(): void {
    this.getStuff();
  }

  private getStuff(): void {
    this.tripData.getTrips().subscribe({
      next: (value: any) => {
        this.trips = value || [];
        if (this.trips.length > 0) {
          this.message = 'There are ' + this.trips.length + ' trips available';
        } else {
          this.message = 'No trips are available';
        }
        this.cdr.detectChanges();
      },
      error: (error: any) => {
        console.error('Error fetching trips:', error);
        this.message = 'Unable to load trips. Is the API server running at http://localhost:3000?';
      }
    });
  }

  ngOnInit(): void {
    this.getStuff();
  }
}