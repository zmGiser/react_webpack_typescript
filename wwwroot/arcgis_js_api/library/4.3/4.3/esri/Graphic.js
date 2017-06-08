// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.3/esri/copyright.txt for details.
//>>built
define("require exports ./core/tsSupport/declareExtendsHelper ./core/tsSupport/decorateHelper ./core/accessorSupport/decorators dojo/_base/lang ./core/lang ./core/JSONSupport ./PopupTemplate ./geometry/support/jsonUtils ./symbols/support/jsonUtils".split(" "),function(d,t,h,f,e,k,l,m,n,p,q){var r=0;d=g=function(d){function b(a,c,b,e){a=d.call(this,a,c,b,e)||this;a.layer=null;a.popupTemplate=null;Object.defineProperty(a,"uid",{value:r++});return a}h(b,d);b.prototype.normalizeCtorArgs=function(a,c,
b,d){return a&&!a.declaredClass?a:{geometry:a,symbol:c,attributes:b,popupTemplate:d}};Object.defineProperty(b.prototype,"attributes",{set:function(a){var c=this._get("attributes");c!==a&&(this._set("attributes",a),this._notifyLayer("attributes",c,a))},enumerable:!0,configurable:!0});Object.defineProperty(b.prototype,"geometry",{set:function(a){var c=this._get("geometry");c!==a&&(this._set("geometry",a),this._notifyLayer("geometry",c,a))},enumerable:!0,configurable:!0});Object.defineProperty(b.prototype,
"symbol",{set:function(a){var c=this._get("symbol");c!==a&&(this._set("symbol",a),this._notifyLayer("symbol",c,a))},enumerable:!0,configurable:!0});Object.defineProperty(b.prototype,"visible",{set:function(a){var c=this._get("visible");c!==a&&(this._set("visible",a),this._notifyLayer("visible",c,a))},enumerable:!0,configurable:!0});b.prototype.getAttribute=function(a){return this.attributes&&this.attributes[a]};b.prototype.setAttribute=function(a,c){if(this.attributes){var b=this.getAttribute(a);
this.attributes[a]=c;this._notifyLayer("attributes",b,c,a)}else this.attributes=(b={},b[a]=c,b),this._notifyLayer("attributes",void 0,c,a)};b.prototype.getEffectivePopupTemplate=function(){return this.popupTemplate||this.layer&&this.layer.popupTemplate};b.prototype.toJSON=function(){return{geometry:this.geometry&&this.geometry.toJSON(),symbol:this.symbol&&this.symbol.toJSON(),attributes:k.mixin({},this.attributes),popupTemplate:this.popupTemplate&&this.popupTemplate.toJSON()}};b.prototype.clone=function(){return new g({attributes:l.clone(this.attributes),
geometry:this.geometry&&this.geometry.clone()||null,popupTemplate:this.popupTemplate&&this.popupTemplate.clone(),symbol:this.symbol&&this.symbol.clone()||null,visible:this.visible})};b.prototype._notifyLayer=function(a,b,d,e){this.layer&&(a={graphic:this,property:a,oldValue:b,newValue:d},e&&(a.attributeName=e),this.layer.graphicChanged(a))};return b}(e.declared(m));f([e.property({value:null})],d.prototype,"attributes",null);f([e.property({value:null,json:{read:p.fromJSON}})],d.prototype,"geometry",
null);f([e.property()],d.prototype,"layer",void 0);f([e.property({type:n})],d.prototype,"popupTemplate",void 0);f([e.property({value:null,json:{read:q.read}})],d.prototype,"symbol",null);f([e.property({value:!0,set:function(d){}})],d.prototype,"visible",null);d=g=f([e.subclass("esri.Graphic")],d);var g;return d});