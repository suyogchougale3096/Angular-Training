import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import * as Highcharts from 'highcharts';
import TreemapModule from 'highcharts/modules/treemap'
TreemapModule(Highcharts);

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

  ngOnInit(): void {}

  isDisplay(str : string){
    this.initalMessage = ""
    this.show = true;
    switch(str){
      case 'piechart':
        Highcharts.chart('container',{
          chart : {
            type: 'pie',
            backgroundColor : '#f2f2f2'
          },
          title : {
            text : 'Number of student per branch',
            align : 'center'
          },
          tooltip: {
            valueSuffix: '%'
        },
        plotOptions: {
          pie: {
            dataLabels: {
              enabled: true,
              format: '<b>{point.name}</b>: {point.percentage:.1f} %'
            },
            showInLegend: true,
            borderColor: '#fff', // Border color of slices
            borderWidth: 2, // Border width of slices
            colors: ['#7cb5ec', '#434348', '#90ed7d', '#f7a35c', '#8085e9', '#f15c80', '#e4d354', '#2b908f', '#f45b5b', '#91e8e1'], // Custom colors for slices
            states: {
              hover: {
                enabled: false // Disable hover effect
              }
            }
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
            type : 'column',
          },
          legend: {
            enabled: false
          },
          title : {
            text : 'Population past 3 years'
          },
          subtitle : {
            text : '2021-2023'
          },
          xAxis : {
            accessibility : {
              description : 'years'
            }
          },
          yAxis : {
            labels :{
              style : {
                color : 'green',
                fontSize : '15px'
              }
            }
          },
          plotOptions :{
            series :{
              pointStart : 2021
            }
          },
          series : [{
            name : 'Maharashtra',
            data : [20000,30000,80000]
          },{
            name : 'Bihar',
            data : [80000,100000,120000]
          },{
            name : 'UP',
            data : [10000,200000,320000]
          } as any]
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
                pointStart : 2019,
                dataLabels : {
                  enabled : false
                }
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
        const colors = Highcharts.getOptions().colors;
        Highcharts.chart('container',{
        series: [{
            type: 'treemap',
            layoutAlgorithm: 'squarified',
            clip: false,
            data: [{
                name: 'A',
                value: 6,
                colorValue: 1
            }, {
                name: 'B',
                value: 6,
                colorValue: 2
            }, {
                name: 'C',
                value: 4,
                colorValue: 3
            }, {
                name: 'D',
                value: 3,
                colorValue: 4
            }, {
                name: 'E',
                value: 2,
                colorValue: 5
            }, {
                name: 'F',
                value: 2,
                colorValue: 6
            }, {
                name: 'G',
                value: 1,
                colorValue: 7
            }]
        }],
        title: {
            text: 'Highcharts Treemap'
        },
        plotOptions:{
          series :{
            dataLabels : {
              enabled : false
            }
          }
        }
        })
        break;
      case 'areachart':
        Highcharts.chart('container', {
          chart: {
            type: 'area'
          },
          title: {
            text: 'College Admission over 5 years of A, B and C'
          },
          xAxis: {
            accessibility: {
              rangeDescription: 'Range: 2019 to 2024.'
            },
            labels :{
              align : 'left'
            },
            categories: ['2019', '2020', '2021', '2022', '2023', '2024']
          },
          yAxis: {
            title: {
              text: 'Number of students'
            }
          },
          tooltip: {
            pointFormat: 'College {series.name} having {point.y:,.0f} students'
          },
          plotOptions: {
            area: {
              marker: {
                enabled: false,
                symbol: 'circle',
                radius: 2,
                states: {
                  hover: {
                    enabled: true
                  }
                }
              }
            }
          },
          series: [
            {
              name: 'A',
              data: [335,280,370,360,370,370]
            },
            {
              name: 'B',
              data: [220,225,352,400,360,272]
            },
            {
              name: 'C',
              data: [136, 144, 152, 160, 168, 176]
            }
          ] as any
        });
        break;
      case 'stakedbarchart':
        Highcharts.chart('container', {
          chart: {
              type: 'bar'
          },
          title: {
              text: 'Number of cars made by Lamborgini'
          },
          xAxis: {
              categories: [
                  'January', 'February', 'March', 'April', 'May','July','August'
              ]
          },
          yAxis: {
              min: 0,

          },
          legend: {
              reversed: true

          },
          plotOptions: {
              series: {
                  stacking: 'normal',
                  dataLabels: {
                      enabled: true
                  }
              }
          },
          series: [{
              name: 'Urus',
              data: [10,15,12,30,20,12,15],
              color: '#FBC04D'
          }, {
              name: 'Huracán',
              data: [10,21,20,15,12,13,22],
              color: '#664D4D'
          }, {
              name: 'Revuelto',
              data: [10,12,9,22,11,29,11],
              color: '#0D929A'
          }] as any
        });

        break;
      default:
        console.log("None")
    }
  }

}
