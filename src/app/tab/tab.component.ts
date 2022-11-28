import { NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.scss'],
  imports: [NgIf],
})
export class TabComponent {
  @Input() title: string = '';
  @Input() active = false;
}
