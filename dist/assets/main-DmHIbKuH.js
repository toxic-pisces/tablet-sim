(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();const bo="modulepreload",wo=function(n){return"/tablet-sim/"+n},Ai={},vt=function(e,t,i){let s=Promise.resolve();if(t&&t.length>0){document.getElementsByTagName("link");const o=document.querySelector("meta[property=csp-nonce]"),a=(o==null?void 0:o.nonce)||(o==null?void 0:o.getAttribute("nonce"));s=Promise.allSettled(t.map(c=>{if(c=wo(c),c in Ai)return;Ai[c]=!0;const l=c.endsWith(".css"),d=l?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${c}"]${d}`))return;const u=document.createElement("link");if(u.rel=l?"stylesheet":bo,l||(u.as="script"),u.crossOrigin="",u.href=c,a&&u.setAttribute("nonce",a),document.head.appendChild(u),l)return new Promise((h,p)=>{u.addEventListener("load",h),u.addEventListener("error",()=>p(new Error(`Unable to preload CSS for ${c}`)))})}))}function r(o){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=o,window.dispatchEvent(a),!a.defaultPrevented)throw o}return s.then(o=>{for(const a of o||[])a.status==="rejected"&&r(a.reason);return e().catch(r)})};var Pi={};/**
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
 */const Ss={NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
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
 */const g=function(n,e){if(!n)throw He(e)},He=function(n){return new Error("Firebase Database ("+Ss.SDK_VERSION+") INTERNAL ASSERT FAILED: "+n)};/**
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
 */const Ns=function(n){const e=[];let t=0;for(let i=0;i<n.length;i++){let s=n.charCodeAt(i);s<128?e[t++]=s:s<2048?(e[t++]=s>>6|192,e[t++]=s&63|128):(s&64512)===55296&&i+1<n.length&&(n.charCodeAt(i+1)&64512)===56320?(s=65536+((s&1023)<<10)+(n.charCodeAt(++i)&1023),e[t++]=s>>18|240,e[t++]=s>>12&63|128,e[t++]=s>>6&63|128,e[t++]=s&63|128):(e[t++]=s>>12|224,e[t++]=s>>6&63|128,e[t++]=s&63|128)}return e},Co=function(n){const e=[];let t=0,i=0;for(;t<n.length;){const s=n[t++];if(s<128)e[i++]=String.fromCharCode(s);else if(s>191&&s<224){const r=n[t++];e[i++]=String.fromCharCode((s&31)<<6|r&63)}else if(s>239&&s<365){const r=n[t++],o=n[t++],a=n[t++],c=((s&7)<<18|(r&63)<<12|(o&63)<<6|a&63)-65536;e[i++]=String.fromCharCode(55296+(c>>10)),e[i++]=String.fromCharCode(56320+(c&1023))}else{const r=n[t++],o=n[t++];e[i++]=String.fromCharCode((s&15)<<12|(r&63)<<6|o&63)}}return e.join("")},jn={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let s=0;s<n.length;s+=3){const r=n[s],o=s+1<n.length,a=o?n[s+1]:0,c=s+2<n.length,l=c?n[s+2]:0,d=r>>2,u=(r&3)<<4|a>>4;let h=(a&15)<<2|l>>6,p=l&63;c||(p=64,o||(h=64)),i.push(t[d],t[u],t[h],t[p])}return i.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(Ns(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):Co(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let s=0;s<n.length;){const r=t[n.charAt(s++)],a=s<n.length?t[n.charAt(s)]:0;++s;const l=s<n.length?t[n.charAt(s)]:64;++s;const u=s<n.length?t[n.charAt(s)]:64;if(++s,r==null||a==null||l==null||u==null)throw new Io;const h=r<<2|a>>4;if(i.push(h),l!==64){const p=a<<4&240|l>>2;if(i.push(p),u!==64){const m=l<<6&192|u;i.push(m)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class Io extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Ds=function(n){const e=Ns(n);return jn.encodeByteArray(e,!0)},xt=function(n){return Ds(n).replace(/\./g,"")},kn=function(n){try{return jn.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function Eo(n){return ks(void 0,n)}function ks(n,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const t=e;return new Date(t.getTime());case Object:n===void 0&&(n={});break;case Array:n=[];break;default:return e}for(const t in e)!e.hasOwnProperty(t)||!To(t)||(n[t]=ks(n[t],e[t]));return n}function To(n){return n!=="__proto__"}/**
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
 */function So(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const No=()=>So().__FIREBASE_DEFAULTS__,Do=()=>{if(typeof process>"u"||typeof Pi>"u")return;const n=Pi.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},ko=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&kn(n[1]);return e&&JSON.parse(e)},Rs=()=>{try{return No()||Do()||ko()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},Ro=n=>{var e,t;return(t=(e=Rs())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[n]},Ao=n=>{const e=Ro(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const i=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),i]:[e.substring(0,t),i]},As=()=>{var n;return(n=Rs())===null||n===void 0?void 0:n.config};/**
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
 */class nn{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,i)=>{t?this.reject(t):this.resolve(i),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,i))}}}/**
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
 */function Po(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},i=e||"demo-project",s=n.iat||0,r=n.sub||n.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${i}`,aud:i,iat:s,exp:s+3600,auth_time:s,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}}},n);return[xt(JSON.stringify(t)),xt(JSON.stringify(o)),""].join(".")}/**
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
 */function xo(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Ps(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(xo())}function Mo(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Lo(){return Ss.NODE_ADMIN===!0}function Oo(){try{return typeof indexedDB=="object"}catch{return!1}}function Fo(){return new Promise((n,e)=>{try{let t=!0;const i="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(i);s.onsuccess=()=>{s.result.close(),t||self.indexedDB.deleteDatabase(i),n(!0)},s.onupgradeneeded=()=>{t=!1},s.onerror=()=>{var r;e(((r=s.error)===null||r===void 0?void 0:r.message)||"")}}catch(t){e(t)}})}/**
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
 */const $o="FirebaseError";class bt extends Error{constructor(e,t,i){super(t),this.code=e,this.customData=i,this.name=$o,Object.setPrototypeOf(this,bt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,xs.prototype.create)}}class xs{constructor(e,t,i){this.service=e,this.serviceName=t,this.errors=i}create(e,...t){const i=t[0]||{},s=`${this.service}/${e}`,r=this.errors[e],o=r?Bo(r,i):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new bt(s,a,i)}}function Bo(n,e){return n.replace(Ho,(t,i)=>{const s=e[i];return s!=null?String(s):`<${i}?>`})}const Ho=/\{\$([^}]+)}/g;/**
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
 */function rt(n){return JSON.parse(n)}function A(n){return JSON.stringify(n)}/**
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
 */const Ms=function(n){let e={},t={},i={},s="";try{const r=n.split(".");e=rt(kn(r[0])||""),t=rt(kn(r[1])||""),s=r[2],i=t.d||{},delete t.d}catch{}return{header:e,claims:t,data:i,signature:s}},Wo=function(n){const e=Ms(n),t=e.claims;return!!t&&typeof t=="object"&&t.hasOwnProperty("iat")},Uo=function(n){const e=Ms(n).claims;return typeof e=="object"&&e.admin===!0};/**
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
 */function le(n,e){return Object.prototype.hasOwnProperty.call(n,e)}function Le(n,e){if(Object.prototype.hasOwnProperty.call(n,e))return n[e]}function xi(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function Mt(n,e,t){const i={};for(const s in n)Object.prototype.hasOwnProperty.call(n,s)&&(i[s]=e.call(t,n[s],s,n));return i}function Rn(n,e){if(n===e)return!0;const t=Object.keys(n),i=Object.keys(e);for(const s of t){if(!i.includes(s))return!1;const r=n[s],o=e[s];if(Mi(r)&&Mi(o)){if(!Rn(r,o))return!1}else if(r!==o)return!1}for(const s of i)if(!t.includes(s))return!1;return!0}function Mi(n){return n!==null&&typeof n=="object"}/**
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
 */function zo(n){const e=[];for(const[t,i]of Object.entries(n))Array.isArray(i)?i.forEach(s=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(i));return e.length?"&"+e.join("&"):""}/**
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
 */class Vo{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,t){t||(t=0);const i=this.W_;if(typeof e=="string")for(let u=0;u<16;u++)i[u]=e.charCodeAt(t)<<24|e.charCodeAt(t+1)<<16|e.charCodeAt(t+2)<<8|e.charCodeAt(t+3),t+=4;else for(let u=0;u<16;u++)i[u]=e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3],t+=4;for(let u=16;u<80;u++){const h=i[u-3]^i[u-8]^i[u-14]^i[u-16];i[u]=(h<<1|h>>>31)&4294967295}let s=this.chain_[0],r=this.chain_[1],o=this.chain_[2],a=this.chain_[3],c=this.chain_[4],l,d;for(let u=0;u<80;u++){u<40?u<20?(l=a^r&(o^a),d=1518500249):(l=r^o^a,d=1859775393):u<60?(l=r&o|a&(r|o),d=2400959708):(l=r^o^a,d=3395469782);const h=(s<<5|s>>>27)+l+c+d+i[u]&4294967295;c=a,a=o,o=(r<<30|r>>>2)&4294967295,r=s,s=h}this.chain_[0]=this.chain_[0]+s&4294967295,this.chain_[1]=this.chain_[1]+r&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+c&4294967295}update(e,t){if(e==null)return;t===void 0&&(t=e.length);const i=t-this.blockSize;let s=0;const r=this.buf_;let o=this.inbuf_;for(;s<t;){if(o===0)for(;s<=i;)this.compress_(e,s),s+=this.blockSize;if(typeof e=="string"){for(;s<t;)if(r[o]=e.charCodeAt(s),++o,++s,o===this.blockSize){this.compress_(r),o=0;break}}else for(;s<t;)if(r[o]=e[s],++o,++s,o===this.blockSize){this.compress_(r),o=0;break}}this.inbuf_=o,this.total_+=t}digest(){const e=[];let t=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let s=this.blockSize-1;s>=56;s--)this.buf_[s]=t&255,t/=256;this.compress_(this.buf_);let i=0;for(let s=0;s<5;s++)for(let r=24;r>=0;r-=8)e[i]=this.chain_[s]>>r&255,++i;return e}}function Kn(n,e){return`${n} failed: ${e} argument `}/**
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
 */const qo=function(n){const e=[];let t=0;for(let i=0;i<n.length;i++){let s=n.charCodeAt(i);if(s>=55296&&s<=56319){const r=s-55296;i++,g(i<n.length,"Surrogate pair missing trail surrogate.");const o=n.charCodeAt(i)-56320;s=65536+(r<<10)+o}s<128?e[t++]=s:s<2048?(e[t++]=s>>6|192,e[t++]=s&63|128):s<65536?(e[t++]=s>>12|224,e[t++]=s>>6&63|128,e[t++]=s&63|128):(e[t++]=s>>18|240,e[t++]=s>>12&63|128,e[t++]=s>>6&63|128,e[t++]=s&63|128)}return e},sn=function(n){let e=0;for(let t=0;t<n.length;t++){const i=n.charCodeAt(t);i<128?e++:i<2048?e+=2:i>=55296&&i<=56319?(e+=4,t++):e+=3}return e};/**
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
 */function We(n){return n&&n._delegate?n._delegate:n}class ot{constructor(e,t,i){this.name=e,this.instanceFactory=t,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const ye="[DEFAULT]";/**
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
 */class Go{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const i=new nn;if(this.instancesDeferred.set(t,i),this.isInitialized(t)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:t});s&&i.resolve(s)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const i=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(i)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:i})}catch(r){if(s)return null;throw r}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Ko(e))try{this.getOrInitializeService({instanceIdentifier:ye})}catch{}for(const[t,i]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(t);try{const r=this.getOrInitializeService({instanceIdentifier:s});i.resolve(r)}catch{}}}}clearInstance(e=ye){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=ye){return this.instances.has(e)}getOptions(e=ye){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,i=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(i))throw Error(`${this.name}(${i}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:i,options:t});for(const[r,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(r);i===a&&o.resolve(s)}return s}onInit(e,t){var i;const s=this.normalizeInstanceIdentifier(t),r=(i=this.onInitCallbacks.get(s))!==null&&i!==void 0?i:new Set;r.add(e),this.onInitCallbacks.set(s,r);const o=this.instances.get(s);return o&&e(o,s),()=>{r.delete(e)}}invokeOnInitCallbacks(e,t){const i=this.onInitCallbacks.get(t);if(i)for(const s of i)try{s(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let i=this.instances.get(e);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:jo(e),options:t}),this.instances.set(e,i),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(i,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,i)}catch{}return i||null}normalizeInstanceIdentifier(e=ye){return this.component?this.component.multipleInstances?e:ye:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function jo(n){return n===ye?void 0:n}function Ko(n){return n.instantiationMode==="EAGER"}/**
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
 */class Qo{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new Go(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var T;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(T||(T={}));const Yo={debug:T.DEBUG,verbose:T.VERBOSE,info:T.INFO,warn:T.WARN,error:T.ERROR,silent:T.SILENT},Zo=T.INFO,Xo={[T.DEBUG]:"log",[T.VERBOSE]:"log",[T.INFO]:"info",[T.WARN]:"warn",[T.ERROR]:"error"},Jo=(n,e,...t)=>{if(e<n.logLevel)return;const i=new Date().toISOString(),s=Xo[e];if(s)console[s](`[${i}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Ls{constructor(e){this.name=e,this._logLevel=Zo,this._logHandler=Jo,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in T))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Yo[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,T.DEBUG,...e),this._logHandler(this,T.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,T.VERBOSE,...e),this._logHandler(this,T.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,T.INFO,...e),this._logHandler(this,T.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,T.WARN,...e),this._logHandler(this,T.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,T.ERROR,...e),this._logHandler(this,T.ERROR,...e)}}const ea=(n,e)=>e.some(t=>n instanceof t);let Li,Oi;function ta(){return Li||(Li=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function na(){return Oi||(Oi=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Os=new WeakMap,An=new WeakMap,Fs=new WeakMap,yn=new WeakMap,Qn=new WeakMap;function ia(n){const e=new Promise((t,i)=>{const s=()=>{n.removeEventListener("success",r),n.removeEventListener("error",o)},r=()=>{t(de(n.result)),s()},o=()=>{i(n.error),s()};n.addEventListener("success",r),n.addEventListener("error",o)});return e.then(t=>{t instanceof IDBCursor&&Os.set(t,n)}).catch(()=>{}),Qn.set(e,n),e}function sa(n){if(An.has(n))return;const e=new Promise((t,i)=>{const s=()=>{n.removeEventListener("complete",r),n.removeEventListener("error",o),n.removeEventListener("abort",o)},r=()=>{t(),s()},o=()=>{i(n.error||new DOMException("AbortError","AbortError")),s()};n.addEventListener("complete",r),n.addEventListener("error",o),n.addEventListener("abort",o)});An.set(n,e)}let Pn={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return An.get(n);if(e==="objectStoreNames")return n.objectStoreNames||Fs.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return de(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function ra(n){Pn=n(Pn)}function oa(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const i=n.call(vn(this),e,...t);return Fs.set(i,e.sort?e.sort():[e]),de(i)}:na().includes(n)?function(...e){return n.apply(vn(this),e),de(Os.get(this))}:function(...e){return de(n.apply(vn(this),e))}}function aa(n){return typeof n=="function"?oa(n):(n instanceof IDBTransaction&&sa(n),ea(n,ta())?new Proxy(n,Pn):n)}function de(n){if(n instanceof IDBRequest)return ia(n);if(yn.has(n))return yn.get(n);const e=aa(n);return e!==n&&(yn.set(n,e),Qn.set(e,n)),e}const vn=n=>Qn.get(n);function ca(n,e,{blocked:t,upgrade:i,blocking:s,terminated:r}={}){const o=indexedDB.open(n,e),a=de(o);return i&&o.addEventListener("upgradeneeded",c=>{i(de(o.result),c.oldVersion,c.newVersion,de(o.transaction),c)}),t&&o.addEventListener("blocked",c=>t(c.oldVersion,c.newVersion,c)),a.then(c=>{r&&c.addEventListener("close",()=>r()),s&&c.addEventListener("versionchange",l=>s(l.oldVersion,l.newVersion,l))}).catch(()=>{}),a}const la=["get","getKey","getAll","getAllKeys","count"],ua=["put","add","delete","clear"],bn=new Map;function Fi(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(bn.get(e))return bn.get(e);const t=e.replace(/FromIndex$/,""),i=e!==t,s=ua.includes(t);if(!(t in(i?IDBIndex:IDBObjectStore).prototype)||!(s||la.includes(t)))return;const r=async function(o,...a){const c=this.transaction(o,s?"readwrite":"readonly");let l=c.store;return i&&(l=l.index(a.shift())),(await Promise.all([l[t](...a),s&&c.done]))[0]};return bn.set(e,r),r}ra(n=>({...n,get:(e,t,i)=>Fi(e,t)||n.get(e,t,i),has:(e,t)=>!!Fi(e,t)||n.has(e,t)}));/**
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
 */class da{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(ha(t)){const i=t.getImmediate();return`${i.library}/${i.version}`}else return null}).filter(t=>t).join(" ")}}function ha(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const xn="@firebase/app",$i="0.10.13";/**
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
 */const ae=new Ls("@firebase/app"),fa="@firebase/app-compat",pa="@firebase/analytics-compat",ga="@firebase/analytics",ma="@firebase/app-check-compat",_a="@firebase/app-check",ya="@firebase/auth",va="@firebase/auth-compat",ba="@firebase/database",wa="@firebase/data-connect",Ca="@firebase/database-compat",Ia="@firebase/functions",Ea="@firebase/functions-compat",Ta="@firebase/installations",Sa="@firebase/installations-compat",Na="@firebase/messaging",Da="@firebase/messaging-compat",ka="@firebase/performance",Ra="@firebase/performance-compat",Aa="@firebase/remote-config",Pa="@firebase/remote-config-compat",xa="@firebase/storage",Ma="@firebase/storage-compat",La="@firebase/firestore",Oa="@firebase/vertexai-preview",Fa="@firebase/firestore-compat",$a="firebase",Ba="10.14.1";/**
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
 */const Mn="[DEFAULT]",Ha={[xn]:"fire-core",[fa]:"fire-core-compat",[ga]:"fire-analytics",[pa]:"fire-analytics-compat",[_a]:"fire-app-check",[ma]:"fire-app-check-compat",[ya]:"fire-auth",[va]:"fire-auth-compat",[ba]:"fire-rtdb",[wa]:"fire-data-connect",[Ca]:"fire-rtdb-compat",[Ia]:"fire-fn",[Ea]:"fire-fn-compat",[Ta]:"fire-iid",[Sa]:"fire-iid-compat",[Na]:"fire-fcm",[Da]:"fire-fcm-compat",[ka]:"fire-perf",[Ra]:"fire-perf-compat",[Aa]:"fire-rc",[Pa]:"fire-rc-compat",[xa]:"fire-gcs",[Ma]:"fire-gcs-compat",[La]:"fire-fst",[Fa]:"fire-fst-compat",[Oa]:"fire-vertex","fire-js":"fire-js",[$a]:"fire-js-all"};/**
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
 */const Lt=new Map,Wa=new Map,Ln=new Map;function Bi(n,e){try{n.container.addComponent(e)}catch(t){ae.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function Ot(n){const e=n.name;if(Ln.has(e))return ae.debug(`There were multiple attempts to register component ${e}.`),!1;Ln.set(e,n);for(const t of Lt.values())Bi(t,n);for(const t of Wa.values())Bi(t,n);return!0}function Ua(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}/**
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
 */const za={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},he=new xs("app","Firebase",za);/**
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
 */class Va{constructor(e,t,i){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new ot("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw he.create("app-deleted",{appName:this._name})}}/**
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
 */const qa=Ba;function $s(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const i=Object.assign({name:Mn,automaticDataCollectionEnabled:!1},e),s=i.name;if(typeof s!="string"||!s)throw he.create("bad-app-name",{appName:String(s)});if(t||(t=As()),!t)throw he.create("no-options");const r=Lt.get(s);if(r){if(Rn(t,r.options)&&Rn(i,r.config))return r;throw he.create("duplicate-app",{appName:s})}const o=new Qo(s);for(const c of Ln.values())o.addComponent(c);const a=new Va(t,i,o);return Lt.set(s,a),a}function Ga(n=Mn){const e=Lt.get(n);if(!e&&n===Mn&&As())return $s();if(!e)throw he.create("no-app",{appName:n});return e}function Re(n,e,t){var i;let s=(i=Ha[n])!==null&&i!==void 0?i:n;t&&(s+=`-${t}`);const r=s.match(/\s|\//),o=e.match(/\s|\//);if(r||o){const a=[`Unable to register library "${s}" with version "${e}":`];r&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),r&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),ae.warn(a.join(" "));return}Ot(new ot(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const ja="firebase-heartbeat-database",Ka=1,at="firebase-heartbeat-store";let wn=null;function Bs(){return wn||(wn=ca(ja,Ka,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(at)}catch(t){console.warn(t)}}}}).catch(n=>{throw he.create("idb-open",{originalErrorMessage:n.message})})),wn}async function Qa(n){try{const t=(await Bs()).transaction(at),i=await t.objectStore(at).get(Hs(n));return await t.done,i}catch(e){if(e instanceof bt)ae.warn(e.message);else{const t=he.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});ae.warn(t.message)}}}async function Hi(n,e){try{const i=(await Bs()).transaction(at,"readwrite");await i.objectStore(at).put(e,Hs(n)),await i.done}catch(t){if(t instanceof bt)ae.warn(t.message);else{const i=he.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});ae.warn(i.message)}}}function Hs(n){return`${n.name}!${n.options.appId}`}/**
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
 */const Ya=1024,Za=30*24*60*60*1e3;class Xa{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new ec(t),this._heartbeatsCachePromise=this._storage.read().then(i=>(this._heartbeatsCache=i,i))}async triggerHeartbeat(){var e,t;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=Wi();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(o=>o.date===r)?void 0:(this._heartbeatsCache.heartbeats.push({date:r,agent:s}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=Za}),this._storage.overwrite(this._heartbeatsCache))}catch(i){ae.warn(i)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=Wi(),{heartbeatsToSend:i,unsentEntries:s}=Ja(this._heartbeatsCache.heartbeats),r=xt(JSON.stringify({version:2,heartbeats:i}));return this._heartbeatsCache.lastSentHeartbeatDate=t,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}catch(t){return ae.warn(t),""}}}function Wi(){return new Date().toISOString().substring(0,10)}function Ja(n,e=Ya){const t=[];let i=n.slice();for(const s of n){const r=t.find(o=>o.agent===s.agent);if(r){if(r.dates.push(s.date),Ui(t)>e){r.dates.pop();break}}else if(t.push({agent:s.agent,dates:[s.date]}),Ui(t)>e){t.pop();break}i=i.slice(1)}return{heartbeatsToSend:t,unsentEntries:i}}class ec{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Oo()?Fo().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await Qa(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const s=await this.read();return Hi(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const s=await this.read();return Hi(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function Ui(n){return xt(JSON.stringify({version:2,heartbeats:n})).length}/**
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
 */function tc(n){Ot(new ot("platform-logger",e=>new da(e),"PRIVATE")),Ot(new ot("heartbeat",e=>new Xa(e),"PRIVATE")),Re(xn,$i,n),Re(xn,$i,"esm2017"),Re("fire-js","")}tc("");var nc="firebase",ic="10.14.1";/**
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
 */Re(nc,ic,"app");var zi={};const Vi="@firebase/database",qi="1.0.8";/**
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
 */let Ws="";function sc(n){Ws=n}/**
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
 */class rc{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,t){t==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),A(t))}get(e){const t=this.domStorage_.getItem(this.prefixedName_(e));return t==null?null:rt(t)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
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
 */class oc{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,t){t==null?delete this.cache_[e]:this.cache_[e]=t}get(e){return le(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
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
 */const Us=function(n){try{if(typeof window<"u"&&typeof window[n]<"u"){const e=window[n];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new rc(e)}}catch{}return new oc},be=Us("localStorage"),ac=Us("sessionStorage");/**
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
 */const Ae=new Ls("@firebase/database"),cc=function(){let n=1;return function(){return n++}}(),zs=function(n){const e=qo(n),t=new Vo;t.update(e);const i=t.digest();return jn.encodeByteArray(i)},wt=function(...n){let e="";for(let t=0;t<n.length;t++){const i=n[t];Array.isArray(i)||i&&typeof i=="object"&&typeof i.length=="number"?e+=wt.apply(null,i):typeof i=="object"?e+=A(i):e+=i,e+=" "}return e};let Je=null,Gi=!0;const lc=function(n,e){g(!0,"Can't turn on custom loggers persistently."),Ae.logLevel=T.VERBOSE,Je=Ae.log.bind(Ae)},F=function(...n){if(Gi===!0&&(Gi=!1,Je===null&&ac.get("logging_enabled")===!0&&lc()),Je){const e=wt.apply(null,n);Je(e)}},Ct=function(n){return function(...e){F(n,...e)}},On=function(...n){const e="FIREBASE INTERNAL ERROR: "+wt(...n);Ae.error(e)},ce=function(...n){const e=`FIREBASE FATAL ERROR: ${wt(...n)}`;throw Ae.error(e),new Error(e)},U=function(...n){const e="FIREBASE WARNING: "+wt(...n);Ae.warn(e)},uc=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&U("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},Vs=function(n){return typeof n=="number"&&(n!==n||n===Number.POSITIVE_INFINITY||n===Number.NEGATIVE_INFINITY)},dc=function(n){if(document.readyState==="complete")n();else{let e=!1;const t=function(){if(!document.body){setTimeout(t,Math.floor(10));return}e||(e=!0,n())};document.addEventListener?(document.addEventListener("DOMContentLoaded",t,!1),window.addEventListener("load",t,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&t()}),window.attachEvent("onload",t))}},Oe="[MIN_NAME]",Ce="[MAX_NAME]",Ue=function(n,e){if(n===e)return 0;if(n===Oe||e===Ce)return-1;if(e===Oe||n===Ce)return 1;{const t=ji(n),i=ji(e);return t!==null?i!==null?t-i===0?n.length-e.length:t-i:-1:i!==null?1:n<e?-1:1}},hc=function(n,e){return n===e?0:n<e?-1:1},Qe=function(n,e){if(e&&n in e)return e[n];throw new Error("Missing required key ("+n+") in object: "+A(e))},Yn=function(n){if(typeof n!="object"||n===null)return A(n);const e=[];for(const i in n)e.push(i);e.sort();let t="{";for(let i=0;i<e.length;i++)i!==0&&(t+=","),t+=A(e[i]),t+=":",t+=Yn(n[e[i]]);return t+="}",t},qs=function(n,e){const t=n.length;if(t<=e)return[n];const i=[];for(let s=0;s<t;s+=e)s+e>t?i.push(n.substring(s,t)):i.push(n.substring(s,s+e));return i};function z(n,e){for(const t in n)n.hasOwnProperty(t)&&e(t,n[t])}const Gs=function(n){g(!Vs(n),"Invalid JSON number");const e=11,t=52,i=(1<<e-1)-1;let s,r,o,a,c;n===0?(r=0,o=0,s=1/n===-1/0?1:0):(s=n<0,n=Math.abs(n),n>=Math.pow(2,1-i)?(a=Math.min(Math.floor(Math.log(n)/Math.LN2),i),r=a+i,o=Math.round(n*Math.pow(2,t-a)-Math.pow(2,t))):(r=0,o=Math.round(n/Math.pow(2,1-i-t))));const l=[];for(c=t;c;c-=1)l.push(o%2?1:0),o=Math.floor(o/2);for(c=e;c;c-=1)l.push(r%2?1:0),r=Math.floor(r/2);l.push(s?1:0),l.reverse();const d=l.join("");let u="";for(c=0;c<64;c+=8){let h=parseInt(d.substr(c,8),2).toString(16);h.length===1&&(h="0"+h),u=u+h}return u.toLowerCase()},fc=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},pc=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function gc(n,e){let t="Unknown Error";n==="too_big"?t="The data requested exceeds the maximum size that can be accessed with a single request.":n==="permission_denied"?t="Client doesn't have permission to access the desired data.":n==="unavailable"&&(t="The service is unavailable");const i=new Error(n+" at "+e._path.toString()+": "+t);return i.code=n.toUpperCase(),i}const mc=new RegExp("^-?(0*)\\d{1,10}$"),_c=-2147483648,yc=2147483647,ji=function(n){if(mc.test(n)){const e=Number(n);if(e>=_c&&e<=yc)return e}return null},ze=function(n){try{n()}catch(e){setTimeout(()=>{const t=e.stack||"";throw U("Exception was thrown by user callback.",t),e},Math.floor(0))}},vc=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},et=function(n,e){const t=setTimeout(n,e);return typeof t=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(t):typeof t=="object"&&t.unref&&t.unref(),t};/**
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
 */class bc{constructor(e,t){this.appName_=e,this.appCheckProvider=t,this.appCheck=t==null?void 0:t.getImmediate({optional:!0}),this.appCheck||t==null||t.get().then(i=>this.appCheck=i)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((t,i)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(t,i):t(null)},0)})}addTokenChangeListener(e){var t;(t=this.appCheckProvider)===null||t===void 0||t.get().then(i=>i.addTokenListener(e))}notifyForInvalidToken(){U(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
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
 */class wc{constructor(e,t,i){this.appName_=e,this.firebaseOptions_=t,this.authProvider_=i,this.auth_=null,this.auth_=i.getImmediate({optional:!0}),this.auth_||i.onInit(s=>this.auth_=s)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(t=>t&&t.code==="auth/token-not-initialized"?(F("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(t)):new Promise((t,i)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(t,i):t(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(t=>t.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(t=>t.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',U(e)}}class Pt{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}Pt.OWNER="owner";/**
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
 */const Zn="5",js="v",Ks="s",Qs="r",Ys="f",Zs=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,Xs="ls",Js="p",Fn="ac",er="websocket",tr="long_polling";/**
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
 */class nr{constructor(e,t,i,s,r=!1,o="",a=!1,c=!1){this.secure=t,this.namespace=i,this.webSocketOnly=s,this.nodeAdmin=r,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=c,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=be.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&be.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",t=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${t}`}}function Cc(n){return n.host!==n.internalHost||n.isCustomHost()||n.includeNamespaceInQueryParams}function ir(n,e,t){g(typeof e=="string","typeof type must == string"),g(typeof t=="object","typeof params must == object");let i;if(e===er)i=(n.secure?"wss://":"ws://")+n.internalHost+"/.ws?";else if(e===tr)i=(n.secure?"https://":"http://")+n.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);Cc(n)&&(t.ns=n.namespace);const s=[];return z(t,(r,o)=>{s.push(r+"="+o)}),i+s.join("&")}/**
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
 */class Ic{constructor(){this.counters_={}}incrementCounter(e,t=1){le(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=t}get(){return Eo(this.counters_)}}/**
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
 */const Cn={},In={};function Xn(n){const e=n.toString();return Cn[e]||(Cn[e]=new Ic),Cn[e]}function Ec(n,e){const t=n.toString();return In[t]||(In[t]=e()),In[t]}/**
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
 */class Tc{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,t){this.closeAfterResponse=e,this.onClose=t,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,t){for(this.pendingResponses[e]=t;this.pendingResponses[this.currentResponseNum];){const i=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let s=0;s<i.length;++s)i[s]&&ze(()=>{this.onMessage_(i[s])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
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
 */const Ki="start",Sc="close",Nc="pLPCommand",Dc="pRTLPCB",sr="id",rr="pw",or="ser",kc="cb",Rc="seg",Ac="ts",Pc="d",xc="dframe",ar=1870,cr=30,Mc=ar-cr,Lc=25e3,Oc=3e4;class ke{constructor(e,t,i,s,r,o,a){this.connId=e,this.repoInfo=t,this.applicationId=i,this.appCheckToken=s,this.authToken=r,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Ct(e),this.stats_=Xn(t),this.urlFn=c=>(this.appCheckToken&&(c[Fn]=this.appCheckToken),ir(t,tr,c))}open(e,t){this.curSegmentNum=0,this.onDisconnect_=t,this.myPacketOrderer=new Tc(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(Oc)),dc(()=>{if(this.isClosed_)return;this.scriptTagHolder=new Jn((...r)=>{const[o,a,c,l,d]=r;if(this.incrementIncomingBytes_(r),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===Ki)this.id=a,this.password=c;else if(o===Sc)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...r)=>{const[o,a]=r;this.incrementIncomingBytes_(r),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const i={};i[Ki]="t",i[or]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(i[kc]=this.scriptTagHolder.uniqueCallbackIdentifier),i[js]=Zn,this.transportSessionId&&(i[Ks]=this.transportSessionId),this.lastSessionId&&(i[Xs]=this.lastSessionId),this.applicationId&&(i[Js]=this.applicationId),this.appCheckToken&&(i[Fn]=this.appCheckToken),typeof location<"u"&&location.hostname&&Zs.test(location.hostname)&&(i[Qs]=Ys);const s=this.urlFn(i);this.log_("Connecting via long-poll to "+s),this.scriptTagHolder.addTag(s,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){ke.forceAllow_=!0}static forceDisallow(){ke.forceDisallow_=!0}static isAvailable(){return ke.forceAllow_?!0:!ke.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!fc()&&!pc()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const t=A(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const i=Ds(t),s=qs(i,Mc);for(let r=0;r<s.length;r++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,s.length,s[r]),this.curSegmentNum++}addDisconnectPingFrame(e,t){this.myDisconnFrame=document.createElement("iframe");const i={};i[xc]="t",i[sr]=e,i[rr]=t,this.myDisconnFrame.src=this.urlFn(i),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const t=A(e).length;this.bytesReceived+=t,this.stats_.incrementCounter("bytes_received",t)}}class Jn{constructor(e,t,i,s){this.onDisconnect=i,this.urlFn=s,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=cc(),window[Nc+this.uniqueCallbackIdentifier]=e,window[Dc+this.uniqueCallbackIdentifier]=t,this.myIFrame=Jn.createIFrame_();let r="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(r='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+r+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){F("frame writing exception"),a.stack&&F(a.stack),F(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||F("No IE domain setting required")}catch{const i=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+i+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,t){for(this.myID=e,this.myPW=t,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[sr]=this.myID,e[rr]=this.myPW,e[or]=this.currentSerial;let t=this.urlFn(e),i="",s=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+cr+i.length<=ar;){const o=this.pendingSegs.shift();i=i+"&"+Rc+s+"="+o.seg+"&"+Ac+s+"="+o.ts+"&"+Pc+s+"="+o.d,s++}return t=t+i,this.addLongPollTag_(t,this.currentSerial),!0}else return!1}enqueueSegment(e,t,i){this.pendingSegs.push({seg:e,ts:t,d:i}),this.alive&&this.newRequest_()}addLongPollTag_(e,t){this.outstandingRequests.add(t);const i=()=>{this.outstandingRequests.delete(t),this.newRequest_()},s=setTimeout(i,Math.floor(Lc)),r=()=>{clearTimeout(s),i()};this.addTag(e,r)}addTag(e,t){setTimeout(()=>{try{if(!this.sendNewPolls)return;const i=this.myIFrame.doc.createElement("script");i.type="text/javascript",i.async=!0,i.src=e,i.onload=i.onreadystatechange=function(){const s=i.readyState;(!s||s==="loaded"||s==="complete")&&(i.onload=i.onreadystatechange=null,i.parentNode&&i.parentNode.removeChild(i),t())},i.onerror=()=>{F("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(i)}catch{}},Math.floor(1))}}/**
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
 */const Fc=16384,$c=45e3;let Ft=null;typeof MozWebSocket<"u"?Ft=MozWebSocket:typeof WebSocket<"u"&&(Ft=WebSocket);class K{constructor(e,t,i,s,r,o,a){this.connId=e,this.applicationId=i,this.appCheckToken=s,this.authToken=r,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Ct(this.connId),this.stats_=Xn(t),this.connURL=K.connectionURL_(t,o,a,s,i),this.nodeAdmin=t.nodeAdmin}static connectionURL_(e,t,i,s,r){const o={};return o[js]=Zn,typeof location<"u"&&location.hostname&&Zs.test(location.hostname)&&(o[Qs]=Ys),t&&(o[Ks]=t),i&&(o[Xs]=i),s&&(o[Fn]=s),r&&(o[Js]=r),ir(e,er,o)}open(e,t){this.onDisconnect=t,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,be.set("previous_websocket_failure",!0);try{let i;Lo(),this.mySock=new Ft(this.connURL,[],i)}catch(i){this.log_("Error instantiating WebSocket.");const s=i.message||i.data;s&&this.log_(s),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=i=>{this.handleIncomingFrame(i)},this.mySock.onerror=i=>{this.log_("WebSocket error.  Closing connection.");const s=i.message||i.data;s&&this.log_(s),this.onClosed_()}}start(){}static forceDisallow(){K.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const t=/Android ([0-9]{0,}\.[0-9]{0,})/,i=navigator.userAgent.match(t);i&&i.length>1&&parseFloat(i[1])<4.4&&(e=!0)}return!e&&Ft!==null&&!K.forceDisallow_}static previouslyFailed(){return be.isInMemoryStorage||be.get("previous_websocket_failure")===!0}markConnectionHealthy(){be.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const t=this.frames.join("");this.frames=null;const i=rt(t);this.onMessage(i)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(g(this.frames===null,"We already have a frame buffer"),e.length<=6){const t=Number(e);if(!isNaN(t))return this.handleNewFrameCount_(t),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const t=e.data;if(this.bytesReceived+=t.length,this.stats_.incrementCounter("bytes_received",t.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(t);else{const i=this.extractFrameCount_(t);i!==null&&this.appendFrame_(i)}}send(e){this.resetKeepAlive();const t=A(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const i=qs(t,Fc);i.length>1&&this.sendString_(String(i.length));for(let s=0;s<i.length;s++)this.sendString_(i[s])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor($c))}sendString_(e){try{this.mySock.send(e)}catch(t){this.log_("Exception thrown from WebSocket.send():",t.message||t.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}K.responsesRequiredToBeHealthy=2;K.healthyTimeout=3e4;/**
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
 */class ct{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[ke,K]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const t=K&&K.isAvailable();let i=t&&!K.previouslyFailed();if(e.webSocketOnly&&(t||U("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),i=!0),i)this.transports_=[K];else{const s=this.transports_=[];for(const r of ct.ALL_TRANSPORTS)r&&r.isAvailable()&&s.push(r);ct.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}ct.globalTransportInitialized_=!1;/**
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
 */const Bc=6e4,Hc=5e3,Wc=10*1024,Uc=100*1024,En="t",Qi="d",zc="s",Yi="r",Vc="e",Zi="o",Xi="a",Ji="n",es="p",qc="h";class Gc{constructor(e,t,i,s,r,o,a,c,l,d){this.id=e,this.repoInfo_=t,this.applicationId_=i,this.appCheckToken_=s,this.authToken_=r,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=c,this.onKill_=l,this.lastSessionId=d,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Ct("c:"+this.id+":"),this.transportManager_=new ct(t),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.conn_),i=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(t,i)},Math.floor(0));const s=e.healthyTimeout||0;s>0&&(this.healthyTimeout_=et(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>Uc?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>Wc?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(s)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return t=>{e===this.conn_?this.onConnectionLost_(t):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return t=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(t):e===this.secondaryConn_?this.onSecondaryMessageReceived_(t):this.log_("message on old connection"))}}sendRequest(e){const t={t:"d",d:e};this.sendData_(t)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(En in e){const t=e[En];t===Xi?this.upgradeIfSecondaryHealthy_():t===Yi?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):t===Zi&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const t=Qe("t",e),i=Qe("d",e);if(t==="c")this.onSecondaryControl_(i);else if(t==="d")this.pendingDataMessages.push(i);else throw new Error("Unknown protocol layer: "+t)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:es,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:Xi,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:Ji,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const t=Qe("t",e),i=Qe("d",e);t==="c"?this.onControl_(i):t==="d"&&this.onDataMessage_(i)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const t=Qe(En,e);if(Qi in e){const i=e[Qi];if(t===qc){const s=Object.assign({},i);this.repoInfo_.isUsingEmulator&&(s.h=this.repoInfo_.host),this.onHandshake_(s)}else if(t===Ji){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let s=0;s<this.pendingDataMessages.length;++s)this.onDataMessage_(this.pendingDataMessages[s]);this.pendingDataMessages=[],this.tryCleanupConnection()}else t===zc?this.onConnectionShutdown_(i):t===Yi?this.onReset_(i):t===Vc?On("Server Error: "+i):t===Zi?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):On("Unknown control packet command: "+t)}}onHandshake_(e){const t=e.ts,i=e.v,s=e.h;this.sessionId=e.s,this.repoInfo_.host=s,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,t),Zn!==i&&U("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.secondaryConn_),i=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(t,i),et(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(Bc))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,t){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(t,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):et(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(Hc))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:es,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(be.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
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
 */class lr{put(e,t,i,s){}merge(e,t,i,s){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,t,i){}onDisconnectMerge(e,t,i){}onDisconnectCancel(e,t){}reportStats(e){}}/**
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
 */class ur{constructor(e){this.allowedEvents_=e,this.listeners_={},g(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...t){if(Array.isArray(this.listeners_[e])){const i=[...this.listeners_[e]];for(let s=0;s<i.length;s++)i[s].callback.apply(i[s].context,t)}}on(e,t,i){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:t,context:i});const s=this.getInitialEvent(e);s&&t.apply(i,s)}off(e,t,i){this.validateEventType_(e);const s=this.listeners_[e]||[];for(let r=0;r<s.length;r++)if(s[r].callback===t&&(!i||i===s[r].context)){s.splice(r,1);return}}validateEventType_(e){g(this.allowedEvents_.find(t=>t===e),"Unknown event: "+e)}}/**
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
 */class $t extends ur{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!Ps()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new $t}getInitialEvent(e){return g(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
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
 */const ts=32,ns=768;class E{constructor(e,t){if(t===void 0){this.pieces_=e.split("/");let i=0;for(let s=0;s<this.pieces_.length;s++)this.pieces_[s].length>0&&(this.pieces_[i]=this.pieces_[s],i++);this.pieces_.length=i,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=t}toString(){let e="";for(let t=this.pieceNum_;t<this.pieces_.length;t++)this.pieces_[t]!==""&&(e+="/"+this.pieces_[t]);return e||"/"}}function I(){return new E("")}function b(n){return n.pieceNum_>=n.pieces_.length?null:n.pieces_[n.pieceNum_]}function ge(n){return n.pieces_.length-n.pieceNum_}function S(n){let e=n.pieceNum_;return e<n.pieces_.length&&e++,new E(n.pieces_,e)}function dr(n){return n.pieceNum_<n.pieces_.length?n.pieces_[n.pieces_.length-1]:null}function jc(n){let e="";for(let t=n.pieceNum_;t<n.pieces_.length;t++)n.pieces_[t]!==""&&(e+="/"+encodeURIComponent(String(n.pieces_[t])));return e||"/"}function hr(n,e=0){return n.pieces_.slice(n.pieceNum_+e)}function fr(n){if(n.pieceNum_>=n.pieces_.length)return null;const e=[];for(let t=n.pieceNum_;t<n.pieces_.length-1;t++)e.push(n.pieces_[t]);return new E(e,0)}function P(n,e){const t=[];for(let i=n.pieceNum_;i<n.pieces_.length;i++)t.push(n.pieces_[i]);if(e instanceof E)for(let i=e.pieceNum_;i<e.pieces_.length;i++)t.push(e.pieces_[i]);else{const i=e.split("/");for(let s=0;s<i.length;s++)i[s].length>0&&t.push(i[s])}return new E(t,0)}function C(n){return n.pieceNum_>=n.pieces_.length}function B(n,e){const t=b(n),i=b(e);if(t===null)return e;if(t===i)return B(S(n),S(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+n+")")}function ei(n,e){if(ge(n)!==ge(e))return!1;for(let t=n.pieceNum_,i=e.pieceNum_;t<=n.pieces_.length;t++,i++)if(n.pieces_[t]!==e.pieces_[i])return!1;return!0}function Q(n,e){let t=n.pieceNum_,i=e.pieceNum_;if(ge(n)>ge(e))return!1;for(;t<n.pieces_.length;){if(n.pieces_[t]!==e.pieces_[i])return!1;++t,++i}return!0}class Kc{constructor(e,t){this.errorPrefix_=t,this.parts_=hr(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let i=0;i<this.parts_.length;i++)this.byteLength_+=sn(this.parts_[i]);pr(this)}}function Qc(n,e){n.parts_.length>0&&(n.byteLength_+=1),n.parts_.push(e),n.byteLength_+=sn(e),pr(n)}function Yc(n){const e=n.parts_.pop();n.byteLength_-=sn(e),n.parts_.length>0&&(n.byteLength_-=1)}function pr(n){if(n.byteLength_>ns)throw new Error(n.errorPrefix_+"has a key path longer than "+ns+" bytes ("+n.byteLength_+").");if(n.parts_.length>ts)throw new Error(n.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+ts+") or object contains a cycle "+ve(n))}function ve(n){return n.parts_.length===0?"":"in property '"+n.parts_.join(".")+"'"}/**
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
 */class ti extends ur{constructor(){super(["visible"]);let e,t;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(t="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(t="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(t="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(t="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,t&&document.addEventListener(t,()=>{const i=!document[e];i!==this.visible_&&(this.visible_=i,this.trigger("visible",i))},!1)}static getInstance(){return new ti}getInitialEvent(e){return g(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
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
 */const Ye=1e3,Zc=60*5*1e3,is=30*1e3,Xc=1.3,Jc=3e4,el="server_kill",ss=3;class re extends lr{constructor(e,t,i,s,r,o,a,c){if(super(),this.repoInfo_=e,this.applicationId_=t,this.onDataUpdate_=i,this.onConnectStatus_=s,this.onServerInfoUpdate_=r,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=c,this.id=re.nextPersistentConnectionId_++,this.log_=Ct("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Ye,this.maxReconnectDelay_=Zc,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,c)throw new Error("Auth override specified in options, but not supported on non Node.js platforms");ti.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&$t.getInstance().on("online",this.onOnline_,this)}sendRequest(e,t,i){const s=++this.requestNumber_,r={r:s,a:e,b:t};this.log_(A(r)),g(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(r),i&&(this.requestCBHash_[s]=i)}get(e){this.initConnection_();const t=new nn,s={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const a=o.d;o.s==="ok"?t.resolve(a):t.reject(a)}};this.outstandingGets_.push(s),this.outstandingGetCount_++;const r=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(r),t.promise}listen(e,t,i,s){this.initConnection_();const r=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+r),this.listens.has(o)||this.listens.set(o,new Map),g(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),g(!this.listens.get(o).has(r),"listen() called twice for same path/queryId.");const a={onComplete:s,hashFn:t,query:e,tag:i};this.listens.get(o).set(r,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const t=this.outstandingGets_[e];this.sendRequest("g",t.request,i=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),t.onComplete&&t.onComplete(i)})}sendListen_(e){const t=e.query,i=t._path.toString(),s=t._queryIdentifier;this.log_("Listen on "+i+" for "+s);const r={p:i},o="q";e.tag&&(r.q=t._queryObject,r.t=e.tag),r.h=e.hashFn(),this.sendRequest(o,r,a=>{const c=a.d,l=a.s;re.warnOnListenWarnings_(c,t),(this.listens.get(i)&&this.listens.get(i).get(s))===e&&(this.log_("listen response",a),l!=="ok"&&this.removeListen_(i,s),e.onComplete&&e.onComplete(l,c))})}static warnOnListenWarnings_(e,t){if(e&&typeof e=="object"&&le(e,"w")){const i=Le(e,"w");if(Array.isArray(i)&&~i.indexOf("no_index")){const s='".indexOn": "'+t._queryParams.getIndex().toString()+'"',r=t._path.toString();U(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${s} at ${r} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||Uo(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=is)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,t=Wo(e)?"auth":"gauth",i={cred:e};this.authOverride_===null?i.noauth=!0:typeof this.authOverride_=="object"&&(i.authvar=this.authOverride_),this.sendRequest(t,i,s=>{const r=s.s,o=s.d||"error";this.authToken_===e&&(r==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(r,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const t=e.s,i=e.d||"error";t==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(t,i)})}unlisten(e,t){const i=e._path.toString(),s=e._queryIdentifier;this.log_("Unlisten called for "+i+" "+s),g(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(i,s)&&this.connected_&&this.sendUnlisten_(i,s,e._queryObject,t)}sendUnlisten_(e,t,i,s){this.log_("Unlisten on "+e+" for "+t);const r={p:e},o="n";s&&(r.q=i,r.t=s),this.sendRequest(o,r)}onDisconnectPut(e,t,i){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,t,i):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:t,onComplete:i})}onDisconnectMerge(e,t,i){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,t,i):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:t,onComplete:i})}onDisconnectCancel(e,t){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,t):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:t})}sendOnDisconnect_(e,t,i,s){const r={p:t,d:i};this.log_("onDisconnect "+e,r),this.sendRequest(e,r,o=>{s&&setTimeout(()=>{s(o.s,o.d)},Math.floor(0))})}put(e,t,i,s){this.putInternal("p",e,t,i,s)}merge(e,t,i,s){this.putInternal("m",e,t,i,s)}putInternal(e,t,i,s,r){this.initConnection_();const o={p:t,d:i};r!==void 0&&(o.h=r),this.outstandingPuts_.push({action:e,request:o,onComplete:s}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+t)}sendPut_(e){const t=this.outstandingPuts_[e].action,i=this.outstandingPuts_[e].request,s=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(t,i,r=>{this.log_(t+" response",r),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),s&&s(r.s,r.d)})}reportStats(e){if(this.connected_){const t={c:e};this.log_("reportStats",t),this.sendRequest("s",t,i=>{if(i.s!=="ok"){const r=i.d;this.log_("reportStats","Error sending stats: "+r)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+A(e));const t=e.r,i=this.requestCBHash_[t];i&&(delete this.requestCBHash_[t],i(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,t){this.log_("handleServerMessage",e,t),e==="d"?this.onDataUpdate_(t.p,t.d,!1,t.t):e==="m"?this.onDataUpdate_(t.p,t.d,!0,t.t):e==="c"?this.onListenRevoked_(t.p,t.q):e==="ac"?this.onAuthRevoked_(t.s,t.d):e==="apc"?this.onAppCheckRevoked_(t.s,t.d):e==="sd"?this.onSecurityDebugPacket_(t):On("Unrecognized action received from server: "+A(e)+`
Are you using the latest client?`)}onReady_(e,t){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=t,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){g(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Ye,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=Ye,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>Jc&&(this.reconnectDelay_=Ye),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let t=Math.max(0,this.reconnectDelay_-e);t=Math.random()*t,this.log_("Trying to reconnect in "+t+"ms"),this.scheduleConnect_(t),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*Xc)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),t=this.onReady_.bind(this),i=this.onRealtimeDisconnect_.bind(this),s=this.id+":"+re.nextConnectionId_++,r=this.lastSessionId;let o=!1,a=null;const c=function(){a?a.close():(o=!0,i())},l=function(u){g(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(u)};this.realtime_={close:c,sendRequest:l};const d=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[u,h]=await Promise.all([this.authTokenProvider_.getToken(d),this.appCheckTokenProvider_.getToken(d)]);o?F("getToken() completed but was canceled"):(F("getToken() completed. Creating connection."),this.authToken_=u&&u.accessToken,this.appCheckToken_=h&&h.token,a=new Gc(s,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,t,i,p=>{U(p+" ("+this.repoInfo_.toString()+")"),this.interrupt(el)},r))}catch(u){this.log_("Failed to get token: "+u),o||(this.repoInfo_.nodeAdmin&&U(u),c())}}}interrupt(e){F("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){F("Resuming connection for reason: "+e),delete this.interruptReasons_[e],xi(this.interruptReasons_)&&(this.reconnectDelay_=Ye,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const t=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:t})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const t=this.outstandingPuts_[e];t&&"h"in t.request&&t.queued&&(t.onComplete&&t.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,t){let i;t?i=t.map(r=>Yn(r)).join("$"):i="default";const s=this.removeListen_(e,i);s&&s.onComplete&&s.onComplete("permission_denied")}removeListen_(e,t){const i=new E(e).toString();let s;if(this.listens.has(i)){const r=this.listens.get(i);s=r.get(t),r.delete(t),r.size===0&&this.listens.delete(i)}else s=void 0;return s}onAuthRevoked_(e,t){F("Auth token revoked: "+e+"/"+t),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=ss&&(this.reconnectDelay_=is,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,t){F("App check token revoked: "+e+"/"+t),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=ss&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const t of e.values())this.sendListen_(t);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let t="js";e["sdk."+t+"."+Ws.replace(/\./g,"-")]=1,Ps()?e["framework.cordova"]=1:Mo()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=$t.getInstance().currentlyOnline();return xi(this.interruptReasons_)&&e}}re.nextPersistentConnectionId_=0;re.nextConnectionId_=0;/**
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
 */class w{constructor(e,t){this.name=e,this.node=t}static Wrap(e,t){return new w(e,t)}}/**
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
 */class rn{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,t){const i=new w(Oe,e),s=new w(Oe,t);return this.compare(i,s)!==0}minPost(){return w.MIN}}/**
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
 */let Rt;class gr extends rn{static get __EMPTY_NODE(){return Rt}static set __EMPTY_NODE(e){Rt=e}compare(e,t){return Ue(e.name,t.name)}isDefinedOn(e){throw He("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,t){return!1}minPost(){return w.MIN}maxPost(){return new w(Ce,Rt)}makePost(e,t){return g(typeof e=="string","KeyIndex indexValue must always be a string."),new w(e,Rt)}toString(){return".key"}}const Pe=new gr;/**
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
 */class At{constructor(e,t,i,s,r=null){this.isReverse_=s,this.resultGenerator_=r,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=t?i(e.key,t):1,s&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),t;if(this.resultGenerator_?t=this.resultGenerator_(e.key,e.value):t={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return t}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class M{constructor(e,t,i,s,r){this.key=e,this.value=t,this.color=i??M.RED,this.left=s??W.EMPTY_NODE,this.right=r??W.EMPTY_NODE}copy(e,t,i,s,r){return new M(e??this.key,t??this.value,i??this.color,s??this.left,r??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,i){let s=this;const r=i(e,s.key);return r<0?s=s.copy(null,null,null,s.left.insert(e,t,i),null):r===0?s=s.copy(null,t,null,null,null):s=s.copy(null,null,null,null,s.right.insert(e,t,i)),s.fixUp_()}removeMin_(){if(this.left.isEmpty())return W.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,t){let i,s;if(i=this,t(e,i.key)<0)!i.left.isEmpty()&&!i.left.isRed_()&&!i.left.left.isRed_()&&(i=i.moveRedLeft_()),i=i.copy(null,null,null,i.left.remove(e,t),null);else{if(i.left.isRed_()&&(i=i.rotateRight_()),!i.right.isEmpty()&&!i.right.isRed_()&&!i.right.left.isRed_()&&(i=i.moveRedRight_()),t(e,i.key)===0){if(i.right.isEmpty())return W.EMPTY_NODE;s=i.right.min_(),i=i.copy(s.key,s.value,null,null,i.right.removeMin_())}i=i.copy(null,null,null,null,i.right.remove(e,t))}return i.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,M.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,M.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}M.RED=!0;M.BLACK=!1;class tl{copy(e,t,i,s,r){return this}insert(e,t,i){return new M(e,t,null)}remove(e,t){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class W{constructor(e,t=W.EMPTY_NODE){this.comparator_=e,this.root_=t}insert(e,t){return new W(this.comparator_,this.root_.insert(e,t,this.comparator_).copy(null,null,M.BLACK,null,null))}remove(e){return new W(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,M.BLACK,null,null))}get(e){let t,i=this.root_;for(;!i.isEmpty();){if(t=this.comparator_(e,i.key),t===0)return i.value;t<0?i=i.left:t>0&&(i=i.right)}return null}getPredecessorKey(e){let t,i=this.root_,s=null;for(;!i.isEmpty();)if(t=this.comparator_(e,i.key),t===0){if(i.left.isEmpty())return s?s.key:null;for(i=i.left;!i.right.isEmpty();)i=i.right;return i.key}else t<0?i=i.left:t>0&&(s=i,i=i.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new At(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,t){return new At(this.root_,e,this.comparator_,!1,t)}getReverseIteratorFrom(e,t){return new At(this.root_,e,this.comparator_,!0,t)}getReverseIterator(e){return new At(this.root_,null,this.comparator_,!0,e)}}W.EMPTY_NODE=new tl;/**
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
 */function nl(n,e){return Ue(n.name,e.name)}function ni(n,e){return Ue(n,e)}/**
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
 */let $n;function il(n){$n=n}const mr=function(n){return typeof n=="number"?"number:"+Gs(n):"string:"+n},_r=function(n){if(n.isLeafNode()){const e=n.val();g(typeof e=="string"||typeof e=="number"||typeof e=="object"&&le(e,".sv"),"Priority must be a string or number.")}else g(n===$n||n.isEmpty(),"priority of unexpected type.");g(n===$n||n.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
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
 */let rs;class x{constructor(e,t=x.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=t,this.lazyHash_=null,g(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),_r(this.priorityNode_)}static set __childrenNodeConstructor(e){rs=e}static get __childrenNodeConstructor(){return rs}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new x(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:x.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return C(e)?this:b(e)===".priority"?this.priorityNode_:x.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,t){return null}updateImmediateChild(e,t){return e===".priority"?this.updatePriority(t):t.isEmpty()&&e!==".priority"?this:x.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,t).updatePriority(this.priorityNode_)}updateChild(e,t){const i=b(e);return i===null?t:t.isEmpty()&&i!==".priority"?this:(g(i!==".priority"||ge(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(i,x.__childrenNodeConstructor.EMPTY_NODE.updateChild(S(e),t)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,t){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+mr(this.priorityNode_.val())+":");const t=typeof this.value_;e+=t+":",t==="number"?e+=Gs(this.value_):e+=this.value_,this.lazyHash_=zs(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===x.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof x.__childrenNodeConstructor?-1:(g(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const t=typeof e.value_,i=typeof this.value_,s=x.VALUE_TYPE_ORDER.indexOf(t),r=x.VALUE_TYPE_ORDER.indexOf(i);return g(s>=0,"Unknown leaf type: "+t),g(r>=0,"Unknown leaf type: "+i),s===r?i==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:r-s}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const t=e;return this.value_===t.value_&&this.priorityNode_.equals(t.priorityNode_)}else return!1}}x.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
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
 */let yr,vr;function sl(n){yr=n}function rl(n){vr=n}class ol extends rn{compare(e,t){const i=e.node.getPriority(),s=t.node.getPriority(),r=i.compareTo(s);return r===0?Ue(e.name,t.name):r}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,t){return!e.getPriority().equals(t.getPriority())}minPost(){return w.MIN}maxPost(){return new w(Ce,new x("[PRIORITY-POST]",vr))}makePost(e,t){const i=yr(e);return new w(t,new x("[PRIORITY-POST]",i))}toString(){return".priority"}}const R=new ol;/**
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
 */const al=Math.log(2);class cl{constructor(e){const t=r=>parseInt(Math.log(r)/al,10),i=r=>parseInt(Array(r+1).join("1"),2);this.count=t(e+1),this.current_=this.count-1;const s=i(this.count);this.bits_=e+1&s}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const Bt=function(n,e,t,i){n.sort(e);const s=function(c,l){const d=l-c;let u,h;if(d===0)return null;if(d===1)return u=n[c],h=t?t(u):u,new M(h,u.node,M.BLACK,null,null);{const p=parseInt(d/2,10)+c,m=s(c,p),y=s(p+1,l);return u=n[p],h=t?t(u):u,new M(h,u.node,M.BLACK,m,y)}},r=function(c){let l=null,d=null,u=n.length;const h=function(m,y){const v=u-m,ee=u;u-=m;const kt=s(v+1,ee),_n=n[v],vo=t?t(_n):_n;p(new M(vo,_n.node,y,null,kt))},p=function(m){l?(l.left=m,l=m):(d=m,l=m)};for(let m=0;m<c.count;++m){const y=c.nextBitIsOne(),v=Math.pow(2,c.count-(m+1));y?h(v,M.BLACK):(h(v,M.BLACK),h(v,M.RED))}return d},o=new cl(n.length),a=r(o);return new W(i||e,a)};/**
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
 */let Tn;const De={};class se{constructor(e,t){this.indexes_=e,this.indexSet_=t}static get Default(){return g(De&&R,"ChildrenNode.ts has not been loaded"),Tn=Tn||new se({".priority":De},{".priority":R}),Tn}get(e){const t=Le(this.indexes_,e);if(!t)throw new Error("No index defined for "+e);return t instanceof W?t:null}hasIndex(e){return le(this.indexSet_,e.toString())}addIndex(e,t){g(e!==Pe,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const i=[];let s=!1;const r=t.getIterator(w.Wrap);let o=r.getNext();for(;o;)s=s||e.isDefinedOn(o.node),i.push(o),o=r.getNext();let a;s?a=Bt(i,e.getCompare()):a=De;const c=e.toString(),l=Object.assign({},this.indexSet_);l[c]=e;const d=Object.assign({},this.indexes_);return d[c]=a,new se(d,l)}addToIndexes(e,t){const i=Mt(this.indexes_,(s,r)=>{const o=Le(this.indexSet_,r);if(g(o,"Missing index implementation for "+r),s===De)if(o.isDefinedOn(e.node)){const a=[],c=t.getIterator(w.Wrap);let l=c.getNext();for(;l;)l.name!==e.name&&a.push(l),l=c.getNext();return a.push(e),Bt(a,o.getCompare())}else return De;else{const a=t.get(e.name);let c=s;return a&&(c=c.remove(new w(e.name,a))),c.insert(e,e.node)}});return new se(i,this.indexSet_)}removeFromIndexes(e,t){const i=Mt(this.indexes_,s=>{if(s===De)return s;{const r=t.get(e.name);return r?s.remove(new w(e.name,r)):s}});return new se(i,this.indexSet_)}}/**
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
 */let Ze;class _{constructor(e,t,i){this.children_=e,this.priorityNode_=t,this.indexMap_=i,this.lazyHash_=null,this.priorityNode_&&_r(this.priorityNode_),this.children_.isEmpty()&&g(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return Ze||(Ze=new _(new W(ni),null,se.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||Ze}updatePriority(e){return this.children_.isEmpty()?this:new _(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const t=this.children_.get(e);return t===null?Ze:t}}getChild(e){const t=b(e);return t===null?this:this.getImmediateChild(t).getChild(S(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,t){if(g(t,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(t);{const i=new w(e,t);let s,r;t.isEmpty()?(s=this.children_.remove(e),r=this.indexMap_.removeFromIndexes(i,this.children_)):(s=this.children_.insert(e,t),r=this.indexMap_.addToIndexes(i,this.children_));const o=s.isEmpty()?Ze:this.priorityNode_;return new _(s,o,r)}}updateChild(e,t){const i=b(e);if(i===null)return t;{g(b(e)!==".priority"||ge(e)===1,".priority must be the last token in a path");const s=this.getImmediateChild(i).updateChild(S(e),t);return this.updateImmediateChild(i,s)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const t={};let i=0,s=0,r=!0;if(this.forEachChild(R,(o,a)=>{t[o]=a.val(e),i++,r&&_.INTEGER_REGEXP_.test(o)?s=Math.max(s,Number(o)):r=!1}),!e&&r&&s<2*i){const o=[];for(const a in t)o[a]=t[a];return o}else return e&&!this.getPriority().isEmpty()&&(t[".priority"]=this.getPriority().val()),t}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+mr(this.getPriority().val())+":"),this.forEachChild(R,(t,i)=>{const s=i.hash();s!==""&&(e+=":"+t+":"+s)}),this.lazyHash_=e===""?"":zs(e)}return this.lazyHash_}getPredecessorChildName(e,t,i){const s=this.resolveIndex_(i);if(s){const r=s.getPredecessorKey(new w(e,t));return r?r.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const t=this.resolveIndex_(e);if(t){const i=t.minKey();return i&&i.name}else return this.children_.minKey()}getFirstChild(e){const t=this.getFirstChildName(e);return t?new w(t,this.children_.get(t)):null}getLastChildName(e){const t=this.resolveIndex_(e);if(t){const i=t.maxKey();return i&&i.name}else return this.children_.maxKey()}getLastChild(e){const t=this.getLastChildName(e);return t?new w(t,this.children_.get(t)):null}forEachChild(e,t){const i=this.resolveIndex_(e);return i?i.inorderTraversal(s=>t(s.name,s.node)):this.children_.inorderTraversal(t)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,t){const i=this.resolveIndex_(t);if(i)return i.getIteratorFrom(e,s=>s);{const s=this.children_.getIteratorFrom(e.name,w.Wrap);let r=s.peek();for(;r!=null&&t.compare(r,e)<0;)s.getNext(),r=s.peek();return s}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,t){const i=this.resolveIndex_(t);if(i)return i.getReverseIteratorFrom(e,s=>s);{const s=this.children_.getReverseIteratorFrom(e.name,w.Wrap);let r=s.peek();for(;r!=null&&t.compare(r,e)>0;)s.getNext(),r=s.peek();return s}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===It?-1:0}withIndex(e){if(e===Pe||this.indexMap_.hasIndex(e))return this;{const t=this.indexMap_.addIndex(e,this.children_);return new _(this.children_,this.priorityNode_,t)}}isIndexed(e){return e===Pe||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const t=e;if(this.getPriority().equals(t.getPriority()))if(this.children_.count()===t.children_.count()){const i=this.getIterator(R),s=t.getIterator(R);let r=i.getNext(),o=s.getNext();for(;r&&o;){if(r.name!==o.name||!r.node.equals(o.node))return!1;r=i.getNext(),o=s.getNext()}return r===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===Pe?null:this.indexMap_.get(e.toString())}}_.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class ll extends _{constructor(){super(new W(ni),_.EMPTY_NODE,se.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return _.EMPTY_NODE}isEmpty(){return!1}}const It=new ll;Object.defineProperties(w,{MIN:{value:new w(Oe,_.EMPTY_NODE)},MAX:{value:new w(Ce,It)}});gr.__EMPTY_NODE=_.EMPTY_NODE;x.__childrenNodeConstructor=_;il(It);rl(It);/**
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
 */const ul=!0;function L(n,e=null){if(n===null)return _.EMPTY_NODE;if(typeof n=="object"&&".priority"in n&&(e=n[".priority"]),g(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof n=="object"&&".value"in n&&n[".value"]!==null&&(n=n[".value"]),typeof n!="object"||".sv"in n){const t=n;return new x(t,L(e))}if(!(n instanceof Array)&&ul){const t=[];let i=!1;if(z(n,(o,a)=>{if(o.substring(0,1)!=="."){const c=L(a);c.isEmpty()||(i=i||!c.getPriority().isEmpty(),t.push(new w(o,c)))}}),t.length===0)return _.EMPTY_NODE;const r=Bt(t,nl,o=>o.name,ni);if(i){const o=Bt(t,R.getCompare());return new _(r,L(e),new se({".priority":o},{".priority":R}))}else return new _(r,L(e),se.Default)}else{let t=_.EMPTY_NODE;return z(n,(i,s)=>{if(le(n,i)&&i.substring(0,1)!=="."){const r=L(s);(r.isLeafNode()||!r.isEmpty())&&(t=t.updateImmediateChild(i,r))}}),t.updatePriority(L(e))}}sl(L);/**
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
 */class dl extends rn{constructor(e){super(),this.indexPath_=e,g(!C(e)&&b(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,t){const i=this.extractChild(e.node),s=this.extractChild(t.node),r=i.compareTo(s);return r===0?Ue(e.name,t.name):r}makePost(e,t){const i=L(e),s=_.EMPTY_NODE.updateChild(this.indexPath_,i);return new w(t,s)}maxPost(){const e=_.EMPTY_NODE.updateChild(this.indexPath_,It);return new w(Ce,e)}toString(){return hr(this.indexPath_,0).join("/")}}/**
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
 */class hl extends rn{compare(e,t){const i=e.node.compareTo(t.node);return i===0?Ue(e.name,t.name):i}isDefinedOn(e){return!0}indexedValueChanged(e,t){return!e.equals(t)}minPost(){return w.MIN}maxPost(){return w.MAX}makePost(e,t){const i=L(e);return new w(t,i)}toString(){return".value"}}const fl=new hl;/**
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
 */function br(n){return{type:"value",snapshotNode:n}}function Fe(n,e){return{type:"child_added",snapshotNode:e,childName:n}}function lt(n,e){return{type:"child_removed",snapshotNode:e,childName:n}}function ut(n,e,t){return{type:"child_changed",snapshotNode:e,childName:n,oldSnap:t}}function pl(n,e){return{type:"child_moved",snapshotNode:e,childName:n}}/**
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
 */class ii{constructor(e){this.index_=e}updateChild(e,t,i,s,r,o){g(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const a=e.getImmediateChild(t);return a.getChild(s).equals(i.getChild(s))&&a.isEmpty()===i.isEmpty()||(o!=null&&(i.isEmpty()?e.hasChild(t)?o.trackChildChange(lt(t,a)):g(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):a.isEmpty()?o.trackChildChange(Fe(t,i)):o.trackChildChange(ut(t,i,a))),e.isLeafNode()&&i.isEmpty())?e:e.updateImmediateChild(t,i).withIndex(this.index_)}updateFullNode(e,t,i){return i!=null&&(e.isLeafNode()||e.forEachChild(R,(s,r)=>{t.hasChild(s)||i.trackChildChange(lt(s,r))}),t.isLeafNode()||t.forEachChild(R,(s,r)=>{if(e.hasChild(s)){const o=e.getImmediateChild(s);o.equals(r)||i.trackChildChange(ut(s,r,o))}else i.trackChildChange(Fe(s,r))})),t.withIndex(this.index_)}updatePriority(e,t){return e.isEmpty()?_.EMPTY_NODE:e.updatePriority(t)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
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
 */class dt{constructor(e){this.indexedFilter_=new ii(e.getIndex()),this.index_=e.getIndex(),this.startPost_=dt.getStartPost_(e),this.endPost_=dt.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const t=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,i=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return t&&i}updateChild(e,t,i,s,r,o){return this.matches(new w(t,i))||(i=_.EMPTY_NODE),this.indexedFilter_.updateChild(e,t,i,s,r,o)}updateFullNode(e,t,i){t.isLeafNode()&&(t=_.EMPTY_NODE);let s=t.withIndex(this.index_);s=s.updatePriority(_.EMPTY_NODE);const r=this;return t.forEachChild(R,(o,a)=>{r.matches(new w(o,a))||(s=s.updateImmediateChild(o,_.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,s,i)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const t=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),t)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const t=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),t)}else return e.getIndex().maxPost()}}/**
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
 */class gl{constructor(e){this.withinDirectionalStart=t=>this.reverse_?this.withinEndPost(t):this.withinStartPost(t),this.withinDirectionalEnd=t=>this.reverse_?this.withinStartPost(t):this.withinEndPost(t),this.withinStartPost=t=>{const i=this.index_.compare(this.rangedFilter_.getStartPost(),t);return this.startIsInclusive_?i<=0:i<0},this.withinEndPost=t=>{const i=this.index_.compare(t,this.rangedFilter_.getEndPost());return this.endIsInclusive_?i<=0:i<0},this.rangedFilter_=new dt(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,t,i,s,r,o){return this.rangedFilter_.matches(new w(t,i))||(i=_.EMPTY_NODE),e.getImmediateChild(t).equals(i)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,t,i,s,r,o):this.fullLimitUpdateChild_(e,t,i,r,o)}updateFullNode(e,t,i){let s;if(t.isLeafNode()||t.isEmpty())s=_.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<t.numChildren()&&t.isIndexed(this.index_)){s=_.EMPTY_NODE.withIndex(this.index_);let r;this.reverse_?r=t.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):r=t.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;r.hasNext()&&o<this.limit_;){const a=r.getNext();if(this.withinDirectionalStart(a))if(this.withinDirectionalEnd(a))s=s.updateImmediateChild(a.name,a.node),o++;else break;else continue}}else{s=t.withIndex(this.index_),s=s.updatePriority(_.EMPTY_NODE);let r;this.reverse_?r=s.getReverseIterator(this.index_):r=s.getIterator(this.index_);let o=0;for(;r.hasNext();){const a=r.getNext();o<this.limit_&&this.withinDirectionalStart(a)&&this.withinDirectionalEnd(a)?o++:s=s.updateImmediateChild(a.name,_.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,s,i)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,t,i,s,r){let o;if(this.reverse_){const u=this.index_.getCompare();o=(h,p)=>u(p,h)}else o=this.index_.getCompare();const a=e;g(a.numChildren()===this.limit_,"");const c=new w(t,i),l=this.reverse_?a.getFirstChild(this.index_):a.getLastChild(this.index_),d=this.rangedFilter_.matches(c);if(a.hasChild(t)){const u=a.getImmediateChild(t);let h=s.getChildAfterChild(this.index_,l,this.reverse_);for(;h!=null&&(h.name===t||a.hasChild(h.name));)h=s.getChildAfterChild(this.index_,h,this.reverse_);const p=h==null?1:o(h,c);if(d&&!i.isEmpty()&&p>=0)return r!=null&&r.trackChildChange(ut(t,i,u)),a.updateImmediateChild(t,i);{r!=null&&r.trackChildChange(lt(t,u));const y=a.updateImmediateChild(t,_.EMPTY_NODE);return h!=null&&this.rangedFilter_.matches(h)?(r!=null&&r.trackChildChange(Fe(h.name,h.node)),y.updateImmediateChild(h.name,h.node)):y}}else return i.isEmpty()?e:d&&o(l,c)>=0?(r!=null&&(r.trackChildChange(lt(l.name,l.node)),r.trackChildChange(Fe(t,i))),a.updateImmediateChild(t,i).updateImmediateChild(l.name,_.EMPTY_NODE)):e}}/**
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
 */class si{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=R}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return g(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return g(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:Oe}hasEnd(){return this.endSet_}getIndexEndValue(){return g(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return g(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Ce}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return g(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===R}copy(){const e=new si;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function ml(n){return n.loadsAllData()?new ii(n.getIndex()):n.hasLimit()?new gl(n):new dt(n)}function os(n){const e={};if(n.isDefault())return e;let t;if(n.index_===R?t="$priority":n.index_===fl?t="$value":n.index_===Pe?t="$key":(g(n.index_ instanceof dl,"Unrecognized index type!"),t=n.index_.toString()),e.orderBy=A(t),n.startSet_){const i=n.startAfterSet_?"startAfter":"startAt";e[i]=A(n.indexStartValue_),n.startNameSet_&&(e[i]+=","+A(n.indexStartName_))}if(n.endSet_){const i=n.endBeforeSet_?"endBefore":"endAt";e[i]=A(n.indexEndValue_),n.endNameSet_&&(e[i]+=","+A(n.indexEndName_))}return n.limitSet_&&(n.isViewFromLeft()?e.limitToFirst=n.limit_:e.limitToLast=n.limit_),e}function as(n){const e={};if(n.startSet_&&(e.sp=n.indexStartValue_,n.startNameSet_&&(e.sn=n.indexStartName_),e.sin=!n.startAfterSet_),n.endSet_&&(e.ep=n.indexEndValue_,n.endNameSet_&&(e.en=n.indexEndName_),e.ein=!n.endBeforeSet_),n.limitSet_){e.l=n.limit_;let t=n.viewFrom_;t===""&&(n.isViewFromLeft()?t="l":t="r"),e.vf=t}return n.index_!==R&&(e.i=n.index_.toString()),e}/**
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
 */class Ht extends lr{constructor(e,t,i,s){super(),this.repoInfo_=e,this.onDataUpdate_=t,this.authTokenProvider_=i,this.appCheckTokenProvider_=s,this.log_=Ct("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,t){return t!==void 0?"tag$"+t:(g(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,t,i,s){const r=e._path.toString();this.log_("Listen called for "+r+" "+e._queryIdentifier);const o=Ht.getListenId_(e,i),a={};this.listens_[o]=a;const c=os(e._queryParams);this.restRequest_(r+".json",c,(l,d)=>{let u=d;if(l===404&&(u=null,l=null),l===null&&this.onDataUpdate_(r,u,!1,i),Le(this.listens_,o)===a){let h;l?l===401?h="permission_denied":h="rest_error:"+l:h="ok",s(h,null)}})}unlisten(e,t){const i=Ht.getListenId_(e,t);delete this.listens_[i]}get(e){const t=os(e._queryParams),i=e._path.toString(),s=new nn;return this.restRequest_(i+".json",t,(r,o)=>{let a=o;r===404&&(a=null,r=null),r===null?(this.onDataUpdate_(i,a,!1,null),s.resolve(a)):s.reject(new Error(a))}),s.promise}refreshAuthToken(e){}restRequest_(e,t={},i){return t.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([s,r])=>{s&&s.accessToken&&(t.auth=s.accessToken),r&&r.token&&(t.ac=r.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+zo(t);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(i&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let c=null;if(a.status>=200&&a.status<300){try{c=rt(a.responseText)}catch{U("Failed to parse JSON response for "+o+": "+a.responseText)}i(null,c)}else a.status!==401&&a.status!==404&&U("Got unsuccessful REST response for "+o+" Status: "+a.status),i(a.status);i=null}},a.open("GET",o,!0),a.send()})}}/**
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
 */class _l{constructor(){this.rootNode_=_.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,t){this.rootNode_=this.rootNode_.updateChild(e,t)}}/**
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
 */function Wt(){return{value:null,children:new Map}}function wr(n,e,t){if(C(e))n.value=t,n.children.clear();else if(n.value!==null)n.value=n.value.updateChild(e,t);else{const i=b(e);n.children.has(i)||n.children.set(i,Wt());const s=n.children.get(i);e=S(e),wr(s,e,t)}}function Bn(n,e,t){n.value!==null?t(e,n.value):yl(n,(i,s)=>{const r=new E(e.toString()+"/"+i);Bn(s,r,t)})}function yl(n,e){n.children.forEach((t,i)=>{e(i,t)})}/**
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
 */class vl{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),t=Object.assign({},e);return this.last_&&z(this.last_,(i,s)=>{t[i]=t[i]-s}),this.last_=e,t}}/**
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
 */const cs=10*1e3,bl=30*1e3,wl=5*60*1e3;class Cl{constructor(e,t){this.server_=t,this.statsToReport_={},this.statsListener_=new vl(e);const i=cs+(bl-cs)*Math.random();et(this.reportStats_.bind(this),Math.floor(i))}reportStats_(){const e=this.statsListener_.get(),t={};let i=!1;z(e,(s,r)=>{r>0&&le(this.statsToReport_,s)&&(t[s]=r,i=!0)}),i&&this.server_.reportStats(t),et(this.reportStats_.bind(this),Math.floor(Math.random()*2*wl))}}/**
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
 */var Y;(function(n){n[n.OVERWRITE=0]="OVERWRITE",n[n.MERGE=1]="MERGE",n[n.ACK_USER_WRITE=2]="ACK_USER_WRITE",n[n.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(Y||(Y={}));function Cr(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function ri(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function oi(n){return{fromUser:!1,fromServer:!0,queryId:n,tagged:!0}}/**
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
 */class Ut{constructor(e,t,i){this.path=e,this.affectedTree=t,this.revert=i,this.type=Y.ACK_USER_WRITE,this.source=Cr()}operationForChild(e){if(C(this.path)){if(this.affectedTree.value!=null)return g(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const t=this.affectedTree.subtree(new E(e));return new Ut(I(),t,this.revert)}}else return g(b(this.path)===e,"operationForChild called for unrelated child."),new Ut(S(this.path),this.affectedTree,this.revert)}}/**
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
 */class ht{constructor(e,t){this.source=e,this.path=t,this.type=Y.LISTEN_COMPLETE}operationForChild(e){return C(this.path)?new ht(this.source,I()):new ht(this.source,S(this.path))}}/**
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
 */class Ie{constructor(e,t,i){this.source=e,this.path=t,this.snap=i,this.type=Y.OVERWRITE}operationForChild(e){return C(this.path)?new Ie(this.source,I(),this.snap.getImmediateChild(e)):new Ie(this.source,S(this.path),this.snap)}}/**
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
 */class ft{constructor(e,t,i){this.source=e,this.path=t,this.children=i,this.type=Y.MERGE}operationForChild(e){if(C(this.path)){const t=this.children.subtree(new E(e));return t.isEmpty()?null:t.value?new Ie(this.source,I(),t.value):new ft(this.source,I(),t)}else return g(b(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new ft(this.source,S(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
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
 */class me{constructor(e,t,i){this.node_=e,this.fullyInitialized_=t,this.filtered_=i}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(C(e))return this.isFullyInitialized()&&!this.filtered_;const t=b(e);return this.isCompleteForChild(t)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
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
 */class Il{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function El(n,e,t,i){const s=[],r=[];return e.forEach(o=>{o.type==="child_changed"&&n.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&r.push(pl(o.childName,o.snapshotNode))}),Xe(n,s,"child_removed",e,i,t),Xe(n,s,"child_added",e,i,t),Xe(n,s,"child_moved",r,i,t),Xe(n,s,"child_changed",e,i,t),Xe(n,s,"value",e,i,t),s}function Xe(n,e,t,i,s,r){const o=i.filter(a=>a.type===t);o.sort((a,c)=>Sl(n,a,c)),o.forEach(a=>{const c=Tl(n,a,r);s.forEach(l=>{l.respondsTo(a.type)&&e.push(l.createEvent(c,n.query_))})})}function Tl(n,e,t){return e.type==="value"||e.type==="child_removed"||(e.prevName=t.getPredecessorChildName(e.childName,e.snapshotNode,n.index_)),e}function Sl(n,e,t){if(e.childName==null||t.childName==null)throw He("Should only compare child_ events.");const i=new w(e.childName,e.snapshotNode),s=new w(t.childName,t.snapshotNode);return n.index_.compare(i,s)}/**
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
 */function on(n,e){return{eventCache:n,serverCache:e}}function tt(n,e,t,i){return on(new me(e,t,i),n.serverCache)}function Ir(n,e,t,i){return on(n.eventCache,new me(e,t,i))}function zt(n){return n.eventCache.isFullyInitialized()?n.eventCache.getNode():null}function Ee(n){return n.serverCache.isFullyInitialized()?n.serverCache.getNode():null}/**
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
 */let Sn;const Nl=()=>(Sn||(Sn=new W(hc)),Sn);class N{constructor(e,t=Nl()){this.value=e,this.children=t}static fromObject(e){let t=new N(null);return z(e,(i,s)=>{t=t.set(new E(i),s)}),t}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,t){if(this.value!=null&&t(this.value))return{path:I(),value:this.value};if(C(e))return null;{const i=b(e),s=this.children.get(i);if(s!==null){const r=s.findRootMostMatchingPathAndValue(S(e),t);return r!=null?{path:P(new E(i),r.path),value:r.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(C(e))return this;{const t=b(e),i=this.children.get(t);return i!==null?i.subtree(S(e)):new N(null)}}set(e,t){if(C(e))return new N(t,this.children);{const i=b(e),r=(this.children.get(i)||new N(null)).set(S(e),t),o=this.children.insert(i,r);return new N(this.value,o)}}remove(e){if(C(e))return this.children.isEmpty()?new N(null):new N(null,this.children);{const t=b(e),i=this.children.get(t);if(i){const s=i.remove(S(e));let r;return s.isEmpty()?r=this.children.remove(t):r=this.children.insert(t,s),this.value===null&&r.isEmpty()?new N(null):new N(this.value,r)}else return this}}get(e){if(C(e))return this.value;{const t=b(e),i=this.children.get(t);return i?i.get(S(e)):null}}setTree(e,t){if(C(e))return t;{const i=b(e),r=(this.children.get(i)||new N(null)).setTree(S(e),t);let o;return r.isEmpty()?o=this.children.remove(i):o=this.children.insert(i,r),new N(this.value,o)}}fold(e){return this.fold_(I(),e)}fold_(e,t){const i={};return this.children.inorderTraversal((s,r)=>{i[s]=r.fold_(P(e,s),t)}),t(e,this.value,i)}findOnPath(e,t){return this.findOnPath_(e,I(),t)}findOnPath_(e,t,i){const s=this.value?i(t,this.value):!1;if(s)return s;if(C(e))return null;{const r=b(e),o=this.children.get(r);return o?o.findOnPath_(S(e),P(t,r),i):null}}foreachOnPath(e,t){return this.foreachOnPath_(e,I(),t)}foreachOnPath_(e,t,i){if(C(e))return this;{this.value&&i(t,this.value);const s=b(e),r=this.children.get(s);return r?r.foreachOnPath_(S(e),P(t,s),i):new N(null)}}foreach(e){this.foreach_(I(),e)}foreach_(e,t){this.children.inorderTraversal((i,s)=>{s.foreach_(P(e,i),t)}),this.value&&t(e,this.value)}foreachChild(e){this.children.inorderTraversal((t,i)=>{i.value&&e(t,i.value)})}}/**
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
 */class X{constructor(e){this.writeTree_=e}static empty(){return new X(new N(null))}}function nt(n,e,t){if(C(e))return new X(new N(t));{const i=n.writeTree_.findRootMostValueAndPath(e);if(i!=null){const s=i.path;let r=i.value;const o=B(s,e);return r=r.updateChild(o,t),new X(n.writeTree_.set(s,r))}else{const s=new N(t),r=n.writeTree_.setTree(e,s);return new X(r)}}}function ls(n,e,t){let i=n;return z(t,(s,r)=>{i=nt(i,P(e,s),r)}),i}function us(n,e){if(C(e))return X.empty();{const t=n.writeTree_.setTree(e,new N(null));return new X(t)}}function Hn(n,e){return Se(n,e)!=null}function Se(n,e){const t=n.writeTree_.findRootMostValueAndPath(e);return t!=null?n.writeTree_.get(t.path).getChild(B(t.path,e)):null}function ds(n){const e=[],t=n.writeTree_.value;return t!=null?t.isLeafNode()||t.forEachChild(R,(i,s)=>{e.push(new w(i,s))}):n.writeTree_.children.inorderTraversal((i,s)=>{s.value!=null&&e.push(new w(i,s.value))}),e}function fe(n,e){if(C(e))return n;{const t=Se(n,e);return t!=null?new X(new N(t)):new X(n.writeTree_.subtree(e))}}function Wn(n){return n.writeTree_.isEmpty()}function $e(n,e){return Er(I(),n.writeTree_,e)}function Er(n,e,t){if(e.value!=null)return t.updateChild(n,e.value);{let i=null;return e.children.inorderTraversal((s,r)=>{s===".priority"?(g(r.value!==null,"Priority writes must always be leaf nodes"),i=r.value):t=Er(P(n,s),r,t)}),!t.getChild(n).isEmpty()&&i!==null&&(t=t.updateChild(P(n,".priority"),i)),t}}/**
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
 */function an(n,e){return Dr(e,n)}function Dl(n,e,t,i,s){g(i>n.lastWriteId,"Stacking an older write on top of newer ones"),s===void 0&&(s=!0),n.allWrites.push({path:e,snap:t,writeId:i,visible:s}),s&&(n.visibleWrites=nt(n.visibleWrites,e,t)),n.lastWriteId=i}function kl(n,e){for(let t=0;t<n.allWrites.length;t++){const i=n.allWrites[t];if(i.writeId===e)return i}return null}function Rl(n,e){const t=n.allWrites.findIndex(a=>a.writeId===e);g(t>=0,"removeWrite called with nonexistent writeId.");const i=n.allWrites[t];n.allWrites.splice(t,1);let s=i.visible,r=!1,o=n.allWrites.length-1;for(;s&&o>=0;){const a=n.allWrites[o];a.visible&&(o>=t&&Al(a,i.path)?s=!1:Q(i.path,a.path)&&(r=!0)),o--}if(s){if(r)return Pl(n),!0;if(i.snap)n.visibleWrites=us(n.visibleWrites,i.path);else{const a=i.children;z(a,c=>{n.visibleWrites=us(n.visibleWrites,P(i.path,c))})}return!0}else return!1}function Al(n,e){if(n.snap)return Q(n.path,e);for(const t in n.children)if(n.children.hasOwnProperty(t)&&Q(P(n.path,t),e))return!0;return!1}function Pl(n){n.visibleWrites=Tr(n.allWrites,xl,I()),n.allWrites.length>0?n.lastWriteId=n.allWrites[n.allWrites.length-1].writeId:n.lastWriteId=-1}function xl(n){return n.visible}function Tr(n,e,t){let i=X.empty();for(let s=0;s<n.length;++s){const r=n[s];if(e(r)){const o=r.path;let a;if(r.snap)Q(t,o)?(a=B(t,o),i=nt(i,a,r.snap)):Q(o,t)&&(a=B(o,t),i=nt(i,I(),r.snap.getChild(a)));else if(r.children){if(Q(t,o))a=B(t,o),i=ls(i,a,r.children);else if(Q(o,t))if(a=B(o,t),C(a))i=ls(i,I(),r.children);else{const c=Le(r.children,b(a));if(c){const l=c.getChild(S(a));i=nt(i,I(),l)}}}else throw He("WriteRecord should have .snap or .children")}}return i}function Sr(n,e,t,i,s){if(!i&&!s){const r=Se(n.visibleWrites,e);if(r!=null)return r;{const o=fe(n.visibleWrites,e);if(Wn(o))return t;if(t==null&&!Hn(o,I()))return null;{const a=t||_.EMPTY_NODE;return $e(o,a)}}}else{const r=fe(n.visibleWrites,e);if(!s&&Wn(r))return t;if(!s&&t==null&&!Hn(r,I()))return null;{const o=function(l){return(l.visible||s)&&(!i||!~i.indexOf(l.writeId))&&(Q(l.path,e)||Q(e,l.path))},a=Tr(n.allWrites,o,e),c=t||_.EMPTY_NODE;return $e(a,c)}}}function Ml(n,e,t){let i=_.EMPTY_NODE;const s=Se(n.visibleWrites,e);if(s)return s.isLeafNode()||s.forEachChild(R,(r,o)=>{i=i.updateImmediateChild(r,o)}),i;if(t){const r=fe(n.visibleWrites,e);return t.forEachChild(R,(o,a)=>{const c=$e(fe(r,new E(o)),a);i=i.updateImmediateChild(o,c)}),ds(r).forEach(o=>{i=i.updateImmediateChild(o.name,o.node)}),i}else{const r=fe(n.visibleWrites,e);return ds(r).forEach(o=>{i=i.updateImmediateChild(o.name,o.node)}),i}}function Ll(n,e,t,i,s){g(i||s,"Either existingEventSnap or existingServerSnap must exist");const r=P(e,t);if(Hn(n.visibleWrites,r))return null;{const o=fe(n.visibleWrites,r);return Wn(o)?s.getChild(t):$e(o,s.getChild(t))}}function Ol(n,e,t,i){const s=P(e,t),r=Se(n.visibleWrites,s);if(r!=null)return r;if(i.isCompleteForChild(t)){const o=fe(n.visibleWrites,s);return $e(o,i.getNode().getImmediateChild(t))}else return null}function Fl(n,e){return Se(n.visibleWrites,e)}function $l(n,e,t,i,s,r,o){let a;const c=fe(n.visibleWrites,e),l=Se(c,I());if(l!=null)a=l;else if(t!=null)a=$e(c,t);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const d=[],u=o.getCompare(),h=r?a.getReverseIteratorFrom(i,o):a.getIteratorFrom(i,o);let p=h.getNext();for(;p&&d.length<s;)u(p,i)!==0&&d.push(p),p=h.getNext();return d}else return[]}function Bl(){return{visibleWrites:X.empty(),allWrites:[],lastWriteId:-1}}function Vt(n,e,t,i){return Sr(n.writeTree,n.treePath,e,t,i)}function ai(n,e){return Ml(n.writeTree,n.treePath,e)}function hs(n,e,t,i){return Ll(n.writeTree,n.treePath,e,t,i)}function qt(n,e){return Fl(n.writeTree,P(n.treePath,e))}function Hl(n,e,t,i,s,r){return $l(n.writeTree,n.treePath,e,t,i,s,r)}function ci(n,e,t){return Ol(n.writeTree,n.treePath,e,t)}function Nr(n,e){return Dr(P(n.treePath,e),n.writeTree)}function Dr(n,e){return{treePath:n,writeTree:e}}/**
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
 */class Wl{constructor(){this.changeMap=new Map}trackChildChange(e){const t=e.type,i=e.childName;g(t==="child_added"||t==="child_changed"||t==="child_removed","Only child changes supported for tracking"),g(i!==".priority","Only non-priority child changes can be tracked.");const s=this.changeMap.get(i);if(s){const r=s.type;if(t==="child_added"&&r==="child_removed")this.changeMap.set(i,ut(i,e.snapshotNode,s.snapshotNode));else if(t==="child_removed"&&r==="child_added")this.changeMap.delete(i);else if(t==="child_removed"&&r==="child_changed")this.changeMap.set(i,lt(i,s.oldSnap));else if(t==="child_changed"&&r==="child_added")this.changeMap.set(i,Fe(i,e.snapshotNode));else if(t==="child_changed"&&r==="child_changed")this.changeMap.set(i,ut(i,e.snapshotNode,s.oldSnap));else throw He("Illegal combination of changes: "+e+" occurred after "+s)}else this.changeMap.set(i,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
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
 */class Ul{getCompleteChild(e){return null}getChildAfterChild(e,t,i){return null}}const kr=new Ul;class li{constructor(e,t,i=null){this.writes_=e,this.viewCache_=t,this.optCompleteServerCache_=i}getCompleteChild(e){const t=this.viewCache_.eventCache;if(t.isCompleteForChild(e))return t.getNode().getImmediateChild(e);{const i=this.optCompleteServerCache_!=null?new me(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return ci(this.writes_,e,i)}}getChildAfterChild(e,t,i){const s=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:Ee(this.viewCache_),r=Hl(this.writes_,s,t,1,i,e);return r.length===0?null:r[0]}}/**
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
 */function zl(n){return{filter:n}}function Vl(n,e){g(e.eventCache.getNode().isIndexed(n.filter.getIndex()),"Event snap not indexed"),g(e.serverCache.getNode().isIndexed(n.filter.getIndex()),"Server snap not indexed")}function ql(n,e,t,i,s){const r=new Wl;let o,a;if(t.type===Y.OVERWRITE){const l=t;l.source.fromUser?o=Un(n,e,l.path,l.snap,i,s,r):(g(l.source.fromServer,"Unknown source."),a=l.source.tagged||e.serverCache.isFiltered()&&!C(l.path),o=Gt(n,e,l.path,l.snap,i,s,a,r))}else if(t.type===Y.MERGE){const l=t;l.source.fromUser?o=jl(n,e,l.path,l.children,i,s,r):(g(l.source.fromServer,"Unknown source."),a=l.source.tagged||e.serverCache.isFiltered(),o=zn(n,e,l.path,l.children,i,s,a,r))}else if(t.type===Y.ACK_USER_WRITE){const l=t;l.revert?o=Yl(n,e,l.path,i,s,r):o=Kl(n,e,l.path,l.affectedTree,i,s,r)}else if(t.type===Y.LISTEN_COMPLETE)o=Ql(n,e,t.path,i,r);else throw He("Unknown operation type: "+t.type);const c=r.getChanges();return Gl(e,o,c),{viewCache:o,changes:c}}function Gl(n,e,t){const i=e.eventCache;if(i.isFullyInitialized()){const s=i.getNode().isLeafNode()||i.getNode().isEmpty(),r=zt(n);(t.length>0||!n.eventCache.isFullyInitialized()||s&&!i.getNode().equals(r)||!i.getNode().getPriority().equals(r.getPriority()))&&t.push(br(zt(e)))}}function Rr(n,e,t,i,s,r){const o=e.eventCache;if(qt(i,t)!=null)return e;{let a,c;if(C(t))if(g(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const l=Ee(e),d=l instanceof _?l:_.EMPTY_NODE,u=ai(i,d);a=n.filter.updateFullNode(e.eventCache.getNode(),u,r)}else{const l=Vt(i,Ee(e));a=n.filter.updateFullNode(e.eventCache.getNode(),l,r)}else{const l=b(t);if(l===".priority"){g(ge(t)===1,"Can't have a priority with additional path components");const d=o.getNode();c=e.serverCache.getNode();const u=hs(i,t,d,c);u!=null?a=n.filter.updatePriority(d,u):a=o.getNode()}else{const d=S(t);let u;if(o.isCompleteForChild(l)){c=e.serverCache.getNode();const h=hs(i,t,o.getNode(),c);h!=null?u=o.getNode().getImmediateChild(l).updateChild(d,h):u=o.getNode().getImmediateChild(l)}else u=ci(i,l,e.serverCache);u!=null?a=n.filter.updateChild(o.getNode(),l,u,d,s,r):a=o.getNode()}}return tt(e,a,o.isFullyInitialized()||C(t),n.filter.filtersNodes())}}function Gt(n,e,t,i,s,r,o,a){const c=e.serverCache;let l;const d=o?n.filter:n.filter.getIndexedFilter();if(C(t))l=d.updateFullNode(c.getNode(),i,null);else if(d.filtersNodes()&&!c.isFiltered()){const p=c.getNode().updateChild(t,i);l=d.updateFullNode(c.getNode(),p,null)}else{const p=b(t);if(!c.isCompleteForPath(t)&&ge(t)>1)return e;const m=S(t),v=c.getNode().getImmediateChild(p).updateChild(m,i);p===".priority"?l=d.updatePriority(c.getNode(),v):l=d.updateChild(c.getNode(),p,v,m,kr,null)}const u=Ir(e,l,c.isFullyInitialized()||C(t),d.filtersNodes()),h=new li(s,u,r);return Rr(n,u,t,s,h,a)}function Un(n,e,t,i,s,r,o){const a=e.eventCache;let c,l;const d=new li(s,e,r);if(C(t))l=n.filter.updateFullNode(e.eventCache.getNode(),i,o),c=tt(e,l,!0,n.filter.filtersNodes());else{const u=b(t);if(u===".priority")l=n.filter.updatePriority(e.eventCache.getNode(),i),c=tt(e,l,a.isFullyInitialized(),a.isFiltered());else{const h=S(t),p=a.getNode().getImmediateChild(u);let m;if(C(h))m=i;else{const y=d.getCompleteChild(u);y!=null?dr(h)===".priority"&&y.getChild(fr(h)).isEmpty()?m=y:m=y.updateChild(h,i):m=_.EMPTY_NODE}if(p.equals(m))c=e;else{const y=n.filter.updateChild(a.getNode(),u,m,h,d,o);c=tt(e,y,a.isFullyInitialized(),n.filter.filtersNodes())}}}return c}function fs(n,e){return n.eventCache.isCompleteForChild(e)}function jl(n,e,t,i,s,r,o){let a=e;return i.foreach((c,l)=>{const d=P(t,c);fs(e,b(d))&&(a=Un(n,a,d,l,s,r,o))}),i.foreach((c,l)=>{const d=P(t,c);fs(e,b(d))||(a=Un(n,a,d,l,s,r,o))}),a}function ps(n,e,t){return t.foreach((i,s)=>{e=e.updateChild(i,s)}),e}function zn(n,e,t,i,s,r,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let c=e,l;C(t)?l=i:l=new N(null).setTree(t,i);const d=e.serverCache.getNode();return l.children.inorderTraversal((u,h)=>{if(d.hasChild(u)){const p=e.serverCache.getNode().getImmediateChild(u),m=ps(n,p,h);c=Gt(n,c,new E(u),m,s,r,o,a)}}),l.children.inorderTraversal((u,h)=>{const p=!e.serverCache.isCompleteForChild(u)&&h.value===null;if(!d.hasChild(u)&&!p){const m=e.serverCache.getNode().getImmediateChild(u),y=ps(n,m,h);c=Gt(n,c,new E(u),y,s,r,o,a)}}),c}function Kl(n,e,t,i,s,r,o){if(qt(s,t)!=null)return e;const a=e.serverCache.isFiltered(),c=e.serverCache;if(i.value!=null){if(C(t)&&c.isFullyInitialized()||c.isCompleteForPath(t))return Gt(n,e,t,c.getNode().getChild(t),s,r,a,o);if(C(t)){let l=new N(null);return c.getNode().forEachChild(Pe,(d,u)=>{l=l.set(new E(d),u)}),zn(n,e,t,l,s,r,a,o)}else return e}else{let l=new N(null);return i.foreach((d,u)=>{const h=P(t,d);c.isCompleteForPath(h)&&(l=l.set(d,c.getNode().getChild(h)))}),zn(n,e,t,l,s,r,a,o)}}function Ql(n,e,t,i,s){const r=e.serverCache,o=Ir(e,r.getNode(),r.isFullyInitialized()||C(t),r.isFiltered());return Rr(n,o,t,i,kr,s)}function Yl(n,e,t,i,s,r){let o;if(qt(i,t)!=null)return e;{const a=new li(i,e,s),c=e.eventCache.getNode();let l;if(C(t)||b(t)===".priority"){let d;if(e.serverCache.isFullyInitialized())d=Vt(i,Ee(e));else{const u=e.serverCache.getNode();g(u instanceof _,"serverChildren would be complete if leaf node"),d=ai(i,u)}d=d,l=n.filter.updateFullNode(c,d,r)}else{const d=b(t);let u=ci(i,d,e.serverCache);u==null&&e.serverCache.isCompleteForChild(d)&&(u=c.getImmediateChild(d)),u!=null?l=n.filter.updateChild(c,d,u,S(t),a,r):e.eventCache.getNode().hasChild(d)?l=n.filter.updateChild(c,d,_.EMPTY_NODE,S(t),a,r):l=c,l.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=Vt(i,Ee(e)),o.isLeafNode()&&(l=n.filter.updateFullNode(l,o,r)))}return o=e.serverCache.isFullyInitialized()||qt(i,I())!=null,tt(e,l,o,n.filter.filtersNodes())}}/**
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
 */class Zl{constructor(e,t){this.query_=e,this.eventRegistrations_=[];const i=this.query_._queryParams,s=new ii(i.getIndex()),r=ml(i);this.processor_=zl(r);const o=t.serverCache,a=t.eventCache,c=s.updateFullNode(_.EMPTY_NODE,o.getNode(),null),l=r.updateFullNode(_.EMPTY_NODE,a.getNode(),null),d=new me(c,o.isFullyInitialized(),s.filtersNodes()),u=new me(l,a.isFullyInitialized(),r.filtersNodes());this.viewCache_=on(u,d),this.eventGenerator_=new Il(this.query_)}get query(){return this.query_}}function Xl(n){return n.viewCache_.serverCache.getNode()}function Jl(n){return zt(n.viewCache_)}function eu(n,e){const t=Ee(n.viewCache_);return t&&(n.query._queryParams.loadsAllData()||!C(e)&&!t.getImmediateChild(b(e)).isEmpty())?t.getChild(e):null}function gs(n){return n.eventRegistrations_.length===0}function tu(n,e){n.eventRegistrations_.push(e)}function ms(n,e,t){const i=[];if(t){g(e==null,"A cancel should cancel all event registrations.");const s=n.query._path;n.eventRegistrations_.forEach(r=>{const o=r.createCancelEvent(t,s);o&&i.push(o)})}if(e){let s=[];for(let r=0;r<n.eventRegistrations_.length;++r){const o=n.eventRegistrations_[r];if(!o.matches(e))s.push(o);else if(e.hasAnyCallback()){s=s.concat(n.eventRegistrations_.slice(r+1));break}}n.eventRegistrations_=s}else n.eventRegistrations_=[];return i}function _s(n,e,t,i){e.type===Y.MERGE&&e.source.queryId!==null&&(g(Ee(n.viewCache_),"We should always have a full cache before handling merges"),g(zt(n.viewCache_),"Missing event cache, even though we have a server cache"));const s=n.viewCache_,r=ql(n.processor_,s,e,t,i);return Vl(n.processor_,r.viewCache),g(r.viewCache.serverCache.isFullyInitialized()||!s.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),n.viewCache_=r.viewCache,Ar(n,r.changes,r.viewCache.eventCache.getNode(),null)}function nu(n,e){const t=n.viewCache_.eventCache,i=[];return t.getNode().isLeafNode()||t.getNode().forEachChild(R,(r,o)=>{i.push(Fe(r,o))}),t.isFullyInitialized()&&i.push(br(t.getNode())),Ar(n,i,t.getNode(),e)}function Ar(n,e,t,i){const s=i?[i]:n.eventRegistrations_;return El(n.eventGenerator_,e,t,s)}/**
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
 */let jt;class Pr{constructor(){this.views=new Map}}function iu(n){g(!jt,"__referenceConstructor has already been defined"),jt=n}function su(){return g(jt,"Reference.ts has not been loaded"),jt}function ru(n){return n.views.size===0}function ui(n,e,t,i){const s=e.source.queryId;if(s!==null){const r=n.views.get(s);return g(r!=null,"SyncTree gave us an op for an invalid query."),_s(r,e,t,i)}else{let r=[];for(const o of n.views.values())r=r.concat(_s(o,e,t,i));return r}}function xr(n,e,t,i,s){const r=e._queryIdentifier,o=n.views.get(r);if(!o){let a=Vt(t,s?i:null),c=!1;a?c=!0:i instanceof _?(a=ai(t,i),c=!1):(a=_.EMPTY_NODE,c=!1);const l=on(new me(a,c,!1),new me(i,s,!1));return new Zl(e,l)}return o}function ou(n,e,t,i,s,r){const o=xr(n,e,i,s,r);return n.views.has(e._queryIdentifier)||n.views.set(e._queryIdentifier,o),tu(o,t),nu(o,t)}function au(n,e,t,i){const s=e._queryIdentifier,r=[];let o=[];const a=_e(n);if(s==="default")for(const[c,l]of n.views.entries())o=o.concat(ms(l,t,i)),gs(l)&&(n.views.delete(c),l.query._queryParams.loadsAllData()||r.push(l.query));else{const c=n.views.get(s);c&&(o=o.concat(ms(c,t,i)),gs(c)&&(n.views.delete(s),c.query._queryParams.loadsAllData()||r.push(c.query)))}return a&&!_e(n)&&r.push(new(su())(e._repo,e._path)),{removed:r,events:o}}function Mr(n){const e=[];for(const t of n.views.values())t.query._queryParams.loadsAllData()||e.push(t);return e}function pe(n,e){let t=null;for(const i of n.views.values())t=t||eu(i,e);return t}function Lr(n,e){if(e._queryParams.loadsAllData())return cn(n);{const i=e._queryIdentifier;return n.views.get(i)}}function Or(n,e){return Lr(n,e)!=null}function _e(n){return cn(n)!=null}function cn(n){for(const e of n.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
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
 */let Kt;function cu(n){g(!Kt,"__referenceConstructor has already been defined"),Kt=n}function lu(){return g(Kt,"Reference.ts has not been loaded"),Kt}let uu=1;class ys{constructor(e){this.listenProvider_=e,this.syncPointTree_=new N(null),this.pendingWriteTree_=Bl(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function Fr(n,e,t,i,s){return Dl(n.pendingWriteTree_,e,t,i,s),s?Tt(n,new Ie(Cr(),e,t)):[]}function we(n,e,t=!1){const i=kl(n.pendingWriteTree_,e);if(Rl(n.pendingWriteTree_,e)){let r=new N(null);return i.snap!=null?r=r.set(I(),!0):z(i.children,o=>{r=r.set(new E(o),!0)}),Tt(n,new Ut(i.path,r,t))}else return[]}function Et(n,e,t){return Tt(n,new Ie(ri(),e,t))}function du(n,e,t){const i=N.fromObject(t);return Tt(n,new ft(ri(),e,i))}function hu(n,e){return Tt(n,new ht(ri(),e))}function fu(n,e,t){const i=hi(n,t);if(i){const s=fi(i),r=s.path,o=s.queryId,a=B(r,e),c=new ht(oi(o),a);return pi(n,r,c)}else return[]}function Qt(n,e,t,i,s=!1){const r=e._path,o=n.syncPointTree_.get(r);let a=[];if(o&&(e._queryIdentifier==="default"||Or(o,e))){const c=au(o,e,t,i);ru(o)&&(n.syncPointTree_=n.syncPointTree_.remove(r));const l=c.removed;if(a=c.events,!s){const d=l.findIndex(h=>h._queryParams.loadsAllData())!==-1,u=n.syncPointTree_.findOnPath(r,(h,p)=>_e(p));if(d&&!u){const h=n.syncPointTree_.subtree(r);if(!h.isEmpty()){const p=mu(h);for(let m=0;m<p.length;++m){const y=p[m],v=y.query,ee=Wr(n,y);n.listenProvider_.startListening(it(v),pt(n,v),ee.hashFn,ee.onComplete)}}}!u&&l.length>0&&!i&&(d?n.listenProvider_.stopListening(it(e),null):l.forEach(h=>{const p=n.queryToTagMap.get(ln(h));n.listenProvider_.stopListening(it(h),p)}))}_u(n,l)}return a}function $r(n,e,t,i){const s=hi(n,i);if(s!=null){const r=fi(s),o=r.path,a=r.queryId,c=B(o,e),l=new Ie(oi(a),c,t);return pi(n,o,l)}else return[]}function pu(n,e,t,i){const s=hi(n,i);if(s){const r=fi(s),o=r.path,a=r.queryId,c=B(o,e),l=N.fromObject(t),d=new ft(oi(a),c,l);return pi(n,o,d)}else return[]}function Vn(n,e,t,i=!1){const s=e._path;let r=null,o=!1;n.syncPointTree_.foreachOnPath(s,(h,p)=>{const m=B(h,s);r=r||pe(p,m),o=o||_e(p)});let a=n.syncPointTree_.get(s);a?(o=o||_e(a),r=r||pe(a,I())):(a=new Pr,n.syncPointTree_=n.syncPointTree_.set(s,a));let c;r!=null?c=!0:(c=!1,r=_.EMPTY_NODE,n.syncPointTree_.subtree(s).foreachChild((p,m)=>{const y=pe(m,I());y&&(r=r.updateImmediateChild(p,y))}));const l=Or(a,e);if(!l&&!e._queryParams.loadsAllData()){const h=ln(e);g(!n.queryToTagMap.has(h),"View does not exist, but we have a tag");const p=yu();n.queryToTagMap.set(h,p),n.tagToQueryMap.set(p,h)}const d=an(n.pendingWriteTree_,s);let u=ou(a,e,t,d,r,c);if(!l&&!o&&!i){const h=Lr(a,e);u=u.concat(vu(n,e,h))}return u}function di(n,e,t){const s=n.pendingWriteTree_,r=n.syncPointTree_.findOnPath(e,(o,a)=>{const c=B(o,e),l=pe(a,c);if(l)return l});return Sr(s,e,r,t,!0)}function gu(n,e){const t=e._path;let i=null;n.syncPointTree_.foreachOnPath(t,(l,d)=>{const u=B(l,t);i=i||pe(d,u)});let s=n.syncPointTree_.get(t);s?i=i||pe(s,I()):(s=new Pr,n.syncPointTree_=n.syncPointTree_.set(t,s));const r=i!=null,o=r?new me(i,!0,!1):null,a=an(n.pendingWriteTree_,e._path),c=xr(s,e,a,r?o.getNode():_.EMPTY_NODE,r);return Jl(c)}function Tt(n,e){return Br(e,n.syncPointTree_,null,an(n.pendingWriteTree_,I()))}function Br(n,e,t,i){if(C(n.path))return Hr(n,e,t,i);{const s=e.get(I());t==null&&s!=null&&(t=pe(s,I()));let r=[];const o=b(n.path),a=n.operationForChild(o),c=e.children.get(o);if(c&&a){const l=t?t.getImmediateChild(o):null,d=Nr(i,o);r=r.concat(Br(a,c,l,d))}return s&&(r=r.concat(ui(s,n,i,t))),r}}function Hr(n,e,t,i){const s=e.get(I());t==null&&s!=null&&(t=pe(s,I()));let r=[];return e.children.inorderTraversal((o,a)=>{const c=t?t.getImmediateChild(o):null,l=Nr(i,o),d=n.operationForChild(o);d&&(r=r.concat(Hr(d,a,c,l)))}),s&&(r=r.concat(ui(s,n,i,t))),r}function Wr(n,e){const t=e.query,i=pt(n,t);return{hashFn:()=>(Xl(e)||_.EMPTY_NODE).hash(),onComplete:s=>{if(s==="ok")return i?fu(n,t._path,i):hu(n,t._path);{const r=gc(s,t);return Qt(n,t,null,r)}}}}function pt(n,e){const t=ln(e);return n.queryToTagMap.get(t)}function ln(n){return n._path.toString()+"$"+n._queryIdentifier}function hi(n,e){return n.tagToQueryMap.get(e)}function fi(n){const e=n.indexOf("$");return g(e!==-1&&e<n.length-1,"Bad queryKey."),{queryId:n.substr(e+1),path:new E(n.substr(0,e))}}function pi(n,e,t){const i=n.syncPointTree_.get(e);g(i,"Missing sync point for query tag that we're tracking");const s=an(n.pendingWriteTree_,e);return ui(i,t,s,null)}function mu(n){return n.fold((e,t,i)=>{if(t&&_e(t))return[cn(t)];{let s=[];return t&&(s=Mr(t)),z(i,(r,o)=>{s=s.concat(o)}),s}})}function it(n){return n._queryParams.loadsAllData()&&!n._queryParams.isDefault()?new(lu())(n._repo,n._path):n}function _u(n,e){for(let t=0;t<e.length;++t){const i=e[t];if(!i._queryParams.loadsAllData()){const s=ln(i),r=n.queryToTagMap.get(s);n.queryToTagMap.delete(s),n.tagToQueryMap.delete(r)}}}function yu(){return uu++}function vu(n,e,t){const i=e._path,s=pt(n,e),r=Wr(n,t),o=n.listenProvider_.startListening(it(e),s,r.hashFn,r.onComplete),a=n.syncPointTree_.subtree(i);if(s)g(!_e(a.value),"If we're adding a query, it shouldn't be shadowed");else{const c=a.fold((l,d,u)=>{if(!C(l)&&d&&_e(d))return[cn(d).query];{let h=[];return d&&(h=h.concat(Mr(d).map(p=>p.query))),z(u,(p,m)=>{h=h.concat(m)}),h}});for(let l=0;l<c.length;++l){const d=c[l];n.listenProvider_.stopListening(it(d),pt(n,d))}}return o}/**
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
 */class gi{constructor(e){this.node_=e}getImmediateChild(e){const t=this.node_.getImmediateChild(e);return new gi(t)}node(){return this.node_}}class mi{constructor(e,t){this.syncTree_=e,this.path_=t}getImmediateChild(e){const t=P(this.path_,e);return new mi(this.syncTree_,t)}node(){return di(this.syncTree_,this.path_)}}const bu=function(n){return n=n||{},n.timestamp=n.timestamp||new Date().getTime(),n},vs=function(n,e,t){if(!n||typeof n!="object")return n;if(g(".sv"in n,"Unexpected leaf node or priority contents"),typeof n[".sv"]=="string")return wu(n[".sv"],e,t);if(typeof n[".sv"]=="object")return Cu(n[".sv"],e);g(!1,"Unexpected server value: "+JSON.stringify(n,null,2))},wu=function(n,e,t){switch(n){case"timestamp":return t.timestamp;default:g(!1,"Unexpected server value: "+n)}},Cu=function(n,e,t){n.hasOwnProperty("increment")||g(!1,"Unexpected server value: "+JSON.stringify(n,null,2));const i=n.increment;typeof i!="number"&&g(!1,"Unexpected increment value: "+i);const s=e.node();if(g(s!==null&&typeof s<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!s.isLeafNode())return i;const o=s.getValue();return typeof o!="number"?i:o+i},Iu=function(n,e,t,i){return _i(e,new mi(t,n),i)},Ur=function(n,e,t){return _i(n,new gi(e),t)};function _i(n,e,t){const i=n.getPriority().val(),s=vs(i,e.getImmediateChild(".priority"),t);let r;if(n.isLeafNode()){const o=n,a=vs(o.getValue(),e,t);return a!==o.getValue()||s!==o.getPriority().val()?new x(a,L(s)):n}else{const o=n;return r=o,s!==o.getPriority().val()&&(r=r.updatePriority(new x(s))),o.forEachChild(R,(a,c)=>{const l=_i(c,e.getImmediateChild(a),t);l!==c&&(r=r.updateImmediateChild(a,l))}),r}}/**
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
 */class yi{constructor(e="",t=null,i={children:{},childCount:0}){this.name=e,this.parent=t,this.node=i}}function vi(n,e){let t=e instanceof E?e:new E(e),i=n,s=b(t);for(;s!==null;){const r=Le(i.node.children,s)||{children:{},childCount:0};i=new yi(s,i,r),t=S(t),s=b(t)}return i}function Ve(n){return n.node.value}function zr(n,e){n.node.value=e,qn(n)}function Vr(n){return n.node.childCount>0}function Eu(n){return Ve(n)===void 0&&!Vr(n)}function un(n,e){z(n.node.children,(t,i)=>{e(new yi(t,n,i))})}function qr(n,e,t,i){t&&e(n),un(n,s=>{qr(s,e,!0)})}function Tu(n,e,t){let i=n.parent;for(;i!==null;){if(e(i))return!0;i=i.parent}return!1}function St(n){return new E(n.parent===null?n.name:St(n.parent)+"/"+n.name)}function qn(n){n.parent!==null&&Su(n.parent,n.name,n)}function Su(n,e,t){const i=Eu(t),s=le(n.node.children,e);i&&s?(delete n.node.children[e],n.node.childCount--,qn(n)):!i&&!s&&(n.node.children[e]=t.node,n.node.childCount++,qn(n))}/**
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
 */const Nu=/[\[\].#$\/\u0000-\u001F\u007F]/,Du=/[\[\].#$\u0000-\u001F\u007F]/,Nn=10*1024*1024,Gr=function(n){return typeof n=="string"&&n.length!==0&&!Nu.test(n)},jr=function(n){return typeof n=="string"&&n.length!==0&&!Du.test(n)},ku=function(n){return n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),jr(n)},Ru=function(n,e,t,i){bi(Kn(n,"value"),e,t)},bi=function(n,e,t){const i=t instanceof E?new Kc(t,n):t;if(e===void 0)throw new Error(n+"contains undefined "+ve(i));if(typeof e=="function")throw new Error(n+"contains a function "+ve(i)+" with contents = "+e.toString());if(Vs(e))throw new Error(n+"contains "+e.toString()+" "+ve(i));if(typeof e=="string"&&e.length>Nn/3&&sn(e)>Nn)throw new Error(n+"contains a string greater than "+Nn+" utf8 bytes "+ve(i)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let s=!1,r=!1;if(z(e,(o,a)=>{if(o===".value")s=!0;else if(o!==".priority"&&o!==".sv"&&(r=!0,!Gr(o)))throw new Error(n+" contains an invalid key ("+o+") "+ve(i)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);Qc(i,o),bi(n,a,i),Yc(i)}),s&&r)throw new Error(n+' contains ".value" child '+ve(i)+" in addition to actual children.")}},Kr=function(n,e,t,i){if(!jr(t))throw new Error(Kn(n,e)+'was an invalid path = "'+t+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},Au=function(n,e,t,i){t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),Kr(n,e,t)},Qr=function(n,e){if(b(e)===".info")throw new Error(n+" failed = Can't modify data under /.info/")},Pu=function(n,e){const t=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!Gr(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||t.length!==0&&!ku(t))throw new Error(Kn(n,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
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
 */class xu{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function wi(n,e){let t=null;for(let i=0;i<e.length;i++){const s=e[i],r=s.getPath();t!==null&&!ei(r,t.path)&&(n.eventLists_.push(t),t=null),t===null&&(t={events:[],path:r}),t.events.push(s)}t&&n.eventLists_.push(t)}function Yr(n,e,t){wi(n,t),Zr(n,i=>ei(i,e))}function ne(n,e,t){wi(n,t),Zr(n,i=>Q(i,e)||Q(e,i))}function Zr(n,e){n.recursionDepth_++;let t=!0;for(let i=0;i<n.eventLists_.length;i++){const s=n.eventLists_[i];if(s){const r=s.path;e(r)?(Mu(n.eventLists_[i]),n.eventLists_[i]=null):t=!1}}t&&(n.eventLists_=[]),n.recursionDepth_--}function Mu(n){for(let e=0;e<n.events.length;e++){const t=n.events[e];if(t!==null){n.events[e]=null;const i=t.getEventRunner();Je&&F("event: "+t.toString()),ze(i)}}}/**
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
 */const Lu="repo_interrupt",Ou=25;class Fu{constructor(e,t,i,s){this.repoInfo_=e,this.forceRestClient_=t,this.authTokenProvider_=i,this.appCheckProvider_=s,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new xu,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Wt(),this.transactionQueueTree_=new yi,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function $u(n,e,t){if(n.stats_=Xn(n.repoInfo_),n.forceRestClient_||vc())n.server_=new Ht(n.repoInfo_,(i,s,r,o)=>{bs(n,i,s,r,o)},n.authTokenProvider_,n.appCheckProvider_),setTimeout(()=>ws(n,!0),0);else{if(typeof t<"u"&&t!==null){if(typeof t!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{A(t)}catch(i){throw new Error("Invalid authOverride provided: "+i)}}n.persistentConnection_=new re(n.repoInfo_,e,(i,s,r,o)=>{bs(n,i,s,r,o)},i=>{ws(n,i)},i=>{Hu(n,i)},n.authTokenProvider_,n.appCheckProvider_,t),n.server_=n.persistentConnection_}n.authTokenProvider_.addTokenChangeListener(i=>{n.server_.refreshAuthToken(i)}),n.appCheckProvider_.addTokenChangeListener(i=>{n.server_.refreshAppCheckToken(i.token)}),n.statsReporter_=Ec(n.repoInfo_,()=>new Cl(n.stats_,n.server_)),n.infoData_=new _l,n.infoSyncTree_=new ys({startListening:(i,s,r,o)=>{let a=[];const c=n.infoData_.getNode(i._path);return c.isEmpty()||(a=Et(n.infoSyncTree_,i._path,c),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),Ii(n,"connected",!1),n.serverSyncTree_=new ys({startListening:(i,s,r,o)=>(n.server_.listen(i,r,s,(a,c)=>{const l=o(a,c);ne(n.eventQueue_,i._path,l)}),[]),stopListening:(i,s)=>{n.server_.unlisten(i,s)}})}function Bu(n){const t=n.infoData_.getNode(new E(".info/serverTimeOffset")).val()||0;return new Date().getTime()+t}function Ci(n){return bu({timestamp:Bu(n)})}function bs(n,e,t,i,s){n.dataUpdateCount++;const r=new E(e);t=n.interceptServerDataCallback_?n.interceptServerDataCallback_(e,t):t;let o=[];if(s)if(i){const c=Mt(t,l=>L(l));o=pu(n.serverSyncTree_,r,c,s)}else{const c=L(t);o=$r(n.serverSyncTree_,r,c,s)}else if(i){const c=Mt(t,l=>L(l));o=du(n.serverSyncTree_,r,c)}else{const c=L(t);o=Et(n.serverSyncTree_,r,c)}let a=r;o.length>0&&(a=hn(n,r)),ne(n.eventQueue_,a,o)}function ws(n,e){Ii(n,"connected",e),e===!1&&zu(n)}function Hu(n,e){z(e,(t,i)=>{Ii(n,t,i)})}function Ii(n,e,t){const i=new E("/.info/"+e),s=L(t);n.infoData_.updateSnapshot(i,s);const r=Et(n.infoSyncTree_,i,s);ne(n.eventQueue_,i,r)}function Xr(n){return n.nextWriteId_++}function Wu(n,e,t){const i=gu(n.serverSyncTree_,e);return i!=null?Promise.resolve(i):n.server_.get(e).then(s=>{const r=L(s).withIndex(e._queryParams.getIndex());Vn(n.serverSyncTree_,e,t,!0);let o;if(e._queryParams.loadsAllData())o=Et(n.serverSyncTree_,e._path,r);else{const a=pt(n.serverSyncTree_,e);o=$r(n.serverSyncTree_,e._path,r,a)}return ne(n.eventQueue_,e._path,o),Qt(n.serverSyncTree_,e,t,null,!0),r},s=>(dn(n,"get for query "+A(e)+" failed: "+s),Promise.reject(new Error(s))))}function Uu(n,e,t,i,s){dn(n,"set",{path:e.toString(),value:t,priority:i});const r=Ci(n),o=L(t,i),a=di(n.serverSyncTree_,e),c=Ur(o,a,r),l=Xr(n),d=Fr(n.serverSyncTree_,e,c,l,!0);wi(n.eventQueue_,d),n.server_.put(e.toString(),o.val(!0),(h,p)=>{const m=h==="ok";m||U("set at "+e+" failed: "+h);const y=we(n.serverSyncTree_,l,!m);ne(n.eventQueue_,e,y),Gu(n,s,h,p)});const u=io(n,e);hn(n,u),ne(n.eventQueue_,u,[])}function zu(n){dn(n,"onDisconnectEvents");const e=Ci(n),t=Wt();Bn(n.onDisconnect_,I(),(s,r)=>{const o=Iu(s,r,n.serverSyncTree_,e);wr(t,s,o)});let i=[];Bn(t,I(),(s,r)=>{i=i.concat(Et(n.serverSyncTree_,s,r));const o=io(n,s);hn(n,o)}),n.onDisconnect_=Wt(),ne(n.eventQueue_,I(),i)}function Vu(n,e,t){let i;b(e._path)===".info"?i=Vn(n.infoSyncTree_,e,t):i=Vn(n.serverSyncTree_,e,t),Yr(n.eventQueue_,e._path,i)}function Cs(n,e,t){let i;b(e._path)===".info"?i=Qt(n.infoSyncTree_,e,t):i=Qt(n.serverSyncTree_,e,t),Yr(n.eventQueue_,e._path,i)}function qu(n){n.persistentConnection_&&n.persistentConnection_.interrupt(Lu)}function dn(n,...e){let t="";n.persistentConnection_&&(t=n.persistentConnection_.id+":"),F(t,...e)}function Gu(n,e,t,i){e&&ze(()=>{if(t==="ok")e(null);else{const s=(t||"error").toUpperCase();let r=s;i&&(r+=": "+i);const o=new Error(r);o.code=s,e(o)}})}function Jr(n,e,t){return di(n.serverSyncTree_,e,t)||_.EMPTY_NODE}function Ei(n,e=n.transactionQueueTree_){if(e||fn(n,e),Ve(e)){const t=to(n,e);g(t.length>0,"Sending zero length transaction queue"),t.every(s=>s.status===0)&&ju(n,St(e),t)}else Vr(e)&&un(e,t=>{Ei(n,t)})}function ju(n,e,t){const i=t.map(l=>l.currentWriteId),s=Jr(n,e,i);let r=s;const o=s.hash();for(let l=0;l<t.length;l++){const d=t[l];g(d.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),d.status=1,d.retryCount++;const u=B(e,d.path);r=r.updateChild(u,d.currentOutputSnapshotRaw)}const a=r.val(!0),c=e;n.server_.put(c.toString(),a,l=>{dn(n,"transaction put response",{path:c.toString(),status:l});let d=[];if(l==="ok"){const u=[];for(let h=0;h<t.length;h++)t[h].status=2,d=d.concat(we(n.serverSyncTree_,t[h].currentWriteId)),t[h].onComplete&&u.push(()=>t[h].onComplete(null,!0,t[h].currentOutputSnapshotResolved)),t[h].unwatcher();fn(n,vi(n.transactionQueueTree_,e)),Ei(n,n.transactionQueueTree_),ne(n.eventQueue_,e,d);for(let h=0;h<u.length;h++)ze(u[h])}else{if(l==="datastale")for(let u=0;u<t.length;u++)t[u].status===3?t[u].status=4:t[u].status=0;else{U("transaction at "+c.toString()+" failed: "+l);for(let u=0;u<t.length;u++)t[u].status=4,t[u].abortReason=l}hn(n,e)}},o)}function hn(n,e){const t=eo(n,e),i=St(t),s=to(n,t);return Ku(n,s,i),i}function Ku(n,e,t){if(e.length===0)return;const i=[];let s=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const c=e[a],l=B(t,c.path);let d=!1,u;if(g(l!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),c.status===4)d=!0,u=c.abortReason,s=s.concat(we(n.serverSyncTree_,c.currentWriteId,!0));else if(c.status===0)if(c.retryCount>=Ou)d=!0,u="maxretry",s=s.concat(we(n.serverSyncTree_,c.currentWriteId,!0));else{const h=Jr(n,c.path,o);c.currentInputSnapshot=h;const p=e[a].update(h.val());if(p!==void 0){bi("transaction failed: Data returned ",p,c.path);let m=L(p);typeof p=="object"&&p!=null&&le(p,".priority")||(m=m.updatePriority(h.getPriority()));const v=c.currentWriteId,ee=Ci(n),kt=Ur(m,h,ee);c.currentOutputSnapshotRaw=m,c.currentOutputSnapshotResolved=kt,c.currentWriteId=Xr(n),o.splice(o.indexOf(v),1),s=s.concat(Fr(n.serverSyncTree_,c.path,kt,c.currentWriteId,c.applyLocally)),s=s.concat(we(n.serverSyncTree_,v,!0))}else d=!0,u="nodata",s=s.concat(we(n.serverSyncTree_,c.currentWriteId,!0))}ne(n.eventQueue_,t,s),s=[],d&&(e[a].status=2,function(h){setTimeout(h,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(u==="nodata"?i.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):i.push(()=>e[a].onComplete(new Error(u),!1,null))))}fn(n,n.transactionQueueTree_);for(let a=0;a<i.length;a++)ze(i[a]);Ei(n,n.transactionQueueTree_)}function eo(n,e){let t,i=n.transactionQueueTree_;for(t=b(e);t!==null&&Ve(i)===void 0;)i=vi(i,t),e=S(e),t=b(e);return i}function to(n,e){const t=[];return no(n,e,t),t.sort((i,s)=>i.order-s.order),t}function no(n,e,t){const i=Ve(e);if(i)for(let s=0;s<i.length;s++)t.push(i[s]);un(e,s=>{no(n,s,t)})}function fn(n,e){const t=Ve(e);if(t){let i=0;for(let s=0;s<t.length;s++)t[s].status!==2&&(t[i]=t[s],i++);t.length=i,zr(e,t.length>0?t:void 0)}un(e,i=>{fn(n,i)})}function io(n,e){const t=St(eo(n,e)),i=vi(n.transactionQueueTree_,e);return Tu(i,s=>{Dn(n,s)}),Dn(n,i),qr(i,s=>{Dn(n,s)}),t}function Dn(n,e){const t=Ve(e);if(t){const i=[];let s=[],r=-1;for(let o=0;o<t.length;o++)t[o].status===3||(t[o].status===1?(g(r===o-1,"All SENT items should be at beginning of queue."),r=o,t[o].status=3,t[o].abortReason="set"):(g(t[o].status===0,"Unexpected transaction status in abort"),t[o].unwatcher(),s=s.concat(we(n.serverSyncTree_,t[o].currentWriteId,!0)),t[o].onComplete&&i.push(t[o].onComplete.bind(null,new Error("set"),!1,null))));r===-1?zr(e,void 0):t.length=r+1,ne(n.eventQueue_,St(e),s);for(let o=0;o<i.length;o++)ze(i[o])}}/**
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
 */function Qu(n){let e="";const t=n.split("/");for(let i=0;i<t.length;i++)if(t[i].length>0){let s=t[i];try{s=decodeURIComponent(s.replace(/\+/g," "))}catch{}e+="/"+s}return e}function Yu(n){const e={};n.charAt(0)==="?"&&(n=n.substring(1));for(const t of n.split("&")){if(t.length===0)continue;const i=t.split("=");i.length===2?e[decodeURIComponent(i[0])]=decodeURIComponent(i[1]):U(`Invalid query segment '${t}' in query '${n}'`)}return e}const Is=function(n,e){const t=Zu(n),i=t.namespace;t.domain==="firebase.com"&&ce(t.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!i||i==="undefined")&&t.domain!=="localhost"&&ce("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),t.secure||uc();const s=t.scheme==="ws"||t.scheme==="wss";return{repoInfo:new nr(t.host,t.secure,i,s,e,"",i!==t.subdomain),path:new E(t.pathString)}},Zu=function(n){let e="",t="",i="",s="",r="",o=!0,a="https",c=443;if(typeof n=="string"){let l=n.indexOf("//");l>=0&&(a=n.substring(0,l-1),n=n.substring(l+2));let d=n.indexOf("/");d===-1&&(d=n.length);let u=n.indexOf("?");u===-1&&(u=n.length),e=n.substring(0,Math.min(d,u)),d<u&&(s=Qu(n.substring(d,u)));const h=Yu(n.substring(Math.min(n.length,u)));l=e.indexOf(":"),l>=0?(o=a==="https"||a==="wss",c=parseInt(e.substring(l+1),10)):l=e.length;const p=e.slice(0,l);if(p.toLowerCase()==="localhost")t="localhost";else if(p.split(".").length<=2)t=p;else{const m=e.indexOf(".");i=e.substring(0,m).toLowerCase(),t=e.substring(m+1),r=i}"ns"in h&&(r=h.ns)}return{host:e,port:c,domain:t,subdomain:i,secure:o,scheme:a,pathString:s,namespace:r}};/**
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
 */class Xu{constructor(e,t,i,s){this.eventType=e,this.eventRegistration=t,this.snapshot=i,this.prevName=s}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+A(this.snapshot.exportVal())}}class Ju{constructor(e,t,i){this.eventRegistration=e,this.error=t,this.path=i}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
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
 */class so{constructor(e,t){this.snapshotCallback=e,this.cancelCallback=t}onValue(e,t){this.snapshotCallback.call(null,e,t)}onCancel(e){return g(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
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
 */class Ti{constructor(e,t,i,s){this._repo=e,this._path=t,this._queryParams=i,this._orderByCalled=s}get key(){return C(this._path)?null:dr(this._path)}get ref(){return new ue(this._repo,this._path)}get _queryIdentifier(){const e=as(this._queryParams),t=Yn(e);return t==="{}"?"default":t}get _queryObject(){return as(this._queryParams)}isEqual(e){if(e=We(e),!(e instanceof Ti))return!1;const t=this._repo===e._repo,i=ei(this._path,e._path),s=this._queryIdentifier===e._queryIdentifier;return t&&i&&s}toJSON(){return this.toString()}toString(){return this._repo.toString()+jc(this._path)}}class ue extends Ti{constructor(e,t){super(e,t,new si,!1)}get parent(){const e=fr(this._path);return e===null?null:new ue(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class gt{constructor(e,t,i){this._node=e,this.ref=t,this._index=i}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const t=new E(e),i=Yt(this.ref,e);return new gt(this._node.getChild(t),i,R)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(i,s)=>e(new gt(s,Yt(this.ref,i),R)))}hasChild(e){const t=new E(e);return!this._node.getChild(t).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function Be(n,e){return n=We(n),n._checkNotDeleted("ref"),e!==void 0?Yt(n._root,e):n._root}function Yt(n,e){return n=We(n),b(n._path)===null?Au("child","path",e):Kr("child","path",e),new ue(n._repo,P(n._path,e))}function ed(n){return Qr("remove",n._path),Zt(n,null)}function Zt(n,e){n=We(n),Qr("set",n._path),Ru("set",e,n._path);const t=new nn;return Uu(n._repo,n._path,e,null,t.wrapCallback(()=>{})),t.promise}function td(n){n=We(n);const e=new so(()=>{}),t=new pn(e);return Wu(n._repo,n,t).then(i=>new gt(i,new ue(n._repo,n._path),n._queryParams.getIndex()))}class pn{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,t){const i=t._queryParams.getIndex();return new Xu("value",this,new gt(e.snapshotNode,new ue(t._repo,t._path),i))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,t){return this.callbackContext.hasCancelCallback?new Ju(this,e,t):null}matches(e){return e instanceof pn?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}function nd(n,e,t,i,s){let r;if(typeof i=="object"&&(r=void 0,s=i),typeof i=="function"&&(r=i),s&&s.onlyOnce){const c=t,l=(d,u)=>{Cs(n._repo,n,a),c(d,u)};l.userCallback=t.userCallback,l.context=t.context,t=l}const o=new so(t,r||void 0),a=new pn(o);return Vu(n._repo,n,a),()=>Cs(n._repo,n,a)}function id(n,e,t,i){return nd(n,"value",e,t,i)}iu(ue);cu(ue);/**
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
 */const sd="FIREBASE_DATABASE_EMULATOR_HOST",Gn={};let rd=!1;function od(n,e,t,i){n.repoInfo_=new nr(`${e}:${t}`,!1,n.repoInfo_.namespace,n.repoInfo_.webSocketOnly,n.repoInfo_.nodeAdmin,n.repoInfo_.persistenceKey,n.repoInfo_.includeNamespaceInQueryParams,!0),i&&(n.authTokenProvider_=i)}function ad(n,e,t,i,s){let r=i||n.options.databaseURL;r===void 0&&(n.options.projectId||ce("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),F("Using default host for project ",n.options.projectId),r=`${n.options.projectId}-default-rtdb.firebaseio.com`);let o=Is(r,s),a=o.repoInfo,c;typeof process<"u"&&zi&&(c=zi[sd]),c?(r=`http://${c}?ns=${a.namespace}`,o=Is(r,s),a=o.repoInfo):o.repoInfo.secure;const l=new wc(n.name,n.options,e);Pu("Invalid Firebase Database URL",o),C(o.path)||ce("Database URL must point to the root of a Firebase Database (not including a child path).");const d=ld(a,n,l,new bc(n.name,t));return new ud(d,n)}function cd(n,e){const t=Gn[e];(!t||t[n.key]!==n)&&ce(`Database ${e}(${n.repoInfo_}) has already been deleted.`),qu(n),delete t[n.key]}function ld(n,e,t,i){let s=Gn[e.name];s||(s={},Gn[e.name]=s);let r=s[n.toURLString()];return r&&ce("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),r=new Fu(n,rd,t,i),s[n.toURLString()]=r,r}class ud{constructor(e,t){this._repoInternal=e,this.app=t,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||($u(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new ue(this._repo,I())),this._rootInternal}_delete(){return this._rootInternal!==null&&(cd(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&ce("Cannot call "+e+" on a deleted database.")}}function dd(n=Ga(),e){const t=Ua(n,"database").getImmediate({identifier:e});if(!t._instanceStarted){const i=Ao("database");i&&hd(t,...i)}return t}function hd(n,e,t,i={}){n=We(n),n._checkNotDeleted("useEmulator"),n._instanceStarted&&ce("Cannot call useEmulator() after instance has already been initialized.");const s=n._repoInternal;let r;if(s.repoInfo_.nodeAdmin)i.mockUserToken&&ce('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),r=new Pt(Pt.OWNER);else if(i.mockUserToken){const o=typeof i.mockUserToken=="string"?i.mockUserToken:Po(i.mockUserToken,n.app.options.projectId);r=new Pt(o)}od(s,e,t,r)}/**
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
 */function fd(n){sc(qa),Ot(new ot("database",(e,{instanceIdentifier:t})=>{const i=e.getProvider("app").getImmediate(),s=e.getProvider("auth-internal"),r=e.getProvider("app-check-internal");return ad(i,s,r,t)},"PUBLIC").setMultipleInstances(!0)),Re(Vi,qi,n),Re(Vi,qi,"esm2017")}re.prototype.simpleListen=function(n,e){this.sendRequest("q",{p:n},e)};re.prototype.echo=function(n,e){this.sendRequest("echo",{d:n},e)};fd();const pd={apiKey:"AIzaSyBNNZLbYUCp2QSWwoK0HJhzLdgRbWv3jzY",authDomain:"behaeltertrack.firebaseapp.com",databaseURL:"https://behaeltertrack-default-rtdb.europe-west1.firebasedatabase.app",projectId:"behaeltertrack",storageBucket:"behaeltertrack.firebasestorage.app",messagingSenderId:"528411805785",appId:"1:528411805785:web:e53a588db0808796dd0948",measurementId:"G-9R5SLN5N1G"},gd=$s(pd),Te=dd(gd),xe=async(n,e)=>{try{return await Zt(Be(Te,n),e),{success:!0}}catch(t){return console.error("Error setting data:",t),{success:!1,error:t}}},oe=async n=>{const e=Be(Te);try{const t=await td(Yt(e,n));return t.exists()?t.val():(console.log("No data available at path:",n),null)}catch(t){return console.error("Error getting data:",t),null}},qe=async(n,e)=>{try{const t=await oe(n);if(t){const i={...t,...e};await Zt(Be(Te,n),i),console.log(`✅ Updated ${n} (partial update)`)}else await Zt(Be(Te,n),e),console.log(`✅ Created ${n} (no existing data)`);return{success:!0}}catch(t){return console.error("Error updating data:",t),{success:!1,error:t}}},md=async n=>{try{return await ed(Be(Te,n)),{success:!0}}catch(e){return console.error("Error deleting data:",e),{success:!1,error:e}}},st=(n,e)=>{const t=Be(Te,n);return id(t,s=>{const r=s.exists()?s.val():null;e(r)},s=>{console.error("Error listening to data:",s)})},ro=async()=>{try{return await oe("partTypeStandards/Housing")||(console.log("Initializing default standards..."),await xe("partTypeStandards/Housing",{containerCapacity:200,defectTypes:{mass:["Maßabweichung","Formfehler","Positionsfehler"],lehre:["Kratzer","Delle","Verschmutzung","Riss","Fehlbohrung","Grat"],sicht:["n.i.O."]},inspectionTypes:["lehre","mass","sicht"],inspectionSequence:[["lehre"],["lehre","mass"],["lehre","mass","sicht"]]})),await oe("tbkDatabase")||await xe("tbkDatabase",{}),await oe("inspectionDatabase")||await xe("inspectionDatabase",{}),console.log("Database initialized successfully"),{success:!0}}catch(n){return console.error("Error initializing database:",n),{success:!1,error:n}}},Nt=Object.freeze(Object.defineProperty({__proto__:null,database:Te,deleteData:md,getData:oe,initializeDatabase:ro,listenToData:st,setData:xe,updateData:qe},Symbol.toStringTag,{value:"Module"})),f={language:"de",personnelNumber:"",userName:"",isPaused:!1,pauseStart:null,currentScreen:"main",history:[],currentInspection:{articleNumber:"",tz:0,containerNumber:"",quantity:0,inspectionType:"",defects:{},totalDefects:0,inspectionDbId:null},tbkDatabase:{},inspectionDatabase:{},partTypeStandards:{Housing:{containerCapacity:200,defectTypes:{mass:["Maßabweichung","Formfehler","Positionsfehler"],lehre:["Kratzer","Delle","Verschmutzung","Riss","Fehlbohrung","Grat"],sicht:["n.i.O."]},inspectionTypes:["lehre","mass","sicht"],inspectionSequence:[["lehre"],["mass"],["sicht"]],drawing:null}}},_d=async()=>{try{console.log("Initializing state from Firebase...");const n=await oe("tbkDatabase");n&&(f.tbkDatabase=n);const e=await oe("inspectionDatabase");e&&(f.inspectionDatabase=e);const t=await oe("partTypeStandards/Housing");return t&&(f.partTypeStandards.Housing=t),yd(),console.log("State initialized successfully"),{success:!0}}catch(n){return console.error("Error initializing state:",n),{success:!1,error:n}}},yd=()=>{st("tbkDatabase",n=>{console.log("TBK Database updated from Firebase"),f.tbkDatabase=n||{},window.updateDatabaseUI&&window.updateDatabaseUI()}),st("inspectionDatabase",n=>{console.log("Inspection Database updated from Firebase"),f.inspectionDatabase=n||{},window.updateDatabaseUI&&window.updateDatabaseUI()}),st("partTypeStandards/Housing",n=>{console.log("Standards updated from Firebase"),n&&(f.partTypeStandards.Housing=n),window.updateStandardsUI&&window.updateStandardsUI()}),console.log("Real-time listeners activated")},vd=async n=>{try{const{batchNummer:e}=n;return await xe(`tbkDatabase/${e}`,n),console.log("TBK entry added:",e),{success:!0,key:e}}catch(e){return console.error("Error adding TBK entry:",e),{success:!1,error:e}}},Si=async n=>{try{return await oe(`tbkDatabase/${n}`)}catch(e){return console.error("Error getting TBK entry:",e),null}},bd=async(n,e)=>{try{return await qe(`tbkDatabase/${n}`,e),console.log("TBK entry updated:",n),{success:!0}}catch(t){return console.error("Error updating TBK entry:",t),{success:!1,error:t}}},wd=async(n,e)=>{try{return await xe(`inspectionDatabase/${n}`,e),console.log("Inspection added:",n),{success:!0,key:n}}catch(t){return console.error("Error adding inspection:",t),{success:!1,error:t}}},Ni=async(n,e)=>{try{return await qe(`inspectionDatabase/${n}`,e),console.log("Inspection updated:",n),{success:!0}}catch(t){return console.error("Error updating inspection:",t),{success:!1,error:t}}},Cd=async n=>{try{return await qe("partTypeStandards/Housing",{containerCapacity:n}),console.log("Container capacity updated:",n),{success:!0}}catch(e){return console.error("Error updating container capacity:",e),{success:!1,error:e}}},Id=async(n,e)=>{try{const i=[...f.partTypeStandards.Housing.defectTypes[n]||[],e],s={};return s[`defectTypes/${n}`]=i,await qe("partTypeStandards/Housing",s),console.log("Defect type added:",n,e),{success:!0}}catch(t){return console.error("Error adding defect type:",t),{success:!1,error:t}}},Ed=async(n,e)=>{try{const i=(f.partTypeStandards.Housing.defectTypes[n]||[]).filter((r,o)=>o!==e),s={};return s[`defectTypes/${n}`]=i,await qe("partTypeStandards/Housing",s),console.log("Defect type removed:",n,e),{success:!0}}catch(t){return console.error("Error removing defect type:",t),{success:!1,error:t}}},Xt=()=>Object.values(f.tbkDatabase),Ge=()=>Object.values(f.inspectionDatabase);let te="";function Td(n){te.length<10&&(te+=n,Di(),"vibrate"in navigator&&navigator.vibrate(50))}function Sd(){te.length>0&&(te=te.slice(0,-1),Di(),"vibrate"in navigator&&navigator.vibrate(50))}function Di(){const n=document.getElementById("loginDisplay"),e=document.getElementById("loginValue");if(e)if(te.length===0)e.innerHTML="-",e.classList.add("empty"),n.classList.remove("active");else{let t="";for(let i=0;i<te.length;i++)t+=`<span class="digit">${te[i]}</span>`;e.innerHTML=t,e.classList.remove("empty"),n.classList.add("active")}}const Nd={de:{loginTitle:"Qualitätsprüfung",personnelPlaceholder:"Personalnummer",loginBtn:"Anmelden",serie:"Serie",sonderfall:"Sonderfall",sicht:"Sicht",sonstiges:"Sonstiges",lehre:"Lehre",mass:"Maß",scanComplete:"Scan abgeschlossen",containerNumber:"Behälternummer eingeben",confirm:"Bestätigen",quantity:"Teileanzahl",fullContainer:"Voller Behälter",currentState:"Aktueller Stand",manual:"Manuell eingeben",articleNumber:"Artikelnummer",totalQuantity:"Gesamtmenge",defectCount:"Ausschuss",inspector:"Prüfer",inspectionComplete:"Prüfung abgeschlossen",resetInspection:"Prüfung zurücksetzen",nextInspection:"Nächste Prüfung",pauseTitle:"ABWESEND",returnBtn:"Wieder anwesend",featureNotAvailable:"Feature nicht verfügbar",featureInProgress:"Feature in Arbeit",active:"Aktiv",finished:"Fertig"},pl:{loginTitle:"Kontrola Jakości",personnelPlaceholder:"Numer personelu",loginBtn:"Zaloguj się",serie:"Seria",sonderfall:"Przypadek specjalny",sicht:"Wzrok",sonstiges:"Inne",lehre:"Szablon",mass:"Wymiar",scanComplete:"Skanowanie zakończone",containerNumber:"Wprowadź numer kontenera",confirm:"Potwierdź",quantity:"Ilość części",fullContainer:"Pełny kontener",currentState:"Aktualny stan",manual:"Wprowadź ręcznie",articleNumber:"Numer artykułu",totalQuantity:"Całkowita ilość",defectCount:"Złom",inspector:"Inspektor",inspectionComplete:"Kontrola zakończona",resetInspection:"Resetuj kontrolę",nextInspection:"Następna kontrola",pauseTitle:"NIEOBECNY",returnBtn:"Z powrotem",featureNotAvailable:"Funkcja niedostępna",featureInProgress:"Funkcja w toku",active:"Aktywny",finished:"Zakończone"}};function D(n){return Nd[f.language][n]||n}function Dd(){if(te.length>0)"vibrate"in navigator&&navigator.vibrate(200),f.personnelNumber=te,f.userName="P-"+f.personnelNumber,document.getElementById("userName").textContent=f.userName,document.getElementById("loginScreen").classList.add("hidden"),document.getElementById("mainApp").classList.remove("hidden"),Ke();else{const n=document.getElementById("loginDisplay");n.style.animation="none",setTimeout(()=>{n.style.animation="shake 0.5s"},10)}}function kd(){f.language=f.language==="de"?"pl":"de";const n=document.getElementById("languageBtn");n.textContent=f.language==="de"?"🇩🇪":"🇵🇱",Rd()}function Rd(){document.getElementById("loginTitle").textContent=D("loginTitle");const n=document.querySelector("#loginScreen .number-input-label");n&&(n.textContent=D("personnelPlaceholder")),document.getElementById("pauseTitle").textContent=D("pauseTitle"),document.getElementById("returnBtn").textContent=D("returnBtn");const e=f.currentScreen;e==="main"?Ke():e==="serie"&&mt()}function Ad(){f.isPaused=!f.isPaused;const n=document.getElementById("pauseScreen");f.isPaused?(f.pauseStart=new Date,n.classList.remove("hidden"),oo()):(n.classList.add("hidden"),f.pauseStart=null)}function oo(){if(!f.isPaused)return;const e=new Date-f.pauseStart,t=Math.floor(e/36e5),i=Math.floor(e%36e5/6e4),s=Math.floor(e%6e4/1e3);document.getElementById("pauseTime").textContent=`seit ${String(t).padStart(2,"0")}:${String(i).padStart(2,"0")}:${String(s).padStart(2,"0")}`,setTimeout(oo,1e3)}function ao(){f.history.length>0&&f.history.pop()()}function je(n){f.history.push(n)}function Pd(){window.open("https://toxic-pisces.github.io/haering/testt.html","_blank")}function Ke(){f.currentScreen="main",f.history=[];const n=document.getElementById("contentArea");n.innerHTML=`
        <div class="content-grid grid-2">
            <button class="big-btn animate-scale stagger-1" onclick="showSerieMenu()">${D("serie")}</button>
            <button class="big-btn animate-scale stagger-2" onclick="showFeatureNotAvailable()">${D("sonderfall")}</button>
        </div>
    `}function mt(){je(Ke),f.currentScreen="serie";const n=document.getElementById("contentArea");n.innerHTML=`
        <div class="content-grid grid-4">
            <button class="big-btn animate-scale stagger-1" onclick="startInspection('sicht')">${D("sicht")}</button>
            <button class="big-btn animate-scale stagger-2" onclick="showFeatureInProgress()">${D("sonstiges")}</button>
            <button class="big-btn animate-scale stagger-3" onclick="startInspection('lehre')">${D("lehre")}</button>
            <button class="big-btn animate-scale stagger-4" onclick="startInspection('mass')">${D("mass")}</button>
        </div>
    `}function xd(n){je(mt),f.currentInspection.inspectionType=n,co()}function Md(n,e,t){const i=Ne(n,e);if(!i)return null;const s=f.partTypeStandards.Housing.inspectionSequence;if(!s||s.length===0)return null;const r={lehre:"L",mass:"M",sicht:"S"},o={L:"Lehre",M:"Maß",S:"Sicht"},a=Ge().filter(l=>l.batchNummer===i);let c=-1;for(let l=0;l<s.length;l++)if(s[l].includes(t)){c=l;break}if(c===-1)return`${o[r[t]]}-Prüfung ist in den Standards nicht aktiviert.`;for(let l=0;l<c;l++){const d=s[l];for(const u of d){const h=r[u];if(!a.some(m=>m.inspektion===h)){const m=o[r[t]],y=o[h];return`${m}-Prüfung kann erst nach ${y}-Prüfung durchgeführt werden.`}}}return null}async function Ld(n,e,t){const i=Ne(n,e);if(!i)return null;const s=f.partTypeStandards.Housing.containerCapacity,r={lehre:"L",mass:"M",sicht:"S"},o={L:"Lehre",M:"Maß",S:"Sicht"},a=r[t],c=await Si(i);let l;c&&c.currentPartsInContainer!==null&&c.currentPartsInContainer!==void 0?(l=c.currentPartsInContainer,console.log(`📊 Using currentPartsInContainer from TBK: ${l}`)):(l=s,console.log(`📊 First inspection - using container capacity: ${l}`)),console.log("🔍 Fetching fresh inspection data from Firebase..."),await new Promise(v=>setTimeout(v,100));const d=Ge();console.log("📊 Total inspections in database:",d.length);const u=d.filter(v=>v.batchNummer===i&&v.inspektion===a);if(console.log(`📊 Inspections of type ${a} for batch ${i}:`,u.length),u.length===0)return console.log("✅ First inspection for this type - allowing"),f.currentInspection.remainingCapacity=l,f.currentInspection.actualPartsInContainer=l,null;const h=u.filter(v=>v.ende&&v.ende!==null&&v.ende!==void 0),p=u.find(v=>!v.ende||v.ende===null||v.ende===void 0);if(console.log("✔️ Completed inspections:",h.length),console.log("⏳ Active inspections:",p?"YES":"NO"),u.forEach((v,ee)=>{console.log(`  Inspection ${ee+1}:`,{pruefungsNummer:v.pruefungsNummer,total:v.total,ende:v.ende,endeType:typeof v.ende,isComplete:!!(v.ende&&v.ende!==null),isActive:!v.ende||v.ende===null})}),p)return console.log("✅ Active inspection found - bypassing capacity check, allowing join"),console.log("📋 Active inspection details:",{pruefungsNummer:p.pruefungsNummer,pruefer:p.pruefer,total:p.total,ende:p.ende}),f.currentInspection.remainingCapacity=l,f.currentInspection.actualPartsInContainer=l,null;if(h.length===0)return console.log("✅ No completed inspections - allowing"),f.currentInspection.remainingCapacity=l,f.currentInspection.actualPartsInContainer=l,null;const m=h.reduce((v,ee)=>v+ee.total,0);console.log(`📊 Total inspected (completed only): ${m}/${l}`);const y=l-m;if(y<=0){const v=o[a];return console.log("❌ Container full - blocking"),`Dieser Behälter ist für ${v}-Prüfung bereits voll (${l}/${l} Teile geprüft).`}return console.log(`✅ Remaining capacity: ${y} parts`),f.currentInspection.remainingCapacity=y,f.currentInspection.actualPartsInContainer=l,null}function co(){po()}function gn(){je(co);const n=document.getElementById("contentArea");n.innerHTML=`
        <div class="data-confirmation animate-scale">
            <h2 class="animate-slide-up">Teilebegleitkarte gescannt</h2>
            <div class="data-row animate-slide-right stagger-1">
                <span class="data-label">TBK Nummer:</span>
                <span class="data-value">${f.currentInspection.articleNumber}</span>
            </div>
            <div class="data-row animate-slide-right stagger-2">
                <span class="data-label">Artikel:</span>
                <span class="data-value">Housing</span>
            </div>
            <div class="data-row animate-slide-right stagger-3">
                <span class="data-label">TZ:</span>
                <span class="data-value">${f.currentInspection.tz}</span>
            </div>
            <button class="btn-primary animate-slide-up stagger-4" onclick="showContainerNumberInput()">${D("confirm")}</button>
        </div>
    `}let V="";function Od(){je(gn),V="";const n=document.getElementById("contentArea");n.innerHTML=`
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
    `,_t()}function Fd(n){V.length<6&&(V+=n,_t(),"vibrate"in navigator&&navigator.vibrate(50))}function $d(){V.length>0&&(V=V.slice(0,-1),_t(),"vibrate"in navigator&&navigator.vibrate(50))}function _t(){const n=document.getElementById("containerDisplay"),e=document.getElementById("containerValue");if(e)if(V.length===0)e.innerHTML="------",e.classList.add("empty"),n.classList.remove("active");else{let t="";for(let i=0;i<6;i++)i<V.length?t+=`<span class="digit">${V[i]}</span>`:t+="-";e.innerHTML=t,e.classList.remove("empty"),n.classList.add("active")}}let $={first:null,second:null,third:null,attempt:1};async function Bd(){if(V.length===6){const n=V;if($.attempt===1){$.first=n,$.attempt=2,V="",_t(),ie({title:"Bestätigung",content:'<p style="font-size: 18px; text-align: center;">Bitte erneut eingeben</p>',buttons:[{text:"OK",action:()=>{j()}}]}),"vibrate"in navigator&&navigator.vibrate(100);return}if($.attempt===2)if($.second=n,$.first===$.second)await Es(n);else{$.attempt=3,V="",_t(),ie({title:"Fehler",content:`<p style="color: #e74c3c; font-size: 18px; text-align: center; margin: 20px 0;">Nummern stimmen nicht überein</p>
                              <p style="font-size: 16px; text-align: center;">Bitte korrekte Nummer eingeben</p>`,buttons:[{text:"OK",action:()=>{j()}}]}),"vibrate"in navigator&&navigator.vibrate([100,50,100]);return}if($.attempt===3){$.third=n;let e=n;n===$.first?e=$.first:n===$.second&&(e=$.second),await Es(e)}}else{const n=document.getElementById("containerDisplay");n.style.animation="none",setTimeout(()=>{n.style.animation="shake 0.5s"},10)}}async function Es(n){$={first:null,second:null,third:null,attempt:1},f.currentInspection.containerNumber=n,await hh(f.currentInspection.articleNumber,n);const e=Md(f.currentInspection.articleNumber,n,f.currentInspection.inspectionType);if(e){ie({title:"Reihenfolge nicht eingehalten",content:`<p>${e}</p>`,buttons:[{text:"Zurück zum Menü",action:()=>{j(),mt()}}]});return}const t=await Ld(f.currentInspection.articleNumber,n,f.currentInspection.inspectionType);if(t){ie({title:"Behälter voll",content:`<p>${t}</p>`,buttons:[{text:"Zurück zum Menü",action:()=>{j(),mt()}}]});return}"vibrate"in navigator&&navigator.vibrate(200),await ki()}async function ki(){je(gn);const n=document.getElementById("contentArea"),e=Ne(f.currentInspection.articleNumber,f.currentInspection.containerNumber),t=await Si(e);let i,s;t&&t.currentPartsInContainer!==null&&t.currentPartsInContainer!==void 0?(i=t.currentPartsInContainer,s=D("currentState")):(i=f.partTypeStandards.Housing.containerCapacity,s=D("fullContainer"));const r=f.currentInspection.remainingCapacity||i;let o="";r>=i?o=`<button class="big-btn animate-scale stagger-1" onclick="setQuantity(${i})">${s} (${i} Stk.)</button>`:r>0&&(o=`<button class="big-btn animate-scale stagger-1" onclick="setQuantity(${r})">Restkapazität (${r} Stk.)</button>`),n.innerHTML=`
        <div class="content-grid grid-2">
            ${o}
            <button class="big-btn animate-scale stagger-2" onclick="showManualQuantity()">${D("manual")}</button>
        </div>
    `}async function lo(n){try{console.log("🔵 setQuantity called with qty:",n),console.log("🔵 Checking for active inspections (team members)...");const e=await Hd();console.log("🔵 Team members found:",e.length);let t=n;const i=f.currentInspection.inspectionType,r={lehre:"L",mass:"M",sicht:"S"}[i];if(e.length>0){const o=e.filter(a=>a.inspektion===r);if(o.length>0){const a=o.length+1;t=Math.ceil(n/a),console.log(`🔵 Splitting ${n} parts among ${a} inspectors = ${t} parts each`);for(const c of o){const l=c.inspectionDbId||`${c.batchNummer}-${c.pruefungsNummer}`;console.log(`🔄 Updating quantity for inspector ${c.pruefer} (key: ${l}) to ${t}`);let d=null;if(c.io!==null&&c.io!==void 0){const h=t/c.total;d=Math.ceil(c.io*h)}const u={total:t};d!==null&&(u.io=d),await Ni(l,u)}}else t=n,console.log(`🔵 Different inspection types - each inspector does all ${n} parts`)}f.currentInspection.quantity=t,f.currentInspection.defects={},f.currentInspection.totalDefects=0,console.log("🔵 Creating new inspection entry..."),await Ud(),e.length>0?Wd(e,t,n):Z("🎯 Prüfung gestartet",`Du prüfst ${t} Teile`,"success"),console.log("🔵 Showing inspection interface..."),uo()}catch(e){console.error("❌ Error in setQuantity:",e),alert("Fehler beim Starten der Prüfung: "+e.message)}}async function Hd(){const n=Ne(f.currentInspection.articleNumber,f.currentInspection.containerNumber);if(!n)return console.log("🔍 checkForActiveInspections: No batch number found"),[];const e=f.currentInspection.inspectionType;console.log("🔍 checkForActiveInspections: Looking for batch",n,"type",e);const t=f.partTypeStandards.Housing.inspectionSequence;let i=[e];for(let c=0;c<t.length;c++)if(t[c].includes(e)){i=t[c],console.log("🔍 Types in same sequence step:",i);break}const s={lehre:"L",mass:"M",sicht:"S"},r=i.map(c=>s[c]);console.log("🔍 Codes in same step:",r);const a=Ge().filter(c=>c.batchNummer===n&&(!c.ende||c.ende===null||c.ende===void 0)&&r.includes(c.inspektion)&&c.pruefer!==f.personnelNumber);return console.log("🔍 checkForActiveInspections: Found",a.length,"team members"),a}function Wd(n,e,t){const i={L:"Lehre",M:"Maß",S:"Sicht"},r={lehre:"L",mass:"M",sicht:"S"}[f.currentInspection.inspectionType],o=n.filter(c=>c.inspektion===r),a=o.length>0;if(n.length===1){const c=n[0],l=i[c.inspektion];a?Z("Team-Pruefung",`Pruefer ${c.pruefer} arbeitet auch an diesem Behaelter. Ihr teilt euch ${t} Teile (je ${e} Teile)`,"info",5e3):Z("Parallel-Pruefung",`Pruefer ${c.pruefer} macht parallel ${l}-Pruefung (${e} Teile)`,"info",4e3)}else if(a){const c=o.length+1;Z("Team-Pruefung",`${o.length} weitere Pruefer arbeiten am selben Typ. ${t} Teile aufgeteilt auf ${c} Pruefer (je ${e} Teile)`,"info",5e3)}else{const c=[...new Set(n.map(l=>i[l.inspektion]))];Z("Parallel-Pruefung",`${n.length} Pruefer arbeiten parallel an anderen Typen (${c.join(", ")})`,"info",4e3)}}async function Ud(){const n=Ne(f.currentInspection.articleNumber,f.currentInspection.containerNumber);if(!n){console.error("Batch not found in database");return}const t=Ge().filter(o=>o.batchNummer===n).length+1;let i="L";f.currentInspection.inspectionType==="mass"?i="M":f.currentInspection.inspectionType==="sicht"&&(i="S");const s=`${n}-${t}`,r={pruefungsNummer:t,batchNummer:n,inspektion:i,total:f.currentInspection.quantity,io:null,nio:null,defects:{},pruefer:f.personnelNumber,start:new Date().toLocaleString("de-DE",{day:"2-digit",month:"2-digit",year:"numeric",hour:"2-digit",minute:"2-digit",second:"2-digit"}),ende:null};await wd(s,r),f.currentInspection.inspectionDbId=s,console.log("✅ Inspection entry created:",s),zd(s)}function zd(n){st(`inspectionDatabase/${n}`,e=>{if(e&&f.currentInspection.inspectionDbId===n&&e.total!==f.currentInspection.quantity){console.log(`🔄 Quantity changed from ${f.currentInspection.quantity} to ${e.total}`);const t=f.currentInspection.quantity;f.currentInspection.quantity=e.total,mn(),Z("Menge angepasst",`Ein weiterer Prüfer ist beigetreten. Deine Menge wurde von ${t} auf ${e.total} Teile angepasst.`,"info",5e3)}})}async function Vd(){if(f.currentInspection.inspectionDbId===null)return;const n=f.currentInspection.totalDefects,t={io:f.currentInspection.quantity-n,nio:n,ende:new Date().toLocaleString("de-DE",{day:"2-digit",month:"2-digit",year:"numeric",hour:"2-digit",minute:"2-digit",second:"2-digit"})};await Ni(f.currentInspection.inspectionDbId,t)}async function qd(){const n=Ne(f.currentInspection.articleNumber,f.currentInspection.containerNumber);if(!n){console.error("Cannot update TBK: batch not found");return}const e=await Si(n);if(!e){console.error("Cannot update TBK: entry not found");return}const t=f.currentInspection.inspectionType,i={lehre:"L",mass:"M",sicht:"S"},s=f.partTypeStandards.Housing.inspectionSequence;let r=-1;for(let u=0;u<s.length;u++)if(s[u].includes(t)){r=u;break}if(r===-1){console.error("Current inspection type not found in sequence");return}const{getData:o}=await vt(async()=>{const{getData:u}=await Promise.resolve().then(()=>Nt);return{getData:u}},void 0),a=await o("inspectionDatabase"),c=a?Object.values(a):[];console.log(`
========================================`),console.log("📊 UPDATE TBK CURRENT PARTS"),console.log(`   Batch: ${n}`),console.log(`   Current Type: ${t} (${i[t]})`),console.log(`   Current Step Index: ${r}`),console.log("========================================");const l=c.filter(u=>u.batchNummer===n);console.log(`
📋 All inspections for batch ${n}:`),l.forEach((u,h)=>{console.log(`  ${h+1}. ${u.inspektion} | Prüfer: ${u.pruefer} | IO: ${u.io} | NIO: ${u.nio} | Ende: ${u.ende?"JA":"NEIN"}`)});let d;if(r===0){console.log(`
🔄 First inspection step - starting from container capacity: ${f.partTypeStandards.Housing.containerCapacity}`),d=f.partTypeStandards.Housing.containerCapacity;const u=i[t],h=c.filter(m=>m.batchNummer===n&&m.inspektion===u&&m.ende!==null&&m.ende!==void 0&&m.io!==null&&m.nio!==null),p=h.reduce((m,y)=>m+(y.nio||0),0);console.log(`  Current type ${u}: ${h.length} inspections, ${p} total NIO`),console.log(`  ${d} - ${p} = ${d-p}`),d-=p}else{const u=e.currentPartsInContainer;if(u==null){console.error("❌ ERROR: currentPartsInContainer is null but we are not in step 0!");return}console.log(`
🔄 Subsequent inspection step - starting from current value: ${u}`),d=u;const h=i[t],p=c.filter(y=>y.batchNummer===n&&y.inspektion===h&&y.ende!==null&&y.ende!==void 0&&y.io!==null&&y.nio!==null),m=p.reduce((y,v)=>y+(v.nio||0),0);console.log(`  Current type ${h}: ${p.length} inspections, ${m} total NIO`),console.log(`  ${d} - ${m} = ${d-m}`),d-=m}console.log(`
✅ Final currentPartsInContainer: ${d}`),console.log(`========================================
`),await bd(n,{currentPartsInContainer:d})}async function Gd(){if(f.currentInspection.inspectionDbId===null)return;const{deleteData:n}=await vt(async()=>{const{deleteData:e}=await Promise.resolve().then(()=>Nt);return{deleteData:e}},void 0);await n(`inspectionDatabase/${f.currentInspection.inspectionDbId}`),f.currentInspection.inspectionDbId=null}let J="";function jd(){J="";const n=f.currentInspection.remainingCapacity||f.partTypeStandards.Housing.containerCapacity,e=f.partTypeStandards.Housing.containerCapacity,t=n<e;let i="";t&&(i=`<p style="text-align: center; color: #f59e0b; font-size: 14px; margin-top: -10px; margin-bottom: 15px;">⚠️ Verbleibende Kapazität: ${n} Teile</p>`);const s=document.getElementById("contentArea");s.innerHTML=`
        <div style="display: flex; align-items: center; justify-content: center; height: 100%; padding: 20px;">
            <div style="max-width: 500px; width: 100%;">
                <h2 style="text-align: center; margin-bottom: 25px; color: #1a202c; font-size: 24px;">${D("quantity")}</h2>
                ${i}

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
    `,mn()}function Kd(n){J.length<3&&(J+=n,mn(),"vibrate"in navigator&&navigator.vibrate(50))}function Qd(){J.length>0&&(J=J.slice(0,-1),mn(),"vibrate"in navigator&&navigator.vibrate(50))}function mn(){const n=document.getElementById("quantityDisplay"),e=document.getElementById("quantityValue");if(e)if(J.length===0)e.innerHTML="0",e.classList.add("empty"),n.classList.remove("active");else{let t="";for(let i=0;i<J.length;i++)t+=`<span class="digit">${J[i]}</span>`;e.innerHTML=t,e.classList.remove("empty"),n.classList.add("active")}}function Yd(){const n=parseInt(J),e=f.currentInspection.remainingCapacity||f.partTypeStandards.Housing.containerCapacity;if(n>0&&n<=e)"vibrate"in navigator&&navigator.vibrate(200),lo(n);else if(J.length===0)ao();else if(n>e)ie({title:"Kapazität überschritten",content:`<p>Die eingegebene Menge (${n} Teile) überschreitet die verbleibende Kapazität dieses Behälters (${e} Teile).</p>`,buttons:[{text:"OK",action:j}]});else{const t=document.getElementById("quantityDisplay");t.style.animation="none",setTimeout(()=>{t.style.animation="shake 0.5s"},10)}}function uo(){je(ki);const n=f.currentInspection.inspectionType,e=ho();f.currentInspection.otherInspectors=e;let t="Prüfer",i="";if(e.length===0)i='<span style="color: #94a3b8; font-size: 18px;">Nur du</span>';else if(e.length===1){const o=e[0];i=`
            <span class="status-indicator ${o.status==="active"?"status-active":"status-finished"}"></span>
            P-${o.pruefer} (${o.typeLabel})
        `}else{const o=e.filter(c=>c.status==="active").length,a=e.filter(c=>c.status==="finished").length;i=`
            ${o>0?`<span class="status-indicator status-active"></span>${o} aktiv`:""}
            ${o>0&&a>0?" • ":""}
            ${a>0?`<span class="status-indicator status-finished"></span>${a} fertig`:""}
        `}Zd();const s=f.partTypeStandards.Housing.defectTypes[n],r=document.getElementById("contentArea");r.innerHTML=`
        <div class="inspection-container">
            <div class="info-row" style="grid-template-columns: repeat(4, 1fr);">
                <div class="info-card animate-slide-up stagger-1">
                    <h3>Artikel</h3>
                    <p>Housing</p>
                </div>
                <div class="info-card animate-slide-up stagger-2">
                    <h3>${D("totalQuantity")}</h3>
                    <p id="totalQuantityDisplay">${f.currentInspection.quantity}</p>
                </div>
                <div class="info-card animate-slide-up stagger-3">
                    <h3>${D("defectCount")}</h3>
                    <p id="totalDefects">0</p>
                </div>
                <div class="info-card animate-slide-up stagger-4" style="cursor: ${e.length>0?"pointer":"default"};" ${e.length>0?'onclick="showInspectorModal()"':""}>
                    <h3>${t}</h3>
                    <p class="inspector-status" id="inspectorDisplay">
                        ${i}
                    </p>
                </div>
            </div>

            <div class="defect-grid">
                ${s.map((o,a)=>`
                    <button class="defect-btn animate-scale stagger-${a%4+1}"
                            onclick="registerDefect('${o}', event)">
                        <span class="defect-counter" id="counter-${a}">0</span>
                        <h3>${o}</h3>
                    </button>
                `).join("")}
            </div>

            <div class="action-row">
                <button class="action-btn btn-complete animate-slide-up stagger-2" onclick="completeInspection()">${D("inspectionComplete")}</button>
                <button class="action-btn btn-reset animate-slide-up stagger-3" onclick="resetInspection()">${D("resetInspection")}</button>
                <button class="action-btn btn-drawing animate-slide-up stagger-4" onclick="showDrawing()" ${f.partTypeStandards.Housing.drawing?"":"disabled"}>
                    Zeichnung
                </button>
            </div>
        </div>
    `}function ho(){const n=Ne(f.currentInspection.articleNumber,f.currentInspection.containerNumber);if(!n)return[];const e={L:"Lehre",M:"Maß",S:"Sicht"};return Ge().filter(s=>s.batchNummer===n&&s.pruefer!==f.personnelNumber).map(s=>{const r=s.ende&&s.ende!==null?"finished":"active";return{pruefer:s.pruefer,status:r,typeLabel:e[s.inspektion],pruefungsNummer:s.pruefungsNummer,inspektion:s.inspektion}})}let Me=null;function Zd(){Me&&clearInterval(Me),Me=setInterval(()=>{Xd()},2e3)}function Xd(){const n=document.getElementById("inspectorDisplay");if(!n){Me&&(clearInterval(Me),Me=null);return}const e=ho();let t="";if(e.length===0)t='<span style="color: #94a3b8; font-size: 18px;">Nur du</span>';else if(e.length===1){const i=e[0];t=`
            <span class="status-indicator ${i.status==="active"?"status-active":"status-finished"}"></span>
            P-${i.pruefer} (${i.typeLabel})
        `}else{const i=e.filter(r=>r.status==="active").length,s=e.filter(r=>r.status==="finished").length;t=`
            ${i>0?`<span class="status-indicator status-active"></span>${i} aktiv`:""}
            ${i>0&&s>0?" • ":""}
            ${s>0?`<span class="status-indicator status-finished"></span>${s} fertig`:""}
        `}n.innerHTML=t,f.currentInspection.otherInspectors=e}function Jd(){const n=f.currentInspection.otherInspectors||[];if(n.length===0)return;const e=n.map(i=>`
        <div class="inspector-info-item animate-slide-up">
            <h4>Prüfer</h4>
            <p>P-${i.pruefer}</p>
        </div>
        <div class="inspector-info-item animate-slide-up">
            <h4>Prüfung</h4>
            <p>${i.typeLabel} - Prüf. ${i.pruefungsNummer}</p>
        </div>
        <div class="inspector-info-item animate-slide-up">
            <h4>Status</h4>
            <p>
                <span class="status-indicator ${i.status==="active"?"status-active":"status-finished"}"></span>
                ${i.status==="active"?D("active"):D("finished")}
            </p>
        </div>
    `).join(""),t=document.createElement("div");t.className="modal",t.id="inspectorModal",t.onclick=i=>{i.target===t&&fo()},t.innerHTML=`
        <div class="inspector-modal">
            <div class="inspector-header">
                <h2>Prüfer an diesem Behälter</h2>
                <p>TBK ${f.currentInspection.articleNumber} • Artikel Housing</p>
            </div>
            <div class="inspector-body">
                <div class="inspector-info-grid">
                    ${e}
                </div>
                <button class="btn-primary" onclick="closeInspectorModal()">Schließen</button>
            </div>
        </div>
    `,document.body.appendChild(t)}function fo(){const n=document.getElementById("inspectorModal");n&&n.remove()}async function eh(n,e){const t=e.currentTarget;t.classList.contains("clicked")||(t.classList.add("clicked"),f.currentInspection.defects[n]||(f.currentInspection.defects[n]=0),f.currentInspection.defects[n]++,f.currentInspection.totalDefects++,th(),f.currentInspection.inspectionDbId&&await Ni(f.currentInspection.inspectionDbId,{defects:f.currentInspection.defects,nio:f.currentInspection.totalDefects}),setTimeout(()=>{t.classList.remove("clicked")},250))}function th(){f.partTypeStandards.Housing.defectTypes[f.currentInspection.inspectionType].forEach((i,s)=>{const r=document.getElementById(`counter-${s}`);if(r){const o=parseInt(r.textContent),a=f.currentInspection.defects[i]||0;a!==o&&(r.style.animation="none",setTimeout(()=>{r.style.animation="countPulse 0.4s ease-out",r.textContent=a},10))}});const e=document.getElementById("totalDefects"),t=parseInt(e.textContent);f.currentInspection.totalDefects!==t&&(e.style.animation="none",setTimeout(()=>{e.style.animation="countPulse 0.4s ease-out",e.textContent=f.currentInspection.totalDefects},10))}async function nh(){const n=f.currentInspection.quantity-f.currentInspection.totalDefects,e=f.currentInspection.totalDefects;await Vd(),await qd(),ie({title:D("inspectionComplete"),content:`
            <p><strong>Gut:</strong> ${n} Teile</p>
            <p><strong>Schlecht:</strong> ${e} Teile</p>
            <p style="margin-top: 20px;">Ergebnisse werden gespeichert...</p>
        `,buttons:[{text:D("confirm"),action:()=>{j(),Ke()}}]})}function ih(){ie({title:"Warnung",content:"<p>Möchten Sie die aktuelle Prüfung wirklich zurücksetzen? Alle Daten gehen verloren.</p>",buttons:[{text:"Abbrechen",action:j},{text:"Zurücksetzen",action:async()=>{await Gd(),j(),Ke()}}]})}function sh(){if(!f.partTypeStandards.Housing.drawing){Z("Keine Zeichnung","Es wurde keine technische Zeichnung hochgeladen","info");return}const n=document.createElement("div");n.className="modal",n.onclick=e=>{(e.target===n||e.target.classList.contains("modal-close-btn"))&&n.remove()},n.innerHTML=`
        <div class="drawing-modal">
            <div class="drawing-header">
                <h2>Technische Zeichnung - Housing</h2>
                <button class="modal-close-btn" onclick="this.closest('.modal').remove()">×</button>
            </div>
            <div class="drawing-content">
                <img src="${f.partTypeStandards.Housing.drawing}" alt="Technische Zeichnung" />
            </div>
        </div>
    `,document.body.appendChild(n)}function ie(n){const e=document.createElement("div");e.className="modal",e.id="activeModal";const t=n.buttons.map((i,s)=>`<button class="btn-secondary" onclick="executeModalAction(${s})">${i.text}</button>`).join("");e.innerHTML=`
        <div class="modal-content">
            <h2>${n.title}</h2>
            ${n.content}
            <div class="modal-buttons">
                ${t}
            </div>
        </div>
    `,document.body.appendChild(e),window.currentModalActions=n.buttons.map(i=>i.action)}function rh(n){window.currentModalActions&&window.currentModalActions[n]&&window.currentModalActions[n]()}function j(){const n=document.getElementById("activeModal");n&&n.remove()}function oh(){ie({title:D("featureNotAvailable"),content:"<p>Diese Funktion ist derzeit nicht verfügbar.</p>",buttons:[{text:"OK",action:j}]})}function ah(){ie({title:D("featureInProgress"),content:"<p>Diese Funktion ist aktuell in Entwicklung.</p>",buttons:[{text:"OK",action:j}]})}function Z(n,e,t="info",i=4e3){const s=document.createElement("div"),r={success:"linear-gradient(135deg, #10b981, #059669)",info:"linear-gradient(135deg, #3b82f6, #2563eb)",warning:"linear-gradient(135deg, #f59e0b, #d97706)",error:"linear-gradient(135deg, #ef4444, #dc2626)"};s.style.cssText=`
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
    `,s.innerHTML=`
        <div style="font-size: 18px; margin-bottom: 5px;">${n}</div>
        <div style="font-size: 14px; font-weight: 400; opacity: 0.95;">${e}</div>
    `,document.body.appendChild(s),setTimeout(()=>{s.style.animation="fadeOut 0.3s ease-out",setTimeout(()=>s.remove(),300)},i)}let q=null,Jt=!1;function po(){Jt=!1;const n=document.createElement("div");n.className="modal",n.id="scannerModal",n.onclick=e=>{e.target===n&&_o()},n.innerHTML=`
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
    `,document.body.appendChild(n),ch()}function ch(){const n={fps:20,qrbox:{width:400,height:150},formatsToSupport:[Html5QrcodeSupportedFormats.QR_CODE,Html5QrcodeSupportedFormats.EAN_13,Html5QrcodeSupportedFormats.EAN_8,Html5QrcodeSupportedFormats.CODE_128,Html5QrcodeSupportedFormats.CODE_39,Html5QrcodeSupportedFormats.UPC_A,Html5QrcodeSupportedFormats.UPC_E],rememberLastUsedCamera:!0,aspectRatio:1.777778};q=new Html5Qrcode("reader"),q.start({facingMode:"environment"},n,lh,uh).catch(e=>{console.error("Camera start error:",e);const t=document.getElementById("scannerStatus");t&&(t.className="scanner-status error",t.innerHTML=`
                <p class="scanner-status-text">⚠️ Kamera-Zugriff verweigert oder nicht verfügbar</p>
                <p style="font-size: 13px; margin-top: 10px; font-weight: normal;">Bitte verwende die manuelle Eingabe unten.</p>
            `),setTimeout(()=>{const i=document.getElementById("manualBarcodeInput");i&&i.focus()},300)})}function lh(n,e){if(Jt)return;Jt=!0,"vibrate"in navigator&&navigator.vibrate(200);const t=document.getElementById("scannerStatus");t&&(t.className="scanner-status success",t.innerHTML=`
            <p class="scanner-status-text">✓ Erfolgreich gescannt!</p>
            <div class="scanner-result">${n}</div>
        `),setTimeout(()=>{go(n)},500)}function uh(n){}function dh(){const e=document.getElementById("manualBarcodeInput").value.trim();if(e.length>0){"vibrate"in navigator&&navigator.vibrate(200);const t=document.getElementById("scannerStatus");t&&(t.className="scanner-status success",t.innerHTML=`
                <p class="scanner-status-text">✓ Manuell eingegeben!</p>
                <div class="scanner-result">${e}</div>
            `),setTimeout(()=>{go(e)},1e3)}}function go(n){q&&q.stop().then(()=>{q.clear(),q=null}).catch(t=>{console.error("Error stopping scanner:",t),q=null});const e=document.getElementById("scannerModal");e&&e.remove(),f.currentInspection.articleNumber=n,f.currentInspection.tz=Math.floor(Math.random()*11),gn()}async function hh(n,e){if(!Xt().some(i=>i.tbkNummer===n&&i.containerNumber===e)){const i=Math.floor(1e5+Math.random()*9e5).toString(),s=Math.floor(1e7+Math.random()*9e7).toString(),a={batchNummer:Xt().length+1,tbkNummer:n,containerNumber:e,laufkarte:i,chargenr:s,currentPartsInContainer:null};await vd(a)}}function Ne(n,e){const t=Xt().find(i=>i.tbkNummer===n&&i.containerNumber===e);return t?t.batchNummer:null}function fh(){const n=document.createElement("div");n.className="modal",n.id="databaseModal",n.onclick=r=>{r.target===n&&mo()};const e=Xt();let t="";e.length===0?t=`
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
        `;const i=Ge();let s="";i.length===0?s=`
            <div class="database-empty" style="margin-top: 40px;">
                <div class="database-empty-icon">📋</div>
                <div class="database-empty-text">Keine Prüfungen vorhanden</div>
                <div class="database-empty-subtext">Führe eine Prüfung durch, um Einträge zu erstellen</div>
            </div>
        `:s=`
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
                    ${i.map(o=>`
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
                ${s}
            </div>
        </div>
    `,document.body.appendChild(n)}function mo(){const n=document.getElementById("databaseModal");n&&n.remove()}function _o(){q&&q.stop().then(()=>{q.clear(),q=null}).catch(e=>{console.error("Error stopping scanner:",e),q=null});const n=document.getElementById("scannerModal");n&&n.remove(),Jt=!1}function Ri(){const n=f.partTypeStandards.Housing,e=(i,s)=>{const o=n.defectTypes[i].map((a,c)=>`
            <div class="defect-tag">
                ${a}
                <button class="defect-tag-remove" onclick="removeDefectType('${i}', ${c})">×</button>
            </div>
        `).join("");return`
            <div class="standards-section">
                <h3>Fehlermerkmale - ${s}</h3>
                <div class="defect-tags" id="defectTags-${i}">
                    ${o}
                </div>
                <input
                    type="text"
                    class="standards-input"
                    id="newDefectInput-${i}"
                    placeholder="Neues Fehlermerkmal für ${s} eingeben"
                    onkeypress="if(event.key === 'Enter') addDefectType('${i}')"
                />
                <button class="add-defect-btn" onclick="addDefectType('${i}')">+ Fehlermerkmal hinzufügen</button>
            </div>
        `},t=document.createElement("div");t.className="modal",t.id="standardsModal",t.onclick=i=>{i.target===t&&Dt()},t.innerHTML=`
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

                <div class="standards-section">
                    <h3>📐 Technische Zeichnung</h3>
                    <div style="display: flex; gap: 10px; align-items: center;">
                        <input
                            type="file"
                            id="drawingUpload"
                            accept="image/*"
                            style="display: none;"
                            onchange="handleDrawingUpload(event)"
                        />
                        <button class="btn-secondary" onclick="document.getElementById('drawingUpload').click()">
                            ${n.drawing?"📄 Zeichnung ersetzen":"📤 Zeichnung hochladen"}
                        </button>
                        ${n.drawing?'<button class="btn-secondary" onclick="removeDrawing()">🗑️ Entfernen</button>':""}
                        ${n.drawing?'<button class="btn-secondary" onclick="previewDrawing()">👁️ Vorschau</button>':""}
                    </div>
                    ${n.drawing?'<p style="color: #10b981; margin-top: 10px; font-size: 14px;">✓ Zeichnung hochgeladen</p>':'<p style="color: #94a3b8; margin-top: 10px; font-size: 14px;">Keine Zeichnung hochgeladen</p>'}
                </div>

                <button class="btn-primary" style="width: 100%; margin-top: 30px;" onclick="saveStandards()">
                    Speichern
                </button>
            </div>
        </div>
    `,document.body.appendChild(t),yt()}function yt(){const n=document.getElementById("availableInspections"),e=document.getElementById("timeline"),t=f.partTypeStandards.Housing.inspectionSequence,i=["lehre","mass","sicht"],s={lehre:"Lehre",mass:"Maß",sicht:"Sicht"},r={lehre:"📏",mass:"📐",sicht:"👁️"},o=new Set;t.forEach(d=>{d.forEach(u=>o.add(u))}),n.innerHTML='<div class="sequence-builder-subtitle">Verfügbare Prüfungen:</div>';let a="";o.size===3?a='<div style="text-align: center; color: #94a3b8; padding: 20px; font-style: italic;">Ziehe Prüfungen hierher, um sie zu deaktivieren</div>':i.forEach(d=>{o.has(d)||(a+=Ts(d,s[d],r[d]))}),n.innerHTML+=`<div class="available-drop-zone" ondrop="handleDropToAvailable(event)" ondragover="handleDragOver(event)" ondragleave="handleDragLeave(event)">${a}</div>`,e.innerHTML='<div class="sequence-builder-subtitle">Timeline (nacheinander):</div>';const l=t.length>0?Math.min(t.length+1,3):1;for(let d=0;d<l;d++){const u=t[d]||[];let h="";u.length>0?h=u.map(p=>Ts(p,s[p],r[p])).join(""):h='<div style="text-align: center; color: #94a3b8; padding: 10px; font-size: 13px;">Leer</div>',e.innerHTML+=`
            <div class="timeline-step" data-step="${d}" ondrop="handleDrop(event)" ondragover="handleDragOver(event)" ondragleave="handleDragLeave(event)">
                <div class="timeline-step-header">
                    <span class="timeline-step-number">${d+1}</span>
                    Schritt ${d+1}
                </div>
                <div class="timeline-drop-zone">
                    ${h}
                </div>
            </div>
        `}o.size===0&&(e.innerHTML+='<div style="text-align: center; color: #64748b; margin-top: 20px; font-style: italic;">Ziehe Prüfungen aus "Verfügbare Prüfungen" hierher</div>')}function Ts(n,e,t){return`
        <div class="inspection-card ${n}" draggable="true" data-type="${n}"
             ondragstart="handleDragStart(event)" ondragend="handleDragEnd(event)"
             ontouchstart="handleTouchStart(event)" ontouchmove="handleTouchMove(event)" ontouchend="handleTouchEnd(event)">
            <span class="inspection-card-icon">${t}</span>
            <span class="inspection-card-label">${e}</span>
        </div>
    `}let G=null,H=null;function ph(n){G=n.target.closest(".inspection-card"),H=G.dataset.type,G.classList.add("dragging"),n.dataTransfer.effectAllowed="move",n.dataTransfer.setData("text/plain",H)}function gh(n){G&&G.classList.remove("dragging"),document.querySelectorAll(".timeline-step, .available-drop-zone").forEach(e=>{e.classList.remove("drag-over")})}function mh(n){n.preventDefault&&n.preventDefault();const e=n.target.closest(".timeline-step, .available-drop-zone");return e&&(document.querySelectorAll(".timeline-step, .available-drop-zone").forEach(t=>{t.classList.remove("drag-over")}),e.classList.add("drag-over")),n.dataTransfer.dropEffect="move",!1}function _h(n){const e=n.target.closest(".timeline-step");e&&!e.contains(n.relatedTarget)&&e.classList.remove("drag-over")}function yh(n){n.stopPropagation&&n.stopPropagation(),n.preventDefault&&n.preventDefault();const e=n.target.closest(".timeline-step");if(!e||!G||!H)return!1;const t=parseInt(e.dataset.step),i=G.closest(".available-drop-zone"),s=G.closest(".timeline-step");if(i)en(H,t);else if(s){const r=parseInt(s.dataset.step);r!==t&&(tn(H,r),en(H,t))}return yt(),!1}function en(n,e){const t=f.partTypeStandards.Housing.inspectionSequence;for(;t.length<=e;)t.push([]);t[e].includes(n)||t[e].push(n)}function tn(n,e){const t=f.partTypeStandards.Housing.inspectionSequence;if(t[e]){const i=t[e].indexOf(n);for(i>-1&&t[e].splice(i,1);t.length>0&&t[t.length-1].length===0;)t.pop()}}function vh(n){if(n.stopPropagation&&n.stopPropagation(),n.preventDefault&&n.preventDefault(),!G||!H)return!1;const e=G.closest(".timeline-step");if(e){const t=parseInt(e.dataset.step);tn(H,t),yt()}return!1}let O=null,k=null;function bh(n){const e=n.touches[0];e.clientX,e.clientY,O=n.currentTarget.closest(".inspection-card"),G=O,H=O.dataset.type,n.preventDefault(),k=O.cloneNode(!0),k.style.position="fixed",k.style.pointerEvents="none",k.style.zIndex="10000",k.style.opacity="0.9",k.style.left=e.clientX-O.offsetWidth/2+"px",k.style.top=e.clientY-O.offsetHeight/2+"px",k.style.width=O.offsetWidth+"px",k.style.boxShadow="0 8px 24px rgba(0, 0, 0, 0.3)",document.body.appendChild(k),O.style.opacity="0.3"}function wh(n){if(!O||!k)return;n.preventDefault();const e=n.touches[0];k.style.left=e.clientX-O.offsetWidth/2+"px",k.style.top=e.clientY-O.offsetHeight/2+"px",k.style.display="none";const t=document.elementFromPoint(e.clientX,e.clientY);if(k.style.display="block",document.querySelectorAll(".timeline-step, .available-drop-zone").forEach(i=>{i.classList.remove("drag-over")}),t){const i=t.closest(".timeline-step, .available-drop-zone");i&&i.classList.add("drag-over")}}function Ch(n){if(!O||!k)return;n.preventDefault();const e=n.changedTouches[0];k.style.display="none";const t=document.elementFromPoint(e.clientX,e.clientY);if(O.style.opacity="1",k&&k.parentNode&&k.parentNode.removeChild(k),k=null,document.querySelectorAll(".timeline-step, .available-drop-zone").forEach(i=>{i.classList.remove("drag-over")}),t){const i=t.closest(".timeline-step"),s=t.closest(".available-drop-zone");if(i){const r=parseInt(i.dataset.step),o=O.closest(".available-drop-zone"),a=O.closest(".timeline-step");if(o)en(H,r);else if(a){const c=parseInt(a.dataset.step);c!==r&&(tn(H,c),en(H,r))}yt()}else if(s){const r=O.closest(".timeline-step");if(r){const o=parseInt(r.dataset.step);tn(H,o),yt()}}}O=null,G=null,H=null}async function Ih(n){const e=document.getElementById(`newDefectInput-${n}`),t=e.value.trim();t&&!f.partTypeStandards.Housing.defectTypes[n].includes(t)&&(f.partTypeStandards.Housing.defectTypes[n].push(t),e.value="",await Id(n,t),yo(n))}async function Eh(n,e){f.partTypeStandards.Housing.defectTypes[n].splice(e,1),await Ed(n,e),yo(n)}function yo(n){const e=document.getElementById(`defectTags-${n}`),t=f.partTypeStandards.Housing.defectTypes[n].map((i,s)=>`
        <div class="defect-tag">
            ${i}
            <button class="defect-tag-remove" onclick="removeDefectType('${n}', ${s})">×</button>
        </div>
    `).join("");e.innerHTML=t}async function Th(n){const e=n.target.files[0];if(!e)return;if(e.size>5*1024*1024){Z("Fehler","Bild ist zu groß. Maximal 5MB erlaubt.","error");return}const t=new FileReader;t.onload=async i=>{const s=i.target.result;f.partTypeStandards.Housing.drawing=s;const{updateData:r}=await vt(async()=>{const{updateData:o}=await Promise.resolve().then(()=>Nt);return{updateData:o}},void 0);await r("partTypeStandards/Housing",{drawing:s}),Z("Erfolg","Zeichnung wurde hochgeladen und gespeichert","success"),Dt(),setTimeout(()=>Ri(),100)},t.onerror=()=>{Z("Fehler","Fehler beim Hochladen der Zeichnung","error")},t.readAsDataURL(e)}async function Sh(){f.partTypeStandards.Housing.drawing=null;const{updateData:n}=await vt(async()=>{const{updateData:e}=await Promise.resolve().then(()=>Nt);return{updateData:e}},void 0);await n("partTypeStandards/Housing",{drawing:null}),Z("Erfolg","Zeichnung wurde entfernt","success"),Dt(),setTimeout(()=>Ri(),100)}function Nh(){if(!f.partTypeStandards.Housing.drawing)return;const n=document.createElement("div");n.className="modal",n.onclick=e=>{(e.target===n||e.target.classList.contains("modal-close-btn"))&&n.remove()},n.innerHTML=`
        <div class="drawing-modal">
            <button class="modal-close-btn" onclick="this.closest('.modal').remove()">×</button>
            <img src="${f.partTypeStandards.Housing.drawing}" alt="Technische Zeichnung" style="max-width: 90vw; max-height: 90vh; object-fit: contain;" />
        </div>
    `,document.body.appendChild(n)}async function Dh(){const n=document.getElementById("containerCapacity").value;f.partTypeStandards.Housing.containerCapacity=parseInt(n),await Cd(parseInt(n));const{updateData:e}=await vt(async()=>{const{updateData:t}=await Promise.resolve().then(()=>Nt);return{updateData:t}},void 0);await e("partTypeStandards/Housing",{drawing:f.partTypeStandards.Housing.drawing}),ie({title:"Gespeichert",content:"<p>Standards wurden erfolgreich gespeichert!</p>",buttons:[{text:"OK",action:()=>{j(),Dt()}}]})}function Dt(){const n=document.getElementById("standardsModal");n&&n.remove()}window.addLoginDigit=Td;window.clearLoginNumber=Sd;window.login=Dd;window.toggleLanguage=kd;window.togglePause=Ad;window.goBack=ao;window.openStatistics=Pd;window.showMainMenu=Ke;window.showSerieMenu=mt;window.startInspection=xd;window.showFeatureNotAvailable=oh;window.showFeatureInProgress=ah;window.showScanConfirmation=gn;window.showContainerNumberInput=Od;window.addContainerDigit=Fd;window.clearContainerNumber=$d;window.submitContainerNumber=Bd;window.showQuantitySelection=ki;window.setQuantity=lo;window.showManualQuantity=jd;window.addQuantityDigit=Kd;window.clearQuantityNumber=Qd;window.submitManualQuantity=Yd;window.showInspectionInterface=uo;window.showInspectorModal=Jd;window.closeInspectorModal=fo;window.registerDefect=eh;window.completeInspection=nh;window.resetInspection=ih;window.showDrawing=sh;window.executeModalAction=rh;window.closeModal=j;window.openBarcodeScanner=po;window.closeBarcodeScanner=_o;window.submitManualBarcode=dh;window.openDatabase=fh;window.closeDatabase=mo;window.openStandards=Ri;window.closeStandards=Dt;window.addDefectType=Ih;window.removeDefectType=Eh;window.saveStandards=Dh;window.handleDrawingUpload=Th;window.removeDrawing=Sh;window.previewDrawing=Nh;window.handleDragStart=ph;window.handleDragEnd=gh;window.handleDragOver=mh;window.handleDragLeave=_h;window.handleDrop=yh;window.handleDropToAvailable=vh;window.handleTouchStart=bh;window.handleTouchMove=wh;window.handleTouchEnd=Ch;document.addEventListener("DOMContentLoaded",async()=>{console.log("Initializing Firebase and app state...");try{await ro(),await _d(),console.log("✅ App initialized with Firebase successfully"),Di(),"serviceWorker"in navigator&&navigator.serviceWorker.register("./sw.js").then(n=>{console.log("✅ Service Worker registered:",n.scope)}).catch(n=>{console.log("❌ Service Worker registration failed:",n)})}catch(n){console.error("❌ Error initializing app:",n),alert("Fehler beim Initialisieren der App. Bitte die Seite neu laden.")}});
