import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'projectAngular';
  openNav() {
    document.getElementById('mySidenav').style.width = '300px';
    document.querySelector('main').style.marginRight = '250px';
    document.querySelector('footer').style.marginRight = '250px';
  }

  closeNav() {
    document.getElementById('mySidenav').style.width = '0';
  }
  onclik() {
    document.querySelector('#bton').addEventListener('click', () => {
      // window.scrollTo(0,0)
      var mybutton = document.getElementById('bton');
      window.onscroll = function () {
        scrollFunction();
      };

      function scrollFunction() {
        if (
          document.body.scrollTop > 20 ||
          document.documentElement.scrollTop > 20
        ) {
          mybutton.style.display = 'block';
        } else {
          mybutton.style.display = 'none';
        }
      }
      //another way
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth',
      });
    });
  }
}
