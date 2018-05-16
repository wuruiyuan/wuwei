<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<!DOCTYPE html> 
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta name="renderer" content="webkit">
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
<meta property="qc:admins" content="20522706776641376375" />
<meta property="wb:webmaster" content="86bfd360b662d8fd" />

<meta name="keywords" content="飞科" />
<meta name="description" content="" />
<!--<meta http-equiv="X-UA-Compatible" content="IE=Edge，chrome=1">-->
<title>飞科商城--首页</title>
<link href="/home/css/basic.css" type="text/css" rel="stylesheet" />
<link href="/home/css/common.css" type="text/css" rel="stylesheet" />
<link href="/home/css/theme.css" type="text/css" rel="stylesheet" />
<script src="/home//home/js/jquery.js" type="text/javascript"></script>
<script src="/home//home/js/common.js" type="text/javascript"></script>
<script src="/home//home/js/jquery.validate.js"></script>
<script src="/home//home/js/public.js" type="text/javascript"></script>
<script src="/home//home/js/baison.js"></script>
<script src="/home//home/js/checkbrowser.js" type="text/javascript"></script>
<!--[if lt IE 7]> 
<script src="/home//home/js/dd_belatedpng_0.0.8a-min.js" type="text/javascript"></script>
<script src="/home//home/js/ie6.js" type="text/javascript"></script>
<![endif]-->
<script>
var _hmt = _hmt || [];
(function() {
  var hm = document.createElement("script");
  hm.src = "//hm.baidu.com/hm.js?d4af6938dc7b1168145016da0f269a93";
  var s = document.getElementsByTagName("script")[0]; 
  s.parentNode.insertBefore(hm, s);
})();
</script>
<script type='text/javascript'>
 var _fxcmd=_fxcmd||[];
 _fxcmd.sid='237f4a4652c2260683f6bb9cec569f5c';
 _fxcmd.trackAll=false;
 (function () {
   var _pzfx=document['createElement']('script');
   _pzfx.type='text/javascript';
   _pzfx.async=true;
   _pzfx.src='//static.w3t.cn/fx/1/1/fx.js';
  var sc=document.getElementsByTagName('script')[0];
  sc.parentNode.insertBefore(_pzfx,sc);
  })();
</script>
<script type="text/javascript" src="/home//home/js/199916.js" async defer></script>
</head>
<body>
<!--头部开始-->
<div class="header">
	<div class="header_top">
		<div class="w1240 bc clearfix fm">
			<ul class="fl">
				<li class="fl mr10 top_collect pl20"><a href="javascript:void(0)" onclick="addFavorite(window.location,document.title);">收藏</a></li>
				<li class="fl mr15 weixin pl20 pr pointer">微信 <img
					src="/home/picture/weixin.jpg" class="pa none png_bg" alt="图片" width="111"
					height="116" />
				</li>
			</ul>
			<ul class="topbar_info fr" id="login_info">                                  <!-- <li class="fl"><a href="http://223.6.253.39">老商城</a><span class="pl10 pr10">|</span></li> -->
            <li class="fl"><a target="_blank" href="/home/login">登录</a>
            <span class="pl10 pr10">|</span></li>   
            <li class="fl"><a target="_blank" href="/home/zhuce">注册</a></li>
                    <!-- <li class="fl cart pr" > 
                <a target="_blank" href="">购物车</a>
                <span class="pa tc"></span>
        </li>   -->
            <input id="returnurl" value="https://www.flyco.com/" type="hidden">
            </ul>
			
          
          <marquee class="fl" style="margin-left: 70px;color: #0c82d9;width: 685px;height: 36px; font-size: 11px; overflow: hidden;" behavior="scroll"  onstart="this.firstChild.innerHTML+=this.firstChild.innerHTML;" scrollamount="4" onmouseover="this.stop();" onmouseout="this.start();" readOnly="true"> 
</marquee>
			<ul class="topbar_info fr" id="login_info">
				<script type="text/javascript">$.get("/index/get_user_info&"+ Math.random(),"",function(data){$('#login_info').html(data)},"html");</script>
			</ul>
		</div>
	</div>
