import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ProductService } from '../services/product.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-product',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './add-product.html',
  styleUrl: './add-product.css',
})
export class AddProduct implements OnInit {
  productForm!: FormGroup;
  productType: 'team-merchandise' | 'driver-gear' | 'collectibles' | null = null;

  constructor(
    private fb: FormBuilder,
    private productService: ProductService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.productType = params['type'] || null;
    });

    this.productForm = this.fb.group({
      nom: ['', [Validators.required, Validators.minLength(3)]],
      prix: [0, [Validators.required, Validators.min(0.01)]],
      quantite: [0, [Validators.required, Validators.min(1)]],
      imageUrl: [''],
      type: [this.productType || 'team-merchandise', Validators.required]
    });
  }

  onSubmit() {
    if (this.productForm.valid) {
      this.productService.addProduct(this.productForm.value).subscribe({
        next: () => {
          const returnType = this.productType || this.productForm.value.type;
          Swal.fire({
            title: 'Success!',
            text: 'Product added successfully.',
            icon: 'success',
            confirmButtonColor: '#e10600',
            background: '#1e1e2e',
            color: '#ffffff'
          }).then(() => {
            this.router.navigate(['/store/merchandise'], { 
              queryParams: { type: returnType },
              queryParamsHandling: 'merge'
            }).then(() => {
              window.location.reload();
            });
          });
        },
        error: (error) => {
          console.error('Error adding product:', error);
          Swal.fire({
            title: 'Error!',
            text: 'Error adding product. Please make sure the backend is running.',
            icon: 'error',
            confirmButtonColor: '#e10600',
            background: '#1e1e2e',
            color: '#ffffff'
          });
        }
      });
    }
  }

  onCancel() {
    const returnType = this.productType;
    if (returnType) {
      this.router.navigate(['/store/merchandise'], { queryParams: { type: returnType } });
    } else {
      this.router.navigate(['/store/merchandise']);
    }
  }
}
