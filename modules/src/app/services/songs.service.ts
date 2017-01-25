import {Injectable} from '@angular/core';
import {Http} from '@angular/http';

@Injectable()
export class SongService {
  constructor(private http: Http) {}

  searchSong(song: string) {
    return this.http.get(`https://api.spotify.com/v1/search?q=${song}&type=track`)
      .map(response => response.json());
  }
}
