//>>built
define(["dojo/_base/kernel","dojo/_base/lang","dojo/_base/array"],function(c,g,f){c=g.getObject("dojox.collections",!0);c.DictionaryEntry=function(b,a){this.key=b;this.value=a;this.valueOf=function(){return this.value};this.toString=function(){return String(this.value)}};c.Iterator=function(b){var a=0;this.element=b[a]||null;this.atEnd=function(){return a>=b.length};this.get=function(){return this.atEnd()?null:this.element=b[a++]};this.map=function(a,c){return f.map(b,a,c)};this.reset=function(){a=
0;this.element=b[a]}};c.DictionaryIterator=function(b){var a=[],c={},e;for(e in b)c[e]||a.push(b[e]);var d=0;this.element=a[d]||null;this.atEnd=function(){return d>=a.length};this.get=function(){return this.atEnd()?null:this.element=a[d++]};this.map=function(b,c){return f.map(a,b,c)};this.reset=function(){d=0;this.element=a[d]}};return c});