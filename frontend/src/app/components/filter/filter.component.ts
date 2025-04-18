import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-filter',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent {
  selectedGenre = '';
  selectedPublisher = '';
  minPrice: number | null = null;
  maxPrice: number | null = null;
  ageLimit: string = '';

  @Output() filterChanged = new EventEmitter<{
    genre: string;
    publisher: string;
    minPrice: number | null;
    maxPrice: number | null;
    ageLimit: string;
  }>();

  onApplyFilter() {
    this.filterChanged.emit({
      genre: this.selectedGenre,
      publisher: this.selectedPublisher,
      minPrice: this.minPrice,
      maxPrice: this.maxPrice,
      ageLimit: this.ageLimit
    });
  }
}
