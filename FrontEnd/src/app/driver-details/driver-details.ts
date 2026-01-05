import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';

interface DriverStats {
  id: string;
  name: string;
  firstName: string;
  lastName: string;
  number: number;
  team: string;
  country: string;
  image: string;
  seasonStats: {
    position: number;
    points: number;
    grandPrixRaces: number;
    grandPrixPoints: number;
    grandPrixWins: number;
    grandPrixPodiums: number;
    grandPrixPoles: number;
    grandPrixTop10s: number;
    dhlFastestLaps: number;
    dnfs: number;
    sprintRaces: number;
    sprintPoints: number;
  };
  careerStats: {
    grandPrixEntered: number;
    careerPoints: number;
    highestRaceFinish: string;
    highestRaceFinishCount: number;
    podiums: number;
    highestGridPosition: number;
    highestGridPositionCount: number;
    polePositions: number;
  };
}

@Component({
  selector: 'app-driver-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './driver-details.html',
  styleUrl: './driver-details.css'
})
export class DriverDetails implements OnInit, OnDestroy {
  driver: DriverStats | null = null;
  teamColor: string = '#e10600';

  
  private teamColors: { [key: string]: string } = {
    'Red Bull Racing': '#0600ef',
    'Ferrari': '#dc0000',
    'McLaren': '#ff8700',
    'Mercedes': '#00d2be',
    'Aston Martin': '#006f62',
    'Alpine': '#0090ff',
    'Williams': '#005aff',
    'RB': '#2b4562',
    'Kick Sauber': '#00e701',
    'Haas': '#ffffff'
  };
  
