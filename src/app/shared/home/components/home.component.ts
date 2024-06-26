import { Component } from '@angular/core';
import { SharedService } from '../../shared.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  constructor(private sharedService:SharedService){
  }

  sidebarState:boolean=true;
  ngOnInit(){
    this.sharedService.sidebarState$.subscribe(res=>this.sidebarState=res);
  }
 

}
