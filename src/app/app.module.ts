import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './components/about/about.component';
import { PricingComponent } from './components/pricing/pricing.component';
import { HomeComponent } from './components/home/home.component';
import { FeaturesComponent } from './components/home/features/features.component';
import { QrCodeComponent } from './components/home/qrcode/qrcode.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

@NgModule({
	declarations: [
		AppComponent,
		AboutComponent,
		PricingComponent,
		HomeComponent,
		FeaturesComponent,
		QrCodeComponent,
		HeaderComponent,
		FooterComponent,
		PageNotFoundComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
