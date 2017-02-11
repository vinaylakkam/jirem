import {Component, OnInit} from "@angular/core";
import {PinnedIssue} from "./pinned-issue";
import {IssueMockService} from "../shared/issue-mock.service";
import {IssueLocalStorageService} from "../shared/issue-local-storage.service";

@Component({
  moduleId: module.id,
  selector: 'pinned-issues',
  templateUrl: 'pinned-issues.component.html'
})
export class PinnedIssuesComponent implements OnInit {

  pinnedIssues: PinnedIssue[];

  constructor(private issueService: IssueLocalStorageService) {
  }

  ngOnInit() {
    this.loadPinnedIssues();
  }

  loadPinnedIssues(): void {
    this.pinnedIssues = this.issueService.getPinnedIssues();
  }

  deleteIssue(i: number): void {
    this.issueService.deletePinnedIssue(i);

  }
}
