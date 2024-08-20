import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { OurHumblePricingComponent } from './our-humble-pricing/our-humble-pricing.component';
import { FaqComponent } from './faq/faq.component';
import { FeaturesComponent } from './features/features.component';
import { FeatureCardComponent } from '../../shared/components/feature-card/feature-card.component';
import { LazyLoadComponentDirective } from '../../shared/directives/lazy-load-component.directive';
import { ChooseYourOwnTemplateComponent } from './choose-your-own-template/choose-your-own-template.component';
import { BannerComponent } from './banner/banner.component';
import { BuilderProcessComponent } from './builder-process/builder-process.component';
import { MostPowerfulBusinessAutomationSystemComponent } from './most-powerful-business-automation-system/most-powerful-business-automation-system.component';
import { ToolsSectionComponent } from './tools-section/tools-section.component';
import { BusinessSectionComponent } from './business-section/business-section.component';
import { SuccessStoryComponent } from './success-story/success-story.component';
import { SingleFaqComponent } from '../../shared/components/single-faq/single-faq.component';

@NgModule({
  declarations: [
    HomeComponent,
    OurHumblePricingComponent,
    FaqComponent,
    FeaturesComponent,
    BannerComponent,

    BuilderProcessComponent,
    MostPowerfulBusinessAutomationSystemComponent,
    ToolsSectionComponent,
    BusinessSectionComponent,
    SuccessStoryComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    FeatureCardComponent,
    LazyLoadComponentDirective,
    ChooseYourOwnTemplateComponent,
    SingleFaqComponent
  ],
})
export class HomeModule {}
