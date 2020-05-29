import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

const matcomp = [MatButtonModule];

@NgModule({
  imports: [matcomp],
  exports: [matcomp],
})
export class MaterialModule {}
