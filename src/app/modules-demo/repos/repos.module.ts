import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { RepoPipe } from './pipes/repo.pipe';
import { RepoListComponent } from './components/repo-list/repo-list.component';
import { ReposComponent } from './components/repos/repos.component';

import { RepoService } from '../services/repos.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    RepoListComponent,
    ReposComponent,
    RepoPipe
  ],
  providers: [
    RepoService
  ],
  exports: [
    ReposComponent
  ]
})
export class ReposModule { }
