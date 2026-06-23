import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Api } from '../services/api';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './users.html',
  styleUrl: './users.css'
})
export class Users implements OnInit {

  users: any[] = [
    {
      name: 'Abhishek Ray',
      email: 'abhishek@gmail.com'
    },
    {
      name: 'John Doe',
      email: 'john@gmail.com'
    }
  ];

  searchText: string = '';
  errorMessage: string = '';

  constructor(private api: Api) {}

  ngOnInit(): void {

    // Temporarily disabled API call
    // this.loadUsers();

  }

  loadUsers(): void {

    this.api.getUsers().subscribe({

      next: (data: any[]) => {

        console.log(data);

        this.users = data;

      },

      error: (err: any) => {

        this.errorMessage = err;

      }

    });

  }

  searchUser(): void {

    this.users = this.users.filter((user: any) =>
      user.name.toLowerCase().includes(
        this.searchText.toLowerCase()
      )
    );

  }

  testError(): void {

    this.api.getWrongData().subscribe({

      next: () => {},

      error: (err: any) => {

        this.errorMessage = err;

      }

    });

  }

}