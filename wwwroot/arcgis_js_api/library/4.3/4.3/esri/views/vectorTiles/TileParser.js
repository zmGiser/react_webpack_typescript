// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.3/esri/copyright.txt for details.
//>>built
define("require exports dojo/promise/all ../../core/promiseUtils ../../core/executeAsync ../../core/pbf ./SourceLayerData ./Feature ./BackgroundBucket ./FillBucket ./LineBucket ./SymbolBucket ./TileClipper".split(" "),function(N,O,G,C,D,u,H,I,J,K,L,M,k){return function(){function c(b,a,e){this._pbfTile=new u(new Uint8Array(b),new DataView(b));this._tile=a;this._connection=e;this._layers=a.getLayers();e=a.tileKey.split("/").map(parseFloat);var f=e[0];b=e[1];e=e[2];this._level=f;a.refKey&&(a=a.refKey.split("/").map(parseFloat)[0],
a=f-a,0<a&&(f=(1<<a)-1,this._tileClipper=new k.TileClipper(a,b&f,e&f)));this._tileClipper||(this._tileClipper=new k.SimpleBuilder)}c.prototype.parse=function(){for(var b=this,a=this._parseTileData(this._pbfTile),e=this._layers,f=e.length,c=this._level,d,h=[],l={},k=new Set,f=f-1;0<=f;f--)if(d=e[f],!(d.minzoom&&c<d.minzoom||d.maxzoom&&c>=d.maxzoom||d.layout&&"none"===d.layout.visibility))if(0===d.type)d=this._createBucket(d),h.push(d);else{var q=d.sourceLayer,m=a[q];m&&(k.add(q),d=this._createBucket(d))&&
(d.layerIndex=f,d.layerExtent=m.extent,(m=l[q])||(m=l[q]=[]),m.push(d))}var u=10*(this._level+1),n=[],v=[],r=[],E=[],w=this._tileClipper,x=new Set,y={},z=[];k.forEach(function(b){return z.push(b)});var t=0,p=0,A=z.length;return D(function(){if(6===b._tile.status)return!0;switch(t){case 0:if(p<A)for(var d=z[p++],e=a[d],f=l[d],d=e.getData();d.next(2);){var c=new I(d.getMessage(),e),g=c.values;if(g&&(g=g._minzoom)&&g>=u)continue;for(var B=0,F=f;B<F.length;B++)g=F[B],g.pushFeature(c)}else{e=b._tile;for(d in l)for(f=
l[d],c=0;c<f.length;c++)g=f[c],g.hasFeatures()&&(3===g.layer.type?(n.push(g),e.addBucket(g)):g.layer.refLayerId?r.push(g):(v.push(g),E[g.layer.id]=g));t=1;p=0;A=n.length}break;case 1:p<A?n[p++].getResources(w,x,y):t=2}return 2===t},50).then(function(){if(6===b._tile.status)return[];var a=[],d=b._tile.getWorkerTileHandler(),c;0<x.size&&(c=d.fetchSprites(x,b._connection),a.push(c));for(var e in y)c=y[e],0<c.size&&(c=d.fetchGlyphs(b._tile.tileKey,e,c,b._connection),a.push(c));return G(a).then(function(a){if(6===
b._tile.status)return[];var d=0,c=0,e=v.length;return D(function(){if(6===b._tile.status)return!0;switch(d){case 0:if(c<e){var a=v[c++];a.processFeatures(w,b._tile);h.push(a)}else d=1,c=0,e=r.length;break;case 1:for(var g=0;g<r.length;g++){var a=r[g],f=E[a.layer.refLayerId];f&&(f.assignBufferInfo(a),h.push(a))}d=2;c=0;e=n.length;break;case 2:c<e?(a=n[c++],a.processFeatures(w,b._tile),h.push(a)):d=3}return 3===d},50).then(function(){h.sort(function(a,b){return a.layerIndex-b.layerIndex});return h})}).otherwise(function(a){return C.reject(Error(a))})}).otherwise(function(a){return C.reject(Error(a))})};
c.prototype._parseTileData=function(b){for(var a={};b.next();)switch(b.tag()){case 3:var c=new H(b.getMessage());a[c.name]=c;break;default:b.skip()}return a};c.prototype._createBucket=function(b){switch(b.type){case 0:return this._createBackgroundBucket(b);case 1:return this._createFillBucket(b);case 2:return this._createLineBucket(b);case 3:return this._createSymbolBucket(b)}};c.prototype._createBackgroundBucket=function(b){return new J(b,this._level)};c.prototype._createFillBucket=function(b){var a=
this._tile;return new K(b,this._level,a.polygonVertexBuffer,a.polygonIndexBuffer,a.polygonOutlineVertexBuffer,a.polygonOutlineIndexBuffer)};c.prototype._createLineBucket=function(b){var a=this._tile;return new L(b,this._level,a.lineVertexBuffer,a.lineIndexBuffer,a.lineJoinVertexBuffer)};c.prototype._createSymbolBucket=function(b){var a=this._tile;return new M(b,this._level,a.markerVertexBuffer,a.markerIndexBuffer,a.textVertexBuffer,a.textIndexBuffer,a.placementEngine,a.getWorkerTileHandler())};return c}()});