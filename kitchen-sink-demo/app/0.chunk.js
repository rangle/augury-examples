webpackJsonp([0],{

/***/ 1013:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = __webpack_require__(1);
var core_2 = __webpack_require__(1);
var router_1 = __webpack_require__(56);
var LazyLoadedComponentOne = (function () {
    function LazyLoadedComponentOne() {
    }
    return LazyLoadedComponentOne;
}());
LazyLoadedComponentOne = __decorate([
    core_1.Component({
        template: "<H1>Lazy Loaded Component One</H1>"
    })
], LazyLoadedComponentOne);
var routes = [
    { path: 'lazy1', component: LazyLoadedComponentOne },
];
var LazyLoadedModule = (function () {
    function LazyLoadedModule() {
    }
    return LazyLoadedModule;
}());
LazyLoadedModule = __decorate([
    core_2.NgModule({
        imports: [router_1.RouterModule.forChild(routes)],
        declarations: [LazyLoadedComponentOne]
    })
], LazyLoadedModule);
exports.LazyLoadedModule = LazyLoadedModule;


/***/ })

});
//# sourceMappingURL=0.8761f160f15f994f0ca5.bundle.js.map