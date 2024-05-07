import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Sub1PageRoutingModule } from './sub1-routing.module';

import { Sub1Page } from './sub1.page';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, Sub1PageRoutingModule],
  declarations: [Sub1Page],
})
export class Sub1PageModule {}
