import { WorksSearchResults } from './works-search-results.model';

export interface WorksSearchResponse {
    totalHits: number;
    limit: number;
    offset: number;
    searchId: number;
    results: WorksSearchResults[];
}