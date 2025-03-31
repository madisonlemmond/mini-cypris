import { Component } from '@angular/core';
import { WorksSearchResponse } from '../works/works-search/models/response/works-search-response.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  worksSearchResponse!: WorksSearchResponse;
  worksSearchLoading: boolean = false;

  onResponse(response: WorksSearchResponse) {
    this.worksSearchResponse = response; 
  }

  setWorksSearchLoading(loading: boolean) {
    this.worksSearchLoading = loading;
  }
}
