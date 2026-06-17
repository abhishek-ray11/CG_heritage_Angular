import { Component } from '@angular/core';

@Component({
  selector: 'app-student-list',
  standalone: false,
  templateUrl: './student-list.html',
  styleUrl: './student-list.css'
})
export class StudentList {

  students = [

    { id: 1, name: 'Rahul' },

    { id: 2, name: 'Abhishek' },

    { id: 3, name: 'Rohan' },

    { id: 4, name: 'Priya' },

    { id: 5, name: 'Ankit' }

  ];

}