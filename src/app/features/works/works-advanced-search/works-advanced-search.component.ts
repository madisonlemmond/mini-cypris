import { Component, EventEmitter, Output } from '@angular/core';
import { AdvancedSearchComponent } from '../../advanced-search/advanced-search.component';
import { WorksSearchResponse } from '../works-search/models/response/works-search-response.model';
import { WorksSearchService } from '../works-search/works-search.service';

@Component({
  selector: 'app-works-advanced-search',
  standalone: true,
  imports: [AdvancedSearchComponent],
  templateUrl: './works-advanced-search.component.html',
  styleUrl: './works-advanced-search.component.scss',
})
export class WorksAdvancedSearchComponent {
  @Output() response: EventEmitter<WorksSearchResponse> =
    new EventEmitter<WorksSearchResponse>();
  @Output() loading: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor(private worksSearchService: WorksSearchService) {}

  onAdvancedSearch(search: string) {
    this.loading.emit(true);
    this.worksSearchService.searchWorks(search).subscribe({
      next: (response) => {
        this.response.emit(response);
        this.loading.emit(false);
      },
      error: (error) => {
        this.loading.emit(false);
        console.error(error);
        throw new Error('An error occured, please try searching again.');
      },
    });
  }
}
