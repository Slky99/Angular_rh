import { Component } from '@angular/core';
import {Chart} from 'chart.js';

@Component({
  selector: 'app-my-chart3',
  templateUrl: './my-chart3.component.html',
  styleUrl: './my-chart3.component.scss'
})
export class MyChart3Component {


  
   
  ngOnInit(): void {
   
    var myChart3 = new Chart("myChart3", {
    type: 'radar',
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
