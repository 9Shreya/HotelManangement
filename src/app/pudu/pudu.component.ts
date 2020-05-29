import { user } from './user';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pudu',
  templateUrl: './pudu.component.html',
  styleUrls: ['./pudu.component.css'],
})
export class PuduComponent implements OnInit {
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

  onDelete(obj) {
    this.http.delete(this.url + '/' + obj.id).subscribe((res) => {
      this.index = this.data.indexOf(obj);
      this.data.splice(this.index, 1);
    });
  }

  onCreat(obj) {
    this.http.post(this.url, obj.value).subscribe((res) => {
      this.data.push(obj.value);
      obj.reset();
    });
  }

  onUpdate(obj) {
    this.name = obj.name;
    this.phone = obj.phone;
    this.id = obj.id;
    this.email = obj.email;
    this.pass = obj.pass;
    this.cpass = obj.cpass;
    this.index = this.data.indexOf(obj);
  }

  onModify(obj) {
    this.http.put(this.url + '/' + this.id, obj.value).subscribe((res) => {
      this.data[this.index] = obj.value;
    });
  }
  ngOnInit(): void {}
}
