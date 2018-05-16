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
<script src="/home/js/jquery.js" type="text/javascript"></script>
<script src="/home/js/common.js" type="text/javascript"></script>
<script src="/home/js/jquery.validate.js"></script>
<script src="/home/js/public.js" type="text/javascript"></script>
<script src="/home/js/baison.js"></script>
<script src="/home/js/checkbrowser.js" type="text/javascript"></script>
<!--[if lt IE 7]> 
<script src="/home/js/dd_belatedpng_0.0.8a-min.js" type="text/javascript"></script>
<script src="/home/js/ie6.js" type="text/javascript"></script>
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
<script type="text/javascript" src="/home/js/199916.js" async defer></script>
</head>
<body>
<!--头部开始-->
<div class="header">
    <div class="header_top">
        <div class="w1240 bc clearfix fm">
            <ul class="fl">
                <li class="fl mr10 top_collect pl20"><a href="/home/javascript:void(0)" onclick="addFavorite(window.location,document.title);">收藏</a></li>
                <li class="fl mr15 weixin pl20 pr pointer">微信 <img
                    src="/home/picture/weixin.jpg" class="pa none png_bg" alt="图片" width="111"
                    height="116" />
                </li>
            </ul>
            <ul class="topbar_info fr" id="login_info">                                  <!-- <li class="fl"><a href="/home/http://223.6.253.39">老商城</a><span class="pl10 pr10">|</span></li> -->
            <li class="fl"><a target="_blank" href="/home/login">登录</a>
            <span class="pl10 pr10">|</span></li>   
            <li class="fl"><a target="_blank" href="/home//user/index/register?return=">注册</a></li>
                    <!-- <li class="fl cart pr" > 
                <a target="_blank" href="/home/">购物车</a>
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
            <a href="/home//" class="in_b"><img
                src="/home/picture/logo.gif" class="png_bg" width="132" height="45" /></a>
        </div>
        <div class="logo-head" style="positon:relative;margin-top:50px;margin-left:24px;float:left;background:#0c82d9;height:23px;width:72px;border-radius:5px;-moz-border-radius: 5px;-webkit-border-radius: 5px;">
            <a href="/home//" class="in_b" width='72'>
                <img src="/home/picture/home.png" class="png_bg" width="17" height="17" style='display:inline;margin:3px 8px 3px 6px;float:left;' />
                <span class='' style="font-size:15px;color:#fff;height:23px;line-height:23px;float:right;margin-right:8px;font-family: 'Microsoft Yahei',sans-serif;display:inline">首页</span>
            </a>
            
        </div>        
        <div class="cart_section fr pr" id="top_cart_info">
            
            <a class="mini_cart" target="_blank" href="/home//carts/">
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
                                    
                    <a href="/home/javascript:void(0)" class="in_b" onclick="return search_goods('/list_goods/search','剃须刀');">剃须刀</a> 
                                    
                    <a href="/home/javascript:void(0)" class="in_b" onclick="return search_goods('/list_goods/search','电吹风');">电吹风</a> 
                                </div>
                            </form>
        </div>
    </div>
</div><!--wrapper start-->
<!--<div class="w1240 bc wrapper">-->
    <!--回到顶部 开始-->
    <script type="text/javascript">
        var uid = "";
        var pid = "";
    </script>
        <script type="text/javascript" id="53kfscript" charset="UTF-8" src="/home/js/kf.min.js"></script>   <!--回到顶部 结束-->
    <style type='text/css'>
.home_show .home_show_list{float:left;position: relative;}    
a.dask {overflow: hidden;position: absolute;+height:0px;height:0px;width: 412px;top:100px;opacity:0;filter:alpha(opacity=0);}

.theme-type{
    font-size:25px;
    font-weight:bold;
    height:77px;
    line-height:77px;
    padding:0;
    margin-top:0px;
}
.hot-bg,.dis-bg{
    background-color: #F6F6F6;
}
.new-bg{
    background-color: #fff;
}
.hot-goods,.new-goods,.dis-goods {
    width: 1240px;
    *zoom: 1;
    margin-right: auto;
    margin-left: auto;
}
.row{
    font-family: "Microsoft Yahei",sans-serif
}
.items-2,.items-3{
    float: left;
    margin-left: 16px;
    margin-bottom:16px;
    min-height: 1px;
}
.items-4{
    float: left;
    margin-left:-16px;
}

.items-4 .msg .dis{
    position: absolute;
    right:23px;
    top:10px;
    font-size:14px;
    height:21px;
    width:72px;
    background: #ff7c44;
    text-align: center;
    color:#fff;
}

.items-4 .msg .desc{
    position: absolute;
    top:15px;
    margin-left:25px;
    font-size: 15px;
    font-family: "Microsoft Yahei",sans-serif
}

.items-4 .msg .price{
    position: absolute;
    top:35px;
    margin-left:25px;
    font-size: 13px;
    height:14px;
    line-height: 14px;
    
}


.goods-item{
    position: relative;
    z-index: 1;
    float: left;
    width: 298px;
    margin-left: 16px;
    margin-bottom: 16px;
    background: #fff;
    -webkit-transition: all .2s linear;
    transition: all .2s linear
}
.items-2 .goods-item{
    margin-bottom: 0px;
}

.goods-item-m{
    height:332px;
}
.goods-item-m .comment-wrapper{
  background: #0C82D9 none repeat scroll 0 0;
  bottom: 0;
  font-size: 12px;
  height: 0px;
  left: 0;
  opacity: 0;
  overflow: hidden;
  position: absolute;
  transition: all 0.2s linear 0s;
  width: 100%;
  z-index: 3; 
  text-align:center;
}
.goods-item-m .comment-wrapper a{
    display: block;
    outline: 0 none;
    padding: 6px 30px;
    font-size:12px;
    
}
.goods-item-m .comment-wrapper .review{
    display: block;
    color: #fff;
    margin-bottom: 5px;
    list-style-type: none;
}
.goods-item-m .comment-wrapper .comment{
    display: block;
    color: rgba(255, 255, 255, 0.6)
}
.row-3{
    width:100%;
    height:1066px;
}
.row-2{
    width:100%;
    height:720px;
}
.prom-1-2{
    width:628px;
        height:332px;
        float:left;
    min-height:1px;
        margin-left:-16px;
        
}
.prom-2-1{
        width:298px;
        height:680px;
        float:left;
    min-height:1px;
        margin-left:-16px;
}
.goods-promo-list-2{
        
}
.goods-promo-list-l{
    height:680px;
}
.goods-promo-list-l .bg-grey{
    border-color:#f6f6f6;
}

.goods-list-2{
    width:628px;
    margin-left:-16px;
}
.goods-list-2 .goods-item .title,.goods-list-3 .goods-item .title{
    padding:10px;
    margin-left:15px;
    font-size: 14px;
    height:14px;
    line-height: 14px;
    font-weight:bold
}

.goods-list-2 .goods-item .month-num,.goods-list-3 .goods-item .month-num{
    margin-left:25px;
    font-size: 12px;
    color:#b0b0b0;
    position:absolute
}

.goods-list-2 .goods-item .price,.goods-list-3 .goods-item .price{
    left:25px;
    top:60px;
    font-size: 12px;
    position:absolute
}

.goods-list-2 .goods-item .price .num,.goods-list-3 .goods-item .price .num{
    font-size: 15px
}

.goods-list-2 .goods-item .figure,.goods-list-3 .goods-item .figure{
    height:250px;
    weight:250px;
    margin:10px 24px 20px;
}
.items-4 .figure{
    height:250px;
    weight:250px;
    margin:45px 24px 15px;
}
.goods-list-2 .goods-item .month-num .num,.goods-list-3 .goods-item .month-num .num{
    font-size: 15px;
    color:#ff6700;
}
.goods-list-3 .bg-grey .figure{
    margin-bottom: 0px;
}

