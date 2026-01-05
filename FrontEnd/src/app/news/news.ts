import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { NewsService } from '../services/news.service';
import { News as NewsModel } from '../models/news';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-news',
  imports: [CommonModule],
  templateUrl: './news.html',
  styleUrl: './news.css',
})
export class News implements OnInit {
  newsList: NewsModel[] = [];

  constructor(
    private newsService: NewsService,
    private router: Router,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit() {
    this.loadNews();
  }

  loadNews() {
    this.newsService.getAllNews().subscribe({
      next: (data) => {
        this.newsList = data;
        this.cdr.detectChanges();
      },
      error: (error) => {
        console.error('Error loading news:', error);
        alert('Error loading news. Please make sure the backend is running.');
      }
    });
  }

  goToAddNews() {
    this.router.navigate(['/news/add']);
  }

  modifyNews(id: number) {
    this.router.navigate(['/news/modify', id]);
  }

  deleteNews(id: number) {
    Swal.fire({
      title: 'Delete News?',
      text: 'Are you sure you want to delete this news article?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#e10600',
      cancelButtonColor: '#38383d',
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'Cancel',
      background: '#1e1e2e',
      color: '#ffffff'
    }).then((result) => {
      if (result.isConfirmed) {
        this.newsService.deleteNews(id).subscribe({
          next: () => {
            Swal.fire({
              title: 'Deleted!',
              text: 'News article has been deleted.',
              icon: 'success',
              confirmButtonColor: '#e10600',
              background: '#1e1e2e',
              color: '#ffffff'
            });
            this.loadNews();
          },
          error: (error) => {
            console.error('Error deleting news:', error);
            Swal.fire({
              title: 'Error!',
              text: 'Failed to delete news article.',
              icon: 'error',
              confirmButtonColor: '#e10600',
              background: '#1e1e2e',
              color: '#ffffff'
            });
          }
        });
      }
    });
  }
}
