// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.3/esri/copyright.txt for details.
//>>built
define("require exports ../Scheduler ../ObjectPool ../ArrayPool ../lang ./utils ./get ./wire".split(" "),function(E,g,z,A,B,r,m,k,t){function u(a){l.has(a)?d.splice(d.indexOf(a),1):l.add(a);d.push(a);n||(n=z.schedule(v))}function w(a){if(!a.removed){var e=a.callback,b=a.path,c=a.oldValue,d=a.target,q=k.valueOf(d,a.propertyPath,!0);r.equals(c,q)||(a.oldValue=q,e.call(d,q,c,b,d))}}function v(){if(n){n=null;var a=d;d=h.acquire();l.clear();for(var e=h.acquire(),b=0;b<a.length;b++){var c=a[b];w(c);c.removed&&
e.push(c)}for(b=0;b<d.length;b++)c=d[b],c.removed&&(e.push(c),l.delete(c),d.splice(b,1),--b);for(b=0;b<e.length;b++)p.pool.release(e[b]);h.release(a);h.release(e)}}function C(a,e,b){var c=m.parse(a,e,b,function(a,b,e){var d=k.valueOf(a,b,!0),f,x=t.wire(a,b,function(a,b){a.__accessor__.destroyed?c.remove():(f||(f=p.pool.acquire(a,b,d,e),d=null),u(f))});return{remove:m.once(function(){x.remove();f&&(f.removed=!0,u(f),f=null);c=x=d=null})}});return c}function D(a,e,b){var c=m.parse(a,e,b,function(a,
b,e){var d=k.valueOf(a,b,!0),f=!1;return t.wire(a,b,function(a,b){if(a.__accessor__.destroyed)c.remove();else if(!f){f=!0;var g=k.valueOf(a,b,!0);r.equals(d,g)||e.call(a,g,d,b,a);d=k.valueOf(a,b,!0);f=!1}})});return c}function y(a,e,b,c){void 0===c&&(c=!1);return!a.__accessor__||a.__accessor__.destroyed?{remove:function(){}}:c?D(a,e,b):C(a,e,b)}var p=function(){function a(a,b,c,d){this.target=a;this.path=b;this.oldValue=c;this.callback=d;this.removed=!1;this.propertyPath=m.pathToStringOrArray(b)}
a.prototype.release=function(){this.target=this.path=this.propertyPath=this.callback=this.oldValue=null;this.removed=!0};return a}();p.pool=new A(p,!0);var h=new B,l=new Set,d=h.acquire(),n;g.dispatchTarget=function(a){for(var e=h.copy(d),b=0;b<e.length;b++){var c=e[b];c.target===a&&(w(c),l.delete(c),d.splice(d.indexOf(c),1))}};g.removeTarget=function(a){for(var e=0;e<d.length;e++){var b=d[e];b.target===a&&(b.removed=!0)}};g.dispatch=v;g.watch=y;Object.defineProperty(g,"__esModule",{value:!0});g.default=
y});