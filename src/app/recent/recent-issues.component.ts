import {Component, OnInit} from '@angular/core';
import {RecentIssue} from "./recent-issue";
import {IssueService} from "../shared/issue.service";
import {IssueMockService} from "../shared/issue-mock.service";
import {IssueLocalStorageService} from "../shared/issue-local-storage.service";
import {Issue} from "../shared/issue";
import {PinnedIssue} from "../pinned/pinned-issue";

@Component({
  moduleId: module.id,
  selector: 'recent-issues',
  templateUrl: 'recent-issues.component.html'
})
export class RecentIssuesComponent implements OnInit {

  recentIssues: RecentIssue[];

  constructor(private issueService: IssueLocalStorageService) {
  }

  ngOnInit() {
    this.loadRecentIssues();
  }

  loadRecentIssues(): void {
    this.recentIssues = this.issueService.getRecentIssues();
  }

  deleteIssue(i: number): void {
    this.issueService.deleteRecentIssue(i);
  }

  clearIssues(): void {
    this.recentIssues = this.issueService.clearRecentIssues();
  }

  pinIssue(i: number): void {
    let issue = new PinnedIssue(this.recentIssues[i].id);
    this.issueService.addPinnedIssue(issue);
  }
}
