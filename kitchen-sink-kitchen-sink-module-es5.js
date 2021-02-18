function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["kitchen-sink-kitchen-sink-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/kitchen-sink/home/components/home/home.component.html":
  /*!*************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/kitchen-sink/home/components/home/home.component.html ***!
    \*************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppKitchenSinkHomeComponentsHomeHomeComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"flex vh-100\">\n  <div class=\"w-20 bg-light-yellow\">\n    <ul class=\"list\">\n      <li class=\"pa2\" [ngClass]=\"{ active: path == 'home' }\">\n        <a [routerLink]=\"['/kitchen-sink']\">Home</a>\n      </li>\n      <!-- <li class=\"pa2\" [ngClass]=\"{ active: path == 'welcome' }\">\n        <a [routerLink]=\"['/kitchen-sink', 'lazy-load/lazy']\">Lazy Loaded Module</a>\n      </li> -->\n      <li class=\"pa2\" [ngClass]=\"{ active: path == 'control-form' }\">\n        <a [routerLink]=\"['/kitchen-sink', 'control-form']\">ControlForm</a>\n      </li>\n      <li class=\"pa2\" [ngClass]=\"{ active: path == 'my-form' }\">\n        <a [routerLink]=\"['/kitchen-sink', 'my-form']\">Form Component</a>\n      </li>\n      <li class=\"pa2\" [ngClass]=\"{ active: path == 'form2' }\">\n        <a [routerLink]=\"['/kitchen-sink', 'form2']\">NgModel Form</a>\n      </li>\n      <li class=\"pa2\" [ngClass]=\"{ active: path == 'input-output' }\">\n        <a [routerLink]=\"['/kitchen-sink', 'input-output']\">InputOutput</a>\n      </li>\n      <li class=\"pa2\" [ngClass]=\"{ active: path == 'todo-app' }\">\n        <a [routerLink]=\"['/kitchen-sink', 'todo-app']\">TodoApp</a>\n      </li>\n      <li class=\"pa2\" [ngClass]=\"{ active: path == 'di-tree' }\">\n        <a [routerLink]=\"['/kitchen-sink', 'di-tree']\">DITree</a>\n      </li>\n      <!-- <li class=\"pa2\" [ngClass]=\"{ active: path == 'angular-directives' }\">\n        <a [routerLink]=\"['/kitchen-sink', 'angular-directives']\">AngularDirectives</a>\n      </li>\n      <li class=\"pa2\" [ngClass]=\"{ active: path == 'change-detection' }\">\n        <a [routerLink]=\"['/kitchen-sink', 'change-detection']\">ChangeDetection</a>\n      </li>\n      <li class=\"pa2\" [ngClass]=\"{ active: path == 'stress-tester' }\">\n        <a [routerLink]=\"['/kitchen-sink', './stress-tester']\">StressTester</a>\n      </li>\n      <li class=\"pa2\" [ngClass]=\"{ active: path == 'metadata-test' }\">\n        <a [routerLink]=\"['/kitchen-sink', './metadata-test']\">MetadataTest</a>\n      </li> -->\n    </ul>\n  </div>\n  <div class=\"w-80 pa3 bg-light-green\">\n    <h1>{{ title }}</h1>\n    <router-outlet></router-outlet>\n  </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/kitchen-sink/input-output/components/counter/counter.component.html":
  /*!***************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/kitchen-sink/input-output/components/counter/counter.component.html ***!
    \***************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppKitchenSinkInputOutputComponentsCounterCounterComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div>\n  <h4>Count: {{ count }}</h4>\n  <button class=\"bn br4 pt2 pb2 pl4 pr4 white bg-dark-red\" (click)=\"increment()\">\n    Increment\n  </button>\n  <br />\n  <br />\n  <button class=\"bn br4 pt2 pb2 pl4 pr4 white bg-dark-blue\" (click)=\"sendMessage()\">\n    SendMessage\n  </button>\n  <br />\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/kitchen-sink/input-output/components/input-output/input-output.component.html":
  /*!*************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/kitchen-sink/input-output/components/input-output/input-output.component.html ***!
    \*************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppKitchenSinkInputOutputComponentsInputOutputInputOutputComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<h4>Parent Num: {{ num }}</h4>\n<h4>Parent Count: {{ parentCount }}</h4>\n<counter [count]=\"num\" (result)=\"onChange($event)\" (displayMessage)=\"displayMessage($event)\"> </counter>\n<div *ngIf=\"name && message\" class=\"pt2 pb2\">\n  <h4>{{ name }}: {{ message }}</h4>\n</div>\n<br />\n\n<button\n  class=\"br4 pt2 pb2 pl4 pr4 white bg-dark-green bn\"\n  [ngClass]=\"{ active: isOn, disabled: isDisabled }\"\n  (click)=\"toggle(!isOn)\"\n>\n  Click me!\n</button>\n";
    /***/
  },

  /***/
  "./src/app/kitchen-sink/angular-directives/components/angular-directives.ts":
  /*!**********************************************************************************!*\
    !*** ./src/app/kitchen-sink/angular-directives/components/angular-directives.ts ***!
    \**********************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppKitchenSinkAngularDirectivesComponentsAngularDirectivesTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var AngularDirectivesComponent = function AngularDirectivesComponent() {
      _classCallCheck(this, AngularDirectivesComponent);
    };

    AngularDirectivesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'angular-directives',
      template: "\n  <div>\n    <ngif-directive></ngif-directive>\n    <hr/>\n    <ngfor-directive></ngfor-directive>\n    <hr/>\n    <ngswitch-directive></ngswitch-directive>\n    <hr/>\n    <ngclass-directive></ngclass-directive>\n    <hr/>\n    <ngstyle-directive></ngstyle-directive>\n    <hr/>\n    <nglocalization-directive></nglocalization-directive>\n  </div>\n  "
    })], AngularDirectivesComponent);
    /* harmony default export */

    __webpack_exports__["default"] = AngularDirectivesComponent;
    /***/
  },

  /***/
  "./src/app/kitchen-sink/angular-directives/components/hello-directives.ts":
  /*!********************************************************************************!*\
    !*** ./src/app/kitchen-sink/angular-directives/components/hello-directives.ts ***!
    \********************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppKitchenSinkAngularDirectivesComponentsHelloDirectivesTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var HelloDirectives = function HelloDirectives() {
      _classCallCheck(this, HelloDirectives);
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], HelloDirectives.prototype, "msg", void 0);
    HelloDirectives = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'hello-directives',
      template: "\n  <h4>\n    Message: {{msg}}\n  </h4>\n  "
    })], HelloDirectives);
    /* harmony default export */

    __webpack_exports__["default"] = HelloDirectives;
    /***/
  },

  /***/
  "./src/app/kitchen-sink/angular-directives/components/ngclass-directive.ts":
  /*!*********************************************************************************!*\
    !*** ./src/app/kitchen-sink/angular-directives/components/ngclass-directive.ts ***!
    \*********************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppKitchenSinkAngularDirectivesComponentsNgclassDirectiveTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var NgClassDirective =
    /*#__PURE__*/
    function () {
      function NgClassDirective() {
        _classCallCheck(this, NgClassDirective);

        this.isOn = false;
        this.isDisabled = false;
      }

      _createClass(NgClassDirective, [{
        key: "toggle",
        value: function toggle(newState) {
          if (!this.isDisabled) {
            this.isOn = newState;
          }
        }
      }]);

      return NgClassDirective;
    }();

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], NgClassDirective.prototype, "isDisabled", void 0);
    NgClassDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'ngclass-directive',
      template: "\n     <div class=\"button\"\n       [ngClass]=\"{active: isOn, disabled: isDisabled}\"\n         (click)=\"toggle(!isOn)\">\n         <h4>Click me!</h4>\n     </div>",
      styles: ["\n    .button {\n      padding: 10px;\n      border: medium solid black;\n    }\n\n    .active {\n      background-color: red;\n    }\n\n    .disabled {\n      color: gray;\n      border: medium solid gray;\n    }\n  "]
    })], NgClassDirective);
    /* harmony default export */

    __webpack_exports__["default"] = NgClassDirective;
    /***/
  },

  /***/
  "./src/app/kitchen-sink/angular-directives/components/ngfor-directive.ts":
  /*!*******************************************************************************!*\
    !*** ./src/app/kitchen-sink/angular-directives/components/ngfor-directive.ts ***!
    \*******************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppKitchenSinkAngularDirectivesComponentsNgforDirectiveTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var NgForDirective = function NgForDirective() {
      _classCallCheck(this, NgForDirective);

      this.names = ['John', 'Sam', 'Mike', 'Sumit', 'Igor'];
    };

    NgForDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'ngfor-directive',
      template: "\n  <div>\n     <hello-directives *ngFor=\"let name of names\" [msg]=\"'Hello from ' + name\">\n     </hello-directives>\n  </div>\n  "
    })], NgForDirective);
    /* harmony default export */

    __webpack_exports__["default"] = NgForDirective;
    /***/
  },

  /***/
  "./src/app/kitchen-sink/angular-directives/components/ngif-directive.ts":
  /*!******************************************************************************!*\
    !*** ./src/app/kitchen-sink/angular-directives/components/ngif-directive.ts ***!
    \******************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppKitchenSinkAngularDirectivesComponentsNgifDirectiveTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var NgIfDirective =
    /*#__PURE__*/
    function () {
      function NgIfDirective() {
        _classCallCheck(this, NgIfDirective);

        this.sayHello = false;
      }

      _createClass(NgIfDirective, [{
        key: "toggle",
        value: function toggle() {
          this.sayHello = !this.sayHello;
        }
      }]);

      return NgIfDirective;
    }();

    NgIfDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'ngif-directive',
      template: "\n  <div>\n    <hello-directives msg=\"Hello from John!!\" *ngIf=\"sayHello\">\n    </hello-directives>\n\n    <hello-directives msg=\"Hi from John!!\" *ngIf=\"!sayHello\">\n    </hello-directives>\n\n    <button class=\"btn btn-primary\"\n       (click)=\"toggle()\">\n      {{sayHello ? 'Say Hi': 'Say Hello'}}\n    </button>\n  </div>\n  "
    })], NgIfDirective);
    /* harmony default export */

    __webpack_exports__["default"] = NgIfDirective;
    /***/
  },

  /***/
  "./src/app/kitchen-sink/angular-directives/components/nglocalization-directive.ts":
  /*!****************************************************************************************!*\
    !*** ./src/app/kitchen-sink/angular-directives/components/nglocalization-directive.ts ***!
    \****************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppKitchenSinkAngularDirectivesComponentsNglocalizationDirectiveTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var NgLocalizationDirective =
    /*#__PURE__*/
    function () {
      function NgLocalizationDirective() {
        _classCallCheck(this, NgLocalizationDirective);

        this.value = 'init';
      }

      _createClass(NgLocalizationDirective, [{
        key: "inc",
        value: function inc() {
          this.value = this.value === 'init' ? 0 : this.value + 1;
        }
      }]);

      return NgLocalizationDirective;
    }();

    NgLocalizationDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'nglocalization-directive',
      template: "\n    <h4>Value = {{value}}</h4>\n    <button class=\"btn btn-warning\" (click)=\"inc()\">Increment</button>\n    <h4 [ngPlural]=\"value\">\n      <ng-template ngPluralCase=\"=0\">there is nothing</ng-template>\n      <ng-template ngPluralCase=\"=1\">there is one</ng-template>\n      <ng-template ngPluralCase=\"few\">there are a few</ng-template>\n      <ng-template ngPluralCase=\"other\">there is some number</ng-template>\n    </h4>\n  "
    })], NgLocalizationDirective);
    /* harmony default export */

    __webpack_exports__["default"] = NgLocalizationDirective;
    /***/
  },

  /***/
  "./src/app/kitchen-sink/angular-directives/components/ngstyle-directive.ts":
  /*!*********************************************************************************!*\
    !*** ./src/app/kitchen-sink/angular-directives/components/ngstyle-directive.ts ***!
    \*********************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppKitchenSinkAngularDirectivesComponentsNgstyleDirectiveTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var NgStyleDirective =
    /*#__PURE__*/
    function () {
      function NgStyleDirective() {
        _classCallCheck(this, NgStyleDirective);

        this.style = 'normal';
        this.weight = 'normal';
        this.size = '20px';
      }

      _createClass(NgStyleDirective, [{
        key: "changeStyle",
        value: function changeStyle($event) {
          this.style = $event.target.checked ? 'italic' : 'normal';
        }
      }, {
        key: "changeWeight",
        value: function changeWeight($event) {
          this.weight = $event.target.checked ? 'bold' : 'normal';
        }
      }]);

      return NgStyleDirective;
    }();

    NgStyleDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'ngstyle-directive',
      template: "\n   <h1 [ngStyle]=\"{'font-style': style,\n    'font-size': size, 'font-weight': weight}\">\n     Change style of this text!\n   </h1>\n\n   <hr>\n   <label>Italic: <input type=\"checkbox\" (change)=\"changeStyle($event)\"></label>\n   <label>Bold: <input type=\"checkbox\" (change)=\"changeWeight($event)\"></label>\n   <label>Size: <input type=\"text\" [value]=\"size\"\n   (change)=\"size = $event.target.value\"></label>\n "
    })], NgStyleDirective);
    /* harmony default export */

    __webpack_exports__["default"] = NgStyleDirective;
    /***/
  },

  /***/
  "./src/app/kitchen-sink/angular-directives/components/ngswitch-directive.ts":
  /*!**********************************************************************************!*\
    !*** ./src/app/kitchen-sink/angular-directives/components/ngswitch-directive.ts ***!
    \**********************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppKitchenSinkAngularDirectivesComponentsNgswitchDirectiveTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var NgSwitchDirective =
    /*#__PURE__*/
    function () {
      function NgSwitchDirective() {
        _classCallCheck(this, NgSwitchDirective);

        this.color = 'red';
        this.colors = ['red', 'green', 'yellow', 'blue', 'grey', 'aaa', 'bbb'];
      }

      _createClass(NgSwitchDirective, [{
        key: "switch",
        value: function _switch() {
          var random = parseInt(Math.random() * 6 + '', 10);
          this.color = this.colors[random];
        }
      }]);

      return NgSwitchDirective;
    }();

    NgSwitchDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'ngswitch-directive',
      template: "\n  <div>\n     <div class=\"container\" [ngSwitch]=\"color\">\n        <hello-directives *ngSwitchCase=\"'red'\" [msg]=\"'Color is Red'\">\n        </hello-directives>\n\n        <hello-directives *ngSwitchCase=\"'green'\" [msg]=\"'Color is Green'\">\n        </hello-directives>\n\n        <hello-directives *ngSwitchCase=\"'yellow'\" [msg]=\"'Color is Yellow'\">\n        </hello-directives>\n\n        <hello-directives *ngSwitchCase=\"'blue'\" [msg]=\"'Color is Blue'\">\n        </hello-directives>\n\n        <hello-directives *ngSwitchCase=\"'grey'\" [msg]=\"'Color is Grey'\">\n        </hello-directives>\n\n        <hello-directives *ngSwitchDefault [msg]=\"'No Color Selected'\">\n        </hello-directives>\n     </div>\n     <button class=\"btn btn-success\" (click)=\"switch()\">Switch Color</button>\n  </div>\n  "
    })], NgSwitchDirective);
    /* harmony default export */

    __webpack_exports__["default"] = NgSwitchDirective;
    /***/
  },

  /***/
  "./src/app/kitchen-sink/angular-directives/index.ts":
  /*!**********************************************************!*\
    !*** ./src/app/kitchen-sink/angular-directives/index.ts ***!
    \**********************************************************/

  /*! exports provided: ANGULAR_DIRECTIVES_COMPONENTS, AngularDirectivesComponent */

  /***/
  function srcAppKitchenSinkAngularDirectivesIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ANGULAR_DIRECTIVES_COMPONENTS", function () {
      return ANGULAR_DIRECTIVES_COMPONENTS;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _components_angular_directives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./components/angular-directives */
    "./src/app/kitchen-sink/angular-directives/components/angular-directives.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "AngularDirectivesComponent", function () {
      return _components_angular_directives__WEBPACK_IMPORTED_MODULE_1__["default"];
    });
    /* harmony import */


    var _components_hello_directives__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./components/hello-directives */
    "./src/app/kitchen-sink/angular-directives/components/hello-directives.ts");
    /* harmony import */


    var _components_ngclass_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./components/ngclass-directive */
    "./src/app/kitchen-sink/angular-directives/components/ngclass-directive.ts");
    /* harmony import */


    var _components_ngfor_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./components/ngfor-directive */
    "./src/app/kitchen-sink/angular-directives/components/ngfor-directive.ts");
    /* harmony import */


    var _components_ngif_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./components/ngif-directive */
    "./src/app/kitchen-sink/angular-directives/components/ngif-directive.ts");
    /* harmony import */


    var _components_nglocalization_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./components/nglocalization-directive */
    "./src/app/kitchen-sink/angular-directives/components/nglocalization-directive.ts");
    /* harmony import */


    var _components_ngstyle_directive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./components/ngstyle-directive */
    "./src/app/kitchen-sink/angular-directives/components/ngstyle-directive.ts");
    /* harmony import */


    var _components_ngswitch_directive__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./components/ngswitch-directive */
    "./src/app/kitchen-sink/angular-directives/components/ngswitch-directive.ts");

    var ANGULAR_DIRECTIVES_COMPONENTS = [_components_angular_directives__WEBPACK_IMPORTED_MODULE_1__["default"], _components_hello_directives__WEBPACK_IMPORTED_MODULE_2__["default"], _components_ngclass_directive__WEBPACK_IMPORTED_MODULE_3__["default"], _components_ngfor_directive__WEBPACK_IMPORTED_MODULE_4__["default"], _components_ngif_directive__WEBPACK_IMPORTED_MODULE_5__["default"], _components_nglocalization_directive__WEBPACK_IMPORTED_MODULE_6__["default"], _components_ngstyle_directive__WEBPACK_IMPORTED_MODULE_7__["default"], _components_ngswitch_directive__WEBPACK_IMPORTED_MODULE_8__["default"]];
    /***/
  },

  /***/
  "./src/app/kitchen-sink/change-detection/components/change-detection.ts":
  /*!******************************************************************************!*\
    !*** ./src/app/kitchen-sink/change-detection/components/change-detection.ts ***!
    \******************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppKitchenSinkChangeDetectionComponentsChangeDetectionTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _models_user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../models/user */
    "./src/app/kitchen-sink/change-detection/models/user.ts");

    var ChangeDetectionComponent =
    /*#__PURE__*/
    function () {
      function ChangeDetectionComponent() {
        _classCallCheck(this, ChangeDetectionComponent);

        this.user = new _models_user__WEBPACK_IMPORTED_MODULE_2__["User"](1, 'John Doe', 'john@doe.com');
      }

      _createClass(ChangeDetectionComponent, [{
        key: "reset",
        value: function reset() {
          this.user = new _models_user__WEBPACK_IMPORTED_MODULE_2__["User"](1, 'John Doe', 'john@doe.com');
        }
      }, {
        key: "makeUserOnline",
        value: function makeUserOnline(type) {
          if (type === 0) {
            this.user.isOnline = true;
          } else if (type === 1) {
            this.user = Object.assign({}, this.user, {
              isOnline: true
            });
          }
        }
      }]);

      return ChangeDetectionComponent;
    }();

    ChangeDetectionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'change-detection',
      template: "\n  <div>\n    <button type=\"button\" class=\"btn btn-danger\"\n      (click)=\"reset()\">\n      Reset\n    </button>\n\n    <button type=\"button\" class=\"btn btn-primary\"\n      (click)=\"makeUserOnline(0)\">\n      Make User Online (mutable)\n    </button>\n\n    <button type=\"button\" class=\"btn btn-success\"\n      (click)=\"makeUserOnline(1)\">\n      Make User Online (immutable)\n    </button>\n\n    <user-info-default [user]=\"user\">\n    </user-info-default>\n\n    <user-info-push [user]=\"user\">\n    </user-info-push>\n\n  </div>\n  "
    })], ChangeDetectionComponent);
    /* harmony default export */

    __webpack_exports__["default"] = ChangeDetectionComponent;
    /***/
  },

  /***/
  "./src/app/kitchen-sink/change-detection/components/user-info-default.ts":
  /*!*******************************************************************************!*\
    !*** ./src/app/kitchen-sink/change-detection/components/user-info-default.ts ***!
    \*******************************************************************************/

  /*! exports provided: UserInfoDefault */

  /***/
  function srcAppKitchenSinkChangeDetectionComponentsUserInfoDefaultTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserInfoDefault", function () {
      return UserInfoDefault;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var UserInfoDefault = function UserInfoDefault() {
      _classCallCheck(this, UserInfoDefault);
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], UserInfoDefault.prototype, "user", void 0);
    UserInfoDefault = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'user-info-default',
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].Default,
      template: "\n    <div [ngClass]=\"{'bg' : user.isOnline}\">\n      <h4>User Info Default</h4>\n      <p>\n        <label>User Id: {{user.id}} {{user.isOnline}}</label>\n      </p>\n    </div>",
      styles: ["\n    .bg {\n      background-color: red;\n    }\n  "]
    })], UserInfoDefault);
    /***/
  },

  /***/
  "./src/app/kitchen-sink/change-detection/components/user-info-push.ts":
  /*!****************************************************************************!*\
    !*** ./src/app/kitchen-sink/change-detection/components/user-info-push.ts ***!
    \****************************************************************************/

  /*! exports provided: UserInfoPush */

  /***/
  function srcAppKitchenSinkChangeDetectionComponentsUserInfoPushTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserInfoPush", function () {
      return UserInfoPush;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var UserInfoPush = function UserInfoPush() {
      _classCallCheck(this, UserInfoPush);
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], UserInfoPush.prototype, "user", void 0);
    UserInfoPush = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'user-info-push',
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
      template: "\n    <div [ngClass]=\"{'bg' : user.isOnline}\">\n      <h4>User Info OnPush</h4>\n      <p>\n        <label>User Id: {{user.id}} {{user.isOnline}}</label>\n      </p>\n    </div>",
      styles: ["\n    .bg {\n      background-color: red;\n    }\n  "]
    })], UserInfoPush);
    /***/
  },

  /***/
  "./src/app/kitchen-sink/change-detection/index.ts":
  /*!********************************************************!*\
    !*** ./src/app/kitchen-sink/change-detection/index.ts ***!
    \********************************************************/

  /*! exports provided: CHANGE_DETECTION_COMPONENTS, ChangeDetectionComponent */

  /***/
  function srcAppKitchenSinkChangeDetectionIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CHANGE_DETECTION_COMPONENTS", function () {
      return CHANGE_DETECTION_COMPONENTS;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _components_change_detection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./components/change-detection */
    "./src/app/kitchen-sink/change-detection/components/change-detection.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "ChangeDetectionComponent", function () {
      return _components_change_detection__WEBPACK_IMPORTED_MODULE_1__["default"];
    });
    /* harmony import */


    var _components_user_info_default__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./components/user-info-default */
    "./src/app/kitchen-sink/change-detection/components/user-info-default.ts");
    /* harmony import */


    var _components_user_info_push__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./components/user-info-push */
    "./src/app/kitchen-sink/change-detection/components/user-info-push.ts");

    var CHANGE_DETECTION_COMPONENTS = [_components_change_detection__WEBPACK_IMPORTED_MODULE_1__["default"], _components_user_info_push__WEBPACK_IMPORTED_MODULE_3__["UserInfoPush"], _components_user_info_default__WEBPACK_IMPORTED_MODULE_2__["UserInfoDefault"]];
    /***/
  },

  /***/
  "./src/app/kitchen-sink/change-detection/models/user.ts":
  /*!**************************************************************!*\
    !*** ./src/app/kitchen-sink/change-detection/models/user.ts ***!
    \**************************************************************/

  /*! exports provided: User */

  /***/
  function srcAppKitchenSinkChangeDetectionModelsUserTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "User", function () {
      return User;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var User = function User(id, name, email) {
      var isOnline = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;

      _classCallCheck(this, User);

      this.id = id;
      this.name = name;
      this.email = email;
      this.isOnline = isOnline;
    };
    /***/

  },

  /***/
  "./src/app/kitchen-sink/di-tree/components/component1.ts":
  /*!***************************************************************!*\
    !*** ./src/app/kitchen-sink/di-tree/components/component1.ts ***!
    \***************************************************************/

  /*! exports provided: Component1 */

  /***/
  function srcAppKitchenSinkDiTreeComponentsComponent1Ts(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Component1", function () {
      return Component1;
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


    var _services_service3__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../services/service3 */
    "./src/app/kitchen-sink/di-tree/services/service3.ts");

    var Component1 = function Component1(s3) {
      _classCallCheck(this, Component1);

      this.s3 = s3;
      this.service3Value = s3.value;
    };

    Component1.ctorParameters = function () {
      return [{
        type: _services_service3__WEBPACK_IMPORTED_MODULE_2__["Service3"]
      }];
    };

    Component1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'component1',
      template: "\n    <p class=\"link blue\">Component One</p>\n    <p>{{ service3Value }}</p>\n    <div class=\"pl4\">\n      <component3></component3>\n      <component4></component4>\n    </div>\n  "
    })], Component1);
    /***/
  },

  /***/
  "./src/app/kitchen-sink/di-tree/components/component2.ts":
  /*!***************************************************************!*\
    !*** ./src/app/kitchen-sink/di-tree/components/component2.ts ***!
    \***************************************************************/

  /*! exports provided: Component2 */

  /***/
  function srcAppKitchenSinkDiTreeComponentsComponent2Ts(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Component2", function () {
      return Component2;
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


    var _services_service2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../services/service2 */
    "./src/app/kitchen-sink/di-tree/services/service2.ts");

    var Component2 = function Component2(s2) {
      _classCallCheck(this, Component2);

      this.s2 = s2;
      this.service2Value = s2.value;
    };

    Component2.ctorParameters = function () {
      return [{
        type: _services_service2__WEBPACK_IMPORTED_MODULE_2__["Service2"]
      }];
    };

    Component2 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'component2',
      template: "\n    <p class=\"link blue\">\n      Component Two\n    </p>\n    <p>{{ service2Value }}</p>\n    <div class=\"pl4\">\n      <component5></component5>\n      <component6></component6>\n    </div>\n  "
    })], Component2);
    /***/
  },

  /***/
  "./src/app/kitchen-sink/di-tree/components/component3.ts":
  /*!***************************************************************!*\
    !*** ./src/app/kitchen-sink/di-tree/components/component3.ts ***!
    \***************************************************************/

  /*! exports provided: Component3 */

  /***/
  function srcAppKitchenSinkDiTreeComponentsComponent3Ts(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Component3", function () {
      return Component3;
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


    var _services_service1__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../services/service1 */
    "./src/app/kitchen-sink/di-tree/services/service1.ts");
    /* harmony import */


    var _services_service3__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../services/service3 */
    "./src/app/kitchen-sink/di-tree/services/service3.ts");

    var Component3 = function Component3(s1, s3) {
      _classCallCheck(this, Component3);

      this.s1 = s1;
      this.s3 = s3;
      this.service1Value = s1.value;
      this.service3Value = s3.value;
    };

    Component3.ctorParameters = function () {
      return [{
        type: _services_service1__WEBPACK_IMPORTED_MODULE_2__["Service1"]
      }, {
        type: _services_service3__WEBPACK_IMPORTED_MODULE_3__["Service3"],
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
          args: [Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(function () {
            return _services_service3__WEBPACK_IMPORTED_MODULE_3__["Service3"];
          })]
        }]
      }];
    };

    Component3 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'component3',
      template: "\n    <p class=\"link blue\">Component Three</p>\n    <p>{{ service1Value }}</p>\n    <p>{{ service3Value }}</p>\n  "
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(function () {
      return _services_service3__WEBPACK_IMPORTED_MODULE_3__["Service3"];
    })))], Component3);
    /***/
  },

  /***/
  "./src/app/kitchen-sink/di-tree/components/component4.ts":
  /*!***************************************************************!*\
    !*** ./src/app/kitchen-sink/di-tree/components/component4.ts ***!
    \***************************************************************/

  /*! exports provided: Component4 */

  /***/
  function srcAppKitchenSinkDiTreeComponentsComponent4Ts(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Component4", function () {
      return Component4;
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


    var _services_service1__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../services/service1 */
    "./src/app/kitchen-sink/di-tree/services/service1.ts");
    /* harmony import */


    var _services_service4__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../services/service4 */
    "./src/app/kitchen-sink/di-tree/services/service4.ts");

    var Component4 = function Component4(s1, s4) {
      _classCallCheck(this, Component4);

      this.s1 = s1;
      this.s4 = s4;
      this.service1Value = s1.value;
      this.service4Value = s4.value;
    };

    Component4.ctorParameters = function () {
      return [{
        type: _services_service1__WEBPACK_IMPORTED_MODULE_2__["Service1"]
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
          args: [_services_service4__WEBPACK_IMPORTED_MODULE_3__["Service4"]]
        }]
      }];
    };

    Component4 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'component4',
      template: "\n    <p class=\"link blue\">Component Four</p>\n    <p>{{ service1Value }}</p>\n    <p>{{ service4Value }}</p>\n  "
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_services_service4__WEBPACK_IMPORTED_MODULE_3__["Service4"]))], Component4);
    /***/
  },

  /***/
  "./src/app/kitchen-sink/di-tree/components/component5.ts":
  /*!***************************************************************!*\
    !*** ./src/app/kitchen-sink/di-tree/components/component5.ts ***!
    \***************************************************************/

  /*! exports provided: Component5 */

  /***/
  function srcAppKitchenSinkDiTreeComponentsComponent5Ts(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Component5", function () {
      return Component5;
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


    var _services_service3__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../services/service3 */
    "./src/app/kitchen-sink/di-tree/services/service3.ts");
    /* harmony import */


    var _services_service4__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../services/service4 */
    "./src/app/kitchen-sink/di-tree/services/service4.ts");

    var Component5 = function Component5(s3, s4) {
      _classCallCheck(this, Component5);

      this.s3 = s3;
      this.s4 = s4;
      this.service3Value = s3.value;
      this.service4Value = s4.value;
    };

    Component5.ctorParameters = function () {
      return [{
        type: _services_service3__WEBPACK_IMPORTED_MODULE_2__["Service3"]
      }, {
        type: _services_service4__WEBPACK_IMPORTED_MODULE_3__["Service4"]
      }];
    };

    Component5 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'component5',
      providers: [_services_service3__WEBPACK_IMPORTED_MODULE_2__["Service3"], _services_service4__WEBPACK_IMPORTED_MODULE_3__["Service4"]],
      template: "\n    <p class=\"link blue\">Component Five</p>\n    <p>{{ service3Value }}</p>\n    <p>{{ service4Value }}</p>\n  "
    })], Component5);
    /***/
  },

  /***/
  "./src/app/kitchen-sink/di-tree/components/component6.ts":
  /*!***************************************************************!*\
    !*** ./src/app/kitchen-sink/di-tree/components/component6.ts ***!
    \***************************************************************/

  /*! exports provided: Component6 */

  /***/
  function srcAppKitchenSinkDiTreeComponentsComponent6Ts(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Component6", function () {
      return Component6;
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


    var _services_service1__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../services/service1 */
    "./src/app/kitchen-sink/di-tree/services/service1.ts");
    /* harmony import */


    var _services_service2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../services/service2 */
    "./src/app/kitchen-sink/di-tree/services/service2.ts");

    var Component6 = function Component6(s1, s2) {
      _classCallCheck(this, Component6);

      this.s1 = s1;
      this.s2 = s2;
      this.service1Value = s1.value;
      this.service2Value = s2.value;
    };

    Component6.ctorParameters = function () {
      return [{
        type: _services_service1__WEBPACK_IMPORTED_MODULE_2__["Service1"]
      }, {
        type: _services_service2__WEBPACK_IMPORTED_MODULE_3__["Service2"]
      }];
    };

    Component6 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'component6',
      template: "\n    <p class=\"link blue\">Component Six</p>\n    <p>{{ service1Value }}</p>\n    <p>{{ service2Value }}</p>\n  "
    })], Component6);
    /***/
  },

  /***/
  "./src/app/kitchen-sink/di-tree/components/di-tree.ts":
  /*!************************************************************!*\
    !*** ./src/app/kitchen-sink/di-tree/components/di-tree.ts ***!
    \************************************************************/

  /*! exports provided: DITreeComponent */

  /***/
  function srcAppKitchenSinkDiTreeComponentsDiTreeTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DITreeComponent", function () {
      return DITreeComponent;
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


    var _services_service1__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../services/service1 */
    "./src/app/kitchen-sink/di-tree/services/service1.ts");

    var DITreeComponent = function DITreeComponent(s1) {
      _classCallCheck(this, DITreeComponent);

      this.s1 = s1;
      this.service1Value = s1.value;
    };

    DITreeComponent.ctorParameters = function () {
      return [{
        type: _services_service1__WEBPACK_IMPORTED_MODULE_2__["Service1"]
      }];
    };

    DITreeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'di-tree',
      template: "\n    <p class=\"link blue\">\n      DI App\n    </p>\n    <p>{{ service1Value }}</p>\n    <div class=\"pl4\">\n      <component1></component1>\n      <component2></component2>\n    </div>\n  "
    })], DITreeComponent);
    /***/
  },

  /***/
  "./src/app/kitchen-sink/di-tree/index.ts":
  /*!***********************************************!*\
    !*** ./src/app/kitchen-sink/di-tree/index.ts ***!
    \***********************************************/

  /*! exports provided: DI_TREE_SERVICES, DI_TREE_COMPONENTS, DITreeComponent */

  /***/
  function srcAppKitchenSinkDiTreeIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DI_TREE_SERVICES", function () {
      return DI_TREE_SERVICES;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DI_TREE_COMPONENTS", function () {
      return DI_TREE_COMPONENTS;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _components_di_tree__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./components/di-tree */
    "./src/app/kitchen-sink/di-tree/components/di-tree.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "DITreeComponent", function () {
      return _components_di_tree__WEBPACK_IMPORTED_MODULE_1__["DITreeComponent"];
    });
    /* harmony import */


    var _components_component1__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./components/component1 */
    "./src/app/kitchen-sink/di-tree/components/component1.ts");
    /* harmony import */


    var _components_component2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./components/component2 */
    "./src/app/kitchen-sink/di-tree/components/component2.ts");
    /* harmony import */


    var _components_component3__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./components/component3 */
    "./src/app/kitchen-sink/di-tree/components/component3.ts");
    /* harmony import */


    var _components_component4__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./components/component4 */
    "./src/app/kitchen-sink/di-tree/components/component4.ts");
    /* harmony import */


    var _components_component5__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./components/component5 */
    "./src/app/kitchen-sink/di-tree/components/component5.ts");
    /* harmony import */


    var _components_component6__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./components/component6 */
    "./src/app/kitchen-sink/di-tree/components/component6.ts");
    /* harmony import */


    var _services_service1__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./services/service1 */
    "./src/app/kitchen-sink/di-tree/services/service1.ts");
    /* harmony import */


    var _services_service2__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./services/service2 */
    "./src/app/kitchen-sink/di-tree/services/service2.ts");
    /* harmony import */


    var _services_service3__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./services/service3 */
    "./src/app/kitchen-sink/di-tree/services/service3.ts");
    /* harmony import */


    var _services_service4__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./services/service4 */
    "./src/app/kitchen-sink/di-tree/services/service4.ts");

    var DI_TREE_SERVICES = [_services_service1__WEBPACK_IMPORTED_MODULE_8__["Service1"], _services_service2__WEBPACK_IMPORTED_MODULE_9__["Service2"], _services_service3__WEBPACK_IMPORTED_MODULE_10__["Service3"], _services_service4__WEBPACK_IMPORTED_MODULE_11__["Service4"]];
    var DI_TREE_COMPONENTS = [_components_di_tree__WEBPACK_IMPORTED_MODULE_1__["DITreeComponent"], _components_component1__WEBPACK_IMPORTED_MODULE_2__["Component1"], _components_component2__WEBPACK_IMPORTED_MODULE_3__["Component2"], _components_component3__WEBPACK_IMPORTED_MODULE_4__["Component3"], _components_component4__WEBPACK_IMPORTED_MODULE_5__["Component4"], _components_component5__WEBPACK_IMPORTED_MODULE_6__["Component5"], _components_component6__WEBPACK_IMPORTED_MODULE_7__["Component6"]];
    /***/
  },

  /***/
  "./src/app/kitchen-sink/di-tree/services/service1.ts":
  /*!***********************************************************!*\
    !*** ./src/app/kitchen-sink/di-tree/services/service1.ts ***!
    \***********************************************************/

  /*! exports provided: Service1 */

  /***/
  function srcAppKitchenSinkDiTreeServicesService1Ts(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Service1", function () {
      return Service1;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var Service1 = function Service1() {
      _classCallCheck(this, Service1);

      this.value = 'Service One';
      this.value = this.value + ' Id: ' + Math.floor(Math.random() * 500);
    };
    /***/

  },

  /***/
  "./src/app/kitchen-sink/di-tree/services/service2.ts":
  /*!***********************************************************!*\
    !*** ./src/app/kitchen-sink/di-tree/services/service2.ts ***!
    \***********************************************************/

  /*! exports provided: Service2 */

  /***/
  function srcAppKitchenSinkDiTreeServicesService2Ts(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Service2", function () {
      return Service2;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var Service2 = function Service2() {
      _classCallCheck(this, Service2);

      this.value = 'Service Two';
      this.value = this.value + ' Id: ' + Math.floor(Math.random() * 500);
    };
    /***/

  },

  /***/
  "./src/app/kitchen-sink/di-tree/services/service3.ts":
  /*!***********************************************************!*\
    !*** ./src/app/kitchen-sink/di-tree/services/service3.ts ***!
    \***********************************************************/

  /*! exports provided: Service3 */

  /***/
  function srcAppKitchenSinkDiTreeServicesService3Ts(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Service3", function () {
      return Service3;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var Service3 = function Service3() {
      _classCallCheck(this, Service3);

      this.value = 'Service Three';
      this.value = this.value + ' Id: ' + Math.floor(Math.random() * 500);
    };
    /***/

  },

  /***/
  "./src/app/kitchen-sink/di-tree/services/service4.ts":
  /*!***********************************************************!*\
    !*** ./src/app/kitchen-sink/di-tree/services/service4.ts ***!
    \***********************************************************/

  /*! exports provided: Service4 */

  /***/
  function srcAppKitchenSinkDiTreeServicesService4Ts(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Service4", function () {
      return Service4;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var Service4 = function Service4() {
      _classCallCheck(this, Service4);

      this.value = 'Service Four';
      this.value = this.value + ' Id: ' + Math.floor(Math.random() * 500);
    };
    /***/

  },

  /***/
  "./src/app/kitchen-sink/forms/components/control-form/control-form.component.ts":
  /*!**************************************************************************************!*\
    !*** ./src/app/kitchen-sink/forms/components/control-form/control-form.component.ts ***!
    \**************************************************************************************/

  /*! exports provided: ControlFormComponent */

  /***/
  function srcAppKitchenSinkFormsComponentsControlFormControlFormComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ControlFormComponent", function () {
      return ControlFormComponent;
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

    var ControlFormComponent =
    /*#__PURE__*/
    function () {
      function ControlFormComponent() {
        _classCallCheck(this, ControlFormComponent);

        this.formGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
          name: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('John Doe'),
          email: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('johndoe@gmail.com')
        });
      }

      _createClass(ControlFormComponent, [{
        key: "onSubmit",
        value: function onSubmit(value) {
          console.log('you submitted value: ', value);
        }
      }]);

      return ControlFormComponent;
    }();

    ControlFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'control-form',
      template: "\n    <div>\n      <form (submit)=\"onSubmit(formGroup.value)\">\n        <div class=\"flex pa2\">\n          <label class=\"w-third\">Name</label>\n          <input\n            type=\"text\"\n            id=\"name\"\n            placeholder=\"Name\"\n            class=\"ba pa2 w-50\"\n            [formControl]=\"formGroup.controls['name']\"\n          />\n        </div>\n        <div class=\"flex pa2\">\n          <label class=\"w-third\">Email</label>\n          <input\n            type=\"text\"\n            id=\"email\"\n            placeholder=\"Email\"\n            class=\"ba pa2 w-50\"\n            [formControl]=\"formGroup.controls['email']\"\n          />\n        </div>\n        <div class=\"flex pa2\">\n          <label class=\"w-third\"></label>\n          <button type=\"submit\" class=\"br4 bn pt2 pb2 pl4 pr4 white bg-dark-green\">Submit</button>\n        </div>\n      </form>\n    </div>\n  "
    })], ControlFormComponent);
    /***/
  },

  /***/
  "./src/app/kitchen-sink/forms/components/form2/form2.component.ts":
  /*!************************************************************************!*\
    !*** ./src/app/kitchen-sink/forms/components/form2/form2.component.ts ***!
    \************************************************************************/

  /*! exports provided: Form2Component */

  /***/
  function srcAppKitchenSinkFormsComponentsForm2Form2ComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Form2Component", function () {
      return Form2Component;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var Form2Component =
    /*#__PURE__*/
    function () {
      function Form2Component() {
        _classCallCheck(this, Form2Component);

        this.myform = {};
      }

      _createClass(Form2Component, [{
        key: "onSubmit",
        value: function onSubmit(myform) {
          console.log(myform);
        }
      }]);

      return Form2Component;
    }();

    Form2Component = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'form2',
      template: "\n    <div>\n      <form (submit)=\"onSubmit(myform)\">\n        <div class=\"flex pa2\">\n          <label class=\"w-third\">Description</label>\n          <input type=\"text\" [(ngModel)]=\"myform.description\" name=\"description\" required class=\"ba pa2 w-50\" />\n        </div>\n        <div class=\"flex pa2\">\n          <label class=\"w-third\">Points</label>\n          <input\n            type=\"number\"\n            min=\"1\"\n            max=\"10\"\n            step=\"1\"\n            required\n            name=\"points\"\n            [(ngModel)]=\"myform.points\"\n            class=\"ba pa2 w-50\"\n          />\n        </div>\n        <div class=\"flex pa2\">\n          <label class=\"w-third\">Status</label>\n          <select [(ngModel)]=\"myform.status\" class=\"ba pa2 w-50\" name=\"status\">\n            <option value=\"0\">Pending</option>\n            <option value=\"1\">Started</option>\n            <option value=\"2\">Finished</option>\n            <option value=\"3\">Overdue</option>\n          </select>\n        </div>\n        <div class=\"flex pa2\">\n          <label class=\"w-third\">Priority</label>\n          <select [(ngModel)]=\"myform.priority\" class=\"ba pa2 w-50\" name=\"priority\">\n            <option value=\"0\">Low</option>\n            <option value=\"1\">Medium</option>\n            <option value=\"2\">High</option>\n          </select>\n        </div>\n        <div class=\"flex pa2\">\n          <label class=\"w-third\">Date</label>\n          <input type=\"date\" [(ngModel)]=\"myform.targetDate\" class=\"ba pa2 w-50\" name=\"targetDate\" />\n        </div>\n        <div class=\"flex pa2\">\n          <label class=\"w-third\"></label>\n          <button type=\"submit\" class=\"br4 pt2 pb2 pl4 pr4 bn white bg-dark-green\">Submit</button>\n        </div>\n      </form>\n    </div>\n  "
    })], Form2Component);
    /***/
  },

  /***/
  "./src/app/kitchen-sink/forms/components/my-form/my-form.component.ts":
  /*!****************************************************************************!*\
    !*** ./src/app/kitchen-sink/forms/components/my-form/my-form.component.ts ***!
    \****************************************************************************/

  /*! exports provided: MyFormComponent */

  /***/
  function srcAppKitchenSinkFormsComponentsMyFormMyFormComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MyFormComponent", function () {
      return MyFormComponent;
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

    var MyFormComponent =
    /*#__PURE__*/
    function () {
      function MyFormComponent() {
        _classCallCheck(this, MyFormComponent);

        this.email = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]();
        this.password = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]();
      }

      _createClass(MyFormComponent, [{
        key: "onSubmit",
        value: function onSubmit() {
          console.log(this.email, this.password);
        }
      }]);

      return MyFormComponent;
    }();

    MyFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'my-form',
      template: "\n    <form (submit)=\"onSubmit()\" novalidate>\n      <div class=\"flex pa2\">\n        <label for=\"email\" class=\"w-third\">Email:</label>\n        <input class=\"ba pa2 w-50\" type=\"email\" id=\"email\" [formControl]=\"email\" />\n      </div>\n\n      <div class=\"flex pa2\">\n        <label for=\"password\" class=\"w-third\">Password:</label>\n        <input class=\"ba pa2 w-50\" type=\"password\" id=\"password\" [formControl]=\"password\" />\n      </div>\n      <br />\n      <div class=\"flex pa2\">\n        <label class=\"w-third\"></label>\n        <button class=\"br4 pt2 pb2 pl4 pr4 white bg-dark-green bn\" type=\"submit\">Register</button>\n      </div>\n    </form>\n  "
    })], MyFormComponent);
    /***/
  },

  /***/
  "./src/app/kitchen-sink/forms/index.ts":
  /*!*********************************************!*\
    !*** ./src/app/kitchen-sink/forms/index.ts ***!
    \*********************************************/

  /*! exports provided: MyFormComponent, ControlFormComponent, Form2Component */

  /***/
  function srcAppKitchenSinkFormsIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _components_my_form_my_form_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./components/my-form/my-form.component */
    "./src/app/kitchen-sink/forms/components/my-form/my-form.component.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "MyFormComponent", function () {
      return _components_my_form_my_form_component__WEBPACK_IMPORTED_MODULE_1__["MyFormComponent"];
    });
    /* harmony import */


    var _components_control_form_control_form_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./components/control-form/control-form.component */
    "./src/app/kitchen-sink/forms/components/control-form/control-form.component.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "ControlFormComponent", function () {
      return _components_control_form_control_form_component__WEBPACK_IMPORTED_MODULE_2__["ControlFormComponent"];
    });
    /* harmony import */


    var _components_form2_form2_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./components/form2/form2.component */
    "./src/app/kitchen-sink/forms/components/form2/form2.component.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "Form2Component", function () {
      return _components_form2_form2_component__WEBPACK_IMPORTED_MODULE_3__["Form2Component"];
    });
    /***/

  },

  /***/
  "./src/app/kitchen-sink/home/components/home/home.component.css":
  /*!**********************************************************************!*\
    !*** ./src/app/kitchen-sink/home/components/home/home.component.css ***!
    \**********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppKitchenSinkHomeComponentsHomeHomeComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2tpdGNoZW4tc2luay9ob21lL2NvbXBvbmVudHMvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/kitchen-sink/home/components/home/home.component.ts":
  /*!*********************************************************************!*\
    !*** ./src/app/kitchen-sink/home/components/home/home.component.ts ***!
    \*********************************************************************/

  /*! exports provided: HomeComponent */

  /***/
  function srcAppKitchenSinkHomeComponentsHomeHomeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomeComponent", function () {
      return HomeComponent;
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


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");

    var TITLES = {
      '': 'Home',
      home: 'Home',
      'control-form': 'Control Form',
      'my-form': 'Form Component',
      form2: 'NgModel Form',
      'input-output': 'Input Output',
      'todo-app': 'Todo App',
      'di-tree': 'DI Tree',
      'angular-directives': 'Angular Directives',
      'change-detection': 'Change Detection'
    };

    var HomeComponent = function HomeComponent(router) {
      var _this = this;

      _classCallCheck(this, HomeComponent);

      this.router = router;
      router.events.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])(function (e) {
        return e instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationEnd"];
      })).subscribe(function (e) {
        var path = e.url.replace('/kitchen-sink', '').replace('/', '');
        _this.title = TITLES[path];
      });
    };

    HomeComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }];
    };

    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'home',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./home.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/kitchen-sink/home/components/home/home.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./home.component.css */
      "./src/app/kitchen-sink/home/components/home/home.component.css")).default]
    })], HomeComponent);
    /***/
  },

  /***/
  "./src/app/kitchen-sink/home/index.ts":
  /*!********************************************!*\
    !*** ./src/app/kitchen-sink/home/index.ts ***!
    \********************************************/

  /*! exports provided: HomeComponent */

  /***/
  function srcAppKitchenSinkHomeIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _components_home_home_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./components/home/home.component */
    "./src/app/kitchen-sink/home/components/home/home.component.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "HomeComponent", function () {
      return _components_home_home_component__WEBPACK_IMPORTED_MODULE_1__["HomeComponent"];
    });
    /***/

  },

  /***/
  "./src/app/kitchen-sink/input-output/components/counter/counter.component.css":
  /*!************************************************************************************!*\
    !*** ./src/app/kitchen-sink/input-output/components/counter/counter.component.css ***!
    \************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppKitchenSinkInputOutputComponentsCounterCounterComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2tpdGNoZW4tc2luay9pbnB1dC1vdXRwdXQvY29tcG9uZW50cy9jb3VudGVyL2NvdW50ZXIuY29tcG9uZW50LmNzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/kitchen-sink/input-output/components/counter/counter.component.ts":
  /*!***********************************************************************************!*\
    !*** ./src/app/kitchen-sink/input-output/components/counter/counter.component.ts ***!
    \***********************************************************************************/

  /*! exports provided: CounterComponent */

  /***/
  function srcAppKitchenSinkInputOutputComponentsCounterCounterComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CounterComponent", function () {
      return CounterComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var CounterComponent =
    /*#__PURE__*/
    function () {
      function CounterComponent() {
        _classCallCheck(this, CounterComponent);

        this.count = 0;
        this.result = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.displayMessage = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
      }

      _createClass(CounterComponent, [{
        key: "increment",
        value: function increment() {
          this.count++;
          this.result.emit(this.count);
        }
      }, {
        key: "sendMessage",
        value: function sendMessage() {
          var data = {
            'name': 'John11',
            'message': 'Hello there11!!!'
          };
          this.displayMessage.emit(data);
        }
      }]);

      return CounterComponent;
    }();

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], CounterComponent.prototype, "count", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], CounterComponent.prototype, "result", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], CounterComponent.prototype, "displayMessage", void 0);
    CounterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'counter',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./counter.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/kitchen-sink/input-output/components/counter/counter.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./counter.component.css */
      "./src/app/kitchen-sink/input-output/components/counter/counter.component.css")).default]
    })], CounterComponent);
    /***/
  },

  /***/
  "./src/app/kitchen-sink/input-output/components/input-output/input-output.component.css":
  /*!**********************************************************************************************!*\
    !*** ./src/app/kitchen-sink/input-output/components/input-output/input-output.component.css ***!
    \**********************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppKitchenSinkInputOutputComponentsInputOutputInputOutputComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2tpdGNoZW4tc2luay9pbnB1dC1vdXRwdXQvY29tcG9uZW50cy9pbnB1dC1vdXRwdXQvaW5wdXQtb3V0cHV0LmNvbXBvbmVudC5jc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/kitchen-sink/input-output/components/input-output/input-output.component.ts":
  /*!*********************************************************************************************!*\
    !*** ./src/app/kitchen-sink/input-output/components/input-output/input-output.component.ts ***!
    \*********************************************************************************************/

  /*! exports provided: InputOutputComponent */

  /***/
  function srcAppKitchenSinkInputOutputComponentsInputOutputInputOutputComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "InputOutputComponent", function () {
      return InputOutputComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var InputOutputComponent =
    /*#__PURE__*/
    function () {
      function InputOutputComponent() {
        _classCallCheck(this, InputOutputComponent);

        this.isOn = false;
        this.isDisabled = false;
        this.num = 0;
        this.parentCount = 0;
      }

      _createClass(InputOutputComponent, [{
        key: "onChange",
        value: function onChange(val) {
          this.parentCount = val;
        }
      }, {
        key: "toggle",
        value: function toggle(newState) {
          if (!this.isDisabled) {
            this.isOn = newState;
          }
        }
      }, {
        key: "displayMessage",
        value: function displayMessage(data) {
          this.message = data.message;
          this.name = data.name;
        }
      }]);

      return InputOutputComponent;
    }();

    InputOutputComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'input-output',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./input-output.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/kitchen-sink/input-output/components/input-output/input-output.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./input-output.component.css */
      "./src/app/kitchen-sink/input-output/components/input-output/input-output.component.css")).default]
    })], InputOutputComponent);
    /***/
  },

  /***/
  "./src/app/kitchen-sink/input-output/index.ts":
  /*!****************************************************!*\
    !*** ./src/app/kitchen-sink/input-output/index.ts ***!
    \****************************************************/

  /*! exports provided: InputOutputComponent, CounterComponent */

  /***/
  function srcAppKitchenSinkInputOutputIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _components_input_output_input_output_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./components/input-output/input-output.component */
    "./src/app/kitchen-sink/input-output/components/input-output/input-output.component.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "InputOutputComponent", function () {
      return _components_input_output_input_output_component__WEBPACK_IMPORTED_MODULE_1__["InputOutputComponent"];
    });
    /* harmony import */


    var _components_counter_counter_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./components/counter/counter.component */
    "./src/app/kitchen-sink/input-output/components/counter/counter.component.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "CounterComponent", function () {
      return _components_counter_counter_component__WEBPACK_IMPORTED_MODULE_2__["CounterComponent"];
    });
    /***/

  },

  /***/
  "./src/app/kitchen-sink/kitchen-sink-routing.module.ts":
  /*!*************************************************************!*\
    !*** ./src/app/kitchen-sink/kitchen-sink-routing.module.ts ***!
    \*************************************************************/

  /*! exports provided: KitchenSinkRoutingModule */

  /***/
  function srcAppKitchenSinkKitchenSinkRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "KitchenSinkRoutingModule", function () {
      return KitchenSinkRoutingModule;
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


    var _home__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./home */
    "./src/app/kitchen-sink/home/index.ts");
    /* harmony import */


    var _input_output__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./input-output */
    "./src/app/kitchen-sink/input-output/index.ts");
    /* harmony import */


    var _forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./forms */
    "./src/app/kitchen-sink/forms/index.ts");
    /* harmony import */


    var _di_tree__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./di-tree */
    "./src/app/kitchen-sink/di-tree/index.ts");
    /* harmony import */


    var _angular_directives__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./angular-directives */
    "./src/app/kitchen-sink/angular-directives/index.ts");
    /* harmony import */


    var _change_detection__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./change-detection */
    "./src/app/kitchen-sink/change-detection/index.ts");
    /* harmony import */


    var _stress_tester__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./stress-tester */
    "./src/app/kitchen-sink/stress-tester/index.ts");
    /* harmony import */


    var _metadata_test__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./metadata-test */
    "./src/app/kitchen-sink/metadata-test/index.ts");
    /* harmony import */


    var _todo_app__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./todo-app */
    "./src/app/kitchen-sink/todo-app/index.ts");

    var routes = [{
      path: '',
      component: _home__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"],
      children: [{
        path: 'input-output',
        component: _input_output__WEBPACK_IMPORTED_MODULE_4__["InputOutputComponent"]
      }, // { path: 'lazy-load', loadChildren: 'app/lazy-load/lazy-load.module#LazyLoadModule' },
      {
        path: 'my-form',
        component: _forms__WEBPACK_IMPORTED_MODULE_5__["MyFormComponent"]
      }, {
        path: 'control-form',
        component: _forms__WEBPACK_IMPORTED_MODULE_5__["ControlFormComponent"]
      }, {
        path: 'form2',
        component: _forms__WEBPACK_IMPORTED_MODULE_5__["Form2Component"]
      }, {
        path: 'di-tree',
        component: _di_tree__WEBPACK_IMPORTED_MODULE_6__["DITreeComponent"]
      }, {
        path: 'todo-app',
        component: _todo_app__WEBPACK_IMPORTED_MODULE_11__["TodoAppComponent"]
      }, {
        path: 'angular-directives',
        component: _angular_directives__WEBPACK_IMPORTED_MODULE_7__["AngularDirectivesComponent"]
      }, {
        path: 'change-detection',
        component: _change_detection__WEBPACK_IMPORTED_MODULE_8__["ChangeDetectionComponent"]
      }, {
        path: 'stress-tester',
        component: _stress_tester__WEBPACK_IMPORTED_MODULE_9__["StressTesterComponent"]
      }, {
        path: 'metadata-test',
        component: _metadata_test__WEBPACK_IMPORTED_MODULE_10__["MetadataTestComponent"]
      }]
    }];

    var KitchenSinkRoutingModule = function KitchenSinkRoutingModule() {
      _classCallCheck(this, KitchenSinkRoutingModule);
    };

    KitchenSinkRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], KitchenSinkRoutingModule);
    /***/
  },

  /***/
  "./src/app/kitchen-sink/kitchen-sink.module.ts":
  /*!*****************************************************!*\
    !*** ./src/app/kitchen-sink/kitchen-sink.module.ts ***!
    \*****************************************************/

  /*! exports provided: KitchenSinkModule */

  /***/
  function srcAppKitchenSinkKitchenSinkModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "KitchenSinkModule", function () {
      return KitchenSinkModule;
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


    var _kitchen_sink_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./kitchen-sink-routing.module */
    "./src/app/kitchen-sink/kitchen-sink-routing.module.ts");
    /* harmony import */


    var _home__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./home */
    "./src/app/kitchen-sink/home/index.ts");
    /* harmony import */


    var _input_output__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./input-output */
    "./src/app/kitchen-sink/input-output/index.ts");
    /* harmony import */


    var _forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./forms */
    "./src/app/kitchen-sink/forms/index.ts");
    /* harmony import */


    var _di_tree__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./di-tree */
    "./src/app/kitchen-sink/di-tree/index.ts");
    /* harmony import */


    var _angular_directives__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./angular-directives */
    "./src/app/kitchen-sink/angular-directives/index.ts");
    /* harmony import */


    var _change_detection__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./change-detection */
    "./src/app/kitchen-sink/change-detection/index.ts");
    /* harmony import */


    var _stress_tester__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./stress-tester */
    "./src/app/kitchen-sink/stress-tester/index.ts");
    /* harmony import */


    var _metadata_test__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./metadata-test */
    "./src/app/kitchen-sink/metadata-test/index.ts");
    /* harmony import */


    var _todo_app__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./todo-app */
    "./src/app/kitchen-sink/todo-app/index.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js"); // demos


    var KitchenSinkModule = function KitchenSinkModule() {
      _classCallCheck(this, KitchenSinkModule);
    };

    KitchenSinkModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_home__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"], _input_output__WEBPACK_IMPORTED_MODULE_5__["InputOutputComponent"], _input_output__WEBPACK_IMPORTED_MODULE_5__["CounterComponent"], _forms__WEBPACK_IMPORTED_MODULE_6__["MyFormComponent"], _forms__WEBPACK_IMPORTED_MODULE_6__["ControlFormComponent"], _forms__WEBPACK_IMPORTED_MODULE_6__["Form2Component"]].concat(_toConsumableArray(_di_tree__WEBPACK_IMPORTED_MODULE_7__["DI_TREE_COMPONENTS"]), _toConsumableArray(_angular_directives__WEBPACK_IMPORTED_MODULE_8__["ANGULAR_DIRECTIVES_COMPONENTS"]), _toConsumableArray(_change_detection__WEBPACK_IMPORTED_MODULE_9__["CHANGE_DETECTION_COMPONENTS"]), _toConsumableArray(_stress_tester__WEBPACK_IMPORTED_MODULE_10__["STRESS_TESTER_COMPONENTS"]), _toConsumableArray(_metadata_test__WEBPACK_IMPORTED_MODULE_11__["METADATA_TEST_COMPONENTS"]), _toConsumableArray(_todo_app__WEBPACK_IMPORTED_MODULE_12__["TODO_APP_COMPONENTS"])),
      imports: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["CommonModule"], _kitchen_sink_routing_module__WEBPACK_IMPORTED_MODULE_3__["KitchenSinkRoutingModule"]],
      providers: [].concat(_toConsumableArray(_di_tree__WEBPACK_IMPORTED_MODULE_7__["DI_TREE_SERVICES"]), _toConsumableArray(_todo_app__WEBPACK_IMPORTED_MODULE_12__["TODO_APP_SERVICES"]))
    })], KitchenSinkModule);
    /***/
  },

  /***/
  "./src/app/kitchen-sink/metadata-test/components/metadata-test.ts":
  /*!************************************************************************!*\
    !*** ./src/app/kitchen-sink/metadata-test/components/metadata-test.ts ***!
    \************************************************************************/

  /*! exports provided: MetadataFromArray, MetadataFromDecorator, MetadataFromArrayWithCustomName, MetadataFromDecoratorWithCustomName, MetadataTestComponent */

  /***/
  function srcAppKitchenSinkMetadataTestComponentsMetadataTestTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MetadataFromArray", function () {
      return MetadataFromArray;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MetadataFromDecorator", function () {
      return MetadataFromDecorator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MetadataFromArrayWithCustomName", function () {
      return MetadataFromArrayWithCustomName;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MetadataFromDecoratorWithCustomName", function () {
      return MetadataFromDecoratorWithCustomName;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MetadataTestComponent", function () {
      return MetadataTestComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var MetadataFromArray = function MetadataFromArray() {
      _classCallCheck(this, MetadataFromArray);
    };

    MetadataFromArray = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'attr-from-array',
      inputs: ['attrIn'],
      outputs: ['attrOut'],
      template: "<p>{{attrIn}}</p>"
    })], MetadataFromArray);

    var MetadataFromDecorator = function MetadataFromDecorator() {
      _classCallCheck(this, MetadataFromDecorator);
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], MetadataFromDecorator.prototype, "attrIn", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], MetadataFromDecorator.prototype, "attrOut", void 0);
    MetadataFromDecorator = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'attr-from-decorator',
      template: "<p>{{attrIn}}</p>"
    })], MetadataFromDecorator);

    var MetadataFromArrayWithCustomName = function MetadataFromArrayWithCustomName() {
      _classCallCheck(this, MetadataFromArrayWithCustomName);
    };

    MetadataFromArrayWithCustomName = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'attr-from-array-custom',
      inputs: ['attrIn:attrCustomIn'],
      outputs: ['attrOut'],
      template: "<p>{{attrIn}}</p>"
    })], MetadataFromArrayWithCustomName);

    var MetadataFromDecoratorWithCustomName = function MetadataFromDecoratorWithCustomName() {
      _classCallCheck(this, MetadataFromDecoratorWithCustomName);
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('attrCustomIn')], MetadataFromDecoratorWithCustomName.prototype, "attrIn", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], MetadataFromDecoratorWithCustomName.prototype, "attrOut", void 0);
    MetadataFromDecoratorWithCustomName = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'attr-from-decorator-custom',
      template: "<p>{{attrIn}}</p>"
    })], MetadataFromDecoratorWithCustomName);

    var MetadataTestComponent = function MetadataTestComponent() {
      _classCallCheck(this, MetadataTestComponent);
    };

    MetadataTestComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'metadata-test',
      template: "\n    <attr-from-array attrIn='Data from the array.'>\n    </attr-from-array>\n\n    <attr-from-decorator attrIn='Data from the decorator.'>\n    </attr-from-decorator>\n\n    <attr-from-array-custom attrCustomIn='Data from array using a custom name.'>\n    </attr-from-array-custom>\n\n    <attr-from-decorator-custom\n      attrCustomIn='Data from decorator using a custom name.'>\n    </attr-from-decorator-custom>\n  "
    })], MetadataTestComponent);
    /***/
  },

  /***/
  "./src/app/kitchen-sink/metadata-test/index.ts":
  /*!*****************************************************!*\
    !*** ./src/app/kitchen-sink/metadata-test/index.ts ***!
    \*****************************************************/

  /*! exports provided: METADATA_TEST_COMPONENTS, MetadataTestComponent */

  /***/
  function srcAppKitchenSinkMetadataTestIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "METADATA_TEST_COMPONENTS", function () {
      return METADATA_TEST_COMPONENTS;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _components_metadata_test__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./components/metadata-test */
    "./src/app/kitchen-sink/metadata-test/components/metadata-test.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "MetadataTestComponent", function () {
      return _components_metadata_test__WEBPACK_IMPORTED_MODULE_1__["MetadataTestComponent"];
    });

    var METADATA_TEST_COMPONENTS = [_components_metadata_test__WEBPACK_IMPORTED_MODULE_1__["MetadataTestComponent"], _components_metadata_test__WEBPACK_IMPORTED_MODULE_1__["MetadataFromArray"], _components_metadata_test__WEBPACK_IMPORTED_MODULE_1__["MetadataFromDecorator"], _components_metadata_test__WEBPACK_IMPORTED_MODULE_1__["MetadataFromArrayWithCustomName"], _components_metadata_test__WEBPACK_IMPORTED_MODULE_1__["MetadataFromDecoratorWithCustomName"]];
    /***/
  },

  /***/
  "./src/app/kitchen-sink/stress-tester/components/stress-tester.ts":
  /*!************************************************************************!*\
    !*** ./src/app/kitchen-sink/stress-tester/components/stress-tester.ts ***!
    \************************************************************************/

  /*! exports provided: StressRecItem, StressTesterComponent */

  /***/
  function srcAppKitchenSinkStressTesterComponentsStressTesterTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StressRecItem", function () {
      return StressRecItem;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StressTesterComponent", function () {
      return StressTesterComponent;
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

    var StressRecItem = function StressRecItem() {
      _classCallCheck(this, StressRecItem);
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], StressRecItem.prototype, "tree", void 0);
    StressRecItem = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'stress-rec-item',
      template: "\n    <ul *ngFor=\"let each of tree\">\n        <li *ngIf=\"each.length > 0\">\n            <stress-rec-item [tree]=\"each\"></stress-rec-item>\n        </li>\n    </ul>\n  "
    })], StressRecItem);

    var StressTesterComponent =
    /*#__PURE__*/
    function () {
      function StressTesterComponent() {
        _classCallCheck(this, StressTesterComponent);

        this.branchingFactor = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]();
        this.depth = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]();
      }

      _createClass(StressTesterComponent, [{
        key: "onSubmit",
        value: function onSubmit() {
          var branchingFactor = this.branchingFactor.value;
          var depth = this.depth.value;
          var accum = [];
          var i = depth;

          while (i--) {
            var innerAccum = [];
            var j = branchingFactor;

            while (j--) {
              innerAccum.push(_toConsumableArray(accum));
            }

            accum = innerAccum;
          }

          this.tree = accum;
        }
      }]);

      return StressTesterComponent;
    }();

    StressTesterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'stress-tester',
      template: "\n  <div>\n    <p>Deep Tree Test</p>\n    <form (submit)=\"onSubmit()\" novalidate>\n      <div>\n        <label>Branching factor of tree:\n          <input type=\"number\" id=\"branching-factor\" [formControl]=\"branchingFactor\">\n        </label>\n        <label>Branching depth of tree:\n          <input type=\"number\" [formControl]=\"depth\">\n        </label>\n      </div>\n      <button type=\"submit\">Run</button>\n    </form>\n    <br>\n    <div *ngIf=\"tree\">\n      <stress-rec-item [tree]=\"tree\"></stress-rec-item>\n    </div>\n  </div>\n  "
    })], StressTesterComponent);
    /***/
  },

  /***/
  "./src/app/kitchen-sink/stress-tester/index.ts":
  /*!*****************************************************!*\
    !*** ./src/app/kitchen-sink/stress-tester/index.ts ***!
    \*****************************************************/

  /*! exports provided: STRESS_TESTER_COMPONENTS, StressTesterComponent */

  /***/
  function srcAppKitchenSinkStressTesterIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "STRESS_TESTER_COMPONENTS", function () {
      return STRESS_TESTER_COMPONENTS;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _components_stress_tester__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./components/stress-tester */
    "./src/app/kitchen-sink/stress-tester/components/stress-tester.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "StressTesterComponent", function () {
      return _components_stress_tester__WEBPACK_IMPORTED_MODULE_1__["StressTesterComponent"];
    });

    var STRESS_TESTER_COMPONENTS = [_components_stress_tester__WEBPACK_IMPORTED_MODULE_1__["StressTesterComponent"], _components_stress_tester__WEBPACK_IMPORTED_MODULE_1__["StressRecItem"]];
    /***/
  },

  /***/
  "./src/app/kitchen-sink/todo-app/components/todo-app.component.ts":
  /*!************************************************************************!*\
    !*** ./src/app/kitchen-sink/todo-app/components/todo-app.component.ts ***!
    \************************************************************************/

  /*! exports provided: TodoAppComponent */

  /***/
  function srcAppKitchenSinkTodoAppComponentsTodoAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TodoAppComponent", function () {
      return TodoAppComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var TodoAppComponent = function TodoAppComponent() {
      _classCallCheck(this, TodoAppComponent);
    };

    TodoAppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'todo-app',
      template: "\n    <div>\n      <todo-input></todo-input>\n      <br />\n      <todo-list></todo-list>\n    </div>\n  "
    })], TodoAppComponent);
    /***/
  },

  /***/
  "./src/app/kitchen-sink/todo-app/components/todo-input.component.ts":
  /*!**************************************************************************!*\
    !*** ./src/app/kitchen-sink/todo-app/components/todo-input.component.ts ***!
    \**************************************************************************/

  /*! exports provided: TodoInputComponent */

  /***/
  function srcAppKitchenSinkTodoAppComponentsTodoInputComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TodoInputComponent", function () {
      return TodoInputComponent;
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


    var _services_todo_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../services/todo.service */
    "./src/app/kitchen-sink/todo-app/services/todo.service.ts");
    /* harmony import */


    var _models_todo_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../models/todo.model */
    "./src/app/kitchen-sink/todo-app/models/todo.model.ts");
    /* harmony import */


    var _services_format_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../services/format.service */
    "./src/app/kitchen-sink/todo-app/services/format.service.ts");

    var TodoInputComponent =
    /*#__PURE__*/
    function () {
      function TodoInputComponent(todoService, formatService) {
        _classCallCheck(this, TodoInputComponent);

        this.todoService = todoService;
        this.formatService = formatService;
        this.todoModel = new _models_todo_model__WEBPACK_IMPORTED_MODULE_3__["TodoModel"]();
      }

      _createClass(TodoInputComponent, [{
        key: "onSubmit",
        value: function onSubmit() {
          this.todoService.addTodo(this.todoModel);
          this.todoModel = new _models_todo_model__WEBPACK_IMPORTED_MODULE_3__["TodoModel"]();
        }
      }, {
        key: "onClick",
        value: function onClick(logMessage) {
          var tm = new _models_todo_model__WEBPACK_IMPORTED_MODULE_3__["TodoModel"]();
          tm.title = logMessage.value;
          this.todoService.addTodo(tm);
          logMessage.value = '';
        }
      }]);

      return TodoInputComponent;
    }();

    TodoInputComponent.ctorParameters = function () {
      return [{
        type: _services_todo_service__WEBPACK_IMPORTED_MODULE_2__["TodoService"]
      }, {
        type: _services_format_service__WEBPACK_IMPORTED_MODULE_4__["FormatService"]
      }];
    };

    TodoInputComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'todo-input',
      template: "\n    <div>\n      <form (ngSubmit)=\"onSubmit()\" class=\"flex\">\n        <input type=\"text\" [(ngModel)]=\"todoModel.title\" required class=\"ba pa2\" name=\"title\" />\n        &nbsp;&nbsp;\n        <button class=\"bn br4 pt2 pb2 pl4 pr4 white bg-dark-blue\">Add Todo</button>\n      </form>\n    </div>\n  "
    })], TodoInputComponent);
    /***/
  },

  /***/
  "./src/app/kitchen-sink/todo-app/components/todo-list.component.ts":
  /*!*************************************************************************!*\
    !*** ./src/app/kitchen-sink/todo-app/components/todo-list.component.ts ***!
    \*************************************************************************/

  /*! exports provided: TodoListComponent */

  /***/
  function srcAppKitchenSinkTodoAppComponentsTodoListComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TodoListComponent", function () {
      return TodoListComponent;
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


    var _services_todo_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../services/todo.service */
    "./src/app/kitchen-sink/todo-app/services/todo.service.ts");

    var TodoListComponent = function TodoListComponent(todoService) {
      _classCallCheck(this, TodoListComponent);

      this.todoService = todoService;
    };

    TodoListComponent.ctorParameters = function () {
      return [{
        type: _services_todo_service__WEBPACK_IMPORTED_MODULE_2__["TodoService"]
      }];
    };

    TodoListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'todo-list',
      template: "\n    <table class=\"w-100\">\n      <tr>\n        <th class=\"ba b--black-40 pa2\">Title</th>\n        <th class=\"ba b--black-40 pa2\">Status</th>\n        <th class=\"ba b--black-40 pa2\">Actions</th>\n      </tr>\n      <tr *ngFor=\"let todo of todoService.todos\">\n        <td class=\"ba b--black-40 pa2\">{{ todo.title }}</td>\n        <td class=\"ba b--black-40 pa2\">\n          <p class=\"white bg-dark-red pa2 br2\" *ngIf=\"todo.status == 'started'\">Started</p>\n          <p class=\"white bg-dark-green pa2 br2\" *ngIf=\"todo.status == 'completed'\">Completed</p>\n        </td>\n        <td class=\"ba b--black-40 pa2\">\n          <button class=\"bn br4 pt2 pb2 pl4 pr4 white bg-dark-blue\" (click)=\"todo.toggle()\">Toggle</button>\n        </td>\n      </tr>\n    </table>\n  "
    })], TodoListComponent);
    /***/
  },

  /***/
  "./src/app/kitchen-sink/todo-app/index.ts":
  /*!************************************************!*\
    !*** ./src/app/kitchen-sink/todo-app/index.ts ***!
    \************************************************/

  /*! exports provided: TODO_APP_COMPONENTS, TODO_APP_SERVICES, TodoAppComponent */

  /***/
  function srcAppKitchenSinkTodoAppIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TODO_APP_COMPONENTS", function () {
      return TODO_APP_COMPONENTS;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TODO_APP_SERVICES", function () {
      return TODO_APP_SERVICES;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _components_todo_app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./components/todo-app.component */
    "./src/app/kitchen-sink/todo-app/components/todo-app.component.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "TodoAppComponent", function () {
      return _components_todo_app_component__WEBPACK_IMPORTED_MODULE_1__["TodoAppComponent"];
    });
    /* harmony import */


    var _components_todo_input_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./components/todo-input.component */
    "./src/app/kitchen-sink/todo-app/components/todo-input.component.ts");
    /* harmony import */


    var _components_todo_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./components/todo-list.component */
    "./src/app/kitchen-sink/todo-app/components/todo-list.component.ts");
    /* harmony import */


    var _services_todo_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./services/todo.service */
    "./src/app/kitchen-sink/todo-app/services/todo.service.ts");
    /* harmony import */


    var _services_format_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./services/format.service */
    "./src/app/kitchen-sink/todo-app/services/format.service.ts");

    var TODO_APP_COMPONENTS = [_components_todo_app_component__WEBPACK_IMPORTED_MODULE_1__["TodoAppComponent"], _components_todo_input_component__WEBPACK_IMPORTED_MODULE_2__["TodoInputComponent"], _components_todo_list_component__WEBPACK_IMPORTED_MODULE_3__["TodoListComponent"]];
    var TODO_APP_SERVICES = [_services_todo_service__WEBPACK_IMPORTED_MODULE_4__["TodoService"], _services_format_service__WEBPACK_IMPORTED_MODULE_5__["FormatService"]];
    /***/
  },

  /***/
  "./src/app/kitchen-sink/todo-app/models/todo.model.ts":
  /*!************************************************************!*\
    !*** ./src/app/kitchen-sink/todo-app/models/todo.model.ts ***!
    \************************************************************/

  /*! exports provided: TodoModel */

  /***/
  function srcAppKitchenSinkTodoAppModelsTodoModelTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TodoModel", function () {
      return TodoModel;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var TodoModel =
    /*#__PURE__*/
    function () {
      function TodoModel() {
        var title = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

        _classCallCheck(this, TodoModel);

        this.title = title;
        this.status = 'started';
      }

      _createClass(TodoModel, [{
        key: "toggle",
        value: function toggle() {
          if (this.status === 'started') {
            this.status = 'completed';
          } else {
            this.status = 'started';
          }
        }
      }]);

      return TodoModel;
    }();
    /***/

  },

  /***/
  "./src/app/kitchen-sink/todo-app/services/format.service.ts":
  /*!******************************************************************!*\
    !*** ./src/app/kitchen-sink/todo-app/services/format.service.ts ***!
    \******************************************************************/

  /*! exports provided: FormatService */

  /***/
  function srcAppKitchenSinkTodoAppServicesFormatServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FormatService", function () {
      return FormatService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var FormatService =
    /*#__PURE__*/
    function () {
      function FormatService() {
        _classCallCheck(this, FormatService);
      }

      _createClass(FormatService, [{
        key: "sayHello",
        value: function sayHello() {
          console.log('hello');
        }
      }]);

      return FormatService;
    }();
    /***/

  },

  /***/
  "./src/app/kitchen-sink/todo-app/services/todo.service.ts":
  /*!****************************************************************!*\
    !*** ./src/app/kitchen-sink/todo-app/services/todo.service.ts ***!
    \****************************************************************/

  /*! exports provided: TodoService */

  /***/
  function srcAppKitchenSinkTodoAppServicesTodoServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TodoService", function () {
      return TodoService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _models_todo_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../models/todo.model */
    "./src/app/kitchen-sink/todo-app/models/todo.model.ts");

    var TodoService =
    /*#__PURE__*/
    function () {
      function TodoService() {
        _classCallCheck(this, TodoService);

        this.todos = [new _models_todo_model__WEBPACK_IMPORTED_MODULE_1__["TodoModel"]('one'), new _models_todo_model__WEBPACK_IMPORTED_MODULE_1__["TodoModel"]('two'), new _models_todo_model__WEBPACK_IMPORTED_MODULE_1__["TodoModel"]('three')];
      }

      _createClass(TodoService, [{
        key: "addTodo",
        value: function addTodo(value) {
          this.todos.push(value);
        }
      }]);

      return TodoService;
    }();
    /***/

  }
}]);
//# sourceMappingURL=kitchen-sink-kitchen-sink-module-es5.js.map