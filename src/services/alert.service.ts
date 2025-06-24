import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Alert } from '../models/alert';

type AlertParams = Partial<Omit<Alert, 'resolve'>>;

@Injectable({ providedIn: 'root' })
export class AlertService {

  private alertSubject = new Subject<Alert>();

  alerts() {
    return this.alertSubject.asObservable();
  }

  confirm({
            type = 'question',
            title = 'Êtes-vous sûr ?',
            text = 'Cette action est irréversible.',
            confirmText = 'Confirmer',
            cancelText = 'Annuler',
            timeout,
            backdropOpacity = 0.1,
          }: AlertParams): Promise<boolean> {
    return new Promise((resolve) => {
      this.alertSubject.next({
        type,
        title,
        text,
        confirmText,
        cancelText,
        timeout,
        backdropOpacity,
        resolve,
      });
    });
  }

}
