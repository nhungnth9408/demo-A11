import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-organisation',
  templateUrl: './organisation.component.html',
  styleUrls: ['./organisation.component.css']
})
export class OrganisationComponent implements OnInit {
  @Input() public data: any;
  @Input() public isSelectAll: boolean;
  constructor() { }

  ngOnInit(): void {
  }
  public getOrg(): any {
    return this.data;
  }
  public onOrgChecked(e, org): void {
    e.stopPropagation();
  }
}
