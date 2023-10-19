import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserDetailsComponent } from './user-details/user-details.component';
import { UserEditComponent } from './user-edit/user-edit.component';
import { UserCreateComponent } from './user-create/user-create.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserRoutingModule } from './user-routing.module';
import {MatInputModule} from '@angular/material/input';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatRadioModule} from '@angular/material/radio';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatButtonModule} from '@angular/material/button';






@NgModule({
  declarations: [
    UserDetailsComponent,
    UserEditComponent,
    UserCreateComponent,
    UserListComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    MatInputModule,
    MatGridListModule,
    MatRadioModule,
    MatDatepickerModule,
    MatButtonModule,
  ]
})
export class UserModule { }
