'use strict'

var app = angular.module('App', [ 'app.ctrl', 'app.serv', 'ngMaterial', 'ngMessages', 'material.svgAssetsCache']);

app.constant("CONSTANTS", {
	ALL : "findAll",
    SAVE : "save",
    DELETE : "delete",
    UPDATE : "update"
});