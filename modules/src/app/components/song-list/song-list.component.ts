import {Component, Input} from '@angular/core';
import {Logger} from '../../services/logger.service';

@Component({
  selector: 'song-list',
  styleUrls: ['./song-list.component.css'],
  template: `
    <div *ngFor="let song of songs" class="mb3 p3 songItem">
      <img src="{{song | songprint:'album'}}" /> {{song | songprint:'title'}} <br/> 
      <span class="gray">{{song.album.name}}</span>
    </div>
  `
})

export class SongListComponent {
  @Input() songs: any;

  ngOnChanges() {
    if (this.songs) {
      this.logger.info('song list changed!');
    }
  }

  constructor(private logger: Logger) {
  }
}
