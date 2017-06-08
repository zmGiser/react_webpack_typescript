// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.3/esri/copyright.txt for details.
//>>built
define(["./internal/MaterialUtil","../lib/Util","../lib/RenderSlot","../lib/DefaultVertexBufferLayouts"],function(p,u,v,w){var t=u.VertexAttrConstants,x=function(q,r){p.basicGLMaterialConstructor(this,q);var d=r.get("simple"),h=q.getColor();this.beginSlot=function(b){return b===v.OPAQUE_MATERIAL};this.getProgram=function(){return d};this.bind=function(b,a){b.bindProgram(d);d.setUniform4fv("color",h);b.setBlendingEnabled(1>h[3]);b.setBlendFunctionSeparate(b.gl.SRC_ALPHA,b.gl.ONE_MINUS_SRC_ALPHA,b.gl.ONE,
b.gl.ONE_MINUS_SRC_ALPHA);b.setDepthTestEnabled(!0)};this.release=function(b){};this.bindView=function(b,a){p.bindView(a.origin,a.view,d)};this.bindInstance=function(b,a){d.setUniformMatrix4fv("model",a.transformation)};this.getDrawMode=function(b){return b.gl.LINES}};return function(q,r){p.basicMaterialConstructor(this,r);var d=w.Pos3,h=d.getStride();this.dispose=function(){};this.setParameterValues=function(){};this.getColor=function(){return q};this.getOutputAmount=function(b){return b*h*2};this.getVertexBufferLayout=
function(){return d};this.fillInterleaved=function(b,a,d,k,l,e){d=b.faces.indices[t.POSITION];var f=b.vertexAttr[t.POSITION];b=d.length;k=f.size;f=f.data;if(void 0!==a&&3<=k)for(var g=0;g<b;++g){var c=k*d[g],m=f[c],n=f[c+1],c=f[c+2];l[e]=a[0]*m+a[4]*n+a[8]*c+a[12];l[e+1]=a[1]*m+a[5]*n+a[9]*c+a[13];l[e+2]=a[2]*m+a[6]*n+a[10]*c+a[14];e+=h;c=k*d[g+(2==g%3?-2:1)];m=f[c];n=f[c+1];c=f[c+2];l[e]=a[0]*m+a[4]*n+a[8]*c+a[12];l[e+1]=a[1]*m+a[5]*n+a[9]*c+a[13];l[e+2]=a[2]*m+a[6]*n+a[10]*c+a[14];e+=h}else for(g=
0;g<b;++g){c=k*d[g];for(a=0;a<k;++a)l[e+a]=f[c+a];e+=h;c=k*d[g+(2==g%3?-2:1)];for(a=0;a<k;++a)l[e+a]=f[c+a];e+=h}};this.intersect=p.intersectTriangleGeometry;this.getGLMaterials=function(){return{color:x,depthShadowMap:void 0,normal:void 0,depth:void 0,highlight:void 0}};this.getAllTextureIds=function(){return[]}}});