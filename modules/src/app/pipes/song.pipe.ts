import {Pipe, PipeTransform} from '@angular/core';

@Pipe({ name: 'songprint' })
export class SongPipe implements PipeTransform {
  transform(song: any, type: string) {
    switch (type) {
      case 'title':
        if (song.artists && song.artists[0]) {
          return `${song.artists[0].name} -- ${song.name}`;
        } else {
          return `${song.name}`;
        }
      case 'album':
        if (song.album && song.album.images[0]) {
          return song.album.images[0].url;
        } else {
          return ``;
        }
    }
  }
}