.goods-list-3 .down-msg .title{
    margin:0 auto;
    text-align: center;
    font-size: 15px;
    height:15px;
    line-height: 15px;
}
.goods-list-3 .down-msg .desc{
    margin: 2px 10px 0px;
    height: 18px;
    font-size: 12px;
    text-align: center;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    _zoom: 1;
    color: #b0b0b0
}
.goods-list-3{
    width:942px;
}
.goods-item-l-2{
    width:600px;
    height:320px;
    float:left;
    border:6px solid #fff;
    background-color:#e8e8e9
}
.goods-item-l-2 .msg{
    width:300px;
    height:200px;
    display:inline-block;
    margin-left:25px;
    float:left;
    position:absolute;
    
}

.goods-item-l-2 .msg .title{
    font-size: 25px;
    text-align: center;
    padding-top:30px;
}
.goods-item-l-2 .msg .desc{
    margin: 8px 10px 10px;
    height: 18px;
    font-size: 12px;
    text-align: center;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    _zoom: 1;
    color: #b0b0b0
}
.goods-item-l-2 .msg .price{
        margin: 0 10px 10px;
    text-align: center;
    color: #ff6700;
        font-size:16px;
}
.goods-item-l-2 .msg .price .num{
        font-weight: bold;
        font-size: 24px
}
.goods-item-l-2 .msg .price .old-num,.goods-item-2-1 .msg .price .old-num,.items-4 .msg .price .old-num{
        text-decoration: line-through;
        color:#ccc;
        font-size:12px
}
.goods-item-l-2 .figure{
    float:right;
    margin-right: 25px;
    vertical-align: middle
}
.goods-item-2-1{
    width:286px;
    height:668px;
    border:6px solid #fff;
    background-color:#e8e8e9
}
.goods-item-2-1 .msg .title{
    font-size: 25px;
    text-align: center;
    padding-top:30px;
}
.goods-item-2-1 .msg .desc{
    margin: 8px 10px 10px;
    height: 18px;
    font-size: 12px;
    text-align: center;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    _zoom: 1;
    color: #b0b0b0
}
.goods-item-2-1 .msg .price{
        margin: 0 10px 10px;
    text-align: center;
    color: #ff6700;
        font-size:16px;
}
.goods-item-2-1 .msg .price .num{
        font-weight: bold;
        font-size: 24px
}
.goods-item-2-1 .figure{
        width:250px;
        margin:10px 21px;
}
.bg-grey{
    background-color: #F6F6F6;
}
.items-4 .first-col .msg .title{
    font-size: 20px;
    text-align: center;
    padding:16px 0 0 0;
    margin:0 0 0 0;
}
.items-4 .first-col .msg .desc{
    display: block;
    margin:5px 0 0 0;
    height: 24px;
    padding:4px 0 0 2px;
    vertical-align: middle;
    font-size: 12px;
    text-align: center;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    _zoom: 1;
    color: #b0b0b0;
    width:100%;
    top:30px
}
.items-4 .first-col .figure{
    margin:5px 24px;
    height:250px;
}

.items-4 .first-col .msg .price{
        margin: 10px 0  0 0;
    text-align: center;
    color: #ff6700;
        font-size:16px;
        padding-bottom: 2px;
        width:100%;
        display:block;
        top:50px;
}
.items-4 .first-col .msg .price .num{
        font-weight: bold;
        font-size: 24px
}

.goods-item-active{
    
    box-shadow: 0 15px 30px rgba(0,0,0,0.1);
    
    transform: translate3d(0, -5px, 0)
}

</style>

<script type="text/javascript">
$(function () {
    $(".goods-item").hover(
        function () {
            $(this).addClass('goods-item-active');
            $(this).find(".comment-wrapper").stop().delay(10).animate({"height": 55,opacity:1},100)
         },
        function () {
            $(this).removeClass('goods-item-active');
            $(this).find(".comment-wrapper").stop().animate({"height": 0,opacity:0},100)
        }   
    );
});
</script>



