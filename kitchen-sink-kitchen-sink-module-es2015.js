(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["kitchen-sink-kitchen-sink-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/kitchen-sink/home/components/home/home.component.html":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/kitchen-sink/home/components/home/home.component.html ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"flex vh-100\">\n  <div class=\"w-20 bg-light-yellow\">\n    <ul class=\"list\">\n      <li class=\"pa2\" [ngClass]=\"{ active: path == 'home' }\">\n        <a [routerLink]=\"['/kitchen-sink']\">Home</a>\n      </li>\n      <!-- <li class=\"pa2\" [ngClass]=\"{ active: path == 'welcome' }\">\n        <a [routerLink]=\"['/kitchen-sink', 'lazy-load/lazy']\">Lazy Loaded Module</a>\n      </li> -->\n      <li class=\"pa2\" [ngClass]=\"{ active: path == 'control-form' }\">\n        <a [routerLink]=\"['/kitchen-sink', 'control-form']\">ControlForm</a>\n      </li>\n      <li class=\"pa2\" [ngClass]=\"{ active: path == 'my-form' }\">\n        <a [routerLink]=\"['/kitchen-sink', 'my-form']\">Form Component</a>\n      </li>\n      <li class=\"pa2\" [ngClass]=\"{ active: path == 'form2' }\">\n        <a [routerLink]=\"['/kitchen-sink', 'form2']\">NgModel Form</a>\n      </li>\n      <li class=\"pa2\" [ngClass]=\"{ active: path == 'input-output' }\">\n        <a [routerLink]=\"['/kitchen-sink', 'input-output']\">InputOutput</a>\n      </li>\n      <li class=\"pa2\" [ngClass]=\"{ active: path == 'todo-app' }\">\n        <a [routerLink]=\"['/kitchen-sink', 'todo-app']\">TodoApp</a>\n      </li>\n      <li class=\"pa2\" [ngClass]=\"{ active: path == 'di-tree' }\">\n        <a [routerLink]=\"['/kitchen-sink', 'di-tree']\">DITree</a>\n      </li>\n      <!-- <li class=\"pa2\" [ngClass]=\"{ active: path == 'angular-directives' }\">\n        <a [routerLink]=\"['/kitchen-sink', 'angular-directives']\">AngularDirectives</a>\n      </li>\n      <li class=\"pa2\" [ngClass]=\"{ active: path == 'change-detection' }\">\n        <a [routerLink]=\"['/kitchen-sink', 'change-detection']\">ChangeDetection</a>\n      </li>\n      <li class=\"pa2\" [ngClass]=\"{ active: path == 'stress-tester' }\">\n        <a [routerLink]=\"['/kitchen-sink', './stress-tester']\">StressTester</a>\n      </li>\n      <li class=\"pa2\" [ngClass]=\"{ active: path == 'metadata-test' }\">\n        <a [routerLink]=\"['/kitchen-sink', './metadata-test']\">MetadataTest</a>\n      </li> -->\n    </ul>\n  </div>\n  <div class=\"w-80 pa3 bg-light-green\">\n    <h1>{{ title }}</h1>\n    <router-outlet></router-outlet>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/kitchen-sink/input-output/components/counter/counter.component.html":
/*!***************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/kitchen-sink/input-output/components/counter/counter.component.html ***!
  \***************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div>\n  <h4>Count: {{ count }}</h4>\n  <button class=\"bn br4 pt2 pb2 pl4 pr4 white bg-dark-red\" (click)=\"increment()\">\n    Increment\n  </button>\n  <br />\n  <br />\n  <button class=\"bn br4 pt2 pb2 pl4 pr4 white bg-dark-blue\" (click)=\"sendMessage()\">\n    SendMessage\n  </button>\n  <br />\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/kitchen-sink/input-output/components/input-output/input-output.component.html":
/*!*************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/kitchen-sink/input-output/components/input-output/input-output.component.html ***!
  \*************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h4>Parent Num: {{ num }}</h4>\n<h4>Parent Count: {{ parentCount }}</h4>\n<counter [count]=\"num\" (result)=\"onChange($event)\" (displayMessage)=\"displayMessage($event)\"> </counter>\n<div *ngIf=\"name && message\" class=\"pt2 pb2\">\n  <h4>{{ name }}: {{ message }}</h4>\n</div>\n<br />\n\n<button\n  class=\"br4 pt2 pb2 pl4 pr4 white bg-dark-green bn\"\n  [ngClass]=\"{ active: isOn, disabled: isDisabled }\"\n  (click)=\"toggle(!isOn)\"\n>\n  Click me!\n</button>\n");

/***/ }),

/***/ "./src/app/kitchen-sink/angular-directives/components/angular-directives.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/kitchen-sink/angular-directives/components/angular-directives.ts ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AngularDirectivesComponent = class AngularDirectivesComponent {
};
AngularDirectivesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'angular-directives',
        template: `
  <div>
    <ngif-directive></ngif-directive>
    <hr/>
    <ngfor-directive></ngfor-directive>
    <hr/>
    <ngswitch-directive></ngswitch-directive>
    <hr/>
    <ngclass-directive></ngclass-directive>
    <hr/>
    <ngstyle-directive></ngstyle-directive>
    <hr/>
    <nglocalization-directive></nglocalization-directive>
  </div>
  `
    })
], AngularDirectivesComponent);
/* harmony default export */ __webpack_exports__["default"] = (AngularDirectivesComponent);


/***/ }),

/***/ "./src/app/kitchen-sink/angular-directives/components/hello-directives.ts":
/*!********************************************************************************!*\
  !*** ./src/app/kitchen-sink/angular-directives/components/hello-directives.ts ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let HelloDirectives = class HelloDirectives {
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], HelloDirectives.prototype, "msg", void 0);
HelloDirectives = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'hello-directives',
        template: `
  <h4>
    Message: {{msg}}
  </h4>
  `
    })
], HelloDirectives);
/* harmony default export */ __webpack_exports__["default"] = (HelloDirectives);


/***/ }),

/***/ "./src/app/kitchen-sink/angular-directives/components/ngclass-directive.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/kitchen-sink/angular-directives/components/ngclass-directive.ts ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let NgClassDirective = class NgClassDirective {
    constructor() {
        this.isOn = false;
        this.isDisabled = false;
    }
    toggle(newState) {
        if (!this.isDisabled) {
            this.isOn = newState;
        }
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], NgClassDirective.prototype, "isDisabled", void 0);
NgClassDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'ngclass-directive',
        template: `
     <div class="button"
       [ngClass]="{active: isOn, disabled: isDisabled}"
         (click)="toggle(!isOn)">
         <h4>Click me!</h4>
     </div>`,
        styles: ["\n    .button {\n      padding: 10px;\n      border: medium solid black;\n    }\n\n    .active {\n      background-color: red;\n    }\n\n    .disabled {\n      color: gray;\n      border: medium solid gray;\n    }\n  "]
    })
], NgClassDirective);
/* harmony default export */ __webpack_exports__["default"] = (NgClassDirective);


/***/ }),

/***/ "./src/app/kitchen-sink/angular-directives/components/ngfor-directive.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/kitchen-sink/angular-directives/components/ngfor-directive.ts ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let NgForDirective = class NgForDirective {
    constructor() {
        this.names = [
            'John',
            'Sam',
            'Mike',
            'Sumit',
            'Igor'
        ];
    }
};
NgForDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'ngfor-directive',
        template: `
  <div>
     <hello-directives *ngFor="let name of names" [msg]="'Hello from ' + name">
     </hello-directives>
  </div>
  `
    })
], NgForDirective);
/* harmony default export */ __webpack_exports__["default"] = (NgForDirective);


/***/ }),

