(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["demo-pages-member-member-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/demo/pages/member/member.component.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/demo/pages/member/member.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-sm-12\">\n    <app-card [hidHeader]=\"true\" [options]=\"false\">\n      <div class=\"d-flex\">\n        <button (click)=\"gotoForm()\" class=\"btn btn-primary mb-2 ml-auto\" type=\"button\">\n          <i class=\"feather icon-plus mr-2\"></i>\n          <span>Tambah</span>\n        </button>\n      </div>\n      <table class=\"table table-hover\">\n        <thead>\n        <tr>\n          <th>Nama Lengkap</th>\n          <th>NIK</th>\n          <th>Nomor HP</th>\n          <th>Jenis Kelamin</th>\n          <th>Pekerjaan</th>\n          <th>Status</th>\n          <th>&nbsp;</th>\n        </tr>\n        </thead>\n        <tbody>\n        <tr>\n          <td>Budi Lesmana</td>\n          <td>3271111111111</td>\n          <td>081200000000</td>\n          <td>Laki-laki</td>\n          <td>Petani</td>\n          <td>Aktif</td>\n          <td>\n            <button class=\"btn btn-icon btn-danger\" >\n              <i class=\"feather icon-trash\"></i>\n            </button>\n            <button (click)=\"gotoForm()\" class=\"btn btn-icon btn-success\" >\n              <i class=\"feather icon-edit\"></i>\n            </button>\n          </td>\n        </tr>\n        <tr>\n          <td>Siti Aminah</td>\n          <td>3271111111111</td>\n          <td>081200000000</td>\n          <td>Perempuan</td>\n          <td>Nelayan</td>\n          <td>Aktif</td>\n          <td>\n            <button class=\"btn btn-icon btn-danger\" >\n              <i class=\"feather icon-trash\"></i>\n            </button>\n            <button (click)=\"gotoForm()\" class=\"btn btn-icon btn-success\" >\n              <i class=\"feather icon-edit\"></i>\n            </button>\n          </td>\n        </tr>\n        </tbody>\n      </table>\n      <div class=\"d-flex justify-content-end\">\n        <ngb-pagination [collectionSize]=\"20\" [page]=\"1\" aria-label=\"Default pagination\"></ngb-pagination>\n      </div>\n    </app-card>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/demo/pages/member/member-routing.module.ts":
/*!************************************************************!*\
  !*** ./src/app/demo/pages/member/member-routing.module.ts ***!
  \************************************************************/
/*! exports provided: MemberPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MemberPageRoutingModule", function() { return MemberPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _member_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./member.component */ "./src/app/demo/pages/member/member.component.ts");




const routes = [
    {
        path: '',
        component: _member_component__WEBPACK_IMPORTED_MODULE_3__["MemberPageComponent"],
    },
    {
        path: 'form',
        loadChildren: () => __webpack_require__.e(/*! import() | form-member-form-member-module */ "form-member-form-member-module").then(__webpack_require__.bind(null, /*! ./form-member/form-member.module */ "./src/app/demo/pages/member/form-member/form-member.module.ts"))
            .then(module => module.FormStockPagePageModule)
    },
    {
        path: ':type',
        component: _member_component__WEBPACK_IMPORTED_MODULE_3__["MemberPageComponent"],
    },
];
let MemberPageRoutingModule = class MemberPageRoutingModule {
};
MemberPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], MemberPageRoutingModule);



/***/ }),

/***/ "./src/app/demo/pages/member/member.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/demo/pages/member/member.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RlbW8vcGFnZXMvbWVtYmVyL21lbWJlci5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/demo/pages/member/member.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/demo/pages/member/member.component.ts ***!
  \*******************************************************/
/*! exports provided: MemberPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MemberPageComponent", function() { return MemberPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



let MemberPageComponent = class MemberPageComponent {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() {
    }
    gotoForm() {
        this.router.navigate(['/member/form']);
    }
};
MemberPageComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
MemberPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-member',
        template: __webpack_require__(/*! raw-loader!./member.component.html */ "./node_modules/raw-loader/index.js!./src/app/demo/pages/member/member.component.html"),
        styles: [__webpack_require__(/*! ./member.component.scss */ "./src/app/demo/pages/member/member.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
], MemberPageComponent);



/***/ }),

/***/ "./src/app/demo/pages/member/member.module.ts":
/*!****************************************************!*\
  !*** ./src/app/demo/pages/member/member.module.ts ***!
  \****************************************************/
/*! exports provided: MemberPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MemberPageModule", function() { return MemberPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _member_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./member-routing.module */ "./src/app/demo/pages/member/member-routing.module.ts");
/* harmony import */ var _member_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./member.component */ "./src/app/demo/pages/member/member.component.ts");
/* harmony import */ var _theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../theme/shared/shared.module */ "./src/app/theme/shared/shared.module.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");







let MemberPageModule = class MemberPageModule {
};
MemberPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_member_component__WEBPACK_IMPORTED_MODULE_4__["MemberPageComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _member_routing_module__WEBPACK_IMPORTED_MODULE_3__["MemberPageRoutingModule"],
            _theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbButtonsModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbPaginationModule"],
        ]
    })
], MemberPageModule);



/***/ })

}]);
//# sourceMappingURL=demo-pages-member-member-module-es2015.js.map