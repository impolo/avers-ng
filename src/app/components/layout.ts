import {Component} from '@angular/core';


@Component({
  selector: 'av-layout',
  template: `
<div class="main-container">
 
    <header class="header header-6">
      <div class="branding">
         <span class="title">Аверс</span>
      </div>
    </header> 
    


    <div class="content-container">
        <div class="content-area">
            <ng-content></ng-content>
        </div>   
  
    </div>
    

    
</div>
  `,
  styles: [`

  `]
})
export class LayoutComponent {
}