/***/ "./src/app/kitchen-sink/angular-directives/components/ngif-directive.ts":
/*!******************************************************************************!*\
  !*** ./src/app/kitchen-sink/angular-directives/components/ngif-directive.ts ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let NgIfDirective = class NgIfDirective {
    constructor() {
        this.sayHello = false;
    }
    toggle() {
        this.sayHello = !this.sayHello;
    }
};
NgIfDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'ngif-directive',
        template: `
  <div>
    <hello-directives msg="Hello from John!!" *ngIf="sayHello">
    </hello-directives>

    <hello-directives msg="Hi from John!!" *ngIf="!sayHello">
    </hello-directives>

    <button class="btn btn-primary"
       (click)="toggle()">
      {{sayHello ? 'Say Hi': 'Say Hello'}}
    </button>
  </div>
  `
    })
], NgIfDirective);
/* harmony default export */ __webpack_exports__["default"] = (NgIfDirective);


/***/ }),

/***/ "./src/app/kitchen-sink/angular-directives/components/nglocalization-directive.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/kitchen-sink/angular-directives/components/nglocalization-directive.ts ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let NgLocalizationDirective = class NgLocalizationDirective {
    constructor() {
        this.value = 'init';
    }
    inc() {
        this.value = this.value === 'init' ? 0 : this.value + 1;
    }
};
NgLocalizationDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'nglocalization-directive',
        template: `
    <h4>Value = {{value}}</h4>
    <button class="btn btn-warning" (click)="inc()">Increment</button>
    <h4 [ngPlural]="value">
      <ng-template ngPluralCase="=0">there is nothing</ng-template>
      <ng-template ngPluralCase="=1">there is one</ng-template>
      <ng-template ngPluralCase="few">there are a few</ng-template>
      <ng-template ngPluralCase="other">there is some number</ng-template>
    </h4>
  `,
    })
], NgLocalizationDirective);
/* harmony default export */ __webpack_exports__["default"] = (NgLocalizationDirective);


/***/ }),

/***/ "./src/app/kitchen-sink/angular-directives/components/ngstyle-directive.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/kitchen-sink/angular-directives/components/ngstyle-directive.ts ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let NgStyleDirective = class NgStyleDirective {
    constructor() {
        this.style = 'normal';
        this.weight = 'normal';
        this.size = '20px';
    }
    changeStyle($event) {
        this.style = $event.target.checked ? 'italic' : 'normal';
    }
    changeWeight($event) {
        this.weight = $event.target.checked ? 'bold' : 'normal';
    }
};
NgStyleDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'ngstyle-directive',
        template: `
   <h1 [ngStyle]="{'font-style': style,
    'font-size': size, 'font-weight': weight}">
     Change style of this text!
   </h1>

   <hr>
   <label>Italic: <input type="checkbox" (change)="changeStyle($event)"></label>
   <label>Bold: <input type="checkbox" (change)="changeWeight($event)"></label>
   <label>Size: <input type="text" [value]="size"
   (change)="size = $event.target.value"></label>
 `
    })
], NgStyleDirective);
/* harmony default export */ __webpack_exports__["default"] = (NgStyleDirective);


/***/ }),

/***/ "./src/app/kitchen-sink/angular-directives/components/ngswitch-directive.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/kitchen-sink/angular-directives/components/ngswitch-directive.ts ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let NgSwitchDirective = class NgSwitchDirective {
    constructor() {
        this.color = 'red';
        this.colors = [
            'red',
            'green',
            'yellow',
            'blue',
            'grey',
            'aaa',
            'bbb'
        ];
    }
    switch() {
        const random = parseInt(Math.random() * 6 + '', 10);
        this.color = this.colors[random];
    }
};
NgSwitchDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'ngswitch-directive',
        template: `
  <div>
     <div class="container" [ngSwitch]="color">
        <hello-directives *ngSwitchCase="'red'" [msg]="'Color is Red'">
        </hello-directives>

        <hello-directives *ngSwitchCase="'green'" [msg]="'Color is Green'">
        </hello-directives>

        <hello-directives *ngSwitchCase="'yellow'" [msg]="'Color is Yellow'">
        </hello-directives>

        <hello-directives *ngSwitchCase="'blue'" [msg]="'Color is Blue'">
        </hello-directives>

        <hello-directives *ngSwitchCase="'grey'" [msg]="'Color is Grey'">
        </hello-directives>

        <hello-directives *ngSwitchDefault [msg]="'No Color Selected'">
        </hello-directives>
     </div>
     <button class="btn btn-success" (click)="switch()">Switch Color</button>
  </div>
  `
    })
], NgSwitchDirective);
/* harmony default export */ __webpack_exports__["default"] = (NgSwitchDirective);


/***/ }),

/***/ "./src/app/kitchen-sink/angular-directives/index.ts":
/*!**********************************************************!*\
  !*** ./src/app/kitchen-sink/angular-directives/index.ts ***!
  \**********************************************************/
/*! exports provided: ANGULAR_DIRECTIVES_COMPONENTS, AngularDirectivesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ANGULAR_DIRECTIVES_COMPONENTS", function() { return ANGULAR_DIRECTIVES_COMPONENTS; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _components_angular_directives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/angular-directives */ "./src/app/kitchen-sink/angular-directives/components/angular-directives.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AngularDirectivesComponent", function() { return _components_angular_directives__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _components_hello_directives__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/hello-directives */ "./src/app/kitchen-sink/angular-directives/components/hello-directives.ts");
/* harmony import */ var _components_ngclass_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/ngclass-directive */ "./src/app/kitchen-sink/angular-directives/components/ngclass-directive.ts");
/* harmony import */ var _components_ngfor_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/ngfor-directive */ "./src/app/kitchen-sink/angular-directives/components/ngfor-directive.ts");
/* harmony import */ var _components_ngif_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/ngif-directive */ "./src/app/kitchen-sink/angular-directives/components/ngif-directive.ts");
/* harmony import */ var _components_nglocalization_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/nglocalization-directive */ "./src/app/kitchen-sink/angular-directives/components/nglocalization-directive.ts");
/* harmony import */ var _components_ngstyle_directive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/ngstyle-directive */ "./src/app/kitchen-sink/angular-directives/components/ngstyle-directive.ts");
/* harmony import */ var _components_ngswitch_directive__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/ngswitch-directive */ "./src/app/kitchen-sink/angular-directives/components/ngswitch-directive.ts");









const ANGULAR_DIRECTIVES_COMPONENTS = [
    _components_angular_directives__WEBPACK_IMPORTED_MODULE_1__["default"], _components_hello_directives__WEBPACK_IMPORTED_MODULE_2__["default"],
    _components_ngclass_directive__WEBPACK_IMPORTED_MODULE_3__["default"], _components_ngfor_directive__WEBPACK_IMPORTED_MODULE_4__["default"], _components_ngif_directive__WEBPACK_IMPORTED_MODULE_5__["default"],
    _components_nglocalization_directive__WEBPACK_IMPORTED_MODULE_6__["default"], _components_ngstyle_directive__WEBPACK_IMPORTED_MODULE_7__["default"], _components_ngswitch_directive__WEBPACK_IMPORTED_MODULE_8__["default"],
];



/***/ }),

/***/ "./src/app/kitchen-sink/change-detection/components/change-detection.ts":
/*!******************************************************************************!*\
  !*** ./src/app/kitchen-sink/change-detection/components/change-detection.ts ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _models_user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/user */ "./src/app/kitchen-sink/change-detection/models/user.ts");



let ChangeDetectionComponent = class ChangeDetectionComponent {
    constructor() {
        this.user = new _models_user__WEBPACK_IMPORTED_MODULE_2__["User"](1, 'John Doe', 'john@doe.com');
    }
    reset() {
        this.user = new _models_user__WEBPACK_IMPORTED_MODULE_2__["User"](1, 'John Doe', 'john@doe.com');
    }
    makeUserOnline(type) {
        if (type === 0) {
            this.user.isOnline = true;
        }
        else if (type === 1) {
            this.user = Object.assign({}, this.user, { isOnline: true });
        }
    }
};
ChangeDetectionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'change-detection',
        template: `
  <div>
    <button type="button" class="btn btn-danger"
      (click)="reset()">
      Reset
    </button>

    <button type="button" class="btn btn-primary"
      (click)="makeUserOnline(0)">
      Make User Online (mutable)
    </button>

    <button type="button" class="btn btn-success"
      (click)="makeUserOnline(1)">
      Make User Online (immutable)
    </button>

    <user-info-default [user]="user">
    </user-info-default>

    <user-info-push [user]="user">
    </user-info-push>

  </div>
  `
    })
], ChangeDetectionComponent);
/* harmony default export */ __webpack_exports__["default"] = (ChangeDetectionComponent);


