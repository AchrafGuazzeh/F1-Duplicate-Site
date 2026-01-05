import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

interface Driver {
  name: string;
  number: number;
}

interface Team {
  id: string;
  name: string;
  fullName: string;
  base: string;
  color: string;
  powerUnit: string;
  championships: number;
  drivers: Driver[];
  logo: string;
  carImage: string;
}

@Component({
  selector: 'app-teams',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './teams.html',
  styleUrl: './teams.css',
})
export class Teams {
  teams: Team[] = [
    {
      id: 'mclaren',
      name: 'McLaren',
      fullName: 'McLaren F1 Team',
      base: 'Woking, United Kingdom',
      color: '#ff8700',
      powerUnit: 'Mercedes',
      championships: 9,
      drivers: [
        { name: 'Oscar PIASTRI', number: 81 },
        { name: 'Lando NORRIS', number: 4 }
      ],
      logo: 'https://media.formula1.com/d_team_car_fallback_image.png/content/dam/fom-website/teams/2024/mclaren-logo.png',
      carImage: 'https://media.formula1.com/d_team_car_fallback_image.png/content/dam/fom-website/teams/2024/mclaren.png'
    },
    {
      id: 'mercedes',
      name: 'Mercedes',
      fullName: 'Mercedes-AMG Petronas F1 Team',
      base: 'Brackley, United Kingdom',
      color: '#00d2be',
      powerUnit: 'Mercedes',
      championships: 8,
      drivers: [
        { name: 'George RUSSELL', number: 63 },
        { name: 'Kimi ANTONELLI', number: 12 }
      ],
      logo: 'https://media.formula1.com/d_team_car_fallback_image.png/content/dam/fom-website/teams/2024/mercedes-logo.png',
      carImage: 'https://media.formula1.com/d_team_car_fallback_image.png/content/dam/fom-website/teams/2024/mercedes.png'
    },
    {
      id: 'red-bull',
      name: 'Red Bull Racing',
      fullName: 'Oracle Red Bull Racing',
      base: 'Milton Keynes, United Kingdom',
      color: '#0600ef',
      powerUnit: 'Red Bull Powertrains',
      championships: 7,
      drivers: [
        { name: 'Max VERSTAPPEN', number: 1 },
        { name: 'Yuki TSUNODA', number: 22 }
      ],
      logo: 'https://media.formula1.com/d_team_car_fallback_image.png/content/dam/fom-website/teams/2024/red-bull-racing-logo.png',
      carImage: 'https://media.formula1.com/d_team_car_fallback_image.png/content/dam/fom-website/teams/2024/red-bull-racing.png'
    },
    {
      id: 'ferrari',
      name: 'Ferrari',
      fullName: 'Scuderia Ferrari',
      base: 'Maranello, Italy',
      color: '#dc0000',
      powerUnit: 'Ferrari',
      championships: 16,
      drivers: [
        { name: 'Charles LECLERC', number: 16 },
        { name: 'Lewis HAMILTON', number: 44 }
      ],
      logo: 'https://media.formula1.com/d_team_car_fallback_image.png/content/dam/fom-website/teams/2024/ferrari-logo.png',
      carImage: 'https://media.formula1.com/d_team_car_fallback_image.png/content/dam/fom-website/teams/2024/ferrari.png'
    },
    {
      id: 'aston-martin',
      name: 'Aston Martin',
      fullName: 'Aston Martin Aramco F1 Team',
      base: 'Silverstone, United Kingdom',
      color: '#006f62',
      powerUnit: 'Mercedes',
      championships: 0,
      drivers: [
        { name: 'Fernando ALONSO', number: 14 },
        { name: 'Lance STROLL', number: 18 }
      ],
      logo: 'https://media.formula1.com/d_team_car_fallback_image.png/content/dam/fom-website/teams/2024/aston-martin-logo.png',
      carImage: 'https://media.formula1.com/d_team_car_fallback_image.png/content/dam/fom-website/teams/2024/aston-martin.png'
    },
    {
      id: 'alpine',
      name: 'Alpine',
      fullName: 'BWT Alpine F1 Team',
      base: 'Enstone, United Kingdom',
      color: '#0090ff',
      powerUnit: 'Renault',
      championships: 2,
      drivers: [
        { name: 'Pierre GASLY', number: 10 },
        { name: 'Jack DOOHAN', number: 7 }
      ],
      logo: 'https://media.formula1.com/d_team_car_fallback_image.png/content/dam/fom-website/teams/2024/alpine-logo.png',
      carImage: 'https://media.formula1.com/d_team_car_fallback_image.png/content/dam/fom-website/teams/2024/alpine.png'
    },
    {
      id: 'williams',
      name: 'Williams',
      fullName: 'Williams Racing',
      base: 'Grove, United Kingdom',
      color: '#005aff',
      powerUnit: 'Mercedes',
      championships: 9,
      drivers: [
        { name: 'Alex ALBON', number: 23 },
        { name: 'Carlos SAINZ', number: 55 }
      ],
      logo: 'https://media.formula1.com/d_team_car_fallback_image.png/content/dam/fom-website/teams/2024/williams-logo.png',
      carImage: 'https://media.formula1.com/d_team_car_fallback_image.png/content/dam/fom-website/teams/2024/williams.png'
    },
    {
      id: 'rb',
      name: 'RB',
      fullName: 'Visa Cash App RB F1 Team',
      base: 'Faenza, Italy',
      color: '#2b4562',
      powerUnit: 'Red Bull Powertrains',
      championships: 0,
      drivers: [
        { name: 'Liam LAWSON', number: 30 },
        { name: 'Isack HADJAR', number: 6 }
      ],
      logo: 'https://media.formula1.com/d_team_car_fallback_image.png/content/dam/fom-website/teams/2024/rb-logo.png',
      carImage: 'https://media.formula1.com/d_team_car_fallback_image.png/content/dam/fom-website/teams/2024/rb.png'
    },
    {
      id: 'kick-sauber',
      name: 'Kick Sauber',
      fullName: 'Stake F1 Team Kick Sauber',
      base: 'Hinwil, Switzerland',
      color: '#00e701',
      powerUnit: 'Ferrari',
      championships: 0,
      drivers: [
        { name: 'Nico HULKENBERG', number: 27 },
        { name: 'Gabriel BORTOLETO', number: 5 }
      ],
      logo: 'https://media.formula1.com/d_team_car_fallback_image.png/content/dam/fom-website/teams/2024/kick-sauber-logo.png',
      carImage: 'https://media.formula1.com/d_team_car_fallback_image.png/content/dam/fom-website/teams/2024/kick-sauber.png'
    },
    {
      id: 'haas',
      name: 'Haas',
      fullName: 'MoneyGram Haas F1 Team',
      base: 'Kannapolis, United States',
      color: '#B6BABD',
      powerUnit: 'Ferrari',
      championships: 0,
      drivers: [
        { name: 'Esteban OCON', number: 31 },
        { name: 'Oliver BEARMAN', number: 87 }
      ],
      logo: 'https://media.formula1.com/d_team_car_fallback_image.png/content/dam/fom-website/teams/2024/haas-f1-team-logo.png',
      carImage: 'https://media.formula1.com/d_team_car_fallback_image.png/content/dam/fom-website/teams/2024/haas-f1-team.png'
    }
  ];

  constructor(private router: Router) {}

  viewTeamDetails(teamId: string) {
    this.router.navigate(['/teams', teamId]);
  }
}
