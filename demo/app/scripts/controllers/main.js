'use strict';

/**
 * @ngdoc function
 * @name simpleImageGalleryApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the simpleImageGalleryApp
 */
angular.module('simpleImageGalleryApp')
  .controller('MainCtrl', function ($scope) {
    $scope.images = [
      'http://placehold.it/350x150',
      'http://placehold.it/800x600',
      'http://placehold.it/200x200',
      'http://placehold.it/400x200',
      'http://placehold.it/400x400',
      'http://placehold.it/1000x400',
      'http://placehold.it/900x700'
    ]
  });
