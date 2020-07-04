(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/layouts/footer/footer.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/layouts/footer/footer.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<footer class=\"footer\">\n  <div class=\"container-fluid\">\n    <div class=\"row\">\n      <div class=\"col-md-6\">\n        2016 - 2019 © Ubold theme by <a href=\"\">Coderthemes</a>\n      </div>\n      <div class=\"col-md-6\">\n        <div class=\"text-md-right footer-links d-none d-sm-block\">\n          <a href=\"javascript:void(0);\">About Us</a>\n          <a href=\"javascript:void(0);\">Help</a>\n          <a href=\"javascript:void(0);\">Contact Us</a>\n        </div>\n      </div>\n    </div>\n  </div>\n</footer>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/layouts/layout.component.html":
/*!*************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/layouts/layout.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<!-- Navigation Bar-->\n<header id=\"topnav\">\n    <app-topbar (settingsButtonClicked)=\"onSettingsButtonClicked()\" (mobileMenuButtonClicked)=\"onToggleMobileMenu()\">\n    </app-topbar>\n\n    <app-navbar [showMobileMenu]=\"showMobileMenu\"></app-navbar>\n</header>\n<!-- End Navigation Bar-->\n\n<div class=\"wrapper\">\n    <!-- content -->\n    <router-outlet></router-outlet>\n</div>\n\n<!-- footer -->\n<app-footer></app-footer>\n<!-- right sidebar -->\n<app-rightsidebar></app-rightsidebar>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/layouts/navbar/navbar.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/layouts/navbar/navbar.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"topbar-menu\">\n    <div class=\"container-fluid\">\n        <div id=\"navigation\" [ngbCollapse]=\"!showMobileMenu\">\n            <!-- Navigation Menu-->\n            <ul class=\"navigation-menu\">\n\n                <li class=\"has-submenu\">\n                    <a href=\"javascript: void(0);\" (click)=\"onMenuClick($event)\">\n                        <i class=\"fe-airplay\"></i>Dashboards <div class=\"arrow-down\"></div></a>\n                    <ul class=\"submenu\">\n                        <li>\n                            <a routerLink=\"/\" class=\"side-nav-link-ref\" routerLinkActive=\"active\">Dashboard 1</a>\n                        </li>\n                        <li>\n                            <a routerLink=\"/dashboard/dashboard-2\" class=\"side-nav-link-ref\"\n                                routerLinkActive=\"active\">Dashboard 2</a>\n                        </li>\n                        <li>\n                            <a routerLink=\"/dashboard/dashboard-3\" class=\"side-nav-link-ref\"\n                                routerLinkActive=\"active\">Dashboard 3</a>\n                        </li>\n                        <li>\n                            <a routerLink=\"/dashboard/dashboard-4\" class=\"side-nav-link-ref\"\n                                routerLinkActive=\"active\">Dashboard 4</a>\n                        </li>\n                    </ul>\n                </li>\n                <li class=\"has-submenu\">\n                    <a href=\"javascript: void(0);\" (click)=\"onMenuClick($event)\">\n                        <i class=\"fe-grid\"></i>Apps <div class=\"arrow-down\"></div></a>\n                    <ul class=\"submenu\">\n                        <li class=\"has-submenu\">\n                            <a href=\"javascript: void(0);\" (click)=\"onMenuClick($event)\">CRM <div class=\"arrow-down\">\n                                </div></a>\n                            <ul class=\"submenu\">\n                                <li>\n                                    <a routerLink=\"/crm/dashboard\" routerLinkActive=\"active\"\n                                        class=\"side-nav-link-ref\">Dashboard</a>\n                                </li>\n                                <li>\n                                    <a routerLink=\"/crm/contacts\" routerLinkActive=\"active\"\n                                        class=\"side-nav-link-ref\">Contacts</a>\n                                </li>\n                                <li>\n                                    <a routerLink=\"/crm/opportunities\" routerLinkActive=\"active\"\n                                        class=\"side-nav-link-ref\">Opportunities</a>\n                                </li>\n                                <li>\n                                    <a routerLink=\"/crm/leads\" routerLinkActive=\"active\"\n                                        class=\"side-nav-link-ref\">Leads</a>\n                                </li>\n                                <li>\n                                    <a routerLink=\"/crm/customers\" routerLinkActive=\"active\"\n                                        class=\"side-nav-link-ref\">Customers</a>\n                                </li>\n                            </ul>\n                        </li>\n                        <li class=\"has-submenu\">\n                            <a href=\"javascript: void(0);\" (click)=\"onMenuClick($event)\">eCommerce <div\n                                    class=\"arrow-down\"></div></a>\n                            <ul class=\"submenu\">\n                                <li>\n                                    <a routerLink=\"/ecommerce/ecommerce-dashboard\" class=\"side-nav-link-ref\"\n                                        routerLinkActive=\"active\">Dashboard</a>\n                                </li>\n                                <li>\n                                    <a routerLink=\"/ecommerce/products\" routerLinkActive=\"active\"\n                                        class=\"side-nav-link-ref\">Products</a>\n                                </li>\n                                <li>\n                                    <a routerLink=\"/ecommerce/product-detail\" routerLinkActive=\"active\" class=\"side-nav-link-ref\">Product\n                                        Detail</a>\n                                </li>\n                                <li>\n                                    <a routerLink=\"/ecommerce/product-edit\" routerLinkActive=\"active\" class=\"side-nav-link-ref\">Product Edit</a>\n                                </li>\n                                <li>\n                                    <a routerLink=\"/ecommerce/orders\" routerLinkActive=\"active\" class=\"side-nav-link-ref\">Orders</a>\n                                </li>\n                                <li>\n                                    <a routerLink=\"/ecommerce/sellers\" routerLinkActive=\"active\" class=\"side-nav-link-ref\">Sellers</a>\n                                </li>\n                            </ul>\n                        </li>\n                        <li class=\"has-submenu\">\n                            <a href=\"javascript: void(0);\" (click)=\"onMenuClick($event)\">Email <div class=\"arrow-down\">\n                                </div></a>\n                            <ul class=\"submenu\">\n                                <li>\n                                    <a routerLink=\"/email/inbox\" routerLinkActive=\"active\" class=\"side-nav-link-ref\">Inbox</a>\n                                </li>\n                                <li>\n                                    <a routerLink=\"/email/read\" routerLinkActive=\"active\" class=\"side-nav-link-ref\">Read\n                                        Email</a>\n                                </li>\n                                <li>\n                                    <a routerLink=\"/email/compose\" routerLinkActive=\"active\" class=\"side-nav-link-ref\">Compose\n                                        Email</a>\n                                </li>\n                            </ul>\n                        </li>\n                        <li>\n                            <a routerLink=\"/apps/kanbanboard\" routerLinkActive=\"active\" class=\"side-nav-link-ref\">Kanban\n                                Board</a>\n                        </li>\n                        <li>\n                            <a routerLink=\"/apps/calendar\" routerLinkActive=\"active\" class=\"side-nav-link-ref\">Calendar</a>\n                        </li>\n                        <li>\n                            <a routerLink=\"/apps/contacts\" routerLinkActive=\"active\" class=\"side-nav-link-ref\">Contacts</a>\n                        </li>\n                        <li>\n                            <a routerLink=\"/apps/projects\" routerLinkActive=\"active\" class=\"side-nav-link-ref\">Projects</a>\n                        </li>\n                        <li>\n                            <a routerLink=\"/apps/tickets\" routerLinkActive=\"active\" class=\"side-nav-link-ref\">Tickets</a>\n                        </li>\n                        <li>\n                            <a routerLink=\"/apps/companies\" routerLinkActive=\"active\" class=\"side-nav-link-ref\">Companies</a>\n                        </li>\n                    </ul>\n                </li>\n                <li class=\"has-submenu\">\n                    <a href=\"javascript: void(0);\" (click)=\"onMenuClick($event)\"> <i class=\"fe-briefcase\"></i>Elements\n                        <div class=\"arrow-down\"></div></a>\n                    <ul class=\"submenu megamenu\">\n                        <li>\n                            <ul>\n                                <li>\n                                    <a routerLink=\"/ui/buttons\" routerLinkActive=\"active\"\n                                        class=\"side-nav-link-ref\">Buttons</a>\n                                </li>\n                                <li>\n                                    <a routerLink=\"/ui/cards\" routerLinkActive=\"active\"\n                                        class=\"side-nav-link-ref\">Cards</a>\n                                </li>\n                                <li>\n                                    <a routerLink=\"/ui/portlets\" routerLinkActive=\"active\"\n                                        class=\"side-nav-link-ref\">Portlets</a>\n                                </li>\n                                <li>\n                                    <a routerLink=\"/ui/tabs-accordions\" routerLinkActive=\"active\"\n                                        class=\"side-nav-link-ref\">Tabs &\n                                        Accordions</a>\n                                </li>\n                                <li>\n                                    <a routerLink=\"/ui/modals\" routerLinkActive=\"active\"\n                                        class=\"side-nav-link-ref\">Modals</a>\n                                </li>\n                                <li>\n                                    <a routerLink=\"/ui/progress\" routerLinkActive=\"active\"\n                                        class=\"side-nav-link-ref\">Progress</a>\n                                </li>\n                            </ul>\n                        </li>\n                        <li>\n                            <ul>\n                                <li>\n                                    <a routerLink=\"/ui/notifications\" routerLinkActive=\"active\"\n                                        class=\"side-nav-link-ref\">Notifications</a>\n                                </li>\n                                <li>\n                                    <a routerLink=\"/ui/images\" routerLinkActive=\"active\"\n                                        class=\"side-nav-link-ref\">Images</a>\n                                </li>\n                                <li>\n                                    <a routerLink=\"/ui/carousel\" routerLinkActive=\"active\"\n                                        class=\"side-nav-link-ref\">Carousel</a>\n                                </li>\n                                <li>\n                                    <a routerLink=\"/ui/video\" routerLinkActive=\"active\" class=\"side-nav-link-ref\">Embed\n                                        Video</a>\n                                </li>\n                                <li>\n                                    <a routerLink=\"/ui/dropdowns\" routerLinkActive=\"active\"\n                                        class=\"side-nav-link-ref\">Dropdowns</a>\n                                </li>\n                                <li>\n                                    <a routerLink=\"/ui/spinners\" routerLinkActive=\"active\"\n                                        class=\"side-nav-link-ref\">Spinners</a>\n                                </li>\n                            </ul>\n                        </li>\n                        <li>\n                            <ul>\n                                <li>\n                                    <a routerLink=\"/ui/ribbons\" routerLinkActive=\"active\"\n                                        class=\"side-nav-link-ref\">Ribbons</a>\n                                </li>\n                                <li>\n                                    <a routerLink=\"/ui/tooltips-popovers\" routerLinkActive=\"active\"\n                                        class=\"side-nav-link-ref\">Tooltips & Popovers</a>\n                                </li>\n                                <li>\n                                    <a routerLink=\"/ui/ui-general\" routerLinkActive=\"active\"\n                                        class=\"side-nav-link-ref\">General\n                                        UI</a>\n                                </li>\n                                <li>\n                                    <a routerLink=\"/ui/typography\" routerLinkActive=\"active\"\n                                        class=\"side-nav-link-ref\">Typography</a>\n                                </li>\n                                <li>\n                                    <a routerLink=\"/ui/grid\" routerLinkActive=\"active\"\n                                        class=\"side-nav-link-ref\">Grid</a>\n                                </li>\n                            </ul>\n                        </li>\n                    </ul>\n                </li>\n                <li class=\"has-submenu\">\n                    <a href=\"javascript: void(0);\" (click)=\"onMenuClick($event)\"> <i class=\"fe-cpu\"></i>Admin UI <div\n                            class=\"arrow-down\"></div></a>\n                    <ul class=\"submenu\">\n                        <li>\n                            <a routerLink=\"/adminUI/widgets\" routerLinkActive=\"active\"\n                                class=\"side-nav-link-ref\">Widgets</a>\n                        </li>\n                        <li>\n                            <a routerLink=\"/adminUI/range-slider\" routerLinkActive=\"active\"\n                                class=\"side-nav-link-ref\">Range\n                                Slider</a>\n                        </li>\n                        <li>\n                            <a routerLink=\"/adminUI/animation\" routerLinkActive=\"active\"\n                                class=\"side-nav-link-ref\">Animation</a>\n                        </li>\n                        <li>\n                            <a routerLink=\"/adminUI/sweet-alert\" routerLinkActive=\"active\"\n                                class=\"side-nav-link-ref\">Sweet\n                                Alert</a>\n                        </li>\n                    </ul>\n                </li>\n\n                <li class=\"has-submenu\">\n                    <a href=\"javascript: void(0);\" (click)=\"onMenuClick($event)\">\n                        <i class=\"fe-layers\"></i>Components <div class=\"arrow-down\"></div></a>\n                    <ul class=\"submenu\">\n                        <li class=\"has-submenu\">\n                            <a href=\"javascript: void(0);\" (click)=\"onMenuClick($event)\">Forms <div class=\"arrow-down\">\n                                </div></a>\n                            <ul class=\"submenu\">\n                                <li>\n                                    <a routerLink=\"/form/elements\" routerLinkActive=\"active\"\n                                        class=\"side-nav-link-ref\">General\n                                        Elements</a>\n                                </li>\n                                <li>\n                                    <a routerLink=\"/form/advanced\" routerLinkActive=\"active\"\n                                        class=\"side-nav-link-ref\">Advanced</a>\n                                </li>\n                                <li>\n                                    <a routerLink=\"/form/validation\" routerLinkActive=\"active\"\n                                        class=\"side-nav-link-ref\">Validation</a>\n                                </li>\n                                <li>\n                                    <a routerLink=\"/form/wizard\" routerLinkActive=\"active\"\n                                        class=\"side-nav-link-ref\">Wizard</a>\n                                </li>\n                                <li>\n                                    <a routerLink=\"/form/summernote\" routerLinkActive=\"active\"\n                                        class=\"side-nav-link-ref\">Summernote</a>\n                                </li>\n                                <li>\n                                    <a routerLink=\"/form/uploads\" routerLinkActive=\"active\"\n                                        class=\"side-nav-link-ref\">File\n                                        Uploads</a>\n                                </li>\n                                <li>\n                                    <a routerLink=\"/form/image-crop\" routerLinkActive=\"active\"\n                                        class=\"side-nav-link-ref\">Image\n                                        Crop</a>\n                                </li>\n                            </ul>\n                        </li>\n                        <li class=\"has-submenu\">\n                            <a href=\"javascript: void(0);\" (click)=\"onMenuClick($event)\">Tables <div class=\"arrow-down\">\n                                </div></a>\n                            <ul class=\"submenu\">\n                                <li>\n                                    <a routerLink=\"/tables/basic\" routerLinkActive=\"active\"\n                                        class=\"side-nav-link-ref\">Basic\n                                        Tables</a>\n                                </li>\n                                <li>\n                                    <a routerLink=\"/tables/advanced\" routerLinkActive=\"active\"\n                                        class=\"side-nav-link-ref\">Advanced\n                                        Table</a>\n                                </li>\n                            </ul>\n                        </li>\n                        <li class=\"has-submenu\">\n                            <a href=\"javascript: void(0);\" (click)=\"onMenuClick($event)\">Charts <div class=\"arrow-down\">\n                                </div></a>\n                            <ul class=\"submenu\">\n                                <li>\n                                    <a routerLink=\"/chart/apex\" routerLinkActive=\"active\" class=\"side-nav-link-ref\">Apex\n                                        Charts</a>\n                                </li>\n                                <li>\n                                    <a routerLink=\"/chart/chartjs\" routerLinkActive=\"active\"\n                                        class=\"side-nav-link-ref\">Chartjs\n                                        Charts</a>\n                                </li>\n                                <li>\n                                    <a routerLink=\"/chart/chartist\" routerLinkActive=\"active\"\n                                        class=\"side-nav-link-ref\">Chartist\n                                        Charts</a>\n                                </li>\n                            </ul>\n                        </li>\n                        <li class=\"has-submenu\">\n                            <a href=\"javascript: void(0);\" (click)=\"onMenuClick($event)\">Icons <div class=\"arrow-down\">\n                                </div></a>\n                            <ul class=\"submenu\">\n                                <li>\n                                    <a routerLink=\"/icons/feather\" routerLinkActive=\"active\"\n                                        class=\"side-nav-link-ref\">Feather\n                                        Icons</a>\n                                </li>\n                                <li>\n                                    <a routerLink=\"/icons/material\" routerLinkActive=\"active\"\n                                        class=\"side-nav-link-ref\">Material\n                                        Design Icons</a>\n                                </li>\n                                <li>\n                                    <a routerLink=\"/icons/dripicons\" routerLinkActive=\"active\"\n                                        class=\"side-nav-link-ref\">Dripicons</a>\n                                </li>\n                                <li>\n                                    <a routerLink=\"/icons/fontawesome\" routerLinkActive=\"active\"\n                                        class=\"side-nav-link-ref\">Font\n                                        Awesome</a>\n                                </li>\n                                <li>\n                                    <a routerLink=\"/icons/themify\" routerLinkActive=\"active\"\n                                        class=\"side-nav-link-ref\">Themify</a>\n                                </li>\n                                <li>\n                                    <a routerLink=\"/icons/simpleline\" routerLinkActive=\"active\"\n                                        class=\"side-nav-link-ref\">Simple\n                                        Line</a>\n                                </li>\n                                <li>\n                                    <a routerLink=\"/icons/weather\" routerLinkActive=\"active\"\n                                        class=\"side-nav-link-ref\">Weather</a>\n                                </li>\n                            </ul>\n                        </li>\n                        <li class=\"has-submenu\">\n                            <a href=\"javascript: void(0);\" (click)=\"onMenuClick($event)\">Maps <div class=\"arrow-down\">\n                                </div></a>\n                            <ul class=\"submenu\">\n                                <li>\n                                    <a routerLink=\"/maps/google\" routerLinkActive=\"active\"\n                                        class=\"side-nav-link-ref\">Google Maps</a>\n                                </li>\n                            </ul>\n                        </li>\n                    </ul>\n                </li>\n\n                <li class=\"has-submenu\">\n                    <a href=\"javascript: void(0);\" (click)=\"onMenuClick($event)\"> <i class=\"fe-package\"></i>Pages <div\n                            class=\"arrow-down\"></div></a>\n\n                    <ul class=\"submenu megamenu\">\n                        <li>\n                            <ul>\n                                <li>\n                                    <a routerLink=\"/extras/error-404\" routerLinkActive=\"active\"\n                                        class=\"side-nav-link-ref\">Error 404</a>\n                                </li>\n                                <li>\n                                    <a routerLink=\"/extras/error-500\" routerLinkActive=\"active\"\n                                        class=\"side-nav-link-ref\">Error 500</a>\n                                </li>\n                                <li>\n                                    <a routerLink=\"/extras/profile\" routerLinkActive=\"active\"\n                                        class=\"side-nav-link-ref\">Profile</a>\n                                </li>\n                                <li>\n                                    <a routerLink=\"/extras/timeline\" routerLinkActive=\"active\"\n                                        class=\"side-nav-link-ref\">Timeline</a>\n                                </li>\n                                <li>\n                                    <a routerLink=\"/extras/sitemap\" routerLinkActive=\"active\"\n                                        class=\"side-nav-link-ref\">Sitemap</a>\n                                </li>\n                            </ul>\n                        </li>\n                        <li>\n                            <ul>\n                                <li>\n                                    <a routerLink=\"/extras/invoice\" routerLinkActive=\"active\"\n                                        class=\"side-nav-link-ref\">Invoice</a>\n                                </li>\n                                <li>\n                                    <a routerLink=\"/extras/faqs\" routerLinkActive=\"active\"\n                                        class=\"side-nav-link-ref\">FAQs</a>\n                                </li>\n                                <li>\n                                    <a routerLink=\"/extras/pricing\" routerLinkActive=\"active\"\n                                        class=\"side-nav-link-ref\">Pricing</a>\n                                </li>\n                                <li>\n                                    <a routerLink=\"/extras/gallery\" routerLinkActive=\"active\"\n                                        class=\"side-nav-link-ref\">Gallery</a>\n                                </li>\n\n                            </ul>\n                        </li>\n                    </ul>\n                </li>\n\n                <li class=\"has-submenu\">\n                    <a href=\"javascript: void(0);\" (click)=\"onMenuClick($event)\"> <i class=\"fe-sidebar\"></i>Layouts <div\n                            class=\"arrow-down\"></div></a>\n                    <ul class=\"submenu\">\n                        <li>\n                            <a (click)=\"darkTopbar()\" href=\"javascript: void(0);\" routerLinkActive=\"active\" class=\"side-nav-link-ref\">Topbar\n                                Dark</a>\n                        </li>\n                        <li>\n                            <a (click)=\"lightMenubar()\" href=\"javascript: void(0);\" routerLinkActive=\"active\" class=\"side-nav-link-ref\">Menubar\n                                Light</a>\n                        </li>\n                        <li>\n                            <a (click)=\"centerMenu()\" href=\"javascript: void(0);\" routerLinkActive=\"active\" class=\"side-nav-link-ref\">Center\n                                Menu</a>\n                        </li>\n                        <li>\n                            <a (click)=\"gradientTopbar()\" href=\"javascript: void(0);\" routerLinkActive=\"active\" class=\"side-nav-link-ref\">Gradient\n                                Topbar</a>\n                        </li>\n                        <li>\n                            <a (click)=\"dropmenuDark()\" href=\"javascript: void(0);\" routerLinkActive=\"active\" class=\"side-nav-link-ref\">Menu Drop\n                                Dark</a>\n                        </li>\n                        <li>\n                            <a (click)=\"unstickyHeader()\" href=\"javascript: void(0);\" routerLinkActive=\"active\" class=\"side-nav-link-ref\">Unsticky\n                                Header</a>\n                        </li>\n                        <li>\n                            <a (click)=\"boxedLayout()\" href=\"javascript: void(0);\" routerLinkActive=\"active\" class=\"side-nav-link-ref\">Boxed</a>\n                        </li>\n                    </ul>\n                </li>\n\n            </ul>\n            <!-- End navigation menu -->\n\n            <div class=\"clearfix\"></div>\n        </div>\n        <!-- end #navigation -->\n    </div>\n    <!-- end container -->\n</div>\n<!-- end navbar-custom -->"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/layouts/rightsidebar/rightsidebar.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/layouts/rightsidebar/rightsidebar.component.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Right Sidebar -->\n<div class=\"right-bar\" (clickOutside)=\"hide()\" [exclude]=\"'.right-bar-toggle'\">\n  <div class=\"rightbar-title\">\n    <a href=\"javascript:void(0);\" class=\"right-bar-toggle float-right\" (click)=\"hide();\">\n      <i class=\"fe-x noti-icon\"></i>\n    </a>\n    <h4 class=\"m-0 text-white\">Settings</h4>\n  </div>\n  <div class=\"slimscroll-menu\" appSlimScroll>\n    <!-- User box -->\n    <div class=\"user-box\">\n      <div class=\"user-img\">\n        <img src=\"assets/images/users/user-1.jpg\" alt=\"user-img\" title=\"Mat Helme\" class=\"rounded-circle img-fluid\">\n        <a href=\"javascript:void(0);\" class=\"user-edit\"><i class=\"mdi mdi-pencil\"></i></a>\n      </div>\n\n      <h5><a href=\"javascript: void(0);\">Nik G. Patel</a> </h5>\n      <p class=\"text-muted mb-0\"><small>Admin Head</small></p>\n    </div>\n\n    <div class=\"inbox-widget pl-3 pr-3\">\n      <h5 class=\"mt-0\">Recent</h5>\n      <div class=\"inbox-item\" *ngFor=\"let inbox of inboxData\">\n        <div class=\"inbox-item-img\"><img src=\"{{ inbox.image }}\" class=\"rounded-circle\" alt=\"\"> <i\n            class=\"online user-status\"></i></div>\n        <p class=\"inbox-item-author\"><a href=\"javascript: void(0);\" class=\"text-dark\">{{ inbox.name }}</a></p>\n        <p class=\"inbox-item-text\">{{ inbox.message }}</p>\n      </div>\n    </div>\n  </div> <!-- end slimscroll-menu-->\n</div>\n<!-- /Right-bar -->\n\n<!-- Right bar overlay-->\n<div class=\"rightbar-overlay\"></div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/layouts/topbar/topbar.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/layouts/topbar/topbar.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Topbar Start -->\n<div class=\"navbar-custom\">\n  <div class=\"container-fluid\">\n    <ul class=\"list-unstyled topnav-menu float-right mb-0\">\n\n      <li class=\"dropdown notification-list\">\n        <!-- Mobile menu toggle-->\n        <a class=\"navbar-toggle nav-link\" [ngClass]=\"{'open': openMobileMenu}\" (click)=\"toggleMobileMenu($event)\" href=\"javascript: void(0);\">\n          <div class=\"lines\">\n            <span></span>\n            <span></span>\n            <span></span>\n          </div>\n        </a>\n        <!-- End mobile menu toggle-->\n      </li>\n\n      <li class=\"d-none d-sm-block\">\n        <form class=\"app-search\">\n          <div class=\"app-search-box\">\n            <div class=\"input-group\">\n              <input type=\"text\" class=\"form-control\" placeholder=\"Search...\">\n              <div class=\"input-group-append\">\n                <button class=\"btn\" type=\"submit\">\n                  <i class=\"fe-search\"></i>\n                </button>\n              </div>\n            </div>\n          </div>\n        </form>\n      </li>\n\n      <li class=\"dropdown notification-list\" ngbDropdown>\n        <a class=\"nav-link dropdown-toggle  waves-effect waves-light\" href=\"javascript: void(0);\" role=\"button\"\n          aria-haspopup=\"false\" aria-expanded=\"false\" ngbDropdownToggle id=\"notificationDropdown\">\n          <i class=\"fe-bell noti-icon\"></i>\n          <span class=\"badge badge-danger rounded-circle noti-icon-badge\">4</span>\n        </a>\n        <div class=\"dropdown-menu dropdown-menu-right dropdown-menu-animated dropdown-lg\"\n          aria-labelledby=\"notificationDropdown\" ngbDropdownMenu>\n\n          <!-- item-->\n          <div class=\"dropdown-item noti-title\" ngbDropdownItem>\n            <h5 class=\"m-0\">\n              <span class=\"float-right\">\n                <a href=\"javascript: void(0);\" class=\"text-dark\">\n                  <small>Clear All</small>\n                </a>\n              </span>Notification\n            </h5>\n          </div>\n\n          <div id=\"notification-items\" class=\"slimscroll noti-scroll\" appSlimScroll>\n            <!-- item-->\n            <a *ngFor=\"let notification of notificationItems;\" href=\"{{ notification.redirectTo }}\"\n              class=\"dropdown-item notify-item\" ngbDropdownItem>\n              <div class=\"notify-icon bg-soft-{{ notification.bgColor }} text-{{ notification.bgColor }}\">\n                <i class=\"{{ notification.icon }}\"></i>\n              </div>\n              <p class=\"notify-details\">{{ notification.text }}\n                <small class=\"text-muted\">{{ notification.subText }}</small>\n              </p>\n            </a>\n          </div>\n\n          <!-- All-->\n          <a href=\"javascript:void(0);\" class=\"dropdown-item text-center text-primary notify-item notify-all\">\n            View All\n          </a>\n        </div>\n      </li>\n\n\n      <li class=\"dropdown notification-list\" ngbDropdown>\n        <a class=\"nav-link dropdown-toggle nav-user mr-0 waves-effect waves-light\" ngbDropdownToggle\n          id=\"profileDropdown\" href=\"javascript: void(0);\" role=\"button\" aria-haspopup=\"false\" aria-expanded=\"false\">\n          <img src=\"assets/images/users/user-1.jpg\" alt=\"user-image\" class=\"rounded-circle\">\n          <span class=\"pro-user-name ml-1\">\n            Nik Patel <i class=\"mdi mdi-chevron-down\"></i>\n          </span>\n        </a>\n        <div class=\"dropdown-menu dropdown-menu-right profile-dropdown\" aria-labelledby=\"profileDropdown\"\n          ngbDropdownMenu>\n          <div class=\"dropdown-header noti-title\">\n            <h6 class=\"text-overflow m-0\">Welcome !</h6>\n          </div>\n\n          <!-- item-->\n          <a href=\"javascript:void(0);\" class=\"dropdown-item notify-item\">\n            <i class=\"fe-user\"></i>\n            <span>My Account</span>\n          </a>\n\n          <!-- item-->\n          <a href=\"javascript:void(0);\" class=\"dropdown-item notify-item\">\n            <i class=\"fe-settings\"></i>\n            <span>Settings</span>\n          </a>\n\n          <!-- item-->\n          <a href=\"javascript:void(0);\" class=\"dropdown-item notify-item\">\n            <i class=\"fe-lock\"></i>\n            <span>Lock Screen</span>\n          </a>\n\n          <div class=\"dropdown-divider\"></div>\n\n          <!-- item-->\n          <a href=\"javascript:void(0);\" class=\"dropdown-item notify-item\" (click)=\"logout()\">\n            <i class=\"fe-log-out\"></i>\n            <span>Logout</span>\n          </a>\n\n        </div>\n      </li>\n\n\n      <li class=\"dropdown notification-list\">\n        <a href=\"javascript:void(0);\" class=\"nav-link right-bar-toggle waves-effect waves-light\"\n          (click)=\"toggleRightSidebar()\">\n          <i class=\"fe-settings noti-icon\"></i>\n        </a>\n      </li>\n\n\n    </ul>\n\n    <!-- LOGO -->\n    <div class=\"logo-box\">\n      <a href=\"/\" class=\"logo text-center\">\n        <span class=\"logo-lg\">\n          <img src=\"assets/images/logo-dark.png\" alt=\"\" height=\"18\" />\n          <!-- <span class=\"logo-lg-text-light\">Xeria</span> -->\n        </span>\n        <span class=\"logo-sm\">\n          <!-- <span class=\"logo-sm-text-dark\">X</span> -->\n          <img src=\"assets/images/logo-sm.png\" alt=\"\" height=\"24\" />\n        </span>\n      </a>\n    </div>\n\n    <ul class=\"list-unstyled topnav-menu topnav-menu-left m-0\">\n      <li class=\"dropdown d-none d-lg-block\" ngbDropdown>\n        <a class=\"nav-link dropdown-toggle waves-effect waves-light\" href=\"javascript: void(0);\" ngbDropdownToggle\n          id=\"extraMenu\" role=\"button\" aria-haspopup=\"false\" aria-expanded=\"false\">\n          Create New\n          <i class=\"mdi mdi-chevron-down\"></i>\n        </a>\n        <div class=\"dropdown-menu\" ngbDropdownMenu aria-labelledby=\"extraMenu\">\n          <!-- item-->\n          <a href=\"javascript:void(0);\" class=\"dropdown-item\">\n            <i class=\"fe-briefcase mr-1\"></i>\n            <span>New Projects</span>\n          </a>\n\n          <!-- item-->\n          <a href=\"javascript:void(0);\" class=\"dropdown-item\">\n            <i class=\"fe-user mr-1\"></i>\n            <span>Create Users</span>\n          </a>\n\n          <!-- item-->\n          <a href=\"javascript:void(0);\" class=\"dropdown-item\">\n            <i class=\"fe-bar-chart-line- mr-1\"></i>\n            <span>Revenue Report</span>\n          </a>\n\n          <!-- item-->\n          <a href=\"javascript:void(0);\" class=\"dropdown-item\">\n            <i class=\"fe-settings mr-1\"></i>\n            <span>Settings</span>\n          </a>\n\n          <div class=\"dropdown-divider\"></div>\n\n          <!-- item-->\n          <a href=\"javascript:void(0);\" class=\"dropdown-item\">\n            <i class=\"fe-headphones mr-1\"></i>\n            <span>Help & Support</span>\n          </a>\n\n        </div>\n      </li>\n    </ul>\n  </div>\n</div>\n<!-- end Topbar -->"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/shared/ui/emaillist/emaillist.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/shared/ui/emaillist/emaillist.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- List  -->\n<div class=\"mail-list\" *ngFor=\"let list of emailList\">\n  <a href=\"javascript: void(0);\" class=\"list-group-item border-0\"\n    [ngClass]=\"{'text-danger font-weight-bold': list.text === 'danger'}\">\n    <i class=\"{{list.icon}} font-18 align-middle mr-2\"></i>{{list.name}} \n    <span class=\"badge bagde-danger float-right ml-2 mt-1\" [ngClass]=\"\n                  {\n                    'badge-danger': list.text === 'danger',\n                    'badge-info': list.text === 'info'\n                  }\">\n    {{list.value}}</span>\n  </a>\n</div>\n<!-- End list -->\n\n<!-- Label -->\n<h6 class=\"mt-4\">Labels</h6>\n<div class=\"list-group b-0 mail-list\" *ngFor=\"let label of emailLabel\">\n  <a href=\"javascript: void(0);\" class=\"list-group-item border-0\"><span\n      class=\"mdi mdi-circle text-{{label.text}} mr-2\"></span>{{label.name}}</a>\n</div>\n<!-- End label -->\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/shared/ui/pagetitle/pagetitle.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/shared/ui/pagetitle/pagetitle.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-12\">\n    <div class=\"page-title-box\">\n      <div class=\"page-title-right\">\n        <ol class=\"breadcrumb m-0\">\n          <li class=\"breadcrumb-item\" [ngClass]=\"{'active': item.active}\" *ngFor=\"let item of breadcrumbItems\">\n            <a href=\"{{item.path}}\" *ngIf=\"!item.active\">{{ item.label }}</a>\n            <span *ngIf=\"item.active\">{{ item.label }}</span>\n          </li>\n        </ol>\n      </div>\n      <h4 class=\"page-title\">{{ title }}</h4>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/shared/ui/portlet/portlet.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/shared/ui/portlet/portlet.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card\" *ngIf=\"isVisible\">\n  <!-- card header -->\n\n  <div class=\"card-header bg-{{ color }} text-{{ text }} {{headerClass}}\">\n    {{ title }}\n\n    <div class=\"card-widgets\">\n      <a href=\"javascript: void(0);\" (click)=\"refreshContent()\"><i class=\"mdi mdi-refresh\"></i></a>\n      <a href=\"javascript: void(0);\" (click)=\"isCollapsed = !isCollapsed\" [attr.aria-expanded]=\"!isCollapsed\"\n        aria-expanded=\"false\" aria-controls=\"cardCollpase5\" class=\"mdi mdi-minus\" [ngClass]=\"\n           {\n             'mdi-minus': isCollapsed == false,\n             'mdi-plus': isCollapsed == true\n           }\">\n      </a>\n      <a href=\"javascript: void(0);\" (click)=\"remove()\"><i class=\"mdi mdi-close\"></i></a>\n    </div>\n\n  </div>\n\n  <!-- End card header -->\n\n  <div id=\"cardCollpase5\" [ngbCollapse]=\"isCollapsed\">\n    <ng-content></ng-content>\n  </div>\n\n  <div class=\"card-disabled\" *ngIf=\"isLoading\">\n    <div class=\"card-portlets-loader\"></div>\n  </div>\n\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/shared/ui/preloader/preloader.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/shared/ui/preloader/preloader.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"preloader\" [hidden]='!display'>\n  <div class=\"status\">\n      <div class=\"spinner-border avatar-sm text-primary m-2\" role=\"status\"></div>\n  </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/shared/ui/widget/widget.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/shared/ui/widget/widget.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"btn-group\">\n  <button type=\"button\" class=\"btn btn-sm btn-light waves-effect\"><i class=\"mdi mdi-archive font-18\"></i></button>\n  <button type=\"button\" class=\"btn btn-sm btn-light waves-effect\"><i class=\"mdi mdi-alert-octagon font-18\"></i></button>\n  <button type=\"button\" class=\"btn btn-sm btn-light waves-effect\"><i\n      class=\"mdi mdi-delete-variant font-18\"></i></button>\n</div>\n<div class=\"btn-group ml-1\" ngbDropdown>\n  <button type=\"button\" class=\"btn btn-sm btn-light dropdown-toggle waves-effect\" data-toggle=\"dropdown\"\n    ngbDropdownToggle aria-expanded=\"false\">\n    <i class=\"mdi mdi-folder font-18\"></i>\n    <i class=\"mdi mdi-chevron-down\"></i>\n  </button>\n  <div class=\"dropdown-menu\" ngbDropdownMenu>\n    <span class=\"dropdown-header\">Move to</span>\n    <a class=\"dropdown-item\" href=\"javascript: void(0);\">Social</a>\n    <a class=\"dropdown-item\" href=\"javascript: void(0);\">Promotions</a>\n    <a class=\"dropdown-item\" href=\"javascript: void(0);\">Updates</a>\n    <a class=\"dropdown-item\" href=\"javascript: void(0);\">Forums</a>\n  </div>\n</div>\n<div class=\"btn-group ml-1\" ngbDropdown>\n  <button type=\"button\" class=\"btn btn-sm btn-light dropdown-toggle waves-effect\" data-toggle=\"dropdown\"\n    ngbDropdownToggle aria-expanded=\"false\">\n    <i class=\"mdi mdi-label font-18\"></i>\n    <i class=\"mdi mdi-chevron-down\"></i>\n  </button>\n  <div class=\"dropdown-menu\" ngbDropdownMenu>\n    <span class=\"dropdown-header\">Label as:</span>\n    <a class=\"dropdown-item\" href=\"javascript: void(0);\">Updates</a>\n    <a class=\"dropdown-item\" href=\"javascript: void(0);\">Social</a>\n    <a class=\"dropdown-item\" href=\"javascript: void(0);\">Promotions</a>\n    <a class=\"dropdown-item\" href=\"javascript: void(0);\">Forums</a>\n  </div>\n</div>\n\n<div class=\"btn-group ml-1\" ngbDropdown>\n  <button type=\"button\" class=\"btn btn-sm btn-light dropdown-toggle waves-effect\" data-toggle=\"dropdown\"\n    ngbDropdownToggle aria-expanded=\"false\">\n    <i class=\"mdi mdi-dots-horizontal font-18\"></i> More\n    <i class=\"mdi mdi-chevron-down\"></i>\n  </button>\n  <div class=\"dropdown-menu\" ngbDropdownMenu>\n    <span class=\"dropdown-header\">More Option :</span>\n    <a class=\"dropdown-item\" href=\"javascript: void(0);\">Mark as Unread</a>\n    <a class=\"dropdown-item\" href=\"javascript: void(0);\">Add to Tasks</a>\n    <a class=\"dropdown-item\" href=\"javascript: void(0);\">Add Star</a>\n    <a class=\"dropdown-item\" href=\"javascript: void(0);\">Mute</a>\n  </div>\n</div>"

/***/ }),

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _layouts_layout_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./layouts/layout.component */ "./src/app/layouts/layout.component.ts");




