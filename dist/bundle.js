/*! (c) Andrea Giammarchi - ISC */
var t={};try{t.WeakMap=WeakMap}catch(e){t.WeakMap=function(t,e){var n=e.defineProperty,r=e.hasOwnProperty,o=i.prototype;return o.delete=function(t){return this.has(t)&&delete t[this._]},o.get=function(t){return this.has(t)?t[this._]:void 0},o.has=function(t){return r.call(t,this._)},o.set=function(t,e){return n(t,this._,{configurable:!0,value:e}),this},i;function i(e){n(this,"_",{value:"_@ungap/weakmap"+t++}),e&&e.forEach(s,this)}function s(t){this.set(t[0],t[1])}}(Math.random(),Object)}var e=t.WeakMap,n={};
/*! (c) Andrea Giammarchi - ISC */try{n.WeakMap=WeakMap}catch(t){n.WeakMap=function(t,e){var n=e.defineProperty,r=e.hasOwnProperty,o=i.prototype;return o.delete=function(t){return this.has(t)&&delete t[this._]},o.get=function(t){return this.has(t)?t[this._]:void 0},o.has=function(t){return r.call(t,this._)},o.set=function(t,e){return n(t,this._,{configurable:!0,value:e}),this},i;function i(e){n(this,"_",{value:"_@ungap/weakmap"+t++}),e&&e.forEach(s,this)}function s(t){this.set(t[0],t[1])}}(Math.random(),Object)}var r=n.WeakMap,o="object"!=typeof document,i=function(t){var e,n=(e=(document.defaultView.navigator||{}).userAgent,/(Firefox|Safari)\/(\d+)/.test(e)&&!/(Chrom[eium]+|Android)\/(\d+)/.test(e)),a=!("raw"in t)||t.propertyIsEnumerable("raw")||!Object.isFrozen(t.raw);if(n||a){var c={},u=function(t){for(var e=".",n=0;n<t.length;n++)e+=t[n].length+"."+t[n];return c[e]||(c[e]=t)};if(a)i=u;else{var l=new r;i=function(t){return l.get(t)||function(t,e){return l.set(t,e),e}(t,u(t))}}}else o=!0;return s(t)};function s(t){return o?t:i(t)}function a(t){for(var e=arguments.length,n=[s(t)],r=1;r<e;)n.push(arguments[r++]);return n}
/*! (c) Andrea Giammarchi - ISC */var c,u="-"+Math.random().toFixed(6)+"%",l=!1;try{"content"in(c=document.createElement("template"))&&(c.innerHTML='<p tabindex="'+u+'"></p>',c.content.childNodes[0].getAttribute("tabindex")==u)||(u="_dt: "+u.slice(1,-1)+";",l=!0)}catch(t){}var f="\x3c!--"+u+"--\x3e",h=/^(?:style|textarea)$/i,p=/^(?:area|base|br|col|embed|hr|img|input|keygen|link|menuitem|meta|param|source|track|wbr)$/i;
/*! (c) Andrea Giammarchi - ISC */
function d(t){return t.join(f).replace(_,C).replace(w,k)}var v=" \\f\\n\\r\\t",g="[^ \\f\\n\\r\\t\\/>\"'=]+",y="[ \\f\\n\\r\\t]+"+g,m="<([A-Za-z]+[A-Za-z0-9:._-]*)((?:",b="(?:\\s*=\\s*(?:'[^']*?'|\"[^\"]*?\"|<[^>]*?>|"+g.replace("\\/","")+"))?)",w=new RegExp(m+y+b+"+)(["+v+"]*/?>)","g"),_=new RegExp(m+y+b+"*)(["+v+"]*/>)","g"),x=new RegExp("("+y+"\\s*=\\s*)(['\"]?)"+f+"\\2","gi");function k(t,e,n,r){return"<"+e+n.replace(x,N)+r}function N(t,e,n){return e+(n||'"')+u+(n||'"')}function C(t,e,n){return p.test(e)?t:"<"+e+n+"></"+e+">"}const{isArray:E}=Array,{indexOf:A,slice:S}=[];var M=t=>({get:e=>t.get(e),set:(e,n)=>(t.set(e,n),n)});const O=(t,e)=>111===t.nodeType?1/e<0?e?(({firstChild:t,lastChild:e})=>{const n=document.createRange();return n.setStartAfter(t),n.setEndAfter(e),n.deleteContents(),t})(t):t.lastChild:e?t.valueOf():t.firstChild:t,j=t=>{const{childNodes:e}=t,{length:n}=e;if(n<2)return e[0];const r=S.call(e,0);return{ELEMENT_NODE:1,nodeType:111,firstChild:r[0],lastChild:r[n-1],valueOf(){if(e.length!==n){let e=0;for(;e<n;)t.appendChild(r[e++])}return t}}};
/*! (c) Andrea Giammarchi - ISC */
var T=function(t){var e="content"in r("template")?function(t){var e=r("template");return e.innerHTML=t,e.content}:function(t){var e=r("fragment"),o=r("template"),i=null;if(/^[^\S]*?<(col(?:group)?|t(?:head|body|foot|r|d|h))/i.test(t)){var s=RegExp.$1;o.innerHTML="<table>"+t+"</table>",i=o.querySelectorAll(s)}else o.innerHTML=t,i=o.childNodes;return n(e,i),e};return function(t,n){return("svg"===n?o:e)(t)};function n(t,e){for(var n=e.length;n--;)t.appendChild(e[0])}function r(e){return"fragment"===e?t.createDocumentFragment():t.createElementNS("http://www.w3.org/1999/xhtml",e)}function o(t){var e=r("fragment"),o=r("div");return o.innerHTML='<svg xmlns="http://www.w3.org/2000/svg">'+t+"</svg>",n(e,o.firstChild.childNodes),e}}(document);const L=(t,e,n,r,o,i)=>{const s="selectedIndex"in e;let a=s;for(;r<o;){const o=t(n[r],1);if(e.insertBefore(o,i),s&&a&&o.selected){a=!a;let{selectedIndex:t}=e;e.selectedIndex=t<0?r:A.call(e.querySelectorAll("option"),o)}r++}},P=(t,e)=>t==e,R=t=>t,W=(t,e,n,r,o,i,s)=>{const a=i-o;if(a<1)return-1;for(;n-e>=a;){let a=e,c=o;for(;a<n&&c<i&&s(t[a],r[c]);)a++,c++;if(c===i)return e;e=a+1}return-1},z=(t,e,n,r,o)=>n<r?t(e[n],0):0<n?t(e[n-1],-0).nextSibling:o,I=(t,e,n,r)=>{for(;n<r;)H(t(e[n++],-1))},$=(t,e,n)=>{let r=1,o=e;for(;r<o;){const e=(r+o)/2>>>0;n<t[e]?o=e:r=e+1}return r},D=(t,e,n,r,o,i,s,a,c,u,l,f,h)=>{((t,e,n,r,o,i,s,a,c)=>{const u=[],l=t.length;let f=s,h=0;for(;h<l;)switch(t[h++]){case 0:o++,f++;break;case 1:u.push(r[o]),L(e,n,r,o++,o,f<a?e(i[f],0):c);break;case-1:f++}for(h=0;h<l;)switch(t[h++]){case 0:s++;break;case-1:-1<u.indexOf(i[s])?s++:I(e,i,s++,s)}})(((t,e,n,r,o,i,s)=>{const a=n+i,c=[];let u,l,f,h,p,d,v;t:for(u=0;u<=a;u++){if(u>50)return null;for(v=u-1,p=u?c[u-1]:[0,0],d=c[u]=[],l=-u;l<=u;l+=2){for(h=l===-u||l!==u&&p[v+l-1]<p[v+l+1]?p[v+l+1]:p[v+l-1]+1,f=h-l;h<i&&f<n&&s(r[o+h],t[e+f]);)h++,f++;if(h===i&&f===n)break t;d[u+l]=h}}const g=Array(u/2+a/2);let y=g.length-1;for(u=c.length-1;u>=0;u--){for(;h>0&&f>0&&s(r[o+h-1],t[e+f-1]);)g[y--]=0,h--,f--;if(!u)break;v=u-1,p=u?c[u-1]:[0,0],l=h-f,l===-u||l!==u&&p[v+l-1]<p[v+l+1]?(f--,g[y--]=1):(h--,g[y--]=-1)}return g})(n,r,i,s,a,u,f)||((t,e,n,r,o,i,s,a)=>{let c=0,u=r<a?r:a;const l=Array(u++),f=Array(u);f[0]=-1;for(let t=1;t<u;t++)f[t]=s;const h=o.slice(i,s);for(let r=e;r<n;r++){const e=h.indexOf(t[r]);if(-1<e){const t=e+i;c=$(f,u,t),-1<c&&(f[c]=t,l[c]={newi:r,oldi:t,prev:l[c-1]})}}for(c=--u,--s;f[c]>s;)--c;u=a+r-c;const p=Array(u);let d=l[c];for(--n;d;){const{newi:t,oldi:e}=d;for(;n>t;)p[--u]=1,--n;for(;s>e;)p[--u]=-1,--s;p[--u]=0,--n,--s,d=d.prev}for(;n>=e;)p[--u]=1,--n;for(;s>=i;)p[--u]=-1,--s;return p})(n,r,o,i,s,a,c,u),t,e,n,r,s,a,l,h)},H=t=>(t.remove||U).call(t);function U(){const{parentNode:t}=this;t&&t.removeChild(this)}
/*! (c) 2018 Andrea Giammarchi (ISC) */const F=(t,e,n,r)=>{r||(r={});const o=r.compare||P,i=r.node||R,s=null==r.before?null:i(r.before,0),a=e.length;let c=a,u=0,l=n.length,f=0;for(;u<c&&f<l&&o(e[u],n[f]);)u++,f++;for(;u<c&&f<l&&o(e[c-1],n[l-1]);)c--,l--;const h=u===c,p=f===l;if(h&&p)return n;if(h&&f<l)return L(i,t,n,f,l,z(i,e,u,a,s)),n;if(p&&u<c)return I(i,e,u,c),n;const d=c-u,v=l-f;let g=-1;if(d<v){if(g=W(n,f,l,e,u,c,o),-1<g)return L(i,t,n,f,g,i(e[u],0)),L(i,t,n,g+d,l,z(i,e,c,a,s)),n}else if(v<d&&(g=W(e,u,c,n,f,l,o),-1<g))return I(i,e,u,g),I(i,e,g+v,c),n;return d<2||v<2?(L(i,t,n,f,l,i(e[u],0)),I(i,e,u,c),n):d===v&&((t,e,n,r,o,i)=>{for(;r<o&&i(n[r],t[e-1]);)r++,e--;return 0===e})(n,l,e,u,c,o)?(L(i,t,n,f,l,z(i,e,c,a,s)),n):(D(i,t,n,f,l,v,e,u,c,d,a,o,s),n)};
/*! (c) Andrea Giammarchi - ISC */var Z={};try{Z.WeakMap=WeakMap}catch(t){Z.WeakMap=function(t,e){var n=e.defineProperty,r=e.hasOwnProperty,o=i.prototype;return o.delete=function(t){return this.has(t)&&delete t[this._]},o.get=function(t){return this.has(t)?t[this._]:void 0},o.has=function(t){return r.call(t,this._)},o.set=function(t,e){return n(t,this._,{configurable:!0,value:e}),this},i;function i(e){n(this,"_",{value:"_@ungap/weakmap"+t++}),e&&e.forEach(s,this)}function s(t){this.set(t[0],t[1])}}(Math.random(),Object)}var q=Z.WeakMap,V=function(t){var e="content"in r("template")?function(t){var e=r("template");return e.innerHTML=t,e.content}:function(t){var e=r("fragment"),o=r("template"),i=null;if(/^[^\S]*?<(col(?:group)?|t(?:head|body|foot|r|d|h))/i.test(t)){var s=RegExp.$1;o.innerHTML="<table>"+t+"</table>",i=o.querySelectorAll(s)}else o.innerHTML=t,i=o.childNodes;return n(e,i),e};return function(t,n){return("svg"===n?o:e)(t)};function n(t,e){for(var n=e.length;n--;)t.appendChild(e[0])}function r(e){return"fragment"===e?t.createDocumentFragment():t.createElementNS("http://www.w3.org/1999/xhtml",e)}function o(t){var e=r("fragment"),o=r("div");return o.innerHTML='<svg xmlns="http://www.w3.org/2000/svg">'+t+"</svg>",n(e,o.firstChild.childNodes),e}}(document),G=function(t,e,n,r,o){var i="importNode"in t,s=t.createDocumentFragment();return s.appendChild(t.createTextNode("g")),s.appendChild(t.createTextNode("")),(i?t.importNode(s,!0):s.cloneNode(!0)).childNodes.length<2?function t(e,n){for(var r=e.cloneNode(),o=e.childNodes||[],i=o.length,s=0;n&&s<i;s++)r.appendChild(t(o[s],n));return r}:i?t.importNode:function(t,e){return t.cloneNode(!!e)}}(document),B="".trim||function(){return String(this).replace(/^\s+|\s+/g,"")},J=l?function(t,e){var n=e.join(" ");return e.slice.call(t,0).sort((function(t,e){return n.indexOf(t.name)<=n.indexOf(e.name)?-1:1}))}:function(t,e){return e.slice.call(t,0)};
/*! (c) Andrea Giammarchi - ISC */function K(t,e){for(var n=e.length,r=0;r<n;)t=t.childNodes[e[r++]];return t}function Q(t,e,n,r){for(var o=t.attributes,i=[],s=[],a=J(o,n),c=a.length,h=0;h<c;){var p,d=a[h++],v=d.value===u;if(v||1<(p=d.value.split(f)).length){var g=d.name;if(i.indexOf(g)<0){i.push(g);var y=n.shift().replace(v?/^(?:|[\S\s]*?\s)(\S+?)\s*=\s*('|")?$/:new RegExp("^(?:|[\\S\\s]*?\\s)("+g+")\\s*=\\s*('|\")[\\S\\s]*","i"),"$1"),m=o[y]||o[y.toLowerCase()];if(v)e.push(Y(m,r,y,null));else{for(var b=p.length-2;b--;)n.shift();e.push(Y(m,r,y,p))}}s.push(d)}}h=0;for(var w=(0<(c=s.length)&&l&&!("ownerSVGElement"in t));h<c;){var _=s[h++];w&&(_.value=""),t.removeAttribute(_.name)}var x=t.nodeName;if(/^script$/i.test(x)){var k=document.createElement(x);for(c=o.length,h=0;h<c;)k.setAttributeNode(o[h++].cloneNode(!0));k.textContent=t.textContent,t.parentNode.replaceChild(k,t)}}function X(t,e){return{type:"any",node:t,path:e}}function Y(t,e,n,r){return{type:"attr",node:t,path:e,name:n,sparse:r}}function tt(t,e){return{type:"text",node:t,path:e}}var et=M(new q);function nt(t,e){var n=(t.convert||d)(e),r=t.transform;r&&(n=r(n));var o=V(n,t.type);it(o);var i=[];return function t(e,n,r,o){for(var i=e.childNodes,s=i.length,a=0;a<s;){var c=i[a];switch(c.nodeType){case 1:var l=o.concat(a);Q(c,n,r,l),t(c,n,r,l);break;case 8:var p=c.textContent;if(p===u)r.shift(),n.push(h.test(e.nodeName)?tt(e,o):X(c,o.concat(a)));else switch(p.slice(0,2)){case"/*":if("*/"!==p.slice(-2))break;case"👻":e.removeChild(c),a--,s--}break;case 3:h.test(e.nodeName)&&B.call(c.textContent)===f&&(r.shift(),n.push(tt(e,o)))}a++}}(o,i,e.slice(0),[]),{content:o,updates:function(n){for(var r=[],o=i.length,s=0,a=0;s<o;){var c=i[s++],u=K(n,c.path);switch(c.type){case"any":r.push({fn:t.any(u,[]),sparse:!1});break;case"attr":var l=c.sparse,f=t.attribute(u,c.name,c.node);null===l?r.push({fn:f,sparse:!1}):(a+=l.length-2,r.push({fn:f,sparse:!0,values:l}));break;case"text":r.push({fn:t.text(u),sparse:!1}),u.textContent=""}}return o+=a,function(){var t=arguments.length;if(o!==t-1)throw new Error(t-1+" values instead of "+o+"\n"+e.join("${value}"));for(var i=1,s=1;i<t;){var a=r[i-s];if(a.sparse){var c=a.values,u=c[0],l=1,f=c.length;for(s+=f-2;l<f;)u+=arguments[i++]+c[l++];a.fn(u)}else a.fn(arguments[i++])}return n}}}}function rt(t,e){var n=et.get(e)||et.set(e,nt(t,e));return n.updates(G.call(document,n.content,!0))}var ot=[];function it(t){for(var e=t.childNodes,n=e.length;n--;){var r=e[n];1!==r.nodeType&&0===B.call(r.textContent).length&&t.removeChild(r)}}
/*! (c) Andrea Giammarchi - ISC */var st=function(){var t=/acit|ex(?:s|g|n|p|$)|rph|ows|mnc|ntw|ine[ch]|zoo|^ord/i,e=/([^A-Z])([A-Z]+)/g;return function(t,e){return"ownerSVGElement"in t?function(t,e){var n;e?n=e.cloneNode(!0):(t.setAttribute("style","--hyper:style;"),n=t.getAttributeNode("style"));return n.value="",t.setAttributeNode(n),r(n,!0)}(t,e):r(t.style,!1)};function n(t,e,n){return e+"-"+n.toLowerCase()}function r(r,o){var i,s;return function(a){var c,u,l,f;switch(typeof a){case"object":if(a){if("object"===i){if(!o&&s!==a)for(u in s)u in a||(r[u]="")}else o?r.value="":r.cssText="";for(u in c=o?{}:r,a)l="number"!=typeof(f=a[u])||t.test(u)?f:f+"px",!o&&/^--/.test(u)?c.setProperty(u,l):c[u]=l;i="object",o?r.value=function(t){var r,o=[];for(r in t)o.push(r.replace(e,n),":",t[r],";");return o.join("")}(s=c):s=a;break}default:s!=a&&(i="string",s=a,o?r.value=a||"":r.cssText=a||"")}}}}();const at=(t,e)=>{let n,r=!0;const o=document.createAttributeNS(null,e);return e=>{n!==e&&(n=e,null==n?r||(t.removeAttributeNode(o),r=!0):(o.value=e,r&&(t.setAttributeNodeNS(o),r=!1)))}},ct=(t,e)=>n=>{t[e]=n},ut=/^(?:form|list)$/i,lt=(t,e)=>t.ownerDocument.createTextNode(e);function ft(t){return this.type=t,e=this,n=ot,r=it,function(t){return n!==t&&(r=rt(e,n=t)),r.apply(null,arguments)};var e,n,r}function ht(t){return t(this)}ft.prototype={attribute(t,e,n){const r="svg"===this.type;switch(e){case"class":if(r)return at(t,e);e="className";case"props":return ct(t,e);case"aria":return(t=>e=>{for(const n in e)t.setAttribute("role"===n?n:"aria-"+n,e[n])})(t);case"data":return(({dataset:t})=>e=>{for(const n in e)t[n]=e[n]})(t);case"style":return st(t,n,r);case"ref":return(t=>e=>{"function"==typeof e?e(t):e.current=t})(t);default:return"."===e.slice(0,1)?ct(t,e.slice(1)):"on"===e.slice(0,2)?((t,e)=>{let n,r=e.slice(2);return!(e in t)&&e.toLowerCase()in t&&(r=r.toLowerCase()),e=>{const o=E(e)?e:[e,!1];n!==o[0]&&(n&&t.removeEventListener(r,n,o[1]),(n=o[0])&&t.addEventListener(r,n,o[1]))}})(t,e):!(e in t)||r||ut.test(e)?at(t,e):((t,e)=>{let n;return r=>{n!==r&&(n=r,t[e]!==r&&(null==r?(t[e]="",t.removeAttribute(e)):t[e]=r))}})(t,e)}},any(t,e){const n={node:O,before:t},{type:r}=this;let o,i=!1;const s=a=>{switch(typeof a){case"string":case"number":case"boolean":i?o!==a&&(o=a,e[0].textContent=a):(i=!0,o=a,e=F(t.parentNode,e,[lt(t,a)],n));break;case"function":s(a(t));break;case"object":case"undefined":if(null==a){i=!1,e=F(t.parentNode,e,[],n);break}default:if(i=!1,o=a,E(a))if(0===a.length)e.length&&(e=F(t.parentNode,e,[],n));else switch(typeof a[0]){case"string":case"number":case"boolean":s(String(a));break;case"function":s(a.map(ht,t));break;case"object":E(a[0])&&(a=a.concat.apply([],a));default:e=F(t.parentNode,e,a,n)}else"ELEMENT_NODE"in a?e=F(t.parentNode,e,11===a.nodeType?S.call(a.childNodes):[a],n):"text"in a?s(String(a.text)):"any"in a?s(a.any):"html"in a?e=F(t.parentNode,e,S.call(T([].concat(a.html).join(""),r).childNodes),n):"length"in a&&s(S.call(a))}};return s},text(t){let e;const n=r=>{if(e!==r){e=r;const o=typeof r;"object"===o&&r?"text"in r?n(String(r.text)):"any"in r?n(r.any):"html"in r?n([].concat(r.html).join("")):"length"in r&&n(S.call(r).join("")):"function"===o?n(r(t)):t.textContent=null==r?"":r}};return n}};const{create:pt,freeze:dt,keys:vt}=Object,gt=ft.prototype,yt=M(new e),mt=t=>({html:wt("html",t),svg:wt("svg",t),render(e,n){const r="function"==typeof n?n():n,o=yt.get(e)||yt.set(e,bt()),i=r instanceof kt?_t(t,o,r):r;return i!==o.wire&&(o.wire=i,e.textContent="",e.appendChild(i.valueOf())),e}}),bt=()=>({stack:[],entry:null,wire:null}),wt=(t,n)=>{const r=M(new e);return o.for=(t,e)=>{const i=r.get(t)||r.set(t,pt(null));return i[e]||(i[e]=(s=bt(),function(){return _t(n,s,o.apply(null,arguments))}));var s},o.node=function(){return _t(n,bt(),o.apply(null,arguments)).valueOf()},o;function o(){return new kt(t,a.apply(null,arguments))}},_t=(t,e,{type:n,template:r,values:o})=>{const{length:i}=o;xt(t,e,o,i);let{entry:s}=e;if(s&&s.template===r&&s.type===n)s.tag(r,...o);else{const i=new t(n);e.entry=s={type:n,template:r,tag:i,wire:j(i(r,...o))}}return s.wire},xt=(t,{stack:e},n,r)=>{for(let o=0;o<r;o++){const r=n[o];r instanceof Nt?n[o]=_t(t,e[o]||(e[o]=bt()),r):E(r)?xt(t,e[o]||(e[o]=bt()),r,r.length):e[o]=null}r<e.length&&e.splice(r)};function kt(t,e){this.type=t,this.template=e.shift(),this.values=e}dt(kt);const Nt=kt,{render:Ct,html:Et,svg:At}=mt(ft);var St="function"==typeof WeakSet,Mt=Object.keys;function Ot(t,e){t&&"object"==typeof t&&e.add(t)}function jt(t,e,n,r){for(var o,i=t.length,s=0;s<i;s++)if(n((o=t[s])[0],e[0],r)&&n(o[1],e[1],r))return!0;return!1}function Tt(t,e,n,r){for(var o=t.length,i=0;i<o;i++)if(n(t[i],e,r))return!0;return!1}function Lt(t,e){return t===e||t!=t&&e!=e}function Pt(t){return t.constructor===Object||null==t.constructor}function Rt(t){return!!t&&"function"==typeof t.then}function Wt(t){return!(!t||!t.$$typeof)}function zt(){return Object.create({_values:[],add:function(t){this._values.push(t)},has:function(t){return-1!==this._values.indexOf(t)}})}var It=St?function(){return new WeakSet}:zt;function $t(t){return function(e){var n=t||e;return function(t,e,r){void 0===r&&(r=It());var o=r.has(t),i=r.has(e);return o||i?o&&i:(Ot(t,r),Ot(e,r),n(t,e,r))}}}function Dt(t){var e=new Array(t.size),n=0;return t.forEach((function(t,r){e[n++]=[r,t]})),e}function Ht(t){var e=new Array(t.size),n=0;return t.forEach((function(t){e[n++]=t})),e}var Ut=Function.prototype.bind.call(Function.prototype.call,Object.prototype.hasOwnProperty);function Ft(t,e,n,r){var o,i=Mt(t),s=i.length;if(Mt(e).length!==s)return!1;for(var a=0;a<s;a++){if(o=i[a],!Ut(e,o))return!1;if("_owner"===o&&Wt(t)){if(!Wt(e))return!1}else if(!n(t[o],e[o],r))return!1}return!0}var Zt=Array.isArray,qt="function"==typeof Map,Vt="function"==typeof Set;function Gt(t){var e="function"==typeof t?t(n):n;function n(t,n,r){if(Lt(t,n))return!0;if(t&&n&&"object"==typeof t&&"object"==typeof n){if(Pt(t)&&Pt(n))return Ft(t,n,e,r);var o=Zt(t),i=Zt(n);if(o||i)return o===i&&function(t,e,n,r){var o=t.length;if(e.length!==o)return!1;for(var i=0;i<o;i++)if(!n(t[i],e[i],r))return!1;return!0}(t,n,e,r);var s=t instanceof Date,a=n instanceof Date;if(s||a)return s===a&&Lt(t.getTime(),n.getTime());var c=t instanceof RegExp,u=n instanceof RegExp;if(c||u)return c===u&&function(t,e){return t.source===e.source&&t.global===e.global&&t.ignoreCase===e.ignoreCase&&t.multiline===e.multiline&&t.unicode===e.unicode&&t.sticky===e.sticky&&t.lastIndex===e.lastIndex}(t,n);if(Rt(t)||Rt(n))return t===n;if(qt){var l=t instanceof Map,f=n instanceof Map;if(l||f)return l===f&&function(t,e,n,r){if(t.size!==e.size)return!1;for(var o=Dt(t),i=Dt(e),s=o.length,a=0;a<s;a++)if(!jt(i,o[a],n,r)||!jt(o,i[a],n,r))return!1;return!0}(t,n,e,r)}if(Vt){var h=t instanceof Set,p=n instanceof Set;if(h||p)return h===p&&function(t,e,n,r){if(t.size!==e.size)return!1;for(var o=Ht(t),i=Ht(e),s=o.length,a=0;a<s;a++)if(!Tt(i,o[a],n,r)||!Tt(o,i[a],n,r))return!1;return!0}(t,n,e,r)}return Ft(t,n,e,r)}return!1}return n}var Bt=Gt();Gt((function(){return Lt})),Gt($t()),Gt($t(Lt));const{svg:Jt,html:Kt,render:Qt}=(t=>{const e=pt(gt);return vt(t).forEach(n=>{e[n]=t[n](e[n]||("convert"===n?d:String))}),n.prototype=e,mt(n);function n(){return ft.apply(this,arguments)}})({attribute(t){return(e,n,r)=>e instanceof Yt&&"ref"!==n?t=>{e._setProps({[n]:t},e.__mounted)}:e instanceof Yt&&"ref"===n?o=>{t.apply(this,[e,n,r])(o),e.__ref=!0,e.__mounted&&e!=o.current&&e.forceUpdate()}:t.apply(this,[e,n,r])}}),Xt=function(){return new Promise(async(t,e)=>{try{let e=await fetch(...arguments);if(!e.ok){let t=new Error("HTTP status code: "+e.status);throw t.response=e,t.status=e.status,t}t(e)}catch(t){e(t)}})};class Yt extends HTMLElement{_mounted(){return!!this.__mounted}get props(){return{...this._props}}get state(){return{...this._state}}static get props(){return{}}static get state(){return{}}static register(t=null,e=null){let n=this;var r;"string"==typeof t?e=t:"function"==typeof t&&(n=t),null===e&&(e="bwc-"+((r=n.name)&&r.match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g).map(t=>t.toLowerCase()).join("-"))),e.includes("-")||(e="bwc-"+e),console.log(e,n),window.customElements.define(e.toLowerCase(),n)}static get observedAttributes(){var t=Object.keys(this.props).map(t=>t.toLowerCase());return[...new Set([...Object.keys(this.props),...t])]}constructor(t,e){super(),this.__ref=!1,this.__mounted=!1,this._state={},this._props={},this.__propsInitial={},this._setProps({...this.constructor.props},!1),t&&this._setProps({...t},!1),this.setState({...this.constructor.state},!1),t&&this.setState({...e},!1),("function"==typeof this.constructor.disableShadowDOM?this.constructor.disableShadowDOM():this.constructor.disableShadowDOM)?(this.render=Qt.bind(null,this,this.render.bind(this)),this.style.display="contents"):(this._shadowRoot=this.attachShadow({mode:"open"}),this.render=Qt.bind(null,this._shadowRoot,this.render.bind(this)))}_setProps(t,e=!0){var n={...this.props};for(var r in t){let e=Object.keys(this.constructor.props).find(t=>t.toLowerCase()===r.toLowerCase());if(e&&(t.hasOwnProperty(r)&&e in this.constructor.props)){let n=t[r],o=e in this.__propsInitial?typeof this.__propsInitial[e]:typeof this.constructor.props[e];null!==typeof this.constructor.props[e]||e in this.__propsInitial||null===n||(this.__propsInitial[e]=typeof n,o=this.__propsInitial[e]);let i=void 0===this.props[e]?this.constructor.props[e]:this.props[e],s=typeof i;if(typeof n!==s&&null!==n||typeof n!==o)throw new Error("Property cannot be changed in another type. Type: ",null===i?o:s,"Received: ",typeof n);this._props[e]=n}}var o={...this.props};!Bt(n,o)&&e&&(void 0!==this.onPropsChanged&&this.onPropsChanged(n,o),this.forceUpdate())}forceUpdate(t){if(!0===t||this._mounted()){if(this.__ref){let t=this.parentElement;for(;t;){if(t instanceof Yt){t.forceUpdate();break}t=t.parentElement}let e=this.getRootNode().host;for(;e;){if(e instanceof Yt){e.forceUpdate();break}e=this.getRootNode().host}}this.render()}}setState(t,e=!0){let n={...this.state};for(var r in t)t.hasOwnProperty(r)&&r in this.constructor.state&&(this._state[r]=t[r]);var o={...this.state};!Bt(n,o)&&e&&this.forceUpdate()}attributeChangedCallback(t,e,n){"string"==typeof n&&(t=Object.keys(this.props).find(e=>e.toLowerCase()===t.toLowerCase()),"string"!=typeof this.props[t]&&(n=JSON.parse(n))),this._setProps({[t]:n},this.__mounted)}connectedCallback(){this.onMount&&this.onMount(),this.__mounted=!0,this.forceUpdate(!0)}disconnectedCallback(){this.onUnmount&&this.onUnmount(),this.__mounted=!1}render(){return Kt`<div></div>`}}export default Yt;export{Yt as BaseWebComponent,Kt as html,Qt as render,Xt as safeFetch,Jt as svg};