</div>


	<div class="header_center w1240 bc clearfix">
		<div class="logo fl">
			<a href="/" class="in_b"><img
				src="/home/picture/logo.gif" class="png_bg" width="132" height="45" /></a>
		</div>
        <div class="logo-head" style="positon:relative;margin-top:50px;margin-left:24px;float:left;background:#0c82d9;height:23px;width:72px;border-radius:5px;-moz-border-radius: 5px;-webkit-border-radius: 5px;">
			<a href="/" class="in_b" width='72'>
				<img src="/home/picture/home.png" class="png_bg" width="17" height="17" style='display:inline;margin:3px 8px 3px 6px;float:left;' />
				<span class='' style="font-size:15px;color:#fff;height:23px;line-height:23px;float:right;margin-right:8px;font-family: 'Microsoft Yahei',sans-serif;display:inline">首页</span>
			</a>
			
		</div>        
		<div class="cart_section fr pr" id="top_cart_info">
			
            <a class="mini_cart" target="_blank" href="/carts/">
                 <i class="icon"></i>购物车<span class="mini-cart-num">(<em id="cart_value">0</em>)</span>
            </a>
            <div class="mini-cart-list none" style="display: none;">
                                 <div class="clearfix mt20">
                     <div class="fl fm">
                        <h1>共计0件商品</h1>
                        <p>合计：<span>0元</span></p>
                     </div>
                     <input class="fr btn pointer" onclick="location.href='/carts/;'" value="去购物车结算" type="button">
                 </div>
             </div>
		</div>
		<div class="search_box mt15 fr mr10">
			<form class="clearfix pr">
								<input class="txt fl fm pl10 searchConsule f14" id='search_box' type="text"
					promptvalue="剃须刀"
					value="剃须刀" />
				<input id="search" class="btn fl pointer" type="button"
					onclick="return search_goods('/list_goods/search','');" />
				 				 <div class="pa hot_words">
				 				    
					<a href="javascript:void(0)" class="in_b" onclick="return search_goods('/list_goods/search','剃须刀');">剃须刀</a> 
								    
					<a href="javascript:void(0)" class="in_b" onclick="return search_goods('/list_goods/search','电吹风');">电吹风</a> 
								</div>
							</form>
		</div>
	</div>
</div><!--wrapper start-->
@section('content')


@show
<!--wrapper end-->
<div class="footer wB100">
	<div class="w1240 bc">
		<div class="inner_footer clearfix">
	<div class="fl">
		<img class="fl png_bg" src="/home/picture/ensure.png" />
		<dl class="fl tc ml20">
			<dd class="fm f18">
				领导品牌 品质保证</dd>
		</dl>
	</div>
	<div class="fl">
		<img class="fl png_bg" src="/home/picture/return.png" />
		<dl class="fl tc ml20">
			<dd class="fm f18">
				7天退货 15天换货</dd>
		</dl>
	</div>
	<div class="fl">
		<img class="fl png_bg" src="/home/picture/free.png" />
		<dl class="fl tc ml20">
			<dd class="fm f18">
				全场免运费（部分配件除外）</dd>
		</dl>
	</div>
	<div class="fl">
		<img class="fl png_bg" src="/home/picture/unprofor.png" />
		<dl class="fl tc ml20">
			<dd class="fm f18">
				全国网点 联保服务</dd>
		</dl>
	</div>
