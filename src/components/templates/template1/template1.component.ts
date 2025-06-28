import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-template1',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './template1.component.html',
  styleUrl: './template1.component.css'
})
export class Template1Component {
generatePreview() {
  window.print(); // Opens browser print dialog (can save as PDF)
}
}
