import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assam',
  templateUrl: './assam.component.html',
  styleUrls: ['./assam.component.css'],
})
export class AssamComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  openNav() {
    document.getElementById('mySidenav').style.width = '250px';
  }

  closeNav() {
    document.getElementById('mySidenav').style.width = '0';
  }
}