<div class="w1240 bc clearfix" style="height:460px;">
        <!-- 树桩列表 -->
        <div class="fm f18 left-nav">
            
                    <div class="category_list pa none" id="category_list">
    <div class="category_main">
        <div class="category_info">
            <div class="ml25 perfume_list fb">
                <a href="/home//list_goods/&amp;cat_id=1" target="_blank">电动剃须刀<em>&gt;</em></a></div>
        </div>
        <div class="categoryDetail children-col-2 clearfix">
            <ul class="children-list children-list-col">
                <li class="children-list-item">
                    <a class="link" href="/home//goods-FS351_c-000.html" target="_blank"> <img class="thumb" src="/home/picture/fs351.jpg" /> <span class="text">剃须刀FS351</span> </a> <a class="btn btn-buy" href="/home//goods-FS351_c-000.html" target="_blank">选购</a></li>               
                <li class="children-list-item">
                    <a class="link" href="/home//goods-FS375_c-000.html" target="_blank"> <img class="thumb" src="/home/picture/fs375.jpg" /> <span class="text">剃须刀FS375</span> </a> <a class="btn btn-buy" href="/home//goods-FS375_c-000.html" target="_blank">选购</a></li>
                <li class="children-list-item">
                    <a class="link" href="/home//goods-FS376_c-000.html" target="_blank"> <img class="thumb" src="/home/picture/fs376.jpg" /> <span class="text">剃须刀FS376</span> </a> <a class="btn btn-buy" href="/home//goods-FS376_c-000.html" target="_blank">选购</a></li>
                <li class="children-list-item">
                    <a class="link" href="/home//goods-FS339_c-000.html" target="_blank"> <img class="thumb" src="/home/picture/fs339.jpg" /> <span class="text">剃须刀FS339</span> </a> <a class="btn btn-buy" href="/home//goods-FS339_c-000.html" target="_blank">选购</a></li>
                <li class="children-list-item">
                    <a class="link" href="/home//goods-FS338_c-000.html" target="_blank"> <img class="thumb" src="/home/picture/fs338.jpg" /> <span class="text">剃须刀FS338</span> </a> <a class="btn btn-buy" href="/home//goods-FS338_c-000.html" target="_blank">选购</a></li>
                <li class="children-list-item">
                    <a class="link" href="/home//goods-FS871_c-000.html" target="_blank"> <img class="thumb" src="/home/picture/fs871.jpg" /> <span class="text">剃须刀FS871</span> </a> <a class="btn btn-buy" href="/home//goods-FS871_c-000.html" target="_blank">选购</a></li>
            </ul>
            <ul class="children-list children-list-col">
                <li class="children-list-item">
                    <a class="link" href="/home//goods-FS867_c-000.html" target="_blank"> <img class="thumb" src="/home/picture/fs867.jpg" /> <span class="text">剃须刀FS867</span> </a> <a class="btn btn-buy" href="/home//goods-FS867_c-000.html" target="_blank">选购</a></li>
                <li class="children-list-item">
                    <a class="link" href="/home//goods-FS373_c-000.html" target="_blank"> <img class="thumb" src="/home/picture/fs373.jpg" /> <span class="text">剃须刀FS373</span> </a> <a class="btn btn-buy" href="/home//goods-FS373_c-000.html" target="_blank">选购</a></li>
                <li class="children-list-item">
                    <a class="link" href="/home//goods-FS372_c-000.html" target="_blank"> <img class="thumb" src="/home/picture/fs372.jpg" /> <span class="text">剃须刀FS372</span> </a> <a class="btn btn-buy" href="/home//goods-FS372_c-000.html" target="_blank">选购</a></li>
                <li class="children-list-item">
                    <a class="link" href="/home//goods-FS360_c-000.html" target="_blank"> <img class="thumb" src="/home/picture/fs360.jpg" /> <span class="text">剃须刀FS360</span> </a> <a class="btn btn-buy" href="/home//goods-FS360_c-000.html" target="_blank">选购</a></li>
            </ul>
        </div>
    </div>
    <div class="category_main">
        <div class="category_info">
            <div class="ml25 perfume_list fb">
                <a href="/home//list_goods/&amp;cat_id=4" target="_blank">电吹风 <em>&gt;</em></a></div>
        </div>
        <div class="categoryDetail children-col-2 clearfix">
            <ul class="children-list children-list-col">
                <li class="children-list-item">
                    <a class="link" href="/home//goods-FH6105_c-000.html" target="_blank"> <img class="thumb" src="/home/picture/fh6105.jpg" /> <span class="text">吹风机FH6105</span> </a> <a class="btn btn-buy" href="/home//goods-FH6105_c-000.html" target="_blank">选购</a></li>
                <li class="children-list-item">
                    <a class="link" href="/home//goods-FH6273_c-000.html" target="_blank"> <img class="thumb" src="/home/picture/fh6273.jpg" /> <span class="text">吹风机FH6273</span> </a> <a class="btn btn-buy" href="/home//goods-FH6273_c-000.html" target="_blank">选购</a></li>
                <li class="children-list-item">
                    <a class="link" href="/home//goods-FH6232_c-000.html" target="_blank"> <img class="thumb" src="/home/picture/fh6232.png" /> <span class="text">吹风机FH6232</span> </a> <a class="btn btn-buy" href="/home//goods-FH6232_c-000.html" target="_blank">选购</a></li>
                <li class="children-list-item">
                    <a class="link" href="/home//goods-FH6618_c-000.html" target="_blank"> <img class="thumb" src="/home/picture/fh6618.jpg" /> <span class="text">吹风机FH6618</span> </a> <a class="btn btn-buy" href="/home//goods-FH6618_c-000.html" target="_blank">选购</a></li>
                <li class="children-list-item">
                    <a class="link" href="/home//goods-FH6266_c-000.html" target="_blank"> <img class="thumb" src="/home/picture/fh6266.jpg" /> <span class="text">吹风机FH6266</span> </a> <a class="btn btn-buy" href="/home//goods-FH6266_c-000.html" target="_blank">选购</a></li>
            </ul>
            <ul class="children-list children-list-col">
                <li class="children-list-item">
                    <a class="link" href="/home//goods-FH6257_c-000.html" target="_blank"> <img class="thumb" src="/home/picture/fh6257.jpg" /> <span class="text">吹风机FH6257</span> </a> <a class="btn btn-buy" href="/home//goods-FH6257_c-000.html" target="_blank">选购</a></li>
                <li class="children-list-item">
                    <a class="link" href="/home//goods-FH6651_c-000.html" target="_blank"> <img class="thumb" src="/home/picture/fh6651.jpg" /> <span class="text">吹风机FH6651</span> </a> <a class="btn btn-buy" href="/home//goods-FH6651_c-000.html" target="_blank">选购</a></li>
            </ul>
        </div>
    </div>
    <div class="category_main">
        <div class="category_info">
            <div class="ml25 perfume_list fb">
                <a href="/home//list_goods/&amp;cat_id=5" target="_blank">理发器 <em>&gt;</em></a></div>
        </div>
        <div class="categoryDetail children-col-1 clearfix">
            <ul class="children-list children-list-col">
                <li class="children-list-item">
                    <a class="link" href="/home//goods-FC5811_c-000.html" target="_blank"> <img class="thumb" src="/home/picture/fc5811.jpg" /> <span class="text">理发器FC5811</span> </a> <a class="btn btn-buy" href="/home//goods-FC5811_c-000.html" target="_blank">选购</a></li>
                <li class="children-list-item">
                    <a class="link" href="/home//goods-FC5808_c-000.html" target="_blank"> <img class="thumb" src="/home/picture/fc5808.jpg" /> <span class="text">理发器FC5808</span> </a> <a class="btn btn-buy" href="/home//goods-FC5808_c-000.html" target="_blank">选购</a></li>
                <li class="children-list-item">
                    <a class="link" href="/home//goods-FC5806_c-000.html" target="_blank"> <img class="thumb" src="/home/picture/fc5806.jpg" /> <span class="text">理发器FC5806</span> </a> <a class="btn btn-buy" href="/home//goods-FC5806_c-000.html" target="_blank">选购</a></li>
                <li class="children-list-item">
                    <a class="link" href="/home//goods-FC5803_c-000.html" target="_blank"> <img class="thumb" src="/home/picture/fc5803.jpg" /> <span class="text">理发器FC5803</span> </a> <a class="btn btn-buy" href="/home//goods-FC5803_c-000.html" target="_blank">选购</a></li>
                <li class="children-list-item">
                    <a class="link" href="/home//goods-FC5902_c-000.html" target="_blank"> <img class="thumb" src="/home/picture/fc5902.jpg" /> <span class="text">理发器FC5902</span> </a> <a class="btn btn-buy" href="/home//goods-FC5902_c-000.html" target="_blank">选购</a></li>
            </ul>
        </div>
    </div>
    <div class="category_main">
        <div class="category_info">
            <div class="ml25 perfume_list fb">
                <a href="/home//list_goods/&amp;cat_id=13" target="_blank">烫发器 <em>&gt;</em></a></div>
        </div>
        <div class="categoryDetail children-col-1 clearfix">
            <ul class="children-list children-list-col">
                <li class="children-list-item">
                    <a class="link" href="/home//goods-FH6861_c-000.html" target="_blank"> <img class="thumb" src="/home/picture/fh6861.jpg" /> <span class="text">卷发器FH6861 </span> </a> <a class="btn btn-buy" href="/home//goods-FH6861_c-000.html" target="_blank">选购</a></li>
                <li class="children-list-item">
                    <a class="link" href="/home//goods-FH6811_c-000.html" target="_blank"> <img class="thumb" src="/home/picture/fh6811.jpg" /> <span class="text">直发器FH6811 </span> </a> <a class="btn btn-buy" href="/home//goods-FH6811_c-000.html" target="_blank">选购</a>
                    </li>
            </ul>
        </div>
    </div>
    <div class="category_main">
        <div class="category_info">
            <div class="ml25 perfume_list fb">
                <a href="/home//list_goods/search&amp;key_search=Rkk=" target="_blank">熨烫系列 <em>&gt;</em></a></div>
        </div>
        <div class="categoryDetail children-col-2 clearfix">
            <ul class="children-list children-list-col">
                <li class="children-list-item">
                    <a class="link" href="/home//goods-FI9310_c-000.html" target="_blank"> <img class="thumb" src="/home/picture/fi9310.jpg" /> <span class="text">电熨斗FI-9310</span> </a><a class="btn btn-buy" href="/home//goods-FI9310_c-000.html" target="_blank">选购</a></li>
                <li class="children-list-item">
                    <a class="link" href="/home//goods-FI9306_c-000.html" target="_blank"> <img class="thumb" src="/home/picture/fi9306.jpg" /> <span class="text">电熨斗FI9306</span> </a><a class="btn btn-buy" href="/home//goods-FI9306_c-000.html" target="_blank">选购</a></li>                
                <li class="children-list-item">
                    <a class="link" href="/home//goods-FI9308_c-000.html" target="_blank"> <img class="thumb" src="/home/picture/fi9308.jpg" /> <span class="text">电熨斗FI-9308</span> </a><a class="btn btn-buy" href="/home//goods-FI9308_c-000.html" target="_blank">选购</a></li>
                <li class="children-list-item">
                    <a class="link" href="/home//goods-FI9309_c-000.html" target="_blank"> <img class="thumb" src="/home/picture/fi9309.jpg" /> <span class="text">电熨斗FI-9309</span> </a><a class="btn btn-buy" href="/home//goods-FI9309_c-000.html" target="_blank">选购</a></li>
                <li class="children-list-item">
                    <a class="link" href="/home//goods-FI9311_c-000.html" target="_blank"> <img class="thumb" src="/home/picture/fi9311.jpg" /> <span class="text">电熨斗FI-9311</span> </a><a class="btn btn-buy" href="/home//goods-FI9311_c-000.html" target="_blank">选购</a></li>
            </ul>
            <ul class="children-list children-list-col">
                <li class="children-list-item">
                    <a class="link" href="/home//goods-FI9819_c-000.html" target="_blank"> <img class="thumb" src="/home/picture/fi9819.jpg" /> <span class="text">挂烫机FI-9819</span> </a><a class="btn btn-buy" href="/home//goods-FI9819_c-000.html" target="_blank">选购</a></li>
                <li class="children-list-item">
                    <a class="link" href="/home//goods-FI9810_c-000.html" target="_blank"> <img class="thumb" src="/home/picture/fi9810.jpg" /> <span class="text">挂烫机FI-9810</span> </a><a class="btn btn-buy" href="/home//goods-FI9810_c-000.html" target="_blank">选购</a></li>
            </ul>
        </div>
    </div>
    <div class="category_main">
        <div class="category_info">
            <div class="ml25 perfume_list fb">
                <a href="/home//list_goods/&amp;cat_id=99" target="_blank">扫地机器人<em>&gt;</em></a></div>
        </div>
        <div class="categoryDetail children-col-1 clearfix">
            <ul class="children-list children-list-col">
                <li class="children-list-item">
                    <a class="link" href="/home//goods-FC9601_c-000.html" target="_blank"> <img class="thumb" src="/home/picture/fc9601.jpg" /> <span class="text">扫地机器人FC9601</span> </a> <a class="btn btn-buy" href="/home//goods-FC9601_c-000.html" target="_blank">选购</a></li>
                <li class="children-list-item">
                    <a class="link" href="/home//goods-FC9602_c-000.html" target="_blank"> <img class="thumb" src="/home/picture/fc9602.jpg" /> <span class="text">扫地机器人FC9602</span> </a> <a class="btn btn-buy" href="/home//goods-FC9602_c-000.html" target="_blank">选购</a></li>
            </ul>
        </div>
    </div>
    <div class="category_main">
        <div class="category_info">
            <div class="ml25 perfume_list fb">
                <a href="/home//list_goods/&amp;cat_id=8" target="_blank">毛球修剪器 <em>&gt;</em></a></div>
        </div>
        <div class="categoryDetail children-col-1 clearfix">
            <ul class="children-list children-list-col">
                <li class="children-list-item">
                    <a class="link" href="/home//goods-FR5222_c-000.html" target="_blank"> <img class="thumb" src="/home/picture/fr5222.jpg" /> <span class="text">毛球修剪器FR5222</span> </a> <a class="btn btn-buy" href="/home//goods-FR5222_c-000.html" target="_blank">选购</a></li>
                <li class="children-list-item">
                    <a class="link" href="/home//goods-FR5218_c-000.html" target="_blank"> <img class="thumb" src="/home/picture/fr5218.jpg" /> <span class="text">毛球修剪器FR5218</span> </a> <a class="btn btn-buy" href="/home//goods-FR5218_c-000.html" target="_blank">选购</a></li>
                <li class="children-list-item">
                    <a class="link" href="/home//goods-FR5210_c-000.html" target="_blank"> <img class="thumb" src="/home/picture/fr5210.jpg" /> <span class="text">毛球修剪器FR5210</span> </a> <a class="btn btn-buy" href="/home//goods-FR5210_c-000.html" target="_blank">选购</a></li>
                <li class="children-list-item">
                    <a class="link" href="/home//goods-FR5006_c-000.html" target="_blank"> <img class="thumb" src="/home/picture/fr5006.jpg" /> <span class="text">毛球修剪器FR5006</span> </a> <a class="btn btn-buy" href="/home//goods-FR5006_c-000.html" target="_blank">选购</a></li>
                <li class="children-list-item">
                    <a class="link" href="/home//goods-FR5001_c-000.html" target="_blank"> <img class="thumb" src="/home/picture/fr5001.jpg" /> <span class="text">毛球修剪器FR5001</span> </a> <a class="btn btn-buy" href="/home//goods-FR5001_c-000.html" target="_blank">选购</a></li>
            </ul>
        </div>
    </div>
    <div class="category_main">
        <div class="category_info">
            <div class="ml25 perfume_list fb">
                <a href="/home//list_goods/&amp;cat_id=2" target="_blank">女士剃毛器 <em>&gt;</em></a></div>
        </div>
        <div class="categoryDetail children-col-1 clearfix">
            <ul class="children-list children-list-col">
                <li class="children-list-item">
                    <a class="link" href="/home//goods-FS7209_c-000.html" target="_blank"> <img class="thumb" src="/home/picture/fs7209.jpg" /> <span class="text">女士剃毛器FS7209</span> </a> <a class="btn btn-buy" href="/home//goods-FS7209_c-000.html" target="_blank">选购</a></li>
                <li class="children-list-item">
                    <a class="link" href="/home//goods-FS7208_c-000.html" target="_blank"> <img class="thumb" src="/home/picture/fs7208.jpg" /> <span class="text">女士剃毛器FS7208</span> </a> <a class="btn btn-buy" href="/home//goods-FS7208_c-000.html" target="_blank">选购</a></li>
            </ul>
        </div>
    </div>
    <div class="category_main">
        <div class="category_info">
            <div class="ml25 perfume_list fb">
                <a href="/home//list_goods/&amp;cat_id=3" target="_blank">鼻毛修剪器 <em>&gt;</em></a></div>
        </div>
        <div class="categoryDetail children-col-1 clearfix">
            <ul class="children-list children-list-col">
                <li class="children-list-item">
                    <a class="link" href="/home//goods-FS7806_c-000.html" target="_blank"> <img class="thumb" src="/home/picture/fs7806.jpg" /> <span class="text">鼻毛修剪器FS7806</span> </a> <a class="btn btn-buy" href="/home//goods-FS7806_c-000.html" target="_blank">选购</a></li>
                <li class="children-list-item">
                    <a class="link" href="/home//goods-FS7805_c-000.html" target="_blank"> <img class="thumb" src="/home/picture/fs7805.jpg" /> <span class="text">鼻毛修剪器FS7805</span> </a> <a class="btn btn-buy" href="/home//goods-FS7805_c-000.html" target="_blank">选购</a></li>
            </ul>
        </div>
    </div>
    <div class="category_main">
        <div class="category_info">
            <div class="ml25 perfume_list fb">
                <a href="/home//list_goods/&amp;cat_id=11" target="_blank">配件 <em>&gt;</em></a></div>
        </div>
        <div class="categoryDetail children-col-3 clearfix">
            <ul class="children-list children-list-col">
                <li class="children-list-item">
                    <a class="link" href="/home//goods-FB1DW_c-000.html" target="_blank"> <img class="thumb" src="/home/picture/fb1.jpg" /> <span class="text">刀网FB1</span> </a> <a class="btn btn-buy" href="/home//goods-FB1DW_c-000.html" target="_blank">选购</a></li>
                <li class="children-list-item">
                    <a class="link" href="/home//goods-FB5DW_c-000.html" target="_blank"> <img class="thumb" src="/home/picture/fb5.jpg" /> <span class="text">刀网FB5</span> </a> <a class="btn btn-buy" href="/home//goods-FB5DW_c-000.html" target="_blank">选购</a></li>
                <li class="children-list-item">
                    <a class="link" href="/home//goods-FR6DW_c-000.html" target="_blank"> <img class="thumb" src="/home/picture/fr6.jpg" /> <span class="text">刀网FR6</span> </a> <a class="btn btn-buy" href="/home//goods-FR6DW_c-000.html" target="_blank">选购</a></li>
                <li class="children-list-item">
                    <a class="link" href="/home//goods-FR8DW_c-000.html" target="_blank"> <img class="thumb" src="/home/picture/fr8.jpg" /> <span class="text">刀网FR8</span> </a> <a class="btn btn-buy" href="/home//goods-FR8DW_c-000.html" target="_blank">选购</a></li>
                <li class="children-list-item">
                    <a class="link" href="/home//goods-FR350DW_c-000.html" target="_blank"> <img class="thumb" src="/home/picture/fs350dw.jpg" /> <span class="text">刀网FS350</span> </a> <a class="btn btn-buy" href="/home//goods-FR350DW_c-000.html" target="_blank">选购</a></li>
            </ul>
            <ul class="children-list children-list-col">
