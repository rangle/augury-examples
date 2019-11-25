import { Component, Input, OnChanges } from '@angular/core';
import { Logger } from '../../../services/logger.service';

@Component({
  selector: 'app-repo-list',
  styleUrls: ['./repo-list.component.css'],
  template: `
    <div *ngFor="let repo of repos" class="mb3 p3 repoItem">
      <img src="{{repo | repoprint:'album'}}" /> {{repo | repoprint:'title'}} <br/>
      <span class="gray">{{repo.url}}</span>
    </div>
  `
})

export class RepoListComponent implements OnChanges {
  @Input() repos: any;

  ngOnChanges() {
    if (this.repos) {
      this.logger.info('repo list changed!');
    }
  }

  constructor(private logger: Logger) {
  }
}
