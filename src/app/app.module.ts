import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {FormsModule} from "@angular/forms";
import {AppComponent} from "./app.component";
import {NavigatorComponent} from "./navigator/navigator.component";
import {RecentIssuesComponent} from "./recent/recent-issues.component";
import {PinnedIssuesComponent} from "./pinned/pinned-issues.component";
import {IssueLocalStorageService} from "./shared/issue-local-storage.service";
import {IssueMockService} from "./shared/issue-mock.service";
import {CommonModule} from "@angular/common";
import {IssueOpenService} from "./shared/issue-open.service";

@NgModule({
  declarations: [
    AppComponent,
    NavigatorComponent,
    RecentIssuesComponent,
    PinnedIssuesComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule
  ],
  providers: [
    IssueMockService,
    IssueLocalStorageService,
    IssueOpenService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
