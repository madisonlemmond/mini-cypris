import { Component, EventEmitter, Input, Output } from '@angular/core';
import { AdvancedSearchComponent } from '../../advanced-search/advanced-search.component';

@Component({
  selector: 'app-works-advanced-search',
  standalone: true,
  imports: [AdvancedSearchComponent],
  templateUrl: './works-advanced-search.component.html',
  styleUrl: './works-advanced-search.component.scss',
})
export class WorksAdvancedSearchComponent {
  @Input() showDialog: boolean = false;
  @Output() advancedSearch: EventEmitter<string> = new EventEmitter<string>();
  @Output() dialogClosed: EventEmitter<void> = new EventEmitter<void>();

  constructor() {}

  onAdvancedSearch(search: string) {
    this.advancedSearch.emit(search);
  }

  onDialogClose() {
    this.showDialog = false;
    this.dialogClosed.emit();
  }
}
