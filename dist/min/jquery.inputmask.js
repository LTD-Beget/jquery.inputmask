/*
 Input Mask plugin for jquery
 http://github.com/RobinHerbots/jquery.inputmask
 Copyright (c) 2010 - 2014 Robin Herbots
 Licensed under the MIT license (http://www.opensource.org/licenses/mit-license.php)
 Version: 3.0.24
*/
(function(e){if(void 0===e.fn.inputmask){var Q=function(b){var d=document.createElement("input");b="on"+b;var e=b in d;e||(d.setAttribute(b,"return;"),e="function"==typeof d[b]);return e},H=function(b,d,f){return(b=f.aliases[b])?(b.alias&&H(b.alias,void 0,f),e.extend(!0,f,b),e.extend(!0,f,d),!0):!1},L=function(b){function d(e){function d(b,e,c,g){this.matches=[];this.isGroup=b||!1;this.isOptional=e||!1;this.isQuantifier=c||!1;this.isAlternator=g||!1;this.quantifier={min:1,max:1}}function f(e,d,c){var g=
b.definitions[d],m=0==e.matches.length;c=void 0!=c?c:e.matches.length;if(g&&!u){for(var l=g.prevalidator,t=l?l.length:0,h=1;h<g.cardinality;h++){var s=t>=h?l[h-1]:[],r=s.validator,s=s.cardinality;e.matches.splice(c++,0,{fn:r?"string"==typeof r?RegExp(r):new function(){this.test=r}:/./,cardinality:s?s:1,optionality:e.isOptional,newBlockMarker:m,casing:g.casing,def:g.definitionSymbol||d})}e.matches.splice(c++,0,{fn:g.validator?"string"==typeof g.validator?RegExp(g.validator):new function(){this.test=
g.validator}:/./,cardinality:g.cardinality,optionality:e.isOptional,newBlockMarker:m,casing:g.casing,def:g.definitionSymbol||d})}else e.matches.splice(c++,0,{fn:null,cardinality:0,optionality:e.isOptional,newBlockMarker:m,casing:null,def:d}),u=!1}for(var h=/(?:[?*+]|\{[0-9\+\*]+(?:,[0-9\+\*]*)?\})\??|[^.?*+^${[]()|\\]+|./g,u=!1,q=new d,c,m=[],g=[];c=h.exec(e);)switch(c=c[0],c.charAt(0)){case b.optionalmarker.end:case b.groupmarker.end:var t=m.pop();0<m.length?m[m.length-1].matches.push(t):q.matches.push(t);
break;case b.optionalmarker.start:m.push(new d(!1,!0));break;case b.groupmarker.start:m.push(new d(!0));break;case b.quantifiermarker.start:t=new d(!1,!1,!0);c=c.replace(/[{}]/g,"");var y=c.split(",");c=isNaN(y[0])?y[0]:parseInt(y[0]);y=1==y.length?c:isNaN(y[1])?y[1]:parseInt(y[1]);if("*"==y||"+"==y)c="*"==c?0:1,b.greedy=!1;t.quantifier={min:c,max:y};if(0<m.length){y=m[m.length-1].matches;c=y.pop();if(!c.isGroup){var v=new d(!0);v.matches.push(c);c=v}y.push(c);y.push(t)}else c=q.matches.pop(),c.isGroup||
(v=new d(!0),v.matches.push(c),c=v),q.matches.push(c),q.matches.push(t);break;case b.escapeChar:u=!0;break;case b.alternatormarker:break;default:0<m.length?f(m[m.length-1],c):(0<q.matches.length&&(t=q.matches[q.matches.length-1],t.isGroup&&(t.isGroup=!1,f(t,b.groupmarker.start,0),f(t,b.groupmarker.end))),f(q,c))}0<q.matches.length&&g.push(q);return g}function f(l,f){if(b.numericInput){l=l.split("").reverse();for(var h in l)l[h]==b.optionalmarker.start?l[h]=b.optionalmarker.end:l[h]==b.optionalmarker.end?
l[h]=b.optionalmarker.start:l[h]==b.groupmarker.start?l[h]=b.groupmarker.end:l[h]==b.groupmarker.end&&(l[h]=b.groupmarker.start);l=l.join("")}if(void 0!=l&&""!=l){if(0<b.repeat||"*"==b.repeat||"+"==b.repeat)l=b.groupmarker.start+l+b.groupmarker.end+b.quantifiermarker.start+("*"==b.repeat?0:"+"==b.repeat?1:b.repeat)+","+b.repeat+b.quantifiermarker.end;void 0==e.inputmask.masksCache[l]&&(e.inputmask.masksCache[l]={mask:l,maskToken:d(l),validPositions:{},_buffer:void 0,buffer:void 0,tests:{},metadata:f});
return e.extend(!0,{},e.inputmask.masksCache[l])}}var h=[];e.isFunction(b.mask)&&(b.mask=b.mask.call(this,b));e.isArray(b.mask)?e.each(b.mask,function(b,e){void 0!=e.mask?h.push(f(e.mask.toString(),e)):h.push(f(e.toString()))}):(1==b.mask.length&&!1==b.greedy&&0!=b.repeat&&(b.placeholder=""),h=void 0!=b.mask.mask?f(b.mask.mask.toString(),b.mask):f(b.mask.toString()));return h},ba="function"===typeof ScriptEngineMajorVersion?ScriptEngineMajorVersion():10<=(new Function("/*@cc_on return @_jscript_version; @*/"))(),
w=navigator.userAgent,ca=null!==w.match(/iphone/i),da=null!==w.match(/android.*safari.*/i),ea=null!==w.match(/android.*chrome.*/i),fa=null!==w.match(/android.*firefox.*/i),ga=/Kindle/i.test(w)||/Silk/i.test(w)||/KFTT/i.test(w)||/KFOT/i.test(w)||/KFJWA/i.test(w)||/KFJWI/i.test(w)||/KFSOWI/i.test(w)||/KFTHWA/i.test(w)||/KFTHWI/i.test(w)||/KFAPWA/i.test(w)||/KFAPWI/i.test(w),T=Q("paste")?"paste":Q("input")?"input":"propertychange",C=function(b,d,f){function h(a,k,e){k=k||0;var D=[],g,n=0,m;do{if(!0===
a&&b.validPositions[n]){var l=b.validPositions[n];m=l.match;g=l.locator.slice();D.push(null==m.fn?m.def:!0===e?l.input:d.placeholder.charAt(n%d.placeholder.length))}else g=k>n?c(n,g,n-1)[0]:S(n,g,n-1),m=g.match,g=g.locator.slice(),D.push(null==m.fn?m.def:d.placeholder.charAt(n%d.placeholder.length));n++}while((void 0==I||n-1<I)&&null!=m.fn||null==m.fn&&""!=m.def||k>=n);D.pop();return D}function l(a){var k=b;k.buffer=void 0;k.tests={};!0!==a&&(k._buffer=void 0,k.validPositions={},k.p=-1)}function r(a){var k=
b,z=-1,D=k.validPositions;if(e.isFunction(d.getLastValidPosition))z=d.getLastValidPosition.call(p,k,a,d);else for(var c in D)a=parseInt(c),a>z&&(z=a);return z}function s(a,k,z){if(d.insertMode&&void 0!=b.validPositions[a]&&void 0==z){z=e.extend(!0,{},b.validPositions);var D=r(),c;for(c=a;c<=D;c++)delete b.validPositions[c];b.validPositions[a]=k;k=!0;for(c=a;c<=D;c++){a=z[c];if(void 0!=a){var g=null==a.match.fn?c+1:F(c);k=q(g,a.match.def)?k&&!1!==v(g,a.input,!0,!0):!1}if(!k)break}if(!k)return b.validPositions=
e.extend(!0,{},z),!1}else b.validPositions[a]=k;return!0}function S(a,k,b){a=c(a,k,b);var e,g;for(g in a)if(e=a[g],d.greedy||(!1===e.match.optionality||!1===e.match.newBlockMarker)&&!0!==e.match.optionalQuantifier)break;return e}function u(a){return b.validPositions[a]?b.validPositions[a].match:c(a)[0].match}function q(a,k){var b=!1,e=c(a),d;for(d in e)if(e[d].match.def==k){b=!0;break}return b}function c(a,k,e){function d(k,e,b,c){function z(b,c,h){if(g==a&&void 0==b.matches)return m.push({match:b,
locator:c.reverse()}),!0;if(void 0!=b.matches)if(b.isGroup&&!0!==h){if(b=z(k.matches[f+1],c))return!0}else if(b.isOptional){var A=b;if(b=d(b,e,c,h))b=m[m.length-1].match,(b=0==A.matches.indexOf(b))&&(l=!0),g=a}else{if(!b.isAlternator)if(b.isQuantifier&&!0!==h)for(A=b,h=0<e.length&&!0!==h?e.shift():0;h<(isNaN(A.quantifier.max)?h+1:A.quantifier.max)&&g<=a;h++){var t=k.matches[k.matches.indexOf(A)-1];if(b=z(t,[h].concat(c),!0))if(b=m[m.length-1].match,b.optionalQuantifier=h>A.quantifier.min-1,b=0==t.matches.indexOf(b))if(h>
A.quantifier.min-1){l=!0;g=a;break}else return!0;else return!0}else if(b=d(b,e,c,h))return!0}else g++}for(var f=0<e.length?e.shift():0;f<k.matches.length;f++)if(!0!==k.matches[f].isQuantifier){var h=z(k.matches[f],[f].concat(b),c);if(h&&g==a)return h;if(g>a)break}}var c=b.maskToken,g=k?e:0;e=k||[0];var m=[],l=!1;if(void 0==k){k=a-1;for(var f;void 0==(f=b.validPositions[k])&&-1<k;)k--;if(void 0!=f&&-1<k)g=k,e=f.locator.slice();else{for(k=a-1;void 0==(f=b.tests[k])&&-1<k;)k--;void 0!=f&&-1<k&&(g=k,
e=f[0].locator.slice())}}for(k=e.shift();k<c.length&&!(d(c[k],e,[k])&&g==a||g>a);k++);(0==m.length||l)&&m.push({match:{fn:null,cardinality:0,optionality:!0,casing:null,def:""},locator:[]});return b.tests[a]=m}function m(){void 0==b._buffer&&(b._buffer=h(!1,1));return b._buffer}function g(){void 0==b.buffer&&(b.buffer=h(!0,r(),!0));return b.buffer}function t(a,b){for(var e=g().slice(),c=a;c<b;c++)e[c]!=P(c)&&e[c]!=d.skipOptionalPartCharacter&&v(c,e[c],!0,!0)}function y(a,b){switch(b.casing){case "upper":a=
a.toUpperCase();break;case "lower":a=a.toLowerCase()}return a}function v(a,k,z,D){function m(a,k,z,D){var n=!1;e.each(c(a),function(m,f){for(var h=f.match,A=k?1:0,E="",p=g(),v=h.cardinality;v>A;v--)E+=void 0==b.validPositions[a-(v-1)]?P(a-(v-1)):b.validPositions[a-(v-1)].input;k&&(E+=k);n=null!=h.fn?h.fn.test(E,p,a,z,d):k!=h.def&&k!=d.skipOptionalPartCharacter||""==h.def?!1:{c:h.def,pos:a};if(!1!==n){A=void 0!=n.c?n.c:k;A=A==d.skipOptionalPartCharacter&&null===h.fn?h.def:A;E=a;if(n.refreshFromBuffer){E=
n.refreshFromBuffer;z=!0;!0===E?(b.validPositions={},b.tests={},t(0,g().length)):t(E.start,E.end);if(void 0==n.pos&&void 0==n.c)return n.pos=r(),!1;E=void 0!=n.pos?n.pos:a;f=c(E)[0]}else!0!==n&&n.pos!=a&&(E=n.pos,t(a,E),f=c(E)[0]);0<m&&l(!0);s(E,e.extend({},f,{input:y(A,h)}),D)||(n=!1);return!1}});return n}z=!0===z;var n=m(a,k,z,D);if(!z&&(d.insertMode||void 0==b.validPositions[F(a)])&&!1===n&&!w(a))for(var f=a+1,h=F(a);f<=h;f++)if(n=m(f,k,z,D),!1!==n){a=f;break}!0===n&&(n={pos:a});return n}function w(a){a=
u(a);return null!=a.fn?a.fn:!1}function C(){var a;I=p.prop("maxLength");-1==I&&(I=void 0);if(!1==d.greedy){var k;k=r();a=b.validPositions[k];var e=void 0!=a?a.locator.slice():void 0;for(k+=1;void 0==a||null!=a.match.fn||null==a.match.fn&&""!=a.match.def;k++)a=S(k,e,k-1),e=a.locator.slice();a=k}else a=g().length;return void 0==I||a<I?a:I}function F(a){var b=C();if(a>=b)return b;for(;++a<b&&!w(a)&&(!0!==d.nojumps||d.nojumpsThreshold>a););return a}function R(a){if(0>=a)return 0;for(;0<--a&&!w(a););return a}
function G(a,b,e){a._valueSet(b.join(""));void 0!=e&&x(a,e)}function P(a,b){b=b||u(a);return null==b.fn?b.def:d.placeholder.charAt(a%d.placeholder.length)}function K(a,k,c,d,f){d=void 0!=d?d.slice():L(a._valueGet()).split("");l();k&&a._valueSet("");e.each(d,function(k,d){if(!0===f){var g=b.p,g=-1==g?g:R(g),D=-1==g?k:F(g);-1==e.inArray(d,m().slice(g+1,D))&&U.call(a,void 0,!0,d.charCodeAt(0),!1,c,k)}else U.call(a,void 0,!0,d.charCodeAt(0),!1,c,k),c=c||0<k&&k>b.p});k&&G(a,g(),F(r()))}function H(a){return e.inputmask.escapeRegex.call(this,
a)}function L(a){return a.replace(RegExp("("+H(m().join(""))+")*$"),"")}function N(a){var e=g().slice(),d,c=r(),m={},n=b.validPositions[c].locator.slice(),f;for(d=c+1;d<e.length;d++)f=S(d,n,d-1),n=f.locator.slice(),m[d]=f;for(d=e.length-1;d>c;d--)if(f=m[d].match,f.optionality&&e[d]==P(d,f))e.pop();else break;G(a,e)}function Q(a,k){if(!a.data("_inputmask")||!0!==k&&a.hasClass("hasDatepicker"))return a[0]._valueGet();var c=[],f=b.validPositions,m;for(m in f)null!=f[m].match.fn&&c.push(f[m].input);c=
(B?c.reverse():c).join("");f=(B?g().reverse():g()).join("");return e.isFunction(d.onUnMask)?d.onUnMask.call(a,f,c,d):c}function M(a){!B||"number"!=typeof a||d.greedy&&""==d.placeholder||(a=g().length-a);return a}function x(a,b,c){a=a.jquery&&0<a.length?a[0]:a;if("number"==typeof b){b=M(b);c=M(c);c="number"==typeof c?c:b;var g=e(a).data("_inputmask")||{};g.caret={begin:b,end:c};e(a).data("_inputmask",g);e(a).is(":focus")&&(a.scrollLeft=a.scrollWidth,!1==d.insertMode&&b==c&&c++,a.setSelectionRange?
(a.selectionStart=b,a.selectionEnd=c):a.createTextRange&&(a=a.createTextRange(),a.collapse(!0),a.moveEnd("character",c),a.moveStart("character",b),a.select()))}else return g=e(a).data("_inputmask"),!e(a).is(":visible")&&g&&void 0!=g.caret?(b=g.caret.begin,c=g.caret.end):a.setSelectionRange?(b=a.selectionStart,c=a.selectionEnd):document.selection&&document.selection.createRange&&(a=document.selection.createRange(),b=0-a.duplicate().moveStart("character",-1E5),c=b+a.text.length),b=M(b),c=M(c),{begin:b,
end:c}}function O(a){if(e.isFunction(d.isComplete))return d.isComplete.call(p,a,d);if("*"!=d.repeat){var b=!1,c=R(C());if(r()==c)for(var b=!0,g=0;g<=c;g++){var f=w(g);if(f&&(void 0==a[g]||a[g]==P(g))||!f&&a[g]!=P(g)){b=!1;break}}return b}}function ha(a){a=e._data(a).events;e.each(a,function(a,b){e.each(b,function(a,b){if("inputmask"==b.namespace&&"setvalue"!=b.type){var e=b.handler;b.handler=function(a){if(this.readOnly||this.disabled)a.preventDefault;else return e.apply(this,arguments)}}})})}function ia(a){function b(a){if(void 0==
e.valHooks[a]||!0!=e.valHooks[a].inputmaskpatch){var c=e.valHooks[a]&&e.valHooks[a].get?e.valHooks[a].get:function(a){return a.value},d=e.valHooks[a]&&e.valHooks[a].set?e.valHooks[a].set:function(a,b){a.value=b;return a};e.valHooks[a]={get:function(a){var b=e(a);if(b.data("_inputmask")){if(b.data("_inputmask").opts.autoUnmask)return b.inputmask("unmaskedvalue");a=c(a);b=(b=b.data("_inputmask").maskset._buffer)?b.join(""):"";return a!=b?a:""}return c(a)},set:function(a,b){var c=e(a),g=d(a,b);c.data("_inputmask")&&
c.triggerHandler("setvalue.inputmask");return g},inputmaskpatch:!0}}}var c;Object.getOwnPropertyDescriptor&&(c=Object.getOwnPropertyDescriptor(a,"value"));if(c&&c.get){if(!a._valueGet){var d=c.get,g=c.set;a._valueGet=function(){return B?d.call(this).split("").reverse().join(""):d.call(this)};a._valueSet=function(a){g.call(this,B?a.split("").reverse().join(""):a)};Object.defineProperty(a,"value",{get:function(){var a=e(this),b=e(this).data("_inputmask"),c=b.maskset;return b&&b.opts.autoUnmask?a.inputmask("unmaskedvalue"):
d.call(this)!=c._buffer.join("")?d.call(this):""},set:function(a){g.call(this,a);e(this).triggerHandler("setvalue.inputmask")}})}}else document.__lookupGetter__&&a.__lookupGetter__("value")?a._valueGet||(d=a.__lookupGetter__("value"),g=a.__lookupSetter__("value"),a._valueGet=function(){return B?d.call(this).split("").reverse().join(""):d.call(this)},a._valueSet=function(a){g.call(this,B?a.split("").reverse().join(""):a)},a.__defineGetter__("value",function(){var a=e(this),b=e(this).data("_inputmask"),
c=b.maskset;return b&&b.opts.autoUnmask?a.inputmask("unmaskedvalue"):d.call(this)!=c._buffer.join("")?d.call(this):""}),a.__defineSetter__("value",function(a){g.call(this,a);e(this).triggerHandler("setvalue.inputmask")})):(a._valueGet||(a._valueGet=function(){return B?this.value.split("").reverse().join(""):this.value},a._valueSet=function(a){this.value=B?a.split("").reverse().join(""):a}),b(a.type))}function Y(a,c,e){if(d.numericInput||B){switch(c){case d.keyCode.BACKSPACE:c=d.keyCode.DELETE;break;
case d.keyCode.DELETE:c=d.keyCode.BACKSPACE}B&&(a=e.end,e.end=e.begin,e.begin=a)}e.begin==e.end?c==d.keyCode.BACKSPACE?e.begin=R(e.begin):c==d.keyCode.DELETE&&e.end++:1!=e.end-e.begin||d.insertMode||c==d.keyCode.BACKSPACE&&e.begin--;a=e.begin;var g=e.end;for(c=a;a<g;a++)delete b.validPositions[a];for(a=g;a<=r();){var g=b.validPositions[a],f=b.validPositions[c];void 0!=g&&void 0==f?(q(c,g.match.def)&&!1!==v(c,g.input,!0)&&(delete b.validPositions[a],a++),c++):a++}for(c=r();0<c&&(void 0==b.validPositions[c]||
null==b.validPositions[c].match.fn);)delete b.validPositions[c],c--;l(!0);c=F(-1);r()<c?b.p=c:b.p=e.begin}function V(a){W=!1;var c=this,f=e(c),h=a.keyCode,A=x(c);h==d.keyCode.BACKSPACE||h==d.keyCode.DELETE||ca&&127==h||a.ctrlKey&&88==h?(a.preventDefault(),88==h&&(J=g().join("")),Y(c,h,A),G(c,g(),b.p),c._valueGet()==m().join("")&&f.trigger("cleared"),d.showTooltip&&f.prop("title",b.mask)):h==d.keyCode.END||h==d.keyCode.PAGE_DOWN?setTimeout(function(){var b=F(r());d.insertMode||b!=C()||a.shiftKey||
b--;x(c,a.shiftKey?A.begin:b,b)},0):h==d.keyCode.HOME&&!a.shiftKey||h==d.keyCode.PAGE_UP?x(c,0,a.shiftKey?A.begin:0):h==d.keyCode.ESCAPE||90==h&&a.ctrlKey?(K(c,!0,!1,J.split("")),f.click()):h!=d.keyCode.INSERT||a.shiftKey||a.ctrlKey?!1!=d.insertMode||a.shiftKey||(h==d.keyCode.RIGHT?setTimeout(function(){var a=x(c);x(c,a.begin)},0):h==d.keyCode.LEFT&&setTimeout(function(){var a=x(c);x(c,a.begin-1)},0)):(d.insertMode=!d.insertMode,x(c,d.insertMode||A.begin!=C()?A.begin:A.begin-1));var f=x(c),n=d.onKeyDown.call(this,
a,g(),d);n&&!0===n.refreshFromBuffer&&(b.validPositions={},b.tests={},t(0,g().length),l(!0),G(c,g()),x(c,f.begin,f.end));Z=-1!=e.inArray(h,d.ignorables)}function U(a,c,f,h,m,n){if(void 0==f&&W)return!1;W=!0;var t=e(this);a=a||window.event;f=c?f:a.which||a.charCode||a.keyCode;if(!(!0===c||a.ctrlKey&&a.altKey)&&(a.ctrlKey||a.metaKey||Z))return!0;if(f){!0!==c&&46==f&&!1==a.shiftKey&&","==d.radixPoint&&(f=44);var p;f=String.fromCharCode(f);c?(n=m?n:r()+1,n={begin:n,end:n}):n=x(this);var y=B?1<n.begin-
n.end||1==n.begin-n.end&&d.insertMode:1<n.end-n.begin||1==n.end-n.begin&&d.insertMode;y&&(b.undoPositions=e.extend(!0,{},b.validPositions),Y(this,d.keyCode.DELETE,n),d.insertMode||(d.insertMode=!d.insertMode,s(n.begin,m),d.insertMode=!d.insertMode),y=!d.multi);b.writeOutBuffer=!0;var q=n.begin,u=v(q,f,m);!1!==u&&(!0!==u&&(q=void 0!=u.pos?u.pos:q,f=void 0!=u.c?u.c:f),l(!0),void 0!=u.caret?p=u.caret:(m=b.validPositions,p=void 0!=m[q+1]&&S(n+1,m[q].locator.slice(),q).match.def!=m[q+1].match.def?q+1:
F(q)),b.p=p);if(!1!==h){var w=this;setTimeout(function(){d.onKeyValidation.call(w,u,d)},0);if(b.writeOutBuffer&&!1!==u){var C=g();G(this,C,c?void 0:d.numericInput?R(p):p);!0!==c&&setTimeout(function(){!0===O(C)&&t.trigger("complete");X=!0;t.trigger("input")},0)}else y&&(b.buffer=void 0,b.validPositions=b.undoPositions)}else y&&(b.buffer=void 0,b.validPositions=b.undoPositions);d.showTooltip&&t.prop("title",b.mask);a&&!0!=c&&(a.preventDefault?a.preventDefault():a.returnValue=!1)}}function $(a){var c=
e(this),f=a.keyCode,m=g();(a=d.onKeyUp.call(this,a,m,d))&&!0===a.refreshFromBuffer&&(b.validPositions={},b.tests={},t(0,g().length),l(!0),G(this,g()));f==d.keyCode.TAB&&d.showMaskOnFocus&&(c.hasClass("focus.inputmask")&&0==this._valueGet().length?(l(),m=g(),G(this,m),x(this,0),J=g().join("")):(G(this,m),x(this,M(0),M(C()))))}function aa(a){if(!0===X&&"input"==a.type)return X=!1,!0;var b=this,c=e(b);if("propertychange"==a.type&&b._valueGet().length<=C())return!0;setTimeout(function(){var a=e.isFunction(d.onBeforePaste)?
d.onBeforePaste.call(b,b._valueGet(),d):b._valueGet();K(b,!0,!1,a.split(""),!0);!0===O(g())&&c.trigger("complete");c.click()},0)}function ja(a){var b=e(this),c=x(this),f=this._valueGet(),f=f.replace(RegExp("("+H(m().join(""))+")*"),"");c.begin>f.length&&(x(this,f.length),c=x(this));1!=g().length-f.length||f.charAt(c.begin)==g()[c.begin]||f.charAt(c.begin+1)==g()[c.begin]||w(c.begin)?(K(this,!0,!1,f.split("")),!0===O(g())&&b.trigger("complete"),b.click()):(a.keyCode=d.keyCode.BACKSPACE,V.call(this,
a));a.preventDefault()}function ka(a){p=e(a);if(p.is(":input")){p.data("_inputmask",{maskset:b,opts:d,isRTL:!1});d.showTooltip&&p.prop("title",b.mask);ia(a);("rtl"==a.dir||d.rightAlign)&&p.css("text-align","right");if("rtl"==a.dir||d.numericInput){a.dir="ltr";p.removeAttr("dir");var c=p.data("_inputmask");c.isRTL=!0;p.data("_inputmask",c);B=!0}p.unbind(".inputmask");p.removeClass("focus.inputmask");p.closest("form").bind("submit",function(){J!=g().join("")&&p.change()}).bind("reset",function(){setTimeout(function(){p.trigger("setvalue")},
0)});p.bind("mouseenter.inputmask",function(){!e(this).hasClass("focus.inputmask")&&d.showMaskOnHover&&this._valueGet()!=g().join("")&&G(this,g())}).bind("blur.inputmask",function(){var a=e(this);if(a.data("_inputmask")){var b=this._valueGet(),c=g();a.removeClass("focus.inputmask");J!=g().join("")&&a.change();d.clearMaskOnLostFocus&&""!=b&&(b==m().join("")?this._valueSet(""):N(this));!1===O(c)&&(a.trigger("incomplete"),d.clearIncomplete&&(l(),d.clearMaskOnLostFocus?this._valueSet(""):(c=m().slice(),
G(this,c))))}}).bind("focus.inputmask",function(){var a=e(this),c=this._valueGet();d.showMaskOnFocus&&!a.hasClass("focus.inputmask")&&(!d.showMaskOnHover||d.showMaskOnHover&&""==c)&&this._valueGet()!=g().join("")&&G(this,g(),F(r()));a.addClass("focus.inputmask");J=g().join("")}).bind("mouseleave.inputmask",function(){var a=e(this);d.clearMaskOnLostFocus&&(a.hasClass("focus.inputmask")||this._valueGet()==a.attr("placeholder")||(this._valueGet()==m().join("")||""==this._valueGet()?this._valueSet(""):
N(this)))}).bind("click.inputmask",function(){var a=this;setTimeout(function(){var c=x(a);g();if(c.begin==c.end){var c=B?M(c.begin):c.begin,b=r(c),b=F(b);c<b?w(c)?x(a,c):x(a,F(c)):x(a,b)}},0)}).bind("dblclick.inputmask",function(){var a=this;setTimeout(function(){x(a,0,F(r()))},0)}).bind(T+".inputmask dragdrop.inputmask drop.inputmask",aa).bind("setvalue.inputmask",function(){K(this,!0);J=g().join("");this._valueGet()==m().join("")&&this._valueSet("")}).bind("complete.inputmask",d.oncomplete).bind("incomplete.inputmask",
d.onincomplete).bind("cleared.inputmask",d.oncleared);p.bind("keydown.inputmask",V).bind("keypress.inputmask",U).bind("keyup.inputmask",$);if(da||fa||ea||ga)p.attr("autocomplete","off").attr("autocorrect","off").attr("autocapitalize","off").attr("spellcheck",!1),p.unbind("keydown.inputmask",V).unbind("keypress.inputmask",U).unbind("keyup.inputmask",$),"input"==T&&p.unbind(T+".inputmask"),p.bind("input.inputmask",ja);ba&&p.bind("input.inputmask",aa);c=e.isFunction(d.onBeforeMask)?d.onBeforeMask.call(a,
a._valueGet(),d):a._valueGet();K(a,!0,!1,c.split(""),!0);J=g().join("");var f;try{f=document.activeElement}catch(h){}f===a?(p.addClass("focus.inputmask"),x(a,F(r()))):d.clearMaskOnLostFocus?g().join("")==m().join("")?a._valueSet(""):N(a):G(a,g());ha(a)}}var B=!1,J=g().join(""),p,W=!1,X=!1,Z=!1,I;if(void 0!=f)switch(f.action){case "isComplete":return p=e(f.el),O(f.buffer);case "unmaskedvalue":return p=f.$input,B=f.$input.data("_inputmask").isRTL,Q(f.$input,f.skipDatepickerCheck);case "mask":ka(f.el);
break;case "format":return p=e({}),p.data("_inputmask",{maskset:b,opts:d,isRTL:d.numericInput}),d.numericInput&&(B=!0),f=f.value.split(""),K(p,!1,!1,B?f.reverse():f,!0),B?g().reverse().join(""):g().join("");case "isValid":return p=e({}),p.data("_inputmask",{maskset:b,opts:d,isRTL:d.numericInput}),d.numericInput&&(B=!0),f=f.value.split(""),K(p,!1,!0,B?f.reverse():f),O(g())}},N=function(b,d,f){function h(c,d,g){c=c.jquery&&0<c.length?c[0]:c;if("number"==typeof d){d=l(d);g=l(g);g="number"==typeof g?
g:d;if(c!=b){var h=e(c).data("_inputmask")||{};h.caret={begin:d,end:g};e(c).data("_inputmask",h)}e(c).is(":focus")&&(c.scrollLeft=c.scrollWidth,!1==f.insertMode&&d==g&&g++,c.setSelectionRange?(c.selectionStart=d,c.selectionEnd=g):c.createTextRange&&(c=c.createTextRange(),c.collapse(!0),c.moveEnd("character",g),c.moveStart("character",d),c.select()))}else return e(c).is(":visible")||void 0==e(c).data("_inputmask").caret?c.setSelectionRange?(d=c.selectionStart,g=c.selectionEnd):document.selection&&
document.selection.createRange&&(c=document.selection.createRange(),d=0-c.duplicate().moveStart("character",-1E5),g=d+c.text.length):(h=e(c).data("_inputmask"),d=h.caret.begin,g=h.caret.end),d=l(d),g=l(g),{begin:d,end:g}}function l(c){!w||"number"!=typeof c||f.greedy&&""==f.placeholder||(c=b.value.length-c);return c}function r(c,d){if("multiMaskScope"!=c){if(e.isFunction(f.determineActiveMasksetIndex))u=f.determineActiveMasksetIndex.call(s,c,d);else{var g=-1,l=-1,q=-1;e.each(d,function(c,b){var d=
e(b).data("_inputmask").maskset,f=-1,m=0,s=h(b).begin,v;for(v in d.validPositions)d=parseInt(v),d>f&&(f=d),m++;if(m>g||m==g&&l>s&&q>f||m==g&&l==s&&q<f)g=m,l=s,u=c,q=f})}var v=s.data("_inputmask-multi")||{activeMasksetIndex:0,elmasks:d};v.activeMasksetIndex=u;s.data("_inputmask-multi",v)}-1==["focus"].indexOf(c)&&b.value!=d[u]._valueGet()&&(v=""==e(d[u]).val()?d[u]._valueGet():e(d[u]).val(),b.value=v);-1==["blur","focus"].indexOf(c)&&e(d[u]).hasClass("focus.inputmask")&&(v=h(d[u]),h(b,v.begin,v.end))}
f.multi=!0;var s=e(b),w="rtl"==b.dir||f.numericInput,u=0,q=e.map(d,function(c,b){var d='<input type="text" ';s.attr("value")&&(d+='value="'+s.attr("value")+'" ');s.attr("dir")&&(d+='dir="'+s.attr("dir")+'" ');d=e(d+"/>")[0];C(e.extend(!0,{},c),f,{action:"mask",el:d});return d});s.data("_inputmask-multi",{activeMasksetIndex:0,elmasks:q});("rtl"==b.dir||f.rightAlign)&&s.css("text-align","right");b.dir="ltr";s.removeAttr("dir");""!=s.attr("value")&&r("init",q);s.bind("mouseenter blur focus mouseleave click dblclick keydown keypress keypress",
function(c){var d=h(b),g,t=!0;if("keydown"==c.type){g=c.keyCode;if(g==f.keyCode.DOWN&&u<q.length-1)return u++,r("multiMaskScope",q),!1;if(g==f.keyCode.UP&&0<u)return u--,r("multiMaskScope",q),!1;if(c.ctrlKey||c.shiftKey||c.altKey)return!0}else if("keypress"==c.type&&(c.ctrlKey||c.shiftKey||c.altKey))return!0;e.each(q,function(b,s){if("keydown"==c.type){g=c.keyCode;if(g==f.keyCode.BACKSPACE&&s._valueGet().length<d.begin)return;if(g==f.keyCode.TAB)t=!1;else{if(g==f.keyCode.RIGHT){h(s,d.begin+1,d.end+
1);t=!1;return}if(g==f.keyCode.LEFT){h(s,d.begin-1,d.end-1);t=!1;return}}}if(-1!=["click"].indexOf(c.type)&&(h(s,l(d.begin),l(d.end)),d.begin!=d.end)){t=!1;return}-1!=["keydown"].indexOf(c.type)&&d.begin!=d.end&&h(s,d.begin,d.end);e(s).triggerHandler(c)});t&&setTimeout(function(){r(c.type,q)},0)});s.bind(T+" dragdrop drop setvalue",function(c){h(b);setTimeout(function(){e.each(q,function(d,g){g._valueSet(b.value);e(g).triggerHandler(c)});setTimeout(function(){r(c.type,q)},0)},0)});(function(c){if(void 0==
e.valHooks[c]||!0!=e.valHooks[c].inputmaskmultipatch){var b=e.valHooks[c]&&e.valHooks[c].get?e.valHooks[c].get:function(c){return c.value},d=e.valHooks[c]&&e.valHooks[c].set?e.valHooks[c].set:function(c,b){c.value=b;return c};e.valHooks[c]={get:function(c){var d=e(c);return d.data("_inputmask-multi")?(c=d.data("_inputmask-multi"),b(c.elmasks[c.activeMasksetIndex])):b(c)},set:function(c,b){var f=e(c),h=d(c,b);f.data("_inputmask-multi")&&f.triggerHandler("setvalue");return h},inputmaskmultipatch:!0}}})(b.type)};
e.inputmask={defaults:{placeholder:"_",optionalmarker:{start:"[",end:"]"},quantifiermarker:{start:"{",end:"}"},groupmarker:{start:"(",end:")"},alternatormarker:"|",escapeChar:"\\",mask:null,oncomplete:e.noop,onincomplete:e.noop,oncleared:e.noop,repeat:0,greedy:!0,autoUnmask:!1,clearMaskOnLostFocus:!0,insertMode:!0,clearIncomplete:!1,aliases:{},onKeyUp:e.noop,onKeyDown:e.noop,onBeforeMask:void 0,onBeforePaste:void 0,onUnMask:void 0,showMaskOnFocus:!0,showMaskOnHover:!0,onKeyValidation:e.noop,skipOptionalPartCharacter:" ",
showTooltip:!1,numericInput:!1,getLastValidPosition:void 0,rightAlign:!1,radixPoint:"",definitions:{9:{validator:"[0-9]",cardinality:1,definitionSymbol:"*"},a:{validator:"[A-Za-z\u0410-\u044f\u0401\u0451]",cardinality:1,definitionSymbol:"*"},"*":{validator:"[A-Za-z\u0410-\u044f\u0401\u04510-9]",cardinality:1}},keyCode:{ALT:18,BACKSPACE:8,CAPS_LOCK:20,COMMA:188,COMMAND:91,COMMAND_LEFT:91,COMMAND_RIGHT:93,CONTROL:17,DELETE:46,DOWN:40,END:35,ENTER:13,ESCAPE:27,HOME:36,INSERT:45,LEFT:37,MENU:93,NUMPAD_ADD:107,
NUMPAD_DECIMAL:110,NUMPAD_DIVIDE:111,NUMPAD_ENTER:108,NUMPAD_MULTIPLY:106,NUMPAD_SUBTRACT:109,PAGE_DOWN:34,PAGE_UP:33,PERIOD:190,RIGHT:39,SHIFT:16,SPACE:32,TAB:9,UP:38,WINDOWS:91},ignorables:[8,9,13,19,27,33,34,35,36,37,38,39,40,45,46,93,112,113,114,115,116,117,118,119,120,121,122,123],isComplete:void 0,multi:!1,nojumps:!1,nojumpsThreshold:0,determineActiveMasksetIndex:void 0},masksCache:{},escapeRegex:function(b){return b.replace(RegExp("(\\/|\\.|\\*|\\+|\\?|\\||\\(|\\)|\\[|\\]|\\{|\\}|\\\\)","gim"),
"\\$1")},format:function(b,d){var f=e.extend(!0,{},e.inputmask.defaults,d);H(f.alias,d,f);return C(L(f),f,{action:"format",value:b})},isValid:function(b,d){var f=e.extend(!0,{},e.inputmask.defaults,d);H(f.alias,d,f);return C(L(f),f,{action:"isValid",value:b})}};e.fn.inputmask=function(b,d){function f(b,d){var f=e(b),h;for(h in d){var c=f.data("inputmask-"+h.toLowerCase());void 0!=c&&(d[h]=c)}return d}var h=e.extend(!0,{},e.inputmask.defaults,d),l;if("string"===typeof b)switch(b){case "mask":return H(h.alias,
d,h),l=L(h),0==l.length?this:this.each(function(){e.isArray(l)?N(this,l,f(this,h)):C(e.extend(!0,{},l),f(this,h),{action:"mask",el:this})});case "unmaskedvalue":var r=e(this);return r.data("_inputmask")?(l=r.data("_inputmask").maskset,h=r.data("_inputmask").opts,C(l,h,{action:"unmaskedvalue",$input:r})):r.val();case "remove":return this.each(function(){var b=e(this);if(b.data("_inputmask")){l=b.data("_inputmask").maskset;h=b.data("_inputmask").opts;this._valueSet(C(l,h,{action:"unmaskedvalue",$input:b,
skipDatepickerCheck:!0}));b.unbind(".inputmask");b.removeClass("focus.inputmask");b.removeData("_inputmask");var d;Object.getOwnPropertyDescriptor&&(d=Object.getOwnPropertyDescriptor(this,"value"));d&&d.get?this._valueGet&&Object.defineProperty(this,"value",{get:this._valueGet,set:this._valueSet}):document.__lookupGetter__&&this.__lookupGetter__("value")&&this._valueGet&&(this.__defineGetter__("value",this._valueGet),this.__defineSetter__("value",this._valueSet));try{delete this._valueGet,delete this._valueSet}catch(f){this._valueSet=
this._valueGet=void 0}}});case "getemptymask":return this.data("_inputmask")?(l=this.data("_inputmask").maskset,l._buffer.join("")):"";case "hasMaskedValue":return this.data("_inputmask")?!this.data("_inputmask").opts.autoUnmask:!1;case "isComplete":return this.data("_inputmask")?(l=this.data("_inputmask").maskset,h=this.data("_inputmask").opts,C(l,h,{action:"isComplete",buffer:this[0]._valueGet().split(""),el:this})):!0;case "getmetadata":if(this.data("_inputmask"))return l=this.data("_inputmask").maskset,
l.metadata;break;default:return H(b,d,h)||(h.mask=b),l=L(h),void 0==l?this:this.each(function(){e.isArray(l)?N(this,l,f(this,h)):C(e.extend(!0,{},l),f(this,h),{action:"mask",el:this})})}else{if("object"==typeof b)return h=e.extend(!0,{},e.inputmask.defaults,b),H(h.alias,b,h),l=L(h),void 0==l?this:this.each(function(){e.isArray(l)?N(this,l,f(this,h)):C(e.extend(!0,{},l),f(this,h),{action:"mask",el:this})});if(void 0==b)return this.each(function(){var b=e(this).attr("data-inputmask");if(b&&""!=b)try{var b=
b.replace(RegExp("'","g"),'"'),f=e.parseJSON("{"+b+"}");e.extend(!0,f,d);h=e.extend(!0,{},e.inputmask.defaults,f);H(h.alias,f,h);h.alias=void 0;e(this).inputmask(h)}catch(l){}})}}}})(jQuery);