/***/ }),

/***/ "./src/app/kitchen-sink/change-detection/components/user-info-default.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/kitchen-sink/change-detection/components/user-info-default.ts ***!
  \*******************************************************************************/
/*! exports provided: UserInfoDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserInfoDefault", function() { return UserInfoDefault; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let UserInfoDefault = class UserInfoDefault {
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], UserInfoDefault.prototype, "user", void 0);
UserInfoDefault = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'user-info-default',
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].Default,
        template: `
    <div [ngClass]="{'bg' : user.isOnline}">
      <h4>User Info Default</h4>
      <p>
        <label>User Id: {{user.id}} {{user.isOnline}}</label>
      </p>
    </div>`,
        styles: ["\n    .bg {\n      background-color: red;\n    }\n  "]
    })
], UserInfoDefault);



/***/ }),

/***/ "./src/app/kitchen-sink/change-detection/components/user-info-push.ts":
/*!****************************************************************************!*\
  !*** ./src/app/kitchen-sink/change-detection/components/user-info-push.ts ***!
  \****************************************************************************/
/*! exports provided: UserInfoPush */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserInfoPush", function() { return UserInfoPush; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let UserInfoPush = class UserInfoPush {
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], UserInfoPush.prototype, "user", void 0);
UserInfoPush = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'user-info-push',
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
        template: `
    <div [ngClass]="{'bg' : user.isOnline}">
      <h4>User Info OnPush</h4>
      <p>
        <label>User Id: {{user.id}} {{user.isOnline}}</label>
      </p>
    </div>`,
        styles: ["\n    .bg {\n      background-color: red;\n    }\n  "]
    })
], UserInfoPush);



/***/ }),

/***/ "./src/app/kitchen-sink/change-detection/index.ts":
/*!********************************************************!*\
  !*** ./src/app/kitchen-sink/change-detection/index.ts ***!
  \********************************************************/
/*! exports provided: CHANGE_DETECTION_COMPONENTS, ChangeDetectionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CHANGE_DETECTION_COMPONENTS", function() { return CHANGE_DETECTION_COMPONENTS; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _components_change_detection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/change-detection */ "./src/app/kitchen-sink/change-detection/components/change-detection.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ChangeDetectionComponent", function() { return _components_change_detection__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _components_user_info_default__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/user-info-default */ "./src/app/kitchen-sink/change-detection/components/user-info-default.ts");
/* harmony import */ var _components_user_info_push__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/user-info-push */ "./src/app/kitchen-sink/change-detection/components/user-info-push.ts");




const CHANGE_DETECTION_COMPONENTS = [
    _components_change_detection__WEBPACK_IMPORTED_MODULE_1__["default"],
    _components_user_info_push__WEBPACK_IMPORTED_MODULE_3__["UserInfoPush"], _components_user_info_default__WEBPACK_IMPORTED_MODULE_2__["UserInfoDefault"]
];



/***/ }),

/***/ "./src/app/kitchen-sink/change-detection/models/user.ts":
/*!**************************************************************!*\
  !*** ./src/app/kitchen-sink/change-detection/models/user.ts ***!
  \**************************************************************/
/*! exports provided: User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class User {
    constructor(id, name, email, isOnline = false) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.isOnline = isOnline;
    }
}


/***/ }),

/***/ "./src/app/kitchen-sink/di-tree/components/component1.ts":
/*!***************************************************************!*\
  !*** ./src/app/kitchen-sink/di-tree/components/component1.ts ***!
  \***************************************************************/
/*! exports provided: Component1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Component1", function() { return Component1; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_service3__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/service3 */ "./src/app/kitchen-sink/di-tree/services/service3.ts");



let Component1 = class Component1 {
    constructor(s3) {
        this.s3 = s3;
        this.service3Value = s3.value;
    }
};
Component1.ctorParameters = () => [
    { type: _services_service3__WEBPACK_IMPORTED_MODULE_2__["Service3"] }
];
Component1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'component1',
        template: `
    <p class="link blue">Component One</p>
    <p>{{ service3Value }}</p>
    <div class="pl4">
      <component3></component3>
      <component4></component4>
    </div>
  `
    })
], Component1);



/***/ }),

/***/ "./src/app/kitchen-sink/di-tree/components/component2.ts":
/*!***************************************************************!*\
  !*** ./src/app/kitchen-sink/di-tree/components/component2.ts ***!
  \***************************************************************/
/*! exports provided: Component2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Component2", function() { return Component2; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_service2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/service2 */ "./src/app/kitchen-sink/di-tree/services/service2.ts");



let Component2 = class Component2 {
    constructor(s2) {
        this.s2 = s2;
        this.service2Value = s2.value;
    }
};
Component2.ctorParameters = () => [
    { type: _services_service2__WEBPACK_IMPORTED_MODULE_2__["Service2"] }
];
Component2 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'component2',
        template: `
    <p class="link blue">
      Component Two
    </p>
    <p>{{ service2Value }}</p>
    <div class="pl4">
      <component5></component5>
      <component6></component6>
    </div>
  `
    })
], Component2);



/***/ }),

/***/ "./src/app/kitchen-sink/di-tree/components/component3.ts":
/*!***************************************************************!*\
  !*** ./src/app/kitchen-sink/di-tree/components/component3.ts ***!
  \***************************************************************/
/*! exports provided: Component3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Component3", function() { return Component3; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_service1__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/service1 */ "./src/app/kitchen-sink/di-tree/services/service1.ts");
/* harmony import */ var _services_service3__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/service3 */ "./src/app/kitchen-sink/di-tree/services/service3.ts");




let Component3 = class Component3 {
    constructor(s1, s3) {
        this.s1 = s1;
        this.s3 = s3;
        this.service1Value = s1.value;
        this.service3Value = s3.value;
    }
};
Component3.ctorParameters = () => [
    { type: _services_service1__WEBPACK_IMPORTED_MODULE_2__["Service1"] },
    { type: _services_service3__WEBPACK_IMPORTED_MODULE_3__["Service3"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(() => _services_service3__WEBPACK_IMPORTED_MODULE_3__["Service3"]),] }] }
];
Component3 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'component3',
        template: `
    <p class="link blue">Component Three</p>
    <p>{{ service1Value }}</p>
    <p>{{ service3Value }}</p>
  `
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(() => _services_service3__WEBPACK_IMPORTED_MODULE_3__["Service3"])))
], Component3);



/***/ }),

/***/ "./src/app/kitchen-sink/di-tree/components/component4.ts":
/*!***************************************************************!*\
  !*** ./src/app/kitchen-sink/di-tree/components/component4.ts ***!
  \***************************************************************/
/*! exports provided: Component4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Component4", function() { return Component4; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_service1__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/service1 */ "./src/app/kitchen-sink/di-tree/services/service1.ts");
/* harmony import */ var _services_service4__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/service4 */ "./src/app/kitchen-sink/di-tree/services/service4.ts");




let Component4 = class Component4 {
    constructor(s1, s4) {
        this.s1 = s1;
        this.s4 = s4;
        this.service1Value = s1.value;
        this.service4Value = s4.value;
    }
};
Component4.ctorParameters = () => [
    { type: _services_service1__WEBPACK_IMPORTED_MODULE_2__["Service1"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_services_service4__WEBPACK_IMPORTED_MODULE_3__["Service4"],] }] }
];
Component4 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'component4',
        template: `
    <p class="link blue">Component Four</p>
    <p>{{ service1Value }}</p>
    <p>{{ service4Value }}</p>
  `
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_services_service4__WEBPACK_IMPORTED_MODULE_3__["Service4"]))
], Component4);



