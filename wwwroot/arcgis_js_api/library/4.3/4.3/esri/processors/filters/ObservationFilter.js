// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.3/esri/copyright.txt for details.
//>>built
define(["../../core/declare","dojo/_base/array","dojo/_base/lang","./TrackFilter"],function(k,l,h,m){var g=k([m],{declaredClass:"esri.processors.filters.ObservationFilter",getDefaults:function(){return h.mixin(this.inherited(arguments),{observationType:g.CURRENT})},observationType:null,run:function(a){this.trackIdField&&a&&(this.observationType===g.CURRENT?this._outputCurrentObservations(a):this._outputOtherObservations(a))},_outputCurrentObservations:function(a){var b,d,e;e=this._getTracksAffectedByChanges(a);
var c;b=0;for(d=e.length;b<d;b++){c=this._getItemsByParent(e[b],this.output);for(var f=0,g=c.length;f<g;f++)a=c.getItemAt(f),this.output.remove(a);(c=this._getItemsByParent(e[b],this.input))&&c.length&&this.output.add(c.getItemAt(c.length-1))}},_outputOtherObservations:function(a){var b=a.added||[],d,e,c=[],b=b.concat(a.removed||[]);if(b.length)for(a=0,e=b.length;a<e;a++)d=b[a],-1===l.indexOf(c,d[this.parentField])&&c.push(d[this.parentField]);a=0;for(e=c.length;a<e;a++){for(var b=this._getItemsByParent(c[a],
this.output),f=0,g=b.length;f<g;f++)d=b.getItemAt(f),this.output.remove(d);if((b=this._getItemsByParent(c[a],this.input))&&1<b.length)for(d=0,f=b.length;d<f-1;d++)this.output.add(b.getItemAt(d))}}});h.mixin(g,{CURRENT:"current",OTHER:"other"});return g});