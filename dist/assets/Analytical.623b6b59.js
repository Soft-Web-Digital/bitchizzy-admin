import{u as He}from"./withdrawals.090f5e86.js";import{a as U,s as ct,f as ut,o as _,j as K,w as f,b as l,D as L,a1 as z,a2 as q,m as F,a3 as Yt,a4 as Qt,e as g,r as x,a5 as Se,i as Ae,I as De,c as D,k as Q,t as Te,F as V,h as Xt,a6 as P,a7 as G,V as Zt,u as R,a8 as en,a9 as tn,p as nn,aa as rn}from"./index.d08b3963.js";import{_ as on}from"./plugin-vue_export-helper.21dcd24c.js";import{_ as sn}from"./BaseBreadcrumb.96e6869c.js";/* empty css                                                       *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lt=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let o=e.charCodeAt(r);o<128?t[n++]=o:o<2048?(t[n++]=o>>6|192,t[n++]=o&63|128):(o&64512)===55296&&r+1<e.length&&(e.charCodeAt(r+1)&64512)===56320?(o=65536+((o&1023)<<10)+(e.charCodeAt(++r)&1023),t[n++]=o>>18|240,t[n++]=o>>12&63|128,t[n++]=o>>6&63|128,t[n++]=o&63|128):(t[n++]=o>>12|224,t[n++]=o>>6&63|128,t[n++]=o&63|128)}return t},an=function(e){const t=[];let n=0,r=0;for(;n<e.length;){const o=e[n++];if(o<128)t[r++]=String.fromCharCode(o);else if(o>191&&o<224){const s=e[n++];t[r++]=String.fromCharCode((o&31)<<6|s&63)}else if(o>239&&o<365){const s=e[n++],a=e[n++],i=e[n++],c=((o&7)<<18|(s&63)<<12|(a&63)<<6|i&63)-65536;t[r++]=String.fromCharCode(55296+(c>>10)),t[r++]=String.fromCharCode(56320+(c&1023))}else{const s=e[n++],a=e[n++];t[r++]=String.fromCharCode((o&15)<<12|(s&63)<<6|a&63)}}return t.join("")},dt={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let o=0;o<e.length;o+=3){const s=e[o],a=o+1<e.length,i=a?e[o+1]:0,c=o+2<e.length,u=c?e[o+2]:0,d=s>>2,v=(s&3)<<4|i>>4;let w=(i&15)<<2|u>>6,m=u&63;c||(m=64,a||(w=64)),r.push(n[d],n[v],n[w],n[m])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(lt(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):an(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let o=0;o<e.length;){const s=n[e.charAt(o++)],i=o<e.length?n[e.charAt(o)]:0;++o;const u=o<e.length?n[e.charAt(o)]:64;++o;const v=o<e.length?n[e.charAt(o)]:64;if(++o,s==null||i==null||u==null||v==null)throw new cn;const w=s<<2|i>>4;if(r.push(w),u!==64){const m=i<<4&240|u>>2;if(r.push(m),v!==64){const p=u<<6&192|v;r.push(p)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};class cn extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const un=function(e){const t=lt(e);return dt.encodeByteArray(t,!0)},ft=function(e){return un(e).replace(/\./g,"")},ln=function(e){try{return dt.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dn(){if(typeof self!="undefined")return self;if(typeof window!="undefined")return window;if(typeof global!="undefined")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fn=()=>dn().__FIREBASE_DEFAULTS__,hn=()=>{if(typeof process=="undefined"||typeof process.env=="undefined")return;const e={}.__FIREBASE_DEFAULTS__;if(e)return JSON.parse(e)},pn=()=>{if(typeof document=="undefined")return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=e&&ln(e[1]);return t&&JSON.parse(t)},gn=()=>{try{return fn()||hn()||pn()}catch(e){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);return}},ht=()=>{var e;return(e=gn())===null||e===void 0?void 0:e.config};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mn{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}wrapCallback(t){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(n):t(n,r))}}}function pt(){try{return typeof indexedDB=="object"}catch{return!1}}function gt(){return new Promise((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",o=self.indexedDB.open(r);o.onsuccess=()=>{o.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},o.onupgradeneeded=()=>{n=!1},o.onerror=()=>{var s;t(((s=o.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){t(n)}})}function bn(){return!(typeof navigator=="undefined"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _n="FirebaseError";class j extends Error{constructor(t,n,r){super(n),this.code=t,this.customData=r,this.name=_n,Object.setPrototypeOf(this,j.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,X.prototype.create)}}class X{constructor(t,n,r){this.service=t,this.serviceName=n,this.errors=r}create(t,...n){const r=n[0]||{},o=`${this.service}/${t}`,s=this.errors[t],a=s?wn(s,r):"Error",i=`${this.serviceName}: ${a} (${o}).`;return new j(o,i,r)}}function wn(e,t){return e.replace(yn,(n,r)=>{const o=t[r];return o!=null?String(o):`<${r}?>`})}const yn=/\{\$([^}]+)}/g;function pe(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const o of n){if(!r.includes(o))return!1;const s=e[o],a=t[o];if(We(s)&&We(a)){if(!pe(s,a))return!1}else if(s!==a)return!1}for(const o of r)if(!n.includes(o))return!1;return!0}function We(e){return e!==null&&typeof e=="object"}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mt(e){return e&&e._delegate?e._delegate:e}class T{constructor(t,n,r){this.name=t,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const C="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class In{constructor(t,n){this.name=t,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const n=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(n)){const r=new mn;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const o=this.getOrInitializeService({instanceIdentifier:n});o&&r.resolve(o)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(t){var n;const r=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),o=(n=t==null?void 0:t.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(o)return null;throw s}else{if(o)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(En(t))try{this.getOrInitializeService({instanceIdentifier:C})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const o=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:o});r.resolve(s)}catch{}}}}clearInstance(t=C){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...t.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=C){return this.instances.has(t)}getOptions(t=C){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:n={}}=t,r=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const o=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,a]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(s);r===i&&a.resolve(o)}return o}onInit(t,n){var r;const o=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(o))!==null&&r!==void 0?r:new Set;s.add(t),this.onInitCallbacks.set(o,s);const a=this.instances.get(o);return a&&t(a,o),()=>{s.delete(t)}}invokeOnInitCallbacks(t,n){const r=this.onInitCallbacks.get(n);if(!!r)for(const o of r)try{o(t,n)}catch{}}getOrInitializeService({instanceIdentifier:t,options:n={}}){let r=this.instances.get(t);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:vn(t),options:n}),this.instances.set(t,r),this.instancesOptions.set(t,n),this.invokeOnInitCallbacks(r,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,r)}catch{}return r||null}normalizeInstanceIdentifier(t=C){return this.component?this.component.multipleInstances?t:C:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function vn(e){return e===C?void 0:e}function En(e){return e.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sn{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const n=this.getProvider(t.name);if(n.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);n.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const n=new In(t,this);return this.providers.set(t,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var h;(function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"})(h||(h={}));const An={debug:h.DEBUG,verbose:h.VERBOSE,info:h.INFO,warn:h.WARN,error:h.ERROR,silent:h.SILENT},Dn=h.INFO,Tn={[h.DEBUG]:"log",[h.VERBOSE]:"log",[h.INFO]:"info",[h.WARN]:"warn",[h.ERROR]:"error"},Cn=(e,t,...n)=>{if(t<e.logLevel)return;const r=new Date().toISOString(),o=Tn[t];if(o)console[o](`[${r}]  ${e.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class kn{constructor(t){this.name=t,this._logLevel=Dn,this._logHandler=Cn,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in h))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?An[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,h.DEBUG,...t),this._logHandler(this,h.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,h.VERBOSE,...t),this._logHandler(this,h.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,h.INFO,...t),this._logHandler(this,h.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,h.WARN,...t),this._logHandler(this,h.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,h.ERROR,...t),this._logHandler(this,h.ERROR,...t)}}const On=(e,t)=>t.some(n=>e instanceof n);let Ue,Ke;function Bn(){return Ue||(Ue=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Nn(){return Ke||(Ke=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const bt=new WeakMap,ge=new WeakMap,_t=new WeakMap,te=new WeakMap,Ce=new WeakMap;function $n(e){const t=new Promise((n,r)=>{const o=()=>{e.removeEventListener("success",s),e.removeEventListener("error",a)},s=()=>{n(E(e.result)),o()},a=()=>{r(e.error),o()};e.addEventListener("success",s),e.addEventListener("error",a)});return t.then(n=>{n instanceof IDBCursor&&bt.set(n,e)}).catch(()=>{}),Ce.set(t,e),t}function Mn(e){if(ge.has(e))return;const t=new Promise((n,r)=>{const o=()=>{e.removeEventListener("complete",s),e.removeEventListener("error",a),e.removeEventListener("abort",a)},s=()=>{n(),o()},a=()=>{r(e.error||new DOMException("AbortError","AbortError")),o()};e.addEventListener("complete",s),e.addEventListener("error",a),e.addEventListener("abort",a)});ge.set(e,t)}let me={get(e,t,n){if(e instanceof IDBTransaction){if(t==="done")return ge.get(e);if(t==="objectStoreNames")return e.objectStoreNames||_t.get(e);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return E(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function Pn(e){me=e(me)}function Rn(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const r=e.call(ne(this),t,...n);return _t.set(r,t.sort?t.sort():[t]),E(r)}:Nn().includes(e)?function(...t){return e.apply(ne(this),t),E(bt.get(this))}:function(...t){return E(e.apply(ne(this),t))}}function xn(e){return typeof e=="function"?Rn(e):(e instanceof IDBTransaction&&Mn(e),On(e,Bn())?new Proxy(e,me):e)}function E(e){if(e instanceof IDBRequest)return $n(e);if(te.has(e))return te.get(e);const t=xn(e);return t!==e&&(te.set(e,t),Ce.set(t,e)),t}const ne=e=>Ce.get(e);function Ln(e,t,{blocked:n,upgrade:r,blocking:o,terminated:s}={}){const a=indexedDB.open(e,t),i=E(a);return r&&a.addEventListener("upgradeneeded",c=>{r(E(a.result),c.oldVersion,c.newVersion,E(a.transaction),c)}),n&&a.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),i.then(c=>{s&&c.addEventListener("close",()=>s()),o&&c.addEventListener("versionchange",u=>o(u.oldVersion,u.newVersion,u))}).catch(()=>{}),i}const jn=["get","getKey","getAll","getAllKeys","count"],Fn=["put","add","delete","clear"],re=new Map;function ze(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(re.get(t))return re.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,o=Fn.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(o||jn.includes(n)))return;const s=async function(a,...i){const c=this.transaction(a,o?"readwrite":"readonly");let u=c.store;return r&&(u=u.index(i.shift())),(await Promise.all([u[n](...i),o&&c.done]))[0]};return re.set(t,s),s}Pn(e=>({...e,get:(t,n,r)=>ze(t,n)||e.get(t,n,r),has:(t,n)=>!!ze(t,n)||e.has(t,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vn{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Hn(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function Hn(e){const t=e.getComponent();return(t==null?void 0:t.type)==="VERSION"}const be="@firebase/app",qe="0.9.14";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const O=new kn("@firebase/app"),Wn="@firebase/app-compat",Un="@firebase/analytics-compat",Kn="@firebase/analytics",zn="@firebase/app-check-compat",qn="@firebase/app-check",Gn="@firebase/auth",Jn="@firebase/auth-compat",Yn="@firebase/database",Qn="@firebase/database-compat",Xn="@firebase/functions",Zn="@firebase/functions-compat",er="@firebase/installations",tr="@firebase/installations-compat",nr="@firebase/messaging",rr="@firebase/messaging-compat",or="@firebase/performance",sr="@firebase/performance-compat",ar="@firebase/remote-config",ir="@firebase/remote-config-compat",cr="@firebase/storage",ur="@firebase/storage-compat",lr="@firebase/firestore",dr="@firebase/firestore-compat",fr="firebase";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _e="[DEFAULT]",hr={[be]:"fire-core",[Wn]:"fire-core-compat",[Kn]:"fire-analytics",[Un]:"fire-analytics-compat",[qn]:"fire-app-check",[zn]:"fire-app-check-compat",[Gn]:"fire-auth",[Jn]:"fire-auth-compat",[Yn]:"fire-rtdb",[Qn]:"fire-rtdb-compat",[Xn]:"fire-fn",[Zn]:"fire-fn-compat",[er]:"fire-iid",[tr]:"fire-iid-compat",[nr]:"fire-fcm",[rr]:"fire-fcm-compat",[or]:"fire-perf",[sr]:"fire-perf-compat",[ar]:"fire-rc",[ir]:"fire-rc-compat",[cr]:"fire-gcs",[ur]:"fire-gcs-compat",[lr]:"fire-fst",[dr]:"fire-fst-compat","fire-js":"fire-js",[fr]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const J=new Map,we=new Map;function pr(e,t){try{e.container.addComponent(t)}catch(n){O.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function B(e){const t=e.name;if(we.has(t))return O.debug(`There were multiple attempts to register component ${t}.`),!1;we.set(t,e);for(const n of J.values())pr(n,e);return!0}function ke(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gr={["no-app"]:"No Firebase App '{$appName}' has been created - call initializeApp() first",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},S=new X("app","Firebase",gr);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mr{constructor(t,n,r){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new T("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw S.create("app-deleted",{appName:this._name})}}function wt(e,t={}){let n=e;typeof t!="object"&&(t={name:t});const r=Object.assign({name:_e,automaticDataCollectionEnabled:!1},t),o=r.name;if(typeof o!="string"||!o)throw S.create("bad-app-name",{appName:String(o)});if(n||(n=ht()),!n)throw S.create("no-options");const s=J.get(o);if(s){if(pe(n,s.options)&&pe(r,s.config))return s;throw S.create("duplicate-app",{appName:o})}const a=new Sn(o);for(const c of we.values())a.addComponent(c);const i=new mr(n,r,a);return J.set(o,i),i}function br(e=_e){const t=J.get(e);if(!t&&e===_e&&ht())return wt();if(!t)throw S.create("no-app",{appName:e});return t}function A(e,t,n){var r;let o=(r=hr[e])!==null&&r!==void 0?r:e;n&&(o+=`-${n}`);const s=o.match(/\s|\//),a=t.match(/\s|\//);if(s||a){const i=[`Unable to register library "${o}" with version "${t}":`];s&&i.push(`library name "${o}" contains illegal characters (whitespace or "/")`),s&&a&&i.push("and"),a&&i.push(`version name "${t}" contains illegal characters (whitespace or "/")`),O.warn(i.join(" "));return}B(new T(`${o}-version`,()=>({library:o,version:t}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _r="firebase-heartbeat-database",wr=1,H="firebase-heartbeat-store";let oe=null;function yt(){return oe||(oe=Ln(_r,wr,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(H)}}}).catch(e=>{throw S.create("idb-open",{originalErrorMessage:e.message})})),oe}async function yr(e){try{return await(await yt()).transaction(H).objectStore(H).get(It(e))}catch(t){if(t instanceof j)O.warn(t.message);else{const n=S.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});O.warn(n.message)}}}async function Ge(e,t){try{const r=(await yt()).transaction(H,"readwrite");await r.objectStore(H).put(t,It(e)),await r.done}catch(n){if(n instanceof j)O.warn(n.message);else{const r=S.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});O.warn(r.message)}}}function It(e){return`${e.name}!${e.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ir=1024,vr=30*24*60*60*1e3;class Er{constructor(t){this.container=t,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Ar(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=Je();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(o=>o.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const s=new Date(o.date).valueOf();return Date.now()-s<=vr}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const t=Je(),{heartbeatsToSend:n,unsentEntries:r}=Sr(this._heartbeatsCache.heartbeats),o=ft(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=t,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),o}}function Je(){return new Date().toISOString().substring(0,10)}function Sr(e,t=Ir){const n=[];let r=e.slice();for(const o of e){const s=n.find(a=>a.agent===o.agent);if(s){if(s.dates.push(o.date),Ye(n)>t){s.dates.pop();break}}else if(n.push({agent:o.agent,dates:[o.date]}),Ye(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class Ar{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return pt()?gt().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await yr(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(t){var n;if(await this._canUseIndexedDBPromise){const o=await this.read();return Ge(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:o.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var n;if(await this._canUseIndexedDBPromise){const o=await this.read();return Ge(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:o.lastSentHeartbeatDate,heartbeats:[...o.heartbeats,...t.heartbeats]})}else return}}function Ye(e){return ft(JSON.stringify({version:2,heartbeats:e})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dr(e){B(new T("platform-logger",t=>new Vn(t),"PRIVATE")),B(new T("heartbeat",t=>new Er(t),"PRIVATE")),A(be,qe,e),A(be,qe,"esm2017"),A("fire-js","")}Dr("");var Tr="firebase",Cr="10.0.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */A(Tr,Cr,"app");const kr=(e,t)=>t.some(n=>e instanceof n);let Qe,Xe;function Or(){return Qe||(Qe=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Br(){return Xe||(Xe=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const vt=new WeakMap,ye=new WeakMap,Et=new WeakMap,se=new WeakMap,Oe=new WeakMap;function Nr(e){const t=new Promise((n,r)=>{const o=()=>{e.removeEventListener("success",s),e.removeEventListener("error",a)},s=()=>{n(I(e.result)),o()},a=()=>{r(e.error),o()};e.addEventListener("success",s),e.addEventListener("error",a)});return t.then(n=>{n instanceof IDBCursor&&vt.set(n,e)}).catch(()=>{}),Oe.set(t,e),t}function $r(e){if(ye.has(e))return;const t=new Promise((n,r)=>{const o=()=>{e.removeEventListener("complete",s),e.removeEventListener("error",a),e.removeEventListener("abort",a)},s=()=>{n(),o()},a=()=>{r(e.error||new DOMException("AbortError","AbortError")),o()};e.addEventListener("complete",s),e.addEventListener("error",a),e.addEventListener("abort",a)});ye.set(e,t)}let Ie={get(e,t,n){if(e instanceof IDBTransaction){if(t==="done")return ye.get(e);if(t==="objectStoreNames")return e.objectStoreNames||Et.get(e);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return I(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function Mr(e){Ie=e(Ie)}function Pr(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const r=e.call(ae(this),t,...n);return Et.set(r,t.sort?t.sort():[t]),I(r)}:Br().includes(e)?function(...t){return e.apply(ae(this),t),I(vt.get(this))}:function(...t){return I(e.apply(ae(this),t))}}function Rr(e){return typeof e=="function"?Pr(e):(e instanceof IDBTransaction&&$r(e),kr(e,Or())?new Proxy(e,Ie):e)}function I(e){if(e instanceof IDBRequest)return Nr(e);if(se.has(e))return se.get(e);const t=Rr(e);return t!==e&&(se.set(e,t),Oe.set(t,e)),t}const ae=e=>Oe.get(e);function Be(e,t,{blocked:n,upgrade:r,blocking:o,terminated:s}={}){const a=indexedDB.open(e,t),i=I(a);return r&&a.addEventListener("upgradeneeded",c=>{r(I(a.result),c.oldVersion,c.newVersion,I(a.transaction))}),n&&a.addEventListener("blocked",()=>n()),i.then(c=>{s&&c.addEventListener("close",()=>s()),o&&c.addEventListener("versionchange",()=>o())}).catch(()=>{}),i}function ie(e,{blocked:t}={}){const n=indexedDB.deleteDatabase(e);return t&&n.addEventListener("blocked",()=>t()),I(n).then(()=>{})}const xr=["get","getKey","getAll","getAllKeys","count"],Lr=["put","add","delete","clear"],ce=new Map;function Ze(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(ce.get(t))return ce.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,o=Lr.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(o||xr.includes(n)))return;const s=async function(a,...i){const c=this.transaction(a,o?"readwrite":"readonly");let u=c.store;return r&&(u=u.index(i.shift())),(await Promise.all([u[n](...i),o&&c.done]))[0]};return ce.set(t,s),s}Mr(e=>({...e,get:(t,n,r)=>Ze(t,n)||e.get(t,n,r),has:(t,n)=>!!Ze(t,n)||e.has(t,n)}));const St="@firebase/installations",Ne="0.6.4";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const At=1e4,Dt=`w:${Ne}`,Tt="FIS_v2",jr="https://firebaseinstallations.googleapis.com/v1",Fr=60*60*1e3,Vr="installations",Hr="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wr={["missing-app-config-values"]:'Missing App configuration value: "{$valueName}"',["not-registered"]:"Firebase Installation is not registered.",["installation-not-found"]:"Firebase Installation not found.",["request-failed"]:'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',["app-offline"]:"Could not process request. Application offline.",["delete-pending-registration"]:"Can't delete installation while there is a pending registration request."},N=new X(Vr,Hr,Wr);function Ct(e){return e instanceof j&&e.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kt({projectId:e}){return`${jr}/projects/${e}/installations`}function Ot(e){return{token:e.token,requestStatus:2,expiresIn:Kr(e.expiresIn),creationTime:Date.now()}}async function Bt(e,t){const r=(await t.json()).error;return N.create("request-failed",{requestName:e,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function Nt({apiKey:e}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":e})}function Ur(e,{refreshToken:t}){const n=Nt(e);return n.append("Authorization",zr(t)),n}async function $t(e){const t=await e();return t.status>=500&&t.status<600?e():t}function Kr(e){return Number(e.replace("s","000"))}function zr(e){return`${Tt} ${e}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function qr({appConfig:e,heartbeatServiceProvider:t},{fid:n}){const r=kt(e),o=Nt(e),s=t.getImmediate({optional:!0});if(s){const u=await s.getHeartbeatsHeader();u&&o.append("x-firebase-client",u)}const a={fid:n,authVersion:Tt,appId:e.appId,sdkVersion:Dt},i={method:"POST",headers:o,body:JSON.stringify(a)},c=await $t(()=>fetch(r,i));if(c.ok){const u=await c.json();return{fid:u.fid||n,registrationStatus:2,refreshToken:u.refreshToken,authToken:Ot(u.authToken)}}else throw await Bt("Create Installation",c)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mt(e){return new Promise(t=>{setTimeout(t,e)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gr(e){return btoa(String.fromCharCode(...e)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jr=/^[cdef][\w-]{21}$/,ve="";function Yr(){try{const e=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(e),e[0]=112+e[0]%16;const n=Qr(e);return Jr.test(n)?n:ve}catch{return ve}}function Qr(e){return Gr(e).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Z(e){return`${e.appName}!${e.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pt=new Map;function Rt(e,t){const n=Z(e);xt(n,t),Xr(n,t)}function xt(e,t){const n=Pt.get(e);if(!!n)for(const r of n)r(t)}function Xr(e,t){const n=Zr();n&&n.postMessage({key:e,fid:t}),eo()}let k=null;function Zr(){return!k&&"BroadcastChannel"in self&&(k=new BroadcastChannel("[Firebase] FID Change"),k.onmessage=e=>{xt(e.data.key,e.data.fid)}),k}function eo(){Pt.size===0&&k&&(k.close(),k=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const to="firebase-installations-database",no=1,$="firebase-installations-store";let ue=null;function $e(){return ue||(ue=Be(to,no,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore($)}}})),ue}async function Y(e,t){const n=Z(e),o=(await $e()).transaction($,"readwrite"),s=o.objectStore($),a=await s.get(n);return await s.put(t,n),await o.done,(!a||a.fid!==t.fid)&&Rt(e,t.fid),t}async function Lt(e){const t=Z(e),r=(await $e()).transaction($,"readwrite");await r.objectStore($).delete(t),await r.done}async function ee(e,t){const n=Z(e),o=(await $e()).transaction($,"readwrite"),s=o.objectStore($),a=await s.get(n),i=t(a);return i===void 0?await s.delete(n):await s.put(i,n),await o.done,i&&(!a||a.fid!==i.fid)&&Rt(e,i.fid),i}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Me(e){let t;const n=await ee(e.appConfig,r=>{const o=ro(r),s=oo(e,o);return t=s.registrationPromise,s.installationEntry});return n.fid===ve?{installationEntry:await t}:{installationEntry:n,registrationPromise:t}}function ro(e){const t=e||{fid:Yr(),registrationStatus:0};return jt(t)}function oo(e,t){if(t.registrationStatus===0){if(!navigator.onLine){const o=Promise.reject(N.create("app-offline"));return{installationEntry:t,registrationPromise:o}}const n={fid:t.fid,registrationStatus:1,registrationTime:Date.now()},r=so(e,n);return{installationEntry:n,registrationPromise:r}}else return t.registrationStatus===1?{installationEntry:t,registrationPromise:ao(e)}:{installationEntry:t}}async function so(e,t){try{const n=await qr(e,t);return Y(e.appConfig,n)}catch(n){throw Ct(n)&&n.customData.serverCode===409?await Lt(e.appConfig):await Y(e.appConfig,{fid:t.fid,registrationStatus:0}),n}}async function ao(e){let t=await et(e.appConfig);for(;t.registrationStatus===1;)await Mt(100),t=await et(e.appConfig);if(t.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await Me(e);return r||n}return t}function et(e){return ee(e,t=>{if(!t)throw N.create("installation-not-found");return jt(t)})}function jt(e){return io(e)?{fid:e.fid,registrationStatus:0}:e}function io(e){return e.registrationStatus===1&&e.registrationTime+At<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function co({appConfig:e,heartbeatServiceProvider:t},n){const r=uo(e,n),o=Ur(e,n),s=t.getImmediate({optional:!0});if(s){const u=await s.getHeartbeatsHeader();u&&o.append("x-firebase-client",u)}const a={installation:{sdkVersion:Dt,appId:e.appId}},i={method:"POST",headers:o,body:JSON.stringify(a)},c=await $t(()=>fetch(r,i));if(c.ok){const u=await c.json();return Ot(u)}else throw await Bt("Generate Auth Token",c)}function uo(e,{fid:t}){return`${kt(e)}/${t}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Pe(e,t=!1){let n;const r=await ee(e.appConfig,s=>{if(!Ft(s))throw N.create("not-registered");const a=s.authToken;if(!t&&ho(a))return s;if(a.requestStatus===1)return n=lo(e,t),s;{if(!navigator.onLine)throw N.create("app-offline");const i=go(s);return n=fo(e,i),i}});return n?await n:r.authToken}async function lo(e,t){let n=await tt(e.appConfig);for(;n.authToken.requestStatus===1;)await Mt(100),n=await tt(e.appConfig);const r=n.authToken;return r.requestStatus===0?Pe(e,t):r}function tt(e){return ee(e,t=>{if(!Ft(t))throw N.create("not-registered");const n=t.authToken;return mo(n)?Object.assign(Object.assign({},t),{authToken:{requestStatus:0}}):t})}async function fo(e,t){try{const n=await co(e,t),r=Object.assign(Object.assign({},t),{authToken:n});return await Y(e.appConfig,r),n}catch(n){if(Ct(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await Lt(e.appConfig);else{const r=Object.assign(Object.assign({},t),{authToken:{requestStatus:0}});await Y(e.appConfig,r)}throw n}}function Ft(e){return e!==void 0&&e.registrationStatus===2}function ho(e){return e.requestStatus===2&&!po(e)}function po(e){const t=Date.now();return t<e.creationTime||e.creationTime+e.expiresIn<t+Fr}function go(e){const t={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},e),{authToken:t})}function mo(e){return e.requestStatus===1&&e.requestTime+At<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function bo(e){const t=e,{installationEntry:n,registrationPromise:r}=await Me(t);return r?r.catch(console.error):Pe(t).catch(console.error),n.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _o(e,t=!1){const n=e;return await wo(n),(await Pe(n,t)).token}async function wo(e){const{registrationPromise:t}=await Me(e);t&&await t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yo(e){if(!e||!e.options)throw le("App Configuration");if(!e.name)throw le("App Name");const t=["projectId","apiKey","appId"];for(const n of t)if(!e.options[n])throw le(n);return{appName:e.name,projectId:e.options.projectId,apiKey:e.options.apiKey,appId:e.options.appId}}function le(e){return N.create("missing-app-config-values",{valueName:e})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vt="installations",Io="installations-internal",vo=e=>{const t=e.getProvider("app").getImmediate(),n=yo(t),r=ke(t,"heartbeat");return{app:t,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},Eo=e=>{const t=e.getProvider("app").getImmediate(),n=ke(t,Vt).getImmediate();return{getId:()=>bo(n),getToken:o=>_o(n,o)}};function So(){B(new T(Vt,vo,"PUBLIC")),B(new T(Io,Eo,"PRIVATE"))}So();A(St,Ne);A(St,Ne,"esm2017");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ao="/firebase-messaging-sw.js",Do="/firebase-cloud-messaging-push-scope",Ht="BDOU99-h67HcA6JeFXHbSNMu7e2yNNu3RzoMj8TM4W88jITfq7ZmPvIM1Iv-4_l2LxQcYwhqby2xGpWwzjfAnG4",To="https://fcmregistrations.googleapis.com/v1",Wt="google.c.a.c_id",Co="google.c.a.c_l",ko="google.c.a.ts",Oo="google.c.a.e";var nt;(function(e){e[e.DATA_MESSAGE=1]="DATA_MESSAGE",e[e.DISPLAY_NOTIFICATION=3]="DISPLAY_NOTIFICATION"})(nt||(nt={}));/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except
 * in compliance with the License. You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under the License
 * is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express
 * or implied. See the License for the specific language governing permissions and limitations under
 * the License.
 */var W;(function(e){e.PUSH_RECEIVED="push-received",e.NOTIFICATION_CLICKED="notification-clicked"})(W||(W={}));/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function y(e){const t=new Uint8Array(e);return btoa(String.fromCharCode(...t)).replace(/=/g,"").replace(/\+/g,"-").replace(/\//g,"_")}function Bo(e){const t="=".repeat((4-e.length%4)%4),n=(e+t).replace(/\-/g,"+").replace(/_/g,"/"),r=atob(n),o=new Uint8Array(r.length);for(let s=0;s<r.length;++s)o[s]=r.charCodeAt(s);return o}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const de="fcm_token_details_db",No=5,rt="fcm_token_object_Store";async function $o(e){if("databases"in indexedDB&&!(await indexedDB.databases()).map(s=>s.name).includes(de))return null;let t=null;return(await Be(de,No,{upgrade:async(r,o,s,a)=>{var i;if(o<2||!r.objectStoreNames.contains(rt))return;const c=a.objectStore(rt),u=await c.index("fcmSenderId").get(e);if(await c.clear(),!!u){if(o===2){const d=u;if(!d.auth||!d.p256dh||!d.endpoint)return;t={token:d.fcmToken,createTime:(i=d.createTime)!==null&&i!==void 0?i:Date.now(),subscriptionOptions:{auth:d.auth,p256dh:d.p256dh,endpoint:d.endpoint,swScope:d.swScope,vapidKey:typeof d.vapidKey=="string"?d.vapidKey:y(d.vapidKey)}}}else if(o===3){const d=u;t={token:d.fcmToken,createTime:d.createTime,subscriptionOptions:{auth:y(d.auth),p256dh:y(d.p256dh),endpoint:d.endpoint,swScope:d.swScope,vapidKey:y(d.vapidKey)}}}else if(o===4){const d=u;t={token:d.fcmToken,createTime:d.createTime,subscriptionOptions:{auth:y(d.auth),p256dh:y(d.p256dh),endpoint:d.endpoint,swScope:d.swScope,vapidKey:y(d.vapidKey)}}}}}})).close(),await ie(de),await ie("fcm_vapid_details_db"),await ie("undefined"),Mo(t)?t:null}function Mo(e){if(!e||!e.subscriptionOptions)return!1;const{subscriptionOptions:t}=e;return typeof e.createTime=="number"&&e.createTime>0&&typeof e.token=="string"&&e.token.length>0&&typeof t.auth=="string"&&t.auth.length>0&&typeof t.p256dh=="string"&&t.p256dh.length>0&&typeof t.endpoint=="string"&&t.endpoint.length>0&&typeof t.swScope=="string"&&t.swScope.length>0&&typeof t.vapidKey=="string"&&t.vapidKey.length>0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Po="firebase-messaging-database",Ro=1,M="firebase-messaging-store";let fe=null;function Re(){return fe||(fe=Be(Po,Ro,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(M)}}})),fe}async function Ut(e){const t=Le(e),r=await(await Re()).transaction(M).objectStore(M).get(t);if(r)return r;{const o=await $o(e.appConfig.senderId);if(o)return await xe(e,o),o}}async function xe(e,t){const n=Le(e),o=(await Re()).transaction(M,"readwrite");return await o.objectStore(M).put(t,n),await o.done,t}async function xo(e){const t=Le(e),r=(await Re()).transaction(M,"readwrite");await r.objectStore(M).delete(t),await r.done}function Le({appConfig:e}){return e.appId}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lo={["missing-app-config-values"]:'Missing App configuration value: "{$valueName}"',["only-available-in-window"]:"This method is available in a Window context.",["only-available-in-sw"]:"This method is available in a service worker context.",["permission-default"]:"The notification permission was not granted and dismissed instead.",["permission-blocked"]:"The notification permission was not granted and blocked instead.",["unsupported-browser"]:"This browser doesn't support the API's required to use the Firebase SDK.",["indexed-db-unsupported"]:"This browser doesn't support indexedDb.open() (ex. Safari iFrame, Firefox Private Browsing, etc)",["failed-service-worker-registration"]:"We are unable to register the default service worker. {$browserErrorMessage}",["token-subscribe-failed"]:"A problem occurred while subscribing the user to FCM: {$errorInfo}",["token-subscribe-no-token"]:"FCM returned no token when subscribing the user to push.",["token-unsubscribe-failed"]:"A problem occurred while unsubscribing the user from FCM: {$errorInfo}",["token-update-failed"]:"A problem occurred while updating the user from FCM: {$errorInfo}",["token-update-no-token"]:"FCM returned no token when updating the user to push.",["use-sw-after-get-token"]:"The useServiceWorker() method may only be called once and must be called before calling getToken() to ensure your service worker is used.",["invalid-sw-registration"]:"The input to useServiceWorker() must be a ServiceWorkerRegistration.",["invalid-bg-handler"]:"The input to setBackgroundMessageHandler() must be a function.",["invalid-vapid-key"]:"The public VAPID key must be a string.",["use-vapid-key-after-get-token"]:"The usePublicVapidKey() method may only be called once and must be called before calling getToken() to ensure your VAPID key is used."},b=new X("messaging","Messaging",Lo);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function jo(e,t){const n=await Fe(e),r=zt(t),o={method:"POST",headers:n,body:JSON.stringify(r)};let s;try{s=await(await fetch(je(e.appConfig),o)).json()}catch(a){throw b.create("token-subscribe-failed",{errorInfo:a==null?void 0:a.toString()})}if(s.error){const a=s.error.message;throw b.create("token-subscribe-failed",{errorInfo:a})}if(!s.token)throw b.create("token-subscribe-no-token");return s.token}async function Fo(e,t){const n=await Fe(e),r=zt(t.subscriptionOptions),o={method:"PATCH",headers:n,body:JSON.stringify(r)};let s;try{s=await(await fetch(`${je(e.appConfig)}/${t.token}`,o)).json()}catch(a){throw b.create("token-update-failed",{errorInfo:a==null?void 0:a.toString()})}if(s.error){const a=s.error.message;throw b.create("token-update-failed",{errorInfo:a})}if(!s.token)throw b.create("token-update-no-token");return s.token}async function Kt(e,t){const n=await Fe(e),r={method:"DELETE",headers:n};try{const s=await(await fetch(`${je(e.appConfig)}/${t}`,r)).json();if(s.error){const a=s.error.message;throw b.create("token-unsubscribe-failed",{errorInfo:a})}}catch(o){throw b.create("token-unsubscribe-failed",{errorInfo:o==null?void 0:o.toString()})}}function je({projectId:e}){return`${To}/projects/${e}/registrations`}async function Fe({appConfig:e,installations:t}){const n=await t.getToken();return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":e.apiKey,"x-goog-firebase-installations-auth":`FIS ${n}`})}function zt({p256dh:e,auth:t,endpoint:n,vapidKey:r}){const o={web:{endpoint:n,auth:t,p256dh:e}};return r!==Ht&&(o.web.applicationPubKey=r),o}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vo=7*24*60*60*1e3;async function Ho(e){const t=await Ko(e.swRegistration,e.vapidKey),n={vapidKey:e.vapidKey,swScope:e.swRegistration.scope,endpoint:t.endpoint,auth:y(t.getKey("auth")),p256dh:y(t.getKey("p256dh"))},r=await Ut(e.firebaseDependencies);if(r){if(zo(r.subscriptionOptions,n))return Date.now()>=r.createTime+Vo?Uo(e,{token:r.token,createTime:Date.now(),subscriptionOptions:n}):r.token;try{await Kt(e.firebaseDependencies,r.token)}catch(o){console.warn(o)}return ot(e.firebaseDependencies,n)}else return ot(e.firebaseDependencies,n)}async function Wo(e){const t=await Ut(e.firebaseDependencies);t&&(await Kt(e.firebaseDependencies,t.token),await xo(e.firebaseDependencies));const n=await e.swRegistration.pushManager.getSubscription();return n?n.unsubscribe():!0}async function Uo(e,t){try{const n=await Fo(e.firebaseDependencies,t),r=Object.assign(Object.assign({},t),{token:n,createTime:Date.now()});return await xe(e.firebaseDependencies,r),n}catch(n){throw await Wo(e),n}}async function ot(e,t){const r={token:await jo(e,t),createTime:Date.now(),subscriptionOptions:t};return await xe(e,r),r.token}async function Ko(e,t){const n=await e.pushManager.getSubscription();return n||e.pushManager.subscribe({userVisibleOnly:!0,applicationServerKey:Bo(t)})}function zo(e,t){const n=t.vapidKey===e.vapidKey,r=t.endpoint===e.endpoint,o=t.auth===e.auth,s=t.p256dh===e.p256dh;return n&&r&&o&&s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function st(e){const t={from:e.from,collapseKey:e.collapse_key,messageId:e.fcmMessageId};return qo(t,e),Go(t,e),Jo(t,e),t}function qo(e,t){if(!t.notification)return;e.notification={};const n=t.notification.title;n&&(e.notification.title=n);const r=t.notification.body;r&&(e.notification.body=r);const o=t.notification.image;o&&(e.notification.image=o);const s=t.notification.icon;s&&(e.notification.icon=s)}function Go(e,t){!t.data||(e.data=t.data)}function Jo(e,t){var n,r,o,s,a;if(!t.fcmOptions&&!(!((n=t.notification)===null||n===void 0)&&n.click_action))return;e.fcmOptions={};const i=(o=(r=t.fcmOptions)===null||r===void 0?void 0:r.link)!==null&&o!==void 0?o:(s=t.notification)===null||s===void 0?void 0:s.click_action;i&&(e.fcmOptions.link=i);const c=(a=t.fcmOptions)===null||a===void 0?void 0:a.analytics_label;c&&(e.fcmOptions.analyticsLabel=c)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yo(e){return typeof e=="object"&&!!e&&Wt in e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */qt("hts/frbslgigp.ogepscmv/ieo/eaylg","tp:/ieaeogn-agolai.o/1frlglgc/o");qt("AzSCbw63g1R0nCw85jG8","Iaya3yLKwmgvh7cF0q4");function qt(e,t){const n=[];for(let r=0;r<e.length;r++)n.push(e.charAt(r)),r<t.length&&n.push(t.charAt(r));return n.join("")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qo(e){if(!e||!e.options)throw he("App Configuration Object");if(!e.name)throw he("App Name");const t=["projectId","apiKey","appId","messagingSenderId"],{options:n}=e;for(const r of t)if(!n[r])throw he(r);return{appName:e.name,projectId:n.projectId,apiKey:n.apiKey,appId:n.appId,senderId:n.messagingSenderId}}function he(e){return b.create("missing-app-config-values",{valueName:e})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xo{constructor(t,n,r){this.deliveryMetricsExportedToBigQueryEnabled=!1,this.onBackgroundMessageHandler=null,this.onMessageHandler=null,this.logEvents=[],this.isLogServiceStarted=!1;const o=Qo(t);this.firebaseDependencies={app:t,appConfig:o,installations:n,analyticsProvider:r}}_delete(){return Promise.resolve()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Zo(e){try{e.swRegistration=await navigator.serviceWorker.register(Ao,{scope:Do}),e.swRegistration.update().catch(()=>{})}catch(t){throw b.create("failed-service-worker-registration",{browserErrorMessage:t==null?void 0:t.message})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function es(e,t){if(!t&&!e.swRegistration&&await Zo(e),!(!t&&!!e.swRegistration)){if(!(t instanceof ServiceWorkerRegistration))throw b.create("invalid-sw-registration");e.swRegistration=t}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ts(e,t){t?e.vapidKey=t:e.vapidKey||(e.vapidKey=Ht)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Gt(e,t){if(!navigator)throw b.create("only-available-in-window");if(Notification.permission==="default"&&await Notification.requestPermission(),Notification.permission!=="granted")throw b.create("permission-blocked");return await ts(e,t==null?void 0:t.vapidKey),await es(e,t==null?void 0:t.serviceWorkerRegistration),Ho(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ns(e,t,n){const r=rs(t);(await e.firebaseDependencies.analyticsProvider.get()).logEvent(r,{message_id:n[Wt],message_name:n[Co],message_time:n[ko],message_device_time:Math.floor(Date.now()/1e3)})}function rs(e){switch(e){case W.NOTIFICATION_CLICKED:return"notification_open";case W.PUSH_RECEIVED:return"notification_foreground";default:throw new Error}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function os(e,t){const n=t.data;if(!n.isFirebaseMessaging)return;e.onMessageHandler&&n.messageType===W.PUSH_RECEIVED&&(typeof e.onMessageHandler=="function"?e.onMessageHandler(st(n)):e.onMessageHandler.next(st(n)));const r=n.data;Yo(r)&&r[Oo]==="1"&&await ns(e,n.messageType,r)}const at="@firebase/messaging",it="0.12.4";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ss=e=>{const t=new Xo(e.getProvider("app").getImmediate(),e.getProvider("installations-internal").getImmediate(),e.getProvider("analytics-internal"));return navigator.serviceWorker.addEventListener("message",n=>os(t,n)),t},as=e=>{const t=e.getProvider("messaging").getImmediate();return{getToken:r=>Gt(t,r)}};function is(){B(new T("messaging",ss,"PUBLIC")),B(new T("messaging-internal",as,"PRIVATE")),A(at,it),A(at,it,"esm2017")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ee(){try{await gt()}catch{return!1}return typeof window!="undefined"&&pt()&&bn()&&"serviceWorker"in navigator&&"PushManager"in window&&"Notification"in window&&"fetch"in window&&ServiceWorkerRegistration.prototype.hasOwnProperty("showNotification")&&PushSubscription.prototype.hasOwnProperty("getKey")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cs(e=br()){return Ee().then(t=>{if(!t)throw b.create("unsupported-browser")},t=>{throw b.create("indexed-db-unsupported")}),ke(mt(e),"messaging").getImmediate()}async function us(e,t){return e=mt(e),Gt(e,t)}is();var ls="/assets/welcome-bg2-2x-svg.e2ce9c0a.svg";const Jt=e=>(Yt("data-v-b7a7c23e"),e=e(),Qt(),e),ds=Jt(()=>g("img",{src:ls,class:"bg-img-1"},null,-1)),fs=Jt(()=>g("h3",{class:"h3 title overlay-title font-weight-medium mb-1"},[F(" Hey Admin Bitchizzy, "),g("br"),F("Download latest report ")],-1)),hs=F(" Download Latest Report"),ps=U({__name:"WelcomeCard",setup(e){return ct(ut()),(t,n)=>(_(),K(q,null,{default:f(()=>[ds,l(z,null,{default:f(()=>[fs,l(L,{color:"secondary",size:"large",class:"mt-4"},{default:f(()=>[hs]),_:1})]),_:1})]),_:1}))}});var gs=on(ps,[["__scopeId","data-v-b7a7c23e"]]);const ms={class:"d-flex align-start"},bs=g("h2",{class:"font-weight-medium title text-white mt-1"},"Total Giftcard Transactions",-1),_s={class:"ml-auto"},ws={class:"text-white text-h5"},ys=g("span",{class:"text-white op-5 subtitle-1"},"Monthly revenue",-1),Is=U({__name:"TheEarnings",setup(e){const t=x(Se("revenue")),n=r=>new Intl.NumberFormat().format(r);return(r,o)=>{const s=Ae("vue-feather");return _(),K(q,{class:"bg-secondary"},{default:f(()=>[l(z,null,{default:f(()=>[g("div",ms,[bs,l(De),g("div",_s,[l(L,{depressed:"",color:"white",class:"btn-custom-sm",small:"",icon:""},{default:f(()=>[l(s,{type:"dollar-sign",class:"text-dark"})]),_:1})])]),(_(!0),D(V,null,Q(t.value.giftcard_total,(a,i)=>(_(),D("div",{key:i,class:"mt-4"},[g("h2",ws,"\u20A6\u200E "+Te(n(a.total_approved_transactions_amount)),1),ys]))),128))]),_:1})]),_:1})}}}),vs={class:"d-flex align-start"},Es=g("h2",{class:"font-weight-medium title text-secondary mt-1"}," Total Withdrawals ",-1),Ss={class:"ml-auto"},As={class:"text-secondary text-h5"},Ds=g("span",{class:"text-secondary op-5 subtitle-1"},"Monthly revenue",-1),Ts=U({__name:"MonthlyRevenue",setup(e){const t=x(Se("revenue")),n=r=>new Intl.NumberFormat().format(r);return(r,o)=>{const s=Ae("vue-feather");return _(),K(q,{class:"bg-primary"},{default:f(()=>[l(z,null,{default:f(()=>[g("div",vs,[Es,l(De),g("div",Ss,[l(L,{depressed:"",color:"white",class:"btn-custom-sm",small:"",icon:""},{default:f(()=>[l(s,{type:"credit-card",class:"text-dark"})]),_:1})])]),(_(!0),D(V,null,Q(t.value.withdrawals_total,(a,i)=>(_(),D("div",{key:i,class:"mt-4"},[g("h2",As,"\u20A6\u200E "+Te(n(a.total_completed_transactions_amount)),1),Ds]))),128))]),_:1})]),_:1})}}}),Cs={class:"d-flex align-start"},ks=g("h2",{class:"font-weight-medium title text-white mt-1"},"Total Crypto Transactions",-1),Os={class:"ml-auto"},Bs={class:"text-white text-h5"},Ns=g("span",{class:"text-white op-5 subtitle-1"},"Monthly revenue",-1),$s=U({__name:"asset-overview",setup(e){const t=x(Se("revenue")),n=r=>new Intl.NumberFormat().format(r);return(r,o)=>{const s=Ae("vue-feather");return _(),K(q,{class:"bg-secondary"},{default:f(()=>[l(z,null,{default:f(()=>[g("div",Cs,[ks,l(De),g("div",Os,[l(L,{depressed:"",color:"white",class:"btn-custom-sm",small:"",icon:""},{default:f(()=>[l(s,{type:"dollar-sign",class:"text-dark"})]),_:1})])]),(_(!0),D(V,null,Q(t.value.asset_total,(a,i)=>(_(),D("div",{key:i,class:"mt-4"},[g("h2",Bs,"\u20A6\u200E "+Te(n(a.total_approved_transactions_amount)),1),Ns]))),128))]),_:1})]),_:1})}}}),Ms=g("h3",null,"All Notifications",-1),Ps=F("Mark as read"),Rs=F("Close Dialog"),Ws=U({__name:"Analytical",setup(e){const t=ut(),{getAllTransactionCount:n}=He(),{withdrawals_total:r,giftcard_total:o,asset_total:s}=ct(He());rn("revenue",{withdrawals_total:r,giftcard_total:o,asset_total:s});const a=x({title:"Dashboard Analytics"}),i=x([{text:"Dashboard",disabled:!1,href:"#"},{text:"Analytical",disabled:!0,href:"#"}]);x([]);const u=wt({apiKey:"AIzaSyD8BOVBBzSuRE6XBG_9_oAOwG84oAp5Qnc",authDomain:"ksbdatatech-a01c9.firebaseapp.com",databaseURL:"https://ksbdatatech-a01c9-default-rtdb.firebaseio.com",projectId:"ksbdatatech-a01c9",storageBucket:"ksbdatatech-a01c9.appspot.com",messagingSenderId:"1060149520292",appId:"1:1060149520292:web:9d0858eb59527b00bec331",measurementId:"G-7MTQ1QSPE6"}),d=async w=>{try{const m=await t.updateAdminProfile(w);return Promise.resolve(m)}catch(m){return Promise.reject(m)}};function v(){Ee().then(()=>{const w=cs(u);console.log("Requesting permission..."),Notification.requestPermission().then(m=>{m==="granted"?(console.log("Notification permission granted."),us(w,{vapidKey:"BAYCwPz2x30IwyZEmLq6T5oHzyu9TTQCZtNvTnUgwk4B9ttL9ph51ziDAfJ0UMk2wp8jwPjL2bUiK0QnnASjU6k"}).then(p=>{p?d({_method:"PATCH",fcm_token:p}):console.log("No registration token available. Request permission to generate one.")}).catch(p=>{console.log("An error occurred while retrieving token.",p)})):console.log("Do not have permission")})})}return v(),Ee().then(()=>{v()}),Xt(async()=>{await n(),await t.GetProfile(),await t.getPermissions()}),(w,m)=>(_(),D(V,null,[l(sn,{title:a.value.title,breadcrumbs:i.value},null,8,["title","breadcrumbs"]),l(G,null,{default:f(()=>[l(P,{cols:"12",sm:"12",lg:"12"},{default:f(()=>[l(G,null,{default:f(()=>[l(P,{cols:"12",sm:"8",lg:"12"},{default:f(()=>[l(gs)]),_:1})]),_:1}),l(G,{class:"mt-4"},{default:f(()=>[l(P,{cols:"12",sm:"6",lg:"4",class:""},{default:f(()=>[l(Is)]),_:1}),l(P,{cols:"12",sm:"6",lg:"4",class:""},{default:f(()=>[l(Ts)]),_:1}),l(P,{cols:"12",sm:"6",lg:"4",class:""},{default:f(()=>[l($s)]),_:1})]),_:1})]),_:1})]),_:1}),l(tn,{"max-width":"400px",modelValue:R(t).notificationModal,"onUpdate:modelValue":m[1]||(m[1]=p=>R(t).notificationModal=p)},{default:f(()=>[l(q,null,{default:f(()=>[l(z,null,{default:f(()=>[Ms,l(G,null,{default:f(()=>[l(P,{cols:"12"},{default:f(()=>[l(Zt,null,{default:f(()=>[(_(!0),D(V,null,Q(R(t).notificationData,(p,Ve)=>(_(),K(nn,{class:"pa-3 mt-2 d-flex",key:Ve,value:p==null?void 0:p.id,rounded:"lg",title:p==null?void 0:p.data.title,subtitle:p==null?void 0:p.data.body},{default:f(()=>[l(L,{color:"secondary",variant:"text",loading:R(t).updating,onClick:xs=>R(t).markAsRead(p.id)},{default:f(()=>[Ps]),_:2},1032,["loading","onClick"])]),_:2},1032,["value","title","subtitle"]))),128))]),_:1})]),_:1})]),_:1})]),_:1}),l(en,{class:"my-4"},{default:f(()=>[l(L,{block:"",onClick:m[0]||(m[0]=p=>R(t).notificationModal=!1)},{default:f(()=>[Rs]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"])],64))}});export{Ws as default};
