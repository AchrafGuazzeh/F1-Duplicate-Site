import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-store',
  imports: [],
  templateUrl: './store.html',
  styleUrl: './store.css',
})
export class Store {
  constructor(private router: Router) {}

  navigateToMerchandise(type: 'team-merchandise' | 'driver-gear' | 'collectibles') {
    this.router.navigate(['/store/merchandise'], { queryParams: { type } });
  }
}
