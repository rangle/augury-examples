webpackJsonp([0,4],{

/***/ 680:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(382);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__city_component__ = __webpack_require__(684);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__city_one_component__ = __webpack_require__(681);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__city_two_component__ = __webpack_require__(683);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__city_three_component__ = __webpack_require__(682);
/* harmony export (binding) */ __webpack_require__.d(exports, "CityModule", function() { return CityModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var CityModule = (function () {
    function CityModule() {
    }
    CityModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forChild([
                    {
                        path: '',
                        component: __WEBPACK_IMPORTED_MODULE_2__city_component__["a" /* CityComponent */],
                        children: [
                            {
                                path: 'city1',
                                component: __WEBPACK_IMPORTED_MODULE_3__city_one_component__["a" /* CityOneComponent */]
                            },
                            {
                                path: 'city2',
                                component: __WEBPACK_IMPORTED_MODULE_4__city_two_component__["a" /* CityTwoComponent */]
                            },
                            {
                                path: 'city3',
                                component: __WEBPACK_IMPORTED_MODULE_5__city_three_component__["a" /* CityThreeComponent */]
                            }
                        ],
                    },
                ])
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__city_component__["a" /* CityComponent */],
                __WEBPACK_IMPORTED_MODULE_3__city_one_component__["a" /* CityOneComponent */],
                __WEBPACK_IMPORTED_MODULE_4__city_two_component__["a" /* CityTwoComponent */],
                __WEBPACK_IMPORTED_MODULE_5__city_three_component__["a" /* CityThreeComponent */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__city_component__["a" /* CityComponent */],
                __WEBPACK_IMPORTED_MODULE_3__city_one_component__["a" /* CityOneComponent */],
                __WEBPACK_IMPORTED_MODULE_4__city_two_component__["a" /* CityTwoComponent */],
                __WEBPACK_IMPORTED_MODULE_5__city_three_component__["a" /* CityThreeComponent */]
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], CityModule);
    return CityModule;
}());
//# sourceMappingURL=/Users/yadav/dev/rangle/augury-examples/routes/src/city.module.js.map

/***/ },

/***/ 681:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return CityOneComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CityOneComponent = (function () {
    function CityOneComponent() {
    }
    CityOneComponent.prototype.ngOnInit = function () {
    };
    CityOneComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_1" /* Component */])({
            selector: 'app-city-one',
            template: "\n  <div>\n    <img src=\"assets/toronto.jpg\"/>\n  </div>\n  ",
            styles: []
        }), 
        __metadata('design:paramtypes', [])
    ], CityOneComponent);
    return CityOneComponent;
}());
//# sourceMappingURL=/Users/yadav/dev/rangle/augury-examples/routes/src/city-one.component.js.map

/***/ },

/***/ 682:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return CityThreeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CityThreeComponent = (function () {
    function CityThreeComponent() {
    }
    CityThreeComponent.prototype.ngOnInit = function () {
    };
    CityThreeComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_1" /* Component */])({
            selector: 'app-city-three',
            template: "\n  <div>\n    <img src=\"assets/montreal.jpg\"/>\n  </div>\n  ",
            styles: []
        }), 
        __metadata('design:paramtypes', [])
    ], CityThreeComponent);
    return CityThreeComponent;
}());
//# sourceMappingURL=/Users/yadav/dev/rangle/augury-examples/routes/src/city-three.component.js.map

/***/ },

/***/ 683:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return CityTwoComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CityTwoComponent = (function () {
    function CityTwoComponent() {
    }
    CityTwoComponent.prototype.ngOnInit = function () {
    };
    CityTwoComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_1" /* Component */])({
            selector: 'app-city-two',
            template: "\n  <div>\n    <img src=\"assets/nova-scotia.jpg\"/>\n  </div>\n  ",
            styles: []
        }), 
        __metadata('design:paramtypes', [])
    ], CityTwoComponent);
    return CityTwoComponent;
}());
//# sourceMappingURL=/Users/yadav/dev/rangle/augury-examples/routes/src/city-two.component.js.map

/***/ },

/***/ 684:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return CityComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CityComponent = (function () {
    function CityComponent() {
    }
    CityComponent.prototype.ngOnInit = function () {
    };
    CityComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_1" /* Component */])({
            selector: 'app-city',
            template: "\n    <h1>Cities</h1>\n    <img src=\"../../assets/camera.svg\" width=\"20\" height=\"20\" align=\"center\"> <a routerLink=\"city1\" routerLinkActive=\"active\">City 1</a>\n    <a routerLink=\"city2\" routerLinkActive=\"active\">City 2</a>\n    <a routerLink=\"city3\" routerLinkActive=\"active\">City 3</a>\n    <router-outlet><router-outlet>\n  ",
            styles: ["\n    a.active {\n      background-color: yellow;\n    }\n  "]
        }), 
        __metadata('design:paramtypes', [])
    ], CityComponent);
    return CityComponent;
}());
//# sourceMappingURL=/Users/yadav/dev/rangle/augury-examples/routes/src/city.component.js.map

/***/ }

});
//# sourceMappingURL=0.bundle.map