const routes = [
    { path: '', component: _layouts_layout_component__WEBPACK_IMPORTED_MODULE_3__["LayoutComponent"], loadChildren: () => __webpack_require__.e(/*! import() | pages-pages-module */ "pages-pages-module").then(__webpack_require__.bind(null, /*! ./pages/pages.module */ "./src/app/pages/pages.module.ts")).then(m => m.PagesModule) },
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, { scrollPositionRestoration: 'top' })],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-ubold',
        template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
        styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
    })
], AppComponent);



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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _layouts_layouts_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./layouts/layouts.module */ "./src/app/layouts/layouts.module.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");








let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
            _layouts_layouts_module__WEBPACK_IMPORTED_MODULE_5__["LayoutsModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/layouts/footer/footer.component.scss":
/*!******************************************************!*\
  !*** ./src/app/layouts/footer/footer.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dHMvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/layouts/footer/footer.component.ts":
/*!****************************************************!*\
  !*** ./src/app/layouts/footer/footer.component.ts ***!
  \****************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let FooterComponent = class FooterComponent {
    constructor() { }
    ngOnInit() {
    }
};
FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-footer',
        template: __webpack_require__(/*! raw-loader!./footer.component.html */ "./node_modules/raw-loader/index.js!./src/app/layouts/footer/footer.component.html"),
        styles: [__webpack_require__(/*! ./footer.component.scss */ "./src/app/layouts/footer/footer.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], FooterComponent);



/***/ }),

