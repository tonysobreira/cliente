'use strict'

var module = angular.module('app.ctrl', []);

module.controller("Ctrl", ["$scope", "Serv", function($scope, Serv) {
    
        $scope.all = [];
        $scope.clientes = [];

        $scope.data = {
            id: null,
            name: null,
            email: null,
            password: null
        };

        _findAll();
                
        function _findAll() {
            
            Serv.findAll().then(function(res) {
                $scope.all = res.data; // success
            }, function(reason) {
                console.log("error occured"); // error
            }, function(value) {
                console.log("no callback");
            });
            
        }
        
        $scope.save = function() {

            if ($scope.data.id == null) {
                Serv.save($scope.data).then(_success, _error);
            } else {
                Serv.update($scope.data).then(_success, _error);
            }
            
        };

        $scope.delete = function(data) {
            Serv.delete(data).then(_success, _error);
        };

        function _success(res) {
            _findAll();
            _clearData();
        }
        
        function _error(res) {
            var data = res.data;
            var status = res.status;
            var header = res.header;
            var config = res.config;
            console.log("Error: " + status + ":" + data);
            console.log("Status: " + status + ", Header: " + header + ", Config:" + config );
        }

        function _clearData() {
            $scope.data.id = null;
            $scope.data.name = "";
            $scope.data.email = "";
            $scope.data.password = "";
        }

        $scope.edit = function(data) {
            $scope.data.id = data.id;
            $scope.data.name = data.name;
            $scope.data.email = data.email;
            $scope.data.password = data.password;
        };

        $scope.reset = function() {
            _clearData();
        }

        _findAllClients();
                
        function _findAllClients() {
            
            Serv.findAllClients().then(function(res) {
                console.log(res.data);
                $scope.clientes = res.data;
            }, function(reason) {
                console.log("error occured"); // error
            }, function(value) {
                console.log("no callback");
            });
            
        }
        
    }
]);