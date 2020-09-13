import { DirectiveDocumentationComponent } from './directives/directive-documentation/directive-documentation.component';
import { ServiceDocumentationComponent } from './services/service-documentation/service-documentation.component';
import { PipeDocumentationComponent } from './pipes/pipe-documentation/pipe-documentation.component';
import { ComponentDocumentationComponent } from './components/component-documentation/component-documentation.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [

  {path: '', component: ComponentDocumentationComponent},
  {path: 'pipes', component: PipeDocumentationComponent},
  {path: 'services', component: ServiceDocumentationComponent},
  {path: 'directives', component: DirectiveDocumentationComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
