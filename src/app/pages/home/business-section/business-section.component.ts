import { Component } from '@angular/core';

@Component({
  selector: 'app-business-section',
  templateUrl: './business-section.component.html',
  styleUrl: './business-section.component.scss'
})
export class BusinessSectionComponent {
   count01 : number = 0;


  // counterstop:any=setInterval(()=>{
  //   this.count01++;

  //   if(this.count01 === 680){
  //     clearInterval(this.counterstop);
  //   }
  // },50)

}