</div>
	
		<div class="guide_list clearfix pr">
			<div class="fl guide_info fm f14">
								 				 				<dl class="fl" style="margin-left:50px;">
					<dt class="fm f16 fb mb12">购物服务</dt>
										<dd class="mt5 mb8"> <a target="_blank" href="/help-36.html">购物指南</a></dd>
										<dd class="mt5 mb8"> <a target="_blank" href="/help-15.html">配送方式</a></dd>
										<dd class="mt5 mb8"> <a target="_blank" href="/help-14.html">支付方式</a></dd>
									</dl>
								 				<dl class="fl" style="margin-left:50px;">
					<dt class="fm f16 fb mb12">服务支持</dt>
										<dd class="mt5 mb8"> <a target="_blank" href="/help-96.html">积分规则</a></dd>
										<dd class="mt5 mb8"> <a target="_blank" href="/help-29.html">保修政策</a></dd>
										<dd class="mt5 mb8"> <a target="_blank" href="/help-28.html"><a href='/service/do_index' target='_blank'>服务网点</a></a></dd>
									</dl>
								 				<dl class="fl" style="margin-left:50px;">
					<dt class="fm f16 fb mb12">关注我们</dt>
										<dd class="mt5 mb8"> <a target="_blank" href="/help-35.html"><a href="http://weibo.com/5588774018/profile?topnav=1&wvr=6" target="_blank">新浪微博</a></a></dd>
										<dd class="mt5 mb8"> <a target="_blank" href="/help-34.html">关注微信</a></dd>
										<dd class="mt5 mb8"> <a target="_blank" href="/help-23.html">APP下载</a></dd>
									</dl>
								 				<dl class="fl" style="margin-left:50px;">
					<dt class="fm f16 fb mb12">关于飞科</dt>
										<dd class="mt5 mb8"> <a target="_blank" href="/help-38.html">飞科介绍</a></dd>
										<dd class="mt5 mb8"> <a target="_blank" href="/help-21.html">飞科新闻</a></dd>
										<dd class="mt5 mb8"> <a target="_blank" href="/help-19.html"><a target="_blank" href="/about_us.html">联系我们</a></a></dd>
									</dl>
								
			</div>
			<div class=" fl pa" style="padding :30px 0 41px;">
				<img class="png_bg" style="padding-left:30px;" src="/home/picture/qr_code.jpg" />
				<p style='font-family: "Microsoft Yahei",sans-serif;color: #9fa0a0;font-size:14px;margin-top:5px;'>关注飞科电器官方微信</p>
			</div>
			<div class="service pa"  style="top:75px;">
				<img class="png_bg" src="/home/picture/service1.png" />
			</div>
		</div>
		<!-- 版权信息 -->
		<div class="copyRight clearfix">
	<div>
		<div class="fl">
			<img src="/home/picture/minilogo.jpg" style="width:145px;height:17px;margin-top:36px;margin-right:30px;" /></div>
		<div class="fl" style="color:#939191;width:570px;">
			<p class="mt25 fl">
				Copyright &copy; 2013-2016上海飞科电器股份有限公司 | 版权所有 | <a href="javascript:void;" onclick="window.open(&quot;http://www.miitbeian.gov.cn/publish/query/indexFirst.action&quot;)" style="color: #939191;">网站备案/许可证号：沪ICP备13041208号</a></p>
			<p>
				<a href="https://pic.flyco.net.cn/sources/service/ICP.jpg" style="color:#939191;vertical-align:middle;" target="blank">增值电信营业经营许可认证:沪B2-20160083 | </a><a href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=31010502001341" target="_blank"><img src="/home/picture/fkab.png" style="display:inherit;vertical-align:middle;" /><span style="color:#939191;vertical-align:middle;">沪公网安备 31010502001341号</span></a></p>
		</div>
	</div>
	<div class="rightImg fr mt25">
		<a href="javascript:void;" onclick="window.location=&quot;https://ss.knet.cn/verifyseal.dll?sn=e14072231010751501e2ri000000&quot;"><img class="in_b" src="/home/picture/rightimg1.jpg" /></a><span>|</span><a href="javascript:void;" onclick="window.open(&quot;http://www.sgs.gov.cn/lz/licenseLink.do?method=licenceView&amp;entyId=20140630170754988&quot;)"><img class="in_b" src="/home/picture/rightimg2.jpg" /></a><span>|</span><a href="javascript:void;" onclick="window.location=&quot;http://www.cyberpolice.cn/wfjb/&quot;"><img class="in_b" src="/home/picture/rightimg3.jpg" /></a><span>|</span><img class="in_b" src="/home/picture/rightimg4.jpg" style="margin-right: 0px;" /></div>
</div>
		<!-- 版权信息END -->
	</div>
</div>
<!-- <script type='text/javascript' src='js/kf.js'></script> --><!--<script src="/home//home/js/t_flycopc_ta.js" type="text/javascript"></script>-->
</body>
</html>
