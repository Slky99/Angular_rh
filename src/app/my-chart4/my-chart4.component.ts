import { Component } from '@angular/core';
import {Chart} from 'chart.js';

@Component({
  selector: 'app-my-chart4',
  templateUrl: './my-chart4.component.html',
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
}
