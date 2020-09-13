// import { AppComponent } from './app.component';
// import { DirectiveDocumentationComponent } from './directives/directive-documentation/directive-documentation.component';
import { ServiceDocumentationComponent } from './services/service-documentation/service-documentation.component';
// import { PipeDocumentationComponent } from './pipes/pipe-documentation/pipe-documentation.component';
import { ComponentDocumentationComponent } from './components/component-documentation/component-documentation.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [

  // {path: '', component: AppComponent}, // this was the idea for home page


  {path: '', component: ComponentDocumentationComponent},
  {path: 'pipes', loadChildren: () => import('./pipes/pipes.module').then((m) => m.PipesModule) },
  {path: 'services', component: ServiceDocumentationComponent},
  {path: 'directives', loadChildren: () => import('./directives/directive.module').then((m) => m.DirectiveModule)}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
