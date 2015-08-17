'use strict';

describe('mainController', function(){
    var scope; //Variable scope de test
    //Injection de notre propre dependance
    beforeEach(angular.mock.module('creayh'));
    //Inclusion des variables rootScope et controller
    beforeEach(angular.mock.inject(function($rootScope, $controller){
        //Cree un scope vide
        scope = $rootScope.$new();
        //Declare le controlleur et lui inject le scope vide
        $controller('mainController', {$scope: scope});
    }));
    //Début des tests
    it('should have variable userNotFound = false', function(){
        expect(scope.userNotFound).toBe(false);
    });
    it('should have variable loaded = false', function(){
        expect(scope.loaded).toBe(false);
    });
});