(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["auth-change-password-auth-change-password-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/demo/pages/authentication/auth-change-password/auth-change-password.component.html":
/*!******************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/demo/pages/authentication/auth-change-password/auth-change-password.component.html ***!
  \******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"auth-wrapper\">\n  <div class=\"blur-bg-images\"></div>\n  <!-- [ change-password ] start -->\n  <div class=\"auth-content\">\n    <div class=\"card\">\n      <div class=\"row align-items-center\">\n        <div class=\"col-md-12\">\n          <div class=\"card-body\">\n            <img src=\"assets/images/logo-dark.png\" alt=\"\" class=\"img-fluid mb-4\">\n            <h4 class=\"mb-4 f-w-400\">Change your password</h4>\n            <div class=\"input-group mb-2\">\n              <input type=\"password\" class=\"form-control\" placeholder=\"Current Password\">\n            </div>\n            <div class=\"input-group mb-2\">\n              <input type=\"password\" class=\"form-control\" placeholder=\"New Password\">\n            </div>\n            <div class=\"input-group mb-4\">\n              <input type=\"password\" class=\"form-control\" placeholder=\"Re-Type New Password\">\n            </div>\n            <button class=\"btn btn-block btn-primary mb-4\">Change password</button>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <!-- [ change-password ] end -->\n</div>\n"

/***/ }),

/***/ "./src/app/demo/pages/authentication/auth-change-password/auth-change-password-routing.module.ts":
/*!*******************************************************************************************************!*\
  !*** ./src/app/demo/pages/authentication/auth-change-password/auth-change-password-routing.module.ts ***!
  \*******************************************************************************************************/
/*! exports provided: AuthChangePasswordRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthChangePasswordRoutingModule", function() { return AuthChangePasswordRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _auth_change_password_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth-change-password.component */ "./src/app/demo/pages/authentication/auth-change-password/auth-change-password.component.ts");




var routes = [
    {
        path: '',
        component: _auth_change_password_component__WEBPACK_IMPORTED_MODULE_3__["AuthChangePasswordComponent"]
    }
];
var AuthChangePasswordRoutingModule = /** @class */ (function () {
    function AuthChangePasswordRoutingModule() {
    }
    AuthChangePasswordRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AuthChangePasswordRoutingModule);
    return AuthChangePasswordRoutingModule;
}());



/***/ }),

/***/ "./src/app/demo/pages/authentication/auth-change-password/auth-change-password.component.scss":
/*!****************************************************************************************************!*\
  !*** ./src/app/demo/pages/authentication/auth-change-password/auth-change-password.component.scss ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RlbW8vcGFnZXMvYXV0aGVudGljYXRpb24vYXV0aC1jaGFuZ2UtcGFzc3dvcmQvYXV0aC1jaGFuZ2UtcGFzc3dvcmQuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/demo/pages/authentication/auth-change-password/auth-change-password.component.ts":
/*!**************************************************************************************************!*\
  !*** ./src/app/demo/pages/authentication/auth-change-password/auth-change-password.component.ts ***!
  \**************************************************************************************************/
/*! exports provided: AuthChangePasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthChangePasswordComponent", function() { return AuthChangePasswordComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AuthChangePasswordComponent = /** @class */ (function () {
    function AuthChangePasswordComponent() {
    }
    AuthChangePasswordComponent.prototype.ngOnInit = function () {
    };
    AuthChangePasswordComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-auth-change-password',
            template: __webpack_require__(/*! raw-loader!./auth-change-password.component.html */ "./node_modules/raw-loader/index.js!./src/app/demo/pages/authentication/auth-change-password/auth-change-password.component.html"),
            styles: [__webpack_require__(/*! ./auth-change-password.component.scss */ "./src/app/demo/pages/authentication/auth-change-password/auth-change-password.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AuthChangePasswordComponent);
    return AuthChangePasswordComponent;
}());



/***/ }),

/***/ "./src/app/demo/pages/authentication/auth-change-password/auth-change-password.module.ts":
/*!***********************************************************************************************!*\
  !*** ./src/app/demo/pages/authentication/auth-change-password/auth-change-password.module.ts ***!
  \***********************************************************************************************/
/*! exports provided: AuthChangePasswordModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthChangePasswordModule", function() { return AuthChangePasswordModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _auth_change_password_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth-change-password-routing.module */ "./src/app/demo/pages/authentication/auth-change-password/auth-change-password-routing.module.ts");
/* harmony import */ var _auth_change_password_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./auth-change-password.component */ "./src/app/demo/pages/authentication/auth-change-password/auth-change-password.component.ts");





var AuthChangePasswordModule = /** @class */ (function () {
    function AuthChangePasswordModule() {
    }
    AuthChangePasswordModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _auth_change_password_routing_module__WEBPACK_IMPORTED_MODULE_3__["AuthChangePasswordRoutingModule"]
            ],
            declarations: [_auth_change_password_component__WEBPACK_IMPORTED_MODULE_4__["AuthChangePasswordComponent"]]
        })
    ], AuthChangePasswordModule);
    return AuthChangePasswordModule;
}());



/***/ })

}]);
//# sourceMappingURL=auth-change-password-auth-change-password-module-es5.js.map