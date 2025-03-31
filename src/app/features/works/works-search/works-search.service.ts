import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

import { WorksSearchResponse } from './models/response/works-search-response.model'

@Injectable({
  providedIn: 'root'
})
export class WorksSearchService {
  private baseUrl: string = `${environment.coreApiUrl}search`;

  constructor(private httpClient: HttpClient) {}

  searchWorks(searchQuery = '', limitResults = null): Observable<WorksSearchResponse> {
    let params = new HttpParams().set('q', searchQuery);
    if (limitResults) {
      params = params.set('limit', limitResults);
    }
    return this.httpClient.get<WorksSearchResponse>(`${this.baseUrl}/works/`, { params });
  }
}
