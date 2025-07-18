(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["form-stock-form-stock-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/demo/pages/stock/form-stock/form-stock.component.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/demo/pages/stock/form-stock/form-stock.component.html ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-sm-12\">\n    <app-card [hidHeader]=\"true\" [options]=\"false\">\n      <form >\n      <div class=\"row\">\n        <div class=\"col-md-12\">\n          <div class=\"form-group\">\n            <label>Nama Barang</label>\n            <input type=\"text\" class=\"form-control\" placeholder=\"Nama\">\n          </div>\n            <div class=\"form-group\">\n              <label for=\"exampleFormControlSelect1\">Jenis Barang</label>\n              <select class=\"form-control\" id=\"exampleFormControlSelect1\">\n                <option disabled>Pilih jenis produk</option>\n                <option>Sembako</option>\n                <option>Gas</option>\n                <option>BBM</option>\n                <option>Obat</option>\n                <option>Alat Tani</option>\n              </select>\n            </div>\n            <div class=\"form-group\">\n              <label for=\"exampleFormControlSelect1\">Kategori</label>\n              <select class=\"form-control\" id=\"exampleFormControlSelect1\">\n                <option disabled>Pilih jenis kategori</option>\n                <option>Konsumsi</option>\n                <option>Alat</option>\n                <option>Bahan Baku</option>\n              </select>\n            </div>\n            <div class=\"form-group\">\n              <label>Jumlah</label>\n              <input type=\"number\" class=\"form-control\" placeholder=\"0\">\n            </div>\n            <div class=\"form-group\">\n              <label for=\"exampleFormControlSelect1\">Satuan</label>\n              <select class=\"form-control\" id=\"exampleFormControlSelect1\">\n                <option disabled>Pilih satuan</option>\n                <option>Kg</option>\n                <option>Liter</option>\n                <option>Unit</option>\n                <option>Pack</option>\n              </select>\n            </div>\n            <div class=\"d-flex justify-content-end\" >\n              <button (click)=\"backToTable()\" type=\"submit\" class=\"btn btn-secondary mr-2\">Batal</button>\n              <button type=\"submit\" class=\"btn btn-primary\">Simpan</button>\n            </div>\n          </div>\n        </div>\n      </form>\n    </app-card>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/demo/pages/stock/form-stock/form-stock-routing.module.ts":
/*!**************************************************************************!*\
  !*** ./src/app/demo/pages/stock/form-stock/form-stock-routing.module.ts ***!
  \**************************************************************************/
/*! exports provided: FormStockPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormStockPageRoutingModule", function() { return FormStockPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _form_stock_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./form-stock.component */ "./src/app/demo/pages/stock/form-stock/form-stock.component.ts");




const routes = [
    {
        path: '',
        component: _form_stock_component__WEBPACK_IMPORTED_MODULE_3__["FormStockPageComponent"]
    }
];
let FormStockPageRoutingModule = class FormStockPageRoutingModule {
};
FormStockPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], FormStockPageRoutingModule);



/***/ }),

/***/ "./src/app/demo/pages/stock/form-stock/form-stock.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/demo/pages/stock/form-stock/form-stock.component.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RlbW8vcGFnZXMvc3RvY2svZm9ybS1zdG9jay9mb3JtLXN0b2NrLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/demo/pages/stock/form-stock/form-stock.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/demo/pages/stock/form-stock/form-stock.component.ts ***!
  \*********************************************************************/
/*! exports provided: FormStockPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormStockPageComponent", function() { return FormStockPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



let FormStockPageComponent = class FormStockPageComponent {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() {
    }
    backToTable() {
        this.router.navigate(['/stock']);
    }
};
FormStockPageComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
FormStockPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-form-stock',
        template: __webpack_require__(/*! raw-loader!./form-stock.component.html */ "./node_modules/raw-loader/index.js!./src/app/demo/pages/stock/form-stock/form-stock.component.html"),
        styles: [__webpack_require__(/*! ./form-stock.component.scss */ "./src/app/demo/pages/stock/form-stock/form-stock.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
], FormStockPageComponent);



/***/ }),

/***/ "./src/app/demo/pages/stock/form-stock/form-stock.module.ts":
/*!******************************************************************!*\
  !*** ./src/app/demo/pages/stock/form-stock/form-stock.module.ts ***!
  \******************************************************************/
/*! exports provided: FormStockPagePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormStockPagePageModule", function() { return FormStockPagePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _form_stock_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./form-stock-routing.module */ "./src/app/demo/pages/stock/form-stock/form-stock-routing.module.ts");
/* harmony import */ var _form_stock_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./form-stock.component */ "./src/app/demo/pages/stock/form-stock/form-stock.component.ts");
/* harmony import */ var _theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../theme/shared/shared.module */ "./src/app/theme/shared/shared.module.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");







let FormStockPagePageModule = class FormStockPagePageModule {
};
FormStockPagePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_form_stock_component__WEBPACK_IMPORTED_MODULE_4__["FormStockPageComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _form_stock_routing_module__WEBPACK_IMPORTED_MODULE_3__["FormStockPageRoutingModule"],
            _theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbButtonsModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbPaginationModule"],
        ]
    })
], FormStockPagePageModule);



/***/ })

}]);
//# sourceMappingURL=form-stock-form-stock-module-es2015.js.map