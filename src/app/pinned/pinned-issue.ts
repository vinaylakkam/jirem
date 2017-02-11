import {Issue} from "../shared/issue";

export class PinnedIssue extends Issue {

  name: string;

  constructor(id: number, name?: string) {
    super(id);
    this.name = name;
  }
}
