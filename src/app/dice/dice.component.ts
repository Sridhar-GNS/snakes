
import { Component, Input, OnChanges, OnInit, Output, SimpleChanges,EventEmitter, ViewChild, ElementRef } from '@angular/core';


@Component({
  selector: 'app-dice',
  templateUrl: './dice.component.html',
  styleUrls: ['./dice.component.scss']
})
export class DiceComponent implements OnChanges {

  @Input() passRandomNumber!:number;
@Input() initialText!:string;
@ViewChild('dice',{static:false}) dice!:ElementRef;
  
  dotCount:number=0;// randomInteger from parent home>>@input in child
  dotArray:number[]=[];
  constructor() { }

  arrayMaker(){
    for(let i=0;i<this.dotCount;i++){
      this.dotArray.push(0);
    }
    if(this.dotArray.length>0){
    this.initialText='';
 this.diceAnimator();
    }

  }
  diceAnimator(){
    this.dice.nativeElement.classList.add('diceAnimationClass');
    setTimeout(() => {
      this.dice.nativeElement.classList.remove('diceAnimationClass');
    }, 150);

  }

  //calling simple changes on child dice
  ngOnChanges(changes:SimpleChanges){
    
    if(changes['passRandomNumber']){

      this.dotCount=this.passRandomNumber;
      this.dotArray=[];
      this.arrayMaker();
    }
  }

}