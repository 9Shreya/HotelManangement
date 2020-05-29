import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NovotelComponent } from './novotel/novotel.component';
import { MarriottComponent } from './marriott/marriott.component';
import { PrestigeComponent } from './prestige/prestige.component';
import { KarnatakaComponent } from './karnataka/karnataka.component';
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
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';

@NgModule({
  declarations: [
    AppComponent,
    NovotelComponent,
    MarriottComponent,
    PrestigeComponent,
    KarnatakaComponent,
    MadhyaComponent,
    JehanComponent,
    TajComponent,
    KiranComponent,
    UttarComponent,
    UttrakhandComponent,
    RishikeshComponent,
    SayfertComponent,
    RoseComponent,
    AssamComponent,
    LaComponent,
    PuduComponent,
    GrandComponent,
    KeralaComponent,
    RadissonComponent,
    MaharastraComponent,
    HimachalComponent,
    KashmirComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
