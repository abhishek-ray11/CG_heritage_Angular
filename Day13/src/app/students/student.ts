import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Student {

  students = [

    {
      id: 1,
      name: 'Rahul',
      email: 'rahul@gmail.com',
      phone: '9876543210'
    },

    {
      id: 2,
      name: 'Abhishek',
      email: 'abhishek@gmail.com',
      phone: '9876543211'
    },

    {
      id: 3,
      name: 'Rohan',
      email: 'rohan@gmail.com',
      phone: '9876543212'
    },

    {
      id: 4,
      name: 'Priya',
      email: 'priya@gmail.com',
      phone: '9876543213'
    },

    {
      id: 5,
      name: 'Ankit',
      email: 'ankit@gmail.com',
      phone: '9876543214'
    }

  ];

  getStudent(id: number) {

    return this.students.find(
      student => student.id === id
    );

  }

}