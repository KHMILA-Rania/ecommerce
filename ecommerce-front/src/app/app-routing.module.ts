import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientProfileComponent } from './components/client-profile/client-profile.component';

const routes: Routes = [
  {path:'profile',component: ClientProfileComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
