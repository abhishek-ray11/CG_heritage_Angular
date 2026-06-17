import { ResolveFn } from '@angular/router';
import { inject } from '@angular/core';

import { Student } from './student';

export const studentResolver: ResolveFn<any> = (route) => {

  const studentService = inject(Student);

  return studentService.getStudent(
    Number(route.paramMap.get('id'))
  );

};