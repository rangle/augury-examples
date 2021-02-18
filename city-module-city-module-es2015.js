(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["city-module-city-module"],{

/***/ "./src/app/routes/city-module/city-one.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/routes/city-module/city-one.component.ts ***!
  \**********************************************************/
/*! exports provided: CityOneComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CityOneComponent", function() { return CityOneComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let CityOneComponent = class CityOneComponent {
    constructor() { }
    ngOnInit() {
    }
};
CityOneComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-city-one',
        template: `
  <div>
    <img src="assets/toronto.jpg"/>
  </div>
  `
    })
], CityOneComponent);



/***/ }),

/***/ "./src/app/routes/city-module/city-routing.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/routes/city-module/city-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: CityRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CityRoutingModule", function() { return CityRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _city_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./city.component */ "./src/app/routes/city-module/city.component.ts");
/* harmony import */ var _city_one_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./city-one.component */ "./src/app/routes/city-module/city-one.component.ts");
/* harmony import */ var _city_two_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./city-two.component */ "./src/app/routes/city-module/city-two.component.ts");
/* harmony import */ var _city_three_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./city-three.component */ "./src/app/routes/city-module/city-three.component.ts");







const routes = [
    {
        path: '',
        component: _city_component__WEBPACK_IMPORTED_MODULE_3__["CityComponent"],
        children: [
            {
                path: 'city1',
                component: _city_one_component__WEBPACK_IMPORTED_MODULE_4__["CityOneComponent"]
            },
            {
                path: 'city2',
                component: _city_two_component__WEBPACK_IMPORTED_MODULE_5__["CityTwoComponent"]
            },
            {
                path: 'city3',
                component: _city_three_component__WEBPACK_IMPORTED_MODULE_6__["CityThreeComponent"]
            }
        ]
    }
];
let CityRoutingModule = class CityRoutingModule {
};
CityRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], CityRoutingModule);



/***/ }),

/***/ "./src/app/routes/city-module/city-three.component.ts":
/*!************************************************************!*\
  !*** ./src/app/routes/city-module/city-three.component.ts ***!
  \************************************************************/
/*! exports provided: CityThreeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CityThreeComponent", function() { return CityThreeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let CityThreeComponent = class CityThreeComponent {
    constructor() { }
    ngOnInit() {
    }
};
CityThreeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-city-three',
        template: `
  <div>
    <img src="assets/montreal.jpg"/>
  </div>
  `
    })
], CityThreeComponent);



/***/ }),

/***/ "./src/app/routes/city-module/city-two.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/routes/city-module/city-two.component.ts ***!
  \**********************************************************/
/*! exports provided: CityTwoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CityTwoComponent", function() { return CityTwoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let CityTwoComponent = class CityTwoComponent {
    constructor() { }
    ngOnInit() {
    }
};
CityTwoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-city-two',
        template: `
  <div>
    <img src="assets/nova-scotia.jpg"/>
  </div>
  `
    })
], CityTwoComponent);



/***/ }),

/***/ "./src/app/routes/city-module/city.component.ts":
/*!******************************************************!*\
  !*** ./src/app/routes/city-module/city.component.ts ***!
  \******************************************************/
/*! exports provided: CityComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CityComponent", function() { return CityComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let CityComponent = class CityComponent {
    constructor() { }
    ngOnInit() {
    }
};
CityComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-city',
        template: `
    <div class="ph3">
    <h1>Cities</h1>
    <a class="f6 link dim br1 ph3 pv2 mb2 dib black b-ns btn-bg" routerLink="city1" routerLinkActive="active">City One</a>
    <a class="f6 link dim br1 ph3 pv2 mb2 dib black b-ns btn-bg" routerLink="city2" routerLinkActive="active">City Two</a>
    <a class="f6 link dim br1 ph3 pv2 mb2 dib black b-ns btn-bg" routerLink="city3" routerLinkActive="active">City Three</a>
   </div>
  <router-outlet></router-outlet>
  `
    })
], CityComponent);



/***/ }),

/***/ "./src/app/routes/city-module/city.module.ts":
/*!***************************************************!*\
  !*** ./src/app/routes/city-module/city.module.ts ***!
  \***************************************************/
/*! exports provided: CityModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CityModule", function() { return CityModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _city_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./city-routing.module */ "./src/app/routes/city-module/city-routing.module.ts");
/* harmony import */ var _city_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./city.component */ "./src/app/routes/city-module/city.component.ts");
/* harmony import */ var _city_one_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./city-one.component */ "./src/app/routes/city-module/city-one.component.ts");
/* harmony import */ var _city_two_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./city-two.component */ "./src/app/routes/city-module/city-two.component.ts");
/* harmony import */ var _city_three_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./city-three.component */ "./src/app/routes/city-module/city-three.component.ts");







let CityModule = class CityModule {
};
CityModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _city_component__WEBPACK_IMPORTED_MODULE_3__["CityComponent"],
            _city_one_component__WEBPACK_IMPORTED_MODULE_4__["CityOneComponent"],
            _city_two_component__WEBPACK_IMPORTED_MODULE_5__["CityTwoComponent"],
            _city_three_component__WEBPACK_IMPORTED_MODULE_6__["CityThreeComponent"]
        ],
        imports: [
            _city_routing_module__WEBPACK_IMPORTED_MODULE_2__["CityRoutingModule"]
        ]
    })
], CityModule);



/***/ })

}]);