import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private apiUrl = 'http://localhost:5000/api/owners';

  constructor(private http: HttpClient) { }

  searchOwners(query: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}?query=${query}`).pipe(
      catchError((error) => {
        console.error('Error fetching owners:', error);
        return throwError('Something went wrong while fetching owners. Please try again later.');
      })
    );
  }
}

  