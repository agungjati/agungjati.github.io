(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["history-sale-history-sale-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/demo/pages/sale/history-sale/history-sale.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/demo/pages/sale/history-sale/history-sale.component.html ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-sm-12\">\n    <app-card [hidHeader]=\"true\" [options]=\"false\">\n      <div class=\"d-flex\">\n        <button class=\"btn btn-primary mb-2 ml-auto\" type=\"button\">\n          <i class=\"feather icon-download mr-2\"></i>\n          <span>Download Report</span>\n        </button>\n      </div>\n      <table class=\"table table-hover\">\n        <thead>\n        <tr>\n          <th width=\"100\" >Tanggal</th>\n          <th>Nama Pelanggan</th>\n          <th>Produk</th>\n          <th class=\"text-right\" >Jumlah</th>\n          <th class=\"text-right\" >Harga</th>\n          <th class=\"text-right\" >Total</th>\n          <th width=\"80\" >Status</th>\n          <th width=\"120\" >&nbsp;</th>\n        </tr>\n        </thead>\n        <tbody>\n        <tr>\n          <td>15 Jul 2025</td>\n          <td>Budi Lesmana</td>\n          <td>Beras 5kg</td>\n          <td class=\"text-right\" >2</td>\n          <td class=\"text-right\" >65.000</td>\n          <td class=\"text-right\" >130.000</td>\n          <td>Berhasil</td>\n          <td>\n            <button (click)=\"printStruk()\" class=\"btn btn-icon btn-primary\" >\n              <i class=\"feather icon-printer\"></i>\n            </button>\n            <button class=\"btn btn-icon btn-danger\" >\n              <i class=\"feather icon-trash\"></i>\n            </button>\n          </td>\n        </tr>\n        <tr>\n          <td>15 Jul 2025</td>\n          <td>Siti Aminah</td>\n          <td>Minyak 2L</td>\n          <td class=\"text-right\" >1</td>\n          <td class=\"text-right\" >38.000</td>\n          <td class=\"text-right\" >38.000</td>\n          <td>Berhasil</td>\n          <td>\n            <button (click)=\"printStruk()\" class=\"btn btn-icon btn-primary\" >\n              <i class=\"feather icon-printer\"></i>\n            </button>\n            <button class=\"btn btn-icon btn-danger\" >\n              <i class=\"feather icon-trash\"></i>\n            </button>\n          </td>\n        </tr>\n        </tbody>\n      </table>\n      <div class=\"d-flex justify-content-end\">\n        <ngb-pagination [collectionSize]=\"20\" [page]=\"1\" aria-label=\"Default pagination\"></ngb-pagination>\n      </div>\n    </app-card>\n  </div>\n</div>\n\n<app-ui-modal #modalPrint [hideFooter]=\"true\" [dialogClass]=\"'modal-md'\">\n  <div class=\"app-modal-header\">\n    <h5 class=\"modal-title\">Struk Transaksi</h5>\n    <button type=\"button\" class=\"close basic-close\" data-dismiss=\"modal\" aria-label=\"Close\" (click)=\"myLargeModalLabel.hide()\"><span aria-hidden=\"true\">&times;</span></button>\n  </div>\n  <div class=\"app-modal-body\">\n    <div class=\"center bold\">KOPERASI MERAH PUTIH</div>\n    <div class=\"center\">Kel. Galang, Batam</div>\n    <div class=\"center\">Telp: 0812-xxxx-xxxx</div>\n    <hr>\n  \n    <table>\n      <tr>\n        <td>No. Transaksi</td>\n        <td>: TX-2025071501</td>\n      </tr>\n      <tr>\n        <td>Tanggal</td>\n        <td>: 15-07-2025 10:24</td>\n      </tr>\n      <tr>\n        <td>Pelanggan</td>\n        <td>: Budi Lesmana</td>\n      </tr>\n      <tr>\n        <td>Kasir</td>\n        <td>: Admin</td>\n      </tr>\n    </table>\n  \n    <hr>\n  \n    <table>\n      <tr>\n        <td>Beras 5kg</td>\n        <td style=\"text-align:right;\">2 x 20.000</td>\n      </tr>\n      <tr>\n        <td>Gas Lpg 3kg</td>\n        <td style=\"text-align:right;\">1 x 20.000</td>\n      </tr>\n    </table>\n  \n    <hr>\n  \n    <table>\n      <tr>\n        <td class=\"bold\">Subtotal</td>\n        <td style=\"text-align:right;\">60.000</td>\n      </tr>\n      <tr>\n        <td>Diskon</td>\n        <td style=\"text-align:right;\">0</td>\n      </tr>\n      <tr class=\"total\">\n        <td>Total</td>\n        <td style=\"text-align:right;\">60.000</td>\n      </tr>\n      <tr>\n        <td>Bayar (QRIS)</td>\n        <td style=\"text-align:right;\">60.000</td>\n      </tr>\n      <tr>\n        <td>Kembalian</td>\n        <td style=\"text-align:right;\">0</td>\n      </tr>\n    </table>\n  \n    <hr>\n  \n    <div class=\"center\">Barang diambil di toko</div>\n  \n    <div class=\"footer\">\n      --- Terima kasih ---<br>\n      Simpan struk ini sebagai bukti pembelian\n    </div>\n  </div>\n</app-ui-modal>"

/***/ }),

