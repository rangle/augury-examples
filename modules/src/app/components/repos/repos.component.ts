import {Component, ViewChildren, AfterViewInit} from '@angular/core';
import {RepoService} from '../../services/repos.service';
import {
  FormControl,
  FormGroup,
  FormBuilder
} from '@angular/forms';

@Component({
  selector: 'my-repos',
  styleUrls: ['./repos.component.css'],
  template: `
    <h2>GitHub Repos</h2>
    <form [formGroup]="searchForm">
      <input
        #searchInput
        class="search" 
        formControlName="repo" 
        debounce="400" 
        placeholder="Search for GitHub repo"
        (keyup)="search()" />
    </form>
    <hr/>
    <repo-list [repos]="repos"></repo-list>
  `
})
export class ReposComponent implements AfterViewInit {
  repos: any = [];
  searchField: FormControl;
  searchForm: FormGroup;

  @ViewChildren('searchInput') searchInput;

  constructor(private repoService: RepoService, private formBuilder: FormBuilder) {
    this.searchField = new FormControl();
    this.searchForm = formBuilder.group({ repo: this.searchField });
  }

  ngAfterViewInit() {
    this.searchInput.first.nativeElement.focus();
  }

  search() {
    if (this.searchField.value) {
      this.repoService.searchRepo(this.searchField.value).subscribe(result => {
        this.repos = result;
      });
    } else {
      this.repos = [];
    }
  }
}
