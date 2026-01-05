import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';
import { TicketService } from '../services/ticket.service';
import { Ticket } from '../models/ticket';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-ticket-list',
  imports: [CommonModule],
  templateUrl: './ticket-list.html',
  styleUrl: './ticket-list.css',
})
export class TicketList implements OnInit {
  tickets: Ticket[] = [];
  ticketType: 'weekend-pass' | 'grandstand' | null = null;
  ticketTypeName: string = '';

  constructor(
    private ticketService: TicketService,
    private router: Router,
    private route: ActivatedRoute,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.ticketType = params['type'] || null;
      this.ticketTypeName = this.ticketType === 'weekend-pass' ? 'Weekend Passes' : 
                           this.ticketType === 'grandstand' ? 'Grandstand Seats' : 'All Tickets';
      this.loadTickets();
    });
  }

  loadTickets() {
    const observable = this.ticketType 
      ? this.ticketService.getTicketsByType(this.ticketType)
      : this.ticketService.getAllTickets();

    observable.subscribe({
      next: (data) => {
        this.tickets = data;
        this.cdr.detectChanges();
      },
      error: (error) => {
        console.error('Error loading tickets:', error);
        Swal.fire({
          title: 'Error!',
          text: 'Error loading tickets. Please make sure the backend is running.',
          icon: 'error',
          confirmButtonColor: '#e10600',
          background: '#1e1e2e',
          color: '#ffffff'
        });
      }
    });
  }

  goToAddTicket() {
    const queryParams = this.ticketType ? { type: this.ticketType } : {};
    this.router.navigate(['/tickets/add-ticket'], { queryParams });
  }

  modifyTicket(id: number) {
    this.router.navigate(['/tickets/modify-ticket', id]);
  }

  deleteTicket(id: number) {
    Swal.fire({
      title: 'Delete Ticket?',
      text: 'Are you sure you want to delete this ticket?',
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
        this.ticketService.deleteTicket(id).subscribe({
          next: () => {
            Swal.fire({
              title: 'Deleted!',
              text: 'Ticket has been deleted.',
              icon: 'success',
              confirmButtonColor: '#e10600',
              background: '#1e1e2e',
              color: '#ffffff'
            });
            this.loadTickets();
          },
          error: (error) => {
            console.error('Error deleting ticket:', error);
            Swal.fire({
              title: 'Error!',
              text: 'Failed to delete ticket.',
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
