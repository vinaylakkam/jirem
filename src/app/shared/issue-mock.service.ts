import {Injectable} from "@angular/core";
import {IssueStorage} from "./issue-storage";
import {RecentIssue} from "../recent/recent-issue";
import {PinnedIssue} from "../pinned/pinned-issue";
import {IssueService} from "./issue.service";
import Any = jasmine.Any;

@Injectable()
export class IssueMockService implements IssueService {
  issues: IssueStorage;

  constructor() {
    this.issues = MOCK_ISSUES_STORAGE;
  }

  getRecentIssues(): RecentIssue[] {
    return this.issues.recent;
  }

  getPinnedIssues(): PinnedIssue[] {
    return this.issues.pinned;
  }

  addRecentIssue(issue: RecentIssue): RecentIssue[] {
    this.issues.recent.push(issue);
    return this.issues.recent;
  }

  addPinnedIssue(issue: PinnedIssue): PinnedIssue[] {
    this.issues.pinned.push(issue);
    return this.issues.pinned;
  }

  deleteRecentIssue(i: number): RecentIssue[] {
    return this.issues.recent.splice(i, 1);
  }

  deletePinnedIssue(i: number): PinnedIssue[] {
    return this.issues.pinned.splice(i, 1);
  }

  clearRecentIssues(): void {
    this.issues.recent = [];
  }
}

const MOCK_ISSUES_STORAGE: IssueStorage = {
  recent: [
    new RecentIssue(1234),
    new RecentIssue(2345),
    new RecentIssue(3456),
    new RecentIssue(4567),
    new RecentIssue(5678),
  ],
  pinned: [
    new PinnedIssue(1234, "Lorem ipsum dolor"),
    new PinnedIssue(2345),
    new PinnedIssue(3456, "Varius eget urna a, faucibus placerat risus."),
    new PinnedIssue(4567, "Elit. Quisque dolor nibh"),
    new PinnedIssue(5678),
    new PinnedIssue(6789, "Donec tempor tincidunt nulla, a feugiat diam tristique ac"),
  ]
}
