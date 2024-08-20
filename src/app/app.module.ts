
import { AppComponent } from './app.component';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import {provideAnimationsAsync} from '@angular/platform-browser/animations/async';
import { AppRoutingModule } from './app-routing.module';
import { provideImgixLoader } from '@angular/common';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { environment } from '../environments/environment';
import { FooterComponent } from './core/footer/footer.component';
import { HeaderModule } from './core/header/header.module';
import { NgModule } from '@angular/core';



@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HeaderModule,
    FooterComponent,
  ],
  providers: [
    provideClientHydration(),
    provideAnimationsAsync(),
    provideHttpClient(withFetch()),
    provideImgixLoader(environment.ftpPrefixPath),
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
