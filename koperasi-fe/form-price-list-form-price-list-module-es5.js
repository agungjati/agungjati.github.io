(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["form-price-list-form-price-list-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/demo/pages/sale/price-list/form-price-list/form-price-list.component.html":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/demo/pages/sale/price-list/form-price-list/form-price-list.component.html ***!
  \*********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-sm-12\">\n    <app-card [hidHeader]=\"true\" [options]=\"false\">\n      <form>\n        <div class=\"row\">\n          <div class=\"col-md-12\">\n            <div class=\"form-group\">\n              <label>Nama Barang</label>\n              <input type=\"text\" class=\"form-control\" placeholder=\"Nama\" value=\"Beras 5kg\" disabled>\n            </div>\n            <div class=\"form-group\">\n              <label>Harga</label>\n              <input type=\"text\" class=\"form-control\" placeholder=\"0\" value=\"20,000\">\n            </div>\n\n            <div class=\"d-flex justify-content-end\">\n              <button (click)=\"backToTable()\" type=\"submit\" class=\"btn btn-secondary mr-2\">Batal</button>\n              <button type=\"submit\" class=\"btn btn-primary\">Simpan</button>\n            </div>\n          </div>\n        </div>\n      </form>\n    </app-card>\n  </div>\n</div>\n\n<div class=\"row\">\n  <div class=\"col-sm-12\">\n    <app-card cardTitle=\"Riwayat Harga\" [options]=\"false\">\n      <table class=\"table table-hover\">\n        <thead>\n        <tr>\n          <th>Tanggal</th>\n          <th>Nama Barang</th>\n          <th>Jenis Barang</th>\n          <th>Lokasi Penyimpanan</th>\n          <th class=\"text-right\" >Harga</th>\n        </tr>\n        </thead>\n        <tbody>\n        <tr>\n          <td>10 Juli 2025</td>\n          <td>Beras</td>\n          <td>Sembako</td>\n          <td>Gudang Utama</td>\n          <td class=\"text-right\" >20.000</td>\n        </tr>\n        <tr>\n          <td>8 Juli 2025</td>\n          <td>Gas Lpg 3kg</td>\n          <td>Gas</td>\n          <td>Gudang Utama</td>\n          <td class=\"text-right\"  >10.000</td>\n        </tr>\n        </tbody>\n      </table>\n    </app-card>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/demo/pages/sale/price-list/form-price-list/form-price-list-routing.module.ts":
/*!**********************************************************************************************!*\
  !*** ./src/app/demo/pages/sale/price-list/form-price-list/form-price-list-routing.module.ts ***!
  \**********************************************************************************************/
/*! exports provided: FormPriceListPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormPriceListPageRoutingModule", function() { return FormPriceListPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _form_price_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./form-price-list.component */ "./src/app/demo/pages/sale/price-list/form-price-list/form-price-list.component.ts");




var routes = [
    {
        path: '',
        component: _form_price_list_component__WEBPACK_IMPORTED_MODULE_3__["FormPriceListPageComponent"]
    }
];
var FormPriceListPageRoutingModule = /** @class */ (function () {
    function FormPriceListPageRoutingModule() {
    }
    FormPriceListPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], FormPriceListPageRoutingModule);
    return FormPriceListPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/demo/pages/sale/price-list/form-price-list/form-price-list.component.scss":
/*!*******************************************************************************************!*\
  !*** ./src/app/demo/pages/sale/price-list/form-price-list/form-price-list.component.scss ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RlbW8vcGFnZXMvc2FsZS9wcmljZS1saXN0L2Zvcm0tcHJpY2UtbGlzdC9mb3JtLXByaWNlLWxpc3QuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/demo/pages/sale/price-list/form-price-list/form-price-list.component.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/demo/pages/sale/price-list/form-price-list/form-price-list.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: FormPriceListPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormPriceListPageComponent", function() { return FormPriceListPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var FormPriceListPageComponent = /** @class */ (function () {
    function FormPriceListPageComponent(router) {
        this.router = router;
    }
    FormPriceListPageComponent.prototype.ngOnInit = function () {
    };
    FormPriceListPageComponent.prototype.backToTable = function () {
        this.router.navigate(['/sale/price-list']);
    };
    FormPriceListPageComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
    ]; };
    FormPriceListPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-form-price-list',
            template: __webpack_require__(/*! raw-loader!./form-price-list.component.html */ "./node_modules/raw-loader/index.js!./src/app/demo/pages/sale/price-list/form-price-list/form-price-list.component.html"),
            styles: [__webpack_require__(/*! ./form-price-list.component.scss */ "./src/app/demo/pages/sale/price-list/form-price-list/form-price-list.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], FormPriceListPageComponent);
    return FormPriceListPageComponent;
}());



/***/ }),

/***/ "./src/app/demo/pages/sale/price-list/form-price-list/form-price-list.module.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/demo/pages/sale/price-list/form-price-list/form-price-list.module.ts ***!
  \**************************************************************************************/
/*! exports provided: FormPriceListPagePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormPriceListPagePageModule", function() { return FormPriceListPagePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _form_price_list_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./form-price-list-routing.module */ "./src/app/demo/pages/sale/price-list/form-price-list/form-price-list-routing.module.ts");
/* harmony import */ var _form_price_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./form-price-list.component */ "./src/app/demo/pages/sale/price-list/form-price-list/form-price-list.component.ts");
/* harmony import */ var _theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../theme/shared/shared.module */ "./src/app/theme/shared/shared.module.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");







var FormPriceListPagePageModule = /** @class */ (function () {
    function FormPriceListPagePageModule() {
    }
    FormPriceListPagePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_form_price_list_component__WEBPACK_IMPORTED_MODULE_4__["FormPriceListPageComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _form_price_list_routing_module__WEBPACK_IMPORTED_MODULE_3__["FormPriceListPageRoutingModule"],
                _theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbButtonsModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbPaginationModule"],
            ]
        })
    ], FormPriceListPagePageModule);
    return FormPriceListPagePageModule;
}());



/***/ })

}]);
//# sourceMappingURL=form-price-list-form-price-list-module-es5.js.map