(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["demo-pages-sale-sale-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/demo/pages/sale/cashier/cashier.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/demo/pages/sale/cashier/cashier.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-sm-12\">\n    <app-card [hidHeader]=\"true\" [options]=\"false\">\n      <div class=\"row\">\n        <div class=\"col-sm-12\">\n            <form >\n            <div class=\"row\">\n              <div class=\"col-md-12\">\n                <div class=\"form-group\">\n                  <label>Kode Transaksi</label>\n                  <input type=\"text\" class=\"form-control\" placeholder=\"kode\">\n                </div>\n                <div class=\"form-group\">\n                  <label>Produk</label>\n                  <input\n                    id=\"typeahead-focus\"\n                    type=\"text\"\n                    class=\"form-control\"\n                    [(ngModel)]=\"model\"\n                    [ngbTypeahead]=\"search\"\n                    (focus)=\"focusProduct$.next($any($event).target.value)\"\n                    (click)=\"clickProduct$.next($any($event).target.value)\"\n                    #instance=\"ngbTypeahead\"\n                    [ngModelOptions]=\"{standalone: true}\"\n                  />\n                </div>\n                <div class=\"table-responsive\">\n                  <table class=\"table table-hover\">\n                    <thead>\n                    <tr>\n                      <th>Nama Barang</th>\n                      <th>Lokasi Penyimpanan</th>\n                      <th>Jumlah Stok</th>\n                      <th>Tgl. Kadaluarsa</th>\n                      <th width=\"100\" >Jumlah</th>\n                      <th class=\"text-right\" >Harga</th>\n                      <th class=\"text-right\" >Total</th>\n                      <th>&nbsp;</th>\n                    </tr>\n                    </thead>\n                    <tbody>\n                    <tr>\n                      <td>Beras</td>\n                      <td>Gudang Utama</td>\n                      <td>100 Kg</td>\n                      <td>10 Juli 2025</td>\n                      <td>\n                        <input class=\"form-control\" type=\"text\" value=\"2\" />\n                      </td>\n                      <td align=\"right\" >20.000</td>\n                      <td align=\"right\">40.000</td>\n                      <td>\n                        <button class=\"btn btn-icon btn-danger\" >\n                          <i class=\"feather icon-trash\"></i>\n                        </button>\n                      </td>\n                    </tr>\n                    <tr>\n                      <td>Gas Lpg 3kg</td>\n                      <td>Gudang Utama</td>\n                      <td>100 unit</td>\n                      <td>10 Juli 2025</td>\n                      <td>\n                        <input class=\"form-control\" type=\"text\" value=\"1\" />\n                      </td>\n                      <td align=\"right\" >20.000</td>\n                      <td align=\"right\" >20.000</td>\n                      <td>\n                        <button class=\"btn btn-icon btn-danger\" >\n                          <i class=\"feather icon-trash\"></i>\n                        </button>\n                      </td>\n                    </tr>\n                    </tbody>\n                  </table>\n                </div>\n                <div class=\"form-group\">\n                  <label>Pelanggan</label>\n                  <input\n                    id=\"typeahead-focus\"\n                    type=\"text\"\n                    class=\"form-control\"\n                    [(ngModel)]=\"model\"\n                    [ngbTypeahead]=\"searchCustomer\"\n                    (focus)=\"focusCust$.next($any($event).target.value)\"\n                    (click)=\"clickCust$.next($any($event).target.value)\"\n                    #instanceCust=\"ngbTypeahead\"\n                    [ngModelOptions]=\"{standalone: true}\"\n                  />\n                </div>\n                <div class=\"table-responsive\">\n                  <table class=\"table table-hover\">\n                    <thead>\n                    <tr>\n                      <th>Nama</th>\n                      <th>NIK</th>\n                      <th>Nomor HP</th>\n                      <th>Jenis Kelamin</th>\n                      <th>Pekerjaan</th>\n                      <th>Status</th>\n                      <th>&nbsp;</th>\n                    </tr>\n                    </thead>\n                    <tbody>\n                    <tr>\n                      <td>Siti Aminah</td>\n                      <td>3271111111111</td>\n                      <td>081200000000</td>\n                      <td>Perempuan</td>\n                      <td>Nelayan</td>\n                      <td>Aktif</td>\n                      <td>\n                        <button class=\"btn btn-icon btn-danger\" >\n                          <i class=\"feather icon-trash\"></i>\n                        </button>\n                      </td>\n                    </tr>\n                    </tbody>\n                  </table>\n                </div>\n                <div class=\"form-group col-md-4\">\n                  <label>Diskon</label>\n                  <input type=\"text\" class=\"form-control\" placeholder=\"diskon\">\n                </div>\n                <div class=\"form-group col-md-4\">\n                  <label>Pajak</label>\n                  <input type=\"text\" class=\"form-control\" placeholder=\"pajak\">\n                </div>\n                <hr />\n                <div class=\"d-flex align-itemc-center justify-content-between\" >\n                  <label class=\"ft-18\" >Sub total</label>\n                  <strong class=\"ft-18\" >60.000</strong>\n                </div>\n                <div class=\"d-flex align-itemc-center justify-content-between\" >\n                  <label class=\"ft-18\" >Diskon</label>\n                  <strong class=\"ft-18\" >0</strong>\n                </div>\n                <div class=\"d-flex align-itemc-center justify-content-between\" >\n                  <label class=\"ft-18\" >Pajak</label>\n                  <strong class=\"ft-18\" >0</strong>\n                </div>\n                <div class=\"d-flex align-itemc-center justify-content-between\" >\n                  <label class=\"ft-18\" >Total</label>\n                  <strong class=\"ft-18\" >60.000</strong>\n                </div>\n                <hr />\n                  <div class=\"d-flex justify-content-end\" >\n                    <button type=\"submit\" class=\"btn btn-primary\" (click)=\"openModal()\" >Simpan</button>\n                  </div>\n                </div>\n              </div>\n            </form>\n        </div>\n      </div>      \n    </app-card>\n  </div>\n</div>\n<app-ui-modal #myLargeModalLabel [hideFooter]=\"true\" [dialogClass]=\"'modal-md'\">\n  <div class=\"app-modal-header\">\n    <h5 class=\"modal-title\">Struk Transaksi</h5>\n    <button type=\"button\" class=\"close basic-close\" data-dismiss=\"modal\" aria-label=\"Close\" (click)=\"myLargeModalLabel.hide()\"><span aria-hidden=\"true\">&times;</span></button>\n  </div>\n  <div class=\"app-modal-body\">\n    <div class=\"center bold\">KOPERASI MERAH PUTIH</div>\n    <div class=\"center\">Kel. Galang, Batam</div>\n    <div class=\"center\">Telp: 0812-xxxx-xxxx</div>\n    <hr>\n  \n    <table>\n      <tr>\n        <td>No. Transaksi</td>\n        <td>: TX-2025071501</td>\n      </tr>\n      <tr>\n        <td>Tanggal</td>\n        <td>: 15-07-2025 10:24</td>\n      </tr>\n      <tr>\n        <td>Pelanggan</td>\n        <td>: Budi Lesmana</td>\n      </tr>\n      <tr>\n        <td>Kasir</td>\n        <td>: Admin</td>\n      </tr>\n    </table>\n  \n    <hr>\n  \n    <table>\n      <tr>\n        <td>Beras 5kg</td>\n        <td style=\"text-align:right;\">2 x 20.000</td>\n      </tr>\n      <tr>\n        <td>Gas Lpg 3kg</td>\n        <td style=\"text-align:right;\">1 x 20.000</td>\n      </tr>\n    </table>\n  \n    <hr>\n  \n    <table>\n      <tr>\n        <td class=\"bold\">Subtotal</td>\n        <td style=\"text-align:right;\">60.000</td>\n      </tr>\n      <tr>\n        <td>Diskon</td>\n        <td style=\"text-align:right;\">0</td>\n      </tr>\n      <tr class=\"total\">\n        <td>Total</td>\n        <td style=\"text-align:right;\">60.000</td>\n      </tr>\n      <tr>\n        <td>Bayar (QRIS)</td>\n        <td style=\"text-align:right;\">60.000</td>\n      </tr>\n      <tr>\n        <td>Kembalian</td>\n        <td style=\"text-align:right;\">0</td>\n      </tr>\n    </table>\n  \n    <hr>\n  \n    <div class=\"center\">Barang diambil di toko</div>\n  \n    <div class=\"footer\">\n      --- Terima kasih ---<br>\n      Simpan struk ini sebagai bukti pembelian\n    </div>\n  </div>\n</app-ui-modal>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/demo/pages/sale/sale.component.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/demo/pages/sale/sale.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/demo/pages/sale/cashier/cashier-routing.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/demo/pages/sale/cashier/cashier-routing.module.ts ***!
  \*******************************************************************/
/*! exports provided: CashierRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CashierRoutingModule", function() { return CashierRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _cashier_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./cashier.component */ "./src/app/demo/pages/sale/cashier/cashier.component.ts");




const routes = [
    {
        path: '',
        component: _cashier_component__WEBPACK_IMPORTED_MODULE_3__["CashierPageComponent"],
    },
];
let CashierRoutingModule = class CashierRoutingModule {
};
CashierRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], CashierRoutingModule);



