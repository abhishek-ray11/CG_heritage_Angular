import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentsRoutingModule } from './students-routing-module';

import { StudentList } from './student-list/student-list';
import { StudentDetail } from './student-detail/student-detail';

@NgModule({
  declarations: [
    StudentList,
    StudentDetail
  ],
  imports: [
    CommonModule,
    StudentsRoutingModule
  ]
})
export class StudentsModule { }