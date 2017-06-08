// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.3/esri/copyright.txt for details.
//>>built
define("dojo/Evented dojo/Deferred ../../../core/declare ../../../portal/support/geometryServiceUtils ../../../tasks/support/ProjectParameters ../../../geometry/SpatialReference ../../../geometry/Point ../../../geometry/support/scaleUtils".split(" "),function(d,h,e,k,l,m,f,n){return e(d,{unitInMeters:1,spatialReference:null,constructor:function(a,b,c){this.spatialReference=b;this.unitInMeters=n.getUnitValueForSR(this.spatialReference);(this.geometryService=c)||k.create(a&&a.portalItem).then(function(a){this.geometryService=
a}.bind(this)).otherwise(function(){})},toGeographic:function(a){var b=new h,c=!0,d=this.spatialReference;if(!this.geometryService)return b.reject("Must specify geometryService in esri/config"),b;Array.isArray(a[0])&&"number"!==typeof a[0]||(a=[a],c=!1);a.forEach(function(g,b){g instanceof f||(a[b]=new f(g,d))});var e=new l({geometries:a,outSR:m.WGS84});this.geometryService.project(e).then(function(a){try{a=a.map(function(a){return[a.x,a.y]}),b.resolve(c?a:a[0])}catch(p){b.reject(p)}},function(a){b.reject(a)});
return b.promise},canProject:function(){return!!this.geometryService}})});