  private driversData: DriverStats[] = [
    {
      id: 'verstappen',
      name: 'Max Verstappen',
      firstName: 'Max',
      lastName: 'VERSTAPPEN',
      number: 1,
      team: 'Red Bull Racing',
      country: 'Netherlands',
      image: 'https://media.formula1.com/d_driver_fallback_image.png/content/dam/fom-website/drivers/M/MAXVER01_Max_Verstappen/maxver01.png',
      seasonStats: {
        position: 1,
        points: 437,
        grandPrixRaces: 24,
        grandPrixPoints: 405,
        grandPrixWins: 19,
        grandPrixPodiums: 21,
        grandPrixPoles: 12,
        grandPrixTop10s: 24,
        dhlFastestLaps: 7,
        dnfs: 1,
        sprintRaces: 6,
        sprintPoints: 32
      },
      careerStats: {
        grandPrixEntered: 194,
        careerPoints: 2905.5,
        highestRaceFinish: '1',
        highestRaceFinishCount: 53,
        podiums: 104,
        highestGridPosition: 1,
        highestGridPositionCount: 40,
        polePositions: 40
      }
    },
    {
      id: 'hamilton',
      name: 'Lewis Hamilton',
      firstName: 'Lewis',
      lastName: 'HAMILTON',
      number: 44,
      team: 'Ferrari',
      country: 'United Kingdom',
      image: 'https://media.formula1.com/d_driver_fallback_image.png/content/dam/fom-website/drivers/L/LEWHAM01_Lewis_Hamilton/lewham01.png',
      seasonStats: {
        position: 6,
        points: 156,
        grandPrixRaces: 24,
        grandPrixPoints: 135,
        grandPrixWins: 0,
        grandPrixPodiums: 0,
        grandPrixPoles: 0,
        grandPrixTop10s: 19,
        dhlFastestLaps: 1,
        dnfs: 2,
        sprintRaces: 6,
        sprintPoints: 21
      },
      careerStats: {
        grandPrixEntered: 380,
        careerPoints: 5018.5,
        highestRaceFinish: '1',
        highestRaceFinishCount: 105,
        podiums: 202,
        highestGridPosition: 1,
        highestGridPositionCount: 104,
        polePositions: 104
      }
    },
    {
      id: 'leclerc',
      name: 'Charles Leclerc',
      firstName: 'Charles',
      lastName: 'LECLERC',
      number: 16,
      team: 'Ferrari',
      country: 'Monaco',
      image: 'https://media.formula1.com/d_driver_fallback_image.png/content/dam/fom-website/drivers/C/CHALEC01_Charles_Leclerc/chalec01.png',
      seasonStats: {
        position: 2,
        points: 307,
        grandPrixRaces: 24,
        grandPrixPoints: 295,
        grandPrixWins: 5,
        grandPrixPodiums: 14,
        grandPrixPoles: 5,
        grandPrixTop10s: 22,
        dhlFastestLaps: 3,
        dnfs: 0,
        sprintRaces: 6,
        sprintPoints: 12
      },
      careerStats: {
        grandPrixEntered: 141,
        careerPoints: 1351,
        highestRaceFinish: '1',
        highestRaceFinishCount: 6,
        podiums: 41,
        highestGridPosition: 1,
        highestGridPositionCount: 24,
        polePositions: 24
      }
    },
    {
      id: 'norris',
      name: 'Lando Norris',
      firstName: 'Lando',
      lastName: 'NORRIS',
      number: 4,
      team: 'McLaren',
      country: 'United Kingdom',
      image: 'https://media.formula1.com/d_driver_fallback_image.png/content/dam/fom-website/drivers/L/LANNOR01_Lando_Norris/lannor01.png',
      seasonStats: {
        position: 3,
        points: 279,
        grandPrixRaces: 24,
        grandPrixPoints: 264,
        grandPrixWins: 2,
        grandPrixPodiums: 13,
        grandPrixPoles: 4,
        grandPrixTop10s: 22,
        dhlFastestLaps: 4,
        dnfs: 1,
        sprintRaces: 6,
        sprintPoints: 15
      },
      careerStats: {
        grandPrixEntered: 117,
        careerPoints: 876,
        highestRaceFinish: '1',
        highestRaceFinishCount: 2,
        podiums: 27,
        highestGridPosition: 1,
        highestGridPositionCount: 5,
        polePositions: 5
      }
    },
    {
      id: 'russell',
      name: 'George Russell',
      firstName: 'George',
      lastName: 'RUSSELL',
      number: 63,
      team: 'Mercedes',
      country: 'United Kingdom',
      image: 'https://media.formula1.com/d_driver_fallback_image.png/content/dam/fom-website/drivers/G/GEORUS01_George_Russell/georus01.png',
      seasonStats: {
        position: 4,
        points: 227,
        grandPrixRaces: 24,
        grandPrixPoints: 212,
        grandPrixWins: 1,
        grandPrixPodiums: 7,
        grandPrixPoles: 2,
        grandPrixTop10s: 20,
        dhlFastestLaps: 2,
        dnfs: 1,
        sprintRaces: 6,
        sprintPoints: 15
      },
      careerStats: {
        grandPrixEntered: 99,
        careerPoints: 611,
        highestRaceFinish: '1',
        highestRaceFinishCount: 2,
        podiums: 14,
        highestGridPosition: 1,
        highestGridPositionCount: 3,
        polePositions: 3
      }
    },
    {
      id: 'alonso',
      name: 'Fernando Alonso',
      firstName: 'Fernando',
      lastName: 'ALONSO',
      number: 14,
      team: 'Aston Martin',
      country: 'Spain',
      image: 'https://media.formula1.com/d_driver_fallback_image.png/content/dam/fom-website/drivers/F/FERALO01_Fernando_Alonso/feralo01.png',
      seasonStats: {
        position: 9,
        points: 62,
        grandPrixRaces: 24,
        grandPrixPoints: 58,
        grandPrixWins: 0,
        grandPrixPodiums: 0,
        grandPrixPoles: 0,
        grandPrixTop10s: 8,
        dhlFastestLaps: 0,
        dnfs: 4,
        sprintRaces: 6,
        sprintPoints: 4
      },
      careerStats: {
        grandPrixEntered: 394,
        careerPoints: 2326,
        highestRaceFinish: '1',
        highestRaceFinishCount: 32,
        podiums: 106,
        highestGridPosition: 1,
        highestGridPositionCount: 22,
        polePositions: 22
      }
    },
    // Additional 2025 Season Drivers
    {
      id: 'tsunoda',
      name: 'Yuki Tsunoda',
      firstName: 'Yuki',
      lastName: 'TSUNODA',
      number: 22,
      team: 'Red Bull Racing',
      country: 'Japan',
      image: 'https://media.formula1.com/d_driver_fallback_image.png/content/dam/fom-website/drivers/Y/YUKTSU01_Yuki_Tsunoda/yuktsu01.png',
      seasonStats: {
        position: 2,
        points: 421,
        grandPrixRaces: 24,
        grandPrixPoints: 401,
        grandPrixWins: 3,
        grandPrixPodiums: 15,
        grandPrixPoles: 2,
        grandPrixTop10s: 22,
        dhlFastestLaps: 2,
        dnfs: 1,
        sprintRaces: 6,
        sprintPoints: 20
      },
      careerStats: {
        grandPrixEntered: 101,
        careerPoints: 695,
        highestRaceFinish: '1',
        highestRaceFinishCount: 3,
        podiums: 22,
        highestGridPosition: 1,
        highestGridPositionCount: 2,
        polePositions: 2
      }
    },
    {
      id: 'piastri',
      name: 'Oscar Piastri',
      firstName: 'Oscar',
      lastName: 'PIASTRI',
      number: 81,
      team: 'McLaren',
      country: 'Australia',
      image: 'https://media.formula1.com/d_driver_fallback_image.png/content/dam/fom-website/drivers/O/OSCPIA01_Oscar_Piastri/oscpia01.png',
      seasonStats: {
        position: 5,
        points: 268,
        grandPrixRaces: 24,
        grandPrixPoints: 250,
        grandPrixWins: 2,
        grandPrixPodiums: 10,
        grandPrixPoles: 1,
        grandPrixTop10s: 20,
        dhlFastestLaps: 3,
        dnfs: 0,
        sprintRaces: 6,
        sprintPoints: 18
      },
      careerStats: {
        grandPrixEntered: 48,
        careerPoints: 418,
        highestRaceFinish: '1',
        highestRaceFinishCount: 3,
        podiums: 15,
        highestGridPosition: 1,
        highestGridPositionCount: 2,
        polePositions: 2
      }
    },
    {
      id: 'bottas',
      name: 'Valtteri Bottas',
      firstName: 'Valtteri',
      lastName: 'BOTTAS',
      number: 77,
      team: 'Mercedes',
      country: 'Finland',
      image: 'https://media.formula1.com/d_driver_fallback_image.png/content/dam/fom-website/drivers/V/VALBOT01_Valtteri_Bottas/valbot01.png',
      seasonStats: {
        position: 7,
        points: 142,
        grandPrixRaces: 24,
        grandPrixPoints: 135,
        grandPrixWins: 0,
        grandPrixPodiums: 2,
        grandPrixPoles: 0,
        grandPrixTop10s: 15,
        dhlFastestLaps: 1,
        dnfs: 2,
        sprintRaces: 6,
        sprintPoints: 7
      },
      careerStats: {
        grandPrixEntered: 241,
        careerPoints: 1797,
        highestRaceFinish: '1',
        highestRaceFinishCount: 10,
        podiums: 67,
        highestGridPosition: 1,
        highestGridPositionCount: 20,
        polePositions: 20
      }
    },
    {
      id: 'stroll',
      name: 'Lance Stroll',
      firstName: 'Lance',
      lastName: 'STROLL',
      number: 18,
      team: 'Aston Martin',
      country: 'Canada',
      image: 'https://media.formula1.com/d_driver_fallback_image.png/content/dam/fom-website/drivers/L/LANSTR01_Lance_Stroll/lanstr01.png',
      seasonStats: {
        position: 10,
        points: 58,
        grandPrixRaces: 24,
        grandPrixPoints: 54,
        grandPrixWins: 0,
        grandPrixPodiums: 0,
        grandPrixPoles: 0,
        grandPrixTop10s: 7,
        dhlFastestLaps: 0,
        dnfs: 3,
        sprintRaces: 6,
        sprintPoints: 4
      },
      careerStats: {
        grandPrixEntered: 162,
        careerPoints: 295,
        highestRaceFinish: '3',
        highestRaceFinishCount: 3,
        podiums: 3,
        highestGridPosition: 1,
        highestGridPositionCount: 1,
        polePositions: 1
      }
    },
    {
      id: 'gasly',
      name: 'Pierre Gasly',
      firstName: 'Pierre',
      lastName: 'GASLY',
      number: 10,
      team: 'Alpine',
      country: 'France',
      image: 'gasly.png',
      seasonStats: {
        position: 8,
        points: 98,
        grandPrixRaces: 24,
        grandPrixPoints: 90,
        grandPrixWins: 0,
        grandPrixPodiums: 1,
        grandPrixPoles: 0,
        grandPrixTop10s: 12,
        dhlFastestLaps: 1,
        dnfs: 2,
        sprintRaces: 6,
        sprintPoints: 8
      },
      careerStats: {
        grandPrixEntered: 143,
        careerPoints: 435,
        highestRaceFinish: '1',
        highestRaceFinishCount: 1,
        podiums: 4,
        highestGridPosition: 2,
        highestGridPositionCount: 1,
        polePositions: 0
      }
    },
    {
      id: 'doohan',
      name: 'Jack Doohan',
      firstName: 'Jack',
      lastName: 'DOOHAN',
      number: 7,
      team: 'Alpine',
      country: 'Australia',
      image: 'https://media.formula1.com/d_driver_fallback_image.png/content/dam/fom-website/drivers/J/JACDOO01_Jack_Doohan/jacdoo01.png',
      seasonStats: {
        position: 15,
        points: 18,
        grandPrixRaces: 24,
        grandPrixPoints: 18,
        grandPrixWins: 0,
        grandPrixPodiums: 0,
        grandPrixPoles: 0,
        grandPrixTop10s: 3,
        dhlFastestLaps: 0,
        dnfs: 4,
        sprintRaces: 6,
        sprintPoints: 0
      },
      careerStats: {
        grandPrixEntered: 24,
        careerPoints: 18,
        highestRaceFinish: '8',
        highestRaceFinishCount: 1,
        podiums: 0,
        highestGridPosition: 12,
        highestGridPositionCount: 1,
        polePositions: 0
      }
    },
    {
      id: 'albon',
      name: 'Alex Albon',
      firstName: 'Alexander',
      lastName: 'ALBON',
      number: 23,
      team: 'Williams',
      country: 'Thailand',
      image: 'https://media.formula1.com/d_driver_fallback_image.png/content/dam/fom-website/drivers/A/ALEALB01_Alexander_Albon/alealb01.png',
      seasonStats: {
        position: 11,
        points: 48,
        grandPrixRaces: 24,
        grandPrixPoints: 44,
        grandPrixWins: 0,
        grandPrixPodiums: 0,
        grandPrixPoles: 0,
        grandPrixTop10s: 6,
        dhlFastestLaps: 0,
        dnfs: 2,
        sprintRaces: 6,
        sprintPoints: 4
      },
      careerStats: {
        grandPrixEntered: 90,
        careerPoints: 242,
        highestRaceFinish: '3',
        highestRaceFinishCount: 2,
        podiums: 2,
        highestGridPosition: 4,
        highestGridPositionCount: 1,
        polePositions: 0
      }
    },
    {
      id: 'sainz',
      name: 'Carlos Sainz',
      firstName: 'Carlos',
      lastName: 'SAINZ',
      number: 55,
      team: 'Williams',
      country: 'Spain',
      image: 'https://media.formula1.com/d_driver_fallback_image.png/content/dam/fom-website/drivers/C/CARSAI01_Carlos_Sainz/carsai01.png',
      seasonStats: {
        position: 12,
        points: 45,
        grandPrixRaces: 24,
        grandPrixPoints: 42,
        grandPrixWins: 0,
        grandPrixPodiums: 0,
        grandPrixPoles: 0,
        grandPrixTop10s: 5,
        dhlFastestLaps: 0,
        dnfs: 3,
        sprintRaces: 6,
        sprintPoints: 3
      },
      careerStats: {
        grandPrixEntered: 202,
        careerPoints: 1250.5,
        highestRaceFinish: '1',
        highestRaceFinishCount: 4,
        podiums: 26,
        highestGridPosition: 1,
        highestGridPositionCount: 5,
        polePositions: 5
      }
    },
    {
      id: 'lawson',
      name: 'Liam Lawson',
      firstName: 'Liam',
      lastName: 'LAWSON',
      number: 30,
      team: 'RB',
      country: 'New Zealand',
      image: 'https://media.formula1.com/d_driver_fallback_image.png/content/dam/fom-website/drivers/L/LIALAW01_Liam_Lawson/lialaw01.png',
      seasonStats: {
        position: 13,
        points: 32,
        grandPrixRaces: 24,
        grandPrixPoints: 30,
        grandPrixWins: 0,
        grandPrixPodiums: 0,
        grandPrixPoles: 0,
        grandPrixTop10s: 4,
        dhlFastestLaps: 0,
        dnfs: 3,
        sprintRaces: 6,
        sprintPoints: 2
      },
      careerStats: {
        grandPrixEntered: 30,
        careerPoints: 39,
        highestRaceFinish: '9',
        highestRaceFinishCount: 1,
        podiums: 0,
        highestGridPosition: 10,
        highestGridPositionCount: 1,
        polePositions: 0
      }
    },
    {
      id: 'hadjar',
      name: 'Isack Hadjar',
      firstName: 'Isack',
      lastName: 'HADJAR',
      number: 6,
      team: 'RB',
      country: 'France',
      image: 'https://media.formula1.com/d_driver_fallback_image.png/content/dam/fom-website/drivers/I/ISAHAD01_Isack_Hadjar/isahad01.png',
      seasonStats: {
        position: 16,
        points: 12,
        grandPrixRaces: 24,
        grandPrixPoints: 12,
        grandPrixWins: 0,
        grandPrixPodiums: 0,
        grandPrixPoles: 0,
        grandPrixTop10s: 2,
        dhlFastestLaps: 0,
        dnfs: 5,
        sprintRaces: 6,
        sprintPoints: 0
      },
      careerStats: {
        grandPrixEntered: 24,
        careerPoints: 12,
        highestRaceFinish: '10',
        highestRaceFinishCount: 2,
        podiums: 0,
        highestGridPosition: 14,
        highestGridPositionCount: 1,
        polePositions: 0
      }
    },
    {
      id: 'hulkenberg',
      name: 'Nico Hulkenberg',
      firstName: 'Nico',
      lastName: 'HULKENBERG',
      number: 27,
      team: 'Kick Sauber',
      country: 'Germany',
      image: 'https://media.formula1.com/d_driver_fallback_image.png/content/dam/fom-website/drivers/N/NICHUL01_Nico_Hulkenberg/nichul01.png',
      seasonStats: {
        position: 14,
        points: 24,
        grandPrixRaces: 24,
        grandPrixPoints: 22,
        grandPrixWins: 0,
        grandPrixPodiums: 0,
        grandPrixPoles: 0,
        grandPrixTop10s: 3,
        dhlFastestLaps: 0,
        dnfs: 4,
        sprintRaces: 6,
        sprintPoints: 2
      },
      careerStats: {
        grandPrixEntered: 225,
        careerPoints: 560,
        highestRaceFinish: '4',
        highestRaceFinishCount: 2,
        podiums: 0,
        highestGridPosition: 1,
        highestGridPositionCount: 1,
        polePositions: 1
      }
    },
    {
      id: 'bortoleto',
      name: 'Gabriel Bortoleto',
      firstName: 'Gabriel',
      lastName: 'BORTOLETO',
      number: 5,
      team: 'Kick Sauber',
      country: 'Brazil',
      image: 'https://media.formula1.com/d_driver_fallback_image.png/content/dam/fom-website/drivers/G/GABBOR01_Gabriel_Bortoleto/gabbor01.png',
      seasonStats: {
        position: 18,
        points: 6,
        grandPrixRaces: 24,
        grandPrixPoints: 6,
        grandPrixWins: 0,
        grandPrixPodiums: 0,
        grandPrixPoles: 0,
        grandPrixTop10s: 1,
        dhlFastestLaps: 0,
        dnfs: 6,
        sprintRaces: 6,
        sprintPoints: 0
      },
      careerStats: {
        grandPrixEntered: 24,
        careerPoints: 6,
        highestRaceFinish: '10',
        highestRaceFinishCount: 1,
        podiums: 0,
        highestGridPosition: 16,
        highestGridPositionCount: 1,
        polePositions: 0
      }
    },
    {
      id: 'ocon',
      name: 'Esteban Ocon',
      firstName: 'Esteban',
      lastName: 'OCON',
      number: 31,
      team: 'Haas',
      country: 'France',
      image: 'https://media.formula1.com/d_driver_fallback_image.png/content/dam/fom-website/drivers/E/ESTOCO01_Esteban_Ocon/estoco01.png',
      seasonStats: {
        position: 17,
        points: 10,
        grandPrixRaces: 24,
        grandPrixPoints: 9,
        grandPrixWins: 0,
        grandPrixPodiums: 0,
        grandPrixPoles: 0,
        grandPrixTop10s: 2,
        dhlFastestLaps: 0,
        dnfs: 4,
        sprintRaces: 6,
        sprintPoints: 1
      },
      careerStats: {
        grandPrixEntered: 145,
        careerPoints: 435,
        highestRaceFinish: '1',
        highestRaceFinishCount: 1,
        podiums: 3,
        highestGridPosition: 3,
        highestGridPositionCount: 1,
        polePositions: 0
      }
    },
    {
      id: 'bearman',
      name: 'Oliver Bearman',
      firstName: 'Oliver',
      lastName: 'BEARMAN',
      number: 87,
      team: 'Haas',
      country: 'United Kingdom',
      image: 'https://media.formula1.com/d_driver_fallback_image.png/content/dam/fom-website/drivers/O/OLIBEA01_Oliver_Bearman/olibea01.png',
      seasonStats: {
        position: 19,
        points: 4,
        grandPrixRaces: 24,
        grandPrixPoints: 4,
        grandPrixWins: 0,
        grandPrixPodiums: 0,
        grandPrixPoles: 0,
        grandPrixTop10s: 1,
        dhlFastestLaps: 0,
        dnfs: 5,
        sprintRaces: 6,
        sprintPoints: 0
      },
      careerStats: {
        grandPrixEntered: 25,
        careerPoints: 11,
        highestRaceFinish: '7',
        highestRaceFinishCount: 1,
        podiums: 0,
        highestGridPosition: 11,
        highestGridPositionCount: 1,
        polePositions: 0
      }
    }
  ];

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    const driverId = this.route.snapshot.paramMap.get('id');
    if (driverId) {
      this.driver = this.driversData.find(d => d.id === driverId) || null;
      if (!this.driver) {
        this.router.navigate(['/drivers']);
      } else {
        // Ychouflek el couleur mtaa el equipe taa el driver
        this.teamColor = this.teamColors[this.driver.team] || '#e10600';
        // yaamel apply lel couleur lel team elli howa fiha
        document.documentElement.style.setProperty('--team-color', this.teamColor);
      }
    }
  }

  ngOnDestroy() {
    // taamel reset lel team colour ki tokhroj mel page
    document.documentElement.style.setProperty('--team-color', '#e10600');
  }

  goBack() {
    this.router.navigate(['/drivers']);
  }

  getOrdinalSuffix(n: number): string {
    const s = ['th', 'st', 'nd', 'rd'];
    const v = n % 100;
    return s[(v - 20) % 10] || s[v] || s[0];
  }
}
