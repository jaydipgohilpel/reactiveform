import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllDataComponent } from './all-data/all-data.component';
import { RegistrationComponent } from './registration/registration.component'
const routes: Routes = [
  {
    path: 'all-data',
    component: AllDataComponent
  },
  {
    path:'registration',
    component:RegistrationComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
