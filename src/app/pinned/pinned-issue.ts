import {Issue} from "../shared/issue";

export class PinnedIssue extends Issue {

  name: string;
  editInProgress: boolean;

  constructor(id: number, name?: string) {
    super(id);
    this.name = name;
  }
}
