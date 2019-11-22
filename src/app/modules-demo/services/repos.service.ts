import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable()
export class RepoService {
  constructor(private http: HttpClient) { }

  searchRepo(repo: string) {
    const params = new HttpParams().set('q', repo);

    return this.http
      .get(`https://api.github.com/search/repositories`, { params })
      .pipe(map((results: any) => results.items));
  }
}
