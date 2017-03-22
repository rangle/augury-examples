webpackJsonp([0,3],{

/***/ 344:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 344;


/***/ }),

/***/ 345:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__polyfills_ts__ = __webpack_require__(457);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(431);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(456);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_app_module__ = __webpack_require__(452);





if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_4__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=/home/yadav/dev/rangle.io/augury-examples/forms/src/main.js.map

/***/ }),

/***/ 451:
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

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'Augury Forms Demo';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["U" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__(615),
        styles: [__webpack_require__(610)]
    })
], AppComponent);

//# sourceMappingURL=/home/yadav/dev/rangle.io/augury-examples/forms/src/app.component.js.map

/***/ }),

/***/ 452:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(278);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(427);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(451);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__login_form_login_form_component__ = __webpack_require__(453);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__model_form_model_form_component__ = __webpack_require__(455);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__login_model_form_login_model_form_component__ = __webpack_require__(454);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_5__login_form_login_form_component__["a" /* LoginFormComponent */],
            __WEBPACK_IMPORTED_MODULE_6__model_form_model_form_component__["a" /* ModelFormComponent */],
            __WEBPACK_IMPORTED_MODULE_7__login_model_form_login_model_form_component__["a" /* LoginModelFormComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */]
        ],
        providers: [],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=/home/yadav/dev/rangle.io/augury-examples/forms/src/app.module.js.map

/***/ }),

/***/ 453:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginFormComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LoginFormComponent = (function () {
    function LoginFormComponent() {
    }
    LoginFormComponent.prototype.ngOnInit = function () {
    };
    LoginFormComponent.prototype.onSubmit = function (value) {
        console.log(JSON.stringify(value));
    };
    return LoginFormComponent;
}());
LoginFormComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["U" /* Component */])({
        selector: 'login-form',
        template: __webpack_require__(616),
        styles: [__webpack_require__(611)]
    }),
    __metadata("design:paramtypes", [])
], LoginFormComponent);

//# sourceMappingURL=/home/yadav/dev/rangle.io/augury-examples/forms/src/login-form.component.js.map

/***/ }),

/***/ 454:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginModelFormComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LoginModelFormComponent = (function () {
    function LoginModelFormComponent() {
        this.username = "Shivaji";
        this.password = "ReadySetGo";
        this.remember = true;
    }
    LoginModelFormComponent.prototype.ngOnInit = function () {
    };
    LoginModelFormComponent.prototype.onSubmit = function (value) {
        console.log(value);
    };
    return LoginModelFormComponent;
}());
LoginModelFormComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["U" /* Component */])({
        selector: 'login-model-form',
        template: __webpack_require__(617),
        styles: [__webpack_require__(612)]
    }),
    __metadata("design:paramtypes", [])
], LoginModelFormComponent);

//# sourceMappingURL=/home/yadav/dev/rangle.io/augury-examples/forms/src/login-model-form.component.js.map

/***/ }),

/***/ 455:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(278);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModelFormComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ModelFormComponent = (function () {
    function ModelFormComponent(formBuilder) {
        this.fg = formBuilder.group({
            'name': ['Tammy', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required],
            'surname': ['Trinh', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required],
            'email': ['tam@york.tv', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required],
            'gender': ['female', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required]
        });
    }
    ModelFormComponent.prototype.ngOnInit = function () {
    };
    ModelFormComponent.prototype.onSubmit = function (value) {
        console.log(JSON.stringify(value));
    };
    return ModelFormComponent;
}());
ModelFormComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["U" /* Component */])({
        selector: 'model-form',
        template: __webpack_require__(618),
        styles: [__webpack_require__(613)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormBuilder */]) === "function" && _a || Object])
], ModelFormComponent);

var _a;
//# sourceMappingURL=/home/yadav/dev/rangle.io/augury-examples/forms/src/model-form.component.js.map

/***/ }),

/***/ 456:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=/home/yadav/dev/rangle.io/augury-examples/forms/src/environment.js.map

