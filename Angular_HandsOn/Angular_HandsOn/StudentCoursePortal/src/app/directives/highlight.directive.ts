import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';

/**
 * Hands-On 3 Task 3: Custom Directive
 * Adds dynamic background highlight on hover using @HostListener.
 * Configurable via @Input() appHighlight binding.
 */
@Directive({
  selector: '[appHighlight]',
  standalone: true
})
export class HighlightDirective {
  @Input() appHighlight: string = 'rgba(234, 179, 8, 0.15)'; // Default yellow highlight tint

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  // @HostListener('mouseenter') binds to host element hover events without needing manual event listeners.
  // Angular handles cleanup automatically when the host element is destroyed.
  @HostListener('mouseenter') onMouseEnter(): void {
    this.renderer.setStyle(this.el.nativeElement, 'backgroundColor', this.appHighlight || 'rgba(234, 179, 8, 0.15)');
    this.renderer.setStyle(this.el.nativeElement, 'transition', 'background-color 0.2s ease-in-out');
  }

  @HostListener('mouseleave') onMouseLeave(): void {
    this.renderer.setStyle(this.el.nativeElement, 'backgroundColor', 'transparent');
  }
}
