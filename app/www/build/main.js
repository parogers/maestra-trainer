webpackJsonp([0],{

/***/ 109:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 109;

/***/ }),

/***/ 152:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 152;

/***/ }),

/***/ 196:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__about_about__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__review_review__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(199);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TabsPage = /** @class */ (function () {
    function TabsPage() {
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_2__review_review__["a" /* ReviewPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_1__about_about__["a" /* AboutPage */];
    }
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/home/peter/maestra-trainer/app/src/pages/tabs/tabs.html"*/'<ion-tabs>\n  <ion-tab [root]="tab1Root" tabIcon="stopwatch"></ion-tab>\n  <ion-tab [root]="tab2Root" tabIcon="play"></ion-tab>\n  <ion-tab [root]="tab3Root" tabIcon="information-circle"></ion-tab>\n</ion-tabs>\n'/*ion-inline-end:"/home/peter/maestra-trainer/app/src/pages/tabs/tabs.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 197:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(34);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AboutPage = /** @class */ (function () {
    function AboutPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    AboutPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-about',template:/*ion-inline-start:"/home/peter/maestra-trainer/app/src/pages/about/about.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      About this app\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"/home/peter/maestra-trainer/app/src/pages/about/about.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */]])
    ], AboutPage);
    return AboutPage;
}());

//# sourceMappingURL=about.js.map

/***/ }),

/***/ 198:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReviewPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(34);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ReviewPage = /** @class */ (function () {
    function ReviewPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    ReviewPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-review',template:/*ion-inline-start:"/home/peter/maestra-trainer/app/src/pages/review/review.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Review\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  ...\n</ion-content>\n'/*ion-inline-end:"/home/peter/maestra-trainer/app/src/pages/review/review.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */]])
    ], ReviewPage);
    return ReviewPage;
}());

//# sourceMappingURL=review.js.map

/***/ }),

