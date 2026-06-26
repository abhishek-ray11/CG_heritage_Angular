import {
  HttpErrorResponse,
  HttpInterceptorFn
} from '@angular/common/http';

import { inject } from '@angular/core';

import { Router } from '@angular/router';

import { retry, catchError } from 'rxjs';

import { throwError } from 'rxjs';

import { ToastService } from '../services/toast';

export const errorInterceptor: HttpInterceptorFn = (req, next) => {

  const router = inject(Router);

  const toast = inject(ToastService);

  return next(req).pipe(

    retry(2),

    catchError((error: HttpErrorResponse) => {

      switch (error.status) {

        case 400:
          toast.show('Bad Request');
          break;

        case 401:
          localStorage.removeItem('token');
          toast.show('Unauthorized');
          router.navigate(['/']);
          break;

        case 403:
          toast.show('Access Denied');
          break;

        case 404:
          toast.show('Resource Not Found');
          break;

        case 500:
          console.error('Internal Server Error');
          toast.show('Server Error');
          break;

        default:
          toast.show('Something went wrong');
      }

      return throwError(() => error);

    })

  );

};