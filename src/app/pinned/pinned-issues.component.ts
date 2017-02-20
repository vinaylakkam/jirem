import {Component, OnInit} from "@angular/core";
import {PinnedIssue} from "./pinned-issue";
import {IssueMockService} from "../shared/issue-mock.service";
import {IssueLocalStorageService} from "../shared/issue-local-storage.service";
import {IssueOpenService} from "../shared/issue-open.service";

@Component({
  moduleId: module.id,
  selector: 'pinned-issues',
  templateUrl: 'pinned-issues.component.html'
})
export class PinnedIssuesComponent implements OnInit {

  pinnedIssues: PinnedIssue[];

  constructor(private issueStorageService: IssueLocalStorageService,
              private issueOpenService: IssueOpenService) {
  }

  ngOnInit() {
    this.loadPinnedIssues();
  }

  loadPinnedIssues(): void {
    this.pinnedIssues = this.issueStorageService.getPinnedIssues();
  }

  openIssue(issueId: number): void {
    this.issueOpenService.open(issueId);
  }

  deleteIssue(i: number): void {
    this.issueStorageService.deletePinnedIssue(i);
  }

  saveIssue(i: number, issue:PinnedIssue): void {
    delete issue.editInProgress;
    this.issueStorageService.updatePinnedIssue(i, issue)
  }

  cancelEdit(issue:PinnedIssue): void {
    delete issue.editInProgress;
    this.loadPinnedIssues();
  }
}
