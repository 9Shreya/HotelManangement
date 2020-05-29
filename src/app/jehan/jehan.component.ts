import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-jehan',
  templateUrl: './jehan.component.html',
  styleUrls: ['./jehan.component.css'],
})
export class JehanComponent implements OnInit {
  ngOnInit(): void {}
  name: string;
  phone: number;
  email;
  pass;
  cpass;
  id;
  index;
  url = 'http://localhost:3000/coustomer';
  data;
  constructor(private http: HttpClient) {
    this.http.get(this.url).subscribe((res) => {
      this.data = res;
    });
  }

  onDelete(obj) {
    this.http.delete(this.url + '/' + obj.id).subscribe((res) => {
      this.index = this.data.indexOf(obj);
      this.data.splice(this.index, 1);
    });
  }
}
