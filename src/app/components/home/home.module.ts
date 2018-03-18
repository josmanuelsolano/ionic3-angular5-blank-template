//modules
import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';

//components
import { HomePageComponent } from './home-page/home-page.component';
//services

@NgModule({
  imports: [
    IonicModule.forRoot(HomePageComponent)
  ],
  declarations: [
    HomePageComponent
  ],
  exports: [
    HomePageComponent
  ],
  entryComponents: [
    HomePageComponent
  ],
  providers: []
})
export class HomeModule { }
