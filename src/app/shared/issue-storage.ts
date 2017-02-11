import {RecentIssue} from "../recent/recent-issue";
import {PinnedIssue} from "../pinned/pinned-issue";

/**
 * Issue data structure that is being stored in LocalStorage / MockStorage
 */
export interface IssueStorage {
  recent: RecentIssue[],
  pinned: PinnedIssue[]
}