<!--
<li class="children-list-item">
<a class="link" href="/home//goods-FR355DW_c-000.html" target="_blank"> <img class="thumb" src="/home/picture/fs355dw.jpg" /> <span class="text">刀网FS355</span> </a> <a class="btn btn-buy" href="/home//goods-FR355DW_c-000.html" target="_blank">选购</a></li>-->               <li class="children-list-item">
                    <a class="link" href="/home//goods-FC5801DW_c-000.html" target="_blank"> <img class="thumb" src="/home/picture/fc5801dw.jpg" /> <span class="text">刀网FC5801</span> </a> <a class="btn btn-buy" href="/home//goods-FC5801DW_c-000.html" target="_blank">选购</a></li>
                <li class="children-list-item">
                    <a class="link" href="/home//goods-FC5805DW_c-000.html" target="_blank"> <img class="thumb" src="/home/picture/fc5805dw.jpg" /> <span class="text">刀网FC5805</span> </a> <a class="btn btn-buy" href="/home//goods-FC5805DW_c-000.html" target="_blank">选购</a></li>
                <li class="children-list-item">
                    <a class="link" href="/home//goods-FC5901DW_c-000.html" target="_blank"> <img class="thumb" src="/home/picture/fc5901dw.jpg" /> <span class="text">刀网FC5901</span> </a> <a class="btn btn-buy" href="/home//goods-FC5901DW_c-000.html" target="_blank">选购</a></li>
                <li class="children-list-item">
                    <a class="link" href="/home//goods-LR52DW_c-000.html" target="_blank"> <img class="thumb" src="/home/picture/lr52.jpg" /> <span class="text">刀网LR52</span> </a> <a class="btn btn-buy" href="/home//goods-LR52DW_c-000.html" target="_blank">选购</a></li>
                <li class="children-list-item">
                    <a class="link" href="/home//goods-THX_c-000.html" target="_blank"> <img class="thumb" src="/home/picture/dyx.jpg" /> <span class="text">弹簧电源线</span> </a> <a class="btn btn-buy" href="/home//goods-THX_c-000.html" target="_blank">选购</a></li>
            </ul>
            <ul class="children-list children-list-col">
                <li class="children-list-item">
                    <a class="link" href="/home//goods-FR355DW_c-000.html" target="_blank"> <img class="thumb" src="/home/picture/fs355dw.jpg" /> <span class="text">刀网FS355</span> </a> <a class="btn btn-buy" href="/home//goods-FR355DW_c-000.html" target="_blank">选购</a></li>
                <li class="children-list-item">
                    <a class="link" href="/home//goods-A12_c-000.html" target="_blank"> <img class="thumb" src="/home/picture/a12.jpg" /> <span class="text">适配器A12</span> </a> <a class="btn btn-buy" href="/home//goods-LR52DW_c-000.html" target="_blank">选购</a></li>
            </ul>
        </div>
    </div>