/***/ }),

/***/ 457:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol__ = __webpack_require__(471);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_object__ = __webpack_require__(464);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_object___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_core_js_es6_object__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_es6_function__ = __webpack_require__(460);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_es6_function___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_core_js_es6_function__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int__ = __webpack_require__(466);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float__ = __webpack_require__(465);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_number__ = __webpack_require__(463);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_number___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_core_js_es6_number__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_es6_math__ = __webpack_require__(462);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_es6_math___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_core_js_es6_math__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_es6_string__ = __webpack_require__(470);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_es6_string___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_core_js_es6_string__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_es6_date__ = __webpack_require__(459);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_es6_date___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_core_js_es6_date__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_es6_array__ = __webpack_require__(458);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_es6_array___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_core_js_es6_array__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp__ = __webpack_require__(468);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_js_es6_map__ = __webpack_require__(461);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_js_es6_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_core_js_es6_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_js_es6_set__ = __webpack_require__(469);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_js_es6_set___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_core_js_es6_set__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect__ = __webpack_require__(467);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect__ = __webpack_require__(472);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone__ = __webpack_require__(630);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone__);
// This file includes polyfills needed by Angular 2 and is loaded before
// the app. You can add your own extra polyfills to this file.
















//# sourceMappingURL=/home/yadav/dev/rangle.io/augury-examples/forms/src/polyfills.js.map

/***/ }),

/***/ 610:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(63)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 611:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(63)();
// imports


