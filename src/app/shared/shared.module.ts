import { NgModule } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import {MenubarModule} from 'primeng/menubar';

import {MegaMenuModule} from 'primeng/megamenu';
import { CommonModule } from '@angular/common';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';


@NgModule({
  declarations: [
    NavigationBarComponent
  ],
  imports: [
    ButtonModule,
    MenubarModule,
    MegaMenuModule,
    CommonModule
  ],
  exports: [
    NavigationBarComponent
  ]
})
export class SharedModule { }
