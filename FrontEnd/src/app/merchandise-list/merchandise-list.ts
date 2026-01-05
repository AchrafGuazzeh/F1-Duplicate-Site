import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';
import { ProductService } from '../services/product.service';
import { Product } from '../models/product';
import { ChangeDetectorRef } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-merchandise-list',
  imports: [CommonModule],
  templateUrl: './merchandise-list.html',
  styleUrl: './merchandise-list.css',
})
export class MerchandiseList implements OnInit {
  products: Product[] = [];
  productType: 'team-merchandise' | 'driver-gear' | 'collectibles' | null = null;
  productTypeName: string = '';

  constructor(
    private productService: ProductService,
    private router: Router,
    private route: ActivatedRoute,
    private cdrFactory: ChangeDetectorRef,
  ) {}

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.productType = params['type'] || null;
      this.productTypeName = this.productType === 'team-merchandise' ? 'Team Merchandise' : 
                            this.productType === 'driver-gear' ? 'Driver Gear' : 
                            this.productType === 'collectibles' ? 'Collectibles' : 'All Products';
      this.loadProducts();
    });
  }

  loadProducts() {
    const observable = this.productType 
      ? this.productService.getProductsByType(this.productType)
      : this.productService.getAllProducts();

    observable.subscribe({
      next: (data) => {
        this.products = data;
        console.log('Products loaded:', data);
        console.log('Filter type:', this.productType);
        this.cdrFactory.detectChanges();
      },
      error: (error) => {
        console.error('Error loading products:', error);
        Swal.fire({
          title: 'Error!',
          text: 'Error loading products. Please make sure the backend is running.',
          icon: 'error',
          confirmButtonColor: '#e10600',
          background: '#1e1e2e',
          color: '#ffffff'
        });
      }
    });
  }

  goToAddProduct() {
    const queryParams = this.productType ? { type: this.productType } : {};
    this.router.navigate(['/store/add-product'], { queryParams });
  }

  modifyProduct(id: number) {
    this.router.navigate(['/store/modify-product', id]);
  }

  deleteProduct(id: number) {
    Swal.fire({
      title: 'Delete Product?',
      text: 'Are you sure you want to delete this product?',
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
        this.productService.deleteProduct(id).subscribe({
          next: () => {
            Swal.fire({
              title: 'Deleted!',
              text: 'Product has been deleted.',
              icon: 'success',
              confirmButtonColor: '#e10600',
              background: '#1e1e2e',
              color: '#ffffff'
            });
            this.loadProducts();
          },
          error: (error) => {
            console.error('Error deleting product:', error);
            Swal.fire({
              title: 'Error!',
              text: 'Failed to delete product.',
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
