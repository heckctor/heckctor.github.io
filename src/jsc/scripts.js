/*! jQuery v2.1.4 | (c) 2005, 2015 jQuery Foundation, Inc. | jquery.org/license */
!function(e,t){"object"==typeof module&&"object"==typeof module.exports?module.exports=e.document?t(e,!0):function(e){if(!e.document)throw new Error("jQuery requires a window with a document");return t(e)}:t(e)}("undefined"!=typeof window?window:this,function(e,t){function n(e){var t="length"in e&&e.length,n=Z.type(e);return"function"!==n&&!Z.isWindow(e)&&(!(1!==e.nodeType||!t)||("array"===n||0===t||"number"==typeof t&&t>0&&t-1 in e))}function r(e,t,n){if(Z.isFunction(t))return Z.grep(e,function(e,r){return!!t.call(e,r,e)!==n});if(t.nodeType)return Z.grep(e,function(e){return e===t!==n});if("string"==typeof t){if(ae.test(t))return Z.filter(t,e,n);t=Z.filter(t,e)}return Z.grep(e,function(e){return U.call(t,e)>=0!==n})}function i(e,t){for(;(e=e[t])&&1!==e.nodeType;);return e}function o(e){var t=he[e]={};return Z.each(e.match(de)||[],function(e,n){t[n]=!0}),t}function s(){J.removeEventListener("DOMContentLoaded",s,!1),e.removeEventListener("load",s,!1),Z.ready()}function a(){Object.defineProperty(this.cache={},0,{get:function(){return{}}}),this.expando=Z.expando+a.uid++}function u(e,t,n){var r;if(void 0===n&&1===e.nodeType)if(r="data-"+t.replace(be,"-$1").toLowerCase(),n=e.getAttribute(r),"string"==typeof n){try{n="true"===n||"false"!==n&&("null"===n?null:+n+""===n?+n:xe.test(n)?Z.parseJSON(n):n)}catch(e){}ye.set(e,t,n)}else n=void 0;return n}function l(){return!0}function c(){return!1}function f(){try{return J.activeElement}catch(e){}}function p(e,t){return Z.nodeName(e,"table")&&Z.nodeName(11!==t.nodeType?t:t.firstChild,"tr")?e.getElementsByTagName("tbody")[0]||e.appendChild(e.ownerDocument.createElement("tbody")):e}function d(e){return e.type=(null!==e.getAttribute("type"))+"/"+e.type,e}function h(e){var t=Pe.exec(e.type);return t?e.type=t[1]:e.removeAttribute("type"),e}function g(e,t){for(var n=0,r=e.length;r>n;n++)ve.set(e[n],"globalEval",!t||ve.get(t[n],"globalEval"))}function m(e,t){var n,r,i,o,s,a,u,l;if(1===t.nodeType){if(ve.hasData(e)&&(o=ve.access(e),s=ve.set(t,o),l=o.events)){delete s.handle,s.events={};for(i in l)for(n=0,r=l[i].length;r>n;n++)Z.event.add(t,i,l[i][n])}ye.hasData(e)&&(a=ye.access(e),u=Z.extend({},a),ye.set(t,u))}}function v(e,t){var n=e.getElementsByTagName?e.getElementsByTagName(t||"*"):e.querySelectorAll?e.querySelectorAll(t||"*"):[];return void 0===t||t&&Z.nodeName(e,t)?Z.merge([e],n):n}function y(e,t){var n=t.nodeName.toLowerCase();"input"===n&&Ne.test(e.type)?t.checked=e.checked:("input"===n||"textarea"===n)&&(t.defaultValue=e.defaultValue)}function x(t,n){var r,i=Z(n.createElement(t)).appendTo(n.body),o=e.getDefaultComputedStyle&&(r=e.getDefaultComputedStyle(i[0]))?r.display:Z.css(i[0],"display");return i.detach(),o}function b(e){var t=J,n=$e[e];return n||(n=x(e,t),"none"!==n&&n||(We=(We||Z("<iframe frameborder='0' width='0' height='0'/>")).appendTo(t.documentElement),t=We[0].contentDocument,t.write(),t.close(),n=x(e,t),We.detach()),$e[e]=n),n}function w(e,t,n){var r,i,o,s,a=e.style;return n=n||_e(e),n&&(s=n.getPropertyValue(t)||n[t]),n&&(""!==s||Z.contains(e.ownerDocument,e)||(s=Z.style(e,t)),Be.test(s)&&Ie.test(t)&&(r=a.width,i=a.minWidth,o=a.maxWidth,a.minWidth=a.maxWidth=a.width=s,s=n.width,a.width=r,a.minWidth=i,a.maxWidth=o)),void 0!==s?s+"":s}function T(e,t){return{get:function(){return e()?void delete this.get:(this.get=t).apply(this,arguments)}}}function C(e,t){if(t in e)return t;for(var n=t[0].toUpperCase()+t.slice(1),r=t,i=Ge.length;i--;)if(t=Ge[i]+n,t in e)return t;return r}function N(e,t,n){var r=Xe.exec(t);return r?Math.max(0,r[1]-(n||0))+(r[2]||"px"):t}function k(e,t,n,r,i){for(var o=n===(r?"border":"content")?4:"width"===t?1:0,s=0;4>o;o+=2)"margin"===n&&(s+=Z.css(e,n+Te[o],!0,i)),r?("content"===n&&(s-=Z.css(e,"padding"+Te[o],!0,i)),"margin"!==n&&(s-=Z.css(e,"border"+Te[o]+"Width",!0,i))):(s+=Z.css(e,"padding"+Te[o],!0,i),"padding"!==n&&(s+=Z.css(e,"border"+Te[o]+"Width",!0,i)));return s}function E(e,t,n){var r=!0,i="width"===t?e.offsetWidth:e.offsetHeight,o=_e(e),s="border-box"===Z.css(e,"boxSizing",!1,o);if(0>=i||null==i){if(i=w(e,t,o),(0>i||null==i)&&(i=e.style[t]),Be.test(i))return i;r=s&&(Q.boxSizingReliable()||i===e.style[t]),i=parseFloat(i)||0}return i+k(e,t,n||(s?"border":"content"),r,o)+"px"}function S(e,t){for(var n,r,i,o=[],s=0,a=e.length;a>s;s++)r=e[s],r.style&&(o[s]=ve.get(r,"olddisplay"),n=r.style.display,t?(o[s]||"none"!==n||(r.style.display=""),""===r.style.display&&Ce(r)&&(o[s]=ve.access(r,"olddisplay",b(r.nodeName)))):(i=Ce(r),"none"===n&&i||ve.set(r,"olddisplay",i?n:Z.css(r,"display"))));for(s=0;a>s;s++)r=e[s],r.style&&(t&&"none"!==r.style.display&&""!==r.style.display||(r.style.display=t?o[s]||"":"none"));return e}function D(e,t,n,r,i){return new D.prototype.init(e,t,n,r,i)}function j(){return setTimeout(function(){Qe=void 0}),Qe=Z.now()}function A(e,t){var n,r=0,i={height:e};for(t=t?1:0;4>r;r+=2-t)n=Te[r],i["margin"+n]=i["padding"+n]=e;return t&&(i.opacity=i.width=e),i}function L(e,t,n){for(var r,i=(nt[t]||[]).concat(nt["*"]),o=0,s=i.length;s>o;o++)if(r=i[o].call(n,t,e))return r}function q(e,t,n){var r,i,o,s,a,u,l,c,f=this,p={},d=e.style,h=e.nodeType&&Ce(e),g=ve.get(e,"fxshow");n.queue||(a=Z._queueHooks(e,"fx"),null==a.unqueued&&(a.unqueued=0,u=a.empty.fire,a.empty.fire=function(){a.unqueued||u()}),a.unqueued++,f.always(function(){f.always(function(){a.unqueued--,Z.queue(e,"fx").length||a.empty.fire()})})),1===e.nodeType&&("height"in t||"width"in t)&&(n.overflow=[d.overflow,d.overflowX,d.overflowY],l=Z.css(e,"display"),c="none"===l?ve.get(e,"olddisplay")||b(e.nodeName):l,"inline"===c&&"none"===Z.css(e,"float")&&(d.display="inline-block")),n.overflow&&(d.overflow="hidden",f.always(function(){d.overflow=n.overflow[0],d.overflowX=n.overflow[1],d.overflowY=n.overflow[2]}));for(r in t)if(i=t[r],Ke.exec(i)){if(delete t[r],o=o||"toggle"===i,i===(h?"hide":"show")){if("show"!==i||!g||void 0===g[r])continue;h=!0}p[r]=g&&g[r]||Z.style(e,r)}else l=void 0;if(Z.isEmptyObject(p))"inline"===("none"===l?b(e.nodeName):l)&&(d.display=l);else{g?"hidden"in g&&(h=g.hidden):g=ve.access(e,"fxshow",{}),o&&(g.hidden=!h),h?Z(e).show():f.done(function(){Z(e).hide()}),f.done(function(){var t;ve.remove(e,"fxshow");for(t in p)Z.style(e,t,p[t])});for(r in p)s=L(h?g[r]:0,r,f),r in g||(g[r]=s.start,h&&(s.end=s.start,s.start="width"===r||"height"===r?1:0))}}function H(e,t){var n,r,i,o,s;for(n in e)if(r=Z.camelCase(n),i=t[r],o=e[n],Z.isArray(o)&&(i=o[1],o=e[n]=o[0]),n!==r&&(e[r]=o,delete e[n]),s=Z.cssHooks[r],s&&"expand"in s){o=s.expand(o),delete e[r];for(n in o)n in e||(e[n]=o[n],t[n]=i)}else t[r]=i}function O(e,t,n){var r,i,o=0,s=tt.length,a=Z.Deferred().always(function(){delete u.elem}),u=function(){if(i)return!1;for(var t=Qe||j(),n=Math.max(0,l.startTime+l.duration-t),r=n/l.duration||0,o=1-r,s=0,u=l.tweens.length;u>s;s++)l.tweens[s].run(o);return a.notifyWith(e,[l,o,n]),1>o&&u?n:(a.resolveWith(e,[l]),!1)},l=a.promise({elem:e,props:Z.extend({},t),opts:Z.extend(!0,{specialEasing:{}},n),originalProperties:t,originalOptions:n,startTime:Qe||j(),duration:n.duration,tweens:[],createTween:function(t,n){var r=Z.Tween(e,l.opts,t,n,l.opts.specialEasing[t]||l.opts.easing);return l.tweens.push(r),r},stop:function(t){var n=0,r=t?l.tweens.length:0;if(i)return this;for(i=!0;r>n;n++)l.tweens[n].run(1);return t?a.resolveWith(e,[l,t]):a.rejectWith(e,[l,t]),this}}),c=l.props;for(H(c,l.opts.specialEasing);s>o;o++)if(r=tt[o].call(l,e,c,l.opts))return r;return Z.map(c,L,l),Z.isFunction(l.opts.start)&&l.opts.start.call(e,l),Z.fx.timer(Z.extend(u,{elem:e,anim:l,queue:l.opts.queue})),l.progress(l.opts.progress).done(l.opts.done,l.opts.complete).fail(l.opts.fail).always(l.opts.always)}function F(e){return function(t,n){"string"!=typeof t&&(n=t,t="*");var r,i=0,o=t.toLowerCase().match(de)||[];if(Z.isFunction(n))for(;r=o[i++];)"+"===r[0]?(r=r.slice(1)||"*",(e[r]=e[r]||[]).unshift(n)):(e[r]=e[r]||[]).push(n)}}function P(e,t,n,r){function i(a){var u;return o[a]=!0,Z.each(e[a]||[],function(e,a){var l=a(t,n,r);return"string"!=typeof l||s||o[l]?s?!(u=l):void 0:(t.dataTypes.unshift(l),i(l),!1)}),u}var o={},s=e===xt;return i(t.dataTypes[0])||!o["*"]&&i("*")}function R(e,t){var n,r,i=Z.ajaxSettings.flatOptions||{};for(n in t)void 0!==t[n]&&((i[n]?e:r||(r={}))[n]=t[n]);return r&&Z.extend(!0,e,r),e}function M(e,t,n){for(var r,i,o,s,a=e.contents,u=e.dataTypes;"*"===u[0];)u.shift(),void 0===r&&(r=e.mimeType||t.getResponseHeader("Content-Type"));if(r)for(i in a)if(a[i]&&a[i].test(r)){u.unshift(i);break}if(u[0]in n)o=u[0];else{for(i in n){if(!u[0]||e.converters[i+" "+u[0]]){o=i;break}s||(s=i)}o=o||s}return o?(o!==u[0]&&u.unshift(o),n[o]):void 0}function W(e,t,n,r){var i,o,s,a,u,l={},c=e.dataTypes.slice();if(c[1])for(s in e.converters)l[s.toLowerCase()]=e.converters[s];for(o=c.shift();o;)if(e.responseFields[o]&&(n[e.responseFields[o]]=t),!u&&r&&e.dataFilter&&(t=e.dataFilter(t,e.dataType)),u=o,o=c.shift())if("*"===o)o=u;else if("*"!==u&&u!==o){if(s=l[u+" "+o]||l["* "+o],!s)for(i in l)if(a=i.split(" "),a[1]===o&&(s=l[u+" "+a[0]]||l["* "+a[0]])){s===!0?s=l[i]:l[i]!==!0&&(o=a[0],c.unshift(a[1]));break}if(s!==!0)if(s&&e.throws)t=s(t);else try{t=s(t)}catch(e){return{state:"parsererror",error:s?e:"No conversion from "+u+" to "+o}}}return{state:"success",data:t}}function $(e,t,n,r){var i;if(Z.isArray(t))Z.each(t,function(t,i){n||Nt.test(e)?r(e,i):$(e+"["+("object"==typeof i?t:"")+"]",i,n,r)});else if(n||"object"!==Z.type(t))r(e,t);else for(i in t)$(e+"["+i+"]",t[i],n,r)}function I(e){return Z.isWindow(e)?e:9===e.nodeType&&e.defaultView}var B=[],_=B.slice,z=B.concat,X=B.push,U=B.indexOf,V={},Y=V.toString,G=V.hasOwnProperty,Q={},J=e.document,K="2.1.4",Z=function(e,t){return new Z.fn.init(e,t)},ee=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,te=/^-ms-/,ne=/-([\da-z])/gi,re=function(e,t){return t.toUpperCase()};Z.fn=Z.prototype={jquery:K,constructor:Z,selector:"",length:0,toArray:function(){return _.call(this)},get:function(e){return null!=e?0>e?this[e+this.length]:this[e]:_.call(this)},pushStack:function(e){var t=Z.merge(this.constructor(),e);return t.prevObject=this,t.context=this.context,t},each:function(e,t){return Z.each(this,e,t)},map:function(e){return this.pushStack(Z.map(this,function(t,n){return e.call(t,n,t)}))},slice:function(){return this.pushStack(_.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(e){var t=this.length,n=+e+(0>e?t:0);return this.pushStack(n>=0&&t>n?[this[n]]:[])},end:function(){return this.prevObject||this.constructor(null)},push:X,sort:B.sort,splice:B.splice},Z.extend=Z.fn.extend=function(){var e,t,n,r,i,o,s=arguments[0]||{},a=1,u=arguments.length,l=!1;for("boolean"==typeof s&&(l=s,s=arguments[a]||{},a++),"object"==typeof s||Z.isFunction(s)||(s={}),a===u&&(s=this,a--);u>a;a++)if(null!=(e=arguments[a]))for(t in e)n=s[t],r=e[t],s!==r&&(l&&r&&(Z.isPlainObject(r)||(i=Z.isArray(r)))?(i?(i=!1,o=n&&Z.isArray(n)?n:[]):o=n&&Z.isPlainObject(n)?n:{},s[t]=Z.extend(l,o,r)):void 0!==r&&(s[t]=r));return s},Z.extend({expando:"jQuery"+(K+Math.random()).replace(/\D/g,""),isReady:!0,error:function(e){throw new Error(e)},noop:function(){},isFunction:function(e){return"function"===Z.type(e)},isArray:Array.isArray,isWindow:function(e){return null!=e&&e===e.window},isNumeric:function(e){return!Z.isArray(e)&&e-parseFloat(e)+1>=0},isPlainObject:function(e){return"object"===Z.type(e)&&!e.nodeType&&!Z.isWindow(e)&&!(e.constructor&&!G.call(e.constructor.prototype,"isPrototypeOf"))},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},type:function(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?V[Y.call(e)]||"object":typeof e},globalEval:function(e){var t,n=eval;e=Z.trim(e),e&&(1===e.indexOf("use strict")?(t=J.createElement("script"),t.text=e,J.head.appendChild(t).parentNode.removeChild(t)):n(e))},camelCase:function(e){return e.replace(te,"ms-").replace(ne,re)},nodeName:function(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()},each:function(e,t,r){var i,o=0,s=e.length,a=n(e);if(r){if(a)for(;s>o&&(i=t.apply(e[o],r),i!==!1);o++);else for(o in e)if(i=t.apply(e[o],r),i===!1)break}else if(a)for(;s>o&&(i=t.call(e[o],o,e[o]),i!==!1);o++);else for(o in e)if(i=t.call(e[o],o,e[o]),i===!1)break;return e},trim:function(e){return null==e?"":(e+"").replace(ee,"")},makeArray:function(e,t){var r=t||[];return null!=e&&(n(Object(e))?Z.merge(r,"string"==typeof e?[e]:e):X.call(r,e)),r},inArray:function(e,t,n){return null==t?-1:U.call(t,e,n)},merge:function(e,t){for(var n=+t.length,r=0,i=e.length;n>r;r++)e[i++]=t[r];return e.length=i,e},grep:function(e,t,n){for(var r,i=[],o=0,s=e.length,a=!n;s>o;o++)r=!t(e[o],o),r!==a&&i.push(e[o]);return i},map:function(e,t,r){var i,o=0,s=e.length,a=n(e),u=[];if(a)for(;s>o;o++)i=t(e[o],o,r),null!=i&&u.push(i);else for(o in e)i=t(e[o],o,r),null!=i&&u.push(i);return z.apply([],u)},guid:1,proxy:function(e,t){var n,r,i;return"string"==typeof t&&(n=e[t],t=e,e=n),Z.isFunction(e)?(r=_.call(arguments,2),i=function(){return e.apply(t||this,r.concat(_.call(arguments)))},i.guid=e.guid=e.guid||Z.guid++,i):void 0},now:Date.now,support:Q}),Z.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(e,t){V["[object "+t+"]"]=t.toLowerCase()});var ie=function(e){function t(e,t,n,r){var i,o,s,a,u,l,f,d,h,g;if((t?t.ownerDocument||t:$)!==q&&L(t),t=t||q,n=n||[],a=t.nodeType,"string"!=typeof e||!e||1!==a&&9!==a&&11!==a)return n;if(!r&&O){if(11!==a&&(i=ye.exec(e)))if(s=i[1]){if(9===a){if(o=t.getElementById(s),!o||!o.parentNode)return n;if(o.id===s)return n.push(o),n}else if(t.ownerDocument&&(o=t.ownerDocument.getElementById(s))&&M(t,o)&&o.id===s)return n.push(o),n}else{if(i[2])return K.apply(n,t.getElementsByTagName(e)),n;if((s=i[3])&&w.getElementsByClassName)return K.apply(n,t.getElementsByClassName(s)),n}if(w.qsa&&(!F||!F.test(e))){if(d=f=W,h=t,g=1!==a&&e,1===a&&"object"!==t.nodeName.toLowerCase()){for(l=k(e),(f=t.getAttribute("id"))?d=f.replace(be,"\\$&"):t.setAttribute("id",d),d="[id='"+d+"'] ",u=l.length;u--;)l[u]=d+p(l[u]);h=xe.test(e)&&c(t.parentNode)||t,g=l.join(",")}if(g)try{return K.apply(n,h.querySelectorAll(g)),n}catch(e){}finally{f||t.removeAttribute("id")}}}return S(e.replace(ue,"$1"),t,n,r)}function n(){function e(n,r){return t.push(n+" ")>T.cacheLength&&delete e[t.shift()],e[n+" "]=r}var t=[];return e}function r(e){return e[W]=!0,e}function i(e){var t=q.createElement("div");try{return!!e(t)}catch(e){return!1}finally{t.parentNode&&t.parentNode.removeChild(t),t=null}}function o(e,t){for(var n=e.split("|"),r=e.length;r--;)T.attrHandle[n[r]]=t}function s(e,t){var n=t&&e,r=n&&1===e.nodeType&&1===t.nodeType&&(~t.sourceIndex||V)-(~e.sourceIndex||V);if(r)return r;if(n)for(;n=n.nextSibling;)if(n===t)return-1;return e?1:-1}function a(e){return function(t){var n=t.nodeName.toLowerCase();return"input"===n&&t.type===e}}function u(e){return function(t){var n=t.nodeName.toLowerCase();return("input"===n||"button"===n)&&t.type===e}}function l(e){return r(function(t){return t=+t,r(function(n,r){for(var i,o=e([],n.length,t),s=o.length;s--;)n[i=o[s]]&&(n[i]=!(r[i]=n[i]))})})}function c(e){return e&&"undefined"!=typeof e.getElementsByTagName&&e}function f(){}function p(e){for(var t=0,n=e.length,r="";n>t;t++)r+=e[t].value;return r}function d(e,t,n){var r=t.dir,i=n&&"parentNode"===r,o=B++;return t.first?function(t,n,o){for(;t=t[r];)if(1===t.nodeType||i)return e(t,n,o)}:function(t,n,s){var a,u,l=[I,o];if(s){for(;t=t[r];)if((1===t.nodeType||i)&&e(t,n,s))return!0}else for(;t=t[r];)if(1===t.nodeType||i){if(u=t[W]||(t[W]={}),(a=u[r])&&a[0]===I&&a[1]===o)return l[2]=a[2];if(u[r]=l,l[2]=e(t,n,s))return!0}}}function h(e){return e.length>1?function(t,n,r){for(var i=e.length;i--;)if(!e[i](t,n,r))return!1;return!0}:e[0]}function g(e,n,r){for(var i=0,o=n.length;o>i;i++)t(e,n[i],r);return r}function m(e,t,n,r,i){for(var o,s=[],a=0,u=e.length,l=null!=t;u>a;a++)(o=e[a])&&(!n||n(o,r,i))&&(s.push(o),l&&t.push(a));return s}function v(e,t,n,i,o,s){return i&&!i[W]&&(i=v(i)),o&&!o[W]&&(o=v(o,s)),r(function(r,s,a,u){var l,c,f,p=[],d=[],h=s.length,v=r||g(t||"*",a.nodeType?[a]:a,[]),y=!e||!r&&t?v:m(v,p,e,a,u),x=n?o||(r?e:h||i)?[]:s:y;if(n&&n(y,x,a,u),i)for(l=m(x,d),i(l,[],a,u),c=l.length;c--;)(f=l[c])&&(x[d[c]]=!(y[d[c]]=f));if(r){if(o||e){if(o){for(l=[],c=x.length;c--;)(f=x[c])&&l.push(y[c]=f);o(null,x=[],l,u)}for(c=x.length;c--;)(f=x[c])&&(l=o?ee(r,f):p[c])>-1&&(r[l]=!(s[l]=f))}}else x=m(x===s?x.splice(h,x.length):x),o?o(null,s,x,u):K.apply(s,x)})}function y(e){for(var t,n,r,i=e.length,o=T.relative[e[0].type],s=o||T.relative[" "],a=o?1:0,u=d(function(e){return e===t},s,!0),l=d(function(e){return ee(t,e)>-1},s,!0),c=[function(e,n,r){var i=!o&&(r||n!==D)||((t=n).nodeType?u(e,n,r):l(e,n,r));return t=null,i}];i>a;a++)if(n=T.relative[e[a].type])c=[d(h(c),n)];else{if(n=T.filter[e[a].type].apply(null,e[a].matches),n[W]){for(r=++a;i>r&&!T.relative[e[r].type];r++);return v(a>1&&h(c),a>1&&p(e.slice(0,a-1).concat({value:" "===e[a-2].type?"*":""})).replace(ue,"$1"),n,r>a&&y(e.slice(a,r)),i>r&&y(e=e.slice(r)),i>r&&p(e))}c.push(n)}return h(c)}function x(e,n){var i=n.length>0,o=e.length>0,s=function(r,s,a,u,l){var c,f,p,d=0,h="0",g=r&&[],v=[],y=D,x=r||o&&T.find.TAG("*",l),b=I+=null==y?1:Math.random()||.1,w=x.length;for(l&&(D=s!==q&&s);h!==w&&null!=(c=x[h]);h++){if(o&&c){for(f=0;p=e[f++];)if(p(c,s,a)){u.push(c);break}l&&(I=b)}i&&((c=!p&&c)&&d--,r&&g.push(c))}if(d+=h,i&&h!==d){for(f=0;p=n[f++];)p(g,v,s,a);if(r){if(d>0)for(;h--;)g[h]||v[h]||(v[h]=Q.call(u));v=m(v)}K.apply(u,v),l&&!r&&v.length>0&&d+n.length>1&&t.uniqueSort(u)}return l&&(I=b,D=y),g};return i?r(s):s}var b,w,T,C,N,k,E,S,D,j,A,L,q,H,O,F,P,R,M,W="sizzle"+1*new Date,$=e.document,I=0,B=0,_=n(),z=n(),X=n(),U=function(e,t){return e===t&&(A=!0),0},V=1<<31,Y={}.hasOwnProperty,G=[],Q=G.pop,J=G.push,K=G.push,Z=G.slice,ee=function(e,t){for(var n=0,r=e.length;r>n;n++)if(e[n]===t)return n;return-1},te="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",ne="[\\x20\\t\\r\\n\\f]",re="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",ie=re.replace("w","w#"),oe="\\["+ne+"*("+re+")(?:"+ne+"*([*^$|!~]?=)"+ne+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+ie+"))|)"+ne+"*\\]",se=":("+re+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+oe+")*)|.*)\\)|)",ae=new RegExp(ne+"+","g"),ue=new RegExp("^"+ne+"+|((?:^|[^\\\\])(?:\\\\.)*)"+ne+"+$","g"),le=new RegExp("^"+ne+"*,"+ne+"*"),ce=new RegExp("^"+ne+"*([>+~]|"+ne+")"+ne+"*"),fe=new RegExp("="+ne+"*([^\\]'\"]*?)"+ne+"*\\]","g"),pe=new RegExp(se),de=new RegExp("^"+ie+"$"),he={ID:new RegExp("^#("+re+")"),CLASS:new RegExp("^\\.("+re+")"),TAG:new RegExp("^("+re.replace("w","w*")+")"),ATTR:new RegExp("^"+oe),PSEUDO:new RegExp("^"+se),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+ne+"*(even|odd|(([+-]|)(\\d*)n|)"+ne+"*(?:([+-]|)"+ne+"*(\\d+)|))"+ne+"*\\)|)","i"),bool:new RegExp("^(?:"+te+")$","i"),needsContext:new RegExp("^"+ne+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+ne+"*((?:-\\d)?\\d*)"+ne+"*\\)|)(?=[^-]|$)","i")},ge=/^(?:input|select|textarea|button)$/i,me=/^h\d$/i,ve=/^[^{]+\{\s*\[native \w/,ye=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,xe=/[+~]/,be=/'|\\/g,we=new RegExp("\\\\([\\da-f]{1,6}"+ne+"?|("+ne+")|.)","ig"),Te=function(e,t,n){var r="0x"+t-65536;return r!==r||n?t:0>r?String.fromCharCode(r+65536):String.fromCharCode(r>>10|55296,1023&r|56320)},Ce=function(){L()};try{K.apply(G=Z.call($.childNodes),$.childNodes),G[$.childNodes.length].nodeType}catch(e){K={apply:G.length?function(e,t){J.apply(e,Z.call(t))}:function(e,t){for(var n=e.length,r=0;e[n++]=t[r++];);e.length=n-1}}}w=t.support={},N=t.isXML=function(e){var t=e&&(e.ownerDocument||e).documentElement;return!!t&&"HTML"!==t.nodeName},L=t.setDocument=function(e){var t,n,r=e?e.ownerDocument||e:$;return r!==q&&9===r.nodeType&&r.documentElement?(q=r,H=r.documentElement,n=r.defaultView,n&&n!==n.top&&(n.addEventListener?n.addEventListener("unload",Ce,!1):n.attachEvent&&n.attachEvent("onunload",Ce)),O=!N(r),w.attributes=i(function(e){return e.className="i",!e.getAttribute("className")}),w.getElementsByTagName=i(function(e){return e.appendChild(r.createComment("")),!e.getElementsByTagName("*").length}),w.getElementsByClassName=ve.test(r.getElementsByClassName),w.getById=i(function(e){return H.appendChild(e).id=W,!r.getElementsByName||!r.getElementsByName(W).length}),w.getById?(T.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&O){var n=t.getElementById(e);return n&&n.parentNode?[n]:[]}},T.filter.ID=function(e){var t=e.replace(we,Te);return function(e){return e.getAttribute("id")===t}}):(delete T.find.ID,T.filter.ID=function(e){var t=e.replace(we,Te);return function(e){var n="undefined"!=typeof e.getAttributeNode&&e.getAttributeNode("id");return n&&n.value===t}}),T.find.TAG=w.getElementsByTagName?function(e,t){return"undefined"!=typeof t.getElementsByTagName?t.getElementsByTagName(e):w.qsa?t.querySelectorAll(e):void 0}:function(e,t){var n,r=[],i=0,o=t.getElementsByTagName(e);if("*"===e){for(;n=o[i++];)1===n.nodeType&&r.push(n);return r}return o},T.find.CLASS=w.getElementsByClassName&&function(e,t){return O?t.getElementsByClassName(e):void 0},P=[],F=[],(w.qsa=ve.test(r.querySelectorAll))&&(i(function(e){H.appendChild(e).innerHTML="<a id='"+W+"'></a><select id='"+W+"-\f]' msallowcapture=''><option selected=''></option></select>",e.querySelectorAll("[msallowcapture^='']").length&&F.push("[*^$]="+ne+"*(?:''|\"\")"),e.querySelectorAll("[selected]").length||F.push("\\["+ne+"*(?:value|"+te+")"),e.querySelectorAll("[id~="+W+"-]").length||F.push("~="),e.querySelectorAll(":checked").length||F.push(":checked"),e.querySelectorAll("a#"+W+"+*").length||F.push(".#.+[+~]")}),i(function(e){var t=r.createElement("input");t.setAttribute("type","hidden"),e.appendChild(t).setAttribute("name","D"),e.querySelectorAll("[name=d]").length&&F.push("name"+ne+"*[*^$|!~]?="),e.querySelectorAll(":enabled").length||F.push(":enabled",":disabled"),e.querySelectorAll("*,:x"),F.push(",.*:")})),(w.matchesSelector=ve.test(R=H.matches||H.webkitMatchesSelector||H.mozMatchesSelector||H.oMatchesSelector||H.msMatchesSelector))&&i(function(e){w.disconnectedMatch=R.call(e,"div"),R.call(e,"[s!='']:x"),P.push("!=",se)}),F=F.length&&new RegExp(F.join("|")),P=P.length&&new RegExp(P.join("|")),t=ve.test(H.compareDocumentPosition),M=t||ve.test(H.contains)?function(e,t){var n=9===e.nodeType?e.documentElement:e,r=t&&t.parentNode;return e===r||!(!r||1!==r.nodeType||!(n.contains?n.contains(r):e.compareDocumentPosition&&16&e.compareDocumentPosition(r)))}:function(e,t){if(t)for(;t=t.parentNode;)if(t===e)return!0;return!1},U=t?function(e,t){if(e===t)return A=!0,0;var n=!e.compareDocumentPosition-!t.compareDocumentPosition;return n?n:(n=(e.ownerDocument||e)===(t.ownerDocument||t)?e.compareDocumentPosition(t):1,1&n||!w.sortDetached&&t.compareDocumentPosition(e)===n?e===r||e.ownerDocument===$&&M($,e)?-1:t===r||t.ownerDocument===$&&M($,t)?1:j?ee(j,e)-ee(j,t):0:4&n?-1:1)}:function(e,t){if(e===t)return A=!0,0;var n,i=0,o=e.parentNode,a=t.parentNode,u=[e],l=[t];if(!o||!a)return e===r?-1:t===r?1:o?-1:a?1:j?ee(j,e)-ee(j,t):0;if(o===a)return s(e,t);for(n=e;n=n.parentNode;)u.unshift(n);for(n=t;n=n.parentNode;)l.unshift(n);for(;u[i]===l[i];)i++;return i?s(u[i],l[i]):u[i]===$?-1:l[i]===$?1:0},r):q},t.matches=function(e,n){return t(e,null,null,n)},t.matchesSelector=function(e,n){if((e.ownerDocument||e)!==q&&L(e),n=n.replace(fe,"='$1']"),!(!w.matchesSelector||!O||P&&P.test(n)||F&&F.test(n)))try{var r=R.call(e,n);if(r||w.disconnectedMatch||e.document&&11!==e.document.nodeType)return r}catch(e){}return t(n,q,null,[e]).length>0},t.contains=function(e,t){return(e.ownerDocument||e)!==q&&L(e),M(e,t)},t.attr=function(e,t){(e.ownerDocument||e)!==q&&L(e);var n=T.attrHandle[t.toLowerCase()],r=n&&Y.call(T.attrHandle,t.toLowerCase())?n(e,t,!O):void 0;return void 0!==r?r:w.attributes||!O?e.getAttribute(t):(r=e.getAttributeNode(t))&&r.specified?r.value:null},t.error=function(e){throw new Error("Syntax error, unrecognized expression: "+e)},t.uniqueSort=function(e){var t,n=[],r=0,i=0;if(A=!w.detectDuplicates,j=!w.sortStable&&e.slice(0),e.sort(U),A){for(;t=e[i++];)t===e[i]&&(r=n.push(i));for(;r--;)e.splice(n[r],1)}return j=null,e},C=t.getText=function(e){var t,n="",r=0,i=e.nodeType;if(i){if(1===i||9===i||11===i){if("string"==typeof e.textContent)return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)n+=C(e)}else if(3===i||4===i)return e.nodeValue}else for(;t=e[r++];)n+=C(t);return n},T=t.selectors={cacheLength:50,createPseudo:r,match:he,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(we,Te),e[3]=(e[3]||e[4]||e[5]||"").replace(we,Te),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||t.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&t.error(e[0]),e},PSEUDO:function(e){var t,n=!e[6]&&e[2];return he.CHILD.test(e[0])?null:(e[3]?e[2]=e[4]||e[5]||"":n&&pe.test(n)&&(t=k(n,!0))&&(t=n.indexOf(")",n.length-t)-n.length)&&(e[0]=e[0].slice(0,t),e[2]=n.slice(0,t)),e.slice(0,3))}},filter:{TAG:function(e){var t=e.replace(we,Te).toLowerCase();return"*"===e?function(){return!0}:function(e){return e.nodeName&&e.nodeName.toLowerCase()===t}},CLASS:function(e){var t=_[e+" "];return t||(t=new RegExp("(^|"+ne+")"+e+"("+ne+"|$)"))&&_(e,function(e){return t.test("string"==typeof e.className&&e.className||"undefined"!=typeof e.getAttribute&&e.getAttribute("class")||"")})},ATTR:function(e,n,r){return function(i){var o=t.attr(i,e);return null==o?"!="===n:!n||(o+="","="===n?o===r:"!="===n?o!==r:"^="===n?r&&0===o.indexOf(r):"*="===n?r&&o.indexOf(r)>-1:"$="===n?r&&o.slice(-r.length)===r:"~="===n?(" "+o.replace(ae," ")+" ").indexOf(r)>-1:"|="===n&&(o===r||o.slice(0,r.length+1)===r+"-"))}},CHILD:function(e,t,n,r,i){var o="nth"!==e.slice(0,3),s="last"!==e.slice(-4),a="of-type"===t;return 1===r&&0===i?function(e){return!!e.parentNode}:function(t,n,u){var l,c,f,p,d,h,g=o!==s?"nextSibling":"previousSibling",m=t.parentNode,v=a&&t.nodeName.toLowerCase(),y=!u&&!a;if(m){if(o){for(;g;){for(f=t;f=f[g];)if(a?f.nodeName.toLowerCase()===v:1===f.nodeType)return!1;h=g="only"===e&&!h&&"nextSibling"}return!0}if(h=[s?m.firstChild:m.lastChild],s&&y){for(c=m[W]||(m[W]={}),l=c[e]||[],d=l[0]===I&&l[1],p=l[0]===I&&l[2],f=d&&m.childNodes[d];f=++d&&f&&f[g]||(p=d=0)||h.pop();)if(1===f.nodeType&&++p&&f===t){c[e]=[I,d,p];break}}else if(y&&(l=(t[W]||(t[W]={}))[e])&&l[0]===I)p=l[1];else for(;(f=++d&&f&&f[g]||(p=d=0)||h.pop())&&((a?f.nodeName.toLowerCase()!==v:1!==f.nodeType)||!++p||(y&&((f[W]||(f[W]={}))[e]=[I,p]),f!==t)););return p-=i,p===r||p%r===0&&p/r>=0}}},PSEUDO:function(e,n){var i,o=T.pseudos[e]||T.setFilters[e.toLowerCase()]||t.error("unsupported pseudo: "+e);return o[W]?o(n):o.length>1?(i=[e,e,"",n],T.setFilters.hasOwnProperty(e.toLowerCase())?r(function(e,t){for(var r,i=o(e,n),s=i.length;s--;)r=ee(e,i[s]),e[r]=!(t[r]=i[s])}):function(e){return o(e,0,i)}):o}},pseudos:{not:r(function(e){var t=[],n=[],i=E(e.replace(ue,"$1"));return i[W]?r(function(e,t,n,r){for(var o,s=i(e,null,r,[]),a=e.length;a--;)(o=s[a])&&(e[a]=!(t[a]=o))}):function(e,r,o){return t[0]=e,i(t,null,o,n),t[0]=null,!n.pop()}}),has:r(function(e){return function(n){return t(e,n).length>0}}),contains:r(function(e){return e=e.replace(we,Te),function(t){return(t.textContent||t.innerText||C(t)).indexOf(e)>-1}}),lang:r(function(e){return de.test(e||"")||t.error("unsupported lang: "+e),e=e.replace(we,Te).toLowerCase(),function(t){var n;do if(n=O?t.lang:t.getAttribute("xml:lang")||t.getAttribute("lang"))return n=n.toLowerCase(),n===e||0===n.indexOf(e+"-");while((t=t.parentNode)&&1===t.nodeType);return!1}}),target:function(t){var n=e.location&&e.location.hash;return n&&n.slice(1)===t.id},root:function(e){return e===H},focus:function(e){return e===q.activeElement&&(!q.hasFocus||q.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},enabled:function(e){return e.disabled===!1},disabled:function(e){return e.disabled===!0},checked:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&!!e.checked||"option"===t&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,e.selected===!0},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeType<6)return!1;return!0},parent:function(e){return!T.pseudos.empty(e)},header:function(e){return me.test(e.nodeName)},input:function(e){return ge.test(e.nodeName)},button:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&"button"===e.type||"button"===t},text:function(e){var t;return"input"===e.nodeName.toLowerCase()&&"text"===e.type&&(null==(t=e.getAttribute("type"))||"text"===t.toLowerCase())},first:l(function(){return[0]}),last:l(function(e,t){return[t-1]}),eq:l(function(e,t,n){return[0>n?n+t:n]}),even:l(function(e,t){for(var n=0;t>n;n+=2)e.push(n);return e}),odd:l(function(e,t){for(var n=1;t>n;n+=2)e.push(n);return e}),lt:l(function(e,t,n){for(var r=0>n?n+t:n;--r>=0;)e.push(r);return e}),gt:l(function(e,t,n){for(var r=0>n?n+t:n;++r<t;)e.push(r);return e})}},T.pseudos.nth=T.pseudos.eq;for(b in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})T.pseudos[b]=a(b);for(b in{submit:!0,reset:!0})T.pseudos[b]=u(b);return f.prototype=T.filters=T.pseudos,T.setFilters=new f,k=t.tokenize=function(e,n){var r,i,o,s,a,u,l,c=z[e+" "];if(c)return n?0:c.slice(0);for(a=e,u=[],l=T.preFilter;a;){(!r||(i=le.exec(a)))&&(i&&(a=a.slice(i[0].length)||a),u.push(o=[])),r=!1,(i=ce.exec(a))&&(r=i.shift(),o.push({value:r,type:i[0].replace(ue," ")}),a=a.slice(r.length));for(s in T.filter)!(i=he[s].exec(a))||l[s]&&!(i=l[s](i))||(r=i.shift(),o.push({value:r,type:s,matches:i}),a=a.slice(r.length));if(!r)break}return n?a.length:a?t.error(e):z(e,u).slice(0)},E=t.compile=function(e,t){var n,r=[],i=[],o=X[e+" "];if(!o){for(t||(t=k(e)),n=t.length;n--;)o=y(t[n]),o[W]?r.push(o):i.push(o);o=X(e,x(i,r)),o.selector=e}return o},S=t.select=function(e,t,n,r){var i,o,s,a,u,l="function"==typeof e&&e,f=!r&&k(e=l.selector||e);if(n=n||[],1===f.length){if(o=f[0]=f[0].slice(0),o.length>2&&"ID"===(s=o[0]).type&&w.getById&&9===t.nodeType&&O&&T.relative[o[1].type]){if(t=(T.find.ID(s.matches[0].replace(we,Te),t)||[])[0],!t)return n;l&&(t=t.parentNode),e=e.slice(o.shift().value.length)}for(i=he.needsContext.test(e)?0:o.length;i--&&(s=o[i],!T.relative[a=s.type]);)if((u=T.find[a])&&(r=u(s.matches[0].replace(we,Te),xe.test(o[0].type)&&c(t.parentNode)||t))){if(o.splice(i,1),e=r.length&&p(o),!e)return K.apply(n,r),n;break}}return(l||E(e,f))(r,t,!O,n,xe.test(e)&&c(t.parentNode)||t),n},w.sortStable=W.split("").sort(U).join("")===W,w.detectDuplicates=!!A,L(),w.sortDetached=i(function(e){return 1&e.compareDocumentPosition(q.createElement("div"))}),i(function(e){return e.innerHTML="<a href='#'></a>","#"===e.firstChild.getAttribute("href")})||o("type|href|height|width",function(e,t,n){return n?void 0:e.getAttribute(t,"type"===t.toLowerCase()?1:2)}),w.attributes&&i(function(e){return e.innerHTML="<input/>",e.firstChild.setAttribute("value",""),""===e.firstChild.getAttribute("value")})||o("value",function(e,t,n){return n||"input"!==e.nodeName.toLowerCase()?void 0:e.defaultValue}),i(function(e){return null==e.getAttribute("disabled")})||o(te,function(e,t,n){var r;return n?void 0:e[t]===!0?t.toLowerCase():(r=e.getAttributeNode(t))&&r.specified?r.value:null}),t}(e);Z.find=ie,Z.expr=ie.selectors,Z.expr[":"]=Z.expr.pseudos,Z.unique=ie.uniqueSort,Z.text=ie.getText,Z.isXMLDoc=ie.isXML,Z.contains=ie.contains;var oe=Z.expr.match.needsContext,se=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,ae=/^.[^:#\[\.,]*$/;Z.filter=function(e,t,n){var r=t[0];return n&&(e=":not("+e+")"),1===t.length&&1===r.nodeType?Z.find.matchesSelector(r,e)?[r]:[]:Z.find.matches(e,Z.grep(t,function(e){return 1===e.nodeType}))},Z.fn.extend({find:function(e){var t,n=this.length,r=[],i=this;if("string"!=typeof e)return this.pushStack(Z(e).filter(function(){
for(t=0;n>t;t++)if(Z.contains(i[t],this))return!0}));for(t=0;n>t;t++)Z.find(e,i[t],r);return r=this.pushStack(n>1?Z.unique(r):r),r.selector=this.selector?this.selector+" "+e:e,r},filter:function(e){return this.pushStack(r(this,e||[],!1))},not:function(e){return this.pushStack(r(this,e||[],!0))},is:function(e){return!!r(this,"string"==typeof e&&oe.test(e)?Z(e):e||[],!1).length}});var ue,le=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,ce=Z.fn.init=function(e,t){var n,r;if(!e)return this;if("string"==typeof e){if(n="<"===e[0]&&">"===e[e.length-1]&&e.length>=3?[null,e,null]:le.exec(e),!n||!n[1]&&t)return!t||t.jquery?(t||ue).find(e):this.constructor(t).find(e);if(n[1]){if(t=t instanceof Z?t[0]:t,Z.merge(this,Z.parseHTML(n[1],t&&t.nodeType?t.ownerDocument||t:J,!0)),se.test(n[1])&&Z.isPlainObject(t))for(n in t)Z.isFunction(this[n])?this[n](t[n]):this.attr(n,t[n]);return this}return r=J.getElementById(n[2]),r&&r.parentNode&&(this.length=1,this[0]=r),this.context=J,this.selector=e,this}return e.nodeType?(this.context=this[0]=e,this.length=1,this):Z.isFunction(e)?"undefined"!=typeof ue.ready?ue.ready(e):e(Z):(void 0!==e.selector&&(this.selector=e.selector,this.context=e.context),Z.makeArray(e,this))};ce.prototype=Z.fn,ue=Z(J);var fe=/^(?:parents|prev(?:Until|All))/,pe={children:!0,contents:!0,next:!0,prev:!0};Z.extend({dir:function(e,t,n){for(var r=[],i=void 0!==n;(e=e[t])&&9!==e.nodeType;)if(1===e.nodeType){if(i&&Z(e).is(n))break;r.push(e)}return r},sibling:function(e,t){for(var n=[];e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);return n}}),Z.fn.extend({has:function(e){var t=Z(e,this),n=t.length;return this.filter(function(){for(var e=0;n>e;e++)if(Z.contains(this,t[e]))return!0})},closest:function(e,t){for(var n,r=0,i=this.length,o=[],s=oe.test(e)||"string"!=typeof e?Z(e,t||this.context):0;i>r;r++)for(n=this[r];n&&n!==t;n=n.parentNode)if(n.nodeType<11&&(s?s.index(n)>-1:1===n.nodeType&&Z.find.matchesSelector(n,e))){o.push(n);break}return this.pushStack(o.length>1?Z.unique(o):o)},index:function(e){return e?"string"==typeof e?U.call(Z(e),this[0]):U.call(this,e.jquery?e[0]:e):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,t){return this.pushStack(Z.unique(Z.merge(this.get(),Z(e,t))))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}}),Z.each({parent:function(e){var t=e.parentNode;return t&&11!==t.nodeType?t:null},parents:function(e){return Z.dir(e,"parentNode")},parentsUntil:function(e,t,n){return Z.dir(e,"parentNode",n)},next:function(e){return i(e,"nextSibling")},prev:function(e){return i(e,"previousSibling")},nextAll:function(e){return Z.dir(e,"nextSibling")},prevAll:function(e){return Z.dir(e,"previousSibling")},nextUntil:function(e,t,n){return Z.dir(e,"nextSibling",n)},prevUntil:function(e,t,n){return Z.dir(e,"previousSibling",n)},siblings:function(e){return Z.sibling((e.parentNode||{}).firstChild,e)},children:function(e){return Z.sibling(e.firstChild)},contents:function(e){return e.contentDocument||Z.merge([],e.childNodes)}},function(e,t){Z.fn[e]=function(n,r){var i=Z.map(this,t,n);return"Until"!==e.slice(-5)&&(r=n),r&&"string"==typeof r&&(i=Z.filter(r,i)),this.length>1&&(pe[e]||Z.unique(i),fe.test(e)&&i.reverse()),this.pushStack(i)}});var de=/\S+/g,he={};Z.Callbacks=function(e){e="string"==typeof e?he[e]||o(e):Z.extend({},e);var t,n,r,i,s,a,u=[],l=!e.once&&[],c=function(o){for(t=e.memory&&o,n=!0,a=i||0,i=0,s=u.length,r=!0;u&&s>a;a++)if(u[a].apply(o[0],o[1])===!1&&e.stopOnFalse){t=!1;break}r=!1,u&&(l?l.length&&c(l.shift()):t?u=[]:f.disable())},f={add:function(){if(u){var n=u.length;!function t(n){Z.each(n,function(n,r){var i=Z.type(r);"function"===i?e.unique&&f.has(r)||u.push(r):r&&r.length&&"string"!==i&&t(r)})}(arguments),r?s=u.length:t&&(i=n,c(t))}return this},remove:function(){return u&&Z.each(arguments,function(e,t){for(var n;(n=Z.inArray(t,u,n))>-1;)u.splice(n,1),r&&(s>=n&&s--,a>=n&&a--)}),this},has:function(e){return e?Z.inArray(e,u)>-1:!(!u||!u.length)},empty:function(){return u=[],s=0,this},disable:function(){return u=l=t=void 0,this},disabled:function(){return!u},lock:function(){return l=void 0,t||f.disable(),this},locked:function(){return!l},fireWith:function(e,t){return!u||n&&!l||(t=t||[],t=[e,t.slice?t.slice():t],r?l.push(t):c(t)),this},fire:function(){return f.fireWith(this,arguments),this},fired:function(){return!!n}};return f},Z.extend({Deferred:function(e){var t=[["resolve","done",Z.Callbacks("once memory"),"resolved"],["reject","fail",Z.Callbacks("once memory"),"rejected"],["notify","progress",Z.Callbacks("memory")]],n="pending",r={state:function(){return n},always:function(){return i.done(arguments).fail(arguments),this},then:function(){var e=arguments;return Z.Deferred(function(n){Z.each(t,function(t,o){var s=Z.isFunction(e[t])&&e[t];i[o[1]](function(){var e=s&&s.apply(this,arguments);e&&Z.isFunction(e.promise)?e.promise().done(n.resolve).fail(n.reject).progress(n.notify):n[o[0]+"With"](this===r?n.promise():this,s?[e]:arguments)})}),e=null}).promise()},promise:function(e){return null!=e?Z.extend(e,r):r}},i={};return r.pipe=r.then,Z.each(t,function(e,o){var s=o[2],a=o[3];r[o[1]]=s.add,a&&s.add(function(){n=a},t[1^e][2].disable,t[2][2].lock),i[o[0]]=function(){return i[o[0]+"With"](this===i?r:this,arguments),this},i[o[0]+"With"]=s.fireWith}),r.promise(i),e&&e.call(i,i),i},when:function(e){var t,n,r,i=0,o=_.call(arguments),s=o.length,a=1!==s||e&&Z.isFunction(e.promise)?s:0,u=1===a?e:Z.Deferred(),l=function(e,n,r){return function(i){n[e]=this,r[e]=arguments.length>1?_.call(arguments):i,r===t?u.notifyWith(n,r):--a||u.resolveWith(n,r)}};if(s>1)for(t=new Array(s),n=new Array(s),r=new Array(s);s>i;i++)o[i]&&Z.isFunction(o[i].promise)?o[i].promise().done(l(i,r,o)).fail(u.reject).progress(l(i,n,t)):--a;return a||u.resolveWith(r,o),u.promise()}});var ge;Z.fn.ready=function(e){return Z.ready.promise().done(e),this},Z.extend({isReady:!1,readyWait:1,holdReady:function(e){e?Z.readyWait++:Z.ready(!0)},ready:function(e){(e===!0?--Z.readyWait:Z.isReady)||(Z.isReady=!0,e!==!0&&--Z.readyWait>0||(ge.resolveWith(J,[Z]),Z.fn.triggerHandler&&(Z(J).triggerHandler("ready"),Z(J).off("ready"))))}}),Z.ready.promise=function(t){return ge||(ge=Z.Deferred(),"complete"===J.readyState?setTimeout(Z.ready):(J.addEventListener("DOMContentLoaded",s,!1),e.addEventListener("load",s,!1))),ge.promise(t)},Z.ready.promise();var me=Z.access=function(e,t,n,r,i,o,s){var a=0,u=e.length,l=null==n;if("object"===Z.type(n)){i=!0;for(a in n)Z.access(e,t,a,n[a],!0,o,s)}else if(void 0!==r&&(i=!0,Z.isFunction(r)||(s=!0),l&&(s?(t.call(e,r),t=null):(l=t,t=function(e,t,n){return l.call(Z(e),n)})),t))for(;u>a;a++)t(e[a],n,s?r:r.call(e[a],a,t(e[a],n)));return i?e:l?t.call(e):u?t(e[0],n):o};Z.acceptData=function(e){return 1===e.nodeType||9===e.nodeType||!+e.nodeType},a.uid=1,a.accepts=Z.acceptData,a.prototype={key:function(e){if(!a.accepts(e))return 0;var t={},n=e[this.expando];if(!n){n=a.uid++;try{t[this.expando]={value:n},Object.defineProperties(e,t)}catch(r){t[this.expando]=n,Z.extend(e,t)}}return this.cache[n]||(this.cache[n]={}),n},set:function(e,t,n){var r,i=this.key(e),o=this.cache[i];if("string"==typeof t)o[t]=n;else if(Z.isEmptyObject(o))Z.extend(this.cache[i],t);else for(r in t)o[r]=t[r];return o},get:function(e,t){var n=this.cache[this.key(e)];return void 0===t?n:n[t]},access:function(e,t,n){var r;return void 0===t||t&&"string"==typeof t&&void 0===n?(r=this.get(e,t),void 0!==r?r:this.get(e,Z.camelCase(t))):(this.set(e,t,n),void 0!==n?n:t)},remove:function(e,t){var n,r,i,o=this.key(e),s=this.cache[o];if(void 0===t)this.cache[o]={};else{Z.isArray(t)?r=t.concat(t.map(Z.camelCase)):(i=Z.camelCase(t),t in s?r=[t,i]:(r=i,r=r in s?[r]:r.match(de)||[])),n=r.length;for(;n--;)delete s[r[n]]}},hasData:function(e){return!Z.isEmptyObject(this.cache[e[this.expando]]||{})},discard:function(e){e[this.expando]&&delete this.cache[e[this.expando]]}};var ve=new a,ye=new a,xe=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,be=/([A-Z])/g;Z.extend({hasData:function(e){return ye.hasData(e)||ve.hasData(e)},data:function(e,t,n){return ye.access(e,t,n)},removeData:function(e,t){ye.remove(e,t)},_data:function(e,t,n){return ve.access(e,t,n)},_removeData:function(e,t){ve.remove(e,t)}}),Z.fn.extend({data:function(e,t){var n,r,i,o=this[0],s=o&&o.attributes;if(void 0===e){if(this.length&&(i=ye.get(o),1===o.nodeType&&!ve.get(o,"hasDataAttrs"))){for(n=s.length;n--;)s[n]&&(r=s[n].name,0===r.indexOf("data-")&&(r=Z.camelCase(r.slice(5)),u(o,r,i[r])));ve.set(o,"hasDataAttrs",!0)}return i}return"object"==typeof e?this.each(function(){ye.set(this,e)}):me(this,function(t){var n,r=Z.camelCase(e);if(o&&void 0===t){if(n=ye.get(o,e),void 0!==n)return n;if(n=ye.get(o,r),void 0!==n)return n;if(n=u(o,r,void 0),void 0!==n)return n}else this.each(function(){var n=ye.get(this,r);ye.set(this,r,t),-1!==e.indexOf("-")&&void 0!==n&&ye.set(this,e,t)})},null,t,arguments.length>1,null,!0)},removeData:function(e){return this.each(function(){ye.remove(this,e)})}}),Z.extend({queue:function(e,t,n){var r;return e?(t=(t||"fx")+"queue",r=ve.get(e,t),n&&(!r||Z.isArray(n)?r=ve.access(e,t,Z.makeArray(n)):r.push(n)),r||[]):void 0},dequeue:function(e,t){t=t||"fx";var n=Z.queue(e,t),r=n.length,i=n.shift(),o=Z._queueHooks(e,t),s=function(){Z.dequeue(e,t)};"inprogress"===i&&(i=n.shift(),r--),i&&("fx"===t&&n.unshift("inprogress"),delete o.stop,i.call(e,s,o)),!r&&o&&o.empty.fire()},_queueHooks:function(e,t){var n=t+"queueHooks";return ve.get(e,n)||ve.access(e,n,{empty:Z.Callbacks("once memory").add(function(){ve.remove(e,[t+"queue",n])})})}}),Z.fn.extend({queue:function(e,t){var n=2;return"string"!=typeof e&&(t=e,e="fx",n--),arguments.length<n?Z.queue(this[0],e):void 0===t?this:this.each(function(){var n=Z.queue(this,e,t);Z._queueHooks(this,e),"fx"===e&&"inprogress"!==n[0]&&Z.dequeue(this,e)})},dequeue:function(e){return this.each(function(){Z.dequeue(this,e)})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,t){var n,r=1,i=Z.Deferred(),o=this,s=this.length,a=function(){--r||i.resolveWith(o,[o])};for("string"!=typeof e&&(t=e,e=void 0),e=e||"fx";s--;)n=ve.get(o[s],e+"queueHooks"),n&&n.empty&&(r++,n.empty.add(a));return a(),i.promise(t)}});var we=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,Te=["Top","Right","Bottom","Left"],Ce=function(e,t){return e=t||e,"none"===Z.css(e,"display")||!Z.contains(e.ownerDocument,e)},Ne=/^(?:checkbox|radio)$/i;!function(){var e=J.createDocumentFragment(),t=e.appendChild(J.createElement("div")),n=J.createElement("input");n.setAttribute("type","radio"),n.setAttribute("checked","checked"),n.setAttribute("name","t"),t.appendChild(n),Q.checkClone=t.cloneNode(!0).cloneNode(!0).lastChild.checked,t.innerHTML="<textarea>x</textarea>",Q.noCloneChecked=!!t.cloneNode(!0).lastChild.defaultValue}();var ke="undefined";Q.focusinBubbles="onfocusin"in e;var Ee=/^key/,Se=/^(?:mouse|pointer|contextmenu)|click/,De=/^(?:focusinfocus|focusoutblur)$/,je=/^([^.]*)(?:\.(.+)|)$/;Z.event={global:{},add:function(e,t,n,r,i){var o,s,a,u,l,c,f,p,d,h,g,m=ve.get(e);if(m)for(n.handler&&(o=n,n=o.handler,i=o.selector),n.guid||(n.guid=Z.guid++),(u=m.events)||(u=m.events={}),(s=m.handle)||(s=m.handle=function(t){return typeof Z!==ke&&Z.event.triggered!==t.type?Z.event.dispatch.apply(e,arguments):void 0}),t=(t||"").match(de)||[""],l=t.length;l--;)a=je.exec(t[l])||[],d=g=a[1],h=(a[2]||"").split(".").sort(),d&&(f=Z.event.special[d]||{},d=(i?f.delegateType:f.bindType)||d,f=Z.event.special[d]||{},c=Z.extend({type:d,origType:g,data:r,handler:n,guid:n.guid,selector:i,needsContext:i&&Z.expr.match.needsContext.test(i),namespace:h.join(".")},o),(p=u[d])||(p=u[d]=[],p.delegateCount=0,f.setup&&f.setup.call(e,r,h,s)!==!1||e.addEventListener&&e.addEventListener(d,s,!1)),f.add&&(f.add.call(e,c),c.handler.guid||(c.handler.guid=n.guid)),i?p.splice(p.delegateCount++,0,c):p.push(c),Z.event.global[d]=!0)},remove:function(e,t,n,r,i){var o,s,a,u,l,c,f,p,d,h,g,m=ve.hasData(e)&&ve.get(e);if(m&&(u=m.events)){for(t=(t||"").match(de)||[""],l=t.length;l--;)if(a=je.exec(t[l])||[],d=g=a[1],h=(a[2]||"").split(".").sort(),d){for(f=Z.event.special[d]||{},d=(r?f.delegateType:f.bindType)||d,p=u[d]||[],a=a[2]&&new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"),s=o=p.length;o--;)c=p[o],!i&&g!==c.origType||n&&n.guid!==c.guid||a&&!a.test(c.namespace)||r&&r!==c.selector&&("**"!==r||!c.selector)||(p.splice(o,1),c.selector&&p.delegateCount--,f.remove&&f.remove.call(e,c));s&&!p.length&&(f.teardown&&f.teardown.call(e,h,m.handle)!==!1||Z.removeEvent(e,d,m.handle),delete u[d])}else for(d in u)Z.event.remove(e,d+t[l],n,r,!0);Z.isEmptyObject(u)&&(delete m.handle,ve.remove(e,"events"))}},trigger:function(t,n,r,i){var o,s,a,u,l,c,f,p=[r||J],d=G.call(t,"type")?t.type:t,h=G.call(t,"namespace")?t.namespace.split("."):[];if(s=a=r=r||J,3!==r.nodeType&&8!==r.nodeType&&!De.test(d+Z.event.triggered)&&(d.indexOf(".")>=0&&(h=d.split("."),d=h.shift(),h.sort()),l=d.indexOf(":")<0&&"on"+d,t=t[Z.expando]?t:new Z.Event(d,"object"==typeof t&&t),t.isTrigger=i?2:3,t.namespace=h.join("."),t.namespace_re=t.namespace?new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,t.result=void 0,t.target||(t.target=r),n=null==n?[t]:Z.makeArray(n,[t]),f=Z.event.special[d]||{},i||!f.trigger||f.trigger.apply(r,n)!==!1)){if(!i&&!f.noBubble&&!Z.isWindow(r)){for(u=f.delegateType||d,De.test(u+d)||(s=s.parentNode);s;s=s.parentNode)p.push(s),a=s;a===(r.ownerDocument||J)&&p.push(a.defaultView||a.parentWindow||e)}for(o=0;(s=p[o++])&&!t.isPropagationStopped();)t.type=o>1?u:f.bindType||d,c=(ve.get(s,"events")||{})[t.type]&&ve.get(s,"handle"),c&&c.apply(s,n),c=l&&s[l],c&&c.apply&&Z.acceptData(s)&&(t.result=c.apply(s,n),t.result===!1&&t.preventDefault());return t.type=d,i||t.isDefaultPrevented()||f._default&&f._default.apply(p.pop(),n)!==!1||!Z.acceptData(r)||l&&Z.isFunction(r[d])&&!Z.isWindow(r)&&(a=r[l],a&&(r[l]=null),Z.event.triggered=d,r[d](),Z.event.triggered=void 0,a&&(r[l]=a)),t.result}},dispatch:function(e){e=Z.event.fix(e);var t,n,r,i,o,s=[],a=_.call(arguments),u=(ve.get(this,"events")||{})[e.type]||[],l=Z.event.special[e.type]||{};if(a[0]=e,e.delegateTarget=this,!l.preDispatch||l.preDispatch.call(this,e)!==!1){for(s=Z.event.handlers.call(this,e,u),t=0;(i=s[t++])&&!e.isPropagationStopped();)for(e.currentTarget=i.elem,n=0;(o=i.handlers[n++])&&!e.isImmediatePropagationStopped();)(!e.namespace_re||e.namespace_re.test(o.namespace))&&(e.handleObj=o,e.data=o.data,r=((Z.event.special[o.origType]||{}).handle||o.handler).apply(i.elem,a),void 0!==r&&(e.result=r)===!1&&(e.preventDefault(),e.stopPropagation()));return l.postDispatch&&l.postDispatch.call(this,e),e.result}},handlers:function(e,t){var n,r,i,o,s=[],a=t.delegateCount,u=e.target;if(a&&u.nodeType&&(!e.button||"click"!==e.type))for(;u!==this;u=u.parentNode||this)if(u.disabled!==!0||"click"!==e.type){for(r=[],n=0;a>n;n++)o=t[n],i=o.selector+" ",void 0===r[i]&&(r[i]=o.needsContext?Z(i,this).index(u)>=0:Z.find(i,this,null,[u]).length),r[i]&&r.push(o);r.length&&s.push({elem:u,handlers:r})}return a<t.length&&s.push({elem:this,handlers:t.slice(a)}),s},props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(e,t){return null==e.which&&(e.which=null!=t.charCode?t.charCode:t.keyCode),e}},mouseHooks:{props:"button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(e,t){var n,r,i,o=t.button;return null==e.pageX&&null!=t.clientX&&(n=e.target.ownerDocument||J,r=n.documentElement,i=n.body,e.pageX=t.clientX+(r&&r.scrollLeft||i&&i.scrollLeft||0)-(r&&r.clientLeft||i&&i.clientLeft||0),e.pageY=t.clientY+(r&&r.scrollTop||i&&i.scrollTop||0)-(r&&r.clientTop||i&&i.clientTop||0)),e.which||void 0===o||(e.which=1&o?1:2&o?3:4&o?2:0),e}},fix:function(e){if(e[Z.expando])return e;var t,n,r,i=e.type,o=e,s=this.fixHooks[i];for(s||(this.fixHooks[i]=s=Se.test(i)?this.mouseHooks:Ee.test(i)?this.keyHooks:{}),r=s.props?this.props.concat(s.props):this.props,e=new Z.Event(o),t=r.length;t--;)n=r[t],e[n]=o[n];return e.target||(e.target=J),3===e.target.nodeType&&(e.target=e.target.parentNode),s.filter?s.filter(e,o):e},special:{load:{noBubble:!0},focus:{trigger:function(){return this!==f()&&this.focus?(this.focus(),!1):void 0},delegateType:"focusin"},blur:{trigger:function(){return this===f()&&this.blur?(this.blur(),!1):void 0},delegateType:"focusout"},click:{trigger:function(){return"checkbox"===this.type&&this.click&&Z.nodeName(this,"input")?(this.click(),!1):void 0},_default:function(e){return Z.nodeName(e.target,"a")}},beforeunload:{postDispatch:function(e){void 0!==e.result&&e.originalEvent&&(e.originalEvent.returnValue=e.result)}}},simulate:function(e,t,n,r){var i=Z.extend(new Z.Event,n,{type:e,isSimulated:!0,originalEvent:{}});r?Z.event.trigger(i,null,t):Z.event.dispatch.call(t,i),i.isDefaultPrevented()&&n.preventDefault()}},Z.removeEvent=function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n,!1)},Z.Event=function(e,t){return this instanceof Z.Event?(e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||void 0===e.defaultPrevented&&e.returnValue===!1?l:c):this.type=e,t&&Z.extend(this,t),this.timeStamp=e&&e.timeStamp||Z.now(),void(this[Z.expando]=!0)):new Z.Event(e,t)},Z.Event.prototype={isDefaultPrevented:c,isPropagationStopped:c,isImmediatePropagationStopped:c,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=l,e&&e.preventDefault&&e.preventDefault()},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=l,e&&e.stopPropagation&&e.stopPropagation()},stopImmediatePropagation:function(){var e=this.originalEvent;this.isImmediatePropagationStopped=l,e&&e.stopImmediatePropagation&&e.stopImmediatePropagation(),this.stopPropagation()}},Z.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(e,t){Z.event.special[e]={delegateType:t,bindType:t,handle:function(e){var n,r=this,i=e.relatedTarget,o=e.handleObj;return(!i||i!==r&&!Z.contains(r,i))&&(e.type=o.origType,n=o.handler.apply(this,arguments),e.type=t),n}}}),Q.focusinBubbles||Z.each({focus:"focusin",blur:"focusout"},function(e,t){var n=function(e){Z.event.simulate(t,e.target,Z.event.fix(e),!0)};Z.event.special[t]={setup:function(){var r=this.ownerDocument||this,i=ve.access(r,t);i||r.addEventListener(e,n,!0),ve.access(r,t,(i||0)+1)},teardown:function(){var r=this.ownerDocument||this,i=ve.access(r,t)-1;i?ve.access(r,t,i):(r.removeEventListener(e,n,!0),ve.remove(r,t))}}}),Z.fn.extend({on:function(e,t,n,r,i){var o,s;if("object"==typeof e){"string"!=typeof t&&(n=n||t,t=void 0);for(s in e)this.on(s,t,n,e[s],i);return this}if(null==n&&null==r?(r=t,n=t=void 0):null==r&&("string"==typeof t?(r=n,n=void 0):(r=n,n=t,t=void 0)),r===!1)r=c;else if(!r)return this;return 1===i&&(o=r,r=function(e){return Z().off(e),o.apply(this,arguments)},r.guid=o.guid||(o.guid=Z.guid++)),this.each(function(){Z.event.add(this,e,r,n,t)})},one:function(e,t,n,r){return this.on(e,t,n,r,1)},off:function(e,t,n){var r,i;if(e&&e.preventDefault&&e.handleObj)return r=e.handleObj,Z(e.delegateTarget).off(r.namespace?r.origType+"."+r.namespace:r.origType,r.selector,r.handler),this;if("object"==typeof e){for(i in e)this.off(i,t,e[i]);return this}return(t===!1||"function"==typeof t)&&(n=t,t=void 0),n===!1&&(n=c),this.each(function(){Z.event.remove(this,e,n,t)})},trigger:function(e,t){return this.each(function(){Z.event.trigger(e,t,this)})},triggerHandler:function(e,t){var n=this[0];return n?Z.event.trigger(e,t,n,!0):void 0}});var Ae=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,Le=/<([\w:]+)/,qe=/<|&#?\w+;/,He=/<(?:script|style|link)/i,Oe=/checked\s*(?:[^=]|=\s*.checked.)/i,Fe=/^$|\/(?:java|ecma)script/i,Pe=/^true\/(.*)/,Re=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,Me={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};Me.optgroup=Me.option,Me.tbody=Me.tfoot=Me.colgroup=Me.caption=Me.thead,Me.th=Me.td,Z.extend({clone:function(e,t,n){var r,i,o,s,a=e.cloneNode(!0),u=Z.contains(e.ownerDocument,e);if(!(Q.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||Z.isXMLDoc(e)))for(s=v(a),o=v(e),r=0,i=o.length;i>r;r++)y(o[r],s[r]);if(t)if(n)for(o=o||v(e),s=s||v(a),r=0,i=o.length;i>r;r++)m(o[r],s[r]);else m(e,a);return s=v(a,"script"),s.length>0&&g(s,!u&&v(e,"script")),a},buildFragment:function(e,t,n,r){for(var i,o,s,a,u,l,c=t.createDocumentFragment(),f=[],p=0,d=e.length;d>p;p++)if(i=e[p],i||0===i)if("object"===Z.type(i))Z.merge(f,i.nodeType?[i]:i);else if(qe.test(i)){for(o=o||c.appendChild(t.createElement("div")),s=(Le.exec(i)||["",""])[1].toLowerCase(),a=Me[s]||Me._default,o.innerHTML=a[1]+i.replace(Ae,"<$1></$2>")+a[2],l=a[0];l--;)o=o.lastChild;Z.merge(f,o.childNodes),o=c.firstChild,o.textContent=""}else f.push(t.createTextNode(i));for(c.textContent="",p=0;i=f[p++];)if((!r||-1===Z.inArray(i,r))&&(u=Z.contains(i.ownerDocument,i),o=v(c.appendChild(i),"script"),u&&g(o),n))for(l=0;i=o[l++];)Fe.test(i.type||"")&&n.push(i);return c},cleanData:function(e){for(var t,n,r,i,o=Z.event.special,s=0;void 0!==(n=e[s]);s++){if(Z.acceptData(n)&&(i=n[ve.expando],i&&(t=ve.cache[i]))){if(t.events)for(r in t.events)o[r]?Z.event.remove(n,r):Z.removeEvent(n,r,t.handle);ve.cache[i]&&delete ve.cache[i]}delete ye.cache[n[ye.expando]]}}}),Z.fn.extend({text:function(e){return me(this,function(e){return void 0===e?Z.text(this):this.empty().each(function(){(1===this.nodeType||11===this.nodeType||9===this.nodeType)&&(this.textContent=e)})},null,e,arguments.length)},append:function(){return this.domManip(arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=p(this,e);t.appendChild(e)}})},prepend:function(){return this.domManip(arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=p(this,e);t.insertBefore(e,t.firstChild)}})},before:function(){return this.domManip(arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this)})},after:function(){return this.domManip(arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)})},remove:function(e,t){for(var n,r=e?Z.filter(e,this):this,i=0;null!=(n=r[i]);i++)t||1!==n.nodeType||Z.cleanData(v(n)),n.parentNode&&(t&&Z.contains(n.ownerDocument,n)&&g(v(n,"script")),n.parentNode.removeChild(n));return this},empty:function(){for(var e,t=0;null!=(e=this[t]);t++)1===e.nodeType&&(Z.cleanData(v(e,!1)),e.textContent="");return this},clone:function(e,t){return e=null!=e&&e,t=null==t?e:t,this.map(function(){return Z.clone(this,e,t)})},html:function(e){return me(this,function(e){var t=this[0]||{},n=0,r=this.length;if(void 0===e&&1===t.nodeType)return t.innerHTML;if("string"==typeof e&&!He.test(e)&&!Me[(Le.exec(e)||["",""])[1].toLowerCase()]){e=e.replace(Ae,"<$1></$2>");try{for(;r>n;n++)t=this[n]||{},1===t.nodeType&&(Z.cleanData(v(t,!1)),t.innerHTML=e);t=0}catch(e){}}t&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(){var e=arguments[0];return this.domManip(arguments,function(t){e=this.parentNode,Z.cleanData(v(this)),e&&e.replaceChild(t,this)}),e&&(e.length||e.nodeType)?this:this.remove()},detach:function(e){return this.remove(e,!0)},domManip:function(e,t){e=z.apply([],e);var n,r,i,o,s,a,u=0,l=this.length,c=this,f=l-1,p=e[0],g=Z.isFunction(p);if(g||l>1&&"string"==typeof p&&!Q.checkClone&&Oe.test(p))return this.each(function(n){var r=c.eq(n);g&&(e[0]=p.call(this,n,r.html())),r.domManip(e,t)});if(l&&(n=Z.buildFragment(e,this[0].ownerDocument,!1,this),r=n.firstChild,1===n.childNodes.length&&(n=r),r)){for(i=Z.map(v(n,"script"),d),o=i.length;l>u;u++)s=n,u!==f&&(s=Z.clone(s,!0,!0),o&&Z.merge(i,v(s,"script"))),t.call(this[u],s,u);if(o)for(a=i[i.length-1].ownerDocument,Z.map(i,h),u=0;o>u;u++)s=i[u],Fe.test(s.type||"")&&!ve.access(s,"globalEval")&&Z.contains(a,s)&&(s.src?Z._evalUrl&&Z._evalUrl(s.src):Z.globalEval(s.textContent.replace(Re,"")))}return this}}),Z.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,t){Z.fn[e]=function(e){for(var n,r=[],i=Z(e),o=i.length-1,s=0;o>=s;s++)n=s===o?this:this.clone(!0),Z(i[s])[t](n),X.apply(r,n.get());return this.pushStack(r)}});var We,$e={},Ie=/^margin/,Be=new RegExp("^("+we+")(?!px)[a-z%]+$","i"),_e=function(t){return t.ownerDocument.defaultView.opener?t.ownerDocument.defaultView.getComputedStyle(t,null):e.getComputedStyle(t,null)};!function(){function t(){s.style.cssText="-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute",s.innerHTML="",i.appendChild(o);var t=e.getComputedStyle(s,null);n="1%"!==t.top,r="4px"===t.width,i.removeChild(o)}var n,r,i=J.documentElement,o=J.createElement("div"),s=J.createElement("div");s.style&&(s.style.backgroundClip="content-box",s.cloneNode(!0).style.backgroundClip="",Q.clearCloneStyle="content-box"===s.style.backgroundClip,o.style.cssText="border:0;width:0;height:0;top:0;left:-9999px;margin-top:1px;position:absolute",o.appendChild(s),e.getComputedStyle&&Z.extend(Q,{pixelPosition:function(){return t(),n},boxSizingReliable:function(){return null==r&&t(),r},reliableMarginRight:function(){var t,n=s.appendChild(J.createElement("div"));return n.style.cssText=s.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",n.style.marginRight=n.style.width="0",s.style.width="1px",i.appendChild(o),t=!parseFloat(e.getComputedStyle(n,null).marginRight),i.removeChild(o),s.removeChild(n),t}}))}(),Z.swap=function(e,t,n,r){var i,o,s={};for(o in t)s[o]=e.style[o],e.style[o]=t[o];i=n.apply(e,r||[]);for(o in t)e.style[o]=s[o];return i};var ze=/^(none|table(?!-c[ea]).+)/,Xe=new RegExp("^("+we+")(.*)$","i"),Ue=new RegExp("^([+-])=("+we+")","i"),Ve={position:"absolute",visibility:"hidden",display:"block"},Ye={letterSpacing:"0",fontWeight:"400"},Ge=["Webkit","O","Moz","ms"];Z.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=w(e,"opacity");return""===n?"1":n}}}},cssNumber:{columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{float:"cssFloat"},style:function(e,t,n,r){if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){var i,o,s,a=Z.camelCase(t),u=e.style;return t=Z.cssProps[a]||(Z.cssProps[a]=C(u,a)),s=Z.cssHooks[t]||Z.cssHooks[a],void 0===n?s&&"get"in s&&void 0!==(i=s.get(e,!1,r))?i:u[t]:(o=typeof n,"string"===o&&(i=Ue.exec(n))&&(n=(i[1]+1)*i[2]+parseFloat(Z.css(e,t)),o="number"),void(null!=n&&n===n&&("number"!==o||Z.cssNumber[a]||(n+="px"),Q.clearCloneStyle||""!==n||0!==t.indexOf("background")||(u[t]="inherit"),s&&"set"in s&&void 0===(n=s.set(e,n,r))||(u[t]=n))))}},css:function(e,t,n,r){var i,o,s,a=Z.camelCase(t);return t=Z.cssProps[a]||(Z.cssProps[a]=C(e.style,a)),s=Z.cssHooks[t]||Z.cssHooks[a],s&&"get"in s&&(i=s.get(e,!0,n)),void 0===i&&(i=w(e,t,r)),"normal"===i&&t in Ye&&(i=Ye[t]),""===n||n?(o=parseFloat(i),n===!0||Z.isNumeric(o)?o||0:i):i}}),Z.each(["height","width"],function(e,t){Z.cssHooks[t]={get:function(e,n,r){return n?ze.test(Z.css(e,"display"))&&0===e.offsetWidth?Z.swap(e,Ve,function(){return E(e,t,r)}):E(e,t,r):void 0},set:function(e,n,r){var i=r&&_e(e);return N(e,n,r?k(e,t,r,"border-box"===Z.css(e,"boxSizing",!1,i),i):0)}}}),Z.cssHooks.marginRight=T(Q.reliableMarginRight,function(e,t){return t?Z.swap(e,{display:"inline-block"},w,[e,"marginRight"]):void 0}),Z.each({margin:"",padding:"",border:"Width"},function(e,t){Z.cssHooks[e+t]={expand:function(n){for(var r=0,i={},o="string"==typeof n?n.split(" "):[n];4>r;r++)i[e+Te[r]+t]=o[r]||o[r-2]||o[0];return i}},Ie.test(e)||(Z.cssHooks[e+t].set=N)}),Z.fn.extend({css:function(e,t){return me(this,function(e,t,n){var r,i,o={},s=0;if(Z.isArray(t)){for(r=_e(e),i=t.length;i>s;s++)o[t[s]]=Z.css(e,t[s],!1,r);return o}return void 0!==n?Z.style(e,t,n):Z.css(e,t)},e,t,arguments.length>1)},show:function(){return S(this,!0)},hide:function(){return S(this)},toggle:function(e){return"boolean"==typeof e?e?this.show():this.hide():this.each(function(){Ce(this)?Z(this).show():Z(this).hide()})}}),Z.Tween=D,D.prototype={constructor:D,init:function(e,t,n,r,i,o){this.elem=e,this.prop=n,this.easing=i||"swing",this.options=t,this.start=this.now=this.cur(),this.end=r,this.unit=o||(Z.cssNumber[n]?"":"px")},cur:function(){var e=D.propHooks[this.prop];return e&&e.get?e.get(this):D.propHooks._default.get(this)},run:function(e){var t,n=D.propHooks[this.prop];return this.options.duration?this.pos=t=Z.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):this.pos=t=e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):D.propHooks._default.set(this),this}},D.prototype.init.prototype=D.prototype,D.propHooks={_default:{get:function(e){var t;return null==e.elem[e.prop]||e.elem.style&&null!=e.elem.style[e.prop]?(t=Z.css(e.elem,e.prop,""),t&&"auto"!==t?t:0):e.elem[e.prop]},set:function(e){Z.fx.step[e.prop]?Z.fx.step[e.prop](e):e.elem.style&&(null!=e.elem.style[Z.cssProps[e.prop]]||Z.cssHooks[e.prop])?Z.style(e.elem,e.prop,e.now+e.unit):e.elem[e.prop]=e.now}}},D.propHooks.scrollTop=D.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},Z.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2}},Z.fx=D.prototype.init,Z.fx.step={};var Qe,Je,Ke=/^(?:toggle|show|hide)$/,Ze=new RegExp("^(?:([+-])=|)("+we+")([a-z%]*)$","i"),et=/queueHooks$/,tt=[q],nt={"*":[function(e,t){var n=this.createTween(e,t),r=n.cur(),i=Ze.exec(t),o=i&&i[3]||(Z.cssNumber[e]?"":"px"),s=(Z.cssNumber[e]||"px"!==o&&+r)&&Ze.exec(Z.css(n.elem,e)),a=1,u=20;if(s&&s[3]!==o){o=o||s[3],i=i||[],s=+r||1;do a=a||".5",s/=a,Z.style(n.elem,e,s+o);while(a!==(a=n.cur()/r)&&1!==a&&--u)}return i&&(s=n.start=+s||+r||0,n.unit=o,n.end=i[1]?s+(i[1]+1)*i[2]:+i[2]),n}]};Z.Animation=Z.extend(O,{tweener:function(e,t){Z.isFunction(e)?(t=e,e=["*"]):e=e.split(" ");for(var n,r=0,i=e.length;i>r;r++)n=e[r],nt[n]=nt[n]||[],nt[n].unshift(t)},prefilter:function(e,t){t?tt.unshift(e):tt.push(e)}}),Z.speed=function(e,t,n){var r=e&&"object"==typeof e?Z.extend({},e):{complete:n||!n&&t||Z.isFunction(e)&&e,duration:e,easing:n&&t||t&&!Z.isFunction(t)&&t};return r.duration=Z.fx.off?0:"number"==typeof r.duration?r.duration:r.duration in Z.fx.speeds?Z.fx.speeds[r.duration]:Z.fx.speeds._default,(null==r.queue||r.queue===!0)&&(r.queue="fx"),r.old=r.complete,r.complete=function(){Z.isFunction(r.old)&&r.old.call(this),r.queue&&Z.dequeue(this,r.queue)},r},Z.fn.extend({fadeTo:function(e,t,n,r){return this.filter(Ce).css("opacity",0).show().end().animate({opacity:t},e,n,r)},animate:function(e,t,n,r){var i=Z.isEmptyObject(e),o=Z.speed(t,n,r),s=function(){var t=O(this,Z.extend({},e),o);(i||ve.get(this,"finish"))&&t.stop(!0)};return s.finish=s,i||o.queue===!1?this.each(s):this.queue(o.queue,s)},stop:function(e,t,n){var r=function(e){var t=e.stop;delete e.stop,t(n)};return"string"!=typeof e&&(n=t,t=e,e=void 0),t&&e!==!1&&this.queue(e||"fx",[]),this.each(function(){var t=!0,i=null!=e&&e+"queueHooks",o=Z.timers,s=ve.get(this);if(i)s[i]&&s[i].stop&&r(s[i]);else for(i in s)s[i]&&s[i].stop&&et.test(i)&&r(s[i]);for(i=o.length;i--;)o[i].elem!==this||null!=e&&o[i].queue!==e||(o[i].anim.stop(n),t=!1,o.splice(i,1));(t||!n)&&Z.dequeue(this,e)})},finish:function(e){return e!==!1&&(e=e||"fx"),this.each(function(){var t,n=ve.get(this),r=n[e+"queue"],i=n[e+"queueHooks"],o=Z.timers,s=r?r.length:0;for(n.finish=!0,Z.queue(this,e,[]),i&&i.stop&&i.stop.call(this,!0),t=o.length;t--;)o[t].elem===this&&o[t].queue===e&&(o[t].anim.stop(!0),
o.splice(t,1));for(t=0;s>t;t++)r[t]&&r[t].finish&&r[t].finish.call(this);delete n.finish})}}),Z.each(["toggle","show","hide"],function(e,t){var n=Z.fn[t];Z.fn[t]=function(e,r,i){return null==e||"boolean"==typeof e?n.apply(this,arguments):this.animate(A(t,!0),e,r,i)}}),Z.each({slideDown:A("show"),slideUp:A("hide"),slideToggle:A("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,t){Z.fn[e]=function(e,n,r){return this.animate(t,e,n,r)}}),Z.timers=[],Z.fx.tick=function(){var e,t=0,n=Z.timers;for(Qe=Z.now();t<n.length;t++)e=n[t],e()||n[t]!==e||n.splice(t--,1);n.length||Z.fx.stop(),Qe=void 0},Z.fx.timer=function(e){Z.timers.push(e),e()?Z.fx.start():Z.timers.pop()},Z.fx.interval=13,Z.fx.start=function(){Je||(Je=setInterval(Z.fx.tick,Z.fx.interval))},Z.fx.stop=function(){clearInterval(Je),Je=null},Z.fx.speeds={slow:600,fast:200,_default:400},Z.fn.delay=function(e,t){return e=Z.fx?Z.fx.speeds[e]||e:e,t=t||"fx",this.queue(t,function(t,n){var r=setTimeout(t,e);n.stop=function(){clearTimeout(r)}})},function(){var e=J.createElement("input"),t=J.createElement("select"),n=t.appendChild(J.createElement("option"));e.type="checkbox",Q.checkOn=""!==e.value,Q.optSelected=n.selected,t.disabled=!0,Q.optDisabled=!n.disabled,e=J.createElement("input"),e.value="t",e.type="radio",Q.radioValue="t"===e.value}();var rt,it,ot=Z.expr.attrHandle;Z.fn.extend({attr:function(e,t){return me(this,Z.attr,e,t,arguments.length>1)},removeAttr:function(e){return this.each(function(){Z.removeAttr(this,e)})}}),Z.extend({attr:function(e,t,n){var r,i,o=e.nodeType;if(e&&3!==o&&8!==o&&2!==o)return typeof e.getAttribute===ke?Z.prop(e,t,n):(1===o&&Z.isXMLDoc(e)||(t=t.toLowerCase(),r=Z.attrHooks[t]||(Z.expr.match.bool.test(t)?it:rt)),void 0===n?r&&"get"in r&&null!==(i=r.get(e,t))?i:(i=Z.find.attr(e,t),null==i?void 0:i):null!==n?r&&"set"in r&&void 0!==(i=r.set(e,n,t))?i:(e.setAttribute(t,n+""),n):void Z.removeAttr(e,t))},removeAttr:function(e,t){var n,r,i=0,o=t&&t.match(de);if(o&&1===e.nodeType)for(;n=o[i++];)r=Z.propFix[n]||n,Z.expr.match.bool.test(n)&&(e[r]=!1),e.removeAttribute(n)},attrHooks:{type:{set:function(e,t){if(!Q.radioValue&&"radio"===t&&Z.nodeName(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}}}}),it={set:function(e,t,n){return t===!1?Z.removeAttr(e,n):e.setAttribute(n,n),n}},Z.each(Z.expr.match.bool.source.match(/\w+/g),function(e,t){var n=ot[t]||Z.find.attr;ot[t]=function(e,t,r){var i,o;return r||(o=ot[t],ot[t]=i,i=null!=n(e,t,r)?t.toLowerCase():null,ot[t]=o),i}});var st=/^(?:input|select|textarea|button)$/i;Z.fn.extend({prop:function(e,t){return me(this,Z.prop,e,t,arguments.length>1)},removeProp:function(e){return this.each(function(){delete this[Z.propFix[e]||e]})}}),Z.extend({propFix:{for:"htmlFor",class:"className"},prop:function(e,t,n){var r,i,o,s=e.nodeType;if(e&&3!==s&&8!==s&&2!==s)return o=1!==s||!Z.isXMLDoc(e),o&&(t=Z.propFix[t]||t,i=Z.propHooks[t]),void 0!==n?i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:e[t]=n:i&&"get"in i&&null!==(r=i.get(e,t))?r:e[t]},propHooks:{tabIndex:{get:function(e){return e.hasAttribute("tabindex")||st.test(e.nodeName)||e.href?e.tabIndex:-1}}}}),Q.optSelected||(Z.propHooks.selected={get:function(e){var t=e.parentNode;return t&&t.parentNode&&t.parentNode.selectedIndex,null}}),Z.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){Z.propFix[this.toLowerCase()]=this});var at=/[\t\r\n\f]/g;Z.fn.extend({addClass:function(e){var t,n,r,i,o,s,a="string"==typeof e&&e,u=0,l=this.length;if(Z.isFunction(e))return this.each(function(t){Z(this).addClass(e.call(this,t,this.className))});if(a)for(t=(e||"").match(de)||[];l>u;u++)if(n=this[u],r=1===n.nodeType&&(n.className?(" "+n.className+" ").replace(at," "):" ")){for(o=0;i=t[o++];)r.indexOf(" "+i+" ")<0&&(r+=i+" ");s=Z.trim(r),n.className!==s&&(n.className=s)}return this},removeClass:function(e){var t,n,r,i,o,s,a=0===arguments.length||"string"==typeof e&&e,u=0,l=this.length;if(Z.isFunction(e))return this.each(function(t){Z(this).removeClass(e.call(this,t,this.className))});if(a)for(t=(e||"").match(de)||[];l>u;u++)if(n=this[u],r=1===n.nodeType&&(n.className?(" "+n.className+" ").replace(at," "):"")){for(o=0;i=t[o++];)for(;r.indexOf(" "+i+" ")>=0;)r=r.replace(" "+i+" "," ");s=e?Z.trim(r):"",n.className!==s&&(n.className=s)}return this},toggleClass:function(e,t){var n=typeof e;return"boolean"==typeof t&&"string"===n?t?this.addClass(e):this.removeClass(e):this.each(Z.isFunction(e)?function(n){Z(this).toggleClass(e.call(this,n,this.className,t),t)}:function(){if("string"===n)for(var t,r=0,i=Z(this),o=e.match(de)||[];t=o[r++];)i.hasClass(t)?i.removeClass(t):i.addClass(t);else(n===ke||"boolean"===n)&&(this.className&&ve.set(this,"__className__",this.className),this.className=this.className||e===!1?"":ve.get(this,"__className__")||"")})},hasClass:function(e){for(var t=" "+e+" ",n=0,r=this.length;r>n;n++)if(1===this[n].nodeType&&(" "+this[n].className+" ").replace(at," ").indexOf(t)>=0)return!0;return!1}});var ut=/\r/g;Z.fn.extend({val:function(e){var t,n,r,i=this[0];return arguments.length?(r=Z.isFunction(e),this.each(function(n){var i;1===this.nodeType&&(i=r?e.call(this,n,Z(this).val()):e,null==i?i="":"number"==typeof i?i+="":Z.isArray(i)&&(i=Z.map(i,function(e){return null==e?"":e+""})),t=Z.valHooks[this.type]||Z.valHooks[this.nodeName.toLowerCase()],t&&"set"in t&&void 0!==t.set(this,i,"value")||(this.value=i))})):i?(t=Z.valHooks[i.type]||Z.valHooks[i.nodeName.toLowerCase()],t&&"get"in t&&void 0!==(n=t.get(i,"value"))?n:(n=i.value,"string"==typeof n?n.replace(ut,""):null==n?"":n)):void 0}}),Z.extend({valHooks:{option:{get:function(e){var t=Z.find.attr(e,"value");return null!=t?t:Z.trim(Z.text(e))}},select:{get:function(e){for(var t,n,r=e.options,i=e.selectedIndex,o="select-one"===e.type||0>i,s=o?null:[],a=o?i+1:r.length,u=0>i?a:o?i:0;a>u;u++)if(n=r[u],!(!n.selected&&u!==i||(Q.optDisabled?n.disabled:null!==n.getAttribute("disabled"))||n.parentNode.disabled&&Z.nodeName(n.parentNode,"optgroup"))){if(t=Z(n).val(),o)return t;s.push(t)}return s},set:function(e,t){for(var n,r,i=e.options,o=Z.makeArray(t),s=i.length;s--;)r=i[s],(r.selected=Z.inArray(r.value,o)>=0)&&(n=!0);return n||(e.selectedIndex=-1),o}}}}),Z.each(["radio","checkbox"],function(){Z.valHooks[this]={set:function(e,t){return Z.isArray(t)?e.checked=Z.inArray(Z(e).val(),t)>=0:void 0}},Q.checkOn||(Z.valHooks[this].get=function(e){return null===e.getAttribute("value")?"on":e.value})}),Z.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(e,t){Z.fn[t]=function(e,n){return arguments.length>0?this.on(t,null,e,n):this.trigger(t)}}),Z.fn.extend({hover:function(e,t){return this.mouseenter(e).mouseleave(t||e)},bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},delegate:function(e,t,n,r){return this.on(t,e,n,r)},undelegate:function(e,t,n){return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",n)}});var lt=Z.now(),ct=/\?/;Z.parseJSON=function(e){return JSON.parse(e+"")},Z.parseXML=function(e){var t,n;if(!e||"string"!=typeof e)return null;try{n=new DOMParser,t=n.parseFromString(e,"text/xml")}catch(e){t=void 0}return(!t||t.getElementsByTagName("parsererror").length)&&Z.error("Invalid XML: "+e),t};var ft=/#.*$/,pt=/([?&])_=[^&]*/,dt=/^(.*?):[ \t]*([^\r\n]*)$/gm,ht=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,gt=/^(?:GET|HEAD)$/,mt=/^\/\//,vt=/^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,yt={},xt={},bt="*/".concat("*"),wt=e.location.href,Tt=vt.exec(wt.toLowerCase())||[];Z.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:wt,type:"GET",isLocal:ht.test(Tt[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":bt,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":Z.parseJSON,"text xml":Z.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(e,t){return t?R(R(e,Z.ajaxSettings),t):R(Z.ajaxSettings,e)},ajaxPrefilter:F(yt),ajaxTransport:F(xt),ajax:function(e,t){function n(e,t,n,s){var u,c,v,y,b,T=t;2!==x&&(x=2,a&&clearTimeout(a),r=void 0,o=s||"",w.readyState=e>0?4:0,u=e>=200&&300>e||304===e,n&&(y=M(f,w,n)),y=W(f,y,w,u),u?(f.ifModified&&(b=w.getResponseHeader("Last-Modified"),b&&(Z.lastModified[i]=b),b=w.getResponseHeader("etag"),b&&(Z.etag[i]=b)),204===e||"HEAD"===f.type?T="nocontent":304===e?T="notmodified":(T=y.state,c=y.data,v=y.error,u=!v)):(v=T,(e||!T)&&(T="error",0>e&&(e=0))),w.status=e,w.statusText=(t||T)+"",u?h.resolveWith(p,[c,T,w]):h.rejectWith(p,[w,T,v]),w.statusCode(m),m=void 0,l&&d.trigger(u?"ajaxSuccess":"ajaxError",[w,f,u?c:v]),g.fireWith(p,[w,T]),l&&(d.trigger("ajaxComplete",[w,f]),--Z.active||Z.event.trigger("ajaxStop")))}"object"==typeof e&&(t=e,e=void 0),t=t||{};var r,i,o,s,a,u,l,c,f=Z.ajaxSetup({},t),p=f.context||f,d=f.context&&(p.nodeType||p.jquery)?Z(p):Z.event,h=Z.Deferred(),g=Z.Callbacks("once memory"),m=f.statusCode||{},v={},y={},x=0,b="canceled",w={readyState:0,getResponseHeader:function(e){var t;if(2===x){if(!s)for(s={};t=dt.exec(o);)s[t[1].toLowerCase()]=t[2];t=s[e.toLowerCase()]}return null==t?null:t},getAllResponseHeaders:function(){return 2===x?o:null},setRequestHeader:function(e,t){var n=e.toLowerCase();return x||(e=y[n]=y[n]||e,v[e]=t),this},overrideMimeType:function(e){return x||(f.mimeType=e),this},statusCode:function(e){var t;if(e)if(2>x)for(t in e)m[t]=[m[t],e[t]];else w.always(e[w.status]);return this},abort:function(e){var t=e||b;return r&&r.abort(t),n(0,t),this}};if(h.promise(w).complete=g.add,w.success=w.done,w.error=w.fail,f.url=((e||f.url||wt)+"").replace(ft,"").replace(mt,Tt[1]+"//"),f.type=t.method||t.type||f.method||f.type,f.dataTypes=Z.trim(f.dataType||"*").toLowerCase().match(de)||[""],null==f.crossDomain&&(u=vt.exec(f.url.toLowerCase()),f.crossDomain=!(!u||u[1]===Tt[1]&&u[2]===Tt[2]&&(u[3]||("http:"===u[1]?"80":"443"))===(Tt[3]||("http:"===Tt[1]?"80":"443")))),f.data&&f.processData&&"string"!=typeof f.data&&(f.data=Z.param(f.data,f.traditional)),P(yt,f,t,w),2===x)return w;l=Z.event&&f.global,l&&0===Z.active++&&Z.event.trigger("ajaxStart"),f.type=f.type.toUpperCase(),f.hasContent=!gt.test(f.type),i=f.url,f.hasContent||(f.data&&(i=f.url+=(ct.test(i)?"&":"?")+f.data,delete f.data),f.cache===!1&&(f.url=pt.test(i)?i.replace(pt,"$1_="+lt++):i+(ct.test(i)?"&":"?")+"_="+lt++)),f.ifModified&&(Z.lastModified[i]&&w.setRequestHeader("If-Modified-Since",Z.lastModified[i]),Z.etag[i]&&w.setRequestHeader("If-None-Match",Z.etag[i])),(f.data&&f.hasContent&&f.contentType!==!1||t.contentType)&&w.setRequestHeader("Content-Type",f.contentType),w.setRequestHeader("Accept",f.dataTypes[0]&&f.accepts[f.dataTypes[0]]?f.accepts[f.dataTypes[0]]+("*"!==f.dataTypes[0]?", "+bt+"; q=0.01":""):f.accepts["*"]);for(c in f.headers)w.setRequestHeader(c,f.headers[c]);if(f.beforeSend&&(f.beforeSend.call(p,w,f)===!1||2===x))return w.abort();b="abort";for(c in{success:1,error:1,complete:1})w[c](f[c]);if(r=P(xt,f,t,w)){w.readyState=1,l&&d.trigger("ajaxSend",[w,f]),f.async&&f.timeout>0&&(a=setTimeout(function(){w.abort("timeout")},f.timeout));try{x=1,r.send(v,n)}catch(e){if(!(2>x))throw e;n(-1,e)}}else n(-1,"No Transport");return w},getJSON:function(e,t,n){return Z.get(e,t,n,"json")},getScript:function(e,t){return Z.get(e,void 0,t,"script")}}),Z.each(["get","post"],function(e,t){Z[t]=function(e,n,r,i){return Z.isFunction(n)&&(i=i||r,r=n,n=void 0),Z.ajax({url:e,type:t,dataType:i,data:n,success:r})}}),Z._evalUrl=function(e){return Z.ajax({url:e,type:"GET",dataType:"script",async:!1,global:!1,throws:!0})},Z.fn.extend({wrapAll:function(e){var t;return Z.isFunction(e)?this.each(function(t){Z(this).wrapAll(e.call(this,t))}):(this[0]&&(t=Z(e,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){for(var e=this;e.firstElementChild;)e=e.firstElementChild;return e}).append(this)),this)},wrapInner:function(e){return this.each(Z.isFunction(e)?function(t){Z(this).wrapInner(e.call(this,t))}:function(){var t=Z(this),n=t.contents();n.length?n.wrapAll(e):t.append(e)})},wrap:function(e){var t=Z.isFunction(e);return this.each(function(n){Z(this).wrapAll(t?e.call(this,n):e)})},unwrap:function(){return this.parent().each(function(){Z.nodeName(this,"body")||Z(this).replaceWith(this.childNodes)}).end()}}),Z.expr.filters.hidden=function(e){return e.offsetWidth<=0&&e.offsetHeight<=0},Z.expr.filters.visible=function(e){return!Z.expr.filters.hidden(e)};var Ct=/%20/g,Nt=/\[\]$/,kt=/\r?\n/g,Et=/^(?:submit|button|image|reset|file)$/i,St=/^(?:input|select|textarea|keygen)/i;Z.param=function(e,t){var n,r=[],i=function(e,t){t=Z.isFunction(t)?t():null==t?"":t,r[r.length]=encodeURIComponent(e)+"="+encodeURIComponent(t)};if(void 0===t&&(t=Z.ajaxSettings&&Z.ajaxSettings.traditional),Z.isArray(e)||e.jquery&&!Z.isPlainObject(e))Z.each(e,function(){i(this.name,this.value)});else for(n in e)$(n,e[n],t,i);return r.join("&").replace(Ct,"+")},Z.fn.extend({serialize:function(){return Z.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var e=Z.prop(this,"elements");return e?Z.makeArray(e):this}).filter(function(){var e=this.type;return this.name&&!Z(this).is(":disabled")&&St.test(this.nodeName)&&!Et.test(e)&&(this.checked||!Ne.test(e))}).map(function(e,t){var n=Z(this).val();return null==n?null:Z.isArray(n)?Z.map(n,function(e){return{name:t.name,value:e.replace(kt,"\r\n")}}):{name:t.name,value:n.replace(kt,"\r\n")}}).get()}}),Z.ajaxSettings.xhr=function(){try{return new XMLHttpRequest}catch(e){}};var Dt=0,jt={},At={0:200,1223:204},Lt=Z.ajaxSettings.xhr();e.attachEvent&&e.attachEvent("onunload",function(){for(var e in jt)jt[e]()}),Q.cors=!!Lt&&"withCredentials"in Lt,Q.ajax=Lt=!!Lt,Z.ajaxTransport(function(e){var t;return Q.cors||Lt&&!e.crossDomain?{send:function(n,r){var i,o=e.xhr(),s=++Dt;if(o.open(e.type,e.url,e.async,e.username,e.password),e.xhrFields)for(i in e.xhrFields)o[i]=e.xhrFields[i];e.mimeType&&o.overrideMimeType&&o.overrideMimeType(e.mimeType),e.crossDomain||n["X-Requested-With"]||(n["X-Requested-With"]="XMLHttpRequest");for(i in n)o.setRequestHeader(i,n[i]);t=function(e){return function(){t&&(delete jt[s],t=o.onload=o.onerror=null,"abort"===e?o.abort():"error"===e?r(o.status,o.statusText):r(At[o.status]||o.status,o.statusText,"string"==typeof o.responseText?{text:o.responseText}:void 0,o.getAllResponseHeaders()))}},o.onload=t(),o.onerror=t("error"),t=jt[s]=t("abort");try{o.send(e.hasContent&&e.data||null)}catch(e){if(t)throw e}},abort:function(){t&&t()}}:void 0}),Z.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/(?:java|ecma)script/},converters:{"text script":function(e){return Z.globalEval(e),e}}}),Z.ajaxPrefilter("script",function(e){void 0===e.cache&&(e.cache=!1),e.crossDomain&&(e.type="GET")}),Z.ajaxTransport("script",function(e){if(e.crossDomain){var t,n;return{send:function(r,i){t=Z("<script>").prop({async:!0,charset:e.scriptCharset,src:e.url}).on("load error",n=function(e){t.remove(),n=null,e&&i("error"===e.type?404:200,e.type)}),J.head.appendChild(t[0])},abort:function(){n&&n()}}}});var qt=[],Ht=/(=)\?(?=&|$)|\?\?/;Z.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=qt.pop()||Z.expando+"_"+lt++;return this[e]=!0,e}}),Z.ajaxPrefilter("json jsonp",function(t,n,r){var i,o,s,a=t.jsonp!==!1&&(Ht.test(t.url)?"url":"string"==typeof t.data&&!(t.contentType||"").indexOf("application/x-www-form-urlencoded")&&Ht.test(t.data)&&"data");return a||"jsonp"===t.dataTypes[0]?(i=t.jsonpCallback=Z.isFunction(t.jsonpCallback)?t.jsonpCallback():t.jsonpCallback,a?t[a]=t[a].replace(Ht,"$1"+i):t.jsonp!==!1&&(t.url+=(ct.test(t.url)?"&":"?")+t.jsonp+"="+i),t.converters["script json"]=function(){return s||Z.error(i+" was not called"),s[0]},t.dataTypes[0]="json",o=e[i],e[i]=function(){s=arguments},r.always(function(){e[i]=o,t[i]&&(t.jsonpCallback=n.jsonpCallback,qt.push(i)),s&&Z.isFunction(o)&&o(s[0]),s=o=void 0}),"script"):void 0}),Z.parseHTML=function(e,t,n){if(!e||"string"!=typeof e)return null;"boolean"==typeof t&&(n=t,t=!1),t=t||J;var r=se.exec(e),i=!n&&[];return r?[t.createElement(r[1])]:(r=Z.buildFragment([e],t,i),i&&i.length&&Z(i).remove(),Z.merge([],r.childNodes))};var Ot=Z.fn.load;Z.fn.load=function(e,t,n){if("string"!=typeof e&&Ot)return Ot.apply(this,arguments);var r,i,o,s=this,a=e.indexOf(" ");return a>=0&&(r=Z.trim(e.slice(a)),e=e.slice(0,a)),Z.isFunction(t)?(n=t,t=void 0):t&&"object"==typeof t&&(i="POST"),s.length>0&&Z.ajax({url:e,type:i,dataType:"html",data:t}).done(function(e){o=arguments,s.html(r?Z("<div>").append(Z.parseHTML(e)).find(r):e)}).complete(n&&function(e,t){s.each(n,o||[e.responseText,t,e])}),this},Z.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,t){Z.fn[t]=function(e){return this.on(t,e)}}),Z.expr.filters.animated=function(e){return Z.grep(Z.timers,function(t){return e===t.elem}).length};var Ft=e.document.documentElement;Z.offset={setOffset:function(e,t,n){var r,i,o,s,a,u,l,c=Z.css(e,"position"),f=Z(e),p={};"static"===c&&(e.style.position="relative"),a=f.offset(),o=Z.css(e,"top"),u=Z.css(e,"left"),l=("absolute"===c||"fixed"===c)&&(o+u).indexOf("auto")>-1,l?(r=f.position(),s=r.top,i=r.left):(s=parseFloat(o)||0,i=parseFloat(u)||0),Z.isFunction(t)&&(t=t.call(e,n,a)),null!=t.top&&(p.top=t.top-a.top+s),null!=t.left&&(p.left=t.left-a.left+i),"using"in t?t.using.call(e,p):f.css(p)}},Z.fn.extend({offset:function(e){if(arguments.length)return void 0===e?this:this.each(function(t){Z.offset.setOffset(this,e,t)});var t,n,r=this[0],i={top:0,left:0},o=r&&r.ownerDocument;return o?(t=o.documentElement,Z.contains(t,r)?(typeof r.getBoundingClientRect!==ke&&(i=r.getBoundingClientRect()),n=I(o),{top:i.top+n.pageYOffset-t.clientTop,left:i.left+n.pageXOffset-t.clientLeft}):i):void 0},position:function(){if(this[0]){var e,t,n=this[0],r={top:0,left:0};return"fixed"===Z.css(n,"position")?t=n.getBoundingClientRect():(e=this.offsetParent(),t=this.offset(),Z.nodeName(e[0],"html")||(r=e.offset()),r.top+=Z.css(e[0],"borderTopWidth",!0),r.left+=Z.css(e[0],"borderLeftWidth",!0)),{top:t.top-r.top-Z.css(n,"marginTop",!0),left:t.left-r.left-Z.css(n,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){for(var e=this.offsetParent||Ft;e&&!Z.nodeName(e,"html")&&"static"===Z.css(e,"position");)e=e.offsetParent;return e||Ft})}}),Z.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(t,n){var r="pageYOffset"===n;Z.fn[t]=function(i){return me(this,function(t,i,o){var s=I(t);return void 0===o?s?s[n]:t[i]:void(s?s.scrollTo(r?e.pageXOffset:o,r?o:e.pageYOffset):t[i]=o)},t,i,arguments.length,null)}}),Z.each(["top","left"],function(e,t){Z.cssHooks[t]=T(Q.pixelPosition,function(e,n){return n?(n=w(e,t),Be.test(n)?Z(e).position()[t]+"px":n):void 0})}),Z.each({Height:"height",Width:"width"},function(e,t){Z.each({padding:"inner"+e,content:t,"":"outer"+e},function(n,r){Z.fn[r]=function(r,i){var o=arguments.length&&(n||"boolean"!=typeof r),s=n||(r===!0||i===!0?"margin":"border");return me(this,function(t,n,r){var i;return Z.isWindow(t)?t.document.documentElement["client"+e]:9===t.nodeType?(i=t.documentElement,Math.max(t.body["scroll"+e],i["scroll"+e],t.body["offset"+e],i["offset"+e],i["client"+e])):void 0===r?Z.css(t,n,s):Z.style(t,n,r,s)},t,o?r:void 0,o,null)}})}),Z.fn.size=function(){return this.length},Z.fn.andSelf=Z.fn.addBack,"function"==typeof define&&define.amd&&define("jquery",[],function(){return Z});var Pt=e.jQuery,Rt=e.$;return Z.noConflict=function(t){return e.$===Z&&(e.$=Rt),t&&e.jQuery===Z&&(e.jQuery=Pt),Z},typeof t===ke&&(e.jQuery=e.$=Z),Z});

