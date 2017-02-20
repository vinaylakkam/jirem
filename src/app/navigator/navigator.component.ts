///<reference path="../types/chrome-app.d.ts" />

import {Component, OnInit} from "@angular/core";
import {Issue} from "../shared/issue";
import {IssueLocalStorageService} from "../shared/issue-local-storage.service";
import {PinnedIssue} from "../pinned/pinned-issue";
import {IssueOpenService} from "../shared/issue-open.service";

@Component({
  moduleId: module.id,
  selector: 'navigator',
  templateUrl: 'navigator.component.html'
})
export class NavigatorComponent implements OnInit {

  issue: Issue;

  constructor(private issueStorageService: IssueLocalStorageService,
              private issueOpenService: IssueOpenService) {
    this.issue = new Issue();
  }

  ngOnInit() {
  }

  onEnter(form): void {
    if(form.valid) this.openIssue();
  }

  openIssue(): void {
    //alert(this.jiraURL + this.issue.id);
    this.issueStorageService.addRecentIssue(this.issue);
    this.issueOpenService.open(this.issue.id);     // TODO: Move this to a service n Use promise here so below line is executed only after resolving.

    this.issue = new Issue();
  }


  pinIssue(): void {
    let issue = new PinnedIssue(this.issue.id);
    this.issueStorageService.addPinnedIssue(issue);
  }
}
