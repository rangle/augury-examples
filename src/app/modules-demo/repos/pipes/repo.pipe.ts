import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'repoprint' })
export class RepoPipe implements PipeTransform {
  transform(repo: any, type: string) {
    switch (type) {
      case 'title':
        if (repo.description && repo.homepage) {
          return `${repo.description} -- ${repo.homepage}`;
        } else {
          return repo.description || repo.full_name || repo.name || '';
        }
      case 'album':
        if (repo.owner && repo.owner.avatar_url) {
          return repo.owner.avatar_url;
        } else {
          return ``;
        }
    }
  }
}
