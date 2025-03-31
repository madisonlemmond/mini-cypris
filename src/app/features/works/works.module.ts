import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorksSearchComponent } from './works-search/works-search.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { CardModule } from 'primeng/card';
import { WorksCardComponent } from './works-card/works-card.component';
import { PaginatorModule } from 'primeng/paginator';
import { TagModule } from 'primeng/tag';


@NgModule({
  declarations: [WorksSearchComponent, WorksCardComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    InputTextModule,
    ButtonModule,
    CardModule,
    PaginatorModule,
    TagModule,
  ],
  exports: [WorksSearchComponent, WorksCardComponent]
})
export class WorksModule { }