function launchParticlesJS(e, a) {
    function i() {
        pJS.fn.canvasInit(), pJS.fn.canvasSize(), pJS.fn.canvasPaint(), pJS.fn.particlesCreate(), pJS.fn.particlesDraw(), pJS.fn.densityAuto()
    }

    function t() {
        pJS.fn.particlesDraw(), pJS.fn.requestAnimFrame = requestAnimFrame(t)
    }

    var n = document.querySelector("#" + e + " > canvas");
    if (pJS = {
            canvas: {el: n, w: n.offsetWidth, h: n.offsetHeight},
            particles: {
                color: "#fff",
                color_random: !1,
                shape: "circle",
                opacity: {opacity: 1, anim: {enable: !1, speed: 2, opacity_min: 0, sync: !1}},
                size: 2.5,
                size_random: !0,
                nb: 200,
                line_linked: {
                    enable_auto: !0,
                    distance: 100,
                    color: "#fff",
                    opacity: 1,
                    width: 1,
                    condensed_mode: {enable: !1, rotateX: 3e3, rotateY: 3e3}
                },
                anim: {enable: !0, speed: 2},
                array: []
            },
            interactivity: {
                enable: !0,
                mouse: {distance: 100},
                detect_on: "canvas",
                mode: "grab",
                line_linked: {opacity: 1},
                events: {
                    onclick: {enable: !0, mode: "push", nb: 4},
                    onresize: {enable: !0, mode: "out", density_auto: !1, density_area: 800}
                }
            },
            retina_detect: !1,
            fn: {vendors: {interactivity: {}}}
        }, a) {
        if (a.particles) {
            var c = a.particles;
            if (c.color && (pJS.particles.color = c.color), c.color_random && (pJS.particles.color_random = c.color_random), c.shape && (pJS.particles.shape = c.shape), c.opacity) {
                var s = c.opacity;
                if (pJS.particles.opacity.opacity = "object" == typeof s ? s.opacity : s, s.anim) {
                    var r = s.anim;
                    (0 == r.enable || r.enable) && (pJS.particles.opacity.anim.enable = r.enable), r.speed && (pJS.particles.opacity.anim.speed = r.speed), r.opacity_min && (pJS.particles.opacity.anim.opacity_min = r.opacity_min), (0 == r.sync || r.sync) && (pJS.particles.opacity.anim.sync = r.sync)
                }
            }
            if (c.size && (pJS.particles.size = c.size), 0 == c.size_random && (pJS.particles.size_random = c.size_random), c.nb && (pJS.particles.nb = c.nb), c.line_linked) {
                var p = c.line_linked;
                if (0 == p.enable_auto && (pJS.particles.line_linked.enable_auto = p.enable_auto), p.distance && (pJS.particles.line_linked.distance = p.distance), p.color && (pJS.particles.line_linked.color = p.color), p.opacity && (pJS.particles.line_linked.opacity = p.opacity), p.width && (pJS.particles.line_linked.width = p.width), p.condensed_mode) {
                    var o = p.condensed_mode;
                    0 == o.enable && (pJS.particles.line_linked.condensed_mode.enable = o.enable), o.rotateX && (pJS.particles.line_linked.condensed_mode.rotateX = o.rotateX), o.rotateY && (pJS.particles.line_linked.condensed_mode.rotateY = o.rotateY)
                }
            }
            if (c.anim) {
                var l = c.anim;
                0 == l.enable && (pJS.particles.anim.enable = l.enable), l.speed && (pJS.particles.anim.speed = l.speed)
            }
        }
        if (a.interactivity) {
            var S = a.interactivity;
            if (0 == S.enable && (pJS.interactivity.enable = S.enable), S.mouse && S.mouse.distance && (pJS.interactivity.mouse.distance = S.mouse.distance), S.detect_on && (pJS.interactivity.detect_on = S.detect_on), (0 == S.mode || S.mode) && (pJS.interactivity.mode = S.mode), S.line_linked && S.line_linked.opacity && (pJS.interactivity.line_linked.opacity = S.line_linked.opacity), S.events) {
                var v = S.events;
                if (v.onclick) {
                    var J = v.onclick;
                    0 == J.enable && (pJS.interactivity.events.onclick.enable = !1), "push" != J.mode && (pJS.interactivity.events.onclick.mode = J.mode), J.nb && (pJS.interactivity.events.onclick.nb = J.nb)
                }
                if (v.onresize) {
                    var d = v.onresize;
                    0 == d.enable && (pJS.interactivity.events.onresize.enable = !1), d.mode && (pJS.interactivity.events.onresize.mode = d.mode), (0 == d.density_auto || d.density_auto) && (pJS.interactivity.events.onresize.density_auto = d.density_auto), d.density_area && (pJS.interactivity.events.onresize.density_area = d.density_area)
                }
            }
        }
        pJS.retina_detect = a.retina_detect
    }
    pJS.particles.color_rgb = hexToRgb(pJS.particles.color), pJS.particles.line_linked.color_rgb_line = hexToRgb(pJS.particles.line_linked.color), pJS.retina_detect && window.devicePixelRatio > 1 && (pJS.retina = !0, pJS.canvas.pxratio = window.devicePixelRatio, pJS.canvas.w = pJS.canvas.el.offsetWidth * pJS.canvas.pxratio, pJS.canvas.h = pJS.canvas.el.offsetHeight * pJS.canvas.pxratio, pJS.particles.anim.speed = pJS.particles.anim.speed * pJS.canvas.pxratio, pJS.particles.line_linked.distance = pJS.particles.line_linked.distance * pJS.canvas.pxratio, pJS.particles.line_linked.width = pJS.particles.line_linked.width * pJS.canvas.pxratio, pJS.interactivity.mouse.distance = pJS.interactivity.mouse.distance * pJS.canvas.pxratio), pJS.fn.canvasInit = function () {
        pJS.canvas.ctx = pJS.canvas.el.getContext("2d")
    }, pJS.fn.canvasSize = function () {
        pJS.canvas.el.width = pJS.canvas.w, pJS.canvas.el.height = pJS.canvas.h, window.addEventListener("resize", function () {
            pJS && pJS.interactivity.events.onresize.enable && (pJS.canvas.w = pJS.canvas.el.offsetWidth, pJS.canvas.h = pJS.canvas.el.offsetHeight, pJS.retina && (pJS.canvas.w *= pJS.canvas.pxratio, pJS.canvas.h *= pJS.canvas.pxratio), pJS.canvas.el.width = pJS.canvas.w, pJS.canvas.el.height = pJS.canvas.h, pJS.fn.canvasPaint(), pJS.particles.anim.enable || (pJS.fn.particlesRemove(), pJS.fn.canvasRemove(), i()), pJS.fn.densityAuto())
        })
    }, pJS.fn.densityAuto = function () {
        if (pJS.interactivity.events.onresize.density_auto) {
            var e = pJS.canvas.el.width * pJS.canvas.el.height / 1e3;
            pJS.retina && (e /= 2 * pJS.canvas.pxratio);
            var a = e * pJS.particles.nb / pJS.interactivity.events.onresize.density_area, i = pJS.particles.array.length - a;
            0 > i ? pJS.fn.vendors.interactivity.pushParticles(Math.abs(i)) : pJS.fn.vendors.interactivity.removeParticles(i)
        }
    }, pJS.fn.canvasPaint = function () {
        pJS.canvas.ctx.fillRect(0, 0, pJS.canvas.w, pJS.canvas.h)
    }, pJS.fn.canvasRemove = function () {
        pJS.canvas.ctx.clearRect(0, 0, pJS.canvas.w, pJS.canvas.h)
    }, pJS.fn.particle = function (e, a, i) {
        this.x = i ? i.x : Math.random() * pJS.canvas.w, this.y = i ? i.y : Math.random() * pJS.canvas.h, this.radius = (pJS.particles.size_random ? Math.random() : 1) * pJS.particles.size, pJS.retina && (this.radius *= pJS.canvas.pxratio), this.color = pJS.particles.color_random ? {
            r: Math.floor(256 * Math.random()) + 0,
            g: Math.floor(256 * Math.random()) + 0,
            b: Math.floor(256 * Math.random()) + 0
        } : e, this.opacity = a, pJS.particles.opacity.anim.enable && (this.opacity_status = !1, this.vo = pJS.particles.opacity.anim.speed / 100, pJS.particles.opacity.anim.sync || (this.vo = this.vo * Math.random())), this.vx = -.5 + Math.random(), this.vy = -.5 + Math.random()
    }, pJS.fn.particle.prototype.draw = function () {
        switch (pJS.canvas.ctx.fillStyle = "rgba(" + this.color.r + "," + this.color.g + "," + this.color.b + "," + this.opacity + ")", pJS.canvas.ctx.beginPath(), pJS.particles.shape) {
            case"circle":
                pJS.canvas.ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI, !1);
                break;
            case"edge":
                pJS.canvas.ctx.rect(this.x, this.y, 2 * this.radius, 2 * this.radius);
                break;
            case"triangle":
                pJS.canvas.ctx.moveTo(this.x, this.y - this.radius), pJS.canvas.ctx.lineTo(this.x + this.radius, this.y + this.radius), pJS.canvas.ctx.lineTo(this.x - this.radius, this.y + this.radius), pJS.canvas.ctx.closePath()
        }
        pJS.canvas.ctx.fill()
    }, pJS.fn.particlesCreate = function () {
        for (var e = 0; e < pJS.particles.nb; e++)pJS.particles.array.push(new pJS.fn.particle(pJS.particles.color_rgb, pJS.particles.opacity.opacity))
    }, pJS.fn.particlesAnimate = function () {
        for (var e = 0; e < pJS.particles.array.length; e++) {
            var a = pJS.particles.array[e];
            switch (a.x += a.vx * (pJS.particles.anim.speed / 2), a.y += a.vy * (pJS.particles.anim.speed / 2), pJS.particles.opacity.anim.enable && (1 == a.opacity_status ? (a.opacity >= pJS.particles.opacity.opacity && (a.opacity_status = !1), a.opacity += a.vo) : (a.opacity <= pJS.particles.opacity.anim.opacity_min && (a.opacity_status = !0), a.opacity -= a.vo)), pJS.interactivity.events.onresize.mode) {
                case"bounce":
                    a.x - a.radius > pJS.canvas.w ? a.vx = -a.vx : a.x + a.radius < 0 && (a.vx = -a.vx), a.y - a.radius > pJS.canvas.h ? a.vy = -a.vy : a.y + a.radius < 0 && (a.vy = -a.vy);
                    break;
                case"out":
                    a.x - a.radius > pJS.canvas.w ? a.x = a.radius : a.x + a.radius < 0 && (a.x = pJS.canvas.w + a.radius), a.y - a.radius > pJS.canvas.h ? a.y = a.radius : a.y + a.radius < 0 && (a.y = pJS.canvas.h + a.radius)
            }
            for (var i = e + 1; i < pJS.particles.array.length; i++) {
                var t = pJS.particles.array[i];
                if (pJS.particles.line_linked.enable_auto && pJS.fn.vendors.distanceParticles(a, t), pJS.interactivity.enable)switch (pJS.interactivity.mode) {
                    case"grab":
                        pJS.fn.vendors.interactivity.grabParticles(a, t)
                }
            }
        }
    }, pJS.fn.particlesDraw = function () {
        pJS.canvas.ctx.clearRect(0, 0, pJS.canvas.w, pJS.canvas.h), pJS.fn.particlesAnimate();
        for (var e = 0; e < pJS.particles.array.length; e++) {
            var a = pJS.particles.array[e];
            a.draw("rgba(" + a.color.r + "," + a.color.g + "," + a.color.b + "," + a.opacity + ")")
        }
    }, pJS.fn.particlesRemove = function () {
        pJS.particles.array = []
    }, pJS.fn.vendors.distanceParticles = function (e, a) {
        var i = e.x - a.x, t = e.y - a.y, n = Math.sqrt(i * i + t * t);
        if (n <= pJS.particles.line_linked.distance) {
            var c = pJS.particles.line_linked.color_rgb_line;
            if (pJS.canvas.ctx.beginPath(), pJS.canvas.ctx.strokeStyle = "rgba(" + c.r + "," + c.g + "," + c.b + "," + (pJS.particles.line_linked.opacity - n / pJS.particles.line_linked.distance) + ")", pJS.canvas.ctx.moveTo(e.x, e.y), pJS.canvas.ctx.lineTo(a.x, a.y), pJS.canvas.ctx.lineWidth = pJS.particles.line_linked.width, pJS.canvas.ctx.stroke(), pJS.canvas.ctx.closePath(), pJS.particles.line_linked.condensed_mode.enable) {
                var i = e.x - a.x, t = e.y - a.y, s = i / (1e3 * pJS.particles.line_linked.condensed_mode.rotateX), r = t / (1e3 * pJS.particles.line_linked.condensed_mode.rotateY);
                a.vx += s, a.vy += r
            }
        }
    }, pJS.fn.vendors.interactivity.listeners = function () {
        if ("window" == pJS.interactivity.detect_on)var e = window; else var e = pJS.canvas.el;
        if (e.onmousemove = function (a) {
                if (e == window)var i = a.clientX, t = a.clientY; else var i = a.offsetX || a.clientX, t = a.offsetY || a.clientY;
                pJS && (pJS.interactivity.mouse.pos_x = i, pJS.interactivity.mouse.pos_y = t, pJS.retina && (pJS.interactivity.mouse.pos_x *= pJS.canvas.pxratio, pJS.interactivity.mouse.pos_y *= pJS.canvas.pxratio), pJS.interactivity.status = "mousemove")
            }, e.onmouseleave = function () {
                pJS && (pJS.interactivity.mouse.pos_x = 0, pJS.interactivity.mouse.pos_y = 0, pJS.interactivity.status = "mouseleave")
            }, pJS.interactivity.events.onclick.enable)switch (pJS.interactivity.events.onclick.mode) {
            case"push":
                e.onclick = function () {
                    pJS.fn.vendors.interactivity.pushParticles(pJS.interactivity.events.onclick.nb, pJS.interactivity.mouse)
                };
                break;
            case"remove":
                e.onclick = function () {
                    pJS.fn.vendors.interactivity.removeParticles(pJS.interactivity.events.onclick.nb)
                }
        }
    }, pJS.fn.vendors.interactivity.pushParticles = function (e, a) {
        if (pJS)for (var i = 0; e > i; i++)pJS.particles.array.push(new pJS.fn.particle(pJS.particles.color_rgb, pJS.particles.opacity.opacity, {
            x: a ? a.pos_x : Math.random() * pJS.canvas.w,
            y: a ? a.pos_y : Math.random() * pJS.canvas.h
        }))
    }, pJS.fn.vendors.interactivity.removeParticles = function (e) {
        pJS && pJS.particles.array.splice(0, e)
    }, pJS.fn.vendors.interactivity.grabParticles = function (e, a) {
        var i = e.x - a.x, t = e.y - a.y, n = Math.sqrt(i * i + t * t), c = e.x - pJS.interactivity.mouse.pos_x, s = e.y - pJS.interactivity.mouse.pos_y, r = Math.sqrt(c * c + s * s);
        if (n <= pJS.particles.line_linked.distance && r <= pJS.interactivity.mouse.distance && "mousemove" == pJS.interactivity.status) {
            var p = pJS.particles.line_linked.color_rgb_line;
            pJS.canvas.ctx.beginPath(), pJS.canvas.ctx.strokeStyle = "rgba(" + p.r + "," + p.g + "," + p.b + "," + (pJS.interactivity.line_linked.opacity - r / pJS.interactivity.mouse.distance) + ")", pJS.canvas.ctx.moveTo(e.x, e.y), pJS.canvas.ctx.lineTo(pJS.interactivity.mouse.pos_x, pJS.interactivity.mouse.pos_y), pJS.canvas.ctx.lineWidth = pJS.particles.line_linked.width, pJS.canvas.ctx.stroke(), pJS.canvas.ctx.closePath()
        }
    }, pJS.fn.vendors.destroy = function () {
        cancelAnimationFrame(pJS.fn.requestAnimFrame), n.remove(), pJS = null
    }, i(), pJS.particles.anim.enable && t(), pJS.interactivity.enable && pJS.fn.vendors.interactivity.listeners()

    $(window).resize(function(){
        delay(function(){

            pJS.fn.vendors.destroy();
            app.ui.particles();
        }, 100);

    });


}
function hexToRgb(e) {
    var a = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
    e = e.replace(a, function (e, a, i, t) {
        return a + a + i + i + t + t
    });
    var i = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);
    return i ? {r: parseInt(i[1], 16), g: parseInt(i[2], 16), b: parseInt(i[3], 16)} : null
}
window.requestAnimFrame = function () {
    return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function (e) {
        window.setTimeout(e, 1e3 / 60)
    }
}(), window.cancelRequestAnimFrame = function () {
    return window.cancelAnimationFrame || window.webkitCancelRequestAnimationFrame || window.mozCancelRequestAnimationFrame || window.oCancelRequestAnimationFrame || window.msCancelRequestAnimationFrame || clearTimeout
}(), window.particlesJS = function (e, a) {
    "string" != typeof e && (a = e, e = "particles-js"), e || (e = "particles-js");
    var i = document.createElement("canvas");
    i.style.width = "100%", i.style.height = "100%";
    var t = document.getElementById(e).appendChild(i);
    null != t && launchParticlesJS(e, a)
};


