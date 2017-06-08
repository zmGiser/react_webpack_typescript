// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.3/esri/copyright.txt for details.
//>>built
define(["../../core/Accessor","../../core/kebabDictionary","../../geometry/support/jsonUtils"],function(d,e,c){var f=e({9001:"meters",9002:"feet",9036:"kilometers",9093:"miles",109012:"nautical-miles",109001:"yards"});return d.createSubclass({declaredClass:"esri.tasks.support.DistanceParameters",properties:{geometry1:null,geometry2:null,distanceUnit:null,geodesic:null},toJSON:function(){var a={},b=this.geometry1;b&&(a.geometry1=JSON.stringify({geometryType:c.getJsonType(b),geometry:b}),a.sr=JSON.stringify(this.geometry1.spatialReference.toJSON()));
if(b=this.geometry2)a.geometry2=JSON.stringify({geometryType:c.getJsonType(b),geometry:b});this.distanceUnit&&(a.distanceUnit=f.toJSON(this.distanceUnit));this.geodesic&&(a.geodesic=this.geodesic);return a}})});