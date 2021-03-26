import { Component, OnInit } from '@angular/core';

import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import * as pluginDataLabels from 'chart.js';
import { Label, MultiDataSet } from 'ng2-charts';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss', './mediaQueries.scss']
})
export class DashboardComponent implements OnInit {

  // Bar chart Satrt
  public barChartOptions: ChartOptions = {
    responsive: true,
    scales: { xAxes: [{}], yAxes: [{}] },
    plugins: {
      datalabels: {
        anchor: 'end',
        align: 'end',
      }
    }
  };
  public barChartLabels: Label[] = ['REF', 'AC', 'WM', 'WH', 'CE', 'PLAT'];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;
  public barChartPlugins = [pluginDataLabels];

  public barChartData: ChartDataSets[] = [
    { data: [55, 90, 70, 100, 85, 60], label: 'Planed YTD' },
    { data: [40, 86, 60, 90, 80, 75], label: 'Forecasted YTD' },
    { data: [50, 88, 72, 95, 80, 70], label: 'Actual YTD' }
  ];
// bar chart end

//  Pie  chart Doughnut
public doughnutChartLabels: Label[] = ['4% Pending for registration', ' 20% Registered', '10% Running', '12% Closed','1.2% Cancelled'];
public doughnutChartData: MultiDataSet = [
  [4, 20, 10, 12,1.2]
];
public doughnutChartType: ChartType = 'doughnut';

  constructor() { }


  //  Project ul list 
  projects =[
   {id:1, name:'Total Projects', total:250},
   {id:2, name:'Pending for registration', total:120},
   {id:3, name:'Project registered', total:78},
   {id:4, name:'Project closed', total:78},
   {id:5, name:'Project cancled', total:78}
 ];
 
//  To Do List Data
DoList =[
  {id:1, title:'Project registration approval', dd:'Injection Part hip to pp tdr/wm/prd/2019', plan:'business plan', leader:'kumar', button:'Production'},
  {id:2, title:'Project registration approval', dd:'Injection Part hip to pp tdr/wm/prd/2019', plan:'business plan', leader:'kumar', button:'Approval'},
  {id:3, title:'Project registration approval', dd:'Injection Part hip to pp tdr/wm/prd/2019', plan:'business plan', leader:'kumar', button:'Manufacture'},
  {id:4, title:'Project registration approval', dd:'Injection Part hip to pp tdr/wm/prd/2019', plan:'business plan', leader:'kumar', button:'Production'},
  {id:5, title:'Project registration approval', dd:'Injection Part hip to pp tdr/wm/prd/2019', plan:'business plan', leader:'kumar', button:'Manufacture'}
];

  ngOnInit(): void {
  }

  // events
  public chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  

}
