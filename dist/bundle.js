!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports):"function"==typeof define&&define.amd?define(["exports"],t):t((e="undefined"!=typeof globalThis?globalThis:e||self).modls={})}(this,(function(e){"use strict";
/*! (c) Andrea Giammarchi - ISC */var t={};try{t.WeakMap=WeakMap}catch(e){t.WeakMap=function(e,t){var n=t.defineProperty,r=t.hasOwnProperty,o=s.prototype;return o.delete=function(e){return this.has(e)&&delete e[this._]},o.get=function(e){return this.has(e)?e[this._]:void 0},o.has=function(e){return r.call(e,this._)},o.set=function(e,t){return n(e,this._,{configurable:!0,value:t}),this},s;function s(t){n(this,"_",{value:"_@ungap/weakmap"+e++}),t&&t.forEach(i,this)}function i(e){this.set(e[0],e[1])}}(Math.random(),Object)}var n,r,o=t.WeakMap,s="-"+Math.random().toFixed(6)+"%",i=!1;
/*! (c) Andrea Giammarchi - ISC */try{n=document.createElement("template"),r="tabindex","content"in n&&(n.innerHTML='<p tabindex="'+s+'"></p>',n.content.childNodes[0].getAttribute(r)==s)||(s="_dt: "+s.slice(1,-1)+";",i=!0)}catch(e){}var a="\x3c!--"+s+"--\x3e",c=/^(?:style|textarea)$/i,u=/^(?:area|base|br|col|embed|hr|img|input|keygen|link|menuitem|meta|param|source|track|wbr)$/i;
/*! (c) Andrea Giammarchi - ISC */
function l(e){return e.join(a).replace(m,b).replace(y,S)}var h=" \\f\\n\\r\\t",d="[^ \\f\\n\\r\\t\\/>\"'=]+",f="[ \\f\\n\\r\\t]+"+d,p="<([A-Za-z]+[A-Za-z0-9:._-]*)((?:",v="(?:\\s*=\\s*(?:'[^']*?'|\"[^\"]*?\"|<[^>]*?>|"+d.replace("\\/","")+"))?)",y=new RegExp(p+f+v+"+)(["+h+"]*/?>)","g"),m=new RegExp(p+f+v+"*)(["+h+"]*/>)","g"),g=new RegExp("("+f+"\\s*=\\s*)(['\"]?)"+a+"\\2","gi");function S(e,t,n,r){return"<"+t+n.replace(g,w)+r}function w(e,t,n){return t+(n||'"')+s+(n||'"')}function b(e,t,n){return u.test(t)?e:"<"+t+n+"></"+t+">"}const{isArray:_}=Array,{indexOf:C,slice:E}=[];var N=e=>({get:t=>e.get(t),set:(t,n)=>(e.set(t,n),n)});const x=(e,t)=>111===e.nodeType?1/t<0?t?(({firstChild:e,lastChild:t})=>{const n=document.createRange();return n.setStartAfter(e),n.setEndAfter(t),n.deleteContents(),e})(e):e.lastChild:t?e.valueOf():e.firstChild:e,M=e=>{const{childNodes:t}=e,{length:n}=t;if(n<2)return n?t[0]:e;const r=E.call(t,0);return{ELEMENT_NODE:1,nodeType:111,firstChild:r[0],lastChild:r[n-1],valueOf(){if(t.length!==n){let t=0;for(;t<n;)e.appendChild(r[t++])}return e}}};
/*! (c) Andrea Giammarchi - ISC */
var k=function(e){var t="fragment",n="template",r="content"in s(n)?function(e){var t=s(n);return t.innerHTML=e,t.content}:function(e){var r=s(t),i=s(n),a=null;if(/^[^\S]*?<(col(?:group)?|t(?:head|body|foot|r|d|h))/i.test(e)){var c=RegExp.$1;i.innerHTML="<table>"+e+"</table>",a=i.querySelectorAll(c)}else i.innerHTML=e,a=i.childNodes;return o(r,a),r};return function(e,t){return("svg"===t?i:r)(e)};function o(e,t){for(var n=t.length;n--;)e.appendChild(t[0])}function s(n){return n===t?e.createDocumentFragment():e.createElementNS("http://www.w3.org/1999/xhtml",n)}function i(e){var n=s(t),r=s("div");return r.innerHTML='<svg xmlns="http://www.w3.org/2000/svg">'+e+"</svg>",o(n,r.firstChild.childNodes),n}}(document),T=(e,t,n,r,o)=>{const s=n.length;let i=t.length,a=s,c=0,u=0,l=null;for(;c<i||u<a;)if(i===c){const t=a<s?u?r(n[u-1],-0).nextSibling:r(n[a-u],0):o;for(;u<a;)e.insertBefore(r(n[u++],1),t)}else if(a===u)for(;c<i;)l&&l.has(t[c])||e.removeChild(r(t[c],-1)),c++;else if(t[c]===n[u])c++,u++;else if(t[i-1]===n[a-1])i--,a--;else if(t[c]===n[a-1]&&n[u]===t[i-1]){const o=r(t[--i],-1).nextSibling;e.insertBefore(r(n[u++],1),r(t[c++],-1).nextSibling),e.insertBefore(r(n[--a],1),o),t[i]=n[a]}else{if(!l){l=new Map;let e=u;for(;e<a;)l.set(n[e],e++)}if(l.has(t[c])){const o=l.get(t[c]);if(u<o&&o<a){let s=c,h=1;for(;++s<i&&s<a&&l.get(t[s])===o+h;)h++;if(h>o-u){const s=r(t[c],0);for(;u<o;)e.insertBefore(r(n[u++],1),s)}else e.replaceChild(r(n[u++],1),r(t[c++],-1))}else c++}else e.removeChild(r(t[c++],-1))}return n},L=function(e,t,n,r,o){var s=o in e,i=e.createDocumentFragment();return i.appendChild(e.createTextNode("g")),i.appendChild(e.createTextNode("")),(s?e.importNode(i,!0):i.cloneNode(!0)).childNodes.length<2?function e(t,n){for(var r=t.cloneNode(),o=t.childNodes||[],s=o.length,i=0;n&&i<s;i++)r.appendChild(e(o[i],n));return r}:s?e.importNode:function(e,t){return e.cloneNode(!!t)}}(document,0,0,0,"importNode"),O="".trim||function(){return String(this).replace(/^\s+|\s+/g,"")},A=i?function(e,t){var n=t.join(" ");return t.slice.call(e,0).sort((function(e,t){return n.indexOf(e.name)<=n.indexOf(t.name)?-1:1}))}:function(e,t){return t.slice.call(e,0)};function R(e,t){for(var n=t.length,r=0;r<n;)e=e.childNodes[t[r++]];return e}function j(e,t,n,r){for(var o=e.childNodes,i=o.length,u=0;u<i;){var l=o[u];switch(l.nodeType){case 1:var h=r.concat(u);P(l,t,n,h),j(l,t,n,h);break;case 8:var d=l.textContent;if(d===s)n.shift(),t.push(c.test(e.nodeName)?H(e,r):D(l,r.concat(u)));else switch(d.slice(0,2)){case"/*":if("*/"!==d.slice(-2))break;case"👻":e.removeChild(l),u--,i--}break;case 3:c.test(e.nodeName)&&O.call(l.textContent)===a&&(n.shift(),t.push(H(e,r)))}u++}}function P(e,t,n,r){for(var o=e.attributes,c=[],u=[],l=A(o,n),h=l.length,d=0;d<h;){var f,p=l[d++],v=p.value===s;if(v||1<(f=p.value.split(a)).length){var y=p.name;if(c.indexOf(y)<0){c.push(y);var m=n.shift().replace(v?/^(?:|[\S\s]*?\s)(\S+?)\s*=\s*('|")?$/:new RegExp("^(?:|[\\S\\s]*?\\s)("+y+")\\s*=\\s*('|\")[\\S\\s]*","i"),"$1"),g=o[m]||o[m.toLowerCase()];if(v)t.push(F(g,r,m,null));else{for(var S=f.length-2;S--;)n.shift();t.push(F(g,r,m,f))}}u.push(p)}}d=0;for(var w=(0<(h=u.length)&&i&&!("ownerSVGElement"in e));d<h;){var b=u[d++];w&&(b.value=""),e.removeAttribute(b.name)}var _=e.nodeName;if(/^script$/i.test(_)){var C=document.createElement(_);for(h=o.length,d=0;d<h;)C.setAttributeNode(o[d++].cloneNode(!0));C.textContent=e.textContent,e.parentNode.replaceChild(C,e)}}function D(e,t){return{type:"any",node:e,path:t}}function F(e,t,n,r){return{type:"attr",node:e,path:t,name:n,sparse:r}}function H(e,t){return{type:"text",node:e,path:t}}var W=N(new o);function I(e,t){var n=(e.convert||l)(t),r=e.transform;r&&(n=r(n));var o=k(n,e.type);$(o);var s=[];return j(o,s,t.slice(0),[]),{content:o,updates:function(n){for(var r=[],o=s.length,i=0,a=0;i<o;){var c=s[i++],u=R(n,c.path);switch(c.type){case"any":r.push({fn:e.any(u,[]),sparse:!1});break;case"attr":var l=c.sparse,h=e.attribute(u,c.name,c.node);null===l?r.push({fn:h,sparse:!1}):(a+=l.length-2,r.push({fn:h,sparse:!0,values:l}));break;case"text":r.push({fn:e.text(u),sparse:!1}),u.textContent=""}}return o+=a,function(){var e=arguments.length;if(o!==e-1)throw new Error(e-1+" values instead of "+o+"\n"+t.join("${value}"));for(var s=1,i=1;s<e;){var a=r[s-i];if(a.sparse){var c=a.values,u=c[0],l=1,h=c.length;for(i+=h-2;l<h;)u+=arguments[s++]+c[l++];a.fn(u)}else a.fn(arguments[s++])}return n}}}}function U(e,t){var n=W.get(t)||W.set(t,I(e,t));return n.updates(L.call(document,n.content,!0))}var z=[];function $(e){for(var t=e.childNodes,n=t.length;n--;){var r=t[n];1!==r.nodeType&&0===O.call(r.textContent).length&&e.removeChild(r)}}
/*! (c) Andrea Giammarchi - ISC */var Z=function(){var e=/acit|ex(?:s|g|n|p|$)|rph|ows|mnc|ntw|ine[ch]|zoo|^ord/i,t=/([^A-Z])([A-Z]+)/g;return function(e,t){return"ownerSVGElement"in e?function(e,t){var n;t?n=t.cloneNode(!0):(e.setAttribute("style","--hyper:style;"),n=e.getAttributeNode("style"));return n.value="",e.setAttributeNode(n),r(n,!0)}(e,t):r(e.style,!1)};function n(e,t,n){return t+"-"+n.toLowerCase()}function r(r,o){var s,i;return function(a){var c,u,l,h;switch(typeof a){case"object":if(a){if("object"===s){if(!o&&i!==a)for(u in i)u in a||(r[u]="")}else o?r.value="":r.cssText="";for(u in c=o?{}:r,a)l="number"!=typeof(h=a[u])||e.test(u)?h:h+"px",!o&&/^--/.test(u)?c.setProperty(u,l):c[u]=l;s="object",o?r.value=function(e){var r,o=[];for(r in e)o.push(r.replace(t,n),":",e[r],";");return o.join("")}(i=c):i=a;break}default:i!=a&&(s="string",i=a,o?r.value=a||"":r.cssText=a||"")}}}}();const B=(e,t)=>{let n,r=!0;const o=document.createAttributeNS(null,t);return t=>{n!==t&&(n=t,null==n?r||(e.removeAttributeNode(o),r=!0):(o.value=t,r&&(e.setAttributeNodeNS(o),r=!1)))}},G=(e,t)=>n=>{e[t]=n},q=/^(?:form|list)$/i,J=(e,t)=>e.ownerDocument.createTextNode(t);function V(e){return this.type=e,t=this,n=z,r=$,function(e){return n!==e&&(r=U(t,n=e)),r.apply(null,arguments)};var t,n,r}function K(e){return e(this)}V.prototype={attribute(e,t,n){const r="svg"===this.type;switch(t){case"class":if(r)return B(e,t);t="className";case"props":return G(e,t);case"aria":return(e=>t=>{for(const n in t){const r="role"===n?n:"aria-"+n,o=t[n];null==o?e.removeAttribute(r):e.setAttribute(r,o)}})(e);case"style":return Z(e,n,r);case"ref":return(e=>t=>{"function"==typeof t?t(e):t.current=e})(e);case".dataset":return(({dataset:e})=>t=>{for(const n in t){const r=t[n];null==r?delete e[n]:e[n]=r}})(e);default:return"."===t.slice(0,1)?G(e,t.slice(1)):"on"===t.slice(0,2)?((e,t)=>{let n,r=t.slice(2);return!(t in e)&&t.toLowerCase()in e&&(r=r.toLowerCase()),t=>{const o=_(t)?t:[t,!1];n!==o[0]&&(n&&e.removeEventListener(r,n,o[1]),(n=o[0])&&e.addEventListener(r,n,o[1]))}})(e,t):!(t in e)||r||q.test(t)?B(e,t):((e,t)=>{let n;return r=>{n!==r&&(n=r,e[t]!==r&&(null==r?(e[t]="",e.removeAttribute(t)):e[t]=r))}})(e,t)}},any(e,t){const{type:n}=this;let r,o=!1;const s=i=>{switch(typeof i){case"string":case"number":case"boolean":o?r!==i&&(r=i,t[0].textContent=i):(o=!0,r=i,t=T(e.parentNode,t,[J(e,i)],x,e));break;case"function":s(i(e));break;case"object":case"undefined":if(null==i){o=!1,t=T(e.parentNode,t,[],x,e);break}default:if(o=!1,r=i,_(i))if(0===i.length)t.length&&(t=T(e.parentNode,t,[],x,e));else switch(typeof i[0]){case"string":case"number":case"boolean":s(String(i));break;case"function":s(i.map(K,e));break;case"object":_(i[0])&&(i=i.concat.apply([],i));default:t=T(e.parentNode,t,i,x,e)}else"ELEMENT_NODE"in i?t=T(e.parentNode,t,11===i.nodeType?E.call(i.childNodes):[i],x,e):"text"in i?s(String(i.text)):"any"in i?s(i.any):"html"in i?t=T(e.parentNode,t,E.call(k([].concat(i.html).join(""),n).childNodes),x,e):"length"in i&&s(E.call(i))}};return s},text(e){let t;const n=r=>{if(t!==r){t=r;const o=typeof r;"object"===o&&r?"text"in r?n(String(r.text)):"any"in r?n(r.any):"html"in r?n([].concat(r.html).join("")):"length"in r&&n(E.call(r).join("")):"function"===o?n(r(e)):e.textContent=null==r?"":r}};return n}};const{create:Q,freeze:X,keys:Y}=Object,ee=V.prototype,te=N(new o),ne=e=>({html:oe("html",e),svg:oe("svg",e),render(t,n){const r="function"==typeof n?n():n,o=te.get(t)||te.set(t,re()),s=r instanceof ae?se(e,o,r):r;return s!==o.wire&&(o.wire=s,t.textContent="",t.appendChild(s.valueOf())),t}}),re=()=>({stack:[],entry:null,wire:null}),oe=(e,t)=>{const n=N(new o);return r.for=(e,o)=>{const s=n.get(e)||n.set(e,Q(null));return s[o]||(s[o]=(i=re(),function(){return se(t,i,r.apply(null,arguments))}));var i},r.node=function(){return se(t,re(),r.apply(null,arguments)).valueOf()},r;function r(){return new ae(e,fe.apply(null,arguments))}},se=(e,t,{type:n,template:r,values:o})=>{const{length:s}=o;ie(e,t,o,s);let{entry:i}=t;if(i&&i.template===r&&i.type===n)i.tag(r,...o);else{const s=new e(n);t.entry=i={type:n,template:r,tag:s,wire:M(s(r,...o))}}return i.wire},ie=(e,{stack:t},n,r)=>{for(let o=0;o<r;o++){const r=n[o];r instanceof ce?n[o]=se(e,t[o]||(t[o]=re()),r):_(r)?ie(e,t[o]||(t[o]=re()),r,r.length):t[o]=null}r<t.length&&t.splice(r)};function ae(e,t){this.type=e,this.template=t.shift(),this.values=t}X(ae);const ce=ae,ue=e=>{const t=Q(ee);return Y(e).forEach((n=>{t[n]=e[n](t[n]||("convert"===n?l:String))})),n.prototype=t,ne(n);function n(){return V.apply(this,arguments)}},{render:le,html:he,svg:de}=ne(V);function fe(){let e=[],t=0,{length:n}=arguments;for(;t<n;)e.push(arguments[t++]);return e}function pe(e){const{svg:t,html:n,render:r}=ue({attribute(t){return(n,r,o)=>n instanceof e&&"ref"!==r?e=>{n._setProps({[r]:e})}:n instanceof e&&"ref"===r?e=>{t.apply(this,[n,r,o])(e),n.__ref=!0,n!=e.current&&n.forceUpdate()}:n?t.apply(this,[n,r,o]):()=>{}}});return{svg:t,html:n,render:r}}var ve="function"==typeof WeakSet,ye=Object.keys;function me(e,t){e&&"object"==typeof e&&t.add(e)}function ge(e,t,n,r){for(var o,s=e.length,i=0;i<s;i++)if(n((o=e[i])[0],t[0],r)&&n(o[1],t[1],r))return!0;return!1}function Se(e,t,n,r){for(var o=e.length,s=0;s<o;s++)if(n(e[s],t,r))return!0;return!1}function we(e,t){return e===t||e!=e&&t!=t}function be(e){return e.constructor===Object||null==e.constructor}function _e(e){return!!e&&"function"==typeof e.then}function Ce(e){return!(!e||!e.$$typeof)}function Ee(){return Object.create({_values:[],add:function(e){this._values.push(e)},has:function(e){return-1!==this._values.indexOf(e)}})}var Ne=ve?function(){return new WeakSet}:Ee;function xe(e){return function(t){var n=e||t;return function(e,t,r){void 0===r&&(r=Ne());var o=r.has(e),s=r.has(t);return o||s?o&&s:(me(e,r),me(t,r),n(e,t,r))}}}function Me(e){var t=new Array(e.size),n=0;return e.forEach((function(e,r){t[n++]=[r,e]})),t}function ke(e){var t=new Array(e.size),n=0;return e.forEach((function(e){t[n++]=e})),t}var Te=Function.prototype.bind.call(Function.prototype.call,Object.prototype.hasOwnProperty);function Le(e,t,n,r){var o,s=ye(e),i=s.length;if(ye(t).length!==i)return!1;for(var a=0;a<i;a++){if(o=s[a],!Te(t,o))return!1;if("_owner"===o&&Ce(e)){if(!Ce(t))return!1}else if(!n(e[o],t[o],r))return!1}return!0}var Oe=Array.isArray,Ae="function"==typeof Map,Re="function"==typeof Set,je="object";function Pe(e){var t="function"==typeof e?e(n):n;function n(e,n,r){if(we(e,n))return!0;if(e&&n&&typeof e===je&&typeof n===je){if(be(e)&&be(n))return Le(e,n,t,r);var o=Oe(e),s=Oe(n);if(o||s)return o===s&&function(e,t,n,r){var o=e.length;if(t.length!==o)return!1;for(var s=0;s<o;s++)if(!n(e[s],t[s],r))return!1;return!0}(e,n,t,r);var i=e instanceof Date,a=n instanceof Date;if(i||a)return i===a&&we(e.getTime(),n.getTime());var c=e instanceof RegExp,u=n instanceof RegExp;if(c||u)return c===u&&function(e,t){return e.source===t.source&&e.global===t.global&&e.ignoreCase===t.ignoreCase&&e.multiline===t.multiline&&e.unicode===t.unicode&&e.sticky===t.sticky&&e.lastIndex===t.lastIndex}(e,n);if(_e(e)||_e(n))return e===n;if(Ae){var l=e instanceof Map,h=n instanceof Map;if(l||h)return l===h&&function(e,t,n,r){if(e.size!==t.size)return!1;for(var o=Me(e),s=Me(t),i=o.length,a=0;a<i;a++)if(!ge(s,o[a],n,r)||!ge(o,s[a],n,r))return!1;return!0}(e,n,t,r)}if(Re){var d=e instanceof Set,f=n instanceof Set;if(d||f)return d===f&&function(e,t,n,r){if(e.size!==t.size)return!1;for(var o=ke(e),s=ke(t),i=o.length,a=0;a<i;a++)if(!Se(s,o[a],n,r)||!Se(o,s[a],n,r))return!1;return!0}(e,n,t,r)}return Le(e,n,t,r)}return!1}return n}var De=Pe();Pe((function(){return we})),Pe(xe()),Pe(xe(we));!function(){if(!("adoptedStyleSheets"in document)){var e="ShadyCSS"in window&&!window.ShadyCSS.nativeShadow,t=[],n=[],r=new WeakMap,o=new WeakMap,s=new WeakMap,i=new WeakMap,a=new WeakMap,c={loaded:!1},u={body:null,CSSStyleSheet:null},l=CSSStyleSheet,h=/@import\surl(.*?);/gi,d=["addImport","addPageRule","addRule","deleteRule","insertRule","removeImport","removeRule"],f=["replace","replaceSync"],p=function(){function e(){var e=document.createElement("style");c.loaded?u.body.appendChild(e):(document.head.appendChild(e),e.disabled=!0,t.push(e));var n=e.sheet;return o.set(n,{adopters:new Map,actions:[],basicStyleElement:e}),n}var n=e.prototype;return n.replace=function(e){var t=this,n=g(e);return new Promise((function(e,r){if(o.has(t)){var s=o.get(t).basicStyleElement;s.innerHTML=n,e(s.sheet),w(t)}else r(new Error("Can't call replace on non-constructed CSSStyleSheets."))}))},n.replaceSync=function(e){var t=g(e);if(o.has(this)){var n=o.get(this).basicStyleElement;return n.innerHTML=t,w(this),n.sheet}throw new Error("Failed to execute 'replaceSync' on 'CSSStyleSheet': Can't call replaceSync on non-constructed CSSStyleSheets.")},e}();Object.defineProperty(p,Symbol.hasInstance,{configurable:!0,value:v}),S(l.prototype),window.CSSStyleSheet=p,function(){var t={configurable:!0,get:function(){return r.get(this)||[]},set:function(e){var t=r.get(this)||[];!function(e,t){var n=t===document?"Document":"ShadowRoot";if(!Array.isArray(e))throw new TypeError("Failed to set the 'adoptedStyleSheets' property on "+n+": Iterator getter is not callable.");if(!e.every(v))throw new TypeError("Failed to set the 'adoptedStyleSheets' property on "+n+": Failed to convert value to 'CSSStyleSheet'");var o=e.filter((function(t,n){return e.indexOf(t)===n}));r.set(t,o)}(e,this);var n=this===document?y()?this.head:this.body:this,s="isConnected"in n?n.isConnected:document.body.contains(n);window.requestAnimationFrame((function(){s&&(b(n),function(e,t){for(var n=m(e),r=0,s=t.length;r<s;r++)if(!(n.indexOf(t[r])>-1)){var a=o.get(t[r]).adopters,c=i.get(e),u=a.get(e);u||(u=a.get(document.head)),c.disconnect(),u.parentNode.removeChild(u),c.observe()}}(n,t))}))}};if(Object.defineProperty(Document.prototype,"adoptedStyleSheets",t),"undefined"!=typeof ShadowRoot){var n=Element.prototype.attachShadow;Element.prototype.attachShadow=function(){var t=e?this:n.apply(this,arguments);return C(t),t},Object.defineProperty(ShadowRoot.prototype,"adoptedStyleSheets",t)}}(),y()?document.addEventListener("DOMContentLoaded",E):E()}function v(e){return e instanceof l||e instanceof u.CSSStyleSheet}function y(){return"loading"===document.readyState}function m(e){return r.get(e.parentNode===document.documentElement?document:e)}function g(e){var t=e.match(h,"")||[],n=e;return t.length&&(console.warn("@import rules are not allowed here. See https://github.com/WICG/construct-stylesheets/issues/119#issuecomment-588352418"),t.forEach((function(e){n=n.replace(e,"")}))),n}function S(e){f.forEach((function(t){e[t]=function(){return p.prototype[t].apply(this,arguments)}})),d.forEach((function(t){var n=e[t];e[t]=function(){var e=arguments,r=n.apply(this,e);if(o.has(this)){var s=o.get(this),i=s.adopters,a=s.actions;i.forEach((function(n){n.sheet&&n.sheet[t].apply(n.sheet,e)})),a.push([t,e])}return r}}))}function w(e){var t=o.get(e),n=t.adopters,r=t.basicStyleElement;n.forEach((function(e){e.innerHTML=r.innerHTML}))}function b(e){for(var t=document.createDocumentFragment(),r=m(e),c=i.get(e),u=0,l=r.length;u<l;u++){var h=o.get(r[u]),d=h.adopters,f=h.basicStyleElement,p=d.get(e);p?(c.disconnect(),t.appendChild(p),(!p.innerHTML||p.sheet&&!p.sheet.cssText)&&(p.innerHTML=f.innerHTML),c.observe()):((p=document.createElement("style")).innerHTML=f.innerHTML,s.set(p,e),a.set(p,0),d.set(e,p),t.appendChild(p)),e===document.head&&n.push(p)}e.insertBefore(t,e.firstChild);for(var v=0,y=r.length;v<y;v++){var g=o.get(r[v]),S=g.adopters,w=g.actions,b=S.get(e),_=a.get(b);if(w.length>0){for(var C=_,E=w.length;C<E;C++){var N=w[C],x=N[0],M=N[1];b.sheet[x].apply(b.sheet,M)}a.set(b,w.length-1)}}}function _(t){for(var n=0,r=t.length;n<r;n++){for(var o=t[n],i=o.addedNodes,a=o.removedNodes,c=0,u=a.length;c<u;c++){var l=s.get(a[c]);l&&b(l)}if(!e)for(var h=0,d=i.length;h<d;h++)for(var f=document.createNodeIterator(i[h],NodeFilter.SHOW_ELEMENT,(function(e){return e.shadowRoot&&e.shadowRoot.adoptedStyleSheets.length>0?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_REJECT}),null,!1),p=void 0;p=f.nextNode();)b(p.shadowRoot)}}function C(e){var t=new MutationObserver(_),n={observe:function(){t.observe(e,{childList:!0,subtree:!0})},disconnect:function(){t.disconnect()}};i.set(e,n),n.observe()}function E(){var e=document.createElement("iframe");e.hidden=!0,document.body.appendChild(e),u.body=e.contentWindow.document.body,u.CSSStyleSheet=e.contentWindow.CSSStyleSheet,S(e.contentWindow.CSSStyleSheet.prototype),C(document.body),c.loaded=!0;for(var r=document.createDocumentFragment(),o=0,s=t.length;o<s;o++)t[o].disabled=!1,r.appendChild(t[o]);u.body.appendChild(r);for(var i=0,a=n.length;i<a;i++)r.appendChild(n[i]);document.body.insertBefore(r,document.body.firstChild),t.length=0,n.length=0}}();class Fe extends HTMLElement{_mounted(){return!!this.__mounted}get props(){return{...this._props}}static get props(){return{}}static get observedAttributes(){var e=Object.keys(this.props).map((e=>e.toLowerCase()));return[...new Set([...Object.keys(this.props),...e])]}_genUUID(){const e=[];for(var t=0;t<256;t++)e[t]=(t<16?"0":"")+t.toString(16);var n=4294967295*Math.random()|0,r=4294967295*Math.random()|0,o=4294967295*Math.random()|0,s=4294967295*Math.random()|0;return e[255&n]+e[n>>8&255]+e[n>>16&255]+e[n>>24&255]+"-"+e[255&r]+e[r>>8&255]+"-"+e[r>>16&15|64]+e[r>>24&255]+"-"+e[63&o|128]+e[o>>8&255]+"-"+e[o>>16&255]+e[o>>24&255]+e[255&s]+e[s>>8&255]+e[s>>16&255]+e[s>>24&255]}constructor(e){super(),this.__ref=!1,this.__mounted=!1,this.state={},this._props={},this.identifier=this._genUUID(),this._sheet=new window.CSSStyleSheet,this.__propsInitial={},this._setProps({...this.constructor.props}),this.constructor.___hooks&&this.constructor.___hooks.forEach((e=>e(this))),this.constructor.___props&&this.constructor.___props,e&&this._setProps({...this.constructor.___props}),e&&this._setProps({...e}),this._renderMethod()}get contents(){return this._contents||(this._contentHolder=document.createElement("template"),this._contentHolder.content.append(...this.childNodes),this._contents=[...this._contentHolder.content.childNodes]),this._contents}_renderMethod(){this._shadowRoot=this.attachShadow({mode:"open"}),this._shadowRoot.adoptedStyleSheets=[this._sheet],this.render=We.bind(null,this._shadowRoot,this.render.bind(this))}_cssMethod(){this._sheet.replaceSync(this.styles())}_setProps(e){var t={...this.props};for(var n in e){let t=Object.keys(this.constructor.props).find((e=>e.toLowerCase()===n.toLowerCase()));if(e.hasOwnProperty(n)){t||(console.warn("Please define your property '"+n+"' inside the 'static get props()' of '"+this.constructor.name+"', otherwise your component will not be watching this property"),t=n);let r=e[n];this._props[t]=r}}var r={...this.props};De(t,r)||(this.forceUpdate(),this.onDidUpdate(t,{...this.state}))}forceUpdate(e=!1){(!0===e||this._mounted())&&(this.contents,this.render(),this._sheet.replaceSync(this.styles()))}async setState(e){let t=e,n={...this.state};for(var r in"function"==typeof e&&(t=await e(this.state,this.props)),t)t.hasOwnProperty(r)&&(this.state[r]=t[r]);var o={...this.state};De(n,o)||(this.onDidUpdate({...this.props},n),this.forceUpdate())}attributeChangedCallback(e,t,n){if("string"==typeof n){e=Object.keys(this.props).find((t=>t.toLowerCase()===e.toLowerCase()));try{n=JSON.parse(n)}catch(e){}}this._setProps({[e]:n})}connectedCallback(){this.getRootNode()instanceof DocumentFragment&&!(this.getRootNode()instanceof ShadowRoot)||(this.__mounted=!0,this.forceUpdate(),this.onDidMount())}disconnectedCallback(){this.getRootNode()instanceof DocumentFragment&&!(this.getRootNode()instanceof ShadowRoot)||(this.onWillUnmount(),this.__mounted=!1)}onDidMount(){}onWillUnmount(){}onDidUpdate(e,t){}styles(){return""}render(){return He`< div>
    </div>`}}const{html:He,render:We}=pe(Fe);const{render:Ie}=pe(Fe);class Ue extends Error{constructor(e){super(e)}set response(e){this._response=e}get response(){return this._response||new Response}set status(e){this._status=e}get status(){return this._status||0}}const{html:ze,render:$e,svg:Ze}=pe(Fe),Be=(e=>(t,n=null)=>((e.isPrototypeOf(t)||e===t)&&(null===n&&(n="modls-"+(e=>{if(e){let t=e.match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g);if(t)return t.map((e=>e.toLowerCase())).join("-")}throw new Error("Invalid string")})(t.name)),n.includes("-")||(n="modls-"+n),window.customElements.define(n.toLowerCase(),t)),t))(Fe);e.Component=Fe,e.RawComponent=class extends Fe{_renderMethod(){this.render=Ie.bind(null,this,this.render.bind(this)),document.adoptedStyleSheets=[...document.adoptedStyleSheets,this._sheet],this.style.display="contents"}},e.WrapComponent=function(e,t={},n=null){return e.___hooks||(e.___hooks=[]),e.___props||(e.___props={}),"function"==typeof n&&e.___hooks.push(n),e.___props={...t},e},e.css=function(e,...t){let n="";for(let r=0;r<e.length;r++)n+=e[r],t[r]&&("function"==typeof t[r]?n+=t[r]():n+=t[r]);return n},e.html=ze,e.registerComponent=Be,e.render=$e,e.safeFetch=function(e,t){return new Promise((async(n,r)=>{try{let r=await fetch(e,t);if(!r.ok){let e=new Ue("HTTP status code: "+r.status);throw e.response=r,e.status=r.status,e}n(r)}catch(e){r(e)}}))},e.svg=Ze,Object.defineProperty(e,"__esModule",{value:!0})}));
