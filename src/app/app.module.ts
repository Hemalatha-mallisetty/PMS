import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // Import FormsModule
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchTicketsComponent } from './search-tickets/search-tickets.component';
import { UpdateComponent } from './update/update.component';
import { HttpClientModule } from '@angular/common/http';
import { UpdateSuccessDialogComponent } from './update-success-dialog/update-success-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { CreateComponent } from './create/create.component';
import { SearchComponent } from './search/search.component';
import { SuccessDialogComponent } from './success-dialog/success-dialog.component';
import { TargetComponent } from './target/target.component';
import { OpenTicketsComponent } from './open-tickets/open-tickets.component';
import { MyTicketsComponent } from './my-tickets/my-tickets.component'; // Don't forget to import TargetComponent

@NgModule({
  declarations: [
    AppComponent,
    SearchTicketsComponent,
    UpdateComponent,
    UpdateSuccessDialogComponent,
    CreateComponent,
    SearchComponent,
    SuccessDialogComponent,
    TargetComponent,
    OpenTicketsComponent,
    MyTicketsComponent // Add TargetComponent to the declarations array
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    HttpClientModule,
    MatDialogModule,
    FormsModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [
    // Declare any entry components here if needed
    UpdateSuccessDialogComponent
  ]
})
export class AppModule { }
















































































// import { NgModule } from '@angular/core';
// import { BrowserModule } from '@angular/platform-browser';

// import { AppRoutingModule } from './app-routing.module';
// import { AppComponent } from './app.component';
// import { SearchTicketsComponent } from './search-tickets/search-tickets.component';
// import { UpdateComponent } from './update/update.component';
// import { HttpClientModule } from '@angular/common/http';
// import { UpdateSuccessDialogComponent } from './update-success-dialog/update-success-dialog.component';
// import { MatDialogModule } from '@angular/material/dialog';
// import { FormsModule } from '@angular/forms';
// import { CreateComponent } from './create/create.component';
// import { SearchComponent } from './search/search.component';
// import { SuccessDialogComponent } from './success-dialog/success-dialog.component';


// @NgModule({
//   declarations: [
//     AppComponent,
//     SearchTicketsComponent,
//     UpdateComponent,
//     UpdateSuccessDialogComponent,
//     CreateComponent,
//     SearchComponent,
//     SuccessDialogComponent
//   ],
//   imports: [
//     BrowserModule.withServerTransition({ appId: 'serverApp' }),
//     AppRoutingModule,
//     HttpClientModule,
//     MatDialogModule,
//     FormsModule
//   ],
//   providers: [],
//   bootstrap: [AppComponent],
//   entryComponents: [
//     // Declare any entry components here if needed
//     UpdateSuccessDialogComponent
//   ]
// })
// export class AppModule { }
