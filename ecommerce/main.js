(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _product_list_product_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./product-list/product-list.component */ "./src/app/product-list/product-list.component.ts");
/* harmony import */ var _cart_cart_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./cart/cart.component */ "./src/app/cart/cart.component.ts");





var routes = [
    {
        path: '',
        component: _product_list_product_list_component__WEBPACK_IMPORTED_MODULE_3__["ProductListComponent"]
    },
    {
        path: 'cart',
        component: _cart_cart_component__WEBPACK_IMPORTED_MODULE_4__["CartComponent"]
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'ecommerce';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _stores_common_reducer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./stores/common.reducer */ "./src/app/stores/common.reducer.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _product_list_product_list_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./product-list/product-list.component */ "./src/app/product-list/product-list.component.ts");
/* harmony import */ var _cart_cart_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./cart/cart.component */ "./src/app/cart/cart.component.ts");
/* harmony import */ var _shared_header_header_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./shared/header/header.component */ "./src/app/shared/header/header.component.ts");
/* harmony import */ var _shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./shared/footer/footer.component */ "./src/app/shared/footer/footer.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/esm5/list.es5.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/esm5/card.es5.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm5/button.es5.js");
/* harmony import */ var _angular_material_badge__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/badge */ "./node_modules/@angular/material/esm5/badge.es5.js");
/* harmony import */ var _product_card_product_card_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./product-card/product-card.component */ "./src/app/product-card/product-card.component.ts");
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/chips */ "./node_modules/@angular/material/esm5/chips.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/esm5/form-field.es5.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");






















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _product_list_product_list_component__WEBPACK_IMPORTED_MODULE_7__["ProductListComponent"],
                _cart_cart_component__WEBPACK_IMPORTED_MODULE_8__["CartComponent"],
                _shared_header_header_component__WEBPACK_IMPORTED_MODULE_9__["HeaderComponent"],
                _shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_10__["FooterComponent"],
                _product_card_product_card_component__WEBPACK_IMPORTED_MODULE_17__["ProductCardComponent"]
            ],
            imports: [
                _angular_forms__WEBPACK_IMPORTED_MODULE_19__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_19__["ReactiveFormsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_21__["MatInputModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_material_card__WEBPACK_IMPORTED_MODULE_14__["MatCardModule"],
                _angular_material_list__WEBPACK_IMPORTED_MODULE_13__["MatListModule"],
                _angular_material_chips__WEBPACK_IMPORTED_MODULE_18__["MatChipsModule"],
                _angular_material_badge__WEBPACK_IMPORTED_MODULE_16__["MatBadgeModule"],
                _angular_material_button__WEBPACK_IMPORTED_MODULE_15__["MatButtonModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HttpClientModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
                _angular_material_form_field__WEBPACK_IMPORTED_MODULE_20__["MatFormFieldModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__["BrowserAnimationsModule"],
                _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["StoreModule"].forRoot({ store: _stores_common_reducer__WEBPACK_IMPORTED_MODULE_4__["commonReducer"] }),
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/cart/cart.component.css":
/*!*****************************************!*\
  !*** ./src/app/cart/cart.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".top-align {\n  display: flex;\n  padding-top: 10%;\n  justify-content: center;\n}\n\n.total-price {\n  text-align: center;\n  padding-top: 5%;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2FydC9jYXJ0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFhO0VBQ2IsZ0JBQWdCO0VBQ2hCLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixlQUFlO0FBQ2pCIiwiZmlsZSI6InNyYy9hcHAvY2FydC9jYXJ0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudG9wLWFsaWduIHtcbiAgZGlzcGxheTogZmxleDtcbiAgcGFkZGluZy10b3A6IDEwJTtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi50b3RhbC1wcmljZSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZy10b3A6IDUlO1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/cart/cart.component.html":
/*!******************************************!*\
  !*** ./src/app/cart/cart.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-list role=\"list\" class=\"list-top\" *ngIf=\"productListData.length\">\n  <app-product-card\n    (totalPrice)=\"calculateFinalPrice($event)\"\n    (deletedItem)=\"deletedItemFromCart($event)\"\n    [isCartPageRnedered]=\"true\"\n    [productList]=\"productListData\"\n    [quantity]=\"productQuantityCount\"\n    class=\"card-container\"\n  ></app-product-card>\n</mat-list>\n<h3 class=\"total-price\" *ngIf=\"productListData.length\">\n  Grand Total ₹ {{ totalPrice }}\n</h3>\n<div class=\"top-align\" *ngIf=\"!productListData.length\">\n  <img src=\"../../assets/images/data-not-found.png\" />\n</div>\n"

/***/ }),

/***/ "./src/app/cart/cart.component.ts":
/*!****************************************!*\
  !*** ./src/app/cart/cart.component.ts ***!
  \****************************************/
/*! exports provided: CartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartComponent", function() { return CartComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_constants_store_keys_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/constants/store-keys.constants */ "./src/app/shared/constants/store-keys.constants.ts");
/* harmony import */ var _services_store_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/store.service */ "./src/app/services/store.service.ts");