(function (t) {
    t.fn.circliful = function (i) {
        var e = t.extend({
            startdegree: 0,
            fgcolor: "#556b2f",
            bgcolor: "#eee",
            fill: !1,
            width: 15,
            dimension: 200,
            fontsize: 15,
            percent: 50,
            animationstep: 1,
            iconsize: "20px",
            iconcolor: "#999",
            border: "default",
            complete: null,
            bordersize: 10
        }, i);
        return this.each(function () {
            function a(i, e, a) {
                t("<span></span>").appendTo(i).addClass(e).text(s).prepend(l).css({
                    "line-height": a + "px",
                    "font-size": h.fontsize + "px"
                })
            }

            function n(i, e) {
                t("<span></span>").appendTo(i).addClass("circle-info-half").css("line-height", h.dimension * e + "px").text(r)
            }

            function o(i) {
                t.each(c, function (a, n) {
                    h[n] = void 0 != i.data(n) ? i.data(n) : t(e).attr(n), "fill" == n && void 0 != i.data("fill") && (m = !0)
                })
            }

            function d(e) {
                u.clearRect(0, 0, g.width, g.height), u.beginPath(), u.arc(x, b, w, z, y, !1), u.lineWidth = h.width + 1, u.strokeStyle = h.bgcolor, u.stroke(), m && (u.fillStyle = h.fill, u.fill()), u.beginPath(), u.arc(x, b, w, -k + T, C * e - k + T, !1), "outline" == h.border ? u.lineWidth = h.width + 13 : "inline" == h.border && (u.lineWidth = h.width - 13), u.strokeStyle = h.fgcolor, u.stroke(), p > M && (M += I, requestAnimationFrame(function () {
                    d(Math.min(M, p) / 100)
                }, f)), M == p && S && i !== void 0 && t.isFunction(i.complete) && (i.complete(), S = !1)
            }

            var s, r, c = ["fgcolor", "bgcolor", "fill", "width", "dimension", "fontsize", "animationstep", "endPercent", "icon", "iconcolor", "iconsize", "border", "startdegree", "bordersize"], h = {}, l = "", p = 0, f = t(this), m = !1;
            if (f.addClass("circliful"), o(f), void 0 != f.data("text") && (s = f.data("text"), void 0 != f.data("icon") && (l = t("<i></i>").addClass("fa " + t(this).data("icon")).css({
                    color: h.iconcolor,
                    "font-size": h.iconsize
                })), void 0 != f.data("type") ? (F = t(this).data("type"), "half" == F ? a(f, "circle-text-half", h.dimension / 1.45) : a(f, "circle-text", h.dimension)) : a(f, "circle-text", h.dimension)), void 0 != t(this).data("total") && void 0 != t(this).data("part")) {
                var v = t(this).data("total") / 100;
                percent = (t(this).data("part") / v / 100).toFixed(3), p = (t(this).data("part") / v).toFixed(3)
            } else void 0 != t(this).data("percent") ? (percent = t(this).data("percent") / 100, p = t(this).data("percent")) : percent = e.percent / 100;
            void 0 != t(this).data("info") && (r = t(this).data("info"), void 0 != t(this).data("type") ? (F = t(this).data("type"), "half" == F ? n(f, .9) : n(f, 1.25)) : n(f, 1.25)), t(this).width(h.dimension + "px");
            var g = t("<canvas></canvas>").attr({
                width: h.dimension,
                height: h.dimension
            }).appendTo(t(this)).get(0), u = g.getContext("2d");
            t(g).parent();
            var x = g.width / 2, b = g.height / 2, P = 360 * h.percent;
            P * (Math.PI / 180);
            var w = g.width / 2.5, y = 2.3 * Math.PI, z = 0, M = 0 === h.animationstep ? p : 0, I = Math.max(h.animationstep, 0), C = 2 * Math.PI, k = Math.PI / 2, F = "", S = !0, T = h.startdegree / 180 * Math.PI;
            void 0 != t(this).data("type") && (F = t(this).data("type"), "half" == F && (y = 2 * Math.PI, z = 3.13, C = Math.PI, k = Math.PI / .996)), d(M / 100)
        })
    }
})(jQuery);


