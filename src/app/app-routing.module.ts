import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { PricingComponent } from './components/pricing/pricing.component';
import { HomeComponent } from './components/home/home.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

const routes: Routes = [
	{ path: '', pathMatch: 'full', redirectTo: 'home'},
	{ path: 'home', component: HomeComponent},
	{ path: 'about', component: AboutComponent},
	{ path: 'pricing', component: PricingComponent},
	{ path: '**', component: PageNotFoundComponent}
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