var CartComponent = /** @class */ (function () {
    function CartComponent(_storeService) {
        this._storeService = _storeService;
        this.totalPrice = 0;
        this.priceMapping = {};
        this.productQuantityCount = {};
        this.productListData = [];
    }
    CartComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._storeService.getFromStore(_shared_constants_store_keys_constants__WEBPACK_IMPORTED_MODULE_2__["StoreKeys"].products_in_cart).subscribe(function (data) {
            _this.productListData = data;
            if (_this.productListData.length)
                _this.calculateIntialPrice(_this.productListData);
            _this.getProductQuantity(_this.productListData);
        });
    };
    CartComponent.prototype.calculateFinalPrice = function ($event) {
        for (var key in $event) {
            this.priceMapping[key] = $event[key];
        }
        this.sumTotalCartValue(this.priceMapping);
    };
    CartComponent.prototype.deletedItemFromCart = function ($event) {
        delete this.priceMapping[$event];
        this.sumTotalCartValue(this.priceMapping);
    };
    CartComponent.prototype.sumTotalCartValue = function (priceMap) {
        var _sum = Object.values(priceMap);
        this.totalPrice = _sum.reduce(function (a, b) { return a + b; });
    };
    CartComponent.prototype.calculateIntialPrice = function (productList) {
        for (var i = 0; i < productList.length; i++) {
            this.priceMapping[productList[i].id] = Number(productList[i].price);
        }
        this.sumTotalCartValue(this.priceMapping);
    };
    CartComponent.prototype.getProductQuantity = function (productList) {
        this.productQuantityCount = {};
        for (var i = 0; i < productList.length; i++) {
            if (!this.productQuantityCount.hasOwnProperty(productList[i].id)) {
                this.productQuantityCount[productList[i].id] = 1;
            }
            else {
                this.productQuantityCount[productList[i].id]++;
            }
        }
    };
    CartComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-cart',
            template: __webpack_require__(/*! ./cart.component.html */ "./src/app/cart/cart.component.html"),
            styles: [__webpack_require__(/*! ./cart.component.css */ "./src/app/cart/cart.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_store_service__WEBPACK_IMPORTED_MODULE_3__["StoreService"]])
    ], CartComponent);
    return CartComponent;
}());



/***/ }),

