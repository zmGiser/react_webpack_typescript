// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.3/esri/copyright.txt for details.
//>>built
define("require exports ../../../../core/tsSupport/generatorHelper ../../../../core/tsSupport/awaiterHelper ../../../../core/asyncUtils ../../../../core/ObjectPool ../../support/aaBoundingBox ../../support/aaBoundingRect".split(" "),function(u,v,h,m,q,r,f,n){var p=new r(Array,function(c){return f.set(c,f.ZERO)},null,10,5),t=n.create();return function(){function c(b,d,e){this.graphics3DSymbol=d;this.graphic=b;this._graphics=e;this._labelGraphics=[];this.addedToSpatialIndex=!1}c.prototype.initialize=
function(b,d){this._graphics.forEach(function(e){e&&e.initialize(b,d)})};c.prototype.clearLabelGraphics=function(){this._labelGraphics.forEach(function(b){return b.destroy()});this._labelGraphics.length=0};c.prototype.addLabelGraphic=function(b,d,e){this._labelGraphics.push(b);b.initialize(d,e)};c.prototype.isDraped=function(){for(var b=0;b<this._graphics.length;b++){var d=this._graphics[b];if(d&&d.isDraped())return!0}return!1};c.prototype.areVisibilityFlagsSet=function(b,d){for(var e=!0,a=0;a<this._graphics.length;a++){var g=
this._graphics[a];g&&(e=e&&g.areVisibilityFlagsSet(b,d))}for(a=0;a<this._labelGraphics.length;a++)(g=this._labelGraphics[a])&&(e=e&&g.areVisibilityFlagsSet(b,d));return e};c.prototype.setVisibilityFlag=function(b,d){var e=!1,a=function(a){a&&(e=a.setVisibilityFlag(b,d)||e)};this._graphics.forEach(a);this._labelGraphics.forEach(a);return e};c.prototype.destroy=function(){var b=function(b){b&&b.destroy()};this._graphics.forEach(b);this._graphics.length=0;this._labelGraphics.forEach(b);this._labelGraphics.length=
0};c.prototype.getBSRadius=function(){return this._graphics.reduce(function(b,d){return Math.max(b,d.getBSRadius())},0)};c.prototype.getCenterObjectSpace=function(){return this._graphics[0].getCenterObjectSpace()};c.prototype.getProjectedBoundingBox=function(b,d,e,a){return m(this,void 0,void 0,function(){var c=this;return h(this,function(g){switch(g.label){case 0:return a||(a={boundingBox:null,requiresDrapedElevation:!1}),a.boundingBox?f.set(a.boundingBox,f.NEGATIVE_INFINITY):a.boundingBox=f.create(f.NEGATIVE_INFINITY),
a.requiresDrapedElevation=!1,[4,q.forEach(this._graphics,function(g){return m(c,void 0,void 0,function(){var c,k,l;return h(this,function(h){switch(h.label){case 0:if(!g)return[2];c=g.isDraped()?d:b;k=p.acquire();return[4,g.getProjectedBoundingBox(c,e,k)];case 1:return l=h.sent(),isFinite(l[2])&&isFinite(l[5])||(a.requiresDrapedElevation=!0),l&&f.expand(a.boundingBox,k),p.release(k),[2]}})})})];case 1:return g.sent(),f.allFinite(a.boundingBox)||n.allFinite(f.toRect(a.boundingBox,t))?[2,a]:[2,null]}})})};
c.prototype.mustAlignToTerrain=function(){for(var b=this._graphics.length,d=0;d<b;d++){var e=this._graphics[d];if(e&&e.mustAlignToTerrain())return!0}b=this._labelGraphics.length;for(d=0;d<b;d++)if((e=this._labelGraphics[d])&&e.mustAlignToTerrain())return!0;return!1};c.prototype.alignWithElevation=function(b,d){for(var e=this._graphics.length,a=0;a<e;a++){var c=this._graphics[a];c&&c.alignWithElevation(b,d)}e=this._labelGraphics.length;for(a=0;a<e;a++)(c=this._labelGraphics[a])&&this._labelGraphics[a].alignWithElevation(b,
d)};c.prototype.setDrawOrder=function(b,d,e){e[this.graphics3DSymbol.symbol.id]=!0;for(var a=this._graphics.length,c=0;c<a;c++){var f=this._graphics[c];f&&f.setDrawOrder(b+(1-(1+c)/a),d,e)}};return c}()});