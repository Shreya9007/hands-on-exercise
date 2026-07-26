import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotificationService } from '../../services/notification.service';

/**
 * Hands-On 6 Step 67: Demonstration of Component-Level Providers.
 * By specifying `providers: [NotificationService]` in the @Component decorator metadata,
 * Angular creates a NEW instance of NotificationService scoped specifically to this component tree.
 * This is useful for component-specific isolated state (e.g. multistep form wizards).
 */
@Component({
  selector: 'app-notification',
  standalone: true,
  imports: [CommonModule],
  providers: [NotificationService], // Scoped component-level provider instance!
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent implements OnInit {
  notifications: string[] = [];
  instanceId: number = 0;

  constructor(private notificationService: NotificationService) {}

  ngOnInit(): void {
    this.instanceId = this.notificationService.getInstanceId();
    this.notifications = this.notificationService.getNotifications();
  }

  addNotice(): void {
    this.notificationService.addNotification(`Notification #${this.notifications.length + 1}`);
    this.notifications = this.notificationService.getNotifications();
  }
}