/***/ "./src/app/product-card/product-card.component.css":
/*!*********************************************************!*\
  !*** ./src/app/product-card/product-card.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-card {\n  max-width: 20%;\n  margin-top: 2%;\n  padding-bottom: 0% !important;\n  border-radius: 5px;\n}\n\n.example-header-image {\n  background-image: url(\"https://material.angular.io/assets/img/examples/shiba1.jpg\");\n  background-size: cover;\n}\n\n.card-actions {\n  width: 100% !important;\n  color: #fff;\n  font-size: 16px;\n  background-color: #3f51b5;\n  font-size: 16px;\n  border-radius: 10px 10px 0px 0px;\n}\n\n.card-header {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.discription {\n  padding-top: 5%;\n}\n\n.price-chip {\n  color: #fff;\n  background-color: #3f51b5;\n}\n\n.total-price {\n  padding-bottom: 5%;\n}\n\nmat-form-field {\n  width: 40%;\n}\n\n:host /deep/ mat-chip-list .mat-chip-list-wrapper {\n  justify-content: space-between;\n}\n\n/* div.mat-chip-list-wrapper {\n  justify-content: space-between;\n} */\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZHVjdC1jYXJkL3Byb2R1Y3QtY2FyZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBYztFQUNkLGNBQWM7RUFDZCw2QkFBNkI7RUFDN0Isa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsbUZBQW1GO0VBQ25GLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLHNCQUFzQjtFQUN0QixXQUFXO0VBQ1gsZUFBZTtFQUNmLHlCQUF5QjtFQUN6QixlQUFlO0VBQ2YsZ0NBQWdDO0FBQ2xDOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsV0FBVztFQUNYLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLFVBQVU7QUFDWjs7QUFFQTtFQUNFLDhCQUE4QjtBQUNoQzs7QUFFQTs7R0FFRyIsImZpbGUiOiJzcmMvYXBwL3Byb2R1Y3QtY2FyZC9wcm9kdWN0LWNhcmQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5leGFtcGxlLWNhcmQge1xuICBtYXgtd2lkdGg6IDIwJTtcbiAgbWFyZ2luLXRvcDogMiU7XG4gIHBhZGRpbmctYm90dG9tOiAwJSAhaW1wb3J0YW50O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG5cbi5leGFtcGxlLWhlYWRlci1pbWFnZSB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcImh0dHBzOi8vbWF0ZXJpYWwuYW5ndWxhci5pby9hc3NldHMvaW1nL2V4YW1wbGVzL3NoaWJhMS5qcGdcIik7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG59XG5cbi5jYXJkLWFjdGlvbnMge1xuICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xuICBjb2xvcjogI2ZmZjtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2Y1MWI1O1xuICBmb250LXNpemU6IDE2cHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHggMTBweCAwcHggMHB4O1xufVxuXG4uY2FyZC1oZWFkZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmRpc2NyaXB0aW9uIHtcbiAgcGFkZGluZy10b3A6IDUlO1xufVxuXG4ucHJpY2UtY2hpcCB7XG4gIGNvbG9yOiAjZmZmO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2Y1MWI1O1xufVxuXG4udG90YWwtcHJpY2Uge1xuICBwYWRkaW5nLWJvdHRvbTogNSU7XG59XG5cbm1hdC1mb3JtLWZpZWxkIHtcbiAgd2lkdGg6IDQwJTtcbn1cblxuOmhvc3QgL2RlZXAvIG1hdC1jaGlwLWxpc3QgLm1hdC1jaGlwLWxpc3Qtd3JhcHBlciB7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cblxuLyogZGl2Lm1hdC1jaGlwLWxpc3Qtd3JhcHBlciB7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn0gKi9cbiJdfQ== */"

/***/ }),

/***/ "./src/app/product-card/product-card.component.html":
/*!**********************************************************!*\
  !*** ./src/app/product-card/product-card.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card class=\"example-card\" *ngFor=\"let item of productList; let i = index\">\n  <mat-card-header class=\"card-header\">\n    <mat-card-title>{{ item.name }}</mat-card-title>\n  </mat-card-header>\n  <img mat-card-image src=\"{{ item.image }}\" alt=\"Photo of a Shiba Inu\" />\n  <mat-chip-list>\n    <mat-chip class=\"price-chip\">Price:- ₹ {{ item.price }}/unit</mat-chip>\n    <mat-form-field *ngIf=\"isCartPageRnedered\">\n      <input\n        matInput\n        type=\"number\"\n        placeholder=\"Enter Quantity\"\n        id=\"{{ item.id }}\"\n        (change)=\"onQuantityChange(item.id, item.price)\"\n        value=\"1\"\n        required\n      />\n    </mat-form-field>\n  </mat-chip-list>\n  <div class=\"card-header total-price\" id=\"total_{{ item.id }}\"></div>\n  <mat-card-content class=\"discription\" *ngIf=\"!isCartPageRnedered\">\n    <p>\n      {{ item.description }}\n    </p>\n  </mat-card-content>\n  <button\n    mat-raised-button\n    color=\"primary\"\n    class=\"card-actions\"\n    *ngIf=\"!isCartPageRnedered\"\n    (click)=\"addProductToCart(item.id)\"\n  >\n    Add To Cart\n  </button>\n  <button\n    mat-raised-button\n    class=\"card-actions\"\n    *ngIf=\"isCartPageRnedered\"\n    (click)=\"deleteProductFromCart(item)\"\n  >\n    Remove From Cart\n  </button>\n</mat-card>\n"

/***/ }),

/***/ "./src/app/product-card/product-card.component.ts":
/*!********************************************************!*\
  !*** ./src/app/product-card/product-card.component.ts ***!
  \********************************************************/
