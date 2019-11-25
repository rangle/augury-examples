import { Component, ViewChild, AfterViewInit, ElementRef } from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';

import { RepoService } from '../../../services/repos.service';

@Component({
  selector: 'app-repos',
  styleUrls: ['./repos.component.css'],
  templateUrl: './repos.component.html'
})
export class ReposComponent implements AfterViewInit {
  repos: any = [];
  searchField: FormControl;
  searchForm: FormGroup;

  @ViewChild('searchInput', { static: true }) searchInput: ElementRef;

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
