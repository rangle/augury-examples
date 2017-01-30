webpackJsonp([0,3],{

/***/ 334:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return AppComponent; });
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
        this.title = 'Augury NgModule Demo';
    }
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__(673),
            styles: [__webpack_require__(670)]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
//# sourceMappingURL=/Users/yadav/dev/rangle/augury-examples/modules/src/app.component.js.map

/***/ },

/***/ 335:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return Logger; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var Logger = (function () {
    function Logger() {
        this.infos = [];
        this.errors = [];
    }
    Logger.prototype.info = function (message) {
        this.infos.push(message);
        console.info(message);
    };
    Logger.prototype.error = function (message) {
        this.errors.push(message);
        console.error(message);
    };
    Logger = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Injectable */])(), 
        __metadata('design:paramtypes', [])
    ], Logger);
    return Logger;
}());
//# sourceMappingURL=/Users/yadav/dev/rangle/augury-examples/modules/src/logger.service.js.map

/***/ },

/***/ 336:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(316);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return SongService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SongService = (function () {
    function SongService(http) {
        this.http = http;
    }
    SongService.prototype.searchSong = function (song) {
        return this.http.get("https://api.spotify.com/v1/search?q=" + song + "&type=track")
            .map(function (response) { return response.json(); });
    };
    SongService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Injectable */])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === 'function' && _a) || Object])
    ], SongService);
    return SongService;
    var _a;
}());
//# sourceMappingURL=/Users/yadav/dev/rangle/augury-examples/modules/src/songs.service.js.map

/***/ },

/***/ 404:
/***/ function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 404;


/***/ },

/***/ 405:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__polyfills_ts__ = __webpack_require__(517);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__polyfills_ts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__polyfills_ts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(490);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(516);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app___ = __webpack_require__(513);





if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["_37" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_4__app___["a" /* AppModule */]);
//# sourceMappingURL=/Users/yadav/dev/rangle/augury-examples/modules/src/main.js.map

/***/ },

/***/ 510:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(216);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(316);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(334);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_logger_service__ = __webpack_require__(335);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__modules_songs_module__ = __webpack_require__(514);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return AppModule; });
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
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["b" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_5__modules_songs_module__["a" /* SongsModule */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_4__services_logger_service__["a" /* Logger */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=/Users/yadav/dev/rangle/augury-examples/modules/src/app.module.js.map

/***/ },

/***/ 511:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_logger_service__ = __webpack_require__(335);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return SongListComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SongListComponent = (function () {
    function SongListComponent(logger) {
        this.logger = logger;
    }
    SongListComponent.prototype.ngOnChanges = function () {
        if (this.songs) {
            this.logger.info('song list changed!');
        }
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Input */])(), 
        __metadata('design:type', Object)
    ], SongListComponent.prototype, "songs", void 0);
    SongListComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* Component */])({
            selector: 'song-list',
            styles: [__webpack_require__(671)],
            template: "\n    <div *ngFor=\"let song of songs\" class=\"mb3 p3 songItem\">\n      <img src=\"{{song | songprint:'album'}}\" /> {{song | songprint:'title'}} <br/> \n      <span class=\"gray\">{{song.album.name}}</span>\n    </div>\n  "
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_logger_service__["a" /* Logger */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_logger_service__["a" /* Logger */]) === 'function' && _a) || Object])
    ], SongListComponent);
    return SongListComponent;
    var _a;
}());
//# sourceMappingURL=/Users/yadav/dev/rangle/augury-examples/modules/src/song-list.component.js.map

/***/ },

/***/ 512:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_songs_service__ = __webpack_require__(336);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(309);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__ = __webpack_require__(675);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return SongsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SongsComponent = (function () {
    function SongsComponent(songService, formBuilder) {
        this.songService = songService;
        this.formBuilder = formBuilder;
        this.songs = [];
        this.searchField = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]();
        this.searchForm = formBuilder.group({ artist: this.searchField });
    }
    SongsComponent.prototype.ngAfterViewInit = function () {
        this.searchInput.first.nativeElement.focus();
    };
    SongsComponent.prototype.search = function () {
        var _this = this;
        if (this.searchField.value) {
            this.songService.searchSong(this.searchField.value).subscribe(function (result) {
                _this.songs = result.tracks.items;
            });
        }
        else {
            this.songs = [];
        }
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_2" /* ViewChildren */])('searchInput'), 
        __metadata('design:type', Object)
    ], SongsComponent.prototype, "searchInput", void 0);
    SongsComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* Component */])({
            selector: 'my-songs',
            styles: [__webpack_require__(672)],
            template: "\n    <h2>Songs</h2>\n    <form [formGroup]=\"searchForm\">\n      <input\n        #searchInput\n        class=\"search\" \n        formControlName=\"artist\" \n        debounce=\"400\" \n        placeholder=\"Search for artist\"\n        (keyup)=\"search()\" />\n    </form>\n    <hr/>\n    <song-list [songs]=\"songs\"></song-list>\n  "
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_songs_service__["a" /* SongService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_songs_service__["a" /* SongService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormBuilder */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormBuilder */]) === 'function' && _b) || Object])
    ], SongsComponent);
    return SongsComponent;
    var _a, _b;
}());
//# sourceMappingURL=/Users/yadav/dev/rangle/augury-examples/modules/src/songs.component.js.map

