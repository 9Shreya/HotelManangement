import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NovotelComponent } from './novotel/novotel.component';
import { AppComponent } from './app.component';
import { MarriottComponent } from './marriott/marriott.component';
import { PrestigeComponent } from './prestige/prestige.component';
import { KarnatakaComponent } from './karnataka/karnataka.component';
import { FormsModule } from '@angular/forms';
import { MadhyaComponent } from './madhya/madhya.component';
import { JehanComponent } from './jehan/jehan.component';
import { TajComponent } from './taj/taj.component';
import { KiranComponent } from './kiran/kiran.component';
import { UttarComponent } from './uttar/uttar.component';
import { UttrakhandComponent } from './uttrakhand/uttrakhand.component';
import { RishikeshComponent } from './rishikesh/rishikesh.component';
import { SayfertComponent } from './sayfert/sayfert.component';
import { RoseComponent } from './rose/rose.component';
import { AssamComponent } from './assam/assam.component';
import { LaComponent } from './la/la.component';
import { PuduComponent } from './pudu/pudu.component';
import { GrandComponent } from './grand/grand.component';
import { KeralaComponent } from './kerala/kerala.component';
import { RadissonComponent } from './radisson/radisson.component';
import { MaharastraComponent } from './maharastra/maharastra.component';
import { HimachalComponent } from './himachal/himachal.component';
import { KashmirComponent } from './kashmir/kashmir.component';

const routes: Routes = [
  {
    path: '',
    component: UttarComponent,
  },
  {
    path: 'admin',
    children: [
      {
        path: '',
        component: KarnatakaComponent,
      },
      {
        path: 'admin-signup',
        children: [
          {
            path: '',
            component: PuduComponent,
          },
          {
            path: 'Edit',
            component: LaComponent,
          },
          {
            path: 'coustomers',
            component: JehanComponent,
          },
        ],
      },
    ],
  },
  {
    path: 'sginUp',
    children: [
      {
        path: '',
        component: MadhyaComponent,
      },
    ],
  },
  {
    path: 'karnataka',
    children: [
      {
        path: '',
        component: UttarComponent,
      },
      {
        path: 'marriot',
        component: MarriottComponent,
      },
    ],
  },
  //routing of madhya pradesh
  {
    path: 'madhya-pradesh',
    children: [
      {
        path: '',
        component: UttarComponent,
      },
      {
        path: 'taj',
        component: TajComponent,
      },
    ],
  },
  //routing for uttrakhanad
  {
    path: 'utrakhand',
    children: [
      {
        path: '',
        component: UttarComponent,
      },
      {
        path: 'prestige',
        component: PrestigeComponent,
      },
    ],
  },
  //routing of  kashmir
  {
    path: 'kashmir',
    children: [
      {
        path: '',
        component: UttarComponent,
      },

      {
        path: 'usha-kiran',
        component: KiranComponent,
      },
    ],
  },
  //routing of himacha pradesh
  {
    path: 'himachal-pradesh',
    children: [
      {
        path: '',
        component: UttarComponent,
      },
      {
        path: 'novotel',
        component: NovotelComponent,
      },
    ],
  },
  //routing of maharastra
  {
    path: 'maharastra',
    children: [
      {
        path: '',
        component: UttarComponent,
      },
      {
        path: 'radisson-mumbai',
        component: RadissonComponent,
      },
    ],
  },
  //routing of kerala
  {
    path: 'kerala',
    children: [
      {
        path: '',
        component: UttarComponent,
      },

      {
        path: 'grand-hyatt',
        component: GrandComponent,
      },
    ],
  },

  //routing of assam
  {
    path: 'assam',
    children: [
      {
        path: '',
        component: UttarComponent,
      },
      {
        path: 'rose-view',
        component: RoseComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes), FormsModule],
  exports: [RouterModule],
})
export class AppRoutingModule {}
