import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {

  public percentageAllocation: object = {
    'dad': 6.00,
    'saving': 10.00,
    'expenses': 34.00,
    'debt': 17.50,
    'fun': 12.50,
    'kill debt': 10.00,
    'shopping': 16.00
  }

  constructor() {}

  ngOnInit(): void {}
}
