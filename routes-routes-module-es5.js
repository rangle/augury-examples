function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["routes-routes-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/routes/base/base.component.html":
  /*!***************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/routes/base/base.component.html ***!
    \***************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppRoutesBaseBaseComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-header [navItems]=\"navModel\"></app-header>\n<div class=\"pa6\">\n  <router-outlet></router-outlet>\n</div>\n\n";
    /***/
  },

  /***/
  "./src/app/routes/base/base.component.css":
  /*!************************************************!*\
    !*** ./src/app/routes/base/base.component.css ***!
    \************************************************/

  /*! exports provided: default */

  /***/
  function srcAppRoutesBaseBaseComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JvdXRlcy9iYXNlL2Jhc2UuY29tcG9uZW50LmNzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/routes/base/base.component.ts":
  /*!***********************************************!*\
    !*** ./src/app/routes/base/base.component.ts ***!
    \***********************************************/

  /*! exports provided: BaseComponent */

  /***/
  function srcAppRoutesBaseBaseComponentTs(module, __webpack_exports__, __webpack_require__) {
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
        title: 'Augury Routes Demo',
        defaultStyle: true,
        headerOnly: false,
        routerLinkPath: 'home'
      }, {
        title: 'Home',
        routerLinkPath: 'home',
        defaultStyle: true,
        isNavItem: true
      }, {
        title: 'Parks',
        routerLinkPath: 'parks',
        defaultStyle: true,
        isNavItem: true
      }, {
        title: 'Cities',
        routerLinkPath: 'cities',
        defaultStyle: true,
        isNavItem: true
      }];
      this.title = 'Angular Routes Demo';
    };

    BaseComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-routes-root',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./base.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/routes/base/base.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./base.component.css */
      "./src/app/routes/base/base.component.css")).default]
    })], BaseComponent);
    /***/
  },

  /***/
  "./src/app/routes/home/home.component.ts":
  /*!***********************************************!*\
    !*** ./src/app/routes/home/home.component.ts ***!
    \***********************************************/

  /*! exports provided: HomeComponent */

  /***/
  function srcAppRoutesHomeHomeComponentTs(module, __webpack_exports__, __webpack_require__) {
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

    var HomeComponent =
    /*#__PURE__*/
    function () {
      function HomeComponent() {
        _classCallCheck(this, HomeComponent);
      }

      _createClass(HomeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return HomeComponent;
    }();

    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-home',
      template: "\n    <h1>Home</h1>\n    <p>This demo application makes use of routes and lazy loaded child routes.</p>\n  "
    })], HomeComponent);
    /***/
  },

  /***/
  "./src/app/routes/park-one/park-one.component.ts":
  /*!*******************************************************!*\
    !*** ./src/app/routes/park-one/park-one.component.ts ***!
    \*******************************************************/

  /*! exports provided: ParkOneComponent */

  /***/
  function srcAppRoutesParkOneParkOneComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ParkOneComponent", function () {
      return ParkOneComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var ParkOneComponent =
    /*#__PURE__*/
    function () {
      function ParkOneComponent() {
        _classCallCheck(this, ParkOneComponent);
      }

      _createClass(ParkOneComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ParkOneComponent;
    }();

    ParkOneComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-park-one',
      template: "\n  <div>\n    <img src=\"assets/peyto-lake-banff.jpg\" width=\"600\" height=\"350\" />\n  </div>\n  "
    })], ParkOneComponent);
    /***/
  },

  /***/
  "./src/app/routes/park-three/park-three.component.ts":
  /*!***********************************************************!*\
    !*** ./src/app/routes/park-three/park-three.component.ts ***!
    \***********************************************************/

  /*! exports provided: ParkThreeComponent */

  /***/
  function srcAppRoutesParkThreeParkThreeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ParkThreeComponent", function () {
      return ParkThreeComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var ParkThreeComponent =
    /*#__PURE__*/
    function () {
      function ParkThreeComponent() {
        _classCallCheck(this, ParkThreeComponent);
      }

      _createClass(ParkThreeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ParkThreeComponent;
    }();

    ParkThreeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-park-three',
      template: "\n  <div>\n    <img src=\"assets/bloordale-toronto-park.jpg\" width=\"600\" height=\"350\" />\n  </div>\n  "
    })], ParkThreeComponent);
    /***/
  },

  /***/
  "./src/app/routes/park-two/park-two.component.ts":
  /*!*******************************************************!*\
    !*** ./src/app/routes/park-two/park-two.component.ts ***!
    \*******************************************************/

  /*! exports provided: ParkTwoComponent */

  /***/
  function srcAppRoutesParkTwoParkTwoComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ParkTwoComponent", function () {
      return ParkTwoComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var ParkTwoComponent =
    /*#__PURE__*/
    function () {
      function ParkTwoComponent() {
        _classCallCheck(this, ParkTwoComponent);
      }

      _createClass(ParkTwoComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ParkTwoComponent;
    }();

    ParkTwoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-park-two',
      template: "\n  <div>\n    <img src=\"assets/mount-yamnuska2-szmurlo.jpg\" width=\"600\" height=\"350\" />\n  </div>\n  "
    })], ParkTwoComponent);
    /***/
  },

  /***/
  "./src/app/routes/parks/parks.component.ts":
  /*!*************************************************!*\
    !*** ./src/app/routes/parks/parks.component.ts ***!
    \*************************************************/

  /*! exports provided: ParksComponent */

  /***/
  function srcAppRoutesParksParksComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ParksComponent", function () {
      return ParksComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var ParksComponent =
    /*#__PURE__*/
    function () {
      function ParksComponent() {
        _classCallCheck(this, ParksComponent);
      }

      _createClass(ParksComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ParksComponent;
    }();

    ParksComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-parks',
      template: "\n    <div class=\"ph3\">\n      <h1>National Parks</h1>\n      <a\n        class=\"f6 link dim br1 ph3 pv2 mb2 dib black b-ns btn-bg\"\n        [routerLink]=\"[{ outlets: { parkit: ['park1'] } }]\"\n        routerLinkActive=\"active\"\n        >Park 1</a\n      >\n      <a\n        class=\"f6 link dim br1 ph3 pv2 mb2 dib black b-ns btn-bg\"\n        [routerLink]=\"[{ outlets: { parkit: ['park2'] } }]\"\n        routerLinkActive=\"active\"\n        >Park 2</a\n      >\n      <a\n        class=\"f6 link dim br1 ph3 pv2 mb2 dib black b-ns btn-bg\"\n        [routerLink]=\"[{ outlets: { parkit: ['park3'] } }]\"\n        routerLinkActive=\"active\"\n        >Park 3</a\n      >\n    </div>\n    <router-outlet name=\"parkit\"></router-outlet>\n  "
    })], ParksComponent);
    /***/
  },

  /***/
  "./src/app/routes/routes-routing.module.ts":
  /*!*************************************************!*\
    !*** ./src/app/routes/routes-routing.module.ts ***!
    \*************************************************/

  /*! exports provided: RoutesRoutingModule */

  /***/
  function srcAppRoutesRoutesRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RoutesRoutingModule", function () {
      return RoutesRoutingModule;
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
    "./src/app/routes/base/base.component.ts");
    /* harmony import */


    var _home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./home/home.component */
    "./src/app/routes/home/home.component.ts");
    /* harmony import */


    var _parks_parks_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./parks/parks.component */
    "./src/app/routes/parks/parks.component.ts");
    /* harmony import */


    var _park_one_park_one_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./park-one/park-one.component */
    "./src/app/routes/park-one/park-one.component.ts");
    /* harmony import */


    var _park_two_park_two_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./park-two/park-two.component */
    "./src/app/routes/park-two/park-two.component.ts");
    /* harmony import */


    var _park_three_park_three_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./park-three/park-three.component */
    "./src/app/routes/park-three/park-three.component.ts");

    var routes = [{
      path: '',
      redirectTo: 'home',
      pathMatch: 'full'
    }, {
      path: '',
      component: _base_base_component__WEBPACK_IMPORTED_MODULE_3__["BaseComponent"],
      children: [{
        path: 'home',
        component: _home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"]
      }, {
        path: 'parks',
        component: _parks_parks_component__WEBPACK_IMPORTED_MODULE_5__["ParksComponent"],
        children: [{
          path: 'park1',
          component: _park_one_park_one_component__WEBPACK_IMPORTED_MODULE_6__["ParkOneComponent"],
          outlet: 'parkit'
        }, {
          path: 'park2',
          component: _park_two_park_two_component__WEBPACK_IMPORTED_MODULE_7__["ParkTwoComponent"],
          outlet: 'parkit'
        }, {
          path: 'park3',
          component: _park_three_park_three_component__WEBPACK_IMPORTED_MODULE_8__["ParkThreeComponent"],
          outlet: 'parkit'
        }]
      }, {
        path: 'cities',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | city-module-city-module */
          "city-module-city-module").then(__webpack_require__.bind(null,
          /*! ./city-module/city.module */
          "./src/app/routes/city-module/city.module.ts")).then(function (m) {
            return m.CityModule;
          });
        }
      }]
    }];

    var RoutesRoutingModule = function RoutesRoutingModule() {
      _classCallCheck(this, RoutesRoutingModule);
    };

    RoutesRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], RoutesRoutingModule);
    /***/
  },

  /***/
  "./src/app/routes/routes.module.ts":
  /*!*****************************************!*\
    !*** ./src/app/routes/routes.module.ts ***!
    \*****************************************/

  /*! exports provided: RoutesModule */

  /***/
  function srcAppRoutesRoutesModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RoutesModule", function () {
      return RoutesModule;
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


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _base_base_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./base/base.component */
    "./src/app/routes/base/base.component.ts");
    /* harmony import */


    var _home_home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./home/home.component */
    "./src/app/routes/home/home.component.ts");
    /* harmony import */


    var _parks_parks_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./parks/parks.component */
    "./src/app/routes/parks/parks.component.ts");
    /* harmony import */


    var _park_one_park_one_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./park-one/park-one.component */
    "./src/app/routes/park-one/park-one.component.ts");
    /* harmony import */


    var _park_two_park_two_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./park-two/park-two.component */
    "./src/app/routes/park-two/park-two.component.ts");
    /* harmony import */


    var _park_three_park_three_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./park-three/park-three.component */
    "./src/app/routes/park-three/park-three.component.ts");
    /* harmony import */


    var _routes_routing_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./routes-routing.module */
    "./src/app/routes/routes-routing.module.ts");
    /* harmony import */


    var _shared_shared_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ../shared/shared.module */
    "./src/app/shared/shared.module.ts");

    var RoutesModule = function RoutesModule() {
      _classCallCheck(this, RoutesModule);
    };

    RoutesModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_base_base_component__WEBPACK_IMPORTED_MODULE_5__["BaseComponent"], _home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"], _parks_parks_component__WEBPACK_IMPORTED_MODULE_7__["ParksComponent"], _park_one_park_one_component__WEBPACK_IMPORTED_MODULE_8__["ParkOneComponent"], _park_two_park_two_component__WEBPACK_IMPORTED_MODULE_9__["ParkTwoComponent"], _park_three_park_three_component__WEBPACK_IMPORTED_MODULE_10__["ParkThreeComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"], _routes_routing_module__WEBPACK_IMPORTED_MODULE_11__["RoutesRoutingModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_12__["SharedModule"]]
    })], RoutesModule);
    /***/
  }
}]);
//# sourceMappingURL=routes-routes-module-es5.js.map