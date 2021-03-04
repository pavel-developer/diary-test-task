import {NgModule} from '@angular/core';
import {
  RouterModule,
  Routes
} from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'diary',
    pathMatch: 'full',
  },
  {
    path: '**',
    redirectTo: 'diary'
  },
  {
    path: 'diary',
    loadChildren: './diary/diary.module#DiaryModule'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
