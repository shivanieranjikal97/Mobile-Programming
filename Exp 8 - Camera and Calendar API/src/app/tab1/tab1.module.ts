import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { LOCALE_ID, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab1Page } from './tab1.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';
import { NgCalendarModule  } from 'ionic2-calendar';
//import { CalModalPageModule } from '../pages/cal-modal/cal-modal.module';
import { registerLocaleData } from '@angular/common';
import localeDe from '@angular/common/locales/de';
//registerLocaleData(localeDe);

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    RouterModule.forChild([{ path: '', component: Tab1Page }]),
    NgCalendarModule,
   // CalModalPageModule
  ],
  declarations: [Tab1Page],
  // providers: [
  //   { provide: LOCALE_ID, useValue: 'de-DE' }
  // ]
})
export class Tab1PageModule {}
