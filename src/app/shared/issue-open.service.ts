import {Injectable} from "@angular/core";

@Injectable()
export class IssueOpenService {
  readonly jiraURL = "https://mhsprod.jira.com/browse/RMPD-";

  open(issueId: number): void {
    let url2 = this.jiraURL + issueId;
    //alert("Opens issue: " + issueId)

    chrome.tabs.create({url: url2}); //FIXME: Uncomment this for chrome Xtn
  }
}
