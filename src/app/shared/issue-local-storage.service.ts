import {Injectable} from "@angular/core";
import {IssueStorage} from "./issue-storage";
import {RecentIssue} from "../recent/recent-issue";
import {PinnedIssue} from "../pinned/pinned-issue";
import {IssueService} from "./issue.service";
import Any = jasmine.Any;

@Injectable()
export class IssueLocalStorageService implements IssueService {

  private issues: IssueStorage;
  private readonly maxRecentIssues = 3;

  constructor() {
    let newIssueStorage: IssueStorage = {recent: [], pinned: []};

    this.issues = JSON.parse(localStorage.getItem("issues")) || newIssueStorage;
  }

  getRecentIssues(): RecentIssue[] {
    return this.issues.recent;
  }

  getPinnedIssues(): PinnedIssue[] {
    return this.issues.pinned;
  }

  addRecentIssue(issue: RecentIssue): RecentIssue[] {
    this.issues.recent.push(issue);
    /*if(this.issues.recent.length > this.maxRecentIssues) {
      this.issues.recent.pop();
    }*/

    this.updateIssues();

    return this.issues.recent;
  }

  addPinnedIssue(issue: PinnedIssue): PinnedIssue[] {
    this.issues.pinned.push(issue);
    this.updateIssues();

    return this.issues.pinned;
  }

  deleteRecentIssue(i: number): RecentIssue[] {
    this.issues.recent.splice(i, 1);
    this.updateIssues();

    return this.issues.recent;
  }

  deletePinnedIssue(i: number): PinnedIssue[] {
    this.issues.pinned.splice(i, 1);
    this.updateIssues();

    return this.issues.pinned;
  }

  clearRecentIssues(): RecentIssue[] {
    this.issues.recent = [];
    this.updateIssues();

    return this.issues.recent;
  }

  /**
   * Updates issues to LocalStorage
   */
  private updateIssues() {
    localStorage.setItem("issues", JSON.stringify(this.issues));
  }
}
