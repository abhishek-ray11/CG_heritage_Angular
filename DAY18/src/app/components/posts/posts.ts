import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-posts',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './posts.html',
  styleUrl: './posts.css'
})
export class Posts {

  private http = inject(HttpClient);

  posts: any[] = [];

  private apiUrl = 'https://jsonplaceholder.typicode.com/posts';

  angularTopics = [

    {
      title: 'What is an HTTP Interceptor?',
      body: 'An HTTP Interceptor acts as middleware in Angular. It intercepts every HTTP request before it is sent to the server and every response before it reaches the component. It is commonly used for logging, authentication, adding headers and global error handling.'
    },

    {
      title: 'What is HttpClient?',
      body: 'HttpClient is Angular’s built-in service used to communicate with REST APIs. It supports GET, POST, PUT, DELETE and PATCH requests and returns Observables for asynchronous data handling.'
    },

    {
      title: 'Dependency Injection',
      body: 'Dependency Injection is a core Angular feature that automatically provides required services to components. It reduces code coupling and improves reusability.'
    },

    {
      title: 'Observables in Angular',
      body: 'Observables are provided by RxJS and are used to manage asynchronous operations such as HTTP requests, user events and real-time data updates.'
    },

    {
      title: 'Standalone Components',
      body: 'Standalone Components remove the need for NgModules. They simplify Angular application development and make components more modular and reusable.'
    },

    {
      title: 'Global Error Handling',
      body: 'An Error Interceptor catches HTTP errors such as 400, 401, 403, 404 and 500 in one central place. This improves maintainability and provides a better user experience.'
    }

  ];

  // SUCCESS API CALL
  loadPosts() {

    this.http.get<any[]>(this.apiUrl).subscribe(data => {

      this.posts = data.slice(0, 6).map((item, index) => ({

        title: this.angularTopics[index].title,
        body: this.angularTopics[index].body

      }));

    });

  }

  // ERROR API CALL
  testError() {

    this.http.get<any[]>(
      'https://jsonplaceholder.typicode.com/postssss'
    ).subscribe();

  }

}