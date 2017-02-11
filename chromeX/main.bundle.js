webpackJsonp([1,4],{

  /***/ 120:
  /***/ (function(module, __webpack_exports__, __webpack_require__) {

    "use strict";
    /* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
    /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IssueLocalStorageService; });
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
      };

    var IssueLocalStorageService = (function () {
      function IssueLocalStorageService() {
        this.maxRecentIssues = 3;
        var newIssueStorage = { recent: [], pinned: [] };
        this.issues = JSON.parse(localStorage.getItem("issues")) || newIssueStorage;
      }
      IssueLocalStorageService.prototype.getRecentIssues = function () {
        return this.issues.recent;
      };
      IssueLocalStorageService.prototype.getPinnedIssues = function () {
        return this.issues.pinned;
      };
      IssueLocalStorageService.prototype.addRecentIssue = function (issue) {
        this.issues.recent.push(issue);
        /*if(this.issues.recent.length > this.maxRecentIssues) {
         this.issues.recent.pop();
         }*/
        this.updateIssues();
        return this.issues.recent;
      };
      IssueLocalStorageService.prototype.addPinnedIssue = function (issue) {
        this.issues.pinned.push(issue);
        this.updateIssues();
        return this.issues.pinned;
      };
      IssueLocalStorageService.prototype.deleteRecentIssue = function (i) {
        this.issues.recent.splice(i, 1);
        this.updateIssues();
        return this.issues.recent;
      };
      IssueLocalStorageService.prototype.deletePinnedIssue = function (i) {
        this.issues.pinned.splice(i, 1);
        this.updateIssues();
        return this.issues.pinned;
      };
      IssueLocalStorageService.prototype.clearRecentIssues = function () {
        this.issues.recent = [];
        this.updateIssues();
        return this.issues.recent;
      };
      /**
       * Updates issues to LocalStorage
       */
      IssueLocalStorageService.prototype.updateIssues = function () {
        localStorage.setItem("issues", JSON.stringify(this.issues));
      };
      IssueLocalStorageService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
        __metadata('design:paramtypes', [])
      ], IssueLocalStorageService);
      return IssueLocalStorageService;
    }());
//# sourceMappingURL=C:/vspace/jirem/src/issue-local-storage.service.js.map

    /***/ }),

  /***/ 178:
  /***/ (function(module, __webpack_exports__, __webpack_require__) {

    "use strict";
    /* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__shared_issue__ = __webpack_require__(179);
    /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PinnedIssue; });
    var __extends = (this && this.__extends) || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
      };

    var PinnedIssue = (function (_super) {
      __extends(PinnedIssue, _super);
      function PinnedIssue(id, name) {
        _super.call(this, id);
        this.name = name;
      }
      return PinnedIssue;
    }(__WEBPACK_IMPORTED_MODULE_0__shared_issue__["a" /* Issue */]));
//# sourceMappingURL=C:/vspace/jirem/src/pinned-issue.js.map

    /***/ }),

  /***/ 179:
  /***/ (function(module, __webpack_exports__, __webpack_require__) {

    "use strict";
    /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Issue; });
    var Issue = (function () {
      function Issue(id) {
        this.id = id;
      }
      return Issue;
    }());
//# sourceMappingURL=C:/vspace/jirem/src/issue.js.map

    /***/ }),

  /***/ 309:
  /***/ (function(module, exports) {

    function webpackEmptyContext(req) {
      throw new Error("Cannot find module '" + req + "'.");
    }
    webpackEmptyContext.keys = function() { return []; };
    webpackEmptyContext.resolve = webpackEmptyContext;
    module.exports = webpackEmptyContext;
    webpackEmptyContext.id = 309;


    /***/ }),

  /***/ 310:
  /***/ (function(module, __webpack_exports__, __webpack_require__) {

    "use strict";
    Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
    /* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(395);
    /* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
    /* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__(422);
    /* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_module__ = __webpack_require__(416);




    if (__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].production) {
      __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["a" /* enableProdMode */])();
    }
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_3__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=C:/vspace/jirem/src/main.js.map

    /***/ }),

  /***/ 415:
  /***/ (function(module, __webpack_exports__, __webpack_require__) {

    "use strict";
    /* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
    /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
      };

    var AppComponent = (function () {
      function AppComponent() {
        this.title = 'JiReM';
      }
      AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["U" /* Component */])({
          selector: 'app-root',
          template: __webpack_require__(487),
          styles: [__webpack_require__(486)]
        }),
        __metadata('design:paramtypes', [])
      ], AppComponent);
      return AppComponent;
    }());
