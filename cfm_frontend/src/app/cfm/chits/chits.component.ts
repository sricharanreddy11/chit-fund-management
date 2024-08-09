import { Component } from '@angular/core';
import { ListHeaderComponent } from "../shared/list-header/list-header.component";
import { CfmService } from '../cfm.service';
import { Chit } from '../cfm.model';

@Component({
  selector: 'app-chits',
  standalone: true,
  imports: [ListHeaderComponent],
  templateUrl: './chits.component.html',
  styleUrl: './chits.component.css'
})
export class ChitsComponent {
  chits: Chit[] = [];

  constructor(private cfmService: CfmService){}
    ngOnInit(){
      this.cfmService.getChitList().subscribe(
        (resData :Chit[]) => {
          console.log(resData)
          this.chits = resData
        }
      )
    }
}
