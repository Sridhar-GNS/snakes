import {
  ChangeDetectorRef,
  Component,
  ElementRef,
  Input,
  OnInit,
  Output,
  ViewChild,
  EventEmitter,
} from '@angular/core';
import { DiceComponent } from '../dice/dice.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  @ViewChild('containerDiv', { static: false }) containerDiv!: ElementRef;
  @ViewChild('outerDiv', { static: false }) outerDiv!: ElementRef;
  @ViewChild('innerDiv1', { static: false }) innerDiv1!: ElementRef; //player1
  @ViewChild('innerDiv2', { static: false }) innerDiv2!: ElementRef; //player2
  constructor(private changeDetector: ChangeDetectorRef,private routes:Router) {}
  boardArray: number[] = []; //nxt 3 used to generate no.div in that order.
  temp: number[] = [];
  counter: number = 0;
  randomInteger: number = 0; //random number between 1 and 6 including both
  player1: number = 0;//current position of player1
  player2: number = 0;//current position of player2
  playerCounter: number = 0; //choses player1 or player2
  toDivId: number = 0; //to which div should the coin move
  firstTry1: boolean = false;
  firstTry2: boolean = false;
  DiceInitialText: string = 'Dice me';
  playerNumber!:number;
  paramValue!:string;


  //diceComp click=>randomIntegerGenerator=>playerSelector=>playersValueSetter=>handleInputValue; function flow
  playerSelector() {
    this.randomInteger == 6
      ? this.playerCounter = this.playerCounter
      : this.playerCounter++;
    this.randomInteger == 1 && this.playerCounter % 2 == 1
      ? (this.firstTry1 = true)
      : console.log('firstTry1 is false');
    this.randomInteger == 1 && this.playerCounter % 2 == 0
      ? (this.firstTry2 = true)
      : console.log('firsttry2 is false');
    try {
      this.playersValueSetter();
    } catch (error) {
      console.log(error);
    }
  }
  playerHeaderColorSetter(){
    if(this.playerCounter%2==0){
      this.playerNumber=2;// value that is passed to header comp child to change color

    }else{
      this.playerNumber=1// value that is passed to header comp child to change color

    }
  }
  playersValueSetter() {
    this.playerHeaderColorSetter();
    if(this.player1==100){
      this.paramValue="Player1";
      this.routes.navigate(['/winner',this.paramValue]);
     
      
    }else if(this.player2==100){
      this.paramValue="Player2";
      this.routes.navigate(['/winner',this.paramValue]);
    }
    if (this.playerCounter % 2 == 0 && this.firstTry2 == true) {
      this.player2 + this.randomInteger <= 100
        ? (this.player2 += this.randomInteger)
        : console.log('player2 score exceeds 100');
    } else if (this.playerCounter % 2 == 1 && this.firstTry1 == true) {
      this.player1 + this.randomInteger <= 100
        ? (this.player1 += this.randomInteger)
        : console.log('player1 score exceeds 100');
    }
    console.log('player1');
    console.log(this.player1);
    console.log('player2');
    console.log(this.player2);
    this.handleInputValue();
  }
  handleInputValue() {
    //logic for ladder climbing and snake swallowing
    if (this.playerCounter % 2 == 0) {
      if (this.player2 == 2) {
        this.player2 = 23;
      } else if (this.player2 == 6) {
        this.player2 = 45;
      } else if (this.player2 == 20) {
        this.player2 = 59;
      } else if (this.player2 == 52) {
        this.player2 = 72;
      } else if (this.player2 == 57) {
        this.player2 = 96;
      } else if (this.player2 == 71) {
        this.player2 = 92;
      } else if (this.player2 == 43) {
        this.player2 = 17;
      } else if (this.player2 == 56) {
        this.player2 = 8;
      } else if (this.player2 == 50) {
        this.player2 = 5;
      } else if (this.player2 == 73) {
        this.player2 = 15;
      } else if (this.player2 == 87) {
        this.player2 = 49;
      } else if (this.player2 == 84) {
        this.player2 = 58;
      } else if (this.player2 == 98) {
        this.player2 = 40;
      }
      this.toDivId = this.player2;
      const toDiv = this.containerDiv.nativeElement.querySelector(
        `#box${this.toDivId}`
      );
      toDiv.appendChild(this.innerDiv2.nativeElement);
    } else {

      if (this.player1 == 2) {
        this.player1 = 23;
      } else if (this.player1 == 6) {
        this.player1 = 45;
      } else if (this.player1 == 20) {
        this.player1 = 59;
      } else if (this.player1 == 52) {
        this.player1 = 72;
      } else if (this.player1 == 57) {
        this.player1 = 96;
      } else if (this.player1 == 71) {
        this.player1 = 92;
      } else if (this.player1 == 43) {
        this.player1 = 17;
      } else if (this.player1 == 56) {
        this.player1 = 8;
      } else if (this.player1 == 50) {
        this.player1 = 5;
      } else if (this.player1 == 73) {
        this.player1 = 15;
      } else if (this.player1 == 87) {
        this.player1 = 49;
      } else if (this.player1 == 84) {
        this.player1 = 58;
      } else if (this.player1 == 98) {
        this.player1 = 40;
      }


      this.toDivId = this.player1;
      const toDiv = this.containerDiv.nativeElement.querySelector(
        `#box${this.toDivId}`
      );
      toDiv.appendChild(this.innerDiv1.nativeElement);
    }
  }
 
  randomIntegerGenerator() {
    this.randomInteger = Math.floor(Math.random() * 6) + 1;
    console.log(this.randomInteger);
    this.changeDetector.detectChanges(); //using changedetector ref in parent comp home>>>dice
    this.playerSelector();
  }

  ngOnInit(): void {
    for (let i = 1; i <= 10; i++) {
      this.temp = [];
      for (let j = 1; j <= 10; j++) {
        this.temp.push(101 - (this.counter * 10 + j));
      }
      this.counter = this.counter + 1;
      if (this.counter % 2 == 0) {
        this.temp.reverse();
        this.boardArray = this.boardArray.concat(this.temp);
      } else {
        this.boardArray = this.boardArray.concat(this.temp);
      }
    }
    console.log(this.boardArray);
  }
}
