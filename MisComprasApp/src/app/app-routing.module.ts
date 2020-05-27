import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CompraNuevaComponent } from './components/compra-nueva/compra-nueva.component'
import { IndexComponent } from './components/index/index.component';

const routes: Routes = [
  { path: 'nueva-compra',  component: CompraNuevaComponent },
  { path: 'index', component: IndexComponent },
  { path: '', component: IndexComponent, pathMatch: 'full' },
  { path: '**', redirectTo: 'error', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
