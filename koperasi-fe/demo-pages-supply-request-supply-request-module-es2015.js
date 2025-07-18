(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["demo-pages-supply-request-supply-request-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/demo/pages/supply-request/supply-request.component.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/demo/pages/supply-request/supply-request.component.html ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-sm-12\">\n    <app-card [hidHeader]=\"true\" [options]=\"false\">\n      <div class=\"d-flex\">\n        <button (click)=\"gotoForm()\" class=\"btn btn-primary mb-2 ml-auto\" type=\"button\">\n          <i class=\"feather icon-plus mr-2\"></i>\n          <span>Tambah</span>\n        </button>\n      </div>\n      <table class=\"table table-hover\">\n        <thead>\n        <tr>\n          <th>Nama Anggota</th>\n          <th>Jenis Produk</th>\n          <th>Nama Produk</th>\n          <th>Lokasi Tujuan</th>\n          <th>Jumlah</th>\n          <th>Status</th>\n          <th>Tanggal Pengajuan</th>\n          <th>&nbsp;</th>\n        </tr>\n        </thead>\n        <tbody>\n        <tr>\n          <td>Ronaldo</td>\n          <td>Sembako</td>\n          <td>Beras</td>\n          <td>Gudang utama</td>\n          <td>10 Kg</td>\n          <td>Diproses</td>\n          <td>10 Juli 2025</td>\n          <td>\n            <button class=\"btn btn-icon btn-danger\" >\n              <i class=\"feather icon-trash\"></i>\n            </button>\n            <button (click)=\"gotoForm()\" class=\"btn btn-icon btn-success\" >\n              <i class=\"feather icon-edit\"></i>\n            </button>\n          </td>\n        </tr>\n        <tr>\n          <td>Messi</td>\n          <td>Gas</td>\n          <td>Gas Lpg 3kg</td>\n          <td>Gudang utama</td>\n          <td>10</td>\n          <td>Selesai</td>\n          <td>10 Juli 2025</td>\n          <td>\n            <button class=\"btn btn-icon btn-danger\" >\n              <i class=\"feather icon-trash\"></i>\n            </button>\n            <button (click)=\"gotoForm()\" class=\"btn btn-icon btn-success\" >\n              <i class=\"feather icon-edit\"></i>\n            </button>\n          </td>\n        </tr>\n        </tbody>\n      </table>\n      <div class=\"d-flex justify-content-end\">\n        <ngb-pagination [collectionSize]=\"20\" [page]=\"1\" aria-label=\"Default pagination\"></ngb-pagination>\n      </div>\n    </app-card>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/demo/pages/supply-request/supply-request-routing.module.ts":
/*!****************************************************************************!*\
  !*** ./src/app/demo/pages/supply-request/supply-request-routing.module.ts ***!
  \****************************************************************************/
/*! exports provided: SupplyRequestPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SupplyRequestPageRoutingModule", function() { return SupplyRequestPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _supply_request_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./supply-request.component */ "./src/app/demo/pages/supply-request/supply-request.component.ts");




const routes = [
    {
        path: '',
        component: _supply_request_component__WEBPACK_IMPORTED_MODULE_3__["SupplyRequestPageComponent"],
    },
    {
        path: 'form',
        loadChildren: () => __webpack_require__.e(/*! import() | form-supply-request-form-supply-request-module */ "form-supply-request-form-supply-request-module").then(__webpack_require__.bind(null, /*! ./form-supply-request/form-supply-request.module */ "./src/app/demo/pages/supply-request/form-supply-request/form-supply-request.module.ts"))
            .then(module => module.FormSupplyRequestPagePageModule)
    }
];
let SupplyRequestPageRoutingModule = class SupplyRequestPageRoutingModule {
};
SupplyRequestPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], SupplyRequestPageRoutingModule);



/***/ }),

/***/ "./src/app/demo/pages/supply-request/supply-request.component.scss":
/*!*************************************************************************!*\
  !*** ./src/app/demo/pages/supply-request/supply-request.component.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RlbW8vcGFnZXMvc3VwcGx5LXJlcXVlc3Qvc3VwcGx5LXJlcXVlc3QuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/demo/pages/supply-request/supply-request.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/demo/pages/supply-request/supply-request.component.ts ***!
  \***********************************************************************/
/*! exports provided: SupplyRequestPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SupplyRequestPageComponent", function() { return SupplyRequestPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



let SupplyRequestPageComponent = class SupplyRequestPageComponent {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() {
    }
    gotoForm() {
        this.router.navigate(['/supply-request/form']);
    }
};
SupplyRequestPageComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
SupplyRequestPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-supply-request',
        template: __webpack_require__(/*! raw-loader!./supply-request.component.html */ "./node_modules/raw-loader/index.js!./src/app/demo/pages/supply-request/supply-request.component.html"),
        styles: [__webpack_require__(/*! ./supply-request.component.scss */ "./src/app/demo/pages/supply-request/supply-request.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
], SupplyRequestPageComponent);



/***/ }),

/***/ "./src/app/demo/pages/supply-request/supply-request.module.ts":
/*!********************************************************************!*\
  !*** ./src/app/demo/pages/supply-request/supply-request.module.ts ***!
  \********************************************************************/
/*! exports provided: SupplyRequestPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SupplyRequestPageModule", function() { return SupplyRequestPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _supply_request_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./supply-request-routing.module */ "./src/app/demo/pages/supply-request/supply-request-routing.module.ts");
/* harmony import */ var _supply_request_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./supply-request.component */ "./src/app/demo/pages/supply-request/supply-request.component.ts");
/* harmony import */ var _theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../theme/shared/shared.module */ "./src/app/theme/shared/shared.module.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");







let SupplyRequestPageModule = class SupplyRequestPageModule {
};
SupplyRequestPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_supply_request_component__WEBPACK_IMPORTED_MODULE_4__["SupplyRequestPageComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _supply_request_routing_module__WEBPACK_IMPORTED_MODULE_3__["SupplyRequestPageRoutingModule"],
            _theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbButtonsModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbPaginationModule"],
        ]
    })
], SupplyRequestPageModule);



/***/ })

}]);
//# sourceMappingURL=demo-pages-supply-request-supply-request-module-es2015.js.map