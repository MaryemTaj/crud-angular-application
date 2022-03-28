import { Component, OnInit } from '@angular/core';
import { Observable, observable } from 'rxjs';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.css']
})
export class ListUsersComponent implements OnInit {

  constructor(private userService : UserService) { }
  listUsers !: Observable<Object>
  ngOnInit(): void {
    this.listUsers = this.userService.listUsers();
  }

}
