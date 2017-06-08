// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.3/esri/copyright.txt for details.
//>>built
define("../../../../core/Accessor ../../../../core/Evented ../../webgl-engine/lib/Camera ../../support/mathUtils ../../lib/glMatrix dojo/on".split(" "),function(k,l,m,h,n,f){var d=n.vec4d.create();return k.createSubclass([l],{declaredClass:"esri.views.3d.navigation.mixins.CamerasMixin",properties:{targetCamera:{get:function(){return this.cameras.target}},currentCamera:{get:function(){return this.cameras.current}},windowSize:{set:function(a){var b=a[0],c=a[1],g=!1,d=this.cameras.target.x-this.cameras.target.padding[3],
e=this.cameras.target.y-this.cameras.target.padding[2];if(this.cameras.target.width+d!==b||this.cameras.target.height+e!==c)this.cameras.target.width=b-d,this.cameras.target.height=c-e,this.targetChanged(),g=!0;d=this.cameras.current.x-this.cameras.current.padding[3];e=this.cameras.current.y-this.cameras.current.padding[2];if(this.cameras.current.width+d!==b||this.cameras.current.height+e!==c)this.cameras.current.width=b-d,this.cameras.current.height=c-e,this.currentChanged(),g=!0;g&&this.currentHasReachedTarget()&&
this.currentReachedTarget();this._set("windowSize",a)}},padding:{set:function(a){var b=!1,c=!1;d[0]=a.top;d[1]=a.right;d[2]=a.bottom;d[3]=a.left;h.vectorEquals(this.cameras.current.padding,d)||(this.cameras.current.padding=d,c=!0);h.vectorEquals(this.cameras.target.padding,d)||(this.cameras.target.padding=d,b=!0);b&&this.targetChanged();c&&this.currentChanged();this.currentHasReachedTarget()&&(b||c)&&this.currentReachedTarget()}}},initialize:function(){var a=this.getInitialCamera();this.cameras={current:a,
target:a.copy()}},currentHasReachedTarget:function(){return this.cameras.current.equals(this.cameras.target)},currentHasAlmostReachedTarget:function(){return this.cameras.current.almostEquals(this.cameras.target,5E-4/this.renderUnitInMeters)},setCamera:function(a,b){this.pan&&this.pan.continuous&&this.pan.continuous.stop();this.pan&&this.pan.momentum&&(this.pan.momentum=null);this.cameras.target.copyFrom(a);var c=!(b&&b.internalUpdate)||!this._targetCameraChangedByElevationUpdate;c&&this._targetCameraBeforeElevationUpdate.copyFrom(a);
this._targetCameraAnimated.copyFrom(this.cameras.target);this.applyConstraints(this._targetCameraAnimated,!0);a=!1;this.constrainTargetEyeByElevation()&&(a=!0);this.applyConstraints(this.cameras.target,!0)&&(a=!0);this.fixTargetUpVector();this.currentHasReachedTarget()?(this.targetChanged(),a&&c&&(this._targetCameraChangedByElevationUpdate=!0),this.currentReachedTarget()):(void 0===b||void 0===b.animate||b.animate?this.targetAnimatedChanged(!1,b,!0):(this.targetAndCurrentChanged(!0),a=!0),a&&c&&(this._targetCameraChangedByElevationUpdate=
!0),this._autoUpdateTiltConstraint())},getTargetCamera:function(){console.warn("[Navigation.getTargetCamera()] deprecated; use .targetCamera instead");return this.targetCamera},getCurrentCamera:function(){console.warn("[Navigation.getCurrentCamera()] deprecated; use .currentCamera instead");return this.currentCamera},_cameraFromEyeCenterUp:function(a,b,c){var d=this.cameras.target.copy();d.eye=a;d.center=b;d.up=c;return d},setCameraFromEyeAndCenter:function(a,b,c){this.setCamera(this._cameraFromEyeCenterUp(a,
b,this.cameras.target.up),c)},setCameraFromEyeCenterAndUp:function(a,b,c,d){this.setCamera(this._cameraFromEyeCenterUp(a,b,c),d)},_cameraEvents:{},_prepareCameraEvent:function(a,b){var c=this._cameraEvents[a];c||(c={camera:new m},this._cameraEvents[a]=c);c.camera.copyFrom(b);return c},emitWithCamera:function(a,b){f.emit(this,a,this._prepareCameraEvent(a,b))},targetChanged:function(a){this.inherited(arguments);this.cameras.target.markViewDirty();var b=this._prepareCameraEvent("targetViewChanged",this.cameras.target);
b.interruptedAnimation=!!a;b.finishedAnimation=!1;f.emit(this,"targetViewChanged",b)},targetAnimatedChanged:function(a,b,c){this.targetChanged(a);this.startAnimation(b,c)},targetAndCurrentChanged:function(a){this.targetChanged(a);this.setCurrentToTarget(!1,a)},currentChanged:function(){this.inherited(arguments);this.cameras.current.markViewDirty();this.emitWithCamera("currentViewChanged",this.cameras.current)},currentReachedTarget:function(a,b){this.inherited(arguments);this.currentChanged();if(!(this.pan&&
this.pan.continuous&&this.pan.continuous.active)){var c=this._prepareCameraEvent("currentViewReachedTarget",this.cameras.current);c.finishedAnimation=!!a;c.interruptedAnimation=!!b;f.emit(this,"currentViewReachedTarget",c)}},setCurrentToTarget:function(a,b){this.cameras.current.copyFrom(this.cameras.target);this.currentReachedTarget(a,b)}})});