'use strict';
/*jshint esnext: true */

import MainCtrl from './main/main.controller';
import NavbarCtrl from '../components/navbar/navbar.controller';

var deps = ['ngAnimate', 'ngCookies', 'ngTouch', 'ngSanitize', 'restangular', 'ui.router', 'ng-polymer-elements']

var modules = [
  'Profile',
  'Library'
];

var loadModules = function() {
  deps = deps.concat(modules);

  var tribes = angular.module('tribes', deps.)
    .controller('MainCtrl', MainCtrl)
    .controller('NavbarCtrl', NavbarCtrl)
    
    .config(function ($stateProvider, $urlRouterProvider) {
      $stateProvider
        .state('home', {
          url: '/',
          templateUrl: 'app/main/main.html',
          controller: 'MainCtrl'
        });

      $urlRouterProvider.otherwise('/');
    })
  ;
};

loadModules();
