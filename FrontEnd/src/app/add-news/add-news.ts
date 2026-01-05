import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NewsService } from '../services/news.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-news',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './add-news.html',
  styleUrl: './add-news.css',
})
export class AddNews implements OnInit {
  newsForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private newsService: NewsService,
    private router: Router
  ) {}

  ngOnInit() {
    const today = new Date();
    const defaultDate = today.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });

    this.newsForm = this.fb.group({
      title: ['', [Validators.required, Validators.minLength(3)]],
      description: ['', [Validators.required, Validators.minLength(10)]],
      date: [defaultDate, Validators.required]
    });
  }

  addNews() {
    if (this.newsForm.valid) {
      this.newsService.addNews(this.newsForm.value).subscribe({
        next: () => {
          Swal.fire({
            title: 'Success!',
            text: 'News article added successfully.',
            icon: 'success',
            confirmButtonColor: '#e10600',
            background: '#1e1e2e',
            color: '#ffffff'
          }).then(() => {
            this.router.navigate(['/news']).then(() => {
              window.location.reload();
            });
          });
        },
        error: (error) => {
          console.error('Error adding news:', error);
          Swal.fire({
            title: 'Error!',
            text: 'Error adding news. Please make sure the backend is running.',
            icon: 'error',
            confirmButtonColor: '#e10600',
            background: '#1e1e2e',
            color: '#ffffff'
          });
        }
      });
    }
  }

  cancel() {
    this.router.navigate(['/news']);
  }
}