/***/ "./src/app/layouts/layout.component.scss":
/*!***********************************************!*\
  !*** ./src/app/layouts/layout.component.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dHMvbGF5b3V0LmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/layouts/layout.component.ts":
/*!*********************************************!*\
  !*** ./src/app/layouts/layout.component.ts ***!
  \*********************************************/
/*! exports provided: LayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutComponent", function() { return LayoutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let LayoutComponent = class LayoutComponent {
    constructor() {
        this.showMobileMenu = false;
    }
    ngOnInit() {
    }
    ngAfterViewInit() {
        document.body.classList.remove('authentication-bg');
        document.body.classList.remove('authentication-bg-pattern');
    }
    /**
     * on settings button clicked from topbar
     */
    onSettingsButtonClicked() {
        document.body.classList.toggle('right-bar-enabled');
    }
    /**
     * On mobile toggle button clicked
     */
    onToggleMobileMenu() {
        this.showMobileMenu = !this.showMobileMenu;
    }
};
LayoutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-layout',
        template: __webpack_require__(/*! raw-loader!./layout.component.html */ "./node_modules/raw-loader/index.js!./src/app/layouts/layout.component.html"),
        styles: [__webpack_require__(/*! ./layout.component.scss */ "./src/app/layouts/layout.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], LayoutComponent);



/***/ }),

