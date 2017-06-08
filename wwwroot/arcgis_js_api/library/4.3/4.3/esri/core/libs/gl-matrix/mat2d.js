// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.3/esri/copyright.txt for details.
//>>built
define(["./common"],function(m){var d={create:function(){var a=new m.ARRAY_TYPE(6);a[0]=1;a[1]=0;a[2]=0;a[3]=1;a[4]=0;a[5]=0;return a},clone:function(a){var b=new m.ARRAY_TYPE(6);b[0]=a[0];b[1]=a[1];b[2]=a[2];b[3]=a[3];b[4]=a[4];b[5]=a[5];return b},copy:function(a,b){a[0]=b[0];a[1]=b[1];a[2]=b[2];a[3]=b[3];a[4]=b[4];a[5]=b[5];return a},identity:function(a){a[0]=1;a[1]=0;a[2]=0;a[3]=1;a[4]=0;a[5]=0;return a},fromValues:function(a,b,c,h,k,f){var e=new m.ARRAY_TYPE(6);e[0]=a;e[1]=b;e[2]=c;e[3]=h;e[4]=
k;e[5]=f;return e},set:function(a,b,c,h,k,f,e){a[0]=b;a[1]=c;a[2]=h;a[3]=k;a[4]=f;a[5]=e;return a},invert:function(a,b){var c=b[0],h=b[1],k=b[2],f=b[3],e=b[4];b=b[5];var g=c*f-h*k;if(!g)return null;g=1/g;a[0]=f*g;a[1]=-h*g;a[2]=-k*g;a[3]=c*g;a[4]=(k*b-f*e)*g;a[5]=(h*e-c*b)*g;return a},determinant:function(a){return a[0]*a[3]-a[1]*a[2]},multiply:function(a,b,c){var h=b[0],k=b[1],f=b[2],e=b[3],g=b[4];b=b[5];var d=c[0],m=c[1],n=c[2],p=c[3],r=c[4];c=c[5];a[0]=h*d+f*m;a[1]=k*d+e*m;a[2]=h*n+f*p;a[3]=k*
n+e*p;a[4]=h*r+f*c+g;a[5]=k*r+e*c+b;return a}};d.mul=d.multiply;d.rotate=function(a,b,c){var h=b[0],d=b[1],f=b[2],e=b[3],g=b[4];b=b[5];var l=Math.sin(c);c=Math.cos(c);a[0]=h*c+f*l;a[1]=d*c+e*l;a[2]=h*-l+f*c;a[3]=d*-l+e*c;a[4]=g;a[5]=b;return a};d.scale=function(a,b,c){var h=b[1],d=b[2],f=b[3],e=b[4],g=b[5],l=c[0];c=c[1];a[0]=b[0]*l;a[1]=h*l;a[2]=d*c;a[3]=f*c;a[4]=e;a[5]=g;return a};d.translate=function(a,b,c){var h=b[0],d=b[1],f=b[2],e=b[3],g=b[4];b=b[5];var l=c[0];c=c[1];a[0]=h;a[1]=d;a[2]=f;a[3]=
e;a[4]=h*l+f*c+g;a[5]=d*l+e*c+b;return a};d.fromRotation=function(a,b){var c=Math.sin(b);b=Math.cos(b);a[0]=b;a[1]=c;a[2]=-c;a[3]=b;a[4]=0;a[5]=0;return a};d.fromScaling=function(a,b){a[0]=b[0];a[1]=0;a[2]=0;a[3]=b[1];a[4]=0;a[5]=0;return a};d.fromTranslation=function(a,b){a[0]=1;a[1]=0;a[2]=0;a[3]=1;a[4]=b[0];a[5]=b[1];return a};d.str=function(a){return"mat2d("+a[0]+", "+a[1]+", "+a[2]+", "+a[3]+", "+a[4]+", "+a[5]+")"};d.frob=function(a){return Math.sqrt(Math.pow(a[0],2)+Math.pow(a[1],2)+Math.pow(a[2],
2)+Math.pow(a[3],2)+Math.pow(a[4],2)+Math.pow(a[5],2)+1)};d.add=function(a,b,c){a[0]=b[0]+c[0];a[1]=b[1]+c[1];a[2]=b[2]+c[2];a[3]=b[3]+c[3];a[4]=b[4]+c[4];a[5]=b[5]+c[5];return a};d.subtract=function(a,b,c){a[0]=b[0]-c[0];a[1]=b[1]-c[1];a[2]=b[2]-c[2];a[3]=b[3]-c[3];a[4]=b[4]-c[4];a[5]=b[5]-c[5];return a};d.sub=d.subtract;d.multiplyScalar=function(a,b,c){a[0]=b[0]*c;a[1]=b[1]*c;a[2]=b[2]*c;a[3]=b[3]*c;a[4]=b[4]*c;a[5]=b[5]*c;return a};d.multiplyScalarAndAdd=function(a,b,c,d){a[0]=b[0]+c[0]*d;a[1]=
b[1]+c[1]*d;a[2]=b[2]+c[2]*d;a[3]=b[3]+c[3]*d;a[4]=b[4]+c[4]*d;a[5]=b[5]+c[5]*d;return a};d.exactEquals=function(a,b){return a[0]===b[0]&&a[1]===b[1]&&a[2]===b[2]&&a[3]===b[3]&&a[4]===b[4]&&a[5]===b[5]};d.equals=function(a,b){var c=a[0],d=a[1],k=a[2],f=a[3],e=a[4];a=a[5];var g=b[0],l=b[1],q=b[2],n=b[3],p=b[4];b=b[5];return Math.abs(c-g)<=m.EPSILON*Math.max(1,Math.abs(c),Math.abs(g))&&Math.abs(d-l)<=m.EPSILON*Math.max(1,Math.abs(d),Math.abs(l))&&Math.abs(k-q)<=m.EPSILON*Math.max(1,Math.abs(k),Math.abs(q))&&
Math.abs(f-n)<=m.EPSILON*Math.max(1,Math.abs(f),Math.abs(n))&&Math.abs(e-p)<=m.EPSILON*Math.max(1,Math.abs(e),Math.abs(p))&&Math.abs(a-b)<=m.EPSILON*Math.max(1,Math.abs(a),Math.abs(b))};return d});