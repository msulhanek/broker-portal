function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/agent-detail/agent-detail.component.ts":
  /*!********************************************************!*\
    !*** ./src/app/agent-detail/agent-detail.component.ts ***!
    \********************************************************/

  /*! exports provided: AgentDetailComponent */

  /***/
  function srcAppAgentDetailAgentDetailComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AgentDetailComponent", function () {
      return AgentDetailComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _services_property_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../services/property.service */
    "./src/app/services/property.service.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _contact_form_contact_form_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../contact-form/contact-form.component */
    "./src/app/contact-form/contact-form.component.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _property_slider_property_slider_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../property-slider/property-slider.component */
    "./src/app/property-slider/property-slider.component.ts");

    function AgentDetailComponent_app_property_slider_32_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-property-slider", 15);
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("latestProperties", ctx_r0.properties);
      }
    }

    function AgentDetailComponent_div_33_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Loading...");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var AgentDetailComponent = /*#__PURE__*/function () {
      function AgentDetailComponent(propertyService, sanitizer, router, route) {
        _classCallCheck(this, AgentDetailComponent);

        this.propertyService = propertyService;
        this.sanitizer = sanitizer;
        this.router = router;
        this.route = route;
        this.properties = [];
        this.show = false;
      }

      _createClass(AgentDetailComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.router.paramMap.subscribe(function (params) {
            _this.id = params.get("id");
            _this.name = params.get('name');
          });
          this.loadLatest();
          this.getUser();
        }
      }, {
        key: "loadLatest",
        value: function loadLatest() {
          var _this2 = this;

          this.propertyService.getSuggested('((visualId:*crt*) AND (authorEmail:*Peter Kopúň*) OR (authorName:*Peter Kopúň*))').subscribe(function (search) {
            search._embedded.cases.forEach(function (value) {
              _this2.propertyService.getTask(value.stringId).subscribe(function (searchRequest) {
                var tasks = searchRequest._embedded.tasks;

                _this2.propertyService.getData(tasks[0].stringId).subscribe(function (data) {
                  var task = Object.assign({
                    title: value.title,
                    stringId: value.stringId,
                    taskStringId: tasks[0].stringId
                  }, _this2.propertyService.parseData(data));

                  _this2.propertyService.getImage(tasks[0].stringId).subscribe(function (image) {
                    var objectURL = URL.createObjectURL(image);
                    task.image = _this2.sanitizer.bypassSecurityTrustUrl(objectURL);

                    _this2.properties.push(task);
                  });
                });
              });

              _this2.show = true;
            });
          });
        }
      }, {
        key: "getUser",
        value: function getUser() {
          var _this3 = this;

          this.propertyService.getData(this.id).subscribe(function (search) {
            var data = search._embedded.dataGroups[0].fields._embedded.localisedEnumerationMapFields[0].options;
            var company = search._embedded.dataGroups[0].fields._embedded.localisedTextFields[1].value;

            for (var value in data) {
              var user = data[value].split(' ');

              if ("".concat(user[0], " ").concat(user[1]) === _this3.name && user[2]) {
                _this3.agent = {
                  name: user[0],
                  surname: user[1],
                  email: user[3],
                  phone: user[2],
                  company: company
                };
              }
            }

            console.log(_this3.agent);
          });
        }
      }, {
        key: "redirectToCompany",
        value: function redirectToCompany() {
          this.route.navigate(['/company', this.id]);
        }
      }]);

      return AgentDetailComponent;
    }();

    AgentDetailComponent.ɵfac = function AgentDetailComponent_Factory(t) {
      return new (t || AgentDetailComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_property_service__WEBPACK_IMPORTED_MODULE_1__["PropertyService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]));
    };

    AgentDetailComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AgentDetailComponent,
      selectors: [["app-agent-detail"]],
      decls: 34,
      vars: 7,
      consts: [["id", "detail-hero"], ["id", "agent"], [1, "container"], [1, "row"], [1, "col-lg-12"], [1, "box"], [1, "col-lg-5"], ["src", "https://source.unsplash.com/mW3I5zmyaUc/250x250", 1, "img-fluid"], [1, "mt-3"], [2, "cursor", "pointer", 3, "click"], [1, "col-lg-7"], [1, "inzeraty", "mt-5", "pb-5", "bg-light"], [1, "heading"], [3, "latestProperties", 4, "ngIf"], ["style", "height: 10rem;", "class", "text-center mt-4", 4, "ngIf"], [3, "latestProperties"], [1, "text-center", "mt-4", 2, "height", "10rem"], ["role", "status", 1, "spinner-border", 2, "width", "3rem", "height", "3rem"], [1, "sr-only"]],
      template: function AgentDetailComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "header", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "section", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "img", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "h6");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AgentDetailComponent_Template_a_click_13_listener() {
            return ctx.redirectToCompany();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "h6");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "email: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "h6");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "phone: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Kontaktujte ma");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "app-contact-form");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Makl\xE9rov\xE9 inzer\xE1ty");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](32, AgentDetailComponent_app_property_slider_32_Template, 1, 1, "app-property-slider", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](33, AgentDetailComponent_div_33_Template, 4, 0, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", ctx.agent == null ? null : ctx.agent.name, " ", ctx.agent == null ? null : ctx.agent.surname, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.agent == null ? null : ctx.agent.company);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.agent == null ? null : ctx.agent.email);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.agent == null ? null : ctx.agent.phone);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.show);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.show);
        }
      },
      directives: [_contact_form_contact_form_component__WEBPACK_IMPORTED_MODULE_4__["ContactFormComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _property_slider_property_slider_component__WEBPACK_IMPORTED_MODULE_6__["PropertySliderComponent"]],
      encapsulation: 2
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AgentDetailComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-agent-detail',
          templateUrl: './agent-detail.component.html',
          styles: []
        }]
      }], function () {
        return [{
          type: _services_property_service__WEBPACK_IMPORTED_MODULE_1__["PropertyService"]
        }, {
          type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _main_page_main_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./main-page/main-page.component */
    "./src/app/main-page/main-page.component.ts");
    /* harmony import */


    var _property_detail_property_detail_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./property-detail/property-detail.component */
    "./src/app/property-detail/property-detail.component.ts");
    /* harmony import */


    var _agent_detail_agent_detail_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./agent-detail/agent-detail.component */
    "./src/app/agent-detail/agent-detail.component.ts");
    /* harmony import */


    var _company_detail_company_detail_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./company-detail/company-detail.component */
    "./src/app/company-detail/company-detail.component.ts");
    /* harmony import */


    var _property_list_property_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./property-list/property-list.component */
    "./src/app/property-list/property-list.component.ts");
    /* harmony import */


    var _company_list_company_list_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./company-list/company-list.component */
    "./src/app/company-list/company-list.component.ts");

    var routes = [{
      path: '',
      component: _main_page_main_page_component__WEBPACK_IMPORTED_MODULE_2__["MainPageComponent"]
    }, {
      path: 'detail/:id',
      component: _property_detail_property_detail_component__WEBPACK_IMPORTED_MODULE_3__["PropertyDetailComponent"]
    }, {
      path: 'property-list',
      component: _property_list_property_list_component__WEBPACK_IMPORTED_MODULE_6__["PropertyListComponent"]
    }, {
      path: 'agent/:id/:name',
      component: _agent_detail_agent_detail_component__WEBPACK_IMPORTED_MODULE_4__["AgentDetailComponent"]
    }, {
      path: 'company/:id',
      component: _company_detail_company_detail_component__WEBPACK_IMPORTED_MODULE_5__["CompanyDetailComponent"]
    }, {
      path: 'company-list',
      component: _company_list_company_list_component__WEBPACK_IMPORTED_MODULE_7__["CompanyListComponent"]
    }, {
      path: '**',
      component: _main_page_main_page_component__WEBPACK_IMPORTED_MODULE_2__["MainPageComponent"],
      pathMatch: 'full'
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./navbar/navbar.component */
    "./src/app/navbar/navbar.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);

      this.title = 'broker-portal';
    };

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)();
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 2,
      vars: 0,
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-navbar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet");
        }
      },
      directives: [_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__["NavbarComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.scss']
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var ngx_slick_carousel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ngx-slick-carousel */
    "./node_modules/ngx-slick-carousel/__ivy_ngcc__/fesm2015/ngx-slick-carousel.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _main_page_main_page_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./main-page/main-page.component */
    "./src/app/main-page/main-page.component.ts");
    /* harmony import */


    var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./navbar/navbar.component */
    "./src/app/navbar/navbar.component.ts");
    /* harmony import */


    var _property_detail_property_detail_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./property-detail/property-detail.component */
    "./src/app/property-detail/property-detail.component.ts");
    /* harmony import */


    var _property_slider_property_slider_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./property-slider/property-slider.component */
    "./src/app/property-slider/property-slider.component.ts");
    /* harmony import */


    var _agent_detail_agent_detail_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./agent-detail/agent-detail.component */
    "./src/app/agent-detail/agent-detail.component.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _services_app_init_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./services/app-init.service */
    "./src/app/services/app-init.service.ts");
    /* harmony import */


    var _services_token_interceptor_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./services/token-interceptor.service */
    "./src/app/services/token-interceptor.service.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _company_detail_company_detail_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./company-detail/company-detail.component */
    "./src/app/company-detail/company-detail.component.ts");
    /* harmony import */


    var _contact_form_contact_form_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./contact-form/contact-form.component */
    "./src/app/contact-form/contact-form.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _interfaces_custom_route_reuse_strategy__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./interfaces/custom-route-reuse-strategy */
    "./src/app/interfaces/custom-route-reuse-strategy.ts");
    /* harmony import */


    var _property_list_property_list_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ./property-list/property-list.component */
    "./src/app/property-list/property-list.component.ts");
    /* harmony import */


    var _company_list_company_list_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ./company-list/company-list.component */
    "./src/app/company-list/company-list.component.ts"); // @ts-ignore


    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [_services_app_init_service__WEBPACK_IMPORTED_MODULE_11__["AppInitService"], {
        provide: _angular_core__WEBPACK_IMPORTED_MODULE_1__["APP_INITIALIZER"],
        useFactory: _services_app_init_service__WEBPACK_IMPORTED_MODULE_11__["initializeApp"],
        deps: [_services_app_init_service__WEBPACK_IMPORTED_MODULE_11__["AppInitService"]],
        multi: true
      }, {
        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HTTP_INTERCEPTORS"],
        useClass: _services_token_interceptor_service__WEBPACK_IMPORTED_MODULE_12__["TokenInterceptorService"],
        multi: true
      }, {
        provide: _angular_router__WEBPACK_IMPORTED_MODULE_16__["RouteReuseStrategy"],
        useClass: _interfaces_custom_route_reuse_strategy__WEBPACK_IMPORTED_MODULE_17__["CustomRouteReuseStrategy"]
      }],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], ngx_slick_carousel__WEBPACK_IMPORTED_MODULE_2__["SlickCarouselModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_13__["ReactiveFormsModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _main_page_main_page_component__WEBPACK_IMPORTED_MODULE_5__["MainPageComponent"], _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_6__["NavbarComponent"], _property_detail_property_detail_component__WEBPACK_IMPORTED_MODULE_7__["PropertyDetailComponent"], _property_slider_property_slider_component__WEBPACK_IMPORTED_MODULE_8__["PropertySliderComponent"], _agent_detail_agent_detail_component__WEBPACK_IMPORTED_MODULE_9__["AgentDetailComponent"], _company_detail_company_detail_component__WEBPACK_IMPORTED_MODULE_14__["CompanyDetailComponent"], _contact_form_contact_form_component__WEBPACK_IMPORTED_MODULE_15__["ContactFormComponent"], _property_list_property_list_component__WEBPACK_IMPORTED_MODULE_18__["PropertyListComponent"], _company_list_company_list_component__WEBPACK_IMPORTED_MODULE_19__["CompanyListComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], ngx_slick_carousel__WEBPACK_IMPORTED_MODULE_2__["SlickCarouselModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_13__["ReactiveFormsModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _main_page_main_page_component__WEBPACK_IMPORTED_MODULE_5__["MainPageComponent"], _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_6__["NavbarComponent"], _property_detail_property_detail_component__WEBPACK_IMPORTED_MODULE_7__["PropertyDetailComponent"], _property_slider_property_slider_component__WEBPACK_IMPORTED_MODULE_8__["PropertySliderComponent"], _agent_detail_agent_detail_component__WEBPACK_IMPORTED_MODULE_9__["AgentDetailComponent"], _company_detail_company_detail_component__WEBPACK_IMPORTED_MODULE_14__["CompanyDetailComponent"], _contact_form_contact_form_component__WEBPACK_IMPORTED_MODULE_15__["ContactFormComponent"], _property_list_property_list_component__WEBPACK_IMPORTED_MODULE_18__["PropertyListComponent"], _company_list_company_list_component__WEBPACK_IMPORTED_MODULE_19__["CompanyListComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], ngx_slick_carousel__WEBPACK_IMPORTED_MODULE_2__["SlickCarouselModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_13__["ReactiveFormsModule"]],
          providers: [_services_app_init_service__WEBPACK_IMPORTED_MODULE_11__["AppInitService"], {
            provide: _angular_core__WEBPACK_IMPORTED_MODULE_1__["APP_INITIALIZER"],
            useFactory: _services_app_init_service__WEBPACK_IMPORTED_MODULE_11__["initializeApp"],
            deps: [_services_app_init_service__WEBPACK_IMPORTED_MODULE_11__["AppInitService"]],
            multi: true
          }, {
            provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HTTP_INTERCEPTORS"],
            useClass: _services_token_interceptor_service__WEBPACK_IMPORTED_MODULE_12__["TokenInterceptorService"],
            multi: true
          }, {
            provide: _angular_router__WEBPACK_IMPORTED_MODULE_16__["RouteReuseStrategy"],
            useClass: _interfaces_custom_route_reuse_strategy__WEBPACK_IMPORTED_MODULE_17__["CustomRouteReuseStrategy"]
          }],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/company-detail/company-detail.component.ts":
  /*!************************************************************!*\
    !*** ./src/app/company-detail/company-detail.component.ts ***!
    \************************************************************/

  /*! exports provided: CompanyDetailComponent */

  /***/
  function srcAppCompanyDetailCompanyDetailComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CompanyDetailComponent", function () {
      return CompanyDetailComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var subsink__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! subsink */
    "./node_modules/subsink/dist/es2015/index.js");
    /* harmony import */


    var _services_property_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../services/property.service */
    "./src/app/services/property.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function CompanyDetailComponent_div_42_Template(rf, ctx) {
      if (rf & 1) {
        var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h3");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CompanyDetailComponent_div_42_Template_a_click_7_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);

          var realtor_r1 = ctx.$implicit;

          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r2.redirectAgent(realtor_r1.value.toString());
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h6");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "tel. \u010D\xEDslo: ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "h6");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "email: ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var realtor_r1 = ctx.$implicit;

        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.parseRealtor(realtor_r1.value.toString(), 0));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.parseRealtor(realtor_r1.value.toString(), 1));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.parseRealtor(realtor_r1.value.toString(), 2));
      }
    }

    var CompanyDetailComponent = /*#__PURE__*/function () {
      function CompanyDetailComponent(propertyService, route, router) {
        _classCallCheck(this, CompanyDetailComponent);

        this.propertyService = propertyService;
        this.route = route;
        this.router = router;
        this.sink = new subsink__WEBPACK_IMPORTED_MODULE_1__["SubSink"]();
        this.realtors = new Map();
      }

      _createClass(CompanyDetailComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this4 = this;

          this.sink.add(this.route.params.subscribe(function (params) {
            return _this4.taskId = params.id;
          }));
          this.loadData();
        }
      }, {
        key: "getAddress",
        value: function getAddress() {
          var _a, _b;

          return (_b = (_a = this.taskData) === null || _a === void 0 ? void 0 : _a.localisedTextFields.find(function (n) {
            return n.stringId === 'text_7';
          })) === null || _b === void 0 ? void 0 : _b.value;
        }
      }, {
        key: "getName",
        value: function getName() {
          var _a, _b;

          return (_b = (_a = this.taskData) === null || _a === void 0 ? void 0 : _a.localisedTextFields.find(function (n) {
            return n.stringId === 'text_6';
          })) === null || _b === void 0 ? void 0 : _b.value;
        }
      }, {
        key: "getDic",
        value: function getDic() {
          var _a, _b;

          return (_b = (_a = this.taskData) === null || _a === void 0 ? void 0 : _a.localisedTextFields.find(function (n) {
            return n.stringId === 'text_9';
          })) === null || _b === void 0 ? void 0 : _b.value;
        }
      }, {
        key: "getIco",
        value: function getIco() {
          var _a, _b;

          return (_b = (_a = this.taskData) === null || _a === void 0 ? void 0 : _a.localisedTextFields.find(function (n) {
            return n.stringId === 'text_8';
          })) === null || _b === void 0 ? void 0 : _b.value;
        }
      }, {
        key: "getCompanyOwner",
        value: function getCompanyOwner() {
          var _a, _b;

          return (_b = (_a = this.taskData) === null || _a === void 0 ? void 0 : _a.localisedTextFields.find(function (n) {
            return n.stringId === 'text_2';
          })) === null || _b === void 0 ? void 0 : _b.value;
        }
      }, {
        key: "getUrl",
        value: function getUrl() {
          var _a, _b;

          return (_b = (_a = this.taskData) === null || _a === void 0 ? void 0 : _a.localisedTextFields.find(function (n) {
            return n.stringId === 'text_10';
          })) === null || _b === void 0 ? void 0 : _b.value;
        }
      }, {
        key: "loadData",
        value: function loadData() {
          var _this5 = this;

          this.sink.add(this.propertyService.getData(this.taskId).subscribe(function (data) {
            if (data._embedded.dataGroups[0].fields._embedded.localisedEnumerationMapFields) {
              _this5.realtors = data._embedded.dataGroups[0].fields._embedded.localisedEnumerationMapFields[0].options;
            } else {
              _this5.realtors = data._embedded.dataGroups[1].fields._embedded.localisedEnumerationMapFields[0].options;
            }

            _this5.taskData = Object.assign({
              taskStringId: _this5.taskId
            }, _this5.propertyService.parseData(data));
          }));
        }
      }, {
        key: "parseRealtor",
        value: function parseRealtor(value, number) {
          var parsedValue = value.split(' ');

          switch (number) {
            case 0:
              return parsedValue[0] + " " + parsedValue[1];

            case 1:
              return parsedValue[2];

            case 2:
              return parsedValue[3];
          }
        }
      }, {
        key: "redirectAgent",
        value: function redirectAgent(s) {
          this.router.navigate(['/agent', this.taskId, this.parseRealtor(s, 0)]);
        }
      }]);

      return CompanyDetailComponent;
    }();

    CompanyDetailComponent.ɵfac = function CompanyDetailComponent_Factory(t) {
      return new (t || CompanyDetailComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_property_service__WEBPACK_IMPORTED_MODULE_2__["PropertyService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]));
    };

    CompanyDetailComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: CompanyDetailComponent,
      selectors: [["app-company-detail"]],
      decls: 44,
      vars: 9,
      consts: [["id", "detail-hero"], ["id", "company"], [1, "container"], [1, "row"], [1, "col-lg-12"], [1, "box"], [1, "row", "mt-4"], [1, "col-lg-8"], [1, "col-lg-4"], ["id", "agents", 1, "bg-light", "mt-5", "pb-5"], [1, "heading"], ["class", "col-lg-4 mb-3", 4, "ngFor", "ngForOf"], [1, "col-lg-4", "mb-3"], [1, "col-lg-3", "col-xs-3"], ["src", "https://source.unsplash.com/mW3I5zmyaUc/100x100", 1, "img-fluid", "rounded-circle"], [1, "col-lg-9", "col-xs-9"], [2, "cursor", "pointer", 3, "click"]],
      template: function CompanyDetailComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "header", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "section", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Popis");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " Na\u0161a RK bola zalo\u017Een\xE1 v roku 2003 a moment\xE1lne je jednotkou na realitnom trhu s vidieckymi a rekrea\u010Dn\xFDmi nehnute\u013Enos\u0165ami. Sme jedinou realitnou kancel\xE1riou na Slovensku, ktor\xE1 je odborn\xEDkom na chaty, chalupy, vidiecke a rekrea\u010Dn\xE9 nehnute\u013Enosti, ale aj ran\u010De, hospod\xE1rske usadlosti a pozemky. Zjednodu\u0161ene povedan\xE9 \u2013 ak h\u013Ead\xE1te nie\u010Do na b\xFDvanie na vidieku, rekre\xE1ciu alebo agroturistiku, ste u n\xE1s spr\xE1vne. Na\u0161i makl\xE9ri sa vyzna\u010Duj\xFA v\xFDbornou znalos\u0165ou regi\xF3nu v ktorom p\xF4sobia, nerob\xED im probl\xE9m pracova\u0165 cez v\xEDkendy a nav\u0161tevova\u0165 aj miesta kam vedie len po\u013En\xE1 cesta. S\xFA charakteristick\xED pr\xEDjemn\xFDm vystupovan\xEDm a radi sa rozpr\xE1vaj\xFA so v\u0161etk\xFDmi \u013Eudmi. Amb\xEDciou ROMANTICK\xDDCH CHAL\xDAP je pokry\u0165 kompletne cel\xE9 Slovensko naj\u0161ir\u0161ou ponukou predaja vidieckych domov, ch\xE1t a chal\xFAp. Samozrejmos\u0165ou je aj kompletn\xFD kvalitn\xFD servis - od zml\xFAv, pomoci pri vysporiadan\xED pr\xE1vnych vz\u0165ahov, cez hypot\xE9ky a poistky, energetick\xE9 certifik\xE1ty, a\u017E po \xFAspe\u0161n\xE9 dotiahnutie prevodov nehnute\u013Enost\xED. A hlavne - m\xE1me svoju pr\xE1cu radi a bav\xED n\xE1s. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "h6");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Adresa: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "h6");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "DI\u010C: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "h6");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "I\u010CO: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "h6");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "URL: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "a");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "h6");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Konate\u013E spolo\u010Dnosti: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "section", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Makl\xE9ri");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](42, CompanyDetailComponent_div_42_Template, 17, 3, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](43, "keyvalue");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.getName());

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.getAddress());

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.getDic());

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.getIco());

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.getUrl());

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.getCompanyOwner());

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](43, 7, ctx.realtors));
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["KeyValuePipe"]],
      encapsulation: 2
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CompanyDetailComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-company-detail',
          templateUrl: './company-detail.component.html'
        }]
      }], function () {
        return [{
          type: _services_property_service__WEBPACK_IMPORTED_MODULE_2__["PropertyService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/company-list/company-list.component.ts":
  /*!********************************************************!*\
    !*** ./src/app/company-list/company-list.component.ts ***!
    \********************************************************/

  /*! exports provided: CompanyListComponent */

  /***/
  function srcAppCompanyListCompanyListComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CompanyListComponent", function () {
      return CompanyListComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _services_property_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../services/property.service */
    "./src/app/services/property.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function CompanyListComponent_div_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Loading...");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function CompanyListComponent_div_7_Template(rf, ctx) {
      if (rf & 1) {
        var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CompanyListComponent_div_7_Template_div_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);

          var task_r2 = ctx.$implicit;

          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r3.redirect(task_r2.stringId);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h6");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "I\u010CO: ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h6");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "URL: ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "h6");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Konate\u013E spolo\u010Dnosti: ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var task_r2 = ctx.$implicit;

        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r1.getCompanyName(task_r2.stringId), " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.getIco(task_r2.stringId));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.getUrl(task_r2.stringId));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.getCompanyOwner(task_r2.stringId));
      }
    }

    var CompanyListComponent = /*#__PURE__*/function () {
      function CompanyListComponent(propertyService, router) {
        _classCallCheck(this, CompanyListComponent);

        this.propertyService = propertyService;
        this.router = router;
        this.taskData = [];
      }

      _createClass(CompanyListComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.loadData();
        }
      }, {
        key: "getCompanyName",
        value: function getCompanyName(stringId) {
          var _a, _b, _c;

          var company = (_a = this.taskData) === null || _a === void 0 ? void 0 : _a.find(function (p) {
            return p.stringId === stringId;
          });
          return (_c = (_b = company.localisedTextFields) === null || _b === void 0 ? void 0 : _b.find(function (n) {
            return n.stringId === 'text_6';
          })) === null || _c === void 0 ? void 0 : _c.value;
        }
      }, {
        key: "getIco",
        value: function getIco(stringId) {
          var _a, _b;

          var company = (_a = this.taskData) === null || _a === void 0 ? void 0 : _a.find(function (p) {
            return p.stringId === stringId;
          });
          return (_b = company === null || company === void 0 ? void 0 : company.localisedTextFields.find(function (n) {
            return n.stringId === 'text_8';
          })) === null || _b === void 0 ? void 0 : _b.value;
        }
      }, {
        key: "getUrl",
        value: function getUrl(stringId) {
          var _a, _b;

          var company = (_a = this.taskData) === null || _a === void 0 ? void 0 : _a.find(function (p) {
            return p.stringId === stringId;
          });
          return (_b = company === null || company === void 0 ? void 0 : company.localisedTextFields.find(function (n) {
            return n.stringId === 'text_10';
          })) === null || _b === void 0 ? void 0 : _b.value;
        }
      }, {
        key: "getCompanyOwner",
        value: function getCompanyOwner(stringId) {
          var _a, _b;

          var company = (_a = this.taskData) === null || _a === void 0 ? void 0 : _a.find(function (p) {
            return p.stringId === stringId;
          });
          return (_b = company === null || company === void 0 ? void 0 : company.localisedTextFields.find(function (n) {
            return n.stringId === 'text_2';
          })) === null || _b === void 0 ? void 0 : _b.value;
        }
      }, {
        key: "redirect",
        value: function redirect(stringId) {
          var _a;

          var company = (_a = this.taskData) === null || _a === void 0 ? void 0 : _a.find(function (p) {
            return p.stringId === stringId;
          });
          this.router.navigate(['/company', company.taskStringId]).then();
        }
      }, {
        key: "loadData",
        value: function loadData() {
          var _this6 = this;

          this.propertyService.getAll('(visualId:*CMP*)').subscribe(function (search) {
            var _a;

            var cases = (_a = search === null || search === void 0 ? void 0 : search._embedded) === null || _a === void 0 ? void 0 : _a.cases;

            var _iterator = _createForOfIteratorHelper(cases),
                _step;

            try {
              var _loop = function _loop() {
                var case1 = _step.value;

                _this6.propertyService.getTask(case1.stringId).subscribe(function (searchRequest) {
                  var _a, _b;

                  var tasks = (_a = searchRequest === null || searchRequest === void 0 ? void 0 : searchRequest._embedded) === null || _a === void 0 ? void 0 : _a.tasks;

                  _this6.propertyService.getData((_b = tasks[0]) === null || _b === void 0 ? void 0 : _b.stringId).subscribe(function (data) {
                    var _a;

                    var task = Object.assign({
                      title: case1.title,
                      stringId: case1.stringId,
                      taskStringId: (_a = tasks[0]) === null || _a === void 0 ? void 0 : _a.stringId
                    }, _this6.propertyService.parseData(data));

                    _this6.taskData.push(task);
                  });
                });
              };

              for (_iterator.s(); !(_step = _iterator.n()).done;) {
                _loop();
              }
            } catch (err) {
              _iterator.e(err);
            } finally {
              _iterator.f();
            }
          });
        }
      }]);

      return CompanyListComponent;
    }();

    CompanyListComponent.ɵfac = function CompanyListComponent_Factory(t) {
      return new (t || CompanyListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_property_service__WEBPACK_IMPORTED_MODULE_1__["PropertyService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]));
    };

    CompanyListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: CompanyListComponent,
      selectors: [["app-company-list"]],
      decls: 8,
      vars: 2,
      consts: [["id", "detail-hero"], [1, "container"], [1, "heading", "py-4"], ["style", "height: 10rem;", "class", "text-center mt-4", 4, "ngIf"], [1, "row"], ["class", "card col-lg-6 p-0", "style", "cursor: pointer;", 3, "click", 4, "ngFor", "ngForOf"], [1, "text-center", "mt-4", 2, "height", "10rem"], ["role", "status", 1, "spinner-border", 2, "width", "3rem", "height", "3rem"], [1, "sr-only"], [1, "card", "col-lg-6", "p-0", 2, "cursor", "pointer", 3, "click"], [1, "card-header"], [1, "card-body"]],
      template: function CompanyListComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "header", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "V\u0161etky spolo\u010Dnosti");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, CompanyListComponent_div_5_Template, 4, 0, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, CompanyListComponent_div_7_Template, 17, 4, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.taskData.length);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.taskData);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"]],
      encapsulation: 2
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CompanyListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-company-list',
          templateUrl: './company-list.component.html'
        }]
      }], function () {
        return [{
          type: _services_property_service__WEBPACK_IMPORTED_MODULE_1__["PropertyService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/contact-form/contact-form.component.ts":
  /*!********************************************************!*\
    !*** ./src/app/contact-form/contact-form.component.ts ***!
    \********************************************************/

  /*! exports provided: ContactFormComponent */

  /***/
  function srcAppContactFormContactFormComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ContactFormComponent", function () {
      return ContactFormComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function ContactFormComponent_div_13_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " *povinne ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function ContactFormComponent_div_13_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ContactFormComponent_div_13_div_1_Template, 2, 0, "div", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.form.controls["firstname"].errors.required);
      }
    }

    function ContactFormComponent_div_19_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " *povinne ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function ContactFormComponent_div_19_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ContactFormComponent_div_19_div_1_Template, 2, 0, "div", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.form.controls["surname"].errors.required);
      }
    }

    function ContactFormComponent_div_25_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " *povinne ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function ContactFormComponent_div_25_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ContactFormComponent_div_25_div_1_Template, 2, 0, "div", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.form.controls["email"].errors.required);
      }
    }

    function ContactFormComponent_div_31_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " *povinne ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function ContactFormComponent_div_31_div_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " *tel. \u010D. mus\xED obsahova\u0165 10 \u010D\xEDsel ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function ContactFormComponent_div_31_div_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " *tel. \u010D. mus\xED obsahova\u0165 10 \u010D\xEDsel ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function ContactFormComponent_div_31_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ContactFormComponent_div_31_div_1_Template, 2, 0, "div", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ContactFormComponent_div_31_div_2_Template, 2, 0, "div", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ContactFormComponent_div_31_div_3_Template, 2, 0, "div", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.form.controls["phone"].errors.required);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.form.get("phone").hasError("maxlength"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.form.get("phone").hasError("minlength"));
      }
    }

    function ContactFormComponent_div_37_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " *povinne ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function ContactFormComponent_div_37_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ContactFormComponent_div_37_div_1_Template, 2, 0, "div", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.form.controls["message"].errors.required);
      }
    }

    var ContactFormComponent = /*#__PURE__*/function () {
      function ContactFormComponent(formBuilder) {
        _classCallCheck(this, ContactFormComponent);

        this.formBuilder = formBuilder;
      }

      _createClass(ContactFormComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.form = this.formBuilder.group({
            firstname: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            surname: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            phone: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(10), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(10)]],
            message: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
          });
        }
      }, {
        key: "submit",
        value: function submit() {
          this.form.reset();
          var message = document.querySelector('#message-send');
          var alert = document.querySelector('#alert-send');

          if (!alert.classList.contains('show')) {
            alert.classList.add('show');
          }

          message.classList.remove('d-none');
          message.classList.add('d-block');
        }
      }, {
        key: "onClick",
        value: function onClick() {
          var message = document.querySelector('#message-send');
          var alert = document.querySelector('#alert-send');

          if (alert.classList.contains('show')) {
            alert.classList.remove('show');
          }

          message.classList.remove('d-block');
          message.classList.add('d-none');
        }
      }]);

      return ContactFormComponent;
    }();

    ContactFormComponent.ɵfac = function ContactFormComponent_Factory(t) {
      return new (t || ContactFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]));
    };

    ContactFormComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ContactFormComponent,
      selectors: [["app-contact-form"]],
      decls: 39,
      vars: 17,
      consts: [[3, "formGroup", "ngSubmit"], [1, "row"], ["id", "message-send", 1, "col-lg-12", "d-none"], ["role", "alert", "id", "alert-send", 1, "alert", "alert-success", "alert-dismissible", "fade", "show"], ["type", "button", "aria-label", "Close", 1, "close", 3, "click"], ["aria-hidden", "true"], [1, "col-lg-6"], [1, "form-group"], ["type", "text", "id", "firstname", "formControlName", "firstname", "placeholder", "Meno", 1, "form-control"], ["class", "alert", 4, "ngIf"], ["type", "text", "formControlName", "surname", "placeholder", "Priezvisko", 1, "form-control"], ["type", "email", "formControlName", "email", "placeholder", "Email", 1, "form-control"], ["type", "text", "formControlName", "phone", "placeholder", "Tel. \u010D\xEDslo", 1, "form-control"], ["formControlName", "message", "placeholder", "Spr\xE1va", 1, "form-control"], ["type", "submit", 1, "btn", "btn-primary", 3, "disabled"], [1, "alert"], ["class", "text-danger", 4, "ngIf"], [1, "text-danger"], [4, "ngIf"]],
      template: function ContactFormComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function ContactFormComponent_Template_form_ngSubmit_0_listener() {
            return ctx.submit();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Va\u0161a spr\xE1va bola odoslan\xE1 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ContactFormComponent_Template_button_click_5_listener() {
            return ctx.onClick();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "\xD7");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Meno");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "input", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, ContactFormComponent_div_13_Template, 2, 1, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Priezvisko");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "input", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, ContactFormComponent_div_19_Template, 2, 1, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Email");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "input", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, ContactFormComponent_div_25_Template, 2, 1, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Tel. \u010D\xEDslo");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "input", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](31, ContactFormComponent_div_31_Template, 4, 3, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Spr\xE1va");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "textarea", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, ">");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](37, ContactFormComponent_div_37_Template, 2, 1, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "input", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.form);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("is-invalid", ctx.form.controls["firstname"].invalid && (ctx.form.controls["firstname"].dirty || ctx.form.controls["firstname"].touched));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.form.controls["firstname"].invalid && (ctx.form.controls["firstname"].dirty || ctx.form.controls["firstname"].touched));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("is-invalid", ctx.form.controls["surname"].invalid && (ctx.form.controls["surname"].dirty || ctx.form.controls["surname"].touched));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.form.controls["surname"].invalid && (ctx.form.controls["surname"].dirty || ctx.form.controls["surname"].touched));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("is-invalid", ctx.form.controls["email"].invalid && (ctx.form.controls["email"].dirty || ctx.form.controls["email"].touched));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.form.controls["email"].invalid && (ctx.form.controls["email"].dirty || ctx.form.controls["email"].touched));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("is-invalid", ctx.form.controls["phone"].invalid && (ctx.form.controls["phone"].dirty || ctx.form.controls["phone"].touched));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.form.controls["phone"].invalid && (ctx.form.controls["phone"].dirty || ctx.form.controls["phone"].touched));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("is-invalid", ctx.form.controls["message"].invalid && (ctx.form.controls["message"].dirty || ctx.form.controls["message"].touched));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.form.controls["message"].invalid && (ctx.form.controls["message"].dirty || ctx.form.controls["message"].touched));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.form.invalid);
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]],
      encapsulation: 2
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContactFormComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-contact-form',
          templateUrl: './contact-form.component.html'
        }]
      }], function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/interfaces/custom-route-reuse-strategy.ts":
  /*!***********************************************************!*\
    !*** ./src/app/interfaces/custom-route-reuse-strategy.ts ***!
    \***********************************************************/

  /*! exports provided: CustomRouteReuseStrategy */

  /***/
  function srcAppInterfacesCustomRouteReuseStrategyTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CustomRouteReuseStrategy", function () {
      return CustomRouteReuseStrategy;
    });

    var CustomRouteReuseStrategy = /*#__PURE__*/function () {
      function CustomRouteReuseStrategy() {
        _classCallCheck(this, CustomRouteReuseStrategy);
      }

      _createClass(CustomRouteReuseStrategy, [{
        key: "shouldDetach",
        value: function shouldDetach(route) {
          return false;
        }
      }, {
        key: "store",
        value: function store(route, handle) {}
      }, {
        key: "shouldAttach",
        value: function shouldAttach(route) {
          return false;
        }
      }, {
        key: "retrieve",
        value: function retrieve(route) {
          return null;
        }
      }, {
        key: "shouldReuseRoute",
        value: function shouldReuseRoute(future, curr) {
          return false; // default is true if configuration of current and future route are the same
        }
      }]);

      return CustomRouteReuseStrategy;
    }();
    /***/

  },

  /***/
  "./src/app/interfaces/property.ts":
  /*!****************************************!*\
    !*** ./src/app/interfaces/property.ts ***!
    \****************************************/

  /*! exports provided: Property */

  /***/
  function srcAppInterfacesPropertyTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Property", function () {
      return Property;
    });

    var Property = /*#__PURE__*/function () {
      function Property() {
        _classCallCheck(this, Property);
      }

      _createClass(Property, [{
        key: "title",
        get: function get() {
          return this._title;
        },
        set: function set(value) {
          this._title = value;
        }
      }, {
        key: "address",
        get: function get() {
          return this._address;
        },
        set: function set(value) {
          this._address = value;
        }
      }, {
        key: "id",
        get: function get() {
          return this._id;
        },
        set: function set(value) {
          this._id = value;
        }
      }, {
        key: "image",
        get: function get() {
          return this._image;
        },
        set: function set(value) {
          this._image = value;
        }
      }, {
        key: "county",
        get: function get() {
          return this._county;
        },
        set: function set(value) {
          this._county = value;
        }
      }, {
        key: "region",
        get: function get() {
          return this._region;
        },
        set: function set(value) {
          this._region = value;
        }
      }, {
        key: "city",
        get: function get() {
          return this._city;
        },
        set: function set(value) {
          this._city = value;
        }
      }, {
        key: "transaction",
        get: function get() {
          return this._transaction;
        },
        set: function set(value) {
          this._transaction = value;
        }
      }, {
        key: "category",
        get: function get() {
          return this._category;
        },
        set: function set(value) {
          this._category = value;
        }
      }, {
        key: "subcategory",
        get: function get() {
          return this._subcategory;
        },
        set: function set(value) {
          this._subcategory = value;
        }
      }, {
        key: "price",
        get: function get() {
          return this._price;
        },
        set: function set(value) {
          this._price = value;
        }
      }]);

      return Property;
    }();
    /***/

  },

  /***/
  "./src/app/main-page/main-page.component.ts":
  /*!**************************************************!*\
    !*** ./src/app/main-page/main-page.component.ts ***!
    \**************************************************/

  /*! exports provided: MainPageComponent */

  /***/
  function srcAppMainPageMainPageComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MainPageComponent", function () {
      return MainPageComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _interfaces_property__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../interfaces/property */
    "./src/app/interfaces/property.ts");
    /* harmony import */


    var _services_search_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../services/search.service */
    "./src/app/services/search.service.ts");
    /* harmony import */


    var _services_property_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../services/property.service */
    "./src/app/services/property.service.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _property_slider_property_slider_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../property-slider/property-slider.component */
    "./src/app/property-slider/property-slider.component.ts");

    function MainPageComponent_option_17_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var county_r9 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", county_r9.stringId);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", county_r9.title, " ");
      }
    }

    function MainPageComponent_option_25_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var region_r10 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", region_r10.key);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", region_r10.value, " ");
      }
    }

    function MainPageComponent_option_34_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var city_r11 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", city_r11.key);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", city_r11.value, " ");
      }
    }

    function MainPageComponent_option_47_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var type_r12 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", type_r12.stringId);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", type_r12.title, " ");
      }
    }

    function MainPageComponent_option_55_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var cat_r13 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", cat_r13.stringId);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", cat_r13.title, " ");
      }
    }

    function MainPageComponent_option_63_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var sub_r14 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", sub_r14.key);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", sub_r14.value, " ");
      }
    }

    function MainPageComponent_section_78_div_8_img_6_Template(rf, ctx) {
      if (rf & 1) {
        var _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "img", 44);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MainPageComponent_section_78_div_8_img_6_Template_img_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21);

          var property_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          var ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r19.redirect(property_r16.id);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var property_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", property_r16.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
      }
    }

    function MainPageComponent_section_78_div_8_img_7_Template(rf, ctx) {
      if (rf & 1) {
        var _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "img", 45);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MainPageComponent_section_78_div_8_img_7_Template_img_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r25);

          var property_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          var ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r23.redirect(property_r16.id);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function MainPageComponent_section_78_div_8_Template(rf, ctx) {
      if (rf & 1) {
        var _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, MainPageComponent_section_78_div_8_img_6_Template, 1, 1, "img", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, MainPageComponent_section_78_div_8_img_7_Template, 1, 0, "img", 36);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 37);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 38);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "h6", 39);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 40);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "ul");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "hr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 38);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "i", 41);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 40);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "h6", 42);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "button", 43);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MainPageComponent_section_78_div_8_Template_button_click_26_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r27);

          var property_r16 = ctx.$implicit;

          var ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r26.redirect(property_r16.id);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Zobrazi\u0165");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var property_r16 = ctx.$implicit;

        var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("badge ", ctx_r15.getTransactionBadgeColor(property_r16.transaction), "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](property_r16.transaction);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", property_r16.image);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !property_r16.image);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](property_r16.title);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("", ctx_r15.getTypeBadgeColor(property_r16.category), " float-right");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](property_r16.category);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", property_r16.address, ", ", property_r16.city, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", property_r16.price, " \u20AC");
      }
    }

    function MainPageComponent_section_78_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "V\xFDsledky vyh\u013Ead\xE1vania");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, MainPageComponent_section_78_div_8_Template, 28, 14, "div", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Po\u010De\u0165 n\xE1jden\xFDch polo\u017Eiek: ", ctx_r6.filters.length, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r6.filters);
      }
    }

    function MainPageComponent_app_property_slider_84_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-property-slider", 46);
      }

      if (rf & 2) {
        var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("latestProperties", ctx_r7.latestProperties);
      }
    }

    function MainPageComponent_div_85_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 47);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 48);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 49);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Loading...");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var MainPageComponent = /*#__PURE__*/function () {
      function MainPageComponent(searchService, propertyService, formBuilder, sanitizer, router) {
        _classCallCheck(this, MainPageComponent);

        this.searchService = searchService;
        this.propertyService = propertyService;
        this.formBuilder = formBuilder;
        this.sanitizer = sanitizer;
        this.router = router;
        this.counties = [];
        this.regions = new Map();
        this.types = [];
        this.cities = new Map();
        this.categories = [];
        this.latestProperties = [];
        this.show = false;
        this.counter = 0;
        this.properties = [];
        this.search = false;
      }

      _createClass(MainPageComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.getCounties();
          this.getTypes();
          this.loadLatest();
          this.getCategories();
          this.loadData();
          this.form = this.formBuilder.group({
            county: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            region: '',
            city: '',
            transaction: '',
            category: '',
            subcategory: '',
            priceFrom: '',
            priceTo: ''
          });
        }
      }, {
        key: "getCounties",
        value: function getCounties() {
          var _this7 = this;

          this.searchService.getAllCounties().subscribe(function (request) {
            request._embedded.cases.forEach(function (value) {
              _this7.counties.push(value);
            });

            MainPageComponent.sort(_this7.counties);
          });
        }
      }, {
        key: "setRegions",
        value: function setRegions(event) {
          var _this8 = this;

          this.searchService.getTask(event.value).subscribe(function (request) {
            _this8.searchService.getData(request._embedded.tasks[1].stringId).subscribe(function (request) {
              _this8.regions = request._embedded.dataGroups[0].fields._embedded.localisedEnumerationMapFields[0].options;
            });
          });
        }
      }, {
        key: "setCities",
        value: function setCities(event) {
          var _this9 = this;

          this.searchService.getTask(event.value).subscribe(function (request) {
            _this9.searchService.getData(request._embedded.tasks[1].stringId).subscribe(function (request) {
              return _this9.cities = request._embedded.dataGroups[0].fields._embedded.localisedEnumerationMapFields[0].options;
            });
          });
        }
      }, {
        key: "setSubCategories",
        value: function setSubCategories(event) {
          var _this10 = this;

          this.searchService.getTask(event.value).subscribe(function (request) {
            _this10.searchService.getData(request._embedded.tasks[1].stringId).subscribe(function (request) {
              return _this10.subcategories = request._embedded.dataGroups[0].fields._embedded.localisedEnumerationMapFields[0].options;
            });
          });
        }
      }, {
        key: "getTypes",
        value: function getTypes() {
          var _this11 = this;

          this.searchService.getTypes().subscribe(function (request) {
            request._embedded.cases.forEach(function (value) {
              _this11.types.push(value);
            });
          });
          MainPageComponent.sort(this.types);
        }
      }, {
        key: "getCategories",
        value: function getCategories() {
          var _this12 = this;

          this.searchService.getCategories().subscribe(function (request) {
            request._embedded.cases.forEach(function (value) {
              _this12.categories.push(value);
            });

            MainPageComponent.sort(_this12.categories);
          });
        }
      }, {
        key: "getTransactionType",
        value: function getTransactionType(stringId) {
          var property = this.latestProperties.find(function (p) {
            return p.stringId === stringId;
          });
          return property.localisedEnumerationMapFields.find(function (n) {
            return n.stringId === 'enumeration_0';
          }).value;
        }
      }, {
        key: "getTransactionBadgeColor",
        value: function getTransactionBadgeColor(stringId) {
          switch (stringId) {
            case 'Predaj':
              return 'bg-success';

            case 'Kúpa':
              return 'bg-danger';

            default:
              return 'bg-info';
          }
        }
      }, {
        key: "getTypeBadgeColor",
        value: function getTypeBadgeColor(stringId) {
          switch (stringId) {
            case 'Domy':
              return 'house';

            case 'Chaty':
              return 'cabin';

            default:
              return 'flat';
          }
        }
      }, {
        key: "redirect",
        value: function redirect(stringId) {
          this.router.navigate(["/detail", stringId]).then();
        }
      }, {
        key: "loadData",
        value: function loadData() {
          var _this13 = this;

          this.searchService.search('(visualId:*crt*)').subscribe(function (search) {
            search._embedded.cases.forEach(function (value) {
              _this13.propertyService.getTask(value.stringId).subscribe(function (searchRequest) {
                var tasks = searchRequest._embedded.tasks;

                _this13.propertyService.getData(tasks[0].stringId).subscribe(function (data) {
                  var property = new _interfaces_property__WEBPACK_IMPORTED_MODULE_2__["Property"]();
                  var transactions = data._embedded.dataGroups[4].fields._embedded.localisedEnumerationMapFields[0].options;
                  var trans = data._embedded.dataGroups[4].fields._embedded.localisedEnumerationMapFields[0].value;
                  var categories = data._embedded.dataGroups[4].fields._embedded.localisedEnumerationMapFields[1].options;
                  var cat = data._embedded.dataGroups[4].fields._embedded.localisedEnumerationMapFields[1].value;
                  var counties = data._embedded.dataGroups[4].fields._embedded.localisedEnumerationMapFields[2].options;
                  var county = data._embedded.dataGroups[4].fields._embedded.localisedEnumerationMapFields[2].value;
                  var regions = data._embedded.dataGroups[4].fields._embedded.localisedEnumerationMapFields[3].options;
                  var region = data._embedded.dataGroups[4].fields._embedded.localisedEnumerationMapFields[3].value;
                  var cities = data._embedded.dataGroups[4].fields._embedded.localisedEnumerationMapFields[4].options;
                  var city = data._embedded.dataGroups[4].fields._embedded.localisedEnumerationMapFields[4].value;
                  var subcategories = data._embedded.dataGroups[4].fields._embedded.localisedEnumerationMapFields[5].options;
                  var sub = data._embedded.dataGroups[4].fields._embedded.localisedEnumerationMapFields[5].value;
                  var price = data._embedded.dataGroups[4].fields._embedded.localisedNumberFields[0].value;
                  property.id = value.stringId;
                  property.title = value.title;
                  property.address = data._embedded.dataGroups[4].fields._embedded.localisedTextFields[1].value;
                  property.transaction = transactions[trans];
                  property.category = categories[cat];
                  property.county = counties[county];
                  property.region = regions[region];
                  property.city = cities[city];
                  property.county = counties[county];
                  property.subcategory = subcategories[sub];
                  property.price = Number(price);

                  _this13.propertyService.getImage(tasks[0].stringId).subscribe(function (image) {
                    var objectURL = URL.createObjectURL(image);
                    property.image = _this13.sanitizer.bypassSecurityTrustUrl(objectURL);

                    _this13.properties.push(property);
                  });
                });
              });
            });

            _this13.show = true;
          });
        }
      }, {
        key: "loadLatest",
        value: function loadLatest() {
          var _this14 = this;

          this.propertyService.getSuggested('(visualId:*crt*)').subscribe(function (search) {
            var cases = search._embedded.cases;

            var _iterator2 = _createForOfIteratorHelper(cases),
                _step2;

            try {
              var _loop2 = function _loop2() {
                var case1 = _step2.value;

                _this14.propertyService.getTask(case1.stringId).subscribe(function (searchRequest) {
                  var tasks = searchRequest._embedded.tasks;

                  _this14.propertyService.getData(tasks[0].stringId).subscribe(function (data) {
                    var task = Object.assign({
                      title: case1.title,
                      stringId: case1.stringId,
                      taskStringId: tasks[0].stringId
                    }, _this14.propertyService.parseData(data));

                    _this14.propertyService.getImage(tasks[0].stringId).subscribe(function (image) {
                      var objectURL = URL.createObjectURL(image);
                      task.image = _this14.sanitizer.bypassSecurityTrustUrl(objectURL);
                      _this14.counter = _this14.counter + 1;

                      if (_this14.counter == cases.length) {
                        _this14.show = true;
                      }

                      _this14.latestProperties.push(task);
                    });
                  });
                });
              };

              for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                _loop2();
              }
            } catch (err) {
              _iterator2.e(err);
            } finally {
              _iterator2.f();
            }
          });
        }
      }, {
        key: "onSubmit",
        value: function onSubmit() {
          var data = this.form.getRawValue();
          this.filters = this.properties;
          this.filter(data);
        }
      }, {
        key: "filter",
        value: function filter(data) {
          if (data.priceFrom != '') {
            var from = Number(data.priceFrom);
            this.filters = this.filters.filter(function (c) {
              return c.price >= from;
            });
          }

          if (data.priceTo != '') {
            var to = Number(data.priceTo);
            this.filters = this.filters.filter(function (c) {
              return c.price <= to;
            });
          }

          if (data.county != '') {
            var county = this.counties.find(function (c) {
              return c.stringId === data.county;
            }).title;
            this.filters = this.filters.filter(function (c) {
              return c._county === county;
            });
          }

          if (data.region != '') {
            var region = this.regions[data.region];
            this.filters = this.filters.filter(function (c) {
              return c.region === region;
            });
          }

          if (data.city != '') {
            var city = this.cities[data.city];
            this.filters = this.filters.filter(function (c) {
              return c.city === city;
            });
          }

          if (data.category != '') {
            var category = this.categories.find(function (c) {
              return c.stringId === data.category;
            }).title;
            this.filters = this.filters.filter(function (c) {
              return c.category === category;
            });
          }

          if (data.subcategory != '') {
            var subcategory = this.subcategories[data.subcategory];
            this.filters = this.filters.filter(function (c) {
              return c.subcategory === subcategory;
            });
          }

          this.search = true;
          console.log(this.filters);
        }
      }, {
        key: "translate",
        value: function translate() {
          var inz = document.querySelector('#inz');

          if (inz.classList.contains('move')) {
            inz.classList.remove('move');
          } else {
            inz.classList.add('move');
          }
        }
      }], [{
        key: "sort",
        value: function sort(list) {
          list.sort(function (a, b) {
            return a.title.localeCompare(b.title);
          });
        }
      }]);

      return MainPageComponent;
    }();

    MainPageComponent.ɵfac = function MainPageComponent_Factory(t) {
      return new (t || MainPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_search_service__WEBPACK_IMPORTED_MODULE_3__["SearchService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_property_service__WEBPACK_IMPORTED_MODULE_4__["PropertyService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["DomSanitizer"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]));
    };

    MainPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: MainPageComponent,
      selectors: [["app-main-page"]],
      decls: 86,
      vars: 16,
      consts: [["id", "hero"], ["id", "search"], [1, "container"], [1, "row"], [1, "col-lg-8", "col-md-12"], [1, "mt-5", "search-form"], [1, "mt-4", 3, "formGroup", "ngSubmit"], [1, "col-lg-4", "col-md-12"], [1, "form-group", "mb-2"], ["formControlName", "county", 1, "form-control", "mt-2", 3, "change"], ["value", "", "selected", "", "disabled", "", "hidden", ""], [3, "value", 4, "ngFor", "ngForOf"], [1, "col-lg-4"], ["formControlName", "region", 1, "form-control", "mt-2", 3, "change"], ["formControlName", "city", 1, "form-control", "mt-2"], ["type", "button", "data-toggle", "collapse", "data-target", "#filters", "aria-controls", "filters", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "btn", "btn-link", 3, "click"], ["id", "filters", 1, "collapse"], [1, "col-lg-6"], ["formControlName", "transaction", 1, "form-control", "mt-2"], ["formControlName", "category", 1, "form-control", "mt-2", 3, "change"], ["formControlName", "subcategory", 1, "form-control", "mt-2"], ["type", "number", "min", "0", "formControlName", "priceFrom", "placeholder", "Cena od", 1, "form-control", "mt-2"], ["type", "number", "min", "0", "formControlName", "priceTo", "placeholder", "Cena do", 1, "form-control", "mt-2"], ["type", "submit", 1, "btn", "btn-primary", "form-control"], [1, "fas", "fa-search", "ml-2"], [4, "ngIf"], ["id", "inz", 1, "inzeraty"], [1, "heading"], [3, "latestProperties", 4, "ngIf"], ["style", "height: 10rem;", "class", "text-center mt-4", 4, "ngIf"], [3, "value"], ["class", "col-lg-4 mb-3", 4, "ngFor", "ngForOf"], [1, "col-lg-4", "mb-3"], [1, "card"], [1, "hover-zoom"], ["width", "100%", "height", "200", "style", "cursor: pointer", 3, "src", "click", 4, "ngIf"], ["src", "http://placehold.it/350x150/000000", "width", "100%", "height", "200", "style", "cursor: pointer", 3, "click", 4, "ngIf"], [1, "card-body", "p-3"], [1, "col-lg-7"], [1, "font-weight-bold", "mt-1"], [1, "col-lg-5"], [1, "fas", "fa-map-marker-alt"], [1, "font-weight-bold", "text-primary", "float-right"], [1, "btn", "btn-primary", "cursor-pointer", "form-control", 3, "click"], ["width", "100%", "height", "200", 2, "cursor", "pointer", 3, "src", "click"], ["src", "http://placehold.it/350x150/000000", "width", "100%", "height", "200", 2, "cursor", "pointer", 3, "click"], [3, "latestProperties"], [1, "text-center", "mt-4", 2, "height", "10rem"], ["role", "status", 1, "spinner-border", 2, "width", "3rem", "height", "3rem"], [1, "sr-only"]],
      template: function MainPageComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "header", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "section", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Vyh\u013Ead\xE1vanie");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "form", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function MainPageComponent_Template_form_ngSubmit_8_listener() {
            return ctx.onSubmit();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Kraj");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "select", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function MainPageComponent_Template_select_change_14_listener($event) {
            return ctx.setRegions($event.target);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "option", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Kraj");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, MainPageComponent_option_17_Template, 2, 2, "option", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Okres");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "select", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function MainPageComponent_Template_select_change_22_listener($event) {
            return ctx.setCities($event.target);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "option", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Okres");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, MainPageComponent_option_25_Template, 2, 2, "option", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](26, "keyvalue");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Obec");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "select", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "option", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Obec");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](34, MainPageComponent_option_34_Template, 2, 2, "option", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](35, "keyvalue");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "button", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MainPageComponent_Template_button_click_36_listener() {
            return ctx.translate();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, " Zobrazi\u0165 ostatn\xE9 filtre ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Typ transakcie");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "select", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "option", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Typ transakcie");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](47, MainPageComponent_option_47_Template, 2, 2, "option", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "Kateg\xF3ria");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "select", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function MainPageComponent_Template_select_change_52_listener($event) {
            return ctx.setSubCategories($event.target);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "option", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "Kateg\xF3ria");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](55, MainPageComponent_option_55_Template, 2, 2, "option", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "Podkateg\xF3rie");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "select", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "option", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "Podkateg\xF3ria");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](63, MainPageComponent_option_63_Template, 2, 2, "option", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](64, "keyvalue");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "Cena od");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](69, "input", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, "Cena do");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](74, "input", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "button", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, "Vyh\u013Eada\u0165 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](77, "i", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](78, MainPageComponent_section_78_Template, 9, 2, "section", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "main", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, "Posledn\xE9 pridan\xE9 inzer\xE1ty");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](84, MainPageComponent_app_property_slider_84_Template, 1, 1, "app-property-slider", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](85, MainPageComponent_div_85_Template, 4, 0, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.form);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.counties);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](26, 10, ctx.regions));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](35, 12, ctx.cities));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.types);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.categories);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](64, 14, ctx.subcategories));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.search);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.show);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.show);
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_x"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _property_slider_property_slider_component__WEBPACK_IMPORTED_MODULE_8__["PropertySliderComponent"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["KeyValuePipe"]],
      encapsulation: 2
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MainPageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-main-page',
          templateUrl: './main-page.component.html'
        }]
      }], function () {
        return [{
          type: _services_search_service__WEBPACK_IMPORTED_MODULE_3__["SearchService"]
        }, {
          type: _services_property_service__WEBPACK_IMPORTED_MODULE_4__["PropertyService"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
        }, {
          type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["DomSanitizer"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/navbar/navbar.component.ts":
  /*!********************************************!*\
    !*** ./src/app/navbar/navbar.component.ts ***!
    \********************************************/

  /*! exports provided: NavbarComponent */

  /***/
  function srcAppNavbarNavbarComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NavbarComponent", function () {
      return NavbarComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var NavbarComponent = /*#__PURE__*/function () {
      function NavbarComponent() {
        _classCallCheck(this, NavbarComponent);

        this.logo = 'assets/images/logo.png';
      }

      _createClass(NavbarComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "onWindowScroll",
        value: function onWindowScroll($event) {
          var element = document.querySelector('#navbar');

          if (window.pageYOffset > element.clientHeight) {
            element.classList.add('sticky');
            this.logo = 'assets/images/logo-blue.png';
          } else {
            element.classList.remove('sticky');
            this.logo = 'assets/images/logo.png';
          }
        }
      }]);

      return NavbarComponent;
    }();

    NavbarComponent.ɵfac = function NavbarComponent_Factory(t) {
      return new (t || NavbarComponent)();
    };

    NavbarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: NavbarComponent,
      selectors: [["app-navbar"]],
      hostBindings: function NavbarComponent_HostBindings(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("scroll", function NavbarComponent_scroll_HostBindingHandler($event) {
            return ctx.onWindowScroll($event);
          }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"]);
        }
      },
      decls: 18,
      vars: 3,
      consts: [["id", "navbar", 1, "navbar", "navbar-expand-lg", "fixed-top", 3, "scroll"], [1, "container-fluid"], ["routerLink", "/", 1, "navbar-brand"], [3, "src"], ["type", "button", "data-toggle", "collapse", "data-target", "#navbarSupportedContent", "aria-controls", "navbarSupportedContent", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler"], [1, "hamburger"], [1, "navbar-toggler-inner"], ["id", "navbarSupportedContent", 1, "collapse", "navbar-collapse"], [1, "navbar-nav", "ml-auto", "mb-2", "mb-lg-0"], [1, "nav-item"], [1, "nav-link", 3, "href"], ["href", "https://engine.interes.group/login", 1, "nav-link"]],
      template: function NavbarComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("scroll", function NavbarComponent_Template_nav_scroll_0_listener($event) {
            return ctx.onWindowScroll($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "ul", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "V\u0161etky inzer\xE1ty");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "li", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "V\u0161etky spolo\u010Dnosti");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "li", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Prihl\xE1senie");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.logo, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", "/property-list", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", "/company-list", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]],
      encapsulation: 2
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavbarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-navbar',
          templateUrl: './navbar.component.html'
        }]
      }], function () {
        return [];
      }, {
        onWindowScroll: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
          args: ['window:scroll', ['$event']]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/property-detail/property-detail.component.ts":
  /*!**************************************************************!*\
    !*** ./src/app/property-detail/property-detail.component.ts ***!
    \**************************************************************/

  /*! exports provided: PropertyDetailComponent */

  /***/
  function srcAppPropertyDetailPropertyDetailComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PropertyDetailComponent", function () {
      return PropertyDetailComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var subsink__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! subsink */
    "./node_modules/subsink/dist/es2015/index.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _services_property_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../services/property.service */
    "./src/app/services/property.service.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _property_slider_property_slider_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../property-slider/property-slider.component */
    "./src/app/property-slider/property-slider.component.ts");

    function PropertyDetailComponent_div_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Loading...");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function PropertyDetailComponent_div_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "img", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "img", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "img", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "span", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Previous");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "span", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "span", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Next");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r1.images[0], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r1.images[1], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r1.images[2], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r1.images[3], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r1.images[4], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
      }
    }

    function PropertyDetailComponent_app_property_slider_67_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-property-slider", 31);
      }

      if (rf & 2) {
        var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("latestProperties", ctx_r2.latestProperties);
      }
    }

    function PropertyDetailComponent_div_68_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Loading...");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var PropertyDetailComponent = /*#__PURE__*/function () {
      function PropertyDetailComponent(formBuilder, route, propertyService, sanitizer, router) {
        _classCallCheck(this, PropertyDetailComponent);

        this.formBuilder = formBuilder;
        this.route = route;
        this.propertyService = propertyService;
        this.sanitizer = sanitizer;
        this.router = router;
        this.namesPath = [];
        this.images = [];
        this.latestProperties = [];
        this.show = false;
        this.counterTask = 0;
        this.sink = new subsink__WEBPACK_IMPORTED_MODULE_1__["SubSink"]();
        this.numbers = [];
      }

      _createClass(PropertyDetailComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this15 = this;

          window.scroll({
            top: 0
          });
          this.sink.add(this.route.params.subscribe(function (params) {
            _this15.caseId = params.id;
          }));
          this.loadData();
          this.loadSuggested();
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.sink.unsubscribe();
        }
      }, {
        key: "getPrice",
        value: function getPrice() {
          var _a, _b;

          return (_b = (_a = this.taskData) === null || _a === void 0 ? void 0 : _a.localisedNumberFields.find(function (n) {
            return n.stringId === 'text_0';
          })) === null || _b === void 0 ? void 0 : _b.value;
        }
      }, {
        key: "getFloorArea",
        value: function getFloorArea() {
          var _a, _b;

          return (_b = (_a = this.taskData) === null || _a === void 0 ? void 0 : _a.localisedNumberFields.find(function (n) {
            return n.stringId === 'text_1';
          })) === null || _b === void 0 ? void 0 : _b.value;
        }
      }, {
        key: "getEmail",
        value: function getEmail() {
          var _a, _b;

          return (_b = (_a = this.taskData) === null || _a === void 0 ? void 0 : _a.localisedTextFields.find(function (n) {
            return n.stringId === 'text_13';
          })) === null || _b === void 0 ? void 0 : _b.value;
        }
      }, {
        key: "getSeller",
        value: function getSeller() {
          var _a, _b;

          return (_b = (_a = this.taskData) === null || _a === void 0 ? void 0 : _a.localisedTextFields.find(function (n) {
            return n.stringId === 'text_8';
          })) === null || _b === void 0 ? void 0 : _b.value;
        }
      }, {
        key: "getAddress",
        value: function getAddress() {
          var _a, _b;

          return (_b = (_a = this.taskData) === null || _a === void 0 ? void 0 : _a.localisedTextFields.find(function (n) {
            return n.stringId === 'text_6';
          })) === null || _b === void 0 ? void 0 : _b.value;
        }
      }, {
        key: "getDescription",
        value: function getDescription() {
          var _a, _b;

          return (_b = (_a = this.taskData) === null || _a === void 0 ? void 0 : _a.localisedTextFields.find(function (n) {
            return n.stringId === 'text_2';
          })) === null || _b === void 0 ? void 0 : _b.value;
        }
      }, {
        key: "getTransactionType",
        value: function getTransactionType() {
          var _a, _b;

          return (_b = (_a = this.taskData) === null || _a === void 0 ? void 0 : _a.localisedEnumerationMapFields.find(function (n) {
            return n.stringId === 'enumeration_0';
          })) === null || _b === void 0 ? void 0 : _b.value;
        }
      }, {
        key: "getCategory",
        value: function getCategory() {
          var _a, _b;

          return (_b = (_a = this.taskData) === null || _a === void 0 ? void 0 : _a.localisedEnumerationMapFields.find(function (n) {
            return n.stringId === 'text_7';
          })) === null || _b === void 0 ? void 0 : _b.value;
        }
      }, {
        key: "getKraj",
        value: function getKraj() {
          var _a, _b;

          return (_b = (_a = this.taskData) === null || _a === void 0 ? void 0 : _a.localisedEnumerationMapFields.find(function (n) {
            return n.stringId === 'text_3';
          })) === null || _b === void 0 ? void 0 : _b.value;
        }
      }, {
        key: "getOkres",
        value: function getOkres() {
          var _a, _b;

          return (_b = (_a = this.taskData) === null || _a === void 0 ? void 0 : _a.localisedEnumerationMapFields.find(function (n) {
            return n.stringId === 'text_4';
          })) === null || _b === void 0 ? void 0 : _b.value;
        }
      }, {
        key: "getObec",
        value: function getObec() {
          var _a, _b;

          return (_b = (_a = this.taskData) === null || _a === void 0 ? void 0 : _a.localisedEnumerationMapFields.find(function (n) {
            return n.stringId === 'text_5';
          })) === null || _b === void 0 ? void 0 : _b.value;
        }
      }, {
        key: "getSubCategory",
        value: function getSubCategory() {
          var _a, _b;

          return (_b = (_a = this.taskData) === null || _a === void 0 ? void 0 : _a.localisedEnumerationMapFields.find(function (n) {
            return n.stringId === 'text_14';
          })) === null || _b === void 0 ? void 0 : _b.value;
        }
      }, {
        key: "getCompanyName",
        value: function getCompanyName() {
          var _a, _b, _c;

          return ((_c = (_b = (_a = this.taskData) === null || _a === void 0 ? void 0 : _a.localisedTextFields) === null || _b === void 0 ? void 0 : _b.find(function (n) {
            return n.stringId.includes('-text_6');
          })) === null || _c === void 0 ? void 0 : _c.value) || '';
        }
      }, {
        key: "getCompanyAddress",
        value: function getCompanyAddress() {
          var _a, _b, _c;

          return ((_c = (_b = (_a = this.taskData) === null || _a === void 0 ? void 0 : _a.localisedTextFields) === null || _b === void 0 ? void 0 : _b.find(function (n) {
            return n.stringId.includes('-text_7');
          })) === null || _c === void 0 ? void 0 : _c.value) || '';
        }
      }, {
        key: "getCompanyId",
        value: function getCompanyId() {
          var _a, _b;

          return (_b = (_a = this.taskData) === null || _a === void 0 ? void 0 : _a.localisedTextFields) === null || _b === void 0 ? void 0 : _b.find(function (n) {
            return n.stringId.includes('-text_7');
          });
        }
      }, {
        key: "redirectToCompany",
        value: function redirectToCompany() {
          var _a, _b;

          var taskId = (_b = (_a = this.taskData) === null || _a === void 0 ? void 0 : _a.localisedTextFields) === null || _b === void 0 ? void 0 : _b.find(function (n) {
            return n.stringId.includes('-text_7');
          });
          this.router.navigate(['/company', taskId.stringId.substring(0, taskId.stringId.indexOf('-'))]).then();
        }
      }, {
        key: "loadData",
        value: function loadData() {
          var _this16 = this;

          this.propertyService.getTask(this.caseId).subscribe(function (searchRequest) {
            var tasks = searchRequest._embedded.tasks;
            _this16.taskId = tasks[0].stringId;

            _this16.propertyService.getData(_this16.taskId).subscribe(function (data) {
              var _this16$namesPath;

              (_this16$namesPath = _this16.namesPath).push.apply(_this16$namesPath, _toConsumableArray(data._embedded.dataGroups[0].fields._embedded.localisedFileListFields[0].value.namesPaths));

              _this16.taskData = Object.assign({
                stringId: _this16.caseId,
                taskStringId: _this16.taskId
              }, _this16.propertyService.parseData(data));

              _this16.loadImage();

              _this16.loadImageList();
            });
          });
        }
      }, {
        key: "loadImage",
        value: function loadImage() {
          var _this17 = this;

          this.propertyService.getImage(this.taskId).subscribe(function (data) {
            var objectURL = URL.createObjectURL(data);

            _this17.images.push(_this17.sanitizer.bypassSecurityTrustUrl(objectURL));

            _this17.numbers.push(0);
          });
        }
      }, {
        key: "loadSuggested",
        value: function loadSuggested() {
          var _this18 = this;

          this.propertyService.getSuggested('(visualId:*crt*)').subscribe(function (search) {
            var cases = search._embedded.cases;

            var _iterator3 = _createForOfIteratorHelper(cases),
                _step3;

            try {
              var _loop3 = function _loop3() {
                var case1 = _step3.value;

                _this18.propertyService.getTask(case1.stringId).subscribe(function (searchRequest) {
                  var tasks = searchRequest._embedded.tasks;

                  _this18.propertyService.getData(tasks[0].stringId).subscribe(function (data) {
                    var task = Object.assign({
                      title: case1.title,
                      stringId: case1.stringId,
                      taskStringId: tasks[0].stringId
                    }, _this18.propertyService.parseData(data));

                    _this18.propertyService.getImage(tasks[0].stringId).subscribe(function (image) {
                      var objectURL = URL.createObjectURL(image);
                      task.image = _this18.sanitizer.bypassSecurityTrustUrl(objectURL);
                      _this18.counterTask = _this18.counterTask + 1;

                      if (_this18.counterTask == cases.length) {
                        _this18.show = true;
                      }

                      _this18.latestProperties.push(task);
                    });
                  });
                });
              };

              for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
                _loop3();
              }
            } catch (err) {
              _iterator3.e(err);
            } finally {
              _iterator3.f();
            }
          });
        }
      }, {
        key: "loadImageList",
        value: function loadImageList() {
          var _this19 = this;

          if (!this.namesPath) {
            return;
          }

          var counter = 1;
          this.namesPath.forEach(function (value) {
            _this19.propertyService.getImageList(_this19.taskId, value.name).subscribe(function (data) {
              var objectURL = URL.createObjectURL(data);

              _this19.images.push(_this19.sanitizer.bypassSecurityTrustUrl(objectURL));

              _this19.numbers.push(counter);

              counter += 1;
            });
          });
        }
      }, {
        key: "redirectToAgent",
        value: function redirectToAgent() {
          var _a, _b;

          var taskId = (_b = (_a = this.taskData) === null || _a === void 0 ? void 0 : _a.localisedTextFields) === null || _b === void 0 ? void 0 : _b.find(function (n) {
            return n.stringId.includes('-text_7');
          });
          this.router.navigate(['/agent', taskId.stringId.substring(0, taskId.stringId.indexOf('-')), this.getSeller()]).then();
        }
      }]);

      return PropertyDetailComponent;
    }();

    PropertyDetailComponent.ɵfac = function PropertyDetailComponent_Factory(t) {
      return new (t || PropertyDetailComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_property_service__WEBPACK_IMPORTED_MODULE_4__["PropertyService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["DomSanitizer"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]));
    };

    PropertyDetailComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: PropertyDetailComponent,
      selectors: [["app-property-detail"]],
      decls: 69,
      vars: 15,
      consts: [["id", "detail-hero"], ["id", "gallery"], [1, "container"], ["style", "height: 10rem;", "class", "text-center mt-4", 4, "ngIf"], [1, "row"], ["class", "d-flex justify-content-center flex-column col-lg-12", 4, "ngIf"], [1, "bg-light", "pb-5"], [1, "col-lg-8"], [1, "box"], [1, "font-weight-bold"], [1, "fas", "fa-map-marker-alt"], [1, "col-lg-4"], [1, "info", "mt-3"], [1, "mt-3"], [2, "cursor", "pointer", 3, "click"], [1, "inzeraty"], [1, "heading"], [3, "latestProperties", 4, "ngIf"], [1, "text-center", "mt-4", 2, "height", "10rem"], ["role", "status", 1, "spinner-border", 2, "width", "3rem", "height", "3rem"], [1, "sr-only"], [1, "d-flex", "justify-content-center", "flex-column", "col-lg-12"], ["id", "carouselExampleControls", "data-ride", "carousel", 1, "carousel", "slide"], [1, "carousel-inner"], [1, "carousel-item", "active"], ["alt", "...", 1, "d-block", "w-100", 3, "src"], [1, "carousel-item"], ["href", "#carouselExampleControls", "role", "button", "data-slide", "prev", 1, "carousel-control-prev"], ["aria-hidden", "true", 1, "carousel-control-prev-icon"], ["href", "#carouselExampleControls", "role", "button", "data-slide", "next", 1, "carousel-control-next"], ["aria-hidden", "true", 1, "carousel-control-next-icon"], [3, "latestProperties"]],
      template: function PropertyDetailComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "header", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "section", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, PropertyDetailComponent_div_3_Template, 4, 0, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, PropertyDetailComponent_div_5_Template, 21, 5, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "section", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "h1", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "i", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "h1", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "h6");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Typ: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "h6");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Rozloha: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "h6");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Cena za m2: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "1500,16 \u20AC");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "h6");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Kateg\xF3ria: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "h4", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Popis");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "p", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "h2", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PropertyDetailComponent_Template_h2_click_49_listener() {
            return ctx.redirectToCompany();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "h6");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "a", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PropertyDetailComponent_Template_a_click_52_listener() {
            return ctx.redirectToAgent();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "h6");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "tel. \u010D\xEDslo: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "0918 566 576");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "h6");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "email: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "main", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "Posledn\xE9 pridan\xE9 inzer\xE1ty");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](67, PropertyDetailComponent_app_property_slider_67_Template, 1, 1, "app-property-slider", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](68, PropertyDetailComponent_div_68_Template, 4, 0, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.images.length !== 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.images.length === 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.getSubCategory());

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", ctx.getAddress(), ", ", ctx.getObec(), "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.getPrice(), " \u20AC");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.getTransactionType());

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.getFloorArea(), " m2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.getCategory());

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.getDescription(), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.getCompanyName());

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.getSeller());

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.getEmail());

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.show);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.show);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _property_slider_property_slider_component__WEBPACK_IMPORTED_MODULE_7__["PropertySliderComponent"]],
      encapsulation: 2
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PropertyDetailComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-property-detail',
          templateUrl: './property-detail.component.html'
        }]
      }], function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
        }, {
          type: _services_property_service__WEBPACK_IMPORTED_MODULE_4__["PropertyService"]
        }, {
          type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["DomSanitizer"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/property-list/property-list.component.ts":
  /*!**********************************************************!*\
    !*** ./src/app/property-list/property-list.component.ts ***!
    \**********************************************************/

  /*! exports provided: PropertyListComponent */

  /***/
  function srcAppPropertyListPropertyListComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PropertyListComponent", function () {
      return PropertyListComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _services_property_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../services/property.service */
    "./src/app/services/property.service.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function PropertyListComponent_div_1_div_7_img_6_Template(rf, ctx) {
      if (rf & 1) {
        var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "img", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PropertyListComponent_div_1_div_7_img_6_Template_img_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8);

          var task_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r6.redirect(task_r3.stringId);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var task_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", task_r3.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
      }
    }

    function PropertyListComponent_div_1_div_7_img_7_Template(rf, ctx) {
      if (rf & 1) {
        var _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "img", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PropertyListComponent_div_1_div_7_img_7_Template_img_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12);

          var task_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r10.redirect(task_r3.stringId);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function PropertyListComponent_div_1_div_7_Template(rf, ctx) {
      if (rf & 1) {
        var _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, PropertyListComponent_div_1_div_7_img_6_Template, 1, 1, "img", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, PropertyListComponent_div_1_div_7_img_7_Template, 1, 0, "img", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "h6", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "ul");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "hr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "i", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "h6", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "button", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PropertyListComponent_div_1_div_7_Template_button_click_26_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14);

          var task_r3 = ctx.$implicit;

          var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r13.redirect(task_r3.stringId);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Zobrazi\u0165");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var task_r3 = ctx.$implicit;

        var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("badge ", ctx_r2.getTransactionBadgeColor(task_r3.stringId), "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r2.getTransactionType(task_r3.stringId));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", task_r3.image);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !task_r3.image);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](task_r3.title);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("", ctx_r2.getTypeBadgeColor(task_r3.stringId), " float-right");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r2.getType(task_r3.stringId));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", ctx_r2.getAddress(task_r3.stringId), ", ", ctx_r2.getObec(task_r3.stringId), "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r2.getPrice(task_r3.stringId), " \u20AC");
      }
    }

    function PropertyListComponent_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "V\u0161etky nehnute\u013Enosti");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, PropertyListComponent_div_1_div_7_Template, 28, 14, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Po\u010De\u0165 polo\u017Eiek: ", ctx_r0.taskData.length, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.taskData);
      }
    }

    function PropertyListComponent_div_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Loading...");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var PropertyListComponent = /*#__PURE__*/function () {
      function PropertyListComponent(propertyService, sanitizer, router) {
        _classCallCheck(this, PropertyListComponent);

        this.propertyService = propertyService;
        this.sanitizer = sanitizer;
        this.router = router;
        this.taskData = [];
        this.show = false;
        this.counter = 0;
      }

      _createClass(PropertyListComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.loadData();
        }
      }, {
        key: "redirect",
        value: function redirect(stringId) {
          var _a;

          var property = (_a = this.taskData) === null || _a === void 0 ? void 0 : _a.find(function (p) {
            return p.stringId === stringId;
          });
          this.router.navigate(['/detail', property.stringId]);
        }
      }, {
        key: "getPrice",
        value: function getPrice(stringId) {
          var property = this.taskData.find(function (p) {
            return p.stringId === stringId;
          });
          return property.localisedNumberFields.find(function (n) {
            return n.stringId === 'text_0';
          }).value;
        }
      }, {
        key: "getTransactionType",
        value: function getTransactionType(stringId) {
          var property = this.taskData.find(function (p) {
            return p.stringId === stringId;
          });
          return property.localisedEnumerationMapFields.find(function (n) {
            return n.stringId === 'enumeration_0';
          }).value;
        }
      }, {
        key: "getType",
        value: function getType(stringId) {
          var property = this.taskData.find(function (p) {
            return p.stringId === stringId;
          });
          return property.localisedEnumerationMapFields.find(function (n) {
            return n.stringId === 'text_7';
          }).value;
        }
      }, {
        key: "getAddress",
        value: function getAddress(stringId) {
          var property = this.taskData.find(function (p) {
            return p.stringId === stringId;
          });
          return property.localisedTextFields.find(function (n) {
            return n.stringId === 'text_6';
          }).value;
        }
      }, {
        key: "getObec",
        value: function getObec(stringId) {
          var property = this.taskData.find(function (p) {
            return p.stringId === stringId;
          });
          return property.localisedEnumerationMapFields.find(function (n) {
            return n.stringId === 'text_5';
          }).value;
        }
      }, {
        key: "getTransactionBadgeColor",
        value: function getTransactionBadgeColor(stringId) {
          switch (this.getTransactionType(stringId)) {
            case 'Predaj':
              return 'bg-success';

            case 'Kúpa':
              return 'bg-danger';

            default:
              return 'bg-info';
          }
        }
      }, {
        key: "getTypeBadgeColor",
        value: function getTypeBadgeColor(stringId) {
          switch (this.getType(stringId)) {
            case 'Domy':
              return 'house';

            case 'Chaty':
              return 'cabin';

            default:
              return 'flat';
          }
        }
      }, {
        key: "loadData",
        value: function loadData() {
          var _this20 = this;

          this.propertyService.getAll('(visualId:*crt*)').subscribe(function (search) {
            var cases = search._embedded.cases;

            var _iterator4 = _createForOfIteratorHelper(cases),
                _step4;

            try {
              var _loop4 = function _loop4() {
                var case1 = _step4.value;

                _this20.propertyService.getTask(case1.stringId).subscribe(function (searchRequest) {
                  var _a, _b;

                  var tasks = (_a = searchRequest === null || searchRequest === void 0 ? void 0 : searchRequest._embedded) === null || _a === void 0 ? void 0 : _a.tasks;

                  _this20.propertyService.getData((_b = tasks[0]) === null || _b === void 0 ? void 0 : _b.stringId).subscribe(function (data) {
                    var task = Object.assign({
                      title: case1.title,
                      stringId: case1.stringId,
                      taskStringId: tasks[0].stringId
                    }, _this20.propertyService.parseData(data));

                    _this20.propertyService.getImage(tasks[0].stringId).subscribe(function (image) {
                      var objectURL = URL.createObjectURL(image);
                      task.image = _this20.sanitizer.bypassSecurityTrustUrl(objectURL);
                      _this20.counter = _this20.counter + 1;

                      if (_this20.counter === cases.length) {
                        _this20.show = true;
                      }

                      _this20.taskData.push(task);
                    });
                  });
                });
              };

              for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
                _loop4();
              }
            } catch (err) {
              _iterator4.e(err);
            } finally {
              _iterator4.f();
            }
          });
        }
      }]);

      return PropertyListComponent;
    }();

    PropertyListComponent.ɵfac = function PropertyListComponent_Factory(t) {
      return new (t || PropertyListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_property_service__WEBPACK_IMPORTED_MODULE_1__["PropertyService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]));
    };

    PropertyListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: PropertyListComponent,
      selectors: [["app-property-list"]],
      decls: 3,
      vars: 2,
      consts: [["id", "detail-hero"], ["class", "container inzeraty", 4, "ngIf"], ["style", "height: 10rem;", "class", "text-center mt-4", 4, "ngIf"], [1, "container", "inzeraty"], [1, "heading"], [1, "row"], ["class", "col-lg-4 mb-3", 4, "ngFor", "ngForOf"], [1, "col-lg-4", "mb-3"], [1, "card"], [1, "hover-zoom"], ["width", "100%", "height", "200", "style", "cursor: pointer", 3, "src", "click", 4, "ngIf"], ["src", "http://placehold.it/350x150/000000", "width", "100%", "height", "200", "style", "cursor: pointer", 3, "click", 4, "ngIf"], [1, "card-body", "p-3"], [1, "col-lg-7"], [1, "font-weight-bold", "mt-1"], [1, "col-lg-5"], [1, "fas", "fa-map-marker-alt"], [1, "font-weight-bold", "text-primary", "float-right"], [1, "btn", "btn-primary", "cursor-pointer", "form-control", 3, "click"], ["width", "100%", "height", "200", 2, "cursor", "pointer", 3, "src", "click"], ["src", "http://placehold.it/350x150/000000", "width", "100%", "height", "200", 2, "cursor", "pointer", 3, "click"], [1, "text-center", "mt-4", 2, "height", "10rem"], ["role", "status", 1, "spinner-border", 2, "width", "3rem", "height", "3rem"], [1, "sr-only"]],
      template: function PropertyListComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "header", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PropertyListComponent_div_1_Template, 8, 2, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, PropertyListComponent_div_2_Template, 4, 0, "div", 2);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.show);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.show);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"]],
      encapsulation: 2
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PropertyListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-property-list',
          templateUrl: './property-list.component.html'
        }]
      }], function () {
        return [{
          type: _services_property_service__WEBPACK_IMPORTED_MODULE_1__["PropertyService"]
        }, {
          type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/property-slider/property-slider.component.ts":
  /*!**************************************************************!*\
    !*** ./src/app/property-slider/property-slider.component.ts ***!
    \**************************************************************/

  /*! exports provided: PropertySliderComponent */

  /***/
  function srcAppPropertySliderPropertySliderComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PropertySliderComponent", function () {
      return PropertySliderComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _property_slider_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./property-slider.config */
    "./src/app/property-slider/property-slider.config.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var ngx_slick_carousel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ngx-slick-carousel */
    "./node_modules/ngx-slick-carousel/__ivy_ngcc__/fesm2015/ngx-slick-carousel.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function PropertySliderComponent_div_1_img_6_Template(rf, ctx) {
      if (rf & 1) {
        var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "img", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PropertySliderComponent_div_1_img_6_Template_img_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6);

          var slide_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r4.redirect(slide_r1.stringId);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var slide_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", slide_r1.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
      }
    }

    function PropertySliderComponent_div_1_img_7_Template(rf, ctx) {
      if (rf & 1) {
        var _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "img", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PropertySliderComponent_div_1_img_7_Template_img_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10);

          var slide_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r8.redirect(slide_r1.stringId);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function PropertySliderComponent_div_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, PropertySliderComponent_div_1_img_6_Template, 1, 1, "img", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, PropertySliderComponent_div_1_img_7_Template, 1, 0, "img", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "h6", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "ul");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "hr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "i", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "h6", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "button", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PropertySliderComponent_div_1_Template_button_click_26_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12);

          var slide_r1 = ctx.$implicit;

          var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r11.redirect(slide_r1.stringId);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Zobrazi\u0165");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var slide_r1 = ctx.$implicit;

        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("badge ", ctx_r0.getTransactionBadgeColor(slide_r1.stringId), "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.getTransactionType(slide_r1.stringId));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", slide_r1.image);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !slide_r1.image);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](slide_r1.title);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("", ctx_r0.getTypeBadgeColor(slide_r1.stringId), " float-right");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.getType(slide_r1.stringId));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", ctx_r0.getAddress(slide_r1.stringId), ", ", ctx_r0.getObec(slide_r1.stringId), "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r0.getPrice(slide_r1.stringId), " \u20AC");
      }
    }

    var PropertySliderComponent = /*#__PURE__*/function () {
      function PropertySliderComponent(router) {
        _classCallCheck(this, PropertySliderComponent);

        this.router = router;
        this.slideConfig = _property_slider_config__WEBPACK_IMPORTED_MODULE_1__["PROPERTY_SLIDER_CONFIG"];
      }

      _createClass(PropertySliderComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "getPrice",
        value: function getPrice(stringId) {
          var property = this.latestProperties.find(function (p) {
            return p.stringId === stringId;
          });
          return property.localisedNumberFields.find(function (n) {
            return n.stringId === 'text_0';
          }).value;
        }
      }, {
        key: "getTransactionType",
        value: function getTransactionType(stringId) {
          var property = this.latestProperties.find(function (p) {
            return p.stringId === stringId;
          });
          return property.localisedEnumerationMapFields.find(function (n) {
            return n.stringId === 'enumeration_0';
          }).value;
        }
      }, {
        key: "getType",
        value: function getType(stringId) {
          var property = this.latestProperties.find(function (p) {
            return p.stringId === stringId;
          });
          return property.localisedEnumerationMapFields.find(function (n) {
            return n.stringId === 'text_7';
          }).value;
        }
      }, {
        key: "getAddress",
        value: function getAddress(stringId) {
          var property = this.latestProperties.find(function (p) {
            return p.stringId === stringId;
          });
          return property.localisedTextFields.find(function (n) {
            return n.stringId === 'text_6';
          }).value;
        }
      }, {
        key: "getObec",
        value: function getObec(stringId) {
          var property = this.latestProperties.find(function (p) {
            return p.stringId === stringId;
          });
          return property.localisedEnumerationMapFields.find(function (n) {
            return n.stringId === 'text_5';
          }).value;
        }
      }, {
        key: "getTransactionBadgeColor",
        value: function getTransactionBadgeColor(stringId) {
          switch (this.getTransactionType(stringId)) {
            case 'Predaj':
              return 'bg-success';

            case 'Kúpa':
              return 'bg-danger';

            default:
              return 'bg-info';
          }
        }
      }, {
        key: "getTypeBadgeColor",
        value: function getTypeBadgeColor(stringId) {
          switch (this.getType(stringId)) {
            case 'Domy':
              return 'house';

            case 'Chaty':
              return 'cabin';

            default:
              return 'flat';
          }
        }
      }, {
        key: "redirect",
        value: function redirect(stringId) {
          var property = this.latestProperties.find(function (p) {
            return p.stringId === stringId;
          });
          this.router.navigate(["/detail", property.stringId]).then();
        }
      }]);

      return PropertySliderComponent;
    }();

    PropertySliderComponent.ɵfac = function PropertySliderComponent_Factory(t) {
      return new (t || PropertySliderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]));
    };

    PropertySliderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: PropertySliderComponent,
      selectors: [["app-property-slider"]],
      inputs: {
        latestProperties: "latestProperties"
      },
      decls: 2,
      vars: 2,
      consts: [[1, "carousel", 3, "config"], ["ngxSlickItem", "", "class", "slide", 4, "ngFor", "ngForOf"], ["ngxSlickItem", "", 1, "slide"], [1, "card"], [1, "hover-zoom"], ["width", "100%", "height", "200", "style", "cursor: pointer", 3, "src", "click", 4, "ngIf"], ["src", "http://placehold.it/350x150/000000", "width", "100%", "height", "200", "style", "cursor: pointer", 3, "click", 4, "ngIf"], [1, "card-body", "p-3"], [1, "row"], [1, "col-lg-7"], [1, "font-weight-bold", "mt-1"], [1, "col-lg-5"], [1, "fas", "fa-map-marker-alt"], [1, "font-weight-bold", "text-primary", "float-right"], [1, "btn", "btn-primary", "cursor-pointer", "form-control", 3, "click"], ["width", "100%", "height", "200", 2, "cursor", "pointer", 3, "src", "click"], ["src", "http://placehold.it/350x150/000000", "width", "100%", "height", "200", 2, "cursor", "pointer", 3, "click"]],
      template: function PropertySliderComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ngx-slick-carousel", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PropertySliderComponent_div_1_Template, 28, 14, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("config", ctx.slideConfig);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.latestProperties);
        }
      },
      directives: [ngx_slick_carousel__WEBPACK_IMPORTED_MODULE_3__["SlickCarouselComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], ngx_slick_carousel__WEBPACK_IMPORTED_MODULE_3__["SlickItemDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"]],
      encapsulation: 2
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PropertySliderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-property-slider',
          templateUrl: './property-slider.component.html',
          styles: []
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }];
      }, {
        latestProperties: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/property-slider/property-slider.config.ts":
  /*!***********************************************************!*\
    !*** ./src/app/property-slider/property-slider.config.ts ***!
    \***********************************************************/

  /*! exports provided: PROPERTY_SLIDER_CONFIG */

  /***/
  function srcAppPropertySliderPropertySliderConfigTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PROPERTY_SLIDER_CONFIG", function () {
      return PROPERTY_SLIDER_CONFIG;
    });

    var PROPERTY_SLIDER_CONFIG = {
      dots: true,
      infinite: false,
      arrows: true,
      focusOnSelect: false,
      speed: 300,
      slidesToShow: 3,
      slidesToScroll: 2,
      responsive: [{
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true
        }
      }, {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }, {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }]
    };
    /***/
  },

  /***/
  "./src/app/services/app-init.service.ts":
  /*!**********************************************!*\
    !*** ./src/app/services/app-init.service.ts ***!
    \**********************************************/

  /*! exports provided: initializeApp, AppInitService */

  /***/
  function srcAppServicesAppInitServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "initializeApp", function () {
      return initializeApp;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppInitService", function () {
      return AppInitService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _authorization_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./authorization.service */
    "./src/app/services/authorization.service.ts");

    function initializeApp(appInitService) {
      return function () {
        return appInitService.init();
      };
    }

    var AppInitService = /*#__PURE__*/function () {
      function AppInitService(authorizationService) {
        _classCallCheck(this, AppInitService);

        this.authorizationService = authorizationService;
      }

      _createClass(AppInitService, [{
        key: "init",
        value: function init() {
          var login = this.authorizationService.login().toPromise();
          return Promise.all([login]).then(function () {});
        }
      }]);

      return AppInitService;
    }();

    AppInitService.ɵfac = function AppInitService_Factory(t) {
      return new (t || AppInitService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_authorization_service__WEBPACK_IMPORTED_MODULE_1__["AuthorizationService"]));
    };

    AppInitService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: AppInitService,
      factory: AppInitService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppInitService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _authorization_service__WEBPACK_IMPORTED_MODULE_1__["AuthorizationService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/services/authorization.service.ts":
  /*!***************************************************!*\
    !*** ./src/app/services/authorization.service.ts ***!
    \***************************************************/

  /*! exports provided: AuthorizationService */

  /***/
  function srcAppServicesAuthorizationServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthorizationService", function () {
      return AuthorizationService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");

    var AuthorizationService = /*#__PURE__*/function () {
      function AuthorizationService(httpClient) {
        _classCallCheck(this, AuthorizationService);

        this.httpClient = httpClient;
      }

      _createClass(AuthorizationService, [{
        key: "login",
        value: function login() {
          var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]().set("Authorization", "Basic eHN1bGhhbmVrbUBzdHViYS5zazo5MjM3MQ==");
          localStorage.clear();
          return this.httpClient.get('https://engine.interes.group/api/auth/login', {
            headers: headers,
            observe: 'response'
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (resp) {
            localStorage.setItem('X-Auth-Token', resp.headers.get('X-Auth-Token'));
          }));
        }
      }]);

      return AuthorizationService;
    }();

    AuthorizationService.ɵfac = function AuthorizationService_Factory(t) {
      return new (t || AuthorizationService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]));
    };

    AuthorizationService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: AuthorizationService,
      factory: AuthorizationService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthorizationService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/services/property.service.ts":
  /*!**********************************************!*\
    !*** ./src/app/services/property.service.ts ***!
    \**********************************************/

  /*! exports provided: PropertyService */

  /***/
  function srcAppServicesPropertyServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PropertyService", function () {
      return PropertyService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var PropertyService = /*#__PURE__*/function () {
      function PropertyService(httpClient) {
        _classCallCheck(this, PropertyService);

        this.httpClient = httpClient;
      }

      _createClass(PropertyService, [{
        key: "getAll",
        value: function getAll(queryFilter) {
          var group = {
            group: '5f86b22df9ac3b272d6b4191'
          };
          var query = {
            query: queryFilter
          };
          var array = [group, query];
          return this.httpClient.post('https://engine.interes.group/api/workflow/case/search?sort=creationDateSortable,desc&size=50&page=0&operation=AND', array);
        }
      }, {
        key: "get",
        value: function get() {
          return this.httpClient.get('https://engine.interes.group/api/task/6005f705f9ac3b6feca9df03/data');
        }
      }, {
        key: "getSuggested",
        value: function getSuggested(queryFilter) {
          var group = {
            group: '5f86b22df9ac3b272d6b4191'
          };
          var query = {
            query: queryFilter
          };
          var array = [group, query];
          return this.httpClient.post('https://engine.interes.group/api/workflow/case/search?sort=creationDateSortable,desc&size=5&page=0&operation=AND', array);
        }
      }, {
        key: "getTask",
        value: function getTask(id) {
          var test = {
            id: id
          };
          return this.httpClient.post('https://engine.interes.group/api/task/search?sort=priority,desc&size=50&page=0', {
            "case": test
          });
        }
      }, {
        key: "getData",
        value: function getData(id) {
          return this.httpClient.get("https://engine.interes.group/api/task/".concat(id, "/data"));
        }
      }, {
        key: "getImage",
        value: function getImage(extension) {
          return this.httpClient.get("https://engine.interes.group/api/task/".concat(extension, "/file/file_0"), {
            responseType: 'blob'
          });
        }
      }, {
        key: "getImageList",
        value: function getImageList(stringId, fileName) {
          return this.httpClient.get("https://engine.interes.group/api/task/".concat(stringId, "/file/fileList_0/").concat(fileName), {
            responseType: 'blob'
          });
        }
      }, {
        key: "test",
        value: function test() {
          var group = {
            group: '5f86b23cf9ac3b272d6c4e4d'
          };
          return this.httpClient.post(' https://engine.interes.group/api/workflow/case/search?sort=stringId,desc&size=25&page=0', group);
        }
      }, {
        key: "parseData",
        value: function parseData(data) {
          var result = {
            localisedEnumerationMapFields: [],
            localisedNumberFields: [],
            localisedTextFields: [],
            localisedFields: []
          };
          var dataGroups = data._embedded.dataGroups;
          dataGroups.forEach(function (dataGroup) {
            if (dataGroup.fields._embedded.localisedTextFields) {
              var _result$localisedText;

              (_result$localisedText = result.localisedTextFields).push.apply(_result$localisedText, _toConsumableArray(dataGroup.fields._embedded.localisedTextFields));
            }

            if (dataGroup.fields._embedded.localisedNumberFields) {
              var _result$localisedNumb;

              (_result$localisedNumb = result.localisedNumberFields).push.apply(_result$localisedNumb, _toConsumableArray(dataGroup.fields._embedded.localisedNumberFields));
            }

            if (dataGroup.fields._embedded.localisedFields) {
              var _result$localisedFiel;

              (_result$localisedFiel = result.localisedFields).push.apply(_result$localisedFiel, _toConsumableArray(dataGroup.fields._embedded.localisedFields));
            }

            if (dataGroup.fields._embedded.localisedEnumerationMapFields) {
              dataGroup.fields._embedded.localisedEnumerationMapFields.forEach(function (t) {
                var test = {
                  value: PropertyService.parseMap(t, t.value),
                  name: t.name,
                  stringId: t.stringId
                };
                result.localisedEnumerationMapFields.push(test);
              });
            }
          });
          return result;
        }
      }], [{
        key: "parseMap",
        value: function parseMap(data, value) {
          return data.options[value];
        }
      }]);

      return PropertyService;
    }();

    PropertyService.ɵfac = function PropertyService_Factory(t) {
      return new (t || PropertyService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]));
    };

    PropertyService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: PropertyService,
      factory: PropertyService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PropertyService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/services/search.service.ts":
  /*!********************************************!*\
    !*** ./src/app/services/search.service.ts ***!
    \********************************************/

  /*! exports provided: SearchService */

  /***/
  function srcAppServicesSearchServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SearchService", function () {
      return SearchService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var SearchService = /*#__PURE__*/function () {
      function SearchService(httpClient) {
        _classCallCheck(this, SearchService);

        this.httpClient = httpClient;
      }

      _createClass(SearchService, [{
        key: "getAllCounties",
        value: function getAllCounties() {
          var data = {
            group: "5f86b22df9ac3b272d6b4191",
            query: "(visualId:*KRA*)"
          };
          return this.httpClient.post('https://engine.interes.group/api/workflow/case/search?sort=stringId,desc&size=25&page=0', data);
        }
      }, {
        key: "getTask",
        value: function getTask(id) {
          var data = {
            id: id
          };
          return this.httpClient.post('https://engine.interes.group/api/task/search?sort=priority,desc&size=50&page=0', {
            "case": data
          });
        }
      }, {
        key: "getData",
        value: function getData(value) {
          return this.httpClient.get('https://engine.interes.group/api/task/' + value + '/data');
        }
      }, {
        key: "getTypes",
        value: function getTypes() {
          var data = {
            group: "5f86b22df9ac3b272d6b4191",
            query: "(visualId:*TYP*)"
          };
          return this.httpClient.post('https://engine.interes.group/api/workflow/case/search?sort=stringId,desc&size=25&page=0', data);
        }
      }, {
        key: "getCategories",
        value: function getCategories() {
          var data = {
            group: "5f86b22df9ac3b272d6b4191",
            query: "(title:*BYTY*) OR (title:*DOMY*)"
          };
          return this.httpClient.post('https://engine.interes.group/api/workflow/case/search?sort=stringId,desc&size=25&page=0&operation=OR', data);
        }
      }, {
        key: "search",
        value: function search(queryFilter) {
          var data = {
            group: "5f86b22df9ac3b272d6b4191",
            query: queryFilter
          };
          return this.httpClient.post('https://engine.interes.group/api/workflow/case/search?sort=stringId,desc&size=100&page=0', data);
        }
      }]);

      return SearchService;
    }();

    SearchService.ɵfac = function SearchService_Factory(t) {
      return new (t || SearchService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]));
    };

    SearchService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: SearchService,
      factory: SearchService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SearchService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/services/token-interceptor.service.ts":
  /*!*******************************************************!*\
    !*** ./src/app/services/token-interceptor.service.ts ***!
    \*******************************************************/

  /*! exports provided: TokenInterceptorService */

  /***/
  function srcAppServicesTokenInterceptorServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TokenInterceptorService", function () {
      return TokenInterceptorService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var TokenInterceptorService = /*#__PURE__*/function () {
      function TokenInterceptorService() {
        _classCallCheck(this, TokenInterceptorService);
      }

      _createClass(TokenInterceptorService, [{
        key: "intercept",
        value: function intercept(req, next) {
          if (!localStorage.getItem('X-Auth-Token')) {
            return next.handle(req);
          }

          var tokenizeRequest = req.clone({
            setHeaders: {
              "X-Auth-Token": localStorage.getItem('X-Auth-Token')
            }
          });
          return next.handle(tokenizeRequest);
        }
      }]);

      return TokenInterceptorService;
    }();

    TokenInterceptorService.ɵfac = function TokenInterceptorService_Factory(t) {
      return new (t || TokenInterceptorService)();
    };

    TokenInterceptorService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: TokenInterceptorService,
      factory: TokenInterceptorService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TokenInterceptorService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! C:\Users\kohoo\Pracovná plocha\broker\broker-portal\broker-portal\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map