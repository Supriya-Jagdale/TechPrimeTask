import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ChartsModule } from 'ng2-charts';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { LoginComponent } from './login/login.component';
import { CustomSlicePipe } from './custom-slice.pipe';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    PagenotfoundComponent,
    LoginComponent,
    CustomSlicePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
