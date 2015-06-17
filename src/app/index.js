'use strict';

import MainCtrl from './main/main.controller';
import NavbarCtrl from '../app/components/navbar/navbar.controller';

import ProductsCtrl from './products/products.controller';
import ProductsService from './products/products.service';

import CartService from '../app/shared/services/cart.service';

angular.module('scApp', ['ngAnimate', 'ngSanitize', 'ui.router'])
  .controller('MainCtrl', MainCtrl)
  .controller('NavbarCtrl', NavbarCtrl)
  .controller('ProductsCtrl', ProductsCtrl)
  .service('ProductsService', ProductsService)
  .service('CartService', CartService)

  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainCtrl'
      })
      .state('products', {
        url: '/products',
        templateUrl: 'app/products/products.html',
        controller: 'ProductsCtrl',
        controllerAs: 'products'
      });

    $urlRouterProvider.otherwise('/');
  })
;
