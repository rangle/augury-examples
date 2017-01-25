import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {SongPipe} from '../pipes/song.pipe';
import {SongListComponent} from '../components/song-list/song-list.component';
import {SongsComponent} from '../components/songs/songs.component';

import {SongService} from '../services/songs.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    SongListComponent,
    SongsComponent,
    SongPipe
  ],
  providers: [
    SongService
  ],
  exports: [
    SongsComponent
  ]
})
export class SongsModule {}
