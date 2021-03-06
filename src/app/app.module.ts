import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { CardComponent } from './components/card/card.component';
import { AccordionComponent } from './components/accordion/accordion.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ProgressBarComponent } from './components/progress-bar/progress-bar.component';
import { StarRatingsComponent } from './components/star-ratings/star-ratings.component';
import { TopofpageComponent } from './components/topofpage/topofpage.component';
import { ComponentDocumentationComponent } from './components/component-documentation/component-documentation.component';
// import { PipeDocumentationComponent } from './pipes/pipe-documentation/pipe-documentation.component';
// import { ServiceDocumentationComponent } from './services/service-documentation/service-documentation.component';
import { LoaderComponent } from './components/loader/loader.component';
import { CreditcardinputComponent } from './components/creditcardinput/creditcardinput.component';
import { TwitterPostComponent } from './components/twitter-post/twitter-post.component';
import { ModalComponent } from './components/modal/modal.component';
import { QuoteComponent } from './components/quote/quote.component';
import { ToggleComponent } from './components/toggle/toggle.component';
import { FilterTermPipe } from './pipes/filter-term.pipe';
import { OtherDocumentationComponent } from './other/other-documentation/other-documentation.component';
// import { DirectiveDocumentationComponent } from './directives/directive-documentation/directive-documentation.component';

@NgModule({
  declarations: [AppComponent,
                ToolbarComponent,
                CardComponent,
                AccordionComponent,
                ProgressBarComponent,
                StarRatingsComponent,
                TopofpageComponent,
                ComponentDocumentationComponent,
                // PipeDocumentationComponent,
                // ServiceDocumentationComponent,
                LoaderComponent,
                CreditcardinputComponent,
                TwitterPostComponent,
                ModalComponent,
                QuoteComponent,
                ToggleComponent,
                OtherDocumentationComponent,
               // DirectiveDocumentationComponent,
              ],
  imports: [BrowserModule, AppRoutingModule, FontAwesomeModule,  RouterModule.forRoot([ ])],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
