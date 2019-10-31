(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<div style=\"text-align:center\">\n  <h1>\n    Welcome to {{ title }}!\n  </h1>\n  <img width=\"300\" alt=\"Angular Logo\" src=\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTAgMjUwIj4KICAgIDxwYXRoIGZpbGw9IiNERDAwMzEiIGQ9Ik0xMjUgMzBMMzEuOSA2My4ybDE0LjIgMTIzLjFMMTI1IDIzMGw3OC45LTQzLjcgMTQuMi0xMjMuMXoiIC8+CiAgICA8cGF0aCBmaWxsPSIjQzMwMDJGIiBkPSJNMTI1IDMwdjIyLjItLjFWMjMwbDc4LjktNDMuNyAxNC4yLTEyMy4xTDEyNSAzMHoiIC8+CiAgICA8cGF0aCAgZmlsbD0iI0ZGRkZGRiIgZD0iTTEyNSA1Mi4xTDY2LjggMTgyLjZoMjEuN2wxMS43LTI5LjJoNDkuNGwxMS43IDI5LjJIMTgzTDEyNSA1Mi4xem0xNyA4My4zaC0zNGwxNy00MC45IDE3IDQwLjl6IiAvPgogIDwvc3ZnPg==\">\n</div>\n<h2>Here are some links to help you start: </h2>\n<ul>\n  <li>\n    <h2><a target=\"_blank\" rel=\"noopener\" href=\"https://angular.io/tutorial\">Tour of Heroes</a></h2>\n  </li>\n  <li>\n    <h2><a target=\"_blank\" rel=\"noopener\" href=\"https://github.com/angular/angular-cli/wiki\">CLI Documentation</a></h2>\n  </li>\n  <li>\n    <h2><a target=\"_blank\" rel=\"noopener\" href=\"https://blog.angular.io/\">Angular blog</a></h2>\n  </li>\n</ul>\n\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var ngx_swiper_wrapper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-swiper-wrapper */ "./node_modules/ngx-swiper-wrapper/dist/ngx-swiper-wrapper.es5.js");
/* harmony import */ var _angular_elements__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/elements */ "./node_modules/@angular/elements/fesm5/elements.js");
/* harmony import */ var _metapath_metapath_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./metapath/metapath.component */ "./src/app/metapath/metapath.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






// import {UserPoolComponent} from './user-pool/user-pool.component';

var DEFAULT_SWIPER_CONFIG = {
    direction: 'horizontal',
    slidesPerView: 'auto'
};
var AppModule = /** @class */ (function () {
    function AppModule(injector) {
        this.injector = injector;
    }
    AppModule.prototype.ngDoBootstrap = function () {
        // const el = createCustomElement(UserPoolComponent, {injector: this.injector});
        var el = Object(_angular_elements__WEBPACK_IMPORTED_MODULE_4__["createCustomElement"])(_metapath_metapath_component__WEBPACK_IMPORTED_MODULE_5__["MetapathComponent"], { injector: this.injector });
        customElements.define('meta-path', el);
    };
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                // UserPoolComponent,
                _metapath_metapath_component__WEBPACK_IMPORTED_MODULE_5__["MetapathComponent"]
            ],
            imports: [
                ngx_swiper_wrapper__WEBPACK_IMPORTED_MODULE_3__["SwiperModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"]
            ],
            providers: [
                {
                    provide: ngx_swiper_wrapper__WEBPACK_IMPORTED_MODULE_3__["SWIPER_CONFIG"],
                    useValue: DEFAULT_SWIPER_CONFIG
                }
            ],
            entryComponents: [
                // UserPoolComponent
                _metapath_metapath_component__WEBPACK_IMPORTED_MODULE_5__["MetapathComponent"]
            ]
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"]])
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/metapath/config.service.ts":
/*!********************************************!*\
  !*** ./src/app/metapath/config.service.ts ***!
  \********************************************/
/*! exports provided: ConfigService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfigService", function() { return ConfigService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ConfigService = /** @class */ (function () {
    function ConfigService() {
        this.config = null;
    }
    ConfigService.prototype.setConfig = function (configVariableName) {
        if (!window[configVariableName]) {
            console.error('missing config');
        }
        this.config = window[configVariableName];
    };
    ConfigService.prototype.logConfig = function () {
        console.dir(this.config);
    };
    ConfigService.prototype.getId = function () {
        return this.config.pathId;
    };
    ConfigService.prototype.getLayers = function () {
        return this.config.layers;
    };
    ConfigService.prototype.getLayer = function (idx) {
        return this.config.layers[idx];
    };
    ConfigService.prototype.getNextScreen = function () {
        return this.config.nextScreenUrl;
    };
    ConfigService.prototype.getPrevScreen = function () {
        return this.config.prevScreenUrl;
    };
    ConfigService.prototype.helpEnabled = function () {
        if (!this.config.help || !this.config.help.enabled) {
            return false;
        }
        return true;
    };
    ConfigService.prototype.getHelp = function () {
        if (!this.config.help || !this.config.help.enabled) {
            return null;
        }
        return this.config.help;
    };
    ConfigService.prototype.hasOutline = function () {
        if (this.config.path.outline) {
            return true;
        }
        return false;
    };
    ConfigService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root',
        }),
        __metadata("design:paramtypes", [])
    ], ConfigService);
    return ConfigService;
}());



