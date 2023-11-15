import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
 
 
import { Chart } from 'chart.js';

@Component({
  selector: 'app-my-chart',
  templateUrl: './my-chart.component.html',
  styleUrl: './my-chart.component.scss'
})
export class MyChartComponent implements OnInit{
 

  constructor() { }

   
   
  ngOnInit(): void {
   
    var myChart = new Chart("myChart", {
    type: 'bar',
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


  
   
  
