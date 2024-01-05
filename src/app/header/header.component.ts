
import { Component, ElementRef, Input, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnChanges {
@Input() playerFlag!:number;
@ViewChild('player1',{static:true}) player1!:ElementRef
@ViewChild('player2',{static:true}) player2!:ElementRef
  constructor() { }

  ngOnChanges(changes:SimpleChanges){
    if(this.playerFlag==2){
    this.player1.nativeElement.style.color='green';
    this.player2.nativeElement.style.color='red';

    }else if(this.playerFlag==1){
      this.player2.nativeElement.style.color='green'
      this.player1.nativeElement.style.color='red';
    }
  }

}
