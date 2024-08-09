import { Component } from '@angular/core';
import { ListHeaderComponent } from "../shared/list-header/list-header.component";
import { CfmService } from '../cfm.service';
import { Scheme } from '../cfm.model';

@Component({
  selector: 'app-schemes',
  standalone: true,
  imports: [ListHeaderComponent],
  templateUrl: './schemes.component.html',
  styleUrl: './schemes.component.css'
})
export class SchemesComponent {
    schemes: Scheme[] = [];

  constructor(private cfmService: CfmService){}
  ngOnInit(){
    this.cfmService.getSchemeList().subscribe(
      (resData :Scheme[]) => {
        this.schemes = resData
        console.log(this.schemes)
      }
    )
  }
}
