(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["form-member-form-member-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/demo/pages/member/form-member/form-member.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/demo/pages/member/form-member/form-member.component.html ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-sm-12\">\n    <app-card [hidHeader]=\"true\" [options]=\"false\">\n      <form >\n      <div class=\"row\">\n        <div class=\"col-md-12\">\n          <div class=\"form-group\">\n            <label>Nama Lengkap</label>\n            <input type=\"text\" class=\"form-control\" placeholder=\"Nama\">\n          </div>\n          <div class=\"form-group\">\n            <label>NIK</label>\n            <input type=\"text\" class=\"form-control\" placeholder=\"NIK\">\n          </div>\n          <div class=\"form-group\">\n            <label>Nomor HP</label>\n            <input type=\"text\" class=\"form-control\" placeholder=\"Nomor HP\">\n          </div>\n            <div class=\"form-group\">\n              <label for=\"exampleFormControlSelect1\">Jenis Kelamin</label>\n              <select class=\"form-control\" id=\"exampleFormControlSelect1\">\n                <option disabled>Pilih jenis kelamin</option>\n                <option>Laki-laki</option>\n                <option>Perempuan</option>\n              </select>\n            </div>\n            <div class=\"form-group\">\n              <label for=\"exampleFormControlSelect1\">Pekerjaan</label>\n              <select class=\"form-control\" id=\"exampleFormControlSelect1\">\n                <option disabled>Pilih pekerjaan</option>\n                <option>Petani</option>\n                <option>Nelayan</option>\n                <option>Pedagang</option>\n                <option>Lainya</option>\n              </select>\n            </div>\n            <div class=\"d-flex justify-content-end\" >\n              <button (click)=\"backToTable()\" type=\"submit\" class=\"btn btn-secondary mr-2\">Batal</button>\n              <button type=\"submit\" class=\"btn btn-primary\">Simpan</button>\n            </div>\n          </div>\n        </div>\n      </form>\n    </app-card>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/demo/pages/member/form-member/form-member-routing.module.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/demo/pages/member/form-member/form-member-routing.module.ts ***!
  \*****************************************************************************/
/*! exports provided: FormStockPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormStockPageRoutingModule", function() { return FormStockPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _form_member_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./form-member.component */ "./src/app/demo/pages/member/form-member/form-member.component.ts");




var routes = [
    {
        path: '',
        component: _form_member_component__WEBPACK_IMPORTED_MODULE_3__["FormMemberPageComponent"]
    }
];
var FormStockPageRoutingModule = /** @class */ (function () {
    function FormStockPageRoutingModule() {
    }
    FormStockPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], FormStockPageRoutingModule);
    return FormStockPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/demo/pages/member/form-member/form-member.component.scss":
/*!**************************************************************************!*\
  !*** ./src/app/demo/pages/member/form-member/form-member.component.scss ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RlbW8vcGFnZXMvbWVtYmVyL2Zvcm0tbWVtYmVyL2Zvcm0tbWVtYmVyLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/demo/pages/member/form-member/form-member.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/demo/pages/member/form-member/form-member.component.ts ***!
  \************************************************************************/
/*! exports provided: FormMemberPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormMemberPageComponent", function() { return FormMemberPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var FormMemberPageComponent = /** @class */ (function () {
    function FormMemberPageComponent(router) {
        this.router = router;
    }
    FormMemberPageComponent.prototype.ngOnInit = function () {
    };
    FormMemberPageComponent.prototype.backToTable = function () {
        this.router.navigate(['/member']);
    };
    FormMemberPageComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
    ]; };
    FormMemberPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-form-member',
            template: __webpack_require__(/*! raw-loader!./form-member.component.html */ "./node_modules/raw-loader/index.js!./src/app/demo/pages/member/form-member/form-member.component.html"),
            styles: [__webpack_require__(/*! ./form-member.component.scss */ "./src/app/demo/pages/member/form-member/form-member.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], FormMemberPageComponent);
    return FormMemberPageComponent;
}());



/***/ }),

/***/ "./src/app/demo/pages/member/form-member/form-member.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/demo/pages/member/form-member/form-member.module.ts ***!
  \*********************************************************************/
/*! exports provided: FormStockPagePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormStockPagePageModule", function() { return FormStockPagePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _form_member_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./form-member-routing.module */ "./src/app/demo/pages/member/form-member/form-member-routing.module.ts");
/* harmony import */ var _form_member_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./form-member.component */ "./src/app/demo/pages/member/form-member/form-member.component.ts");
/* harmony import */ var _theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../theme/shared/shared.module */ "./src/app/theme/shared/shared.module.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");







var FormStockPagePageModule = /** @class */ (function () {
    function FormStockPagePageModule() {
    }
    FormStockPagePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_form_member_component__WEBPACK_IMPORTED_MODULE_4__["FormMemberPageComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _form_member_routing_module__WEBPACK_IMPORTED_MODULE_3__["FormStockPageRoutingModule"],
                _theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbButtonsModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbPaginationModule"],
            ]
        })
    ], FormStockPagePageModule);
    return FormStockPagePageModule;
}());



/***/ })

}]);
//# sourceMappingURL=form-member-form-member-module-es5.js.map