/***/ }),

/***/ "./src/app/demo/pages/sale/cashier/cashier.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/demo/pages/sale/cashier/cashier.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".ft-18 {\n  font-size: 18px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGVtby9wYWdlcy9zYWxlL2Nhc2hpZXIvQzpcXFVzZXJzXFxhZ3VuZ1xcRG9jdW1lbnRzXFxrb3BlcmFzaVxcZnJvbnRlbmQta29wL3NyY1xcYXBwXFxkZW1vXFxwYWdlc1xcc2FsZVxcY2FzaGllclxcY2FzaGllci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGVBQWUsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2RlbW8vcGFnZXMvc2FsZS9jYXNoaWVyL2Nhc2hpZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZnQtMTgge1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/demo/pages/sale/cashier/cashier.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/demo/pages/sale/cashier/cashier.component.ts ***!
  \**************************************************************/
/*! exports provided: CashierPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CashierPageComponent", function() { return CashierPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _theme_shared_components_modal_ui_modal_ui_modal_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../theme/shared/components/modal/ui-modal/ui-modal.component */ "./src/app/theme/shared/components/modal/ui-modal/ui-modal.component.ts");






const states = ['Alabama', 'Alaska', 'American Samoa', 'Arizona', 'Arkansas', 'California', 'Colorado',
    'Connecticut', 'Delaware', 'District Of Columbia', 'Federated States Of Micronesia', 'Florida', 'Georgia',
    'Guam', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine',
    'Marshall Islands', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana',
    'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico', 'New York', 'North Carolina', 'North Dakota',
    'Northern Mariana Islands', 'Ohio', 'Oklahoma', 'Oregon', 'Palau', 'Pennsylvania', 'Puerto Rico', 'Rhode Island',
    'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virgin Islands', 'Virginia',
    'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'];