/***/ "./src/app/layouts/layouts.module.ts":
/*!*******************************************!*\
  !*** ./src/app/layouts/layouts.module.ts ***!
  \*******************************************/
/*! exports provided: LayoutsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutsModule", function() { return LayoutsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var ng_click_outside__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-click-outside */ "./node_modules/ng-click-outside/lib/index.js");
/* harmony import */ var ng_click_outside__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(ng_click_outside__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _shared_ui_ui_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/ui/ui.module */ "./src/app/shared/ui/ui.module.ts");
/* harmony import */ var _layout_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./layout.component */ "./src/app/layouts/layout.component.ts");
/* harmony import */ var _topbar_topbar_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./topbar/topbar.component */ "./src/app/layouts/topbar/topbar.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/layouts/footer/footer.component.ts");
/* harmony import */ var _rightsidebar_rightsidebar_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./rightsidebar/rightsidebar.component */ "./src/app/layouts/rightsidebar/rightsidebar.component.ts");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./navbar/navbar.component */ "./src/app/layouts/navbar/navbar.component.ts");












let LayoutsModule = class LayoutsModule {
};
LayoutsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_layout_component__WEBPACK_IMPORTED_MODULE_7__["LayoutComponent"], _topbar_topbar_component__WEBPACK_IMPORTED_MODULE_8__["TopbarComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_9__["FooterComponent"], _rightsidebar_rightsidebar_component__WEBPACK_IMPORTED_MODULE_10__["RightsidebarComponent"], _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_11__["NavbarComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbDropdownModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbCollapseModule"],
            ng_click_outside__WEBPACK_IMPORTED_MODULE_5__["ClickOutsideModule"],
            _shared_ui_ui_module__WEBPACK_IMPORTED_MODULE_6__["UIModule"]
        ]
    })
], LayoutsModule);



