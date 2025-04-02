import { Component, Input } from '@angular/core';
import { ChartModule } from 'primeng/chart';

@Component({
  selector: 'app-pie-chart',
  standalone: true,
  imports: [ChartModule],
  templateUrl: './pie-chart.component.html',
  styleUrl: './pie-chart.component.scss'
})
export class PieChartComponent {
  @Input() data: any;
  @Input() options: any;

}