//# sourceMappingURL=C:/vspace/jirem/src/app.component.js.map

    /***/ }),

  /***/ 416:
  /***/ (function(module, __webpack_exports__, __webpack_require__) {

    "use strict";
    /* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(269);
    /* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
    /* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(389);
    /* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(415);
    /* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__navigator_navigator_component__ = __webpack_require__(417);
    /* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__recent_recent_issues_component__ = __webpack_require__(420);
    /* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pinned_pinned_issues_component__ = __webpack_require__(418);
    /* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__shared_issue_local_storage_service__ = __webpack_require__(120);
    /* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__shared_issue_mock_service__ = __webpack_require__(421);
    /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
      };









    var AppModule = (function () {
      function AppModule() {
      }
      AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
          declarations: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_4__navigator_navigator_component__["a" /* NavigatorComponent */],
            __WEBPACK_IMPORTED_MODULE_5__recent_recent_issues_component__["a" /* RecentIssuesComponent */],
            __WEBPACK_IMPORTED_MODULE_6__pinned_pinned_issues_component__["a" /* PinnedIssuesComponent */]
          ],
          imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */]
          ],
          providers: [
            __WEBPACK_IMPORTED_MODULE_8__shared_issue_mock_service__["a" /* IssueMockService */],
            __WEBPACK_IMPORTED_MODULE_7__shared_issue_local_storage_service__["a" /* IssueLocalStorageService */]
          ],
          bootstrap: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]]
        }),
        __metadata('design:paramtypes', [])
      ], AppModule);
      return AppModule;
    }());
//# sourceMappingURL=C:/vspace/jirem/src/app.module.js.map

    /***/ }),

  /***/ 417:
  /***/ (function(module, __webpack_exports__, __webpack_require__) {

    "use strict";
    /* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
    /* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_issue__ = __webpack_require__(179);
    /* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_issue_local_storage_service__ = __webpack_require__(120);
    /* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pinned_pinned_issue__ = __webpack_require__(178);
    /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavigatorComponent; });
///<reference path="../chrome/chrome-app.d.ts" />
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
      };




    var NavigatorComponent = (function () {
      function NavigatorComponent(issueService) {
        this.issueService = issueService;
        this.jiraURL = "https://mhsprod.jira.com/browse/";
        this.issue = new __WEBPACK_IMPORTED_MODULE_1__shared_issue__["a" /* Issue */]();
      }
      NavigatorComponent.prototype.ngOnInit = function () {
      };
      NavigatorComponent.prototype.openIssue = function () {
        //alert(this.jiraURL + this.issue.id);
        this.issueService.addRecentIssue(this.issue);
        this.openIssueInChromeTab();
        this.issue = new __WEBPACK_IMPORTED_MODULE_1__shared_issue__["a" /* Issue */]();
      };
      NavigatorComponent.prototype.openIssueInChromeTab = function () {
        var url = this.jiraURL + this.issue.id;
        //chrome.tabs.create({url: url});
      };
      NavigatorComponent.prototype.pinIssue = function () {
        var issue = new __WEBPACK_IMPORTED_MODULE_3__pinned_pinned_issue__["a" /* PinnedIssue */](this.issue.id);
        this.issueService.addPinnedIssue(issue);
      };
      NavigatorComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["U" /* Component */])({
          selector: 'navigator',
          template: __webpack_require__(488)
        }),
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__shared_issue_local_storage_service__["a" /* IssueLocalStorageService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__shared_issue_local_storage_service__["a" /* IssueLocalStorageService */]) === 'function' && _a) || Object])
      ], NavigatorComponent);
      return NavigatorComponent;
      var _a;
    }());
//# sourceMappingURL=C:/vspace/jirem/src/navigator.component.js.map

    /***/ }),

  /***/ 418:
  /***/ (function(module, __webpack_exports__, __webpack_require__) {

    "use strict";
    /* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
    /* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_issue_local_storage_service__ = __webpack_require__(120);
    /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PinnedIssuesComponent; });
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
      };


    var PinnedIssuesComponent = (function () {
      function PinnedIssuesComponent(issueService) {
        this.issueService = issueService;
      }
      PinnedIssuesComponent.prototype.ngOnInit = function () {
        this.loadPinnedIssues();
      };
      PinnedIssuesComponent.prototype.loadPinnedIssues = function () {
        this.pinnedIssues = this.issueService.getPinnedIssues();
      };
      PinnedIssuesComponent.prototype.deleteIssue = function (i) {
        this.issueService.deletePinnedIssue(i);
      };
      PinnedIssuesComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["U" /* Component */])({
          selector: 'pinned-issues',
          template: __webpack_require__(489)
        }),
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_issue_local_storage_service__["a" /* IssueLocalStorageService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__shared_issue_local_storage_service__["a" /* IssueLocalStorageService */]) === 'function' && _a) || Object])
      ], PinnedIssuesComponent);
      return PinnedIssuesComponent;
      var _a;
    }());
