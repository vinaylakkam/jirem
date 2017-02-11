import {RecentIssue} from "../recent/recent-issue";
import {PinnedIssue} from "../pinned/pinned-issue";
import Any = jasmine.Any;

export interface IssueService {

  getRecentIssues(): RecentIssue[];

  getPinnedIssues(): PinnedIssue[];

  addRecentIssue(issue: RecentIssue): RecentIssue[];

  addPinnedIssue(issue: PinnedIssue): PinnedIssue[];

  deleteRecentIssue(i: number): RecentIssue[];

  deletePinnedIssue(i: number): PinnedIssue[] ;

  clearRecentIssues():void ;

}
