'use strict';

describe('Controller: UCtrl', function () {

  // load the controller's module
  beforeEach(module('abcApp'));

  var UCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    UCtrl = $controller('UCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
