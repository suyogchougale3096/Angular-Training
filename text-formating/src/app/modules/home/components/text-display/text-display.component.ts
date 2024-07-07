import { Component, OnInit, Input, OnChanges, SimpleChange, SimpleChanges,Renderer2, ElementRef } from '@angular/core';
import { SharedService } from '../../services/shared.service';

@Component({
  selector: 'app-text-display',
  templateUrl: './text-display.component.html',
  styleUrls: ['./text-display.component.css']
})
export class TextDisplayComponent implements OnInit, OnChanges {

  name : string = '';
  result : string = '';

  fontSize = 10;
  stylethis: { [key: string]: string } = { 'font-size': `${this.fontSize}px` };

  constructor(private _sharedService : SharedService,private renderer: Renderer2, private el: ElementRef) { }

  ngOnInit(): void {
  }

  display(){
    this._sharedService.setDataChange(this.name);
  }

  @Input() item : any = 'none';

  ngOnChanges(changes: SimpleChanges): void {

    console.log("3")
    if(changes['item']){
      console.log("OnChange detect")
      console.log(changes['item'].currentValue)
      const btnValue = changes['item'].currentValue;
      
      switch(btnValue){
        case 'clearallbtn':
          this.name = '';
          this.result = '';
          console.log(this.name)
          break;
        case 'whitespacebtn':
          this.result = this.name.replace(/\s+/g, '')
          break;
        case 'reverseallbtn':
          
          this.result = this.name.split('').reverse().join('');
          break;
        case 'rspecialcharbtn':
          
          this.result = this.name.replace(/[^a-zA-Z0-9 ]/g, '');
          break;
        case 'removestylebtn':
          
          // this.name = "remove Style"
          const element = this.el.nativeElement.querySelector('.remove-style');
          this.renderer.removeAttribute(element, 'style');
          break;
        case 'capitalword':
          
          this.result = this.name.toUpperCase();
          break;
        case 'boldbtn':
            this.stylethis['font-weight'] = 'bold';
            break;
        case 'italicbtn':
            this.stylethis['font-style'] = 'italic';
            break;
        case 'underlinebtn':
            this.stylethis['text-decoration'] = 'underline';
            
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
