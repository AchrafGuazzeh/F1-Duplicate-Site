import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tickets',
  imports: [],
  templateUrl: './tickets.html',
  styleUrl: './tickets.css',
})
export class Tickets {
  constructor(private router: Router) {}

  navigateToTicketList(type: 'weekend-pass' | 'grandstand') {
    this.router.navigate(['/tickets/ticket-list'], { queryParams: { type } });
  }
}
