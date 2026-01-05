import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { NewsService } from '../services/news.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-modify-news',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './modify-news.html',
  styleUrl: './modify-news.css',
})
export class ModifyNews implements OnInit {
  newsId: number = 0;
  newsForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private newsService: NewsService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.newsId = Number(this.route.snapshot.paramMap.get('id'));
    
    this.newsForm = this.fb.group({
      title: ['', [Validators.required, Validators.minLength(3)]],
      description: ['', [Validators.required, Validators.minLength(10)]],
      date: ['', Validators.required]
    });

    this.newsService.getNewsById(this.newsId).subscribe({
      next: (news) => {
        this.newsForm.patchValue({
          title: news.title,
          description: news.description,
          date: news.date
        });
      },
      error: (error) => {
        console.error('Error loading news:', error);
        Swal.fire({
          title: 'Error!',
          text: 'Error loading news.',
          icon: 'error',
          confirmButtonColor: '#e10600',
          background: '#1e1e2e',
          color: '#ffffff'
        }).then(() => {
          this.router.navigate(['/news']);
        });
      }
    });
  }

  modifyNews() {
    if (this.newsForm.valid) {
      this.newsService.updateNews(this.newsId, this.newsForm.value).subscribe({
        next: () => {
          Swal.fire({
            title: 'Success!',
            text: 'News article updated successfully.',
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
          console.error('Error updating news:', error);
          Swal.fire({
            title: 'Error!',
            text: 'Error updating news.',
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