</div>
    
            
        </div>
        <script type="text/javascript" src="/home/js/auto-img.js"></script>
        <!--轮显 开始 -->
        <div class="scrollImg">
    <ul>
<!--        <li>
            <a href="/home//act_pc_51.html" target="_blank"><img alt="" src="/home/picture/1240.jpg" /></a></li>    <li>
            <a href="/home//goods-FS375_c-000.html" target="_blank"><img alt="" src="/home/picture/1240.jpg" /></a></li>-->     
        <li>
            <a href="/home//list_goods/team" target="_blank"><img alt="" src="/home/picture/1240t.jpg" /></a></li>
        <li>
            <a href="/home//list_goods/spikes" target="_blank"><img alt="" src="/home/picture/1240i.jpg" /></a></li>
        <li>
            <a href="/home//list_goods/new_goods" target="_blank"><img alt="" src="/home/picture/1240f.jpg" /></a></li>
        <li>
            <a href="/home//list_goods/new_goods" target="_blank"><img alt="" src="/home/picture/61.jpg" /></a></li>
        <li>
            <a href="/home/javascript:void(0);" target="_blank"><img alt="" src="/home/picture/1240_1.jpg" /></a></li>
        </ul>
</div>
        
        

        <!--轮显 开始-->       
</div>


<!--轮显 结束-->
<!-- 首页热卖 -->
<script type="text/javascript">
$(function () {
$(".home_show_list").hover(
function () {
$(this).find(".dask").stop().delay(300).animate({"top": 0,"height": 170,opacity:1},300)
},
function () {
$(this).find(".dask").stop().animate({"top": 170,"height": 0,opacity:0},300)
}   
);
})
</script>


<div class="home_show clearfix">
    <div class="home_show_list">
        <a class="dask" href="/home//list_goods/new_goods" style="opacity: 0; top: 170px; height: 0px; overflow: hidden;" target="_blank"><img class="vm" src="/home/picture/fc9602.png" /></a><a class="in_b" href="/home/list_goods/new_goods" id="home_show1" target="_blank"><img alt="图片" class="vm" src="/home/picture/fc9602.jpg" /></a><!-- <a class="in_b" href="/home/list_goods/new_goods" id="home_show1" target="_blank"><img alt="图片" class="vm" src="/home/picture/fc9602.png" /></a> --></div>
    <div class="home_show_list">
        <a class="dask" href="/home//goods-FS375_c-000.html" style="top: 170px; height: 0px; opacity: 0;" target="_blank"><img class="vm" src="/home/picture/fs375.png" /></a><a class="in_b" href="/home//goods-FS375_c-000.html" target="_blank"><img alt="图片" class="vm" src="/home/picture/fs375.jpg" width="412" /></a>
        <!-- <a class="in_b" href="/home//goods-FS375_c-000.html" target="_blank">
            <img alt="图片" class="vm" src="/home/picture/fs375.jpg" width="412" />
        </a>-->
    </div>
    <div class="home_show_list">
        <a class="dask" href="/home//goods-FH6105_c-000.html" target="_blank">
            <img class="vm" src="/home/picture/fh6105.png" />
        </a>
        <a class="in_b last" href="/home//goods-FH6105_c-000.html" target="_blank">
            <img alt="图片" class="vm" src="/home/picture/fh6105.jpg" />
        </a> 
        <!--<a class="in_b last" href="/home//goods-FH6105_c-000.html" target="_blank">
            <img alt="图片" class="vm" src="/home/picture/fh6105.jpg" />
        </a>-->
    </div>
