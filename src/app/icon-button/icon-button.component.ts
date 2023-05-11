import { Component } from '@angular/core';

@Component({
  selector: 'app-icon-button',
  template: `
    <div class="wrapper">
      <button
        class="wrapper__btn"
        (click)="showRandomIcon()"
        [disabled]="isLoading"
      >
        Show Icon
      </button>
      <div *ngIf="isLoading" class="lds-default">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div *ngIf="randomIcon" class="wrapper__container">
        <i class="wrapper__icon" [class]="randomIcon"></i>
      </div>
    </div>
  `,
  styleUrls: ['./icon-button.component.css'],
})
export class IconButtonComponent {
  randomIcon: string = '';
  isLoading: boolean = false;

  showRandomIcon(): void {
    this.isLoading = true;
    this.randomIcon = '';

    setTimeout(() => {
      const icons = ['fas fa-user', 'fas fa-heart', 'fas fa-star'];
      const randomIndex = Math.floor(Math.random() * icons.length);
      this.randomIcon = icons[randomIndex];
      this.isLoading = false;
    }, 3000);
  }
}
