import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-highcharts',
  templateUrl: './highcharts.component.html',
  styleUrls: ['./highcharts.component.css']
})


export class HighchartsComponent implements OnInit {
  show : boolean = false;
  initalMessage = "No Chart Selected";
  Highcharts: typeof Highcharts = Highcharts;
  typechart : any;

  no_students_branch = [100,50,30,70,89];


  constructor() {}

  ngOnInit(): void {

  }

  isDisplay(str : string){
    this.initalMessage = ""
    this.show = true;
    switch(str){
      case 'piechart':
        Highcharts.chart('container',{
          chart : {
            type: 'pie'
          },
          title : {
            text : 'Number of student per branch',
            align : 'center'
          },
          tooltip: {
            valueSuffix: '%'
        },
          plotOptions : {
            series : {
              allowPointSelect: true,
              cursor: 'pointer',
              dataLabels : [{
                enabled : true,
              },{
                enabled : true,
                format: '{point.percentage:.1f}%',
                style: {
                    fontSize: '1.2em',
                    textOutline: 'none',
                    opacity: 0.7
                },
                filter: {
                    operator: '>',
                    property: 'percentage',
                    value: 10
                }
              }]
            }
          },
          series: [
            {
                name: 'Percentage',
                colorByPoint: true,
                data: [
                    {
                        name: 'Computer Science & engineering',
                        y: 20
                    },
                    {
                        name: 'Mechanical Engineering',
                        y: 30
                    },
                    {

                        name: 'Electronics and telecommunication',
                        y: 20
                    },
                    {
                        name: 'AI & ML',
                        y: 20
                    },
                    {
                        name: 'AI & DS',
                        y: 10
                    }
                ]
            }
        ] as any
        })
        break;
      case 'columnchart':
        Highcharts.chart('container',{
          chart : {
            type : 'column'
          },
          title : {
            text : 'Number of customers per bank',
            align : 'center'
          },
          subtitle : {
            text : 'Record of 2019 to 2024',
            align : 'center'
          },
          yAxis : {
            title : {
              text : 'Number of customers'
            }
          },
          xAxis : {
            accessibility : {
              rangeDescription : 'Range: 2019 to 2030'
            }
          },
        })
        break;
        case 'linechart':
          Highcharts.chart('container',{
            chart : {
              type : 'line'
            },
            title :{
              text : 'Number of students who placed per year',
              align : 'left'
            },
            subtitle : {
              text : 'Record from 2010 to 2022',
              align : 'left'
            },
            yAxis : {
              title : {
                text : 'number of students who placed'
              }
            },
            plotOptions : {
              series : {
                pointStart : 2019
              }
            },
            xAxis : {
              // categories: ['2010','2011','2012','2013','2014','2015','2016','2017','2018','2019','2020','2021','2022'],
              accessibility :{
                rangeDescription: 'Range: 2019 to 2024'
              }
            },series: [{
            name: 'Number of students who placed',
            data: [
                43, 48, 65, 81, 11, 14,
                17, 16, 15, 16, 15, 16, 17
            ]},
            {
              name : 'number of students who attempts',
              data : [
                53, 58, 75, 91, 51, 24,
                47, 46, 55, 46, 45, 46, 47
              ]
            }
          ] as any
          })
        break;
      case 'treemapchart':
        break;
      case 'areachart':
        break;
      case 'stakedbarchart':
        break;
      default:
        console.log("None")
    }
  }

}
