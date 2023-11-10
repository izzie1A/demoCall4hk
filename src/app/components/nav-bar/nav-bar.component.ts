import { Component } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {
  title: string = "Appletwo";
  navIcon = "https://firebasestorage.googleapis.com/v0/b/camera-af868.appspot.com/o/call4hkFolder%2Ficon_fdnol_blk.png?alt=media&token=8d7b444a-abbd-4ed4-a652-5e6654e23aab&_gl=1*12kp49c*_ga*MTc4MDIzNzU1Ni4xNjk1NjIwMTg0*_ga_CW55HF8NVT*MTY5ODU1OTk2My41MC4xLjE2OTg1NjAwNTIuMzIuMC4w";
  
  navbarGidContainer: any = [];
  navExpanded = false;
  navHeight = '0px';
  itemArray:navItem [] = [];
  constructor(){
    this.itemArray.push(new navItem('Home','home','home'));
    this.itemArray.push(new navItem('Campain','campain','campainList'));
    this.itemArray.push(new navItem('Event','even','eventList'));
    this.itemArray.push(new navItem('AdminControl','even','pageControl'));
  }
  expanNavbar(inputDiv: any,triggerArea:any) {
    inputDiv.style.height = this.navExpanded ? '0px' : 'auto';
    // triggerArea.style.height = this.navExpanded ? '0vh' : '100vh';
    inputDiv.style.opacity  = this.navExpanded ? '0' : '1';
    this.navExpanded = this.navExpanded ? false : true;
  }

  navBarClick(inputDiv: any) {
    inputDiv.classList.toggle("change");
  }

}


export class navItem {
  displayName:string;
  iconName:string;
  url:string;
  constructor(displayName:string,iconName:string,url:string){
    this.displayName = displayName;
    this.iconName = iconName;
    this.url = url;
  }
}