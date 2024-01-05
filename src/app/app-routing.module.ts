import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DiceComponent } from './dice/dice.component';
import { HeaderComponent } from './header/header.component';
import { WinnerComponent } from './winner/winner.component';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' }, // Default route redirects to the home component
  { path: 'home', component: HomeComponent },
  { path: 'dice', component: DiceComponent },
  { path: 'header', component: HeaderComponent },
  { path: 'winner', component: WinnerComponent },
  // Add more routes for other components as needed
  // { path: 'other-route', component: OtherComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
