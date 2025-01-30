import { Component } from '@angular/core';

@Component({
  selector: 'app-root', // Root selector for the Angular app
  template: `
    <div class="app-container">
      <h1>Book Page</h1>
      <app-form></app-form> <!-- Embed the FormComponent -->
    </div>
  `,
  styles: [`
    .app-container {
      text-align: center;
      margin: 20px;
    }
  `]
})
export class AppComponent {
  title = 'angular-frontend';
}

