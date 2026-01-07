import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home';
import { PricingComponent } from './pages/pricing/pricing';
import { AboutComponent } from './pages/about/about';
import { AccessibilityComponent } from './pages/accessibility/accessibility';
import { LicenseComponent } from './pages/license/license';
import { PrivacyComponent } from './pages/privacy/privacy';
import { ContactComponent } from './pages/contact/contact';
import { ImprintComponent } from './pages/imprint/imprint';
import {CopyrightComponent} from './pages/copyright/copyright';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'pricing', component: PricingComponent },
  { path: 'about', component: AboutComponent },
  { path: 'accessibility', component: AccessibilityComponent },
  { path: 'license', component: LicenseComponent },
  { path: 'privacy', component: PrivacyComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'imprint', component: ImprintComponent },
  {path: 'copyright', component: CopyrightComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
