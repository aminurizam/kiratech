import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FormControl } from '@angular/forms';

import { User } from './user';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { UserService } from './user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent implements OnInit {
  users: User[] = [];
  filteredUsers: User[] = [];
  name = new FormControl('');
  query = '';

  constructor(private userService: UserService, public dialog: MatDialog) {}

  ngOnInit(): void {
    this.displayRandomUsers();
  }

  displayRandomUsers() {
    this.userService.getRandomUsers().subscribe((res: any) => {
      this.users = res.results;
      console.log(this.users);
    });
  }

  refreshUsers() {
    this.displayRandomUsers();
  }

  showUserDetailModal(user: User) {
    console.log(user);

    this.dialog.open(UserDetailComponent, {
        data: {
           user: user
        },
    })
  }

  onSearch(query:string) {
    this.users = this.users.filter(el => el.name.first.toLowerCase().includes(query.toLowerCase()))
  }

  sortByCountryAsc() {
    this.users = this.users.sort((el, next) => el.location.country.localeCompare(next.location.country));
  }

  sortByCountryDesc() {
    this.users = this.users.sort((el, next) => next.location.country.localeCompare(el.location.country));
  }
}
