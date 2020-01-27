import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SamenstellenComponent } from './pages/artikelen/samenstellen/samenstellen.component';
import { NewComponent as NewOrder } from './pages/orders/new/new.component';

const routes: Routes = [
  {
    path:'artikelen/samenstellen',
    component:SamenstellenComponent
  },{
    path:'orders/new',
    component: NewOrder
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
