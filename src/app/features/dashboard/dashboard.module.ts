import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { WorksModule } from '../works/works.module';
import { AdvancedSearchComponent } from '../advanced-search/advanced-search.component';
import { WorksAdvancedSearchComponent } from '../works/works-advanced-search/works-advanced-search.component';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { MessagesModule } from 'primeng/messages';

@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    WorksModule,
    AdvancedSearchComponent,
    WorksAdvancedSearchComponent,
    ProgressSpinnerModule,
    MessagesModule
  ],
  exports: [DashboardComponent],
})
export class DashboardModule {}
