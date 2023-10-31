/*! For license information please see chunk.805.10284d50c4bdbf483c1c.js.LICENSE.txt */
(globalThis.webpackChunk_ember_auto_import_=globalThis.webpackChunk_ember_auto_import_||[]).push([[805],{95:(e,t,n)=>{"use strict"
function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t,n,r){n&&Object.defineProperty(e,t,{enumerable:n.enumerable,configurable:n.configurable,writable:n.writable,value:n.initializer?n.initializer.call(r):void 0})}function o(e,t,n,r,i){var o={}
return Object.keys(r).forEach((function(e){o[e]=r[e]})),o.enumerable=!!o.enumerable,o.configurable=!!o.configurable,("value"in o||o.initializer)&&(o.writable=!0),o=n.slice().reverse().reduce((function(n,r){return r(e,t,n)||n}),o),i&&void 0!==o.initializer&&(o.value=o.initializer?o.initializer.call(i):void 0,o.initializer=void 0),void 0===o.initializer&&(Object.defineProperty(e,t,o),o=null),o}n.d(t,{_:()=>o,a:()=>i,b:()=>r})},779:(e,t,n)=>{"use strict"
n.r(t),n.d(t,{default:()=>f})
var r,i,o,s=n(95),a=n(574),u=n(797),l=n.n(u),c=n(806)
let f=(r=(0,a.inject)("page-title"),i=class extends(l()){get tokenId(){return(0,c.guidFor)(this)}constructor(){super(...arguments),(0,s.a)(this,"tokens",o,this),this.tokens.push({id:this.tokenId})}compute(e,t){let n={...t,id:this.tokenId,title:e.join("")}
return this.tokens.push(n),this.tokens.scheduleTitleUpdate(),""}willDestroy(){super.willDestroy(),this.tokens.remove(this.tokenId),this.tokens.scheduleTitleUpdate()}},o=(0,s._)(i.prototype,"tokens",[r],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),i)},413:(e,t,n)=>{"use strict"
n.r(t),n.d(t,{default:()=>v})
var r,i,o,s,a,u=n(95),l=n(292),c=n(773),f=n(574),d=n.n(f),p=n(866),h=n(353)
let g="undefined"!=typeof FastBoot
const m="routeDidChange"
let v=(r=(0,f.inject)("router"),i=(0,f.inject)("-document"),o=class extends(d()){constructor(){super(...arguments),(0,u.a)(this,"router",s,this),(0,u.a)(this,"document",a,this),(0,u.b)(this,"tokens",[]),(0,u.b)(this,"_defaultConfig",{separator:" | ",prepend:!0,replace:null}),(0,u.b)(this,"scheduleTitleUpdate",(()=>{(0,c.scheduleOnce)("afterRender",this,this._updateTitle)})),this._validateExistingTitleElement()
let e=(0,l.getOwner)(this).resolveRegistration("config:environment")
e.pageTitle&&["separator","prepend","replace"].forEach((t=>{(0,p.isEmpty)(e.pageTitle[t])||(this._defaultConfig[t]=e.pageTitle[t])})),this.router.on(m,this.scheduleTitleUpdate)}applyTokenDefaults(e){let t=this._defaultConfig.separator,n=this._defaultConfig.prepend,r=this._defaultConfig.replace
null==e.separator&&(e.separator=t),null==e.prepend&&null!=n&&(e.prepend=n),null==e.replace&&null!=r&&(e.replace=r)}inheritFromPrevious(e){let t=e.previous
t&&(null==e.separator&&(e.separator=t.separator),null==e.prepend&&(e.prepend=t.prepend))}push(e){let t=this._findTokenById(e.id)
if(t){let n=this.tokens.indexOf(t),r=[...this.tokens],i=t.previous
return e.previous=i,e.next=t.next,this.inheritFromPrevious(e),this.applyTokenDefaults(e),r.splice(n,1,e),void(this.tokens=r)}let n=this.tokens.slice(-1)[0]
n&&(e.previous=n,n.next=e,this.inheritFromPrevious(e)),this.applyTokenDefaults(e),this.tokens=[...this.tokens,e]}remove(e){let t=this._findTokenById(e),{next:n,previous:r}=t
n&&(n.previous=r),r&&(r.next=n),t.previous=t.next=null
let i=[...this.tokens]
i.splice(i.indexOf(t),1),this.tokens=i}get visibleTokens(){let e=this.tokens,t=e?e.length:0,n=[]
for(;t--;){let r=e[t]
if(r.replace){n.unshift(r)
break}n.unshift(r)}return n}get sortedTokens(){let e=this.visibleTokens,t=!0,n=[],r=[n],i=[]
return e.forEach((e=>{if(e.front)i.unshift(e)
else if(e.prepend){t&&(t=!1,n=[],r.push(n))
let i=n[0]
i&&((e={...e}).separator=i.separator),n.unshift(e)}else t||(t=!0,n=[],r.push(n)),n.push(e)})),i.concat(r.reduce(((e,t)=>e.concat(t)),[]))}toString(){let e=this.sortedTokens,t=[]
for(let n=0,r=e.length;n<r;n++){let i=e[n]
i.title&&(t.push(i.title),n+1<r&&t.push(i.separator))}return t.join("")}willDestroy(){super.willDestroy(),this.router.off(m,this.scheduleTitleUpdate)}_updateTitle(){const e=this.toString()
g?this.updateFastbootTitle(e):this.document.title=e,this.titleDidUpdate(e)}_validateExistingTitleElement(){g||(0,h.assert)("[ember-page-title]: Multiple title elements found. Check for other addons like ember-cli-head updating <title> as well.",document.head.querySelectorAll("title").length<=1)}_findTokenById(e){return this.tokens.find((t=>t.id===e))}updateFastbootTitle(e){if(!g)return
const t=this.document.head,n=t.childNodes
for(let o=0;o<n.length;o++){let e=n[o]
"title"===e.nodeName.toLowerCase()&&t.removeChild(e)}let r=this.document.createElement("title"),i=this.document.createTextNode(e)
r.appendChild(i),t.appendChild(r)}titleDidUpdate(){}},s=(0,u._)(o.prototype,"router",[r],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),a=(0,u._)(o.prototype,"document",[i],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),o)},339:function(e,t){var n
!function(t,n){"use strict"
"object"==typeof e.exports?e.exports=t.document?n(t,!0):function(e){if(!e.document)throw new Error("jQuery requires a window with a document")
return n(e)}:n(t)}("undefined"!=typeof window?window:this,(function(r,i){"use strict"
var o=[],s=Object.getPrototypeOf,a=o.slice,u=o.flat?function(e){return o.flat.call(e)}:function(e){return o.concat.apply([],e)},l=o.push,c=o.indexOf,f={},d=f.toString,p=f.hasOwnProperty,h=p.toString,g=h.call(Object),m={},v=function(e){return"function"==typeof e&&"number"!=typeof e.nodeType&&"function"!=typeof e.item},y=function(e){return null!=e&&e===e.window},b=r.document,x={type:!0,src:!0,nonce:!0,noModule:!0}
function w(e,t,n){var r,i,o=(n=n||b).createElement("script")
if(o.text=e,t)for(r in x)(i=t[r]||t.getAttribute&&t.getAttribute(r))&&o.setAttribute(r,i)
n.head.appendChild(o).parentNode.removeChild(o)}function k(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?f[d.call(e)]||"object":typeof e}var T="3.7.1",C=/HTML$/i,E=function(e,t){return new E.fn.init(e,t)}
function _(e){var t=!!e&&"length"in e&&e.length,n=k(e)
return!v(e)&&!y(e)&&("array"===n||0===t||"number"==typeof t&&t>0&&t-1 in e)}function S(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()}E.fn=E.prototype={jquery:T,constructor:E,length:0,toArray:function(){return a.call(this)},get:function(e){return null==e?a.call(this):e<0?this[e+this.length]:this[e]},pushStack:function(e){var t=E.merge(this.constructor(),e)
return t.prevObject=this,t},each:function(e){return E.each(this,e)},map:function(e){return this.pushStack(E.map(this,(function(t,n){return e.call(t,n,t)})))},slice:function(){return this.pushStack(a.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},even:function(){return this.pushStack(E.grep(this,(function(e,t){return(t+1)%2})))},odd:function(){return this.pushStack(E.grep(this,(function(e,t){return t%2})))},eq:function(e){var t=this.length,n=+e+(e<0?t:0)
return this.pushStack(n>=0&&n<t?[this[n]]:[])},end:function(){return this.prevObject||this.constructor()},push:l,sort:o.sort,splice:o.splice},E.extend=E.fn.extend=function(){var e,t,n,r,i,o,s=arguments[0]||{},a=1,u=arguments.length,l=!1
for("boolean"==typeof s&&(l=s,s=arguments[a]||{},a++),"object"==typeof s||v(s)||(s={}),a===u&&(s=this,a--);a<u;a++)if(null!=(e=arguments[a]))for(t in e)r=e[t],"__proto__"!==t&&s!==r&&(l&&r&&(E.isPlainObject(r)||(i=Array.isArray(r)))?(n=s[t],o=i&&!Array.isArray(n)?[]:i||E.isPlainObject(n)?n:{},i=!1,s[t]=E.extend(l,o,r)):void 0!==r&&(s[t]=r))
return s},E.extend({expando:"jQuery"+(T+Math.random()).replace(/\D/g,""),isReady:!0,error:function(e){throw new Error(e)},noop:function(){},isPlainObject:function(e){var t,n
return!(!e||"[object Object]"!==d.call(e)||(t=s(e))&&("function"!=typeof(n=p.call(t,"constructor")&&t.constructor)||h.call(n)!==g))},isEmptyObject:function(e){var t
for(t in e)return!1
return!0},globalEval:function(e,t,n){w(e,{nonce:t&&t.nonce},n)},each:function(e,t){var n,r=0
if(_(e))for(n=e.length;r<n&&!1!==t.call(e[r],r,e[r]);r++);else for(r in e)if(!1===t.call(e[r],r,e[r]))break
return e},text:function(e){var t,n="",r=0,i=e.nodeType
if(!i)for(;t=e[r++];)n+=E.text(t)
return 1===i||11===i?e.textContent:9===i?e.documentElement.textContent:3===i||4===i?e.nodeValue:n},makeArray:function(e,t){var n=t||[]
return null!=e&&(_(Object(e))?E.merge(n,"string"==typeof e?[e]:e):l.call(n,e)),n},inArray:function(e,t,n){return null==t?-1:c.call(t,e,n)},isXMLDoc:function(e){var t=e&&e.namespaceURI,n=e&&(e.ownerDocument||e).documentElement
return!C.test(t||n&&n.nodeName||"HTML")},merge:function(e,t){for(var n=+t.length,r=0,i=e.length;r<n;r++)e[i++]=t[r]
return e.length=i,e},grep:function(e,t,n){for(var r=[],i=0,o=e.length,s=!n;i<o;i++)!t(e[i],i)!==s&&r.push(e[i])
return r},map:function(e,t,n){var r,i,o=0,s=[]
if(_(e))for(r=e.length;o<r;o++)null!=(i=t(e[o],o,n))&&s.push(i)
else for(o in e)null!=(i=t(e[o],o,n))&&s.push(i)
return u(s)},guid:1,support:m}),"function"==typeof Symbol&&(E.fn[Symbol.iterator]=o[Symbol.iterator]),E.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),(function(e,t){f["[object "+t+"]"]=t.toLowerCase()}))
var D=o.pop,A=o.sort,j=o.splice,O="[\\x20\\t\\r\\n\\f]",R=new RegExp("^"+O+"+|((?:^|[^\\\\])(?:\\\\.)*)"+O+"+$","g")
E.contains=function(e,t){var n=t&&t.parentNode
return e===n||!(!n||1!==n.nodeType||!(e.contains?e.contains(n):e.compareDocumentPosition&&16&e.compareDocumentPosition(n)))}
var L=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g
function N(e,t){return t?"\0"===e?"�":e.slice(0,-1)+"\\"+e.charCodeAt(e.length-1).toString(16)+" ":"\\"+e}E.escapeSelector=function(e){return(e+"").replace(L,N)}
var q=b,I=l
!function(){var e,t,n,i,s,u,l,f,d,h,g=I,v=E.expando,y=0,b=0,x=ee(),w=ee(),k=ee(),T=ee(),C=function(e,t){return e===t&&(s=!0),0},_="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",L="(?:\\\\[\\da-fA-F]{1,6}"+O+"?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",N="\\["+O+"*("+L+")(?:"+O+"*([*^$|!~]?=)"+O+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+L+"))|)"+O+"*\\]",H=":("+L+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+N+")*)|.*)\\)|)",P=new RegExp(O+"+","g"),M=new RegExp("^"+O+"*,"+O+"*"),F=new RegExp("^"+O+"*([>+~]|"+O+")"+O+"*"),W=new RegExp(O+"|>"),z=new RegExp(H),B=new RegExp("^"+L+"$"),$={ID:new RegExp("^#("+L+")"),CLASS:new RegExp("^\\.("+L+")"),TAG:new RegExp("^("+L+"|[*])"),ATTR:new RegExp("^"+N),PSEUDO:new RegExp("^"+H),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+O+"*(even|odd|(([+-]|)(\\d*)n|)"+O+"*(?:([+-]|)"+O+"*(\\d+)|))"+O+"*\\)|)","i"),bool:new RegExp("^(?:"+_+")$","i"),needsContext:new RegExp("^"+O+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+O+"*((?:-\\d)?\\d*)"+O+"*\\)|)(?=[^-]|$)","i")},U=/^(?:input|select|textarea|button)$/i,X=/^h\d$/i,K=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,Q=/[+~]/,V=new RegExp("\\\\[\\da-fA-F]{1,6}"+O+"?|\\\\([^\\r\\n\\f])","g"),G=function(e,t){var n="0x"+e.slice(1)-65536
return t||(n<0?String.fromCharCode(n+65536):String.fromCharCode(n>>10|55296,1023&n|56320))},Y=function(){ue()},J=de((function(e){return!0===e.disabled&&S(e,"fieldset")}),{dir:"parentNode",next:"legend"})
try{g.apply(o=a.call(q.childNodes),q.childNodes),o[q.childNodes.length].nodeType}catch(e){g={apply:function(e,t){I.apply(e,a.call(t))},call:function(e){I.apply(e,a.call(arguments,1))}}}function Z(e,t,n,r){var i,o,s,a,l,c,p,h=t&&t.ownerDocument,y=t?t.nodeType:9
if(n=n||[],"string"!=typeof e||!e||1!==y&&9!==y&&11!==y)return n
if(!r&&(ue(t),t=t||u,f)){if(11!==y&&(l=K.exec(e)))if(i=l[1]){if(9===y){if(!(s=t.getElementById(i)))return n
if(s.id===i)return g.call(n,s),n}else if(h&&(s=h.getElementById(i))&&Z.contains(t,s)&&s.id===i)return g.call(n,s),n}else{if(l[2])return g.apply(n,t.getElementsByTagName(e)),n
if((i=l[3])&&t.getElementsByClassName)return g.apply(n,t.getElementsByClassName(i)),n}if(!(T[e+" "]||d&&d.test(e))){if(p=e,h=t,1===y&&(W.test(e)||F.test(e))){for((h=Q.test(e)&&ae(t.parentNode)||t)==t&&m.scope||((a=t.getAttribute("id"))?a=E.escapeSelector(a):t.setAttribute("id",a=v)),o=(c=ce(e)).length;o--;)c[o]=(a?"#"+a:":scope")+" "+fe(c[o])
p=c.join(",")}try{return g.apply(n,h.querySelectorAll(p)),n}catch(t){T(e,!0)}finally{a===v&&t.removeAttribute("id")}}}return ye(e.replace(R,"$1"),t,n,r)}function ee(){var e=[]
return function n(r,i){return e.push(r+" ")>t.cacheLength&&delete n[e.shift()],n[r+" "]=i}}function te(e){return e[v]=!0,e}function ne(e){var t=u.createElement("fieldset")
try{return!!e(t)}catch(e){return!1}finally{t.parentNode&&t.parentNode.removeChild(t),t=null}}function re(e){return function(t){return S(t,"input")&&t.type===e}}function ie(e){return function(t){return(S(t,"input")||S(t,"button"))&&t.type===e}}function oe(e){return function(t){return"form"in t?t.parentNode&&!1===t.disabled?"label"in t?"label"in t.parentNode?t.parentNode.disabled===e:t.disabled===e:t.isDisabled===e||t.isDisabled!==!e&&J(t)===e:t.disabled===e:"label"in t&&t.disabled===e}}function se(e){return te((function(t){return t=+t,te((function(n,r){for(var i,o=e([],n.length,t),s=o.length;s--;)n[i=o[s]]&&(n[i]=!(r[i]=n[i]))}))}))}function ae(e){return e&&void 0!==e.getElementsByTagName&&e}function ue(e){var n,r=e?e.ownerDocument||e:q
return r!=u&&9===r.nodeType&&r.documentElement?(l=(u=r).documentElement,f=!E.isXMLDoc(u),h=l.matches||l.webkitMatchesSelector||l.msMatchesSelector,l.msMatchesSelector&&q!=u&&(n=u.defaultView)&&n.top!==n&&n.addEventListener("unload",Y),m.getById=ne((function(e){return l.appendChild(e).id=E.expando,!u.getElementsByName||!u.getElementsByName(E.expando).length})),m.disconnectedMatch=ne((function(e){return h.call(e,"*")})),m.scope=ne((function(){return u.querySelectorAll(":scope")})),m.cssHas=ne((function(){try{return u.querySelector(":has(*,:jqfake)"),!1}catch(e){return!0}})),m.getById?(t.filter.ID=function(e){var t=e.replace(V,G)
return function(e){return e.getAttribute("id")===t}},t.find.ID=function(e,t){if(void 0!==t.getElementById&&f){var n=t.getElementById(e)
return n?[n]:[]}}):(t.filter.ID=function(e){var t=e.replace(V,G)
return function(e){var n=void 0!==e.getAttributeNode&&e.getAttributeNode("id")
return n&&n.value===t}},t.find.ID=function(e,t){if(void 0!==t.getElementById&&f){var n,r,i,o=t.getElementById(e)
if(o){if((n=o.getAttributeNode("id"))&&n.value===e)return[o]
for(i=t.getElementsByName(e),r=0;o=i[r++];)if((n=o.getAttributeNode("id"))&&n.value===e)return[o]}return[]}}),t.find.TAG=function(e,t){return void 0!==t.getElementsByTagName?t.getElementsByTagName(e):t.querySelectorAll(e)},t.find.CLASS=function(e,t){if(void 0!==t.getElementsByClassName&&f)return t.getElementsByClassName(e)},d=[],ne((function(e){var t
l.appendChild(e).innerHTML="<a id='"+v+"' href='' disabled='disabled'></a><select id='"+v+"-\r\\' disabled='disabled'><option selected=''></option></select>",e.querySelectorAll("[selected]").length||d.push("\\["+O+"*(?:value|"+_+")"),e.querySelectorAll("[id~="+v+"-]").length||d.push("~="),e.querySelectorAll("a#"+v+"+*").length||d.push(".#.+[+~]"),e.querySelectorAll(":checked").length||d.push(":checked"),(t=u.createElement("input")).setAttribute("type","hidden"),e.appendChild(t).setAttribute("name","D"),l.appendChild(e).disabled=!0,2!==e.querySelectorAll(":disabled").length&&d.push(":enabled",":disabled"),(t=u.createElement("input")).setAttribute("name",""),e.appendChild(t),e.querySelectorAll("[name='']").length||d.push("\\["+O+"*name"+O+"*="+O+"*(?:''|\"\")")})),m.cssHas||d.push(":has"),d=d.length&&new RegExp(d.join("|")),C=function(e,t){if(e===t)return s=!0,0
var n=!e.compareDocumentPosition-!t.compareDocumentPosition
return n||(1&(n=(e.ownerDocument||e)==(t.ownerDocument||t)?e.compareDocumentPosition(t):1)||!m.sortDetached&&t.compareDocumentPosition(e)===n?e===u||e.ownerDocument==q&&Z.contains(q,e)?-1:t===u||t.ownerDocument==q&&Z.contains(q,t)?1:i?c.call(i,e)-c.call(i,t):0:4&n?-1:1)},u):u}for(e in Z.matches=function(e,t){return Z(e,null,null,t)},Z.matchesSelector=function(e,t){if(ue(e),f&&!T[t+" "]&&(!d||!d.test(t)))try{var n=h.call(e,t)
if(n||m.disconnectedMatch||e.document&&11!==e.document.nodeType)return n}catch(e){T(t,!0)}return Z(t,u,null,[e]).length>0},Z.contains=function(e,t){return(e.ownerDocument||e)!=u&&ue(e),E.contains(e,t)},Z.attr=function(e,n){(e.ownerDocument||e)!=u&&ue(e)
var r=t.attrHandle[n.toLowerCase()],i=r&&p.call(t.attrHandle,n.toLowerCase())?r(e,n,!f):void 0
return void 0!==i?i:e.getAttribute(n)},Z.error=function(e){throw new Error("Syntax error, unrecognized expression: "+e)},E.uniqueSort=function(e){var t,n=[],r=0,o=0
if(s=!m.sortStable,i=!m.sortStable&&a.call(e,0),A.call(e,C),s){for(;t=e[o++];)t===e[o]&&(r=n.push(o))
for(;r--;)j.call(e,n[r],1)}return i=null,e},E.fn.uniqueSort=function(){return this.pushStack(E.uniqueSort(a.apply(this)))},t=E.expr={cacheLength:50,createPseudo:te,match:$,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(V,G),e[3]=(e[3]||e[4]||e[5]||"").replace(V,G),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||Z.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&Z.error(e[0]),e},PSEUDO:function(e){var t,n=!e[6]&&e[2]
return $.CHILD.test(e[0])?null:(e[3]?e[2]=e[4]||e[5]||"":n&&z.test(n)&&(t=ce(n,!0))&&(t=n.indexOf(")",n.length-t)-n.length)&&(e[0]=e[0].slice(0,t),e[2]=n.slice(0,t)),e.slice(0,3))}},filter:{TAG:function(e){var t=e.replace(V,G).toLowerCase()
return"*"===e?function(){return!0}:function(e){return S(e,t)}},CLASS:function(e){var t=x[e+" "]
return t||(t=new RegExp("(^|"+O+")"+e+"("+O+"|$)"))&&x(e,(function(e){return t.test("string"==typeof e.className&&e.className||void 0!==e.getAttribute&&e.getAttribute("class")||"")}))},ATTR:function(e,t,n){return function(r){var i=Z.attr(r,e)
return null==i?"!="===t:!t||(i+="","="===t?i===n:"!="===t?i!==n:"^="===t?n&&0===i.indexOf(n):"*="===t?n&&i.indexOf(n)>-1:"$="===t?n&&i.slice(-n.length)===n:"~="===t?(" "+i.replace(P," ")+" ").indexOf(n)>-1:"|="===t&&(i===n||i.slice(0,n.length+1)===n+"-"))}},CHILD:function(e,t,n,r,i){var o="nth"!==e.slice(0,3),s="last"!==e.slice(-4),a="of-type"===t
return 1===r&&0===i?function(e){return!!e.parentNode}:function(t,n,u){var l,c,f,d,p,h=o!==s?"nextSibling":"previousSibling",g=t.parentNode,m=a&&t.nodeName.toLowerCase(),b=!u&&!a,x=!1
if(g){if(o){for(;h;){for(f=t;f=f[h];)if(a?S(f,m):1===f.nodeType)return!1
p=h="only"===e&&!p&&"nextSibling"}return!0}if(p=[s?g.firstChild:g.lastChild],s&&b){for(x=(d=(l=(c=g[v]||(g[v]={}))[e]||[])[0]===y&&l[1])&&l[2],f=d&&g.childNodes[d];f=++d&&f&&f[h]||(x=d=0)||p.pop();)if(1===f.nodeType&&++x&&f===t){c[e]=[y,d,x]
break}}else if(b&&(x=d=(l=(c=t[v]||(t[v]={}))[e]||[])[0]===y&&l[1]),!1===x)for(;(f=++d&&f&&f[h]||(x=d=0)||p.pop())&&(!(a?S(f,m):1===f.nodeType)||!++x||(b&&((c=f[v]||(f[v]={}))[e]=[y,x]),f!==t)););return(x-=i)===r||x%r==0&&x/r>=0}}},PSEUDO:function(e,n){var r,i=t.pseudos[e]||t.setFilters[e.toLowerCase()]||Z.error("unsupported pseudo: "+e)
return i[v]?i(n):i.length>1?(r=[e,e,"",n],t.setFilters.hasOwnProperty(e.toLowerCase())?te((function(e,t){for(var r,o=i(e,n),s=o.length;s--;)e[r=c.call(e,o[s])]=!(t[r]=o[s])})):function(e){return i(e,0,r)}):i}},pseudos:{not:te((function(e){var t=[],n=[],r=ve(e.replace(R,"$1"))
return r[v]?te((function(e,t,n,i){for(var o,s=r(e,null,i,[]),a=e.length;a--;)(o=s[a])&&(e[a]=!(t[a]=o))})):function(e,i,o){return t[0]=e,r(t,null,o,n),t[0]=null,!n.pop()}})),has:te((function(e){return function(t){return Z(e,t).length>0}})),contains:te((function(e){return e=e.replace(V,G),function(t){return(t.textContent||E.text(t)).indexOf(e)>-1}})),lang:te((function(e){return B.test(e||"")||Z.error("unsupported lang: "+e),e=e.replace(V,G).toLowerCase(),function(t){var n
do{if(n=f?t.lang:t.getAttribute("xml:lang")||t.getAttribute("lang"))return(n=n.toLowerCase())===e||0===n.indexOf(e+"-")}while((t=t.parentNode)&&1===t.nodeType)
return!1}})),target:function(e){var t=r.location&&r.location.hash
return t&&t.slice(1)===e.id},root:function(e){return e===l},focus:function(e){return e===function(){try{return u.activeElement}catch(e){}}()&&u.hasFocus()&&!!(e.type||e.href||~e.tabIndex)},enabled:oe(!1),disabled:oe(!0),checked:function(e){return S(e,"input")&&!!e.checked||S(e,"option")&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,!0===e.selected},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeType<6)return!1
return!0},parent:function(e){return!t.pseudos.empty(e)},header:function(e){return X.test(e.nodeName)},input:function(e){return U.test(e.nodeName)},button:function(e){return S(e,"input")&&"button"===e.type||S(e,"button")},text:function(e){var t
return S(e,"input")&&"text"===e.type&&(null==(t=e.getAttribute("type"))||"text"===t.toLowerCase())},first:se((function(){return[0]})),last:se((function(e,t){return[t-1]})),eq:se((function(e,t,n){return[n<0?n+t:n]})),even:se((function(e,t){for(var n=0;n<t;n+=2)e.push(n)
return e})),odd:se((function(e,t){for(var n=1;n<t;n+=2)e.push(n)
return e})),lt:se((function(e,t,n){var r
for(r=n<0?n+t:n>t?t:n;--r>=0;)e.push(r)
return e})),gt:se((function(e,t,n){for(var r=n<0?n+t:n;++r<t;)e.push(r)
return e}))}},t.pseudos.nth=t.pseudos.eq,{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})t.pseudos[e]=re(e)
for(e in{submit:!0,reset:!0})t.pseudos[e]=ie(e)
function le(){}function ce(e,n){var r,i,o,s,a,u,l,c=w[e+" "]
if(c)return n?0:c.slice(0)
for(a=e,u=[],l=t.preFilter;a;){for(s in r&&!(i=M.exec(a))||(i&&(a=a.slice(i[0].length)||a),u.push(o=[])),r=!1,(i=F.exec(a))&&(r=i.shift(),o.push({value:r,type:i[0].replace(R," ")}),a=a.slice(r.length)),t.filter)!(i=$[s].exec(a))||l[s]&&!(i=l[s](i))||(r=i.shift(),o.push({value:r,type:s,matches:i}),a=a.slice(r.length))
if(!r)break}return n?a.length:a?Z.error(e):w(e,u).slice(0)}function fe(e){for(var t=0,n=e.length,r="";t<n;t++)r+=e[t].value
return r}function de(e,t,n){var r=t.dir,i=t.next,o=i||r,s=n&&"parentNode"===o,a=b++
return t.first?function(t,n,i){for(;t=t[r];)if(1===t.nodeType||s)return e(t,n,i)
return!1}:function(t,n,u){var l,c,f=[y,a]
if(u){for(;t=t[r];)if((1===t.nodeType||s)&&e(t,n,u))return!0}else for(;t=t[r];)if(1===t.nodeType||s)if(c=t[v]||(t[v]={}),i&&S(t,i))t=t[r]||t
else{if((l=c[o])&&l[0]===y&&l[1]===a)return f[2]=l[2]
if(c[o]=f,f[2]=e(t,n,u))return!0}return!1}}function pe(e){return e.length>1?function(t,n,r){for(var i=e.length;i--;)if(!e[i](t,n,r))return!1
return!0}:e[0]}function he(e,t,n,r,i){for(var o,s=[],a=0,u=e.length,l=null!=t;a<u;a++)(o=e[a])&&(n&&!n(o,r,i)||(s.push(o),l&&t.push(a)))
return s}function ge(e,t,n,r,i,o){return r&&!r[v]&&(r=ge(r)),i&&!i[v]&&(i=ge(i,o)),te((function(o,s,a,u){var l,f,d,p,h=[],m=[],v=s.length,y=o||function(e,t,n){for(var r=0,i=t.length;r<i;r++)Z(e,t[r],n)
return n}(t||"*",a.nodeType?[a]:a,[]),b=!e||!o&&t?y:he(y,h,e,a,u)
if(n?n(b,p=i||(o?e:v||r)?[]:s,a,u):p=b,r)for(l=he(p,m),r(l,[],a,u),f=l.length;f--;)(d=l[f])&&(p[m[f]]=!(b[m[f]]=d))
if(o){if(i||e){if(i){for(l=[],f=p.length;f--;)(d=p[f])&&l.push(b[f]=d)
i(null,p=[],l,u)}for(f=p.length;f--;)(d=p[f])&&(l=i?c.call(o,d):h[f])>-1&&(o[l]=!(s[l]=d))}}else p=he(p===s?p.splice(v,p.length):p),i?i(null,s,p,u):g.apply(s,p)}))}function me(e){for(var r,i,o,s=e.length,a=t.relative[e[0].type],u=a||t.relative[" "],l=a?1:0,f=de((function(e){return e===r}),u,!0),d=de((function(e){return c.call(r,e)>-1}),u,!0),p=[function(e,t,i){var o=!a&&(i||t!=n)||((r=t).nodeType?f(e,t,i):d(e,t,i))
return r=null,o}];l<s;l++)if(i=t.relative[e[l].type])p=[de(pe(p),i)]
else{if((i=t.filter[e[l].type].apply(null,e[l].matches))[v]){for(o=++l;o<s&&!t.relative[e[o].type];o++);return ge(l>1&&pe(p),l>1&&fe(e.slice(0,l-1).concat({value:" "===e[l-2].type?"*":""})).replace(R,"$1"),i,l<o&&me(e.slice(l,o)),o<s&&me(e=e.slice(o)),o<s&&fe(e))}p.push(i)}return pe(p)}function ve(e,r){var i,o=[],s=[],a=k[e+" "]
if(!a){for(r||(r=ce(e)),i=r.length;i--;)(a=me(r[i]))[v]?o.push(a):s.push(a)
a=k(e,function(e,r){var i=r.length>0,o=e.length>0,s=function(s,a,l,c,d){var p,h,m,v=0,b="0",x=s&&[],w=[],k=n,T=s||o&&t.find.TAG("*",d),C=y+=null==k?1:Math.random()||.1,_=T.length
for(d&&(n=a==u||a||d);b!==_&&null!=(p=T[b]);b++){if(o&&p){for(h=0,a||p.ownerDocument==u||(ue(p),l=!f);m=e[h++];)if(m(p,a||u,l)){g.call(c,p)
break}d&&(y=C)}i&&((p=!m&&p)&&v--,s&&x.push(p))}if(v+=b,i&&b!==v){for(h=0;m=r[h++];)m(x,w,a,l)
if(s){if(v>0)for(;b--;)x[b]||w[b]||(w[b]=D.call(c))
w=he(w)}g.apply(c,w),d&&!s&&w.length>0&&v+r.length>1&&E.uniqueSort(c)}return d&&(y=C,n=k),x}
return i?te(s):s}(s,o)),a.selector=e}return a}function ye(e,n,r,i){var o,s,a,u,l,c="function"==typeof e&&e,d=!i&&ce(e=c.selector||e)
if(r=r||[],1===d.length){if((s=d[0]=d[0].slice(0)).length>2&&"ID"===(a=s[0]).type&&9===n.nodeType&&f&&t.relative[s[1].type]){if(!(n=(t.find.ID(a.matches[0].replace(V,G),n)||[])[0]))return r
c&&(n=n.parentNode),e=e.slice(s.shift().value.length)}for(o=$.needsContext.test(e)?0:s.length;o--&&(a=s[o],!t.relative[u=a.type]);)if((l=t.find[u])&&(i=l(a.matches[0].replace(V,G),Q.test(s[0].type)&&ae(n.parentNode)||n))){if(s.splice(o,1),!(e=i.length&&fe(s)))return g.apply(r,i),r
break}}return(c||ve(e,d))(i,n,!f,r,!n||Q.test(e)&&ae(n.parentNode)||n),r}le.prototype=t.filters=t.pseudos,t.setFilters=new le,m.sortStable=v.split("").sort(C).join("")===v,ue(),m.sortDetached=ne((function(e){return 1&e.compareDocumentPosition(u.createElement("fieldset"))})),E.find=Z,E.expr[":"]=E.expr.pseudos,E.unique=E.uniqueSort,Z.compile=ve,Z.select=ye,Z.setDocument=ue,Z.tokenize=ce,Z.escape=E.escapeSelector,Z.getText=E.text,Z.isXML=E.isXMLDoc,Z.selectors=E.expr,Z.support=E.support,Z.uniqueSort=E.uniqueSort}()
var H=function(e,t,n){for(var r=[],i=void 0!==n;(e=e[t])&&9!==e.nodeType;)if(1===e.nodeType){if(i&&E(e).is(n))break
r.push(e)}return r},P=function(e,t){for(var n=[];e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e)
return n},M=E.expr.match.needsContext,F=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i
function W(e,t,n){return v(t)?E.grep(e,(function(e,r){return!!t.call(e,r,e)!==n})):t.nodeType?E.grep(e,(function(e){return e===t!==n})):"string"!=typeof t?E.grep(e,(function(e){return c.call(t,e)>-1!==n})):E.filter(t,e,n)}E.filter=function(e,t,n){var r=t[0]
return n&&(e=":not("+e+")"),1===t.length&&1===r.nodeType?E.find.matchesSelector(r,e)?[r]:[]:E.find.matches(e,E.grep(t,(function(e){return 1===e.nodeType})))},E.fn.extend({find:function(e){var t,n,r=this.length,i=this
if("string"!=typeof e)return this.pushStack(E(e).filter((function(){for(t=0;t<r;t++)if(E.contains(i[t],this))return!0})))
for(n=this.pushStack([]),t=0;t<r;t++)E.find(e,i[t],n)
return r>1?E.uniqueSort(n):n},filter:function(e){return this.pushStack(W(this,e||[],!1))},not:function(e){return this.pushStack(W(this,e||[],!0))},is:function(e){return!!W(this,"string"==typeof e&&M.test(e)?E(e):e||[],!1).length}})
var z,B=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;(E.fn.init=function(e,t,n){var r,i
if(!e)return this
if(n=n||z,"string"==typeof e){if(!(r="<"===e[0]&&">"===e[e.length-1]&&e.length>=3?[null,e,null]:B.exec(e))||!r[1]&&t)return!t||t.jquery?(t||n).find(e):this.constructor(t).find(e)
if(r[1]){if(t=t instanceof E?t[0]:t,E.merge(this,E.parseHTML(r[1],t&&t.nodeType?t.ownerDocument||t:b,!0)),F.test(r[1])&&E.isPlainObject(t))for(r in t)v(this[r])?this[r](t[r]):this.attr(r,t[r])
return this}return(i=b.getElementById(r[2]))&&(this[0]=i,this.length=1),this}return e.nodeType?(this[0]=e,this.length=1,this):v(e)?void 0!==n.ready?n.ready(e):e(E):E.makeArray(e,this)}).prototype=E.fn,z=E(b)
var $=/^(?:parents|prev(?:Until|All))/,U={children:!0,contents:!0,next:!0,prev:!0}
function X(e,t){for(;(e=e[t])&&1!==e.nodeType;);return e}E.fn.extend({has:function(e){var t=E(e,this),n=t.length
return this.filter((function(){for(var e=0;e<n;e++)if(E.contains(this,t[e]))return!0}))},closest:function(e,t){var n,r=0,i=this.length,o=[],s="string"!=typeof e&&E(e)
if(!M.test(e))for(;r<i;r++)for(n=this[r];n&&n!==t;n=n.parentNode)if(n.nodeType<11&&(s?s.index(n)>-1:1===n.nodeType&&E.find.matchesSelector(n,e))){o.push(n)
break}return this.pushStack(o.length>1?E.uniqueSort(o):o)},index:function(e){return e?"string"==typeof e?c.call(E(e),this[0]):c.call(this,e.jquery?e[0]:e):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,t){return this.pushStack(E.uniqueSort(E.merge(this.get(),E(e,t))))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}}),E.each({parent:function(e){var t=e.parentNode
return t&&11!==t.nodeType?t:null},parents:function(e){return H(e,"parentNode")},parentsUntil:function(e,t,n){return H(e,"parentNode",n)},next:function(e){return X(e,"nextSibling")},prev:function(e){return X(e,"previousSibling")},nextAll:function(e){return H(e,"nextSibling")},prevAll:function(e){return H(e,"previousSibling")},nextUntil:function(e,t,n){return H(e,"nextSibling",n)},prevUntil:function(e,t,n){return H(e,"previousSibling",n)},siblings:function(e){return P((e.parentNode||{}).firstChild,e)},children:function(e){return P(e.firstChild)},contents:function(e){return null!=e.contentDocument&&s(e.contentDocument)?e.contentDocument:(S(e,"template")&&(e=e.content||e),E.merge([],e.childNodes))}},(function(e,t){E.fn[e]=function(n,r){var i=E.map(this,t,n)
return"Until"!==e.slice(-5)&&(r=n),r&&"string"==typeof r&&(i=E.filter(r,i)),this.length>1&&(U[e]||E.uniqueSort(i),$.test(e)&&i.reverse()),this.pushStack(i)}}))
var K=/[^\x20\t\r\n\f]+/g
function Q(e){return e}function V(e){throw e}function G(e,t,n,r){var i
try{e&&v(i=e.promise)?i.call(e).done(t).fail(n):e&&v(i=e.then)?i.call(e,t,n):t.apply(void 0,[e].slice(r))}catch(e){n.apply(void 0,[e])}}E.Callbacks=function(e){e="string"==typeof e?function(e){var t={}
return E.each(e.match(K)||[],(function(e,n){t[n]=!0})),t}(e):E.extend({},e)
var t,n,r,i,o=[],s=[],a=-1,u=function(){for(i=i||e.once,r=t=!0;s.length;a=-1)for(n=s.shift();++a<o.length;)!1===o[a].apply(n[0],n[1])&&e.stopOnFalse&&(a=o.length,n=!1)
e.memory||(n=!1),t=!1,i&&(o=n?[]:"")},l={add:function(){return o&&(n&&!t&&(a=o.length-1,s.push(n)),function t(n){E.each(n,(function(n,r){v(r)?e.unique&&l.has(r)||o.push(r):r&&r.length&&"string"!==k(r)&&t(r)}))}(arguments),n&&!t&&u()),this},remove:function(){return E.each(arguments,(function(e,t){for(var n;(n=E.inArray(t,o,n))>-1;)o.splice(n,1),n<=a&&a--})),this},has:function(e){return e?E.inArray(e,o)>-1:o.length>0},empty:function(){return o&&(o=[]),this},disable:function(){return i=s=[],o=n="",this},disabled:function(){return!o},lock:function(){return i=s=[],n||t||(o=n=""),this},locked:function(){return!!i},fireWith:function(e,n){return i||(n=[e,(n=n||[]).slice?n.slice():n],s.push(n),t||u()),this},fire:function(){return l.fireWith(this,arguments),this},fired:function(){return!!r}}
return l},E.extend({Deferred:function(e){var t=[["notify","progress",E.Callbacks("memory"),E.Callbacks("memory"),2],["resolve","done",E.Callbacks("once memory"),E.Callbacks("once memory"),0,"resolved"],["reject","fail",E.Callbacks("once memory"),E.Callbacks("once memory"),1,"rejected"]],n="pending",i={state:function(){return n},always:function(){return o.done(arguments).fail(arguments),this},catch:function(e){return i.then(null,e)},pipe:function(){var e=arguments
return E.Deferred((function(n){E.each(t,(function(t,r){var i=v(e[r[4]])&&e[r[4]]
o[r[1]]((function(){var e=i&&i.apply(this,arguments)
e&&v(e.promise)?e.promise().progress(n.notify).done(n.resolve).fail(n.reject):n[r[0]+"With"](this,i?[e]:arguments)}))})),e=null})).promise()},then:function(e,n,i){var o=0
function s(e,t,n,i){return function(){var a=this,u=arguments,l=function(){var r,l
if(!(e<o)){if((r=n.apply(a,u))===t.promise())throw new TypeError("Thenable self-resolution")
l=r&&("object"==typeof r||"function"==typeof r)&&r.then,v(l)?i?l.call(r,s(o,t,Q,i),s(o,t,V,i)):(o++,l.call(r,s(o,t,Q,i),s(o,t,V,i),s(o,t,Q,t.notifyWith))):(n!==Q&&(a=void 0,u=[r]),(i||t.resolveWith)(a,u))}},c=i?l:function(){try{l()}catch(r){E.Deferred.exceptionHook&&E.Deferred.exceptionHook(r,c.error),e+1>=o&&(n!==V&&(a=void 0,u=[r]),t.rejectWith(a,u))}}
e?c():(E.Deferred.getErrorHook?c.error=E.Deferred.getErrorHook():E.Deferred.getStackHook&&(c.error=E.Deferred.getStackHook()),r.setTimeout(c))}}return E.Deferred((function(r){t[0][3].add(s(0,r,v(i)?i:Q,r.notifyWith)),t[1][3].add(s(0,r,v(e)?e:Q)),t[2][3].add(s(0,r,v(n)?n:V))})).promise()},promise:function(e){return null!=e?E.extend(e,i):i}},o={}
return E.each(t,(function(e,r){var s=r[2],a=r[5]
i[r[1]]=s.add,a&&s.add((function(){n=a}),t[3-e][2].disable,t[3-e][3].disable,t[0][2].lock,t[0][3].lock),s.add(r[3].fire),o[r[0]]=function(){return o[r[0]+"With"](this===o?void 0:this,arguments),this},o[r[0]+"With"]=s.fireWith})),i.promise(o),e&&e.call(o,o),o},when:function(e){var t=arguments.length,n=t,r=Array(n),i=a.call(arguments),o=E.Deferred(),s=function(e){return function(n){r[e]=this,i[e]=arguments.length>1?a.call(arguments):n,--t||o.resolveWith(r,i)}}
if(t<=1&&(G(e,o.done(s(n)).resolve,o.reject,!t),"pending"===o.state()||v(i[n]&&i[n].then)))return o.then()
for(;n--;)G(i[n],s(n),o.reject)
return o.promise()}})
var Y=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/
E.Deferred.exceptionHook=function(e,t){r.console&&r.console.warn&&e&&Y.test(e.name)&&r.console.warn("jQuery.Deferred exception: "+e.message,e.stack,t)},E.readyException=function(e){r.setTimeout((function(){throw e}))}
var J=E.Deferred()
function Z(){b.removeEventListener("DOMContentLoaded",Z),r.removeEventListener("load",Z),E.ready()}E.fn.ready=function(e){return J.then(e).catch((function(e){E.readyException(e)})),this},E.extend({isReady:!1,readyWait:1,ready:function(e){(!0===e?--E.readyWait:E.isReady)||(E.isReady=!0,!0!==e&&--E.readyWait>0||J.resolveWith(b,[E]))}}),E.ready.then=J.then,"complete"===b.readyState||"loading"!==b.readyState&&!b.documentElement.doScroll?r.setTimeout(E.ready):(b.addEventListener("DOMContentLoaded",Z),r.addEventListener("load",Z))
var ee=function(e,t,n,r,i,o,s){var a=0,u=e.length,l=null==n
if("object"===k(n))for(a in i=!0,n)ee(e,t,a,n[a],!0,o,s)
else if(void 0!==r&&(i=!0,v(r)||(s=!0),l&&(s?(t.call(e,r),t=null):(l=t,t=function(e,t,n){return l.call(E(e),n)})),t))for(;a<u;a++)t(e[a],n,s?r:r.call(e[a],a,t(e[a],n)))
return i?e:l?t.call(e):u?t(e[0],n):o},te=/^-ms-/,ne=/-([a-z])/g
function re(e,t){return t.toUpperCase()}function ie(e){return e.replace(te,"ms-").replace(ne,re)}var oe=function(e){return 1===e.nodeType||9===e.nodeType||!+e.nodeType}
function se(){this.expando=E.expando+se.uid++}se.uid=1,se.prototype={cache:function(e){var t=e[this.expando]
return t||(t={},oe(e)&&(e.nodeType?e[this.expando]=t:Object.defineProperty(e,this.expando,{value:t,configurable:!0}))),t},set:function(e,t,n){var r,i=this.cache(e)
if("string"==typeof t)i[ie(t)]=n
else for(r in t)i[ie(r)]=t[r]
return i},get:function(e,t){return void 0===t?this.cache(e):e[this.expando]&&e[this.expando][ie(t)]},access:function(e,t,n){return void 0===t||t&&"string"==typeof t&&void 0===n?this.get(e,t):(this.set(e,t,n),void 0!==n?n:t)},remove:function(e,t){var n,r=e[this.expando]
if(void 0!==r){if(void 0!==t){n=(t=Array.isArray(t)?t.map(ie):(t=ie(t))in r?[t]:t.match(K)||[]).length
for(;n--;)delete r[t[n]]}(void 0===t||E.isEmptyObject(r))&&(e.nodeType?e[this.expando]=void 0:delete e[this.expando])}},hasData:function(e){var t=e[this.expando]
return void 0!==t&&!E.isEmptyObject(t)}}
var ae=new se,ue=new se,le=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,ce=/[A-Z]/g
function fe(e,t,n){var r
if(void 0===n&&1===e.nodeType)if(r="data-"+t.replace(ce,"-$&").toLowerCase(),"string"==typeof(n=e.getAttribute(r))){try{n=function(e){return"true"===e||"false"!==e&&("null"===e?null:e===+e+""?+e:le.test(e)?JSON.parse(e):e)}(n)}catch(e){}ue.set(e,t,n)}else n=void 0
return n}E.extend({hasData:function(e){return ue.hasData(e)||ae.hasData(e)},data:function(e,t,n){return ue.access(e,t,n)},removeData:function(e,t){ue.remove(e,t)},_data:function(e,t,n){return ae.access(e,t,n)},_removeData:function(e,t){ae.remove(e,t)}}),E.fn.extend({data:function(e,t){var n,r,i,o=this[0],s=o&&o.attributes
if(void 0===e){if(this.length&&(i=ue.get(o),1===o.nodeType&&!ae.get(o,"hasDataAttrs"))){for(n=s.length;n--;)s[n]&&0===(r=s[n].name).indexOf("data-")&&(r=ie(r.slice(5)),fe(o,r,i[r]))
ae.set(o,"hasDataAttrs",!0)}return i}return"object"==typeof e?this.each((function(){ue.set(this,e)})):ee(this,(function(t){var n
if(o&&void 0===t)return void 0!==(n=ue.get(o,e))||void 0!==(n=fe(o,e))?n:void 0
this.each((function(){ue.set(this,e,t)}))}),null,t,arguments.length>1,null,!0)},removeData:function(e){return this.each((function(){ue.remove(this,e)}))}}),E.extend({queue:function(e,t,n){var r
if(e)return t=(t||"fx")+"queue",r=ae.get(e,t),n&&(!r||Array.isArray(n)?r=ae.access(e,t,E.makeArray(n)):r.push(n)),r||[]},dequeue:function(e,t){t=t||"fx"
var n=E.queue(e,t),r=n.length,i=n.shift(),o=E._queueHooks(e,t)
"inprogress"===i&&(i=n.shift(),r--),i&&("fx"===t&&n.unshift("inprogress"),delete o.stop,i.call(e,(function(){E.dequeue(e,t)}),o)),!r&&o&&o.empty.fire()},_queueHooks:function(e,t){var n=t+"queueHooks"
return ae.get(e,n)||ae.access(e,n,{empty:E.Callbacks("once memory").add((function(){ae.remove(e,[t+"queue",n])}))})}}),E.fn.extend({queue:function(e,t){var n=2
return"string"!=typeof e&&(t=e,e="fx",n--),arguments.length<n?E.queue(this[0],e):void 0===t?this:this.each((function(){var n=E.queue(this,e,t)
E._queueHooks(this,e),"fx"===e&&"inprogress"!==n[0]&&E.dequeue(this,e)}))},dequeue:function(e){return this.each((function(){E.dequeue(this,e)}))},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,t){var n,r=1,i=E.Deferred(),o=this,s=this.length,a=function(){--r||i.resolveWith(o,[o])}
for("string"!=typeof e&&(t=e,e=void 0),e=e||"fx";s--;)(n=ae.get(o[s],e+"queueHooks"))&&n.empty&&(r++,n.empty.add(a))
return a(),i.promise(t)}})
var de=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,pe=new RegExp("^(?:([+-])=|)("+de+")([a-z%]*)$","i"),he=["Top","Right","Bottom","Left"],ge=b.documentElement,me=function(e){return E.contains(e.ownerDocument,e)},ve={composed:!0}
ge.getRootNode&&(me=function(e){return E.contains(e.ownerDocument,e)||e.getRootNode(ve)===e.ownerDocument})
var ye=function(e,t){return"none"===(e=t||e).style.display||""===e.style.display&&me(e)&&"none"===E.css(e,"display")}
function be(e,t,n,r){var i,o,s=20,a=r?function(){return r.cur()}:function(){return E.css(e,t,"")},u=a(),l=n&&n[3]||(E.cssNumber[t]?"":"px"),c=e.nodeType&&(E.cssNumber[t]||"px"!==l&&+u)&&pe.exec(E.css(e,t))
if(c&&c[3]!==l){for(u/=2,l=l||c[3],c=+u||1;s--;)E.style(e,t,c+l),(1-o)*(1-(o=a()/u||.5))<=0&&(s=0),c/=o
c*=2,E.style(e,t,c+l),n=n||[]}return n&&(c=+c||+u||0,i=n[1]?c+(n[1]+1)*n[2]:+n[2],r&&(r.unit=l,r.start=c,r.end=i)),i}var xe={}
function we(e){var t,n=e.ownerDocument,r=e.nodeName,i=xe[r]
return i||(t=n.body.appendChild(n.createElement(r)),i=E.css(t,"display"),t.parentNode.removeChild(t),"none"===i&&(i="block"),xe[r]=i,i)}function ke(e,t){for(var n,r,i=[],o=0,s=e.length;o<s;o++)(r=e[o]).style&&(n=r.style.display,t?("none"===n&&(i[o]=ae.get(r,"display")||null,i[o]||(r.style.display="")),""===r.style.display&&ye(r)&&(i[o]=we(r))):"none"!==n&&(i[o]="none",ae.set(r,"display",n)))
for(o=0;o<s;o++)null!=i[o]&&(e[o].style.display=i[o])
return e}E.fn.extend({show:function(){return ke(this,!0)},hide:function(){return ke(this)},toggle:function(e){return"boolean"==typeof e?e?this.show():this.hide():this.each((function(){ye(this)?E(this).show():E(this).hide()}))}})
var Te,Ce,Ee=/^(?:checkbox|radio)$/i,_e=/<([a-z][^\/\0>\x20\t\r\n\f]*)/i,Se=/^$|^module$|\/(?:java|ecma)script/i
Te=b.createDocumentFragment().appendChild(b.createElement("div")),(Ce=b.createElement("input")).setAttribute("type","radio"),Ce.setAttribute("checked","checked"),Ce.setAttribute("name","t"),Te.appendChild(Ce),m.checkClone=Te.cloneNode(!0).cloneNode(!0).lastChild.checked,Te.innerHTML="<textarea>x</textarea>",m.noCloneChecked=!!Te.cloneNode(!0).lastChild.defaultValue,Te.innerHTML="<option></option>",m.option=!!Te.lastChild
var De={thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]}
function Ae(e,t){var n
return n=void 0!==e.getElementsByTagName?e.getElementsByTagName(t||"*"):void 0!==e.querySelectorAll?e.querySelectorAll(t||"*"):[],void 0===t||t&&S(e,t)?E.merge([e],n):n}function je(e,t){for(var n=0,r=e.length;n<r;n++)ae.set(e[n],"globalEval",!t||ae.get(t[n],"globalEval"))}De.tbody=De.tfoot=De.colgroup=De.caption=De.thead,De.th=De.td,m.option||(De.optgroup=De.option=[1,"<select multiple='multiple'>","</select>"])
var Oe=/<|&#?\w+;/
function Re(e,t,n,r,i){for(var o,s,a,u,l,c,f=t.createDocumentFragment(),d=[],p=0,h=e.length;p<h;p++)if((o=e[p])||0===o)if("object"===k(o))E.merge(d,o.nodeType?[o]:o)
else if(Oe.test(o)){for(s=s||f.appendChild(t.createElement("div")),a=(_e.exec(o)||["",""])[1].toLowerCase(),u=De[a]||De._default,s.innerHTML=u[1]+E.htmlPrefilter(o)+u[2],c=u[0];c--;)s=s.lastChild
E.merge(d,s.childNodes),(s=f.firstChild).textContent=""}else d.push(t.createTextNode(o))
for(f.textContent="",p=0;o=d[p++];)if(r&&E.inArray(o,r)>-1)i&&i.push(o)
else if(l=me(o),s=Ae(f.appendChild(o),"script"),l&&je(s),n)for(c=0;o=s[c++];)Se.test(o.type||"")&&n.push(o)
return f}var Le=/^([^.]*)(?:\.(.+)|)/
function Ne(){return!0}function qe(){return!1}function Ie(e,t,n,r,i,o){var s,a
if("object"==typeof t){for(a in"string"!=typeof n&&(r=r||n,n=void 0),t)Ie(e,a,n,r,t[a],o)
return e}if(null==r&&null==i?(i=n,r=n=void 0):null==i&&("string"==typeof n?(i=r,r=void 0):(i=r,r=n,n=void 0)),!1===i)i=qe
else if(!i)return e
return 1===o&&(s=i,i=function(e){return E().off(e),s.apply(this,arguments)},i.guid=s.guid||(s.guid=E.guid++)),e.each((function(){E.event.add(this,t,i,r,n)}))}function He(e,t,n){n?(ae.set(e,t,!1),E.event.add(e,t,{namespace:!1,handler:function(e){var n,r=ae.get(this,t)
if(1&e.isTrigger&&this[t]){if(r)(E.event.special[t]||{}).delegateType&&e.stopPropagation()
else if(r=a.call(arguments),ae.set(this,t,r),this[t](),n=ae.get(this,t),ae.set(this,t,!1),r!==n)return e.stopImmediatePropagation(),e.preventDefault(),n}else r&&(ae.set(this,t,E.event.trigger(r[0],r.slice(1),this)),e.stopPropagation(),e.isImmediatePropagationStopped=Ne)}})):void 0===ae.get(e,t)&&E.event.add(e,t,Ne)}E.event={global:{},add:function(e,t,n,r,i){var o,s,a,u,l,c,f,d,p,h,g,m=ae.get(e)
if(oe(e))for(n.handler&&(n=(o=n).handler,i=o.selector),i&&E.find.matchesSelector(ge,i),n.guid||(n.guid=E.guid++),(u=m.events)||(u=m.events=Object.create(null)),(s=m.handle)||(s=m.handle=function(t){return void 0!==E&&E.event.triggered!==t.type?E.event.dispatch.apply(e,arguments):void 0}),l=(t=(t||"").match(K)||[""]).length;l--;)p=g=(a=Le.exec(t[l])||[])[1],h=(a[2]||"").split(".").sort(),p&&(f=E.event.special[p]||{},p=(i?f.delegateType:f.bindType)||p,f=E.event.special[p]||{},c=E.extend({type:p,origType:g,data:r,handler:n,guid:n.guid,selector:i,needsContext:i&&E.expr.match.needsContext.test(i),namespace:h.join(".")},o),(d=u[p])||((d=u[p]=[]).delegateCount=0,f.setup&&!1!==f.setup.call(e,r,h,s)||e.addEventListener&&e.addEventListener(p,s)),f.add&&(f.add.call(e,c),c.handler.guid||(c.handler.guid=n.guid)),i?d.splice(d.delegateCount++,0,c):d.push(c),E.event.global[p]=!0)},remove:function(e,t,n,r,i){var o,s,a,u,l,c,f,d,p,h,g,m=ae.hasData(e)&&ae.get(e)
if(m&&(u=m.events)){for(l=(t=(t||"").match(K)||[""]).length;l--;)if(p=g=(a=Le.exec(t[l])||[])[1],h=(a[2]||"").split(".").sort(),p){for(f=E.event.special[p]||{},d=u[p=(r?f.delegateType:f.bindType)||p]||[],a=a[2]&&new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"),s=o=d.length;o--;)c=d[o],!i&&g!==c.origType||n&&n.guid!==c.guid||a&&!a.test(c.namespace)||r&&r!==c.selector&&("**"!==r||!c.selector)||(d.splice(o,1),c.selector&&d.delegateCount--,f.remove&&f.remove.call(e,c))
s&&!d.length&&(f.teardown&&!1!==f.teardown.call(e,h,m.handle)||E.removeEvent(e,p,m.handle),delete u[p])}else for(p in u)E.event.remove(e,p+t[l],n,r,!0)
E.isEmptyObject(u)&&ae.remove(e,"handle events")}},dispatch:function(e){var t,n,r,i,o,s,a=new Array(arguments.length),u=E.event.fix(e),l=(ae.get(this,"events")||Object.create(null))[u.type]||[],c=E.event.special[u.type]||{}
for(a[0]=u,t=1;t<arguments.length;t++)a[t]=arguments[t]
if(u.delegateTarget=this,!c.preDispatch||!1!==c.preDispatch.call(this,u)){for(s=E.event.handlers.call(this,u,l),t=0;(i=s[t++])&&!u.isPropagationStopped();)for(u.currentTarget=i.elem,n=0;(o=i.handlers[n++])&&!u.isImmediatePropagationStopped();)u.rnamespace&&!1!==o.namespace&&!u.rnamespace.test(o.namespace)||(u.handleObj=o,u.data=o.data,void 0!==(r=((E.event.special[o.origType]||{}).handle||o.handler).apply(i.elem,a))&&!1===(u.result=r)&&(u.preventDefault(),u.stopPropagation()))
return c.postDispatch&&c.postDispatch.call(this,u),u.result}},handlers:function(e,t){var n,r,i,o,s,a=[],u=t.delegateCount,l=e.target
if(u&&l.nodeType&&!("click"===e.type&&e.button>=1))for(;l!==this;l=l.parentNode||this)if(1===l.nodeType&&("click"!==e.type||!0!==l.disabled)){for(o=[],s={},n=0;n<u;n++)void 0===s[i=(r=t[n]).selector+" "]&&(s[i]=r.needsContext?E(i,this).index(l)>-1:E.find(i,this,null,[l]).length),s[i]&&o.push(r)
o.length&&a.push({elem:l,handlers:o})}return l=this,u<t.length&&a.push({elem:l,handlers:t.slice(u)}),a},addProp:function(e,t){Object.defineProperty(E.Event.prototype,e,{enumerable:!0,configurable:!0,get:v(t)?function(){if(this.originalEvent)return t(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[e]},set:function(t){Object.defineProperty(this,e,{enumerable:!0,configurable:!0,writable:!0,value:t})}})},fix:function(e){return e[E.expando]?e:new E.Event(e)},special:{load:{noBubble:!0},click:{setup:function(e){var t=this||e
return Ee.test(t.type)&&t.click&&S(t,"input")&&He(t,"click",!0),!1},trigger:function(e){var t=this||e
return Ee.test(t.type)&&t.click&&S(t,"input")&&He(t,"click"),!0},_default:function(e){var t=e.target
return Ee.test(t.type)&&t.click&&S(t,"input")&&ae.get(t,"click")||S(t,"a")}},beforeunload:{postDispatch:function(e){void 0!==e.result&&e.originalEvent&&(e.originalEvent.returnValue=e.result)}}}},E.removeEvent=function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n)},E.Event=function(e,t){if(!(this instanceof E.Event))return new E.Event(e,t)
e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||void 0===e.defaultPrevented&&!1===e.returnValue?Ne:qe,this.target=e.target&&3===e.target.nodeType?e.target.parentNode:e.target,this.currentTarget=e.currentTarget,this.relatedTarget=e.relatedTarget):this.type=e,t&&E.extend(this,t),this.timeStamp=e&&e.timeStamp||Date.now(),this[E.expando]=!0},E.Event.prototype={constructor:E.Event,isDefaultPrevented:qe,isPropagationStopped:qe,isImmediatePropagationStopped:qe,isSimulated:!1,preventDefault:function(){var e=this.originalEvent
this.isDefaultPrevented=Ne,e&&!this.isSimulated&&e.preventDefault()},stopPropagation:function(){var e=this.originalEvent
this.isPropagationStopped=Ne,e&&!this.isSimulated&&e.stopPropagation()},stopImmediatePropagation:function(){var e=this.originalEvent
this.isImmediatePropagationStopped=Ne,e&&!this.isSimulated&&e.stopImmediatePropagation(),this.stopPropagation()}},E.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,char:!0,code:!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:!0},E.event.addProp),E.each({focus:"focusin",blur:"focusout"},(function(e,t){function n(e){if(b.documentMode){var n=ae.get(this,"handle"),r=E.event.fix(e)
r.type="focusin"===e.type?"focus":"blur",r.isSimulated=!0,n(e),r.target===r.currentTarget&&n(r)}else E.event.simulate(t,e.target,E.event.fix(e))}E.event.special[e]={setup:function(){var r
if(He(this,e,!0),!b.documentMode)return!1;(r=ae.get(this,t))||this.addEventListener(t,n),ae.set(this,t,(r||0)+1)},trigger:function(){return He(this,e),!0},teardown:function(){var e
if(!b.documentMode)return!1;(e=ae.get(this,t)-1)?ae.set(this,t,e):(this.removeEventListener(t,n),ae.remove(this,t))},_default:function(t){return ae.get(t.target,e)},delegateType:t},E.event.special[t]={setup:function(){var r=this.ownerDocument||this.document||this,i=b.documentMode?this:r,o=ae.get(i,t)
o||(b.documentMode?this.addEventListener(t,n):r.addEventListener(e,n,!0)),ae.set(i,t,(o||0)+1)},teardown:function(){var r=this.ownerDocument||this.document||this,i=b.documentMode?this:r,o=ae.get(i,t)-1
o?ae.set(i,t,o):(b.documentMode?this.removeEventListener(t,n):r.removeEventListener(e,n,!0),ae.remove(i,t))}}})),E.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},(function(e,t){E.event.special[e]={delegateType:t,bindType:t,handle:function(e){var n,r=e.relatedTarget,i=e.handleObj
return r&&(r===this||E.contains(this,r))||(e.type=i.origType,n=i.handler.apply(this,arguments),e.type=t),n}}})),E.fn.extend({on:function(e,t,n,r){return Ie(this,e,t,n,r)},one:function(e,t,n,r){return Ie(this,e,t,n,r,1)},off:function(e,t,n){var r,i
if(e&&e.preventDefault&&e.handleObj)return r=e.handleObj,E(e.delegateTarget).off(r.namespace?r.origType+"."+r.namespace:r.origType,r.selector,r.handler),this
if("object"==typeof e){for(i in e)this.off(i,t,e[i])
return this}return!1!==t&&"function"!=typeof t||(n=t,t=void 0),!1===n&&(n=qe),this.each((function(){E.event.remove(this,e,n,t)}))}})
var Pe=/<script|<style|<link/i,Me=/checked\s*(?:[^=]|=\s*.checked.)/i,Fe=/^\s*<!\[CDATA\[|\]\]>\s*$/g
function We(e,t){return S(e,"table")&&S(11!==t.nodeType?t:t.firstChild,"tr")&&E(e).children("tbody")[0]||e}function ze(e){return e.type=(null!==e.getAttribute("type"))+"/"+e.type,e}function Be(e){return"true/"===(e.type||"").slice(0,5)?e.type=e.type.slice(5):e.removeAttribute("type"),e}function $e(e,t){var n,r,i,o,s,a
if(1===t.nodeType){if(ae.hasData(e)&&(a=ae.get(e).events))for(i in ae.remove(t,"handle events"),a)for(n=0,r=a[i].length;n<r;n++)E.event.add(t,i,a[i][n])
ue.hasData(e)&&(o=ue.access(e),s=E.extend({},o),ue.set(t,s))}}function Ue(e,t){var n=t.nodeName.toLowerCase()
"input"===n&&Ee.test(e.type)?t.checked=e.checked:"input"!==n&&"textarea"!==n||(t.defaultValue=e.defaultValue)}function Xe(e,t,n,r){t=u(t)
var i,o,s,a,l,c,f=0,d=e.length,p=d-1,h=t[0],g=v(h)
if(g||d>1&&"string"==typeof h&&!m.checkClone&&Me.test(h))return e.each((function(i){var o=e.eq(i)
g&&(t[0]=h.call(this,i,o.html())),Xe(o,t,n,r)}))
if(d&&(o=(i=Re(t,e[0].ownerDocument,!1,e,r)).firstChild,1===i.childNodes.length&&(i=o),o||r)){for(a=(s=E.map(Ae(i,"script"),ze)).length;f<d;f++)l=i,f!==p&&(l=E.clone(l,!0,!0),a&&E.merge(s,Ae(l,"script"))),n.call(e[f],l,f)
if(a)for(c=s[s.length-1].ownerDocument,E.map(s,Be),f=0;f<a;f++)l=s[f],Se.test(l.type||"")&&!ae.access(l,"globalEval")&&E.contains(c,l)&&(l.src&&"module"!==(l.type||"").toLowerCase()?E._evalUrl&&!l.noModule&&E._evalUrl(l.src,{nonce:l.nonce||l.getAttribute("nonce")},c):w(l.textContent.replace(Fe,""),l,c))}return e}function Ke(e,t,n){for(var r,i=t?E.filter(t,e):e,o=0;null!=(r=i[o]);o++)n||1!==r.nodeType||E.cleanData(Ae(r)),r.parentNode&&(n&&me(r)&&je(Ae(r,"script")),r.parentNode.removeChild(r))
return e}E.extend({htmlPrefilter:function(e){return e},clone:function(e,t,n){var r,i,o,s,a=e.cloneNode(!0),u=me(e)
if(!(m.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||E.isXMLDoc(e)))for(s=Ae(a),r=0,i=(o=Ae(e)).length;r<i;r++)Ue(o[r],s[r])
if(t)if(n)for(o=o||Ae(e),s=s||Ae(a),r=0,i=o.length;r<i;r++)$e(o[r],s[r])
else $e(e,a)
return(s=Ae(a,"script")).length>0&&je(s,!u&&Ae(e,"script")),a},cleanData:function(e){for(var t,n,r,i=E.event.special,o=0;void 0!==(n=e[o]);o++)if(oe(n)){if(t=n[ae.expando]){if(t.events)for(r in t.events)i[r]?E.event.remove(n,r):E.removeEvent(n,r,t.handle)
n[ae.expando]=void 0}n[ue.expando]&&(n[ue.expando]=void 0)}}}),E.fn.extend({detach:function(e){return Ke(this,e,!0)},remove:function(e){return Ke(this,e)},text:function(e){return ee(this,(function(e){return void 0===e?E.text(this):this.empty().each((function(){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||(this.textContent=e)}))}),null,e,arguments.length)},append:function(){return Xe(this,arguments,(function(e){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||We(this,e).appendChild(e)}))},prepend:function(){return Xe(this,arguments,(function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=We(this,e)
t.insertBefore(e,t.firstChild)}}))},before:function(){return Xe(this,arguments,(function(e){this.parentNode&&this.parentNode.insertBefore(e,this)}))},after:function(){return Xe(this,arguments,(function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)}))},empty:function(){for(var e,t=0;null!=(e=this[t]);t++)1===e.nodeType&&(E.cleanData(Ae(e,!1)),e.textContent="")
return this},clone:function(e,t){return e=null!=e&&e,t=null==t?e:t,this.map((function(){return E.clone(this,e,t)}))},html:function(e){return ee(this,(function(e){var t=this[0]||{},n=0,r=this.length
if(void 0===e&&1===t.nodeType)return t.innerHTML
if("string"==typeof e&&!Pe.test(e)&&!De[(_e.exec(e)||["",""])[1].toLowerCase()]){e=E.htmlPrefilter(e)
try{for(;n<r;n++)1===(t=this[n]||{}).nodeType&&(E.cleanData(Ae(t,!1)),t.innerHTML=e)
t=0}catch(e){}}t&&this.empty().append(e)}),null,e,arguments.length)},replaceWith:function(){var e=[]
return Xe(this,arguments,(function(t){var n=this.parentNode
E.inArray(this,e)<0&&(E.cleanData(Ae(this)),n&&n.replaceChild(t,this))}),e)}}),E.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},(function(e,t){E.fn[e]=function(e){for(var n,r=[],i=E(e),o=i.length-1,s=0;s<=o;s++)n=s===o?this:this.clone(!0),E(i[s])[t](n),l.apply(r,n.get())
return this.pushStack(r)}}))
var Qe=new RegExp("^("+de+")(?!px)[a-z%]+$","i"),Ve=/^--/,Ge=function(e){var t=e.ownerDocument.defaultView
return t&&t.opener||(t=r),t.getComputedStyle(e)},Ye=function(e,t,n){var r,i,o={}
for(i in t)o[i]=e.style[i],e.style[i]=t[i]
for(i in r=n.call(e),t)e.style[i]=o[i]
return r},Je=new RegExp(he.join("|"),"i")
function Ze(e,t,n){var r,i,o,s,a=Ve.test(t),u=e.style
return(n=n||Ge(e))&&(s=n.getPropertyValue(t)||n[t],a&&s&&(s=s.replace(R,"$1")||void 0),""!==s||me(e)||(s=E.style(e,t)),!m.pixelBoxStyles()&&Qe.test(s)&&Je.test(t)&&(r=u.width,i=u.minWidth,o=u.maxWidth,u.minWidth=u.maxWidth=u.width=s,s=n.width,u.width=r,u.minWidth=i,u.maxWidth=o)),void 0!==s?s+"":s}function et(e,t){return{get:function(){if(!e())return(this.get=t).apply(this,arguments)
delete this.get}}}!function(){function e(){if(c){l.style.cssText="position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",c.style.cssText="position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",ge.appendChild(l).appendChild(c)
var e=r.getComputedStyle(c)
n="1%"!==e.top,u=12===t(e.marginLeft),c.style.right="60%",s=36===t(e.right),i=36===t(e.width),c.style.position="absolute",o=12===t(c.offsetWidth/3),ge.removeChild(l),c=null}}function t(e){return Math.round(parseFloat(e))}var n,i,o,s,a,u,l=b.createElement("div"),c=b.createElement("div")
c.style&&(c.style.backgroundClip="content-box",c.cloneNode(!0).style.backgroundClip="",m.clearCloneStyle="content-box"===c.style.backgroundClip,E.extend(m,{boxSizingReliable:function(){return e(),i},pixelBoxStyles:function(){return e(),s},pixelPosition:function(){return e(),n},reliableMarginLeft:function(){return e(),u},scrollboxSize:function(){return e(),o},reliableTrDimensions:function(){var e,t,n,i
return null==a&&(e=b.createElement("table"),t=b.createElement("tr"),n=b.createElement("div"),e.style.cssText="position:absolute;left:-11111px;border-collapse:separate",t.style.cssText="box-sizing:content-box;border:1px solid",t.style.height="1px",n.style.height="9px",n.style.display="block",ge.appendChild(e).appendChild(t).appendChild(n),i=r.getComputedStyle(t),a=parseInt(i.height,10)+parseInt(i.borderTopWidth,10)+parseInt(i.borderBottomWidth,10)===t.offsetHeight,ge.removeChild(e)),a}}))}()
var tt=["Webkit","Moz","ms"],nt=b.createElement("div").style,rt={}
function it(e){return E.cssProps[e]||rt[e]||(e in nt?e:rt[e]=function(e){for(var t=e[0].toUpperCase()+e.slice(1),n=tt.length;n--;)if((e=tt[n]+t)in nt)return e}(e)||e)}var ot=/^(none|table(?!-c[ea]).+)/,st={position:"absolute",visibility:"hidden",display:"block"},at={letterSpacing:"0",fontWeight:"400"}
function ut(e,t,n){var r=pe.exec(t)
return r?Math.max(0,r[2]-(n||0))+(r[3]||"px"):t}function lt(e,t,n,r,i,o){var s="width"===t?1:0,a=0,u=0,l=0
if(n===(r?"border":"content"))return 0
for(;s<4;s+=2)"margin"===n&&(l+=E.css(e,n+he[s],!0,i)),r?("content"===n&&(u-=E.css(e,"padding"+he[s],!0,i)),"margin"!==n&&(u-=E.css(e,"border"+he[s]+"Width",!0,i))):(u+=E.css(e,"padding"+he[s],!0,i),"padding"!==n?u+=E.css(e,"border"+he[s]+"Width",!0,i):a+=E.css(e,"border"+he[s]+"Width",!0,i))
return!r&&o>=0&&(u+=Math.max(0,Math.ceil(e["offset"+t[0].toUpperCase()+t.slice(1)]-o-u-a-.5))||0),u+l}function ct(e,t,n){var r=Ge(e),i=(!m.boxSizingReliable()||n)&&"border-box"===E.css(e,"boxSizing",!1,r),o=i,s=Ze(e,t,r),a="offset"+t[0].toUpperCase()+t.slice(1)
if(Qe.test(s)){if(!n)return s
s="auto"}return(!m.boxSizingReliable()&&i||!m.reliableTrDimensions()&&S(e,"tr")||"auto"===s||!parseFloat(s)&&"inline"===E.css(e,"display",!1,r))&&e.getClientRects().length&&(i="border-box"===E.css(e,"boxSizing",!1,r),(o=a in e)&&(s=e[a])),(s=parseFloat(s)||0)+lt(e,t,n||(i?"border":"content"),o,r,s)+"px"}function ft(e,t,n,r,i){return new ft.prototype.init(e,t,n,r,i)}E.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=Ze(e,"opacity")
return""===n?"1":n}}}},cssNumber:{animationIterationCount:!0,aspectRatio:!0,borderImageSlice:!0,columnCount:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,gridArea:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnStart:!0,gridRow:!0,gridRowEnd:!0,gridRowStart:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,scale:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeMiterlimit:!0,strokeOpacity:!0},cssProps:{},style:function(e,t,n,r){if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){var i,o,s,a=ie(t),u=Ve.test(t),l=e.style
if(u||(t=it(a)),s=E.cssHooks[t]||E.cssHooks[a],void 0===n)return s&&"get"in s&&void 0!==(i=s.get(e,!1,r))?i:l[t]
"string"==(o=typeof n)&&(i=pe.exec(n))&&i[1]&&(n=be(e,t,i),o="number"),null!=n&&n==n&&("number"!==o||u||(n+=i&&i[3]||(E.cssNumber[a]?"":"px")),m.clearCloneStyle||""!==n||0!==t.indexOf("background")||(l[t]="inherit"),s&&"set"in s&&void 0===(n=s.set(e,n,r))||(u?l.setProperty(t,n):l[t]=n))}},css:function(e,t,n,r){var i,o,s,a=ie(t)
return Ve.test(t)||(t=it(a)),(s=E.cssHooks[t]||E.cssHooks[a])&&"get"in s&&(i=s.get(e,!0,n)),void 0===i&&(i=Ze(e,t,r)),"normal"===i&&t in at&&(i=at[t]),""===n||n?(o=parseFloat(i),!0===n||isFinite(o)?o||0:i):i}}),E.each(["height","width"],(function(e,t){E.cssHooks[t]={get:function(e,n,r){if(n)return!ot.test(E.css(e,"display"))||e.getClientRects().length&&e.getBoundingClientRect().width?ct(e,t,r):Ye(e,st,(function(){return ct(e,t,r)}))},set:function(e,n,r){var i,o=Ge(e),s=!m.scrollboxSize()&&"absolute"===o.position,a=(s||r)&&"border-box"===E.css(e,"boxSizing",!1,o),u=r?lt(e,t,r,a,o):0
return a&&s&&(u-=Math.ceil(e["offset"+t[0].toUpperCase()+t.slice(1)]-parseFloat(o[t])-lt(e,t,"border",!1,o)-.5)),u&&(i=pe.exec(n))&&"px"!==(i[3]||"px")&&(e.style[t]=n,n=E.css(e,t)),ut(0,n,u)}}})),E.cssHooks.marginLeft=et(m.reliableMarginLeft,(function(e,t){if(t)return(parseFloat(Ze(e,"marginLeft"))||e.getBoundingClientRect().left-Ye(e,{marginLeft:0},(function(){return e.getBoundingClientRect().left})))+"px"})),E.each({margin:"",padding:"",border:"Width"},(function(e,t){E.cssHooks[e+t]={expand:function(n){for(var r=0,i={},o="string"==typeof n?n.split(" "):[n];r<4;r++)i[e+he[r]+t]=o[r]||o[r-2]||o[0]
return i}},"margin"!==e&&(E.cssHooks[e+t].set=ut)})),E.fn.extend({css:function(e,t){return ee(this,(function(e,t,n){var r,i,o={},s=0
if(Array.isArray(t)){for(r=Ge(e),i=t.length;s<i;s++)o[t[s]]=E.css(e,t[s],!1,r)
return o}return void 0!==n?E.style(e,t,n):E.css(e,t)}),e,t,arguments.length>1)}}),E.Tween=ft,ft.prototype={constructor:ft,init:function(e,t,n,r,i,o){this.elem=e,this.prop=n,this.easing=i||E.easing._default,this.options=t,this.start=this.now=this.cur(),this.end=r,this.unit=o||(E.cssNumber[n]?"":"px")},cur:function(){var e=ft.propHooks[this.prop]
return e&&e.get?e.get(this):ft.propHooks._default.get(this)},run:function(e){var t,n=ft.propHooks[this.prop]
return this.options.duration?this.pos=t=E.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):this.pos=t=e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):ft.propHooks._default.set(this),this}},ft.prototype.init.prototype=ft.prototype,ft.propHooks={_default:{get:function(e){var t
return 1!==e.elem.nodeType||null!=e.elem[e.prop]&&null==e.elem.style[e.prop]?e.elem[e.prop]:(t=E.css(e.elem,e.prop,""))&&"auto"!==t?t:0},set:function(e){E.fx.step[e.prop]?E.fx.step[e.prop](e):1!==e.elem.nodeType||!E.cssHooks[e.prop]&&null==e.elem.style[it(e.prop)]?e.elem[e.prop]=e.now:E.style(e.elem,e.prop,e.now+e.unit)}}},ft.propHooks.scrollTop=ft.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},E.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2},_default:"swing"},E.fx=ft.prototype.init,E.fx.step={}
var dt,pt,ht=/^(?:toggle|show|hide)$/,gt=/queueHooks$/
function mt(){pt&&(!1===b.hidden&&r.requestAnimationFrame?r.requestAnimationFrame(mt):r.setTimeout(mt,E.fx.interval),E.fx.tick())}function vt(){return r.setTimeout((function(){dt=void 0})),dt=Date.now()}function yt(e,t){var n,r=0,i={height:e}
for(t=t?1:0;r<4;r+=2-t)i["margin"+(n=he[r])]=i["padding"+n]=e
return t&&(i.opacity=i.width=e),i}function bt(e,t,n){for(var r,i=(xt.tweeners[t]||[]).concat(xt.tweeners["*"]),o=0,s=i.length;o<s;o++)if(r=i[o].call(n,t,e))return r}function xt(e,t,n){var r,i,o=0,s=xt.prefilters.length,a=E.Deferred().always((function(){delete u.elem})),u=function(){if(i)return!1
for(var t=dt||vt(),n=Math.max(0,l.startTime+l.duration-t),r=1-(n/l.duration||0),o=0,s=l.tweens.length;o<s;o++)l.tweens[o].run(r)
return a.notifyWith(e,[l,r,n]),r<1&&s?n:(s||a.notifyWith(e,[l,1,0]),a.resolveWith(e,[l]),!1)},l=a.promise({elem:e,props:E.extend({},t),opts:E.extend(!0,{specialEasing:{},easing:E.easing._default},n),originalProperties:t,originalOptions:n,startTime:dt||vt(),duration:n.duration,tweens:[],createTween:function(t,n){var r=E.Tween(e,l.opts,t,n,l.opts.specialEasing[t]||l.opts.easing)
return l.tweens.push(r),r},stop:function(t){var n=0,r=t?l.tweens.length:0
if(i)return this
for(i=!0;n<r;n++)l.tweens[n].run(1)
return t?(a.notifyWith(e,[l,1,0]),a.resolveWith(e,[l,t])):a.rejectWith(e,[l,t]),this}}),c=l.props
for(function(e,t){var n,r,i,o,s
for(n in e)if(i=t[r=ie(n)],o=e[n],Array.isArray(o)&&(i=o[1],o=e[n]=o[0]),n!==r&&(e[r]=o,delete e[n]),(s=E.cssHooks[r])&&"expand"in s)for(n in o=s.expand(o),delete e[r],o)n in e||(e[n]=o[n],t[n]=i)
else t[r]=i}(c,l.opts.specialEasing);o<s;o++)if(r=xt.prefilters[o].call(l,e,c,l.opts))return v(r.stop)&&(E._queueHooks(l.elem,l.opts.queue).stop=r.stop.bind(r)),r
return E.map(c,bt,l),v(l.opts.start)&&l.opts.start.call(e,l),l.progress(l.opts.progress).done(l.opts.done,l.opts.complete).fail(l.opts.fail).always(l.opts.always),E.fx.timer(E.extend(u,{elem:e,anim:l,queue:l.opts.queue})),l}E.Animation=E.extend(xt,{tweeners:{"*":[function(e,t){var n=this.createTween(e,t)
return be(n.elem,e,pe.exec(t),n),n}]},tweener:function(e,t){v(e)?(t=e,e=["*"]):e=e.match(K)
for(var n,r=0,i=e.length;r<i;r++)n=e[r],xt.tweeners[n]=xt.tweeners[n]||[],xt.tweeners[n].unshift(t)},prefilters:[function(e,t,n){var r,i,o,s,a,u,l,c,f="width"in t||"height"in t,d=this,p={},h=e.style,g=e.nodeType&&ye(e),m=ae.get(e,"fxshow")
for(r in n.queue||(null==(s=E._queueHooks(e,"fx")).unqueued&&(s.unqueued=0,a=s.empty.fire,s.empty.fire=function(){s.unqueued||a()}),s.unqueued++,d.always((function(){d.always((function(){s.unqueued--,E.queue(e,"fx").length||s.empty.fire()}))}))),t)if(i=t[r],ht.test(i)){if(delete t[r],o=o||"toggle"===i,i===(g?"hide":"show")){if("show"!==i||!m||void 0===m[r])continue
g=!0}p[r]=m&&m[r]||E.style(e,r)}if((u=!E.isEmptyObject(t))||!E.isEmptyObject(p))for(r in f&&1===e.nodeType&&(n.overflow=[h.overflow,h.overflowX,h.overflowY],null==(l=m&&m.display)&&(l=ae.get(e,"display")),"none"===(c=E.css(e,"display"))&&(l?c=l:(ke([e],!0),l=e.style.display||l,c=E.css(e,"display"),ke([e]))),("inline"===c||"inline-block"===c&&null!=l)&&"none"===E.css(e,"float")&&(u||(d.done((function(){h.display=l})),null==l&&(c=h.display,l="none"===c?"":c)),h.display="inline-block")),n.overflow&&(h.overflow="hidden",d.always((function(){h.overflow=n.overflow[0],h.overflowX=n.overflow[1],h.overflowY=n.overflow[2]}))),u=!1,p)u||(m?"hidden"in m&&(g=m.hidden):m=ae.access(e,"fxshow",{display:l}),o&&(m.hidden=!g),g&&ke([e],!0),d.done((function(){for(r in g||ke([e]),ae.remove(e,"fxshow"),p)E.style(e,r,p[r])}))),u=bt(g?m[r]:0,r,d),r in m||(m[r]=u.start,g&&(u.end=u.start,u.start=0))}],prefilter:function(e,t){t?xt.prefilters.unshift(e):xt.prefilters.push(e)}}),E.speed=function(e,t,n){var r=e&&"object"==typeof e?E.extend({},e):{complete:n||!n&&t||v(e)&&e,duration:e,easing:n&&t||t&&!v(t)&&t}
return E.fx.off?r.duration=0:"number"!=typeof r.duration&&(r.duration in E.fx.speeds?r.duration=E.fx.speeds[r.duration]:r.duration=E.fx.speeds._default),null!=r.queue&&!0!==r.queue||(r.queue="fx"),r.old=r.complete,r.complete=function(){v(r.old)&&r.old.call(this),r.queue&&E.dequeue(this,r.queue)},r},E.fn.extend({fadeTo:function(e,t,n,r){return this.filter(ye).css("opacity",0).show().end().animate({opacity:t},e,n,r)},animate:function(e,t,n,r){var i=E.isEmptyObject(e),o=E.speed(t,n,r),s=function(){var t=xt(this,E.extend({},e),o);(i||ae.get(this,"finish"))&&t.stop(!0)}
return s.finish=s,i||!1===o.queue?this.each(s):this.queue(o.queue,s)},stop:function(e,t,n){var r=function(e){var t=e.stop
delete e.stop,t(n)}
return"string"!=typeof e&&(n=t,t=e,e=void 0),t&&this.queue(e||"fx",[]),this.each((function(){var t=!0,i=null!=e&&e+"queueHooks",o=E.timers,s=ae.get(this)
if(i)s[i]&&s[i].stop&&r(s[i])
else for(i in s)s[i]&&s[i].stop&&gt.test(i)&&r(s[i])
for(i=o.length;i--;)o[i].elem!==this||null!=e&&o[i].queue!==e||(o[i].anim.stop(n),t=!1,o.splice(i,1))
!t&&n||E.dequeue(this,e)}))},finish:function(e){return!1!==e&&(e=e||"fx"),this.each((function(){var t,n=ae.get(this),r=n[e+"queue"],i=n[e+"queueHooks"],o=E.timers,s=r?r.length:0
for(n.finish=!0,E.queue(this,e,[]),i&&i.stop&&i.stop.call(this,!0),t=o.length;t--;)o[t].elem===this&&o[t].queue===e&&(o[t].anim.stop(!0),o.splice(t,1))
for(t=0;t<s;t++)r[t]&&r[t].finish&&r[t].finish.call(this)
delete n.finish}))}}),E.each(["toggle","show","hide"],(function(e,t){var n=E.fn[t]
E.fn[t]=function(e,r,i){return null==e||"boolean"==typeof e?n.apply(this,arguments):this.animate(yt(t,!0),e,r,i)}})),E.each({slideDown:yt("show"),slideUp:yt("hide"),slideToggle:yt("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},(function(e,t){E.fn[e]=function(e,n,r){return this.animate(t,e,n,r)}})),E.timers=[],E.fx.tick=function(){var e,t=0,n=E.timers
for(dt=Date.now();t<n.length;t++)(e=n[t])()||n[t]!==e||n.splice(t--,1)
n.length||E.fx.stop(),dt=void 0},E.fx.timer=function(e){E.timers.push(e),E.fx.start()},E.fx.interval=13,E.fx.start=function(){pt||(pt=!0,mt())},E.fx.stop=function(){pt=null},E.fx.speeds={slow:600,fast:200,_default:400},E.fn.delay=function(e,t){return e=E.fx&&E.fx.speeds[e]||e,t=t||"fx",this.queue(t,(function(t,n){var i=r.setTimeout(t,e)
n.stop=function(){r.clearTimeout(i)}}))},function(){var e=b.createElement("input"),t=b.createElement("select").appendChild(b.createElement("option"))
e.type="checkbox",m.checkOn=""!==e.value,m.optSelected=t.selected,(e=b.createElement("input")).value="t",e.type="radio",m.radioValue="t"===e.value}()
var wt,kt=E.expr.attrHandle
E.fn.extend({attr:function(e,t){return ee(this,E.attr,e,t,arguments.length>1)},removeAttr:function(e){return this.each((function(){E.removeAttr(this,e)}))}}),E.extend({attr:function(e,t,n){var r,i,o=e.nodeType
if(3!==o&&8!==o&&2!==o)return void 0===e.getAttribute?E.prop(e,t,n):(1===o&&E.isXMLDoc(e)||(i=E.attrHooks[t.toLowerCase()]||(E.expr.match.bool.test(t)?wt:void 0)),void 0!==n?null===n?void E.removeAttr(e,t):i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:(e.setAttribute(t,n+""),n):i&&"get"in i&&null!==(r=i.get(e,t))?r:null==(r=E.find.attr(e,t))?void 0:r)},attrHooks:{type:{set:function(e,t){if(!m.radioValue&&"radio"===t&&S(e,"input")){var n=e.value
return e.setAttribute("type",t),n&&(e.value=n),t}}}},removeAttr:function(e,t){var n,r=0,i=t&&t.match(K)
if(i&&1===e.nodeType)for(;n=i[r++];)e.removeAttribute(n)}}),wt={set:function(e,t,n){return!1===t?E.removeAttr(e,n):e.setAttribute(n,n),n}},E.each(E.expr.match.bool.source.match(/\w+/g),(function(e,t){var n=kt[t]||E.find.attr
kt[t]=function(e,t,r){var i,o,s=t.toLowerCase()
return r||(o=kt[s],kt[s]=i,i=null!=n(e,t,r)?s:null,kt[s]=o),i}}))
var Tt=/^(?:input|select|textarea|button)$/i,Ct=/^(?:a|area)$/i
function Et(e){return(e.match(K)||[]).join(" ")}function _t(e){return e.getAttribute&&e.getAttribute("class")||""}function St(e){return Array.isArray(e)?e:"string"==typeof e&&e.match(K)||[]}E.fn.extend({prop:function(e,t){return ee(this,E.prop,e,t,arguments.length>1)},removeProp:function(e){return this.each((function(){delete this[E.propFix[e]||e]}))}}),E.extend({prop:function(e,t,n){var r,i,o=e.nodeType
if(3!==o&&8!==o&&2!==o)return 1===o&&E.isXMLDoc(e)||(t=E.propFix[t]||t,i=E.propHooks[t]),void 0!==n?i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:e[t]=n:i&&"get"in i&&null!==(r=i.get(e,t))?r:e[t]},propHooks:{tabIndex:{get:function(e){var t=E.find.attr(e,"tabindex")
return t?parseInt(t,10):Tt.test(e.nodeName)||Ct.test(e.nodeName)&&e.href?0:-1}}},propFix:{for:"htmlFor",class:"className"}}),m.optSelected||(E.propHooks.selected={get:function(e){var t=e.parentNode
return t&&t.parentNode&&t.parentNode.selectedIndex,null},set:function(e){var t=e.parentNode
t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex)}}),E.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],(function(){E.propFix[this.toLowerCase()]=this})),E.fn.extend({addClass:function(e){var t,n,r,i,o,s
return v(e)?this.each((function(t){E(this).addClass(e.call(this,t,_t(this)))})):(t=St(e)).length?this.each((function(){if(r=_t(this),n=1===this.nodeType&&" "+Et(r)+" "){for(o=0;o<t.length;o++)i=t[o],n.indexOf(" "+i+" ")<0&&(n+=i+" ")
s=Et(n),r!==s&&this.setAttribute("class",s)}})):this},removeClass:function(e){var t,n,r,i,o,s
return v(e)?this.each((function(t){E(this).removeClass(e.call(this,t,_t(this)))})):arguments.length?(t=St(e)).length?this.each((function(){if(r=_t(this),n=1===this.nodeType&&" "+Et(r)+" "){for(o=0;o<t.length;o++)for(i=t[o];n.indexOf(" "+i+" ")>-1;)n=n.replace(" "+i+" "," ")
s=Et(n),r!==s&&this.setAttribute("class",s)}})):this:this.attr("class","")},toggleClass:function(e,t){var n,r,i,o,s=typeof e,a="string"===s||Array.isArray(e)
return v(e)?this.each((function(n){E(this).toggleClass(e.call(this,n,_t(this),t),t)})):"boolean"==typeof t&&a?t?this.addClass(e):this.removeClass(e):(n=St(e),this.each((function(){if(a)for(o=E(this),i=0;i<n.length;i++)r=n[i],o.hasClass(r)?o.removeClass(r):o.addClass(r)
else void 0!==e&&"boolean"!==s||((r=_t(this))&&ae.set(this,"__className__",r),this.setAttribute&&this.setAttribute("class",r||!1===e?"":ae.get(this,"__className__")||""))})))},hasClass:function(e){var t,n,r=0
for(t=" "+e+" ";n=this[r++];)if(1===n.nodeType&&(" "+Et(_t(n))+" ").indexOf(t)>-1)return!0
return!1}})
var Dt=/\r/g
E.fn.extend({val:function(e){var t,n,r,i=this[0]
return arguments.length?(r=v(e),this.each((function(n){var i
1===this.nodeType&&(null==(i=r?e.call(this,n,E(this).val()):e)?i="":"number"==typeof i?i+="":Array.isArray(i)&&(i=E.map(i,(function(e){return null==e?"":e+""}))),(t=E.valHooks[this.type]||E.valHooks[this.nodeName.toLowerCase()])&&"set"in t&&void 0!==t.set(this,i,"value")||(this.value=i))}))):i?(t=E.valHooks[i.type]||E.valHooks[i.nodeName.toLowerCase()])&&"get"in t&&void 0!==(n=t.get(i,"value"))?n:"string"==typeof(n=i.value)?n.replace(Dt,""):null==n?"":n:void 0}}),E.extend({valHooks:{option:{get:function(e){var t=E.find.attr(e,"value")
return null!=t?t:Et(E.text(e))}},select:{get:function(e){var t,n,r,i=e.options,o=e.selectedIndex,s="select-one"===e.type,a=s?null:[],u=s?o+1:i.length
for(r=o<0?u:s?o:0;r<u;r++)if(((n=i[r]).selected||r===o)&&!n.disabled&&(!n.parentNode.disabled||!S(n.parentNode,"optgroup"))){if(t=E(n).val(),s)return t
a.push(t)}return a},set:function(e,t){for(var n,r,i=e.options,o=E.makeArray(t),s=i.length;s--;)((r=i[s]).selected=E.inArray(E.valHooks.option.get(r),o)>-1)&&(n=!0)
return n||(e.selectedIndex=-1),o}}}}),E.each(["radio","checkbox"],(function(){E.valHooks[this]={set:function(e,t){if(Array.isArray(t))return e.checked=E.inArray(E(e).val(),t)>-1}},m.checkOn||(E.valHooks[this].get=function(e){return null===e.getAttribute("value")?"on":e.value})}))
var At=r.location,jt={guid:Date.now()},Ot=/\?/
E.parseXML=function(e){var t,n
if(!e||"string"!=typeof e)return null
try{t=(new r.DOMParser).parseFromString(e,"text/xml")}catch(e){}return n=t&&t.getElementsByTagName("parsererror")[0],t&&!n||E.error("Invalid XML: "+(n?E.map(n.childNodes,(function(e){return e.textContent})).join("\n"):e)),t}
var Rt=/^(?:focusinfocus|focusoutblur)$/,Lt=function(e){e.stopPropagation()}
E.extend(E.event,{trigger:function(e,t,n,i){var o,s,a,u,l,c,f,d,h=[n||b],g=p.call(e,"type")?e.type:e,m=p.call(e,"namespace")?e.namespace.split("."):[]
if(s=d=a=n=n||b,3!==n.nodeType&&8!==n.nodeType&&!Rt.test(g+E.event.triggered)&&(g.indexOf(".")>-1&&(m=g.split("."),g=m.shift(),m.sort()),l=g.indexOf(":")<0&&"on"+g,(e=e[E.expando]?e:new E.Event(g,"object"==typeof e&&e)).isTrigger=i?2:3,e.namespace=m.join("."),e.rnamespace=e.namespace?new RegExp("(^|\\.)"+m.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,e.result=void 0,e.target||(e.target=n),t=null==t?[e]:E.makeArray(t,[e]),f=E.event.special[g]||{},i||!f.trigger||!1!==f.trigger.apply(n,t))){if(!i&&!f.noBubble&&!y(n)){for(u=f.delegateType||g,Rt.test(u+g)||(s=s.parentNode);s;s=s.parentNode)h.push(s),a=s
a===(n.ownerDocument||b)&&h.push(a.defaultView||a.parentWindow||r)}for(o=0;(s=h[o++])&&!e.isPropagationStopped();)d=s,e.type=o>1?u:f.bindType||g,(c=(ae.get(s,"events")||Object.create(null))[e.type]&&ae.get(s,"handle"))&&c.apply(s,t),(c=l&&s[l])&&c.apply&&oe(s)&&(e.result=c.apply(s,t),!1===e.result&&e.preventDefault())
return e.type=g,i||e.isDefaultPrevented()||f._default&&!1!==f._default.apply(h.pop(),t)||!oe(n)||l&&v(n[g])&&!y(n)&&((a=n[l])&&(n[l]=null),E.event.triggered=g,e.isPropagationStopped()&&d.addEventListener(g,Lt),n[g](),e.isPropagationStopped()&&d.removeEventListener(g,Lt),E.event.triggered=void 0,a&&(n[l]=a)),e.result}},simulate:function(e,t,n){var r=E.extend(new E.Event,n,{type:e,isSimulated:!0})
E.event.trigger(r,null,t)}}),E.fn.extend({trigger:function(e,t){return this.each((function(){E.event.trigger(e,t,this)}))},triggerHandler:function(e,t){var n=this[0]
if(n)return E.event.trigger(e,t,n,!0)}})
var Nt=/\[\]$/,qt=/\r?\n/g,It=/^(?:submit|button|image|reset|file)$/i,Ht=/^(?:input|select|textarea|keygen)/i
function Pt(e,t,n,r){var i
if(Array.isArray(t))E.each(t,(function(t,i){n||Nt.test(e)?r(e,i):Pt(e+"["+("object"==typeof i&&null!=i?t:"")+"]",i,n,r)}))
else if(n||"object"!==k(t))r(e,t)
else for(i in t)Pt(e+"["+i+"]",t[i],n,r)}E.param=function(e,t){var n,r=[],i=function(e,t){var n=v(t)?t():t
r[r.length]=encodeURIComponent(e)+"="+encodeURIComponent(null==n?"":n)}
if(null==e)return""
if(Array.isArray(e)||e.jquery&&!E.isPlainObject(e))E.each(e,(function(){i(this.name,this.value)}))
else for(n in e)Pt(n,e[n],t,i)
return r.join("&")},E.fn.extend({serialize:function(){return E.param(this.serializeArray())},serializeArray:function(){return this.map((function(){var e=E.prop(this,"elements")
return e?E.makeArray(e):this})).filter((function(){var e=this.type
return this.name&&!E(this).is(":disabled")&&Ht.test(this.nodeName)&&!It.test(e)&&(this.checked||!Ee.test(e))})).map((function(e,t){var n=E(this).val()
return null==n?null:Array.isArray(n)?E.map(n,(function(e){return{name:t.name,value:e.replace(qt,"\r\n")}})):{name:t.name,value:n.replace(qt,"\r\n")}})).get()}})
var Mt=/%20/g,Ft=/#.*$/,Wt=/([?&])_=[^&]*/,zt=/^(.*?):[ \t]*([^\r\n]*)$/gm,Bt=/^(?:GET|HEAD)$/,$t=/^\/\//,Ut={},Xt={},Kt="*/".concat("*"),Qt=b.createElement("a")
function Vt(e){return function(t,n){"string"!=typeof t&&(n=t,t="*")
var r,i=0,o=t.toLowerCase().match(K)||[]
if(v(n))for(;r=o[i++];)"+"===r[0]?(r=r.slice(1)||"*",(e[r]=e[r]||[]).unshift(n)):(e[r]=e[r]||[]).push(n)}}function Gt(e,t,n,r){var i={},o=e===Xt
function s(a){var u
return i[a]=!0,E.each(e[a]||[],(function(e,a){var l=a(t,n,r)
return"string"!=typeof l||o||i[l]?o?!(u=l):void 0:(t.dataTypes.unshift(l),s(l),!1)})),u}return s(t.dataTypes[0])||!i["*"]&&s("*")}function Yt(e,t){var n,r,i=E.ajaxSettings.flatOptions||{}
for(n in t)void 0!==t[n]&&((i[n]?e:r||(r={}))[n]=t[n])
return r&&E.extend(!0,e,r),e}Qt.href=At.href,E.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:At.href,type:"GET",isLocal:/^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(At.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Kt,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":JSON.parse,"text xml":E.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(e,t){return t?Yt(Yt(e,E.ajaxSettings),t):Yt(E.ajaxSettings,e)},ajaxPrefilter:Vt(Ut),ajaxTransport:Vt(Xt),ajax:function(e,t){"object"==typeof e&&(t=e,e=void 0),t=t||{}
var n,i,o,s,a,u,l,c,f,d,p=E.ajaxSetup({},t),h=p.context||p,g=p.context&&(h.nodeType||h.jquery)?E(h):E.event,m=E.Deferred(),v=E.Callbacks("once memory"),y=p.statusCode||{},x={},w={},k="canceled",T={readyState:0,getResponseHeader:function(e){var t
if(l){if(!s)for(s={};t=zt.exec(o);)s[t[1].toLowerCase()+" "]=(s[t[1].toLowerCase()+" "]||[]).concat(t[2])
t=s[e.toLowerCase()+" "]}return null==t?null:t.join(", ")},getAllResponseHeaders:function(){return l?o:null},setRequestHeader:function(e,t){return null==l&&(e=w[e.toLowerCase()]=w[e.toLowerCase()]||e,x[e]=t),this},overrideMimeType:function(e){return null==l&&(p.mimeType=e),this},statusCode:function(e){var t
if(e)if(l)T.always(e[T.status])
else for(t in e)y[t]=[y[t],e[t]]
return this},abort:function(e){var t=e||k
return n&&n.abort(t),C(0,t),this}}
if(m.promise(T),p.url=((e||p.url||At.href)+"").replace($t,At.protocol+"//"),p.type=t.method||t.type||p.method||p.type,p.dataTypes=(p.dataType||"*").toLowerCase().match(K)||[""],null==p.crossDomain){u=b.createElement("a")
try{u.href=p.url,u.href=u.href,p.crossDomain=Qt.protocol+"//"+Qt.host!=u.protocol+"//"+u.host}catch(e){p.crossDomain=!0}}if(p.data&&p.processData&&"string"!=typeof p.data&&(p.data=E.param(p.data,p.traditional)),Gt(Ut,p,t,T),l)return T
for(f in(c=E.event&&p.global)&&0==E.active++&&E.event.trigger("ajaxStart"),p.type=p.type.toUpperCase(),p.hasContent=!Bt.test(p.type),i=p.url.replace(Ft,""),p.hasContent?p.data&&p.processData&&0===(p.contentType||"").indexOf("application/x-www-form-urlencoded")&&(p.data=p.data.replace(Mt,"+")):(d=p.url.slice(i.length),p.data&&(p.processData||"string"==typeof p.data)&&(i+=(Ot.test(i)?"&":"?")+p.data,delete p.data),!1===p.cache&&(i=i.replace(Wt,"$1"),d=(Ot.test(i)?"&":"?")+"_="+jt.guid+++d),p.url=i+d),p.ifModified&&(E.lastModified[i]&&T.setRequestHeader("If-Modified-Since",E.lastModified[i]),E.etag[i]&&T.setRequestHeader("If-None-Match",E.etag[i])),(p.data&&p.hasContent&&!1!==p.contentType||t.contentType)&&T.setRequestHeader("Content-Type",p.contentType),T.setRequestHeader("Accept",p.dataTypes[0]&&p.accepts[p.dataTypes[0]]?p.accepts[p.dataTypes[0]]+("*"!==p.dataTypes[0]?", "+Kt+"; q=0.01":""):p.accepts["*"]),p.headers)T.setRequestHeader(f,p.headers[f])
if(p.beforeSend&&(!1===p.beforeSend.call(h,T,p)||l))return T.abort()
if(k="abort",v.add(p.complete),T.done(p.success),T.fail(p.error),n=Gt(Xt,p,t,T)){if(T.readyState=1,c&&g.trigger("ajaxSend",[T,p]),l)return T
p.async&&p.timeout>0&&(a=r.setTimeout((function(){T.abort("timeout")}),p.timeout))
try{l=!1,n.send(x,C)}catch(e){if(l)throw e
C(-1,e)}}else C(-1,"No Transport")
function C(e,t,s,u){var f,d,b,x,w,k=t
l||(l=!0,a&&r.clearTimeout(a),n=void 0,o=u||"",T.readyState=e>0?4:0,f=e>=200&&e<300||304===e,s&&(x=function(e,t,n){for(var r,i,o,s,a=e.contents,u=e.dataTypes;"*"===u[0];)u.shift(),void 0===r&&(r=e.mimeType||t.getResponseHeader("Content-Type"))
if(r)for(i in a)if(a[i]&&a[i].test(r)){u.unshift(i)
break}if(u[0]in n)o=u[0]
else{for(i in n){if(!u[0]||e.converters[i+" "+u[0]]){o=i
break}s||(s=i)}o=o||s}if(o)return o!==u[0]&&u.unshift(o),n[o]}(p,T,s)),!f&&E.inArray("script",p.dataTypes)>-1&&E.inArray("json",p.dataTypes)<0&&(p.converters["text script"]=function(){}),x=function(e,t,n,r){var i,o,s,a,u,l={},c=e.dataTypes.slice()
if(c[1])for(s in e.converters)l[s.toLowerCase()]=e.converters[s]
for(o=c.shift();o;)if(e.responseFields[o]&&(n[e.responseFields[o]]=t),!u&&r&&e.dataFilter&&(t=e.dataFilter(t,e.dataType)),u=o,o=c.shift())if("*"===o)o=u
else if("*"!==u&&u!==o){if(!(s=l[u+" "+o]||l["* "+o]))for(i in l)if((a=i.split(" "))[1]===o&&(s=l[u+" "+a[0]]||l["* "+a[0]])){!0===s?s=l[i]:!0!==l[i]&&(o=a[0],c.unshift(a[1]))
break}if(!0!==s)if(s&&e.throws)t=s(t)
else try{t=s(t)}catch(e){return{state:"parsererror",error:s?e:"No conversion from "+u+" to "+o}}}return{state:"success",data:t}}(p,x,T,f),f?(p.ifModified&&((w=T.getResponseHeader("Last-Modified"))&&(E.lastModified[i]=w),(w=T.getResponseHeader("etag"))&&(E.etag[i]=w)),204===e||"HEAD"===p.type?k="nocontent":304===e?k="notmodified":(k=x.state,d=x.data,f=!(b=x.error))):(b=k,!e&&k||(k="error",e<0&&(e=0))),T.status=e,T.statusText=(t||k)+"",f?m.resolveWith(h,[d,k,T]):m.rejectWith(h,[T,k,b]),T.statusCode(y),y=void 0,c&&g.trigger(f?"ajaxSuccess":"ajaxError",[T,p,f?d:b]),v.fireWith(h,[T,k]),c&&(g.trigger("ajaxComplete",[T,p]),--E.active||E.event.trigger("ajaxStop")))}return T},getJSON:function(e,t,n){return E.get(e,t,n,"json")},getScript:function(e,t){return E.get(e,void 0,t,"script")}}),E.each(["get","post"],(function(e,t){E[t]=function(e,n,r,i){return v(n)&&(i=i||r,r=n,n=void 0),E.ajax(E.extend({url:e,type:t,dataType:i,data:n,success:r},E.isPlainObject(e)&&e))}})),E.ajaxPrefilter((function(e){var t
for(t in e.headers)"content-type"===t.toLowerCase()&&(e.contentType=e.headers[t]||"")})),E._evalUrl=function(e,t,n){return E.ajax({url:e,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,converters:{"text script":function(){}},dataFilter:function(e){E.globalEval(e,t,n)}})},E.fn.extend({wrapAll:function(e){var t
return this[0]&&(v(e)&&(e=e.call(this[0])),t=E(e,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&t.insertBefore(this[0]),t.map((function(){for(var e=this;e.firstElementChild;)e=e.firstElementChild
return e})).append(this)),this},wrapInner:function(e){return v(e)?this.each((function(t){E(this).wrapInner(e.call(this,t))})):this.each((function(){var t=E(this),n=t.contents()
n.length?n.wrapAll(e):t.append(e)}))},wrap:function(e){var t=v(e)
return this.each((function(n){E(this).wrapAll(t?e.call(this,n):e)}))},unwrap:function(e){return this.parent(e).not("body").each((function(){E(this).replaceWith(this.childNodes)})),this}}),E.expr.pseudos.hidden=function(e){return!E.expr.pseudos.visible(e)},E.expr.pseudos.visible=function(e){return!!(e.offsetWidth||e.offsetHeight||e.getClientRects().length)},E.ajaxSettings.xhr=function(){try{return new r.XMLHttpRequest}catch(e){}}
var Jt={0:200,1223:204},Zt=E.ajaxSettings.xhr()
m.cors=!!Zt&&"withCredentials"in Zt,m.ajax=Zt=!!Zt,E.ajaxTransport((function(e){var t,n
if(m.cors||Zt&&!e.crossDomain)return{send:function(i,o){var s,a=e.xhr()
if(a.open(e.type,e.url,e.async,e.username,e.password),e.xhrFields)for(s in e.xhrFields)a[s]=e.xhrFields[s]
for(s in e.mimeType&&a.overrideMimeType&&a.overrideMimeType(e.mimeType),e.crossDomain||i["X-Requested-With"]||(i["X-Requested-With"]="XMLHttpRequest"),i)a.setRequestHeader(s,i[s])
t=function(e){return function(){t&&(t=n=a.onload=a.onerror=a.onabort=a.ontimeout=a.onreadystatechange=null,"abort"===e?a.abort():"error"===e?"number"!=typeof a.status?o(0,"error"):o(a.status,a.statusText):o(Jt[a.status]||a.status,a.statusText,"text"!==(a.responseType||"text")||"string"!=typeof a.responseText?{binary:a.response}:{text:a.responseText},a.getAllResponseHeaders()))}},a.onload=t(),n=a.onerror=a.ontimeout=t("error"),void 0!==a.onabort?a.onabort=n:a.onreadystatechange=function(){4===a.readyState&&r.setTimeout((function(){t&&n()}))},t=t("abort")
try{a.send(e.hasContent&&e.data||null)}catch(e){if(t)throw e}},abort:function(){t&&t()}}})),E.ajaxPrefilter((function(e){e.crossDomain&&(e.contents.script=!1)})),E.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(e){return E.globalEval(e),e}}}),E.ajaxPrefilter("script",(function(e){void 0===e.cache&&(e.cache=!1),e.crossDomain&&(e.type="GET")})),E.ajaxTransport("script",(function(e){var t,n
if(e.crossDomain||e.scriptAttrs)return{send:function(r,i){t=E("<script>").attr(e.scriptAttrs||{}).prop({charset:e.scriptCharset,src:e.url}).on("load error",n=function(e){t.remove(),n=null,e&&i("error"===e.type?404:200,e.type)}),b.head.appendChild(t[0])},abort:function(){n&&n()}}}))
var en,tn=[],nn=/(=)\?(?=&|$)|\?\?/
E.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=tn.pop()||E.expando+"_"+jt.guid++
return this[e]=!0,e}}),E.ajaxPrefilter("json jsonp",(function(e,t,n){var i,o,s,a=!1!==e.jsonp&&(nn.test(e.url)?"url":"string"==typeof e.data&&0===(e.contentType||"").indexOf("application/x-www-form-urlencoded")&&nn.test(e.data)&&"data")
if(a||"jsonp"===e.dataTypes[0])return i=e.jsonpCallback=v(e.jsonpCallback)?e.jsonpCallback():e.jsonpCallback,a?e[a]=e[a].replace(nn,"$1"+i):!1!==e.jsonp&&(e.url+=(Ot.test(e.url)?"&":"?")+e.jsonp+"="+i),e.converters["script json"]=function(){return s||E.error(i+" was not called"),s[0]},e.dataTypes[0]="json",o=r[i],r[i]=function(){s=arguments},n.always((function(){void 0===o?E(r).removeProp(i):r[i]=o,e[i]&&(e.jsonpCallback=t.jsonpCallback,tn.push(i)),s&&v(o)&&o(s[0]),s=o=void 0})),"script"})),m.createHTMLDocument=((en=b.implementation.createHTMLDocument("").body).innerHTML="<form></form><form></form>",2===en.childNodes.length),E.parseHTML=function(e,t,n){return"string"!=typeof e?[]:("boolean"==typeof t&&(n=t,t=!1),t||(m.createHTMLDocument?((r=(t=b.implementation.createHTMLDocument("")).createElement("base")).href=b.location.href,t.head.appendChild(r)):t=b),o=!n&&[],(i=F.exec(e))?[t.createElement(i[1])]:(i=Re([e],t,o),o&&o.length&&E(o).remove(),E.merge([],i.childNodes)))
var r,i,o},E.fn.load=function(e,t,n){var r,i,o,s=this,a=e.indexOf(" ")
return a>-1&&(r=Et(e.slice(a)),e=e.slice(0,a)),v(t)?(n=t,t=void 0):t&&"object"==typeof t&&(i="POST"),s.length>0&&E.ajax({url:e,type:i||"GET",dataType:"html",data:t}).done((function(e){o=arguments,s.html(r?E("<div>").append(E.parseHTML(e)).find(r):e)})).always(n&&function(e,t){s.each((function(){n.apply(this,o||[e.responseText,t,e])}))}),this},E.expr.pseudos.animated=function(e){return E.grep(E.timers,(function(t){return e===t.elem})).length},E.offset={setOffset:function(e,t,n){var r,i,o,s,a,u,l=E.css(e,"position"),c=E(e),f={}
"static"===l&&(e.style.position="relative"),a=c.offset(),o=E.css(e,"top"),u=E.css(e,"left"),("absolute"===l||"fixed"===l)&&(o+u).indexOf("auto")>-1?(s=(r=c.position()).top,i=r.left):(s=parseFloat(o)||0,i=parseFloat(u)||0),v(t)&&(t=t.call(e,n,E.extend({},a))),null!=t.top&&(f.top=t.top-a.top+s),null!=t.left&&(f.left=t.left-a.left+i),"using"in t?t.using.call(e,f):c.css(f)}},E.fn.extend({offset:function(e){if(arguments.length)return void 0===e?this:this.each((function(t){E.offset.setOffset(this,e,t)}))
var t,n,r=this[0]
return r?r.getClientRects().length?(t=r.getBoundingClientRect(),n=r.ownerDocument.defaultView,{top:t.top+n.pageYOffset,left:t.left+n.pageXOffset}):{top:0,left:0}:void 0},position:function(){if(this[0]){var e,t,n,r=this[0],i={top:0,left:0}
if("fixed"===E.css(r,"position"))t=r.getBoundingClientRect()
else{for(t=this.offset(),n=r.ownerDocument,e=r.offsetParent||n.documentElement;e&&(e===n.body||e===n.documentElement)&&"static"===E.css(e,"position");)e=e.parentNode
e&&e!==r&&1===e.nodeType&&((i=E(e).offset()).top+=E.css(e,"borderTopWidth",!0),i.left+=E.css(e,"borderLeftWidth",!0))}return{top:t.top-i.top-E.css(r,"marginTop",!0),left:t.left-i.left-E.css(r,"marginLeft",!0)}}},offsetParent:function(){return this.map((function(){for(var e=this.offsetParent;e&&"static"===E.css(e,"position");)e=e.offsetParent
return e||ge}))}}),E.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},(function(e,t){var n="pageYOffset"===t
E.fn[e]=function(r){return ee(this,(function(e,r,i){var o
if(y(e)?o=e:9===e.nodeType&&(o=e.defaultView),void 0===i)return o?o[t]:e[r]
o?o.scrollTo(n?o.pageXOffset:i,n?i:o.pageYOffset):e[r]=i}),e,r,arguments.length)}})),E.each(["top","left"],(function(e,t){E.cssHooks[t]=et(m.pixelPosition,(function(e,n){if(n)return n=Ze(e,t),Qe.test(n)?E(e).position()[t]+"px":n}))})),E.each({Height:"height",Width:"width"},(function(e,t){E.each({padding:"inner"+e,content:t,"":"outer"+e},(function(n,r){E.fn[r]=function(i,o){var s=arguments.length&&(n||"boolean"!=typeof i),a=n||(!0===i||!0===o?"margin":"border")
return ee(this,(function(t,n,i){var o
return y(t)?0===r.indexOf("outer")?t["inner"+e]:t.document.documentElement["client"+e]:9===t.nodeType?(o=t.documentElement,Math.max(t.body["scroll"+e],o["scroll"+e],t.body["offset"+e],o["offset"+e],o["client"+e])):void 0===i?E.css(t,n,a):E.style(t,n,i,a)}),t,s?i:void 0,s)}}))})),E.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],(function(e,t){E.fn[t]=function(e){return this.on(t,e)}})),E.fn.extend({bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},delegate:function(e,t,n,r){return this.on(t,e,n,r)},undelegate:function(e,t,n){return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",n)},hover:function(e,t){return this.on("mouseenter",e).on("mouseleave",t||e)}}),E.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),(function(e,t){E.fn[t]=function(e,n){return arguments.length>0?this.on(t,null,e,n):this.trigger(t)}}))
var rn=/^[\s\uFEFF\xA0]+|([^\s\uFEFF\xA0])[\s\uFEFF\xA0]+$/g
E.proxy=function(e,t){var n,r,i
if("string"==typeof t&&(n=e[t],t=e,e=n),v(e))return r=a.call(arguments,2),i=function(){return e.apply(t||this,r.concat(a.call(arguments)))},i.guid=e.guid=e.guid||E.guid++,i},E.holdReady=function(e){e?E.readyWait++:E.ready(!0)},E.isArray=Array.isArray,E.parseJSON=JSON.parse,E.nodeName=S,E.isFunction=v,E.isWindow=y,E.camelCase=ie,E.type=k,E.now=Date.now,E.isNumeric=function(e){var t=E.type(e)
return("number"===t||"string"===t)&&!isNaN(e-parseFloat(e))},E.trim=function(e){return null==e?"":(e+"").replace(rn,"$1")},void 0===(n=function(){return E}.apply(t,[]))||(e.exports=n)
var on=r.jQuery,sn=r.$
return E.noConflict=function(e){return r.$===E&&(r.$=sn),e&&r.jQuery===E&&(r.jQuery=on),E},void 0===i&&(r.jQuery=r.$=E),E}))},615:function(e,t){var n,r
n=function e(){"use strict"
var t="undefined"!=typeof self?self:"undefined"!=typeof window?window:void 0!==t?t:{},n=!t.document&&!!t.postMessage,r=t.IS_PAPA_WORKER||!1,i={},o=0,s={parse:function(n,r){var a=(r=r||{}).dynamicTyping||!1
if(w(a)&&(r.dynamicTypingFunction=a,a={}),r.dynamicTyping=a,r.transform=!!w(r.transform)&&r.transform,r.worker&&s.WORKERS_SUPPORTED){var u=function(){if(!s.WORKERS_SUPPORTED)return!1
var n,r,a=(n=t.URL||t.webkitURL||null,r=e.toString(),s.BLOB_URL||(s.BLOB_URL=n.createObjectURL(new Blob(["var global = (function() { if (typeof self !== 'undefined') { return self; } if (typeof window !== 'undefined') { return window; } if (typeof global !== 'undefined') { return global; } return {}; })(); global.IS_PAPA_WORKER=true; ","(",r,")();"],{type:"text/javascript"})))),u=new t.Worker(a)
return u.onmessage=m,u.id=o++,i[u.id]=u}()
return u.userStep=r.step,u.userChunk=r.chunk,u.userComplete=r.complete,u.userError=r.error,r.step=w(r.step),r.chunk=w(r.chunk),r.complete=w(r.complete),r.error=w(r.error),delete r.worker,void u.postMessage({input:n,config:r,workerId:u.id})}var p=null
return s.NODE_STREAM_INPUT,"string"==typeof n?(n=function(e){return 65279===e.charCodeAt(0)?e.slice(1):e}(n),p=r.download?new l(r):new f(r)):!0===n.readable&&w(n.read)&&w(n.on)?p=new d(r):(t.File&&n instanceof File||n instanceof Object)&&(p=new c(r)),p.stream(n)},unparse:function(e,t){var n=!1,r=!0,i=",",o="\r\n",a='"',u=a+a,l=!1,c=null,f=!1
!function(){if("object"==typeof t){if("string"!=typeof t.delimiter||s.BAD_DELIMITERS.filter((function(e){return-1!==t.delimiter.indexOf(e)})).length||(i=t.delimiter),("boolean"==typeof t.quotes||"function"==typeof t.quotes||Array.isArray(t.quotes))&&(n=t.quotes),"boolean"!=typeof t.skipEmptyLines&&"string"!=typeof t.skipEmptyLines||(l=t.skipEmptyLines),"string"==typeof t.newline&&(o=t.newline),"string"==typeof t.quoteChar&&(a=t.quoteChar),"boolean"==typeof t.header&&(r=t.header),Array.isArray(t.columns)){if(0===t.columns.length)throw new Error("Option columns is empty")
c=t.columns}void 0!==t.escapeChar&&(u=t.escapeChar+a),("boolean"==typeof t.escapeFormulae||t.escapeFormulae instanceof RegExp)&&(f=t.escapeFormulae instanceof RegExp?t.escapeFormulae:/^[=+\-@\t\r].*$/)}}()
var d=new RegExp(h(a),"g")
if("string"==typeof e&&(e=JSON.parse(e)),Array.isArray(e)){if(!e.length||Array.isArray(e[0]))return p(null,e,l)
if("object"==typeof e[0])return p(c||Object.keys(e[0]),e,l)}else if("object"==typeof e)return"string"==typeof e.data&&(e.data=JSON.parse(e.data)),Array.isArray(e.data)&&(e.fields||(e.fields=e.meta&&e.meta.fields||c),e.fields||(e.fields=Array.isArray(e.data[0])?e.fields:"object"==typeof e.data[0]?Object.keys(e.data[0]):[]),Array.isArray(e.data[0])||"object"==typeof e.data[0]||(e.data=[e.data])),p(e.fields||[],e.data||[],l)
throw new Error("Unable to serialize unrecognized input")
function p(e,t,n){var s=""
"string"==typeof e&&(e=JSON.parse(e)),"string"==typeof t&&(t=JSON.parse(t))
var a=Array.isArray(e)&&0<e.length,u=!Array.isArray(t[0])
if(a&&r){for(var l=0;l<e.length;l++)0<l&&(s+=i),s+=g(e[l],l)
0<t.length&&(s+=o)}for(var c=0;c<t.length;c++){var f=a?e.length:t[c].length,d=!1,p=a?0===Object.keys(t[c]).length:0===t[c].length
if(n&&!a&&(d="greedy"===n?""===t[c].join("").trim():1===t[c].length&&0===t[c][0].length),"greedy"===n&&a){for(var h=[],m=0;m<f;m++){var v=u?e[m]:m
h.push(t[c][v])}d=""===h.join("").trim()}if(!d){for(var y=0;y<f;y++){0<y&&!p&&(s+=i)
var b=a&&u?e[y]:y
s+=g(t[c][b],y)}c<t.length-1&&(!n||0<f&&!p)&&(s+=o)}}return s}function g(e,t){if(null==e)return""
if(e.constructor===Date)return JSON.stringify(e).slice(1,25)
var r=!1
f&&"string"==typeof e&&f.test(e)&&(e="'"+e,r=!0)
var o=e.toString().replace(d,u)
return(r=r||!0===n||"function"==typeof n&&n(e,t)||Array.isArray(n)&&n[t]||function(e,t){for(var n=0;n<t.length;n++)if(-1<e.indexOf(t[n]))return!0
return!1}(o,s.BAD_DELIMITERS)||-1<o.indexOf(i)||" "===o.charAt(0)||" "===o.charAt(o.length-1))?a+o+a:o}}}
if(s.RECORD_SEP=String.fromCharCode(30),s.UNIT_SEP=String.fromCharCode(31),s.BYTE_ORDER_MARK="\ufeff",s.BAD_DELIMITERS=["\r","\n",'"',s.BYTE_ORDER_MARK],s.WORKERS_SUPPORTED=!n&&!!t.Worker,s.NODE_STREAM_INPUT=1,s.LocalChunkSize=10485760,s.RemoteChunkSize=5242880,s.DefaultDelimiter=",",s.Parser=g,s.ParserHandle=p,s.NetworkStreamer=l,s.FileStreamer=c,s.StringStreamer=f,s.ReadableStreamStreamer=d,t.jQuery){var a=t.jQuery
a.fn.parse=function(e){var n=e.config||{},r=[]
return this.each((function(e){if("INPUT"!==a(this).prop("tagName").toUpperCase()||"file"!==a(this).attr("type").toLowerCase()||!t.FileReader||!this.files||0===this.files.length)return!0
for(var i=0;i<this.files.length;i++)r.push({file:this.files[i],inputElem:this,instanceConfig:a.extend({},n)})})),i(),this
function i(){if(0!==r.length){var t,n,i,u=r[0]
if(w(e.before)){var l=e.before(u.file,u.inputElem)
if("object"==typeof l){if("abort"===l.action)return t=u.file,n=u.inputElem,i=l.reason,void(w(e.error)&&e.error({name:"AbortError"},t,n,i))
if("skip"===l.action)return void o()
"object"==typeof l.config&&(u.instanceConfig=a.extend(u.instanceConfig,l.config))}else if("skip"===l)return void o()}var c=u.instanceConfig.complete
u.instanceConfig.complete=function(e){w(c)&&c(e,u.file,u.inputElem),o()},s.parse(u.file,u.instanceConfig)}else w(e.complete)&&e.complete()}function o(){r.splice(0,1),i()}}}function u(e){this._handle=null,this._finished=!1,this._completed=!1,this._halted=!1,this._input=null,this._baseIndex=0,this._partialLine="",this._rowCount=0,this._start=0,this._nextChunk=null,this.isFirstChunk=!0,this._completeResults={data:[],errors:[],meta:{}},function(e){var t=b(e)
t.chunkSize=parseInt(t.chunkSize),e.step||e.chunk||(t.chunkSize=null),this._handle=new p(t),(this._handle.streamer=this)._config=t}.call(this,e),this.parseChunk=function(e,n){if(this.isFirstChunk&&w(this._config.beforeFirstChunk)){var i=this._config.beforeFirstChunk(e)
void 0!==i&&(e=i)}this.isFirstChunk=!1,this._halted=!1
var o=this._partialLine+e
this._partialLine=""
var a=this._handle.parse(o,this._baseIndex,!this._finished)
if(!this._handle.paused()&&!this._handle.aborted()){var u=a.meta.cursor
this._finished||(this._partialLine=o.substring(u-this._baseIndex),this._baseIndex=u),a&&a.data&&(this._rowCount+=a.data.length)
var l=this._finished||this._config.preview&&this._rowCount>=this._config.preview
if(r)t.postMessage({results:a,workerId:s.WORKER_ID,finished:l})
else if(w(this._config.chunk)&&!n){if(this._config.chunk(a,this._handle),this._handle.paused()||this._handle.aborted())return void(this._halted=!0)
a=void 0,this._completeResults=void 0}return this._config.step||this._config.chunk||(this._completeResults.data=this._completeResults.data.concat(a.data),this._completeResults.errors=this._completeResults.errors.concat(a.errors),this._completeResults.meta=a.meta),this._completed||!l||!w(this._config.complete)||a&&a.meta.aborted||(this._config.complete(this._completeResults,this._input),this._completed=!0),l||a&&a.meta.paused||this._nextChunk(),a}this._halted=!0},this._sendError=function(e){w(this._config.error)?this._config.error(e):r&&this._config.error&&t.postMessage({workerId:s.WORKER_ID,error:e,finished:!1})}}function l(e){var t;(e=e||{}).chunkSize||(e.chunkSize=s.RemoteChunkSize),u.call(this,e),this._nextChunk=n?function(){this._readChunk(),this._chunkLoaded()}:function(){this._readChunk()},this.stream=function(e){this._input=e,this._nextChunk()},this._readChunk=function(){if(this._finished)this._chunkLoaded()
else{if(t=new XMLHttpRequest,this._config.withCredentials&&(t.withCredentials=this._config.withCredentials),n||(t.onload=x(this._chunkLoaded,this),t.onerror=x(this._chunkError,this)),t.open(this._config.downloadRequestBody?"POST":"GET",this._input,!n),this._config.downloadRequestHeaders){var e=this._config.downloadRequestHeaders
for(var r in e)t.setRequestHeader(r,e[r])}if(this._config.chunkSize){var i=this._start+this._config.chunkSize-1
t.setRequestHeader("Range","bytes="+this._start+"-"+i)}try{t.send(this._config.downloadRequestBody)}catch(e){this._chunkError(e.message)}n&&0===t.status&&this._chunkError()}},this._chunkLoaded=function(){4===t.readyState&&(t.status<200||400<=t.status?this._chunkError():(this._start+=this._config.chunkSize?this._config.chunkSize:t.responseText.length,this._finished=!this._config.chunkSize||this._start>=function(e){var t=e.getResponseHeader("Content-Range")
return null===t?-1:parseInt(t.substring(t.lastIndexOf("/")+1))}(t),this.parseChunk(t.responseText)))},this._chunkError=function(e){var n=t.statusText||e
this._sendError(new Error(n))}}function c(e){var t,n;(e=e||{}).chunkSize||(e.chunkSize=s.LocalChunkSize),u.call(this,e)
var r="undefined"!=typeof FileReader
this.stream=function(e){this._input=e,n=e.slice||e.webkitSlice||e.mozSlice,r?((t=new FileReader).onload=x(this._chunkLoaded,this),t.onerror=x(this._chunkError,this)):t=new FileReaderSync,this._nextChunk()},this._nextChunk=function(){this._finished||this._config.preview&&!(this._rowCount<this._config.preview)||this._readChunk()},this._readChunk=function(){var e=this._input
if(this._config.chunkSize){var i=Math.min(this._start+this._config.chunkSize,this._input.size)
e=n.call(e,this._start,i)}var o=t.readAsText(e,this._config.encoding)
r||this._chunkLoaded({target:{result:o}})},this._chunkLoaded=function(e){this._start+=this._config.chunkSize,this._finished=!this._config.chunkSize||this._start>=this._input.size,this.parseChunk(e.target.result)},this._chunkError=function(){this._sendError(t.error)}}function f(e){var t
u.call(this,e=e||{}),this.stream=function(e){return t=e,this._nextChunk()},this._nextChunk=function(){if(!this._finished){var e,n=this._config.chunkSize
return n?(e=t.substring(0,n),t=t.substring(n)):(e=t,t=""),this._finished=!t,this.parseChunk(e)}}}function d(e){u.call(this,e=e||{})
var t=[],n=!0,r=!1
this.pause=function(){u.prototype.pause.apply(this,arguments),this._input.pause()},this.resume=function(){u.prototype.resume.apply(this,arguments),this._input.resume()},this.stream=function(e){this._input=e,this._input.on("data",this._streamData),this._input.on("end",this._streamEnd),this._input.on("error",this._streamError)},this._checkIsFinished=function(){r&&1===t.length&&(this._finished=!0)},this._nextChunk=function(){this._checkIsFinished(),t.length?this.parseChunk(t.shift()):n=!0},this._streamData=x((function(e){try{t.push("string"==typeof e?e:e.toString(this._config.encoding)),n&&(n=!1,this._checkIsFinished(),this.parseChunk(t.shift()))}catch(e){this._streamError(e)}}),this),this._streamError=x((function(e){this._streamCleanUp(),this._sendError(e)}),this),this._streamEnd=x((function(){this._streamCleanUp(),r=!0,this._streamData("")}),this),this._streamCleanUp=x((function(){this._input.removeListener("data",this._streamData),this._input.removeListener("end",this._streamEnd),this._input.removeListener("error",this._streamError)}),this)}function p(e){var t,n,r,i=Math.pow(2,53),o=-i,a=/^\s*-?(\d+\.?|\.\d+|\d+\.\d+)([eE][-+]?\d+)?\s*$/,u=/^((\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z)))$/,l=this,c=0,f=0,d=!1,p=!1,m=[],v={data:[],errors:[],meta:{}}
if(w(e.step)){var y=e.step
e.step=function(t){if(v=t,T())k()
else{if(k(),0===v.data.length)return
c+=t.data.length,e.preview&&c>e.preview?n.abort():(v.data=v.data[0],y(v,l))}}}function x(t){return"greedy"===e.skipEmptyLines?""===t.join("").trim():1===t.length&&0===t[0].length}function k(){return v&&r&&(E("Delimiter","UndetectableDelimiter","Unable to auto-detect delimiting character; defaulted to '"+s.DefaultDelimiter+"'"),r=!1),e.skipEmptyLines&&(v.data=v.data.filter((function(e){return!x(e)}))),T()&&function(){if(v)if(Array.isArray(v.data[0])){for(var t=0;T()&&t<v.data.length;t++)v.data[t].forEach(n)
v.data.splice(0,1)}else v.data.forEach(n)
function n(t,n){w(e.transformHeader)&&(t=e.transformHeader(t,n)),m.push(t)}}(),function(){if(!v||!e.header&&!e.dynamicTyping&&!e.transform)return v
function t(t,n){var r,i=e.header?{}:[]
for(r=0;r<t.length;r++){var o=r,s=t[r]
e.header&&(o=r>=m.length?"__parsed_extra":m[r]),e.transform&&(s=e.transform(s,o)),s=C(o,s),"__parsed_extra"===o?(i[o]=i[o]||[],i[o].push(s)):i[o]=s}return e.header&&(r>m.length?E("FieldMismatch","TooManyFields","Too many fields: expected "+m.length+" fields but parsed "+r,f+n):r<m.length&&E("FieldMismatch","TooFewFields","Too few fields: expected "+m.length+" fields but parsed "+r,f+n)),i}var n=1
return!v.data.length||Array.isArray(v.data[0])?(v.data=v.data.map(t),n=v.data.length):v.data=t(v.data,0),e.header&&v.meta&&(v.meta.fields=m),f+=n,v}()}function T(){return e.header&&0===m.length}function C(t,n){return r=t,e.dynamicTypingFunction&&void 0===e.dynamicTyping[r]&&(e.dynamicTyping[r]=e.dynamicTypingFunction(r)),!0===(e.dynamicTyping[r]||e.dynamicTyping)?"true"===n||"TRUE"===n||"false"!==n&&"FALSE"!==n&&(function(e){if(a.test(e)){var t=parseFloat(e)
if(o<t&&t<i)return!0}return!1}(n)?parseFloat(n):u.test(n)?new Date(n):""===n?null:n):n
var r}function E(e,t,n,r){var i={type:e,code:t,message:n}
void 0!==r&&(i.row=r),v.errors.push(i)}this.parse=function(i,o,a){var u=e.quoteChar||'"'
if(e.newline||(e.newline=function(e,t){e=e.substring(0,1048576)
var n=new RegExp(h(t)+"([^]*?)"+h(t),"gm"),r=(e=e.replace(n,"")).split("\r"),i=e.split("\n"),o=1<i.length&&i[0].length<r[0].length
if(1===r.length||o)return"\n"
for(var s=0,a=0;a<r.length;a++)"\n"===r[a][0]&&s++
return s>=r.length/2?"\r\n":"\r"}(i,u)),r=!1,e.delimiter)w(e.delimiter)&&(e.delimiter=e.delimiter(i),v.meta.delimiter=e.delimiter)
else{var l=function(t,n,r,i,o){var a,u,l,c
o=o||[",","\t","|",";",s.RECORD_SEP,s.UNIT_SEP]
for(var f=0;f<o.length;f++){var d=o[f],p=0,h=0,m=0
l=void 0
for(var v=new g({comments:i,delimiter:d,newline:n,preview:10}).parse(t),y=0;y<v.data.length;y++)if(r&&x(v.data[y]))m++
else{var b=v.data[y].length
h+=b,void 0!==l?0<b&&(p+=Math.abs(b-l),l=b):l=b}0<v.data.length&&(h/=v.data.length-m),(void 0===u||p<=u)&&(void 0===c||c<h)&&1.99<h&&(u=p,a=d,c=h)}return{successful:!!(e.delimiter=a),bestDelimiter:a}}(i,e.newline,e.skipEmptyLines,e.comments,e.delimitersToGuess)
l.successful?e.delimiter=l.bestDelimiter:(r=!0,e.delimiter=s.DefaultDelimiter),v.meta.delimiter=e.delimiter}var c=b(e)
return e.preview&&e.header&&c.preview++,t=i,n=new g(c),v=n.parse(t,o,a),k(),d?{meta:{paused:!0}}:v||{meta:{paused:!1}}},this.paused=function(){return d},this.pause=function(){d=!0,n.abort(),t=w(e.chunk)?"":t.substring(n.getCharIndex())},this.resume=function(){l.streamer._halted?(d=!1,l.streamer.parseChunk(t,!0)):setTimeout(l.resume,3)},this.aborted=function(){return p},this.abort=function(){p=!0,n.abort(),v.meta.aborted=!0,w(e.complete)&&e.complete(v),t=""}}function h(e){return e.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function g(e){var t,n=(e=e||{}).delimiter,r=e.newline,i=e.comments,o=e.step,a=e.preview,u=e.fastMode,l=t=void 0===e.quoteChar||null===e.quoteChar?'"':e.quoteChar
if(void 0!==e.escapeChar&&(l=e.escapeChar),("string"!=typeof n||-1<s.BAD_DELIMITERS.indexOf(n))&&(n=","),i===n)throw new Error("Comment character same as delimiter")
!0===i?i="#":("string"!=typeof i||-1<s.BAD_DELIMITERS.indexOf(i))&&(i=!1),"\n"!==r&&"\r"!==r&&"\r\n"!==r&&(r="\n")
var c=0,f=!1
this.parse=function(s,d,p){if("string"!=typeof s)throw new Error("Input must be a string")
var g=s.length,m=n.length,v=r.length,y=i.length,b=w(o),x=[],k=[],T=[],C=c=0
if(!s)return X()
if(e.header&&!d){var E=s.split(r)[0].split(n),_=[],S={},D=!1
for(var A in E){var j=E[A]
w(e.transformHeader)&&(j=e.transformHeader(j,A))
var O=j,R=S[j]||0
for(0<R&&(D=!0,O=j+"_"+R),S[j]=R+1;_.includes(O);)O=O+"_"+R
_.push(O)}if(D){var L=s.split(r)
L[0]=_.join(n),s=L.join(r)}}if(u||!1!==u&&-1===s.indexOf(t)){for(var N=s.split(r),q=0;q<N.length;q++){if(T=N[q],c+=T.length,q!==N.length-1)c+=r.length
else if(p)return X()
if(!i||T.substring(0,y)!==i){if(b){if(x=[],z(T.split(n)),K(),f)return X()}else z(T.split(n))
if(a&&a<=q)return x=x.slice(0,a),X(!0)}}return X()}for(var I=s.indexOf(n,c),H=s.indexOf(r,c),P=new RegExp(h(l)+h(t),"g"),M=s.indexOf(t,c);;)if(s[c]!==t)if(i&&0===T.length&&s.substring(c,c+y)===i){if(-1===H)return X()
c=H+v,H=s.indexOf(r,c),I=s.indexOf(n,c)}else if(-1!==I&&(I<H||-1===H))T.push(s.substring(c,I)),c=I+m,I=s.indexOf(n,c)
else{if(-1===H)break
if(T.push(s.substring(c,H)),U(H+v),b&&(K(),f))return X()
if(a&&x.length>=a)return X(!0)}else for(M=c,c++;;){if(-1===(M=s.indexOf(t,M+1)))return p||k.push({type:"Quotes",code:"MissingQuotes",message:"Quoted field unterminated",row:x.length,index:c}),$()
if(M===g-1)return $(s.substring(c,M).replace(P,t))
if(t!==l||s[M+1]!==l){if(t===l||0===M||s[M-1]!==l){-1!==I&&I<M+1&&(I=s.indexOf(n,M+1)),-1!==H&&H<M+1&&(H=s.indexOf(r,M+1))
var F=B(-1===H?I:Math.min(I,H))
if(s.substr(M+1+F,m)===n){T.push(s.substring(c,M).replace(P,t)),s[c=M+1+F+m]!==t&&(M=s.indexOf(t,c)),I=s.indexOf(n,c),H=s.indexOf(r,c)
break}var W=B(H)
if(s.substring(M+1+W,M+1+W+v)===r){if(T.push(s.substring(c,M).replace(P,t)),U(M+1+W+v),I=s.indexOf(n,c),M=s.indexOf(t,c),b&&(K(),f))return X()
if(a&&x.length>=a)return X(!0)
break}k.push({type:"Quotes",code:"InvalidQuotes",message:"Trailing quote on quoted field is malformed",row:x.length,index:c}),M++}}else M++}return $()
function z(e){x.push(e),C=c}function B(e){var t=0
if(-1!==e){var n=s.substring(M+1,e)
n&&""===n.trim()&&(t=n.length)}return t}function $(e){return p||(void 0===e&&(e=s.substring(c)),T.push(e),c=g,z(T),b&&K()),X()}function U(e){c=e,z(T),T=[],H=s.indexOf(r,c)}function X(e){return{data:x,errors:k,meta:{delimiter:n,linebreak:r,aborted:f,truncated:!!e,cursor:C+(d||0)}}}function K(){o(X()),x=[],k=[]}},this.abort=function(){f=!0},this.getCharIndex=function(){return c}}function m(e){var t=e.data,n=i[t.workerId],r=!1
if(t.error)n.userError(t.error,t.file)
else if(t.results&&t.results.data){var o={abort:function(){r=!0,v(t.workerId,{data:[],errors:[],meta:{aborted:!0}})},pause:y,resume:y}
if(w(n.userStep)){for(var s=0;s<t.results.data.length&&(n.userStep({data:t.results.data[s],errors:t.results.errors,meta:t.results.meta},o),!r);s++);delete t.results}else w(n.userChunk)&&(n.userChunk(t.results,o,t.file),delete t.results)}t.finished&&!r&&v(t.workerId,t.results)}function v(e,t){var n=i[e]
w(n.userComplete)&&n.userComplete(t),n.terminate(),delete i[e]}function y(){throw new Error("Not implemented.")}function b(e){if("object"!=typeof e||null===e)return e
var t=Array.isArray(e)?[]:{}
for(var n in e)t[n]=b(e[n])
return t}function x(e,t){return function(){e.apply(t,arguments)}}function w(e){return"function"==typeof e}return r&&(t.onmessage=function(e){var n=e.data
if(void 0===s.WORKER_ID&&n&&(s.WORKER_ID=n.workerId),"string"==typeof n.input)t.postMessage({workerId:s.WORKER_ID,results:s.parse(n.input,n.config),finished:!0})
else if(t.File&&n.input instanceof File||n.input instanceof Object){var r=s.parse(n.input,n.config)
r&&t.postMessage({workerId:s.WORKER_ID,results:r,finished:!0})}}),(l.prototype=Object.create(u.prototype)).constructor=l,(c.prototype=Object.create(u.prototype)).constructor=c,(f.prototype=Object.create(f.prototype)).constructor=f,(d.prototype=Object.create(u.prototype)).constructor=d,s},void 0===(r=n.apply(t,[]))||(e.exports=r)}}])