/***/ }),

/***/ "./src/app/layouts/navbar/navbar.component.scss":
/*!******************************************************!*\
  !*** ./src/app/layouts/navbar/navbar.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dHMvbmF2YmFyL25hdmJhci5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/layouts/navbar/navbar.component.ts":
/*!****************************************************!*\
  !*** ./src/app/layouts/navbar/navbar.component.ts ***!
  \****************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



let NavbarComponent = class NavbarComponent {
    constructor(router) {
        router.events.subscribe(event => {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationEnd"]) {
                this.activateMenu();
            }
        });
    }
    ngOnInit() {
        this.showMobileMenu = false;
    }
    ngAfterViewInit() {
        this.activateMenu();
    }
    /**
     * On menu click
     */
    onMenuClick(event) {
        const nextEl = event.target.nextSibling;
        if (nextEl && !nextEl.classList.contains('open')) {
            const parentEl = event.target.parentNode;
            if (parentEl) {
                parentEl.classList.remove('open');
            }
            nextEl.classList.add('open');
        }
        else if (nextEl) {
            nextEl.classList.remove('open');
        }
        return false;
    }
    /**
     * Dark Menubar
     */
    darkTopbar() {
        document.body.classList.add('topbar-dark');
        document.body.classList.remove('topbar-light');
        document.body.classList.remove('unsticky-header');
        document.body.classList.remove('boxed-layout');
        document.body.classList.remove('drop-menu-dark');
        document.body.classList.remove('menubar-light');
        document.body.classList.remove('center-menu');
    }
    /**
     * Light Topbar
     */
    lightMenubar() {
        document.body.classList.add('menubar-light');
        document.body.classList.add('topbar-dark');
        document.body.classList.remove('boxed-layout');
        document.body.classList.remove('center-menu');
        document.body.classList.remove('gradient-topbar');
        document.body.classList.remove('unsticky-header');
    }
    /**
     * Show menu in center
     */
    centerMenu() {
        document.body.classList.add('center-menu');
        document.body.classList.remove('topbar-dark');
        document.body.classList.remove('menubar-light');
        document.body.classList.remove('boxed-layout');
        document.body.classList.remove('gradient-topbar');
    }
    gradientTopbar() {
        document.body.classList.add('gradient-topbar');
        document.body.classList.add('topbar-dark');
        document.body.classList.remove('drop-menu-dark');
        document.body.classList.remove('unsticky-header');
        document.body.classList.remove('center-menu');
    }
    dropmenuDark() {
        document.body.classList.add('drop-menu-dark');
        document.body.classList.remove('gradient-topbar');
        document.body.classList.remove('boxed-layout');
        document.body.classList.remove('center-menu');
        document.body.classList.remove('menubar-light');
    }
    /**
     * Unsticky Header
     */
    unstickyHeader() {
        document.body.classList.add('unsticky-header');
        document.body.classList.remove('boxed-layout');
        document.body.classList.remove('center-menu');
        document.body.classList.remove('drop-menu-dark');
        document.body.classList.remove('topbar-dark');
        document.body.classList.remove('menubar-light');
    }
    /**
     * Boxed Layout
     */
    boxedLayout() {
        document.body.classList.add('boxed-layout');
        document.body.classList.remove('drop-menu-dark');
        document.body.classList.remove('gradient-topbar');
        document.body.classList.remove('topbar-dark');
        document.body.classList.remove('menubar-light');
    }
    /**
     * Activates the menu
     */
    activateMenu() {
        const resetParents = (el) => {
            const parent = el.parentElement;
            /**
             * TODO: This is hard coded way of expading/activating parent menu dropdown and working till level 3.
             * We should come up with non hard coded approach
             */
            if (parent) {
                parent.classList.remove('active');
                const parent2 = parent.parentElement;
                if (parent2) {
                    parent2.classList.remove('in');
                }
                const parent3 = parent2.parentElement;
                if (parent3) {
                    parent3.classList.remove('active');
                    const childAnchor = parent3.querySelector('.has-dropdown');
                    if (childAnchor) {
                        childAnchor.classList.remove('active');
                    }
                }
                const parent4 = parent3.parentElement;
                if (parent4) {
                    parent4.classList.remove('in');
                }
                const parent5 = parent4.parentElement;
                if (parent5) {
                    parent5.classList.remove('active');
                }
            }
        };
        // activate menu item based on location
        const links = document.getElementsByClassName('side-nav-link-ref');
        let matchingMenuItem = null;
        // tslint:disable-next-line: prefer-for-of
        for (let i = 0; i < links.length; i++) {
            // reset the parents
            resetParents(links[i]);
        }
        // tslint:disable-next-line: prefer-for-of
        for (let i = 0; i < links.length; i++) {
            // tslint:disable-next-line: no-string-literal
            if (location.pathname === links[i]['pathname']) {
                matchingMenuItem = links[i];
                break;
            }
        }
        if (matchingMenuItem) {
            const parent = matchingMenuItem.parentElement;
            /**
             * TODO: This is hard coded way of expading/activating parent menu dropdown and working till level 3.
             * We should come up with non hard coded approach
             */
            if (parent) {
                parent.classList.add('active');
                const parent2 = parent.parentElement;
                if (parent2) {
                    parent2.classList.add('in');
                }
                const parent3 = parent2.parentElement;
                if (parent3) {
                    parent3.classList.add('active');
                    const childAnchor = parent3.querySelector('.has-dropdown');
                    if (childAnchor) {
                        childAnchor.classList.add('active');
                    }
                }
                const parent4 = parent3.parentElement;
                if (parent4) {
                    parent4.classList.add('in');
                }
                const parent5 = parent4.parentElement;
                if (parent5) {
                    parent5.classList.add('active');
                }
            }
        }
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
], NavbarComponent.prototype, "showMobileMenu", void 0);
NavbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-navbar',
        template: __webpack_require__(/*! raw-loader!./navbar.component.html */ "./node_modules/raw-loader/index.js!./src/app/layouts/navbar/navbar.component.html"),
        styles: [__webpack_require__(/*! ./navbar.component.scss */ "./src/app/layouts/navbar/navbar.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
], NavbarComponent);



