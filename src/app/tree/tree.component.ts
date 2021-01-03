import {Component, Input, OnInit} from '@angular/core';
import { TreeService } from '../tree.service';
@Component({
  selector: 'app-tree',
  templateUrl: './tree.component.html',
  styleUrls: ['./tree.component.css']
})
export class TreeComponent implements OnInit {
  data: any;
  allselection: string;
  isSelectAll: boolean;
  constructor(private treeService: TreeService) {
    this.allselection = 'Select all';
    this.isSelectAll = true;
    this.getOrgs();
  }
  ngOnInit(): void {
  }
  getOrgs(): void {
    this.treeService.getOrgs().subscribe(organizations => this.data = organizations);
  }
  public onCheckAll(): void {
  }
}
