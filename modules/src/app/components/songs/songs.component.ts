import {Component, ViewChildren} from '@angular/core';
import {SongService} from '../../services/songs.service';
import {
  FormControl,
  FormGroup,
  FormBuilder
} from '@angular/forms';
import 'rxjs/Rx';

@Component({
  selector: 'my-songs',
  styleUrls: ['./songs.component.css'],
  template: `
    <h2>Songs</h2>
    <form [formGroup]="searchForm">
      <input
        #searchInput
        class="search" 
        formControlName="artist" 
        debounce="400" 
        placeholder="Search for artist"
        (keyup)="search()" />
    </form>
    <hr/>
    <song-list [songs]="songs"></song-list>
  `
})
export class SongsComponent {
  songs: any = [];
  searchField: FormControl;
  searchForm: FormGroup;

  @ViewChildren('searchInput') searchInput;

  constructor(private songService: SongService, private formBuilder: FormBuilder) {
    this.searchField = new FormControl();
    this.searchForm = formBuilder.group({ artist: this.searchField });
  }

  ngAfterViewInit() {
    this.searchInput.first.nativeElement.focus();
  }

  search() {
    if (this.searchField.value) {
      this.songService.searchSong(this.searchField.value).subscribe(result => {
        this.songs = result.tracks.items
      });
    } else {
      this.songs = [];
    }
  }
}