/*! alertify - v0.3.11 - 2013-10-08 */
!function (a, b) {
    "use strict";
    var c, d = a.document;
    c = function () {
        var c, e, f, g, h, i, j, k, l, m, n, o, p, q = {}, r = {}, s = !1, t = {ENTER: 13, ESC: 27, SPACE: 32}, u = [];
        return r = {
            buttons: {
                holder: '<nav class="alertify-buttons">{{buttons}}</nav>',
                submit: '<button type="submit" class="alertify-button alertify-button-ok" id="alertify-ok">{{ok}}</button>',
                ok: '<button class="alertify-button alertify-button-ok" id="alertify-ok">{{ok}}</button>',
                cancel: '<button class="alertify-button alertify-button-cancel" id="alertify-cancel">{{cancel}}</button>'
            },
            input: '<div class="alertify-text-wrapper"><input type="text" class="alertify-text" id="alertify-text"></div>',
            message: '<p class="alertify-message">{{message}}</p>',
            log: '<article class="alertify-log{{class}}">{{message}}</article>'
        }, p = function () {
            var a, c, e = !1, f = d.createElement("fakeelement"), g = {
                WebkitTransition: "webkitTransitionEnd",
                MozTransition: "transitionend",
                OTransition: "otransitionend",
                transition: "transitionend"
            };
            for (a in g)if (f.style[a] !== b) {
                c = g[a], e = !0;
                break
            }
            return {type: c, supported: e}
        }, c = function (a) {
            return d.getElementById(a)
        }, q = {
            labels: {ok: "OK", cancel: "Cancel"},
            delay: 5e3,
            buttonReverse: !1,
            buttonFocus: "ok",
            transition: b,
            addListeners: function (a) {
                var b, c, i, j, k, l = "undefined" != typeof f, m = "undefined" != typeof e, n = "undefined" != typeof o, p = "", q = this;
                b = function (b) {
                    return "undefined" != typeof b.preventDefault && b.preventDefault(), i(b), "undefined" != typeof o && (p = o.value), "function" == typeof a && ("undefined" != typeof o ? a(!0, p) : a(!0)), !1
                }, c = function (b) {
                    return "undefined" != typeof b.preventDefault && b.preventDefault(), i(b), "function" == typeof a && a(!1), !1
                }, i = function () {
                    q.hide(), q.unbind(d.body, "keyup", j), q.unbind(g, "focus", k), l && q.unbind(f, "click", b), m && q.unbind(e, "click", c)
                }, j = function (a) {
                    var d = a.keyCode;
                    (d === t.SPACE && !n || n && d === t.ENTER) && b(a), d === t.ESC && m && c(a)
                }, k = function () {
                    n ? o.focus() : !m || q.buttonReverse ? f.focus() : e.focus()
                }, this.bind(g, "focus", k), this.bind(h, "focus", k), l && this.bind(f, "click", b), m && this.bind(e, "click", c), this.bind(d.body, "keyup", j), this.transition.supported || this.setFocus()
            },
            bind: function (a, b, c) {
                "function" == typeof a.addEventListener ? a.addEventListener(b, c, !1) : a.attachEvent && a.attachEvent("on" + b, c)
            },
            handleErrors: function () {
                if ("undefined" != typeof a.onerror) {
                    var b = this;
                    return a.onerror = function (a, c, d) {
                        b.error("[" + a + " on line " + d + " of " + c + "]", 0)
                    }, !0
                }
                return !1
            },
            appendButtons: function (a, b) {
                return this.buttonReverse ? b + a : a + b
            },
            build: function (a) {
                var b = "", c = a.type, d = a.message, e = a.cssClass || "";
                switch (b += '<div class="alertify-dialog">', b += '<a id="alertify-resetFocusBack" class="alertify-resetFocus" href="#">Reset Focus</a>', "none" === q.buttonFocus && (b += '<a href="#" id="alertify-noneFocus" class="alertify-hidden"></a>'), "prompt" === c && (b += '<div id="alertify-form">'), b += '<article class="alertify-inner">', b += r.message.replace("{{message}}", d), "prompt" === c && (b += r.input), b += r.buttons.holder, b += "</article>", "prompt" === c && (b += "</div>"), b += '<a id="alertify-resetFocus" class="alertify-resetFocus" href="#">Reset Focus</a>', b += "</div>", c) {
                    case"confirm":
                        b = b.replace("{{buttons}}", this.appendButtons(r.buttons.cancel, r.buttons.ok)), b = b.replace("{{ok}}", this.labels.ok).replace("{{cancel}}", this.labels.cancel);
                        break;
                    case"prompt":
                        b = b.replace("{{buttons}}", this.appendButtons(r.buttons.cancel, r.buttons.submit)), b = b.replace("{{ok}}", this.labels.ok).replace("{{cancel}}", this.labels.cancel);
                        break;
                    case"alert":
                        b = b.replace("{{buttons}}", r.buttons.ok), b = b.replace("{{ok}}", this.labels.ok)
                }
                return l.className = "alertify alertify-" + c + " " + e, k.className = "alertify-cover", b
            },
            close: function (a, b) {
                var c, d, e = b && !isNaN(b) ? +b : this.delay, f = this;
                this.bind(a, "click", function () {
                    c(a)
                }), d = function (a) {
                    a.stopPropagation(), f.unbind(this, f.transition.type, d), m.removeChild(this), m.hasChildNodes() || (m.className += " alertify-logs-hidden")
                }, c = function (a) {
                    "undefined" != typeof a && a.parentNode === m && (f.transition.supported ? (f.bind(a, f.transition.type, d), a.className += " alertify-log-hide") : (m.removeChild(a), m.hasChildNodes() || (m.className += " alertify-logs-hidden")))
                }, 0 !== b && setTimeout(function () {
                    c(a)
                }, e)
            },
            dialog: function (a, b, c, e, f) {
                j = d.activeElement;
                var g = function () {
                    m && null !== m.scrollTop && k && null !== k.scrollTop || g()
                };
                if ("string" != typeof a)throw new Error("message must be a string");
                if ("string" != typeof b)throw new Error("type must be a string");
                if ("undefined" != typeof c && "function" != typeof c)throw new Error("fn must be a function");
                return this.init(), g(), u.push({
                    type: b,
                    message: a,
                    callback: c,
                    placeholder: e,
                    cssClass: f
                }), s || this.setup(), this
            },
            extend: function (a) {
                if ("string" != typeof a)throw new Error("extend method must have exactly one paramter");
                return function (b, c) {
                    return this.log(b, a, c), this
                }
            },
            hide: function () {
                var a, b = this;
                u.splice(0, 1), u.length > 0 ? this.setup(!0) : (s = !1, a = function (c) {
                    c.stopPropagation(), b.unbind(l, b.transition.type, a)
                }, this.transition.supported ? (this.bind(l, this.transition.type, a), l.className = "alertify alertify-hide alertify-hidden") : l.className = "alertify alertify-hide alertify-hidden alertify-isHidden", k.className = "alertify-cover alertify-cover-hidden", j.focus())
            },
            init: function () {
                d.createElement("nav"), d.createElement("article"), d.createElement("section"), null == c("alertify-cover") && (k = d.createElement("div"), k.setAttribute("id", "alertify-cover"), k.className = "alertify-cover alertify-cover-hidden", d.body.appendChild(k)), null == c("alertify") && (s = !1, u = [], l = d.createElement("section"), l.setAttribute("id", "alertify"), l.className = "alertify alertify-hidden", d.body.appendChild(l)), null == c("alertify-logs") && (m = d.createElement("section"), m.setAttribute("id", "alertify-logs"), m.className = "alertify-logs alertify-logs-hidden", d.body.appendChild(m)), d.body.setAttribute("tabindex", "0"), this.transition = p()
            },
            log: function (a, b, c) {
                var d = function () {
                    m && null !== m.scrollTop || d()
                };
                return this.init(), d(), m.className = "alertify-logs", this.notify(a, b, c), this
            },
            notify: function (a, b, c) {
                var e = d.createElement("article");
                e.className = "alertify-log" + ("string" == typeof b && "" !== b ? " alertify-log-" + b : ""), e.innerHTML = a, m.appendChild(e), setTimeout(function () {
                    e.className = e.className + " alertify-log-show"
                }, 50), this.close(e, c)
            },
            set: function (a) {
                var b;
                if ("object" != typeof a && a instanceof Array)throw new Error("args must be an object");
                for (b in a)a.hasOwnProperty(b) && (this[b] = a[b])
            },
            setFocus: function () {
                o ? (o.focus(), o.select()) : i.focus()
            },
            setup: function (a) {
                var d, j = u[0], k = this;
                s = !0, d = function (a) {
                    a.stopPropagation(), k.setFocus(), k.unbind(l, k.transition.type, d)
                }, this.transition.supported && !a && this.bind(l, this.transition.type, d), l.innerHTML = this.build(j), g = c("alertify-resetFocus"), h = c("alertify-resetFocusBack"), f = c("alertify-ok") || b, e = c("alertify-cancel") || b, i = "cancel" === q.buttonFocus ? e : "none" === q.buttonFocus ? c("alertify-noneFocus") : f, o = c("alertify-text") || b, n = c("alertify-form") || b, "string" == typeof j.placeholder && "" !== j.placeholder && (o.value = j.placeholder), a && this.setFocus(), this.addListeners(j.callback)
            },
            unbind: function (a, b, c) {
                "function" == typeof a.removeEventListener ? a.removeEventListener(b, c, !1) : a.detachEvent && a.detachEvent("on" + b, c)
            }
        }, {
            alert: function (a, b, c) {
                return q.dialog(a, "alert", b, "", c), this
            }, confirm: function (a, b, c) {
                return q.dialog(a, "confirm", b, "", c), this
            }, extend: q.extend, init: q.init, log: function (a, b, c) {
                return q.log(a, b, c), this
            }, prompt: function (a, b, c, d) {
                return q.dialog(a, "prompt", b, c, d), this
            }, success: function (a, b) {
                return q.log(a, "success", b), this
            }, error: function (a, b) {
                return q.log(a, "error", b), this
            }, set: function (a) {
                q.set(a)
            }, labels: q.labels, debug: q.handleErrors
        }
    }, "function" == typeof define ? define([], function () {
        return new c
    }) : "undefined" == typeof a.alertify && (a.alertify = new c)
}(this);
/* Modernizr 2.8.3 (Custom Build) | MIT & BSD
 * Build: http://modernizr.com/download/#-fontface-backgroundsize-borderimage-borderradius-boxshadow-flexbox-flexboxlegacy-hsla-multiplebgs-opacity-rgba-textshadow-cssanimations-csscolumns-generatedcontent-cssgradients-cssreflections-csstransforms-csstransforms3d-csstransitions-applicationcache-canvas-canvastext-draganddrop-hashchange-history-audio-video-indexeddb-input-inputtypes-localstorage-postmessage-sessionstorage-websockets-websqldatabase-webworkers-geolocation-inlinesvg-smil-svg-svgclippaths-touch-webgl-shiv-cssclasses-teststyles-testprop-testallprops-hasevent-prefixes-domprefixes-load
 */
