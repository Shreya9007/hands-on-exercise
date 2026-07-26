import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-not-found',
  standalone: true,
  imports: [RouterLink],
  template: `
    <div style="text-align: center; padding: 5rem 1.5rem; color: #f8fafc;">
      <h1 style="font-size: 5rem; margin: 0; color: #ef4444;">404</h1>
      <h2>Page Not Found</h2>
      <p style="color: #94a3b8;">The requested page URL does not exist in the Student Course Portal routing table.</p>
      <a routerLink="/" style="display: inline-block; margin-top: 1.5rem; padding: 0.75rem 1.5rem; background: #0284c7; color: white; text-decoration: none; border-radius: 8px; font-weight: 600;">Return to Home</a>
    </div>
  `
})
export class NotFoundComponent {}
