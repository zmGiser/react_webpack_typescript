// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.3/esri/copyright.txt for details.
//>>built
define(["require","exports","../../../symbols/support/jsonUtils"],function(e,b,c){function d(a){a.symbols=a.symbols.map(function(a){return c.fromJSON(a)});return a}b.loadRecentSymbolItem=function(){var a=sessionStorage.getItem("symbol-storage/symbol/recent");if(a)return d(a)};b.loadCustomItems=function(){return JSON.parse(localStorage.getItem("symbol-storage/symbol/custom"))};b.saveCustomItems=function(){};b.saveRecentItem=function(){};b.saveDefaultItem=function(){}});