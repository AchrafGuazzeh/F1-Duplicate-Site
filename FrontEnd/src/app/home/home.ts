import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { RouterLink, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NewsService } from '../services/news.service';
import { News } from '../models/news';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-home',
  imports: [RouterLink, CommonModule],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home implements OnInit {
  newsList: News[] = [];

  constructor(
    private router: Router,
    private newsService: NewsService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit() {
    this.loadNews();
  }

  loadNews() {
    this.newsService.getAllNews().subscribe({
      next: (data) => {
        console.log('News loaded on home page:', data);
        this.newsList = data.slice(0, 4);
        console.log('Displaying news:', this.newsList);
        this.cdr.detectChanges();
      },
      error: (error) => {
        console.error('Error loading news on home page:', error);
        Swal.fire({
          title: 'Error!',
          text: 'Failed to load news. Please make sure the backend is running.',
          icon: 'error',
          confirmButtonColor: '#e10600',
          background: '#1e1e2e',
          color: '#ffffff'
        });
      }
    });
  }

  goToManageNews() {
    this.router.navigate(['/news']);
  }
}