/***/ }),

/***/ "./src/app/layouts/rightsidebar/data.ts":
/*!**********************************************!*\
  !*** ./src/app/layouts/rightsidebar/data.ts ***!
  \**********************************************/
/*! exports provided: inboxData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "inboxData", function() { return inboxData; });
const inboxData = [
    {
        image: 'assets/images/users/user-2.jpg',
        name: 'Tomaslau',
        message: 'I\'ve finished it! See you so...'
    },
    {
        image: 'assets/images/users/user-3.jpg',
        name: 'Stillnotdavid',
        message: 'This theme is awesome!'
    },
    {
        image: 'assets/images/users/user-4.jpg',
        name: 'Kurafire',
        message: 'Nice to meet you'
    },
    {
        image: 'assets/images/users/user-5.jpg',
        name: 'Shahedk',
        message: 'Hey! there I\'m available...'
    },
    {
        image: 'assets/images/users/user-6.jpg',
        name: 'Adhamdannaway',
        message: 'This theme is awesome!'
    },
    {
        image: 'assets/images/users/user-8.jpg',
        name: 'Arashasghari',
        message: 'Hey! there I\'m available...'
    },
    {
        image: 'assets/images/users/user-9.jpg',
        name: 'Joshaustin',
        message: 'I\'ve finished it! See you so...'
    }
];



/***/ }),

/***/ "./src/app/layouts/rightsidebar/rightsidebar.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/layouts/rightsidebar/rightsidebar.component.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dHMvcmlnaHRzaWRlYmFyL3JpZ2h0c2lkZWJhci5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/layouts/rightsidebar/rightsidebar.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/layouts/rightsidebar/rightsidebar.component.ts ***!
  \****************************************************************/
/*! exports provided: RightsidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RightsidebarComponent", function() { return RightsidebarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./data */ "./src/app/layouts/rightsidebar/data.ts");



