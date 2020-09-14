import { DIRECTIVE_ROUTES } from './directive.routes';
import { RouterModule } from '@angular/router';
import { DirectiveDocumentationComponent } from './directive-documentation/directive-documentation.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DebounceClickDirective } from './debounce-click.directive';



@NgModule({
  declarations: [DirectiveDocumentationComponent, DebounceClickDirective],
  imports: [
    CommonModule,
    RouterModule.forChild(DIRECTIVE_ROUTES),
  ]
})
export class DirectiveModule { }
