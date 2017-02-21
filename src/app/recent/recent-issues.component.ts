import {Component, OnInit} from "@angular/core";
import {RecentIssue} from "./recent-issue";
import {IssueLocalStorageService} from "../shared/issue-local-storage.service";
import {PinnedIssue} from "../pinned/pinned-issue";
import {IssueOpenService} from "../shared/issue-open.service";

@Component({
  moduleId: module.id,
  selector: 'recent-issues',
  templateUrl: 'recent-issues.component.html'
})
export class RecentIssuesComponent implements OnInit {

  recentIssues: RecentIssue[];

  constructor(private issueService: IssueLocalStorageService,
              private issueOpenService: IssueOpenService) {
  }

  ngOnInit() {
    this.loadRecentIssues();
  }

  loadRecentIssues(): void {
    this.recentIssues = this.issueService.getRecentIssues();
  }

  openIssue(issueId: number): void {
    this.issueOpenService.open(issueId);
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