//# sourceMappingURL=C:/vspace/jirem/src/pinned-issues.component.js.map

    /***/ }),

  /***/ 419:
  /***/ (function(module, __webpack_exports__, __webpack_require__) {

    "use strict";
    /* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__shared_issue__ = __webpack_require__(179);
    /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RecentIssue; });
    var __extends = (this && this.__extends) || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
      };

    var RecentIssue = (function (_super) {
      __extends(RecentIssue, _super);
      function RecentIssue(id) {
        _super.call(this, id);
      }
      return RecentIssue;
    }(__WEBPACK_IMPORTED_MODULE_0__shared_issue__["a" /* Issue */]));
//# sourceMappingURL=C:/vspace/jirem/src/recent-issue.js.map

    /***/ }),

  /***/ 420:
  /***/ (function(module, __webpack_exports__, __webpack_require__) {

    "use strict";
    /* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
    /* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_issue_local_storage_service__ = __webpack_require__(120);
    /* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pinned_pinned_issue__ = __webpack_require__(178);
    /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RecentIssuesComponent; });
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
      };



    var RecentIssuesComponent = (function () {
      function RecentIssuesComponent(issueService) {
        this.issueService = issueService;
      }
      RecentIssuesComponent.prototype.ngOnInit = function () {
        this.loadRecentIssues();
      };
      RecentIssuesComponent.prototype.loadRecentIssues = function () {
        this.recentIssues = this.issueService.getRecentIssues();
      };
      RecentIssuesComponent.prototype.deleteIssue = function (i) {
        this.issueService.deleteRecentIssue(i);
      };
      RecentIssuesComponent.prototype.clearIssues = function () {
        this.recentIssues = this.issueService.clearRecentIssues();
      };
      RecentIssuesComponent.prototype.pinIssue = function (i) {
        var issue = new __WEBPACK_IMPORTED_MODULE_2__pinned_pinned_issue__["a" /* PinnedIssue */](this.recentIssues[i].id);
        this.issueService.addPinnedIssue(issue);
      };
      RecentIssuesComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["U" /* Component */])({
          selector: 'recent-issues',
          template: __webpack_require__(490)
        }),
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_issue_local_storage_service__["a" /* IssueLocalStorageService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__shared_issue_local_storage_service__["a" /* IssueLocalStorageService */]) === 'function' && _a) || Object])
      ], RecentIssuesComponent);
      return RecentIssuesComponent;
      var _a;
    }());
