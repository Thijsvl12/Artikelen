import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'; 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { SamenstellenComponent } from './pages/artikelen/samenstellen/samenstellen.component';
import { NewComponent } from './pages/orders/new/new.component';
import { DataService } from './services/data.service';


import {TableModule} from 'primeng/table';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SamenstellenComponent,
    NewComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    TableModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
