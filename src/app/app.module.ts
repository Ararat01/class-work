import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { PipesComponent } from './pipes/pipes.component';
import { TrimPipe } from './mypipes/trim.pipe';
import { MydatePipe } from './mypipes/mydate.pipe';
import { AsciiPipe } from './mypipes/ascii.pipe';
import { TrimDirective } from './directives/trim.directive';
import { StyleChangeDirective } from './directives/style-change.directive';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthGuard } from './guard/auth.guard';
import { IsloggedGuard } from './guard/islogged.guard';

const route: Routes = [
  {
    path: 'form',
    loadChildren: () => import('./forms/forms/forms.module').then(m => m.FormsModule)
  },
  {
    path: 'pipes',
    component: PipesComponent
  },
  {
    path: '',
    loadChildren: () => import('./home/home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [IsloggedGuard]
  },
  {
    path: 'profile',
    component: ProfileComponent,
    canActivate: [AuthGuard]
  }
];

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    PipesComponent,
    TrimPipe,
    MydatePipe,
    AsciiPipe,
    TrimDirective,
    StyleChangeDirective,
    AboutComponent,
    LoginComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(route),
    HttpClientModule,
    ReactiveFormsModule
  ],


  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
