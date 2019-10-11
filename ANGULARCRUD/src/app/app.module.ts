import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms'
import { HttpModule } from '@angular/http'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { ToastrModule } from 'ngx-toastr';
import { TrainingComponent } from './trainings/training/training.component';
import { TrainingsComponent } from './trainings/trainings.component';
import { TrainingListComponent } from './trainings/training-list/training-list.component';

@NgModule({
  declarations: [
    AppComponent,
    TrainingComponent,
    TrainingsComponent,
    TrainingListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
