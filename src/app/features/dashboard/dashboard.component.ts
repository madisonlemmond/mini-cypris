import { Component } from '@angular/core';
import { WorksSearchResponse } from '../works/works-search/models/response/works-search-response.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  worksSearchResponse!: WorksSearchResponse | null;
  worksSearchLoading: boolean = false;
  worksSearchError: boolean = false;

  errorMessage = [{ severity: 'error', detail: 'An error occured when fetching the data. Please try again.' }];
  noResultsMessage = [{ severity: 'info', detail: 'There were no results for your search. Please try a different search.' }];


  onResponse(response: WorksSearchResponse) {
    this.worksSearchError = false;
    this.worksSearchResponse = response; 
  }

  setWorksSearchLoading(loading: boolean) {
    this.worksSearchLoading = loading;
  }

  onError() {
    this.worksSearchError = true;
    this.worksSearchResponse = null;
  }
}
