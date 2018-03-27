import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';



import { AppComponent } from './app.component';
import { SkillComponent } from "app/address.component";


@NgModule({
  declarations: [
      AppComponent,
      SkillComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
      HttpModule, ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
