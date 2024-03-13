import { Component, OnInit } from '@angular/core';
import { DataService } from '../service'; // Update the path to your DataService
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  searchText: string = '';
  owners: any[] = [];
  filteredOwnersData: any[] = [];

  constructor(private dataService: DataService, private router: Router) { }

  
  ngOnInit(): void {
    this.searchOwners('');
  }
  searchOwners(query: string): void {
  this.dataService.searchOwners(query).subscribe(
    (data: any[]) => {
      this.owners = data;
      this.filteredOwnersData = data;
      // Call highlightedOwnerId after fetching and setting the data
      this.highlightedOwnerId(query);
    },
    (error: any) => {
      console.error('Error fetching owners:', error);
    }
  );
}



  highlightedOwnerId(query: string): void {
    console.log('Query:', query);
    this.filteredOwnersData.forEach(owner => {
      owner.highlighted = owner.OwnerId.toLowerCase().includes(query.toLowerCase()) || owner.OwnerName.toLowerCase().includes(query.toLowerCase());
    });
    console.log('Filtered Owners:', this.filteredOwnersData);
  }
  


  navigateToCreate(): void {
    // Implement navigation logic to create component page
    this.router.navigate(['/create']); // Corrected navigation
  }
}
