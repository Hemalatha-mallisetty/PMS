import { Component, OnInit } from '@angular/core';
import { TicketsService } from '../tickets.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-tickets',
  templateUrl: './search-tickets.component.html',
  styleUrls: ['./search-tickets.component.css'],
})
export class SearchTicketsComponent implements OnInit {
  tickets: any[] = [];
  searchText: string = '';
  filteredTickets: any[] = [];

  constructor(private ticketsService: TicketsService, private router: Router) {}

  ngOnInit(): void {
    this.searchTickets('');
  }

  searchTickets(query: string): void {
    this.ticketsService.searchTickets(query).subscribe(
      (data: any[]) => {
        this.tickets = data;
        this.filteredTickets = data;
        this.highlightMatchingTicket(query);
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
      ticket.createdBy.toLowerCase().includes(query))
    );
    this.highlightMatchingTicket(query);
  }

  highlightMatchingTicket(query: string): void {
    this.filteredTickets.forEach(ticket => {
      ticket.highlighted = ticket.ownerID.toLowerCase().includes(query.toLowerCase());
    });
  }

  viewTicket(ticketId: number) {
    console.log('View ticket with ownerID:', ticketId);
    this.router.navigate(['/update', ticketId]); // Redirect to update component with ticket ID
  }

  updateTicket(ticketId: number) {
    console.log('Update ticket with ownerID:', ticketId);
    this.router.navigate(['/update', ticketId]); // Redirect to update component with ticket ID
  }
}

  
  
  
  
  
  
//   updateTicket(ticketId: number) {
//     // Perform navigation logic here
//     console.log('Update ticket with ID:', ticketId);
//     this.router.navigate(['/update', ticketId]); // Redirect to update component with ticket ID
//   }
// }