window.Modernizr=function(e,t,n){function r(e){b.cssText=e}function o(e,t){return r(S.join(e+";")+(t||""))}function i(e,t){return typeof e===t}function a(e,t){return!!~(""+e).indexOf(t)}function c(e,t){for(var r in e){var o=e[r];if(!a(o,"-")&&b[o]!==n)return"pfx"!=t||o}return!1}function s(e,t,r){for(var o in e){var a=t[e[o]];if(a!==n)return r===!1?e[o]:i(a,"function")?a.bind(r||t):a}return!1}function l(e,t,n){var r=e.charAt(0).toUpperCase()+e.slice(1),o=(e+" "+k.join(r+" ")+r).split(" ");return i(t,"string")||i(t,"undefined")?c(o,t):(o=(e+" "+T.join(r+" ")+r).split(" "),s(o,t,n))}function u(){m.input=function(n){for(var r=0,o=n.length;r<o;r++)M[n[r]]=n[r]in E;return M.list&&(M.list=!!t.createElement("datalist")&&!!e.HTMLDataListElement),M}("autocomplete autofocus list placeholder max min multiple pattern required step".split(" ")),m.inputtypes=function(e){for(var r,o,i,a=0,c=e.length;a<c;a++)E.setAttribute("type",o=e[a]),r="text"!==E.type,r&&(E.value=x,E.style.cssText="position:absolute;visibility:hidden;",/^range$/.test(o)&&E.style.WebkitAppearance!==n?(g.appendChild(E),i=t.defaultView,r=i.getComputedStyle&&"textfield"!==i.getComputedStyle(E,null).WebkitAppearance&&0!==E.offsetHeight,g.removeChild(E)):/^(search|tel)$/.test(o)||(r=/^(url|email)$/.test(o)?E.checkValidity&&E.checkValidity()===!1:E.value!=x)),P[e[a]]=!!r;return P}("search tel url email datetime date month week time datetime-local number range color".split(" "))}var f,d,p="2.8.3",m={},h=!0,g=t.documentElement,v="modernizr",y=t.createElement(v),b=y.style,E=t.createElement("input"),x=":)",w={}.toString,S=" -webkit- -moz- -o- -ms- ".split(" "),C="Webkit Moz O ms",k=C.split(" "),T=C.toLowerCase().split(" "),j={svg:"http://www.w3.org/2000/svg"},N={},P={},M={},A=[],D=A.slice,L=function(e,n,r,o){var i,a,c,s,l=t.createElement("div"),u=t.body,f=u||t.createElement("body");if(parseInt(r,10))for(;r--;)c=t.createElement("div"),c.id=o?o[r]:v+(r+1),l.appendChild(c);return i=["&#173;",'<style id="s',v,'">',e,"</style>"].join(""),l.id=v,(u?l:f).innerHTML+=i,f.appendChild(l),u||(f.style.background="",f.style.overflow="hidden",s=g.style.overflow,g.style.overflow="hidden",g.appendChild(f)),a=n(l,e),u?l.parentNode.removeChild(l):(f.parentNode.removeChild(f),g.style.overflow=s),!!a},$=function(){function e(e,o){o=o||t.createElement(r[e]||"div"),e="on"+e;var a=e in o;return a||(o.setAttribute||(o=t.createElement("div")),o.setAttribute&&o.removeAttribute&&(o.setAttribute(e,""),a=i(o[e],"function"),i(o[e],"undefined")||(o[e]=n),o.removeAttribute(e))),o=null,a}var r={select:"input",change:"input",submit:"form",reset:"form",error:"img",load:"img",abort:"img"};return e}(),z={}.hasOwnProperty;d=i(z,"undefined")||i(z.call,"undefined")?function(e,t){return t in e&&i(e.constructor.prototype[t],"undefined")}:function(e,t){return z.call(e,t)},Function.prototype.bind||(Function.prototype.bind=function(e){var t=this;if("function"!=typeof t)throw new TypeError;var n=D.call(arguments,1),r=function(){if(this instanceof r){var o=function(){};o.prototype=t.prototype;var i=new o,a=t.apply(i,n.concat(D.call(arguments)));return Object(a)===a?a:i}return t.apply(e,n.concat(D.call(arguments)))};return r}),N.flexbox=function(){return l("flexWrap")},N.flexboxlegacy=function(){return l("boxDirection")},N.canvas=function(){var e=t.createElement("canvas");return!!e.getContext&&!!e.getContext("2d")},N.canvastext=function(){return!!m.canvas&&!!i(t.createElement("canvas").getContext("2d").fillText,"function")},N.webgl=function(){return!!e.WebGLRenderingContext},N.touch=function(){var n;return"ontouchstart"in e||e.DocumentTouch&&t instanceof DocumentTouch?n=!0:L(["@media (",S.join("touch-enabled),("),v,")","{#modernizr{top:9px;position:absolute}}"].join(""),function(e){n=9===e.offsetTop}),n},N.geolocation=function(){return"geolocation"in navigator},N.postmessage=function(){return!!e.postMessage},N.websqldatabase=function(){return!!e.openDatabase},N.indexedDB=function(){return!!l("indexedDB",e)},N.hashchange=function(){return $("hashchange",e)&&(t.documentMode===n||t.documentMode>7)},N.history=function(){return!!e.history&&!!history.pushState},N.draganddrop=function(){var e=t.createElement("div");return"draggable"in e||"ondragstart"in e&&"ondrop"in e},N.websockets=function(){return"WebSocket"in e||"MozWebSocket"in e},N.rgba=function(){return r("background-color:rgba(150,255,150,.5)"),a(b.backgroundColor,"rgba")},N.hsla=function(){return r("background-color:hsla(120,40%,100%,.5)"),a(b.backgroundColor,"rgba")||a(b.backgroundColor,"hsla")},N.multiplebgs=function(){return r("background:url(https://),url(https://),red url(https://)"),/(url\s*\(.*?){3}/.test(b.background)},N.backgroundsize=function(){return l("backgroundSize")},N.borderimage=function(){return l("borderImage")},N.borderradius=function(){return l("borderRadius")},N.boxshadow=function(){return l("boxShadow")},N.textshadow=function(){return""===t.createElement("div").style.textShadow},N.opacity=function(){return o("opacity:.55"),/^0.55$/.test(b.opacity)},N.cssanimations=function(){return l("animationName")},N.csscolumns=function(){return l("columnCount")},N.cssgradients=function(){var e="background-image:",t="gradient(linear,left top,right bottom,from(#9f9),to(white));",n="linear-gradient(left top,#9f9, white);";return r((e+"-webkit- ".split(" ").join(t+e)+S.join(n+e)).slice(0,-e.length)),a(b.backgroundImage,"gradient")},N.cssreflections=function(){return l("boxReflect")},N.csstransforms=function(){return!!l("transform")},N.csstransforms3d=function(){var e=!!l("perspective");return e&&"webkitPerspective"in g.style&&L("@media (transform-3d),(-webkit-transform-3d){#modernizr{left:9px;position:absolute;height:3px;}}",function(t,n){e=9===t.offsetLeft&&3===t.offsetHeight}),e},N.csstransitions=function(){return l("transition")},N.fontface=function(){var e;return L('@font-face {font-family:"font";src:url("https://")}',function(n,r){var o=t.getElementById("smodernizr"),i=o.sheet||o.styleSheet,a=i?i.cssRules&&i.cssRules[0]?i.cssRules[0].cssText:i.cssText||"":"";e=/src/i.test(a)&&0===a.indexOf(r.split(" ")[0])}),e},N.generatedcontent=function(){var e;return L(["#",v,"{font:0/0 a}#",v,':after{content:"',x,'";visibility:hidden;font:3px/1 a}'].join(""),function(t){e=t.offsetHeight>=3}),e},N.video=function(){var e=t.createElement("video"),n=!1;try{(n=!!e.canPlayType)&&(n=new Boolean(n),n.ogg=e.canPlayType('video/ogg; codecs="theora"').replace(/^no$/,""),n.h264=e.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/,""),n.webm=e.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/,""))}catch(e){}return n},N.audio=function(){var e=t.createElement("audio"),n=!1;try{(n=!!e.canPlayType)&&(n=new Boolean(n),n.ogg=e.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/,""),n.mp3=e.canPlayType("audio/mpeg;").replace(/^no$/,""),n.wav=e.canPlayType('audio/wav; codecs="1"').replace(/^no$/,""),n.m4a=(e.canPlayType("audio/x-m4a;")||e.canPlayType("audio/aac;")).replace(/^no$/,""))}catch(e){}return n},N.localstorage=function(){try{return localStorage.setItem(v,v),localStorage.removeItem(v),!0}catch(e){return!1}},N.sessionstorage=function(){try{return sessionStorage.setItem(v,v),sessionStorage.removeItem(v),!0}catch(e){return!1}},N.webworkers=function(){return!!e.Worker},N.applicationcache=function(){return!!e.applicationCache},N.svg=function(){return!!t.createElementNS&&!!t.createElementNS(j.svg,"svg").createSVGRect},N.inlinesvg=function(){var e=t.createElement("div");return e.innerHTML="<svg/>",(e.firstChild&&e.firstChild.namespaceURI)==j.svg},N.smil=function(){return!!t.createElementNS&&/SVGAnimate/.test(w.call(t.createElementNS(j.svg,"animate")))},N.svgclippaths=function(){return!!t.createElementNS&&/SVGClipPath/.test(w.call(t.createElementNS(j.svg,"clipPath")))};for(var F in N)d(N,F)&&(f=F.toLowerCase(),m[f]=N[F](),A.push((m[f]?"":"no-")+f));return m.input||u(),m.addTest=function(e,t){if("object"==typeof e)for(var r in e)d(e,r)&&m.addTest(r,e[r]);else{if(e=e.toLowerCase(),m[e]!==n)return m;t="function"==typeof t?t():t,"undefined"!=typeof h&&h&&(g.className+=" "+(t?"":"no-")+e),m[e]=t}return m},r(""),y=E=null,function(e,t){function n(e,t){var n=e.createElement("p"),r=e.getElementsByTagName("head")[0]||e.documentElement;return n.innerHTML="x<style>"+t+"</style>",r.insertBefore(n.lastChild,r.firstChild)}function r(){var e=y.elements;return"string"==typeof e?e.split(" "):e}function o(e){var t=v[e[h]];return t||(t={},g++,e[h]=g,v[g]=t),t}function i(e,n,r){if(n||(n=t),u)return n.createElement(e);r||(r=o(n));var i;return i=r.cache[e]?r.cache[e].cloneNode():m.test(e)?(r.cache[e]=r.createElem(e)).cloneNode():r.createElem(e),!i.canHaveChildren||p.test(e)||i.tagUrn?i:r.frag.appendChild(i)}function a(e,n){if(e||(e=t),u)return e.createDocumentFragment();n=n||o(e);for(var i=n.frag.cloneNode(),a=0,c=r(),s=c.length;a<s;a++)i.createElement(c[a]);return i}function c(e,t){t.cache||(t.cache={},t.createElem=e.createElement,t.createFrag=e.createDocumentFragment,t.frag=t.createFrag()),e.createElement=function(n){return y.shivMethods?i(n,e,t):t.createElem(n)},e.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+r().join().replace(/[\w\-]+/g,function(e){return t.createElem(e),t.frag.createElement(e),'c("'+e+'")'})+");return n}")(y,t.frag)}function s(e){e||(e=t);var r=o(e);return y.shivCSS&&!l&&!r.hasCSS&&(r.hasCSS=!!n(e,"article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")),u||c(e,r),e}var l,u,f="3.7.0",d=e.html5||{},p=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,m=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,h="_html5shiv",g=0,v={};!function(){try{var e=t.createElement("a");e.innerHTML="<xyz></xyz>",l="hidden"in e,u=1==e.childNodes.length||function(){t.createElement("a");var e=t.createDocumentFragment();return"undefined"==typeof e.cloneNode||"undefined"==typeof e.createDocumentFragment||"undefined"==typeof e.createElement}()}catch(e){l=!0,u=!0}}();var y={elements:d.elements||"abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output progress section summary template time video",version:f,shivCSS:d.shivCSS!==!1,supportsUnknownElements:u,shivMethods:d.shivMethods!==!1,type:"default",shivDocument:s,createElement:i,createDocumentFragment:a};e.html5=y,s(t)}(this,t),m._version=p,m._prefixes=S,m._domPrefixes=T,m._cssomPrefixes=k,m.hasEvent=$,m.testProp=function(e){return c([e])},m.testAllProps=l,m.testStyles=L,g.className=g.className.replace(/(^|\s)no-js(\s|$)/,"$1$2")+(h?" js "+A.join(" "):""),m}(this,this.document),function(e,t,n){function r(e){return"[object Function]"==g.call(e)}function o(e){return"string"==typeof e}function i(){}function a(e){return!e||"loaded"==e||"complete"==e||"uninitialized"==e}function c(){var e=v.shift();y=1,e?e.t?m(function(){("c"==e.t?d.injectCss:d.injectJs)(e.s,0,e.a,e.x,e.e,1)},0):(e(),c()):y=0}function s(e,n,r,o,i,s,l){function u(t){if(!p&&a(f.readyState)&&(b.r=p=1,!y&&c(),f.onload=f.onreadystatechange=null,t)){"img"!=e&&m(function(){x.removeChild(f)},50);for(var r in T[n])T[n].hasOwnProperty(r)&&T[n][r].onload()}}var l=l||d.errorTimeout,f=t.createElement(e),p=0,g=0,b={t:r,s:n,e:i,a:s,x:l};1===T[n]&&(g=1,T[n]=[]),"object"==e?f.data=n:(f.src=n,f.type=e),f.width=f.height="0",f.onerror=f.onload=f.onreadystatechange=function(){u.call(this,g)},v.splice(o,0,b),"img"!=e&&(g||2===T[n]?(x.insertBefore(f,E?null:h),m(u,l)):T[n].push(f))}function l(e,t,n,r,i){return y=0,t=t||"j",o(e)?s("c"==t?S:w,e,t,this.i++,n,r,i):(v.splice(this.i++,0,e),1==v.length&&c()),this}function u(){var e=d;return e.loader={load:l,i:0},e}var f,d,p=t.documentElement,m=e.setTimeout,h=t.getElementsByTagName("script")[0],g={}.toString,v=[],y=0,b="MozAppearance"in p.style,E=b&&!!t.createRange().compareNode,x=E?p:h.parentNode,p=e.opera&&"[object Opera]"==g.call(e.opera),p=!!t.attachEvent&&!p,w=b?"object":p?"script":"img",S=p?"script":w,C=Array.isArray||function(e){return"[object Array]"==g.call(e)},k=[],T={},j={timeout:function(e,t){return t.length&&(e.timeout=t[0]),e}};d=function(e){function t(e){var t,n,r,e=e.split("!"),o=k.length,i=e.pop(),a=e.length,i={url:i,origUrl:i,prefixes:e};for(n=0;n<a;n++)r=e[n].split("="),(t=j[r.shift()])&&(i=t(i,r));for(n=0;n<o;n++)i=k[n](i);return i}function a(e,o,i,a,c){var s=t(e),l=s.autoCallback;s.url.split(".").pop().split("?").shift(),s.bypass||(o&&(o=r(o)?o:o[e]||o[a]||o[e.split("/").pop().split("?")[0]]),s.instead?s.instead(e,o,i,a,c):(T[s.url]?s.noexec=!0:T[s.url]=1,i.load(s.url,s.forceCSS||!s.forceJS&&"css"==s.url.split(".").pop().split("?").shift()?"c":n,s.noexec,s.attrs,s.timeout),(r(o)||r(l))&&i.load(function(){u(),o&&o(s.origUrl,c,a),l&&l(s.origUrl,c,a),T[s.url]=2})))}function c(e,t){function n(e,n){if(e){if(o(e))n||(f=function(){var e=[].slice.call(arguments);d.apply(this,e),p()}),a(e,f,t,0,l);else if(Object(e)===e)for(s in c=function(){var t,n=0;for(t in e)e.hasOwnProperty(t)&&n++;return n}(),e)e.hasOwnProperty(s)&&(!n&&!--c&&(r(f)?f=function(){var e=[].slice.call(arguments);d.apply(this,e),p()}:f[s]=function(e){return function(){var t=[].slice.call(arguments);e&&e.apply(this,t),p()}}(d[s])),a(e[s],f,t,s,l))}else!n&&p()}var c,s,l=!!e.test,u=e.load||e.both,f=e.callback||i,d=f,p=e.complete||i;n(l?e.yep:e.nope,!!u),u&&n(u)}var s,l,f=this.yepnope.loader;if(o(e))a(e,0,f,0);else if(C(e))for(s=0;s<e.length;s++)l=e[s],o(l)?a(l,0,f,0):C(l)?d(l):Object(l)===l&&c(l,f);else Object(e)===e&&c(e,f)},d.addPrefix=function(e,t){j[e]=t},d.addFilter=function(e){k.push(e)},d.errorTimeout=1e4,null==t.readyState&&t.addEventListener&&(t.readyState="loading",t.addEventListener("DOMContentLoaded",f=function(){t.removeEventListener("DOMContentLoaded",f,0),t.readyState="complete"},0)),e.yepnope=u(),e.yepnope.executeStack=c,e.yepnope.injectJs=function(e,n,r,o,s,l){var u,f,p=t.createElement("script"),o=o||d.errorTimeout;p.src=e;for(f in r)p.setAttribute(f,r[f]);n=l?c:n||i,p.onreadystatechange=p.onload=function(){!u&&a(p.readyState)&&(u=1,n(),p.onload=p.onreadystatechange=null)},m(function(){u||(u=1,n(1))},o),s?p.onload():h.parentNode.insertBefore(p,h)},e.yepnope.injectCss=function(e,n,r,o,a,s){var l,o=t.createElement("link"),n=s?c:n||i;o.href=e,o.rel="stylesheet",o.type="text/css";for(l in r)o.setAttribute(l,r[l]);a||(h.parentNode.insertBefore(o,h),m(n,0))}}(this,document),Modernizr.load=function(){yepnope.apply(window,[].slice.call(arguments,0))};
/**
 * StyleFix 1.0.3 & PrefixFree 1.0.7
 * @author Lea Verou
 * MIT license
 */
