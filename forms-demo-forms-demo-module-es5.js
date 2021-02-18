function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["forms-demo-forms-demo-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/forms-demo/base/base.component.html":
  /*!*******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/forms-demo/base/base.component.html ***!
    \*******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppFormsDemoBaseBaseComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-header [navItems]=\"navModel\"></app-header>\n\n<app-login-form></app-login-form>\n\n<app-login-model-form></app-login-model-form>\n\n<app-model-form></app-model-form>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/forms-demo/login-form/login-form.component.html":
  /*!*******************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/forms-demo/login-form/login-form.component.html ***!
    \*******************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppFormsDemoLoginFormLoginFormComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container ph4 pb4 black-80 br3 mt6 ma3 center w-70\">\n  <p class=\"f3 b\">Login: Template based</p>\n  <form class=\"measure center\" #formRef=\"ngForm\" (ngSubmit)=\"onSubmit(formRef); formRef.reset()\">\n    <div class=\"mt3\">\n      <label for=\"userid\" class=\"db lh-copy f5\">Username</label>\n      <input type=\"text\"\n             name=\"userid\"\n             ngModel\n             required\n             class=\"pa1 ba b--black-20 br3 input-reset hover-bg-washed-blue hover-dark-blue w-100\">\n    </div>\n\n    <div class=\"mt3\">\n      <label for=\"password\" class=\"db lh-copy f5\">Password</label>\n      <input type=\"password\"\n             name=\"password\"\n             ngModel\n             required\n             minlength=\"5\"\n             class=\"pa1 ba b--black-20 br3 input-reset hover-bg-washed-blue hover-dark-blue w-100\">\n    </div>\n\n    <div class=\"mt3\">\n      <label for=\"remember\" >\n        <input type=\"checkbox\" name=\"remember\" ngModel class=\"lh-copy f5\">\n        Remember\n      </label>\n    </div>\n\n    <button class=\"link br2 bw3 btn-bg white fl mt3\" type=\"submit\" [disabled]=\"!formRef.valid\">Login</button>\n  </form>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/forms-demo/login-model-form/login-model-form.component.html":
  /*!*******************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/forms-demo/login-model-form/login-model-form.component.html ***!
    \*******************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppFormsDemoLoginModelFormLoginModelFormComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container ph4 pb4 black-80 br3 ma3 center w-70\">\n  <p class=\"f3 b\">Login: Template based</p>\n  <form #formRef=\"ngForm\" (ngSubmit)=\"onSubmit(formRef); formRef.reset()\" class=\"measure center\">\n    <div class=\"mt3\">\n      <label for=\"userid\" class=\"db lh-copy f5\">Username</label>\n      <input type=\"text\"\n             name=\"userid\"\n             [(ngModel)]=\"username\"\n             required\n             class=\"pa1 ba b--black-20 br3 input-reset hover-bg-washed-blue hover-dark-blue w-100\">\n    </div>\n\n    <div class=\"mt3\">\n      <label for=\"password\" class=\"db lh-copy f5\">Password</label>\n      <input type=\"password\"\n             name=\"password\"\n             [(ngModel)]=\"password\"\n             required\n             minlength=\"5\"\n             class=\"pa1 ba b--black-20 br3 input-reset hover-bg-washed-blue hover-dark-blue w-100\">\n    </div>\n\n    <div class=\"mt3\">\n      <label for=\"remember\" >\n        <input type=\"checkbox\" name=\"remember\" [(ngModel)]=\"remember\" class=\"fw6 lh-copy f5\">\n        Remember\n      </label>\n    </div>\n\n    <button class=\"link br2 ba bw3 btn-bg white fl mt3\" type=\"submit\" [disabled]=\"!formRef.valid\">Login</button>\n  </form>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/forms-demo/model-form/model-form.component.html":
  /*!*******************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/forms-demo/model-form/model-form.component.html ***!
    \*******************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppFormsDemoModelFormModelFormComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container ph4 pb4 black-80 br3 ma3 center w-70\">\n  <p class=\"f3 b\">New Client: Model driven</p>\n  <form class=\"measure center\" [formGroup]=\"fg\" (ngSubmit)=\"onSubmit(); fg.reset()\">\n    <div class=\"mt3\">\n      <label for=\"name\" class=\"db lh-copy f5\">Name</label>\n      <input type=\"text\"\n             formControlName=\"name\"\n             class=\"pa1 ba b--black-20 br3 input-reset hover-bg-washed-blue hover-dark-blue w-100\"\n             required />\n      <p *ngIf=\"fg.controls.name.errors && !fg.controls.name.untouched\" class=\"notify\">Name is required.</p>\n    </div>\n\n    <div class=\"mt3\">\n      <label for=\"surname\" class=\"db lh-copy f5\">Surname</label>\n      <input type=\"text\"\n             formControlName=\"surname\"\n             required\n             class=\"pa1 ba b--black-20 br3 input-reset hover-bg-washed-blue hover-dark-blue w-100\" />\n      <p *ngIf=\"fg.controls.surname.errors && !fg.controls.surname.untouched\" class=\"notify\">Surname is required.</p>\n    </div>\n\n    <div class=\"mt3\">\n      <label for=\"email\" class=\"db lh-copy f5\">Email</label>\n      <input type=\"text\"\n             formControlName=\"email\"\n             required\n             class=\"pa1 ba b--black-20 br3 input-reset hover-bg-washed-blue hover-dark-blue w-100\" />\n      <p *ngIf=\"fg.controls.email.errors && !fg.controls.email.untouched\" class=\"notify\">Email is required</p>\n    </div>\n\n    <div class=\"mt3\">\n      <label class=\"db\">\n        <input type=\"radio\"\n               value=\"male\"\n               formControlName=\"gender\" /> Male\n      </label>\n      <label class=\"db pt1\">\n        <input type=\"radio\"\n               value=\"female\"\n               formControlName=\"gender\" /> Female\n      </label>\n    </div>\n\n    <button type=\"submit\" class=\"link br2 bw3 btn-bg white fl mt3\" [disabled]=\"!fg.valid\">Save</button>\n    <div class=\"fl mt4\">\n      <p>\n        Form Status: {{ fg.status }}\n      </p>\n    </div>\n  </form>\n</div>\n";
    /***/
  },

  /***/
  "./src/app/forms-demo/base/base.component.css":
  /*!****************************************************!*\
    !*** ./src/app/forms-demo/base/base.component.css ***!
    \****************************************************/

  /*! exports provided: default */

  /***/
  function srcAppFormsDemoBaseBaseComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Zvcm1zLWRlbW8vYmFzZS9iYXNlLmNvbXBvbmVudC5jc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/forms-demo/base/base.component.ts":
  /*!***************************************************!*\
    !*** ./src/app/forms-demo/base/base.component.ts ***!
    \***************************************************/

  /*! exports provided: BaseComponent */

  /***/
  function srcAppFormsDemoBaseBaseComponentTs(module, __webpack_exports__, __webpack_require__) {
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
        title: 'Augury Forms Demo',
        defaultStyle: true,
        headerOnly: true
      }];
    };

    BaseComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-forms-root',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./base.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/forms-demo/base/base.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./base.component.css */
      "./src/app/forms-demo/base/base.component.css")).default]
    })], BaseComponent);
    /***/
  },

  /***/
  "./src/app/forms-demo/forms-demo-routing.module.ts":
  /*!*********************************************************!*\
    !*** ./src/app/forms-demo/forms-demo-routing.module.ts ***!
    \*********************************************************/

  /*! exports provided: FormsDemoRoutingModule */

  /***/
  function srcAppFormsDemoFormsDemoRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FormsDemoRoutingModule", function () {
      return FormsDemoRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _base_base_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./base/base.component */
    "./src/app/forms-demo/base/base.component.ts");

    var routes = [{
      path: '',
      component: _base_base_component__WEBPACK_IMPORTED_MODULE_3__["BaseComponent"]
    }];

    var FormsDemoRoutingModule = function FormsDemoRoutingModule() {
      _classCallCheck(this, FormsDemoRoutingModule);
    };

    FormsDemoRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    })], FormsDemoRoutingModule);
    /***/
  },

  /***/
  "./src/app/forms-demo/forms-demo.module.ts":
  /*!*************************************************!*\
    !*** ./src/app/forms-demo/forms-demo.module.ts ***!
    \*************************************************/

  /*! exports provided: FormsDemoModule */

  /***/
  function srcAppFormsDemoFormsDemoModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FormsDemoModule", function () {
      return FormsDemoModule;
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


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _base_base_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./base/base.component */
    "./src/app/forms-demo/base/base.component.ts");
    /* harmony import */


    var _login_form_login_form_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./login-form/login-form.component */
    "./src/app/forms-demo/login-form/login-form.component.ts");
    /* harmony import */


    var _model_form_model_form_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./model-form/model-form.component */
    "./src/app/forms-demo/model-form/model-form.component.ts");
    /* harmony import */


    var _login_model_form_login_model_form_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./login-model-form/login-model-form.component */
    "./src/app/forms-demo/login-model-form/login-model-form.component.ts");
    /* harmony import */


    var _forms_demo_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./forms-demo-routing.module */
    "./src/app/forms-demo/forms-demo-routing.module.ts");
    /* harmony import */


    var _shared_shared_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../shared/shared.module */
    "./src/app/shared/shared.module.ts");

    var FormsDemoModule = function FormsDemoModule() {
      _classCallCheck(this, FormsDemoModule);
    };

    FormsDemoModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_base_base_component__WEBPACK_IMPORTED_MODULE_4__["BaseComponent"], _login_form_login_form_component__WEBPACK_IMPORTED_MODULE_5__["LoginFormComponent"], _model_form_model_form_component__WEBPACK_IMPORTED_MODULE_6__["ModelFormComponent"], _login_model_form_login_model_form_component__WEBPACK_IMPORTED_MODULE_7__["LoginModelFormComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_9__["SharedModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _forms_demo_routing_module__WEBPACK_IMPORTED_MODULE_8__["FormsDemoRoutingModule"]]
    })], FormsDemoModule);
    /***/
  },

  /***/
  "./src/app/forms-demo/login-form/login-form.component.css":
  /*!****************************************************************!*\
    !*** ./src/app/forms-demo/login-form/login-form.component.css ***!
    \****************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppFormsDemoLoginFormLoginFormComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ":host {\n  display: flex;\n}\n\n.container {\n  background-color: #E2CEFF;\n}\n\nbutton[disabled] {\n  color: gray;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9ybXMtZGVtby9sb2dpbi1mb3JtL2xvZ2luLWZvcm0uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLFdBQVc7QUFDYiIsImZpbGUiOiJzcmMvYXBwL2Zvcm1zLWRlbW8vbG9naW4tZm9ybS9sb2dpbi1mb3JtLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG5cbi5jb250YWluZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRTJDRUZGO1xufVxuXG5idXR0b25bZGlzYWJsZWRdIHtcbiAgY29sb3I6IGdyYXk7XG59XG4iXX0= */";
    /***/
  },

  /***/
  "./src/app/forms-demo/login-form/login-form.component.ts":
  /*!***************************************************************!*\
    !*** ./src/app/forms-demo/login-form/login-form.component.ts ***!
    \***************************************************************/

  /*! exports provided: LoginFormComponent */

  /***/
  function srcAppFormsDemoLoginFormLoginFormComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginFormComponent", function () {
      return LoginFormComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var LoginFormComponent =
    /*#__PURE__*/
    function () {
      function LoginFormComponent() {
        _classCallCheck(this, LoginFormComponent);
      }

      _createClass(LoginFormComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "onSubmit",
        value: function onSubmit(form) {
          console.log(form.value);
        }
      }]);

      return LoginFormComponent;
    }();

    LoginFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-login-form',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./login-form.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/forms-demo/login-form/login-form.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./login-form.component.css */
      "./src/app/forms-demo/login-form/login-form.component.css")).default]
    })], LoginFormComponent);
    /***/
  },

  /***/
  "./src/app/forms-demo/login-model-form/login-model-form.component.css":
  /*!****************************************************************************!*\
    !*** ./src/app/forms-demo/login-model-form/login-model-form.component.css ***!
    \****************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppFormsDemoLoginModelFormLoginModelFormComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ":host {\n  display: flex;\n}\n\n.container {\n  background-color: #E2CEFF;\n}\n\nbutton[disabled] {\n  color: gray;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9ybXMtZGVtby9sb2dpbi1tb2RlbC1mb3JtL2xvZ2luLW1vZGVsLWZvcm0uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLFdBQVc7QUFDYiIsImZpbGUiOiJzcmMvYXBwL2Zvcm1zLWRlbW8vbG9naW4tbW9kZWwtZm9ybS9sb2dpbi1tb2RlbC1mb3JtLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG5cbi5jb250YWluZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRTJDRUZGO1xufVxuXG5idXR0b25bZGlzYWJsZWRdIHtcbiAgY29sb3I6IGdyYXk7XG59XG4iXX0= */";
    /***/
  },

  /***/
  "./src/app/forms-demo/login-model-form/login-model-form.component.ts":
  /*!***************************************************************************!*\
    !*** ./src/app/forms-demo/login-model-form/login-model-form.component.ts ***!
    \***************************************************************************/

  /*! exports provided: LoginModelFormComponent */

  /***/
  function srcAppFormsDemoLoginModelFormLoginModelFormComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginModelFormComponent", function () {
      return LoginModelFormComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var LoginModelFormComponent =
    /*#__PURE__*/
    function () {
      function LoginModelFormComponent() {
        _classCallCheck(this, LoginModelFormComponent);

        this.username = 'Shivaji';
        this.password = 'ReadySetGo';
        this.remember = true;
      }

      _createClass(LoginModelFormComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "onSubmit",
        value: function onSubmit(form) {
          console.log(form.value);
        }
      }]);

      return LoginModelFormComponent;
    }();

    LoginModelFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-login-model-form',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./login-model-form.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/forms-demo/login-model-form/login-model-form.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./login-model-form.component.css */
      "./src/app/forms-demo/login-model-form/login-model-form.component.css")).default]
    })], LoginModelFormComponent);
    /***/
  },

  /***/
  "./src/app/forms-demo/model-form/model-form.component.css":
  /*!****************************************************************!*\
    !*** ./src/app/forms-demo/model-form/model-form.component.css ***!
    \****************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppFormsDemoModelFormModelFormComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ":host {\n  display: flex;\n}\n\n.container {\n  background-color: #E2CEFF;\n}\n\nbutton[disabled] {\n  color: gray;\n}\n\n.notify {\n  color: red;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9ybXMtZGVtby9tb2RlbC1mb3JtL21vZGVsLWZvcm0uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTtFQUNFLFVBQVU7QUFDWiIsImZpbGUiOiJzcmMvYXBwL2Zvcm1zLWRlbW8vbW9kZWwtZm9ybS9tb2RlbC1mb3JtLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG5cbi5jb250YWluZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRTJDRUZGO1xufVxuXG5idXR0b25bZGlzYWJsZWRdIHtcbiAgY29sb3I6IGdyYXk7XG59XG5cbi5ub3RpZnkge1xuICBjb2xvcjogcmVkO1xufVxuIl19 */";
    /***/
  },

  /***/
  "./src/app/forms-demo/model-form/model-form.component.ts":
  /*!***************************************************************!*\
    !*** ./src/app/forms-demo/model-form/model-form.component.ts ***!
    \***************************************************************/

  /*! exports provided: ModelFormComponent */

  /***/
  function srcAppFormsDemoModelFormModelFormComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ModelFormComponent", function () {
      return ModelFormComponent;
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

    var ModelFormComponent =
    /*#__PURE__*/
    function () {
      function ModelFormComponent(formBuilder) {
        _classCallCheck(this, ModelFormComponent);

        this.formBuilder = formBuilder;
        this.fg = this.formBuilder.group({
          name: ['Tammy', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
          surname: ['Trinh', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
          email: ['tam@york.tv', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
          gender: ['female', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
      }

      _createClass(ModelFormComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "onSubmit",
        value: function onSubmit() {
          console.log(this.fg);
          console.log(this.fg.value);
        }
      }]);

      return ModelFormComponent;
    }();

    ModelFormComponent.ctorParameters = function () {
      return [{
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
      }];
    };

    ModelFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-model-form',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./model-form.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/forms-demo/model-form/model-form.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./model-form.component.css */
      "./src/app/forms-demo/model-form/model-form.component.css")).default]
    })], ModelFormComponent);
    /***/
  }
}]);
//# sourceMappingURL=forms-demo-forms-demo-module-es5.js.map