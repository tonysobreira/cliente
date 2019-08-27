'use strict'

var module = angular.module('app.serv', []);

module.factory('Serv', ["$http", "CONSTANTS", function($http, CONSTANTS) {

            var service = {};
            
            service.findAllClients = function() {
				return $http({
                    method : 'GET',
                    url : 'https://clientrestservice.herokuapp.com/api/clients/'
                });
			}

			service.findAll = function() {
				return $http({
                    method : 'GET',
                    url : 'https://datacaptureserver.herokuapp.com/' + CONSTANTS.ALL
                });
			}

			service.save = function(data) {
				return $http({
                    method : 'POST',
                    url : 'https://datacaptureserver.herokuapp.com/' + CONSTANTS.SAVE,
                    data : angular.toJson(data),
                    headers : {'Content-Type' : 'application/json'}
                });
            }
            
            service.delete = function(data) {
				return $http({
                    method : 'DELETE',
                    url : 'https://datacaptureserver.herokuapp.com/' + CONSTANTS.DELETE,
                    data : angular.toJson(data),
                    headers : {'Content-Type' : 'application/json'}
                });
            }

            service.update = function(data) {
				return $http({
                    method : 'PUT',
                    url : 'https://datacaptureserver.herokuapp.com/' + CONSTANTS.UPDATE,
                    data : angular.toJson(data),
                    headers : {'Content-Type' : 'application/json'}
                });
			}

			return service;

}]);