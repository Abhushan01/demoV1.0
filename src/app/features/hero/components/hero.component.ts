import { Component} from '@angular/core';
import { SharedService } from '../../../shared/shared.service';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent {
constructor(private sharedService:SharedService){}
ngOnInit(): void {
  this.sharedService.checkSidebarState(false);
}
}
