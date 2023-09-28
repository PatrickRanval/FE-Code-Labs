import { Component } from '@angular/core';

@Component({
  selector: 'app-warning-alert',
  template: `
    <p>This is a warning alert.</p>
    `,
  styles: [`
    p{
      padding: 20px;
      color: red;
      border: 1px solid black;
    }
    `]
})
export class WarningAlertComponent {

}
