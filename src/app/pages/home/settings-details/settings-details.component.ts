import { Component } from '@angular/core';

@Component({
  selector: 'app-settings-details',
  standalone: true,
  imports: [],
  templateUrl: './settings-details.component.html',
  styleUrl: './settings-details.component.scss'
})
export class SettingsDetailsComponent {
  tabs: string[] = ['Team', 'Security', 'Referrals', 'Feature Preview'];
  selectedTab: number = 0;

  selectTab(index: number): void {
    this.selectedTab = index;
  }
}