let RightsidebarComponent = class RightsidebarComponent {
    constructor() { }
    ngOnInit() {
        // Right sidebar inbox data
        this.inboxData = _data__WEBPACK_IMPORTED_MODULE_2__["inboxData"];
    }
    /**
     * Hide the sidebar
     */
    hide() {
        document.body.classList.remove('right-bar-enabled');
    }
};
RightsidebarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-rightsidebar',
        template: __webpack_require__(/*! raw-loader!./rightsidebar.component.html */ "./node_modules/raw-loader/index.js!./src/app/layouts/rightsidebar/rightsidebar.component.html"),
        styles: [__webpack_require__(/*! ./rightsidebar.component.scss */ "./src/app/layouts/rightsidebar/rightsidebar.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], RightsidebarComponent);



/***/ }),

/***/ "./src/app/layouts/topbar/topbar.component.scss":
/*!******************************************************!*\
  !*** ./src/app/layouts/topbar/topbar.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dHMvdG9wYmFyL3RvcGJhci5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/layouts/topbar/topbar.component.ts":
/*!****************************************************!*\
  !*** ./src/app/layouts/topbar/topbar.component.ts ***!
  \****************************************************/
/*! exports provided: TopbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TopbarComponent", function() { return TopbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



let TopbarComponent = class TopbarComponent {
    constructor(router) {
        this.router = router;
        this.settingsButtonClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.mobileMenuButtonClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    ngOnInit() {
        // get the notifications
        this._fetchNotifications();
        this.openMobileMenu = false;
    }
    /**
     * Toggles the right sidebar
     */
    toggleRightSidebar() {
        this.settingsButtonClicked.emit();
    }
    /**
     * Toggle the menu bar when having mobile screen
     */
    toggleMobileMenu(event) {
        event.preventDefault();
        this.openMobileMenu = !this.openMobileMenu;
        this.mobileMenuButtonClicked.emit();
    }
    /**
     * Logout the user
     */
    logout() {
        this.router.navigate(['/account/login']);
    }
    /**
     * Fetches the notification
     * Note: For now returns the hard coded notifications
     */
    _fetchNotifications() {
        this.notificationItems = [{
                text: 'Caleb Flakelar commented on Admin',
                subText: '1 min ago',
                icon: 'mdi mdi-comment-account-outline',
                bgColor: 'primary',
                redirectTo: '/notification/1'
            },
            {
                text: 'New user registered.',
                subText: '5 min ago',
                icon: 'mdi mdi-account-plus',
                bgColor: 'info',
                redirectTo: '/notification/2'
            },
            {
                text: 'Cristina Pride',
                subText: 'Hi, How are you? What about our next meeting',
                icon: 'mdi mdi-comment-account-outline',
                bgColor: 'success',
                redirectTo: '/notification/3'
            },
            {
                text: 'Caleb Flakelar commented on Admin',
                subText: '2 days ago',
                icon: 'mdi mdi-comment-account-outline',
                bgColor: 'danger',
                redirectTo: '/notification/4'
            },
            {
                text: 'Caleb Flakelar commented on Admin',
                subText: '1 min ago',
                icon: 'mdi mdi-comment-account-outline',
                bgColor: 'primary',
                redirectTo: '/notification/5'
            },
            {
                text: 'New user registered.',
                subText: '5 min ago',
                icon: 'mdi mdi-account-plus',
                bgColor: 'info',
                redirectTo: '/notification/6'
            },
            {
                text: 'Cristina Pride',
                subText: 'Hi, How are you? What about our next meeting',
                icon: 'mdi mdi-comment-account-outline',
                bgColor: 'success',
                redirectTo: '/notification/7'
            },
            {
                text: 'Caleb Flakelar commented on Admin',
                subText: '2 days ago',
                icon: 'mdi mdi-comment-account-outline',
                bgColor: 'danger',
                redirectTo: '/notification/8'
            }];
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], TopbarComponent.prototype, "settingsButtonClicked", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], TopbarComponent.prototype, "mobileMenuButtonClicked", void 0);
TopbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-topbar',
        template: __webpack_require__(/*! raw-loader!./topbar.component.html */ "./node_modules/raw-loader/index.js!./src/app/layouts/topbar/topbar.component.html"),
        styles: [__webpack_require__(/*! ./topbar.component.scss */ "./src/app/layouts/topbar/topbar.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
], TopbarComponent);



/***/ }),

/***/ "./src/app/shared/ui/count-to.directive.ts":
/*!*************************************************!*\
  !*** ./src/app/shared/ui/count-to.directive.ts ***!
  \*************************************************/
/*! exports provided: CountToDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CountToDirective", function() { return CountToDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let CountToDirective = class CountToDirective {
    constructor(el) {
        this.el = el;
        this.from = 0;
        this.duration = 4;
        this.e = this.el.nativeElement;
        this.refreshInterval = 30;
        this.step = 0;
    }
    ngOnInit() {
    }
    ngOnChanges() {
        if (this.CountTo) {
            this.start();
        }
    }
    calculate() {
        this.duration = this.duration * 1000;
        this.steps = Math.ceil(this.duration / this.refreshInterval);
        this.increment = ((this.CountTo - this.from) / this.steps);
        this.num = this.from;
    }
    tick() {
        setTimeout(() => {
            this.num += this.increment;
            this.step++;
            if (this.step >= this.steps) {
                this.num = this.CountTo;
                this.e.textContent = this.CountTo.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
            }
            else {
                this.e.textContent = Math.round(this.num).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ','); // Math.round(this.num);
                this.tick();
            }
        }, this.refreshInterval);
    }
    start() {
        this.calculate();
        this.tick();
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
], CountToDirective.prototype, "CountTo", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], CountToDirective.prototype, "from", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], CountToDirective.prototype, "duration", void 0);
CountToDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
        // tslint:disable-next-line: directive-selector
        selector: '[CountTo]'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]])
], CountToDirective);



/***/ }),

/***/ "./src/app/shared/ui/emaillist/data.ts":
/*!*********************************************!*\
  !*** ./src/app/shared/ui/emaillist/data.ts ***!
  \*********************************************/
/*! exports provided: emailList, emailLabel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "emailList", function() { return emailList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "emailLabel", function() { return emailLabel; });
const emailList = [
    {
        icon: 'mdi mdi-inbox',
        name: 'Inbox',
        value: 8,
        text: 'danger'
    },
    {
        icon: 'mdi mdi-star',
        name: 'Starred'
    },
    {
        icon: 'mdi mdi-file-document-box',
        name: 'Draft',
        value: 32,
        text: 'info'
    },
    {
        icon: 'mdi mdi-send ',
        name: 'Sent Mail'
    },
    {
        icon: 'mdi mdi-delete',
        name: 'Trash'
    }
];
const emailLabel = [
    {
        text: 'info',
        name: 'Web App'
    },
    {
        text: 'warning',
        name: 'Recharge'
    },
    {
        text: 'dark',
        name: 'Wallet Balance'
    },
    {
        text: 'primary',
        name: 'Friends'
    },
    {
        text: 'success',
        name: 'Family'
    }
];



/***/ }),

/***/ "./src/app/shared/ui/emaillist/emaillist.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/shared/ui/emaillist/emaillist.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC91aS9lbWFpbGxpc3QvZW1haWxsaXN0LmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/shared/ui/emaillist/emaillist.component.ts":
/*!************************************************************!*\
  !*** ./src/app/shared/ui/emaillist/emaillist.component.ts ***!
  \************************************************************/
/*! exports provided: EmaillistComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmaillistComponent", function() { return EmaillistComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./data */ "./src/app/shared/ui/emaillist/data.ts");



let EmaillistComponent = class EmaillistComponent {
    constructor() { }
    ngOnInit() {
        /**
         * Fetches data
         */
        this._fetchData();
    }
    /**
     * fetches the list and label value
     */
    _fetchData() {
        // leftbar list
        this.emailList = _data__WEBPACK_IMPORTED_MODULE_2__["emailList"];
        // leftbar label
        this.emailLabel = _data__WEBPACK_IMPORTED_MODULE_2__["emailLabel"];
    }
};
EmaillistComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-emaillist',
        template: __webpack_require__(/*! raw-loader!./emaillist.component.html */ "./node_modules/raw-loader/index.js!./src/app/shared/ui/emaillist/emaillist.component.html"),
        styles: [__webpack_require__(/*! ./emaillist.component.scss */ "./src/app/shared/ui/emaillist/emaillist.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], EmaillistComponent);



/***/ }),

/***/ "./src/app/shared/ui/pagetitle/pagetitle.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/shared/ui/pagetitle/pagetitle.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC91aS9wYWdldGl0bGUvcGFnZXRpdGxlLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/shared/ui/pagetitle/pagetitle.component.ts":
/*!************************************************************!*\
  !*** ./src/app/shared/ui/pagetitle/pagetitle.component.ts ***!
  \************************************************************/
