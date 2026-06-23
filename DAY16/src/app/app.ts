import { Component } from '@angular/core';
import { Posts } from './posts/posts';
import { Products } from './products/products';
import { Users } from './users/users';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    Posts,
    Products,
    Users
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

  title = 'DAY16';

}