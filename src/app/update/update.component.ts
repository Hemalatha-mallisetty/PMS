import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { UpdateSuccessDialogComponent } from '../update-success-dialog/update-success-dialog.component';

interface OwnerData {
  ownerName: string;
  ownerId: string;
  propertyLocation: string;
  createdBy: string;
  createdDate: Date;
  assignedTo: string;
  description: string;
  status: string;
}

interface UploadedFile {
  name: string;
  uploadTime: string;
}

@Component({
  selector: 'app-update',
  templateUrl:'./update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  ownerData: OwnerData = {
    ownerName: '',
    ownerId: '',
    propertyLocation: '',
    createdBy: '',
    createdDate: new Date(),
    assignedTo: '',
    description: '',
    status: 'New' // Default status
  };

  selectedFiles: FileList | null = null;
  uploadedFiles: UploadedFile[] = [];

  constructor(private dialog: MatDialog, private route: ActivatedRoute) {}

  ngOnInit() {
    // Fetch owner data or set default values
    this.ownerData = {
      ownerName: 'John Doe',
      ownerId: 'ABC123',
      propertyLocation: '123 Main Street',
      createdBy: 'Jane Doe',
      createdDate: new Date(),
      assignedTo: 'Bob Smith',
      description: '',
      status: 'New'
    };
    this.route.params.subscribe(params => {
      const ticketId = +params['id']; // Access the ticket ID parameter from the URL
      console.log('Ticket ID:', ticketId);
      // Fetch ticket details or perform actions based on ticket ID
    });
  }

  onFileSelected(event: Event): void {
    this.selectedFiles = (event.target as HTMLInputElement)?.files;
    console.log('Selected files:', this.selectedFiles);
  }


  onSubmit() {
    // Check if any file is selected
    if (!this.selectedFiles || this.selectedFiles.length === 0) {
      alert('* Please select atleast one file');
      return; // Prevent further execution
    }

    // Check for empty fields and display error messages
    if (
      !this.ownerData.createdBy ||
      !this.ownerData.ownerName ||
      !this.ownerData.ownerId ||
      !this.ownerData.propertyLocation ||
      !this.ownerData.assignedTo ||
      !this.ownerData.description
    ) {
      alert('All fields are mandatory');
      return; // Prevent further execution
    }

    const formData = new FormData();
    Object.entries(this.ownerData).forEach(([key, value]) => {
      formData.append(key, value);
    });
    if (this.selectedFiles?.length) {
      Array.from(this.selectedFiles).forEach(file => {
        formData.append('files', file);
        this.uploadedFiles.push({ name: file.name, uploadTime: new Date().toISOString() });
      });
    } else {
      // Handle case where no files were selected
    }

    // Simulating HTTP post request
    console.log('Form data:', formData);
    console.log('Uploaded files:', this.uploadedFiles);

    // Clear selected files after submission
    this.selectedFiles = null;

    const dialogRef = this.dialog.open(UpdateSuccessDialogComponent);

    // Handle dialog close event
    dialogRef.afterClosed().subscribe((result: any) => {
      console.log('Dialog closed:', result);
    });
  }
}
