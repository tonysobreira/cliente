'use strict'

var module = angular.module('app.ctrl', []);

module.controller("Ctrl", ["$scope", "$mdDialog", "Serv", function($scope, $mdDialog, Serv) {
    
        $scope.clientes = [];

        $scope.cliente = {
            id: null,
            nome: null,
            cpf: null,
            dataNascimento: null,
            telefone: null,
            email: null,
            endereco: null,
            cep: null,
            bairro: null,
            complemento: null,
            cidade: null,
            estado: null
        };

        $scope.saveCliente = function() {

            if ($scope.cliente.id == null) {
                Serv.saveCliente($scope.cliente).then(_sucesso, _erro);
            } else {
                Serv.updateCliente($scope.cliente.id, $scope.cliente).then(_sucesso, _erro);
            }

        }

        _findAllClients();
                
        function _findAllClients() {
            
            Serv.findAllClientes().then(function(res) {
                $scope.clientes = res.data;
            });
            
        }

        function _sucesso(res) {
            _findAllClients();
            _clearCliente();
        }

        function _clearCliente() {
            $scope.cliente.id = null;
            $scope.cliente.nome = null;
            $scope.cliente.cpf = null;
            $scope.cliente.dataNascimento = null;
            $scope.cliente.telefone = null;
            $scope.cliente.email = null;
            $scope.cliente.endereco = null;
            $scope.cliente.cep = null;
            $scope.cliente.bairro = null;
            $scope.cliente.complemento = null;
            $scope.cliente.cidade = null;
            $scope.cliente.estado = null;
        }
        
        function _erro(res) {
            var data = res.data;
            var status = res.status;
            var header = res.header;
            var config = res.config;
            console.log("Erro: " + status + ":" + data);
            console.log("Status: " + status + ", Header: " + header + ", Config:" + config );
        }

        $scope.deleteCliente = function(cliente) {
            Serv.deleteCliente(cliente.id).then(_sucesso, _erro);
        };

        $scope.editCliente = function(cliente) {
            $scope.cliente = cliente;
        };

        $scope.reset = function() {
            _clearCliente();
            _findAllClients();
        }

        $scope.openDialog = function(ev, cliente) {
            //alert(cliente.id);

            $mdDialog.show(
                $mdDialog.alert()
                  .parent(angular.element(document.querySelector('#myApp')))
                  .clickOutsideToClose(true)
                  .title(cliente.nome)
                  .textContent(
                    "Nome: " + cliente.nome + " - " +
                    " Email: " + cliente.email + " - " +
                    " CPF: " + cliente.cpf + " - " +
                    " Data de Nascimento: " + moment(cliente.dataNascimento).format("DD/MM/YYYY") + " - " +
                    " Telefone: " + cliente.telefone + " - " +
                    " Endereço: " + cliente.endereco + " - " +
                    " Complemento: " + cliente.complemento + " - " +
                    " Bairro: " + cliente.bairro + " - " +
                    " Estado: " + cliente.estado + " - " +
                    " Cidade: " + cliente.cidade + " - " +
                    " CEP: " + cliente.cep
                  )
                  .ariaLabel('Cliente Dialog')
                  .ok('Fechar')
                  .targetEvent(ev)
            );

        }
        
    }
]);