/***/ }),

/***/ "./src/app/kitchen-sink/di-tree/components/component5.ts":
/*!***************************************************************!*\
  !*** ./src/app/kitchen-sink/di-tree/components/component5.ts ***!
  \***************************************************************/
/*! exports provided: Component5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Component5", function() { return Component5; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_service3__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/service3 */ "./src/app/kitchen-sink/di-tree/services/service3.ts");
/* harmony import */ var _services_service4__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/service4 */ "./src/app/kitchen-sink/di-tree/services/service4.ts");




let Component5 = class Component5 {
    constructor(s3, s4) {
        this.s3 = s3;
        this.s4 = s4;
        this.service3Value = s3.value;
        this.service4Value = s4.value;
    }
};
Component5.ctorParameters = () => [
    { type: _services_service3__WEBPACK_IMPORTED_MODULE_2__["Service3"] },
    { type: _services_service4__WEBPACK_IMPORTED_MODULE_3__["Service4"] }
];
Component5 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'component5',
        providers: [_services_service3__WEBPACK_IMPORTED_MODULE_2__["Service3"], _services_service4__WEBPACK_IMPORTED_MODULE_3__["Service4"]],
        template: `
    <p class="link blue">Component Five</p>
    <p>{{ service3Value }}</p>
    <p>{{ service4Value }}</p>
  `
    })
], Component5);



/***/ }),

/***/ "./src/app/kitchen-sink/di-tree/components/component6.ts":
/*!***************************************************************!*\
  !*** ./src/app/kitchen-sink/di-tree/components/component6.ts ***!
  \***************************************************************/
/*! exports provided: Component6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Component6", function() { return Component6; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_service1__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/service1 */ "./src/app/kitchen-sink/di-tree/services/service1.ts");
/* harmony import */ var _services_service2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/service2 */ "./src/app/kitchen-sink/di-tree/services/service2.ts");




let Component6 = class Component6 {
    constructor(s1, s2) {
        this.s1 = s1;
        this.s2 = s2;
        this.service1Value = s1.value;
        this.service2Value = s2.value;
    }
};
Component6.ctorParameters = () => [
    { type: _services_service1__WEBPACK_IMPORTED_MODULE_2__["Service1"] },
    { type: _services_service2__WEBPACK_IMPORTED_MODULE_3__["Service2"] }
];
Component6 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'component6',
        template: `
    <p class="link blue">Component Six</p>
    <p>{{ service1Value }}</p>
    <p>{{ service2Value }}</p>
  `
    })
], Component6);



/***/ }),

/***/ "./src/app/kitchen-sink/di-tree/components/di-tree.ts":
/*!************************************************************!*\
  !*** ./src/app/kitchen-sink/di-tree/components/di-tree.ts ***!
  \************************************************************/
/*! exports provided: DITreeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DITreeComponent", function() { return DITreeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_service1__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/service1 */ "./src/app/kitchen-sink/di-tree/services/service1.ts");



let DITreeComponent = class DITreeComponent {
    constructor(s1) {
        this.s1 = s1;
        this.service1Value = s1.value;
    }
};
DITreeComponent.ctorParameters = () => [
    { type: _services_service1__WEBPACK_IMPORTED_MODULE_2__["Service1"] }
];
DITreeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'di-tree',
        template: `
    <p class="link blue">
      DI App
    </p>
    <p>{{ service1Value }}</p>
    <div class="pl4">
      <component1></component1>
      <component2></component2>
    </div>
  `
    })
], DITreeComponent);



/***/ }),

/***/ "./src/app/kitchen-sink/di-tree/index.ts":
/*!***********************************************!*\
  !*** ./src/app/kitchen-sink/di-tree/index.ts ***!
  \***********************************************/
/*! exports provided: DI_TREE_SERVICES, DI_TREE_COMPONENTS, DITreeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DI_TREE_SERVICES", function() { return DI_TREE_SERVICES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DI_TREE_COMPONENTS", function() { return DI_TREE_COMPONENTS; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _components_di_tree__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/di-tree */ "./src/app/kitchen-sink/di-tree/components/di-tree.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DITreeComponent", function() { return _components_di_tree__WEBPACK_IMPORTED_MODULE_1__["DITreeComponent"]; });

/* harmony import */ var _components_component1__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/component1 */ "./src/app/kitchen-sink/di-tree/components/component1.ts");
/* harmony import */ var _components_component2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/component2 */ "./src/app/kitchen-sink/di-tree/components/component2.ts");
/* harmony import */ var _components_component3__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/component3 */ "./src/app/kitchen-sink/di-tree/components/component3.ts");
/* harmony import */ var _components_component4__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/component4 */ "./src/app/kitchen-sink/di-tree/components/component4.ts");
/* harmony import */ var _components_component5__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/component5 */ "./src/app/kitchen-sink/di-tree/components/component5.ts");
/* harmony import */ var _components_component6__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/component6 */ "./src/app/kitchen-sink/di-tree/components/component6.ts");
/* harmony import */ var _services_service1__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./services/service1 */ "./src/app/kitchen-sink/di-tree/services/service1.ts");
/* harmony import */ var _services_service2__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./services/service2 */ "./src/app/kitchen-sink/di-tree/services/service2.ts");
/* harmony import */ var _services_service3__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./services/service3 */ "./src/app/kitchen-sink/di-tree/services/service3.ts");
/* harmony import */ var _services_service4__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./services/service4 */ "./src/app/kitchen-sink/di-tree/services/service4.ts");












const DI_TREE_SERVICES = [
    _services_service1__WEBPACK_IMPORTED_MODULE_8__["Service1"], _services_service2__WEBPACK_IMPORTED_MODULE_9__["Service2"], _services_service3__WEBPACK_IMPORTED_MODULE_10__["Service3"], _services_service4__WEBPACK_IMPORTED_MODULE_11__["Service4"],
];
const DI_TREE_COMPONENTS = [
    _components_di_tree__WEBPACK_IMPORTED_MODULE_1__["DITreeComponent"],
    _components_component1__WEBPACK_IMPORTED_MODULE_2__["Component1"], _components_component2__WEBPACK_IMPORTED_MODULE_3__["Component2"], _components_component3__WEBPACK_IMPORTED_MODULE_4__["Component3"],
    _components_component4__WEBPACK_IMPORTED_MODULE_5__["Component4"], _components_component5__WEBPACK_IMPORTED_MODULE_6__["Component5"], _components_component6__WEBPACK_IMPORTED_MODULE_7__["Component6"],
];



/***/ }),

/***/ "./src/app/kitchen-sink/di-tree/services/service1.ts":
/*!***********************************************************!*\
  !*** ./src/app/kitchen-sink/di-tree/services/service1.ts ***!
  \***********************************************************/
/*! exports provided: Service1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Service1", function() { return Service1; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class Service1 {
    constructor() {
        this.value = 'Service One';
        this.value = this.value + ' Id: ' + Math.floor(Math.random() * 500);
    }
}


/***/ }),

/***/ "./src/app/kitchen-sink/di-tree/services/service2.ts":
/*!***********************************************************!*\
  !*** ./src/app/kitchen-sink/di-tree/services/service2.ts ***!
  \***********************************************************/
/*! exports provided: Service2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Service2", function() { return Service2; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class Service2 {
    constructor() {
        this.value = 'Service Two';
        this.value = this.value + ' Id: ' + Math.floor(Math.random() * 500);
    }
}


/***/ }),

/***/ "./src/app/kitchen-sink/di-tree/services/service3.ts":
/*!***********************************************************!*\
  !*** ./src/app/kitchen-sink/di-tree/services/service3.ts ***!
  \***********************************************************/
/*! exports provided: Service3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Service3", function() { return Service3; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class Service3 {
    constructor() {
        this.value = 'Service Three';
        this.value = this.value + ' Id: ' + Math.floor(Math.random() * 500);
    }
}


/***/ }),