/*! exports provided: ProductCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductCardComponent", function() { return ProductCardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_constants_store_keys_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/constants/store-keys.constants */ "./src/app/shared/constants/store-keys.constants.ts");
/* harmony import */ var _services_store_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/store.service */ "./src/app/services/store.service.ts");




var ProductCardComponent = /** @class */ (function () {
    function ProductCardComponent(_storeService) {
        this._storeService = _storeService;
        this.priceMap = {};
        this.totalQuantity = 1;
        this.cartList = [];
        this.quantity = {};
        this.productList = [];
        this.totalPrice = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.deletedItem = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.isCartPageRnedered = false;
    }
    ProductCardComponent.prototype.ngOnInit = function () {
    };
    ProductCardComponent.prototype.addProductToCart = function (id) {
        var _selectedProduct = this.productList.filter(function (data) { return data.id === id; });
        if (this.cartList.indexOf(id) === -1) {
            this.cartList.push(id);
            this._storeService.setToStore(_shared_constants_store_keys_constants__WEBPACK_IMPORTED_MODULE_2__["StoreKeys"].products_in_cart, _selectedProduct);
        }
        else {
            return null;
        }
    };
    ProductCardComponent.prototype.onQuantityChange = function (id, price) {
        var _inputValue = Number(document.getElementById(id).value);
        var _quantity = !isNaN(_inputValue) ? _inputValue : 0;
        var _total = price * _quantity;
        this.priceMap[id] = _total;
        this.totalPrice.emit(this.priceMap);
        document.getElementById('total_' + id).innerHTML = "Sub Total:- " + Math.round(_quantity) + " * " + price + "  =" + ' ' + _total.toFixed(2);
    };
    ProductCardComponent.prototype.deleteProductFromCart = function (producData) {
        this._storeService.removeInStore(producData.id);
        this.deletedItem.emit(producData.id);
        delete this.priceMap[producData.id];
        this.totalPrice.emit(this.priceMap);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ProductCardComponent.prototype, "quantity", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
    ], ProductCardComponent.prototype, "productList", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ProductCardComponent.prototype, "totalPrice", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ProductCardComponent.prototype, "deletedItem", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], ProductCardComponent.prototype, "isCartPageRnedered", void 0);
    ProductCardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-product-card',
            template: __webpack_require__(/*! ./product-card.component.html */ "./src/app/product-card/product-card.component.html"),
            styles: [__webpack_require__(/*! ./product-card.component.css */ "./src/app/product-card/product-card.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_store_service__WEBPACK_IMPORTED_MODULE_3__["StoreService"]])
    ], ProductCardComponent);
    return ProductCardComponent;
}());



/***/ }),

/***/ "./src/app/product-list/product-list.component.css":
/*!*********************************************************!*\
  !*** ./src/app/product-list/product-list.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2R1Y3QtbGlzdC9wcm9kdWN0LWxpc3QuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/product-list/product-list.component.html":
/*!**********************************************************!*\
  !*** ./src/app/product-list/product-list.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-list role=\"list\" class=\"list-top\" *ngIf=\"productListData\">\n  <app-product-card\n    [isCartPageRnedered]=\"false\"\n    [productList]=\"productListData\"\n    [isCartPageRnedered]=\"false\"\n    class=\"card-container\"\n  ></app-product-card>\n</mat-list>\n"

/***/ }),

/***/ "./src/app/product-list/product-list.component.ts":
/*!********************************************************!*\
  !*** ./src/app/product-list/product-list.component.ts ***!
  \********************************************************/
/*! exports provided: ProductListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductListComponent", function() { return ProductListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_list_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/list.service */ "./src/app/services/list.service.ts");



var ProductListComponent = /** @class */ (function () {
    function ProductListComponent(_listService) {
        this._listService = _listService;
        this.productListData = [];
    }
    ProductListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._listService.getProductList().subscribe(function (response) {
            _this.productListData = response.data;
        });
    };
    ProductListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-product-list',
            template: __webpack_require__(/*! ./product-list.component.html */ "./src/app/product-list/product-list.component.html"),
            styles: [__webpack_require__(/*! ./product-list.component.css */ "./src/app/product-list/product-list.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_list_service__WEBPACK_IMPORTED_MODULE_2__["ListService"]])
    ], ProductListComponent);
    return ProductListComponent;
}());



/***/ }),

/***/ "./src/app/services/list.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/list.service.ts ***!
  \******************************************/
