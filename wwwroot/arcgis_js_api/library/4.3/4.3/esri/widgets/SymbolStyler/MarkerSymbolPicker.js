// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.3/esri/copyright.txt for details.
//>>built
require({cache:{"url:esri/widgets/SymbolStyler/templates/MarkerSymbolPicker.html":'\x3cdiv\x3e\r\n  \x3cdiv data-dojo-type\x3d"dijit/form/Select" data-dojo-attach-point\x3d"dap_markerCategoryInput" class\x3d"${css.typeInput} ${css.categorySelect}"\x3e\x3c/div\x3e\r\n  \x3cdiv class\x3d"${css.container} ${css.symbolViewport}" data-dojo-attach-point\x3d"dap_symbolViewport"\x3e\r\n    \x3cdiv class\x3d"${css.symbolGrid}" data-dojo-attach-point\x3d"dap_symbolGrid"\x3e\x3c!--symbols added dynamically--\x3e\x3c/div\x3e\r\n  \x3c/div\x3e\r\n\x3c/div\x3e\r\n'}});
define("../../core/domUtils ../../core/promiseUtils ../../portal/Portal ../../symbols/support/gfxUtils ../../symbols/support/symbolUtils ./support/symbolFetcher ./support/symbolStorage ./support/symbolUtils dijit/_TemplatedMixin dijit/_WidgetBase dijit/_WidgetsInTemplateMixin dijit/Tooltip dojo/dom-class dojo/dom-construct dojo/on dojo/promise/all dojo/store/Memory dojo/store/Observable dojo/i18n!./nls/SymbolStyler dojo/text!./templates/MarkerSymbolPicker.html dijit/form/Select".split(" "),function(q,
r,u,v,l,k,g,m,w,x,y,z,e,f,A,B,n,C,p,D){function E(a){var b={};a.get("data.items")&&a.data.items.forEach(function(a){b[a.name]=a.title});return b}var h={id:"customTypes",keywords:"custom symbols",name:p.customImages,title:p.customImages},c={root:"esri-marker-symbol-picker",symbolGrid:"esri-symbol-grid",symbol:"esri-symbol",noSymbols:"esri-no-symbols",defaultSymbols:"esri-default-symbols",loadingIndicator:"esri-loading-indicator",loading:"esri-loading",typeInput:"esri-type-input",categorySelect:"esri-marker-symbol-picker__category-select",
container:"esri-container",overlay:"esri-overlay",content:"esri-content",centerContainer:"esri-center-container",table:"esri-table",tableCell:"esri-table-cell",centerBlock:"esri-center-block",loadingSymbolViewport:"esri-marker-symbol-picker__symbolViewport--loading",symbolViewport:"esri-marker-symbol-picker__symbolViewport",selectedSymbol:"esri-symbol--selected",dimensionalityFlat:"esri-marker-symbol-picker--dimensionality-flat",dimensionalityVolumetric:"esri-marker-symbol-picker--dimensionality-volumetric",
blocked:"esri-marker-symbol-picker--blocked"};return x.createSubclass([w,y],{baseClass:c.root,declaredClass:"esri.widgets.SymbolStyler.MarkerSymbolPicker",templateString:D,css:c,postCreate:function(){this.inherited(arguments);this._sourceSymbolTypesStore=new n;this._symbolTypesStore=new C(new n);this._symbolItemStore=new n;this._symbolItemSurfaces=[];this._activeSymbolFetch={};this.dap_markerCategoryInput.set({labelAttr:"name",sortByLabel:!1});this._symbolTooltip=new z({connectId:this.dap_symbolGrid,
selector:".esri-symbol",getContent:function(a){a=m.getSymbolName(a.symbol);return this._symbolStyleNameToTooltip[a]||a||""}.bind(this)});this.own(this._symbolTooltip)},startup:function(){this.inherited(arguments);var a=this;A(this.dap_symbolGrid,".esri-symbol:click",function(){a._selectedNode&&e.remove(a._selectedNode,c.selectedSymbol);a._selectedNode=this;e.add(this,c.selectedSymbol);a.emit("symbol-select",{selection:this.symbol.clone()})});this.dap_markerCategoryInput.on("change",function(a){this.clearSelection();
this._fetchSymbols(a)}.bind(this));this.refresh()},_3dSymbolsFilter:"volumetric",_symbolTypesStore:null,_sourceSymbolTypesStore:null,_symbolItemStore:null,_symbolItemSurfaces:null,_noSymbolsOverlay:null,_symbolGrid:null,_portal:null,_portalLoadTimeoutInMs:3E3,_selectedNode:null,_symbolTooltip:null,_symbolStyleNameToTooltip:null,displayMode:"portal",portal:null,symbolSource:"symbol-set",addCustomImageSymbol:function(a){var b=a.clone();a=g.loadCustomItems()||[];var d=b.url.split("/").pop();a.some(function(a){return a.url===
b.url})||(b.type="esriPMS",b.name=d,a.push(b),this.dap_markerCategoryInput.set("value",h.id),this.clearSelection(),this._fetchSymbols(h.id))},_getDimensionality:function(){return this.symbolSource.split(":")[1]},_updateDisplay:function(){var a=this.dap_markerCategoryInput;this.clearSelection();"portal"===this.displayMode?(this._fetchSymbols(a.value),q.show(a.domNode),e.remove(this.domNode,c.defaultSymbols)):"default"===this.displayMode&&(this._updateSymbolOptions(k.getBasic()),q.hide(a.domNode),e.add(this.domNode,
c.defaultSymbols))},refresh:function(){this._blockInteraction(!0);this._setUpDimensionality();this._setUpSymbolCategories().then(this._updateDisplay.bind(this)).then(function(){this._blockInteraction(!1)}.bind(this))},_blockInteraction:function(a){this.dap_markerCategoryInput.set("disabled",a);e.toggle(this.domNode,c.blocked,a)},clearSelection:function(){f.empty(this.dap_symbolGrid)},_activeSymbolFetch:null,_fetchSymbols:function(a){var b;this._activeSymbolFetch.promise&&(this._activeSymbolFetch.promise.cancel(),
this._activeSymbolFetch.promise=null,this._activeSymbolFetch.id=null);if(b=this._symbolItemStore.query({id:a})[0])if(g.saveRecentItem(b),this._updateSymbolOptions(b.symbols),b.id!==h.id)return;b=this._symbolTypesStore.query({id:a})[0];this._activeSymbolFetch.id=a;this._showLoadingIndicator();this._activeSymbolFetch.promise=this._getSymbols(b).then(function(b){var d={id:a,symbols:b},c;this._symbolItemStore.put(d);g.saveRecentItem(d);(c=this._symbolTypesStore.query({defaultType:!0})[0])&&c.id===a&&
g.saveDefaultItem(d);return b}.bind(this)).then(function(b){a===this._activeSymbolFetch.id&&this._updateSymbolOptions(b)}.bind(this))},_showLoadingIndicator:function(){e.add(this.dap_symbolViewport,c.loadingSymbolViewport)},_hideLoadingIndicator:function(){e.remove(this.dap_symbolViewport,c.loadingSymbolViewport)},_showNoSymbolsMessage:function(){this._hideLoadingIndicator();e.add(this.domNode,c.noSymbols);this._placeNoSymbolsOverlay()},_placeNoSymbolsOverlay:function(){var a,b;this._noSymbolsOverlay||
(a=f.create("div",{"class":c.overlay}),b=f.create("div",{"class":c.centerContainer+" "+c.table},a),b=f.create("div",{"class":c.tableCell},b),b=f.create("div",{"class":c.centerBlock},b),f.create("div",{"class":c.content,innerHTML:p.symbolLoadError},b),f.place(a,this.domNode),this._noSymbolsOverlay=a)},_setUpSymbolCategories:function(){this._showLoadingIndicator();return this._initPortal().then(function(a){return 0===this.symbolSource.indexOf("symbol-set")?k.fetchSymbolSetSymbolSources(a):k.fetchWebStyleSymbolSources(a).then(function(a){return a.sort(function(a,
b){a=l.styleNameFromItem(a.portalItem);b=l.styleNameFromItem(b.portalItem);return a>b?1:a<b?-1:0})})}.bind(this)).then(function(a){var b=this._webStyleItemKeywordBlacklist;return a.filter(function(a){return!a.portalItem.typeKeywords.some(function(a){return b[a]})})}.bind(this)).then(function(a){if(0===this.symbolSource.indexOf("symbol-set"))return a;var b=this._getDimensionality(),d=a.map(function(a){return a.portalItem.fetchData()});return r.eachAlways(d).then(function(d){var c=[k.getPrimitives(b)];
d.forEach(function(d,t){if((d=d.value)&&d.items&&Array.isArray(d.items)&&0!==d.items.length){var F=l.styleNameFromItem(a[t].portalItem);(d.items[0].dimensionality||("EsriIconsStyle"===F?"flat":"volumetric"))===b&&c.push(a[t])}});return c})}.bind(this)).then(this._setUpSymbolSelect.bind(this)).otherwise(this._showNoSymbolsMessage.bind(this))},_webStyleItemKeywordBlacklist:{EsriThematicShapesStyle:!0},_setUpDimensionality:function(){var a="volumetric"===this._getDimensionality();e.toggle(this.domNode,
c.dimensionalityVolumetric,a);e.toggle(this.domNode,c.dimensionalityFlat,!a)},_setUpSymbolSelect:function(a){var b=this._sourceSymbolTypesStore,d,c;b.setData(a);a.forEach(function(a){a.defaultType&&(d=a.id)});if(a=g.loadRecentSymbolItem())if(c=b.query({id:a.id})[0])d=a.id;a=this._symbolTypesStore;a.setData(b.query());this.dap_markerCategoryInput.set("store",a);this.dap_markerCategoryInput.set("value",d,!1)},_injectCustomSymbolType:function(a){a.push(h);return a},_initPortal:function(){var a=this.portal||
u.getDefault(),b;b=r.timeout(a.load().then(function(){return this._portal=a}.bind(this)),this._portalLoadTimeoutInMs);this.own(b);return b},_getSymbols:function(a){return a.id===h.id?g.loadCustomItems():a.getSymbols().then(function(b){this._symbolStyleNameToTooltip=E(a);return 0===this.symbolSource.indexOf("symbol-set")?b:b.filter(function(b,c){var d=a.get("data.items");c=d&&d[c].dimensionality;b=m.getDimensionality(b);b=c||b;c=this.symbolSource.split(":")[1];return!c||b===c},this)}.bind(this))},
_updateSymbolOptions:function(a){this._symbolItemSurfaces.forEach(function(a){a&&a.destroy()});this._symbolItemSurfaces.length=0;var b="volumetric"===this._getDimensionality()?48:24;B(a.map(function(a){var d=f.create("div",{className:c.symbol});"point-symbol-3d"===a.type&&a.symbolLayers.forEach(function(a){a.get("material.color")&&("Icon"===a.type?a.material.color=v.defaultThematicColor.clone():"Object"===a.type&&(a.material.color=[255,255,255]))});d.symbol=a;return m.renderOnSurface(a,d,b)})).then(function(a){var b=
document.createDocumentFragment();a.forEach(function(a){b.appendChild(a)});this.dap_symbolGrid.appendChild(b);this._hideLoadingIndicator()}.bind(this))}})});