/***/ "./src/app/kitchen-sink/di-tree/services/service4.ts":
/*!***********************************************************!*\
  !*** ./src/app/kitchen-sink/di-tree/services/service4.ts ***!
  \***********************************************************/
/*! exports provided: Service4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Service4", function() { return Service4; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class Service4 {
    constructor() {
        this.value = 'Service Four';
        this.value = this.value + ' Id: ' + Math.floor(Math.random() * 500);
    }
}


/***/ }),

/***/ "./src/app/kitchen-sink/forms/components/control-form/control-form.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/kitchen-sink/forms/components/control-form/control-form.component.ts ***!
  \**************************************************************************************/
/*! exports provided: ControlFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ControlFormComponent", function() { return ControlFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");



let ControlFormComponent = class ControlFormComponent {
    constructor() {
        this.formGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('John Doe'),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('johndoe@gmail.com')
        });
    }
    onSubmit(value) {
        console.log('you submitted value: ', value);
    }
};
ControlFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'control-form',
        template: `
    <div>
      <form (submit)="onSubmit(formGroup.value)">
        <div class="flex pa2">
          <label class="w-third">Name</label>
          <input
            type="text"
            id="name"
            placeholder="Name"
            class="ba pa2 w-50"
            [formControl]="formGroup.controls['name']"
          />
        </div>
        <div class="flex pa2">
          <label class="w-third">Email</label>
          <input
            type="text"
            id="email"
            placeholder="Email"
            class="ba pa2 w-50"
            [formControl]="formGroup.controls['email']"
          />
        </div>
        <div class="flex pa2">
          <label class="w-third"></label>
          <button type="submit" class="br4 bn pt2 pb2 pl4 pr4 white bg-dark-green">Submit</button>
        </div>
      </form>
    </div>
  `
    })
], ControlFormComponent);



/***/ }),

/***/ "./src/app/kitchen-sink/forms/components/form2/form2.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/kitchen-sink/forms/components/form2/form2.component.ts ***!
  \************************************************************************/
/*! exports provided: Form2Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Form2Component", function() { return Form2Component; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let Form2Component = class Form2Component {
    constructor() {
        this.myform = {};
    }
    onSubmit(myform) {
        console.log(myform);
    }
};
Form2Component = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'form2',
        template: `
    <div>
      <form (submit)="onSubmit(myform)">
        <div class="flex pa2">
          <label class="w-third">Description</label>
          <input type="text" [(ngModel)]="myform.description" name="description" required class="ba pa2 w-50" />
        </div>
        <div class="flex pa2">
          <label class="w-third">Points</label>
          <input
            type="number"
            min="1"
            max="10"
            step="1"
            required
            name="points"
            [(ngModel)]="myform.points"
            class="ba pa2 w-50"
          />
        </div>
        <div class="flex pa2">
          <label class="w-third">Status</label>
          <select [(ngModel)]="myform.status" class="ba pa2 w-50" name="status">
            <option value="0">Pending</option>
            <option value="1">Started</option>
            <option value="2">Finished</option>
            <option value="3">Overdue</option>
          </select>
        </div>
        <div class="flex pa2">
          <label class="w-third">Priority</label>
          <select [(ngModel)]="myform.priority" class="ba pa2 w-50" name="priority">
            <option value="0">Low</option>
            <option value="1">Medium</option>
            <option value="2">High</option>
          </select>
        </div>
        <div class="flex pa2">
          <label class="w-third">Date</label>
          <input type="date" [(ngModel)]="myform.targetDate" class="ba pa2 w-50" name="targetDate" />
        </div>
        <div class="flex pa2">
          <label class="w-third"></label>
          <button type="submit" class="br4 pt2 pb2 pl4 pr4 bn white bg-dark-green">Submit</button>
        </div>
      </form>
    </div>
  `
    })
], Form2Component);



/***/ }),

/***/ "./src/app/kitchen-sink/forms/components/my-form/my-form.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/kitchen-sink/forms/components/my-form/my-form.component.ts ***!
  \****************************************************************************/
/*! exports provided: MyFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyFormComponent", function() { return MyFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");



let MyFormComponent = class MyFormComponent {
    constructor() {
        this.email = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]();
        this.password = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]();
    }
    onSubmit() {
        console.log(this.email, this.password);
    }
};
MyFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'my-form',
        template: `
    <form (submit)="onSubmit()" novalidate>
      <div class="flex pa2">
        <label for="email" class="w-third">Email:</label>
        <input class="ba pa2 w-50" type="email" id="email" [formControl]="email" />
      </div>

      <div class="flex pa2">
        <label for="password" class="w-third">Password:</label>
        <input class="ba pa2 w-50" type="password" id="password" [formControl]="password" />
      </div>
      <br />
      <div class="flex pa2">
        <label class="w-third"></label>
        <button class="br4 pt2 pb2 pl4 pr4 white bg-dark-green bn" type="submit">Register</button>
      </div>
    </form>
  `
    })
], MyFormComponent);



/***/ }),

/***/ "./src/app/kitchen-sink/forms/index.ts":
/*!*********************************************!*\
  !*** ./src/app/kitchen-sink/forms/index.ts ***!
  \*********************************************/
/*! exports provided: MyFormComponent, ControlFormComponent, Form2Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _components_my_form_my_form_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/my-form/my-form.component */ "./src/app/kitchen-sink/forms/components/my-form/my-form.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MyFormComponent", function() { return _components_my_form_my_form_component__WEBPACK_IMPORTED_MODULE_1__["MyFormComponent"]; });

/* harmony import */ var _components_control_form_control_form_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/control-form/control-form.component */ "./src/app/kitchen-sink/forms/components/control-form/control-form.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ControlFormComponent", function() { return _components_control_form_control_form_component__WEBPACK_IMPORTED_MODULE_2__["ControlFormComponent"]; });

/* harmony import */ var _components_form2_form2_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/form2/form2.component */ "./src/app/kitchen-sink/forms/components/form2/form2.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Form2Component", function() { return _components_form2_form2_component__WEBPACK_IMPORTED_MODULE_3__["Form2Component"]; });







/***/ }),

/***/ "./src/app/kitchen-sink/home/components/home/home.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/kitchen-sink/home/components/home/home.component.css ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2tpdGNoZW4tc2luay9ob21lL2NvbXBvbmVudHMvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/kitchen-sink/home/components/home/home.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/kitchen-sink/home/components/home/home.component.ts ***!
  \*********************************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");




const TITLES = {
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
let HomeComponent = class HomeComponent {
    constructor(router) {
        this.router = router;
        router.events.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])(e => e instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationEnd"])).subscribe((e) => {
            const path = e.url.replace('/kitchen-sink', '').replace('/', '');
            this.title = TITLES[path];
        });
    }
};
HomeComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'home',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/kitchen-sink/home/components/home/home.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./home.component.css */ "./src/app/kitchen-sink/home/components/home/home.component.css")).default]
    })
], HomeComponent);



/***/ }),

/***/ "./src/app/kitchen-sink/home/index.ts":
/*!********************************************!*\
  !*** ./src/app/kitchen-sink/home/index.ts ***!
  \********************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/kitchen-sink/home/components/home/home.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return _components_home_home_component__WEBPACK_IMPORTED_MODULE_1__["HomeComponent"]; });





/***/ }),

/***/ "./src/app/kitchen-sink/input-output/components/counter/counter.component.css":
/*!************************************************************************************!*\
  !*** ./src/app/kitchen-sink/input-output/components/counter/counter.component.css ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2tpdGNoZW4tc2luay9pbnB1dC1vdXRwdXQvY29tcG9uZW50cy9jb3VudGVyL2NvdW50ZXIuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/kitchen-sink/input-output/components/counter/counter.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/kitchen-sink/input-output/components/counter/counter.component.ts ***!
  \***********************************************************************************/
