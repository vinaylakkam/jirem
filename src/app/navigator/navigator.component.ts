///<reference path="../chrome/chrome-app.d.ts" />

import {Component, OnInit} from "@angular/core";
import {Issue} from "../shared/issue";
import {IssueMockService} from "../shared/issue-mock.service";
import {IssueLocalStorageService} from "../shared/issue-local-storage.service";
import {PinnedIssue} from "../pinned/pinned-issue";

@Component({
  moduleId: module.id,
  selector: 'navigator',
  templateUrl: 'navigator.component.html'
})
export class NavigatorComponent implements OnInit {

  issue: Issue;
  readonly jiraURL = "https://mhsprod.jira.com/browse/";

  constructor(private issueService: IssueLocalStorageService) {
    this.issue = new Issue();
  }

  ngOnInit() {
  }

  openIssue(): void {
    //alert(this.jiraURL + this.issue.id);
    this.issueService.addRecentIssue(this.issue);
    this.openIssueInChromeTab();
    this.issue = new Issue();
  }

  private openIssueInChromeTab() {
    let url = this.jiraURL + this.issue.id;
    //chrome.tabs.create({url: url});
  }

  pinIssue(): void {
    let issue = new PinnedIssue(this.issue.id);
    this.issueService.addPinnedIssue(issue);
  }
}