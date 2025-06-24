import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-alert-icon',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './alert-icon.component.html',
})
export class AlertIconComponent {
  @Input() type: 'success' | 'error' | 'question' | undefined;
}
