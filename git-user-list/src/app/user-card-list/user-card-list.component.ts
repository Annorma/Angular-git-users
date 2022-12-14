import { Component, OnInit } from '@angular/core';
import { IUser } from './user';
import { UsersService } from './users.service';

@Component({
  selector: 'app-user-card-list',
  templateUrl: './user-card-list.component.html',
  styleUrls: ['./user-card-list.component.css']
})
export class UserCardListComponent implements OnInit {

  displayedColumns: string[] = ['id', 'name', 'login', 'city'];
  users: IUser[] = [];

  constructor(private userService: UsersService) { }

  ngOnInit(): void {
    this.userService.getAllUsers().subscribe(result => {
      this.users = result;
    });
  }

}
