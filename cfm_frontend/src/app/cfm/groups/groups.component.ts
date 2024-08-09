import { Component, OnInit } from '@angular/core';
import { ListHeaderComponent } from "../shared/list-header/list-header.component";
import { CfmService } from '../cfm.service';
import { Group } from '../cfm.model';

@Component({
  selector: 'app-groups',
  standalone: true,
  imports: [ListHeaderComponent],
  templateUrl: './groups.component.html',
  styleUrl: './groups.component.css'
})
export class GroupsComponent implements OnInit {

  groups: Group[] = [];

  constructor(private cfmService: CfmService){}
    ngOnInit(){
      this.cfmService.getGroupList().subscribe(
        (resData :Group[]) => {
          this.groups = resData
        }
      )
    }
}
