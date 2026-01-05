import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

interface Driver {
  id: string;
  firstName: string;
  lastName: string;
  team: string;
  number: number;
  teamColor: string;
  country: string;
  countryCode: string;
  image: string;
}

@Component({
  selector: 'app-drivers',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './drivers.html',
  styleUrl: './drivers.css',
})
export class Drivers {
  drivers: Driver[] = [
    // McLaren
    { 
      id: 'piastri', 
      firstName: 'Oscar', 
      lastName: 'Piastri', 
      team: 'McLaren', 
      number: 81, 
      teamColor: '#ff8700',
      country: 'Australia',
      countryCode: 'AU',
      image: 'https://media.formula1.com/d_driver_fallback_image.png/content/dam/fom-website/drivers/O/OSCPIA01_Oscar_Piastri/oscpia01.png'
    },
    { 
      id: 'norris', 
      firstName: 'Lando', 
      lastName: 'Norris', 
      team: 'McLaren', 
      number: 4, 
      teamColor: '#ff8700',
      country: 'United Kingdom',
      countryCode: 'GB',
      image: 'https://media.formula1.com/d_driver_fallback_image.png/content/dam/fom-website/drivers/L/LANNOR01_Lando_Norris/lannor01.png'
    },
    // Mercedes
    { 
      id: 'russell', 
      firstName: 'George', 
      lastName: 'Russell', 
      team: 'Mercedes', 
      number: 63, 
      teamColor: '#00d2be',
      country: 'United Kingdom',
      countryCode: 'GB',
      image: 'https://media.formula1.com/d_driver_fallback_image.png/content/dam/fom-website/drivers/G/GEORUS01_George_Russell/georus01.png'
    },
    { 
      id: 'bottas', 
      firstName: 'Valtteri', 
      lastName: 'Bottas', 
      team: 'Mercedes', 
      number: 77, 
      teamColor: '#00d2be',
      country: 'Finland',
      countryCode: 'FI',
      image: 'https://media.formula1.com/d_driver_fallback_image.png/content/dam/fom-website/drivers/V/VALBOT01_Valtteri_Bottas/valbot01.png'
    },
    // Red Bull Racing
    { 
      id: 'verstappen', 
      firstName: 'Max', 
      lastName: 'Verstappen', 
      team: 'Red Bull Racing', 
      number: 1, 
      teamColor: '#0600ef',
      country: 'Netherlands',
      countryCode: 'NL',
      image: 'https://media.formula1.com/d_driver_fallback_image.png/content/dam/fom-website/drivers/M/MAXVER01_Max_Verstappen/maxver01.png'
    },
    { 
      id: 'tsunoda', 
      firstName: 'Yuki', 
      lastName: 'Tsunoda', 
      team: 'Red Bull Racing', 
      number: 22, 
      teamColor: '#0600ef',
      country: 'Japan',
      countryCode: 'JP',
      image: 'https://media.formula1.com/d_driver_fallback_image.png/content/dam/fom-website/drivers/Y/YUKTSU01_Yuki_Tsunoda/yuktsu01.png'
    },
    // Ferrari
    { 
      id: 'leclerc', 
      firstName: 'Charles', 
      lastName: 'Leclerc', 
      team: 'Ferrari', 
      number: 16, 
      teamColor: '#dc0000',
      country: 'Monaco',
      countryCode: 'MC',
      image: 'https://media.formula1.com/d_driver_fallback_image.png/content/dam/fom-website/drivers/C/CHALEC01_Charles_Leclerc/chalec01.png'
    },
    { 
      id: 'hamilton', 
      firstName: 'Lewis', 
      lastName: 'Hamilton', 
      team: 'Ferrari', 
      number: 44, 
      teamColor: '#dc0000',
      country: 'United Kingdom',
      countryCode: 'GB',
      image: 'https://media.formula1.com/d_driver_fallback_image.png/content/dam/fom-website/drivers/L/LEWHAM01_Lewis_Hamilton/lewham01.png'
    },
    // Aston Martin
    { 
      id: 'alonso', 
      firstName: 'Fernando', 
      lastName: 'Alonso', 
      team: 'Aston Martin', 
      number: 14, 
      teamColor: '#006f62',
      country: 'Spain',
      countryCode: 'ES',
      image: 'https://media.formula1.com/d_driver_fallback_image.png/content/dam/fom-website/drivers/F/FERALO01_Fernando_Alonso/feralo01.png'
    },
    { 
      id: 'stroll', 
      firstName: 'Lance', 
      lastName: 'Stroll', 
      team: 'Aston Martin', 
      number: 18, 
      teamColor: '#006f62',
      country: 'Canada',
      countryCode: 'CA',
      image: 'https://media.formula1.com/d_driver_fallback_image.png/content/dam/fom-website/drivers/L/LANSTR01_Lance_Stroll/lanstr01.png'
    },
    // Alpine
    { 
      id: 'gasly', 
      firstName: 'Pierre', 
      lastName: 'Gasly', 
      team: 'Alpine', 
      number: 10, 
      teamColor: '#0090ff',
      country: 'France',
      countryCode: 'FR',
      image: 'https://media.formula1.com/d_driver_fallback_image.png/content/dam/fom-website/drivers/P/PIEGAS01_Pierre_Gasly/piegas01.png'
    },
    { 
      id: 'doohan', 
      firstName: 'Jack', 
      lastName: 'Doohan', 
      team: 'Alpine', 
      number: 7, 
      teamColor: '#0090ff',
      country: 'Australia',
      countryCode: 'AU',
      image: 'https://media.formula1.com/d_driver_fallback_image.png/content/dam/fom-website/drivers/J/JACDOO01_Jack_Doohan/jacdoo01.png'
    },
    // Williams
    { 
      id: 'albon', 
      firstName: 'Alex', 
      lastName: 'Albon', 
      team: 'Williams', 
      number: 23, 
      teamColor: '#005aff',
      country: 'Thailand',
      countryCode: 'TH',
      image: 'https://media.formula1.com/d_driver_fallback_image.png/content/dam/fom-website/drivers/A/ALEALB01_Alexander_Albon/alealb01.png'
    },
    { 
      id: 'sainz', 
      firstName: 'Carlos', 
      lastName: 'Sainz', 
      team: 'Williams', 
      number: 55, 
      teamColor: '#005aff',
      country: 'Spain',
      countryCode: 'ES',
      image: 'https://media.formula1.com/d_driver_fallback_image.png/content/dam/fom-website/drivers/C/CARSAI01_Carlos_Sainz/carsai01.png'
    },
    // RB
    { 
      id: 'lawson', 
      firstName: 'Liam', 
      lastName: 'Lawson', 
      team: 'RB', 
      number: 30, 
      teamColor: '#2b4562',
      country: 'New Zealand',
      countryCode: 'NZ',
      image: 'https://media.formula1.com/d_driver_fallback_image.png/content/dam/fom-website/drivers/L/LIALAW01_Liam_Lawson/lialaw01.png'
    },
    { 
      id: 'hadjar', 
      firstName: 'Isack', 
      lastName: 'Hadjar', 
      team: 'RB', 
      number: 6, 
      teamColor: '#2b4562',
      country: 'France',
      countryCode: 'FR',
      image: 'https://media.formula1.com/d_driver_fallback_image.png/content/dam/fom-website/drivers/I/ISAHAD01_Isack_Hadjar/isahad01.png'
    },
    // Kick Sauber
    { 
      id: 'hulkenberg', 
      firstName: 'Nico', 
      lastName: 'Hulkenberg', 
      team: 'Kick Sauber', 
      number: 27, 
      teamColor: '#00e701',
      country: 'Germany',
      countryCode: 'DE',
      image: 'https://media.formula1.com/d_driver_fallback_image.png/content/dam/fom-website/drivers/N/NICHUL01_Nico_Hulkenberg/nichul01.png'
    },
    { 
      id: 'bortoleto', 
      firstName: 'Gabriel', 
      lastName: 'Bortoleto', 
      team: 'Kick Sauber', 
      number: 5, 
      teamColor: '#00e701',
      country: 'Brazil',
      countryCode: 'BR',
      image: 'https://media.formula1.com/d_driver_fallback_image.png/content/dam/fom-website/drivers/G/GABBOR01_Gabriel_Bortoleto/gabbor01.png'
    },
    // Haas
    { 
      id: 'ocon', 
      firstName: 'Esteban', 
      lastName: 'Ocon', 
      team: 'Haas', 
      number: 31, 
      teamColor: '#B6BABD',
      country: 'France',
      countryCode: 'FR',
      image: 'https://media.formula1.com/d_driver_fallback_image.png/content/dam/fom-website/drivers/E/ESTOCO01_Esteban_Ocon/estoco01.png'
    },
    { 
      id: 'bearman', 
      firstName: 'Oliver', 
      lastName: 'Bearman', 
      team: 'Haas', 
      number: 87, 
      teamColor: '#B6BABD',
      country: 'United Kingdom',
      countryCode: 'GB',
      image: 'https://media.formula1.com/d_driver_fallback_image.png/content/dam/fom-website/drivers/O/OLIBEA01_Oliver_Bearman/olibea01.png'
    }
  ];

  constructor(private router: Router) {}

  viewDriverDetails(driverId: string) {
    this.router.navigate(['/drivers', driverId]);
  }

  getCountryFlag(countryCode: string): string {
    const flagMap: { [key: string]: string } = {
      'GB': '🇬🇧',
      'AU': '🇦🇺',
      'IT': '🇮🇹',
      'NL': '🇳🇱',
      'JP': '🇯🇵',
      'MC': '🇲🇨',
      'ES': '🇪🇸',
      'CA': '🇨🇦',
      'FR': '🇫🇷',
      'TH': '🇹🇭',
      'NZ': '🇳🇿',
      'DE': '🇩🇪',
      'BR': '🇧🇷'
    };
    return flagMap[countryCode] || '🏁';
  }
}