/*! exports provided: CounterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CounterComponent", function() { return CounterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let CounterComponent = class CounterComponent {
    constructor() {
        this.count = 0;
        this.result = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.displayMessage = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    increment() {
        this.count++;
        this.result.emit(this.count);
    }
    sendMessage() {
        const data = { 'name': 'John11', 'message': 'Hello there11!!!' };
        this.displayMessage.emit(data);
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], CounterComponent.prototype, "count", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], CounterComponent.prototype, "result", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], CounterComponent.prototype, "displayMessage", void 0);
CounterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'counter',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./counter.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/kitchen-sink/input-output/components/counter/counter.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./counter.component.css */ "./src/app/kitchen-sink/input-output/components/counter/counter.component.css")).default]
    })
], CounterComponent);



/***/ }),

/***/ "./src/app/kitchen-sink/input-output/components/input-output/input-output.component.css":
/*!**********************************************************************************************!*\
  !*** ./src/app/kitchen-sink/input-output/components/input-output/input-output.component.css ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2tpdGNoZW4tc2luay9pbnB1dC1vdXRwdXQvY29tcG9uZW50cy9pbnB1dC1vdXRwdXQvaW5wdXQtb3V0cHV0LmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/kitchen-sink/input-output/components/input-output/input-output.component.ts":
/*!*********************************************************************************************!*\
  !*** ./src/app/kitchen-sink/input-output/components/input-output/input-output.component.ts ***!
  \*********************************************************************************************/
/*! exports provided: InputOutputComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputOutputComponent", function() { return InputOutputComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let InputOutputComponent = class InputOutputComponent {
    constructor() {
        this.isOn = false;
        this.isDisabled = false;
        this.num = 0;
        this.parentCount = 0;
    }
    onChange(val) {
        this.parentCount = val;
    }
    toggle(newState) {
        if (!this.isDisabled) {
            this.isOn = newState;
        }
    }
    displayMessage(data) {
        this.message = data.message;
        this.name = data.name;
    }
};
InputOutputComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'input-output',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./input-output.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/kitchen-sink/input-output/components/input-output/input-output.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./input-output.component.css */ "./src/app/kitchen-sink/input-output/components/input-output/input-output.component.css")).default]
    })
], InputOutputComponent);



/***/ }),

/***/ "./src/app/kitchen-sink/input-output/index.ts":
/*!****************************************************!*\
  !*** ./src/app/kitchen-sink/input-output/index.ts ***!
  \****************************************************/
/*! exports provided: InputOutputComponent, CounterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _components_input_output_input_output_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/input-output/input-output.component */ "./src/app/kitchen-sink/input-output/components/input-output/input-output.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "InputOutputComponent", function() { return _components_input_output_input_output_component__WEBPACK_IMPORTED_MODULE_1__["InputOutputComponent"]; });

/* harmony import */ var _components_counter_counter_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/counter/counter.component */ "./src/app/kitchen-sink/input-output/components/counter/counter.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CounterComponent", function() { return _components_counter_counter_component__WEBPACK_IMPORTED_MODULE_2__["CounterComponent"]; });






/***/ }),

/***/ "./src/app/kitchen-sink/kitchen-sink-routing.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/kitchen-sink/kitchen-sink-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: KitchenSinkRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KitchenSinkRoutingModule", function() { return KitchenSinkRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home */ "./src/app/kitchen-sink/home/index.ts");
/* harmony import */ var _input_output__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./input-output */ "./src/app/kitchen-sink/input-output/index.ts");
/* harmony import */ var _forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./forms */ "./src/app/kitchen-sink/forms/index.ts");
/* harmony import */ var _di_tree__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./di-tree */ "./src/app/kitchen-sink/di-tree/index.ts");
/* harmony import */ var _angular_directives__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./angular-directives */ "./src/app/kitchen-sink/angular-directives/index.ts");
/* harmony import */ var _change_detection__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./change-detection */ "./src/app/kitchen-sink/change-detection/index.ts");
/* harmony import */ var _stress_tester__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./stress-tester */ "./src/app/kitchen-sink/stress-tester/index.ts");
/* harmony import */ var _metadata_test__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./metadata-test */ "./src/app/kitchen-sink/metadata-test/index.ts");
/* harmony import */ var _todo_app__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./todo-app */ "./src/app/kitchen-sink/todo-app/index.ts");












const routes = [
    {
        path: '',
        component: _home__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"],
        children: [
            { path: 'input-output', component: _input_output__WEBPACK_IMPORTED_MODULE_4__["InputOutputComponent"] },
            // { path: 'lazy-load', loadChildren: 'app/lazy-load/lazy-load.module#LazyLoadModule' },
            { path: 'my-form', component: _forms__WEBPACK_IMPORTED_MODULE_5__["MyFormComponent"] },
            { path: 'control-form', component: _forms__WEBPACK_IMPORTED_MODULE_5__["ControlFormComponent"] },
            { path: 'form2', component: _forms__WEBPACK_IMPORTED_MODULE_5__["Form2Component"] },
            { path: 'di-tree', component: _di_tree__WEBPACK_IMPORTED_MODULE_6__["DITreeComponent"] },
            { path: 'todo-app', component: _todo_app__WEBPACK_IMPORTED_MODULE_11__["TodoAppComponent"] },
            { path: 'angular-directives', component: _angular_directives__WEBPACK_IMPORTED_MODULE_7__["AngularDirectivesComponent"] },
            { path: 'change-detection', component: _change_detection__WEBPACK_IMPORTED_MODULE_8__["ChangeDetectionComponent"] },
            { path: 'stress-tester', component: _stress_tester__WEBPACK_IMPORTED_MODULE_9__["StressTesterComponent"] },
            { path: 'metadata-test', component: _metadata_test__WEBPACK_IMPORTED_MODULE_10__["MetadataTestComponent"] }
        ]
    }
];
let KitchenSinkRoutingModule = class KitchenSinkRoutingModule {
};
KitchenSinkRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], KitchenSinkRoutingModule);



/***/ }),

/***/ "./src/app/kitchen-sink/kitchen-sink.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/kitchen-sink/kitchen-sink.module.ts ***!
  \*****************************************************/
/*! exports provided: KitchenSinkModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KitchenSinkModule", function() { return KitchenSinkModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _kitchen_sink_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./kitchen-sink-routing.module */ "./src/app/kitchen-sink/kitchen-sink-routing.module.ts");
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home */ "./src/app/kitchen-sink/home/index.ts");
/* harmony import */ var _input_output__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./input-output */ "./src/app/kitchen-sink/input-output/index.ts");
/* harmony import */ var _forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./forms */ "./src/app/kitchen-sink/forms/index.ts");
/* harmony import */ var _di_tree__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./di-tree */ "./src/app/kitchen-sink/di-tree/index.ts");
/* harmony import */ var _angular_directives__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./angular-directives */ "./src/app/kitchen-sink/angular-directives/index.ts");
/* harmony import */ var _change_detection__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./change-detection */ "./src/app/kitchen-sink/change-detection/index.ts");
/* harmony import */ var _stress_tester__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./stress-tester */ "./src/app/kitchen-sink/stress-tester/index.ts");
/* harmony import */ var _metadata_test__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./metadata-test */ "./src/app/kitchen-sink/metadata-test/index.ts");
/* harmony import */ var _todo_app__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./todo-app */ "./src/app/kitchen-sink/todo-app/index.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");




// demos










