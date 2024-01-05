

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Routes } from '@angular/router';

@Component({
  selector: 'app-winner',
  templateUrl: './winner.component.html',
  styleUrls: ['./winner.component.scss']
})
export class WinnerComponent implements OnInit {

  constructor(private activatedRoute:ActivatedRoute,private routes:Router) { }
winner:any;
goBack(){
this.routes.navigate(['/']);
}
  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(params=>{
      this.winner=params.get('param');
    })
  }

}
