(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["form-supply-request-form-supply-request-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/demo/pages/supply-request/form-supply-request/form-supply-request.component.html":
/*!****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/demo/pages/supply-request/form-supply-request/form-supply-request.component.html ***!
  \****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-sm-12\">\n    <app-card [hidHeader]=\"true\" [options]=\"false\">\n      <form >\n      <div class=\"row\">\n        <div class=\"col-md-12\">\n            <div class=\"form-group\">\n              <label for=\"exampleFormControlSelect1\">Jenis Produk</label>\n              <select class=\"form-control\" id=\"exampleFormControlSelect1\">\n                <option disabled>Pilih jenis produk</option>\n                <option>Sembako</option>\n                <option>Gas</option>\n                <option>BBM</option>\n                <option>Obat</option>\n                <option>Alat Tani</option>\n              </select>\n            </div>\n            <div class=\"form-group\">\n              <label>Nama Produk</label>\n              <input type=\"text\" class=\"form-control\" placeholder=\"Nama\">\n            </div>\n            <div class=\"form-group\">\n              <label>Jumlah</label>\n              <input type=\"number\" class=\"form-control\" placeholder=\"0\">\n            </div>\n            <div class=\"form-group\">\n              <label for=\"exampleFormControlTextarea1\">Catatan</label>\n              <textarea class=\"form-control\" id=\"exampleFormControlTextarea1\" rows=\"3\"></textarea>\n            </div>\n            <div class=\"d-flex justify-content-end\" >\n              <button (click)=\"backToTable()\" type=\"submit\" class=\"btn btn-secondary mr-2\">Batal</button>\n              <button type=\"submit\" class=\"btn btn-primary\">Simpan</button>\n            </div>\n          </div>\n        </div>\n      </form>\n    </app-card>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/demo/pages/supply-request/form-supply-request/form-supply-request-routing.module.ts":
/*!*****************************************************************************************************!*\
  !*** ./src/app/demo/pages/supply-request/form-supply-request/form-supply-request-routing.module.ts ***!
  \*****************************************************************************************************/
/*! exports provided: FormSupplyRequestPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormSupplyRequestPageRoutingModule", function() { return FormSupplyRequestPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _form_supply_request_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./form-supply-request.component */ "./src/app/demo/pages/supply-request/form-supply-request/form-supply-request.component.ts");




var routes = [
    {
        path: '',
        component: _form_supply_request_component__WEBPACK_IMPORTED_MODULE_3__["FormSupplyRequestPageComponent"]
    }
];
var FormSupplyRequestPageRoutingModule = /** @class */ (function () {
    function FormSupplyRequestPageRoutingModule() {
    }
    FormSupplyRequestPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], FormSupplyRequestPageRoutingModule);
    return FormSupplyRequestPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/demo/pages/supply-request/form-supply-request/form-supply-request.component.scss":
/*!**************************************************************************************************!*\
  !*** ./src/app/demo/pages/supply-request/form-supply-request/form-supply-request.component.scss ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RlbW8vcGFnZXMvc3VwcGx5LXJlcXVlc3QvZm9ybS1zdXBwbHktcmVxdWVzdC9mb3JtLXN1cHBseS1yZXF1ZXN0LmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/demo/pages/supply-request/form-supply-request/form-supply-request.component.ts":
/*!************************************************************************************************!*\
  !*** ./src/app/demo/pages/supply-request/form-supply-request/form-supply-request.component.ts ***!
  \************************************************************************************************/
/*! exports provided: FormSupplyRequestPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormSupplyRequestPageComponent", function() { return FormSupplyRequestPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var FormSupplyRequestPageComponent = /** @class */ (function () {
    function FormSupplyRequestPageComponent(router) {
        this.router = router;
    }
    FormSupplyRequestPageComponent.prototype.ngOnInit = function () {
    };
    FormSupplyRequestPageComponent.prototype.backToTable = function () {
        this.router.navigate(['/supply-request']);
    };
    FormSupplyRequestPageComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
    ]; };
    FormSupplyRequestPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-form-supply-request',
            template: __webpack_require__(/*! raw-loader!./form-supply-request.component.html */ "./node_modules/raw-loader/index.js!./src/app/demo/pages/supply-request/form-supply-request/form-supply-request.component.html"),
            styles: [__webpack_require__(/*! ./form-supply-request.component.scss */ "./src/app/demo/pages/supply-request/form-supply-request/form-supply-request.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], FormSupplyRequestPageComponent);
    return FormSupplyRequestPageComponent;
}());



/***/ }),

/***/ "./src/app/demo/pages/supply-request/form-supply-request/form-supply-request.module.ts":
/*!*********************************************************************************************!*\
  !*** ./src/app/demo/pages/supply-request/form-supply-request/form-supply-request.module.ts ***!
  \*********************************************************************************************/
/*! exports provided: FormSupplyRequestPagePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormSupplyRequestPagePageModule", function() { return FormSupplyRequestPagePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _form_supply_request_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./form-supply-request-routing.module */ "./src/app/demo/pages/supply-request/form-supply-request/form-supply-request-routing.module.ts");
/* harmony import */ var _form_supply_request_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./form-supply-request.component */ "./src/app/demo/pages/supply-request/form-supply-request/form-supply-request.component.ts");
/* harmony import */ var _theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../theme/shared/shared.module */ "./src/app/theme/shared/shared.module.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");







var FormSupplyRequestPagePageModule = /** @class */ (function () {
    function FormSupplyRequestPagePageModule() {
    }
    FormSupplyRequestPagePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_form_supply_request_component__WEBPACK_IMPORTED_MODULE_4__["FormSupplyRequestPageComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _form_supply_request_routing_module__WEBPACK_IMPORTED_MODULE_3__["FormSupplyRequestPageRoutingModule"],
                _theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbButtonsModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbPaginationModule"],
            ]
        })
    ], FormSupplyRequestPagePageModule);
    return FormSupplyRequestPagePageModule;
}());



/***/ })

}]);
//# sourceMappingURL=form-supply-request-form-supply-request-module-es5.js.map