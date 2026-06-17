import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-student-detail',
  standalone: false,
  templateUrl: './student-detail.html',
  styleUrl: './student-detail.css'
})

export class StudentDetail {

  student: any;

  constructor(
    private route: ActivatedRoute
  ) {

    this.student =
      this.route.snapshot.data['student'];

  }

}