!function(){function e(e,t){return[].slice.call((t||document).querySelectorAll(e))}if(window.addEventListener){var t=window.StyleFix={link:function(e){try{if("stylesheet"!==e.rel||e.hasAttribute("data-noprefix"))return}catch(e){return}var r,n=e.href||e.getAttribute("data-href"),i=n.replace(/[^\/]+$/,""),a=(/^[a-z]{3,10}:/.exec(i)||[""])[0],o=(/^[a-z]{3,10}:\/\/[^\/]+/.exec(i)||[""])[0],s=/^([^?]*)\??/.exec(n)[1],l=e.parentNode,u=new XMLHttpRequest;u.onreadystatechange=function(){4===u.readyState&&r()},r=function(){var r=u.responseText;if(r&&e.parentNode&&(!u.status||400>u.status||600<u.status)){if(r=t.fix(r,!0,e),i)var r=r.replace(/url\(\s*?((?:"|')?)(.+?)\1\s*?\)/gi,function(e,t,r){return/^([a-z]{3,10}:|#)/i.test(r)?e:/^\/\//.test(r)?'url("'+a+r+'")':/^\//.test(r)?'url("'+o+r+'")':/^\?/.test(r)?'url("'+s+r+'")':'url("'+i+r+'")'}),n=i.replace(/([\\\^\$*+[\]?{}.=!:(|)])/g,"\\$1"),r=r.replace(RegExp("\\b(behavior:\\s*?url\\('?\"?)"+n,"gi"),"$1");n=document.createElement("style"),n.textContent=r,n.media=e.media,n.disabled=e.disabled,n.setAttribute("data-href",e.getAttribute("href")),l.insertBefore(n,e),l.removeChild(e),n.media=e.media}};try{u.open("GET",n),u.send(null)}catch(e){"undefined"!=typeof XDomainRequest&&(u=new XDomainRequest,u.onerror=u.onprogress=function(){},u.onload=r,u.open("GET",n),u.send(null))}e.setAttribute("data-inprogress","")},styleElement:function(e){if(!e.hasAttribute("data-noprefix")){var r=e.disabled;e.textContent=t.fix(e.textContent,!0,e),e.disabled=r}},styleAttribute:function(e){var r=e.getAttribute("style"),r=t.fix(r,!1,e);e.setAttribute("style",r)},process:function(){e('link[rel="stylesheet"]:not([data-inprogress])').forEach(StyleFix.link),e("style").forEach(StyleFix.styleElement),e("[style]").forEach(StyleFix.styleAttribute)},register:function(e,r){(t.fixers=t.fixers||[]).splice(void 0===r?t.fixers.length:r,0,e)},fix:function(e,r,n){for(var i=0;i<t.fixers.length;i++)e=t.fixers[i](e,r,n)||e;return e},camelCase:function(e){return e.replace(/-([a-z])/g,function(e,t){return t.toUpperCase()}).replace("-","")},deCamelCase:function(e){return e.replace(/[A-Z]/g,function(e){return"-"+e.toLowerCase()})}};!function(){setTimeout(function(){e('link[rel="stylesheet"]').forEach(StyleFix.link)},10),document.addEventListener("DOMContentLoaded",StyleFix.process,!1)}()}}(),function(e){function t(e,t,n,i,a){return e=r[e],e.length&&(e=RegExp(t+"("+e.join("|")+")"+n,"gi"),a=a.replace(e,i)),a}if(window.StyleFix&&window.getComputedStyle){var r=window.PrefixFree={prefixCSS:function(e,n,i){var a=r.prefix;if(-1<r.functions.indexOf("linear-gradient")&&(e=e.replace(/(\s|:|,)(repeating-)?linear-gradient\(\s*(-?\d*\.?\d*)deg/gi,function(e,t,r,n){return t+(r||"")+"linear-gradient("+(90-n)+"deg"})),e=t("functions","(\\s|:|,)","\\s*\\(","$1"+a+"$2(",e),e=t("keywords","(\\s|:)","(\\s|;|\\}|$)","$1"+a+"$2$3",e),e=t("properties","(^|\\{|\\s|;)","\\s*:","$1"+a+"$2:",e),r.properties.length){var o=RegExp("\\b("+r.properties.join("|")+")(?!:)","gi");e=t("valueProperties","\\b",":(.+?);",function(e){return e.replace(o,a+"$1")},e)}return n&&(e=t("selectors","","\\b",r.prefixSelector,e),e=t("atrules","@","\\b","@"+a+"$1",e)),e=e.replace(RegExp("-"+a,"g"),"-"),e=e.replace(/-\*-(?=[a-z]+)/gi,r.prefix)},property:function(e){return(0<=r.properties.indexOf(e)?r.prefix:"")+e},value:function(e,n){return e=t("functions","(^|\\s|,)","\\s*\\(","$1"+r.prefix+"$2(",e),e=t("keywords","(^|\\s)","(\\s|$)","$1"+r.prefix+"$2$3",e),0<=r.valueProperties.indexOf(n)&&(e=t("properties","(^|\\s|,)","($|\\s|,)","$1"+r.prefix+"$2$3",e)),e},prefixSelector:function(e){return e.replace(/^:{1,2}/,function(e){return e+r.prefix})},prefixProperty:function(e,t){var n=r.prefix+e;return t?StyleFix.camelCase(n):n}};!function(){var e={},t=[],n=getComputedStyle(document.documentElement,null),i=document.createElement("div").style,a=function(r){if("-"===r.charAt(0)){t.push(r),r=r.split("-");var n=r[1];for(e[n]=++e[n]||1;3<r.length;)r.pop(),n=r.join("-"),StyleFix.camelCase(n)in i&&-1===t.indexOf(n)&&t.push(n)}};if(0<n.length)for(var o=0;o<n.length;o++)a(n[o]);else for(var s in n)a(StyleFix.deCamelCase(s));var l,u,o=0;for(u in e)n=e[u],o<n&&(l=u,o=n);for(r.prefix="-"+l+"-",r.Prefix=StyleFix.camelCase(r.prefix),r.properties=[],o=0;o<t.length;o++)s=t[o],0===s.indexOf(r.prefix)&&(l=s.slice(r.prefix.length),StyleFix.camelCase(l)in i||r.properties.push(l));!("Ms"!=r.Prefix||"transform"in i||"MsTransform"in i)&&"msTransform"in i&&r.properties.push("transform","transform-origin"),r.properties.sort()}(),function(){function e(e,t){return a[t]="",a[t]=e,!!a[t]}var t={"linear-gradient":{property:"backgroundImage",params:"red, teal"},calc:{property:"width",params:"1px + 5%"},element:{property:"backgroundImage",params:"#foo"},"cross-fade":{property:"backgroundImage",params:"url(a.png), url(b.png), 50%"}};t["repeating-linear-gradient"]=t["repeating-radial-gradient"]=t["radial-gradient"]=t["linear-gradient"];var n={initial:"color","zoom-in":"cursor","zoom-out":"cursor",box:"display",flexbox:"display","inline-flexbox":"display",flex:"display","inline-flex":"display",grid:"display","inline-grid":"display","max-content":"width","min-content":"width","fit-content":"width","fill-available":"width"};r.functions=[],r.keywords=[];var i,a=document.createElement("div").style;for(i in t){var o=t[i],s=o.property,o=i+"("+o.params+")";!e(o,s)&&e(r.prefix+o,s)&&r.functions.push(i)}for(var l in n)s=n[l],!e(l,s)&&e(r.prefix+l,s)&&r.keywords.push(l)}(),function(){function t(e){return o.textContent=e+"{}",!!o.sheet.cssRules.length}var n={":read-only":null,":read-write":null,":any-link":null,"::selection":null},i={keyframes:"name",viewport:null,document:'regexp(".")'};r.selectors=[],r.atrules=[];var a,o=e.appendChild(document.createElement("style"));for(a in n){var s=a+(n[a]?"("+n[a]+")":"");!t(s)&&t(r.prefixSelector(s))&&r.selectors.push(a)}for(var l in i)s=l+" "+(i[l]||""),!t("@"+s)&&t("@"+r.prefix+s)&&r.atrules.push(l);e.removeChild(o)}(),r.valueProperties=["transition","transition-property"],e.className+=" "+r.prefix,StyleFix.register(r.prefixCSS)}}(document.documentElement);
/**
 *
 * Version: 0.0.6
 * Author: Gianluca Guarini
 * Contact: gianluca.guarini@gmail.com
 * Website: http://www.gianlucaguarini.com/
 * Twitter: @gianlucaguarini
 *
 * Copyright (c) Gianluca Guarini
 *
 * Permission is hereby granted, free of charge, to any person
 * obtaining a copy of this software and associated documentation
 * files (the "Software"), to deal in the Software without
 * restriction, including without limitation the rights to use,
 * copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the
 * Software is furnished to do so, subject to the following
 * conditions:
 *
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
 * OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
 * HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
 * WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
 * OTHER DEALINGS IN THE SOFTWARE.
 **/


(function(window, document, $) {
  'use strict';

  // Plugin private cache
  // static vars
  var cache = {
    filterId: 0
  },
    $body = $('body');

  var Vague = function(elm, customOptions) {
    // Default options
    var defaultOptions = {
      intensity: 5,
      forceSVGUrl: false,
      animationOptions: {
        duration: 1000,
        easing: 'linear'
      }
    },
      // extend the default options with the ones passed to the plugin
      options = $.extend(defaultOptions, customOptions),

      /*
       *
       * Helpers
       *
       */

      _browserPrefixes = ' -webkit- -moz- -o- -ms- '.split(' '),
      _cssPrefixString = {},
      _cssPrefix = function(property) {
        if (_cssPrefixString[property] || _cssPrefixString[property] === '') return _cssPrefixString[property] + property;
        var e = document.createElement('div');
        var prefixes = ['', 'Moz', 'Webkit', 'O', 'ms', 'Khtml']; // Various supports...
        for (var i in prefixes) {
          if (typeof e.style[prefixes[i] + property] !== 'undefined') {
            _cssPrefixString[property] = prefixes[i];
            return prefixes[i] + property;
          }
        }
        return property.toLowerCase();
      },
      // https://github.com/Modernizr/Modernizr/blob/master/feature-detects/css-filters.js
      _support = {
        cssfilters: function() {
          var el = document.createElement('div');
          el.style.cssText = _browserPrefixes.join('filter' + ':blur(2px); ');
          return !!el.style.length && ((document.documentMode === undefined || document.documentMode > 9));
        }(),

        // https://github.com/Modernizr/Modernizr/blob/master/feature-detects/svg-filters.js
        svgfilters: function() {
          var result = false;
          try {
            result = typeof SVGFEColorMatrixElement !== undefined &&
              SVGFEColorMatrixElement.SVG_FECOLORMATRIX_TYPE_SATURATE == 2;
          } catch (e) {}
          return result;
        }()
      },

      /*
       *
       * PRIVATE VARS
       *
       */

      _blurred = false,
      // cache the right prefixed css filter property
      _cssFilterProp = _cssPrefix('Filter'),
      _svgGaussianFilter,
      _filterId,
      // to cache the jquery animation instance
      _animation,

      /*
       *
       * PRIVATE METHODS
       *
       */

      /**
       * Create any svg element
       * @param  { String } tagName: svg tag name
       * @return { SVG Node }
       */

      _createSvgElement = function(tagName) {
        return document.createElementNS('http://www.w3.org/2000/svg', tagName);
      },

      /**
       *
       * Inject the svg tag into the DOM
       * we will use it only if the css filters are not supported
       *
       */

      _appendSVGFilter = function() {
        // create the svg and the filter tags
        var svg = _createSvgElement('svg'),
          filter = _createSvgElement('filter');

        // cache the feGaussianBlur tag and make it available
        // outside of this function to easily update the blur intensity
        _svgGaussianFilter = _createSvgElement('feGaussianBlur');

        // hide the svg tag
        // we don't want to see it into the DOM!
        svg.setAttribute('style', 'position:absolute');
        svg.setAttribute('width', '0');
        svg.setAttribute('height', '0');
        // set the id that will be used as link between the DOM element to blur and the svg just created
        filter.setAttribute('id', 'blur-effect-id-' + cache.filterId);

        filter.appendChild(_svgGaussianFilter);
        svg.appendChild(filter);
        // append the svg into the body
        $body.append(svg);

      };

    /*
     *
     * PUBLIC VARS
     *
     */

    // cache the DOM element to blur
    this.$elm = elm instanceof $ ? elm : $(elm);


    /*
     *
     * PUBLIC METHODS
     *
     */

    /**
     *
     * Initialize the plugin creating a new svg if necessary
     *
     */

    this.init = function() {
      // checking the css filter feature
      if (_support.svgfilters) {
        _appendSVGFilter();
      }
      // cache the filter id
      _filterId = cache.filterId;
      // increment the filter id static var
      cache.filterId++;

      return this;

    };

    /**
     *
     * Blur the DOM element selected
     *
     */

    this.blur = function() {

      var cssFilterValue,
        // variables needed to force the svg filter URL
        loc = window.location,
        svgUrl = options.forceSVGUrl ? loc.protocol + '//' + loc.host + loc.pathname + loc.search : '';

      // use the css filters if supported
      if (_support.cssfilters) {
        cssFilterValue = 'blur(' + options.intensity + 'px)';
        // .. or use the svg filters
      } else if (_support.svgfilters) {
        // update the svg stdDeviation tag to set up the blur intensity
        _svgGaussianFilter.setAttribute('stdDeviation', options.intensity);
        cssFilterValue = 'url(' + svgUrl + '#blur-effect-id-' + _filterId + ')';
      } else {
        // .. use the IE css filters
        cssFilterValue = 'progid:DXImageTransform.Microsoft.Blur(pixelradius=' + options.intensity + ')';
      }

      // update the DOM element css
      this.$elm[0].style[_cssFilterProp] = cssFilterValue;
      // set the _blurred internal var to true to cache the element current status
      _blurred = true;

      return this;
    };


    /**
     * Animate the blur intensity
     * @param  { Int } newIntensity: new blur intensity value
     * @param  { Object } customAnimationOptions: default jQuery animate options
     */

    this.animate = function(newIntensity, customAnimationOptions) {
      // control the new blur intensity checking if it's a valid value
      if (typeof newIntensity !== 'number') {
        throw (typeof newIntensity + ' is not a valid number to animate the blur');
      } else if (newIntensity < 0) {
        throw ('I can animate only positive numbers');
      }
      // create a new jQuery deferred instance
      var dfr = new $.Deferred();

      // kill the previous animation
      if (_animation) {
        _animation.stop(true, true);
      }

      // trigger the animation using the jQuery Animation class
      _animation = new $.Animation(options, {
        intensity: newIntensity
      }, $.extend(options.animationOptions, customAnimationOptions))
        .progress($.proxy(this.blur, this))
        .done(dfr.resolve);

      // return the animation deferred promise
      return dfr.promise();
    };

    /**
     *
     * Unblur the DOM element
     *
     */
    this.unblur = function() {
      // set the DOM filter property to none
      this.$elm.css(_cssFilterProp, 'none');
      _blurred = false;
      return this;
    };

    /**
     *
     * Trigger alternatively the @blur and @unblur methods
     *
     */

    this.toggleblur = function() {
      if (_blurred) {
        this.unblur();
      } else {
        this.blur();
      }
      return this;
    };
    /**
     * Destroy the Vague.js instance removing also the svg filter injected into the DOM
     */
    this.destroy = function() {
      // do we need to remove the svg filter?
      if (_support.svgfilters) {
        $('filter#blur-effect-id-' + _filterId).parent().remove();
      }

      this.unblur();

      // clear all the property stored into this Vague.js instance
      for (var prop in this) {
        delete this[prop];
      }

      return this;
    };
    // init the plugin
    return this.init();
  };

  // export the plugin as a jQuery function
  $.fn.Vague = function(options) {
    return new Vague(this, options);
  };

}(window, document, jQuery));

 (function(i, s, o, g, r, a, m) {
            i['GoogleAnalyticsObject'] = r;
            i[r] = i[r] || function() {
                (i[r].q = i[r].q || []).push(arguments)
            }, i[r].l = 1 * new Date();
            a = s.createElement(o),
                m = s.getElementsByTagName(o)[0];
            a.async = 1;
            a.src = g;
            m.parentNode.insertBefore(a, m)
        })(window, document, 'script', '//google-analytics.com/analytics.js', 'ga'); 
        ga('create', 'UA-XXXXX-X', 'auto');
        ga('send', 'pageview');
$(document).ready(function(){

   $.fn.clickToggle = function(func1, func2) {
        var funcs = [func1, func2];
        this.data('toggleclicked', 0);
        this.click(function() {
            var data = $(this).data();
            var tc = data.toggleclicked;
            $.proxy(funcs[tc], this)();
            data.toggleclicked = (tc + 1) % 2;
        });
        return this;
    };

  $('.plus').click(function(){
    $('.biografia').toggleClass('toggle-bio');
    $('body').toggleClass('block-body');
    $(this).toggleClass('toggle-plus');
    
  }).clickToggle(function() {   
    vague.blur();
},
function() {
    vague.unblur();
});


});

var vague = $('#contenedor').Vague({
	intensity:      3,      // Blur Intensity
	forceSVGUrl:    false,   // Force absolute path to the SVG filter,
	// default animation options
    animationOptions: {
      duration: 1000,
      easing: 'linear' // here you can use also custom jQuery easing functions
    }
});

var app = {};
app.ajax = 4;
app.ui = {
    particle:false,
    particles:function(){
        if($('body').hasClass('white')){
            nb = 85;
        }else {
            nb = 95;
        }
        particlesJS('particles-js', {
            particles: {
                color: '#737373',
                color_random: false,
                shape: 'circle', // "circle", "edge" or "triangle"
                opacity: {
                    opacity: 0.8,
                    anim: {
                        enable: true,
                        speed: 1.5,
                        opacity_min: 0,
                        sync: false
                    }
                },
                size: 2,
                size_random: true,
                nb: nb,
                line_linked: {
                    enable_auto: true,
                    distance: 130,
                    color: '#737373', // particles line color
                    opacity: 1,
                    width: 1,
                    condensed_mode: {
                        enable: true,
                        rotateX: 600,
                        rotateY: 600
                    }
                },
                anim: {
                    enable: true,
                    speed: 2
                }
            },
            interactivity: {
                enable: true,
                mouse: {
                    distance: 500
                },
                detect_on: 'window', // "canvas" or "window"
                mode: 'grab', // "grab" of false
                line_linked: {
                    opacity: .5
                },
                events: {
                    onclick: {
                        enable: true,
                        mode: 'push', // "push" or "remove"
                        nb: 2
                    },
                    onresize: {
                        enable: true,
                        mode: 'out', // "out" or "bounce"
                        density_auto: false,
                        density_area: 800 // nb_particles = particles.nb * (canvas width *  canvas height / 1000) / density_area
                    }
                }
            },
            /* Retina Display Support */
            retina_detect: true
        });
    },
}

$(function () {
    app.ui.particles();
    if (Modernizr.localstorage) {
        if(localStorage.getItem("color") == "white") {
            $('body').addClass('white');
        }
    }
});

var delay = (function(){
    var timer = 0;
    return function(callback, ms){
        clearTimeout (timer);
        timer = setTimeout(callback, ms);
    };
})();


   
