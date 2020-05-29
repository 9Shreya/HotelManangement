import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-madhya',
  templateUrl: './madhya.component.html',
  styleUrls: ['./madhya.component.css'],
})
export class MadhyaComponent implements OnInit {
  ngOnInit(): void {}
  name: string;
  phonee: number;
  emaiil;
  pas;
  cpas;
  id;
  index;
  url = 'http://localhost:3000/coustomer';
  data;
  constructor(private http: HttpClient) {
    this.http.get(this.url).subscribe((res) => {
      this.data = res;
    });
  }

  onCreat(obj) {
    this.http.post(this.url, obj.value).subscribe((res) => {
      this.data.push(obj.value);
      obj.reset();
      document.getElementById('displ').innerHTML = '';
      document.getElementById('hi').style.display = 'block';
    });
  }
}
