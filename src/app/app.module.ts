import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { FormsComponent } from './forms/forms.component';
import { ReactiveFormsModule } from '@angular/forms';

const route: Routes = [
  {
    path: 'form',
    component: FormsComponent
  },
];

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    FormsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(route),
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