let CashierPageComponent = class CashierPageComponent {
    constructor() {
        this.model = '';
        this.focusProduct$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.clickProduct$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.focusCust$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.clickCust$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.search = (text$) => {
            const debouncedText$ = text$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["debounceTime"])(200), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["distinctUntilChanged"])());
            const clicksWithClosedPopup$ = this.clickProduct$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])(() => !this.instance.isPopupOpen()));
            const inputFocus$ = this.focusProduct$;
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["merge"])(debouncedText$, inputFocus$, clicksWithClosedPopup$).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(term => (term === '' ? states
                : states.filter(v => v.toLowerCase().indexOf(term.toLowerCase()) > -1)).slice(0, 10)));
        };
        this.searchCustomer = (text$) => {
            const debouncedText$ = text$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["debounceTime"])(200), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["distinctUntilChanged"])());
            const clicksWithClosedPopup$ = this.clickCust$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])(() => !this.instance.isPopupOpen()));
            const inputFocus$ = this.focusCust$;
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["merge"])(debouncedText$, inputFocus$, clicksWithClosedPopup$).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(term => (term === '' ? states
                : states.filter(v => v.toLowerCase().indexOf(term.toLowerCase()) > -1)).slice(0, 10)));
        };
    }
    openModal() {
        this.myLargeModalLabel.show(); // Show modal programmatically
    }
    closeModal() {
        this.myLargeModalLabel.hide(); // Hide modal programmatically
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('instance', { static: true }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbTypeahead"])
], CashierPageComponent.prototype, "instance", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('instanceCust', { static: true }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbTypeahead"])
], CashierPageComponent.prototype, "instanceCust", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('myLargeModalLabel', { static: true }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _theme_shared_components_modal_ui_modal_ui_modal_component__WEBPACK_IMPORTED_MODULE_5__["UiModalComponent"])
], CashierPageComponent.prototype, "myLargeModalLabel", void 0);
CashierPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-cashier',
        template: __webpack_require__(/*! raw-loader!./cashier.component.html */ "./node_modules/raw-loader/index.js!./src/app/demo/pages/sale/cashier/cashier.component.html"),
        styles: [__webpack_require__(/*! ./cashier.component.scss */ "./src/app/demo/pages/sale/cashier/cashier.component.scss")]
    })
], CashierPageComponent);



/***/ }),

/***/ "./src/app/demo/pages/sale/cashier/cashier.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/demo/pages/sale/cashier/cashier.module.ts ***!
  \***********************************************************/
/*! exports provided: CashierPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CashierPageModule", function() { return CashierPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _cashier_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./cashier-routing.module */ "./src/app/demo/pages/sale/cashier/cashier-routing.module.ts");
/* harmony import */ var _cashier_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./cashier.component */ "./src/app/demo/pages/sale/cashier/cashier.component.ts");
/* harmony import */ var _theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../theme/shared/shared.module */ "./src/app/theme/shared/shared.module.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");







