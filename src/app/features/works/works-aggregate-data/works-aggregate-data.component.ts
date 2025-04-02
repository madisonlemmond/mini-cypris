import { Component, Input } from '@angular/core';
import { WorksSearchResults } from '../works-search/models/response/works-search-results.model';

@Component({
  selector: 'app-works-aggregate-data',
  templateUrl: './works-aggregate-data.component.html',
  styleUrl: './works-aggregate-data.component.scss'
})
export class WorksAggregateDataComponent {
  @Input()
  worksSearchResults!: WorksSearchResults[];

  documentTypes: string[] = [];
  yearsPublished: number[] = [];

  pieChartOptions: any;
  barChartOptions: any;
  pieChartData: any;
  barChartData: any;

  ngOnInit() {
    const documentStyle = getComputedStyle(document.documentElement);
    const textColor = documentStyle.getPropertyValue('--text-color');
    const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary');
    const surfaceBorder = documentStyle.getPropertyValue('--surface-border');

    this.pieChartOptions = {
      responsive: true,
      plugins: {
        legend: {
          position: 'top',
        },
        title: {
          display: true,
          text: 'Document Type',
        },
      },
    }
  
    this.barChartOptions = {
      plugins: {
        legend: {
            labels: {
                color: textColor
            }
        },
      },
      scales: {
          y: {
              beginAtZero: true,
              ticks: {
                  color: textColorSecondary
              },
              grid: {
                  color: surfaceBorder,
                  drawBorder: false
              }
          },
          x: {
              ticks: {
                  color: textColorSecondary
              },
              grid: {
                  color: surfaceBorder,
                  drawBorder: false
              }
          }
      }
    };
  }

  ngOnChanges () {
    this.getPieChartData();
    this.getBarChartData();
  }

  getPieChartData() {
    this.documentTypes = this.worksSearchResults.map(result => {
      return result.documentType ? this.capitalizeFirstLetter(result.documentType) : 'Unknown';
    });
    const uniqueDocumentTypes = [...new Set(this.documentTypes)];

    this.pieChartData = {
      labels: uniqueDocumentTypes,
      datasets: [
        {
          data: uniqueDocumentTypes.map(type => this.documentTypes.filter(docType => docType === type).length),
          backgroundColor: ['#7982B9', '#A5C1DC', '#E9F6FA'],
        }
      ]
    }
  }

  getBarChartData() {
    const validYears = this.worksSearchResults
    .map(result => result.yearPublished || (result.publishedDate ? result.publishedDate.getFullYear() : null))
    .filter((year): year is number => typeof year === 'number');

    const uniqueYears = [...new Set(validYears)].sort((a, b) => a - b);
    const yearCounts = uniqueYears.map(year => validYears.filter(y => y === year).length);

    this.barChartData = {
      labels: uniqueYears,
      datasets: [
        {
          label: 'Publications by Year',
          data: yearCounts,
          backgroundColor: ['#B19CD7', '#C0AFE2', '#CEC2EB', '#DDD5F3', '#EBE8FC'],
        }
      ]
    };
  }

  capitalizeFirstLetter(word: string) {
    return word.charAt(0).toUpperCase() + word.slice(1);
  }
}