/***/ 199:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_chart_js__ = __webpack_require__(403);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_chart_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_chart_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_recording_storage__ = __webpack_require__(327);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/* Returns the current time in seconds */
function getTime() {
    return (new Date()).getTime() / 1000.0;
}
var SlidingWindow = /** @class */ (function () {
    function SlidingWindow(args) {
        this.values = [];
        this.sampleLength = args.sampleLength || 10;
        this.timeLength = args.timeLength || 5;
    }
    SlidingWindow.prototype.add = function (timestamp) {
        var start = getTime() - this.timeLength;
        this.values.push(timestamp);
        this.values = this.values.slice(-this.sampleLength);
        this.values = this.values.filter(function (value) { return value >= start; });
    };
    SlidingWindow.prototype.getAverageFrequency = function () {
        var period = this.getAveragePeriod();
        if (period == 0) {
            return undefined;
        }
        return 1.0 / period;
    };
    SlidingWindow.prototype.getAveragePeriod = function () {
        if (this.values.length <= 1) {
            return null;
        }
        var sum = 0;
        for (var n = 1; n < this.values.length; n++) {
            sum += this.values[n] - this.values[n - 1];
        }
        return sum / (this.values.length - 1);
    };
    SlidingWindow.prototype.getLastPeriod = function () {
        if (this.values.length < 2) {
            return undefined;
        }
        var last = this.values[this.values.length - 1];
        var slast = this.values[this.values.length - 2];
        return last - slast;
    };
    return SlidingWindow;
}());
var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, recordingStorage) {
        this.navCtrl = navCtrl;
        this.recordingStorage = recordingStorage;
        this.beatsPerMinute = 0;
        this.window = null;
        this.longWindow = null;
        this.chart = null;
        this.startTime = 0;
        this.maxSamples = 20;
        this.averageBPM = 0;
        this.sampleCount = 0;
        this.window = new SlidingWindow({
            sampleLength: 4,
            timeLength: 5,
        });
        this.longWindow = new SlidingWindow({
            sampleLength: 16,
            timeLength: 12,
        });
    }
    HomePage.prototype.setupChart = function () {
        this.avgData = [{
                x: 0,
                y: 0,
            }, {
                x: this.maxSamples,
                y: 0,
            }];
        this.data = [];
        this.chart = new __WEBPACK_IMPORTED_MODULE_2_chart_js__["Chart"](this.chartCanvas.nativeElement, {
            type: 'line',
            data: {
                datasets: [
                    {
                        label: 'bpm',
                        xAxisID: 'x-axis-bpm',
                        yAxisID: 'y-axis-bpm',
                        data: this.data,
                        borderColor: 'rgba(0,0,0,0.2)',
                        borderWidth: 5,
                    },
                    {
                        label: 'avg',
                        data: this.avgData,
                        borderColor: 'rgba(0,0,255,0.5)',
                        fill: false,
                        pointRadius: 0,
                        borderWidth: 2,
                    },
                ],
            },
            options: {
                animation: {
                    duration: 300,
                },
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    xAxes: [{
                            id: 'x-axis-bpm',
                            type: 'linear',
                            position: 'bottom',
                            ticks: {
                                stepSize: 1,
                                suggestedMax: this.maxSamples,
                            },
                        }],
                    yAxes: [{
                            id: 'y-axis-bpm',
                            type: 'linear',
                            ticks: {
                                min: 50,
                                max: 180,
                            },
                        }],
                },
            },
        });
    };
    HomePage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.startTime = getTime();
        this.setupChart();
        this.keyHandler = function (event) {
            if (event.key == 'Enter') {
                _this.handleClicked();
            }
        };
        document.addEventListener('keyup', this.keyHandler);
        this.recordingStorage.loadAll().then(function (recordings) {
            console.log('loaded recordings:', recordings);
        });
        this.recordingStorage.save({
            timestamp: 0,
            samples: [1, 2, 3],
            comment: 'This is a test',
        }).catch(function (error) {
            console.log('error saving:', error);
        });
        /*let tick = () => {
            setTimeout(tick, 500);
        }
        setTimeout(tick, 500);*/
    };
    HomePage.prototype.ionViewDidLeave = function () {
        document.removeEventListener('keyup', this.keyHandler);
    };
    HomePage.prototype.addSampleToChart = function (bpm, avg) {
        // Add the new sample point
        this.data.push({
            x: this.sampleCount,
            y: bpm,
        });
        this.sampleCount++;
        // Trim old samples
        if (this.data.length > this.maxSamples) {
            this.data.shift();
        }
        // Update the (long-term) average line
        this.avgData[0].x = Math.max(this.sampleCount - this.maxSamples, 0);
        this.avgData[0].y = avg;
        this.avgData[1].x = Math.max(this.data[this.data.length - 1].x, this.maxSamples);
        this.avgData[1].y = avg;
        this.chart.update();
    };
    HomePage.prototype.handleClicked = function () {
        var now = getTime();
        this.window.add(now);
        this.longWindow.add(now);
        var freq = this.window.getAverageFrequency();
        var lastPeriod = this.window.getLastPeriod();
        if (freq !== undefined && lastPeriod !== undefined) {
            var bpm = 60 * freq;
            var avg = 60 * this.longWindow.getAverageFrequency();
            var error = 60 * (freq - 1.0 / lastPeriod);
            this.averageBPM = bpm | 0;
            this.addSampleToChart(bpm, avg);
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('chart'),
        __metadata("design:type", Object)
    ], HomePage.prototype, "chartCanvas", void 0);
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/home/peter/maestra-trainer/app/src/pages/home/home.html"*/'<!--<ion-header>\n  <ion-navbar>\n    <ion-title>Home</ion-title>\n  </ion-navbar>\n</ion-header> -->\n\n<ion-content padding>\n\n  <button ion-button full class="click-button" (click)="handleClicked()">\n    Tap here\n  </button>\n\n  <button ion-button full [disabled]="true" color="primary">\n    Stop\n  </button>\n\n  <div class="chart-area">\n    <canvas #chart width="100" height="100">\n    </canvas>\n  </div>\n\n  <div>\n    Average BPM: {{ averageBPM }}\n  </div>\n  \n</ion-content>\n'/*ion-inline-end:"/home/peter/maestra-trainer/app/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__providers_recording_storage__["a" /* RecordingStorageProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__providers_recording_storage__["a" /* RecordingStorageProvider */]) === "function" && _b || Object])
    ], HomePage);
    return HomePage;
    var _a, _b;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 327:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RecordingStorageProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_storage__ = __webpack_require__(110);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var RECORDING_PREFIX = 'RS_RECORD_';
