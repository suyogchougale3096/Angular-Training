import { Component, OnInit, Input, OnChanges, SimpleChange, SimpleChanges,Renderer2, ElementRef } from '@angular/core';
import { SharedService } from '../../services/shared.service';
import { NONE_TYPE } from '@angular/compiler';

@Component({
  selector: 'app-text-display',
  templateUrl: './text-display.component.html',
  styleUrls: ['./text-display.component.css']
})
export class TextDisplayComponent implements OnInit, OnChanges {

  name : string = '';
  result : string = '';
  specialcharRemove : boolean = false;

  values : any;

  fontSize = 16;
  stylethis: { [key: string]: string } = { 'font-size': `${this.fontSize}px` };

  isToggle : boolean = false;
  isItalic : boolean = false;
  isUnderline : boolean = false;

  constructor(private _sharedService : SharedService,private renderer: Renderer2, private el: ElementRef) {
  }

  ngOnInit(): void {

  }

  display(){
    this.result = this.name;
    this._sharedService.setDataChange(this.name);
  }

  @Input() item : any;

  ngOnChanges(changes: SimpleChanges): void {
    if(changes['item']){
      let btnValue : string = '';
      console.log(this.item)

      if(!(changes['item'].isFirstChange())){
        let fieldValues = JSON.parse(JSON.stringify(this.item))
        let keys = Object.keys(fieldValues)
        this.values = keys.map(k => fieldValues[k])
        btnValue = this.values[0];
      }

      switch(btnValue){
        case 'clearallbtn':
          this.name = '';
          this.display();
          break;
        case 'whitespacebtn':
          this.result = this.result.replace(/\s+/g, '');
          break;
        case 'reverseallbtn':
          this.result = this.result.split('').reverse().join('');
          break;
        case 'rspecialcharbtn':
          this.specialcharRemove = true;
          // this.result = this.result.replace(/[^a-zA-Z0-9 ]/g, '');
          break;
        case 'removestylebtn':
          this.stylethis = {}
          break;
        case 'capitalword':
          this.result = this.result.toUpperCase();
          break;

        case 'boldbtn':
            this.stylethis['font-weight'] = this.isToggle? 'normal': 'bold';
            this.isToggle = !this.isToggle
            console.log("body",this.isToggle)
            // console.log(this.values[1])
            break;

        case 'italicbtn':
            this.stylethis['font-style'] = this.isItalic? 'normal': 'italic';
            this.isItalic = !this.isItalic
            console.log("body",this.isItalic)
            // this.stylethis['font-style'] = 'italic';
            break;

        case 'underlinebtn':
            this.stylethis['text-decoration'] = this.isUnderline? 'none': 'underline';
            this.isUnderline = !this.isUnderline
            console.log("body",this.isUnderline)
            // this.stylethis['text-decoration'] = 'underline';
            break;

        case 'increasesizebtn':
          this.fontSize += 10;
          this.stylethis['font-size'] = `${this.fontSize}px`;
          break;

        case 'decreasesizebtn':
            this.fontSize -= 10;
            this.stylethis['font-size'] = `${this.fontSize}px`;
            break;
        default:
          this.stylethis['color'] = `${this.item}`
          break;
      }
    }
  }
}
