!function i(c,f,u){function s(r,e){if(!f[r]){if(!c[r]){var n="function"==typeof require&&require;if(!e&&n)return n(r,!0);if(a)return a(r,!0);var o=new Error("Cannot find module '"+r+"'");throw o.code="MODULE_NOT_FOUND",o}var t=f[r]={exports:{}};c[r][0].call(t.exports,function(e){return s(c[r][1][e]||e)},t,t.exports,i,c,f,u)}return f[r].exports}for(var a="function"==typeof require&&require,e=0;e<u.length;e++)s(u[e]);return s}({1:[function(e,r,n){"use strict";var o=angular.module("app");o.directive("replaceWith",function(){return{scope:!1,controllerAs:"replaceWith",bindToController:!0,scopeAs:"vm",controller:"isRouteController"}}),o.controller("isRouteController",["$scope","backend",function(e,r){var t=e.$parent.vm;function i(r){_.forEach(t.redefineRules,function(e){_.forEach(e.brands,function(o){_.forEach(r,function(e){var r,n;e.code===o.brand&&(r=e,n=o,console.log(r,n),_.forEach(r.props,function(e){n.props[e.code]&&_.extend(e,n.props[e.code])}))})})})}r.ready.then(function(){try{var e=JSON.parse(r.getAlias("web.brandConfig.redefine"))}catch(e){console.error("redefine rules parse error",e)}t.redefineRules=e}),e.$watch(angular.bind(this,function(){return t.searchResult}),function(n){n;var o=!1;_.forEach(t.redefineRules,function(e){_.forEach(e.routes,function(r){_.forEach(n.segmentRows,function(e){_.forEach(e,function(e){e.flightsInfo.origincity===r.from&&e.flightsInfo.destinationcity===r.to&&(console.log("we redefine some rules here, head to web.brandConfig.redefine"),o=!0)})})})}),o&&i(n.brandsList)})}])},{}],2:[function(e,r,n){"use strict";e("./directives/withRoute")},{"./directives/withRoute":1}]},{},[2]);
//# sourceMappingURL=controllers-alrosa.js.map
