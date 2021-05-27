import { AfterViewInit, Component, DoCheck, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-life-cicle-teste',
  templateUrl: './life-cicle-teste.component.html',
  styleUrls: ['./life-cicle-teste.component.css']
})
export class LifeCicleTesteComponent implements OnInit, 
                                                OnChanges,
                                                OnDestroy,
                                                DoCheck,
                                                AfterViewInit {
@Input()
title: any;

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    console.log("on changes");
    console.log(changes);
  }
  ngOnDestroy(): void {
    console.log("on destroy");
  }
  ngDoCheck(): void {
    console.log("do check");
    console.log(this.title);
  }
  ngAfterViewInit(): void {
    console.log("ng after view init");
  }
  ngOnInit(): void {
    console.log("on init");
  }

}
