webpackJsonp([42],{1712:function(f,g){YUI.add("squarespace-image-zoom",function(b){b.namespace("Squarespace");var c=b.Squarespace.ImageZoom=b.Base.create("image-zoom",b.Base,[],{initializer:function(){this._shouldInitialize()&&(this.get("host")?this._initializeZoom():console.warn("[squarespace-image-zoom]: Missing host attribute."))},destructor:function(){if(this._shouldInitialize()){var a=this.get("zoomedNode");a&&a.remove(!0);this.get("host").removeClass(c.CSS_PREFIX).removeClass(c.CSS_PREFIX+"--behavior-"+
this.get("behavior"));this.get("dropzone").setStyle("position","").removeClass(c.CSS_PREFIX+"-dropzone");this._zoomTriggerEvent&&this._zoomTriggerEvent.detach();this._mouseMoveEvent&&this._mouseMoveEvent.detach();this._mouseOutEvent&&this._mouseOutEvent.detach();this._resizeEvent&&this._resizeEvent.detach();this._resizeEvent=this._mouseOutEvent=this._mouseMoveEvent=this._zoomTriggerEvent=null}},_bindUI:function(){var a=this.get("host");this._zoomTriggerEvent=a.on(this.get("behavior"),this._toggleZoom,
this);this._mouseMoveEvent=a.on("mousemove",this._trackMovement,this);this._mouseOutEvent=a.on("mouseout",this._zoomOut,this);this._resizeEvent=b.one(window).on("resize",this._refresh,this)},_shouldInitialize:function(){return!b.UA.mobile&&Modernizr.csstransforms},_initializeZoom:function(){var a=this.get("host"),b=a.one("img"),e=this.get("dropzone");a.addClass(c.CSS_PREFIX);a.addClass(c.CSS_PREFIX+"--behavior-"+this.get("behavior"));e.addClass(c.CSS_PREFIX+"-dropzone");"static"===e.getStyle("position")&&
e.setStyle("position","relative");if(b.getAttribute("src"))this._appendZoomedNode(),this._bindUI();else b.once("load",function(){this._appendZoomedNode();this._bindUI()},this)},_appendZoomedNode:function(){var a=this.get("host").one("img"),d=a.getAttribute("data-src");if(!d)return console.warn("[squarespace-image-zoom]: Host image did not load properly; missing data-src."),null;var e=a.getAttribute("data-image-dimensions");e||(e=a.get("clientWidth")+"x"+a.get("clientHeight"));(a=a.getAttribute("data-image-focal-point"))||
(a="0.5,0.5");d=b.Node.create('<div class="'+c.CSS_PREFIX+'-duplicate"><img src="'+d+"?format="+this._getSquarespaceSizeForWidth()+'" data-image-dimensions="'+e+'" data-image-focal-point="'+a+'"></div>');d.setStyle("transform","scale("+this.get("zoom")+")");d.one("img").plug(b.Squarespace.Loader2,{load:!0,mode:"fill"});this.set("zoomedNode",d);this.get("dropzone").append(d)},_refresh:function(){var a=this.get("host").one("img").getAttribute("data-src"),b=this.get("zoomedNode").one("img");b.setAttribute("src",
a+"?format="+this._getSquarespaceSizeForWidth());b.fire("refresh")},_toggleZoom:function(a){this.get("_isZoomedIn")?this._zoomOut():this._zoomIn(a);a.stopPropagation()},_zoomIn:function(a){this.get("host").addClass("is-zoomed");this.set("_isZoomedIn",!0);this._trackMovement(a)},_zoomOut:function(){this.get("host").removeClass("is-zoomed");this.set("_isZoomedIn",!1)},_trackMovement:function(a){if(this.get("_isZoomedIn")){var b=Math.max(100*((a.pageX-this.get("host").getX())/this.get("host").get("clientWidth")),
0);a=Math.max(100*((a.pageY-this.get("host").getY())/this.get("host").get("clientHeight")),0);this.get("zoomedNode").setStyle("transformOrigin",b+"% "+a+"%")}},_getSquarespaceSizeForWidth:function(){var a=this.get("host").one("img").get("clientWidth");return b.Squarespace.Rendering.getSquarespaceSizeForWidth(a*this.get("zoom"))}},{CSS_PREFIX:"sqs-image-zoom",ATTRS:{host:{value:null,validator:function(a){a=b.one(a);return b.instanceOf(a,b.Node)&&a.one("img")&&2>a.all("img").size()},writeOnce:!0},dropzone:{valueFn:function(){return this.get("host")},
validator:function(a){return b.instanceOf(b.one(a),b.Node)},writeOnce:!0},behavior:{value:"hover",validator:function(a){return"hover"!==a&&"click"!==a?(console.warn("[squarespace-image-zoom]: Not a valid behavior, defaulting to hover."),!1):!0},writeOnce:!0},zoom:{value:1.5,validator:function(a){("number"!==typeof a||1>=a||5<a)&&console.warn("[squarespace-image-zoom]: Not a valid zoom value, defaulting to 1.5.");return!0},writeOnce:!0},_isZoomedIn:{value:!1}}})},"1.0",{requires:"base event node squarespace-image-loader squarespace-rendering yui-base".split(" ")})},
8084:function(f,g,b){b(1712)}},[8084]);
