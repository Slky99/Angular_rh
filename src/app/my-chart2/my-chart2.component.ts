import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Chart } from 'chart.js';
import { ChartService } from '../ChartServ/chart.service';

@Component({
  selector: 'app-my-chart2',
  templateUrl: './my-chart2.component.html',
  styleUrl: './my-chart2.component.scss'
})
export class MyChart2Component implements OnInit{

  @ViewChild('chartCanvas3') chartCanvas3!: ElementRef;
  
  chartData3: any[] = [];
  
  constructor(private chartService: ChartService) { }

   
   
  ngOnInit(): void {
    this.chartService.getServicesDatda().subscribe((data) => {
      console.log(data);
      this.chartData3 = data;
      this.createChart3(data);
    });
    
}



createChart3(data : any []): void {
  console.log(this.chartData3);
  const labels = data.map((item) => item[0]); //  // Extract designation
  const values = data.map((item) => item[1]); //   // Extract count


  const ctx = document.getElementById('myChart') as HTMLCanvasElement;
  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: labels,
      datasets: [{
        label: 'COMPTEUR',
        data: values,
        backgroundColor: [
          'linear-gradient(to right, #ff1493, #ff69b4)',
          'linear-gradient(to right, #ffff00, #ffd700)',
          'linear-gradient(to right, #87ceeb, #4682b4)',
        ],
        borderColor: [
          '#ff69b4',
          '#ffd700',
          '#4682b4',
        ],
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

}
