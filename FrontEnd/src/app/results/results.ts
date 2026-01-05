import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface DriverStanding {
  position: number;
  driver: string;
  nationality: string;
  team: string;
  points: number;
}

@Component({
  selector: 'app-results',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './results.html',
  styleUrl: './results.css',
})
export class Results {
  driverStandings: DriverStanding[] = [
    { position: 1, driver: 'Lando Norris', nationality: 'United Kingdom', team: 'McLaren', points: 423 },
    { position: 2, driver: 'Max Verstappen', nationality: 'Netherlands', team: 'Red Bull Racing', points: 421 },
    { position: 3, driver: 'Oscar Piastri', nationality: 'Australia', team: 'McLaren', points: 410 },
    { position: 4, driver: 'George Russell', nationality: 'United Kingdom', team: 'Mercedes', points: 319 },
    { position: 5, driver: 'Charles Leclerc', nationality: 'Monaco', team: 'Ferrari', points: 242 },
    { position: 6, driver: 'Lewis Hamilton', nationality: 'United Kingdom', team: 'Ferrari', points: 156 },
    { position: 7, driver: 'Valtteri Bottas', nationality: 'Finland', team: 'Mercedes', points: 150 },
    { position: 8, driver: 'Alexander Albon', nationality: 'Thailand', team: 'Williams', points: 73 },
    { position: 9, driver: 'Carlos Sainz', nationality: 'Spain', team: 'Williams', points: 64 },
    { position: 10, driver: 'Fernando Alonso', nationality: 'Spain', team: 'Aston Martin', points: 62 },
    { position: 11, driver: 'Lance Stroll', nationality: 'Canada', team: 'Aston Martin', points: 58 },
    { position: 12, driver: 'Yuki Tsunoda', nationality: 'Japan', team: 'Red Bull Racing', points: 48 },
    { position: 13, driver: 'Liam Lawson', nationality: 'New Zealand', team: 'RB', points: 32 },
    { position: 14, driver: 'Nico Hulkenberg', nationality: 'Germany', team: 'Kick Sauber', points: 24 },
    { position: 15, driver: 'Jack Doohan', nationality: 'Australia', team: 'Alpine', points: 18 },
    { position: 16, driver: 'Isack Hadjar', nationality: 'France', team: 'RB', points: 12 },
    { position: 17, driver: 'Esteban Ocon', nationality: 'France', team: 'Haas', points: 10 },
    { position: 18, driver: 'Gabriel Bortoleto', nationality: 'Brazil', team: 'Kick Sauber', points: 6 },
    { position: 19, driver: 'Oliver Bearman', nationality: 'United Kingdom', team: 'Haas', points: 4 }
  ];
}
