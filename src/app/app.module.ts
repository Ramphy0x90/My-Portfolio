import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HomeComponent} from './container/home/home.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NavMenuComponent} from './component/nav-menu/nav-menu.component';
import {SplitPipe} from './pipes/split.pipe';
import {StripPipe} from './pipes/strip.pipe';
import {ScrollToModule} from '@nicky-lenaers/ngx-scroll-to';
import {SkillsComponent} from './component/skills/skills.component';
import {WorkExperienceComponent} from './component/work-experience/work-experience.component';
import {AboutMeComponent} from './component/about-me/about-me.component';
import {ProjectsComponent} from './component/projects/projects.component';
import {ContactMeComponent} from './component/contact-me/contact-me.component';
import {NgParticlesModule} from 'ng-particles';
import {ParticlesComponent} from './component/particles/particles.component';
import {CardComponent} from './component/card/card.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavMenuComponent,
    SplitPipe,
    StripPipe,
    SkillsComponent,
    WorkExperienceComponent,
    AboutMeComponent,
    ProjectsComponent,
    ContactMeComponent,
    ParticlesComponent,
    CardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgParticlesModule,
    ScrollToModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
