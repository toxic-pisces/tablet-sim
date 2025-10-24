(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function t(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(i){if(i.ep)return;i.ep=!0;const r=t(i);fetch(i.href,r)}})();const mo="modulepreload",_o=function(n){return"/tablet-sim/"+n},Ts={},yo=function(e,t,s){let i=Promise.resolve();if(t&&t.length>0){document.getElementsByTagName("link");const o=document.querySelector("meta[property=csp-nonce]"),a=(o==null?void 0:o.nonce)||(o==null?void 0:o.getAttribute("nonce"));i=Promise.allSettled(t.map(c=>{if(c=_o(c),c in Ts)return;Ts[c]=!0;const l=c.endsWith(".css"),d=l?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${c}"]${d}`))return;const u=document.createElement("link");if(u.rel=l?"stylesheet":mo,l||(u.as="script"),u.crossOrigin="",u.href=c,a&&u.setAttribute("nonce",a),document.head.appendChild(u),l)return new Promise((f,p)=>{u.addEventListener("load",f),u.addEventListener("error",()=>p(new Error(`Unable to preload CSS for ${c}`)))})}))}function r(o){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=o,window.dispatchEvent(a),!a.defaultPrevented)throw o}return i.then(o=>{for(const a of o||[])a.status==="rejected"&&r(a.reason);return e().catch(r)})};var Ns={};/**
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
 */const bi={NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
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
 */const m=function(n,e){if(!n)throw Be(e)},Be=function(n){return new Error("Firebase Database ("+bi.SDK_VERSION+") INTERNAL ASSERT FAILED: "+n)};/**
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
 */const Ii=function(n){const e=[];let t=0;for(let s=0;s<n.length;s++){let i=n.charCodeAt(s);i<128?e[t++]=i:i<2048?(e[t++]=i>>6|192,e[t++]=i&63|128):(i&64512)===55296&&s+1<n.length&&(n.charCodeAt(s+1)&64512)===56320?(i=65536+((i&1023)<<10)+(n.charCodeAt(++s)&1023),e[t++]=i>>18|240,e[t++]=i>>12&63|128,e[t++]=i>>6&63|128,e[t++]=i&63|128):(e[t++]=i>>12|224,e[t++]=i>>6&63|128,e[t++]=i&63|128)}return e},vo=function(n){const e=[];let t=0,s=0;for(;t<n.length;){const i=n[t++];if(i<128)e[s++]=String.fromCharCode(i);else if(i>191&&i<224){const r=n[t++];e[s++]=String.fromCharCode((i&31)<<6|r&63)}else if(i>239&&i<365){const r=n[t++],o=n[t++],a=n[t++],c=((i&7)<<18|(r&63)<<12|(o&63)<<6|a&63)-65536;e[s++]=String.fromCharCode(55296+(c>>10)),e[s++]=String.fromCharCode(56320+(c&1023))}else{const r=n[t++],o=n[t++];e[s++]=String.fromCharCode((i&15)<<12|(r&63)<<6|o&63)}}return e.join("")},Wn={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let i=0;i<n.length;i+=3){const r=n[i],o=i+1<n.length,a=o?n[i+1]:0,c=i+2<n.length,l=c?n[i+2]:0,d=r>>2,u=(r&3)<<4|a>>4;let f=(a&15)<<2|l>>6,p=l&63;c||(p=64,o||(f=64)),s.push(t[d],t[u],t[f],t[p])}return s.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(Ii(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):vo(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let i=0;i<n.length;){const r=t[n.charAt(i++)],a=i<n.length?t[n.charAt(i)]:0;++i;const l=i<n.length?t[n.charAt(i)]:64;++i;const u=i<n.length?t[n.charAt(i)]:64;if(++i,r==null||a==null||l==null||u==null)throw new bo;const f=r<<2|a>>4;if(s.push(f),l!==64){const p=a<<4&240|l>>2;if(s.push(p),u!==64){const g=l<<6&192|u;s.push(g)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class bo extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Ci=function(n){const e=Ii(n);return Wn.encodeByteArray(e,!0)},Tt=function(n){return Ci(n).replace(/\./g,"")},wn=function(n){try{return Wn.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function Io(n){return wi(void 0,n)}function wi(n,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const t=e;return new Date(t.getTime());case Object:n===void 0&&(n={});break;case Array:n=[];break;default:return e}for(const t in e)!e.hasOwnProperty(t)||!Co(t)||(n[t]=wi(n[t],e[t]));return n}function Co(n){return n!=="__proto__"}/**
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
 */function wo(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Eo=()=>wo().__FIREBASE_DEFAULTS__,So=()=>{if(typeof process>"u"||typeof Ns>"u")return;const n=Ns.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},To=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&wn(n[1]);return e&&JSON.parse(e)},Ei=()=>{try{return Eo()||So()||To()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},No=n=>{var e,t;return(t=(e=Ei())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[n]},Do=n=>{const e=No(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),s]:[e.substring(0,t),s]},Si=()=>{var n;return(n=Ei())===null||n===void 0?void 0:n.config};/**
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
 */class Yt{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,s)=>{t?this.reject(t):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,s))}}}/**
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
 */function ko(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},s=e||"demo-project",i=n.iat||0,r=n.sub||n.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:i,exp:i+3600,auth_time:i,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}}},n);return[Tt(JSON.stringify(t)),Tt(JSON.stringify(o)),""].join(".")}/**
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
 */function xo(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Ti(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(xo())}function Ao(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Ro(){return bi.NODE_ADMIN===!0}function Po(){try{return typeof indexedDB=="object"}catch{return!1}}function Mo(){return new Promise((n,e)=>{try{let t=!0;const s="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(s);i.onsuccess=()=>{i.result.close(),t||self.indexedDB.deleteDatabase(s),n(!0)},i.onupgradeneeded=()=>{t=!1},i.onerror=()=>{var r;e(((r=i.error)===null||r===void 0?void 0:r.message)||"")}}catch(t){e(t)}})}/**
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
 */const Oo="FirebaseError";class ft extends Error{constructor(e,t,s){super(t),this.code=e,this.customData=s,this.name=Oo,Object.setPrototypeOf(this,ft.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ni.prototype.create)}}class Ni{constructor(e,t,s){this.service=e,this.serviceName=t,this.errors=s}create(e,...t){const s=t[0]||{},i=`${this.service}/${e}`,r=this.errors[e],o=r?Lo(r,s):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new ft(i,a,s)}}function Lo(n,e){return n.replace(Fo,(t,s)=>{const i=e[s];return i!=null?String(i):`<${s}?>`})}const Fo=/\{\$([^}]+)}/g;/**
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
 */function tt(n){return JSON.parse(n)}function A(n){return JSON.stringify(n)}/**
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
 */const Di=function(n){let e={},t={},s={},i="";try{const r=n.split(".");e=tt(wn(r[0])||""),t=tt(wn(r[1])||""),i=r[2],s=t.d||{},delete t.d}catch{}return{header:e,claims:t,data:s,signature:i}},Bo=function(n){const e=Di(n),t=e.claims;return!!t&&typeof t=="object"&&t.hasOwnProperty("iat")},$o=function(n){const e=Di(n).claims;return typeof e=="object"&&e.admin===!0};/**
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
 */function oe(n,e){return Object.prototype.hasOwnProperty.call(n,e)}function Re(n,e){if(Object.prototype.hasOwnProperty.call(n,e))return n[e]}function Ds(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function Nt(n,e,t){const s={};for(const i in n)Object.prototype.hasOwnProperty.call(n,i)&&(s[i]=e.call(t,n[i],i,n));return s}function En(n,e){if(n===e)return!0;const t=Object.keys(n),s=Object.keys(e);for(const i of t){if(!s.includes(i))return!1;const r=n[i],o=e[i];if(ks(r)&&ks(o)){if(!En(r,o))return!1}else if(r!==o)return!1}for(const i of s)if(!t.includes(i))return!1;return!0}function ks(n){return n!==null&&typeof n=="object"}/**
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
 */function Ho(n){const e=[];for(const[t,s]of Object.entries(n))Array.isArray(s)?s.forEach(i=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}/**
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
 */class Wo{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,t){t||(t=0);const s=this.W_;if(typeof e=="string")for(let u=0;u<16;u++)s[u]=e.charCodeAt(t)<<24|e.charCodeAt(t+1)<<16|e.charCodeAt(t+2)<<8|e.charCodeAt(t+3),t+=4;else for(let u=0;u<16;u++)s[u]=e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3],t+=4;for(let u=16;u<80;u++){const f=s[u-3]^s[u-8]^s[u-14]^s[u-16];s[u]=(f<<1|f>>>31)&4294967295}let i=this.chain_[0],r=this.chain_[1],o=this.chain_[2],a=this.chain_[3],c=this.chain_[4],l,d;for(let u=0;u<80;u++){u<40?u<20?(l=a^r&(o^a),d=1518500249):(l=r^o^a,d=1859775393):u<60?(l=r&o|a&(r|o),d=2400959708):(l=r^o^a,d=3395469782);const f=(i<<5|i>>>27)+l+c+d+s[u]&4294967295;c=a,a=o,o=(r<<30|r>>>2)&4294967295,r=i,i=f}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+r&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+c&4294967295}update(e,t){if(e==null)return;t===void 0&&(t=e.length);const s=t-this.blockSize;let i=0;const r=this.buf_;let o=this.inbuf_;for(;i<t;){if(o===0)for(;i<=s;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<t;)if(r[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}else for(;i<t;)if(r[o]=e[i],++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}this.inbuf_=o,this.total_+=t}digest(){const e=[];let t=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=t&255,t/=256;this.compress_(this.buf_);let s=0;for(let i=0;i<5;i++)for(let r=24;r>=0;r-=8)e[s]=this.chain_[i]>>r&255,++s;return e}}function zn(n,e){return`${n} failed: ${e} argument `}/**
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
 */const zo=function(n){const e=[];let t=0;for(let s=0;s<n.length;s++){let i=n.charCodeAt(s);if(i>=55296&&i<=56319){const r=i-55296;s++,m(s<n.length,"Surrogate pair missing trail surrogate.");const o=n.charCodeAt(s)-56320;i=65536+(r<<10)+o}i<128?e[t++]=i:i<2048?(e[t++]=i>>6|192,e[t++]=i&63|128):i<65536?(e[t++]=i>>12|224,e[t++]=i>>6&63|128,e[t++]=i&63|128):(e[t++]=i>>18|240,e[t++]=i>>12&63|128,e[t++]=i>>6&63|128,e[t++]=i&63|128)}return e},Xt=function(n){let e=0;for(let t=0;t<n.length;t++){const s=n.charCodeAt(t);s<128?e++:s<2048?e+=2:s>=55296&&s<=56319?(e+=4,t++):e+=3}return e};/**
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
 */function $e(n){return n&&n._delegate?n._delegate:n}class nt{constructor(e,t,s){this.name=e,this.instanceFactory=t,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const me="[DEFAULT]";/**
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
 */class Uo{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const s=new Yt;if(this.instancesDeferred.set(t,s),this.isInitialized(t)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:t});i&&s.resolve(i)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(r){if(i)return null;throw r}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(qo(e))try{this.getOrInitializeService({instanceIdentifier:me})}catch{}for(const[t,s]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(t);try{const r=this.getOrInitializeService({instanceIdentifier:i});s.resolve(r)}catch{}}}}clearInstance(e=me){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=me){return this.instances.has(e)}getOptions(e=me){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:s,options:t});for(const[r,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(r);s===a&&o.resolve(i)}return i}onInit(e,t){var s;const i=this.normalizeInstanceIdentifier(t),r=(s=this.onInitCallbacks.get(i))!==null&&s!==void 0?s:new Set;r.add(e),this.onInitCallbacks.set(i,r);const o=this.instances.get(i);return o&&e(o,i),()=>{r.delete(e)}}invokeOnInitCallbacks(e,t){const s=this.onInitCallbacks.get(t);if(s)for(const i of s)try{i(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:Vo(e),options:t}),this.instances.set(e,s),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=me){return this.component?this.component.multipleInstances?e:me:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Vo(n){return n===me?void 0:n}function qo(n){return n.instantiationMode==="EAGER"}/**
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
 */class Go{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new Uo(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var S;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(S||(S={}));const jo={debug:S.DEBUG,verbose:S.VERBOSE,info:S.INFO,warn:S.WARN,error:S.ERROR,silent:S.SILENT},Qo=S.INFO,Ko={[S.DEBUG]:"log",[S.VERBOSE]:"log",[S.INFO]:"info",[S.WARN]:"warn",[S.ERROR]:"error"},Yo=(n,e,...t)=>{if(e<n.logLevel)return;const s=new Date().toISOString(),i=Ko[e];if(i)console[i](`[${s}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class ki{constructor(e){this.name=e,this._logLevel=Qo,this._logHandler=Yo,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in S))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?jo[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,S.DEBUG,...e),this._logHandler(this,S.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,S.VERBOSE,...e),this._logHandler(this,S.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,S.INFO,...e),this._logHandler(this,S.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,S.WARN,...e),this._logHandler(this,S.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,S.ERROR,...e),this._logHandler(this,S.ERROR,...e)}}const Xo=(n,e)=>e.some(t=>n instanceof t);let xs,As;function Jo(){return xs||(xs=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Zo(){return As||(As=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const xi=new WeakMap,Sn=new WeakMap,Ai=new WeakMap,hn=new WeakMap,Un=new WeakMap;function ea(n){const e=new Promise((t,s)=>{const i=()=>{n.removeEventListener("success",r),n.removeEventListener("error",o)},r=()=>{t(le(n.result)),i()},o=()=>{s(n.error),i()};n.addEventListener("success",r),n.addEventListener("error",o)});return e.then(t=>{t instanceof IDBCursor&&xi.set(t,n)}).catch(()=>{}),Un.set(e,n),e}function ta(n){if(Sn.has(n))return;const e=new Promise((t,s)=>{const i=()=>{n.removeEventListener("complete",r),n.removeEventListener("error",o),n.removeEventListener("abort",o)},r=()=>{t(),i()},o=()=>{s(n.error||new DOMException("AbortError","AbortError")),i()};n.addEventListener("complete",r),n.addEventListener("error",o),n.addEventListener("abort",o)});Sn.set(n,e)}let Tn={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return Sn.get(n);if(e==="objectStoreNames")return n.objectStoreNames||Ai.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return le(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function na(n){Tn=n(Tn)}function sa(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const s=n.call(fn(this),e,...t);return Ai.set(s,e.sort?e.sort():[e]),le(s)}:Zo().includes(n)?function(...e){return n.apply(fn(this),e),le(xi.get(this))}:function(...e){return le(n.apply(fn(this),e))}}function ia(n){return typeof n=="function"?sa(n):(n instanceof IDBTransaction&&ta(n),Xo(n,Jo())?new Proxy(n,Tn):n)}function le(n){if(n instanceof IDBRequest)return ea(n);if(hn.has(n))return hn.get(n);const e=ia(n);return e!==n&&(hn.set(n,e),Un.set(e,n)),e}const fn=n=>Un.get(n);function ra(n,e,{blocked:t,upgrade:s,blocking:i,terminated:r}={}){const o=indexedDB.open(n,e),a=le(o);return s&&o.addEventListener("upgradeneeded",c=>{s(le(o.result),c.oldVersion,c.newVersion,le(o.transaction),c)}),t&&o.addEventListener("blocked",c=>t(c.oldVersion,c.newVersion,c)),a.then(c=>{r&&c.addEventListener("close",()=>r()),i&&c.addEventListener("versionchange",l=>i(l.oldVersion,l.newVersion,l))}).catch(()=>{}),a}const oa=["get","getKey","getAll","getAllKeys","count"],aa=["put","add","delete","clear"],pn=new Map;function Rs(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(pn.get(e))return pn.get(e);const t=e.replace(/FromIndex$/,""),s=e!==t,i=aa.includes(t);if(!(t in(s?IDBIndex:IDBObjectStore).prototype)||!(i||oa.includes(t)))return;const r=async function(o,...a){const c=this.transaction(o,i?"readwrite":"readonly");let l=c.store;return s&&(l=l.index(a.shift())),(await Promise.all([l[t](...a),i&&c.done]))[0]};return pn.set(e,r),r}na(n=>({...n,get:(e,t,s)=>Rs(e,t)||n.get(e,t,s),has:(e,t)=>!!Rs(e,t)||n.has(e,t)}));/**
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
 */class ca{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(la(t)){const s=t.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(t=>t).join(" ")}}function la(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Nn="@firebase/app",Ps="0.10.13";/**
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
 */const se=new ki("@firebase/app"),ua="@firebase/app-compat",da="@firebase/analytics-compat",ha="@firebase/analytics",fa="@firebase/app-check-compat",pa="@firebase/app-check",ga="@firebase/auth",ma="@firebase/auth-compat",_a="@firebase/database",ya="@firebase/data-connect",va="@firebase/database-compat",ba="@firebase/functions",Ia="@firebase/functions-compat",Ca="@firebase/installations",wa="@firebase/installations-compat",Ea="@firebase/messaging",Sa="@firebase/messaging-compat",Ta="@firebase/performance",Na="@firebase/performance-compat",Da="@firebase/remote-config",ka="@firebase/remote-config-compat",xa="@firebase/storage",Aa="@firebase/storage-compat",Ra="@firebase/firestore",Pa="@firebase/vertexai-preview",Ma="@firebase/firestore-compat",Oa="firebase",La="10.14.1";/**
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
 */const Dn="[DEFAULT]",Fa={[Nn]:"fire-core",[ua]:"fire-core-compat",[ha]:"fire-analytics",[da]:"fire-analytics-compat",[pa]:"fire-app-check",[fa]:"fire-app-check-compat",[ga]:"fire-auth",[ma]:"fire-auth-compat",[_a]:"fire-rtdb",[ya]:"fire-data-connect",[va]:"fire-rtdb-compat",[ba]:"fire-fn",[Ia]:"fire-fn-compat",[Ca]:"fire-iid",[wa]:"fire-iid-compat",[Ea]:"fire-fcm",[Sa]:"fire-fcm-compat",[Ta]:"fire-perf",[Na]:"fire-perf-compat",[Da]:"fire-rc",[ka]:"fire-rc-compat",[xa]:"fire-gcs",[Aa]:"fire-gcs-compat",[Ra]:"fire-fst",[Ma]:"fire-fst-compat",[Pa]:"fire-vertex","fire-js":"fire-js",[Oa]:"fire-js-all"};/**
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
 */const Dt=new Map,Ba=new Map,kn=new Map;function Ms(n,e){try{n.container.addComponent(e)}catch(t){se.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function kt(n){const e=n.name;if(kn.has(e))return se.debug(`There were multiple attempts to register component ${e}.`),!1;kn.set(e,n);for(const t of Dt.values())Ms(t,n);for(const t of Ba.values())Ms(t,n);return!0}function $a(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}/**
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
 */const Ha={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},ue=new Ni("app","Firebase",Ha);/**
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
 */class Wa{constructor(e,t,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new nt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw ue.create("app-deleted",{appName:this._name})}}/**
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
 */const za=La;function Ri(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const s=Object.assign({name:Dn,automaticDataCollectionEnabled:!1},e),i=s.name;if(typeof i!="string"||!i)throw ue.create("bad-app-name",{appName:String(i)});if(t||(t=Si()),!t)throw ue.create("no-options");const r=Dt.get(i);if(r){if(En(t,r.options)&&En(s,r.config))return r;throw ue.create("duplicate-app",{appName:i})}const o=new Go(i);for(const c of kn.values())o.addComponent(c);const a=new Wa(t,s,o);return Dt.set(i,a),a}function Ua(n=Dn){const e=Dt.get(n);if(!e&&n===Dn&&Si())return Ri();if(!e)throw ue.create("no-app",{appName:n});return e}function De(n,e,t){var s;let i=(s=Fa[n])!==null&&s!==void 0?s:n;t&&(i+=`-${t}`);const r=i.match(/\s|\//),o=e.match(/\s|\//);if(r||o){const a=[`Unable to register library "${i}" with version "${e}":`];r&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),r&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),se.warn(a.join(" "));return}kt(new nt(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const Va="firebase-heartbeat-database",qa=1,st="firebase-heartbeat-store";let gn=null;function Pi(){return gn||(gn=ra(Va,qa,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(st)}catch(t){console.warn(t)}}}}).catch(n=>{throw ue.create("idb-open",{originalErrorMessage:n.message})})),gn}async function Ga(n){try{const t=(await Pi()).transaction(st),s=await t.objectStore(st).get(Mi(n));return await t.done,s}catch(e){if(e instanceof ft)se.warn(e.message);else{const t=ue.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});se.warn(t.message)}}}async function Os(n,e){try{const s=(await Pi()).transaction(st,"readwrite");await s.objectStore(st).put(e,Mi(n)),await s.done}catch(t){if(t instanceof ft)se.warn(t.message);else{const s=ue.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});se.warn(s.message)}}}function Mi(n){return`${n.name}!${n.options.appId}`}/**
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
 */const ja=1024,Qa=30*24*60*60*1e3;class Ka{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new Xa(t),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var e,t;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=Ls();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(o=>o.date===r)?void 0:(this._heartbeatsCache.heartbeats.push({date:r,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=Qa}),this._storage.overwrite(this._heartbeatsCache))}catch(s){se.warn(s)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=Ls(),{heartbeatsToSend:s,unsentEntries:i}=Ya(this._heartbeatsCache.heartbeats),r=Tt(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=t,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}catch(t){return se.warn(t),""}}}function Ls(){return new Date().toISOString().substring(0,10)}function Ya(n,e=ja){const t=[];let s=n.slice();for(const i of n){const r=t.find(o=>o.agent===i.agent);if(r){if(r.dates.push(i.date),Fs(t)>e){r.dates.pop();break}}else if(t.push({agent:i.agent,dates:[i.date]}),Fs(t)>e){t.pop();break}s=s.slice(1)}return{heartbeatsToSend:t,unsentEntries:s}}class Xa{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Po()?Mo().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await Ga(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const i=await this.read();return Os(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const i=await this.read();return Os(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Fs(n){return Tt(JSON.stringify({version:2,heartbeats:n})).length}/**
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
 */function Ja(n){kt(new nt("platform-logger",e=>new ca(e),"PRIVATE")),kt(new nt("heartbeat",e=>new Ka(e),"PRIVATE")),De(Nn,Ps,n),De(Nn,Ps,"esm2017"),De("fire-js","")}Ja("");var Za="firebase",ec="10.14.1";/**
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
 */De(Za,ec,"app");var Bs={};const $s="@firebase/database",Hs="1.0.8";/**
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
 */let Oi="";function tc(n){Oi=n}/**
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
 */class nc{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,t){t==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),A(t))}get(e){const t=this.domStorage_.getItem(this.prefixedName_(e));return t==null?null:tt(t)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
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
 */class sc{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,t){t==null?delete this.cache_[e]:this.cache_[e]=t}get(e){return oe(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
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
 */const Li=function(n){try{if(typeof window<"u"&&typeof window[n]<"u"){const e=window[n];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new nc(e)}}catch{}return new sc},ye=Li("localStorage"),ic=Li("sessionStorage");/**
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
 */const ke=new ki("@firebase/database"),rc=function(){let n=1;return function(){return n++}}(),Fi=function(n){const e=zo(n),t=new Wo;t.update(e);const s=t.digest();return Wn.encodeByteArray(s)},pt=function(...n){let e="";for(let t=0;t<n.length;t++){const s=n[t];Array.isArray(s)||s&&typeof s=="object"&&typeof s.length=="number"?e+=pt.apply(null,s):typeof s=="object"?e+=A(s):e+=s,e+=" "}return e};let Ke=null,Ws=!0;const oc=function(n,e){m(!0,"Can't turn on custom loggers persistently."),ke.logLevel=S.VERBOSE,Ke=ke.log.bind(ke)},F=function(...n){if(Ws===!0&&(Ws=!1,Ke===null&&ic.get("logging_enabled")===!0&&oc()),Ke){const e=pt.apply(null,n);Ke(e)}},gt=function(n){return function(...e){F(n,...e)}},xn=function(...n){const e="FIREBASE INTERNAL ERROR: "+pt(...n);ke.error(e)},ie=function(...n){const e=`FIREBASE FATAL ERROR: ${pt(...n)}`;throw ke.error(e),new Error(e)},z=function(...n){const e="FIREBASE WARNING: "+pt(...n);ke.warn(e)},ac=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&z("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},Bi=function(n){return typeof n=="number"&&(n!==n||n===Number.POSITIVE_INFINITY||n===Number.NEGATIVE_INFINITY)},cc=function(n){if(document.readyState==="complete")n();else{let e=!1;const t=function(){if(!document.body){setTimeout(t,Math.floor(10));return}e||(e=!0,n())};document.addEventListener?(document.addEventListener("DOMContentLoaded",t,!1),window.addEventListener("load",t,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&t()}),window.attachEvent("onload",t))}},Pe="[MIN_NAME]",be="[MAX_NAME]",He=function(n,e){if(n===e)return 0;if(n===Pe||e===be)return-1;if(e===Pe||n===be)return 1;{const t=zs(n),s=zs(e);return t!==null?s!==null?t-s===0?n.length-e.length:t-s:-1:s!==null?1:n<e?-1:1}},lc=function(n,e){return n===e?0:n<e?-1:1},qe=function(n,e){if(e&&n in e)return e[n];throw new Error("Missing required key ("+n+") in object: "+A(e))},Vn=function(n){if(typeof n!="object"||n===null)return A(n);const e=[];for(const s in n)e.push(s);e.sort();let t="{";for(let s=0;s<e.length;s++)s!==0&&(t+=","),t+=A(e[s]),t+=":",t+=Vn(n[e[s]]);return t+="}",t},$i=function(n,e){const t=n.length;if(t<=e)return[n];const s=[];for(let i=0;i<t;i+=e)i+e>t?s.push(n.substring(i,t)):s.push(n.substring(i,i+e));return s};function U(n,e){for(const t in n)n.hasOwnProperty(t)&&e(t,n[t])}const Hi=function(n){m(!Bi(n),"Invalid JSON number");const e=11,t=52,s=(1<<e-1)-1;let i,r,o,a,c;n===0?(r=0,o=0,i=1/n===-1/0?1:0):(i=n<0,n=Math.abs(n),n>=Math.pow(2,1-s)?(a=Math.min(Math.floor(Math.log(n)/Math.LN2),s),r=a+s,o=Math.round(n*Math.pow(2,t-a)-Math.pow(2,t))):(r=0,o=Math.round(n/Math.pow(2,1-s-t))));const l=[];for(c=t;c;c-=1)l.push(o%2?1:0),o=Math.floor(o/2);for(c=e;c;c-=1)l.push(r%2?1:0),r=Math.floor(r/2);l.push(i?1:0),l.reverse();const d=l.join("");let u="";for(c=0;c<64;c+=8){let f=parseInt(d.substr(c,8),2).toString(16);f.length===1&&(f="0"+f),u=u+f}return u.toLowerCase()},uc=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},dc=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function hc(n,e){let t="Unknown Error";n==="too_big"?t="The data requested exceeds the maximum size that can be accessed with a single request.":n==="permission_denied"?t="Client doesn't have permission to access the desired data.":n==="unavailable"&&(t="The service is unavailable");const s=new Error(n+" at "+e._path.toString()+": "+t);return s.code=n.toUpperCase(),s}const fc=new RegExp("^-?(0*)\\d{1,10}$"),pc=-2147483648,gc=2147483647,zs=function(n){if(fc.test(n)){const e=Number(n);if(e>=pc&&e<=gc)return e}return null},We=function(n){try{n()}catch(e){setTimeout(()=>{const t=e.stack||"";throw z("Exception was thrown by user callback.",t),e},Math.floor(0))}},mc=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Ye=function(n,e){const t=setTimeout(n,e);return typeof t=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(t):typeof t=="object"&&t.unref&&t.unref(),t};/**
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
 */class _c{constructor(e,t){this.appName_=e,this.appCheckProvider=t,this.appCheck=t==null?void 0:t.getImmediate({optional:!0}),this.appCheck||t==null||t.get().then(s=>this.appCheck=s)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((t,s)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(t,s):t(null)},0)})}addTokenChangeListener(e){var t;(t=this.appCheckProvider)===null||t===void 0||t.get().then(s=>s.addTokenListener(e))}notifyForInvalidToken(){z(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
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
 */class yc{constructor(e,t,s){this.appName_=e,this.firebaseOptions_=t,this.authProvider_=s,this.auth_=null,this.auth_=s.getImmediate({optional:!0}),this.auth_||s.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(t=>t&&t.code==="auth/token-not-initialized"?(F("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(t)):new Promise((t,s)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(t,s):t(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(t=>t.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(t=>t.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',z(e)}}class St{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}St.OWNER="owner";/**
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
 */const qn="5",Wi="v",zi="s",Ui="r",Vi="f",qi=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,Gi="ls",ji="p",An="ac",Qi="websocket",Ki="long_polling";/**
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
 */class Yi{constructor(e,t,s,i,r=!1,o="",a=!1,c=!1){this.secure=t,this.namespace=s,this.webSocketOnly=i,this.nodeAdmin=r,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=c,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=ye.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&ye.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",t=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${t}`}}function vc(n){return n.host!==n.internalHost||n.isCustomHost()||n.includeNamespaceInQueryParams}function Xi(n,e,t){m(typeof e=="string","typeof type must == string"),m(typeof t=="object","typeof params must == object");let s;if(e===Qi)s=(n.secure?"wss://":"ws://")+n.internalHost+"/.ws?";else if(e===Ki)s=(n.secure?"https://":"http://")+n.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);vc(n)&&(t.ns=n.namespace);const i=[];return U(t,(r,o)=>{i.push(r+"="+o)}),s+i.join("&")}/**
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
 */class bc{constructor(){this.counters_={}}incrementCounter(e,t=1){oe(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=t}get(){return Io(this.counters_)}}/**
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
 */const mn={},_n={};function Gn(n){const e=n.toString();return mn[e]||(mn[e]=new bc),mn[e]}function Ic(n,e){const t=n.toString();return _n[t]||(_n[t]=e()),_n[t]}/**
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
 */class Cc{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,t){this.closeAfterResponse=e,this.onClose=t,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,t){for(this.pendingResponses[e]=t;this.pendingResponses[this.currentResponseNum];){const s=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<s.length;++i)s[i]&&We(()=>{this.onMessage_(s[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
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
 */const Us="start",wc="close",Ec="pLPCommand",Sc="pRTLPCB",Ji="id",Zi="pw",er="ser",Tc="cb",Nc="seg",Dc="ts",kc="d",xc="dframe",tr=1870,nr=30,Ac=tr-nr,Rc=25e3,Pc=3e4;class Ne{constructor(e,t,s,i,r,o,a){this.connId=e,this.repoInfo=t,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=gt(e),this.stats_=Gn(t),this.urlFn=c=>(this.appCheckToken&&(c[An]=this.appCheckToken),Xi(t,Ki,c))}open(e,t){this.curSegmentNum=0,this.onDisconnect_=t,this.myPacketOrderer=new Cc(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(Pc)),cc(()=>{if(this.isClosed_)return;this.scriptTagHolder=new jn((...r)=>{const[o,a,c,l,d]=r;if(this.incrementIncomingBytes_(r),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===Us)this.id=a,this.password=c;else if(o===wc)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...r)=>{const[o,a]=r;this.incrementIncomingBytes_(r),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const s={};s[Us]="t",s[er]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(s[Tc]=this.scriptTagHolder.uniqueCallbackIdentifier),s[Wi]=qn,this.transportSessionId&&(s[zi]=this.transportSessionId),this.lastSessionId&&(s[Gi]=this.lastSessionId),this.applicationId&&(s[ji]=this.applicationId),this.appCheckToken&&(s[An]=this.appCheckToken),typeof location<"u"&&location.hostname&&qi.test(location.hostname)&&(s[Ui]=Vi);const i=this.urlFn(s);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Ne.forceAllow_=!0}static forceDisallow(){Ne.forceDisallow_=!0}static isAvailable(){return Ne.forceAllow_?!0:!Ne.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!uc()&&!dc()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const t=A(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const s=Ci(t),i=$i(s,Ac);for(let r=0;r<i.length;r++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[r]),this.curSegmentNum++}addDisconnectPingFrame(e,t){this.myDisconnFrame=document.createElement("iframe");const s={};s[xc]="t",s[Ji]=e,s[Zi]=t,this.myDisconnFrame.src=this.urlFn(s),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const t=A(e).length;this.bytesReceived+=t,this.stats_.incrementCounter("bytes_received",t)}}class jn{constructor(e,t,s,i){this.onDisconnect=s,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=rc(),window[Ec+this.uniqueCallbackIdentifier]=e,window[Sc+this.uniqueCallbackIdentifier]=t,this.myIFrame=jn.createIFrame_();let r="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(r='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+r+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){F("frame writing exception"),a.stack&&F(a.stack),F(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||F("No IE domain setting required")}catch{const s=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+s+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,t){for(this.myID=e,this.myPW=t,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[Ji]=this.myID,e[Zi]=this.myPW,e[er]=this.currentSerial;let t=this.urlFn(e),s="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+nr+s.length<=tr;){const o=this.pendingSegs.shift();s=s+"&"+Nc+i+"="+o.seg+"&"+Dc+i+"="+o.ts+"&"+kc+i+"="+o.d,i++}return t=t+s,this.addLongPollTag_(t,this.currentSerial),!0}else return!1}enqueueSegment(e,t,s){this.pendingSegs.push({seg:e,ts:t,d:s}),this.alive&&this.newRequest_()}addLongPollTag_(e,t){this.outstandingRequests.add(t);const s=()=>{this.outstandingRequests.delete(t),this.newRequest_()},i=setTimeout(s,Math.floor(Rc)),r=()=>{clearTimeout(i),s()};this.addTag(e,r)}addTag(e,t){setTimeout(()=>{try{if(!this.sendNewPolls)return;const s=this.myIFrame.doc.createElement("script");s.type="text/javascript",s.async=!0,s.src=e,s.onload=s.onreadystatechange=function(){const i=s.readyState;(!i||i==="loaded"||i==="complete")&&(s.onload=s.onreadystatechange=null,s.parentNode&&s.parentNode.removeChild(s),t())},s.onerror=()=>{F("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(s)}catch{}},Math.floor(1))}}/**
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
 */const Mc=16384,Oc=45e3;let xt=null;typeof MozWebSocket<"u"?xt=MozWebSocket:typeof WebSocket<"u"&&(xt=WebSocket);class j{constructor(e,t,s,i,r,o,a){this.connId=e,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=gt(this.connId),this.stats_=Gn(t),this.connURL=j.connectionURL_(t,o,a,i,s),this.nodeAdmin=t.nodeAdmin}static connectionURL_(e,t,s,i,r){const o={};return o[Wi]=qn,typeof location<"u"&&location.hostname&&qi.test(location.hostname)&&(o[Ui]=Vi),t&&(o[zi]=t),s&&(o[Gi]=s),i&&(o[An]=i),r&&(o[ji]=r),Xi(e,Qi,o)}open(e,t){this.onDisconnect=t,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,ye.set("previous_websocket_failure",!0);try{let s;Ro(),this.mySock=new xt(this.connURL,[],s)}catch(s){this.log_("Error instantiating WebSocket.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=s=>{this.handleIncomingFrame(s)},this.mySock.onerror=s=>{this.log_("WebSocket error.  Closing connection.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){j.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const t=/Android ([0-9]{0,}\.[0-9]{0,})/,s=navigator.userAgent.match(t);s&&s.length>1&&parseFloat(s[1])<4.4&&(e=!0)}return!e&&xt!==null&&!j.forceDisallow_}static previouslyFailed(){return ye.isInMemoryStorage||ye.get("previous_websocket_failure")===!0}markConnectionHealthy(){ye.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const t=this.frames.join("");this.frames=null;const s=tt(t);this.onMessage(s)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(m(this.frames===null,"We already have a frame buffer"),e.length<=6){const t=Number(e);if(!isNaN(t))return this.handleNewFrameCount_(t),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const t=e.data;if(this.bytesReceived+=t.length,this.stats_.incrementCounter("bytes_received",t.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(t);else{const s=this.extractFrameCount_(t);s!==null&&this.appendFrame_(s)}}send(e){this.resetKeepAlive();const t=A(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const s=$i(t,Mc);s.length>1&&this.sendString_(String(s.length));for(let i=0;i<s.length;i++)this.sendString_(s[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(Oc))}sendString_(e){try{this.mySock.send(e)}catch(t){this.log_("Exception thrown from WebSocket.send():",t.message||t.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}j.responsesRequiredToBeHealthy=2;j.healthyTimeout=3e4;/**
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
 */class it{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[Ne,j]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const t=j&&j.isAvailable();let s=t&&!j.previouslyFailed();if(e.webSocketOnly&&(t||z("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),s=!0),s)this.transports_=[j];else{const i=this.transports_=[];for(const r of it.ALL_TRANSPORTS)r&&r.isAvailable()&&i.push(r);it.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}it.globalTransportInitialized_=!1;/**
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
 */const Lc=6e4,Fc=5e3,Bc=10*1024,$c=100*1024,yn="t",Vs="d",Hc="s",qs="r",Wc="e",Gs="o",js="a",Qs="n",Ks="p",zc="h";class Uc{constructor(e,t,s,i,r,o,a,c,l,d){this.id=e,this.repoInfo_=t,this.applicationId_=s,this.appCheckToken_=i,this.authToken_=r,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=c,this.onKill_=l,this.lastSessionId=d,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=gt("c:"+this.id+":"),this.transportManager_=new it(t),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.conn_),s=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(t,s)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=Ye(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>$c?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>Bc?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return t=>{e===this.conn_?this.onConnectionLost_(t):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return t=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(t):e===this.secondaryConn_?this.onSecondaryMessageReceived_(t):this.log_("message on old connection"))}}sendRequest(e){const t={t:"d",d:e};this.sendData_(t)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(yn in e){const t=e[yn];t===js?this.upgradeIfSecondaryHealthy_():t===qs?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):t===Gs&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const t=qe("t",e),s=qe("d",e);if(t==="c")this.onSecondaryControl_(s);else if(t==="d")this.pendingDataMessages.push(s);else throw new Error("Unknown protocol layer: "+t)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:Ks,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:js,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:Qs,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const t=qe("t",e),s=qe("d",e);t==="c"?this.onControl_(s):t==="d"&&this.onDataMessage_(s)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const t=qe(yn,e);if(Vs in e){const s=e[Vs];if(t===zc){const i=Object.assign({},s);this.repoInfo_.isUsingEmulator&&(i.h=this.repoInfo_.host),this.onHandshake_(i)}else if(t===Qs){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else t===Hc?this.onConnectionShutdown_(s):t===qs?this.onReset_(s):t===Wc?xn("Server Error: "+s):t===Gs?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):xn("Unknown control packet command: "+t)}}onHandshake_(e){const t=e.ts,s=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,t),qn!==s&&z("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.secondaryConn_),s=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(t,s),Ye(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(Lc))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,t){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(t,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Ye(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(Fc))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:Ks,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(ye.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
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
 */class sr{put(e,t,s,i){}merge(e,t,s,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,t,s){}onDisconnectMerge(e,t,s){}onDisconnectCancel(e,t){}reportStats(e){}}/**
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
 */class ir{constructor(e){this.allowedEvents_=e,this.listeners_={},m(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...t){if(Array.isArray(this.listeners_[e])){const s=[...this.listeners_[e]];for(let i=0;i<s.length;i++)s[i].callback.apply(s[i].context,t)}}on(e,t,s){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:t,context:s});const i=this.getInitialEvent(e);i&&t.apply(s,i)}off(e,t,s){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let r=0;r<i.length;r++)if(i[r].callback===t&&(!s||s===i[r].context)){i.splice(r,1);return}}validateEventType_(e){m(this.allowedEvents_.find(t=>t===e),"Unknown event: "+e)}}/**
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
 */class At extends ir{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!Ti()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new At}getInitialEvent(e){return m(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
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
 */const Ys=32,Xs=768;class E{constructor(e,t){if(t===void 0){this.pieces_=e.split("/");let s=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[s]=this.pieces_[i],s++);this.pieces_.length=s,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=t}toString(){let e="";for(let t=this.pieceNum_;t<this.pieces_.length;t++)this.pieces_[t]!==""&&(e+="/"+this.pieces_[t]);return e||"/"}}function C(){return new E("")}function v(n){return n.pieceNum_>=n.pieces_.length?null:n.pieces_[n.pieceNum_]}function fe(n){return n.pieces_.length-n.pieceNum_}function T(n){let e=n.pieceNum_;return e<n.pieces_.length&&e++,new E(n.pieces_,e)}function rr(n){return n.pieceNum_<n.pieces_.length?n.pieces_[n.pieces_.length-1]:null}function Vc(n){let e="";for(let t=n.pieceNum_;t<n.pieces_.length;t++)n.pieces_[t]!==""&&(e+="/"+encodeURIComponent(String(n.pieces_[t])));return e||"/"}function or(n,e=0){return n.pieces_.slice(n.pieceNum_+e)}function ar(n){if(n.pieceNum_>=n.pieces_.length)return null;const e=[];for(let t=n.pieceNum_;t<n.pieces_.length-1;t++)e.push(n.pieces_[t]);return new E(e,0)}function R(n,e){const t=[];for(let s=n.pieceNum_;s<n.pieces_.length;s++)t.push(n.pieces_[s]);if(e instanceof E)for(let s=e.pieceNum_;s<e.pieces_.length;s++)t.push(e.pieces_[s]);else{const s=e.split("/");for(let i=0;i<s.length;i++)s[i].length>0&&t.push(s[i])}return new E(t,0)}function I(n){return n.pieceNum_>=n.pieces_.length}function B(n,e){const t=v(n),s=v(e);if(t===null)return e;if(t===s)return B(T(n),T(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+n+")")}function Qn(n,e){if(fe(n)!==fe(e))return!1;for(let t=n.pieceNum_,s=e.pieceNum_;t<=n.pieces_.length;t++,s++)if(n.pieces_[t]!==e.pieces_[s])return!1;return!0}function Q(n,e){let t=n.pieceNum_,s=e.pieceNum_;if(fe(n)>fe(e))return!1;for(;t<n.pieces_.length;){if(n.pieces_[t]!==e.pieces_[s])return!1;++t,++s}return!0}class qc{constructor(e,t){this.errorPrefix_=t,this.parts_=or(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let s=0;s<this.parts_.length;s++)this.byteLength_+=Xt(this.parts_[s]);cr(this)}}function Gc(n,e){n.parts_.length>0&&(n.byteLength_+=1),n.parts_.push(e),n.byteLength_+=Xt(e),cr(n)}function jc(n){const e=n.parts_.pop();n.byteLength_-=Xt(e),n.parts_.length>0&&(n.byteLength_-=1)}function cr(n){if(n.byteLength_>Xs)throw new Error(n.errorPrefix_+"has a key path longer than "+Xs+" bytes ("+n.byteLength_+").");if(n.parts_.length>Ys)throw new Error(n.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+Ys+") or object contains a cycle "+_e(n))}function _e(n){return n.parts_.length===0?"":"in property '"+n.parts_.join(".")+"'"}/**
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
 */class Kn extends ir{constructor(){super(["visible"]);let e,t;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(t="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(t="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(t="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(t="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,t&&document.addEventListener(t,()=>{const s=!document[e];s!==this.visible_&&(this.visible_=s,this.trigger("visible",s))},!1)}static getInstance(){return new Kn}getInitialEvent(e){return m(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
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
 */const Ge=1e3,Qc=60*5*1e3,Js=30*1e3,Kc=1.3,Yc=3e4,Xc="server_kill",Zs=3;class te extends sr{constructor(e,t,s,i,r,o,a,c){if(super(),this.repoInfo_=e,this.applicationId_=t,this.onDataUpdate_=s,this.onConnectStatus_=i,this.onServerInfoUpdate_=r,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=c,this.id=te.nextPersistentConnectionId_++,this.log_=gt("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Ge,this.maxReconnectDelay_=Qc,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,c)throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Kn.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&At.getInstance().on("online",this.onOnline_,this)}sendRequest(e,t,s){const i=++this.requestNumber_,r={r:i,a:e,b:t};this.log_(A(r)),m(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(r),s&&(this.requestCBHash_[i]=s)}get(e){this.initConnection_();const t=new Yt,i={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const a=o.d;o.s==="ok"?t.resolve(a):t.reject(a)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const r=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(r),t.promise}listen(e,t,s,i){this.initConnection_();const r=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+r),this.listens.has(o)||this.listens.set(o,new Map),m(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),m(!this.listens.get(o).has(r),"listen() called twice for same path/queryId.");const a={onComplete:i,hashFn:t,query:e,tag:s};this.listens.get(o).set(r,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const t=this.outstandingGets_[e];this.sendRequest("g",t.request,s=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),t.onComplete&&t.onComplete(s)})}sendListen_(e){const t=e.query,s=t._path.toString(),i=t._queryIdentifier;this.log_("Listen on "+s+" for "+i);const r={p:s},o="q";e.tag&&(r.q=t._queryObject,r.t=e.tag),r.h=e.hashFn(),this.sendRequest(o,r,a=>{const c=a.d,l=a.s;te.warnOnListenWarnings_(c,t),(this.listens.get(s)&&this.listens.get(s).get(i))===e&&(this.log_("listen response",a),l!=="ok"&&this.removeListen_(s,i),e.onComplete&&e.onComplete(l,c))})}static warnOnListenWarnings_(e,t){if(e&&typeof e=="object"&&oe(e,"w")){const s=Re(e,"w");if(Array.isArray(s)&&~s.indexOf("no_index")){const i='".indexOn": "'+t._queryParams.getIndex().toString()+'"',r=t._path.toString();z(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${r} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||$o(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=Js)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,t=Bo(e)?"auth":"gauth",s={cred:e};this.authOverride_===null?s.noauth=!0:typeof this.authOverride_=="object"&&(s.authvar=this.authOverride_),this.sendRequest(t,s,i=>{const r=i.s,o=i.d||"error";this.authToken_===e&&(r==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(r,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const t=e.s,s=e.d||"error";t==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(t,s)})}unlisten(e,t){const s=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+s+" "+i),m(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(s,i)&&this.connected_&&this.sendUnlisten_(s,i,e._queryObject,t)}sendUnlisten_(e,t,s,i){this.log_("Unlisten on "+e+" for "+t);const r={p:e},o="n";i&&(r.q=s,r.t=i),this.sendRequest(o,r)}onDisconnectPut(e,t,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,t,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:t,onComplete:s})}onDisconnectMerge(e,t,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,t,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:t,onComplete:s})}onDisconnectCancel(e,t){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,t):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:t})}sendOnDisconnect_(e,t,s,i){const r={p:t,d:s};this.log_("onDisconnect "+e,r),this.sendRequest(e,r,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,t,s,i){this.putInternal("p",e,t,s,i)}merge(e,t,s,i){this.putInternal("m",e,t,s,i)}putInternal(e,t,s,i,r){this.initConnection_();const o={p:t,d:s};r!==void 0&&(o.h=r),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+t)}sendPut_(e){const t=this.outstandingPuts_[e].action,s=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(t,s,r=>{this.log_(t+" response",r),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(r.s,r.d)})}reportStats(e){if(this.connected_){const t={c:e};this.log_("reportStats",t),this.sendRequest("s",t,s=>{if(s.s!=="ok"){const r=s.d;this.log_("reportStats","Error sending stats: "+r)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+A(e));const t=e.r,s=this.requestCBHash_[t];s&&(delete this.requestCBHash_[t],s(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,t){this.log_("handleServerMessage",e,t),e==="d"?this.onDataUpdate_(t.p,t.d,!1,t.t):e==="m"?this.onDataUpdate_(t.p,t.d,!0,t.t):e==="c"?this.onListenRevoked_(t.p,t.q):e==="ac"?this.onAuthRevoked_(t.s,t.d):e==="apc"?this.onAppCheckRevoked_(t.s,t.d):e==="sd"?this.onSecurityDebugPacket_(t):xn("Unrecognized action received from server: "+A(e)+`
Are you using the latest client?`)}onReady_(e,t){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=t,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){m(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Ge,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=Ge,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>Yc&&(this.reconnectDelay_=Ge),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let t=Math.max(0,this.reconnectDelay_-e);t=Math.random()*t,this.log_("Trying to reconnect in "+t+"ms"),this.scheduleConnect_(t),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*Kc)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),t=this.onReady_.bind(this),s=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+te.nextConnectionId_++,r=this.lastSessionId;let o=!1,a=null;const c=function(){a?a.close():(o=!0,s())},l=function(u){m(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(u)};this.realtime_={close:c,sendRequest:l};const d=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[u,f]=await Promise.all([this.authTokenProvider_.getToken(d),this.appCheckTokenProvider_.getToken(d)]);o?F("getToken() completed but was canceled"):(F("getToken() completed. Creating connection."),this.authToken_=u&&u.accessToken,this.appCheckToken_=f&&f.token,a=new Uc(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,t,s,p=>{z(p+" ("+this.repoInfo_.toString()+")"),this.interrupt(Xc)},r))}catch(u){this.log_("Failed to get token: "+u),o||(this.repoInfo_.nodeAdmin&&z(u),c())}}}interrupt(e){F("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){F("Resuming connection for reason: "+e),delete this.interruptReasons_[e],Ds(this.interruptReasons_)&&(this.reconnectDelay_=Ge,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const t=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:t})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const t=this.outstandingPuts_[e];t&&"h"in t.request&&t.queued&&(t.onComplete&&t.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,t){let s;t?s=t.map(r=>Vn(r)).join("$"):s="default";const i=this.removeListen_(e,s);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,t){const s=new E(e).toString();let i;if(this.listens.has(s)){const r=this.listens.get(s);i=r.get(t),r.delete(t),r.size===0&&this.listens.delete(s)}else i=void 0;return i}onAuthRevoked_(e,t){F("Auth token revoked: "+e+"/"+t),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=Zs&&(this.reconnectDelay_=Js,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,t){F("App check token revoked: "+e+"/"+t),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=Zs&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const t of e.values())this.sendListen_(t);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let t="js";e["sdk."+t+"."+Oi.replace(/\./g,"-")]=1,Ti()?e["framework.cordova"]=1:Ao()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=At.getInstance().currentlyOnline();return Ds(this.interruptReasons_)&&e}}te.nextPersistentConnectionId_=0;te.nextConnectionId_=0;/**
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
 */class b{constructor(e,t){this.name=e,this.node=t}static Wrap(e,t){return new b(e,t)}}/**
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
 */class Jt{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,t){const s=new b(Pe,e),i=new b(Pe,t);return this.compare(s,i)!==0}minPost(){return b.MIN}}/**
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
 */let wt;class lr extends Jt{static get __EMPTY_NODE(){return wt}static set __EMPTY_NODE(e){wt=e}compare(e,t){return He(e.name,t.name)}isDefinedOn(e){throw Be("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,t){return!1}minPost(){return b.MIN}maxPost(){return new b(be,wt)}makePost(e,t){return m(typeof e=="string","KeyIndex indexValue must always be a string."),new b(e,wt)}toString(){return".key"}}const xe=new lr;/**
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
 */class Et{constructor(e,t,s,i,r=null){this.isReverse_=i,this.resultGenerator_=r,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=t?s(e.key,t):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),t;if(this.resultGenerator_?t=this.resultGenerator_(e.key,e.value):t={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return t}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class M{constructor(e,t,s,i,r){this.key=e,this.value=t,this.color=s??M.RED,this.left=i??W.EMPTY_NODE,this.right=r??W.EMPTY_NODE}copy(e,t,s,i,r){return new M(e??this.key,t??this.value,s??this.color,i??this.left,r??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,s){let i=this;const r=s(e,i.key);return r<0?i=i.copy(null,null,null,i.left.insert(e,t,s),null):r===0?i=i.copy(null,t,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,t,s)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return W.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,t){let s,i;if(s=this,t(e,s.key)<0)!s.left.isEmpty()&&!s.left.isRed_()&&!s.left.left.isRed_()&&(s=s.moveRedLeft_()),s=s.copy(null,null,null,s.left.remove(e,t),null);else{if(s.left.isRed_()&&(s=s.rotateRight_()),!s.right.isEmpty()&&!s.right.isRed_()&&!s.right.left.isRed_()&&(s=s.moveRedRight_()),t(e,s.key)===0){if(s.right.isEmpty())return W.EMPTY_NODE;i=s.right.min_(),s=s.copy(i.key,i.value,null,null,s.right.removeMin_())}s=s.copy(null,null,null,null,s.right.remove(e,t))}return s.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,M.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,M.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}M.RED=!0;M.BLACK=!1;class Jc{copy(e,t,s,i,r){return this}insert(e,t,s){return new M(e,t,null)}remove(e,t){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class W{constructor(e,t=W.EMPTY_NODE){this.comparator_=e,this.root_=t}insert(e,t){return new W(this.comparator_,this.root_.insert(e,t,this.comparator_).copy(null,null,M.BLACK,null,null))}remove(e){return new W(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,M.BLACK,null,null))}get(e){let t,s=this.root_;for(;!s.isEmpty();){if(t=this.comparator_(e,s.key),t===0)return s.value;t<0?s=s.left:t>0&&(s=s.right)}return null}getPredecessorKey(e){let t,s=this.root_,i=null;for(;!s.isEmpty();)if(t=this.comparator_(e,s.key),t===0){if(s.left.isEmpty())return i?i.key:null;for(s=s.left;!s.right.isEmpty();)s=s.right;return s.key}else t<0?s=s.left:t>0&&(i=s,s=s.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Et(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,t){return new Et(this.root_,e,this.comparator_,!1,t)}getReverseIteratorFrom(e,t){return new Et(this.root_,e,this.comparator_,!0,t)}getReverseIterator(e){return new Et(this.root_,null,this.comparator_,!0,e)}}W.EMPTY_NODE=new Jc;/**
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
 */function Zc(n,e){return He(n.name,e.name)}function Yn(n,e){return He(n,e)}/**
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
 */let Rn;function el(n){Rn=n}const ur=function(n){return typeof n=="number"?"number:"+Hi(n):"string:"+n},dr=function(n){if(n.isLeafNode()){const e=n.val();m(typeof e=="string"||typeof e=="number"||typeof e=="object"&&oe(e,".sv"),"Priority must be a string or number.")}else m(n===Rn||n.isEmpty(),"priority of unexpected type.");m(n===Rn||n.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
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
 */let ei;class P{constructor(e,t=P.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=t,this.lazyHash_=null,m(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),dr(this.priorityNode_)}static set __childrenNodeConstructor(e){ei=e}static get __childrenNodeConstructor(){return ei}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new P(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:P.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return I(e)?this:v(e)===".priority"?this.priorityNode_:P.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,t){return null}updateImmediateChild(e,t){return e===".priority"?this.updatePriority(t):t.isEmpty()&&e!==".priority"?this:P.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,t).updatePriority(this.priorityNode_)}updateChild(e,t){const s=v(e);return s===null?t:t.isEmpty()&&s!==".priority"?this:(m(s!==".priority"||fe(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(s,P.__childrenNodeConstructor.EMPTY_NODE.updateChild(T(e),t)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,t){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+ur(this.priorityNode_.val())+":");const t=typeof this.value_;e+=t+":",t==="number"?e+=Hi(this.value_):e+=this.value_,this.lazyHash_=Fi(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===P.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof P.__childrenNodeConstructor?-1:(m(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const t=typeof e.value_,s=typeof this.value_,i=P.VALUE_TYPE_ORDER.indexOf(t),r=P.VALUE_TYPE_ORDER.indexOf(s);return m(i>=0,"Unknown leaf type: "+t),m(r>=0,"Unknown leaf type: "+s),i===r?s==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:r-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const t=e;return this.value_===t.value_&&this.priorityNode_.equals(t.priorityNode_)}else return!1}}P.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
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
 */let hr,fr;function tl(n){hr=n}function nl(n){fr=n}class sl extends Jt{compare(e,t){const s=e.node.getPriority(),i=t.node.getPriority(),r=s.compareTo(i);return r===0?He(e.name,t.name):r}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,t){return!e.getPriority().equals(t.getPriority())}minPost(){return b.MIN}maxPost(){return new b(be,new P("[PRIORITY-POST]",fr))}makePost(e,t){const s=hr(e);return new b(t,new P("[PRIORITY-POST]",s))}toString(){return".priority"}}const k=new sl;/**
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
 */const il=Math.log(2);class rl{constructor(e){const t=r=>parseInt(Math.log(r)/il,10),s=r=>parseInt(Array(r+1).join("1"),2);this.count=t(e+1),this.current_=this.count-1;const i=s(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const Rt=function(n,e,t,s){n.sort(e);const i=function(c,l){const d=l-c;let u,f;if(d===0)return null;if(d===1)return u=n[c],f=t?t(u):u,new M(f,u.node,M.BLACK,null,null);{const p=parseInt(d/2,10)+c,g=i(c,p),y=i(p+1,l);return u=n[p],f=t?t(u):u,new M(f,u.node,M.BLACK,g,y)}},r=function(c){let l=null,d=null,u=n.length;const f=function(g,y){const x=u-g,ce=u;u-=g;const Ct=i(x+1,ce),dn=n[x],go=t?t(dn):dn;p(new M(go,dn.node,y,null,Ct))},p=function(g){l?(l.left=g,l=g):(d=g,l=g)};for(let g=0;g<c.count;++g){const y=c.nextBitIsOne(),x=Math.pow(2,c.count-(g+1));y?f(x,M.BLACK):(f(x,M.BLACK),f(x,M.RED))}return d},o=new rl(n.length),a=r(o);return new W(s||e,a)};/**
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
 */let vn;const Te={};class ee{constructor(e,t){this.indexes_=e,this.indexSet_=t}static get Default(){return m(Te&&k,"ChildrenNode.ts has not been loaded"),vn=vn||new ee({".priority":Te},{".priority":k}),vn}get(e){const t=Re(this.indexes_,e);if(!t)throw new Error("No index defined for "+e);return t instanceof W?t:null}hasIndex(e){return oe(this.indexSet_,e.toString())}addIndex(e,t){m(e!==xe,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const s=[];let i=!1;const r=t.getIterator(b.Wrap);let o=r.getNext();for(;o;)i=i||e.isDefinedOn(o.node),s.push(o),o=r.getNext();let a;i?a=Rt(s,e.getCompare()):a=Te;const c=e.toString(),l=Object.assign({},this.indexSet_);l[c]=e;const d=Object.assign({},this.indexes_);return d[c]=a,new ee(d,l)}addToIndexes(e,t){const s=Nt(this.indexes_,(i,r)=>{const o=Re(this.indexSet_,r);if(m(o,"Missing index implementation for "+r),i===Te)if(o.isDefinedOn(e.node)){const a=[],c=t.getIterator(b.Wrap);let l=c.getNext();for(;l;)l.name!==e.name&&a.push(l),l=c.getNext();return a.push(e),Rt(a,o.getCompare())}else return Te;else{const a=t.get(e.name);let c=i;return a&&(c=c.remove(new b(e.name,a))),c.insert(e,e.node)}});return new ee(s,this.indexSet_)}removeFromIndexes(e,t){const s=Nt(this.indexes_,i=>{if(i===Te)return i;{const r=t.get(e.name);return r?i.remove(new b(e.name,r)):i}});return new ee(s,this.indexSet_)}}/**
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
 */let je;class _{constructor(e,t,s){this.children_=e,this.priorityNode_=t,this.indexMap_=s,this.lazyHash_=null,this.priorityNode_&&dr(this.priorityNode_),this.children_.isEmpty()&&m(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return je||(je=new _(new W(Yn),null,ee.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||je}updatePriority(e){return this.children_.isEmpty()?this:new _(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const t=this.children_.get(e);return t===null?je:t}}getChild(e){const t=v(e);return t===null?this:this.getImmediateChild(t).getChild(T(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,t){if(m(t,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(t);{const s=new b(e,t);let i,r;t.isEmpty()?(i=this.children_.remove(e),r=this.indexMap_.removeFromIndexes(s,this.children_)):(i=this.children_.insert(e,t),r=this.indexMap_.addToIndexes(s,this.children_));const o=i.isEmpty()?je:this.priorityNode_;return new _(i,o,r)}}updateChild(e,t){const s=v(e);if(s===null)return t;{m(v(e)!==".priority"||fe(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(s).updateChild(T(e),t);return this.updateImmediateChild(s,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const t={};let s=0,i=0,r=!0;if(this.forEachChild(k,(o,a)=>{t[o]=a.val(e),s++,r&&_.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):r=!1}),!e&&r&&i<2*s){const o=[];for(const a in t)o[a]=t[a];return o}else return e&&!this.getPriority().isEmpty()&&(t[".priority"]=this.getPriority().val()),t}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+ur(this.getPriority().val())+":"),this.forEachChild(k,(t,s)=>{const i=s.hash();i!==""&&(e+=":"+t+":"+i)}),this.lazyHash_=e===""?"":Fi(e)}return this.lazyHash_}getPredecessorChildName(e,t,s){const i=this.resolveIndex_(s);if(i){const r=i.getPredecessorKey(new b(e,t));return r?r.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const t=this.resolveIndex_(e);if(t){const s=t.minKey();return s&&s.name}else return this.children_.minKey()}getFirstChild(e){const t=this.getFirstChildName(e);return t?new b(t,this.children_.get(t)):null}getLastChildName(e){const t=this.resolveIndex_(e);if(t){const s=t.maxKey();return s&&s.name}else return this.children_.maxKey()}getLastChild(e){const t=this.getLastChildName(e);return t?new b(t,this.children_.get(t)):null}forEachChild(e,t){const s=this.resolveIndex_(e);return s?s.inorderTraversal(i=>t(i.name,i.node)):this.children_.inorderTraversal(t)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,t){const s=this.resolveIndex_(t);if(s)return s.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,b.Wrap);let r=i.peek();for(;r!=null&&t.compare(r,e)<0;)i.getNext(),r=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,t){const s=this.resolveIndex_(t);if(s)return s.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,b.Wrap);let r=i.peek();for(;r!=null&&t.compare(r,e)>0;)i.getNext(),r=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===mt?-1:0}withIndex(e){if(e===xe||this.indexMap_.hasIndex(e))return this;{const t=this.indexMap_.addIndex(e,this.children_);return new _(this.children_,this.priorityNode_,t)}}isIndexed(e){return e===xe||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const t=e;if(this.getPriority().equals(t.getPriority()))if(this.children_.count()===t.children_.count()){const s=this.getIterator(k),i=t.getIterator(k);let r=s.getNext(),o=i.getNext();for(;r&&o;){if(r.name!==o.name||!r.node.equals(o.node))return!1;r=s.getNext(),o=i.getNext()}return r===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===xe?null:this.indexMap_.get(e.toString())}}_.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class ol extends _{constructor(){super(new W(Yn),_.EMPTY_NODE,ee.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return _.EMPTY_NODE}isEmpty(){return!1}}const mt=new ol;Object.defineProperties(b,{MIN:{value:new b(Pe,_.EMPTY_NODE)},MAX:{value:new b(be,mt)}});lr.__EMPTY_NODE=_.EMPTY_NODE;P.__childrenNodeConstructor=_;el(mt);nl(mt);/**
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
 */const al=!0;function O(n,e=null){if(n===null)return _.EMPTY_NODE;if(typeof n=="object"&&".priority"in n&&(e=n[".priority"]),m(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof n=="object"&&".value"in n&&n[".value"]!==null&&(n=n[".value"]),typeof n!="object"||".sv"in n){const t=n;return new P(t,O(e))}if(!(n instanceof Array)&&al){const t=[];let s=!1;if(U(n,(o,a)=>{if(o.substring(0,1)!=="."){const c=O(a);c.isEmpty()||(s=s||!c.getPriority().isEmpty(),t.push(new b(o,c)))}}),t.length===0)return _.EMPTY_NODE;const r=Rt(t,Zc,o=>o.name,Yn);if(s){const o=Rt(t,k.getCompare());return new _(r,O(e),new ee({".priority":o},{".priority":k}))}else return new _(r,O(e),ee.Default)}else{let t=_.EMPTY_NODE;return U(n,(s,i)=>{if(oe(n,s)&&s.substring(0,1)!=="."){const r=O(i);(r.isLeafNode()||!r.isEmpty())&&(t=t.updateImmediateChild(s,r))}}),t.updatePriority(O(e))}}tl(O);/**
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
 */class cl extends Jt{constructor(e){super(),this.indexPath_=e,m(!I(e)&&v(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,t){const s=this.extractChild(e.node),i=this.extractChild(t.node),r=s.compareTo(i);return r===0?He(e.name,t.name):r}makePost(e,t){const s=O(e),i=_.EMPTY_NODE.updateChild(this.indexPath_,s);return new b(t,i)}maxPost(){const e=_.EMPTY_NODE.updateChild(this.indexPath_,mt);return new b(be,e)}toString(){return or(this.indexPath_,0).join("/")}}/**
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
 */class ll extends Jt{compare(e,t){const s=e.node.compareTo(t.node);return s===0?He(e.name,t.name):s}isDefinedOn(e){return!0}indexedValueChanged(e,t){return!e.equals(t)}minPost(){return b.MIN}maxPost(){return b.MAX}makePost(e,t){const s=O(e);return new b(t,s)}toString(){return".value"}}const ul=new ll;/**
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
 */function pr(n){return{type:"value",snapshotNode:n}}function Me(n,e){return{type:"child_added",snapshotNode:e,childName:n}}function rt(n,e){return{type:"child_removed",snapshotNode:e,childName:n}}function ot(n,e,t){return{type:"child_changed",snapshotNode:e,childName:n,oldSnap:t}}function dl(n,e){return{type:"child_moved",snapshotNode:e,childName:n}}/**
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
 */class Xn{constructor(e){this.index_=e}updateChild(e,t,s,i,r,o){m(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const a=e.getImmediateChild(t);return a.getChild(i).equals(s.getChild(i))&&a.isEmpty()===s.isEmpty()||(o!=null&&(s.isEmpty()?e.hasChild(t)?o.trackChildChange(rt(t,a)):m(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):a.isEmpty()?o.trackChildChange(Me(t,s)):o.trackChildChange(ot(t,s,a))),e.isLeafNode()&&s.isEmpty())?e:e.updateImmediateChild(t,s).withIndex(this.index_)}updateFullNode(e,t,s){return s!=null&&(e.isLeafNode()||e.forEachChild(k,(i,r)=>{t.hasChild(i)||s.trackChildChange(rt(i,r))}),t.isLeafNode()||t.forEachChild(k,(i,r)=>{if(e.hasChild(i)){const o=e.getImmediateChild(i);o.equals(r)||s.trackChildChange(ot(i,r,o))}else s.trackChildChange(Me(i,r))})),t.withIndex(this.index_)}updatePriority(e,t){return e.isEmpty()?_.EMPTY_NODE:e.updatePriority(t)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
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
 */class at{constructor(e){this.indexedFilter_=new Xn(e.getIndex()),this.index_=e.getIndex(),this.startPost_=at.getStartPost_(e),this.endPost_=at.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const t=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,s=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return t&&s}updateChild(e,t,s,i,r,o){return this.matches(new b(t,s))||(s=_.EMPTY_NODE),this.indexedFilter_.updateChild(e,t,s,i,r,o)}updateFullNode(e,t,s){t.isLeafNode()&&(t=_.EMPTY_NODE);let i=t.withIndex(this.index_);i=i.updatePriority(_.EMPTY_NODE);const r=this;return t.forEachChild(k,(o,a)=>{r.matches(new b(o,a))||(i=i.updateImmediateChild(o,_.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,i,s)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const t=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),t)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const t=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),t)}else return e.getIndex().maxPost()}}/**
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
 */class hl{constructor(e){this.withinDirectionalStart=t=>this.reverse_?this.withinEndPost(t):this.withinStartPost(t),this.withinDirectionalEnd=t=>this.reverse_?this.withinStartPost(t):this.withinEndPost(t),this.withinStartPost=t=>{const s=this.index_.compare(this.rangedFilter_.getStartPost(),t);return this.startIsInclusive_?s<=0:s<0},this.withinEndPost=t=>{const s=this.index_.compare(t,this.rangedFilter_.getEndPost());return this.endIsInclusive_?s<=0:s<0},this.rangedFilter_=new at(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,t,s,i,r,o){return this.rangedFilter_.matches(new b(t,s))||(s=_.EMPTY_NODE),e.getImmediateChild(t).equals(s)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,t,s,i,r,o):this.fullLimitUpdateChild_(e,t,s,r,o)}updateFullNode(e,t,s){let i;if(t.isLeafNode()||t.isEmpty())i=_.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<t.numChildren()&&t.isIndexed(this.index_)){i=_.EMPTY_NODE.withIndex(this.index_);let r;this.reverse_?r=t.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):r=t.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;r.hasNext()&&o<this.limit_;){const a=r.getNext();if(this.withinDirectionalStart(a))if(this.withinDirectionalEnd(a))i=i.updateImmediateChild(a.name,a.node),o++;else break;else continue}}else{i=t.withIndex(this.index_),i=i.updatePriority(_.EMPTY_NODE);let r;this.reverse_?r=i.getReverseIterator(this.index_):r=i.getIterator(this.index_);let o=0;for(;r.hasNext();){const a=r.getNext();o<this.limit_&&this.withinDirectionalStart(a)&&this.withinDirectionalEnd(a)?o++:i=i.updateImmediateChild(a.name,_.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,s)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,t,s,i,r){let o;if(this.reverse_){const u=this.index_.getCompare();o=(f,p)=>u(p,f)}else o=this.index_.getCompare();const a=e;m(a.numChildren()===this.limit_,"");const c=new b(t,s),l=this.reverse_?a.getFirstChild(this.index_):a.getLastChild(this.index_),d=this.rangedFilter_.matches(c);if(a.hasChild(t)){const u=a.getImmediateChild(t);let f=i.getChildAfterChild(this.index_,l,this.reverse_);for(;f!=null&&(f.name===t||a.hasChild(f.name));)f=i.getChildAfterChild(this.index_,f,this.reverse_);const p=f==null?1:o(f,c);if(d&&!s.isEmpty()&&p>=0)return r!=null&&r.trackChildChange(ot(t,s,u)),a.updateImmediateChild(t,s);{r!=null&&r.trackChildChange(rt(t,u));const y=a.updateImmediateChild(t,_.EMPTY_NODE);return f!=null&&this.rangedFilter_.matches(f)?(r!=null&&r.trackChildChange(Me(f.name,f.node)),y.updateImmediateChild(f.name,f.node)):y}}else return s.isEmpty()?e:d&&o(l,c)>=0?(r!=null&&(r.trackChildChange(rt(l.name,l.node)),r.trackChildChange(Me(t,s))),a.updateImmediateChild(t,s).updateImmediateChild(l.name,_.EMPTY_NODE)):e}}/**
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
 */class Jn{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=k}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return m(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return m(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:Pe}hasEnd(){return this.endSet_}getIndexEndValue(){return m(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return m(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:be}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return m(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===k}copy(){const e=new Jn;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function fl(n){return n.loadsAllData()?new Xn(n.getIndex()):n.hasLimit()?new hl(n):new at(n)}function ti(n){const e={};if(n.isDefault())return e;let t;if(n.index_===k?t="$priority":n.index_===ul?t="$value":n.index_===xe?t="$key":(m(n.index_ instanceof cl,"Unrecognized index type!"),t=n.index_.toString()),e.orderBy=A(t),n.startSet_){const s=n.startAfterSet_?"startAfter":"startAt";e[s]=A(n.indexStartValue_),n.startNameSet_&&(e[s]+=","+A(n.indexStartName_))}if(n.endSet_){const s=n.endBeforeSet_?"endBefore":"endAt";e[s]=A(n.indexEndValue_),n.endNameSet_&&(e[s]+=","+A(n.indexEndName_))}return n.limitSet_&&(n.isViewFromLeft()?e.limitToFirst=n.limit_:e.limitToLast=n.limit_),e}function ni(n){const e={};if(n.startSet_&&(e.sp=n.indexStartValue_,n.startNameSet_&&(e.sn=n.indexStartName_),e.sin=!n.startAfterSet_),n.endSet_&&(e.ep=n.indexEndValue_,n.endNameSet_&&(e.en=n.indexEndName_),e.ein=!n.endBeforeSet_),n.limitSet_){e.l=n.limit_;let t=n.viewFrom_;t===""&&(n.isViewFromLeft()?t="l":t="r"),e.vf=t}return n.index_!==k&&(e.i=n.index_.toString()),e}/**
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
 */class Pt extends sr{constructor(e,t,s,i){super(),this.repoInfo_=e,this.onDataUpdate_=t,this.authTokenProvider_=s,this.appCheckTokenProvider_=i,this.log_=gt("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,t){return t!==void 0?"tag$"+t:(m(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,t,s,i){const r=e._path.toString();this.log_("Listen called for "+r+" "+e._queryIdentifier);const o=Pt.getListenId_(e,s),a={};this.listens_[o]=a;const c=ti(e._queryParams);this.restRequest_(r+".json",c,(l,d)=>{let u=d;if(l===404&&(u=null,l=null),l===null&&this.onDataUpdate_(r,u,!1,s),Re(this.listens_,o)===a){let f;l?l===401?f="permission_denied":f="rest_error:"+l:f="ok",i(f,null)}})}unlisten(e,t){const s=Pt.getListenId_(e,t);delete this.listens_[s]}get(e){const t=ti(e._queryParams),s=e._path.toString(),i=new Yt;return this.restRequest_(s+".json",t,(r,o)=>{let a=o;r===404&&(a=null,r=null),r===null?(this.onDataUpdate_(s,a,!1,null),i.resolve(a)):i.reject(new Error(a))}),i.promise}refreshAuthToken(e){}restRequest_(e,t={},s){return t.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,r])=>{i&&i.accessToken&&(t.auth=i.accessToken),r&&r.token&&(t.ac=r.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+Ho(t);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(s&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let c=null;if(a.status>=200&&a.status<300){try{c=tt(a.responseText)}catch{z("Failed to parse JSON response for "+o+": "+a.responseText)}s(null,c)}else a.status!==401&&a.status!==404&&z("Got unsuccessful REST response for "+o+" Status: "+a.status),s(a.status);s=null}},a.open("GET",o,!0),a.send()})}}/**
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
 */class pl{constructor(){this.rootNode_=_.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,t){this.rootNode_=this.rootNode_.updateChild(e,t)}}/**
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
 */function Mt(){return{value:null,children:new Map}}function gr(n,e,t){if(I(e))n.value=t,n.children.clear();else if(n.value!==null)n.value=n.value.updateChild(e,t);else{const s=v(e);n.children.has(s)||n.children.set(s,Mt());const i=n.children.get(s);e=T(e),gr(i,e,t)}}function Pn(n,e,t){n.value!==null?t(e,n.value):gl(n,(s,i)=>{const r=new E(e.toString()+"/"+s);Pn(i,r,t)})}function gl(n,e){n.children.forEach((t,s)=>{e(s,t)})}/**
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
 */class ml{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),t=Object.assign({},e);return this.last_&&U(this.last_,(s,i)=>{t[s]=t[s]-i}),this.last_=e,t}}/**
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
 */const si=10*1e3,_l=30*1e3,yl=5*60*1e3;class vl{constructor(e,t){this.server_=t,this.statsToReport_={},this.statsListener_=new ml(e);const s=si+(_l-si)*Math.random();Ye(this.reportStats_.bind(this),Math.floor(s))}reportStats_(){const e=this.statsListener_.get(),t={};let s=!1;U(e,(i,r)=>{r>0&&oe(this.statsToReport_,i)&&(t[i]=r,s=!0)}),s&&this.server_.reportStats(t),Ye(this.reportStats_.bind(this),Math.floor(Math.random()*2*yl))}}/**
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
 */var K;(function(n){n[n.OVERWRITE=0]="OVERWRITE",n[n.MERGE=1]="MERGE",n[n.ACK_USER_WRITE=2]="ACK_USER_WRITE",n[n.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(K||(K={}));function mr(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function Zn(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function es(n){return{fromUser:!1,fromServer:!0,queryId:n,tagged:!0}}/**
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
 */class Ot{constructor(e,t,s){this.path=e,this.affectedTree=t,this.revert=s,this.type=K.ACK_USER_WRITE,this.source=mr()}operationForChild(e){if(I(this.path)){if(this.affectedTree.value!=null)return m(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const t=this.affectedTree.subtree(new E(e));return new Ot(C(),t,this.revert)}}else return m(v(this.path)===e,"operationForChild called for unrelated child."),new Ot(T(this.path),this.affectedTree,this.revert)}}/**
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
 */class ct{constructor(e,t){this.source=e,this.path=t,this.type=K.LISTEN_COMPLETE}operationForChild(e){return I(this.path)?new ct(this.source,C()):new ct(this.source,T(this.path))}}/**
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
 */class Ie{constructor(e,t,s){this.source=e,this.path=t,this.snap=s,this.type=K.OVERWRITE}operationForChild(e){return I(this.path)?new Ie(this.source,C(),this.snap.getImmediateChild(e)):new Ie(this.source,T(this.path),this.snap)}}/**
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
 */class lt{constructor(e,t,s){this.source=e,this.path=t,this.children=s,this.type=K.MERGE}operationForChild(e){if(I(this.path)){const t=this.children.subtree(new E(e));return t.isEmpty()?null:t.value?new Ie(this.source,C(),t.value):new lt(this.source,C(),t)}else return m(v(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new lt(this.source,T(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
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
 */class pe{constructor(e,t,s){this.node_=e,this.fullyInitialized_=t,this.filtered_=s}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(I(e))return this.isFullyInitialized()&&!this.filtered_;const t=v(e);return this.isCompleteForChild(t)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
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
 */class bl{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function Il(n,e,t,s){const i=[],r=[];return e.forEach(o=>{o.type==="child_changed"&&n.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&r.push(dl(o.childName,o.snapshotNode))}),Qe(n,i,"child_removed",e,s,t),Qe(n,i,"child_added",e,s,t),Qe(n,i,"child_moved",r,s,t),Qe(n,i,"child_changed",e,s,t),Qe(n,i,"value",e,s,t),i}function Qe(n,e,t,s,i,r){const o=s.filter(a=>a.type===t);o.sort((a,c)=>wl(n,a,c)),o.forEach(a=>{const c=Cl(n,a,r);i.forEach(l=>{l.respondsTo(a.type)&&e.push(l.createEvent(c,n.query_))})})}function Cl(n,e,t){return e.type==="value"||e.type==="child_removed"||(e.prevName=t.getPredecessorChildName(e.childName,e.snapshotNode,n.index_)),e}function wl(n,e,t){if(e.childName==null||t.childName==null)throw Be("Should only compare child_ events.");const s=new b(e.childName,e.snapshotNode),i=new b(t.childName,t.snapshotNode);return n.index_.compare(s,i)}/**
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
 */function Zt(n,e){return{eventCache:n,serverCache:e}}function Xe(n,e,t,s){return Zt(new pe(e,t,s),n.serverCache)}function _r(n,e,t,s){return Zt(n.eventCache,new pe(e,t,s))}function Lt(n){return n.eventCache.isFullyInitialized()?n.eventCache.getNode():null}function Ce(n){return n.serverCache.isFullyInitialized()?n.serverCache.getNode():null}/**
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
 */let bn;const El=()=>(bn||(bn=new W(lc)),bn);class N{constructor(e,t=El()){this.value=e,this.children=t}static fromObject(e){let t=new N(null);return U(e,(s,i)=>{t=t.set(new E(s),i)}),t}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,t){if(this.value!=null&&t(this.value))return{path:C(),value:this.value};if(I(e))return null;{const s=v(e),i=this.children.get(s);if(i!==null){const r=i.findRootMostMatchingPathAndValue(T(e),t);return r!=null?{path:R(new E(s),r.path),value:r.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(I(e))return this;{const t=v(e),s=this.children.get(t);return s!==null?s.subtree(T(e)):new N(null)}}set(e,t){if(I(e))return new N(t,this.children);{const s=v(e),r=(this.children.get(s)||new N(null)).set(T(e),t),o=this.children.insert(s,r);return new N(this.value,o)}}remove(e){if(I(e))return this.children.isEmpty()?new N(null):new N(null,this.children);{const t=v(e),s=this.children.get(t);if(s){const i=s.remove(T(e));let r;return i.isEmpty()?r=this.children.remove(t):r=this.children.insert(t,i),this.value===null&&r.isEmpty()?new N(null):new N(this.value,r)}else return this}}get(e){if(I(e))return this.value;{const t=v(e),s=this.children.get(t);return s?s.get(T(e)):null}}setTree(e,t){if(I(e))return t;{const s=v(e),r=(this.children.get(s)||new N(null)).setTree(T(e),t);let o;return r.isEmpty()?o=this.children.remove(s):o=this.children.insert(s,r),new N(this.value,o)}}fold(e){return this.fold_(C(),e)}fold_(e,t){const s={};return this.children.inorderTraversal((i,r)=>{s[i]=r.fold_(R(e,i),t)}),t(e,this.value,s)}findOnPath(e,t){return this.findOnPath_(e,C(),t)}findOnPath_(e,t,s){const i=this.value?s(t,this.value):!1;if(i)return i;if(I(e))return null;{const r=v(e),o=this.children.get(r);return o?o.findOnPath_(T(e),R(t,r),s):null}}foreachOnPath(e,t){return this.foreachOnPath_(e,C(),t)}foreachOnPath_(e,t,s){if(I(e))return this;{this.value&&s(t,this.value);const i=v(e),r=this.children.get(i);return r?r.foreachOnPath_(T(e),R(t,i),s):new N(null)}}foreach(e){this.foreach_(C(),e)}foreach_(e,t){this.children.inorderTraversal((s,i)=>{i.foreach_(R(e,s),t)}),this.value&&t(e,this.value)}foreachChild(e){this.children.inorderTraversal((t,s)=>{s.value&&e(t,s.value)})}}/**
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
 */class Y{constructor(e){this.writeTree_=e}static empty(){return new Y(new N(null))}}function Je(n,e,t){if(I(e))return new Y(new N(t));{const s=n.writeTree_.findRootMostValueAndPath(e);if(s!=null){const i=s.path;let r=s.value;const o=B(i,e);return r=r.updateChild(o,t),new Y(n.writeTree_.set(i,r))}else{const i=new N(t),r=n.writeTree_.setTree(e,i);return new Y(r)}}}function ii(n,e,t){let s=n;return U(t,(i,r)=>{s=Je(s,R(e,i),r)}),s}function ri(n,e){if(I(e))return Y.empty();{const t=n.writeTree_.setTree(e,new N(null));return new Y(t)}}function Mn(n,e){return Ee(n,e)!=null}function Ee(n,e){const t=n.writeTree_.findRootMostValueAndPath(e);return t!=null?n.writeTree_.get(t.path).getChild(B(t.path,e)):null}function oi(n){const e=[],t=n.writeTree_.value;return t!=null?t.isLeafNode()||t.forEachChild(k,(s,i)=>{e.push(new b(s,i))}):n.writeTree_.children.inorderTraversal((s,i)=>{i.value!=null&&e.push(new b(s,i.value))}),e}function de(n,e){if(I(e))return n;{const t=Ee(n,e);return t!=null?new Y(new N(t)):new Y(n.writeTree_.subtree(e))}}function On(n){return n.writeTree_.isEmpty()}function Oe(n,e){return yr(C(),n.writeTree_,e)}function yr(n,e,t){if(e.value!=null)return t.updateChild(n,e.value);{let s=null;return e.children.inorderTraversal((i,r)=>{i===".priority"?(m(r.value!==null,"Priority writes must always be leaf nodes"),s=r.value):t=yr(R(n,i),r,t)}),!t.getChild(n).isEmpty()&&s!==null&&(t=t.updateChild(R(n,".priority"),s)),t}}/**
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
 */function en(n,e){return Cr(e,n)}function Sl(n,e,t,s,i){m(s>n.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),n.allWrites.push({path:e,snap:t,writeId:s,visible:i}),i&&(n.visibleWrites=Je(n.visibleWrites,e,t)),n.lastWriteId=s}function Tl(n,e){for(let t=0;t<n.allWrites.length;t++){const s=n.allWrites[t];if(s.writeId===e)return s}return null}function Nl(n,e){const t=n.allWrites.findIndex(a=>a.writeId===e);m(t>=0,"removeWrite called with nonexistent writeId.");const s=n.allWrites[t];n.allWrites.splice(t,1);let i=s.visible,r=!1,o=n.allWrites.length-1;for(;i&&o>=0;){const a=n.allWrites[o];a.visible&&(o>=t&&Dl(a,s.path)?i=!1:Q(s.path,a.path)&&(r=!0)),o--}if(i){if(r)return kl(n),!0;if(s.snap)n.visibleWrites=ri(n.visibleWrites,s.path);else{const a=s.children;U(a,c=>{n.visibleWrites=ri(n.visibleWrites,R(s.path,c))})}return!0}else return!1}function Dl(n,e){if(n.snap)return Q(n.path,e);for(const t in n.children)if(n.children.hasOwnProperty(t)&&Q(R(n.path,t),e))return!0;return!1}function kl(n){n.visibleWrites=vr(n.allWrites,xl,C()),n.allWrites.length>0?n.lastWriteId=n.allWrites[n.allWrites.length-1].writeId:n.lastWriteId=-1}function xl(n){return n.visible}function vr(n,e,t){let s=Y.empty();for(let i=0;i<n.length;++i){const r=n[i];if(e(r)){const o=r.path;let a;if(r.snap)Q(t,o)?(a=B(t,o),s=Je(s,a,r.snap)):Q(o,t)&&(a=B(o,t),s=Je(s,C(),r.snap.getChild(a)));else if(r.children){if(Q(t,o))a=B(t,o),s=ii(s,a,r.children);else if(Q(o,t))if(a=B(o,t),I(a))s=ii(s,C(),r.children);else{const c=Re(r.children,v(a));if(c){const l=c.getChild(T(a));s=Je(s,C(),l)}}}else throw Be("WriteRecord should have .snap or .children")}}return s}function br(n,e,t,s,i){if(!s&&!i){const r=Ee(n.visibleWrites,e);if(r!=null)return r;{const o=de(n.visibleWrites,e);if(On(o))return t;if(t==null&&!Mn(o,C()))return null;{const a=t||_.EMPTY_NODE;return Oe(o,a)}}}else{const r=de(n.visibleWrites,e);if(!i&&On(r))return t;if(!i&&t==null&&!Mn(r,C()))return null;{const o=function(l){return(l.visible||i)&&(!s||!~s.indexOf(l.writeId))&&(Q(l.path,e)||Q(e,l.path))},a=vr(n.allWrites,o,e),c=t||_.EMPTY_NODE;return Oe(a,c)}}}function Al(n,e,t){let s=_.EMPTY_NODE;const i=Ee(n.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(k,(r,o)=>{s=s.updateImmediateChild(r,o)}),s;if(t){const r=de(n.visibleWrites,e);return t.forEachChild(k,(o,a)=>{const c=Oe(de(r,new E(o)),a);s=s.updateImmediateChild(o,c)}),oi(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}else{const r=de(n.visibleWrites,e);return oi(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}}function Rl(n,e,t,s,i){m(s||i,"Either existingEventSnap or existingServerSnap must exist");const r=R(e,t);if(Mn(n.visibleWrites,r))return null;{const o=de(n.visibleWrites,r);return On(o)?i.getChild(t):Oe(o,i.getChild(t))}}function Pl(n,e,t,s){const i=R(e,t),r=Ee(n.visibleWrites,i);if(r!=null)return r;if(s.isCompleteForChild(t)){const o=de(n.visibleWrites,i);return Oe(o,s.getNode().getImmediateChild(t))}else return null}function Ml(n,e){return Ee(n.visibleWrites,e)}function Ol(n,e,t,s,i,r,o){let a;const c=de(n.visibleWrites,e),l=Ee(c,C());if(l!=null)a=l;else if(t!=null)a=Oe(c,t);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const d=[],u=o.getCompare(),f=r?a.getReverseIteratorFrom(s,o):a.getIteratorFrom(s,o);let p=f.getNext();for(;p&&d.length<i;)u(p,s)!==0&&d.push(p),p=f.getNext();return d}else return[]}function Ll(){return{visibleWrites:Y.empty(),allWrites:[],lastWriteId:-1}}function Ft(n,e,t,s){return br(n.writeTree,n.treePath,e,t,s)}function ts(n,e){return Al(n.writeTree,n.treePath,e)}function ai(n,e,t,s){return Rl(n.writeTree,n.treePath,e,t,s)}function Bt(n,e){return Ml(n.writeTree,R(n.treePath,e))}function Fl(n,e,t,s,i,r){return Ol(n.writeTree,n.treePath,e,t,s,i,r)}function ns(n,e,t){return Pl(n.writeTree,n.treePath,e,t)}function Ir(n,e){return Cr(R(n.treePath,e),n.writeTree)}function Cr(n,e){return{treePath:n,writeTree:e}}/**
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
 */class Bl{constructor(){this.changeMap=new Map}trackChildChange(e){const t=e.type,s=e.childName;m(t==="child_added"||t==="child_changed"||t==="child_removed","Only child changes supported for tracking"),m(s!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(s);if(i){const r=i.type;if(t==="child_added"&&r==="child_removed")this.changeMap.set(s,ot(s,e.snapshotNode,i.snapshotNode));else if(t==="child_removed"&&r==="child_added")this.changeMap.delete(s);else if(t==="child_removed"&&r==="child_changed")this.changeMap.set(s,rt(s,i.oldSnap));else if(t==="child_changed"&&r==="child_added")this.changeMap.set(s,Me(s,e.snapshotNode));else if(t==="child_changed"&&r==="child_changed")this.changeMap.set(s,ot(s,e.snapshotNode,i.oldSnap));else throw Be("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(s,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
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
 */class $l{getCompleteChild(e){return null}getChildAfterChild(e,t,s){return null}}const wr=new $l;class ss{constructor(e,t,s=null){this.writes_=e,this.viewCache_=t,this.optCompleteServerCache_=s}getCompleteChild(e){const t=this.viewCache_.eventCache;if(t.isCompleteForChild(e))return t.getNode().getImmediateChild(e);{const s=this.optCompleteServerCache_!=null?new pe(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return ns(this.writes_,e,s)}}getChildAfterChild(e,t,s){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:Ce(this.viewCache_),r=Fl(this.writes_,i,t,1,s,e);return r.length===0?null:r[0]}}/**
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
 */function Hl(n){return{filter:n}}function Wl(n,e){m(e.eventCache.getNode().isIndexed(n.filter.getIndex()),"Event snap not indexed"),m(e.serverCache.getNode().isIndexed(n.filter.getIndex()),"Server snap not indexed")}function zl(n,e,t,s,i){const r=new Bl;let o,a;if(t.type===K.OVERWRITE){const l=t;l.source.fromUser?o=Ln(n,e,l.path,l.snap,s,i,r):(m(l.source.fromServer,"Unknown source."),a=l.source.tagged||e.serverCache.isFiltered()&&!I(l.path),o=$t(n,e,l.path,l.snap,s,i,a,r))}else if(t.type===K.MERGE){const l=t;l.source.fromUser?o=Vl(n,e,l.path,l.children,s,i,r):(m(l.source.fromServer,"Unknown source."),a=l.source.tagged||e.serverCache.isFiltered(),o=Fn(n,e,l.path,l.children,s,i,a,r))}else if(t.type===K.ACK_USER_WRITE){const l=t;l.revert?o=jl(n,e,l.path,s,i,r):o=ql(n,e,l.path,l.affectedTree,s,i,r)}else if(t.type===K.LISTEN_COMPLETE)o=Gl(n,e,t.path,s,r);else throw Be("Unknown operation type: "+t.type);const c=r.getChanges();return Ul(e,o,c),{viewCache:o,changes:c}}function Ul(n,e,t){const s=e.eventCache;if(s.isFullyInitialized()){const i=s.getNode().isLeafNode()||s.getNode().isEmpty(),r=Lt(n);(t.length>0||!n.eventCache.isFullyInitialized()||i&&!s.getNode().equals(r)||!s.getNode().getPriority().equals(r.getPriority()))&&t.push(pr(Lt(e)))}}function Er(n,e,t,s,i,r){const o=e.eventCache;if(Bt(s,t)!=null)return e;{let a,c;if(I(t))if(m(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const l=Ce(e),d=l instanceof _?l:_.EMPTY_NODE,u=ts(s,d);a=n.filter.updateFullNode(e.eventCache.getNode(),u,r)}else{const l=Ft(s,Ce(e));a=n.filter.updateFullNode(e.eventCache.getNode(),l,r)}else{const l=v(t);if(l===".priority"){m(fe(t)===1,"Can't have a priority with additional path components");const d=o.getNode();c=e.serverCache.getNode();const u=ai(s,t,d,c);u!=null?a=n.filter.updatePriority(d,u):a=o.getNode()}else{const d=T(t);let u;if(o.isCompleteForChild(l)){c=e.serverCache.getNode();const f=ai(s,t,o.getNode(),c);f!=null?u=o.getNode().getImmediateChild(l).updateChild(d,f):u=o.getNode().getImmediateChild(l)}else u=ns(s,l,e.serverCache);u!=null?a=n.filter.updateChild(o.getNode(),l,u,d,i,r):a=o.getNode()}}return Xe(e,a,o.isFullyInitialized()||I(t),n.filter.filtersNodes())}}function $t(n,e,t,s,i,r,o,a){const c=e.serverCache;let l;const d=o?n.filter:n.filter.getIndexedFilter();if(I(t))l=d.updateFullNode(c.getNode(),s,null);else if(d.filtersNodes()&&!c.isFiltered()){const p=c.getNode().updateChild(t,s);l=d.updateFullNode(c.getNode(),p,null)}else{const p=v(t);if(!c.isCompleteForPath(t)&&fe(t)>1)return e;const g=T(t),x=c.getNode().getImmediateChild(p).updateChild(g,s);p===".priority"?l=d.updatePriority(c.getNode(),x):l=d.updateChild(c.getNode(),p,x,g,wr,null)}const u=_r(e,l,c.isFullyInitialized()||I(t),d.filtersNodes()),f=new ss(i,u,r);return Er(n,u,t,i,f,a)}function Ln(n,e,t,s,i,r,o){const a=e.eventCache;let c,l;const d=new ss(i,e,r);if(I(t))l=n.filter.updateFullNode(e.eventCache.getNode(),s,o),c=Xe(e,l,!0,n.filter.filtersNodes());else{const u=v(t);if(u===".priority")l=n.filter.updatePriority(e.eventCache.getNode(),s),c=Xe(e,l,a.isFullyInitialized(),a.isFiltered());else{const f=T(t),p=a.getNode().getImmediateChild(u);let g;if(I(f))g=s;else{const y=d.getCompleteChild(u);y!=null?rr(f)===".priority"&&y.getChild(ar(f)).isEmpty()?g=y:g=y.updateChild(f,s):g=_.EMPTY_NODE}if(p.equals(g))c=e;else{const y=n.filter.updateChild(a.getNode(),u,g,f,d,o);c=Xe(e,y,a.isFullyInitialized(),n.filter.filtersNodes())}}}return c}function ci(n,e){return n.eventCache.isCompleteForChild(e)}function Vl(n,e,t,s,i,r,o){let a=e;return s.foreach((c,l)=>{const d=R(t,c);ci(e,v(d))&&(a=Ln(n,a,d,l,i,r,o))}),s.foreach((c,l)=>{const d=R(t,c);ci(e,v(d))||(a=Ln(n,a,d,l,i,r,o))}),a}function li(n,e,t){return t.foreach((s,i)=>{e=e.updateChild(s,i)}),e}function Fn(n,e,t,s,i,r,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let c=e,l;I(t)?l=s:l=new N(null).setTree(t,s);const d=e.serverCache.getNode();return l.children.inorderTraversal((u,f)=>{if(d.hasChild(u)){const p=e.serverCache.getNode().getImmediateChild(u),g=li(n,p,f);c=$t(n,c,new E(u),g,i,r,o,a)}}),l.children.inorderTraversal((u,f)=>{const p=!e.serverCache.isCompleteForChild(u)&&f.value===null;if(!d.hasChild(u)&&!p){const g=e.serverCache.getNode().getImmediateChild(u),y=li(n,g,f);c=$t(n,c,new E(u),y,i,r,o,a)}}),c}function ql(n,e,t,s,i,r,o){if(Bt(i,t)!=null)return e;const a=e.serverCache.isFiltered(),c=e.serverCache;if(s.value!=null){if(I(t)&&c.isFullyInitialized()||c.isCompleteForPath(t))return $t(n,e,t,c.getNode().getChild(t),i,r,a,o);if(I(t)){let l=new N(null);return c.getNode().forEachChild(xe,(d,u)=>{l=l.set(new E(d),u)}),Fn(n,e,t,l,i,r,a,o)}else return e}else{let l=new N(null);return s.foreach((d,u)=>{const f=R(t,d);c.isCompleteForPath(f)&&(l=l.set(d,c.getNode().getChild(f)))}),Fn(n,e,t,l,i,r,a,o)}}function Gl(n,e,t,s,i){const r=e.serverCache,o=_r(e,r.getNode(),r.isFullyInitialized()||I(t),r.isFiltered());return Er(n,o,t,s,wr,i)}function jl(n,e,t,s,i,r){let o;if(Bt(s,t)!=null)return e;{const a=new ss(s,e,i),c=e.eventCache.getNode();let l;if(I(t)||v(t)===".priority"){let d;if(e.serverCache.isFullyInitialized())d=Ft(s,Ce(e));else{const u=e.serverCache.getNode();m(u instanceof _,"serverChildren would be complete if leaf node"),d=ts(s,u)}d=d,l=n.filter.updateFullNode(c,d,r)}else{const d=v(t);let u=ns(s,d,e.serverCache);u==null&&e.serverCache.isCompleteForChild(d)&&(u=c.getImmediateChild(d)),u!=null?l=n.filter.updateChild(c,d,u,T(t),a,r):e.eventCache.getNode().hasChild(d)?l=n.filter.updateChild(c,d,_.EMPTY_NODE,T(t),a,r):l=c,l.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=Ft(s,Ce(e)),o.isLeafNode()&&(l=n.filter.updateFullNode(l,o,r)))}return o=e.serverCache.isFullyInitialized()||Bt(s,C())!=null,Xe(e,l,o,n.filter.filtersNodes())}}/**
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
 */class Ql{constructor(e,t){this.query_=e,this.eventRegistrations_=[];const s=this.query_._queryParams,i=new Xn(s.getIndex()),r=fl(s);this.processor_=Hl(r);const o=t.serverCache,a=t.eventCache,c=i.updateFullNode(_.EMPTY_NODE,o.getNode(),null),l=r.updateFullNode(_.EMPTY_NODE,a.getNode(),null),d=new pe(c,o.isFullyInitialized(),i.filtersNodes()),u=new pe(l,a.isFullyInitialized(),r.filtersNodes());this.viewCache_=Zt(u,d),this.eventGenerator_=new bl(this.query_)}get query(){return this.query_}}function Kl(n){return n.viewCache_.serverCache.getNode()}function Yl(n){return Lt(n.viewCache_)}function Xl(n,e){const t=Ce(n.viewCache_);return t&&(n.query._queryParams.loadsAllData()||!I(e)&&!t.getImmediateChild(v(e)).isEmpty())?t.getChild(e):null}function ui(n){return n.eventRegistrations_.length===0}function Jl(n,e){n.eventRegistrations_.push(e)}function di(n,e,t){const s=[];if(t){m(e==null,"A cancel should cancel all event registrations.");const i=n.query._path;n.eventRegistrations_.forEach(r=>{const o=r.createCancelEvent(t,i);o&&s.push(o)})}if(e){let i=[];for(let r=0;r<n.eventRegistrations_.length;++r){const o=n.eventRegistrations_[r];if(!o.matches(e))i.push(o);else if(e.hasAnyCallback()){i=i.concat(n.eventRegistrations_.slice(r+1));break}}n.eventRegistrations_=i}else n.eventRegistrations_=[];return s}function hi(n,e,t,s){e.type===K.MERGE&&e.source.queryId!==null&&(m(Ce(n.viewCache_),"We should always have a full cache before handling merges"),m(Lt(n.viewCache_),"Missing event cache, even though we have a server cache"));const i=n.viewCache_,r=zl(n.processor_,i,e,t,s);return Wl(n.processor_,r.viewCache),m(r.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),n.viewCache_=r.viewCache,Sr(n,r.changes,r.viewCache.eventCache.getNode(),null)}function Zl(n,e){const t=n.viewCache_.eventCache,s=[];return t.getNode().isLeafNode()||t.getNode().forEachChild(k,(r,o)=>{s.push(Me(r,o))}),t.isFullyInitialized()&&s.push(pr(t.getNode())),Sr(n,s,t.getNode(),e)}function Sr(n,e,t,s){const i=s?[s]:n.eventRegistrations_;return Il(n.eventGenerator_,e,t,i)}/**
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
 */let Ht;class Tr{constructor(){this.views=new Map}}function eu(n){m(!Ht,"__referenceConstructor has already been defined"),Ht=n}function tu(){return m(Ht,"Reference.ts has not been loaded"),Ht}function nu(n){return n.views.size===0}function is(n,e,t,s){const i=e.source.queryId;if(i!==null){const r=n.views.get(i);return m(r!=null,"SyncTree gave us an op for an invalid query."),hi(r,e,t,s)}else{let r=[];for(const o of n.views.values())r=r.concat(hi(o,e,t,s));return r}}function Nr(n,e,t,s,i){const r=e._queryIdentifier,o=n.views.get(r);if(!o){let a=Ft(t,i?s:null),c=!1;a?c=!0:s instanceof _?(a=ts(t,s),c=!1):(a=_.EMPTY_NODE,c=!1);const l=Zt(new pe(a,c,!1),new pe(s,i,!1));return new Ql(e,l)}return o}function su(n,e,t,s,i,r){const o=Nr(n,e,s,i,r);return n.views.has(e._queryIdentifier)||n.views.set(e._queryIdentifier,o),Jl(o,t),Zl(o,t)}function iu(n,e,t,s){const i=e._queryIdentifier,r=[];let o=[];const a=ge(n);if(i==="default")for(const[c,l]of n.views.entries())o=o.concat(di(l,t,s)),ui(l)&&(n.views.delete(c),l.query._queryParams.loadsAllData()||r.push(l.query));else{const c=n.views.get(i);c&&(o=o.concat(di(c,t,s)),ui(c)&&(n.views.delete(i),c.query._queryParams.loadsAllData()||r.push(c.query)))}return a&&!ge(n)&&r.push(new(tu())(e._repo,e._path)),{removed:r,events:o}}function Dr(n){const e=[];for(const t of n.views.values())t.query._queryParams.loadsAllData()||e.push(t);return e}function he(n,e){let t=null;for(const s of n.views.values())t=t||Xl(s,e);return t}function kr(n,e){if(e._queryParams.loadsAllData())return tn(n);{const s=e._queryIdentifier;return n.views.get(s)}}function xr(n,e){return kr(n,e)!=null}function ge(n){return tn(n)!=null}function tn(n){for(const e of n.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
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
 */let Wt;function ru(n){m(!Wt,"__referenceConstructor has already been defined"),Wt=n}function ou(){return m(Wt,"Reference.ts has not been loaded"),Wt}let au=1;class fi{constructor(e){this.listenProvider_=e,this.syncPointTree_=new N(null),this.pendingWriteTree_=Ll(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function Ar(n,e,t,s,i){return Sl(n.pendingWriteTree_,e,t,s,i),i?yt(n,new Ie(mr(),e,t)):[]}function ve(n,e,t=!1){const s=Tl(n.pendingWriteTree_,e);if(Nl(n.pendingWriteTree_,e)){let r=new N(null);return s.snap!=null?r=r.set(C(),!0):U(s.children,o=>{r=r.set(new E(o),!0)}),yt(n,new Ot(s.path,r,t))}else return[]}function _t(n,e,t){return yt(n,new Ie(Zn(),e,t))}function cu(n,e,t){const s=N.fromObject(t);return yt(n,new lt(Zn(),e,s))}function lu(n,e){return yt(n,new ct(Zn(),e))}function uu(n,e,t){const s=os(n,t);if(s){const i=as(s),r=i.path,o=i.queryId,a=B(r,e),c=new ct(es(o),a);return cs(n,r,c)}else return[]}function zt(n,e,t,s,i=!1){const r=e._path,o=n.syncPointTree_.get(r);let a=[];if(o&&(e._queryIdentifier==="default"||xr(o,e))){const c=iu(o,e,t,s);nu(o)&&(n.syncPointTree_=n.syncPointTree_.remove(r));const l=c.removed;if(a=c.events,!i){const d=l.findIndex(f=>f._queryParams.loadsAllData())!==-1,u=n.syncPointTree_.findOnPath(r,(f,p)=>ge(p));if(d&&!u){const f=n.syncPointTree_.subtree(r);if(!f.isEmpty()){const p=fu(f);for(let g=0;g<p.length;++g){const y=p[g],x=y.query,ce=Or(n,y);n.listenProvider_.startListening(Ze(x),ut(n,x),ce.hashFn,ce.onComplete)}}}!u&&l.length>0&&!s&&(d?n.listenProvider_.stopListening(Ze(e),null):l.forEach(f=>{const p=n.queryToTagMap.get(nn(f));n.listenProvider_.stopListening(Ze(f),p)}))}pu(n,l)}return a}function Rr(n,e,t,s){const i=os(n,s);if(i!=null){const r=as(i),o=r.path,a=r.queryId,c=B(o,e),l=new Ie(es(a),c,t);return cs(n,o,l)}else return[]}function du(n,e,t,s){const i=os(n,s);if(i){const r=as(i),o=r.path,a=r.queryId,c=B(o,e),l=N.fromObject(t),d=new lt(es(a),c,l);return cs(n,o,d)}else return[]}function Bn(n,e,t,s=!1){const i=e._path;let r=null,o=!1;n.syncPointTree_.foreachOnPath(i,(f,p)=>{const g=B(f,i);r=r||he(p,g),o=o||ge(p)});let a=n.syncPointTree_.get(i);a?(o=o||ge(a),r=r||he(a,C())):(a=new Tr,n.syncPointTree_=n.syncPointTree_.set(i,a));let c;r!=null?c=!0:(c=!1,r=_.EMPTY_NODE,n.syncPointTree_.subtree(i).foreachChild((p,g)=>{const y=he(g,C());y&&(r=r.updateImmediateChild(p,y))}));const l=xr(a,e);if(!l&&!e._queryParams.loadsAllData()){const f=nn(e);m(!n.queryToTagMap.has(f),"View does not exist, but we have a tag");const p=gu();n.queryToTagMap.set(f,p),n.tagToQueryMap.set(p,f)}const d=en(n.pendingWriteTree_,i);let u=su(a,e,t,d,r,c);if(!l&&!o&&!s){const f=kr(a,e);u=u.concat(mu(n,e,f))}return u}function rs(n,e,t){const i=n.pendingWriteTree_,r=n.syncPointTree_.findOnPath(e,(o,a)=>{const c=B(o,e),l=he(a,c);if(l)return l});return br(i,e,r,t,!0)}function hu(n,e){const t=e._path;let s=null;n.syncPointTree_.foreachOnPath(t,(l,d)=>{const u=B(l,t);s=s||he(d,u)});let i=n.syncPointTree_.get(t);i?s=s||he(i,C()):(i=new Tr,n.syncPointTree_=n.syncPointTree_.set(t,i));const r=s!=null,o=r?new pe(s,!0,!1):null,a=en(n.pendingWriteTree_,e._path),c=Nr(i,e,a,r?o.getNode():_.EMPTY_NODE,r);return Yl(c)}function yt(n,e){return Pr(e,n.syncPointTree_,null,en(n.pendingWriteTree_,C()))}function Pr(n,e,t,s){if(I(n.path))return Mr(n,e,t,s);{const i=e.get(C());t==null&&i!=null&&(t=he(i,C()));let r=[];const o=v(n.path),a=n.operationForChild(o),c=e.children.get(o);if(c&&a){const l=t?t.getImmediateChild(o):null,d=Ir(s,o);r=r.concat(Pr(a,c,l,d))}return i&&(r=r.concat(is(i,n,s,t))),r}}function Mr(n,e,t,s){const i=e.get(C());t==null&&i!=null&&(t=he(i,C()));let r=[];return e.children.inorderTraversal((o,a)=>{const c=t?t.getImmediateChild(o):null,l=Ir(s,o),d=n.operationForChild(o);d&&(r=r.concat(Mr(d,a,c,l)))}),i&&(r=r.concat(is(i,n,s,t))),r}function Or(n,e){const t=e.query,s=ut(n,t);return{hashFn:()=>(Kl(e)||_.EMPTY_NODE).hash(),onComplete:i=>{if(i==="ok")return s?uu(n,t._path,s):lu(n,t._path);{const r=hc(i,t);return zt(n,t,null,r)}}}}function ut(n,e){const t=nn(e);return n.queryToTagMap.get(t)}function nn(n){return n._path.toString()+"$"+n._queryIdentifier}function os(n,e){return n.tagToQueryMap.get(e)}function as(n){const e=n.indexOf("$");return m(e!==-1&&e<n.length-1,"Bad queryKey."),{queryId:n.substr(e+1),path:new E(n.substr(0,e))}}function cs(n,e,t){const s=n.syncPointTree_.get(e);m(s,"Missing sync point for query tag that we're tracking");const i=en(n.pendingWriteTree_,e);return is(s,t,i,null)}function fu(n){return n.fold((e,t,s)=>{if(t&&ge(t))return[tn(t)];{let i=[];return t&&(i=Dr(t)),U(s,(r,o)=>{i=i.concat(o)}),i}})}function Ze(n){return n._queryParams.loadsAllData()&&!n._queryParams.isDefault()?new(ou())(n._repo,n._path):n}function pu(n,e){for(let t=0;t<e.length;++t){const s=e[t];if(!s._queryParams.loadsAllData()){const i=nn(s),r=n.queryToTagMap.get(i);n.queryToTagMap.delete(i),n.tagToQueryMap.delete(r)}}}function gu(){return au++}function mu(n,e,t){const s=e._path,i=ut(n,e),r=Or(n,t),o=n.listenProvider_.startListening(Ze(e),i,r.hashFn,r.onComplete),a=n.syncPointTree_.subtree(s);if(i)m(!ge(a.value),"If we're adding a query, it shouldn't be shadowed");else{const c=a.fold((l,d,u)=>{if(!I(l)&&d&&ge(d))return[tn(d).query];{let f=[];return d&&(f=f.concat(Dr(d).map(p=>p.query))),U(u,(p,g)=>{f=f.concat(g)}),f}});for(let l=0;l<c.length;++l){const d=c[l];n.listenProvider_.stopListening(Ze(d),ut(n,d))}}return o}/**
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
 */class ls{constructor(e){this.node_=e}getImmediateChild(e){const t=this.node_.getImmediateChild(e);return new ls(t)}node(){return this.node_}}class us{constructor(e,t){this.syncTree_=e,this.path_=t}getImmediateChild(e){const t=R(this.path_,e);return new us(this.syncTree_,t)}node(){return rs(this.syncTree_,this.path_)}}const _u=function(n){return n=n||{},n.timestamp=n.timestamp||new Date().getTime(),n},pi=function(n,e,t){if(!n||typeof n!="object")return n;if(m(".sv"in n,"Unexpected leaf node or priority contents"),typeof n[".sv"]=="string")return yu(n[".sv"],e,t);if(typeof n[".sv"]=="object")return vu(n[".sv"],e);m(!1,"Unexpected server value: "+JSON.stringify(n,null,2))},yu=function(n,e,t){switch(n){case"timestamp":return t.timestamp;default:m(!1,"Unexpected server value: "+n)}},vu=function(n,e,t){n.hasOwnProperty("increment")||m(!1,"Unexpected server value: "+JSON.stringify(n,null,2));const s=n.increment;typeof s!="number"&&m(!1,"Unexpected increment value: "+s);const i=e.node();if(m(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return s;const o=i.getValue();return typeof o!="number"?s:o+s},bu=function(n,e,t,s){return ds(e,new us(t,n),s)},Lr=function(n,e,t){return ds(n,new ls(e),t)};function ds(n,e,t){const s=n.getPriority().val(),i=pi(s,e.getImmediateChild(".priority"),t);let r;if(n.isLeafNode()){const o=n,a=pi(o.getValue(),e,t);return a!==o.getValue()||i!==o.getPriority().val()?new P(a,O(i)):n}else{const o=n;return r=o,i!==o.getPriority().val()&&(r=r.updatePriority(new P(i))),o.forEachChild(k,(a,c)=>{const l=ds(c,e.getImmediateChild(a),t);l!==c&&(r=r.updateImmediateChild(a,l))}),r}}/**
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
 */class hs{constructor(e="",t=null,s={children:{},childCount:0}){this.name=e,this.parent=t,this.node=s}}function fs(n,e){let t=e instanceof E?e:new E(e),s=n,i=v(t);for(;i!==null;){const r=Re(s.node.children,i)||{children:{},childCount:0};s=new hs(i,s,r),t=T(t),i=v(t)}return s}function ze(n){return n.node.value}function Fr(n,e){n.node.value=e,$n(n)}function Br(n){return n.node.childCount>0}function Iu(n){return ze(n)===void 0&&!Br(n)}function sn(n,e){U(n.node.children,(t,s)=>{e(new hs(t,n,s))})}function $r(n,e,t,s){t&&e(n),sn(n,i=>{$r(i,e,!0)})}function Cu(n,e,t){let s=n.parent;for(;s!==null;){if(e(s))return!0;s=s.parent}return!1}function vt(n){return new E(n.parent===null?n.name:vt(n.parent)+"/"+n.name)}function $n(n){n.parent!==null&&wu(n.parent,n.name,n)}function wu(n,e,t){const s=Iu(t),i=oe(n.node.children,e);s&&i?(delete n.node.children[e],n.node.childCount--,$n(n)):!s&&!i&&(n.node.children[e]=t.node,n.node.childCount++,$n(n))}/**
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
 */const Eu=/[\[\].#$\/\u0000-\u001F\u007F]/,Su=/[\[\].#$\u0000-\u001F\u007F]/,In=10*1024*1024,Hr=function(n){return typeof n=="string"&&n.length!==0&&!Eu.test(n)},Wr=function(n){return typeof n=="string"&&n.length!==0&&!Su.test(n)},Tu=function(n){return n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),Wr(n)},Nu=function(n,e,t,s){ps(zn(n,"value"),e,t)},ps=function(n,e,t){const s=t instanceof E?new qc(t,n):t;if(e===void 0)throw new Error(n+"contains undefined "+_e(s));if(typeof e=="function")throw new Error(n+"contains a function "+_e(s)+" with contents = "+e.toString());if(Bi(e))throw new Error(n+"contains "+e.toString()+" "+_e(s));if(typeof e=="string"&&e.length>In/3&&Xt(e)>In)throw new Error(n+"contains a string greater than "+In+" utf8 bytes "+_e(s)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,r=!1;if(U(e,(o,a)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(r=!0,!Hr(o)))throw new Error(n+" contains an invalid key ("+o+") "+_e(s)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);Gc(s,o),ps(n,a,s),jc(s)}),i&&r)throw new Error(n+' contains ".value" child '+_e(s)+" in addition to actual children.")}},zr=function(n,e,t,s){if(!Wr(t))throw new Error(zn(n,e)+'was an invalid path = "'+t+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},Du=function(n,e,t,s){t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),zr(n,e,t)},Ur=function(n,e){if(v(e)===".info")throw new Error(n+" failed = Can't modify data under /.info/")},ku=function(n,e){const t=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!Hr(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||t.length!==0&&!Tu(t))throw new Error(zn(n,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
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
 */class xu{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function gs(n,e){let t=null;for(let s=0;s<e.length;s++){const i=e[s],r=i.getPath();t!==null&&!Qn(r,t.path)&&(n.eventLists_.push(t),t=null),t===null&&(t={events:[],path:r}),t.events.push(i)}t&&n.eventLists_.push(t)}function Vr(n,e,t){gs(n,t),qr(n,s=>Qn(s,e))}function Z(n,e,t){gs(n,t),qr(n,s=>Q(s,e)||Q(e,s))}function qr(n,e){n.recursionDepth_++;let t=!0;for(let s=0;s<n.eventLists_.length;s++){const i=n.eventLists_[s];if(i){const r=i.path;e(r)?(Au(n.eventLists_[s]),n.eventLists_[s]=null):t=!1}}t&&(n.eventLists_=[]),n.recursionDepth_--}function Au(n){for(let e=0;e<n.events.length;e++){const t=n.events[e];if(t!==null){n.events[e]=null;const s=t.getEventRunner();Ke&&F("event: "+t.toString()),We(s)}}}/**
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
 */const Ru="repo_interrupt",Pu=25;class Mu{constructor(e,t,s,i){this.repoInfo_=e,this.forceRestClient_=t,this.authTokenProvider_=s,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new xu,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Mt(),this.transactionQueueTree_=new hs,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function Ou(n,e,t){if(n.stats_=Gn(n.repoInfo_),n.forceRestClient_||mc())n.server_=new Pt(n.repoInfo_,(s,i,r,o)=>{gi(n,s,i,r,o)},n.authTokenProvider_,n.appCheckProvider_),setTimeout(()=>mi(n,!0),0);else{if(typeof t<"u"&&t!==null){if(typeof t!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{A(t)}catch(s){throw new Error("Invalid authOverride provided: "+s)}}n.persistentConnection_=new te(n.repoInfo_,e,(s,i,r,o)=>{gi(n,s,i,r,o)},s=>{mi(n,s)},s=>{Fu(n,s)},n.authTokenProvider_,n.appCheckProvider_,t),n.server_=n.persistentConnection_}n.authTokenProvider_.addTokenChangeListener(s=>{n.server_.refreshAuthToken(s)}),n.appCheckProvider_.addTokenChangeListener(s=>{n.server_.refreshAppCheckToken(s.token)}),n.statsReporter_=Ic(n.repoInfo_,()=>new vl(n.stats_,n.server_)),n.infoData_=new pl,n.infoSyncTree_=new fi({startListening:(s,i,r,o)=>{let a=[];const c=n.infoData_.getNode(s._path);return c.isEmpty()||(a=_t(n.infoSyncTree_,s._path,c),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),_s(n,"connected",!1),n.serverSyncTree_=new fi({startListening:(s,i,r,o)=>(n.server_.listen(s,r,i,(a,c)=>{const l=o(a,c);Z(n.eventQueue_,s._path,l)}),[]),stopListening:(s,i)=>{n.server_.unlisten(s,i)}})}function Lu(n){const t=n.infoData_.getNode(new E(".info/serverTimeOffset")).val()||0;return new Date().getTime()+t}function ms(n){return _u({timestamp:Lu(n)})}function gi(n,e,t,s,i){n.dataUpdateCount++;const r=new E(e);t=n.interceptServerDataCallback_?n.interceptServerDataCallback_(e,t):t;let o=[];if(i)if(s){const c=Nt(t,l=>O(l));o=du(n.serverSyncTree_,r,c,i)}else{const c=O(t);o=Rr(n.serverSyncTree_,r,c,i)}else if(s){const c=Nt(t,l=>O(l));o=cu(n.serverSyncTree_,r,c)}else{const c=O(t);o=_t(n.serverSyncTree_,r,c)}let a=r;o.length>0&&(a=on(n,r)),Z(n.eventQueue_,a,o)}function mi(n,e){_s(n,"connected",e),e===!1&&Hu(n)}function Fu(n,e){U(e,(t,s)=>{_s(n,t,s)})}function _s(n,e,t){const s=new E("/.info/"+e),i=O(t);n.infoData_.updateSnapshot(s,i);const r=_t(n.infoSyncTree_,s,i);Z(n.eventQueue_,s,r)}function Gr(n){return n.nextWriteId_++}function Bu(n,e,t){const s=hu(n.serverSyncTree_,e);return s!=null?Promise.resolve(s):n.server_.get(e).then(i=>{const r=O(i).withIndex(e._queryParams.getIndex());Bn(n.serverSyncTree_,e,t,!0);let o;if(e._queryParams.loadsAllData())o=_t(n.serverSyncTree_,e._path,r);else{const a=ut(n.serverSyncTree_,e);o=Rr(n.serverSyncTree_,e._path,r,a)}return Z(n.eventQueue_,e._path,o),zt(n.serverSyncTree_,e,t,null,!0),r},i=>(rn(n,"get for query "+A(e)+" failed: "+i),Promise.reject(new Error(i))))}function $u(n,e,t,s,i){rn(n,"set",{path:e.toString(),value:t,priority:s});const r=ms(n),o=O(t,s),a=rs(n.serverSyncTree_,e),c=Lr(o,a,r),l=Gr(n),d=Ar(n.serverSyncTree_,e,c,l,!0);gs(n.eventQueue_,d),n.server_.put(e.toString(),o.val(!0),(f,p)=>{const g=f==="ok";g||z("set at "+e+" failed: "+f);const y=ve(n.serverSyncTree_,l,!g);Z(n.eventQueue_,e,y),Uu(n,i,f,p)});const u=Xr(n,e);on(n,u),Z(n.eventQueue_,u,[])}function Hu(n){rn(n,"onDisconnectEvents");const e=ms(n),t=Mt();Pn(n.onDisconnect_,C(),(i,r)=>{const o=bu(i,r,n.serverSyncTree_,e);gr(t,i,o)});let s=[];Pn(t,C(),(i,r)=>{s=s.concat(_t(n.serverSyncTree_,i,r));const o=Xr(n,i);on(n,o)}),n.onDisconnect_=Mt(),Z(n.eventQueue_,C(),s)}function Wu(n,e,t){let s;v(e._path)===".info"?s=Bn(n.infoSyncTree_,e,t):s=Bn(n.serverSyncTree_,e,t),Vr(n.eventQueue_,e._path,s)}function _i(n,e,t){let s;v(e._path)===".info"?s=zt(n.infoSyncTree_,e,t):s=zt(n.serverSyncTree_,e,t),Vr(n.eventQueue_,e._path,s)}function zu(n){n.persistentConnection_&&n.persistentConnection_.interrupt(Ru)}function rn(n,...e){let t="";n.persistentConnection_&&(t=n.persistentConnection_.id+":"),F(t,...e)}function Uu(n,e,t,s){e&&We(()=>{if(t==="ok")e(null);else{const i=(t||"error").toUpperCase();let r=i;s&&(r+=": "+s);const o=new Error(r);o.code=i,e(o)}})}function jr(n,e,t){return rs(n.serverSyncTree_,e,t)||_.EMPTY_NODE}function ys(n,e=n.transactionQueueTree_){if(e||an(n,e),ze(e)){const t=Kr(n,e);m(t.length>0,"Sending zero length transaction queue"),t.every(i=>i.status===0)&&Vu(n,vt(e),t)}else Br(e)&&sn(e,t=>{ys(n,t)})}function Vu(n,e,t){const s=t.map(l=>l.currentWriteId),i=jr(n,e,s);let r=i;const o=i.hash();for(let l=0;l<t.length;l++){const d=t[l];m(d.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),d.status=1,d.retryCount++;const u=B(e,d.path);r=r.updateChild(u,d.currentOutputSnapshotRaw)}const a=r.val(!0),c=e;n.server_.put(c.toString(),a,l=>{rn(n,"transaction put response",{path:c.toString(),status:l});let d=[];if(l==="ok"){const u=[];for(let f=0;f<t.length;f++)t[f].status=2,d=d.concat(ve(n.serverSyncTree_,t[f].currentWriteId)),t[f].onComplete&&u.push(()=>t[f].onComplete(null,!0,t[f].currentOutputSnapshotResolved)),t[f].unwatcher();an(n,fs(n.transactionQueueTree_,e)),ys(n,n.transactionQueueTree_),Z(n.eventQueue_,e,d);for(let f=0;f<u.length;f++)We(u[f])}else{if(l==="datastale")for(let u=0;u<t.length;u++)t[u].status===3?t[u].status=4:t[u].status=0;else{z("transaction at "+c.toString()+" failed: "+l);for(let u=0;u<t.length;u++)t[u].status=4,t[u].abortReason=l}on(n,e)}},o)}function on(n,e){const t=Qr(n,e),s=vt(t),i=Kr(n,t);return qu(n,i,s),s}function qu(n,e,t){if(e.length===0)return;const s=[];let i=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const c=e[a],l=B(t,c.path);let d=!1,u;if(m(l!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),c.status===4)d=!0,u=c.abortReason,i=i.concat(ve(n.serverSyncTree_,c.currentWriteId,!0));else if(c.status===0)if(c.retryCount>=Pu)d=!0,u="maxretry",i=i.concat(ve(n.serverSyncTree_,c.currentWriteId,!0));else{const f=jr(n,c.path,o);c.currentInputSnapshot=f;const p=e[a].update(f.val());if(p!==void 0){ps("transaction failed: Data returned ",p,c.path);let g=O(p);typeof p=="object"&&p!=null&&oe(p,".priority")||(g=g.updatePriority(f.getPriority()));const x=c.currentWriteId,ce=ms(n),Ct=Lr(g,f,ce);c.currentOutputSnapshotRaw=g,c.currentOutputSnapshotResolved=Ct,c.currentWriteId=Gr(n),o.splice(o.indexOf(x),1),i=i.concat(Ar(n.serverSyncTree_,c.path,Ct,c.currentWriteId,c.applyLocally)),i=i.concat(ve(n.serverSyncTree_,x,!0))}else d=!0,u="nodata",i=i.concat(ve(n.serverSyncTree_,c.currentWriteId,!0))}Z(n.eventQueue_,t,i),i=[],d&&(e[a].status=2,function(f){setTimeout(f,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(u==="nodata"?s.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):s.push(()=>e[a].onComplete(new Error(u),!1,null))))}an(n,n.transactionQueueTree_);for(let a=0;a<s.length;a++)We(s[a]);ys(n,n.transactionQueueTree_)}function Qr(n,e){let t,s=n.transactionQueueTree_;for(t=v(e);t!==null&&ze(s)===void 0;)s=fs(s,t),e=T(e),t=v(e);return s}function Kr(n,e){const t=[];return Yr(n,e,t),t.sort((s,i)=>s.order-i.order),t}function Yr(n,e,t){const s=ze(e);if(s)for(let i=0;i<s.length;i++)t.push(s[i]);sn(e,i=>{Yr(n,i,t)})}function an(n,e){const t=ze(e);if(t){let s=0;for(let i=0;i<t.length;i++)t[i].status!==2&&(t[s]=t[i],s++);t.length=s,Fr(e,t.length>0?t:void 0)}sn(e,s=>{an(n,s)})}function Xr(n,e){const t=vt(Qr(n,e)),s=fs(n.transactionQueueTree_,e);return Cu(s,i=>{Cn(n,i)}),Cn(n,s),$r(s,i=>{Cn(n,i)}),t}function Cn(n,e){const t=ze(e);if(t){const s=[];let i=[],r=-1;for(let o=0;o<t.length;o++)t[o].status===3||(t[o].status===1?(m(r===o-1,"All SENT items should be at beginning of queue."),r=o,t[o].status=3,t[o].abortReason="set"):(m(t[o].status===0,"Unexpected transaction status in abort"),t[o].unwatcher(),i=i.concat(ve(n.serverSyncTree_,t[o].currentWriteId,!0)),t[o].onComplete&&s.push(t[o].onComplete.bind(null,new Error("set"),!1,null))));r===-1?Fr(e,void 0):t.length=r+1,Z(n.eventQueue_,vt(e),i);for(let o=0;o<s.length;o++)We(s[o])}}/**
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
 */function Gu(n){let e="";const t=n.split("/");for(let s=0;s<t.length;s++)if(t[s].length>0){let i=t[s];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function ju(n){const e={};n.charAt(0)==="?"&&(n=n.substring(1));for(const t of n.split("&")){if(t.length===0)continue;const s=t.split("=");s.length===2?e[decodeURIComponent(s[0])]=decodeURIComponent(s[1]):z(`Invalid query segment '${t}' in query '${n}'`)}return e}const yi=function(n,e){const t=Qu(n),s=t.namespace;t.domain==="firebase.com"&&ie(t.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!s||s==="undefined")&&t.domain!=="localhost"&&ie("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),t.secure||ac();const i=t.scheme==="ws"||t.scheme==="wss";return{repoInfo:new Yi(t.host,t.secure,s,i,e,"",s!==t.subdomain),path:new E(t.pathString)}},Qu=function(n){let e="",t="",s="",i="",r="",o=!0,a="https",c=443;if(typeof n=="string"){let l=n.indexOf("//");l>=0&&(a=n.substring(0,l-1),n=n.substring(l+2));let d=n.indexOf("/");d===-1&&(d=n.length);let u=n.indexOf("?");u===-1&&(u=n.length),e=n.substring(0,Math.min(d,u)),d<u&&(i=Gu(n.substring(d,u)));const f=ju(n.substring(Math.min(n.length,u)));l=e.indexOf(":"),l>=0?(o=a==="https"||a==="wss",c=parseInt(e.substring(l+1),10)):l=e.length;const p=e.slice(0,l);if(p.toLowerCase()==="localhost")t="localhost";else if(p.split(".").length<=2)t=p;else{const g=e.indexOf(".");s=e.substring(0,g).toLowerCase(),t=e.substring(g+1),r=s}"ns"in f&&(r=f.ns)}return{host:e,port:c,domain:t,subdomain:s,secure:o,scheme:a,pathString:i,namespace:r}};/**
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
 */class Ku{constructor(e,t,s,i){this.eventType=e,this.eventRegistration=t,this.snapshot=s,this.prevName=i}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+A(this.snapshot.exportVal())}}class Yu{constructor(e,t,s){this.eventRegistration=e,this.error=t,this.path=s}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
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
 */class Jr{constructor(e,t){this.snapshotCallback=e,this.cancelCallback=t}onValue(e,t){this.snapshotCallback.call(null,e,t)}onCancel(e){return m(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
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
 */class vs{constructor(e,t,s,i){this._repo=e,this._path=t,this._queryParams=s,this._orderByCalled=i}get key(){return I(this._path)?null:rr(this._path)}get ref(){return new ae(this._repo,this._path)}get _queryIdentifier(){const e=ni(this._queryParams),t=Vn(e);return t==="{}"?"default":t}get _queryObject(){return ni(this._queryParams)}isEqual(e){if(e=$e(e),!(e instanceof vs))return!1;const t=this._repo===e._repo,s=Qn(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return t&&s&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+Vc(this._path)}}class ae extends vs{constructor(e,t){super(e,t,new Jn,!1)}get parent(){const e=ar(this._path);return e===null?null:new ae(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class dt{constructor(e,t,s){this._node=e,this.ref=t,this._index=s}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const t=new E(e),s=Ut(this.ref,e);return new dt(this._node.getChild(t),s,k)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(s,i)=>e(new dt(i,Ut(this.ref,s),k)))}hasChild(e){const t=new E(e);return!this._node.getChild(t).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function Le(n,e){return n=$e(n),n._checkNotDeleted("ref"),e!==void 0?Ut(n._root,e):n._root}function Ut(n,e){return n=$e(n),v(n._path)===null?Du("child","path",e):zr("child","path",e),new ae(n._repo,R(n._path,e))}function Xu(n){return Ur("remove",n._path),Vt(n,null)}function Vt(n,e){n=$e(n),Ur("set",n._path),Nu("set",e,n._path);const t=new Yt;return $u(n._repo,n._path,e,null,t.wrapCallback(()=>{})),t.promise}function Ju(n){n=$e(n);const e=new Jr(()=>{}),t=new cn(e);return Bu(n._repo,n,t).then(s=>new dt(s,new ae(n._repo,n._path),n._queryParams.getIndex()))}class cn{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,t){const s=t._queryParams.getIndex();return new Ku("value",this,new dt(e.snapshotNode,new ae(t._repo,t._path),s))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,t){return this.callbackContext.hasCancelCallback?new Yu(this,e,t):null}matches(e){return e instanceof cn?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}function Zu(n,e,t,s,i){let r;if(typeof s=="object"&&(r=void 0,i=s),typeof s=="function"&&(r=s),i&&i.onlyOnce){const c=t,l=(d,u)=>{_i(n._repo,n,a),c(d,u)};l.userCallback=t.userCallback,l.context=t.context,t=l}const o=new Jr(t,r||void 0),a=new cn(o);return Wu(n._repo,n,a),()=>_i(n._repo,n,a)}function ed(n,e,t,s){return Zu(n,"value",e,t,s)}eu(ae);ru(ae);/**
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
 */const td="FIREBASE_DATABASE_EMULATOR_HOST",Hn={};let nd=!1;function sd(n,e,t,s){n.repoInfo_=new Yi(`${e}:${t}`,!1,n.repoInfo_.namespace,n.repoInfo_.webSocketOnly,n.repoInfo_.nodeAdmin,n.repoInfo_.persistenceKey,n.repoInfo_.includeNamespaceInQueryParams,!0),s&&(n.authTokenProvider_=s)}function id(n,e,t,s,i){let r=s||n.options.databaseURL;r===void 0&&(n.options.projectId||ie("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),F("Using default host for project ",n.options.projectId),r=`${n.options.projectId}-default-rtdb.firebaseio.com`);let o=yi(r,i),a=o.repoInfo,c;typeof process<"u"&&Bs&&(c=Bs[td]),c?(r=`http://${c}?ns=${a.namespace}`,o=yi(r,i),a=o.repoInfo):o.repoInfo.secure;const l=new yc(n.name,n.options,e);ku("Invalid Firebase Database URL",o),I(o.path)||ie("Database URL must point to the root of a Firebase Database (not including a child path).");const d=od(a,n,l,new _c(n.name,t));return new ad(d,n)}function rd(n,e){const t=Hn[e];(!t||t[n.key]!==n)&&ie(`Database ${e}(${n.repoInfo_}) has already been deleted.`),zu(n),delete t[n.key]}function od(n,e,t,s){let i=Hn[e.name];i||(i={},Hn[e.name]=i);let r=i[n.toURLString()];return r&&ie("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),r=new Mu(n,nd,t,s),i[n.toURLString()]=r,r}class ad{constructor(e,t){this._repoInternal=e,this.app=t,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(Ou(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new ae(this._repo,C())),this._rootInternal}_delete(){return this._rootInternal!==null&&(rd(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&ie("Cannot call "+e+" on a deleted database.")}}function cd(n=Ua(),e){const t=$a(n,"database").getImmediate({identifier:e});if(!t._instanceStarted){const s=Do("database");s&&ld(t,...s)}return t}function ld(n,e,t,s={}){n=$e(n),n._checkNotDeleted("useEmulator"),n._instanceStarted&&ie("Cannot call useEmulator() after instance has already been initialized.");const i=n._repoInternal;let r;if(i.repoInfo_.nodeAdmin)s.mockUserToken&&ie('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),r=new St(St.OWNER);else if(s.mockUserToken){const o=typeof s.mockUserToken=="string"?s.mockUserToken:ko(s.mockUserToken,n.app.options.projectId);r=new St(o)}sd(i,e,t,r)}/**
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
 */function ud(n){tc(za),kt(new nt("database",(e,{instanceIdentifier:t})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),r=e.getProvider("app-check-internal");return id(s,i,r,t)},"PUBLIC").setMultipleInstances(!0)),De($s,Hs,n),De($s,Hs,"esm2017")}te.prototype.simpleListen=function(n,e){this.sendRequest("q",{p:n},e)};te.prototype.echo=function(n,e){this.sendRequest("echo",{d:n},e)};ud();const dd={apiKey:"AIzaSyBNNZLbYUCp2QSWwoK0HJhzLdgRbWv3jzY",authDomain:"behaeltertrack.firebaseapp.com",databaseURL:"https://behaeltertrack-default-rtdb.europe-west1.firebasedatabase.app",projectId:"behaeltertrack",storageBucket:"behaeltertrack.firebasestorage.app",messagingSenderId:"528411805785",appId:"1:528411805785:web:e53a588db0808796dd0948",measurementId:"G-9R5SLN5N1G"},hd=Ri(dd),we=cd(hd),Ae=async(n,e)=>{try{return await Vt(Le(we,n),e),{success:!0}}catch(t){return console.error("Error setting data:",t),{success:!1,error:t}}},ne=async n=>{const e=Le(we);try{const t=await Ju(Ut(e,n));return t.exists()?t.val():(console.log("No data available at path:",n),null)}catch(t){return console.error("Error getting data:",t),null}},bt=async(n,e)=>{try{const t=await ne(n);if(t){const s={...t,...e};await Vt(Le(we,n),s),console.log(`✅ Updated ${n} (partial update)`)}else await Vt(Le(we,n),e),console.log(`✅ Created ${n} (no existing data)`);return{success:!0}}catch(t){return console.error("Error updating data:",t),{success:!1,error:t}}},fd=async n=>{try{return await Xu(Le(we,n)),{success:!0}}catch(e){return console.error("Error deleting data:",e),{success:!1,error:e}}},et=(n,e)=>{const t=Le(we,n);return ed(t,i=>{const r=i.exists()?i.val():null;e(r)},i=>{console.error("Error listening to data:",i)})},Zr=async()=>{try{return await ne("partTypeStandards/Housing")||(console.log("Initializing default standards..."),await Ae("partTypeStandards/Housing",{containerCapacity:200,defectTypes:{mass:["Maßabweichung","Formfehler","Positionsfehler"],lehre:["Kratzer","Delle","Verschmutzung","Riss","Fehlbohrung","Grat"],sicht:["n.i.O."]},inspectionTypes:["lehre","mass","sicht"],inspectionSequence:[["lehre"],["lehre","mass"],["lehre","mass","sicht"]]})),await ne("tbkDatabase")||await Ae("tbkDatabase",{}),await ne("inspectionDatabase")||await Ae("inspectionDatabase",{}),console.log("Database initialized successfully"),{success:!0}}catch(n){return console.error("Error initializing database:",n),{success:!1,error:n}}},pd=Object.freeze(Object.defineProperty({__proto__:null,database:we,deleteData:fd,getData:ne,initializeDatabase:Zr,listenToData:et,setData:Ae,updateData:bt},Symbol.toStringTag,{value:"Module"})),h={language:"de",personnelNumber:"",userName:"",isPaused:!1,pauseStart:null,currentScreen:"main",history:[],currentInspection:{articleNumber:"",tz:0,containerNumber:"",quantity:0,inspectionType:"",defects:{},totalDefects:0,inspectionDbId:null},tbkDatabase:{},inspectionDatabase:{},partTypeStandards:{Housing:{containerCapacity:200,defectTypes:{mass:["Maßabweichung","Formfehler","Positionsfehler"],lehre:["Kratzer","Delle","Verschmutzung","Riss","Fehlbohrung","Grat"],sicht:["n.i.O."]},inspectionTypes:["lehre","mass","sicht"],inspectionSequence:[["lehre"],["mass"],["sicht"]]}}},gd=async()=>{try{console.log("Initializing state from Firebase...");const n=await ne("tbkDatabase");n&&(h.tbkDatabase=n);const e=await ne("inspectionDatabase");e&&(h.inspectionDatabase=e);const t=await ne("partTypeStandards/Housing");return t&&(h.partTypeStandards.Housing=t),md(),console.log("State initialized successfully"),{success:!0}}catch(n){return console.error("Error initializing state:",n),{success:!1,error:n}}},md=()=>{et("tbkDatabase",n=>{console.log("TBK Database updated from Firebase"),h.tbkDatabase=n||{},window.updateDatabaseUI&&window.updateDatabaseUI()}),et("inspectionDatabase",n=>{console.log("Inspection Database updated from Firebase"),h.inspectionDatabase=n||{},window.updateDatabaseUI&&window.updateDatabaseUI()}),et("partTypeStandards/Housing",n=>{console.log("Standards updated from Firebase"),n&&(h.partTypeStandards.Housing=n),window.updateStandardsUI&&window.updateStandardsUI()}),console.log("Real-time listeners activated")},_d=async n=>{try{const{batchNummer:e}=n;return await Ae(`tbkDatabase/${e}`,n),console.log("TBK entry added:",e),{success:!0,key:e}}catch(e){return console.error("Error adding TBK entry:",e),{success:!1,error:e}}},yd=async(n,e)=>{try{return await Ae(`inspectionDatabase/${n}`,e),console.log("Inspection added:",n),{success:!0,key:n}}catch(t){return console.error("Error adding inspection:",t),{success:!1,error:t}}},bs=async(n,e)=>{try{return await bt(`inspectionDatabase/${n}`,e),console.log("Inspection updated:",n),{success:!0}}catch(t){return console.error("Error updating inspection:",t),{success:!1,error:t}}},vd=async n=>{try{return await ne(`inspectionDatabase/${n}`)}catch(e){return console.error("Error getting inspection:",e),null}},bd=async n=>{try{return await bt("partTypeStandards/Housing",{containerCapacity:n}),console.log("Container capacity updated:",n),{success:!0}}catch(e){return console.error("Error updating container capacity:",e),{success:!1,error:e}}},Id=async(n,e)=>{try{const s=[...h.partTypeStandards.Housing.defectTypes[n]||[],e],i={};return i[`defectTypes/${n}`]=s,await bt("partTypeStandards/Housing",i),console.log("Defect type added:",n,e),{success:!0}}catch(t){return console.error("Error adding defect type:",t),{success:!1,error:t}}},Cd=async(n,e)=>{try{const s=(h.partTypeStandards.Housing.defectTypes[n]||[]).filter((r,o)=>o!==e),i={};return i[`defectTypes/${n}`]=s,await bt("partTypeStandards/Housing",i),console.log("Defect type removed:",n,e),{success:!0}}catch(t){return console.error("Error removing defect type:",t),{success:!1,error:t}}},qt=()=>Object.values(h.tbkDatabase),Se=()=>Object.values(h.inspectionDatabase);let J="";function wd(n){J.length<10&&(J+=n,Is(),"vibrate"in navigator&&navigator.vibrate(50))}function Ed(){J.length>0&&(J=J.slice(0,-1),Is(),"vibrate"in navigator&&navigator.vibrate(50))}function Is(){const n=document.getElementById("loginDisplay"),e=document.getElementById("loginValue");if(e)if(J.length===0)e.innerHTML="-",e.classList.add("empty"),n.classList.remove("active");else{let t="";for(let s=0;s<J.length;s++)t+=`<span class="digit">${J[s]}</span>`;e.innerHTML=t,e.classList.remove("empty"),n.classList.add("active")}}const Sd={de:{loginTitle:"Qualitätsprüfung",personnelPlaceholder:"Personalnummer",loginBtn:"Anmelden",serie:"Serie",sonderfall:"Sonderfall",sicht:"Sicht",sonstiges:"Sonstiges",lehre:"Lehre",mass:"Maß",scanComplete:"Scan abgeschlossen",containerNumber:"Behälternummer eingeben",confirm:"Bestätigen",quantity:"Teileanzahl",fullContainer:"Voller Behälter",manual:"Manuell eingeben",articleNumber:"Artikelnummer",totalQuantity:"Gesamtmenge",defectCount:"Ausschuss",inspector:"Prüfer",inspectionComplete:"Prüfung abgeschlossen",resetInspection:"Prüfung zurücksetzen",nextInspection:"Nächste Prüfung",pauseTitle:"ABWESEND",returnBtn:"Wieder anwesend",featureNotAvailable:"Feature nicht verfügbar",featureInProgress:"Feature in Arbeit",active:"Aktiv",finished:"Fertig"},pl:{loginTitle:"Kontrola Jakości",personnelPlaceholder:"Numer personelu",loginBtn:"Zaloguj się",serie:"Seria",sonderfall:"Przypadek specjalny",sicht:"Wzrok",sonstiges:"Inne",lehre:"Szablon",mass:"Wymiar",scanComplete:"Skanowanie zakończone",containerNumber:"Wprowadź numer kontenera",confirm:"Potwierdź",quantity:"Ilość części",fullContainer:"Pełny kontener (200 części)",manual:"Wprowadź ręcznie",articleNumber:"Numer artykułu",totalQuantity:"Całkowita ilość",defectCount:"Złom",inspector:"Inspektor",inspectionComplete:"Kontrola zakończona",resetInspection:"Resetuj kontrolę",nextInspection:"Następna kontrola",pauseTitle:"NIEOBECNY",returnBtn:"Z powrotem",featureNotAvailable:"Funkcja niedostępna",featureInProgress:"Funkcja w toku",active:"Aktywny",finished:"Zakończone"}};function w(n){return Sd[h.language][n]||n}function Td(){if(J.length>0)"vibrate"in navigator&&navigator.vibrate(200),h.personnelNumber=J,h.userName="P-"+h.personnelNumber,document.getElementById("userName").textContent=h.userName,document.getElementById("loginScreen").classList.add("hidden"),document.getElementById("mainApp").classList.remove("hidden"),Ve();else{const n=document.getElementById("loginDisplay");n.style.animation="none",setTimeout(()=>{n.style.animation="shake 0.5s"},10)}}function Nd(){h.language=h.language==="de"?"pl":"de";const n=document.getElementById("languageBtn");n.textContent=h.language==="de"?"🇩🇪":"🇵🇱",Dd()}function Dd(){document.getElementById("loginTitle").textContent=w("loginTitle");const n=document.querySelector("#loginScreen .number-input-label");n&&(n.textContent=w("personnelPlaceholder")),document.getElementById("pauseTitle").textContent=w("pauseTitle"),document.getElementById("returnBtn").textContent=w("returnBtn");const e=h.currentScreen;e==="main"?Ve():e==="serie"&&Fe()}function kd(){h.isPaused=!h.isPaused;const n=document.getElementById("pauseScreen");h.isPaused?(h.pauseStart=new Date,n.classList.remove("hidden"),eo()):(n.classList.add("hidden"),h.pauseStart=null)}function eo(){if(!h.isPaused)return;const e=new Date-h.pauseStart,t=Math.floor(e/36e5),s=Math.floor(e%36e5/6e4),i=Math.floor(e%6e4/1e3);document.getElementById("pauseTime").textContent=`seit ${String(t).padStart(2,"0")}:${String(s).padStart(2,"0")}:${String(i).padStart(2,"0")}`,setTimeout(eo,1e3)}function to(){h.history.length>0&&h.history.pop()()}function Ue(n){h.history.push(n)}function xd(){window.open("https://toxic-pisces.github.io/haering/testt.html","_blank")}function Ve(){h.currentScreen="main",h.history=[];const n=document.getElementById("contentArea");n.innerHTML=`
        <div class="content-grid grid-2">
            <button class="big-btn animate-scale stagger-1" onclick="showSerieMenu()">${w("serie")}</button>
            <button class="big-btn animate-scale stagger-2" onclick="showFeatureNotAvailable()">${w("sonderfall")}</button>
        </div>
    `}function Fe(){Ue(Ve),h.currentScreen="serie";const n=document.getElementById("contentArea");n.innerHTML=`
        <div class="content-grid grid-4">
            <button class="big-btn animate-scale stagger-1" onclick="startInspection('sicht')">${w("sicht")}</button>
            <button class="big-btn animate-scale stagger-2" onclick="showFeatureInProgress()">${w("sonstiges")}</button>
            <button class="big-btn animate-scale stagger-3" onclick="startInspection('lehre')">${w("lehre")}</button>
            <button class="big-btn animate-scale stagger-4" onclick="startInspection('mass')">${w("mass")}</button>
        </div>
    `}function Ad(n){Ue(Fe),h.currentInspection.inspectionType=n,no()}function Rd(n,e,t){const s=It(n,e);if(!s)return null;const i=h.partTypeStandards.Housing.inspectionSequence;if(!i||i.length===0)return null;const r={lehre:"L",mass:"M",sicht:"S"},o={L:"Lehre",M:"Maß",S:"Sicht"},a=Se().filter(l=>l.batchNummer===s);let c=-1;for(let l=0;l<i.length;l++)if(i[l].includes(t)){c=l;break}if(c===-1)return`${o[r[t]]}-Prüfung ist in den Standards nicht aktiviert.`;for(let l=0;l<c;l++){const d=i[l];for(const u of d){const f=r[u];if(!a.some(g=>g.inspektion===f)){const g=o[r[t]],y=o[f];return`${g}-Prüfung kann erst nach ${y}-Prüfung durchgeführt werden.`}}}return null}async function Pd(n,e,t){const s=It(n,e);if(!s)return null;h.partTypeStandards.Housing.containerCapacity;const i={lehre:"L",mass:"M",sicht:"S"},r={L:"Lehre",M:"Maß",S:"Sicht"},o=i[t],a=Md(s,t);console.log("🔍 Fetching fresh inspection data from Firebase..."),await new Promise(g=>setTimeout(g,100));const c=Se();console.log("📊 Total inspections in database:",c.length);const l=c.filter(g=>g.batchNummer===s&&g.inspektion===o);if(console.log(`📊 Inspections of type ${o} for batch ${s}:`,l.length),l.length===0)return console.log("✅ First inspection for this type - allowing"),h.currentInspection.remainingCapacity=a,h.currentInspection.actualPartsInContainer=a,null;const d=l.filter(g=>g.ende&&g.ende!==null&&g.ende!==void 0),u=l.find(g=>!g.ende||g.ende===null||g.ende===void 0);if(console.log("✔️ Completed inspections:",d.length),console.log("⏳ Active inspections:",u?"YES":"NO"),l.forEach((g,y)=>{console.log(`  Inspection ${y+1}:`,{pruefungsNummer:g.pruefungsNummer,total:g.total,ende:g.ende,endeType:typeof g.ende,isComplete:!!(g.ende&&g.ende!==null),isActive:!g.ende||g.ende===null})}),u)return console.log("✅ Active inspection found - bypassing capacity check, allowing join"),console.log("📋 Active inspection details:",{pruefungsNummer:u.pruefungsNummer,pruefer:u.pruefer,total:u.total,ende:u.ende}),h.currentInspection.remainingCapacity=a,h.currentInspection.actualPartsInContainer=a,null;if(d.length===0)return console.log("✅ No completed inspections - allowing"),h.currentInspection.remainingCapacity=a,h.currentInspection.actualPartsInContainer=a,null;const f=d.reduce((g,y)=>g+y.total,0);console.log(`📊 Total inspected (completed only): ${f}/${a}`);const p=a-f;if(p<=0){const g=r[o];return console.log("❌ Container full - blocking"),`Dieser Behälter ist für ${g}-Prüfung bereits voll (${a}/${a} Teile geprüft).`}return console.log(`✅ Remaining capacity: ${p} parts`),h.currentInspection.remainingCapacity=p,h.currentInspection.actualPartsInContainer=a,null}function Md(n,e){const t=h.partTypeStandards.Housing.containerCapacity,s=h.partTypeStandards.Housing.inspectionSequence,i={lehre:"L",mass:"M",sicht:"S"};let r=-1;for(let a=0;a<s.length;a++)if(s[a].includes(e)){r=a;break}if(r===-1)return t;let o=0;for(let a=0;a<r;a++){const c=s[a];for(const l of c){const d=i[l],f=Se().filter(p=>p.batchNummer===n&&p.inspektion===d&&p.nio!==null).reduce((p,g)=>p+g.nio,0);o+=f}}return t-o}function no(){lo()}function ln(){Ue(no);const n=document.getElementById("contentArea");n.innerHTML=`
        <div class="data-confirmation animate-scale">
            <h2 class="animate-slide-up">Teilebegleitkarte gescannt</h2>
            <div class="data-row animate-slide-right stagger-1">
                <span class="data-label">TBK Nummer:</span>
                <span class="data-value">${h.currentInspection.articleNumber}</span>
            </div>
            <div class="data-row animate-slide-right stagger-2">
                <span class="data-label">Artikel:</span>
                <span class="data-value">Housing</span>
            </div>
            <div class="data-row animate-slide-right stagger-3">
                <span class="data-label">TZ:</span>
                <span class="data-value">${h.currentInspection.tz}</span>
            </div>
            <button class="btn-primary animate-slide-up stagger-4" onclick="showContainerNumberInput()">${w("confirm")}</button>
        </div>
    `}let $="";function Od(){Ue(ln),$="";const n=document.getElementById("contentArea");n.innerHTML=`
        <div style="display: flex; align-items: center; justify-content: center; height: 100%; padding: 20px;">
            <div style="max-width: 500px; width: 100%;">
                <h2 style="text-align: center; margin-bottom: 25px; color: #1a202c; font-size: 24px;">Behälternummer eingeben</h2>

                <div class="number-input-display" id="containerDisplay">
                    <div class="number-input-label">6-stellige Behälternummer</div>
                    <div class="number-input-value empty" id="containerValue">------</div>
                </div>

                <div class="numpad">
                    <button class="numpad-btn" onclick="addContainerDigit('1')">1</button>
                    <button class="numpad-btn" onclick="addContainerDigit('2')">2</button>
                    <button class="numpad-btn" onclick="addContainerDigit('3')">3</button>
                    <button class="numpad-btn" onclick="addContainerDigit('4')">4</button>
                    <button class="numpad-btn" onclick="addContainerDigit('5')">5</button>
                    <button class="numpad-btn" onclick="addContainerDigit('6')">6</button>
                    <button class="numpad-btn" onclick="addContainerDigit('7')">7</button>
                    <button class="numpad-btn" onclick="addContainerDigit('8')">8</button>
                    <button class="numpad-btn" onclick="addContainerDigit('9')">9</button>
                    <button class="numpad-btn special" onclick="clearContainerNumber()">⌫</button>
                    <button class="numpad-btn" onclick="addContainerDigit('0')">0</button>
                    <button class="numpad-btn" onclick="submitContainerNumber()" style="background: linear-gradient(135deg, #10b981, #059669); color: white; border: none;">✓</button>
                </div>
            </div>
        </div>
    `,Cs()}function Ld(n){$.length<6&&($+=n,Cs(),"vibrate"in navigator&&navigator.vibrate(50))}function Fd(){$.length>0&&($=$.slice(0,-1),Cs(),"vibrate"in navigator&&navigator.vibrate(50))}function Cs(){const n=document.getElementById("containerDisplay"),e=document.getElementById("containerValue");if(e)if($.length===0)e.innerHTML="------",e.classList.add("empty"),n.classList.remove("active");else{let t="";for(let s=0;s<6;s++)s<$.length?t+=`<span class="digit">${$[s]}</span>`:t+="-";e.innerHTML=t,e.classList.remove("empty"),n.classList.add("active")}}async function Bd(){if($.length===6){h.currentInspection.containerNumber=$,await oh(h.currentInspection.articleNumber,$);const n=Rd(h.currentInspection.articleNumber,$,h.currentInspection.inspectionType);if(n){re({title:"Reihenfolge nicht eingehalten",content:`<p>${n}</p>`,buttons:[{text:"Zurück zum Menü",action:()=>{G(),Fe()}}]});return}const e=await Pd(h.currentInspection.articleNumber,$,h.currentInspection.inspectionType);if(e){re({title:"Behälter voll",content:`<p>${e}</p>`,buttons:[{text:"Zurück zum Menü",action:()=>{G(),Fe()}}]});return}"vibrate"in navigator&&navigator.vibrate(200);const t=await so();t?await ws(t.total):un()}else{const n=document.getElementById("containerDisplay");n.style.animation="none",setTimeout(()=>{n.style.animation="shake 0.5s"},10)}}function un(){Ue(ln);const n=document.getElementById("contentArea"),e=h.currentInspection.actualPartsInContainer||h.partTypeStandards.Housing.containerCapacity,t=h.currentInspection.remainingCapacity||e;h.partTypeStandards.Housing.containerCapacity;let s="";t>=e?s=`<button class="big-btn animate-scale stagger-1" onclick="setQuantity(${e})">${w("fullContainer")} (${e} Stk.)</button>`:t>0&&(s=`<button class="big-btn animate-scale stagger-1" onclick="setQuantity(${t})">Restkapazität (${t} Stk.)</button>`),n.innerHTML=`
        <div class="content-grid grid-2">
            ${s}
            <button class="big-btn animate-scale stagger-2" onclick="showManualQuantity()">${w("manual")}</button>
        </div>
    `}async function ws(n){try{console.log("🔵 setQuantity called with qty:",n),h.currentInspection.quantity=n,h.currentInspection.defects={},h.currentInspection.totalDefects=0,console.log("🔵 Checking for active inspection...");const e=await so();console.log("🔵 Active inspection found:",e?"YES":"NO"),e?(console.log("🔵 Joining active inspection..."),await $d(e)):(console.log("🔵 Creating new inspection entry..."),await Hd(),Gt("🎯 Prüfung gestartet",`Du prüfst ${n} Teile`,"success")),console.log("🔵 Showing inspection interface..."),oo()}catch(e){console.error("❌ Error in setQuantity:",e),alert("Fehler beim Starten der Prüfung: "+e.message)}}async function so(){const n=It(h.currentInspection.articleNumber,h.currentInspection.containerNumber);if(!n)return console.log("🔍 checkForActiveInspection: No batch number found"),null;const e=h.currentInspection.inspectionType==="mass"?"M":h.currentInspection.inspectionType==="sicht"?"S":"L";console.log("🔍 checkForActiveInspection: Looking for batch",n,"type",e);const t=Se();console.log("🔍 checkForActiveInspection: Total inspections in DB:",t.length);const s=t.find(i=>{const r=i.batchNummer===n&&(!i.ende||i.ende===null||i.ende===void 0)&&i.inspektion===e;return i.batchNummer===n&&i.inspektion===e&&console.log("🔍 Found matching inspection:",{batch:i.batchNummer,type:i.inspektion,ende:i.ende,isActive:!i.ende,matches:r}),r});return console.log("🔍 checkForActiveInspection result:",s?"FOUND":"NOT FOUND"),s||null}async function $d(n){console.log("🔵 Joining active inspection:",n),h.currentInspection.quantity=n.total,h.currentInspection.defects=n.defects||{},h.currentInspection.totalDefects=n.nio||0;const e=`${n.batchNummer}-${n.pruefungsNummer}`;h.currentInspection.inspectionDbId=e;const t=n.activeInspectors||[n.pruefer];if(t.includes(h.personnelNumber))console.log(`ℹ️ Prüfer ${h.personnelNumber} already in this inspection`);else{t.push(h.personnelNumber);const s=Math.floor(n.total/t.length);await bs(e,{activeInspectors:t});const i=t.filter(r=>r!==h.personnelNumber);Gt("� Prüfung beigetreten",`Du prüfst mit ${i.length} ${i.length===1?"Prüfer":"Prüfern"} zusammen • Je ${s} Teile`,"success",5e3),console.log(`✅ Prüfer ${h.personnelNumber} joined inspection ${e}`)}io(e)}function io(n){et(`inspectionDatabase/${n}`,e=>{if(e){if(e.defects&&(h.currentInspection.defects=e.defects),e.nio!==null&&e.nio!==void 0&&(h.currentInspection.totalDefects=e.nio),e.total!==null&&e.total!==void 0&&(h.currentInspection.quantity=e.total),co(),ro(e.activeInspectors||[]),e.activeInspectors&&e.activeInspectors.length>1){const t=e.activeInspectors.filter(s=>s!==h.personnelNumber);t.length>0&&!h.notifiedInspectors&&(h.notifiedInspectors=[]),t.forEach(s=>{if(!h.notifiedInspectors.includes(s)){h.notifiedInspectors.push(s);const i=Math.floor(e.total/e.activeInspectors.length);Gt("👥 Neuer Prüfer",`Prüfer ${s} arbeitet jetzt mit • Je ${i} Teile`,"info",4e3)}})}e.ende&&!h.inspectionCompletedNotified&&(h.inspectionCompletedNotified=!0,e.ende&&h.currentInspection.inspectionDbId===n&&Gt("✅ Prüfung abgeschlossen",`IO: ${e.io||0} • NIO: ${e.nio||0}`,"success",5e3))}})}function ro(n){console.log("🔄 updateActiveInspectorsDisplay called with:",n);const e=document.getElementById("activeInspectorsDisplay");if(!e){console.log("⚠️ activeInspectorsDisplay element not found in DOM");return}const t=n.filter(s=>s!==h.personnelNumber);if(console.log("📊 Current user:",h.personnelNumber,"Others:",t),n.length===1){console.log("✅ Showing: Only you"),e.innerHTML='<span style="color: #94a3b8; font-size: 18px;">Nur du</span>';const s=document.getElementById("totalQuantityDisplay");s&&(s.textContent=h.currentInspection.quantity)}else{const s=Math.floor(h.currentInspection.quantity/n.length);console.log("✅ Showing:",n.length,"inspectors, each gets",s,"parts"),e.innerHTML=`
            <span class="status-indicator status-active"></span>
            <span style="display: flex; flex-direction: column; align-items: flex-start;">
                <span style="font-size: 18px;">${n.length} Prüfer (je ${s} Teile)</span>
                <span style="font-size: 14px; color: #64748b;">${n.map(r=>`P-${r}`).join(", ")}</span>
            </span>
        `;const i=document.getElementById("totalQuantityDisplay");i&&(i.innerHTML=`<span style="font-size: 24px;">${s}</span><span style="font-size: 14px; color: #64748b; margin-left: 5px;">/ ${h.currentInspection.quantity}</span>`)}}async function Hd(){const n=It(h.currentInspection.articleNumber,h.currentInspection.containerNumber);if(!n){console.error("Batch not found in database");return}const t=Se().filter(o=>o.batchNummer===n).length+1;let s="L";h.currentInspection.inspectionType==="mass"?s="M":h.currentInspection.inspectionType==="sicht"&&(s="S");const i=`${n}-${t}`,r={pruefungsNummer:t,batchNummer:n,inspektion:s,total:h.currentInspection.quantity,io:null,nio:null,defects:{},pruefer:h.personnelNumber,activeInspectors:[h.personnelNumber],start:new Date().toLocaleString("de-DE",{day:"2-digit",month:"2-digit",year:"numeric",hour:"2-digit",minute:"2-digit",second:"2-digit"}),ende:null};await yd(i,r),h.currentInspection.inspectionDbId=i,console.log("✅ Inspection entry created:",i),io(i)}async function Wd(){if(h.currentInspection.inspectionDbId===null)return;const n=h.currentInspection.totalDefects,t={io:h.currentInspection.quantity-n,nio:n,ende:new Date().toLocaleString("de-DE",{day:"2-digit",month:"2-digit",year:"numeric",hour:"2-digit",minute:"2-digit",second:"2-digit"})};await bs(h.currentInspection.inspectionDbId,t)}async function zd(){if(h.currentInspection.inspectionDbId===null)return;const{deleteData:n}=await yo(async()=>{const{deleteData:e}=await Promise.resolve().then(()=>pd);return{deleteData:e}},void 0);await n(`inspectionDatabase/${h.currentInspection.inspectionDbId}`),h.currentInspection.inspectionDbId=null}let X="";function Ud(){X="";const n=h.currentInspection.remainingCapacity||h.partTypeStandards.Housing.containerCapacity,e=h.partTypeStandards.Housing.containerCapacity,t=n<e;let s="";t&&(s=`<p style="text-align: center; color: #f59e0b; font-size: 14px; margin-top: -10px; margin-bottom: 15px;">⚠️ Verbleibende Kapazität: ${n} Teile</p>`);const i=document.getElementById("contentArea");i.innerHTML=`
        <div style="display: flex; align-items: center; justify-content: center; height: 100%; padding: 20px;">
            <div style="max-width: 500px; width: 100%;">
                <h2 style="text-align: center; margin-bottom: 25px; color: #1a202c; font-size: 24px;">${w("quantity")}</h2>
                ${s}

                <div class="number-input-display" id="quantityDisplay">
                    <div class="number-input-label">Anzahl Teile (max. ${n})</div>
                    <div class="number-input-value empty" id="quantityValue">0</div>
                </div>

                <div class="numpad">
                    <button class="numpad-btn" onclick="addQuantityDigit('1')">1</button>
                    <button class="numpad-btn" onclick="addQuantityDigit('2')">2</button>
                    <button class="numpad-btn" onclick="addQuantityDigit('3')">3</button>
                    <button class="numpad-btn" onclick="addQuantityDigit('4')">4</button>
                    <button class="numpad-btn" onclick="addQuantityDigit('5')">5</button>
                    <button class="numpad-btn" onclick="addQuantityDigit('6')">6</button>
                    <button class="numpad-btn" onclick="addQuantityDigit('7')">7</button>
                    <button class="numpad-btn" onclick="addQuantityDigit('8')">8</button>
                    <button class="numpad-btn" onclick="addQuantityDigit('9')">9</button>
                    <button class="numpad-btn special" onclick="clearQuantityNumber()">⌫</button>
                    <button class="numpad-btn" onclick="addQuantityDigit('0')">0</button>
                    <button class="numpad-btn" onclick="submitManualQuantity()" style="background: linear-gradient(135deg, #10b981, #059669); color: white; border: none;">✓</button>
                </div>
            </div>
        </div>
    `,Es()}function Vd(n){X.length<3&&(X+=n,Es(),"vibrate"in navigator&&navigator.vibrate(50))}function qd(){X.length>0&&(X=X.slice(0,-1),Es(),"vibrate"in navigator&&navigator.vibrate(50))}function Es(){const n=document.getElementById("quantityDisplay"),e=document.getElementById("quantityValue");if(e)if(X.length===0)e.innerHTML="0",e.classList.add("empty"),n.classList.remove("active");else{let t="";for(let s=0;s<X.length;s++)t+=`<span class="digit">${X[s]}</span>`;e.innerHTML=t,e.classList.remove("empty"),n.classList.add("active")}}function Gd(){const n=parseInt(X),e=h.currentInspection.remainingCapacity||h.partTypeStandards.Housing.containerCapacity;if(n>0&&n<=e)"vibrate"in navigator&&navigator.vibrate(200),ws(n);else if(X.length===0)to();else if(n>e)re({title:"Kapazität überschritten",content:`<p>Die eingegebene Menge (${n} Teile) überschreitet die verbleibende Kapazität dieses Behälters (${e} Teile).</p>`,buttons:[{text:"OK",action:G}]});else{const t=document.getElementById("quantityDisplay");t.style.animation="none",setTimeout(()=>{t.style.animation="shake 0.5s"},10)}}function oo(){Ue(un);const n=h.currentInspection.inspectionType,e=jd();h.currentInspection.otherInspectors=e;let t="",s="Aktive Prüfer";h.currentInspection.inspectionDbId?(vd(h.currentInspection.inspectionDbId).then(c=>{console.log("📊 Loading active inspectors from inspection:",c),c&&c.activeInspectors?(console.log("📊 Active inspectors found:",c.activeInspectors),setTimeout(()=>{ro(c.activeInspectors)},100)):console.log("📊 No active inspectors data found")}).catch(c=>{console.error("❌ Error loading inspection:",c)}),t='<span style="color: #94a3b8; font-size: 18px;">Lädt...</span>'):t='<span style="color: #94a3b8; font-size: 18px;">Nur du</span>';let i="",r="";if(e.length===0)i="Vorherige Prüfer",r='<span style="color: #94a3b8; font-size: 18px;">Keine</span>';else if(e.length===1){const c=e[0];i=w("inspector")+` (${c.typeLabel})`,r=`
            <span class="status-indicator ${c.status==="active"?"status-active":"status-finished"}"></span>
            ${c.typeLabel} - Prüf. ${c.pruefungsNummer}
        `}else i="Vorherige Prüfer",r=`
            <span class="status-indicator ${e.some(d=>d.status==="active")?"status-active":"status-finished"}"></span>
            ${e.length} Prüfer
        `;const o=h.partTypeStandards.Housing.defectTypes[n],a=document.getElementById("contentArea");a.innerHTML=`
        <div class="inspection-container">
            <div class="info-row" style="grid-template-columns: repeat(5, 1fr);">
                <div class="info-card animate-slide-up stagger-1">
                    <h3>Artikel</h3>
                    <p>Housing</p>
                </div>
                <div class="info-card animate-slide-up stagger-2">
                    <h3>${w("totalQuantity")}</h3>
                    <p id="totalQuantityDisplay">${h.currentInspection.quantity}</p>
                </div>
                <div class="info-card animate-slide-up stagger-3">
                    <h3>${w("defectCount")}</h3>
                    <p id="totalDefects">0</p>
                </div>
                <div class="info-card animate-slide-up stagger-4">
                    <h3>${s}</h3>
                    <p class="inspector-status" id="activeInspectorsDisplay">
                        ${t}
                    </p>
                </div>
                <div class="info-card animate-slide-up stagger-5" style="cursor: ${e.length>0?"pointer":"default"};" ${e.length>0?'onclick="showInspectorModal()"':""}>
                    <h3>${i}</h3>
                    <p class="inspector-status">
                        ${r}
                    </p>
                </div>
            </div>

            <div class="defect-grid">
                ${o.map((c,l)=>`
                    <button class="defect-btn animate-scale stagger-${l%4+1}"
                            onclick="registerDefect('${c}', event)">
                        <span class="defect-counter" id="counter-${l}">0</span>
                        <h3>${c}</h3>
                    </button>
                `).join("")}
            </div>

            <div class="action-row">
                <button class="action-btn btn-complete animate-slide-up stagger-2" onclick="completeInspection()">${w("inspectionComplete")}</button>
                <button class="action-btn btn-reset animate-slide-up stagger-3" onclick="resetInspection()">${w("resetInspection")}</button>
                <button class="action-btn btn-next animate-slide-up stagger-4" onclick="nextInspection()">${w("nextInspection")}</button>
            </div>
        </div>
    `}function jd(){const n=It(h.currentInspection.articleNumber,h.currentInspection.containerNumber);if(!n)return[];const e=h.partTypeStandards.Housing.inspectionSequence,t={lehre:"L",mass:"M",sicht:"S"},s={L:"Lehre",M:"Maß",S:"Sicht"},i=h.currentInspection.inspectionType;let r=-1;for(let d=0;d<e.length;d++)if(e[d].includes(i)){r=d;break}if(r===-1)return[];const o=[],a={},c=["👨‍🔧","👩‍🔧","👨‍💼","👩‍💼","🧑‍🔧"];let l=0;for(let d=0;d<r;d++){const u=e[d];for(const f of u){const p=t[f];Se().filter(y=>y.batchNummer===n&&y.inspektion===p).forEach(y=>{const x=y.pruefer;a[x]||(a[x]=c[l%c.length],l++);const ce=y.ende?"finished":"active";o.push({name:`P-${x}`,avatar:a[x],status:ce,type:f,typeLabel:s[p],pruefungsNummer:y.pruefungsNummer})})}}return o}function Qd(){const n=h.currentInspection.otherInspectors||[];if(n.length===0)return;const e=n.map(i=>`<div class="inspector-avatar-large">${i.avatar}</div>`).join(""),t=n.map(i=>`
        <div class="inspector-info-item animate-slide-up">
            <h4>Prüfer</h4>
            <p>${i.name}</p>
        </div>
        <div class="inspector-info-item animate-slide-up">
            <h4>Prüfung</h4>
            <p>${i.typeLabel} - Prüf. ${i.pruefungsNummer}</p>
        </div>
        <div class="inspector-info-item animate-slide-up">
            <h4>Status</h4>
            <p>
                <span class="inspector-status-badge ${i.status}">
                    <span class="status-dot"></span>
                    ${i.status==="active"?w("active"):w("finished")}
                </span>
            </p>
        </div>
    `).join(""),s=document.createElement("div");s.className="modal",s.id="inspectorModal",s.onclick=i=>{i.target===s&&ao()},s.innerHTML=`
        <div class="inspector-modal">
            <div class="inspector-header">
                <div class="inspector-avatars">
                    ${e}
                </div>
                <h2>Bisherige Prüfungen</h2>
                <p>TBK ${h.currentInspection.articleNumber} • Artikel Housing</p>
            </div>
            <div class="inspector-body">
                <div class="inspector-info-grid">
                    ${t}
                </div>
                <button class="btn-primary" onclick="closeInspectorModal()">Schließen</button>
            </div>
        </div>
    `,document.body.appendChild(s)}function ao(){const n=document.getElementById("inspectorModal");n&&n.remove()}async function Kd(n,e){const t=e.currentTarget;t.classList.contains("clicked")||(t.classList.add("clicked"),h.currentInspection.defects[n]||(h.currentInspection.defects[n]=0),h.currentInspection.defects[n]++,h.currentInspection.totalDefects++,co(),h.currentInspection.inspectionDbId&&await bs(h.currentInspection.inspectionDbId,{defects:h.currentInspection.defects,nio:h.currentInspection.totalDefects}),setTimeout(()=>{t.classList.remove("clicked")},250))}function co(){h.partTypeStandards.Housing.defectTypes[h.currentInspection.inspectionType].forEach((s,i)=>{const r=document.getElementById(`counter-${i}`);if(r){const o=parseInt(r.textContent),a=h.currentInspection.defects[s]||0;a!==o&&(r.style.animation="none",setTimeout(()=>{r.style.animation="countPulse 0.4s ease-out",r.textContent=a},10))}});const e=document.getElementById("totalDefects"),t=parseInt(e.textContent);h.currentInspection.totalDefects!==t&&(e.style.animation="none",setTimeout(()=>{e.style.animation="countPulse 0.4s ease-out",e.textContent=h.currentInspection.totalDefects},10))}async function Yd(){const n=h.currentInspection.quantity-h.currentInspection.totalDefects,e=h.currentInspection.totalDefects;await Wd(),re({title:w("inspectionComplete"),content:`
            <p><strong>Gut:</strong> ${n} Teile</p>
            <p><strong>Schlecht:</strong> ${e} Teile</p>
            <p style="margin-top: 20px;">Ergebnisse werden gespeichert...</p>
        `,buttons:[{text:w("confirm"),action:()=>{G(),Ve()}}]})}function Xd(){re({title:"Warnung",content:"<p>Möchten Sie die aktuelle Prüfung wirklich zurücksetzen? Alle Daten gehen verloren.</p>",buttons:[{text:"Abbrechen",action:G},{text:"Zurücksetzen",action:async()=>{await zd(),G(),Ve()}}]})}function Jd(){const n=h.currentInspection.quantity-h.currentInspection.totalDefects,e=h.currentInspection.totalDefects;re({title:w("nextInspection"),content:`
            <p><strong>Gut:</strong> ${n} Teile</p>
            <p><strong>Schlecht:</strong> ${e} Teile</p>
            <p style="margin-top: 20px; color: #27ae60;">✓ Ergebnisse gespeichert</p>
            <p style="margin-top: 20px;">Was möchten Sie als nächstes tun?</p>
        `,buttons:[{text:"Neue Teilebegleitkarte",action:()=>{G(),Fe()}},{text:"Neuer Behälter",action:()=>{G(),un()}}]})}function re(n){const e=document.createElement("div");e.className="modal",e.id="activeModal";const t=n.buttons.map((s,i)=>`<button class="btn-secondary" onclick="executeModalAction(${i})">${s.text}</button>`).join("");e.innerHTML=`
        <div class="modal-content">
            <h2>${n.title}</h2>
            ${n.content}
            <div class="modal-buttons">
                ${t}
            </div>
        </div>
    `,document.body.appendChild(e),window.currentModalActions=n.buttons.map(s=>s.action)}function Zd(n){window.currentModalActions&&window.currentModalActions[n]&&window.currentModalActions[n]()}function G(){const n=document.getElementById("activeModal");n&&n.remove()}function eh(){re({title:w("featureNotAvailable"),content:"<p>Diese Funktion ist derzeit nicht verfügbar.</p>",buttons:[{text:"OK",action:G}]})}function th(){re({title:w("featureInProgress"),content:"<p>Diese Funktion ist aktuell in Entwicklung.</p>",buttons:[{text:"OK",action:G}]})}function Gt(n,e,t="info",s=4e3){const i=document.createElement("div"),r={success:"linear-gradient(135deg, #10b981, #059669)",info:"linear-gradient(135deg, #3b82f6, #2563eb)",warning:"linear-gradient(135deg, #f59e0b, #d97706)",error:"linear-gradient(135deg, #ef4444, #dc2626)"};i.style.cssText=`
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${r[t]||r.info};
        color: white;
        padding: 20px 30px;
        border-radius: 12px;
        box-shadow: 0 10px 40px rgba(0, 0, 0, 0.3);
        z-index: 3000;
        font-size: 16px;
        font-weight: 600;
        animation: slideInRight 0.4s ease-out;
        max-width: 400px;
    `,i.innerHTML=`
        <div style="font-size: 18px; margin-bottom: 5px;">${n}</div>
        <div style="font-size: 14px; font-weight: 400; opacity: 0.95;">${e}</div>
    `,document.body.appendChild(i),setTimeout(()=>{i.style.animation="fadeOut 0.3s ease-out",setTimeout(()=>i.remove(),300)},s)}let V=null,jt=!1;function lo(){jt=!1;const n=document.createElement("div");n.className="modal",n.id="scannerModal",n.onclick=e=>{e.target===n&&fo()},n.innerHTML=`
        <div class="scanner-modal">
            <div class="scanner-header">
                <h2>Barcode Scanner</h2>
                <button class="scanner-close-btn" onclick="closeBarcodeScanner()">×</button>
            </div>
            <div class="scanner-body">
                <div id="reader"></div>
                <div class="scanner-status" id="scannerStatus">
                    <p class="scanner-status-text">Richte die Kamera auf einen Barcode...</p>
                </div>
                <div class="scanner-fallback">
                    <p class="scanner-fallback-text">oder gib den Code manuell ein:</p>
                    <input
                        type="text"
                        id="manualBarcodeInput"
                        placeholder="Barcode eingeben"
                        onkeypress="if(event.key === 'Enter') submitManualBarcode()"
                    />
                </div>
            </div>
        </div>
    `,document.body.appendChild(n),nh()}function nh(){const n={fps:20,qrbox:{width:400,height:150},formatsToSupport:[Html5QrcodeSupportedFormats.QR_CODE,Html5QrcodeSupportedFormats.EAN_13,Html5QrcodeSupportedFormats.EAN_8,Html5QrcodeSupportedFormats.CODE_128,Html5QrcodeSupportedFormats.CODE_39,Html5QrcodeSupportedFormats.UPC_A,Html5QrcodeSupportedFormats.UPC_E],rememberLastUsedCamera:!0,aspectRatio:1.777778};V=new Html5Qrcode("reader"),V.start({facingMode:"environment"},n,sh,ih).catch(e=>{console.error("Camera start error:",e);const t=document.getElementById("scannerStatus");t&&(t.className="scanner-status error",t.innerHTML=`
                <p class="scanner-status-text">⚠️ Kamera-Zugriff verweigert oder nicht verfügbar</p>
                <p style="font-size: 13px; margin-top: 10px; font-weight: normal;">Bitte verwende die manuelle Eingabe unten.</p>
            `),setTimeout(()=>{const s=document.getElementById("manualBarcodeInput");s&&s.focus()},300)})}function sh(n,e){if(jt)return;jt=!0,"vibrate"in navigator&&navigator.vibrate(200);const t=document.getElementById("scannerStatus");t&&(t.className="scanner-status success",t.innerHTML=`
            <p class="scanner-status-text">✓ Erfolgreich gescannt!</p>
            <div class="scanner-result">${n}</div>
        `),setTimeout(()=>{uo(n)},500)}function ih(n){}function rh(){const e=document.getElementById("manualBarcodeInput").value.trim();if(e.length>0){"vibrate"in navigator&&navigator.vibrate(200);const t=document.getElementById("scannerStatus");t&&(t.className="scanner-status success",t.innerHTML=`
                <p class="scanner-status-text">✓ Manuell eingegeben!</p>
                <div class="scanner-result">${e}</div>
            `),setTimeout(()=>{uo(e)},1e3)}}function uo(n){V&&V.stop().then(()=>{V.clear(),V=null}).catch(t=>{console.error("Error stopping scanner:",t),V=null});const e=document.getElementById("scannerModal");e&&e.remove(),h.currentInspection.articleNumber=n,h.currentInspection.tz=Math.floor(Math.random()*11),ln()}async function oh(n,e){if(!qt().some(s=>s.tbkNummer===n&&s.containerNumber===e)){const s=Math.floor(1e5+Math.random()*9e5).toString(),i=Math.floor(1e7+Math.random()*9e7).toString(),a={batchNummer:qt().length+1,tbkNummer:n,containerNumber:e,laufkarte:s,chargenr:i};await _d(a)}}function It(n,e){const t=qt().find(s=>s.tbkNummer===n&&s.containerNumber===e);return t?t.batchNummer:null}function ah(){const n=document.createElement("div");n.className="modal",n.id="databaseModal",n.onclick=r=>{r.target===n&&ho()};const e=qt();let t="";e.length===0?t=`
            <div class="database-empty">
                <div class="database-empty-icon">🗄️</div>
                <div class="database-empty-text">Keine TBK-Daten vorhanden</div>
                <div class="database-empty-subtext">Scanne eine TBK, um Einträge zu erstellen</div>
            </div>
        `:t=`
            <h3 style="margin-bottom: 20px; color: #1a202c; font-size: 20px;">TBK Datenbank</h3>
            <table class="database-table">
                <thead>
                    <tr>
                        <th>BatchNummer</th>
                        <th>TBK Nummer</th>
                        <th>Behälter</th>
                        <th>Laufkarte</th>
                        <th>ChargenNr</th>
                    </tr>
                </thead>
                <tbody>
                    ${e.map(o=>`
            <tr>
                <td>${o.batchNummer}</td>
                <td>${o.tbkNummer}</td>
                <td>${o.containerNumber}</td>
                <td>${o.laufkarte}</td>
                <td>${o.chargenr}</td>
            </tr>
        `).join("")}
                </tbody>
            </table>
        `;const s=Se();let i="";s.length===0?i=`
            <div class="database-empty" style="margin-top: 40px;">
                <div class="database-empty-icon">📋</div>
                <div class="database-empty-text">Keine Prüfungen vorhanden</div>
                <div class="database-empty-subtext">Führe eine Prüfung durch, um Einträge zu erstellen</div>
            </div>
        `:i=`
            <h3 style="margin: 40px 0 20px 0; color: #1a202c; font-size: 20px;">Prüfungsdatenbank</h3>
            <table class="database-table">
                <thead>
                    <tr>
                        <th>Prüfungs-Nr</th>
                        <th>Batch-Nr</th>
                        <th>Inspektion</th>
                        <th>Total</th>
                        <th>IO</th>
                        <th>NIO</th>
                        <th>Prüfer</th>
                        <th>Start</th>
                        <th>Ende</th>
                    </tr>
                </thead>
                <tbody>
                    ${s.map(o=>`
            <tr>
                <td>${o.pruefungsNummer}</td>
                <td>${o.batchNummer}</td>
                <td>${o.inspektion}</td>
                <td>${o.total}</td>
                <td>${o.io!==null?o.io:"-"}</td>
                <td>${o.nio!==null?o.nio:"-"}</td>
                <td>${o.pruefer}</td>
                <td>${o.start}</td>
                <td>${o.ende||"-"}</td>
            </tr>
        `).join("")}
                </tbody>
            </table>
        `,n.innerHTML=`
        <div class="database-modal">
            <div class="database-header">
                <h2>🗄️ Datenbanken</h2>
                <button class="database-close-btn" onclick="closeDatabase()">×</button>
            </div>
            <div class="database-body">
                ${t}
                ${i}
            </div>
        </div>
    `,document.body.appendChild(n)}function ho(){const n=document.getElementById("databaseModal");n&&n.remove()}function fo(){V&&V.stop().then(()=>{V.clear(),V=null}).catch(e=>{console.error("Error stopping scanner:",e),V=null});const n=document.getElementById("scannerModal");n&&n.remove(),jt=!1}function ch(){const n=h.partTypeStandards.Housing,e=(s,i)=>{const o=n.defectTypes[s].map((a,c)=>`
            <div class="defect-tag">
                ${a}
                <button class="defect-tag-remove" onclick="removeDefectType('${s}', ${c})">×</button>
            </div>
        `).join("");return`
            <div class="standards-section">
                <h3>Fehlermerkmale - ${i}</h3>
                <div class="defect-tags" id="defectTags-${s}">
                    ${o}
                </div>
                <input
                    type="text"
                    class="standards-input"
                    id="newDefectInput-${s}"
                    placeholder="Neues Fehlermerkmal für ${i} eingeben"
                    onkeypress="if(event.key === 'Enter') addDefectType('${s}')"
                />
                <button class="add-defect-btn" onclick="addDefectType('${s}')">+ Fehlermerkmal hinzufügen</button>
            </div>
        `},t=document.createElement("div");t.className="modal",t.id="standardsModal",t.onclick=s=>{s.target===t&&Ss()},t.innerHTML=`
        <div class="database-modal">
            <div class="database-header">
                <h2>⚙️ Standards - Housing</h2>
                <button class="database-close-btn" onclick="closeStandards()">×</button>
            </div>
            <div class="database-body">
                <div class="standards-section">
                    <h3>Behälterkapazität</h3>
                    <input
                        type="number"
                        class="standards-input"
                        id="containerCapacity"
                        value="${n.containerCapacity}"
                        placeholder="Anzahl Teile pro Behälter"
                        inputmode="numeric"
                    />
                </div>

                ${e("lehre","Lehre")}
                ${e("mass","Maß")}
                ${e("sicht","Sicht")}

                <div class="standards-section">
                    <h3>Inspektionsreihenfolge</h3>
                    <div class="sequence-builder" id="sequenceBuilder">
                        <div class="sequence-builder-title">🎯 Ziehe die Prüfungen in die Timeline (gleicher Schritt = parallel möglich)</div>
                        <div class="available-inspections" id="availableInspections"></div>
                        <div class="timeline" id="timeline"></div>
                    </div>
                </div>

                <button class="btn-primary" style="width: 100%; margin-top: 30px;" onclick="saveStandards()">
                    Speichern
                </button>
            </div>
        </div>
    `,document.body.appendChild(t),ht()}function ht(){const n=document.getElementById("availableInspections"),e=document.getElementById("timeline"),t=h.partTypeStandards.Housing.inspectionSequence,s=["lehre","mass","sicht"],i={lehre:"Lehre",mass:"Maß",sicht:"Sicht"},r={lehre:"📏",mass:"📐",sicht:"👁️"},o=new Set;t.forEach(d=>{d.forEach(u=>o.add(u))}),n.innerHTML='<div class="sequence-builder-subtitle">Verfügbare Prüfungen:</div>';let a="";o.size===3?a='<div style="text-align: center; color: #94a3b8; padding: 20px; font-style: italic;">Ziehe Prüfungen hierher, um sie zu deaktivieren</div>':s.forEach(d=>{o.has(d)||(a+=vi(d,i[d],r[d]))}),n.innerHTML+=`<div class="available-drop-zone" ondrop="handleDropToAvailable(event)" ondragover="handleDragOver(event)" ondragleave="handleDragLeave(event)">${a}</div>`,e.innerHTML='<div class="sequence-builder-subtitle">Timeline (nacheinander):</div>';const l=t.length>0?Math.min(t.length+1,3):1;for(let d=0;d<l;d++){const u=t[d]||[];let f="";u.length>0?f=u.map(p=>vi(p,i[p],r[p])).join(""):f='<div style="text-align: center; color: #94a3b8; padding: 10px; font-size: 13px;">Leer</div>',e.innerHTML+=`
            <div class="timeline-step" data-step="${d}" ondrop="handleDrop(event)" ondragover="handleDragOver(event)" ondragleave="handleDragLeave(event)">
                <div class="timeline-step-header">
                    <span class="timeline-step-number">${d+1}</span>
                    Schritt ${d+1}
                </div>
                <div class="timeline-drop-zone">
                    ${f}
                </div>
            </div>
        `}o.size===0&&(e.innerHTML+='<div style="text-align: center; color: #64748b; margin-top: 20px; font-style: italic;">Ziehe Prüfungen aus "Verfügbare Prüfungen" hierher</div>')}function vi(n,e,t){return`
        <div class="inspection-card ${n}" draggable="true" data-type="${n}"
             ondragstart="handleDragStart(event)" ondragend="handleDragEnd(event)"
             ontouchstart="handleTouchStart(event)" ontouchmove="handleTouchMove(event)" ontouchend="handleTouchEnd(event)">
            <span class="inspection-card-icon">${t}</span>
            <span class="inspection-card-label">${e}</span>
        </div>
    `}let q=null,H=null;function lh(n){q=n.target.closest(".inspection-card"),H=q.dataset.type,q.classList.add("dragging"),n.dataTransfer.effectAllowed="move",n.dataTransfer.setData("text/plain",H)}function uh(n){q&&q.classList.remove("dragging"),document.querySelectorAll(".timeline-step, .available-drop-zone").forEach(e=>{e.classList.remove("drag-over")})}function dh(n){n.preventDefault&&n.preventDefault();const e=n.target.closest(".timeline-step, .available-drop-zone");return e&&(document.querySelectorAll(".timeline-step, .available-drop-zone").forEach(t=>{t.classList.remove("drag-over")}),e.classList.add("drag-over")),n.dataTransfer.dropEffect="move",!1}function hh(n){const e=n.target.closest(".timeline-step");e&&!e.contains(n.relatedTarget)&&e.classList.remove("drag-over")}function fh(n){n.stopPropagation&&n.stopPropagation(),n.preventDefault&&n.preventDefault();const e=n.target.closest(".timeline-step");if(!e||!q||!H)return!1;const t=parseInt(e.dataset.step),s=q.closest(".available-drop-zone"),i=q.closest(".timeline-step");if(s)Qt(H,t);else if(i){const r=parseInt(i.dataset.step);r!==t&&(Kt(H,r),Qt(H,t))}return ht(),!1}function Qt(n,e){const t=h.partTypeStandards.Housing.inspectionSequence;for(;t.length<=e;)t.push([]);t[e].includes(n)||t[e].push(n)}function Kt(n,e){const t=h.partTypeStandards.Housing.inspectionSequence;if(t[e]){const s=t[e].indexOf(n);for(s>-1&&t[e].splice(s,1);t.length>0&&t[t.length-1].length===0;)t.pop()}}function ph(n){if(n.stopPropagation&&n.stopPropagation(),n.preventDefault&&n.preventDefault(),!q||!H)return!1;const e=q.closest(".timeline-step");if(e){const t=parseInt(e.dataset.step);Kt(H,t),ht()}return!1}let L=null,D=null;function gh(n){const e=n.touches[0];e.clientX,e.clientY,L=n.currentTarget.closest(".inspection-card"),q=L,H=L.dataset.type,n.preventDefault(),D=L.cloneNode(!0),D.style.position="fixed",D.style.pointerEvents="none",D.style.zIndex="10000",D.style.opacity="0.9",D.style.left=e.clientX-L.offsetWidth/2+"px",D.style.top=e.clientY-L.offsetHeight/2+"px",D.style.width=L.offsetWidth+"px",D.style.boxShadow="0 8px 24px rgba(0, 0, 0, 0.3)",document.body.appendChild(D),L.style.opacity="0.3"}function mh(n){if(!L||!D)return;n.preventDefault();const e=n.touches[0];D.style.left=e.clientX-L.offsetWidth/2+"px",D.style.top=e.clientY-L.offsetHeight/2+"px",D.style.display="none";const t=document.elementFromPoint(e.clientX,e.clientY);if(D.style.display="block",document.querySelectorAll(".timeline-step, .available-drop-zone").forEach(s=>{s.classList.remove("drag-over")}),t){const s=t.closest(".timeline-step, .available-drop-zone");s&&s.classList.add("drag-over")}}function _h(n){if(!L||!D)return;n.preventDefault();const e=n.changedTouches[0];D.style.display="none";const t=document.elementFromPoint(e.clientX,e.clientY);if(L.style.opacity="1",D&&D.parentNode&&D.parentNode.removeChild(D),D=null,document.querySelectorAll(".timeline-step, .available-drop-zone").forEach(s=>{s.classList.remove("drag-over")}),t){const s=t.closest(".timeline-step"),i=t.closest(".available-drop-zone");if(s){const r=parseInt(s.dataset.step),o=L.closest(".available-drop-zone"),a=L.closest(".timeline-step");if(o)Qt(H,r);else if(a){const c=parseInt(a.dataset.step);c!==r&&(Kt(H,c),Qt(H,r))}ht()}else if(i){const r=L.closest(".timeline-step");if(r){const o=parseInt(r.dataset.step);Kt(H,o),ht()}}}L=null,q=null,H=null}async function yh(n){const e=document.getElementById(`newDefectInput-${n}`),t=e.value.trim();t&&!h.partTypeStandards.Housing.defectTypes[n].includes(t)&&(h.partTypeStandards.Housing.defectTypes[n].push(t),e.value="",await Id(n,t),po(n))}async function vh(n,e){h.partTypeStandards.Housing.defectTypes[n].splice(e,1),await Cd(n,e),po(n)}function po(n){const e=document.getElementById(`defectTags-${n}`),t=h.partTypeStandards.Housing.defectTypes[n].map((s,i)=>`
        <div class="defect-tag">
            ${s}
            <button class="defect-tag-remove" onclick="removeDefectType('${n}', ${i})">×</button>
        </div>
    `).join("");e.innerHTML=t}async function bh(){const n=document.getElementById("containerCapacity").value;h.partTypeStandards.Housing.containerCapacity=parseInt(n),await bd(parseInt(n)),re({title:"Gespeichert",content:"<p>Standards wurden erfolgreich gespeichert!</p>",buttons:[{text:"OK",action:()=>{G(),Ss()}}]})}function Ss(){const n=document.getElementById("standardsModal");n&&n.remove()}window.addLoginDigit=wd;window.clearLoginNumber=Ed;window.login=Td;window.toggleLanguage=Nd;window.togglePause=kd;window.goBack=to;window.openStatistics=xd;window.showMainMenu=Ve;window.showSerieMenu=Fe;window.startInspection=Ad;window.showFeatureNotAvailable=eh;window.showFeatureInProgress=th;window.showScanConfirmation=ln;window.showContainerNumberInput=Od;window.addContainerDigit=Ld;window.clearContainerNumber=Fd;window.submitContainerNumber=Bd;window.showQuantitySelection=un;window.setQuantity=ws;window.showManualQuantity=Ud;window.addQuantityDigit=Vd;window.clearQuantityNumber=qd;window.submitManualQuantity=Gd;window.showInspectionInterface=oo;window.showInspectorModal=Qd;window.closeInspectorModal=ao;window.registerDefect=Kd;window.completeInspection=Yd;window.resetInspection=Xd;window.nextInspection=Jd;window.executeModalAction=Zd;window.closeModal=G;window.openBarcodeScanner=lo;window.closeBarcodeScanner=fo;window.submitManualBarcode=rh;window.openDatabase=ah;window.closeDatabase=ho;window.openStandards=ch;window.closeStandards=Ss;window.addDefectType=yh;window.removeDefectType=vh;window.saveStandards=bh;window.handleDragStart=lh;window.handleDragEnd=uh;window.handleDragOver=dh;window.handleDragLeave=hh;window.handleDrop=fh;window.handleDropToAvailable=ph;window.handleTouchStart=gh;window.handleTouchMove=mh;window.handleTouchEnd=_h;document.addEventListener("DOMContentLoaded",async()=>{console.log("Initializing Firebase and app state...");try{await Zr(),await gd(),console.log("✅ App initialized with Firebase successfully"),Is(),"serviceWorker"in navigator&&navigator.serviceWorker.register("./sw.js").then(n=>{console.log("✅ Service Worker registered:",n.scope)}).catch(n=>{console.log("❌ Service Worker registration failed:",n)})}catch(n){console.error("❌ Error initializing app:",n),alert("Fehler beim Initialisieren der App. Bitte die Seite neu laden.")}});
