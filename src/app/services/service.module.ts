import { UserService } from './user.service';
import { SERVICE_ROUTES } from './service.routes';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import { ServiceDocumentationComponent } from './service-documentation/service-documentation.component';



@NgModule({
  declarations: [
    ServiceDocumentationComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule.forChild(SERVICE_ROUTES),
  ],
  providers: [UserService]
})
export class ServiceModule { }