//# sourceMappingURL=C:/vspace/jirem/src/recent-issues.component.js.map

    /***/ }),

  /***/ 421:
  /***/ (function(module, __webpack_exports__, __webpack_require__) {

    "use strict";
    /* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
    /* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__recent_recent_issue__ = __webpack_require__(419);
    /* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pinned_pinned_issue__ = __webpack_require__(178);
    /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IssueMockService; });
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
      };



    var IssueMockService = (function () {
      function IssueMockService() {
        this.issues = MOCK_ISSUES_STORAGE;
      }
      IssueMockService.prototype.getRecentIssues = function () {
        return this.issues.recent;
      };
      IssueMockService.prototype.getPinnedIssues = function () {
        return this.issues.pinned;
      };
      IssueMockService.prototype.addRecentIssue = function (issue) {
        this.issues.recent.push(issue);
        return this.issues.recent;
      };
      IssueMockService.prototype.addPinnedIssue = function (issue) {
        this.issues.pinned.push(issue);
        return this.issues.pinned;
      };
      IssueMockService.prototype.deleteRecentIssue = function (i) {
        return this.issues.recent.splice(i, 1);
      };
      IssueMockService.prototype.deletePinnedIssue = function (i) {
        return this.issues.pinned.splice(i, 1);
      };
      IssueMockService.prototype.clearRecentIssues = function () {
        this.issues.recent = [];
      };
      IssueMockService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
        __metadata('design:paramtypes', [])
      ], IssueMockService);
      return IssueMockService;
    }());
    var MOCK_ISSUES_STORAGE = {
      recent: [
        new __WEBPACK_IMPORTED_MODULE_1__recent_recent_issue__["a" /* RecentIssue */](1234),
        new __WEBPACK_IMPORTED_MODULE_1__recent_recent_issue__["a" /* RecentIssue */](2345),
        new __WEBPACK_IMPORTED_MODULE_1__recent_recent_issue__["a" /* RecentIssue */](3456),
        new __WEBPACK_IMPORTED_MODULE_1__recent_recent_issue__["a" /* RecentIssue */](4567),
        new __WEBPACK_IMPORTED_MODULE_1__recent_recent_issue__["a" /* RecentIssue */](5678),
      ],
      pinned: [
        new __WEBPACK_IMPORTED_MODULE_2__pinned_pinned_issue__["a" /* PinnedIssue */](1234, "Lorem ipsum dolor"),
        new __WEBPACK_IMPORTED_MODULE_2__pinned_pinned_issue__["a" /* PinnedIssue */](2345),
        new __WEBPACK_IMPORTED_MODULE_2__pinned_pinned_issue__["a" /* PinnedIssue */](3456, "Varius eget urna a, faucibus placerat risus."),
        new __WEBPACK_IMPORTED_MODULE_2__pinned_pinned_issue__["a" /* PinnedIssue */](4567, "Elit. Quisque dolor nibh"),
        new __WEBPACK_IMPORTED_MODULE_2__pinned_pinned_issue__["a" /* PinnedIssue */](5678),
        new __WEBPACK_IMPORTED_MODULE_2__pinned_pinned_issue__["a" /* PinnedIssue */](6789, "Donec tempor tincidunt nulla, a feugiat diam tristique ac"),
      ]
    };
//# sourceMappingURL=C:/vspace/jirem/src/issue-mock.service.js.map

    /***/ }),

  /***/ 422:
  /***/ (function(module, __webpack_exports__, __webpack_require__) {

    "use strict";
    /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
    var environment = {
      production: false
    };
//# sourceMappingURL=C:/vspace/jirem/src/environment.js.map

    /***/ }),

  /***/ 486:
  /***/ (function(module, exports) {

    module.exports = ""

    /***/ }),

  /***/ 487:
  /***/ (function(module, exports) {

    module.exports = "<h1>{{title}}</h1>\n\n<navigator></navigator><hr>\n\n<recent-issues></recent-issues><hr>\n\n<pinned-issues></pinned-issues>\n"

    /***/ }),

  /***/ 488:
  /***/ (function(module, exports) {

    module.exports = "<div>\r\n  <label>RMPD-</label>\r\n  <input type=\"text\" [(ngModel)]=\"issue.id\" (keyup.enter)=\"openIssue()\" placeholder=\"Enter issue id. ex: 2678\">\r\n  <button type=\"button\" (click)=\"openIssue()\">Go</button>\r\n  <br>\r\n  <button type=\"button\" (click)=\"pinIssue()\">Pin</button>\r\n\r\n</div>\r\n"

    /***/ }),

  /***/ 489:
  /***/ (function(module, exports) {

    module.exports = "<div>\r\n  <h2>Pinned:</h2>\r\n  <ul>\r\n    <li *ngFor=\"let issue of pinnedIssues\">\r\n      {{issue.id}} - {{issue.name}}\r\n      <button type=\"button\" (click)=\"deleteIssue(i)\">Delete</button>\r\n    </li>\r\n  </ul>\r\n</div>\r\n"

    /***/ }),

  /***/ 490:
  /***/ (function(module, exports) {

    module.exports = "<div>\r\n  <h2>Recent: <button type=\"button\" (click)=\"clearIssues()\">Clear All</button> </h2>\r\n  <ul>\r\n    <li *ngFor=\"let issue of recentIssues; let i=index\">\r\n      {{issue.id}}\r\n      <button type=\"button\" (click)=\"deleteIssue(i)\">Delete</button>\r\n      <button type=\"button\" (click)=\"pinIssue(i)\">Pin</button>\r\n    </li>\r\n  </ul>\r\n</div>\r\n"

    /***/ }),

  /***/ 539:
  /***/ (function(module, exports, __webpack_require__) {

    __webpack_require__(313);
    module.exports = __webpack_require__(310);


    /***/ })

},[539]);
//# sourceMappingURL=main.bundle.map
