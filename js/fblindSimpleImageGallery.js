'use strict';
angular.module('fblindSimpleImageGallery', [])
  .directive('simpleImageGallery',
  function () {
    var template =  '<div id="simple-gallery" class="col-sm-12 image">' +
                      '<div class="item active">' +
                        '<img ng-src="{{ currentImage || images[0] }}" class="img-responsive">' +
                      '</div>' +
                    '</div>' +
                    '<div class="col-sm-12">' +
                      '<div class="row">' +
                        '<div class="col-sm-12 text-center">' +
                          '<ul>' +
                            '<li ng-repeat="image in images track by $index">' +
                              '<a ng-click="activateImg($index)" href="">' +
                                '<img ng-src="{{ image }}" class="img-responsive thumbnail-wizard">' +
                              '</a>' +
                            '</li>' +
                          '</ul>' +
                        '</div>' +
                      '</div>' +
                    '</div>';
    return {
      restrict: 'E',
      scope: {
        images: '='
      },
      template: template,
      controller: function ($scope) {
        $scope.activateImg = function (index) {
          $scope.currentImage = $scope.images[index];
        };
      },
      link: function (scope, element, attrs) {
        scope.currentImage = scope.images[0] || {};
      }
    };
  });
