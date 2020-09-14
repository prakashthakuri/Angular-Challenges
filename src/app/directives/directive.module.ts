import { DIRECTIVE_ROUTES } from './directive.routes';
import { RouterModule } from '@angular/router';
import { DirectiveDocumentationComponent } from './directive-documentation/directive-documentation.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DebounceClickDirective } from './debounce-click.directive';
import { RippleDirectiveDirective } from './ripple-directive.directive';



@NgModule({
  declarations: [DirectiveDocumentationComponent, DebounceClickDirective, RippleDirectiveDirective],
  imports: [
    CommonModule,
    RouterModule.forChild(DIRECTIVE_ROUTES),
  ]
})
export class DirectiveModule { }