</div>
<div class="hot-bg">
    <div class="hot-goods">
        <h2 class="theme-type">
            热卖单品</h2>
        <div class="row row-3">
            <div class="prom-1-2">
                <ul class="goods-promo-list-2">
                    <li class="goods-item goods-item-l-2" style="background:#effbff;">
                        <div class="msg" style="">
                            <h3 class="title">
                                <a href="/home//goods-FS339_c-000.html" target="_blank">飞科智能剃须刀FS339</a></h3>
                            <p class="desc">
                                3D智能浮动系列&nbsp;/&nbsp;充插两用&nbsp;/&nbsp;智能水洗提示</p>
                            <p class="price">
                                <span class="num cal-price FS339">222</span>元&nbsp; <span class="old-num"><span class="cal-market-price FS339">999</span>元</span></p>
                        </div>
                        <div class="figure">
                            <a href="/home//goods-FS339_c-000.html" target="_blank"> <img alt="飞科剃须刀FS339" src="/home/picture/fs339.png" /> </a></div>
                    </li>
                </ul>
            </div>
            <div class="items-2">
                <ul class="goods-list-2">
                    <li class="goods-item goods-item-m">
                        <p class="title">
                            飞科智能剃须刀FS867</p>
                        <p class="month-num">
                            本款产品月销量&nbsp;<span class="num cal-month-num FS867" id="">11111</span></p>
                        <p class="price">
                            <span class="num cal-price FS867">119</span>元</p>
                        <div class="figure">
                            <a href="/home//goods-FS867_c-000.html" target="_blank"><img src="/home/picture/fs867_1.png" width="250" /></a></div>
                    </li>
                    <li class="goods-item goods-item-m">
                        <p class="title">
                            飞科剃须刀FS373</p>
                        <p class="month-num">
                            本款产品月销量&nbsp;<span class="num cal-month-num FS373" id="">11111</span></p>
                        <p class="price">
                            <span class="num cal-price FS373">119</span>元</p>
                        <div class="figure">
                            <a href="/home//goods-FS373_c-000.html" target="_blank"><img src="/home/picture/fs373_1.png" width="250" /></a></div>
                    </li>
                </ul>
            </div>
            <div class="prom-2-1">
                <ul class="goods-promo-list-l">
                    <li class="goods-item goods-item-2-1" style="background:#f3efff;">
                        <div class="msg" style="">
                            <h3 class="title">
                                <a href="/home//goods-FI9819_c-000.html" target="_blank">飞科挂烫机FI-9819</a></h3>
                            <p class="desc">
                                45秒快速出蒸汽&nbsp;/&nbsp;水壶自动供水装置&nbsp;/&nbsp;聚能喷头</p>
                            <p class="price">
                                <span class="num cal-price FI9819">199</span>元&nbsp; <span class="old-num"><span class="cal-market-price FI9819">999</span>元</span></p>
                        </div>
                        <div class="figure">
                            <a href="/home//goods-FI9819_c-000.html" target="_blank"><img src="/home/picture/fi9819.png" /></a></div>
                    </li>
                </ul>
            </div>
            <div class="items-3">
                <ul class="goods-list-3">
                    <li class="goods-item goods-item-m">
                        <p class="title">
                            飞科电吹风FH6273</p>
                        <p class="month-num">
                            本款产品月销量&nbsp;<span class="num cal-month-num FH6273" id="">11111</span></p>
                        <p class="price">
                            <span class="num cal-price FH6273">79</span>元</p>
                        <div class="figure">
                            <a href="/home//goods-FH6273_c-000.html" target="_blank"><img src="/home/picture/fh6273_1.png" /></a></div>
                    </li>
                    <li class="goods-item goods-item-m">
                        <p class="title">
                            飞科电吹风FH6618</p>
                        <p class="month-num">
                            本款产品月销量&nbsp;<span class="num cal-month-num FH6618" id="">11111</span></p>
                        <p class="price">
                            <span class="num cal-price FH6618">79</span>元</p>
                        <div class="figure">
                            <a href="/home//goods-FH6618_c-000.html" target="_blank"><img src="/home/picture/fh6618_1.png" /></a></div>
                    </li>
                    <li class="goods-item goods-item-m">
                        <p class="title">
                            飞科电吹风FH6232</p>
                        <p class="month-num">
                            本款产品月销量&nbsp;<span class="num cal-month-num FH6232" id="">11111</span></p>
                        <p class="price">
                            <span class="num cal-price FH6232">149</span>元</p>
                        <div class="figure">
                            <a href="/home//goods-FH6232_c-000.html" target="_blank"><img src="/home/picture/fh6232.png" /></a></div>
                    </li>
                    <li class="goods-item goods-item-m">
                        <p class="title">
                            飞科毛球修剪器FR5006</p>
                        <p class="month-num">
                            本款产品月销量&nbsp;<span class="num cal-month-num FR5006" id="">11111</span></p>
                        <p class="price">
                            <span class="num cal-price FR5006">79</span>元</p>
                        <div class="figure">
                            <a href="/home//goods-FR5006_c-000.html" target="_blank"><img src="/home/picture/fr5006.png" /></a></div>
                    </li>
                    <li class="goods-item goods-item-m">
                        <p class="title">
                            飞科理发器FC5811</p>
                        <p class="month-num">
                            本款产品月销量&nbsp;<span class="num cal-month-num FC5811" id="">11111</span></p>
                        <p class="price">
                            <span class="num cal-price FC5811">79</span>元</p>
                        <div class="figure">
                            <a href="/home//goods-FC5811_c-000.html" target="_blank"><img src="/home/picture/fc5811.png" /></a></div>
                    </li>
                    <li class="goods-item goods-item-m">
                        <p class="title">
                            飞科理发器FC5808</p>
                        <p class="month-num">
                            本款产品月销量&nbsp;<span class="num cal-month-num FC5808" id="">11111</span></p>
                        <p class="price">
                            <span class="num cal-price FC5808">79</span>元</p>
                        <div class="figure">
                            <a href="/home//goods-FC5808_c-000.html" target="_blank"><img src="/home/picture/fc5808.png" /></a></div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</div>

<!-- 首页热卖END -->

<!--新品上市-->
<meta content="EditPlus®" name="Generator" /> <meta content="" name="Author" /> <meta content="" name="Keywords" /> <meta content="" name="Description" /> <!--<div id="f_l" style="position: fixed; left: 0px; z-index: 1002; display: none; top: 124px">
    <a href="/home//act_cj.html"><img src="/home/picture/left.png" width="232" /></a></div>
<div id="f_r" style="right: 0px; position: fixed; z-index: 1002; display: none; top: 124px">
    <a href="/home//act_cj.html"><img src="/home/picture/right.png" width="232" /></a></div>--><script type="text/javascript">
var imgw=227;
var divw=624;
window.onresize = function(){
var pw=document.documentElement.clientWidth;
var f_l = document.getElementById("f_l");//根据id获取这个div
var f_r = document.getElementById("f_r");//根据id获取这个div
if(pw<1480)
{
f_l.style.display="none";
f_r.style.display="none";
}else
{
f_l.style.display="";
f_r.style.display="";
}
     f_l.style.left= pw/2-divw-imgw+"px" ;
f_r.style.right= pw/2-divw-imgw+"px" ;

}
 window.onload=function()
 {
    var pw=document.documentElement.clientWidth;
  var f_l = document.getElementById("f_l");//根据id获取这个div
var f_r = document.getElementById("f_r");//根据id获取这个div
    if(pw<1480)
{
f_l.style.display="none";
f_r.style.display="none";
}else
{
f_l.style.display="";
f_r.style.display="";
}
     f_l.style.left= pw/2-divw-imgw+"px" ;
f_r.style.right= pw/2-divw-imgw+"px" ;
 }
