import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { finalize } from 'rxjs/operators';
import { LoadingService } from '../services/loading.service';

/**
 * Hands-On 8 Task 3 Step 91: Loading Interceptor
 * Shows loading spinner on request start and hides in finalize operator.
 * finalize runs whether Observable completes or errors — equivalent to try/catch/finally block.
 */
export const loadingInterceptor: HttpInterceptorFn = (req, next) => {
  const loadingService = inject(LoadingService);
  loadingService.show();

  return next(req).pipe(
    finalize(() => loadingService.hide())
  );
};
