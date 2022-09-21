import { Component, OnInit } from '@angular/core';
import Chart from "chart.js/auto";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  appStorage = localStorage;
  public Date = Date;
  public chart: any;

  constructor() { }

  ngOnInit(): void {
    this.createChart();
  }

  createChart(){
    this.chart = new Chart("MyChart", {
      type: 'doughnut', //this denotes tha type of chart
      data: {
        labels: [
          'On-going',
          'Closed',
          'In progress'
        ],
        datasets: [{
          label: 'My First Dataset',
          data: [300, 50, 100],
          backgroundColor: [
            'rgb(255, 99, 132)',
            'rgb(54, 162, 235)',
            'rgb(255, 205, 86)'
          ],
          hoverOffset: 4
        }]
      },
      options: {
        aspectRatio:2.5
      }   
    });
  }


}