</script>
<div class="new-bg">
    <div class="new-goods">
        <h2 class="theme-type">
            新品上市</h2>
        <div class="row row-2">
            <div class="prom-2-1">
                <ul class="goods-promo-list-l">
                    <li class="goods-item goods-item-2-1 bg-grey" style="background: #e2f9fb">
                        <div class="msg">
                            <h3 class="title">
                                <a href="/home//goods-FS871_c-000.html" target="_blank">飞科智能剃须刀FS871</a></h3>
                            <p class="desc">
                                全身水洗&nbsp;/&nbsp;智能充电显示&nbsp;/&nbsp;智能防夹须</p>
                            <p class="price">
                                <span class="num cal-price FS871">222</span>元&nbsp; <span class="old-num"><span class="cal-market-price FS871">999</span>元</span></p>
                        </div>
                        <div class="figure">
                            <a href="/home//goods-FS871_c-000.html" target="_blank"><img src="/home/picture/fs871.png" style="margin-top: 40px" /></a></div>
                    </li>
                </ul>
            </div>
            <div class="items-3">
                <ul class="goods-list-3">
                    <li class="goods-item goods-item-m bg-grey">
                        <div class="figure">
                            <a href="/home//goods-FC9601_c-000.html" target="_blank"><img src="/home/picture/fc9601.png" /></a></div>
                        <div class="down-msg">
                            <p class="title">
                                飞科扫地机器人FC9601 <span class="cal-price FC9601">222</span>元</p>
                            <p class="desc">
                                四种清洁模式&nbsp;/&nbsp;一键预约&nbsp;/&nbsp;自动回充</p>
                        </div>
                    </li>
                    <li class="goods-item goods-item-m bg-grey">
                        <div class="figure">
                            <a href="/home//goods-FH6266_c-000.html" target="_blank"><img src="/home/picture/fh6266_2.png" /></a></div>
                        <div class="down-msg">
                            <p class="title">
                                飞科电吹风FH6266 <span class="cal-price FH6266">222</span>元</p>
                            <p class="desc">
                                负离子锁水润发&nbsp;/&nbsp;大功率快速干发&nbsp;/&nbsp;六档调节</p>
                        </div>
                    </li>
                    <li class="goods-item goods-item-m bg-grey">
                        <div class="figure">
                            <a href="/home//goods-FH6811_c-000.html" target="_blank"><img src="/home/picture/fh6811.png" /></a></div>
                        <div class="down-msg">
                            <p class="title">
                                飞科直发器FH6811 <span class="cal-price FH6811">222</span>元</p>
                            <p class="desc">
                                玫红铝制浮动发热板&nbsp;/&nbsp;干湿两用&nbsp;/&nbsp;直卷两用</p>
                        </div>
                    </li>
                    <li class="goods-item goods-item-m bg-grey">
                        <div class="figure">
                            <a href="/home//goods-FC5902_c-000.html" target="_blank"><img src="/home/picture/fc5902.png" /></a></div>
                        <div class="down-msg">
                            <p class="title">
                                飞科理发器FC5902 <span class="cal-price FC5902">222</span>元</p>
                            <p class="desc">
                                智能电量显示&nbsp;/&nbsp;可微调理发长度&nbsp;/&nbsp;充插两用</p>
                        </div>
                    </li>
                    <li class="goods-item goods-item-m bg-grey">
                        <div class="figure">
                            <a href="/home//goods-FI9311_c-000.html" target="_blank"><img src="/home/picture/fi-9311_2.png" /></a></div>
                        <div class="down-msg">
                            <p class="title">
                                飞科电熨斗FI-9311 <span class="cal-price FI9311">222</span>元</p>
                            <p class="desc">
                                超强蒸汽&nbsp;/&nbsp;特氟龙底板&nbsp;/&nbsp;三档蒸汽量选择</p>
                        </div>
                    </li>
                    <li class="goods-item goods-item-m bg-grey">
                        <div class="figure">
                            <a href="/home//goods-FR5222_c-000.html" target="_blank"><img src="/home/picture/fr5222.png" /></a></div>
                        <div class="down-msg">
                            <p class="title">
                                飞科毛球修剪器FR5222 <span class="cal-price FR5222">222</span>元</p>
                            <p class="desc">
                                高硬度不锈钢刀网&nbsp;/&nbsp;双倍电池动力&nbsp;/&nbsp;安全不伤衣物</p>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</div>


<!-- 首页特价商品 -->
<div class="dis-bg">
    <div class="dis-goods">
        <h2 class="theme-type">
            特价商品</h2>
        <div class="row row-2">
            <div class="items-4">
                <ul class="goods-list-4">
                    <li class="goods-item goods-item-m first-col" style="background: #fffce7">
                        <div class="msg">
                            <p class="title">
                                飞科电吹风FH6257</p>
                            <p class="desc">
                                快速造型&nbsp;/&nbsp;健康护发</p>
                            <p class="price">
                                <span class="num cal-price FH6257">222</span>元 <span class="old-num"><span class="cal-market-price FH6257">999</span>元</span></p>
                        </div>
                        <div class="figure" style="margin-top: 35px">
                            <a href="/home//goods-FH6257_c-000.html" target="_blank"><img src="/home/picture/fh6257.png" /></a></div>
                    </li>
                    <li class="goods-item goods-item-m">
                        <div class="msg">
                            <p class="dis">
                                <span class="cal-dis FS360">7.8</span>折</p>
                            <p class="desc">
                                浮动三刀头/强劲动力</p>
                            <p class="price">
                                <font color="#171f25">FS360</font> <span class="num cal-price FS360">222</span>元 <span class="old-num"><span class="cal-market-price FS360">999</span>元</span></p>
                        </div>
                        <div class="figure">
                            <a href="/home//goods-FS360_c-000.html" target="_blank"><img src="/home/picture/fs360_3.png" /></a></div>
                        <div class="comment-wrapper">
                            <a><span class="review">内外兼修&nbsp;奢宠经典</span> <span class="comment">浮动三刀头&nbsp;/&nbsp;双环极速贴面刀网&nbsp;/&nbsp;超长待机</span> </a></div>
                    </li>
                    <li class="goods-item goods-item-m">
                        <div class="msg">
                            <p class="dis">
                                <span class="cal-dis FC5803">7.8</span>折</p>
                            <p class="desc">
                                3档微调/高效合金刀头</p>
                            <p class="price">
                                <font color="#171f25">FC5803</font> <span class="num cal-price FC5803">222</span>元 <span class="old-num"><span class="cal-market-price FC5803">999</span>元</span></p>
                        </div>
                        <div class="figure">
                            <a href="/home//goods-FC5803_c-000.html" target="_blank"><img src="/home/picture/fc5803.png" /></a></div>
                        <div class="comment-wrapper">
                            <a><span class="review">智护升级&nbsp;创新为你</span> <span class="comment">高效合金锐角刀头&nbsp;/&nbsp;充插两用&nbsp;/&nbsp;全球电压 </span></a></div>
                    </li>
                    <li class="goods-item goods-item-m">
                        <div class="msg">
                            <p class="dis">
                                <span class="cal-dis FR5001">7.8</span>折</p>
                            <p class="desc">
                                不锈钢刀网/超强吸风装置</p>
                            <p class="price">
                                <font color="#171f25">FR5001</font> <span class="num cal-price ">29.9</span>元 <span class="old-num"><span class="cal-market-price FR5001">999</span>元</span></p>
                        </div>
                        <div class="figure">
                            <a href="/home//goods-FR5001_c-000.html" target="_blank"><img src="/home/picture/fr5001_3.png" /></a></div>
                        <div class="comment-wrapper">
                            <a><span class="review">强力去球&nbsp;安全不伤衣物</span> <span class="comment">精磨不锈钢刀网&nbsp;/&nbsp;不变形不生锈&nbsp;/&nbsp;强劲动力</span> </a></div>
                    </li>
                    <li class="goods-item goods-item-m first-col" style="background: #ffecef">
                        <div class="msg">
                            <p class="title">
                                飞科女士剃毛器FS7209</p>
                            <p class="desc">
                                全身水洗&nbsp;/&nbsp;三刀一体</p>
                            <p class="price">
                                <span class="num cal-price FS7209">222</span>元 <span class="old-num"><span class="cal-market-price FS7209">999</span>元</span></p>
                        </div>
                        <div class="figure" style="margin-top: 35px">
                            <a href="/home//goods-FS7209_c-000.html" target="_blank"><img src="/home/picture/fs7209.png" /></a></div>
                    </li>
                    <li class="goods-item goods-item-m">
                        <div class="msg">
                            <p class="dis">
                                <span class="cal-dis FH6651">7.8</span>折</p>
                            <p class="desc">
                                负离子功能/冷热风</p>
                            <p class="price">
                                <font color="#171f25">FH6651&nbsp;</font><span class="num cal-price FH6651">222</span>元 <span class="old-num"><span class="cal-market-price FH6651">999</span>元</span></p>
                        </div>
                        <div class="figure">
                            <a href="/home//goods-FH6651_c-000.html" target="_blank"><img src="/home/picture/fh6651_3.png" /></a></div>
                        <div class="comment-wrapper">
                            <a><span class="review">精湛工艺&nbsp;匠心之作</span> <span class="comment">顶级材质&nbsp;/&nbsp;冷热风&nbsp;/&nbsp;过热保护</span> </a></div>
                    </li>
                    <li class="goods-item goods-item-m">
                        <div class="msg">
                            <p class="dis">
                                <span class="cal-dis FS7806">7.8</span>折</p>
                            <p class="desc">
                                刀头可水洗/开放式夹缝</p>
                            <p class="price">
                                <font color="#171f25">FS7806&nbsp;</font><span class="num cal-price FS7806">222</span>元 <span class="old-num"><span class="cal-market-price FS7806">999</span>元</span></p>
                        </div>
                        <div class="figure">
                            <a href="/home//goods-FS7806_c-000.html" target="_blank"><img src="/home/picture/fs7806_3.png" /></a></div>
                        <div class="comment-wrapper">
                            <a><span class="review">修饰你的细节&nbsp;完美男人必备 </span><span class="comment">开放式立体拱形刀头&nbsp;/&nbsp;不锈钢精密修剪系统 </span></a></div>
                    </li>
                    <li class="goods-item goods-item-m">
                        <div class="msg">
                            <p class="dis">
                                <span class="cal-dis FR5218">7.8</span>折</p>
                            <p class="desc">
                                完美去球/呵护衣物</p>
                            <p class="price">
                                <font color="#171f25">FR5218&nbsp;</font><span class="num cal-price">29.9</span>元 <span class="old-num"><span class="cal-market-price FR5218">999</span>元</span></p>
                        </div>
                        <div class="figure">
                            <a href="/home//goods-FR5218_c-000.html" target="_blank"><img src="/home/picture/fr5218.png" /></a></div>
                        <div class="comment-wrapper">
                            <a><span class="review">时尚精品生活格调</span> <span class="comment">精磨不锈钢刀网&nbsp;双重保护装置&nbsp;安全不伤衣物</span> </a></div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</div>

