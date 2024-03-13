import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { SuccessDialogComponent } from '../success-dialog/success-dialog.component';

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
  selector: 'app-create',
  templateUrl:'./create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
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
      ownerName: '',
      ownerId: '',
      propertyLocation: '',
      createdBy: '',
      createdDate: new Date(),
      assignedTo: '',
      description: '',
      status: ''
    };
    this.route.params.subscribe(params => {
      const ticketId = +params['id']; // Access the ticket ID parameter from the URL
      console.log('Ticket ID:', ticketId);
      // Fetch ticket details or perform actions based on ticket ID
    });
  }

  onFileSelected(event: Event): void {
    this.selectedFiles = (event.target as HTMLInputElement)?.files;
  }

  onSubmit() {
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

    console.log('Opening dialog...');
  const dialogRef = this.dialog.open(SuccessDialogComponent);

  // Handle dialog close event
  dialogRef.afterClosed().subscribe((result: any) => {
    console.log('Dialog closed:', result);
  });
  }
}
