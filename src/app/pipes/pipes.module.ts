import { RouterModule } from '@angular/router';
import { PipeDocumentationComponent } from './pipe-documentation/pipe-documentation.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PIPES_ROUTES } from './pipe.routes';
import { TruncatePipe } from './truncate.pipe';

@NgModule({
  declarations: [
          // PipeDocumentationComponent,
        //  TruncatePipe
      ],
  imports: [CommonModule, RouterModule.forChild(PIPES_ROUTES)],
})
export class PipesModule {}
