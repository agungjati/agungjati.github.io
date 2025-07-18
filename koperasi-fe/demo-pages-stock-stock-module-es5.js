(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["demo-pages-stock-stock-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/demo/pages/stock/stock.component.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/demo/pages/stock/stock.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-sm-12\">\n    <app-card [hidHeader]=\"true\" [options]=\"false\">\n      <div class=\"d-flex\">\n        <button (click)=\"gotoForm()\" class=\"btn btn-primary mb-2 ml-auto\" type=\"button\">\n          <i class=\"feather icon-plus mr-2\"></i>\n          <span>Tambah</span>\n        </button>\n      </div>\n      <table class=\"table table-hover\">\n        <thead>\n        <tr>\n          <th>Nama Barang</th>\n          <th>Jenis Barang</th>\n          <th>Kategori</th>\n          <th>Lokasi Penyimpanan</th>\n          <th>Jumlah Stok</th>\n          <th>Satuan</th>\n          <th>Tgl. Masuk</th>\n          <th>Tgl. Kadaluarsa</th>\n          <th>&nbsp;</th>\n        </tr>\n        </thead>\n        <tbody>\n        <tr>\n          <td>Beras</td>\n          <td>Sembako</td>\n          <td>Barang Konsumsi</td>\n          <td>Gudang Utama</td>\n          <td>100</td>\n          <td>Kg</td>\n          <td>10 Juli 2025</td>\n          <td>10 Juli 2026</td>\n          <td>\n            <button class=\"btn btn-icon btn-danger\" >\n              <i class=\"feather icon-trash\"></i>\n            </button>\n            <button (click)=\"gotoForm()\" class=\"btn btn-icon btn-success\" >\n              <i class=\"feather icon-edit\"></i>\n            </button>\n          </td>\n        </tr>\n        <tr>\n          <td>Gas Lpg 3kg</td>\n          <td>Gas</td>\n          <td>Alat</td>\n          <td>Gudang Utama</td>\n          <td>100</td>\n          <td>unit</td>\n          <td>10 Juli 2025</td>\n          <td>10 Juli 2026</td>\n          <td>\n            <button class=\"btn btn-icon btn-danger\" >\n              <i class=\"feather icon-trash\"></i>\n            </button>\n            <button (click)=\"gotoForm()\" class=\"btn btn-icon btn-success\" >\n              <i class=\"feather icon-edit\"></i>\n            </button>\n          </td>\n        </tr>\n        </tbody>\n      </table>\n      <div class=\"d-flex justify-content-end\">\n        <ngb-pagination [collectionSize]=\"20\" [page]=\"1\" aria-label=\"Default pagination\"></ngb-pagination>\n      </div>\n    </app-card>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/demo/pages/stock/stock-routing.module.ts":
/*!**********************************************************!*\
  !*** ./src/app/demo/pages/stock/stock-routing.module.ts ***!
  \**********************************************************/
/*! exports provided: StockPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StockPageRoutingModule", function() { return StockPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _stock_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./stock.component */ "./src/app/demo/pages/stock/stock.component.ts");




var routes = [
    {
        path: '',
        component: _stock_component__WEBPACK_IMPORTED_MODULE_3__["StockPageComponent"],
    },
    {
        path: 'form',
        loadChildren: function () { return __webpack_require__.e(/*! import() | form-stock-form-stock-module */ "form-stock-form-stock-module").then(__webpack_require__.bind(null, /*! ./form-stock/form-stock.module */ "./src/app/demo/pages/stock/form-stock/form-stock.module.ts"))
            .then(function (module) { return module.FormStockPagePageModule; }); }
    },
    {
        path: ':type',
        component: _stock_component__WEBPACK_IMPORTED_MODULE_3__["StockPageComponent"],
    },
];
var StockPageRoutingModule = /** @class */ (function () {
    function StockPageRoutingModule() {
    }
    StockPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], StockPageRoutingModule);
    return StockPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/demo/pages/stock/stock.component.scss":
/*!*******************************************************!*\
  !*** ./src/app/demo/pages/stock/stock.component.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RlbW8vcGFnZXMvc3RvY2svc3RvY2suY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/demo/pages/stock/stock.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/demo/pages/stock/stock.component.ts ***!
  \*****************************************************/
/*! exports provided: StockPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StockPageComponent", function() { return StockPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var StockPageComponent = /** @class */ (function () {
    function StockPageComponent(router) {
        this.router = router;
    }
    StockPageComponent.prototype.ngOnInit = function () {
    };
    StockPageComponent.prototype.gotoForm = function () {
        this.router.navigate(['/stock/form']);
    };
    StockPageComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
    ]; };
    StockPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-stock',
            template: __webpack_require__(/*! raw-loader!./stock.component.html */ "./node_modules/raw-loader/index.js!./src/app/demo/pages/stock/stock.component.html"),
            styles: [__webpack_require__(/*! ./stock.component.scss */ "./src/app/demo/pages/stock/stock.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], StockPageComponent);
    return StockPageComponent;
}());



/***/ }),

/***/ "./src/app/demo/pages/stock/stock.module.ts":
/*!**************************************************!*\
  !*** ./src/app/demo/pages/stock/stock.module.ts ***!
  \**************************************************/
/*! exports provided: StockPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StockPageModule", function() { return StockPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _stock_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./stock-routing.module */ "./src/app/demo/pages/stock/stock-routing.module.ts");
/* harmony import */ var _stock_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./stock.component */ "./src/app/demo/pages/stock/stock.component.ts");
/* harmony import */ var _theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../theme/shared/shared.module */ "./src/app/theme/shared/shared.module.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");







var StockPageModule = /** @class */ (function () {
    function StockPageModule() {
    }
    StockPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_stock_component__WEBPACK_IMPORTED_MODULE_4__["StockPageComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _stock_routing_module__WEBPACK_IMPORTED_MODULE_3__["StockPageRoutingModule"],
                _theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbButtonsModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbPaginationModule"],
            ]
        })
    ], StockPageModule);
    return StockPageModule;
}());



/***/ })

}]);
//# sourceMappingURL=demo-pages-stock-stock-module-es5.js.map