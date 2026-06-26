import {
  HttpInterceptorFn,
  HttpResponse
} from '@angular/common/http';

import { tap } from 'rxjs';

export const loggingInterceptor: HttpInterceptorFn = (req, next) => {

  console.log('===========================');
  console.log('Request URL:', req.url);
  console.log('Request Method:', req.method);

  const startTime = Date.now();

  return next(req).pipe(

    tap(event => {

      if (event instanceof HttpResponse) {

        console.log('Status Code:', event.status);

        console.log(
          'Time Taken:',
          Date.now() - startTime,
          'ms'
        );

        console.log('===========================');

      }

    })

  );

};