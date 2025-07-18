(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["demo-pages-procurement-procurement-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/demo/pages/procurement/procurement.component.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/demo/pages/procurement/procurement.component.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-sm-12\">\n    <app-card [hidHeader]=\"true\" [options]=\"false\">\n      <div class=\"d-flex\">\n        <button (click)=\"gotoForm()\" class=\"btn btn-primary mb-2 ml-auto\" type=\"button\">\n          <i class=\"feather icon-plus mr-2\"></i>\n          <span>Tambah</span>\n        </button>\n      </div>\n      <table class=\"table table-hover\">\n        <thead>\n        <tr>\n          <th>Tgl. Pengadaan</th>\n          <th>Nama Produk</th>\n          <th>Jenis Produk</th>\n          <th>Supplier</th>\n          <th>Lokasi Tujuan</th>\n          <th>Jumlah</th>\n          <th>Harga</th>\n          <th>Total</th>\n          <th>Status</th>\n          <th>&nbsp;</th>\n        </tr>\n        </thead>\n        <tbody>\n        <tr>\n          <td>10 Juli 2025</td>\n          <td>Beras</td>\n          <td>Sembako</td>\n          <td>Toko Indogrosir</td>\n          <td>Gudang utama</td>\n          <td>10 Kg</td>\n          <td>Rp. 10,000</td>\n          <td>Rp. 100,000</td>\n          <td>Diterima</td>\n          <td>\n            <button class=\"btn btn-icon btn-danger\" >\n              <i class=\"feather icon-trash\"></i>\n            </button>\n            <button (click)=\"gotoForm()\" class=\"btn btn-icon btn-success\" >\n              <i class=\"feather icon-edit\"></i>\n            </button>\n          </td>\n        </tr>\n        <tr>\n          <td>10 Juli 2025</td>\n          <td>Sagu</td>\n          <td>Sembako</td>\n          <td>Toko Indogrosir</td>\n          <td>Gudang utama</td>\n          <td>5 Kg</td>\n          <td>Rp. 10,000</td>\n          <td>Rp. 50,000</td>\n          <td>Diterima</td>\n          <td>\n            <button class=\"btn btn-icon btn-danger\" >\n              <i class=\"feather icon-trash\"></i>\n            </button>\n            <button (click)=\"gotoForm()\" class=\"btn btn-icon btn-success\" >\n              <i class=\"feather icon-edit\"></i>\n            </button>\n          </td>\n        </tr>\n        </tbody>\n      </table>\n      <div class=\"d-flex justify-content-end\">\n        <ngb-pagination [collectionSize]=\"20\" [page]=\"1\" aria-label=\"Default pagination\"></ngb-pagination>\n      </div>\n    </app-card>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/demo/pages/procurement/procurement-routing.module.ts":
/*!**********************************************************************!*\
  !*** ./src/app/demo/pages/procurement/procurement-routing.module.ts ***!
  \**********************************************************************/
/*! exports provided: ProcurementPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProcurementPageRoutingModule", function() { return ProcurementPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _procurement_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./procurement.component */ "./src/app/demo/pages/procurement/procurement.component.ts");




const routes = [
    {
        path: '',
        component: _procurement_component__WEBPACK_IMPORTED_MODULE_3__["ProcurementPageComponent"],
    },
    {
        path: 'form',
        loadChildren: () => __webpack_require__.e(/*! import() | form-procurement-form-procurement-module */ "form-procurement-form-procurement-module").then(__webpack_require__.bind(null, /*! ./form-procurement/form-procurement.module */ "./src/app/demo/pages/procurement/form-procurement/form-procurement.module.ts"))
            .then(module => module.FormProcurementPagePageModule)
    }
];
let ProcurementPageRoutingModule = class ProcurementPageRoutingModule {
};
ProcurementPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], ProcurementPageRoutingModule);



/***/ }),

/***/ "./src/app/demo/pages/procurement/procurement.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/demo/pages/procurement/procurement.component.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RlbW8vcGFnZXMvcHJvY3VyZW1lbnQvcHJvY3VyZW1lbnQuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/demo/pages/procurement/procurement.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/demo/pages/procurement/procurement.component.ts ***!
  \*****************************************************************/
/*! exports provided: ProcurementPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProcurementPageComponent", function() { return ProcurementPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



let ProcurementPageComponent = class ProcurementPageComponent {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() {
    }
    gotoForm() {
        this.router.navigate(['/procurement/form']);
    }
};
ProcurementPageComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
ProcurementPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-procurement',
        template: __webpack_require__(/*! raw-loader!./procurement.component.html */ "./node_modules/raw-loader/index.js!./src/app/demo/pages/procurement/procurement.component.html"),
        styles: [__webpack_require__(/*! ./procurement.component.scss */ "./src/app/demo/pages/procurement/procurement.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
], ProcurementPageComponent);



/***/ }),

/***/ "./src/app/demo/pages/procurement/procurement.module.ts":
/*!**************************************************************!*\
  !*** ./src/app/demo/pages/procurement/procurement.module.ts ***!
  \**************************************************************/
/*! exports provided: ProcurementPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProcurementPageModule", function() { return ProcurementPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _procurement_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./procurement-routing.module */ "./src/app/demo/pages/procurement/procurement-routing.module.ts");
/* harmony import */ var _procurement_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./procurement.component */ "./src/app/demo/pages/procurement/procurement.component.ts");
/* harmony import */ var _theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../theme/shared/shared.module */ "./src/app/theme/shared/shared.module.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");







let ProcurementPageModule = class ProcurementPageModule {
};
ProcurementPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_procurement_component__WEBPACK_IMPORTED_MODULE_4__["ProcurementPageComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _procurement_routing_module__WEBPACK_IMPORTED_MODULE_3__["ProcurementPageRoutingModule"],
            _theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbButtonsModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbPaginationModule"],
        ]
    })
], ProcurementPageModule);



/***/ })

}]);
//# sourceMappingURL=demo-pages-procurement-procurement-module-es2015.js.map