// module
exports.push([module.i, ":host {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n}\n\n.container {\n  background-color: #E2CEFF;\n}\n\nbutton[disabled] {\n  color: gray;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 612:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(63)();
// imports


// module
exports.push([module.i, ":host {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n}\n\n.container {\n  background-color: #E2CEFF;\n}\n\nbutton[disabled] {\n  color: gray;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 613:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(63)();
// imports


// module
exports.push([module.i, ":host {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n}\n\n.container {\n  background-color: #E2CEFF;\n}\n\nbutton[disabled] {\n  color: gray;\n}\n\n.notify {\n  color: red;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 615:
/***/ (function(module, exports) {

module.exports = "<div class=\"ba br4 p2 pl3 bg-purple white\">\n  <h1>{{title}}</h1>\n</div>\n<login-form></login-form>\n\n<login-model-form></login-model-form>\n\n<model-form></model-form>\n"

/***/ }),

/***/ 616:
/***/ (function(module, exports) {

module.exports = "<div class=\"container ph4 pb4 black-80 br3 ma3 center w-70\">\n  <p class=\"f3\">Login (Template based)</p>\n  <form #formRef=\"ngForm\" (ngSubmit)=\"onSubmit(formRef.value); formRef.reset()\" class=\"measure center\">\n    <div class=\"mt3\">\n      <label for=\"userid\" class=\"db fw6 lh-copy f5\">Username</label>\n      <input type=\"text\"\n             name=\"userid\"\n             id=\"userid\"\n             ngModel\n             required\n             class=\"pa1 input-reset ba hover-bg-washed-blue hover-dark-blue w-100\">\n    </div>\n\n    <div class=\"mt3\">\n      <label for=\"password\" class=\"db fw6 lh-copy f5\">Password</label>\n      <input type=\"password\"\n             name=\"password\"\n             id=\"password\"\n             ngModel\n             required\n             minlength=\"5\"\n             class=\"pa1 input-reset ba hover-bg-washed-blue hover-dark-blue w-100\">\n    </div>\n\n    <div class=\"mt3\">\n      <label for=\"remember\" >\n        <input type=\"checkbox\" name=\"remember\" id=\"remember\" ngModel class=\"fw6 lh-copy f5\">\n        Remember\n      </label>\n    </div>\n\n    <button class=\"link br2 ba bw1 bg-black yellow b--black fl mt3\" type=\"submit\" [disabled]=\"!formRef.valid\">Login</button>\n  </form>\n</div>\n"

/***/ }),

/***/ 617:
/***/ (function(module, exports) {

module.exports = "<div class=\"container ph4 pb4 black-80 br3 ma3 center w-70\">\n  <p class=\"f3\">Login (Template based)</p>\n  <form #formRef=\"ngForm\" (ngSubmit)=\"onSubmit(formRef.value); formRef.reset()\" class=\"measure center\">\n    <div class=\"mt3\">\n      <label for=\"userid\" class=\"db fw6 lh-copy f5\">Username</label>\n      <input type=\"text\"\n             name=\"userid\"\n             id=\"userid\"\n             [(ngModel)]=\"username\"\n             required\n             class=\"pa1 input-reset ba hover-bg-washed-blue hover-dark-blue w-100\">\n    </div>\n\n    <div class=\"mt3\">\n      <label for=\"password\" class=\"db fw6 lh-copy f5\">Password</label>\n      <input type=\"password\"\n             name=\"password\"\n             id=\"password\"\n             [(ngModel)]=\"password\"\n             required\n             minlength=\"5\"\n             class=\"pa1 input-reset ba hover-bg-washed-blue hover-dark-blue w-100\">\n    </div>\n\n    <div class=\"mt3\">\n      <label for=\"remember\" >\n        <input type=\"checkbox\" name=\"remember\" id=\"remember\" [(ngModel)]=\"remember\" class=\"fw6 lh-copy f5\">\n        Remember\n      </label>\n    </div>\n\n    <button class=\"link br2 ba bw1 bg-black yellow b--black fl mt3\" type=\"submit\" [disabled]=\"!formRef.valid\">Login</button>\n  </form>\n</div>\n"

/***/ }),

/***/ 618:
/***/ (function(module, exports) {

module.exports = "<div class=\"container ph4 pb4 black-80 br3 ma3 center w-70\">\n  <p class=\"f3\">New Client (Model driven)</p>\n  <form [formGroup]=\"fg\" (ngSubmit)=\"onSubmit(fg.value); fg.reset()\">\n    <div>\n      <label for=\"name\" class=\"db fw6 lh-copy f5\">Name</label>\n      <input type=\"text\"\n             formControlName=\"name\"\n             class=\"pa1 input-reset ba hover-bg-washed-blue hover-dark-blue w-100\">\n      <p *ngIf=\"fg.controls.name.errors && !fg.controls.name.untouched\" class=\"notify\">Name is required.</p>\n    </div>\n\n    <div class=\"mt3\">\n      <label for=\"surname\" class=\"db fw6 lh-copy f5\">Surname</label>\n      <input type=\"text\"\n             formControlName=\"surname\"\n             class=\"pa1 input-reset ba hover-bg-washed-blue hover-dark-blue w-100\">\n      <p *ngIf=\"fg.controls.surname.errors && !fg.controls.surname.untouched\" class=\"notify\">Surname is required.</p>\n    </div>\n\n    <div class=\"mt3\">\n      <label for=\"email\" class=\"db fw6 lh-copy f5\">Email</label>\n      <input type=\"text\"\n             formControlName=\"email\"\n             class=\"pa1 input-reset ba hover-bg-washed-blue hover-dark-blue w-100\">\n      <p *ngIf=\"fg.controls.email.errors && !fg.controls.email.untouched\" class=\"notify\">Email is required</p>\n    </div>\n\n    <div class=\"mt3\">\n      <label class=\"db\">\n        <input type=\"radio\"\n               value=\"male\"\n               formControlName=\"gender\"> Male\n      </label>\n      <label class=\"db\">\n        <input type=\"radio\"\n               value=\"female\"\n               formControlName=\"gender\"> Female\n      </label>\n    </div>\n\n    <button type=\"submit\" class=\"link br2 ba bw1 bg-black yellow b--black fl mt3\" [disabled]=\"!fg.valid\">Save</button>\n\n  </form>\n</div>\n"

/***/ }),

/***/ 631:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(345);


/***/ })

},[631]);
//# sourceMappingURL=main.bundle.js.map