/*! exports provided: ListService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListService", function() { return ListService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_constants_api_url_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/constants/api-url.constants */ "./src/app/shared/constants/api-url.constants.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



;

var ListService = /** @class */ (function () {
    function ListService(_http) {
        this._http = _http;
    }
    ListService.prototype.getProductList = function () {
        return this._http.get(_shared_constants_api_url_constants__WEBPACK_IMPORTED_MODULE_2__["APIRoutes"].product_list);
    };
    ListService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], ListService);
    return ListService;
}());



/***/ }),

/***/ "./src/app/services/store.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/store.service.ts ***!
  \*******************************************/
/*! exports provided: StoreService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StoreService", function() { return StoreService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _stores_common_action__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../stores/common.action */ "./src/app/stores/common.action.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");






var StoreService = /** @class */ (function () {
    function StoreService(store) {
        this.store = store;
        this.state = this.store.select('store');
    }
    StoreService.prototype.setToStore = function (storeKeyName, options) {
        var setAction = new _stores_common_action__WEBPACK_IMPORTED_MODULE_3__["SetStoreValue"](storeKeyName, options);
        this.store.dispatch(setAction);
    };
    StoreService.prototype.getFromStore = function (storeKeyName) {
        return this.state.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["mergeMap"])(function (data) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(data[storeKeyName]);
        }));
    };
    StoreService.prototype.removeInStore = function (storeKeyName) {
        var resetAction = new _stores_common_action__WEBPACK_IMPORTED_MODULE_3__["RemoveStoreValue"](storeKeyName);
        this.store.dispatch(resetAction);
    };
    StoreService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"]])
    ], StoreService);
    return StoreService;
}());



/***/ }),

/***/ "./src/app/shared/constants/api-url.constants.ts":
/*!*******************************************************!*\
  !*** ./src/app/shared/constants/api-url.constants.ts ***!
  \*******************************************************/
/*! exports provided: APIRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "APIRoutes", function() { return APIRoutes; });
var APIRoutes;
(function (APIRoutes) {
    APIRoutes["product_list"] = "https://www.mocky.io/v2/5eda4003330000740079ea60";
})(APIRoutes || (APIRoutes = {}));


/***/ }),

/***/ "./src/app/shared/constants/store-keys.constants.ts":
/*!**********************************************************!*\
  !*** ./src/app/shared/constants/store-keys.constants.ts ***!
  \**********************************************************/
/*! exports provided: StoreKeys */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StoreKeys", function() { return StoreKeys; });
var StoreKeys;
(function (StoreKeys) {
    StoreKeys["products_in_cart"] = "cartProducts";
    StoreKeys["product_count_in_cart"] = "totalProductsInCart";
})(StoreKeys || (StoreKeys = {}));


/***/ }),

/***/ "./src/app/shared/footer/footer.component.css":
/*!****************************************************!*\
  !*** ./src/app/shared/footer/footer.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/shared/footer/footer.component.html":
/*!*****************************************************!*\
  !*** ./src/app/shared/footer/footer.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  footer works!\n</p>\n"

/***/ }),

/***/ "./src/app/shared/footer/footer.component.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/footer/footer.component.ts ***!
  \***************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/shared/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/shared/footer/footer.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/shared/header/header.component.css":
/*!****************************************************!*\
  !*** ./src/app/shared/header/header.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".docs-navbar-header {\n  position: fixed;\n  width: 100%;\n  z-index: 1;\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  padding: 8px 16px;\n  height: 5%;\n  justify-content: center;\n  font-size: 32px;\n  color: #fff;\n  background-color: #3f51b5;\n}\n\n.cart-icon {\n  position: absolute;\n  right: 4%;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQWU7RUFDZixXQUFXO0VBQ1gsVUFBVTtFQUNWLGFBQWE7RUFDYixlQUFlO0VBRWYsbUJBQW1CO0VBQ25CLGlCQUFpQjtFQUNqQixVQUFVO0VBQ1YsdUJBQXVCO0VBQ3ZCLGVBQWU7RUFDZixXQUFXO0VBQ1gseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFNBQVM7QUFDWCIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZG9jcy1uYXZiYXItaGVhZGVyIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB3aWR0aDogMTAwJTtcbiAgei1pbmRleDogMTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiB3cmFwO1xuICAtd2Via2l0LWJveC1hbGlnbjogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nOiA4cHggMTZweDtcbiAgaGVpZ2h0OiA1JTtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMzJweDtcbiAgY29sb3I6ICNmZmY7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzZjUxYjU7XG59XG5cbi5jYXJ0LWljb24ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiA0JTtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/shared/header/header.component.html":
/*!*****************************************************!*\
  !*** ./src/app/shared/header/header.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"docs-navbar-header\">\n  E-Commerce\n  <span\n    matBadge=\"{{ totalItemCount }}\"\n    matBadgeOverlap=\"false\"\n    matBadgeColor=\"accent\"\n    matBadgePosition=\"before\"\n    class=\"material-icons cart-icon\"\n    [routerLink]=\"['/cart']\"\n  >\n    shopping_cart\n  </span>\n</nav>\n"

/***/ }),

