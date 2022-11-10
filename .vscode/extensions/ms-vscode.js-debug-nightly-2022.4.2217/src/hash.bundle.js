(()=>{var e={857:(e,t,r)=>{const{hash:s}=r(749),i=Buffer.alloc(20);t.hash=e=>(s(n(e),i),i.toString("hex"));const n=e=>(e=>e.length>=3&&239===e[0]&&187===e[1]&&191===e[2])(e)?a(e.slice(3)):(e=>e.length>=2&&255===e[0]&&254===e[1])(e)?e.slice(2):(e=>e.length>=2&&254===e[0]&&255===e[1])(e)?e.slice(2).swap16():a(e),a=e=>Buffer.from(e.toString("utf8"),"utf16le")},749:(e,t,r)=>{let s,i=null;function n(){return null!==i&&i.buffer===s.memory.buffer||(i=new Uint8Array(s.memory.buffer)),i}let a=0;function c(e,t){const r=t(1*e.length);return n().set(e,r/1),a=e.length,r}e.exports.hash=function(e,t){try{var r=c(e,s.__wbindgen_malloc),i=a,o=c(t,s.__wbindgen_malloc),l=a;s.hash(r,i,o,l)}finally{t.set(n().subarray(o/1,o/1+l)),s.__wbindgen_free(o,1*l)}},s=r(583)},583:(e,t,r)=>{const s=r(17).join(__dirname,"chromehash_bg.wasm"),i=r(147).readFileSync(s),n=new WebAssembly.Module(i),a=new WebAssembly.Instance(n,{});e.exports=a.exports},379:function(e,t,r){"use strict";var s=this&&this.__createBinding||(Object.create?function(e,t,r,s){void 0===s&&(s=r);var i=Object.getOwnPropertyDescriptor(t,r);i&&!("get"in i?!t.__esModule:i.writable||i.configurable)||(i={enumerable:!0,get:function(){return t[r]}}),Object.defineProperty(e,s,i)}:function(e,t,r,s){void 0===s&&(s=r),e[s]=t[r]}),i=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),n=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)"default"!==r&&Object.prototype.hasOwnProperty.call(e,r)&&s(t,e,r);return i(t,e),t};Object.defineProperty(t,"__esModule",{value:!0}),t.LocalAndRemoteFsUtils=t.RemoteFsThroughDapUtils=t.LocalFsUtils=t.IFsUtils=t.readFileRaw=t.writeFile=t.readfile=t.readdir=t.stat=t.moveFile=t.existsWithoutDeref=t.existsInjected=t.copyFile=t.canAccess=t.fsModule=void 0;const a=n(r(147)),c=n(r(837));async function o({access:e},t){if(!t)return!1;try{return await e(t),!0}catch(e){return!1}}t.fsModule=a,t.canAccess=o,t.copyFile=async function(e,t,r){try{await e.copyFile(t,r)}catch(s){try{if(!await o(e,r))throw s;await e.unlink(r),await e.copyFile(t,r)}catch{throw s}}},t.existsInjected=async function({stat:e},t){if(t)try{return await e(t)}catch(e){return}},t.existsWithoutDeref=async function({lstat:e},t){if(t)try{return await e(t)}catch(e){return}},t.moveFile=async function({copyFile:e,rename:t,unlink:r},s,i){try{await t(s,i)}catch{await e(s,i),await r(s)}},t.stat=function(e){return new Promise((t=>{a.stat(e,((e,r)=>t(e?void 0:r)))}))},t.readdir=function(e){return new Promise((t=>{a.readdir(e,"utf8",(async(e,r)=>{t(e?[]:r)}))}))},t.readfile=function(e){return new Promise((t=>{a.readFile(e,"utf8",(async(e,r)=>{t(e?"":r)}))}))},t.writeFile=c.promisify(a.writeFile),t.readFileRaw=function(e){return a.promises.readFile(e).catch((()=>Buffer.alloc(0)))},t.IFsUtils=Symbol("FsUtils");class l{constructor(e){this.fs=e}realPath(e){return this.fs.realpath(e)}async exists(e){try{return await this.fs.access(e,a.constants.F_OK),!0}catch{return!1}}readFile(e){return this.fs.readFile(e)}}t.LocalFsUtils=l;class u{constructor(e){this.dap=e}async realPath(){throw new Error("not implemented")}async exists(e){try{const{doesExists:t}=await this.dap.remoteFileExistsRequest({localFilePath:e});return t}catch{return!1}}readFile(){throw new Error("not implemented")}}t.RemoteFsThroughDapUtils=u,t.LocalAndRemoteFsUtils=class{constructor(e,t,r){this.remoteFilePrefix=e,this.localFsUtils=t,this.remoteFsUtils=r}static create(e,t,r){const s=new l(t);return void 0!==e?new this(e.toLowerCase(),s,new u(r)):s}async exists(e){return this.selectFs(e).exists(e)}async readFile(e){return this.selectFs(e).readFile(e)}async realPath(e){return this.selectFs(e).realPath(e)}selectFs(e){return e.toLowerCase().startsWith(this.remoteFilePrefix)?this.remoteFsUtils:this.localFsUtils}}},147:e=>{"use strict";e.exports=require("fs")},17:e=>{"use strict";e.exports=require("path")},837:e=>{"use strict";e.exports=require("util")}},t={};function r(s){var i=t[s];if(void 0!==i)return i.exports;var n=t[s]={exports:{}};return e[s].call(n.exports,n,n.exports,r),n.exports}(()=>{"use strict";const e=r(857),t=r(379),s=Buffer.from("(function (exports, require, module, __filename, __dirname) { "),i=Buffer.from("\n});"),n=Buffer.from("(function (exports, require, module, __filename, __dirname, process, global, Buffer) { return function (exports, require, module, __filename, __dirname) { "),a=Buffer.from("\n}.call(this, exports, require, module, __filename, __dirname); });"),c=Buffer.from("#!"),o=Buffer.from("\r")[0],l=Buffer.from("\n")[0],u=(t,r,u)=>{if((0,e.hash)(t)===r)return!0;if(u){if(f=c,t.slice(0,f.length).equals(f)){let s=t.indexOf(l);return t[s-1]===o&&s--,(0,e.hash)(t.slice(s))===r}if((0,e.hash)(Buffer.concat([s,t,i]))===r)return!0}var f;return(0,e.hash)(Buffer.concat([n,t,a]))===r},f=e=>e instanceof Buffer?e:Buffer.from(e,"utf-8");var h;process.send&&(h=process.send.bind(process),process.on("message",(r=>{(async function(r){switch(r.type){case 0:try{const s=await(0,t.readFileRaw)(r.file);return{id:r.id,hash:(0,e.hash)(s)}}catch(e){return{id:r.id}}case 1:try{return{id:r.id,hash:(0,e.hash)(f(r.data))}}catch(e){return{id:r.id}}case 2:try{const e=await(0,t.readFileRaw)(r.file);return{id:r.id,matches:u(e,r.expected,r.checkNode)}}catch(e){return{id:r.id,matches:!1}}case 3:try{return{id:r.id,matches:u(f(r.data),r.expected,r.checkNode)}}catch(e){return{id:r.id,matches:!1}}}})(r).then(h)})))})()})();