var Browser = new Object();
Browser.isMozilla = (typeof document.implementation != 'undefined') && (typeof document.implementation.createDocument != 'undefined') && (typeof HTMLDocument != 'undefined');
Browser.isIE = window.ActiveXObject ? true : false;
Browser.isFirefox = (navigator.userAgent.toLowerCase().indexOf("firefox") != - 1);
Browser.isSafari = (navigator.userAgent.toLowerCase().indexOf("safari") != - 1);
Browser.isOpera = (navigator.userAgent.toLowerCase().indexOf("opera") != - 1);
var Utils = new Object();
Utils.htmlEncode = function(text)
{
  return text.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}
Utils.trim = function( text )
{
  if (typeof(text) == "string")
  {
    return text.replace(/^\s*|\s*$/g, "");
  }
  else
  {
    return text;
  }
}
Utils.isEmpty = function( val )
{
  switch (typeof(val))
  {
    case 'string':
      return Utils.trim(val).length == 0 ? true : false;
      break;
    case 'number':
      return val == 0;
      break;
    case 'object':
      return val == null;
      break;
    case 'array':
      return val.length == 0;
      break;
    default:
      return true;
  }
}
Utils.isNumber = function(val)
{
  var reg = /^[\d|\.|,|-]+$/;
  return reg.test(val);
}
Utils.isInt = function(val)
{
  if (val == "")
  {
    return false;
  }
  var reg = /\D+/;
  return !reg.test(val);
}
Utils.isEmail = function( email )
{
  var reg1 = /([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)/;

  return reg1.test( email );
}
Utils.isTel = function ( tel )
{
  var reg = /^[\d|\-|\s|\_]+$/; //只允许使用数字-空格等
  return reg.test( tel );
}
Utils.fixEvent = function(e)
{
  var evt = (typeof e == "undefined") ? window.event : e;
  return evt;
}
Utils.srcElement = function(e)
{
  if (typeof e == "undefined") e = window.event;
  var src = document.all ? e.srcElement : e.target;

  return src;
}
Utils.isTime = function(val)
{
  var reg = /^\d{4}-\d{2}-\d{2}\s\d{2}:\d{2}$/;

  return reg.test(val);
}
Utils.x = function(e)
{ //当前鼠标X坐标
    return Browser.isIE?event.x + document.documentElement.scrollLeft - 2:e.pageX;
}
Utils.y = function(e)
{ //当前鼠标Y坐标
    return Browser.isIE?event.y + document.documentElement.scrollTop - 2:e.pageY;
}
Utils.request = function(url, item)
{
	var sValue=url.match(new RegExp("[\?\&]"+item+"=([^\&]*)(\&?)","i"));
	return sValue?sValue[1]:sValue;
}
Utils.$ = function(name)
{
    return document.getElementById(name);
}
function rowindex(tr)
{
  if (Browser.isIE)
  {
    return tr.rowIndex;
  }
  else
  {
    table = tr.parentNode.parentNode;
    for (i = 0; i < table.rows.length; i ++ )
    {
      if (table.rows[i] == tr)
      {
        return i;
      }
    }
  }
}
document.getCookie = function(sName)
{
  var aCookie = document.cookie.split("; ");
  for (var i=0; i < aCookie.length; i++){
    var aCrumb = aCookie[i].split("=");
    if (sName == aCrumb[0])
      return decodeURIComponent(aCrumb[1]);
  }
  return null;
}
document.setCookie = function(sName, sValue, sExpires)
{
  var sCookie = sName + "=" + encodeURIComponent(sValue);
  if (sExpires != null)
  {
    sCookie += "; expires=" + sExpires;
  }
  document.cookie = sCookie;
}
document.removeCookie = function(sName,sValue)
{
  document.cookie = sName + "=; expires=Fri, 31 Dec 1999 23:59:59 GMT;";
}
function getPosition(o)
{
    var t = o.offsetTop;
    var l = o.offsetLeft;
    while(o = o.offsetParent)
    {
        t += o.offsetTop;
        l += o.offsetLeft;
    }
    var pos = {top:t,left:l};
    return pos;
}
function cleanWhitespace(element)
{
  var element = element;
  for (var i = 0; i < element.childNodes.length; i++) {
   var node = element.childNodes[i];
   if (node.nodeType == 3 && !/\S/.test(node.nodeValue))
     element.removeChild(node);
   }
}
function ___getPageSize() {   
         var xScroll, yScroll;   
            if (window.innerHeight && window.scrollMaxY) {     
                xScroll = window.innerWidth + window.scrollMaxX;   
                yScroll = window.innerHeight + window.scrollMaxY;   
            } else if (document.body.scrollHeight > document.body.offsetHeight){ // all
                xScroll = document.body.scrollWidth;   
                yScroll = document.body.scrollHeight;   
            } else { // Explorer Mac...would also work in Explorer 6 Strict,
                xScroll = document.body.offsetWidth;   
                yScroll = document.body.offsetHeight;   
            }   
            var windowWidth, windowHeight;   
            if (self.innerHeight) { // all except Explorer
                if(document.documentElement.clientWidth){   
                    windowWidth = document.documentElement.clientWidth;    
                } else {   
                   windowWidth = self.innerWidth;   
                }   
                windowHeight = self.innerHeight;   
            } else if (document.documentElement && document.documentElement.clientHeight) { // Explorer
                windowWidth = document.documentElement.clientWidth;   
                windowHeight = document.documentElement.clientHeight;   
            } else if (document.body) { // other Explorers
                windowWidth = document.body.clientWidth;   
                windowHeight = document.body.clientHeight;   
            }      
            if(yScroll < windowHeight){   
                pageHeight = windowHeight;   
            } else {    
                pageHeight = yScroll;   
            }   
            if(xScroll < windowWidth){      
                pageWidth = xScroll;           
            } else {   
                pageWidth = windowWidth;   
            }   
            arrayPageSize = new Array(pageWidth,pageHeight,windowWidth,windowHeight);   
            return arrayPageSize;   
        };  
function countrol_open_hui(show_code)
{
	var size_arr = ___getPageSize();
	var  width = size_arr[0];
	var height=size_arr[1]; 
	jQuery("#open_div_hui").width(width);
	jQuery("#open_div_hui").height(height);
	if(show_code=="1"){
		jQuery("#open_div_hui").show();
	}else{
		jQuery("#open_div_hui").hide();
	}
}