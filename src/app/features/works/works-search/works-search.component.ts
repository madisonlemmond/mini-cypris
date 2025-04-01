import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { WorksSearchService } from './works-search.service';
import { WorksSearchResponse } from './models/response/works-search-response.model';

@Component({
  selector: 'app-works-search',
  templateUrl: './works-search.component.html',
  styleUrls: ['./works-search.component.scss']
})
export class WorksSearchComponent {
  @Output() response: EventEmitter<WorksSearchResponse> = new EventEmitter<WorksSearchResponse>();
  @Output() loading: EventEmitter<boolean> = new EventEmitter<boolean>();

  searchForm: FormGroup;

  constructor(private worksSearchService: WorksSearchService) {
    this.searchForm = new FormGroup({
      search: new FormControl(''),
    })
  }

  onSubmit() {
    this.loading.emit(true);
    this.worksSearchService.searchWorks(this.searchForm.get('search')?.value).subscribe({
      next: response => {
        this.response.emit(response);
        this.loading.emit(false);
      },
      error: error => {
        this.loading.emit(false);
        console.error(error);
        throw new Error('An error occured, please try searching again.')
      }
    })
  }
}
