'use strict'

var module = angular.module('app.serv', []);

module.factory('Serv', ["$http", "CONSTANTS", function($http, CONSTANTS) {

    var service = {};

    service.findAllClientes = function() {
        return $http({
            method : 'GET',
            url : CONSTANTS.URL + 'cliente'
        });
    }
    
    service.saveCliente = function(cliente) {
        return $http({
            method : 'POST',
            url : CONSTANTS.URL + 'cliente',
            data : angular.toJson(cliente),
            headers : {'Content-Type' : 'application/json'}
        });
    }

    service.updateCliente = function(id, cliente) {
        return $http({
            method : 'PUT',
            url : CONSTANTS.URL + 'cliente/' + id,
            data : angular.toJson(cliente),
            headers : {'Content-Type' : 'application/json'}
        });
    }

    service.deleteCliente = function(id) {
        return $http({
            method : 'DELETE',
            url : CONSTANTS.URL + 'cliente/' + id,
            headers : {'Content-Type' : 'application/json'}
        });
    }

    return service;

}]);