import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListUsersComponent } from './list-users/list-users.component';
import { ViewUserComponent } from './view-user/view-user.component';
import { DeleteUserComponent } from './delete-user/delete-user.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { AddUserComponent } from './add-user/add-user.component';
import { ReactiveFormsModule } from '@angular/forms';

import {MatTableModule} from '@angular/material/table';
import {MatListModule} from '@angular/material/list';
import {MatCardModule} from '@angular/material/card';
import { RouterModule } from '@angular/router';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatSnackBarModule, MAT_SNACK_BAR_DEFAULT_OPTIONS_FACTORY} from '@angular/material/snack-bar';
@NgModule({
  declarations: [
    ListUsersComponent,
    ViewUserComponent,
    DeleteUserComponent,
    EditUserComponent,
    AddUserComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule, 
    MatSnackBarModule,   
    RouterModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatListModule,
    MatTableModule
  ],
  exports: [
    ListUsersComponent,
    ViewUserComponent,
    DeleteUserComponent,
    EditUserComponent,
    AddUserComponent
  ],
  providers : [
    {provide : MAT_SNACK_BAR_DEFAULT_OPTIONS_FACTORY ,useValue : {duration : 2500}} 
  ]
})
export class UsersModule { }
