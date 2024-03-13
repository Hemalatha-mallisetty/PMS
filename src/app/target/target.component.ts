import { Component, Input, OnInit } from '@angular/core';
import { TicketsService } from '../tickets.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-target',
  templateUrl: './target.component.html',
  styleUrls: ['./target.component.css']
})
export class TargetComponent implements OnInit {
  @Input() tickets: any[] = [];
  searchText: string = '';
  filteredTickets: any[] = [];

  constructor(private ticketsService: TicketsService, private router: Router) {}

  ngOnInit(): void {
    this.fetchTicketsPendingFor7Days();
  }

  fetchTicketsPendingFor7Days(): void {
    this.ticketsService.getTicketsPendingFor7Days().subscribe(
      (data: any[]) => {
        this.tickets = data;
        this.filteredTickets = [...this.tickets];
        this.filterTickets();
      },
      (error: any) => {
        console.error('Error fetching tickets:', error);
      }
    );
  }
  filterTickets(): void {
    const query = this.searchText.toLowerCase();
    this.filteredTickets = this.tickets.filter(ticket =>
      (ticket.ownerID.toLowerCase().includes(query) ||
      ticket.createdBy.toLowerCase().includes(query)) &&
      ticket.daysToClose > 7  // Filter tickets with daysToClose greater than 7
    );
    this.highlightMatchingTicket(query);
  }

  highlightMatchingTicket(query: string): void {
    this.filteredTickets.forEach(ticket => {
      ticket.highlighted = ticket.ownerID.toLowerCase().includes(query) ||
                           ticket.createdBy.toLowerCase().includes(query);
    });
  }

  viewTicket(ticketId: number): void {
    console.log('View ticket with ownerID:', ticketId);
    this.router.navigate(['/update', ticketId]);
    // Implement your navigation logic here
  }

  updateTicket(ticketId: number): void {
    console.log('Update ticket with ownerID:', ticketId);
    // Implement your navigation logic here
    this.router.navigate(['/update', ticketId]); // Redirect to update component with ticket ID
  }
}
