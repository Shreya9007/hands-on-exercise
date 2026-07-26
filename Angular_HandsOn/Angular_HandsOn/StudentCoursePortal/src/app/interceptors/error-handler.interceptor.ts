import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, throwError } from 'rxjs';

/**
 * Hands-On 8 Task 3 Step 90: Error Handler Interceptor
 * Intercepts HTTP errors globally.
 * If 401: navigates to home page.
 * If 500: logs global error notification.
 */
export const errorHandlerInterceptor: HttpInterceptorFn = (req, next) => {
  const router = inject(Router);

  return next(req).pipe(
    catchError(err => {
      console.error(`[HTTP Interceptor Error] ${req.url} failed:`, err);
      if (err.status === 401) {
        alert('Unauthorized access. Redirecting to home page...');
        router.navigate(['/']);
      } else if (err.status === 500) {
        console.error('Server side error 500 caught globally.');
      }
      return throwError(() => err);
    })
  );
};
