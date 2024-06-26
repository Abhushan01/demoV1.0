import{a as Oe}from"./chunk-PCJD52SQ.js";import{$ as Ne,A as ee,B as D,C as te,D as _,E as ie,F as ne,G as s,H as a,I as c,J as k,K as p,L as g,M as re,N as u,O as oe,P as T,Q as Ee,R as Ae,S as Fe,T as se,U as xe,V as Ie,W as Se,a as y,aa as ae,b as M,d as Ce,e as Ve,f as be,g as U,h as N,i as De,j as V,k as E,l as we,m as O,n as Me,o as b,p as m,q as J,r as A,s as F,v as K,w as Q,x as P,y as h,z as d}from"./chunk-KVAEKYYQ.js";var He=(()=>{let e=class e{constructor(i,r){this._renderer=i,this._elementRef=r,this.onChange=o=>{},this.onTouched=()=>{}}setProperty(i,r){this._renderer.setProperty(this._elementRef.nativeElement,i,r)}registerOnTouched(i){this.onTouched=i}registerOnChange(i){this.onChange=i}setDisabledState(i){this.setProperty("disabled",i)}};e.\u0275fac=function(r){return new(r||e)(d(ee),d(Q))},e.\u0275dir=m({type:e});let t=e;return t})(),Le=(()=>{let e=class e extends He{};e.\u0275fac=(()=>{let i;return function(o){return(i||(i=K(e)))(o||e)}})(),e.\u0275dir=m({type:e,features:[D]});let t=e;return t})(),he=new E(""),yt={provide:he,useExisting:N(()=>fe),multi:!0},fe=(()=>{let e=class e extends Le{writeValue(i){this.setProperty("checked",i)}};e.\u0275fac=(()=>{let i;return function(o){return(i||(i=K(e)))(o||e)}})(),e.\u0275dir=m({type:e,selectors:[["input","type","checkbox","formControlName",""],["input","type","checkbox","formControl",""],["input","type","checkbox","ngModel",""]],hostBindings:function(r,o){r&1&&p("change",function(f){return o.onChange(f.target.checked)})("blur",function(){return o.onTouched()})},features:[T([yt]),D]});let t=e;return t})(),_t={provide:he,useExisting:N(()=>Z),multi:!0};function Ct(){let t=se()?se().getUserAgent():"";return/android (\d+)/.test(t.toLowerCase())}var Vt=new E(""),Z=(()=>{let e=class e extends He{constructor(i,r,o){super(i,r),this._compositionMode=o,this._composing=!1,this._compositionMode==null&&(this._compositionMode=!Ct())}writeValue(i){let r=i??"";this.setProperty("value",r)}_handleInput(i){(!this._compositionMode||this._compositionMode&&!this._composing)&&this.onChange(i)}_compositionStart(){this._composing=!0}_compositionEnd(i){this._composing=!1,this._compositionMode&&this.onChange(i)}};e.\u0275fac=function(r){return new(r||e)(d(ee),d(Q),d(Vt,8))},e.\u0275dir=m({type:e,selectors:[["input","formControlName","",3,"type","checkbox"],["textarea","formControlName",""],["input","formControl","",3,"type","checkbox"],["textarea","formControl",""],["input","ngModel","",3,"type","checkbox"],["textarea","ngModel",""],["","ngDefaultControl",""]],hostBindings:function(r,o){r&1&&p("input",function(f){return o._handleInput(f.target.value)})("blur",function(){return o.onTouched()})("compositionstart",function(){return o._compositionStart()})("compositionend",function(f){return o._compositionEnd(f.target.value)})},features:[T([_t]),D]});let t=e;return t})();function w(t){return t==null||(typeof t=="string"||Array.isArray(t))&&t.length===0}function We(t){return t!=null&&typeof t.length=="number"}var $e=new E(""),qe=new E(""),bt=/^(?=.{1,254}$)(?=.{1,64}@)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,C=class{static min(e){return Dt(e)}static max(e){return wt(e)}static required(e){return Mt(e)}static requiredTrue(e){return Et(e)}static email(e){return At(e)}static minLength(e){return Ft(e)}static maxLength(e){return xt(e)}static pattern(e){return It(e)}static nullValidator(e){return ze(e)}static compose(e){return Qe(e)}static composeAsync(e){return tt(e)}};function Dt(t){return e=>{if(w(e.value)||w(t))return null;let n=parseFloat(e.value);return!isNaN(n)&&n<t?{min:{min:t,actual:e.value}}:null}}function wt(t){return e=>{if(w(e.value)||w(t))return null;let n=parseFloat(e.value);return!isNaN(n)&&n>t?{max:{max:t,actual:e.value}}:null}}function Mt(t){return w(t.value)?{required:!0}:null}function Et(t){return t.value===!0?null:{required:!0}}function At(t){return w(t.value)||bt.test(t.value)?null:{email:!0}}function Ft(t){return e=>w(e.value)||!We(e.value)?null:e.value.length<t?{minlength:{requiredLength:t,actualLength:e.value.length}}:null}function xt(t){return e=>We(e.value)&&e.value.length>t?{maxlength:{requiredLength:t,actualLength:e.value.length}}:null}function It(t){if(!t)return ze;let e,n;return typeof t=="string"?(n="",t.charAt(0)!=="^"&&(n+="^"),n+=t,t.charAt(t.length-1)!=="$"&&(n+="$"),e=new RegExp(n)):(n=t.toString(),e=t),i=>{if(w(i.value))return null;let r=i.value;return e.test(r)?null:{pattern:{requiredPattern:n,actualValue:r}}}}function ze(t){return null}function Ze(t){return t!=null}function Ye(t){return Fe(t)?Ce(t):t}function Xe(t){let e={};return t.forEach(n=>{e=n!=null?y(y({},e),n):e}),Object.keys(e).length===0?null:e}function Je(t,e){return e.map(n=>n(t))}function St(t){return!t.validate}function Ke(t){return t.map(e=>St(e)?e:n=>e.validate(n))}function Qe(t){if(!t)return null;let e=t.filter(Ze);return e.length==0?null:function(n){return Xe(Je(n,e))}}function et(t){return t!=null?Qe(Ke(t)):null}function tt(t){if(!t)return null;let e=t.filter(Ze);return e.length==0?null:function(n){let i=Je(n,e).map(Ye);return be(i).pipe(Ve(Xe))}}function it(t){return t!=null?tt(Ke(t)):null}function Pe(t,e){return t===null?[e]:Array.isArray(t)?[...t,e]:[t,e]}function nt(t){return t._rawValidators}function rt(t){return t._rawAsyncValidators}function le(t){return t?Array.isArray(t)?t:[t]:[]}function H(t,e){return Array.isArray(t)?t.includes(e):t===e}function ke(t,e){let n=le(e);return le(t).forEach(r=>{H(n,r)||n.push(r)}),n}function Te(t,e){return le(e).filter(n=>!H(t,n))}var L=class{constructor(){this._rawValidators=[],this._rawAsyncValidators=[],this._onDestroyCallbacks=[]}get value(){return this.control?this.control.value:null}get valid(){return this.control?this.control.valid:null}get invalid(){return this.control?this.control.invalid:null}get pending(){return this.control?this.control.pending:null}get disabled(){return this.control?this.control.disabled:null}get enabled(){return this.control?this.control.enabled:null}get errors(){return this.control?this.control.errors:null}get pristine(){return this.control?this.control.pristine:null}get dirty(){return this.control?this.control.dirty:null}get touched(){return this.control?this.control.touched:null}get status(){return this.control?this.control.status:null}get untouched(){return this.control?this.control.untouched:null}get statusChanges(){return this.control?this.control.statusChanges:null}get valueChanges(){return this.control?this.control.valueChanges:null}get path(){return null}_setValidators(e){this._rawValidators=e||[],this._composedValidatorFn=et(this._rawValidators)}_setAsyncValidators(e){this._rawAsyncValidators=e||[],this._composedAsyncValidatorFn=it(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn||null}get asyncValidator(){return this._composedAsyncValidatorFn||null}_registerOnDestroy(e){this._onDestroyCallbacks.push(e)}_invokeOnDestroyCallbacks(){this._onDestroyCallbacks.forEach(e=>e()),this._onDestroyCallbacks=[]}reset(e=void 0){this.control&&this.control.reset(e)}hasError(e,n){return this.control?this.control.hasError(e,n):!1}getError(e,n){return this.control?this.control.getError(e,n):null}},I=class extends L{get formDirective(){return null}get path(){return null}},B=class extends L{constructor(){super(...arguments),this._parent=null,this.name=null,this.valueAccessor=null}},W=class{constructor(e){this._cd=e}get isTouched(){return!!this._cd?.control?.touched}get isUntouched(){return!!this._cd?.control?.untouched}get isPristine(){return!!this._cd?.control?.pristine}get isDirty(){return!!this._cd?.control?.dirty}get isValid(){return!!this._cd?.control?.valid}get isInvalid(){return!!this._cd?.control?.invalid}get isPending(){return!!this._cd?.control?.pending}get isSubmitted(){return!!this._cd?.submitted}},Nt={"[class.ng-untouched]":"isUntouched","[class.ng-touched]":"isTouched","[class.ng-pristine]":"isPristine","[class.ng-dirty]":"isDirty","[class.ng-valid]":"isValid","[class.ng-invalid]":"isInvalid","[class.ng-pending]":"isPending"},Di=M(y({},Nt),{"[class.ng-submitted]":"isSubmitted"}),ot=(()=>{let e=class e extends W{constructor(i){super(i)}};e.\u0275fac=function(r){return new(r||e)(d(B,2))},e.\u0275dir=m({type:e,selectors:[["","formControlName",""],["","ngModel",""],["","formControl",""]],hostVars:14,hostBindings:function(r,o){r&2&&ie("ng-untouched",o.isUntouched)("ng-touched",o.isTouched)("ng-pristine",o.isPristine)("ng-dirty",o.isDirty)("ng-valid",o.isValid)("ng-invalid",o.isInvalid)("ng-pending",o.isPending)},features:[D]});let t=e;return t})(),st=(()=>{let e=class e extends W{constructor(i){super(i)}};e.\u0275fac=function(r){return new(r||e)(d(I,10))},e.\u0275dir=m({type:e,selectors:[["","formGroupName",""],["","formArrayName",""],["","ngModelGroup",""],["","formGroup",""],["form",3,"ngNoForm",""],["","ngForm",""]],hostVars:16,hostBindings:function(r,o){r&2&&ie("ng-untouched",o.isUntouched)("ng-touched",o.isTouched)("ng-pristine",o.isPristine)("ng-dirty",o.isDirty)("ng-valid",o.isValid)("ng-invalid",o.isInvalid)("ng-pending",o.isPending)("ng-submitted",o.isSubmitted)},features:[D]});let t=e;return t})();var G="VALID",R="INVALID",x="PENDING",j="DISABLED";function pe(t){return(Y(t)?t.validators:t)||null}function Ot(t){return Array.isArray(t)?et(t):t||null}function me(t,e){return(Y(e)?e.asyncValidators:t)||null}function Pt(t){return Array.isArray(t)?it(t):t||null}function Y(t){return t!=null&&!Array.isArray(t)&&typeof t=="object"}function at(t,e,n){let i=t.controls;if(!(e?Object.keys(i):i).length)throw new U(1e3,"");if(!i[n])throw new U(1001,"")}function lt(t,e,n){t._forEachChild((i,r)=>{if(n[r]===void 0)throw new U(1002,"")})}var S=class{constructor(e,n){this._pendingDirty=!1,this._hasOwnPendingAsyncValidator=!1,this._pendingTouched=!1,this._onCollectionChange=()=>{},this._parent=null,this.pristine=!0,this.touched=!1,this._onDisabledChange=[],this._assignValidators(e),this._assignAsyncValidators(n)}get validator(){return this._composedValidatorFn}set validator(e){this._rawValidators=this._composedValidatorFn=e}get asyncValidator(){return this._composedAsyncValidatorFn}set asyncValidator(e){this._rawAsyncValidators=this._composedAsyncValidatorFn=e}get parent(){return this._parent}get valid(){return this.status===G}get invalid(){return this.status===R}get pending(){return this.status==x}get disabled(){return this.status===j}get enabled(){return this.status!==j}get dirty(){return!this.pristine}get untouched(){return!this.touched}get updateOn(){return this._updateOn?this._updateOn:this.parent?this.parent.updateOn:"change"}setValidators(e){this._assignValidators(e)}setAsyncValidators(e){this._assignAsyncValidators(e)}addValidators(e){this.setValidators(ke(e,this._rawValidators))}addAsyncValidators(e){this.setAsyncValidators(ke(e,this._rawAsyncValidators))}removeValidators(e){this.setValidators(Te(e,this._rawValidators))}removeAsyncValidators(e){this.setAsyncValidators(Te(e,this._rawAsyncValidators))}hasValidator(e){return H(this._rawValidators,e)}hasAsyncValidator(e){return H(this._rawAsyncValidators,e)}clearValidators(){this.validator=null}clearAsyncValidators(){this.asyncValidator=null}markAsTouched(e={}){this.touched=!0,this._parent&&!e.onlySelf&&this._parent.markAsTouched(e)}markAllAsTouched(){this.markAsTouched({onlySelf:!0}),this._forEachChild(e=>e.markAllAsTouched())}markAsUntouched(e={}){this.touched=!1,this._pendingTouched=!1,this._forEachChild(n=>{n.markAsUntouched({onlySelf:!0})}),this._parent&&!e.onlySelf&&this._parent._updateTouched(e)}markAsDirty(e={}){this.pristine=!1,this._parent&&!e.onlySelf&&this._parent.markAsDirty(e)}markAsPristine(e={}){this.pristine=!0,this._pendingDirty=!1,this._forEachChild(n=>{n.markAsPristine({onlySelf:!0})}),this._parent&&!e.onlySelf&&this._parent._updatePristine(e)}markAsPending(e={}){this.status=x,e.emitEvent!==!1&&this.statusChanges.emit(this.status),this._parent&&!e.onlySelf&&this._parent.markAsPending(e)}disable(e={}){let n=this._parentMarkedDirty(e.onlySelf);this.status=j,this.errors=null,this._forEachChild(i=>{i.disable(M(y({},e),{onlySelf:!0}))}),this._updateValue(),e.emitEvent!==!1&&(this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._updateAncestors(M(y({},e),{skipPristineCheck:n})),this._onDisabledChange.forEach(i=>i(!0))}enable(e={}){let n=this._parentMarkedDirty(e.onlySelf);this.status=G,this._forEachChild(i=>{i.enable(M(y({},e),{onlySelf:!0}))}),this.updateValueAndValidity({onlySelf:!0,emitEvent:e.emitEvent}),this._updateAncestors(M(y({},e),{skipPristineCheck:n})),this._onDisabledChange.forEach(i=>i(!1))}_updateAncestors(e){this._parent&&!e.onlySelf&&(this._parent.updateValueAndValidity(e),e.skipPristineCheck||this._parent._updatePristine(),this._parent._updateTouched())}setParent(e){this._parent=e}getRawValue(){return this.value}updateValueAndValidity(e={}){this._setInitialStatus(),this._updateValue(),this.enabled&&(this._cancelExistingSubscription(),this.errors=this._runValidator(),this.status=this._calculateStatus(),(this.status===G||this.status===x)&&this._runAsyncValidator(e.emitEvent)),e.emitEvent!==!1&&(this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._parent&&!e.onlySelf&&this._parent.updateValueAndValidity(e)}_updateTreeValidity(e={emitEvent:!0}){this._forEachChild(n=>n._updateTreeValidity(e)),this.updateValueAndValidity({onlySelf:!0,emitEvent:e.emitEvent})}_setInitialStatus(){this.status=this._allControlsDisabled()?j:G}_runValidator(){return this.validator?this.validator(this):null}_runAsyncValidator(e){if(this.asyncValidator){this.status=x,this._hasOwnPendingAsyncValidator=!0;let n=Ye(this.asyncValidator(this));this._asyncValidationSubscription=n.subscribe(i=>{this._hasOwnPendingAsyncValidator=!1,this.setErrors(i,{emitEvent:e})})}}_cancelExistingSubscription(){this._asyncValidationSubscription&&(this._asyncValidationSubscription.unsubscribe(),this._hasOwnPendingAsyncValidator=!1)}setErrors(e,n={}){this.errors=e,this._updateControlsErrors(n.emitEvent!==!1)}get(e){let n=e;return n==null||(Array.isArray(n)||(n=n.split(".")),n.length===0)?null:n.reduce((i,r)=>i&&i._find(r),this)}getError(e,n){let i=n?this.get(n):this;return i&&i.errors?i.errors[e]:null}hasError(e,n){return!!this.getError(e,n)}get root(){let e=this;for(;e._parent;)e=e._parent;return e}_updateControlsErrors(e){this.status=this._calculateStatus(),e&&this.statusChanges.emit(this.status),this._parent&&this._parent._updateControlsErrors(e)}_initObservables(){this.valueChanges=new P,this.statusChanges=new P}_calculateStatus(){return this._allControlsDisabled()?j:this.errors?R:this._hasOwnPendingAsyncValidator||this._anyControlsHaveStatus(x)?x:this._anyControlsHaveStatus(R)?R:G}_anyControlsHaveStatus(e){return this._anyControls(n=>n.status===e)}_anyControlsDirty(){return this._anyControls(e=>e.dirty)}_anyControlsTouched(){return this._anyControls(e=>e.touched)}_updatePristine(e={}){this.pristine=!this._anyControlsDirty(),this._parent&&!e.onlySelf&&this._parent._updatePristine(e)}_updateTouched(e={}){this.touched=this._anyControlsTouched(),this._parent&&!e.onlySelf&&this._parent._updateTouched(e)}_registerOnCollectionChange(e){this._onCollectionChange=e}_setUpdateStrategy(e){Y(e)&&e.updateOn!=null&&(this._updateOn=e.updateOn)}_parentMarkedDirty(e){let n=this._parent&&this._parent.dirty;return!e&&!!n&&!this._parent._anyControlsDirty()}_find(e){return null}_assignValidators(e){this._rawValidators=Array.isArray(e)?e.slice():e,this._composedValidatorFn=Ot(this._rawValidators)}_assignAsyncValidators(e){this._rawAsyncValidators=Array.isArray(e)?e.slice():e,this._composedAsyncValidatorFn=Pt(this._rawAsyncValidators)}},$=class extends S{constructor(e,n,i){super(pe(n),me(i,n)),this.controls=e,this._initObservables(),this._setUpdateStrategy(n),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}registerControl(e,n){return this.controls[e]?this.controls[e]:(this.controls[e]=n,n.setParent(this),n._registerOnCollectionChange(this._onCollectionChange),n)}addControl(e,n,i={}){this.registerControl(e,n),this.updateValueAndValidity({emitEvent:i.emitEvent}),this._onCollectionChange()}removeControl(e,n={}){this.controls[e]&&this.controls[e]._registerOnCollectionChange(()=>{}),delete this.controls[e],this.updateValueAndValidity({emitEvent:n.emitEvent}),this._onCollectionChange()}setControl(e,n,i={}){this.controls[e]&&this.controls[e]._registerOnCollectionChange(()=>{}),delete this.controls[e],n&&this.registerControl(e,n),this.updateValueAndValidity({emitEvent:i.emitEvent}),this._onCollectionChange()}contains(e){return this.controls.hasOwnProperty(e)&&this.controls[e].enabled}setValue(e,n={}){lt(this,!0,e),Object.keys(e).forEach(i=>{at(this,!0,i),this.controls[i].setValue(e[i],{onlySelf:!0,emitEvent:n.emitEvent})}),this.updateValueAndValidity(n)}patchValue(e,n={}){e!=null&&(Object.keys(e).forEach(i=>{let r=this.controls[i];r&&r.patchValue(e[i],{onlySelf:!0,emitEvent:n.emitEvent})}),this.updateValueAndValidity(n))}reset(e={},n={}){this._forEachChild((i,r)=>{i.reset(e?e[r]:null,{onlySelf:!0,emitEvent:n.emitEvent})}),this._updatePristine(n),this._updateTouched(n),this.updateValueAndValidity(n)}getRawValue(){return this._reduceChildren({},(e,n,i)=>(e[i]=n.getRawValue(),e))}_syncPendingControls(){let e=this._reduceChildren(!1,(n,i)=>i._syncPendingControls()?!0:n);return e&&this.updateValueAndValidity({onlySelf:!0}),e}_forEachChild(e){Object.keys(this.controls).forEach(n=>{let i=this.controls[n];i&&e(i,n)})}_setUpControls(){this._forEachChild(e=>{e.setParent(this),e._registerOnCollectionChange(this._onCollectionChange)})}_updateValue(){this.value=this._reduceValue()}_anyControls(e){for(let[n,i]of Object.entries(this.controls))if(this.contains(n)&&e(i))return!0;return!1}_reduceValue(){let e={};return this._reduceChildren(e,(n,i,r)=>((i.enabled||this.disabled)&&(n[r]=i.value),n))}_reduceChildren(e,n){let i=e;return this._forEachChild((r,o)=>{i=n(i,r,o)}),i}_allControlsDisabled(){for(let e of Object.keys(this.controls))if(this.controls[e].enabled)return!1;return Object.keys(this.controls).length>0||this.disabled}_find(e){return this.controls.hasOwnProperty(e)?this.controls[e]:null}};var ue=class extends ${};var ge=new E("CallSetDisabledState",{providedIn:"root",factory:()=>X}),X="always";function kt(t,e){return[...e.path,t]}function Ge(t,e,n=X){ve(t,e),e.valueAccessor.writeValue(t.value),(t.disabled||n==="always")&&e.valueAccessor.setDisabledState?.(t.disabled),Gt(t,e),Bt(t,e),jt(t,e),Tt(t,e)}function je(t,e,n=!0){let i=()=>{};e.valueAccessor&&(e.valueAccessor.registerOnChange(i),e.valueAccessor.registerOnTouched(i)),z(t,e),t&&(e._invokeOnDestroyCallbacks(),t._registerOnCollectionChange(()=>{}))}function q(t,e){t.forEach(n=>{n.registerOnValidatorChange&&n.registerOnValidatorChange(e)})}function Tt(t,e){if(e.valueAccessor.setDisabledState){let n=i=>{e.valueAccessor.setDisabledState(i)};t.registerOnDisabledChange(n),e._registerOnDestroy(()=>{t._unregisterOnDisabledChange(n)})}}function ve(t,e){let n=nt(t);e.validator!==null?t.setValidators(Pe(n,e.validator)):typeof n=="function"&&t.setValidators([n]);let i=rt(t);e.asyncValidator!==null?t.setAsyncValidators(Pe(i,e.asyncValidator)):typeof i=="function"&&t.setAsyncValidators([i]);let r=()=>t.updateValueAndValidity();q(e._rawValidators,r),q(e._rawAsyncValidators,r)}function z(t,e){let n=!1;if(t!==null){if(e.validator!==null){let r=nt(t);if(Array.isArray(r)&&r.length>0){let o=r.filter(l=>l!==e.validator);o.length!==r.length&&(n=!0,t.setValidators(o))}}if(e.asyncValidator!==null){let r=rt(t);if(Array.isArray(r)&&r.length>0){let o=r.filter(l=>l!==e.asyncValidator);o.length!==r.length&&(n=!0,t.setAsyncValidators(o))}}}let i=()=>{};return q(e._rawValidators,i),q(e._rawAsyncValidators,i),n}function Gt(t,e){e.valueAccessor.registerOnChange(n=>{t._pendingValue=n,t._pendingChange=!0,t._pendingDirty=!0,t.updateOn==="change"&&ut(t,e)})}function jt(t,e){e.valueAccessor.registerOnTouched(()=>{t._pendingTouched=!0,t.updateOn==="blur"&&t._pendingChange&&ut(t,e),t.updateOn!=="submit"&&t.markAsTouched()})}function ut(t,e){t._pendingDirty&&t.markAsDirty(),t.setValue(t._pendingValue,{emitModelToViewChange:!1}),e.viewToModelUpdate(t._pendingValue),t._pendingChange=!1}function Bt(t,e){let n=(i,r)=>{e.valueAccessor.writeValue(i),r&&e.viewToModelUpdate(i)};t.registerOnChange(n),e._registerOnDestroy(()=>{t._unregisterOnChange(n)})}function Ut(t,e){t==null,ve(t,e)}function Rt(t,e){return z(t,e)}function Ht(t,e){if(!t.hasOwnProperty("model"))return!1;let n=t.model;return n.isFirstChange()?!0:!Object.is(e,n.currentValue)}function Lt(t){return Object.getPrototypeOf(t.constructor)===Le}function Wt(t,e){t._syncPendingControls(),e.forEach(n=>{let i=n.control;i.updateOn==="submit"&&i._pendingChange&&(n.viewToModelUpdate(i._pendingValue),i._pendingChange=!1)})}function $t(t,e){if(!e)return null;Array.isArray(e);let n,i,r;return e.forEach(o=>{o.constructor===Z?n=o:Lt(o)?i=o:r=o}),r||i||n||null}function qt(t,e){let n=t.indexOf(e);n>-1&&t.splice(n,1)}function Be(t,e){let n=t.indexOf(e);n>-1&&t.splice(n,1)}function Ue(t){return typeof t=="object"&&t!==null&&Object.keys(t).length===2&&"value"in t&&"disabled"in t}var v=class extends S{constructor(e=null,n,i){super(pe(n),me(i,n)),this.defaultValue=null,this._onChange=[],this._pendingChange=!1,this._applyFormState(e),this._setUpdateStrategy(n),this._initObservables(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator}),Y(n)&&(n.nonNullable||n.initialValueIsDefault)&&(Ue(e)?this.defaultValue=e.value:this.defaultValue=e)}setValue(e,n={}){this.value=this._pendingValue=e,this._onChange.length&&n.emitModelToViewChange!==!1&&this._onChange.forEach(i=>i(this.value,n.emitViewToModelChange!==!1)),this.updateValueAndValidity(n)}patchValue(e,n={}){this.setValue(e,n)}reset(e=this.defaultValue,n={}){this._applyFormState(e),this.markAsPristine(n),this.markAsUntouched(n),this.setValue(this.value,n),this._pendingChange=!1}_updateValue(){}_anyControls(e){return!1}_allControlsDisabled(){return this.disabled}registerOnChange(e){this._onChange.push(e)}_unregisterOnChange(e){Be(this._onChange,e)}registerOnDisabledChange(e){this._onDisabledChange.push(e)}_unregisterOnDisabledChange(e){Be(this._onDisabledChange,e)}_forEachChild(e){}_syncPendingControls(){return this.updateOn==="submit"&&(this._pendingDirty&&this.markAsDirty(),this._pendingTouched&&this.markAsTouched(),this._pendingChange)?(this.setValue(this._pendingValue,{onlySelf:!0,emitModelToViewChange:!1}),!0):!1}_applyFormState(e){Ue(e)?(this.value=this._pendingValue=e.value,e.disabled?this.disable({onlySelf:!0,emitEvent:!1}):this.enable({onlySelf:!0,emitEvent:!1})):this.value=this._pendingValue=e}};var zt=t=>t instanceof v;var dt=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275dir=m({type:e,selectors:[["form",3,"ngNoForm","",3,"ngNativeValidate",""]],hostAttrs:["novalidate",""]});let t=e;return t})();var ct=new E("");var Zt={provide:I,useExisting:N(()=>ye)},ye=(()=>{let e=class e extends I{constructor(i,r,o){super(),this.callSetDisabledState=o,this.submitted=!1,this._onCollectionChange=()=>this._updateDomValue(),this.directives=[],this.form=null,this.ngSubmit=new P,this._setValidators(i),this._setAsyncValidators(r)}ngOnChanges(i){this._checkFormPresent(),i.hasOwnProperty("form")&&(this._updateValidators(),this._updateDomValue(),this._updateRegistrations(),this._oldForm=this.form)}ngOnDestroy(){this.form&&(z(this.form,this),this.form._onCollectionChange===this._onCollectionChange&&this.form._registerOnCollectionChange(()=>{}))}get formDirective(){return this}get control(){return this.form}get path(){return[]}addControl(i){let r=this.form.get(i.path);return Ge(r,i,this.callSetDisabledState),r.updateValueAndValidity({emitEvent:!1}),this.directives.push(i),r}getControl(i){return this.form.get(i.path)}removeControl(i){je(i.control||null,i,!1),qt(this.directives,i)}addFormGroup(i){this._setUpFormContainer(i)}removeFormGroup(i){this._cleanUpFormContainer(i)}getFormGroup(i){return this.form.get(i.path)}addFormArray(i){this._setUpFormContainer(i)}removeFormArray(i){this._cleanUpFormContainer(i)}getFormArray(i){return this.form.get(i.path)}updateModel(i,r){this.form.get(i.path).setValue(r)}onSubmit(i){return this.submitted=!0,Wt(this.form,this.directives),this.ngSubmit.emit(i),i?.target?.method==="dialog"}onReset(){this.resetForm()}resetForm(i=void 0){this.form.reset(i),this.submitted=!1}_updateDomValue(){this.directives.forEach(i=>{let r=i.control,o=this.form.get(i.path);r!==o&&(je(r||null,i),zt(o)&&(Ge(o,i,this.callSetDisabledState),i.control=o))}),this.form._updateTreeValidity({emitEvent:!1})}_setUpFormContainer(i){let r=this.form.get(i.path);Ut(r,i),r.updateValueAndValidity({emitEvent:!1})}_cleanUpFormContainer(i){if(this.form){let r=this.form.get(i.path);r&&Rt(r,i)&&r.updateValueAndValidity({emitEvent:!1})}}_updateRegistrations(){this.form._registerOnCollectionChange(this._onCollectionChange),this._oldForm&&this._oldForm._registerOnCollectionChange(()=>{})}_updateValidators(){ve(this.form,this),this._oldForm&&z(this._oldForm,this)}_checkFormPresent(){this.form}};e.\u0275fac=function(r){return new(r||e)(d($e,10),d(qe,10),d(ge,8))},e.\u0275dir=m({type:e,selectors:[["","formGroup",""]],hostBindings:function(r,o){r&1&&p("submit",function(f){return o.onSubmit(f)})("reset",function(){return o.onReset()})},inputs:{form:[O.None,"formGroup","form"]},outputs:{ngSubmit:"ngSubmit"},exportAs:["ngForm"],features:[T([Zt]),D,J]});let t=e;return t})();var Yt={provide:B,useExisting:N(()=>_e)},_e=(()=>{let e=class e extends B{set isDisabled(i){}constructor(i,r,o,l,f){super(),this._ngModelWarningConfig=f,this._added=!1,this.name=null,this.update=new P,this._ngModelWarningSent=!1,this._parent=i,this._setValidators(r),this._setAsyncValidators(o),this.valueAccessor=$t(this,l)}ngOnChanges(i){this._added||this._setUpControl(),Ht(i,this.viewModel)&&(this.viewModel=this.model,this.formDirective.updateModel(this,this.model))}ngOnDestroy(){this.formDirective&&this.formDirective.removeControl(this)}viewToModelUpdate(i){this.viewModel=i,this.update.emit(i)}get path(){return kt(this.name==null?this.name:this.name.toString(),this._parent)}get formDirective(){return this._parent?this._parent.formDirective:null}_checkParentType(){}_setUpControl(){this._checkParentType(),this.control=this.formDirective.addControl(this),this._added=!0}};e._ngModelWarningSentOnce=!1,e.\u0275fac=function(r){return new(r||e)(d(I,13),d($e,10),d(qe,10),d(he,10),d(ct,8))},e.\u0275dir=m({type:e,selectors:[["","formControlName",""]],inputs:{name:[O.None,"formControlName","name"],isDisabled:[O.None,"disabled","isDisabled"],model:[O.None,"ngModel","model"]},outputs:{update:"ngModelChange"},features:[T([Yt]),D,J]});let t=e;return t})();var ht=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=b({type:e}),e.\u0275inj=V({});let t=e;return t})(),de=class extends S{constructor(e,n,i){super(pe(n),me(i,n)),this.controls=e,this._initObservables(),this._setUpdateStrategy(n),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}at(e){return this.controls[this._adjustIndex(e)]}push(e,n={}){this.controls.push(e),this._registerControl(e),this.updateValueAndValidity({emitEvent:n.emitEvent}),this._onCollectionChange()}insert(e,n,i={}){this.controls.splice(e,0,n),this._registerControl(n),this.updateValueAndValidity({emitEvent:i.emitEvent})}removeAt(e,n={}){let i=this._adjustIndex(e);i<0&&(i=0),this.controls[i]&&this.controls[i]._registerOnCollectionChange(()=>{}),this.controls.splice(i,1),this.updateValueAndValidity({emitEvent:n.emitEvent})}setControl(e,n,i={}){let r=this._adjustIndex(e);r<0&&(r=0),this.controls[r]&&this.controls[r]._registerOnCollectionChange(()=>{}),this.controls.splice(r,1),n&&(this.controls.splice(r,0,n),this._registerControl(n)),this.updateValueAndValidity({emitEvent:i.emitEvent}),this._onCollectionChange()}get length(){return this.controls.length}setValue(e,n={}){lt(this,!1,e),e.forEach((i,r)=>{at(this,!1,r),this.at(r).setValue(i,{onlySelf:!0,emitEvent:n.emitEvent})}),this.updateValueAndValidity(n)}patchValue(e,n={}){e!=null&&(e.forEach((i,r)=>{this.at(r)&&this.at(r).patchValue(i,{onlySelf:!0,emitEvent:n.emitEvent})}),this.updateValueAndValidity(n))}reset(e=[],n={}){this._forEachChild((i,r)=>{i.reset(e[r],{onlySelf:!0,emitEvent:n.emitEvent})}),this._updatePristine(n),this._updateTouched(n),this.updateValueAndValidity(n)}getRawValue(){return this.controls.map(e=>e.getRawValue())}clear(e={}){this.controls.length<1||(this._forEachChild(n=>n._registerOnCollectionChange(()=>{})),this.controls.splice(0),this.updateValueAndValidity({emitEvent:e.emitEvent}))}_adjustIndex(e){return e<0?e+this.length:e}_syncPendingControls(){let e=this.controls.reduce((n,i)=>i._syncPendingControls()?!0:n,!1);return e&&this.updateValueAndValidity({onlySelf:!0}),e}_forEachChild(e){this.controls.forEach((n,i)=>{e(n,i)})}_updateValue(){this.value=this.controls.filter(e=>e.enabled||this.disabled).map(e=>e.value)}_anyControls(e){return this.controls.some(n=>n.enabled&&e(n))}_setUpControls(){this._forEachChild(e=>this._registerControl(e))}_allControlsDisabled(){for(let e of this.controls)if(e.enabled)return!1;return this.controls.length>0||this.disabled}_registerControl(e){e.setParent(this),e._registerOnCollectionChange(this._onCollectionChange)}_find(e){return this.at(e)??null}};function Re(t){return!!t&&(t.asyncValidators!==void 0||t.validators!==void 0||t.updateOn!==void 0)}var ft=(()=>{let e=class e{constructor(){this.useNonNullable=!1}get nonNullable(){let i=new e;return i.useNonNullable=!0,i}group(i,r=null){let o=this._reduceControls(i),l={};return Re(r)?l=r:r!==null&&(l.validators=r.validator,l.asyncValidators=r.asyncValidator),new $(o,l)}record(i,r=null){let o=this._reduceControls(i);return new ue(o,r)}control(i,r,o){let l={};return this.useNonNullable?(Re(r)?l=r:(l.validators=r,l.asyncValidators=o),new v(i,M(y({},l),{nonNullable:!0}))):new v(i,r,o)}array(i,r,o){let l=i.map(f=>this._createControl(f));return new de(l,r,o)}_reduceControls(i){let r={};return Object.keys(i).forEach(o=>{r[o]=this._createControl(i[o])}),r}_createControl(i){if(i instanceof v)return i;if(i instanceof S)return i;if(Array.isArray(i)){let r=i[0],o=i.length>1?i[1]:null,l=i.length>2?i[2]:null;return this.control(r,o,l)}else return this.control(i)}};e.\u0275fac=function(r){return new(r||e)},e.\u0275prov=De({token:e,factory:e.\u0275fac,providedIn:"root"});let t=e;return t})();var pt=(()=>{let e=class e{static withConfig(i){return{ngModule:e,providers:[{provide:ge,useValue:i.callSetDisabledState??X}]}}};e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=b({type:e}),e.\u0275inj=V({imports:[ht]});let t=e;return t})(),mt=(()=>{let e=class e{static withConfig(i){return{ngModule:e,providers:[{provide:ct,useValue:i.warnOnNgModelWithFormControl??"always"},{provide:ge,useValue:i.callSetDisabledState??X}]}}};e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=b({type:e}),e.\u0275inj=V({imports:[ht]});let t=e;return t})();function Jt(t,e){if(t&1){let n=k();s(0,"div",6)(1,"div",7)(2,"div",8),u(3,"Hello there!"),a(),s(4,"div",9),u(5,"Enter to get started"),a()(),s(6,"div",10),u(7),Ee(8,"json"),s(9,"form",11)(10,"label",12),u(11,"Username "),s(12,"span",13),u(13,"*"),a()(),s(14,"div",14)(15,"span",15),u(16,"@"),a(),c(17,"input",16),a(),s(18,"label",17),u(19,"Password "),s(20,"span",13),u(21,"*"),a()(),s(22,"div",14),c(23,"input",18,0),s(25,"span",19),p("click",function(){A(n);let r=re(24),o=g();return F(o.showIcon(r.value))}),c(26,"i",20),a()(),s(27,"div",21)(28,"div",22),c(29,"input",23),s(30,"label",24),u(31,"Remember me"),a()(),s(32,"div",25),p("click",function(){A(n);let r=g();return r.passWordForgot=!0,F(r.loginForm.reset())}),u(33,"Forgot your password?"),a()(),s(34,"div",26)(35,"button",27),p("click",function(){A(n);let r=g();return F(r.clickMe())}),u(36,"Log In"),a()()()()()}if(t&2){let n=g();h(7),oe(" ",Ae(8,6,n.loginForm.value)," "),h(2),_("formGroup",n.loginForm),h(14),_("type",n.showPassword?"text":"password"),h(3),_("ngClass",n.showPassword?"bi-eye":"bi-eye-slash"),h(9),_("disabled",n.loginForm.invalid)("routerLink",n.loginForm.valid?"/portal/home":"")}}function Kt(t,e){if(t&1){let n=k();s(0,"label",12),u(1,"Username "),s(2,"span",13),u(3,"*"),a()(),s(4,"div",14)(5,"span",15),u(6,"@"),a(),c(7,"input",16),a(),s(8,"div",31),p("click",function(){A(n);let r=g(2);return F(r.nextPassword=!0)}),u(9,"Next"),c(10,"i",32),a()}}function Qt(t,e){if(t&1){let n=k();s(0,"label",12),u(1,"1. Enter your Favorite Movie"),s(2,"span",13),u(3,"*"),a()(),s(4,"div",14),c(5,"input",33),a(),s(6,"label",12),u(7,"2. Enter your Favorite Team"),s(8,"span",13),u(9,"*"),a()(),s(10,"div",14),c(11,"input",33),a(),s(12,"label",17),u(13,"New Password "),s(14,"span",13),u(15,"*"),a()(),s(16,"div",34),c(17,"input",35,0),s(19,"span",19),p("click",function(){A(n);let r=re(18),o=g(2);return F(o.showIcon(r.value))}),c(20,"i",20),a()(),s(21,"div",36),u(22," Your password must be 8-20 characters long, contain letters and numbers, and must not contain spaces, special characters, or emoji."),a(),s(23,"div",37),c(24,"div",38),a(),s(25,"div",26)(26,"button",39),u(27,"Reset"),a()()}if(t&2){let n=g(2);h(17),_("type",n.showPassword?"text":"password"),h(3),_("ngClass",n.showPassword?"bi-eye":"bi-eye-slash"),h(6),_("disabled",n.passwordResetForm.invalid)}}function ei(t,e){if(t&1){let n=k();s(0,"div",6)(1,"div",7)(2,"div",28),p("click",function(){A(n);let r=g();return r.passWordForgot=!1,r.nextPassword=!1,F(r.passwordResetForm.reset())}),c(3,"i",29),u(4," Back "),a(),s(5,"div",8),u(6,"Forgot Password?"),a(),s(7,"div",30),u(8),a()(),s(9,"div",10)(10,"form",11),te(11,Kt,11,0)(12,Qt,28,3),a()()()}if(t&2){let n=g();h(8),oe(" ",n.nextPassword?"Please enter answers to your security questions and set your new password":"Enter your username and answer the security questions you set at time of first time login."," "),h(2),_("formGroup",n.passwordResetForm),h(),ne(11,n.nextPassword?12:11)}}var gt=(()=>{let e=class e{constructor(i){this.fb=i,this.passWordForgot=!1,this.showPassword=!1,this.nextPassword=!1}ngOnInit(){this.createLoginForm()}createLoginForm(){this.loginForm=this.fb.group({username:new v(null,C.required),password:new v(null,[C.required,C.maxLength(10)]),remember:new v(!1)}),this.passwordResetForm=this.fb.group({username:new v(null,C.required),newPassword:new v(null,[C.required,C.maxLength(10)])})}showIcon(i){this.showPassword=!this.showPassword}clickMe(){console.log("Hello world")}};e.\u0275fac=function(r){return new(r||e)(d(ft))},e.\u0275cmp=Me({type:e,selectors:[["app-login"]],decls:15,vars:1,consts:[["passwordField",""],[1,"container-fluid"],[1,"row","main"],[1,"col-lg-5","design-pattern","row","mx-0","px-0","h-sm-25"],[1,"col-4"],[1,"col-lg-7","col-sm-12","h-lg-100","d-flex","align-items-center","row","mx-0","px-0"],[1,"container","col-lg-6","col-sm-3","gx-5"],[1,"header-part"],[1,"h2"],[1,"h6","fw-light"],[1,"body-part","mt-4"],[3,"formGroup"],["for","username",1,"fw-bolder"],[1,"text-danger"],[1,"input-group","mb-3","mt-2"],["id","basic-addon1",1,"input-group-text"],["type","text","placeholder","Enter your username","aria-label","Username","id","username","aria-describedby","basic-addon1","formControlName","username",1,"form-control","shadow-sm"],["for","password",1,"fw-bolder"],["placeholder","Enter password","id","password","aria-label","Username","formControlName","password","aria-describedby","basic-addon2",1,"form-control","shadow-sm",3,"type"],["id","basic-addon2",1,"input-group-text",3,"click"],[1,"bi",3,"ngClass"],[1,"mt-2","d-flex","justify-content-between"],[1,"form-check"],["type","checkbox","value","","id","remberme","formControlName","remember",1,"form-check-input"],["for","remberme",1,"form-check-label"],[1,"forgetLink","text-primary",3,"click"],[1,"mt-4"],[1,"btn","btn-primary","submitBtn",3,"click","disabled","routerLink"],[1,"h5","fw-light","mb-3","backPassword",3,"click"],[1,"bi","bi-arrow-left"],[1,"h6","fw-lighter"],[1,"mt-4","d-flex","justify-content-end","h5","fw-light","backPassword",3,"click"],[1,"bi","bi-arrow-right"],["type","text","placeholder","Enter your answer","aria-label","Username","id","username","formControlName","username",1,"form-control","shadow-sm"],[1,"input-group","mt-2"],["placeholder","Enter password","id","password","aria-label","Username","formControlName","newPassword","aria-describedby","basic-addon2",1,"form-control","shadow-sm",3,"type"],["id","passwordHelpBlock mb-3",1,"form-text"],["role","progressbar","aria-label","Example 1px high","aria-valuenow","25","aria-valuemin","0","aria-valuemax","100",1,"progress","mt-3",2,"height","1px"],[1,"progress-bar","w-75"],[1,"btn","btn-primary","submitBtn",3,"disabled"]],template:function(r,o){r&1&&(s(0,"section",1)(1,"div",2)(2,"div",3),c(3,"div",4)(4,"div",4)(5,"div",4)(6,"div",4)(7,"div",4)(8,"div",4)(9,"div",4)(10,"div",4)(11,"div",4),a(),s(12,"div",5),te(13,Jt,37,8,"div",6)(14,ei,13,3),a()()()),r&2&&(h(13),ne(13,o.passWordForgot?14:13))},dependencies:[xe,Ne,dt,Z,fe,ot,st,ye,_e,Ie],styles:[".main[_ngcontent-%COMP%]{height:100vh}.design-pattern[_ngcontent-%COMP%]   .col-4[_ngcontent-%COMP%]{height:33%}.design-pattern[_ngcontent-%COMP%]   .col-4[_ngcontent-%COMP%]:nth-of-type(2n){background:linear-gradient(45deg,#ffffff 25%,transparent 25%),linear-gradient(315deg,#ffffff 25%,transparent 25%),linear-gradient(45deg,transparent 24%,#4f46e4 25%,#4f46e4 30%,transparent 31%,transparent 39%,#4f46e4 40%,#4f46e4 45%,transparent 45%),linear-gradient(315deg,transparent 24%,#4f46e4 25%,#4f46e4 30%,transparent 31%,transparent 39%,#4f46e4 40%,#4f46e4 45%,transparent 45%);background-size:3em 3em;background-color:#fff;opacity:1}.design-pattern[_ngcontent-%COMP%]   .col-4[_ngcontent-%COMP%]:nth-child(odd){background:radial-gradient(circle at top left,#f0a3f4 25%,transparent 26%),radial-gradient(circle at bottom right,transparent 19%,#f0a3f4 20%,#f0a3f4 25%,transparent 21%,transparent 100%),radial-gradient(circle at bottom left,transparent 19%,#f0a3f4 20%,#f0a3f4 25%,transparent 26%),radial-gradient(circle at top right,#f0a3f4 25%,transparent 26%);background-size:3em 3em;background-color:#fff;opacity:1}.col-lg-7[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .submitBtn[_ngcontent-%COMP%]{width:100%;height:50px}.forgetLink[_ngcontent-%COMP%], .backPassword[_ngcontent-%COMP%], #basic-addon2[_ngcontent-%COMP%]{cursor:pointer!important}"]});let t=e;return t})();var ti=[{path:"",component:gt}],vt=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=b({type:e}),e.\u0275inj=V({imports:[ae.forChild(ti),ae]});let t=e;return t})();var Bi=(()=>{let e=class e{constructor(i){this.sharedService=i,i.checkSidebarState(!0)}};e.\u0275fac=function(r){return new(r||e)(we(Oe))},e.\u0275mod=b({type:e}),e.\u0275inj=V({imports:[Se,vt,mt,pt]});let t=e;return t})();export{Bi as LoginModule};