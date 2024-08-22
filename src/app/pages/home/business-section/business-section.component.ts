
import { ViewportScroller } from '@angular/common';
import {   Component, ElementRef, OnDestroy, OnInit, Renderer2 } from '@angular/core';
import { Subscription, interval, take, tap } from 'rxjs';

import { HostListener, } from '@angular/core';


@Component({
  selector: 'app-business-section',
  templateUrl: './business-section.component.html',
  styleUrl: './business-section.component.scss'
})


  
  

export class BusinessSectionComponent implements OnInit{
  
  count01: number = 500;
  count02: number = 0;
  count03: number = 0;

  isVisible: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  @HostListener('window:scroll', ['$event'])
  onWindowScroll(): void {
    const element = document.getElementById('bs');
    if (element) {
      const rect = element.getBoundingClientRect();
      const topInView = rect.top >= 0 && rect.top <= window.innerHeight;

      if (topInView && !this.isVisible) {
        this.isVisible = true;
        this.startCounter01(680);
        this.startCounter02(20);
        this.startCounter03(50);

      }
    }
  }


  startCounter01(stopNumber:number): void {
    const interval = setInterval(() => {
      if (this.count01 < stopNumber) {
        this.count01++;
      } else {
        clearInterval(interval);
      }
    }, 20); 
  }

  startCounter02(stopNumber:number): void {
    const interval = setInterval(() => {
      if (this.count02 < stopNumber) {
        this.count02++;
      } else {
        clearInterval(interval);
      }
    }, 80); 
  }

  startCounter03(stopNumber:number): void {
    const interval = setInterval(() => {
      if (this.count03 < stopNumber) {
        this.count03++;
      } else {
        clearInterval(interval);
      }
    }, 60); 
  }


}
