import {Component, ViewChild, AfterViewInit, ElementRef} from '@angular/core';
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
    <form [formGroup]="searchForm" (ngSubmit)="search()">
      <input
        #searchInput
        class="search" 
        formControlName="repo"
        placeholder="Search for GitHub repo"/>
      <button
        type="submit"
        class="f6 link dim br3 ph3 pv2 mb2 dib white bg-light-purple">
        Submit
      </button>
    </form>
    <hr/>
    <repo-list [repos]="repos"></repo-list>
  `
})
export class ReposComponent implements AfterViewInit {
  repos: any = [];
  searchField: FormControl;
  searchForm: FormGroup;

  @ViewChild('searchInput') searchInput: ElementRef;

  constructor(private repoService: RepoService, private formBuilder: FormBuilder) {
    this.searchField = new FormControl();
    this.searchForm = formBuilder.group({ repo: this.searchField });
  }

  ngAfterViewInit() {
    this.searchInput.nativeElement.focus();
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
