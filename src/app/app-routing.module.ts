import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './feature/home/home.component';
import { MypageModule } from './feature/mypage/mypage.module';
import { AuthModule } from './feature/auth/auth.module';


const routes: Routes = [
  { path: 'mypage', loadChildren: () => MypageModule },
  { path: 'auth', loadChildren: () => AuthModule },
  { path: '', component: HomeComponent },
];

@NgModule({
  declarations: [HomeComponent],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
