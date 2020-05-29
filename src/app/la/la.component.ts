import { user } from './../pudu/user';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-la',
  templateUrl: './la.component.html',
  styleUrls: ['./la.component.css'],
})
export class LaComponent implements OnInit {
  ngOnInit(): void {}
  name: string;
  phone: number;
  email;
  pass;
  cpass;
  id;
  index;
  url = 'http://localhost:3000/details';
  data;
  constructor(private http: HttpClient) {
    this.http.get(this.url).subscribe((res) => {
      this.data = res;
    });
  }
  msg = new user(' ', ' ', ' ', ' ', ' ', '');

  onUpdate(obj) {
    this.msg.name = obj.name;
    this.msg.phone = obj.phone;
    this.msg.email = obj.email;
    this.msg.pass = obj.pass;
    this.msg.id = obj.id;
    this.index = this.data.indexOf(obj);
    console.log('hello');
  }

  onModify(obj) {
    this.http.put(this.url + '/' + this.msg.id, obj.value).subscribe(() => {
      console.log('hi');
      this.data[this.index] = obj.value;
      obj.reset();
    });
  }
}
