import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-karnataka',
  templateUrl: './karnataka.component.html',
  styleUrls: ['./karnataka.component.css'],
})
export class KarnatakaComponent implements OnInit {
  constructor() {}
  password;
  ngOnInit(): void {}
  key = true;
  name;

  validate(obj) {
    if (obj.name == 'admin' && obj.password == 'admin') {
      this.key = false;
    }
  }
}
