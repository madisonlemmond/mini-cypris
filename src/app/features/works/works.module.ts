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
import { AdvancedSearchComponent } from '../advanced-search/advanced-search.component';
import { FieldsetModule } from 'primeng/fieldset';
import { WorksAdvancedSearchComponent } from "./works-advanced-search/works-advanced-search.component";
import { TooltipModule } from 'primeng/tooltip';
import { WorksAggregateDataComponent } from './works-aggregate-data/works-aggregate-data.component';
import { PieChartComponent } from '../charts/pie-chart/pie-chart.component';
import { BarChartComponent } from '../charts/bar-chart/bar-chart.component';
import { DividerModule } from 'primeng/divider';

@NgModule({
  declarations: [WorksSearchComponent, WorksCardComponent, WorksAggregateDataComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    InputTextModule,
    ButtonModule,
    CardModule,
    PaginatorModule,
    TagModule,
    FieldsetModule,
    AdvancedSearchComponent,
    WorksAdvancedSearchComponent,
    TooltipModule,
    PieChartComponent,
    BarChartComponent,
    DividerModule,
],
  exports: [WorksSearchComponent, WorksCardComponent, WorksAggregateDataComponent],
})
export class WorksModule {}