/***/ },

/***/ 513:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app_component__ = __webpack_require__(334);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(510);
/* unused harmony namespace reexport */
/* harmony namespace reexport (by used) */ __webpack_require__.d(exports, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__app_module__["a"]; });


//# sourceMappingURL=/Users/yadav/dev/rangle/augury-examples/modules/src/index.js.map

/***/ },

/***/ 514:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(171);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(309);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pipes_song_pipe__ = __webpack_require__(515);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_song_list_song_list_component__ = __webpack_require__(511);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_songs_songs_component__ = __webpack_require__(512);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_songs_service__ = __webpack_require__(336);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return SongsModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var SongsModule = (function () {
    function SongsModule() {
    }
    SongsModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* ReactiveFormsModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__components_song_list_song_list_component__["a" /* SongListComponent */],
                __WEBPACK_IMPORTED_MODULE_5__components_songs_songs_component__["a" /* SongsComponent */],
                __WEBPACK_IMPORTED_MODULE_3__pipes_song_pipe__["a" /* SongPipe */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_6__services_songs_service__["a" /* SongService */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_5__components_songs_songs_component__["a" /* SongsComponent */]
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], SongsModule);
    return SongsModule;
}());
//# sourceMappingURL=/Users/yadav/dev/rangle/augury-examples/modules/src/songs.module.js.map

/***/ },

/***/ 515:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return SongPipe; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SongPipe = (function () {
    function SongPipe() {
    }
    SongPipe.prototype.transform = function (song, type) {
        switch (type) {
            case 'title':
                if (song.artists && song.artists[0]) {
                    return song.artists[0].name + " -- " + song.name;
                }
                else {
                    return "" + song.name;
                }
            case 'album':
                if (song.album && song.album.images[0]) {
                    return song.album.images[0].url;
                }
                else {
                    return "";
                }
        }
    };
    SongPipe = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* Pipe */])({ name: 'songprint' }), 
        __metadata('design:paramtypes', [])
    ], SongPipe);
    return SongPipe;
}());
//# sourceMappingURL=/Users/yadav/dev/rangle/augury-examples/modules/src/song.pipe.js.map

/***/ },

/***/ 516:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=/Users/yadav/dev/rangle/augury-examples/modules/src/environment.js.map

/***/ },

/***/ 517:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol__ = __webpack_require__(531);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_object__ = __webpack_require__(524);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_object___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_core_js_es6_object__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_es6_function__ = __webpack_require__(520);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_es6_function___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_core_js_es6_function__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int__ = __webpack_require__(526);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float__ = __webpack_require__(525);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_number__ = __webpack_require__(523);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_number___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_core_js_es6_number__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_es6_math__ = __webpack_require__(522);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_es6_math___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_core_js_es6_math__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_es6_string__ = __webpack_require__(530);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_es6_string___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_core_js_es6_string__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_es6_date__ = __webpack_require__(519);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_es6_date___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_core_js_es6_date__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_es6_array__ = __webpack_require__(518);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_es6_array___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_core_js_es6_array__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp__ = __webpack_require__(528);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_js_es6_map__ = __webpack_require__(521);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_js_es6_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_core_js_es6_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_js_es6_set__ = __webpack_require__(529);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_js_es6_set___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_core_js_es6_set__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect__ = __webpack_require__(527);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect__ = __webpack_require__(532);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone__ = __webpack_require__(947);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone__);
















//# sourceMappingURL=/Users/yadav/dev/rangle/augury-examples/modules/src/polyfills.js.map

/***/ },

/***/ 670:
/***/ function(module, exports) {

module.exports = ".bg-purple {\n  background: #5128a5;\n}\n"

/***/ },

/***/ 671:
/***/ function(module, exports) {

module.exports = ".songItem img {\n    vertical-align: middle;\n    float: left;\n    width: 65px;\n    height: 65px;\n    margin-right: 10px;\n}\n\n.songItem {\n    height: 70px;\n    padding: 10px 0 10px 0;\n}\n\n.songItem:hover {\n    color: #5128a5;\n    cursor: pointer;\n}"

/***/ },

/***/ 672:
/***/ function(module, exports) {

module.exports = ".search {\n    padding: 10px;\n    border-radius: 10px;\n    border: 1px solid #ccc;\n    width: 375px;\n    outline: 0;\n}\n\n.search:focus {\n    color: #333;\n}"

/***/ },

/***/ 673:
/***/ function(module, exports) {

module.exports = "<div class=\"pa2\">\n  <div class=\"ba br4 p2 pl3 mb3 bg-purple white\">\n    <h1>{{title}}</h1>\n  </div>\n  <div class=\"fl w-75\">\n    <my-songs></my-songs>\n  </div>\n</div>\n"

/***/ },

/***/ 948:
/***/ function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(405);


/***/ }

},[948]);
//# sourceMappingURL=main.bundle.map