/***/ "./src/app/shared/header/header.component.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/header/header.component.ts ***!
  \***************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_store_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/store.service */ "./src/app/services/store.service.ts");
/* harmony import */ var _constants_store_keys_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../constants/store-keys.constants */ "./src/app/shared/constants/store-keys.constants.ts");




var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(_storeService) {
        this._storeService = _storeService;
        this.totalItemCount = 0;
    }
    HeaderComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._storeService.getFromStore(_constants_store_keys_constants__WEBPACK_IMPORTED_MODULE_3__["StoreKeys"].product_count_in_cart).subscribe(function (data) {
            _this.totalItemCount = data;
        });
    };
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/shared/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/shared/header/header.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_store_service__WEBPACK_IMPORTED_MODULE_2__["StoreService"]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/stores/common.action.ts":
/*!*****************************************!*\
  !*** ./src/app/stores/common.action.ts ***!
  \*****************************************/
/*! exports provided: StateActionTypes, SetStoreValue, GetStoreValue, RemoveStoreValue */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StateActionTypes", function() { return StateActionTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetStoreValue", function() { return SetStoreValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetStoreValue", function() { return GetStoreValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RemoveStoreValue", function() { return RemoveStoreValue; });
var StateActionTypes;
(function (StateActionTypes) {
    StateActionTypes["setStoreValue"] = "Set Store Value";
    StateActionTypes["getStoreValue"] = "Get Store Value";
    StateActionTypes["resetStoreValue"] = "Reset Store Value";
    StateActionTypes["removeStoreValue"] = "Remove Item";
    StateActionTypes["clearStoreValues"] = "Clear Store Values";
})(StateActionTypes || (StateActionTypes = {}));
var SetStoreValue = /** @class */ (function () {
    function SetStoreValue(name, payload) {
        this.type = StateActionTypes.setStoreValue;
        this.payload = payload;
        this.name = name;
    }
    return SetStoreValue;
}());

var GetStoreValue = /** @class */ (function () {
    function GetStoreValue(name) {
        this.type = StateActionTypes.getStoreValue;
        this.name = name;
    }
    return GetStoreValue;
}());

var RemoveStoreValue = /** @class */ (function () {
    function RemoveStoreValue(payload) {
        this.type = StateActionTypes.removeStoreValue;
        this.payload = payload;
    }
    return RemoveStoreValue;
}());



/***/ }),

/***/ "./src/app/stores/common.reducer.ts":
/*!******************************************!*\
  !*** ./src/app/stores/common.reducer.ts ***!
  \******************************************/
/*! exports provided: commonReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "commonReducer", function() { return commonReducer; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _common_action__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./common.action */ "./src/app/stores/common.action.ts");


var initialState = {
    cartProducts: [],
    totalProductsInCart: 0,
};
function commonReducer(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case _common_action__WEBPACK_IMPORTED_MODULE_1__["StateActionTypes"].getStoreValue:
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state);
        case _common_action__WEBPACK_IMPORTED_MODULE_1__["StateActionTypes"].setStoreValue:
            var _addNewProducts = state.cartProducts.concat(action.payload);
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state, { cartProducts: _addNewProducts, totalProductsInCart: _addNewProducts.length });
        case _common_action__WEBPACK_IMPORTED_MODULE_1__["StateActionTypes"].removeStoreValue:
            var _newArray = state.cartProducts.slice();
            var _index = _newArray.findIndex(function (x) { return x.id === action.payload; });
            _newArray.splice(_index, 1);
            return { cartProducts: _newArray, totalProductsInCart: _newArray.length };
        default:
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state);
    }
}


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/shashanksharma/Desktop/ecomm/ecommerce/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map