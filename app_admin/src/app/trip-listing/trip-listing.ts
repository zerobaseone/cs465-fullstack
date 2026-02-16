import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TripCardComponent } from '../trip-card/trip-card';
import { Trip } from '../models/trip'; 
import { TripData } from '../services/trip-data';

@Component({
  selector: 'app-trip-listing',
  standalone: true,
  imports: [CommonModule, TripCardComponent],
  templateUrl: './trip-listing.html',
  styleUrl: './trip-listing.css',
  providers: [TripData]
})

export class TripListingComponent implements OnInit {
  trips: Trip[] = [];
  message: string = ''; //not in guide p. 146

  constructor(private tripData: TripData) {
    console.log('trip-listing constructor');
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
      },
      error: (error: any) => {
        console.error('Error fetching trips:', error);
        this.message = 'Unable to load trips. Is the API server running at http://localhost:3000?';
      }
    });
  }

  ngOnInit(): void {
    console.log('ngOnInit');
    this.getStuff();
  }
}