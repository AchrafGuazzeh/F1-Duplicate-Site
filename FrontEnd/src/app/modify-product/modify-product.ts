import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ProductService } from '../services/product.service';
import { Product } from '../models/product';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-modify-product',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './modify-product.html',
  styleUrl: './modify-product.css',
})
export class ModifyProduct implements OnInit {
  productForm!: FormGroup;
  productId: number = 0;
  productType: string = '';

  constructor(
    private fb: FormBuilder,
    private productService: ProductService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.productId = Number(this.route.snapshot.paramMap.get('id'));
    
    this.productForm = this.fb.group({
      nom: ['', [Validators.required, Validators.minLength(3)]],
      prix: [0, [Validators.required, Validators.min(0.01)]],
      quantite: [0, [Validators.required, Validators.min(1)]],
      imageUrl: [''],
      type: ['team-merchandise', Validators.required]
    });

    this.productService.getProductById(this.productId).subscribe({
      next: (product) => {
        this.productType = product.type;
        this.productForm.patchValue({
          nom: product.nom,
          prix: product.prix,
          quantite: product.quantite,
          imageUrl: product.imageUrl,
          type: product.type
        });
      },
      error: (error) => {
        console.error('Error loading product:', error);
        Swal.fire({
          title: 'Error!',
          text: 'Error loading product.',
          icon: 'error',
          confirmButtonColor: '#e10600',
          background: '#1e1e2e',
          color: '#ffffff'
        }).then(() => {
          this.router.navigate(['/store/merchandise']);
        });
      }
    });
  }

  onSubmit() {
    if (this.productForm.valid) {
      this.productService.updateProduct(this.productId, this.productForm.value).subscribe({
        next: () => {
          Swal.fire({
            title: 'Success!',
            text: 'Product updated successfully.',
            icon: 'success',
            confirmButtonColor: '#e10600',
            background: '#1e1e2e',
            color: '#ffffff'
          }).then(() => {
            this.router.navigate(['/store/merchandise'], { 
              queryParams: { type: this.productType },
              queryParamsHandling: 'merge'
            }).then(() => {
              window.location.reload();
            });
          });
        },
        error: (error) => {
          console.error('Error updating product:', error);
          Swal.fire({
            title: 'Error!',
            text: 'Error updating product.',
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
    if (this.productType) {
      this.router.navigate(['/store/merchandise'], { queryParams: { type: this.productType } });
    } else {
      this.router.navigate(['/store/merchandise']);
    }
  }
}