let CashierPageModule = class CashierPageModule {
};
CashierPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_cashier_component__WEBPACK_IMPORTED_MODULE_4__["CashierPageComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _cashier_routing_module__WEBPACK_IMPORTED_MODULE_3__["CashierRoutingModule"],
            _theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbButtonsModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbPaginationModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbPopoverModule"],
        ]
    })
], CashierPageModule);



/***/ }),

/***/ "./src/app/demo/pages/sale/sale-routing.module.ts":
/*!********************************************************!*\
  !*** ./src/app/demo/pages/sale/sale-routing.module.ts ***!
  \********************************************************/
/*! exports provided: SaleRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SaleRoutingModule", function() { return SaleRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _cashier_cashier_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./cashier/cashier.component */ "./src/app/demo/pages/sale/cashier/cashier.component.ts");
/* harmony import */ var _sale_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./sale.component */ "./src/app/demo/pages/sale/sale.component.ts");





const routes = [
    {
        path: '',
        component: _sale_component__WEBPACK_IMPORTED_MODULE_4__["SalePageComponent"],
        children: [
            {
                path: '',
                component: _cashier_cashier_component__WEBPACK_IMPORTED_MODULE_3__["CashierPageComponent"],
            },
            {
                path: 'cashier',
                component: _cashier_cashier_component__WEBPACK_IMPORTED_MODULE_3__["CashierPageComponent"],
            },
            {
                path: 'history',
                loadChildren: () => __webpack_require__.e(/*! import() | history-sale-history-sale-module */ "history-sale-history-sale-module").then(__webpack_require__.bind(null, /*! ./history-sale/history-sale.module */ "./src/app/demo/pages/sale/history-sale/history-sale.module.ts"))
                    .then(module => module.HistorySalePageModule)
            },
            {
                path: 'price-list',
                loadChildren: () => __webpack_require__.e(/*! import() | price-list-price-list-module */ "price-list-price-list-module").then(__webpack_require__.bind(null, /*! ./price-list/price-list.module */ "./src/app/demo/pages/sale/price-list/price-list.module.ts"))
                    .then(module => module.PriceListPageModule)
            }
        ]
    },
];
let SaleRoutingModule = class SaleRoutingModule {
};
SaleRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], SaleRoutingModule);



/***/ }),

/***/ "./src/app/demo/pages/sale/sale.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/demo/pages/sale/sale.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".ft-18 {\n  font-size: 18px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGVtby9wYWdlcy9zYWxlL0M6XFxVc2Vyc1xcYWd1bmdcXERvY3VtZW50c1xca29wZXJhc2lcXGZyb250ZW5kLWtvcC9zcmNcXGFwcFxcZGVtb1xccGFnZXNcXHNhbGVcXHNhbGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxlQUFlLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9kZW1vL3BhZ2VzL3NhbGUvc2FsZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mdC0xOCB7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/demo/pages/sale/sale.component.ts":
/*!***************************************************!*\
  !*** ./src/app/demo/pages/sale/sale.component.ts ***!
  \***************************************************/
/*! exports provided: SalePageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SalePageComponent", function() { return SalePageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let SalePageComponent = class SalePageComponent {
};
SalePageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-sale',
        template: __webpack_require__(/*! raw-loader!./sale.component.html */ "./node_modules/raw-loader/index.js!./src/app/demo/pages/sale/sale.component.html"),
        styles: [__webpack_require__(/*! ./sale.component.scss */ "./src/app/demo/pages/sale/sale.component.scss")]
    })
], SalePageComponent);



/***/ }),

/***/ "./src/app/demo/pages/sale/sale.module.ts":
/*!************************************************!*\
  !*** ./src/app/demo/pages/sale/sale.module.ts ***!
  \************************************************/
/*! exports provided: SalePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SalePageModule", function() { return SalePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _sale_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sale-routing.module */ "./src/app/demo/pages/sale/sale-routing.module.ts");
/* harmony import */ var _sale_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./sale.component */ "./src/app/demo/pages/sale/sale.component.ts");
/* harmony import */ var _theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../theme/shared/shared.module */ "./src/app/theme/shared/shared.module.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var _cashier_cashier_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./cashier/cashier.module */ "./src/app/demo/pages/sale/cashier/cashier.module.ts");








let SalePageModule = class SalePageModule {
};
SalePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_sale_component__WEBPACK_IMPORTED_MODULE_4__["SalePageComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _sale_routing_module__WEBPACK_IMPORTED_MODULE_3__["SaleRoutingModule"],
            _theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbButtonsModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbPaginationModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbPopoverModule"],
            _cashier_cashier_module__WEBPACK_IMPORTED_MODULE_7__["CashierPageModule"],
        ]
    })
], SalePageModule);



/***/ })

}]);
//# sourceMappingURL=demo-pages-sale-sale-module-es2015.js.map