let KitchenSinkModule = class KitchenSinkModule {
};
KitchenSinkModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _home__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"],
            _input_output__WEBPACK_IMPORTED_MODULE_5__["InputOutputComponent"],
            _input_output__WEBPACK_IMPORTED_MODULE_5__["CounterComponent"],
            _forms__WEBPACK_IMPORTED_MODULE_6__["MyFormComponent"],
            _forms__WEBPACK_IMPORTED_MODULE_6__["ControlFormComponent"],
            _forms__WEBPACK_IMPORTED_MODULE_6__["Form2Component"],
            ..._di_tree__WEBPACK_IMPORTED_MODULE_7__["DI_TREE_COMPONENTS"],
            ..._angular_directives__WEBPACK_IMPORTED_MODULE_8__["ANGULAR_DIRECTIVES_COMPONENTS"],
            ..._change_detection__WEBPACK_IMPORTED_MODULE_9__["CHANGE_DETECTION_COMPONENTS"],
            ..._stress_tester__WEBPACK_IMPORTED_MODULE_10__["STRESS_TESTER_COMPONENTS"],
            ..._metadata_test__WEBPACK_IMPORTED_MODULE_11__["METADATA_TEST_COMPONENTS"],
            ..._todo_app__WEBPACK_IMPORTED_MODULE_12__["TODO_APP_COMPONENTS"]
        ],
        imports: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["CommonModule"], _kitchen_sink_routing_module__WEBPACK_IMPORTED_MODULE_3__["KitchenSinkRoutingModule"]],
        providers: [..._di_tree__WEBPACK_IMPORTED_MODULE_7__["DI_TREE_SERVICES"], ..._todo_app__WEBPACK_IMPORTED_MODULE_12__["TODO_APP_SERVICES"]]
    })
], KitchenSinkModule);



/***/ }),

/***/ "./src/app/kitchen-sink/metadata-test/components/metadata-test.ts":
/*!************************************************************************!*\
  !*** ./src/app/kitchen-sink/metadata-test/components/metadata-test.ts ***!
  \************************************************************************/
/*! exports provided: MetadataFromArray, MetadataFromDecorator, MetadataFromArrayWithCustomName, MetadataFromDecoratorWithCustomName, MetadataTestComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MetadataFromArray", function() { return MetadataFromArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MetadataFromDecorator", function() { return MetadataFromDecorator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MetadataFromArrayWithCustomName", function() { return MetadataFromArrayWithCustomName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MetadataFromDecoratorWithCustomName", function() { return MetadataFromDecoratorWithCustomName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MetadataTestComponent", function() { return MetadataTestComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let MetadataFromArray = class MetadataFromArray {
};
MetadataFromArray = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'attr-from-array',
        inputs: ['attrIn'],
        outputs: ['attrOut'],
        template: `<p>{{attrIn}}</p>`
    })
], MetadataFromArray);

let MetadataFromDecorator = class MetadataFromDecorator {
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], MetadataFromDecorator.prototype, "attrIn", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], MetadataFromDecorator.prototype, "attrOut", void 0);
MetadataFromDecorator = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'attr-from-decorator',
        template: `<p>{{attrIn}}</p>`
    })
], MetadataFromDecorator);

let MetadataFromArrayWithCustomName = class MetadataFromArrayWithCustomName {
};
MetadataFromArrayWithCustomName = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'attr-from-array-custom',
        inputs: ['attrIn:attrCustomIn'],
        outputs: ['attrOut'],
        template: `<p>{{attrIn}}</p>`
    })
], MetadataFromArrayWithCustomName);

let MetadataFromDecoratorWithCustomName = class MetadataFromDecoratorWithCustomName {
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('attrCustomIn')
], MetadataFromDecoratorWithCustomName.prototype, "attrIn", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], MetadataFromDecoratorWithCustomName.prototype, "attrOut", void 0);
MetadataFromDecoratorWithCustomName = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'attr-from-decorator-custom',
        template: `<p>{{attrIn}}</p>`
    })
], MetadataFromDecoratorWithCustomName);

let MetadataTestComponent = class MetadataTestComponent {
};
MetadataTestComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'metadata-test',
        template: `
    <attr-from-array attrIn='Data from the array.'>
    </attr-from-array>

    <attr-from-decorator attrIn='Data from the decorator.'>
    </attr-from-decorator>

    <attr-from-array-custom attrCustomIn='Data from array using a custom name.'>
    </attr-from-array-custom>

    <attr-from-decorator-custom
      attrCustomIn='Data from decorator using a custom name.'>
    </attr-from-decorator-custom>
  `
    })
], MetadataTestComponent);



/***/ }),

/***/ "./src/app/kitchen-sink/metadata-test/index.ts":
/*!*****************************************************!*\
  !*** ./src/app/kitchen-sink/metadata-test/index.ts ***!
  \*****************************************************/
/*! exports provided: METADATA_TEST_COMPONENTS, MetadataTestComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "METADATA_TEST_COMPONENTS", function() { return METADATA_TEST_COMPONENTS; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _components_metadata_test__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/metadata-test */ "./src/app/kitchen-sink/metadata-test/components/metadata-test.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MetadataTestComponent", function() { return _components_metadata_test__WEBPACK_IMPORTED_MODULE_1__["MetadataTestComponent"]; });




const METADATA_TEST_COMPONENTS = [
    _components_metadata_test__WEBPACK_IMPORTED_MODULE_1__["MetadataTestComponent"], _components_metadata_test__WEBPACK_IMPORTED_MODULE_1__["MetadataFromArray"], _components_metadata_test__WEBPACK_IMPORTED_MODULE_1__["MetadataFromDecorator"],
    _components_metadata_test__WEBPACK_IMPORTED_MODULE_1__["MetadataFromArrayWithCustomName"], _components_metadata_test__WEBPACK_IMPORTED_MODULE_1__["MetadataFromDecoratorWithCustomName"]
];



/***/ }),

/***/ "./src/app/kitchen-sink/stress-tester/components/stress-tester.ts":
/*!************************************************************************!*\
  !*** ./src/app/kitchen-sink/stress-tester/components/stress-tester.ts ***!
  \************************************************************************/
/*! exports provided: StressRecItem, StressTesterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StressRecItem", function() { return StressRecItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StressTesterComponent", function() { return StressTesterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");



let StressRecItem = class StressRecItem {
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], StressRecItem.prototype, "tree", void 0);
StressRecItem = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'stress-rec-item',
        template: `
    <ul *ngFor="let each of tree">
        <li *ngIf="each.length > 0">
            <stress-rec-item [tree]="each"></stress-rec-item>
        </li>
    </ul>
  `
    })
], StressRecItem);

let StressTesterComponent = class StressTesterComponent {
    constructor() {
        this.branchingFactor = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]();
        this.depth = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]();
    }
    onSubmit() {
        const branchingFactor = this.branchingFactor.value;
        const depth = this.depth.value;
        let accum = [];
        let i = depth;
        while (i--) {
            const innerAccum = [];
            let j = branchingFactor;
            while (j--) {
                innerAccum.push([...accum]);
            }
            accum = innerAccum;
        }
        this.tree = accum;
    }
};
StressTesterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'stress-tester',
        template: `
  <div>
    <p>Deep Tree Test</p>
    <form (submit)="onSubmit()" novalidate>
      <div>
        <label>Branching factor of tree:
          <input type="number" id="branching-factor" [formControl]="branchingFactor">
        </label>
        <label>Branching depth of tree:
          <input type="number" [formControl]="depth">
        </label>
      </div>
      <button type="submit">Run</button>
    </form>
    <br>
    <div *ngIf="tree">
      <stress-rec-item [tree]="tree"></stress-rec-item>
    </div>
  </div>
  `
    })
], StressTesterComponent);



/***/ }),

/***/ "./src/app/kitchen-sink/stress-tester/index.ts":
/*!*****************************************************!*\
  !*** ./src/app/kitchen-sink/stress-tester/index.ts ***!
  \*****************************************************/
/*! exports provided: STRESS_TESTER_COMPONENTS, StressTesterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "STRESS_TESTER_COMPONENTS", function() { return STRESS_TESTER_COMPONENTS; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _components_stress_tester__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/stress-tester */ "./src/app/kitchen-sink/stress-tester/components/stress-tester.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "StressTesterComponent", function() { return _components_stress_tester__WEBPACK_IMPORTED_MODULE_1__["StressTesterComponent"]; });



const STRESS_TESTER_COMPONENTS = [
    _components_stress_tester__WEBPACK_IMPORTED_MODULE_1__["StressTesterComponent"], _components_stress_tester__WEBPACK_IMPORTED_MODULE_1__["StressRecItem"],
];