/***/ }),

/***/ "./src/app/metapath/metapath.component.html":
/*!**************************************************!*\
  !*** ./src/app/metapath/metapath.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"meta-path\">\n    <div #container class=\"meta-path-container\" [style.backgroundImage]=\"'url('+bgimage+')'\" [style.width.px]=\"containerWidth\" [style.height.px]=\"containerHeight\">\n        <swiper #swiperWrapper class=\"swiper-container\" [config]=\"swipe_config\">\n            <div class=\"swiper-slide\">\n                <div class=\"content\" [style.height.px]=\"containerHeight\">\n                    <svg [attr.viewBox]=\"'0 0 '+ svgContentWidth +' 768'\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\">\n                        <svg:g id=\"theme\" stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\">\n\n                            <svg:path *ngIf=\"pathOutline\" id=\"pathOultine\" [attr.stroke]=\"pathOutline\" stroke-linejoin=\"round\" stroke-linecap=\"round\" stroke-width=\"70\" [attr.d]=\"svgPathString\"></svg:path>\n                            <svg:path id=\"path\" [attr.stroke]=\"pathcolor\" stroke-linejoin=\"round\" stroke-linecap=\"round\" stroke-width=\"60\" [attr.d]=\"svgPathString\"></svg:path>\n\n                            <svg:g  *ngFor=\"let point of points; let i = index\"\n                                [attr.cx]=\"getPosX(i)\"\n                                [attr.cy]=\"getPosY(i)\"\n                                [attr.transform]=\"'translate('+getPosX(i)+' '+getPosY(i)+')'\"\n                                (click)=\"nodeClick(i)\"\n                                (mouseenter)=\"showTooltip(i)\"\n                                (mouseleave)=\"hideTooltip(i)\"\n                            >\n                                <svg:ellipse class=\"node\" stroke-width=\"3\"  [style.fill]=\"pathPointStyle(i)\" cx=\"0\" cy=\"0\" [ngClass]=\"pathPointClass(i)\"  rx=\"24\" ry=\"14\" />\n\n                                <svg:g *ngIf=\"getPointType(i) == 'test'\" class=\"test-node\" [ngClass]=\"pathPointClass(i)\" >\n                                    <ellipse stroke-width=\"3\" stroke=\"red\" cx=\"0\" cy=\"0\" rx=\"40\" ry=\"24\" class=\"test-node-oval\"></ellipse>\n                                    <text x=\"-17\" y=\"4\" class=\"test-node-text\">Test</text>\n                                </svg:g>\n\n                                <title>{{getPointTitle(i)}}</title>\n                            </svg:g>\n\n                            <!--<svg:ellipse #player class=\"player\" [attr.cx]=\"getPlayerPosition(currentNodeIndex).x\" [attr.cy]=\"getPlayerPosition(currentNodeIndex).y\" rx=\"5\" ry=\"5\"></svg:ellipse>-->\n\n                        </svg:g>\n\n                    </svg>\n\n                    <div class=\"html-player\" [ngClass]=\"{'animate': (isWalking), 'animate-back': (isWalking < 0)}\" [style.transform]=\"getPlayerTransform(currentNodeIndex, isWalking)\">\n                        <div class=\"html-player-scale\" [style.transform]=\"setScaleTransform()\">\n                            <div class=\"html-player-image\" [style.backgroundImage]=\"'url('+playeranim+')'\"></div>\n                        </div>\n                    </div>\n\n                </div>\n            </div>\n        </swiper>\n\n        <div class=\"layers\">\n            <div class=\"layers-content\" [style.width.px]=\"1024\" [style.height.px]=\"768\" [style.transform]=\"getLayerRatioTransform()\">\n\n                <ng-container *ngFor=\"let layer of cs.getLayers()\">\n\n                    <div class=\"layer\" [ngClass]=\"getAnimClass(layer.anim)\" [style.left.px]=\"setLayerTranslateX(layer)\" [style.top.px]=\"setLayerTranslateY(layer)\">\n                        <div class=\"sprite\" [style.backgroundImage]=\"'url('+ layer.asset +')'\" [ngClass]=\"setLayerSpriteAnim(layer)\"></div>\n                    </div>\n                </ng-container>\n\n            </div>\n        </div>\n\n        <div #helpContainer class=\"meta-path-help\" *ngIf=\"helpVisible\">\n            <div class=\"meta-path-help-content\">\n                <!--<div class=\"close-button\" (click)=\"toggleHelp()\">Zavřít</div>-->\n                <h2 *ngIf=\"this.cs.getHelp().headline\">{{this.cs.getHelp().headline}}</h2>\n                <p *ngIf=\"this.cs.getHelp().text\">{{this.cs.getHelp().text}}</p>\n                <div *ngIf=\"this.cs.getHelp().imageUrl\" class=\"meta-path-help-image\">\n                    <img [src]=\"this.cs.getHelp().imageUrl\" alt=\"\">\n                </div>\n                <div class=\"dialog-footer button-group\">\n                    <button class=\"button button-dialog\" (click)=\"toggleHelp()\">{{this.cs.getHelp().close}}</button>\n                </div>\n            </div>\n        </div>\n\n        <div id=\"scrollbar\"></div>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/metapath/metapath.component.scss":
/*!**************************************************!*\
  !*** ./src/app/metapath/metapath.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".meta-path {\n  box-sizing: border-box;\n  display: flex;\n  justify-content: center;\n  position: relative; }\n  .meta-path * {\n    box-sizing: border-box;\n    -webkit-font-smoothing: antialiased;\n    -webkit-user-select: none;\n       -moz-user-select: none;\n        -ms-user-select: none;\n            user-select: none; }\n  .meta-path-container {\n  background-size: contain;\n  background-repeat: no-repeat;\n  background-position: center top;\n  position: relative; }\n  .meta-path .swiper-container {\n  width: 100%;\n  height: 100%; }\n  .meta-path /deep/ .swiper-slide {\n  overflow: hidden;\n  width: auto !important;\n  max-width: none !important; }\n  .content {\n  overflow: hidden; }\n  .swiper-slide {\n  height: auto;\n  box-sizing: border-box;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: center; }\n  .swiper-slide svg {\n    height: 100%;\n    width: auto;\n    margin: 0 auto; }\n  .node-next {\n  cursor: pointer; }\n  .node-current {\n  cursor: pointer;\n  stroke: white; }\n  .node-done {\n  cursor: pointer;\n  stroke: white; }\n  .node-next {\n  cursor: pointer;\n  stroke: white; }\n  .test-node .test-node-oval {\n  fill: white;\n  stroke: red; }\n  .test-node .test-node-text {\n  stroke: none;\n  font-weight: bold;\n  font-family: sans-serif;\n  fill: red; }\n  .test-node.node-done {\n  font-family: Arial, sans-serif; }\n  .test-node.node-done .test-node-oval {\n    fill: white;\n    stroke: green; }\n  .test-node.node-done .test-node-text {\n    font-weight: bold;\n    font-family: Arial, sans-serif;\n    fill: green; }\n  .player {\n  fill: deeppink; }\n  .html-player {\n  pointer-events: none;\n  width: 0;\n  height: 0;\n  position: absolute;\n  top: 0;\n  left: 0; }\n  .html-player-scale {\n  -webkit-transform: scale(0.9);\n          transform: scale(0.9);\n  width: 0;\n  height: 0;\n  position: absolute;\n  top: 0;\n  left: 0; }\n  .html-player-image {\n  width: 300px;\n  height: 300px;\n  -webkit-transform: translate(-150px, -282px);\n          transform: translate(-150px, -282px); }\n  .html-player.animate .html-player-image {\n  -webkit-animation: playPlayer 0.3s steps(3) infinite;\n          animation: playPlayer 0.3s steps(3) infinite; }\n  .html-player.animate-back .html-player-image {\n  -webkit-transform: scaleX(-1) translate(150px, -282px);\n          transform: scaleX(-1) translate(150px, -282px); }\n  @-webkit-keyframes playPlayer {\n  100% {\n    background-position-x: -900px; } }\n  @keyframes playPlayer {\n  100% {\n    background-position-x: -900px; } }\n  .button {\n  font-size: 20px;\n  font-family: Arial, sans-serif;\n  color: yellow;\n  background-color: green;\n  border-radius: 10px;\n  padding: 20px 40px;\n  border: 3px solid yellow;\n  cursor: pointer; }\n  .button:focus {\n    outline: none; }\n  .button-next,\n.button-prev,\n.button-help {\n  position: absolute;\n  z-index: 1500; }\n  .button-next {\n  bottom: 10px;\n  right: 10px; }\n  .button-prev {\n  bottom: 10px;\n  left: 10px; }\n  .button-help {\n  bottom: 10px;\n  left: 0;\n  right: 0;\n  width: 140px;\n  text-align: center;\n  margin: auto;\n  padding-left: 10px;\n  padding-right: 10px; }\n  .dialog-footer {\n  margin-top: 20px; }\n  .button-group {\n  display: flex;\n  justify-content: center;\n  align-content: center; }\n  .meta-path-help {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n  z-index: 1600;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: rgba(0, 128, 0, 0.7); }\n  .meta-path-help-image {\n  margin-top: 20px;\n  display: flex;\n  justify-content: center; }\n  .meta-path-help-content {\n  background-color: green;\n  min-width: 600px;\n  padding: 30px;\n  border: 2px solid yellow;\n  border-radius: 20px;\n  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3);\n  color: white;\n  font-family: Arial, sans-serif;\n  font-size: 20px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center; }\n  .meta-path-help-content h2 {\n    font-size: 28px;\n    margin: 0;\n    text-align: center; }\n  .meta-path-help-content p:last-of-type {\n    margin-bottom: 0; }\n  .layers {\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center; }\n  .layers-content {\n  margin: 0 auto;\n  position: relative;\n  overflow: hidden;\n  z-index: 1100;\n  pointer-events: none; }\n  .layer {\n  -webkit-transform-origin: 0 0;\n          transform-origin: 0 0;\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  pointer-events: none; }\n  .sprite {\n  width: 150px;\n  height: 150px;\n  overflow: hidden;\n  background-position: 0 0;\n  background-repeat: no-repeat; }\n  .layer-anim-left-right {\n  -webkit-animation: left-right 20s infinite;\n          animation: left-right 20s infinite;\n  -webkit-animation-timing-function: linear;\n          animation-timing-function: linear; }\n  .layer-anim-right-left {\n  -webkit-animation: right-left 20s infinite;\n          animation: right-left 20s infinite;\n  -webkit-animation-timing-function: linear;\n          animation-timing-function: linear; }\n  .layer-anim-left-blip {\n  -webkit-animation: left-blip 10s infinite;\n          animation: left-blip 10s infinite;\n  -webkit-animation-timing-function: ease-in-out;\n          animation-timing-function: ease-in-out; }\n  .layer-anim-right-blip {\n  -webkit-animation: right-blip 10s infinite;\n          animation: right-blip 10s infinite;\n  -webkit-animation-timing-function: ease-in-out;\n          animation-timing-function: ease-in-out; }\n  .layer-sprite-anim-step {\n  -webkit-animation: spriteAnim 0.3s steps(3) infinite;\n          animation: spriteAnim 0.3s steps(3) infinite; }\n  @-webkit-keyframes left-right {\n  0% {\n    -webkit-transform: translateX(-200px);\n            transform: translateX(-200px); }\n  100% {\n    -webkit-transform: translateX(100%);\n            transform: translateX(100%); } }\n  @keyframes left-right {\n  0% {\n    -webkit-transform: translateX(-200px);\n            transform: translateX(-200px); }\n  100% {\n    -webkit-transform: translateX(100%);\n            transform: translateX(100%); } }\n  @-webkit-keyframes right-left {\n  0% {\n    -webkit-transform: translateX(100%);\n            transform: translateX(100%); }\n  100% {\n    -webkit-transform: translateX(-200px);\n            transform: translateX(-200px); } }\n  @keyframes right-left {\n  0% {\n    -webkit-transform: translateX(100%);\n            transform: translateX(100%); }\n  100% {\n    -webkit-transform: translateX(-200px);\n            transform: translateX(-200px); } }\n  @-webkit-keyframes left-blip {\n  0% {\n    -webkit-transform: translateX(-150px);\n            transform: translateX(-150px); }\n  10% {\n    -webkit-transform: translateX(0);\n            transform: translateX(0); }\n  15% {\n    -webkit-transform: translateX(0);\n            transform: translateX(0); }\n  20% {\n    -webkit-transform: translateX(-150px);\n            transform: translateX(-150px); }\n  100% {\n    -webkit-transform: translateX(-150px);\n            transform: translateX(-150px); } }\n  @keyframes left-blip {\n  0% {\n    -webkit-transform: translateX(-150px);\n            transform: translateX(-150px); }\n  10% {\n    -webkit-transform: translateX(0);\n            transform: translateX(0); }\n  15% {\n    -webkit-transform: translateX(0);\n            transform: translateX(0); }\n  20% {\n    -webkit-transform: translateX(-150px);\n            transform: translateX(-150px); }\n  100% {\n    -webkit-transform: translateX(-150px);\n            transform: translateX(-150px); } }\n  @-webkit-keyframes right-blip {\n  0% {\n    -webkit-transform: translateX(100%);\n            transform: translateX(100%); }\n  10% {\n    -webkit-transform: translateX(768px);\n            transform: translateX(768px); }\n  15% {\n    -webkit-transform: translateX(768px);\n            transform: translateX(768px); }\n  20% {\n    -webkit-transform: translateX(100%);\n            transform: translateX(100%); }\n  100% {\n    -webkit-transform: translateX(100%);\n            transform: translateX(100%); } }\n  @keyframes right-blip {\n  0% {\n    -webkit-transform: translateX(100%);\n            transform: translateX(100%); }\n  10% {\n    -webkit-transform: translateX(768px);\n            transform: translateX(768px); }\n  15% {\n    -webkit-transform: translateX(768px);\n            transform: translateX(768px); }\n  20% {\n    -webkit-transform: translateX(100%);\n            transform: translateX(100%); }\n  100% {\n    -webkit-transform: translateX(100%);\n            transform: translateX(100%); } }\n  @-webkit-keyframes spriteAnim {\n  100% {\n    background-position-x: -450px; } }\n  @keyframes spriteAnim {\n  100% {\n    background-position-x: -450px; } }\n  #scrollbar {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  height: 10px; }\n"

/***/ }),

