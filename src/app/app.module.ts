import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';

import { AppComponent } from './app.component';
import { HttpClientModule} from '@angular/common/http';
import { HttpModule } from '@angular/http';


@NgModule({
  imports: [
    FormsModule,
    ReactiveFormsModule, 
    HttpClientModule,
    HttpModule
  ],
  declarations: [
    AppComponent
  ],
  providers: [HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
