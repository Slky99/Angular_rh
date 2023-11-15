import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-my-chart2',
  templateUrl: './my-chart2.component.html',
  styleUrl: './my-chart2.component.scss'
})
export class MyChart2Component implements OnInit{

  
  constructor() { }

   
   
  ngOnInit(): void {
   
    var myChart2 = new Chart("myChart2", {
    type: 'line',
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
}
