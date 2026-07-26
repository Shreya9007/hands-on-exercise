import { CanDeactivateFn } from '@angular/router';

export interface HasDirtyForm {
  isFormDirty(): boolean;
}

/**
 * Hands-On 7 Task 2 Step 77: CanDeactivate Guard
 * Prevents accidental loss of form data when navigating away from dirty form.
 */
export const unsavedChangesGuard: CanDeactivateFn<HasDirtyForm> = (component) => {
  if (component && component.isFormDirty && component.isFormDirty()) {
    return window.confirm('You have unsaved changes. Leave?');
  }
  return true;
};
