import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { TicketService } from '../services/ticket.service';
import { Ticket } from '../models/ticket';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-modify-ticket',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './modify-ticket.html',
  styleUrl: './modify-ticket.css',
})
export class ModifyTicket implements OnInit {
  ticketForm!: FormGroup;
  ticketId: number = 0;
  ticketType: string = '';

  constructor(
    private fb: FormBuilder,
    private ticketService: TicketService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.ticketId = Number(this.route.snapshot.paramMap.get('id'));
    
    this.ticketForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      quantity: [0, [Validators.required, Validators.min(1)]],
      race: ['', [Validators.required, Validators.minLength(3)]],
      type: ['weekend-pass', Validators.required]
    });

    this.ticketService.getTicketById(this.ticketId).subscribe({
      next: (ticket) => {
        this.ticketType = ticket.type;
        this.ticketForm.patchValue({
          name: ticket.name,
          quantity: ticket.quantity,
          race: ticket.race,
          type: ticket.type
        });
      },
      error: (error) => {
        console.error('Error loading ticket:', error);
        Swal.fire({
          title: 'Error!',
          text: 'Error loading ticket.',
          icon: 'error',
          confirmButtonColor: '#e10600',
          background: '#1e1e2e',
          color: '#ffffff'
        }).then(() => {
          this.router.navigate(['/tickets/ticket-list']);
        });
      }
    });
  }

  onSubmit() {
    if (this.ticketForm.valid) {
      this.ticketService.updateTicket(this.ticketId, this.ticketForm.value).subscribe({
        next: () => {
          Swal.fire({
            title: 'Success!',
            text: 'Ticket updated successfully.',
            icon: 'success',
            confirmButtonColor: '#e10600',
            background: '#1e1e2e',
            color: '#ffffff'
          }).then(() => {
            this.router.navigate(['/tickets/ticket-list'], { 
              queryParams: { type: this.ticketType },
              queryParamsHandling: 'merge'
            }).then(() => {
              window.location.reload();
            });
          });
        },
        error: (error) => {
          console.error('Error updating ticket:', error);
          Swal.fire({
            title: 'Error!',
            text: 'Error updating ticket.',
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
