'use strict';

class HomeController {
  constructor($scope,$state) {	
  	this.$scope = $scope;

    require('./home.less');
    
    this.homelist = "123";
  }
} 

export default angular
  .module('home.controller', [
  	require('../../directive/HomeList/HomeList.directive').name
  	])
  .controller('HomeController', HomeController);
