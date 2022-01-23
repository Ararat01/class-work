import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { FormsComponent } from './forms/forms.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { PipesComponent } from './pipes/pipes.component';
import { TrimPipe } from './mypipes/trim.pipe';
import { MydatePipe } from './mypipes/mydate.pipe';
import { AsciiPipe } from './mypipes/ascii.pipe';
// import { RequestService } from './sevice/request.service';

const route: Routes = [
  {
    path: 'form',
    component: FormsComponent
  },
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'pipes',
    component: PipesComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    FormsComponent,
    HomeComponent,
    PipesComponent,
    TrimPipe,
    MydatePipe,
    AsciiPipe
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(route),
    ReactiveFormsModule,
    HttpClientModule
  ],


  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
