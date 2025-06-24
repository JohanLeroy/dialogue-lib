import { Component, computed, effect, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlertService } from '../services/alert.service';
import { Alert } from '../models/alert';
import {animate, style, transition, trigger} from '@angular/animations';
import {AlertIconComponent} from "./alert-icon.component";

@Component({
  selector: 'app-alert',
  standalone: true,
  imports: [CommonModule, AlertIconComponent],
  templateUrl: './alert.component.html',
  animations: [
    trigger('fade', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('200ms ease-out', style({ opacity: 1 })),
      ]),
      transition(':leave', [
        animate('200ms ease-in', style({ opacity: 0 })),
      ]),
    ]),
  ],
})
export class AlertComponent {

  private alertService = inject(AlertService);
  private current = signal<Alert | null>(null);
  alertData = computed(() => this.current());

  private autoCloseTimeout: any;
  private countdownInterval: any;
  countdown = signal<number | null>(null);

  constructor() {
    effect(() => {
      this.alertService.alerts().subscribe((data) => {
        clearTimeout(this.autoCloseTimeout);
        clearInterval(this.countdownInterval);
        this.countdown.set(null);
        this.current.set(data);
        if (typeof data.timeout === 'number' && data.timeout > 0) {
          const seconds = Math.floor(data.timeout / 1000);
          this.countdown.set(seconds);
          this.countdownInterval = setInterval(() => {
            const current = this.countdown();
            if (current !== null && current > 0) {
              this.countdown.set(current - 1);
            }
          }, 1000);
          this.autoCloseTimeout = setTimeout(() => {
            this.cancel();
          }, data.timeout);
        }
      });
    });
  }

  confirm() {
    this.current()?.resolve(true);
    this.clear();
  }

  cancel() {
    this.current()?.resolve(false);
    this.clear();
  }

  private clear() {
    this.current.set(null);
    clearTimeout(this.autoCloseTimeout);
    clearInterval(this.countdownInterval);
    this.countdown.set(null);
  }

}
