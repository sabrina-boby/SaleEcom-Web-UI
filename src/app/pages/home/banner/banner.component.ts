import { Component } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrl: './banner.component.scss'
})
export class BannerComponent {

  tabs: string[] = ['Team', 'Security', 'Referrals', 'Feature Preview'];
  selectedTab: number = 0;

  selectTab(index: number): void {
    this.selectedTab = index;
  }
}
