if(typeof JSON2!=="object"&&window.JSON){JSON2=window.JSON}else{(function(){var a={};
/*! JSON v3.3.2 | http://bestiejs.github.io/json3 | Copyright 2012-2014, Kit Cambridge | http://kit.mit-license.org */
(function(){var c=typeof define==="function"&&define.amd;var e={"function":true,object:true};var h=e[typeof a]&&a&&!a.nodeType&&a;var i=e[typeof window]&&window||this,b=h&&e[typeof module]&&module&&!module.nodeType&&typeof global=="object"&&global;if(b&&(b.global===b||b.window===b||b.self===b)){i=b}function j(ab,V){ab||(ab=i.Object());V||(V=i.Object());var K=ab.Number||i.Number,R=ab.String||i.String,x=ab.Object||i.Object,S=ab.Date||i.Date,T=ab.SyntaxError||i.SyntaxError,aa=ab.TypeError||i.TypeError,J=ab.Math||i.Math,Y=ab.JSON||i.JSON;
if(typeof Y=="object"&&Y){V.stringify=Y.stringify;V.parse=Y.parse}var n=x.prototype,u=n.toString,r,m,L;var B=new S(-3509827334573292);try{B=B.getUTCFullYear()==-109252&&B.getUTCMonth()===0&&B.getUTCDate()===1&&B.getUTCHours()==10&&B.getUTCMinutes()==37&&B.getUTCSeconds()==6&&B.getUTCMilliseconds()==708}catch(v){}function o(ac){if(o[ac]!==L){return o[ac]}var ad;if(ac=="bug-string-char-index"){ad="a"[0]!="a"}else{if(ac=="json"){ad=o("json-stringify")&&o("json-parse")}else{var ak,ah='{"a":[1,true,false,null,"\\u0000\\b\\n\\f\\r\\t"]}';if(ac=="json-stringify"){var ai=V.stringify,aj=typeof ai=="function"&&B;if(aj){(ak=function(){return 1}).toJSON=ak;try{aj=ai(0)==="0"&&ai(new K())==="0"&&ai(new R())=='""'&&ai(u)===L&&ai(L)===L&&ai()===L&&ai(ak)==="1"&&ai([ak])=="[1]"&&ai([L])=="[null]"&&ai(null)=="null"&&ai([L,u,null])=="[null,null,null]"&&ai({a:[ak,true,false,null,"\x00\b\n\f\r\t"]})==ah&&ai(null,ak)==="1"&&ai([1,2],null,1)=="[\n 1,\n 2\n]"&&ai(new S(-8640000000000000))=='"-271821-04-20T00:00:00.000Z"'&&ai(new S(8640000000000000))=='"+275760-09-13T00:00:00.000Z"'&&ai(new S(-62198755200000))=='"-000001-01-01T00:00:00.000Z"'&&ai(new S(-1))=='"1969-12-31T23:59:59.999Z"'
}catch(ae){aj=false}}ad=aj}if(ac=="json-parse"){var ag=V.parse;if(typeof ag=="function"){try{if(ag("0")===0&&!ag(false)){ak=ag(ah);var af=ak.a.length==5&&ak.a[0]===1;if(af){try{af=!ag('"\t"')}catch(ae){}if(af){try{af=ag("01")!==1}catch(ae){}}if(af){try{af=ag("1.")!==1}catch(ae){}}}}}catch(ae){af=false}}ad=af}}}return o[ac]=!!ad}if(!o("json")){var U="[object Function]",Q="[object Date]",N="[object Number]",O="[object String]",E="[object Array]",A="[object Boolean]";var F=o("bug-string-char-index");if(!B){var s=J.floor;var Z=[0,31,59,90,120,151,181,212,243,273,304,334];var D=function(ac,ad){return Z[ad]+365*(ac-1970)+s((ac-1969+(ad=+(ad>1)))/4)-s((ac-1901+ad)/100)+s((ac-1601+ad)/400)}}if(!(r=n.hasOwnProperty)){r=function(ae){var ac={},ad;if((ac.__proto__=null,ac.__proto__={toString:1},ac).toString!=u){r=function(ah){var ag=this.__proto__,af=ah in (this.__proto__=null,this);this.__proto__=ag;return af}}else{ad=ac.constructor;r=function(ag){var af=(this.constructor||ad).prototype;return ag in this&&!(ag in af&&this[ag]===af[ag])
}}ac=null;return r.call(this,ae)}}m=function(ae,ah){var af=0,ac,ad,ag;(ac=function(){this.valueOf=0}).prototype.valueOf=0;ad=new ac();for(ag in ad){if(r.call(ad,ag)){af++}}ac=ad=null;if(!af){ad=["valueOf","toString","toLocaleString","propertyIsEnumerable","isPrototypeOf","hasOwnProperty","constructor"];m=function(aj,an){var am=u.call(aj)==U,al,ak;var ai=!am&&typeof aj.constructor!="function"&&e[typeof aj.hasOwnProperty]&&aj.hasOwnProperty||r;for(al in aj){if(!(am&&al=="prototype")&&ai.call(aj,al)){an(al)}}for(ak=ad.length;al=ad[--ak];ai.call(aj,al)&&an(al)){}}}else{if(af==2){m=function(aj,am){var ai={},al=u.call(aj)==U,ak;for(ak in aj){if(!(al&&ak=="prototype")&&!r.call(ai,ak)&&(ai[ak]=1)&&r.call(aj,ak)){am(ak)}}}}else{m=function(aj,am){var al=u.call(aj)==U,ak,ai;for(ak in aj){if(!(al&&ak=="prototype")&&r.call(aj,ak)&&!(ai=ak==="constructor")){am(ak)}}if(ai||r.call(aj,(ak="constructor"))){am(ak)}}}}return m(ae,ah)};if(!o("json-stringify")){var q={92:"\\\\",34:'\\"',8:"\\b",12:"\\f",10:"\\n",13:"\\r",9:"\\t"};
var I="000000";var t=function(ac,ad){return(I+(ad||0)).slice(-ac)};var z="\\u00";var C=function(ai){var ad='"',ag=0,ah=ai.length,ac=!F||ah>10;var af=ac&&(F?ai.split(""):ai);for(;ag<ah;ag++){var ae=ai.charCodeAt(ag);switch(ae){case 8:case 9:case 10:case 12:case 13:case 34:case 92:ad+=q[ae];break;default:if(ae<32){ad+=z+t(2,ae.toString(16));break}ad+=ac?af[ag]:ai.charAt(ag)}}return ad+'"'};var p=function(ai,aA,ag,al,ax,ac,aj){var at,ae,ap,az,ay,ak,aw,au,aq,an,ar,ad,ah,af,av,ao;try{at=aA[ai]}catch(am){}if(typeof at=="object"&&at){ae=u.call(at);if(ae==Q&&!r.call(at,"toJSON")){if(at>-1/0&&at<1/0){if(D){ay=s(at/86400000);for(ap=s(ay/365.2425)+1970-1;D(ap+1,0)<=ay;ap++){}for(az=s((ay-D(ap,0))/30.42);D(ap,az+1)<=ay;az++){}ay=1+ay-D(ap,az);ak=(at%86400000+86400000)%86400000;aw=s(ak/3600000)%24;au=s(ak/60000)%60;aq=s(ak/1000)%60;an=ak%1000}else{ap=at.getUTCFullYear();az=at.getUTCMonth();ay=at.getUTCDate();aw=at.getUTCHours();au=at.getUTCMinutes();aq=at.getUTCSeconds();an=at.getUTCMilliseconds()}at=(ap<=0||ap>=10000?(ap<0?"-":"+")+t(6,ap<0?-ap:ap):t(4,ap))+"-"+t(2,az+1)+"-"+t(2,ay)+"T"+t(2,aw)+":"+t(2,au)+":"+t(2,aq)+"."+t(3,an)+"Z"
}else{at=null}}else{if(typeof at.toJSON=="function"&&((ae!=N&&ae!=O&&ae!=E)||r.call(at,"toJSON"))){at=at.toJSON(ai)}}}if(ag){at=ag.call(aA,ai,at)}if(at===null){return"null"}ae=u.call(at);if(ae==A){return""+at}else{if(ae==N){return at>-1/0&&at<1/0?""+at:"null"}else{if(ae==O){return C(""+at)}}}if(typeof at=="object"){for(af=aj.length;af--;){if(aj[af]===at){throw aa()}}aj.push(at);ar=[];av=ac;ac+=ax;if(ae==E){for(ah=0,af=at.length;ah<af;ah++){ad=p(ah,at,ag,al,ax,ac,aj);ar.push(ad===L?"null":ad)}ao=ar.length?(ax?"[\n"+ac+ar.join(",\n"+ac)+"\n"+av+"]":("["+ar.join(",")+"]")):"[]"}else{m(al||at,function(aC){var aB=p(aC,at,ag,al,ax,ac,aj);if(aB!==L){ar.push(C(aC)+":"+(ax?" ":"")+aB)}});ao=ar.length?(ax?"{\n"+ac+ar.join(",\n"+ac)+"\n"+av+"}":("{"+ar.join(",")+"}")):"{}"}aj.pop();return ao}};V.stringify=function(ac,ae,af){var ad,al,aj,ai;if(e[typeof ae]&&ae){if((ai=u.call(ae))==U){al=ae}else{if(ai==E){aj={};for(var ah=0,ag=ae.length,ak;ah<ag;ak=ae[ah++],((ai=u.call(ak)),ai==O||ai==N)&&(aj[ak]=1)){}}}}if(af){if((ai=u.call(af))==N){if((af-=af%1)>0){for(ad="",af>10&&(af=10);
ad.length<af;ad+=" "){}}}else{if(ai==O){ad=af.length<=10?af:af.slice(0,10)}}}return p("",(ak={},ak[""]=ac,ak),al,aj,ad,"",[])}}if(!o("json-parse")){var M=R.fromCharCode;var l={92:"\\",34:'"',47:"/",98:"\b",116:"\t",110:"\n",102:"\f",114:"\r"};var G,X;var H=function(){G=X=null;throw T()};var y=function(){var ah=X,af=ah.length,ag,ae,ac,ai,ad;while(G<af){ad=ah.charCodeAt(G);switch(ad){case 9:case 10:case 13:case 32:G++;break;case 123:case 125:case 91:case 93:case 58:case 44:ag=F?ah.charAt(G):ah[G];G++;return ag;case 34:for(ag="@",G++;G<af;){ad=ah.charCodeAt(G);if(ad<32){H()}else{if(ad==92){ad=ah.charCodeAt(++G);switch(ad){case 92:case 34:case 47:case 98:case 116:case 110:case 102:case 114:ag+=l[ad];G++;break;case 117:ae=++G;for(ac=G+4;G<ac;G++){ad=ah.charCodeAt(G);if(!(ad>=48&&ad<=57||ad>=97&&ad<=102||ad>=65&&ad<=70)){H()}}ag+=M("0x"+ah.slice(ae,G));break;default:H()}}else{if(ad==34){break}ad=ah.charCodeAt(G);ae=G;while(ad>=32&&ad!=92&&ad!=34){ad=ah.charCodeAt(++G)}ag+=ah.slice(ae,G)}}}if(ah.charCodeAt(G)==34){G++;
return ag}H();default:ae=G;if(ad==45){ai=true;ad=ah.charCodeAt(++G)}if(ad>=48&&ad<=57){if(ad==48&&((ad=ah.charCodeAt(G+1)),ad>=48&&ad<=57)){H()}ai=false;for(;G<af&&((ad=ah.charCodeAt(G)),ad>=48&&ad<=57);G++){}if(ah.charCodeAt(G)==46){ac=++G;for(;ac<af&&((ad=ah.charCodeAt(ac)),ad>=48&&ad<=57);ac++){}if(ac==G){H()}G=ac}ad=ah.charCodeAt(G);if(ad==101||ad==69){ad=ah.charCodeAt(++G);if(ad==43||ad==45){G++}for(ac=G;ac<af&&((ad=ah.charCodeAt(ac)),ad>=48&&ad<=57);ac++){}if(ac==G){H()}G=ac}return +ah.slice(ae,G)}if(ai){H()}if(ah.slice(G,G+4)=="true"){G+=4;return true}else{if(ah.slice(G,G+5)=="false"){G+=5;return false}else{if(ah.slice(G,G+4)=="null"){G+=4;return null}}}H()}}return"$"};var W=function(ad){var ac,ae;if(ad=="$"){H()}if(typeof ad=="string"){if((F?ad.charAt(0):ad[0])=="@"){return ad.slice(1)}if(ad=="["){ac=[];for(;;ae||(ae=true)){ad=y();if(ad=="]"){break}if(ae){if(ad==","){ad=y();if(ad=="]"){H()}}else{H()}}if(ad==","){H()}ac.push(W(ad))}return ac}else{if(ad=="{"){ac={};for(;;ae||(ae=true)){ad=y();
if(ad=="}"){break}if(ae){if(ad==","){ad=y();if(ad=="}"){H()}}else{H()}}if(ad==","||typeof ad!="string"||(F?ad.charAt(0):ad[0])!="@"||y()!=":"){H()}ac[ad.slice(1)]=W(y())}return ac}}H()}return ad};var P=function(ae,ad,af){var ac=w(ae,ad,af);if(ac===L){delete ae[ad]}else{ae[ad]=ac}};var w=function(af,ae,ag){var ad=af[ae],ac;if(typeof ad=="object"&&ad){if(u.call(ad)==E){for(ac=ad.length;ac--;){P(ad,ac,ag)}}else{m(ad,function(ah){P(ad,ah,ag)})}}return ag.call(af,ae,ad)};V.parse=function(ae,af){var ac,ad;G=0;X=""+ae;ac=W(y());if(y()!="$"){H()}G=X=null;return af&&u.call(af)==U?w((ad={},ad[""]=ac,ad),"",af):ac}}}V.runInContext=j;return V}if(h&&!c){j(i,h)}else{var f=i.JSON,k=i.JSON3,d=false;var g=j(i,(i.JSON3={noConflict:function(){if(!d){d=true;i.JSON=f;i.JSON3=k;f=k=null}return g}}));i.JSON={parse:g.parse,stringify:g.stringify}}if(c){define(function(){return g})}}).call(this);JSON2=a})()}if(typeof _paq!=="object"){_paq=[]}if(typeof Piwik!=="object"){Piwik=(function(){var k,a={},v=document,e=navigator,L=screen,H=window,f=H.performance||H.mozPerformance||H.msPerformance||H.webkitPerformance,q=false,F=[],m=H.encodeURIComponent,G=H.decodeURIComponent,h=unescape,M,u,d;
function j(X){try{return G(X)}catch(Y){return unescape(X)}}function x(Y){var X=typeof Y;return X!=="undefined"}function r(X){return typeof X==="function"}function K(X){return typeof X==="object"}function o(X){return typeof X==="string"||X instanceof String}function S(){var X,Z,Y;for(X=0;X<arguments.length;X+=1){Y=arguments[X];Z=Y.shift();if(o(Z)){M[Z].apply(M,Y)}else{Z.apply(M,Y)}}}function W(aa,Z,Y,X){if(aa.addEventListener){aa.addEventListener(Z,Y,X);return true}if(aa.attachEvent){return aa.attachEvent("on"+Z,Y)}aa["on"+Z]=Y}function P(Y,ab){var X="",aa,Z;for(aa in a){if(Object.prototype.hasOwnProperty.call(a,aa)){Z=a[aa][Y];if(r(Z)){X+=Z(ab)}}}return X}function T(){var X;P("unload");if(k){do{X=new Date()}while(X.getTimeAlias()<k)}}function Q(){var X;if(!q){q=true;P("load");for(X=0;X<F.length;X++){F[X]()}}return true}function p(){var Y;if(v.addEventListener){W(v,"DOMContentLoaded",function X(){v.removeEventListener("DOMContentLoaded",X,false);Q()})}else{if(v.attachEvent){v.attachEvent("onreadystatechange",function X(){if(v.readyState==="complete"){v.detachEvent("onreadystatechange",X);
Q()}});if(v.documentElement.doScroll&&H===H.top){(function X(){if(!q){try{v.documentElement.doScroll("left")}catch(Z){setTimeout(X,0);return}Q()}}())}}}if((new RegExp("WebKit")).test(e.userAgent)){Y=setInterval(function(){if(q||/loaded|complete/.test(v.readyState)){clearInterval(Y);Q()}},10)}W(H,"load",Q,false)}function i(Z,Y){var X=v.createElement("script");X.type="text/javascript";X.src=Z;if(X.readyState){X.onreadystatechange=function(){var aa=this.readyState;if(aa==="loaded"||aa==="complete"){X.onreadystatechange=null;Y()}}}else{X.onload=Y}v.getElementsByTagName("head")[0].appendChild(X)}function y(){var X="";try{X=H.top.document.referrer}catch(Z){if(H.parent){try{X=H.parent.document.referrer}catch(Y){X=""}}}if(X===""){X=v.referrer}return X}function l(X){var Z=new RegExp("^([a-z]+):"),Y=Z.exec(X);return Y?Y[1]:null}function c(X){var Z=new RegExp("^(?:(?:https?|ftp):)/*(?:[^@]+@)?([^:/#]+)"),Y=Z.exec(X);return Y?Y[1]:X}function J(Z,Y){var X="[\\?&#]"+Y+"=([^&#]*)";var ab=new RegExp(X);
var aa=ab.exec(Z);return aa?G(aa[1]):""}function t(X){return unescape(m(X))}function V(am){var Z=function(at,ar){return(at<<ar)|(at>>>(32-ar))},an=function(av){var at="",au,ar;for(au=7;au>=0;au--){ar=(av>>>(au*4))&15;at+=ar.toString(16)}return at},ac,ap,ao,Y=[],ag=1732584193,ae=4023233417,ad=2562383102,ab=271733878,aa=3285377520,al,ak,aj,ai,ah,aq,X,af=[];am=t(am);X=am.length;for(ap=0;ap<X-3;ap+=4){ao=am.charCodeAt(ap)<<24|am.charCodeAt(ap+1)<<16|am.charCodeAt(ap+2)<<8|am.charCodeAt(ap+3);af.push(ao)}switch(X&3){case 0:ap=2147483648;break;case 1:ap=am.charCodeAt(X-1)<<24|8388608;break;case 2:ap=am.charCodeAt(X-2)<<24|am.charCodeAt(X-1)<<16|32768;break;case 3:ap=am.charCodeAt(X-3)<<24|am.charCodeAt(X-2)<<16|am.charCodeAt(X-1)<<8|128;break}af.push(ap);while((af.length&15)!==14){af.push(0)}af.push(X>>>29);af.push((X<<3)&4294967295);for(ac=0;ac<af.length;ac+=16){for(ap=0;ap<16;ap++){Y[ap]=af[ac+ap]}for(ap=16;ap<=79;ap++){Y[ap]=Z(Y[ap-3]^Y[ap-8]^Y[ap-14]^Y[ap-16],1)}al=ag;ak=ae;aj=ad;ai=ab;ah=aa;
for(ap=0;ap<=19;ap++){aq=(Z(al,5)+((ak&aj)|(~ak&ai))+ah+Y[ap]+1518500249)&4294967295;ah=ai;ai=aj;aj=Z(ak,30);ak=al;al=aq}for(ap=20;ap<=39;ap++){aq=(Z(al,5)+(ak^aj^ai)+ah+Y[ap]+1859775393)&4294967295;ah=ai;ai=aj;aj=Z(ak,30);ak=al;al=aq}for(ap=40;ap<=59;ap++){aq=(Z(al,5)+((ak&aj)|(ak&ai)|(aj&ai))+ah+Y[ap]+2400959708)&4294967295;ah=ai;ai=aj;aj=Z(ak,30);ak=al;al=aq}for(ap=60;ap<=79;ap++){aq=(Z(al,5)+(ak^aj^ai)+ah+Y[ap]+3395469782)&4294967295;ah=ai;ai=aj;aj=Z(ak,30);ak=al;al=aq}ag=(ag+al)&4294967295;ae=(ae+ak)&4294967295;ad=(ad+aj)&4294967295;ab=(ab+ai)&4294967295;aa=(aa+ah)&4294967295}aq=an(ag)+an(ae)+an(ad)+an(ab)+an(aa);return aq.toLowerCase()}function O(Z,X,Y){if(Z==="translate.googleusercontent.com"){if(Y===""){Y=X}X=J(X,"u");Z=c(X)}else{if(Z==="cc.bingj.com"||Z==="webcache.googleusercontent.com"||Z.slice(0,5)==="74.6."){X=v.links[0].href;Z=c(X)}}return[Z,X,Y]}function z(Y){var X=Y.length;if(Y.charAt(--X)==="."){Y=Y.slice(0,X)}if(Y.slice(0,2)==="*."){Y=Y.slice(1)}return Y}function U(Y){Y=Y&&Y.text?Y.text:Y;
if(!o(Y)){var X=v.getElementsByTagName("title");if(X&&x(X[0])){Y=X[0].text}}return Y}function D(X){if(!X){return[]}if(!x(X.children)&&x(X.childNodes)){return X.children}if(x(X.children)){return X.children}return[]}function I(Y,X){if(!Y||!X){return false}if(Y.contains){return Y.contains(X)}if(Y===X){return true}if(Y.compareDocumentPosition){return !!(Y.compareDocumentPosition(X)&16)}return false}function A(Z,aa){if(Z&&Z.indexOf){return Z.indexOf(aa)}if(!x(Z)||Z===null){return -1}if(!Z.length){return -1}var X=Z.length;if(X===0){return -1}var Y=0;while(Y<X){if(Z[Y]===aa){return Y}Y++}return -1}function g(Z){if(!Z){return false}function X(ab,ac){if(H.getComputedStyle){return v.defaultView.getComputedStyle(ab,null)[ac]}if(ab.currentStyle){return ab.currentStyle[ac]}}function aa(ab){ab=ab.parentNode;while(ab){if(ab===v){return true}ab=ab.parentNode}return false}function Y(ad,aj,ab,ag,ae,ah,af){var ac=ad.parentNode,ai=1;if(!aa(ad)){return false}if(9===ac.nodeType){return true}if("0"===X(ad,"opacity")||"none"===X(ad,"display")||"hidden"===X(ad,"visibility")){return false
}if(!x(aj)||!x(ab)||!x(ag)||!x(ae)||!x(ah)||!x(af)){aj=ad.offsetTop;ae=ad.offsetLeft;ag=aj+ad.offsetHeight;ab=ae+ad.offsetWidth;ah=ad.offsetWidth;af=ad.offsetHeight}if(Z===ad&&(0===af||0===ah)&&"hidden"===X(ad,"overflow")){return false}if(ac){if(("hidden"===X(ac,"overflow")||"scroll"===X(ac,"overflow"))){if(ae+ai>ac.offsetWidth+ac.scrollLeft||ae+ah-ai<ac.scrollLeft||aj+ai>ac.offsetHeight+ac.scrollTop||aj+af-ai<ac.scrollTop){return false}}if(ad.offsetParent===ac){ae+=ac.offsetLeft;aj+=ac.offsetTop}return Y(ac,aj,ab,ag,ae,ah,af)}return true}return Y(Z)}var R={htmlCollectionToArray:function(Z){var X=[],Y;if(!Z||!Z.length){return X}for(Y=0;Y<Z.length;Y++){X.push(Z[Y])}return X},find:function(X){if(!document.querySelectorAll||!X){return[]}var Y=document.querySelectorAll(X);return this.htmlCollectionToArray(Y)},findMultiple:function(Z){if(!Z||!Z.length){return[]}var Y,aa;var X=[];for(Y=0;Y<Z.length;Y++){aa=this.find(Z[Y]);X=X.concat(aa)}X=this.makeNodesUnique(X);return X},findNodesByTagName:function(Y,X){if(!Y||!X||!Y.getElementsByTagName){return[]
}var Z=Y.getElementsByTagName(X);return this.htmlCollectionToArray(Z)},makeNodesUnique:function(X){var ac=[].concat(X);X.sort(function(ae,ad){if(ae===ad){return 0}var ag=A(ac,ae);var af=A(ac,ad);if(ag===af){return 0}return ag>af?-1:1});if(X.length<=1){return X}var Y=0;var aa=0;var ab=[];var Z;Z=X[Y++];while(Z){if(Z===X[Y]){aa=ab.push(Y)}Z=X[Y++]||null}while(aa--){X.splice(ab[aa],1)}return X},getAttributeValueFromNode:function(ab,Z){if(!this.hasNodeAttribute(ab,Z)){return}if(ab&&ab.getAttribute){return ab.getAttribute(Z)}if(!ab||!ab.attributes){return}var aa=(typeof ab.attributes[Z]);if("undefined"===aa){return}if(ab.attributes[Z].value){return ab.attributes[Z].value}if(ab.attributes[Z].nodeValue){return ab.attributes[Z].nodeValue}var Y;var X=ab.attributes;if(!X){return}for(Y=0;Y<X.length;Y++){if(X[Y].nodeName===Z){return X[Y].nodeValue}}return null},hasNodeAttributeWithValue:function(Y,X){var Z=this.getAttributeValueFromNode(Y,X);return !!Z},hasNodeAttribute:function(Z,X){if(Z&&Z.hasAttribute){return Z.hasAttribute(X)
}if(Z&&Z.attributes){var Y=(typeof Z.attributes[X]);return"undefined"!==Y}return false},hasNodeCssClass:function(Z,X){if(Z&&X&&Z.className){var Y=typeof Z.className==="string"?Z.className.split(" "):[];if(-1!==A(Y,X)){return true}}return false},findNodesHavingAttribute:function(ab,Z,X){if(!X){X=[]}if(!ab||!Z){return X}var aa=D(ab);if(!aa||!aa.length){return X}var Y,ac;for(Y=0;Y<aa.length;Y++){ac=aa[Y];if(this.hasNodeAttribute(ac,Z)){X.push(ac)}X=this.findNodesHavingAttribute(ac,Z,X)}return X},findFirstNodeHavingAttribute:function(Z,Y){if(!Z||!Y){return}if(this.hasNodeAttribute(Z,Y)){return Z}var X=this.findNodesHavingAttribute(Z,Y);if(X&&X.length){return X[0]}},findFirstNodeHavingAttributeWithValue:function(aa,Z){if(!aa||!Z){return}if(this.hasNodeAttributeWithValue(aa,Z)){return aa}var X=this.findNodesHavingAttribute(aa,Z);if(!X||!X.length){return}var Y;for(Y=0;Y<X.length;Y++){if(this.getAttributeValueFromNode(X[Y],Z)){return X[Y]}}},findNodesHavingCssClass:function(ab,aa,X){if(!X){X=[]
}if(!ab||!aa){return X}if(ab.getElementsByClassName){var ac=ab.getElementsByClassName(aa);return this.htmlCollectionToArray(ac)}var Z=D(ab);if(!Z||!Z.length){return[]}var Y,ad;for(Y=0;Y<Z.length;Y++){ad=Z[Y];if(this.hasNodeCssClass(ad,aa)){X.push(ad)}X=this.findNodesHavingCssClass(ad,aa,X)}return X},findFirstNodeHavingClass:function(Z,Y){if(!Z||!Y){return}if(this.hasNodeCssClass(Z,Y)){return Z}var X=this.findNodesHavingCssClass(Z,Y);if(X&&X.length){return X[0]}},isLinkElement:function(Y){if(!Y){return false}var X=String(Y.nodeName).toLowerCase();var aa=["a","area"];var Z=A(aa,X);return Z!==-1},setAnyAttribute:function(Y,X,Z){if(!Y||!X){return}if(Y.setAttribute){Y.setAttribute(X,Z)}else{Y[X]=Z}}};var n={CONTENT_ATTR:"data-track-content",CONTENT_CLASS:"piwikTrackContent",CONTENT_NAME_ATTR:"data-content-name",CONTENT_PIECE_ATTR:"data-content-piece",CONTENT_PIECE_CLASS:"piwikContentPiece",CONTENT_TARGET_ATTR:"data-content-target",CONTENT_TARGET_CLASS:"piwikContentTarget",CONTENT_IGNOREINTERACTION_ATTR:"data-content-ignoreinteraction",CONTENT_IGNOREINTERACTION_CLASS:"piwikContentIgnoreInteraction",location:undefined,findContentNodes:function(){var Y="."+this.CONTENT_CLASS;
var X="["+this.CONTENT_ATTR+"]";var Z=R.findMultiple([Y,X]);return Z},findContentNodesWithinNode:function(aa){if(!aa){return[]}var Y=R.findNodesHavingCssClass(aa,this.CONTENT_CLASS);var X=R.findNodesHavingAttribute(aa,this.CONTENT_ATTR);if(X&&X.length){var Z;for(Z=0;Z<X.length;Z++){Y.push(X[Z])}}if(R.hasNodeAttribute(aa,this.CONTENT_ATTR)){Y.push(aa)}else{if(R.hasNodeCssClass(aa,this.CONTENT_CLASS)){Y.push(aa)}}Y=R.makeNodesUnique(Y);return Y},findParentContentNode:function(Y){if(!Y){return}var Z=Y;var X=0;while(Z&&Z!==v&&Z.parentNode){if(R.hasNodeAttribute(Z,this.CONTENT_ATTR)){return Z}if(R.hasNodeCssClass(Z,this.CONTENT_CLASS)){return Z}Z=Z.parentNode;if(X>1000){break}X++}},findPieceNode:function(Y){var X;X=R.findFirstNodeHavingAttribute(Y,this.CONTENT_PIECE_ATTR);if(!X){X=R.findFirstNodeHavingClass(Y,this.CONTENT_PIECE_CLASS)}if(X){return X}return Y},findTargetNodeNoDefault:function(X){if(!X){return}var Y=R.findFirstNodeHavingAttributeWithValue(X,this.CONTENT_TARGET_ATTR);if(Y){return Y
}Y=R.findFirstNodeHavingAttribute(X,this.CONTENT_TARGET_ATTR);if(Y){return Y}Y=R.findFirstNodeHavingClass(X,this.CONTENT_TARGET_CLASS);if(Y){return Y}},findTargetNode:function(X){var Y=this.findTargetNodeNoDefault(X);if(Y){return Y}return X},findContentName:function(Y){if(!Y){return}var ab=R.findFirstNodeHavingAttributeWithValue(Y,this.CONTENT_NAME_ATTR);if(ab){return R.getAttributeValueFromNode(ab,this.CONTENT_NAME_ATTR)}var X=this.findContentPiece(Y);if(X){return this.removeDomainIfIsInLink(X)}if(R.hasNodeAttributeWithValue(Y,"title")){return R.getAttributeValueFromNode(Y,"title")}var Z=this.findPieceNode(Y);if(R.hasNodeAttributeWithValue(Z,"title")){return R.getAttributeValueFromNode(Z,"title")}var aa=this.findTargetNode(Y);if(R.hasNodeAttributeWithValue(aa,"title")){return R.getAttributeValueFromNode(aa,"title")}},findContentPiece:function(Y){if(!Y){return}var aa=R.findFirstNodeHavingAttributeWithValue(Y,this.CONTENT_PIECE_ATTR);if(aa){return R.getAttributeValueFromNode(aa,this.CONTENT_PIECE_ATTR)
}var X=this.findPieceNode(Y);var Z=this.findMediaUrlInNode(X);if(Z){return this.toAbsoluteUrl(Z)}},findContentTarget:function(Z){if(!Z){return}var aa=this.findTargetNode(Z);if(R.hasNodeAttributeWithValue(aa,this.CONTENT_TARGET_ATTR)){return R.getAttributeValueFromNode(aa,this.CONTENT_TARGET_ATTR)}var Y;if(R.hasNodeAttributeWithValue(aa,"href")){Y=R.getAttributeValueFromNode(aa,"href");return this.toAbsoluteUrl(Y)}var X=this.findPieceNode(Z);if(R.hasNodeAttributeWithValue(X,"href")){Y=R.getAttributeValueFromNode(X,"href");return this.toAbsoluteUrl(Y)}},isSameDomain:function(X){if(!X||!X.indexOf){return false}if(0===X.indexOf(this.getLocation().origin)){return true}var Y=X.indexOf(this.getLocation().host);if(8>=Y&&0<=Y){return true}return false},removeDomainIfIsInLink:function(Z){var Y="^https?://[^/]+";var X="^.*//[^/]+";if(Z&&Z.search&&-1!==Z.search(new RegExp(Y))&&this.isSameDomain(Z)){Z=Z.replace(new RegExp(X),"");if(!Z){Z="/"}}return Z},findMediaUrlInNode:function(ab){if(!ab){return}var Z=["img","embed","video","audio"];
var X=ab.nodeName.toLowerCase();if(-1!==A(Z,X)&&R.findFirstNodeHavingAttributeWithValue(ab,"src")){var aa=R.findFirstNodeHavingAttributeWithValue(ab,"src");return R.getAttributeValueFromNode(aa,"src")}if(X==="object"&&R.hasNodeAttributeWithValue(ab,"data")){return R.getAttributeValueFromNode(ab,"data")}if(X==="object"){var ac=R.findNodesByTagName(ab,"param");if(ac&&ac.length){var Y;for(Y=0;Y<ac.length;Y++){if("movie"===R.getAttributeValueFromNode(ac[Y],"name")&&R.hasNodeAttributeWithValue(ac[Y],"value")){return R.getAttributeValueFromNode(ac[Y],"value")}}}var ad=R.findNodesByTagName(ab,"embed");if(ad&&ad.length){return this.findMediaUrlInNode(ad[0])}}},trim:function(X){if(X&&String(X)===X){return X.replace(/^\s+|\s+$/g,"")}return X},isOrWasNodeInViewport:function(ac){if(!ac||!ac.getBoundingClientRect||ac.nodeType!==1){return true}var ab=ac.getBoundingClientRect();var aa=v.documentElement||{};var Z=ab.top<0;if(Z&&ac.offsetTop){Z=(ac.offsetTop+ab.height)>0}var Y=aa.clientWidth;if(H.innerWidth&&Y>H.innerWidth){Y=H.innerWidth
}var X=aa.clientHeight;if(H.innerHeight&&X>H.innerHeight){X=H.innerHeight}return((ab.bottom>0||Z)&&ab.right>0&&ab.left<Y&&((ab.top<X)||Z))},isNodeVisible:function(Y){var X=g(Y);var Z=this.isOrWasNodeInViewport(Y);return X&&Z},buildInteractionRequestParams:function(X,Y,Z,aa){var ab="";if(X){ab+="c_i="+m(X)}if(Y){if(ab){ab+="&"}ab+="c_n="+m(Y)}if(Z){if(ab){ab+="&"}ab+="c_p="+m(Z)}if(aa){if(ab){ab+="&"}ab+="c_t="+m(aa)}return ab},buildImpressionRequestParams:function(X,Y,Z){var aa="c_n="+m(X)+"&c_p="+m(Y);if(Z){aa+="&c_t="+m(Z)}return aa},buildContentBlock:function(Z){if(!Z){return}var X=this.findContentName(Z);var Y=this.findContentPiece(Z);var aa=this.findContentTarget(Z);X=this.trim(X);Y=this.trim(Y);aa=this.trim(aa);return{name:X||"Unknown",piece:Y||"Unknown",target:aa||""}},collectContent:function(aa){if(!aa||!aa.length){return[]}var Z=[];var X,Y;for(X=0;X<aa.length;X++){Y=this.buildContentBlock(aa[X]);if(x(Y)){Z.push(Y)}}return Z},setLocation:function(X){this.location=X},getLocation:function(){var X=this.location||H.location;
if(!X.origin){X.origin=X.protocol+"//"+X.hostname+(X.port?":"+X.port:"")}return X},toAbsoluteUrl:function(Y){if((!Y||String(Y)!==Y)&&Y!==""){return Y}if(""===Y){return this.getLocation().href}if(Y.search(/^\/\//)!==-1){return this.getLocation().protocol+Y}if(Y.search(/:\/\//)!==-1){return Y}if(0===Y.indexOf("#")){return this.getLocation().origin+this.getLocation().pathname+Y}if(0===Y.indexOf("?")){return this.getLocation().origin+this.getLocation().pathname+Y}if(0===Y.search("^[a-zA-Z]{2,11}:")){return Y}if(Y.search(/^\//)!==-1){return this.getLocation().origin+Y}var X="(.*/)";var Z=this.getLocation().origin+this.getLocation().pathname.match(new RegExp(X))[0];return Z+Y},isUrlToCurrentDomain:function(Y){var Z=this.toAbsoluteUrl(Y);if(!Z){return false}var X=this.getLocation().origin;if(X===Z){return true}if(0===String(Z).indexOf(X)){if(":"===String(Z).substr(X.length,1)){return false}return true}return false},setHrefAttribute:function(Y,X){if(!Y||!X){return}R.setAnyAttribute(Y,"href",X)},shouldIgnoreInteraction:function(Z){var Y=R.hasNodeAttribute(Z,this.CONTENT_IGNOREINTERACTION_ATTR);
var X=R.hasNodeCssClass(Z,this.CONTENT_IGNOREINTERACTION_CLASS);return Y||X}};function C(X,Y){if(Y){return Y}if(X.slice(-9)==="piwik.php"){X=X.slice(0,X.length-9)}return X}function B(ab){var X="Piwik_Overlay";var ae=new RegExp("index\\.php\\?module=Overlay&action=startOverlaySession&idSite=([0-9]+)&period=([^&]+)&date=([^&]+)$");var Z=ae.exec(v.referrer);if(Z){var aa=Z[1];if(aa!==String(ab)){return false}var ad=Z[2],Y=Z[3];H.name=X+"###"+ad+"###"+Y}var ac=H.name.split("###");return ac.length===3&&ac[0]===X}function N(Y,ad,aa){var ac=H.name.split("###"),ab=ac[1],X=ac[2],Z=C(Y,ad);i(Z+"plugins/Overlay/client/client.js?v=1",function(){Piwik_Overlay_Client.initialize(Z,aa,ab,X)})}function E(aJ,by){var ae=O(v.domain,H.location.href,y()),bY=z(ae[0]),cj=j(ae[1]),bG=j(ae[2]),cn=false,bC="GET",bE=bC,bj="application/x-www-form-urlencoded; charset=UTF-8",aP=bj,ab=aJ||"",az="",bA="",b5=by||"",aO="",a7="",bd,aX=v.title,aZ=["7z","aac","apk","arc","arj","asf","asx","avi","azw3","bin","csv","deb","dmg","doc","docx","epub","exe","flv","gif","gz","gzip","hqx","ibooks","jar","jpg","jpeg","js","mobi","mp2","mp3","mp4","mpg","mpeg","mov","movie","msi","msp","odb","odf","odg","ods","odt","ogg","ogv","pdf","phps","png","ppt","pptx","qt","qtm","ra","ram","rar","rpm","sea","sit","tar","tbz","tbz2","bz","bz2","tgz","torrent","txt","wav","wma","wmv","wpd","xls","xlsx","xml","z","zip"],bB=[bY],aj=[],bp=[],aH=[],bz=500,ak,b3,br,al,ao,a3=["pk_campaign","piwik_campaign","utm_campaign","utm_source","utm_medium"],aU=["pk_kwd","piwik_kwd","utm_term"],ch="_pk_",ar,ci,ap=false,b9,a5,ba,ay=33955200000,aE=1800000,bh=15768000000,a6=true,aM=0,bc=false,ah=false,av,bq={},ac={},ca=200,bR={},b6={},ai=[],aB=false,bg=false,bK=false,b7=false,bN=false,bo=null,bb,bu,au,a2=V,bJ;
function bT(cw,ct,cs,cv,cr,cu){if(ap){return}var cq;if(cs){cq=new Date();cq.setTime(cq.getTime()+cs)}v.cookie=cw+"="+m(ct)+(cs?";expires="+cq.toGMTString():"")+";path="+(cv||"/")+(cr?";domain="+cr:"")+(cu?";secure":"")}function aw(cs){if(ap){return 0}var cq=new RegExp("(^|;)[ ]*"+cs+"=([^;]*)"),cr=cq.exec(v.cookie);return cr?G(cr[2]):0}function cd(cq){var cr;if(al){cr=new RegExp("#.*");return cq.replace(cr,"")}return cq}function bX(cs,cq){var ct=l(cq),cr;if(ct){return cq}if(cq.slice(0,1)==="/"){return l(cs)+"://"+c(cs)+cq}cs=cd(cs);cr=cs.indexOf("?");if(cr>=0){cs=cs.slice(0,cr)}cr=cs.lastIndexOf("/");if(cr!==cs.length-1){cs=cs.slice(0,cr+1)}return cs+cq}function bD(ct){var cr,cq,cs;for(cr=0;cr<bB.length;cr++){cq=z(bB[cr].toLowerCase());if(ct===cq){return true}if(cq.slice(0,1)==="."){if(ct===cq.slice(1)){return true}cs=ct.length-cq.length;if((cs>0)&&(ct.slice(cs)===cq)){return true}}}return false}function cp(cq,cs){var cr=new Image(1,1);cr.onload=function(){u=0;if(typeof cs==="function"){cs()
}};cr.src=ab+(ab.indexOf("?")<0?"?":"&")+cq}function bU(cr,cu,cq){if(!x(cq)||null===cq){cq=true}try{var ct=H.XMLHttpRequest?new H.XMLHttpRequest():H.ActiveXObject?new ActiveXObject("Microsoft.XMLHTTP"):null;ct.open("POST",ab,true);ct.onreadystatechange=function(){if(this.readyState===4&&!(this.status>=200&&this.status<300)&&cq){cp(cr,cu)}else{if(typeof cu==="function"){cu()}}};ct.setRequestHeader("Content-Type",aP);ct.send(cr)}catch(cs){if(cq){cp(cr,cu)}}}function cc(cr){var cq=new Date();var cs=cq.getTime()+cr;if(!k||cs>k){k=cs}}function aC(cq){if(bb||!b3){return}bb=setTimeout(function cr(){bb=null;if(br()){return}var cs=new Date(),ct=b3-(cs.getTime()-bo);ct=Math.min(b3,ct);aC(ct)},cq||b3)}function be(){if(!bb){return}clearTimeout(bb);bb=null}function ax(){if(br()){return}aC()}function bm(){be()}function bF(){if(bN||!b3){return}bN=true;W(H,"focus",ax);W(H,"blur",bm);aC()}function aI(cu){var cr=new Date();var cq=cr.getTime();bo=cq;if(bg&&cq<bg){var cs=bg-cq;setTimeout(cu,cs);cc(cs+50);bg+=50;
return}if(bg===false){var ct=800;bg=cq+ct}cu()}function a4(cr,cq,cs){if(!b9&&cr){aI(function(){if(bE==="POST"){bU(cr,cs)}else{cp(cr,cs)}cc(cq)})}if(!bN){bF()}else{aC()}}function bi(cq){if(b9){return false}return(cq&&cq.length)}function aq(cs,cq){if(!bi(cs)){return}var cr='{"requests":["?'+cs.join('","?')+'"]}';aI(function(){bU(cr,null,false);cc(cq)})}function bS(cq){return ch+cq+"."+b5+"."+bJ}function af(){if(ap){return"0"}if(!x(e.cookieEnabled)){var cq=bS("testcookie");bT(cq,"1");return aw(cq)==="1"?"1":"0"}return e.cookieEnabled?"1":"0"}function bv(){bJ=a2((ar||bY)+(ci||"/")).slice(0,4)}function at(){var cr=bS("cvar"),cq=aw(cr);if(cq.length){cq=JSON2.parse(cq);if(K(cq)){return cq}}return{}}function aa(){if(ah===false){ah=at()}}function cf(){return a2((e.userAgent||"")+(e.platform||"")+JSON2.stringify(b6)+(new Date()).getTime()+Math.random()).slice(0,16)}function Z(){var cs=new Date(),cq=Math.round(cs.getTime()/1000),cr=bS("id"),cv=aw(cr),cu,ct;if(cv){cu=cv.split(".");cu.unshift("0");if(a7.length){cu[1]=a7
}return cu}if(a7.length){ct=a7}else{if("0"===af()){ct=""}else{ct=cf()}}cu=["1",ct,cq,0,cq,"",""];return cu}function bM(){var cx=Z(),ct=cx[0],cu=cx[1],cr=cx[2],cq=cx[3],cv=cx[4],cs=cx[5];if(!x(cx[6])){cx[6]=""}var cw=cx[6];return{newVisitor:ct,uuid:cu,createTs:cr,visitCount:cq,currentVisitTs:cv,lastVisitTs:cs,lastEcommerceOrderTs:cw}}function aQ(){var ct=new Date(),cr=ct.getTime(),cu=bM().createTs;var cq=parseInt(cu,10);var cs=(cq*1000)+ay-cr;return cs}function an(cq){if(!b5){return}var cs=new Date(),cr=Math.round(cs.getTime()/1000);if(!x(cq)){cq=bM()}var ct=cq.uuid+"."+cq.createTs+"."+cq.visitCount+"."+cr+"."+cq.lastVisitTs+"."+cq.lastEcommerceOrderTs;bT(bS("id"),ct,aQ(),ci,ar)}function Y(){var cq=aw(bS("ref"));if(cq.length){try{cq=JSON2.parse(cq);if(K(cq)){return cq}}catch(cr){}}return["","",0,""]}function b4(cs,cr,cq){bT(cs,"",-86400,cr,cq)}function bn(cr){var cq="testvalue";bT("test",cq,10000,null,cr);if(aw("test")===cq){b4("test",null,cr);return true}return false}function X(){var cs=ap;
ap=false;var cq=["id","ses","cvar","ref"];var cr,ct;for(cr=0;cr<cq.length;cr++){ct=bS(cq[cr]);if(0!==aw(ct)){b4(ct,ci,ar)}}ap=cs}function cm(cq){b5=cq;an()}function b2(cu){if(!cu||!K(cu)){return}var ct=[];var cs;for(cs in cu){if(Object.prototype.hasOwnProperty.call(cu,cs)){ct.push(cs)}}var cv={};ct.sort();var cq=ct.length;var cr;for(cr=0;cr<cq;cr++){cv[ct[cr]]=cu[ct[cr]]}return cv}function a9(){bT(bS("ses"),"*",aE,ci,ar)}function aY(cs,cL,cM,ct){var cK,cr=new Date(),cz=Math.round(cr.getTime()/1000),cw,cJ,cu=1024,cQ,cA,cH=ah,cv=bS("ses"),cF=bS("ref"),cC=bS("cvar"),cD=aw(cv),cI=Y(),cO=bd||cj,cx,cq;if(ap){X()}if(b9){return""}var cE=bM();if(!x(ct)){ct=""}var cB=v.characterSet||v.charset;if(!cB||cB.toLowerCase()==="utf-8"){cB=null}cx=cI[0];cq=cI[1];cw=cI[2];cJ=cI[3];if(!cD){var cN=aE/1000;if(!cE.lastVisitTs||(cz-cE.lastVisitTs)>cN){cE.visitCount++;cE.lastVisitTs=cE.currentVisitTs}if(!ba||!cx.length){for(cK in a3){if(Object.prototype.hasOwnProperty.call(a3,cK)){cx=J(cO,a3[cK]);if(cx.length){break
}}}for(cK in aU){if(Object.prototype.hasOwnProperty.call(aU,cK)){cq=J(cO,aU[cK]);if(cq.length){break}}}}cQ=c(bG);cA=cJ.length?c(cJ):"";if(cQ.length&&!bD(cQ)&&(!ba||!cA.length||bD(cA))){cJ=bG}if(cJ.length||cx.length){cw=cz;cI=[cx,cq,cw,cd(cJ.slice(0,cu))];bT(cF,JSON2.stringify(cI),bh,ci,ar)}}cs+="&idsite="+b5+"&rec=1&r="+String(Math.random()).slice(2,8)+"&h="+cr.getHours()+"&m="+cr.getMinutes()+"&s="+cr.getSeconds()+"&url="+m(cd(cO))+(bG.length?"&urlref="+m(cd(bG)):"")+((aO&&aO.length)?"&uid="+m(aO):"")+"&_id="+cE.uuid+"&_idts="+cE.createTs+"&_idvc="+cE.visitCount+"&_idn="+cE.newVisitor+(cx.length?"&_rcn="+m(cx):"")+(cq.length?"&_rck="+m(cq):"")+"&_refts="+cw+"&_viewts="+cE.lastVisitTs+(String(cE.lastEcommerceOrderTs).length?"&_ects="+cE.lastEcommerceOrderTs:"")+(String(cJ).length?"&_ref="+m(cd(cJ.slice(0,cu))):"")+(cB?"&cs="+m(cB):"")+"&send_image=0";for(cK in b6){if(Object.prototype.hasOwnProperty.call(b6,cK)){cs+="&"+cK+"="+b6[cK]}}if(cL){cs+="&data="+m(JSON2.stringify(cL))}else{if(ao){cs+="&data="+m(JSON2.stringify(ao))
}}function cy(cR,cS){var cT=JSON2.stringify(cR);if(cT.length>2){return"&"+cS+"="+m(cT)}return""}var cP=b2(bq);var cG=b2(ac);cs+=cy(cP,"cvar");cs+=cy(cG,"e_cvar");if(ah){cs+=cy(ah,"_cvar");for(cK in cH){if(Object.prototype.hasOwnProperty.call(cH,cK)){if(ah[cK][0]===""||ah[cK][1]===""){delete ah[cK]}}}if(bc){bT(cC,JSON2.stringify(ah),aE,ci,ar)}}if(a6){if(aM){cs+="&gt_ms="+aM}else{if(f&&f.timing&&f.timing.requestStart&&f.timing.responseEnd){cs+="&gt_ms="+(f.timing.responseEnd-f.timing.requestStart)}}}cE.lastEcommerceOrderTs=x(ct)&&String(ct).length?ct:cE.lastEcommerceOrderTs;an(cE);a9();cs+=P(cM);if(bA.length){cs+="&"+bA}if(r(av)){cs=av(cs)}return cs}br=function bw(){var cq=new Date();if(bo+b3<=cq.getTime()){var cr=aY("ping=1",null,"ping");a4(cr,bz);return true}return false};function bW(ct,cs,cx,cu,cq,cA){var cv="idgoal=0",cw,cr=new Date(),cy=[],cz;if(String(ct).length){cv+="&ec_id="+m(ct);cw=Math.round(cr.getTime()/1000)}cv+="&revenue="+cs;if(String(cx).length){cv+="&ec_st="+cx}if(String(cu).length){cv+="&ec_tx="+cu
}if(String(cq).length){cv+="&ec_sh="+cq}if(String(cA).length){cv+="&ec_dt="+cA}if(bR){for(cz in bR){if(Object.prototype.hasOwnProperty.call(bR,cz)){if(!x(bR[cz][1])){bR[cz][1]=""}if(!x(bR[cz][2])){bR[cz][2]=""}if(!x(bR[cz][3])||String(bR[cz][3]).length===0){bR[cz][3]=0}if(!x(bR[cz][4])||String(bR[cz][4]).length===0){bR[cz][4]=1}cy.push(bR[cz])}}cv+="&ec_items="+m(JSON2.stringify(cy))}cv=aY(cv,ao,"ecommerce",cw);a4(cv,bz)}function bV(cq,cu,ct,cs,cr,cv){if(String(cq).length&&x(cu)){bW(cq,cu,ct,cs,cr,cv)}}function cg(cq){if(x(cq)){bW("",cq,"","","","")}}function bl(cs,ct){var cq=new Date(),cr=aY("action_name="+m(U(cs||aX)),ct,"log");a4(cr,bz)}function aL(cs,cr){var ct,cq="(^| )(piwik[_-]"+cr;if(cs){for(ct=0;ct<cs.length;ct++){cq+="|"+cs[ct]}}cq+=")( |$)";return new RegExp(cq)}function bP(cq){return(ab&&cq&&0===String(cq).indexOf(ab))}function b1(cu,cq,cv,cr){if(bP(cq)){return 0}var ct=aL(bp,"download"),cs=aL(aH,"link"),cw=new RegExp("\\.("+aZ.join("|")+")([?&#]|$)","i");if(cs.test(cu)){return"link"
}if(cr||ct.test(cu)||cw.test(cq)){return"download"}if(cv){return 0}return"link"}function bf(cr){var cq;cq=cr.parentNode;while(cq!==null&&x(cq)){if(R.isLinkElement(cr)){break}cr=cq;cq=cr.parentNode}return cr}function bt(cu){cu=bf(cu);if(!R.hasNodeAttribute(cu,"href")){return}if(!x(cu.href)){return}var ct=R.getAttributeValueFromNode(cu,"href");if(bP(ct)){return}var cv=cu.hostname||c(cu.href);var cw=cv.toLowerCase();var cr=cu.href.replace(cv,cw);var cs=new RegExp("^(javascript|vbscript|jscript|mocha|livescript|ecmascript|mailto):","i");if(!cs.test(cr)){var cq=b1(cu.className,cr,bD(cw),R.hasNodeAttribute(cu,"download"));if(cq){return{type:cq,href:cr}}}}function cl(cq,cr,cs,ct){var cu=n.buildInteractionRequestParams(cq,cr,cs,ct);if(!cu){return}return aY(cu,null,"contentInteraction")}function ck(cs,ct,cx,cq,cr){if(!x(cs)){return}if(bP(cs)){return cs}var cv=n.toAbsoluteUrl(cs);var cu="redirecturl="+m(cv)+"&";cu+=cl(ct,cx,cq,(cr||cs));var cw="&";if(ab.indexOf("?")<0){cw="?"}return ab+cw+cu}function a8(cq,cr){if(!cq||!cr){return false
}var cs=n.findTargetNode(cq);if(n.shouldIgnoreInteraction(cs)){return false}cs=n.findTargetNodeNoDefault(cq);if(cs&&!I(cs,cr)){return false}return true}function aW(cs,cr,cu){if(!cs){return}var cq=n.findParentContentNode(cs);if(!cq){return}if(!a8(cq,cs)){return}var ct=n.buildContentBlock(cq);if(!ct){return}if(!ct.target&&cu){ct.target=cu}return n.buildInteractionRequestParams(cr,ct.name,ct.piece,ct.target)}function aT(cr){if(!ai||!ai.length){return false}var cq,cs;for(cq=0;cq<ai.length;cq++){cs=ai[cq];if(cs&&cs.name===cr.name&&cs.piece===cr.piece&&cs.target===cr.target){return true}}return false}function ad(ct){if(!ct){return false}var cw=n.findTargetNode(ct);if(!cw||n.shouldIgnoreInteraction(cw)){return false}var cx=bt(cw);if(b7&&cx&&cx.type){return false}if(R.isLinkElement(cw)&&R.hasNodeAttributeWithValue(cw,"href")){var cq=String(R.getAttributeValueFromNode(cw,"href"));if(0===cq.indexOf("#")){return false}if(bP(cq)){return true}if(!n.isUrlToCurrentDomain(cq)){return false}var cu=n.buildContentBlock(ct);
if(!cu){return}var cs=cu.name;var cy=cu.piece;var cv=cu.target;if(!R.hasNodeAttributeWithValue(cw,n.CONTENT_TARGET_ATTR)||cw.wasContentTargetAttrReplaced){cw.wasContentTargetAttrReplaced=true;cv=n.toAbsoluteUrl(cq);R.setAnyAttribute(cw,n.CONTENT_TARGET_ATTR,cv)}var cr=ck(cq,"click",cs,cy,cv);n.setHrefAttribute(cw,cr);return true}return false}function ag(cr){if(!cr||!cr.length){return}var cq;for(cq=0;cq<cr.length;cq++){ad(cr[cq])}}function bs(cq){return function(cr){if(!cq){return}var cu=n.findParentContentNode(cq);var cv;if(cr){cv=cr.target||cr.srcElement}if(!cv){cv=cq}if(!a8(cu,cv)){return}cc(bz);if(R.isLinkElement(cq)&&R.hasNodeAttributeWithValue(cq,"href")&&R.hasNodeAttributeWithValue(cq,n.CONTENT_TARGET_ATTR)){var cs=R.getAttributeValueFromNode(cq,"href");if(!bP(cs)&&cq.wasContentTargetAttrReplaced){R.setAnyAttribute(cq,n.CONTENT_TARGET_ATTR,"")}}var cz=bt(cq);if(bK&&cz&&cz.type){return cz.type}if(ad(cu)){return"href"}var cw=n.buildContentBlock(cu);if(!cw){return}var ct=cw.name;var cA=cw.piece;
var cy=cw.target;var cx=cl("click",ct,cA,cy);a4(cx,bz);return cx}}function aK(cs){if(!cs||!cs.length){return}var cq,cr;for(cq=0;cq<cs.length;cq++){cr=n.findTargetNode(cs[cq]);if(cr&&!cr.contentInteractionTrackingSetupDone){cr.contentInteractionTrackingSetupDone=true;W(cr,"click",bs(cr))}}}function aG(cs,ct){if(!cs||!cs.length){return[]}var cq,cr;for(cq=0;cq<cs.length;cq++){if(aT(cs[cq])){cs.splice(cq,1);cq--}else{ai.push(cs[cq])}}if(!cs||!cs.length){return[]}ag(ct);aK(ct);var cu=[];for(cq=0;cq<cs.length;cq++){cr=aY(n.buildImpressionRequestParams(cs[cq].name,cs[cq].piece,cs[cq].target),undefined,"contentImpressions");cu.push(cr)}return cu}function a1(cr){var cq=n.collectContent(cr);return aG(cq,cr)}function bO(cr){if(!cr||!cr.length){return[]}var cq;for(cq=0;cq<cr.length;cq++){if(!n.isNodeVisible(cr[cq])){cr.splice(cq,1);cq--}}if(!cr||!cr.length){return[]}return a1(cr)}function bZ(cs,cq,cr){var ct=n.buildImpressionRequestParams(cs,cq,cr);return aY(ct,null,"contentImpression")}function a0(ct,cr){if(!ct){return
}var cq=n.findParentContentNode(ct);var cs=n.buildContentBlock(cq);if(!cs){return}if(!cr){cr="Unknown"}return cl(cr,cs.name,cs.piece,cs.target)}function bI(cr,ct,cq,cs){return"e_c="+m(cr)+"&e_a="+m(ct)+(x(cq)?"&e_n="+m(cq):"")+(x(cs)?"&e_v="+m(cs):"")}function am(cs,cu,cq,ct,cv){if(String(cs).length===0||String(cu).length===0){return false}var cr=aY(bI(cs,cu,cq,ct),cv,"event");a4(cr,bz)}function aS(cq,ct,cr,cu){var cs=aY("search="+m(cq)+(ct?"&search_cat="+m(ct):"")+(x(cr)?"&search_count="+cr:""),cu,"sitesearch");a4(cs,bz)}function bx(cq,ct,cs){var cr=aY("idgoal="+cq+(ct?"&revenue="+ct:""),cs,"goal");a4(cr,bz)}function b0(ct,cq,cx,cw,cs){var cv=cq+"="+m(cd(ct));var cr=aW(cs,"click",ct);if(cr){cv+="&"+cr}var cu=aY(cv,cx,"link");a4(cu,(cw?0:bz),cw)}function b8(cr,cq){if(cr!==""){return cr+cq.charAt(0).toUpperCase()+cq.slice(1)}return cq}function aR(cv){var cu,cq,ct=["","webkit","ms","moz"],cs;if(!a5){for(cq=0;cq<ct.length;cq++){cs=ct[cq];if(Object.prototype.hasOwnProperty.call(v,b8(cs,"hidden"))){if(v[b8(cs,"visibilityState")]==="prerender"){cu=true
}break}}}if(cu){W(v,cs+"visibilitychange",function cr(){v.removeEventListener(cs+"visibilitychange",cr,false);cv()});return}cv()}function aV(cq){if(v.readyState==="complete"){cq()}else{if(H.addEventListener){H.addEventListener("load",cq)}else{if(H.attachEvent){H.attachEvent("onLoad",cq)}}}}function aF(cr){var cq=false;if(v.attachEvent){cq=v.readyState==="complete"}else{cq=v.readyState!=="loading"}if(cq){cr()}else{if(v.addEventListener){v.addEventListener("DOMContentLoaded",cr)}else{if(v.attachEvent){v.attachEvent("onreadystatechange",cr)}}}}function bQ(cq){var cr=bt(cq);if(cr&&cr.type){cr.href=j(cr.href);b0(cr.href,cr.type,undefined,null,cq)}}function aN(){return v.all&&!v.addEventListener}function aD(cq){var cs=cq.which;var cr=(typeof cq.button);if(!cs&&cr!=="undefined"){if(aN()){if(cq.button&1){cs=1}else{if(cq.button&2){cs=3}else{if(cq.button&4){cs=2}}}}else{if(cq.button===0||cq.button==="0"){cs=1}else{if(cq.button&1){cs=2}else{if(cq.button&2){cs=3}}}}}return cs}function aA(cq){switch(aD(cq)){case 1:return"left";
case 2:return"middle";case 3:return"right"}}function cb(cq){return cq.target||cq.srcElement}function co(cq){return function(ct){ct=ct||H.event;var cs=aA(ct);var cu=cb(ct);if(ct.type==="click"){var cr=false;if(cq&&cs==="middle"){cr=true}if(cu&&!cr){bQ(cu)}}else{if(ct.type==="mousedown"){if(cs==="middle"&&cu){bu=cs;au=cu}else{bu=au=null}}else{if(ct.type==="mouseup"){if(cs===bu&&cu===au){bQ(cu)}bu=au=null}else{if(ct.type==="contextmenu"){bQ(cu)}}}}}}function bL(cr,cq){W(cr,"click",co(cq),false);if(cq){W(cr,"mouseup",co(cq),false);W(cr,"mousedown",co(cq),false);W(cr,"contextmenu",co(cq),false)}}function bk(cr){if(!bK){bK=true;var cs,cq=aL(aj,"ignore"),ct=v.links;if(ct){for(cs=0;cs<ct.length;cs++){if(!cq.test(ct[cs].className)){bL(ct[cs],cr)}}}}}function bH(cs,cu,cv){if(aB){return true}aB=true;var cw=false;var ct,cr;function cq(){cw=true}aV(function(){function cx(cz){setTimeout(function(){if(!aB){return}cw=false;cv.trackVisibleContentImpressions();cx(cz)},cz)}function cy(cz){setTimeout(function(){if(!aB){return
}if(cw){cw=false;cv.trackVisibleContentImpressions()}cy(cz)},cz)}if(cs){ct=["scroll","resize"];for(cr=0;cr<ct.length;cr++){if(v.addEventListener){v.addEventListener(ct[cr],cq)}else{H.attachEvent("on"+ct[cr],cq)}}cy(100)}if(cu&&cu>0){cu=parseInt(cu,10);cx(cu)}})}function ce(){var cr,cs,ct={pdf:"application/pdf",qt:"video/quicktime",realp:"audio/x-pn-realaudio-plugin",wma:"application/x-mplayer2",dir:"application/x-director",fla:"application/x-shockwave-flash",java:"application/x-java-vm",gears:"application/x-googlegears",ag:"application/x-silverlight"},cq=H.devicePixelRatio||1;if(!((new RegExp("MSIE")).test(e.userAgent))){if(e.mimeTypes&&e.mimeTypes.length){for(cr in ct){if(Object.prototype.hasOwnProperty.call(ct,cr)){cs=e.mimeTypes[ct[cr]];b6[cr]=(cs&&cs.enabledPlugin)?"1":"0"}}}if(typeof navigator.javaEnabled!=="unknown"&&x(e.javaEnabled)&&e.javaEnabled()){b6.java="1"}if(r(H.GearsFactory)){b6.gears="1"}b6.cookie=af()}b6.res=L.width*cq+"x"+L.height*cq}ce();bv();an();return{getVisitorId:function(){return bM().uuid
},getVisitorInfo:function(){return Z()},getAttributionInfo:function(){return Y()},getAttributionCampaignName:function(){return Y()[0]},getAttributionCampaignKeyword:function(){return Y()[1]},getAttributionReferrerTimestamp:function(){return Y()[2]},getAttributionReferrerUrl:function(){return Y()[3]},setTrackerUrl:function(cq){ab=cq},getTrackerUrl:function(){return ab},getSiteId:function(){return b5},setSiteId:function(cq){cm(cq)},setUserId:function(cq){if(!x(cq)||!cq.length){return}aO=cq;a7=a2(aO).substr(0,16)},getUserId:function(){return aO},setCustomData:function(cq,cr){if(K(cq)){ao=cq}else{if(!ao){ao={}}ao[cq]=cr}},getCustomData:function(){return ao},setCustomRequestProcessing:function(cq){av=cq},appendToTrackingUrl:function(cq){bA=cq},getRequest:function(cq){return aY(cq)},addPlugin:function(cq,cr){a[cq]=cr},setCustomVariable:function(cr,cq,cu,cs){var ct;if(!x(cs)){cs="visit"}if(!x(cq)){return}if(!x(cu)){cu=""}if(cr>0){cq=!o(cq)?String(cq):cq;cu=!o(cu)?String(cu):cu;ct=[cq.slice(0,ca),cu.slice(0,ca)];
if(cs==="visit"||cs===2){aa();ah[cr]=ct}else{if(cs==="page"||cs===3){bq[cr]=ct}else{if(cs==="event"){ac[cr]=ct}}}}},getCustomVariable:function(cr,cs){var cq;if(!x(cs)){cs="visit"}if(cs==="page"||cs===3){cq=bq[cr]}else{if(cs==="event"){cq=ac[cr]}else{if(cs==="visit"||cs===2){aa();cq=ah[cr]}}}if(!x(cq)||(cq&&cq[0]==="")){return false}return cq},deleteCustomVariable:function(cq,cr){if(this.getCustomVariable(cq,cr)){this.setCustomVariable(cq,"","",cr)}},storeCustomVariablesInCookie:function(){bc=true},setLinkTrackingTimer:function(cq){bz=cq},setDownloadExtensions:function(cq){if(o(cq)){cq=cq.split("|")}aZ=cq},addDownloadExtensions:function(cr){var cq;if(o(cr)){cr=cr.split("|")}for(cq=0;cq<cr.length;cq++){aZ.push(cr[cq])}},removeDownloadExtensions:function(cs){var cr,cq=[];if(o(cs)){cs=cs.split("|")}for(cr=0;cr<aZ.length;cr++){if(A(cs,aZ[cr])===-1){cq.push(aZ[cr])}}aZ=cq},setDomains:function(cq){bB=o(cq)?[cq]:cq;bB.push(bY)},setIgnoreClasses:function(cq){aj=o(cq)?[cq]:cq},setRequestMethod:function(cq){bE=cq||bC
},setRequestContentType:function(cq){aP=cq||bj},setReferrerUrl:function(cq){bG=cq},setCustomUrl:function(cq){bd=bX(cj,cq)},setDocumentTitle:function(cq){aX=cq},setAPIUrl:function(cq){az=cq},setDownloadClasses:function(cq){bp=o(cq)?[cq]:cq},setLinkClasses:function(cq){aH=o(cq)?[cq]:cq},setCampaignNameKey:function(cq){a3=o(cq)?[cq]:cq},setCampaignKeywordKey:function(cq){aU=o(cq)?[cq]:cq},discardHashTag:function(cq){al=cq},setCookieNamePrefix:function(cq){ch=cq;ah=at()},setCookieDomain:function(cq){var cr=z(cq);if(bn(cr)){ar=cr;bv()}},setCookiePath:function(cq){ci=cq;bv()},setVisitorCookieTimeout:function(cq){ay=cq*1000},setSessionCookieTimeout:function(cq){aE=cq*1000},setReferralCookieTimeout:function(cq){bh=cq*1000},setConversionAttributionFirstReferrer:function(cq){ba=cq},disableCookies:function(){ap=true;b6.cookie="0";if(b5){X()}},deleteCookies:function(){X()},setDoNotTrack:function(cr){var cq=e.doNotTrack||e.msDoNotTrack;b9=cr&&(cq==="yes"||cq==="1");if(b9){this.disableCookies()}},addListener:function(cr,cq){bL(cr,cq)
},enableLinkTracking:function(cq){b7=true;if(q){bk(cq)}else{F.push(function(){bk(cq)})}},enableJSErrorTracking:function(){if(cn){return}cn=true;var cq=H.onerror;H.onerror=function(cv,ct,cs,cu,cr){aR(function(){var cw="JavaScript Errors";var cx=ct+":"+cs;if(cu){cx+=":"+cu}am(cw,cx,cv)});if(cq){return cq(cv,ct,cs,cu,cr)}return false}},disablePerformanceTracking:function(){a6=false},setGenerationTimeMs:function(cq){aM=parseInt(cq,10)},enableHeartBeatTimer:function(cq){cq=Math.max(cq,1);b3=(cq||15)*1000;if(bo!==null){bF()}},killFrame:function(){if(H.location!==H.top.location){H.top.location=H.location}},redirectFile:function(cq){if(H.location.protocol==="file:"){H.location=cq}},setCountPreRendered:function(cq){a5=cq},trackGoal:function(cq,cs,cr){aR(function(){bx(cq,cs,cr)})},trackLink:function(cr,cq,ct,cs){aR(function(){b0(cr,cq,ct,cs)})},trackPageView:function(cq,cr){ai=[];if(B(b5)){aR(function(){N(ab,az,b5)})}else{aR(function(){bl(cq,cr)})}},trackAllContentImpressions:function(){if(B(b5)){return
}aR(function(){aF(function(){var cq=n.findContentNodes();var cr=a1(cq);aq(cr,bz)})})},trackVisibleContentImpressions:function(cq,cr){if(B(b5)){return}if(!x(cq)){cq=true}if(!x(cr)){cr=750}bH(cq,cr,this);aR(function(){aV(function(){var cs=n.findContentNodes();var ct=bO(cs);aq(ct,bz)})})},trackContentImpression:function(cs,cq,cr){if(B(b5)){return}if(!cs){return}cq=cq||"Unknown";aR(function(){var ct=bZ(cs,cq,cr);a4(ct,bz)})},trackContentImpressionsWithinNode:function(cq){if(B(b5)||!cq){return}aR(function(){if(aB){aV(function(){var cr=n.findContentNodesWithinNode(cq);var cs=bO(cr);aq(cs,bz)})}else{aF(function(){var cr=n.findContentNodesWithinNode(cq);var cs=a1(cr);aq(cs,bz)})}})},trackContentInteraction:function(cs,ct,cq,cr){if(B(b5)){return}if(!cs||!ct){return}cq=cq||"Unknown";aR(function(){var cu=cl(cs,ct,cq,cr);a4(cu,bz)})},trackContentInteractionNode:function(cr,cq){if(B(b5)||!cr){return}aR(function(){var cs=a0(cr,cq);a4(cs,bz)})},logAllContentBlocksOnPage:function(){var cr=n.findContentNodes();
var cq=n.collectContent(cr);if(console!==undefined&&console&&console.log){console.log(cq)}},trackEvent:function(cr,ct,cq,cs){aR(function(){am(cr,ct,cq,cs)})},trackSiteSearch:function(cq,cs,cr){aR(function(){aS(cq,cs,cr)})},setEcommerceView:function(ct,cq,cs,cr){if(!x(cs)||!cs.length){cs=""}else{if(cs instanceof Array){cs=JSON2.stringify(cs)}}bq[5]=["_pkc",cs];if(x(cr)&&String(cr).length){bq[2]=["_pkp",cr]}if((!x(ct)||!ct.length)&&(!x(cq)||!cq.length)){return}if(x(ct)&&ct.length){bq[3]=["_pks",ct]}if(!x(cq)||!cq.length){cq=""}bq[4]=["_pkn",cq]},addEcommerceItem:function(cu,cq,cs,cr,ct){if(cu.length){bR[cu]=[cu,cq,cs,cr,ct]}},trackEcommerceOrder:function(cq,cu,ct,cs,cr,cv){bV(cq,cu,ct,cs,cr,cv)},trackEcommerceCartUpdate:function(cq){cg(cq)}}}function w(){return{push:S}}function b(ac,ab){var ad={};var Z,aa;for(Z=0;Z<ab.length;Z++){var X=ab[Z];ad[X]=1;for(aa=0;aa<ac.length;aa++){if(ac[aa]&&ac[aa][0]){var Y=ac[aa][0];if(X===Y){S(ac[aa]);delete ac[aa];if(ad[Y]>1){if(console!==undefined&&console&&console.error){console.error("The method "+Y+' is registered more than once in "paq" variable. Only the last call has an effect.')
}}ad[Y]++}}}}return ac}W(H,"beforeunload",T,false);p();Date.prototype.getTimeAlias=Date.prototype.getTime;M=new E();var s=["disableCookies","setTrackerUrl","setAPIUrl","setCookiePath","setCookieDomain","setUserId","setSiteId","enableLinkTracking"];_paq=b(_paq,s);for(u=0;u<_paq.length;u++){if(_paq[u]){S(_paq[u])}}_paq=new w();d={addPlugin:function(X,Y){a[X]=Y},getTracker:function(X,Y){if(!x(Y)){Y=this.getAsyncTracker().getSiteId()}if(!x(X)){X=this.getAsyncTracker().getTrackerUrl()}return new E(X,Y)},getAsyncTracker:function(){return M}};if(typeof define==="function"&&define.amd){define("piwik",[],function(){return d})}return d}())}if(window&&window.piwikAsyncInit){window.piwikAsyncInit()}(function(){var a=(typeof AnalyticsTracker);if(a==="undefined"){AnalyticsTracker=Piwik}}());if(typeof piwik_log!=="function"){piwik_log=function(b,f,d,g){function a(h){try{if(window["piwik_"+h]){return window["piwik_"+h]}}catch(i){}return}var c,e=Piwik.getTracker(d,f);e.setDocumentTitle(b);e.setCustomData(g);
c=a("tracker_pause");if(c){e.setLinkTrackingTimer(c)}c=a("download_extensions");if(c){e.setDownloadExtensions(c)}c=a("hosts_alias");if(c){e.setDomains(c)}c=a("ignore_classes");if(c){e.setIgnoreClasses(c)}e.trackPageView();if(a("install_tracker")){piwik_track=function(i,k,j,h){e.setSiteId(k);e.setTrackerUrl(j);e.trackLink(i,h)};e.enableLinkTracking()}};
};

/**
 * jquery.cookie.js
 */
 (function(factory){if(typeof define==="function"&&define.amd){define(["jquery"],factory)}else{if(typeof exports==="object"){factory(require("jquery"))}else{factory(jQuery)}}}(function($){var pluses=/\+/g;function encode(s){return config.raw?s:encodeURIComponent(s)}function decode(s){return config.raw?s:decodeURIComponent(s)}function stringifyCookieValue(value){return encode(config.json?JSON.stringify(value):String(value))}function parseCookieValue(s){if(s.indexOf('"')===0){s=s.slice(1,-1).replace(/\\"/g,'"').replace(/\\\\/g,"\\")}try{s=decodeURIComponent(s.replace(pluses," "));return config.json?JSON.parse(s):s}catch(e){}}function read(s,converter){var value=config.raw?s:parseCookieValue(s);return $.isFunction(converter)?converter(value):value}var config=$.cookie=function(key,value,options){if(value!==undefined&&!$.isFunction(value)){options=$.extend({},config.defaults,options);if(typeof options.expires==="number"){var days=options.expires,t=options.expires=new Date();t.setTime(+t+days*86400000)
 }return(document.cookie=[encode(key),"=",stringifyCookieValue(value),options.expires?"; expires="+options.expires.toUTCString():"",options.path?"; path="+options.path:"",options.domain?"; domain="+options.domain:"",options.secure?"; secure":""].join(""))}var result=key?undefined:{};var cookies=document.cookie?document.cookie.split("; "):[];for(var i=0,l=cookies.length;i<l;i++){var parts=cookies[i].split("=");var name=decode(parts.shift());var cookie=parts.join("=");if(key&&key===name){result=read(cookie,value);break}if(!key&&(cookie=read(cookie))!==undefined){result[name]=cookie}}return result};config.defaults={};$.removeCookie=function(key,options){if($.cookie(key)===undefined){return false}$.cookie(key,"",$.extend({},options,{expires:-1}));return !$.cookie(key)}}));var getUrlParameter=function getUrlParameter(sParam){var sPageURL=decodeURIComponent(window.location.search.substring(1)),sURLVariables=sPageURL.split("&"),sParameterName,i;for(i=0;i<sURLVariables.length;i++){sParameterName=sURLVariables[i].split("=");
 if(sParameterName[0]===sParam){return sParameterName[1]===undefined?true:sParameterName[1]}}};

/**
 * Flyco e-mall JavaScript
 *
 * @author leibniz Create 2016.07.12 16:04
 */
var url = document.location.href;
/**
 * 打人群标签的方法. Do not modify except advertiser ID ("cid") and siteID and tag category.
 */
var biddingx_u = "masky.biddin" + "gx.co" + "m" + "/p" + "dmp/" + "do/pri" + "?cid=38338&cate=";
var zhiziyun_u = "trace.zhiziyu" + "n.c" + "om/o" + "pe" + "n/tuling/" + "cm.gif?" + "siteid=" + "hOO7n0klMFX&zz" + "id=hOO7n0klMFW&cate=";
if ((typeof dsp) != "object") {
	var dsp = {}
}
dsp.s = function(a, b) {
	dsp.img = new Image(1, 1);
	dsp.p = "htt"
			+ "p"
			+ ((("ht" + "tps:") == document.location.protocol) ? "s://" : "://");
	dsp.u = a;
	dsp.cate = b;
	dsp.img.src = dsp.p + dsp.u + dsp.cate + "&ts="
			+ new Date().getTime().toString();
};

var _paq = _paq || [];
//_paq.push([ "trackPageView" ]);
_paq.push([ "enableLinkTracking" ]);
_paq.push(['setCustomVariable', 3, 'R', '', "visit"]);
var u="//analytics.turing.asia/analytics/";
_paq.push(['setTrackerUrl', u+'t_flyco.php']);
_paq.push(['setSiteId', 19]);
_paq.push([ "trackPageView" ]);

// 产品大类访客标签
var sfTagMap ={"飞科剃须刀":"fk_visitor_pro_shaver","飞科智能剃须刀":"fk_visitor_pro_shaver","飞科吹风机":"fk_visitor_pro_cfj","飞科理发器": "fk_visitor_pro_lfq","飞科卷发器":"fk_visitor_pro_tfq","飞科直发器":"fk_visitor_pro_tfq","飞科电熨斗":"fk_visitor_pro_ytxl","飞科挂烫机":"fk_visitor_pro_ytxl","飞科扫地机器人":"fk_visitor_pro_sdjqr","飞科毛球修剪器":"fk_visitor_pro_mqxjq","飞科女士剃毛器":"fk_visitor_pro_nstmq","飞科鼻毛修剪器":"fk_visitor_pro_bmxjq","适配器":"fk_visitor_pro_pj","车载适配器":"fk_visitor_pro_pj","弹簧电源线":"fk_visitor_pro_pj","刀网":"fk_visitor_pro_pj"};
// 产品访问标签
var zzyTagMap ={"fk_visitor_pro_shaver":4980,"FS352":4981,"FS351":4988,"FS359":4995,"FS375":5002,"FS376":5009,"FS338":5016,"FS339":5023,"FS373":5030,"FS372":5037,"FS360":5044,"FS872":5051,"FS871":5058,"FS619":5065,"fk_visitor_pro_cfj":5072,"FH6620":5073,"FH6273":5080,"FH6232":5087,"FH6622":5094,"FH6660":5101,"FH6618":5108,"FH6266":5115,"FH6651":5122,"FH6275":5129,"fk_visitor_pro_lfq":5136,"FC5802":5137,"FC5808":5144,"FC5806":5151,"FC5803":5158,"FC5902":5165,"fk_visitor_pro_tfq":5172,"FH6861":5173,"FH6807":5180,"FH6811":5187,"fk_visitor_pro_ytxl":5194,"FI9306":5195,"FI9301":5202,"FI9308":5209,"FI9302":5216,"FI9309":5223,"FI9311":5230,"FI9310":5237,"FI9819":5244,"FI9810":5251,"fk_visitor_pro_sdjqr":5258,"FC9601":5259,"FC9602":5266,"fk_visitor_pro_mqxjq":5273,"FR5222":5274,"FR5210":5281,"FR5006":5288,"FR5001":5295,"fk_visitor_pro_nstmq":5302,"FS7209":5303,"FS7208":5310,"fk_visitor_pro_bmxjq":5317,"FS7806":5318,"FS7805":5325,"fk_visitor_pro_pj":5332,"A01":5333,"A80":5340,"THX":5347,"FB1DW":5354,"FB5DW":5361,"FR6DW":5368,"FR8DW":5375,"FS350DW":5382,"FS355DW":5389,"LR52DW":5396,"FC5801DW":5403,"FC5805DW":5410,"FC5808DW":5417,"FC5901DW":5424};
// 页面底部的12个链接
var infoTag =["fk_connections_guide:5438","fk_connections_delivery:5439","fk_connections_payment:5440","fk_connections_accumulate_points:5442","fk_connections_guarantee:5444","fk_connections_service_network:5443",":","fk_connections_weibo:5437","fk_visitor_special_price:5433"];
//规格参数 商品评价 售后服务标签页
var detailTabInfo = ["", "规格参数", "商品评价", "售后服务"];
// 首页、新品、特惠的标签
var navbarTag = ["fk_visitor_home_page:5431","fk_visitor_new_pro:5432",":","fk_visitor_special_price:5433"];
//个人中心左侧导航栏
var leftNavTag =["fk_connections_order:5947","fk_connections_reture:5948","fk_shopping_cart:5949","fk_connections_evaluate:5950","fk_connections_cash_coupon:5951","fk_connections_vouchers:5952","fk_connections_collection:5953","fk_connections_consultation:5954","fk_connections_logistics:5955","fk_connections_sign_in:5956","fk_connections_accumulate_points:5957","fk_connections_level:5958","fk_connections_data:5959","fk_connections_address:5960","fk_connections_password_change:5961"];


//修正从URL拿到的SKU
function skuMapping(sku){
	if(sku == "FR350DW" ){
		return  "FS350DW";
	} else if( sku == "FR355DW"){
		return "FS355DW";
	} else {
		return sku;
	}
}

// 整个页面加载完之后再为各个DOM/jQuery对象添加事件
$(window).load(function(){
	/**
	 * 访客标签
	 */
	var visitCookie = $.cookie('fk_visitor');
	if( visitCookie == null || visitCookie == undefined || visitCookie.trim() ==""){
		$.cookie('fk_visitor', 'yes', {path : '/'});//关闭浏览器之后会被清除
		// 打标签
		dsp.s(biddingx_u, "fk_visitor");
		dsp.s(zhiziyun_u, "4978");
	}// 已有cookie就什么都不做

	/* 落地页标识 */
	if (url.indexOf("?turingcid=") >= 0) {
		_paq.push(['setCustomVariable', 1, "turingcid", window.location.search.substring(11), "visit"]);
		_paq.push(["trackPageView"]);
	};


	/**
	 * 点击首页、新品、特惠
	 */
	$("div.nav_list a").live("click", function(){
		var infoIndex = $("div.nav_list a").index(this);
		if(navbarTag[infoIndex] != ":"){
			dsp.s(biddingx_u, navbarTag[infoIndex].split(":")[0]);
			dsp.s(zhiziyun_u, navbarTag[infoIndex].split(":")[1]);
		}
	});

	/**
	 * 个人中心
	 */
	//在任意页面点击个人中心
	$("div.user_list a:contains('个人中心')").live("click", function(){
		dsp.s(biddingx_u, "fk_personal");
		dsp.s(zhiziyun_u, "5946");
	});
	//在个人中心页面点击左导航栏
	if(url.indexOf("mem_center") >= 0){
		$("div.userLeftMain dd[class!='none'] a").live("click", function(){
			var infoIndex = $("div.userLeftMain dd[class!='none'] a").index(this);
			dsp.s(biddingx_u, leftNavTag[infoIndex].split(":")[0]);
			dsp.s(zhiziyun_u, leftNavTag[infoIndex].split(":")[1]);
		});
	}

	/**
	 * 页面底部的12个链接
	 */
	$("div.fl.guide_info a").live("click",function(){
		var infoIndex = $("div.fl.guide_info a").index(this);
		dsp.s(biddingx_u, infoTag[infoIndex].split(":")[0]);
		dsp.s(zhiziyun_u, infoTag[infoIndex].split(":")[1]);
	});

	/**
	 * 点击在线服务
	 */
	$("img[src*='flyco.net.cn']").live("click",function(){
		if($(this).parent().css("position") == "fixed"){
			// 打标签
			dsp.s(biddingx_u, "fk_connections_serve");
			dsp.s(zhiziyun_u, "5447");
		}
	});


	if($("title").text().indexOf("登录页") >= 0){

		$("#d_login").submit(function(){
			var a = $("#d_user_name").val().trim();
			sendLoginInfo(a);
		});
		$("#phone_login").submit(function(){
			var a =$("#d_user_phone").val().trim();
			sendLoginInfo(a);
		});
	}
	function sendLoginInfo(a){
		if(a != null && a != undefined && a != ""){
			_paq.push([ 'setUserId', a ]);
			_paq.push(["trackPageView"]);
			// 打标签
			dsp.s(biddingx_u, "fk_login");
			dsp.s(zhiziyun_u, "5449");
		}
	}


	if($("title").text().indexOf("注册会员") >= 0){
		$("#register_button").live("click", function() {
			sendRegInfo();
		});
		// 绑定回车事件
		$(document).keydown(function(event){
		    if(event.keyCode==13){
		    	sendRegInfo();
		    }
		 });
	}
	function sendRegInfo(){
		if($("#d_register").css('display') == "block"){
			var a = $("#d_reg_email").val().trim();
		}else {
			var a = $("#t_reg_email").val().trim();
		}
		if(a != null && a != undefined && a != ""){
			_paq.push([ "trackEvent", "flyco", "pc-Reg", a, 1 ]);
			_paq.push([ "trackPageView" ]);
			// 打标签
			dsp.s(biddingx_u, "fk_register");
			dsp.s(zhiziyun_u, "5448");
		}
	}

	/**
	 * 点击搜索
	 */
	//点击问号搜索按钮
	$("#search").live("click", function(){
		tagForSearch();
	});
	//点击推荐关键词
	$("div.hot_words>a.in_b").live("click", function(){
		tagForSearch();
	});
	//在关键词输入框按回车
	$("#search_box").live("keydown", function(event){
	    if(event.keyCode == "13")
	    {
	    	tagForSearch();
	    }
	});
	function tagForSearch(){
		// 打标签
		dsp.s(biddingx_u, "fk_search");
		dsp.s(zhiziyun_u, "5450");
	}

	/**
	 * 点击购物车
	 */
	$("a.mini_cart").live("click", function(){
		// 打标签
		dsp.s(biddingx_u, "fk_shopping_cart");
		dsp.s(zhiziyun_u, "5451");
	});



	/*
	 * 在普通商品页面，点击“加入购物车”的动作。有两种url，/goods-A80_c-000.html和/goods-A80.html
	 */
	if(url.indexOf("goods-") >= 0 ){
		$("button.fl.in_b").live("click",function() {	//点击“加入购物车”按钮
			var productSKU = skuMapping(url.match(/goods-(.+?)[_\.]/)[1]); // 商品SKU
			var productFullname = $("h1.detailTitle.fm").text().trim(); // 整个产品标题字符串
			var productCategory = productFullname.match(/[\u4e00-\u9fa5]+/g).join("").trim();// 商品名称
			var price = $("#price_current").text().trim(); // 商品价格
			var quantity = $("#choose_num").val().trim();// 商品数量
			_paq.push([ "addEcommerceItem", productSKU, productFullname, productCategory, price, quantity ]);
			_paq.push([ "trackEcommerceCartUpdate", price  ]);
			_paq.push([ "trackPageView" ]);
		});
	}

	/*
	 * 在秒杀商品页面，点击“加入购物车”的动作。
	 */
	if(url.indexOf("spike-") >= 0){
		$("button.fl.in_b").live("click",function() {	//点击“加入购物车”按钮
			var productSKU = skuMapping(url.match(/spike-(.+?)[_\.]/)[1]); // 商品SKU
			var productFullname = $("h1.detailTitle.fm").text().trim(); // 整个产品标题字符串
			var productCategory = productFullname.match(/[\u4e00-\u9fa5]+/g).join("").trim();// 商品名称
			var price = $("span.present_price").text().split("元")[0].trim(); // 商品价格
			var quantity = $("#choose_num").val().trim();// 商品数量
			_paq.push([ "addEcommerceItem", productSKU, productFullname, productCategory, price, quantity ]);
			_paq.push([ "trackEcommerceCartUpdate", price  ]);
			_paq.push([ "trackPageView" ]);
		});
	}


	/**
	 * 特惠商品页面点击立即购买 需要加入购物车并打立即购买的标签
	 * 还有打标签（页面结构与常规商品页面不一样，需要另外写）
	 */
	if (url.indexOf("team") >= 0) {
		var productSKU = skuMapping(url.match(/team-(.+?)[_\.]/)[1]); // 商品SKU
		var productFullname = $("div.groupGoodsBox>h1.fm").text();// 整个产品标题字符串
		var productCategory = productFullname.match(/[\u4e00-\u9fa5]+/g).join("").trim();// 商品名称
		var categoryTag = sfTagMap[productCategory];// 大类标签名
		var productTag = categoryTag + "_" + productSKU;// 商品标签名
		var zzfProductTag = zzyTagMap[productSKU]; // 商品的访问标签ID

		$("input[value='立即购买']").live("click",function(){
			var price = $("p.price").text().split("元")[0].trim(); // 商品价格
			var quantity = "1";// 商品数量
			_paq.push([ "addEcommerceItem", productSKU, productFullname, productCategory, price, quantity ]);
			_paq.push([ "trackEcommerceCartUpdate", price  ]);
			_paq.push([ "trackPageView" ]);
			// 打立即购买的标签
			dsp.s(biddingx_u, productTag + "_1");
			dsp.s(zhiziyun_u, (zzfProductTag+1) );
		});
		//	打标签
		//0.大类标签和商品型号访问标签
		dsp.s(biddingx_u, categoryTag);
		dsp.s(zhiziyun_u, zzyTagMap[categoryTag]);// 大类访问标签ID
		dsp.s(biddingx_u, productTag);
		dsp.s(zhiziyun_u, zzfProductTag);
		//1. 立即购买的标签在上面写了
		//2. 没有收藏、没有加入购物车
		//3. 打 规格参数 商品评价 售后服务 的标签
		$("#goodsDetail a.tc.fl").live("click", function(){
			var infoIndex = $("#goodsDetail a.tc.fl").index(this); //目标链接下标为1-3
			if(infoIndex > 0){
				dsp.s(biddingx_u, productTag + "_" + (infoIndex + 3));
				dsp.s(zhiziyun_u, (zzfProductTag + infoIndex + 3) );
				_paq.push(["trackEvent", "flyco-web", productFullname,detailTabInfo[infoIndex],1]);
				_paq.push(["trackPageView"]);
			}
		});
		$("#goodsSubMenu a.tc.fl").live("click", function(){
			var infoIndex = $("#goodsSubMenu a.tc.fl").index(this); //目标链接下标为1-3
			if(infoIndex > 0){
				dsp.s(biddingx_u, productTag + "_" + (infoIndex + 3));
				dsp.s(zhiziyun_u, (zzfProductTag + infoIndex + 3) );
			}
		});
	}

	/**
	 * 商品(名称,单价,编号,数量) 订单号,订单价格
	 */
	// 在确认订单页面，有订单提交按钮，点击时将订单信息写入cookie
	if($("title").text().indexOf("订单提交") >= 0){
		$("a:contains('提交订单')").live("mousedown",function() {
			var arr_all = [];
			var rows = $("table.shop_cart tr"); // 所有行，每行都是订单中一个商品
			var item_length = rows.length;// 商品行数+1因为第一行是标题
			for (var i = 1; i < item_length; i++) { // 跳过第一行标题i=0
				var cells = rows.eq(i).children("td");
				var productUrl = cells.eq(0).children("div").children("a").attr("href");// 商品的页面url
				var productSKU = skuMapping(productUrl.match(/goods-(.+)[_\.]/)[1]); // 商品SKU
				// 中文名+型号，即商品名称+商品SKU，因为活动商品在这里会多一行备注,要删掉
				var productFullname = cells.eq(0).children("div").children("div").text();
				var productFullnameComment = cells.eq(0).children("div").children("div").children().text();
				productFullname = productFullname.replace(productFullnameComment,"").trim();
				var productCategory = productFullname.match(/[\u4e00-\u9fa5]+/g).join("");// 商品名称
				var price = cells.eq(1).text().split(/[￥¥]/)[1].trim(); // 商品价格
				var quantity = cells.eq(2).children("div").children("input").val(); // 商品数量
				var arr = [ productSKU, productFullname, productCategory, quantity, price ];
				arr_all.push(arr);
			}
			//因为此时没有订单号，所以在点击订单提交按钮时将订单信息写入cookie，生成订单号之后再读取并清除Cookie
			$.cookie('order_arr', arr_all.join('|'), {expires : 365,path : '/'});
		});
	}

	// 再提交订单后的页面，生成订单号和总价
	if (url.indexOf("order_sn") >= 0) {
		// 从cookie读订单信息
		var o = $.cookie('order_arr').split('|');
		$.each(o, function(i, item) {
			var productSKU = item.split(',')[0]; // 商品SKU
			var productName = item.split(',')[1]; // 商品名称
			var category = item.split(',')[2]; // 商品目录
			var quantity = item.split(',')[3]; // 商品数量
			var price = item.split(',')[4]; // 商品价格
			_paq.push([ "addEcommerceItem", productSKU, productName, category, price, quantity ]);
			_paq.push([ "trackEcommerceCartUpdate", price ]);
		});
		// 从页面读订单号和订单总价
		var orderId = url.match(/order_sn=(\d+)/)[1]; // 订单号
		var totalPrice = $("p").text().match(/金额.+元/)[0].match(/\d+\.\d{2}/)[0]; // 订单价格
		_paq.push([ "trackEcommerceOrder", orderId, totalPrice * 1 ]);
		_paq.push([ "trackPageView" ]);
		$.cookie('order_arr', 0, {expires: 0,path: '/'}); // 清空cookie
	}


	/**
	 * 要采集 点击事件(在商品详细页的点击商品规格,评论,售后服务，收藏，立即购买，访客
	 */
	// 产品信息页
	if(url.indexOf("goods-") >= 0 || url.indexOf("spike-") >= 0){
		var productFullname = $("h1.detailTitle.fm").text().trim(); // 产品中文类型+英文名
		var productSKU = ""; // 商品SKU
		if(url.indexOf("goods-") >= 0){
			productSKU = skuMapping(url.match(/goods-(.+?)[_\.]/)[1]); // 商品SKU
		} else if (url.indexOf("spike-") >= 0){
			productSKU = skuMapping(url.match(/spike-(.+?)[_\.]/)[1]); // 商品SKU
		}
		var productCategory = productFullname.match(/[\u4e00-\u9fa5]+/g).join("");// 商品类型（中文）
		var price = $("#price_current").text().trim(); // 商品价格

		// 打大类浏览标签
		var categoryTag = sfTagMap[productCategory];// 大类标签名
		dsp.s(biddingx_u, categoryTag);
		dsp.s(zhiziyun_u, zzyTagMap[categoryTag]);// 大类访问标签ID

		// 打商品具体型号的浏览标签
		var productTag = categoryTag + "_" + productSKU;// 商品标签名
		var zzfProductTag = zzyTagMap[productSKU]; // 对应商品的访问标签ID
		dsp.s(biddingx_u, productTag);
		dsp.s(zhiziyun_u, zzfProductTag);

		// 打 立即购买 的标签 _1
		$("button.fl.in_b.fm:contains('立即购买')").live("click", function(){
			dsp.s(biddingx_u, productTag + "_1");
			dsp.s(zhiziyun_u, (zzfProductTag+1) );
		});

		// 打 加入购物车 的标签 _2
		$("button.fl.in_b.fm:contains('加入购物车')").live("click", function(){
			dsp.s(biddingx_u, productTag + "_2");
			dsp.s(zhiziyun_u, (zzfProductTag+2) );
		});

		// 打 收藏该商品 的标签 _3
		$("a.fl.in_b.collect:contains('收藏该商品')").live("click", function(){
			dsp.s(biddingx_u, productTag + "_3");
			dsp.s(zhiziyun_u, (zzfProductTag+3) );
			_paq.push(["trackEvent", "flyco-web", productFullname,"收藏该商品",1]);
			_paq.push(["trackPageView"]);
		});

		// 打 规格参数 商品评价 售后服务 的标签
		$("#goodsDetail a.tc.fl").live("click", function(){
			var infoIndex = $("#goodsDetail a.tc.fl").index(this); //目标链接下标为1-3
			if(infoIndex > 0){
				dsp.s(biddingx_u, productTag + "_" + (infoIndex + 3));
				dsp.s(zhiziyun_u, (zzfProductTag + infoIndex + 3) );
				_paq.push(["trackEvent", "flyco-web", productFullname,detailTabInfo[infoIndex],1]);
				_paq.push(["trackPageView"]);
			}
		});
		$("#goodsSubMenu a.tc.fl").live("click", function(){
			var infoIndex = $("#goodsSubMenu a.tc.fl").index(this); //目标链接下标为1-3
			if(infoIndex > 0){
				dsp.s(biddingx_u, productTag + "_" + (infoIndex + 3));
				dsp.s(zhiziyun_u, (zzfProductTag + infoIndex + 3) );
				_paq.push(["trackEvent", "flyco-web", productFullname,detailTabInfo[infoIndex],1]);
				_paq.push(["trackPageView"]);
			}
		});
	}
});
