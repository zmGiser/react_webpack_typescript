// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.3/esri/copyright.txt for details.
//>>built
define(["require","exports","../../../../core/tsSupport/extendsHelper","../../../input/InputHandler"],function(a,d,e,f){a=function(a){function b(b,d){var c=a.call(this,"esri.views.3d.input.handlers.PointerDownCancelAnimation",!0)||this;c.view=b;c.registerIncoming("pointer-down",d,function(a){return c._handlePointerDown(a)});return c}e(b,a);b.prototype._handlePointerDown=function(a){this.view.navigation.stop()};return b}(f.InputHandler);d.PointerDownCancelAnimation=a});