/***/ "./src/app/demo/pages/sale/history-sale/history-sale-routing.module.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/demo/pages/sale/history-sale/history-sale-routing.module.ts ***!
  \*****************************************************************************/
/*! exports provided: HistorySalePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HistorySalePageRoutingModule", function() { return HistorySalePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _history_sale_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./history-sale.component */ "./src/app/demo/pages/sale/history-sale/history-sale.component.ts");




var routes = [
    {
        path: '',
        component: _history_sale_component__WEBPACK_IMPORTED_MODULE_3__["HistorySalePageComponent"],
    },
];
var HistorySalePageRoutingModule = /** @class */ (function () {
    function HistorySalePageRoutingModule() {
    }
    HistorySalePageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], HistorySalePageRoutingModule);
    return HistorySalePageRoutingModule;
}());



/***/ }),

/***/ "./src/app/demo/pages/sale/history-sale/history-sale.component.scss":
/*!**************************************************************************!*\
  !*** ./src/app/demo/pages/sale/history-sale/history-sale.component.scss ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RlbW8vcGFnZXMvc2FsZS9oaXN0b3J5LXNhbGUvaGlzdG9yeS1zYWxlLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/demo/pages/sale/history-sale/history-sale.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/demo/pages/sale/history-sale/history-sale.component.ts ***!
  \************************************************************************/
/*! exports provided: HistorySalePageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HistorySalePageComponent", function() { return HistorySalePageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_theme_shared_components_modal_ui_modal_ui_modal_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/theme/shared/components/modal/ui-modal/ui-modal.component */ "./src/app/theme/shared/components/modal/ui-modal/ui-modal.component.ts");




var HistorySalePageComponent = /** @class */ (function () {
    function HistorySalePageComponent(router) {
        this.router = router;
    }
    HistorySalePageComponent.prototype.ngOnInit = function () {
    };
    HistorySalePageComponent.prototype.printStruk = function () {
        this.modalPrint.show(); // Show modal programmatically
    };
    HistorySalePageComponent.prototype.gotoForm = function () {
        this.router.navigate(['/stock/form']);
    };
    HistorySalePageComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('modalPrint', { static: true }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", src_app_theme_shared_components_modal_ui_modal_ui_modal_component__WEBPACK_IMPORTED_MODULE_3__["UiModalComponent"])
    ], HistorySalePageComponent.prototype, "modalPrint", void 0);
    HistorySalePageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-history-sale',
            template: __webpack_require__(/*! raw-loader!./history-sale.component.html */ "./node_modules/raw-loader/index.js!./src/app/demo/pages/sale/history-sale/history-sale.component.html"),
            styles: [__webpack_require__(/*! ./history-sale.component.scss */ "./src/app/demo/pages/sale/history-sale/history-sale.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], HistorySalePageComponent);
    return HistorySalePageComponent;
}());



/***/ }),

/***/ "./src/app/demo/pages/sale/history-sale/history-sale.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/demo/pages/sale/history-sale/history-sale.module.ts ***!
  \*********************************************************************/
/*! exports provided: HistorySalePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HistorySalePageModule", function() { return HistorySalePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _history_sale_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./history-sale-routing.module */ "./src/app/demo/pages/sale/history-sale/history-sale-routing.module.ts");
/* harmony import */ var _history_sale_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./history-sale.component */ "./src/app/demo/pages/sale/history-sale/history-sale.component.ts");
/* harmony import */ var _theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../theme/shared/shared.module */ "./src/app/theme/shared/shared.module.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");







var HistorySalePageModule = /** @class */ (function () {
    function HistorySalePageModule() {
    }
    HistorySalePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_history_sale_component__WEBPACK_IMPORTED_MODULE_4__["HistorySalePageComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _history_sale_routing_module__WEBPACK_IMPORTED_MODULE_3__["HistorySalePageRoutingModule"],
                _theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbButtonsModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbPaginationModule"],
            ]
        })
    ], HistorySalePageModule);
    return HistorySalePageModule;
}());



/***/ })

}]);
//# sourceMappingURL=history-sale-history-sale-module-es5.js.map