import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { WorksSearchService } from './works-search.service';
import { WorksSearchResponse } from './models/response/works-search-response.model';
import { WorksSearchResults } from './models/response/works-search-results.model';

@Component({
  selector: 'app-works-search',
  templateUrl: './works-search.component.html',
  styleUrls: ['./works-search.component.scss'],
})
export class WorksSearchComponent {
  @Output() response: EventEmitter<WorksSearchResponse> =
    new EventEmitter<WorksSearchResponse>();
  @Output() loading: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() error: EventEmitter<void> = new EventEmitter<void>();

  openAdvancedSearchDialog: boolean = false;
  searchForm: FormGroup;
  resultCountOptions: number[] = [10, 25, 50, 100];
  results: WorksSearchResults[] = [];
  totalHits: number = 0;

  constructor(
    private fb: FormBuilder,
    private worksSearchService: WorksSearchService
  ) {
    this.searchForm = this.fb.group({
      search: [''],
      resultCount: [null],
    });
  }

  onAdvancedSearch(advancedSearch: string) {
    this.searchForm.get('search')?.setValue(advancedSearch);
    this.onSubmit();
  }

  onSubmit() {
    this.loading.emit(true);

    this.worksSearchService
      .searchWorks(
        this.searchForm.get('search')?.value,
        this.searchForm.get('resultCount')?.value
      )
      .subscribe({
        next: (response) => {
          this.response.emit(response);
          this.loading.emit(false);
        },
        error: (error) => {
          this.loading.emit(false);
          this.error.emit();
          console.error(error);
          throw new Error('An error occured, please try searching again.');
        },
      });
  }

  openAdvancedSearch() {
    this.openAdvancedSearchDialog = true;
  }

  onDialogClosed() {
    this.openAdvancedSearchDialog = false;
  }
}