function makeKey(rec) {
    return RECORDING_PREFIX + (rec.timestamp | 0);
}
var RecordingStorageProvider = /** @class */ (function () {
    function RecordingStorageProvider(storage) {
        this.storage = storage;
    }
    /* Saves a recording into local storage, using the recording timestamp to
     * uniquely identify the record. (or updates the record if it already
     * exists) Returns a promise that resolves to 'true' on success. */
    RecordingStorageProvider.prototype.save = function (rec) {
        return this.storage.set(makeKey(rec), JSON.stringify(rec)).then(function () {
            return true;
        });
    };
    RecordingStorageProvider.prototype.loadAll = function () {
        var recordings = [];
        return this.storage.forEach(function (value, key) {
            if (key.startsWith(RECORDING_PREFIX)) {
                recordings.push(value);
            }
        }).then(function () {
            return recordings;
        }).catch(function (error) {
            console.log('error loading recordings:', error);
            return [];
        });
    };
    RecordingStorageProvider.prototype.clear = function () {
        this.storage.clear();
    };
    RecordingStorageProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__ionic_storage__["b" /* Storage */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__ionic_storage__["b" /* Storage */]) === "function" && _a || Object])
    ], RecordingStorageProvider);
    return RecordingStorageProvider;
    var _a;
}());

//# sourceMappingURL=recording-storage.js.map

/***/ }),

