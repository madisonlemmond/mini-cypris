import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { WorksModule } from '../works/works.module';

@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    WorksModule,
],
  exports: [DashboardComponent],
})
export class DashboardModule { }
