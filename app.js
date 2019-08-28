'use strict'

var app = angular.module('App', [ 'app.ctrl', 'app.serv', 'ngMaterial', 'ngMessages', 'material.svgAssetsCache']);

app.constant("CONSTANTS", {
    URL : "http://localhost:8080/"
});