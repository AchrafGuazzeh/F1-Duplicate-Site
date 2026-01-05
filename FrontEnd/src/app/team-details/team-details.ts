import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';

interface TeamDriver {
  name: string;
  number: number;
  id: string;
}

interface Team {
  id: string;
  name: string;
  fullName: string;
  base: string;
  teamChief: string;
  technicalChief: string;
  chassis: string;
  powerUnit: string;
  firstEntry: number;
  worldChampionships: number;
  polePositions: number;
  fastestLaps: number;
  color: string;
  drivers: TeamDriver[];
}

@Component({
  selector: 'app-team-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './team-details.html',
  styleUrl: './team-details.css'
})
export class TeamDetails implements OnInit, OnDestroy {
  team: Team | null = null;

  private teamsData: Team[] = [
    {
      id: 'red-bull',
      name: 'Red Bull Racing',
      fullName: 'Oracle Red Bull Racing',
      base: 'Milton Keynes, United Kingdom',
      teamChief: 'Christian Horner',
      technicalChief: 'Pierre Waché',
      chassis: 'RB21',
      powerUnit: 'Red Bull Powertrains',
      firstEntry: 2005,
      worldChampionships: 7,
      polePositions: 98,
      fastestLaps: 91,
      color: '#0600ef',
      drivers: [
        { name: 'Max Verstappen', number: 1, id: 'verstappen' },
        { name: 'Yuki Tsunoda', number: 22, id: 'tsunoda' }
      ]
    },
    {
      id: 'ferrari',
      name: 'Ferrari',
      fullName: 'Scuderia Ferrari',
      base: 'Maranello, Italy',
      teamChief: 'Frédéric Vasseur',
      technicalChief: 'Enrico Cardile',
      chassis: 'SF-25',
      powerUnit: 'Ferrari',
      firstEntry: 1950,
      worldChampionships: 16,
      polePositions: 251,
      fastestLaps: 260,
      color: '#dc0000',
      drivers: [
        { name: 'Charles Leclerc', number: 16, id: 'leclerc' },
        { name: 'Lewis Hamilton', number: 44, id: 'hamilton' }
      ]
    },
    {
      id: 'mclaren',
      name: 'McLaren',
      fullName: 'McLaren F1 Team',
      base: 'Woking, United Kingdom',
      teamChief: 'Andrea Stella',
      technicalChief: 'Peter Prodromou',
      chassis: 'MCL39',
      powerUnit: 'Mercedes',
      firstEntry: 1966,
      worldChampionships: 9,
      polePositions: 162,
      fastestLaps: 164,
      color: '#ff8700',
      drivers: [
        { name: 'Lando Norris', number: 4, id: 'norris' },
        { name: 'Oscar Piastri', number: 81, id: 'piastri' }
      ]
    },
    {
      id: 'mercedes',
      name: 'Mercedes',
      fullName: 'Mercedes-AMG Petronas F1 Team',
      base: 'Brackley, United Kingdom',
      teamChief: 'Toto Wolff',
      technicalChief: 'James Allison',
      chassis: 'W16',
      powerUnit: 'Mercedes',
      firstEntry: 1970,
      worldChampionships: 8,
      polePositions: 138,
      fastestLaps: 98,
      color: '#00d2be',
      drivers: [
        { name: 'George Russell', number: 63, id: 'russell' },
        { name: 'Kimi Antonelli', number: 12, id: 'antonelli' }
      ]
    },
    {
      id: 'aston-martin',
      name: 'Aston Martin',
      fullName: 'Aston Martin Aramco F1 Team',
      base: 'Silverstone, United Kingdom',
      teamChief: 'Mike Krack',
      technicalChief: 'Dan Fallows',
      chassis: 'AMR25',
      powerUnit: 'Mercedes',
      firstEntry: 2021,
      worldChampionships: 0,
      polePositions: 1,
      fastestLaps: 2,
      color: '#006f62',
      drivers: [
        { name: 'Fernando Alonso', number: 14, id: 'alonso' },
        { name: 'Lance Stroll', number: 18, id: 'stroll' }
      ]
    },
    {
      id: 'alpine',
      name: 'Alpine',
      fullName: 'BWT Alpine F1 Team',
      base: 'Enstone, United Kingdom',
      teamChief: 'Oliver Oakes',
      technicalChief: 'David Sanchez',
      chassis: 'A525',
      powerUnit: 'Renault',
      firstEntry: 1986,
      worldChampionships: 2,
      polePositions: 21,
      fastestLaps: 15,
      color: '#0090ff',
      drivers: [
        { name: 'Pierre Gasly', number: 10, id: 'gasly' },
        { name: 'Jack Doohan', number: 7, id: 'doohan' }
      ]
    },
    {
      id: 'williams',
      name: 'Williams',
      fullName: 'Williams Racing',
      base: 'Grove, United Kingdom',
      teamChief: 'James Vowles',
      technicalChief: 'Pat Fry',
      chassis: 'FW47',
      powerUnit: 'Mercedes',
      firstEntry: 1978,
      worldChampionships: 9,
      polePositions: 128,
      fastestLaps: 133,
      color: '#005aff',
      drivers: [
        { name: 'Alex Albon', number: 23, id: 'albon' },
        { name: 'Carlos Sainz', number: 55, id: 'sainz' }
      ]
    },
    {
      id: 'rb',
      name: 'RB',
      fullName: 'Visa Cash App RB F1 Team',
      base: 'Faenza, Italy',
      teamChief: 'Laurent Mekies',
      technicalChief: 'Jody Egginton',
      chassis: 'VCARB 02',
      powerUnit: 'Red Bull Powertrains',
      firstEntry: 2006,
      worldChampionships: 0,
      polePositions: 1,
      fastestLaps: 2,
      color: '#2b4562',
      drivers: [
        { name: 'Liam Lawson', number: 30, id: 'lawson' },
        { name: 'Isack Hadjar', number: 6, id: 'hadjar' }
      ]
    },
    {
      id: 'kick-sauber',
      name: 'Kick Sauber',
      fullName: 'Stake F1 Team Kick Sauber',
      base: 'Hinwil, Switzerland',
      teamChief: 'Alessandro Alunni Bravi',
      technicalChief: 'Jan Monchaux',
      chassis: 'C45',
      powerUnit: 'Ferrari',
      firstEntry: 1993,
      worldChampionships: 0,
      polePositions: 1,
      fastestLaps: 7,
      color: '#00e701',
      drivers: [
        { name: 'Nico Hulkenberg', number: 27, id: 'hulkenberg' },
        { name: 'Gabriel Bortoleto', number: 5, id: 'bortoleto' }
      ]
    },
    {
      id: 'haas',
      name: 'Haas',
      fullName: 'MoneyGram Haas F1 Team',
      base: 'Kannapolis, United States',
      teamChief: 'Ayao Komatsu',
      technicalChief: 'Andrea De Zordo',
      chassis: 'VF-25',
      powerUnit: 'Ferrari',
      firstEntry: 2016,
      worldChampionships: 0,
      polePositions: 1,
      fastestLaps: 2,
      color: '#ffffff',
      drivers: [
        { name: 'Esteban Ocon', number: 31, id: 'ocon' },
        { name: 'Oliver Bearman', number: 87, id: 'bearman' }
      ]
    }
  ];

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    const teamId = this.route.snapshot.paramMap.get('id');
    if (teamId) {
      this.team = this.teamsData.find(t => t.id === teamId) || null;
      if (!this.team) {
        this.router.navigate(['/teams']);
      } else {
        // Apply team color to CSS custom property
        document.documentElement.style.setProperty('--team-color', this.team.color);
      }
    }
  }

  ngOnDestroy() {
    // Reset team color when leaving
    document.documentElement.style.setProperty('--team-color', '#e10600');
  }

  goBack() {
    this.router.navigate(['/teams']);
  }

  viewDriver(driverId: string) {
    this.router.navigate(['/drivers', driverId]);
  }
}
