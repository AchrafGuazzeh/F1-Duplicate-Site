import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { TicketService } from '../services/ticket.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-ticket',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './add-ticket.html',
  styleUrl: './add-ticket.css',
})
export class AddTicket implements OnInit {
  ticketForm!: FormGroup;
  ticketType: 'weekend-pass' | 'grandstand' | null = null;

  constructor(
    private fb: FormBuilder,
    private ticketService: TicketService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.ticketType = params['type'] || null;
    });

    this.ticketForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      quantity: [0, [Validators.required, Validators.min(1)]],
      race: ['', [Validators.required, Validators.minLength(3)]],
      type: [this.ticketType || 'weekend-pass', Validators.required]
    });
  }

  onSubmit() {
    if (this.ticketForm.valid) {
      this.ticketService.addTicket(this.ticketForm.value).subscribe({
        next: () => {
          const returnType = this.ticketType || this.ticketForm.value.type;
          Swal.fire({
            title: 'Success!',
            text: 'Ticket added successfully.',
            icon: 'success',
            confirmButtonColor: '#e10600',
            background: '#1e1e2e',
            color: '#ffffff'
          }).then(() => {
            this.router.navigate(['/tickets/ticket-list'], { 
              queryParams: { type: returnType },
              queryParamsHandling: 'merge'
            }).then(() => {
              window.location.reload();
            });
          });
        },
        error: (error) => {
          console.error('Error adding ticket:', error);
          Swal.fire({
            title: 'Error!',
            text: 'Error adding ticket. Please make sure the backend is running.',
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
    if (this.ticketType) {
      this.router.navigate(['/tickets/ticket-list'], { queryParams: { type: this.ticketType } });
    } else {
      this.router.navigate(['/tickets/ticket-list']);
    }
  }
}
