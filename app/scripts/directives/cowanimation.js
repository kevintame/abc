'use strict';

/**
 * @ngdoc directive
 * @name abcApp.directive:appleAnimation
 * @description
 * # appleAnimation
 */
angular.module('abcApp')
  .directive('cowAnimation', function () {
    return {
      restrict: 'EA',
      link: function postLink(scope, element) {
        var s = new Snap(element[0]);
		Snap.load('images/cow.svg', function (a) {
    	s.append(a);
		});
      }
    };
  });

