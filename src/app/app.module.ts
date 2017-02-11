import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {FormsModule} from "@angular/forms";
import {AppComponent} from "./app.component";
import {NavigatorComponent} from "./navigator/navigator.component";
import {RecentIssuesComponent} from "./recent/recent-issues.component";
import {PinnedIssuesComponent} from "./pinned/pinned-issues.component";
import {IssueLocalStorageService} from "./shared/issue-local-storage.service";
import {IssueMockService} from "./shared/issue-mock.service";

@NgModule({
  declarations: [
    AppComponent,
    NavigatorComponent,
    RecentIssuesComponent,
    PinnedIssuesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [
    IssueMockService,
    IssueLocalStorageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