/***/ }),

/***/ "./src/app/kitchen-sink/todo-app/components/todo-app.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/kitchen-sink/todo-app/components/todo-app.component.ts ***!
  \************************************************************************/
/*! exports provided: TodoAppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodoAppComponent", function() { return TodoAppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let TodoAppComponent = class TodoAppComponent {
};
TodoAppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'todo-app',
        template: `
    <div>
      <todo-input></todo-input>
      <br />
      <todo-list></todo-list>
    </div>
  `
    })
], TodoAppComponent);



/***/ }),

/***/ "./src/app/kitchen-sink/todo-app/components/todo-input.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/kitchen-sink/todo-app/components/todo-input.component.ts ***!
  \**************************************************************************/
/*! exports provided: TodoInputComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodoInputComponent", function() { return TodoInputComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_todo_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/todo.service */ "./src/app/kitchen-sink/todo-app/services/todo.service.ts");
/* harmony import */ var _models_todo_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../models/todo.model */ "./src/app/kitchen-sink/todo-app/models/todo.model.ts");
/* harmony import */ var _services_format_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/format.service */ "./src/app/kitchen-sink/todo-app/services/format.service.ts");





let TodoInputComponent = class TodoInputComponent {
    constructor(todoService, formatService) {
        this.todoService = todoService;
        this.formatService = formatService;
        this.todoModel = new _models_todo_model__WEBPACK_IMPORTED_MODULE_3__["TodoModel"]();
    }
    onSubmit() {
        this.todoService.addTodo(this.todoModel);
        this.todoModel = new _models_todo_model__WEBPACK_IMPORTED_MODULE_3__["TodoModel"]();
    }
    onClick(logMessage) {
        const tm = new _models_todo_model__WEBPACK_IMPORTED_MODULE_3__["TodoModel"]();
        tm.title = logMessage.value;
        this.todoService.addTodo(tm);
        logMessage.value = '';
    }
};
TodoInputComponent.ctorParameters = () => [
    { type: _services_todo_service__WEBPACK_IMPORTED_MODULE_2__["TodoService"] },
    { type: _services_format_service__WEBPACK_IMPORTED_MODULE_4__["FormatService"] }
];
TodoInputComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'todo-input',
        template: `
    <div>
      <form (ngSubmit)="onSubmit()" class="flex">
        <input type="text" [(ngModel)]="todoModel.title" required class="ba pa2" name="title" />
        &nbsp;&nbsp;
        <button class="bn br4 pt2 pb2 pl4 pr4 white bg-dark-blue">Add Todo</button>
      </form>
    </div>
  `
    })
], TodoInputComponent);



/***/ }),

/***/ "./src/app/kitchen-sink/todo-app/components/todo-list.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/kitchen-sink/todo-app/components/todo-list.component.ts ***!
  \*************************************************************************/
/*! exports provided: TodoListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodoListComponent", function() { return TodoListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_todo_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/todo.service */ "./src/app/kitchen-sink/todo-app/services/todo.service.ts");



let TodoListComponent = class TodoListComponent {
    constructor(todoService) {
        this.todoService = todoService;
    }
};
TodoListComponent.ctorParameters = () => [
    { type: _services_todo_service__WEBPACK_IMPORTED_MODULE_2__["TodoService"] }
];
TodoListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'todo-list',
        template: `
    <table class="w-100">
      <tr>
        <th class="ba b--black-40 pa2">Title</th>
        <th class="ba b--black-40 pa2">Status</th>
        <th class="ba b--black-40 pa2">Actions</th>
      </tr>
      <tr *ngFor="let todo of todoService.todos">
        <td class="ba b--black-40 pa2">{{ todo.title }}</td>
        <td class="ba b--black-40 pa2">
          <p class="white bg-dark-red pa2 br2" *ngIf="todo.status == 'started'">Started</p>
          <p class="white bg-dark-green pa2 br2" *ngIf="todo.status == 'completed'">Completed</p>
        </td>
        <td class="ba b--black-40 pa2">
          <button class="bn br4 pt2 pb2 pl4 pr4 white bg-dark-blue" (click)="todo.toggle()">Toggle</button>
        </td>
      </tr>
    </table>
  `
    })
], TodoListComponent);



/***/ }),

/***/ "./src/app/kitchen-sink/todo-app/index.ts":
/*!************************************************!*\
  !*** ./src/app/kitchen-sink/todo-app/index.ts ***!
  \************************************************/
/*! exports provided: TODO_APP_COMPONENTS, TODO_APP_SERVICES, TodoAppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TODO_APP_COMPONENTS", function() { return TODO_APP_COMPONENTS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TODO_APP_SERVICES", function() { return TODO_APP_SERVICES; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _components_todo_app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/todo-app.component */ "./src/app/kitchen-sink/todo-app/components/todo-app.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TodoAppComponent", function() { return _components_todo_app_component__WEBPACK_IMPORTED_MODULE_1__["TodoAppComponent"]; });

/* harmony import */ var _components_todo_input_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/todo-input.component */ "./src/app/kitchen-sink/todo-app/components/todo-input.component.ts");
/* harmony import */ var _components_todo_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/todo-list.component */ "./src/app/kitchen-sink/todo-app/components/todo-list.component.ts");
/* harmony import */ var _services_todo_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./services/todo.service */ "./src/app/kitchen-sink/todo-app/services/todo.service.ts");
/* harmony import */ var _services_format_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./services/format.service */ "./src/app/kitchen-sink/todo-app/services/format.service.ts");






const TODO_APP_COMPONENTS = [
    _components_todo_app_component__WEBPACK_IMPORTED_MODULE_1__["TodoAppComponent"], _components_todo_input_component__WEBPACK_IMPORTED_MODULE_2__["TodoInputComponent"], _components_todo_list_component__WEBPACK_IMPORTED_MODULE_3__["TodoListComponent"]
];
const TODO_APP_SERVICES = [
    _services_todo_service__WEBPACK_IMPORTED_MODULE_4__["TodoService"], _services_format_service__WEBPACK_IMPORTED_MODULE_5__["FormatService"]
];



/***/ }),

/***/ "./src/app/kitchen-sink/todo-app/models/todo.model.ts":
/*!************************************************************!*\
  !*** ./src/app/kitchen-sink/todo-app/models/todo.model.ts ***!
  \************************************************************/
/*! exports provided: TodoModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodoModel", function() { return TodoModel; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class TodoModel {
    constructor(title = '') {
        this.title = title;
        this.status = 'started';
    }
    toggle() {
        if (this.status === 'started') {
            this.status = 'completed';
        }
        else {
            this.status = 'started';
        }
    }
}


/***/ }),

/***/ "./src/app/kitchen-sink/todo-app/services/format.service.ts":
/*!******************************************************************!*\
  !*** ./src/app/kitchen-sink/todo-app/services/format.service.ts ***!
  \******************************************************************/
/*! exports provided: FormatService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormatService", function() { return FormatService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class FormatService {
    sayHello() {
        console.log('hello');
    }
}


/***/ }),

/***/ "./src/app/kitchen-sink/todo-app/services/todo.service.ts":
/*!****************************************************************!*\
  !*** ./src/app/kitchen-sink/todo-app/services/todo.service.ts ***!
  \****************************************************************/
/*! exports provided: TodoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodoService", function() { return TodoService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _models_todo_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/todo.model */ "./src/app/kitchen-sink/todo-app/models/todo.model.ts");


class TodoService {
    constructor() {
        this.todos = [
            new _models_todo_model__WEBPACK_IMPORTED_MODULE_1__["TodoModel"]('one'),
            new _models_todo_model__WEBPACK_IMPORTED_MODULE_1__["TodoModel"]('two'),
            new _models_todo_model__WEBPACK_IMPORTED_MODULE_1__["TodoModel"]('three')
        ];
    }
    addTodo(value) {
        this.todos.push(value);
    }
}


/***/ })

}]);