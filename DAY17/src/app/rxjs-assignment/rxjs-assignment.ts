import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  Observable,
  Observer,
  Subscription,
  of,
  from,
  interval,
  timer,
  take
} from 'rxjs';

import {
  map,
  filter,
  tap,
  switchMap,
  mergeMap
} from 'rxjs/operators';

import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-rxjs-assignment',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './rxjs-assignment.html',
  styleUrl: './rxjs-assignment.css'
})
export class RxjsAssignment implements OnInit {

  timerValue = '';

  squareNumbers: number[] = [];

  users: any[] = [];

  post: any;

  subscription!: Subscription;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {

    // Observable
    const observable = new Observable<number>((observer) => {
      for (let i = 1; i <= 5; i++) {
        observer.next(i);
      }
      observer.complete();
    });

    // Observer
    const observer: Observer<number> = {

      next: (value) => {
        console.log('Next:', value);
      },

      error: (err) => {
        console.log('Error:', err);
      },

      complete: () => {
        console.log('Completed');
      }
    };

    // Subscription
    this.subscription = observable.subscribe(observer);

    this.subscription.unsubscribe();

    // of()
    of(10, 20, 30).subscribe(data => {
      console.log('of()', data);
    });

    // from()
    from([100, 200, 300]).subscribe(data => {
      console.log('from()', data);
    });

    // interval()
    interval(1000)
      .pipe(
        take(5)
      )
      .subscribe(data => {
        console.log('interval()', data);
      });

    // timer()
    timer(2000).subscribe(() => {
      this.timerValue = 'Value emitted after 2 seconds';
    });

    // map + tap + filter
    of(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)
      .pipe(
        map(num => num * num),

        tap(value => {
          console.log('Before Filter :', value);
        }),

        filter(value => value > 25)
      )
      .subscribe(result => {
        this.squareNumbers.push(result);
      });

    // mergeMap with custom student data
    const students = [
      {
        name: 'Abhishek Ray',
        email: 'abhishek.ray@gmail.com'
      },
      {
        name: 'Sayan Ghosh',
        email: 'sayan.ghosh@gmail.com'
      },
      {
        name: 'Ankita Paul',
        email: 'ankita.paul@gmail.com'
      }
    ];

    from(students)
      .pipe(
        mergeMap(student => of(student))
      )
      .subscribe(data => {
        this.users.push(data);
      });

  }

  // switchMap
  getPost() {

    of(1)
      .pipe(
        switchMap(() =>
          this.http.get(
            'https://jsonplaceholder.typicode.com/posts/1'
          )
        )
      )
      .subscribe(data => {
        this.post = data;
      });

  }

}