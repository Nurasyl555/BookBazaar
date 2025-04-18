import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-sort',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './sort.component.html',
  styleUrls: ['./sort.component.css']
})
export class SortComponent {
  selectedSort = '';

  @Output() sortChanged = new EventEmitter<string>();

  onSortChange() {
    this.sortChanged.emit(this.selectedSort);
  }
}