<!-- 首页特价商品END -->
<script type="text/javascript">
function get_goods_info(){ 
    $.post("?app_act=index/get_goods_info&app_fmt=json",'',function(data){ 
                var data = $.parseJSON(data);
                var goods_arr = null;
                if(data['status'] === 1){
                   goods_arr = data['data']; 
                   for(var k=0;k<goods_arr.length;k++){
                       $('.cal-price').each(function(index){
                           if($(this).hasClass(goods_arr[k]['goods_sn'])){
                               $(this).html(parseInt(goods_arr[k]['shop_price']));
                           }
                       });
                       $('.lj_price').each(function(index){
                           if($(this).hasClass(goods_arr[k]['goods_sn'])){
                               if(goods_arr[k]['is_active'] == '1')
                               {
                                $(this).hide();
                               }else{
                                $(this).html('下单立减'+(parseInt(goods_arr[k]['shop_price'])*0.1).toFixed(1));
                               }
                                
                           }
                       });
                       $('.ljx_price').each(function(index){
                           if($(this).hasClass(goods_arr[k]['goods_sn'])){
                               if(goods_arr[k]['is_active'] == '1')
                               {
                                $(this).hide();
                               }else{
                                $(this).html((parseInt(goods_arr[k]['shop_price'])*0.1).toFixed(1));
                               }
                                
                           }
                       });
                       $('.cal-market-price').each(function(index){
                           
                           if($(this).hasClass(goods_arr[k]['goods_sn'])){
                               $(this).html(parseInt(goods_arr[k]['market_price']));
                           }
                       });
                       $('.cal-dis').each(function(index){
                           if($(this).hasClass(goods_arr[k]['goods_sn'])){
                               $(this).html((Math.floor( parseInt(goods_arr[k]['shop_price']) * 100 / parseInt(goods_arr[k]['market_price']))/10).toFixed(1));
                           }
                       });
                       $('.cal-month-num').each(function(index){
                           if($(this).hasClass(goods_arr[k]['goods_sn'])){
                               if(goods_arr[k]['month_number'] > 0){
                                   $(this).html(goods_arr[k]['month_number']);
                               }else{
                                   $(this).html(0);
                               }
                               
                           }
                       });
                       
                   }
                }

         }) 
}

$(function() {    
    var ops = {
            button:false,   //是否有按钮,默认是false
            num:'show',     //数字按钮显示还是隐藏,默认是show
            hover:'scroll', //移动到图片上可否继续轮显，默认为scroll
            speed:5000      //轮显速度,默认是5000
        };
    $('.scrollImg').autoImgSlide(ops); 
    $("#category_list").show(); 
    $("#promo_scroll").show();
    get_goods_info();
});  
</script>
<!--</div>-->
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
                                        <dd class="mt5 mb8"> <a target="_blank" href="/home//help-36.html">购物指南</a></dd>
                                        <dd class="mt5 mb8"> <a target="_blank" href="/home//help-15.html">配送方式</a></dd>
                                        <dd class="mt5 mb8"> <a target="_blank" href="/home//help-14.html">支付方式</a></dd>
                                    </dl>
                                                <dl class="fl" style="margin-left:50px;">
                    <dt class="fm f16 fb mb12">服务支持</dt>
                                        <dd class="mt5 mb8"> <a target="_blank" href="/home//help-96.html">积分规则</a></dd>
                                        <dd class="mt5 mb8"> <a target="_blank" href="/home//help-29.html">保修政策</a></dd>
                                        <dd class="mt5 mb8"> <a target="_blank" href="/home//help-28.html"><a href='/service/do_index' target='_blank'>服务网点</a></a></dd>
                                    </dl>
                                                <dl class="fl" style="margin-left:50px;">
                    <dt class="fm f16 fb mb12">关注我们</dt>
                                        <dd class="mt5 mb8"> <a target="_blank" href="/home//help-35.html"><a href="/home/http://weibo.com/5588774018/profile?topnav=1&wvr=6" target="_blank">新浪微博</a></a></dd>
                                        <dd class="mt5 mb8"> <a target="_blank" href="/home//help-34.html">关注微信</a></dd>
                                        <dd class="mt5 mb8"> <a target="_blank" href="/home//help-23.html">APP下载</a></dd>
                                    </dl>
                                                <dl class="fl" style="margin-left:50px;">
                    <dt class="fm f16 fb mb12">关于飞科</dt>
                                        <dd class="mt5 mb8"> <a target="_blank" href="/home//help-38.html">飞科介绍</a></dd>
                                        <dd class="mt5 mb8"> <a target="_blank" href="/home//help-21.html">飞科新闻</a></dd>
                                        <dd class="mt5 mb8"> <a target="_blank" href="/home//help-19.html"><a target="_blank" href="/home//about_us.html">联系我们</a></a></dd>
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
                Copyright &copy; 2013-2016上海飞科电器股份有限公司 | 版权所有 | <a href="/home/javascript:void;" onclick="window.open(&quot;http://www.miitbeian.gov.cn/publish/query/indexFirst.action&quot;)" style="color: #939191;">网站备案/许可证号：沪ICP备13041208号</a></p>
            <p>
                <a href="/home/https://pic.flyco.net.cn/sources/service/ICP.jpg" style="color:#939191;vertical-align:middle;" target="blank">增值电信营业经营许可认证:沪B2-20160083 | </a><a href="/home/http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=31010502001341" target="_blank"><img src="/home/picture/fkab.png" style="display:inherit;vertical-align:middle;" /><span style="color:#939191;vertical-align:middle;">沪公网安备 31010502001341号</span></a></p>
        </div>
    </div>
    <div class="rightImg fr mt25">
        <a href="/home/javascript:void;" onclick="window.location=&quot;https://ss.knet.cn/verifyseal.dll?sn=e14072231010751501e2ri000000&quot;"><img class="in_b" src="/home/picture/rightimg1.jpg" /></a><span>|</span><a href="/home/javascript:void;" onclick="window.open(&quot;http://www.sgs.gov.cn/lz/licenseLink.do?method=licenceView&amp;entyId=20140630170754988&quot;)"><img class="in_b" src="/home/picture/rightimg2.jpg" /></a><span>|</span><a href="/home/javascript:void;" onclick="window.location=&quot;http://www.cyberpolice.cn/wfjb/&quot;"><img class="in_b" src="/home/picture/rightimg3.jpg" /></a><span>|</span><img class="in_b" src="/home/picture/rightimg4.jpg" style="margin-right: 0px;" /></div>
</div>
        <!-- 版权信息END -->
    </div>
</div>
<!-- <script type='text/javascript' src='js/kf.js'></script> --><!--<script src="/home/js/t_flycopc_ta.js" type="text/javascript"></script>-->
</body>
</html>