/***/ 328:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(329);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(351);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 351:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_storage__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(395);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_about_about__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_review_review__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_home_home__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_tabs_tabs__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_status_bar__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_splash_screen__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__providers_recording_storage__ = __webpack_require__(327);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_5__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_review_review__["a" /* ReviewPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_tabs_tabs__["a" /* TabsPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */], {}, {
                    links: []
                }),
                __WEBPACK_IMPORTED_MODULE_1__ionic_storage__["a" /* IonicStorageModule */].forRoot({
                    name: '__mydb',
                    driverOrder: ['indexeddb', 'sqlite', 'websql'],
                }),
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_5__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_review_review__["a" /* ReviewPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_tabs_tabs__["a" /* TabsPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_9__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_10__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["b" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_11__providers_recording_storage__["a" /* RecordingStorageProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 395:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__ = __webpack_require__(196);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__["a" /* TabsPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/home/peter/maestra-trainer/app/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/home/peter/maestra-trainer/app/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 405:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 200,
	"./af.js": 200,
	"./ar": 201,
	"./ar-dz": 202,
	"./ar-dz.js": 202,
	"./ar-kw": 203,
	"./ar-kw.js": 203,
	"./ar-ly": 204,
	"./ar-ly.js": 204,
	"./ar-ma": 205,
	"./ar-ma.js": 205,
	"./ar-sa": 206,
	"./ar-sa.js": 206,
	"./ar-tn": 207,
	"./ar-tn.js": 207,
	"./ar.js": 201,
	"./az": 208,
	"./az.js": 208,
	"./be": 209,
	"./be.js": 209,
	"./bg": 210,
	"./bg.js": 210,
	"./bm": 211,
	"./bm.js": 211,
	"./bn": 212,
	"./bn.js": 212,
	"./bo": 213,
	"./bo.js": 213,
	"./br": 214,
	"./br.js": 214,
	"./bs": 215,
	"./bs.js": 215,
	"./ca": 216,
	"./ca.js": 216,
	"./cs": 217,
	"./cs.js": 217,
	"./cv": 218,
	"./cv.js": 218,
	"./cy": 219,
	"./cy.js": 219,
	"./da": 220,
	"./da.js": 220,
	"./de": 221,
	"./de-at": 222,
	"./de-at.js": 222,
	"./de-ch": 223,
	"./de-ch.js": 223,
	"./de.js": 221,
	"./dv": 224,
	"./dv.js": 224,
	"./el": 225,
	"./el.js": 225,
	"./en-SG": 226,
	"./en-SG.js": 226,
	"./en-au": 227,
	"./en-au.js": 227,
	"./en-ca": 228,
	"./en-ca.js": 228,
	"./en-gb": 229,
	"./en-gb.js": 229,
	"./en-ie": 230,
	"./en-ie.js": 230,
	"./en-il": 231,
	"./en-il.js": 231,
	"./en-nz": 232,
	"./en-nz.js": 232,
	"./eo": 233,
	"./eo.js": 233,
	"./es": 234,
	"./es-do": 235,
	"./es-do.js": 235,
	"./es-us": 236,
	"./es-us.js": 236,
	"./es.js": 234,
	"./et": 237,
	"./et.js": 237,
	"./eu": 238,
	"./eu.js": 238,
	"./fa": 239,
	"./fa.js": 239,
	"./fi": 240,
	"./fi.js": 240,
	"./fo": 241,
	"./fo.js": 241,
	"./fr": 242,
	"./fr-ca": 243,
	"./fr-ca.js": 243,
	"./fr-ch": 244,
	"./fr-ch.js": 244,
	"./fr.js": 242,
	"./fy": 245,
	"./fy.js": 245,
	"./ga": 246,
	"./ga.js": 246,
	"./gd": 247,
	"./gd.js": 247,
	"./gl": 248,
	"./gl.js": 248,
	"./gom-latn": 249,
	"./gom-latn.js": 249,
	"./gu": 250,
	"./gu.js": 250,
	"./he": 251,
	"./he.js": 251,
	"./hi": 252,
	"./hi.js": 252,
	"./hr": 253,
	"./hr.js": 253,
	"./hu": 254,
	"./hu.js": 254,
	"./hy-am": 255,
	"./hy-am.js": 255,
	"./id": 256,
	"./id.js": 256,
	"./is": 257,
	"./is.js": 257,
	"./it": 258,
	"./it-ch": 259,
	"./it-ch.js": 259,
	"./it.js": 258,
	"./ja": 260,
	"./ja.js": 260,
	"./jv": 261,
	"./jv.js": 261,
	"./ka": 262,
	"./ka.js": 262,
	"./kk": 263,
	"./kk.js": 263,
	"./km": 264,
	"./km.js": 264,
	"./kn": 265,
	"./kn.js": 265,
	"./ko": 266,
	"./ko.js": 266,
	"./ku": 267,
	"./ku.js": 267,
	"./ky": 268,
	"./ky.js": 268,
	"./lb": 269,
	"./lb.js": 269,
	"./lo": 270,
	"./lo.js": 270,
	"./lt": 271,
	"./lt.js": 271,
	"./lv": 272,
	"./lv.js": 272,
	"./me": 273,
	"./me.js": 273,
	"./mi": 274,
	"./mi.js": 274,
	"./mk": 275,
	"./mk.js": 275,
	"./ml": 276,
	"./ml.js": 276,
	"./mn": 277,
	"./mn.js": 277,
	"./mr": 278,
	"./mr.js": 278,
	"./ms": 279,
	"./ms-my": 280,
	"./ms-my.js": 280,
	"./ms.js": 279,
	"./mt": 281,
	"./mt.js": 281,
	"./my": 282,
	"./my.js": 282,
	"./nb": 283,
	"./nb.js": 283,
	"./ne": 284,
	"./ne.js": 284,
	"./nl": 285,
	"./nl-be": 286,
	"./nl-be.js": 286,
	"./nl.js": 285,
	"./nn": 287,
	"./nn.js": 287,
	"./pa-in": 288,
	"./pa-in.js": 288,
	"./pl": 289,
	"./pl.js": 289,
	"./pt": 290,
	"./pt-br": 291,
	"./pt-br.js": 291,
	"./pt.js": 290,
	"./ro": 292,
	"./ro.js": 292,
	"./ru": 293,
	"./ru.js": 293,
	"./sd": 294,
	"./sd.js": 294,
	"./se": 295,
	"./se.js": 295,
	"./si": 296,
	"./si.js": 296,
	"./sk": 297,
	"./sk.js": 297,
	"./sl": 298,
	"./sl.js": 298,
	"./sq": 299,
	"./sq.js": 299,
	"./sr": 300,
	"./sr-cyrl": 301,
	"./sr-cyrl.js": 301,
	"./sr.js": 300,
	"./ss": 302,
	"./ss.js": 302,
	"./sv": 303,
	"./sv.js": 303,
	"./sw": 304,
	"./sw.js": 304,
	"./ta": 305,
	"./ta.js": 305,
	"./te": 306,
	"./te.js": 306,
	"./tet": 307,
	"./tet.js": 307,
	"./tg": 308,
	"./tg.js": 308,
	"./th": 309,
	"./th.js": 309,
	"./tl-ph": 310,
	"./tl-ph.js": 310,
	"./tlh": 311,
	"./tlh.js": 311,
	"./tr": 312,
	"./tr.js": 312,
	"./tzl": 313,
	"./tzl.js": 313,
	"./tzm": 314,
	"./tzm-latn": 315,
	"./tzm-latn.js": 315,
	"./tzm.js": 314,
	"./ug-cn": 316,
	"./ug-cn.js": 316,
	"./uk": 317,
	"./uk.js": 317,
	"./ur": 318,
	"./ur.js": 318,
	"./uz": 319,
	"./uz-latn": 320,
	"./uz-latn.js": 320,
	"./uz.js": 319,
	"./vi": 321,
	"./vi.js": 321,
	"./x-pseudo": 322,
	"./x-pseudo.js": 322,
	"./yo": 323,
	"./yo.js": 323,
	"./zh-cn": 324,
	"./zh-cn.js": 324,
	"./zh-hk": 325,
	"./zh-hk.js": 325,
	"./zh-tw": 326,
	"./zh-tw.js": 326
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 405;

/***/ })

},[328]);
//# sourceMappingURL=main.js.map