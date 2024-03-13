import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TicketsService {
  private apiUrl = 'http://localhost:5001/api/owners'; // Updated API URL

  constructor(private http: HttpClient) { }

  searchTickets(query: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}?query=${query}`).pipe(
      catchError((error) => {
        console.error('Error fetching tickets:', error);
        return throwError('Something went wrong while fetching tickets. Please try again later.');
      })
    );
  }
  getTicketsPendingFor7Days(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}`);
  }

  getInProgressTickets(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}`);
  }
  getMyTickets(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}`);
  }


}
