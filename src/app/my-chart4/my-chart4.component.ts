<<<<<<< HEAD
import { Component, ElementRef, ViewChild } from '@angular/core';
import { Chart } from 'chart.js';
import { ChartService } from '../ChartServ/chart.service';
=======
import { Component } from '@angular/core';
import {Chart} from 'chart.js';
>>>>>>> f1c199fb000fc4c4eecf682d9923dd886b4283f1

@Component({
  selector: 'app-my-chart4',
  templateUrl: './my-chart4.component.html',
<<<<<<< HEAD
  styleUrl: './my-chart4.component.scss',
})
export class MyChart4Component {
  @ViewChild('chartCanvas2') chartCanvas2!: ElementRef;
  constructor(private chartService: ChartService) {}

  chartData2: any[] = [];

  ngOnInit(): void {
    this.chartService.getProspectChartData2().subscribe((data) => {
      console.log(data);
      this.chartData2 = data;
      this.createChart2();
    });
  }

  createChart2() {
    console.log(this.chartData2); // Check the chartData2 array
    const chartLabels = this.chartData2.map((item) => item.majcv); // Use 'prospectDomaine' as labels
    const chartValues = this.chartData2.map((item) => item.count); // Use 'count' as data points

    const canvas: HTMLCanvasElement = this.chartCanvas2.nativeElement; // Use chartCanvas2
    const ctx = canvas.getContext('2d');

    if (ctx) {
      console.log('createChart2 called');
      new Chart(ctx, {
        type: 'bar',
        data: {
          labels: chartLabels,
          datasets: [
            {
              label: 'Mise a jour des cv',
              data: chartValues,
              backgroundColor: [
                'linear-gradient(to right, #ff1493, #ff69b4)',
                'linear-gradient(to right, #ffff00, #ffd700)',
                'linear-gradient(to right, #87ceeb, #4682b4)',
              ],
              borderColor: ['#ff69b4', '#ffd700', '#4682b4'],
              borderWidth: 1,
            },
          ],
        },
        options: {
          scales: {
            y: {
              beginAtZero: true,
            },
          },
          plugins: {
            subtitle: {
              display: true,
            },
          },
        },
      });
    }
  }
=======
  styleUrl: './my-chart4.component.scss'
})
export class MyChart4Component {


  
   
  ngOnInit(): void {
   
    var myChart4 = new Chart("myChart4", {
    type: 'pie',
    data: {
      labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
      datasets: [{
        label: '# of Votes',
        data: [12, 19, 3, 5, 2, 3],
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });
}
>>>>>>> f1c199fb000fc4c4eecf682d9923dd886b4283f1
}
