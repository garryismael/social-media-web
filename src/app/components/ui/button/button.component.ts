import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css',
})
export class ButtonComponent {
  @Input({ required: true })
  text!: string;

  @Input({ required: false })
  type: 'text' | 'submit' = 'text';

  @Input({ required: false })
  cls: string = '';

  @Output()
  onClick = new EventEmitter<void>();

  public handleClick(): void {
    console.log(`Hello`);
    this.onClick.emit();
  }
}
