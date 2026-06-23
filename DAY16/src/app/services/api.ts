import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class Api {

  baseUrl = 'https://jsonplaceholder.typicode.com';

  constructor(private http: HttpClient) {}

  // GET POSTS
  getPosts(): Observable<any[]> {

    return this.http.get<any[]>(
      `${this.baseUrl}/posts`
    ).pipe(
      retry(2),
      catchError(this.handleError)
    );

  }

  // GET USERS
  getUsers(): Observable<any[]> {

    return this.http.get<any[]>(
      `${this.baseUrl}/users`
    ).pipe(
      retry(2),
      catchError(this.handleError)
    );

  }

  // TEST ERROR
  getWrongData(): Observable<any> {

    return this.http.get(
      `${this.baseUrl}/wrong`
    ).pipe(
      catchError(this.handleError)
    );

  }

  // ERROR HANDLING
  handleError(error: HttpErrorResponse) {

    let msg = '';

    switch (error.status) {

      case 400:
        msg = 'Bad Request';
        break;

      case 401:
        msg = 'Unauthorized';
        break;

      case 403:
        msg = 'Forbidden';
        break;

      case 404:
        msg = 'Resource Not Found';
        break;

      case 500:
        msg = 'Server Error';
        break;

      default:
        msg = 'Unknown Error';

    }

    return throwError(() => msg);

  }

}