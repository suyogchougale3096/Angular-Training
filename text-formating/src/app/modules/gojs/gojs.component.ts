import { Component, OnInit } from '@angular/core';
import * as go from 'gojs';
import { from } from 'rxjs';

const $ = go.GraphObject.make;


@Component({
  selector: 'app-gojs',
  templateUrl: './gojs.component.html',
  styleUrls: ['./gojs.component.css']
})
export class GojsComponent implements OnInit {

  public diagram : go.Diagram;

  constructor() {
    this.diagram = new go.Diagram();
  }

  ngOnInit(): void {
  }

  ngAfterViewInit(){
    this.diagram = $(go.Diagram, 'gojsid');

    // Create an simple node template
    this.diagram.nodeTemplate = (
      $(go.Node, "Auto",
        $(go.Shape, {figure : "Rectangle"}, {strokeWidth : 0},
          new go.Binding("fill","color"),
          new go.Binding("figure","shape1"),
          new go.Binding("strokeWidth","borderwidth")
        ),
        $(go.TextBlock,{margin : 8},
          new go.Binding("text","key"),
          new go.Binding("stroke","textcolor"),
          new go.Binding("font", "fontstyle")
        )
      )
    );

    this.diagram.linkTemplate =
      $(go.Link,
        $(go.Shape, {strokeWidth : 2},
          new go.Binding('stroke','color'),
          new go.Binding('strokeWidth','width')
        ),
        $(go.Shape,{ toArrow : "Standard",stroke : ''},
          new go.Binding('fill','color'),
          new go.Binding('toArrow','arrowtype'),
        ),
      )




    const nodeDataArray =
      [
        {key : 'Rubiscape', color : "#FF007F", textcolor : 'white', fontstyle : 'bold 14pt Calibari', shape1 : 'Rectangle' ,group : 1},
        {key : 'RubiConnect', color : "#FFBF00", textcolor : 'black', fontstyle : 'bold 12pt Calibari', shape1 : 'Rectangle', group : 2},
        {key : 'Rubistudio', color : "#FFBF00", textcolor : 'black', fontstyle : 'bold 12pt Calibari', shape1 : 'Rectangle',group : 2},
        {key : 'Rubisight', color : "#FFBF00", textcolor : 'black', fontstyle : 'bold 12pt Calibari', shape1 : 'Rectangle',group : 2},
        {key : 'Workflows', color : "#DCDCDC", textcolor : 'black', shape1 : 'RoundedRectangle', borderwidth : 2},
        {key : 'Workbooks', color : "#DCDCDC", textcolor : 'black', shape1 : 'RoundedRectangle', borderwidth : 2},
        {key : 'DashBoard', color : "#DCDCDC", textcolor : 'black', shape1 : 'RoundedRectangle', borderwidth : 2},
        {key : 'Models', color : "#DCDCDC", textcolor : 'black', shape1 : 'Ellipse', borderwidth : 2},
        {key : 'Reusable Code', color : "#DCDCDC", textcolor : 'black', shape1 : 'Diamond', borderwidth : 2},
      ]

    const linkDataArray = [
      {from : 'Rubiscape' ,to : 'RubiConnect', color : 'pink',width : '5px', arrowtype : 'Standard'},
      {from : 'Rubiscape' ,to : 'Rubistudio', color : 'pink',width : '5px'},
      {from : 'Rubiscape' ,to : 'Rubisight', color : 'pink',width : '5px'},
      // {from : 'Rubiscape' ,to : 'Rubisight'},
      {from : 'Rubistudio' ,to : 'Workflows', color : 'red',width : '5px'},
      {from : 'Rubistudio' ,to : 'Workbooks', color : 'red',width : '5px'},
      {from : 'Rubisight' ,to : 'DashBoard', color : 'purple',width : '5px'},
      // {from : 'Workflows' ,to : 'Workbooks'},
      // {from : 'Workflows' ,to : 'Models'},
      {from : 'Workbooks' ,to : 'Models'},
      {from : 'Workbooks' ,to : 'Reusable Code', color : 'black',width : '5px'},
    ]

    this.diagram.layout = $(go.TreeLayout,
      {
        angle : 90,
      }
    )


    this.diagram.model = new go.GraphLinksModel(nodeDataArray, linkDataArray)
  }
}