/*! exports provided: PagetitleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagetitleComponent", function() { return PagetitleComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let PagetitleComponent = class PagetitleComponent {
    constructor() { }
    ngOnInit() {
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
], PagetitleComponent.prototype, "breadcrumbItems", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], PagetitleComponent.prototype, "title", void 0);
PagetitleComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-page-title',
        template: __webpack_require__(/*! raw-loader!./pagetitle.component.html */ "./node_modules/raw-loader/index.js!./src/app/shared/ui/pagetitle/pagetitle.component.html"),
        styles: [__webpack_require__(/*! ./pagetitle.component.scss */ "./src/app/shared/ui/pagetitle/pagetitle.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], PagetitleComponent);



/***/ }),

/***/ "./src/app/shared/ui/portlet/portlet.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/shared/ui/portlet/portlet.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC91aS9wb3J0bGV0L3BvcnRsZXQuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/shared/ui/portlet/portlet.component.ts":
/*!********************************************************!*\
  !*** ./src/app/shared/ui/portlet/portlet.component.ts ***!
  \********************************************************/
/*! exports provided: PortletComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PortletComponent", function() { return PortletComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let PortletComponent = class PortletComponent {
    constructor() {
        // tslint:disable-next-line: no-output-on-prefix
        this.onContentRefresh = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    ngOnInit() {
        // set the value
        this.isCollapsed = false;
        this.isLoading = false;
        this.isVisible = true;
    }
    /**
     * Refreshes the content
     */
    refreshContent() {
        this.isLoading = true;
        // event emit to let parent know about data refresh
        this.onContentRefresh.emit();
        setTimeout(() => {
            this.isLoading = false;
        }, 2000);
    }
    /**
     * Removes self from dom
     */
    remove() {
        this.isVisible = false;
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], PortletComponent.prototype, "title", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], PortletComponent.prototype, "color", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], PortletComponent.prototype, "text", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], PortletComponent.prototype, "headerClass", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
], PortletComponent.prototype, "onContentRefresh", void 0);
PortletComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-portlet',
        template: __webpack_require__(/*! raw-loader!./portlet.component.html */ "./node_modules/raw-loader/index.js!./src/app/shared/ui/portlet/portlet.component.html"),
        styles: [__webpack_require__(/*! ./portlet.component.scss */ "./src/app/shared/ui/portlet/portlet.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], PortletComponent);



/***/ }),

/***/ "./src/app/shared/ui/preloader/preloader.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/shared/ui/preloader/preloader.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC91aS9wcmVsb2FkZXIvcHJlbG9hZGVyLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/shared/ui/preloader/preloader.component.ts":
/*!************************************************************!*\
  !*** ./src/app/shared/ui/preloader/preloader.component.ts ***!
  \************************************************************/
/*! exports provided: PreloaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PreloaderComponent", function() { return PreloaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let PreloaderComponent = class PreloaderComponent {
    constructor() {
        this.display = false;
    }
    ngOnInit() {
    }
    /**
     * Shows the loader
     */
    show() {
        this.display = true;
    }
    /**
     * Hides the loader
     */
    hide() {
        this.display = false;
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], PreloaderComponent.prototype, "display", void 0);
PreloaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-ui-preloader',
        template: __webpack_require__(/*! raw-loader!./preloader.component.html */ "./node_modules/raw-loader/index.js!./src/app/shared/ui/preloader/preloader.component.html"),
        styles: [__webpack_require__(/*! ./preloader.component.scss */ "./src/app/shared/ui/preloader/preloader.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], PreloaderComponent);



/***/ }),

/***/ "./src/app/shared/ui/slimscroll.directive.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/ui/slimscroll.directive.ts ***!
  \***************************************************/
/*! exports provided: SlimscrollDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SlimscrollDirective", function() { return SlimscrollDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var smooth_scrollbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! smooth-scrollbar */ "./node_modules/smooth-scrollbar/index.js");



let SlimscrollDirective = class SlimscrollDirective {
    constructor(el, renderer) {
        this.el = el;
        this.renderer = renderer;
    }
    ngAfterViewInit() {
        // smooth scroll
        smooth_scrollbar__WEBPACK_IMPORTED_MODULE_2__["default"].init(this.el.nativeElement);
    }
};
SlimscrollDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
        selector: '[appSlimScroll]'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]])
], SlimscrollDirective);



/***/ }),

/***/ "./src/app/shared/ui/ui.module.ts":
/*!****************************************!*\
  !*** ./src/app/shared/ui/ui.module.ts ***!
  \****************************************/
/*! exports provided: UIModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UIModule", function() { return UIModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var ng_click_outside__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-click-outside */ "./node_modules/ng-click-outside/lib/index.js");
/* harmony import */ var ng_click_outside__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(ng_click_outside__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _slimscroll_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./slimscroll.directive */ "./src/app/shared/ui/slimscroll.directive.ts");
/* harmony import */ var _count_to_directive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./count-to.directive */ "./src/app/shared/ui/count-to.directive.ts");
/* harmony import */ var _preloader_preloader_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./preloader/preloader.component */ "./src/app/shared/ui/preloader/preloader.component.ts");
/* harmony import */ var _pagetitle_pagetitle_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pagetitle/pagetitle.component */ "./src/app/shared/ui/pagetitle/pagetitle.component.ts");
/* harmony import */ var _portlet_portlet_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./portlet/portlet.component */ "./src/app/shared/ui/portlet/portlet.component.ts");
/* harmony import */ var _emaillist_emaillist_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./emaillist/emaillist.component */ "./src/app/shared/ui/emaillist/emaillist.component.ts");
/* harmony import */ var _widget_widget_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./widget/widget.component */ "./src/app/shared/ui/widget/widget.component.ts");













let UIModule = class UIModule {
};
UIModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        // tslint:disable-next-line: max-line-length
        declarations: [_slimscroll_directive__WEBPACK_IMPORTED_MODULE_6__["SlimscrollDirective"], _count_to_directive__WEBPACK_IMPORTED_MODULE_7__["CountToDirective"], _preloader_preloader_component__WEBPACK_IMPORTED_MODULE_8__["PreloaderComponent"], _pagetitle_pagetitle_component__WEBPACK_IMPORTED_MODULE_9__["PagetitleComponent"], _portlet_portlet_component__WEBPACK_IMPORTED_MODULE_10__["PortletComponent"], _emaillist_emaillist_component__WEBPACK_IMPORTED_MODULE_11__["EmaillistComponent"], _widget_widget_component__WEBPACK_IMPORTED_MODULE_12__["WidgetComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            ng_click_outside__WEBPACK_IMPORTED_MODULE_5__["ClickOutsideModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbCollapseModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbDatepickerModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbTimepickerModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbDropdownModule"]
        ],
        // tslint:disable-next-line: max-line-length
        exports: [_slimscroll_directive__WEBPACK_IMPORTED_MODULE_6__["SlimscrollDirective"], _count_to_directive__WEBPACK_IMPORTED_MODULE_7__["CountToDirective"], _preloader_preloader_component__WEBPACK_IMPORTED_MODULE_8__["PreloaderComponent"], _pagetitle_pagetitle_component__WEBPACK_IMPORTED_MODULE_9__["PagetitleComponent"], _portlet_portlet_component__WEBPACK_IMPORTED_MODULE_10__["PortletComponent"], _emaillist_emaillist_component__WEBPACK_IMPORTED_MODULE_11__["EmaillistComponent"], _widget_widget_component__WEBPACK_IMPORTED_MODULE_12__["WidgetComponent"]]
    })
], UIModule);



/***/ }),

/***/ "./src/app/shared/ui/widget/widget.component.scss":
/*!********************************************************!*\
  !*** ./src/app/shared/ui/widget/widget.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC91aS93aWRnZXQvd2lkZ2V0LmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/shared/ui/widget/widget.component.ts":
/*!******************************************************!*\
  !*** ./src/app/shared/ui/widget/widget.component.ts ***!
  \******************************************************/
/*! exports provided: WidgetComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WidgetComponent", function() { return WidgetComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let WidgetComponent = class WidgetComponent {
    constructor() { }
    ngOnInit() {
    }
};
WidgetComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-widget',
        template: __webpack_require__(/*! raw-loader!./widget.component.html */ "./node_modules/raw-loader/index.js!./src/app/shared/ui/widget/widget.component.html"),
        styles: [__webpack_require__(/*! ./widget.component.scss */ "./src/app/shared/ui/widget/widget.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], WidgetComponent);



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
const environment = {
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\PC\Desktop\Rafael\input-form\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map