import { Component } from '@angular/core';

@Component({
  selector: 'hc-checkbox-demo',
  templateUrl: './checkbox-demo.component.html',
  styleUrls: ['./checkbox-demo.component.scss']
})
export class CheckboxDemoComponent {
  isChecked: boolean;

  getCheckboxText() {
    return `${this.isChecked ? 'Disable' : 'Enable'} Button`;
  }
}
