import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-list-header',
  standalone: true,
  imports: [],
  templateUrl: './list-header.component.html',
  styleUrl: './list-header.component.css'
})
export class ListHeaderComponent {
    @Input({required: true}) listType!: string;
}
