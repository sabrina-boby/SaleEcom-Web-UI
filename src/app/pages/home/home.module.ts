import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { OurHumblePricingComponent } from './our-humble-pricing/our-humble-pricing.component';
import { FaqComponent } from './faq/faq.component';
import { FeaturesComponent } from './features/features.component';
// import { TopSectionComponent } from './top-section/top-section.component';
import { FeatureCardComponent } from '../../shared/components/feature-card/feature-card.component';
// import { PriceCardComponent } from '../../shared/components/price-card/price-card.component';
import { LazyLoadComponentDirective } from '../../shared/directives/lazy-load-component.directive';
import { ShowcaseComponent } from './showcase/showcase.component';
import { LearnSomethingComponent } from './learn-something/learn-something.component';
import { LearnSomethingCardComponent } from '../../shared/components/learn-something-card/learn-something-card.component';
import { SuccessStoriesComponent } from './success-stories/success-stories.component';
import { OurAchievementComponent } from './our-achievement/our-achievement.component';
import { OurAlumnaComponent } from './our-alumna/our-alumna.component';
import { OurCoursesComponent } from './our-courses/our-courses.component';
import { InspiringFuturesComponent } from './inspiring-futures/inspiring-futures.component';
import { CourseFeaturesComponent } from './course-features/course-features.component';
import { RegistrationBoxComponent } from '../../shared/components/registration-box/registration-box.component';
import { SingleCourseComponent } from '../../shared/components/single-course/single-course.component';
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
    // TopSectionComponent,
    ShowcaseComponent,
    LearnSomethingComponent,
    OurAchievementComponent,
    OurCoursesComponent,
    InspiringFuturesComponent,
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
    // PriceCardComponent,
    FeatureCardComponent,
    LazyLoadComponentDirective,
    LearnSomethingCardComponent,
    RegistrationBoxComponent,
    OurAlumnaComponent,
    SuccessStoriesComponent,
    CourseFeaturesComponent,
    SingleCourseComponent,
    ChooseYourOwnTemplateComponent,
    SingleFaqComponent
  ],
})
export class HomeModule {}