/***/ "./src/app/metapath/metapath.component.ts":
/*!************************************************!*\
  !*** ./src/app/metapath/metapath.component.ts ***!
  \************************************************/
/*! exports provided: MetapathComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MetapathComponent", function() { return MetapathComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ng2_cookies__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng2-cookies */ "./node_modules/ng2-cookies/index.js");
/* harmony import */ var ng2_cookies__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(ng2_cookies__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _config_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./config.service */ "./src/app/metapath/config.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var tooltip_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tooltip.js */ "./node_modules/tooltip.js/dist/esm/tooltip.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};





var MetapathComponent = /** @class */ (function () {
    function MetapathComponent(cconf, document) {
        this.cconf = cconf;
        this.document = document;
        this.config = null;
        this.redirect = 'true';
        this.startindex = 0;
        this.pathcolor = 'green';
        // pin colors
        this.nextPinColor = 'darkgreen';
        this.previousPinColor = 'lightgreen';
        this.currentPinColor = 'orange';
        this.redirectTimeout = 500;
        this.swiperInstance = null;
        this.points = [];
        this.path = [];
        this.cookieName = 'meta_quiz';
        this.pathOutline = null;
        this.walkingSpeed = 200;
        // force show help
        this.helpVisible = false;
        // states
        this.currentNodeIndex = 1;
        this.updating = false;
        this.isWalking = 0;
        // size
        this.containerWidth = 1024;
        this.containerHeight = 768;
        this.ratio = 0.75;
        this.minWidth = 1024;
        this.minHeight = 768;
        this.keepMinSize = true;
        // calculations
        this.svgContentWidth = 2000;
        this.swiperWidth = 0;
        // helpers
        this.lastItemX = 0;
        this.svgPathString = '';
        // path generation params
        this.smooth = 10;
        this.stepSmoothDelta = 3;
        this.halfYOffset = -50;
        this.halfYOffsetsLess = [-1, 50, 70, 80, 50, -0, 0, -90, -100, -100, -100];
        this.pathPointsSpace = 100;
        this.pathStartOffset = 100;
        this.pathEndOffset = 100;
        this.amplitudeY = 200;
        this.swipe_config = {
            direction: 'horizontal',
            freeMode: true,
            slidesPerView: 'auto',
            centeredSlides: false,
            keyboard: false,
            mousewheel: true,
            scrollbar: {
                el: '#scrollbar',
                hide: false,
                draggable: true,
            },
            navigation: false,
            pagination: false,
        };
        this.tooltips = [];
        this.cs = cconf;
        this.cookies = ng2_cookies__WEBPACK_IMPORTED_MODULE_1__["Cookie"].get(this.cookieName);
    }
    MetapathComponent.prototype.ngOnInit = function () {
        this.cs.setConfig(this.config);
        this.points = this.cs.config.pathpoints;
        this.pathcolor = this.cs.config.path.color;
        this.nextPinColor = this.cs.config.path.pinNext;
        this.previousPinColor = this.cs.config.path.pinPrev;
        this.currentPinColor = this.cs.config.path.pinCurrent;
        this.bgimage = this.cs.config.backgroundImageUrl;
        this.playeranim = this.cs.config.playerAnimationUrl;
        if (this.cs.hasOutline()) {
            this.pathOutline = this.cs.config.path.outline;
        }
        // get last index from cookie
        // this.loadIndexFromCookie();
        var idx = Number(this.startindex);
        this.currentNodeIndex = idx;
        this.fixIndex();
        this.Resize(window.innerWidth, window.innerHeight);
        this.buildPath();
    };
    MetapathComponent.prototype.ngAfterViewInit = function () {
        this.swiperInstance = this.swiperWrapper.directiveRef.instance;
        this.swiperWidth = this.swiperWrapper.directiveRef.elementRef.nativeElement.clientWidth;
        this.setViewToPlayerPosition();
        this.setScaleTransform();
        //this.setTooltips();
    };
    MetapathComponent.prototype.onResize = function (event) {
        this.Resize(event.target.innerWidth, event.target.innerHeight);
    };
    MetapathComponent.prototype.Resize = function (winW, winH) {
        if (!this.updating) {
            this.updating = true;
            if (this.keepMinSize) {
                var width = winW;
                if (winW < this.minWidth) {
                    width = this.minWidth;
                }
                var newHeight = width * this.ratio;
                if (newHeight <= winH) {
                    this.containerWidth = width;
                    this.containerHeight = Math.round(newHeight);
                    this.Update();
                }
                else {
                    this.containerHeight = winH;
                    this.containerWidth = Math.round(winH * 1.33);
                }
            }
            else {
                var newHeight = winW * this.ratio;
                this.containerWidth = winW;
                this.containerHeight = Math.round(newHeight);
            }
            this.Update();
        }
    };
    MetapathComponent.prototype.Update = function () {
        var _this = this;
        setTimeout(function () {
            _this.swiperWrapper.directiveRef.update(true);
            _this.updating = false;
        }, 100);
    };
    MetapathComponent.prototype.fixIndex = function () {
        // prevent high index
        if (this.currentNodeIndex >= this.points.length) {
            this.currentNodeIndex = this.points.length - 1;
        }
        if (this.currentNodeIndex < 0) {
            this.currentNodeIndex = 0;
        }
    };
    MetapathComponent.prototype.loadIndexFromCookie = function () {
        // refresh from cookie
        if (this.cookies) {
            var cookieValue = +this.cookies * 1;
            if (cookieValue >= this.points.length) {
                cookieValue = this.points.length - 1;
            }
            this.currentNodeIndex = cookieValue;
        }
    };
    MetapathComponent.prototype.buildPath = function () {
        // reset path
        this.path = [];
        // adjust startoffset for small amont of points to adjust horizontal centering shorter curves
        var area = (this.points.length - 1) * this.pathPointsSpace;
        if (area < this.minWidth) {
            var offset = (this.minWidth - area) / 2;
            this.pathStartOffset = offset;
            this.pathEndOffset = offset;
        }
        // set new half offset for centering different curves
        this.halfYPosition = this.minHeight / 2 - this.halfYOffset;
        if (this.points.length <= 10) {
            this.halfYPosition = this.minHeight / 2 + this.halfYOffsetsLess[this.points.length];
        }
        // adjust size of svg
        this.svgContentWidth = this.pathStartOffset + this.pathEndOffset + ((this.points.length - 1) * this.pathPointsSpace);
        var localPathString = '';
        for (var i = 0; i < this.points.length; i++) {
            var __ret = this.buildPoint(i);
            this.path.push(__ret);
            if (i <= 0) {
                localPathString = localPathString + 'M' + (__ret.x - this.pathStartOffset) + ',' + __ret.y + ' ';
            }
            localPathString = localPathString + __ret.svgCurve + __ret.x + ',' + __ret.y + ', ';
            if (i === this.points.length - 1) {
                localPathString = localPathString + 'L' + (__ret.x + this.pathEndOffset) + ',' + __ret.y + ', ';
            }
            // clean end coma (FF issue)
            localPathString = localPathString.substr(0, localPathString.length - 2);
            this.svgPathString = localPathString;
        }
    };
    MetapathComponent.prototype.buildPoint = function (i) {
        //  x
        var x = (i * this.pathPointsSpace) + this.pathStartOffset;
        //  y
        var helpx = ((i / this.smooth) * this.stepSmoothDelta);
        var y = -1 * (Math.cos(helpx) * this.amplitudeY) + this.halfYPosition;
        var svgCurve = 'L';
        return { x: x, y: y, svgCurve: svgCurve };
    };
    MetapathComponent.prototype.getPosX = function (idx) {
        var tx = (idx * this.pathPointsSpace) + this.pathStartOffset;
        this.lastItemX = tx;
        return this.lastItemX;
    };
    MetapathComponent.prototype.getPosY = function (idx) {
        var x = (((idx) / this.smooth) * this.stepSmoothDelta);
        var y = -1 * (Math.cos(x) * this.amplitudeY) + this.halfYPosition;
        return y;
    };
    MetapathComponent.prototype.pathPointClass = function (idx) {
        if (this.points[idx].done) {
            return 'node-done';
        }
        return 'node-next';
    };
    MetapathComponent.prototype.pathPointStyle = function (idx) {
        if (this.points[idx].done) {
            return this.previousPinColor;
        }
        return this.nextPinColor;
    };
    MetapathComponent.prototype.getPointTitle = function (idx) {
        return this.points[idx].title;
    };
    MetapathComponent.prototype.getPlayerPosition = function (idx, ratio) {
        if (ratio === void 0) { ratio = 1; }
        return {
            x: this.path[idx].x * ratio,
            y: this.path[idx].y * ratio
        };
    };
    MetapathComponent.prototype.setScaleTransform = function () {
        var ratio = this.containerWidth / this.minWidth * 0.75;
        if (ratio > 1) {
            ratio = 1;
        }
        var css = 'scale(' + (ratio) + ')';
        return css;
    };
    MetapathComponent.prototype.getPlayerTransform = function (idx, dir) {
        var ratio = this.containerWidth / this.minWidth;
        var pos = this.getPlayerPosition(idx, ratio);
        var css = 'translate(' + (pos.x) + 'px,' + (pos.y) + 'px)';
        if (dir < 0) {
            css = 'translate(' + (pos.x) + 'px,' + (pos.y) + 'px)';
        }
        return css;
    };
    MetapathComponent.prototype.getLayerRatioTransform = function () {
        var ratio = this.containerWidth / this.minWidth;
        var scaleRatio = ratio;
        var css = 'scale(' + (scaleRatio) + ',' + (scaleRatio) + ')';
        return css;
    };
    MetapathComponent.prototype.translateSwiper = function (offset) {
        if (this.swiperInstance) {
            this.swiperInstance.setTranslate(offset, 0);
        }
    };
    MetapathComponent.prototype.setViewToPlayerPosition = function () {
        // set view to player posiotion
        var ppos = this.getPlayerPosition(this.currentNodeIndex);
        var numberOfScreens = ppos.x / this.minWidth;
        if (ppos.x > this.minWidth) {
            var scroolOffset = (this.minWidth * numberOfScreens);
            this.translateSwiper(-scroolOffset);
        }
    };
    MetapathComponent.prototype.goToPoint = function (dir) {
        var newIndex = this.currentNodeIndex + dir;
        if (newIndex >= 0 && newIndex < this.points.length) {
            this.movePlayerTo(dir, newIndex);
        }
        else if (newIndex >= this.points.length) {
            console.log('goToNextScreen');
            this.gotoUrl(this.cs.getNextScreen());
        }
        else if (newIndex < 0) {
            console.log('gotoPrevScreen');
            this.gotoUrl(this.cs.getPrevScreen());
        }
    };
    MetapathComponent.prototype.movePlayerTo = function (dir, targetIdx) {
        var _this = this;
        if (!this.isWalking) {
            if (this.currentNodeIndex === targetIdx) {
                return;
            }
            this.isWalking = dir;
            this.timer = setInterval(function () {
                _this.currentNodeIndex = _this.currentNodeIndex + dir;
                if (_this.currentNodeIndex === targetIdx) {
                    _this.isWalking = 0;
                    clearInterval(_this.timer);
                    ng2_cookies__WEBPACK_IMPORTED_MODULE_1__["Cookie"].set(_this.cookieName, _this.currentNodeIndex.toString());
                    _this.gotoUrlByIndex(_this.currentNodeIndex);
                    // //                    this.setViewToPlayerPosition();
                    //                     const xoffs = this.swiperInstance.getTranslate('x');
                    //                     // console.dir(xoffs);
                    //
                    //
                    //                     const xmax = xoffs + this.containerWidth;
                    //                     const pPos = this.getPlayerPosition(this.currentNodeIndex).x * this.ratio;
                    //
                    //                     console.log(xoffs);
                    //                     console.log(xmax);
                    //                     console.log(pPos);
                    // if(pPos > xmax) {
                    //    this.swiperInstance.setTranslate(xoffs - 100);
                    // }
                }
            }, this.walkingSpeed);
        }
    };
    MetapathComponent.prototype.nodeClick = function (idx) {
        var dir = 1;
        if (idx < this.currentNodeIndex) {
            dir = -1;
        }
        this.movePlayerTo(dir, idx);
    };
    MetapathComponent.prototype.toggleHelp = function () {
        this.helpVisible = !this.helpVisible;
    };
    MetapathComponent.prototype.getPointType = function (idx) {
        return this.points[idx].type;
    };
    MetapathComponent.prototype.gotoUrlByIndex = function (idx) {
        var url = this.points[idx].url;
        this.gotoUrl(url);
    };
    MetapathComponent.prototype.gotoUrl = function (url) {
        if (!url) {
            console.log('missing url');
            return;
        }
        if (this.redirect === 'true') {
            setTimeout(function () {
                this.document.location.href = url;
            }, this.redirectTimeout);
        }
        else {
            console.warn('redirect=false - debug target url: ' + url);
        }
    };
    MetapathComponent.prototype.getAnimClass = function (animtype) {
        if (animtype === void 0) { animtype = 'none'; }
        return 'layer-anim-' + animtype;
    };
    MetapathComponent.prototype.setLayerTranslateY = function (layer) {
        var pos = 0;
        if (layer.position) {
            pos = layer.position.y;
        }
        return (pos);
    };
    MetapathComponent.prototype.setLayerTranslateX = function (layer) {
        var pos = 0;
        if (layer.position) {
            pos = layer.position.x;
        }
        return (pos);
    };
    MetapathComponent.prototype.setLayerSpriteAnim = function (layer) {
        var css = 'layer-sprite-anim-none';
        if (layer.spriteanim) {
            css = 'layer-sprite-anim-step';
        }
        return (css);
    };
    MetapathComponent.prototype.setTooltips = function () {
        var _this = this;
        setTimeout(function () {
            Array.prototype.slice.call(window.document.getElementsByTagName('title'))
                .forEach(function (title) {
                if (title.namespaceURI.includes('svg') && title.innerHTML) {
                    _this.tooltips.push(new tooltip_js__WEBPACK_IMPORTED_MODULE_4__["default"](title.parentNode, {
                        title: title.innerHTML,
                        placement: 'bottom',
                        container: window.document.body,
                    }));
                }
            });
        }, 1000);
    };
    MetapathComponent.prototype.showTooltip = function (idx) {
        this.tooltips.length && this.tooltips[idx].show();
    };
    MetapathComponent.prototype.hideTooltip = function (idx) {
        this.tooltips.length && this.tooltips[idx].hide();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], MetapathComponent.prototype, "config", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], MetapathComponent.prototype, "redirect", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], MetapathComponent.prototype, "startindex", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('container'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], MetapathComponent.prototype, "container", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('swiperWrapper'),
        __metadata("design:type", Object)
    ], MetapathComponent.prototype, "swiperWrapper", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('window:resize', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], MetapathComponent.prototype, "onResize", null);
    MetapathComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'meta-path',
            template: __webpack_require__(/*! ./metapath.component.html */ "./src/app/metapath/metapath.component.html"),
            styles: [__webpack_require__(/*! ./metapath.component.scss */ "./src/app/metapath/metapath.component.scss")],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].Emulated
        }),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_common__WEBPACK_IMPORTED_MODULE_3__["DOCUMENT"])),
        __metadata("design:paramtypes", [_config_service__WEBPACK_IMPORTED_MODULE_2__["ConfigService"], Object])
    ], MetapathComponent);
    return MetapathComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/petr/dev/cestina2/metaPathComponent/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.818049228df083297e1a.js.map