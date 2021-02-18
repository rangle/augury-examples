function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-demo-modules-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/modules-demo/base/base.component.html":
  /*!*********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules-demo/base/base.component.html ***!
    \*********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppModulesDemoBaseBaseComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-header [navItems]=\"navModel\"></app-header>\n<div class=\"fl pt6 ph5 w-75\">\n  <app-repos></app-repos>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/modules-demo/repos/components/repos/repos.component.html":
  /*!****************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules-demo/repos/components/repos/repos.component.html ***!
    \****************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppModulesDemoReposComponentsReposReposComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<h2>GitHub Repos</h2>\n    <form [formGroup]=\"searchForm\" (ngSubmit)=\"search()\">\n      <input\n        #searchInput\n        class=\"search\"\n        formControlName=\"repo\"\n        placeholder=\"Search\"/>\n      <button\n        type=\"submit\"\n        class=\"f6 link dim br3 ph3 ml2 pv2 mb2 dib black btn-bg\">\n        Submit\n      </button>\n    </form>\n    <hr/>\n    <app-repo-list [repos]=\"repos\"></app-repo-list>\n";
    /***/
  },

  /***/
  "./src/app/modules-demo/base/base.component.css":
  /*!******************************************************!*\
    !*** ./src/app/modules-demo/base/base.component.css ***!
    \******************************************************/

  /*! exports provided: default */

  /***/
  function srcAppModulesDemoBaseBaseComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMtZGVtby9iYXNlL2Jhc2UuY29tcG9uZW50LmNzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/modules-demo/base/base.component.ts":
  /*!*****************************************************!*\
    !*** ./src/app/modules-demo/base/base.component.ts ***!
    \*****************************************************/

  /*! exports provided: BaseComponent */

  /***/
  function srcAppModulesDemoBaseBaseComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BaseComponent", function () {
      return BaseComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var BaseComponent = function BaseComponent() {
      _classCallCheck(this, BaseComponent);

      this.navModel = [{
        title: 'Augury NgModule Demo',
        defaultStyle: true,
        headerOnly: true
      }];
    };

    BaseComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-modules-root',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./base.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/modules-demo/base/base.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./base.component.css */
      "./src/app/modules-demo/base/base.component.css")).default]
    })], BaseComponent);
    /***/
  },

  /***/
  "./src/app/modules-demo/modules-routing.module.ts":
  /*!********************************************************!*\
    !*** ./src/app/modules-demo/modules-routing.module.ts ***!
    \********************************************************/

  /*! exports provided: ModulesRoutingModule */

  /***/
  function srcAppModulesDemoModulesRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ModulesRoutingModule", function () {
      return ModulesRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _base_base_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./base/base.component */
    "./src/app/modules-demo/base/base.component.ts");

    var routes = [{
      path: '',
      component: _base_base_component__WEBPACK_IMPORTED_MODULE_3__["BaseComponent"]
    }];

    var ModulesRoutingModule = function ModulesRoutingModule() {
      _classCallCheck(this, ModulesRoutingModule);
    };

    ModulesRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], ModulesRoutingModule);
    /***/
  },

  /***/
  "./src/app/modules-demo/modules.module.ts":
  /*!************************************************!*\
    !*** ./src/app/modules-demo/modules.module.ts ***!
    \************************************************/

  /*! exports provided: ModulesModule */

  /***/
  function srcAppModulesDemoModulesModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ModulesModule", function () {
      return ModulesModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _modules_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./modules-routing.module */
    "./src/app/modules-demo/modules-routing.module.ts");
    /* harmony import */


    var _base_base_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./base/base.component */
    "./src/app/modules-demo/base/base.component.ts");
    /* harmony import */


    var _services_logger_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./services/logger.service */
    "./src/app/modules-demo/services/logger.service.ts");
    /* harmony import */


    var _repos_repos_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./repos/repos.module */
    "./src/app/modules-demo/repos/repos.module.ts");
    /* harmony import */


    var _shared_shared_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../shared/shared.module */
    "./src/app/shared/shared.module.ts");

    var ModulesModule = function ModulesModule() {
      _classCallCheck(this, ModulesModule);
    };

    ModulesModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_base_base_component__WEBPACK_IMPORTED_MODULE_5__["BaseComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"], _modules_routing_module__WEBPACK_IMPORTED_MODULE_4__["ModulesRoutingModule"], _repos_repos_module__WEBPACK_IMPORTED_MODULE_7__["ReposModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_8__["SharedModule"]],
      providers: [_services_logger_service__WEBPACK_IMPORTED_MODULE_6__["Logger"]],
      bootstrap: [_base_base_component__WEBPACK_IMPORTED_MODULE_5__["BaseComponent"]]
    })], ModulesModule);
    /***/
  },

  /***/
  "./src/app/modules-demo/repos/components/repo-list/repo-list.component.css":
  /*!*********************************************************************************!*\
    !*** ./src/app/modules-demo/repos/components/repo-list/repo-list.component.css ***!
    \*********************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppModulesDemoReposComponentsRepoListRepoListComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".repoItem img {\n    vertical-align: middle;\n    float: left;\n    width: 65px;\n    height: 65px;\n    margin-right: 10px;\n}\n\n.repoItem {\n    height: 70px;\n    padding: 10px 0 10px 0;\n}\n\n.repoItem:hover {\n    color: #5128a5;\n    cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy1kZW1vL3JlcG9zL2NvbXBvbmVudHMvcmVwby1saXN0L3JlcG8tbGlzdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksc0JBQXNCO0lBQ3RCLFdBQVc7SUFDWCxXQUFXO0lBQ1gsWUFBWTtJQUNaLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLFlBQVk7SUFDWixzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsZUFBZTtBQUNuQiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMtZGVtby9yZXBvcy9jb21wb25lbnRzL3JlcG8tbGlzdC9yZXBvLWxpc3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5yZXBvSXRlbSBpbWcge1xuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gICAgd2lkdGg6IDY1cHg7XG4gICAgaGVpZ2h0OiA2NXB4O1xuICAgIG1hcmdpbi1yaWdodDogMTBweDtcbn1cblxuLnJlcG9JdGVtIHtcbiAgICBoZWlnaHQ6IDcwcHg7XG4gICAgcGFkZGluZzogMTBweCAwIDEwcHggMDtcbn1cblxuLnJlcG9JdGVtOmhvdmVyIHtcbiAgICBjb2xvcjogIzUxMjhhNTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/modules-demo/repos/components/repo-list/repo-list.component.ts":
  /*!********************************************************************************!*\
    !*** ./src/app/modules-demo/repos/components/repo-list/repo-list.component.ts ***!
    \********************************************************************************/

  /*! exports provided: RepoListComponent */

  /***/
  function srcAppModulesDemoReposComponentsRepoListRepoListComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RepoListComponent", function () {
      return RepoListComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _services_logger_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../services/logger.service */
    "./src/app/modules-demo/services/logger.service.ts");

    var RepoListComponent =
    /*#__PURE__*/
    function () {
      function RepoListComponent(logger) {
        _classCallCheck(this, RepoListComponent);

        this.logger = logger;
      }

      _createClass(RepoListComponent, [{
        key: "ngOnChanges",
        value: function ngOnChanges() {
          if (this.repos) {
            this.logger.info('repo list changed!');
          }
        }
      }]);

      return RepoListComponent;
    }();

    RepoListComponent.ctorParameters = function () {
      return [{
        type: _services_logger_service__WEBPACK_IMPORTED_MODULE_2__["Logger"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], RepoListComponent.prototype, "repos", void 0);
    RepoListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-repo-list',
      template: "\n    <div *ngFor=\"let repo of repos\" class=\"mb3 p3 repoItem\">\n      <img src=\"{{repo | repoprint:'album'}}\" /> {{repo | repoprint:'title'}} <br/>\n      <span class=\"gray\">{{repo.url}}</span>\n    </div>\n  ",
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./repo-list.component.css */
      "./src/app/modules-demo/repos/components/repo-list/repo-list.component.css")).default]
    })], RepoListComponent);
    /***/
  },

  /***/
  "./src/app/modules-demo/repos/components/repos/repos.component.css":
  /*!*************************************************************************!*\
    !*** ./src/app/modules-demo/repos/components/repos/repos.component.css ***!
    \*************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppModulesDemoReposComponentsReposReposComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".search {\n    padding: 10px;\n    border-radius: 10px;\n    border: 1px solid #ccc;\n    width: 375px;\n    outline: 0;\n}\n\n.search:focus {\n    color: #333;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy1kZW1vL3JlcG9zL2NvbXBvbmVudHMvcmVwb3MvcmVwb3MuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsc0JBQXNCO0lBQ3RCLFlBQVk7SUFDWixVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxXQUFXO0FBQ2YiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzLWRlbW8vcmVwb3MvY29tcG9uZW50cy9yZXBvcy9yZXBvcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNlYXJjaCB7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG4gICAgd2lkdGg6IDM3NXB4O1xuICAgIG91dGxpbmU6IDA7XG59XG5cbi5zZWFyY2g6Zm9jdXMge1xuICAgIGNvbG9yOiAjMzMzO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/modules-demo/repos/components/repos/repos.component.ts":
  /*!************************************************************************!*\
    !*** ./src/app/modules-demo/repos/components/repos/repos.component.ts ***!
    \************************************************************************/

  /*! exports provided: ReposComponent */

  /***/
  function srcAppModulesDemoReposComponentsReposReposComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ReposComponent", function () {
      return ReposComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _services_repos_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../services/repos.service */
    "./src/app/modules-demo/services/repos.service.ts");

    var ReposComponent =
    /*#__PURE__*/
    function () {
      function ReposComponent(repoService, formBuilder) {
        _classCallCheck(this, ReposComponent);

        this.repoService = repoService;
        this.formBuilder = formBuilder;
        this.repos = [];
        this.searchField = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]();
        this.searchForm = formBuilder.group({
          repo: this.searchField
        });
      }

      _createClass(ReposComponent, [{
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          this.searchInput.nativeElement.focus();
        }
      }, {
        key: "search",
        value: function search() {
          var _this = this;

          if (this.searchField.value) {
            this.repoService.searchRepo(this.searchField.value).subscribe(function (result) {
              _this.repos = result;
            });
          } else {
            this.repos = [];
          }
        }
      }]);

      return ReposComponent;
    }();

    ReposComponent.ctorParameters = function () {
      return [{
        type: _services_repos_service__WEBPACK_IMPORTED_MODULE_3__["RepoService"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('searchInput', {
      static: true
    })], ReposComponent.prototype, "searchInput", void 0);
    ReposComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-repos',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./repos.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/modules-demo/repos/components/repos/repos.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./repos.component.css */
      "./src/app/modules-demo/repos/components/repos/repos.component.css")).default]
    })], ReposComponent);
    /***/
  },

  /***/
  "./src/app/modules-demo/repos/pipes/repo.pipe.ts":
  /*!*******************************************************!*\
    !*** ./src/app/modules-demo/repos/pipes/repo.pipe.ts ***!
    \*******************************************************/

  /*! exports provided: RepoPipe */

  /***/
  function srcAppModulesDemoReposPipesRepoPipeTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RepoPipe", function () {
      return RepoPipe;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var RepoPipe =
    /*#__PURE__*/
    function () {
      function RepoPipe() {
        _classCallCheck(this, RepoPipe);
      }

      _createClass(RepoPipe, [{
        key: "transform",
        value: function transform(repo, type) {
          switch (type) {
            case 'title':
              if (repo.description && repo.homepage) {
                return "".concat(repo.description, " -- ").concat(repo.homepage);
              } else {
                return repo.description || repo.full_name || repo.name || '';
              }

            case 'album':
              if (repo.owner && repo.owner.avatar_url) {
                return repo.owner.avatar_url;
              } else {
                return "";
              }

          }
        }
      }]);

      return RepoPipe;
    }();

    RepoPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
      name: 'repoprint'
    })], RepoPipe);
    /***/
  },

  /***/
  "./src/app/modules-demo/repos/repos.module.ts":
  /*!****************************************************!*\
    !*** ./src/app/modules-demo/repos/repos.module.ts ***!
    \****************************************************/

  /*! exports provided: ReposModule */

  /***/
  function srcAppModulesDemoReposReposModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ReposModule", function () {
      return ReposModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _pipes_repo_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./pipes/repo.pipe */
    "./src/app/modules-demo/repos/pipes/repo.pipe.ts");
    /* harmony import */


    var _components_repo_list_repo_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./components/repo-list/repo-list.component */
    "./src/app/modules-demo/repos/components/repo-list/repo-list.component.ts");
    /* harmony import */


    var _components_repos_repos_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./components/repos/repos.component */
    "./src/app/modules-demo/repos/components/repos/repos.component.ts");
    /* harmony import */


    var _services_repos_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../services/repos.service */
    "./src/app/modules-demo/services/repos.service.ts");

    var ReposModule = function ReposModule() {
      _classCallCheck(this, ReposModule);
    };

    ReposModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]],
      declarations: [_components_repo_list_repo_list_component__WEBPACK_IMPORTED_MODULE_5__["RepoListComponent"], _components_repos_repos_component__WEBPACK_IMPORTED_MODULE_6__["ReposComponent"], _pipes_repo_pipe__WEBPACK_IMPORTED_MODULE_4__["RepoPipe"]],
      providers: [_services_repos_service__WEBPACK_IMPORTED_MODULE_7__["RepoService"]],
      exports: [_components_repos_repos_component__WEBPACK_IMPORTED_MODULE_6__["ReposComponent"]]
    })], ReposModule);
    /***/
  },

  /***/
  "./src/app/modules-demo/services/logger.service.ts":
  /*!*********************************************************!*\
    !*** ./src/app/modules-demo/services/logger.service.ts ***!
    \*********************************************************/

  /*! exports provided: Logger */

  /***/
  function srcAppModulesDemoServicesLoggerServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Logger", function () {
      return Logger;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var Logger =
    /*#__PURE__*/
    function () {
      function Logger() {
        _classCallCheck(this, Logger);

        this.infos = [];
        this.errors = [];
      }

      _createClass(Logger, [{
        key: "info",
        value: function info(message) {
          this.infos.push(message);
          console.info(message);
        }
      }, {
        key: "error",
        value: function error(message) {
          this.errors.push(message);
          console.error(message);
        }
      }]);

      return Logger;
    }();

    Logger = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()], Logger);
    /***/
  },

  /***/
  "./src/app/modules-demo/services/repos.service.ts":
  /*!********************************************************!*\
    !*** ./src/app/modules-demo/services/repos.service.ts ***!
    \********************************************************/

  /*! exports provided: RepoService */

  /***/
  function srcAppModulesDemoServicesReposServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RepoService", function () {
      return RepoService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");

    var RepoService =
    /*#__PURE__*/
    function () {
      function RepoService(http) {
        _classCallCheck(this, RepoService);

        this.http = http;
      }

      _createClass(RepoService, [{
        key: "searchRepo",
        value: function searchRepo(repo) {
          var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().set('q', repo);
          return this.http.get("https://api.github.com/search/repositories", {
            params: params
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (results) {
            return results.items;
          }));
        }
      }]);

      return RepoService;
    }();

    RepoService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    RepoService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()], RepoService);
    /***/
  }
}]);
//# sourceMappingURL=modules-demo-modules-module-es5.js.map