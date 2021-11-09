import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthorListComponent } from './Views/author-list/author-list.component';
import { ImageListComponent } from './Views/image-list/image-list.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/images',
    pathMatch: 'full'
  },
  {
    path: 'images',
    component: ImageListComponent,
  },
  {
    path: 'detail/:id',
    component: AuthorListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
