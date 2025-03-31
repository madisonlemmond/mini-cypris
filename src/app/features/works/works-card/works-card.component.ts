import { Component, Input } from '@angular/core';
import { WorkDetail } from './models/work-detail.model';
import { WorkDetailCardProperty } from './models/work-detail-card-property.model';
import { Author } from '../works-search/models/response/author.model';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-works-card',
  templateUrl: './works-card.component.html',
  styleUrl: './works-card.component.scss'
})
export class WorksCardComponent {

  @Input() work!: WorkDetail

  workDetailCardProperties: WorkDetailCardProperty[]  = [
    {
      property: 'documentType',
      label: 'Document Type',
      type: 'tag',
      icon: 'pi pi-file',
    },
    {
      property: 'fieldOfStudy',
      label: 'Field of Study',
      type: 'tag',
      icon: 'pi pi-clipboard',
    },
    {
      property: 'authors',
      label: 'Authors',
      type: 'text',
      icon: 'pi pi-user',
      format: (authors: Author[]) => authors.map(author => author.name).join(', '),
    },
    {
      property: 'publisher',
      label: 'Publisher',
      type: 'text',
      icon: 'pi pi-building-columns',
    },
    {
      property: 'publishedDate',
      label: 'Published',
      type: 'text',
      icon: 'pi pi-calendar',
      format: (publishedDate: Date) => formatDate(publishedDate, 'yyyy-MM-dd', 'en-us'),
    },
    {
      property: 'abstract',
      label: 'Abstract',
      type: 'text',
      icon: 'pi pi-book',
    }
  ]
}
