import { Injectable } from '@angular/core';

/**
 * Hands-On 6 Step 67: Demonstration of Component-Level Provider.
 * When provided in @Component({ providers: [NotificationService] }), a new isolated service instance
 * is instantiated per component instance instead of sharing a global singleton.
 */
@Injectable()
export class NotificationService {
  private instanceId = Math.floor(Math.random() * 10000);
  private notifications: string[] = ['Welcome to Student Course Portal!'];

  getInstanceId(): number {
    return this.instanceId;
  }

  getNotifications(): string[] {
    return [...this.notifications];
  }

  addNotification(msg: string): void {
    this.notifications.push(msg);
  }
}
