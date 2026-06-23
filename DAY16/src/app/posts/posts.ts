import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-posts',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './posts.html',
  styleUrl: './posts.css'
})
export class Posts {

  posts = [

    {
      id: 1,
      title: 'Introduction to Angular Framework',
      body: 'Angular is a TypeScript based framework used to develop single page applications.'
    },

    {
      id: 2,
      title: 'Understanding Components in Angular',
      body: 'Components are the building blocks of Angular applications.'
    },

    {
      id: 3,
      title: 'What is Data Binding in Angular?',
      body: 'Data binding synchronizes TypeScript data with HTML templates.'
    },

    {
      id: 4,
      title: 'Angular Directives Explained',
      body: 'Directives change the appearance and behavior of DOM elements.'
    },

    {
      id: 5,
      title: 'Services and Dependency Injection',
      body: 'Services help share data and business logic between components.'
    },

    {
      id: 6,
      title: 'HTTP Client and REST API in Angular',
      body: 'HttpClient allows Angular applications to communicate with APIs.'
    },

    {
      id: 7,
      title: 'Routing and Navigation in Angular',
      body: 'Routing enables page navigation without reloading the browser.'
    },

    {
      id: 8,
      title: 'Angular Pipes and Their Uses',
      body: 'Pipes are used to format and transform displayed data.'
    }

  ];

  deletePost(id: number): void {

    this.posts = this.posts.filter(
      post => post.id !== id
    );

  }

}