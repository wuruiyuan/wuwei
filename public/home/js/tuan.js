function interval(day, hour, minute, second,divid)
{
	if(second>0) second--;
	if(second==0)
	{
		if(minute==0)
		{
			if(hour==0) minute=0;second=0;
		}
		else
		{
			second=60;minute-=1;
		}
	}
	if(minute==0)
	{
		if(hour==0)
		{
			minute=0;hour=0;
		}
		else
		{
			minute=60;hour-=1;
		}
	}
	$("#"+divid).html(day+' 天 '+hour+' 小时 '+minute+' 分 '+second+' 秒 ');
	window.setTimeout(function (){interval(day, hour, minute, second, divid)},1000);
}
var choose_num="";
var buy_user_id='';
var buy_goods_price=0;
function add_shop_cart_promos(){
	var choose_num = $("#choose_num").val();
	Ajax.call($app_url+'goods/check_cart_sum&app_fmt=json&app_page=null', '', 
		function (s){
			if(s.code==1){
				baison.alert(s.msg);
			}else{
				pass=true;
				show_box(sku,buy_goods_sn,buy_user_id,choose_num,buy_goods_price,buy_goods_type);
			}
		}	, 'GET', 'json'); 
}
function show_box(sku,goods_sn,userid,goods_num,goods_money,action){
	if(sku !='') {
		
	if(goods_num<=0){
		goods_num=1;
	}
	var url=$app_url+'spike/add_product_to_cart&app_fmt=json&app_page=null';
	url+='&sku_sn='+sku.substring(1, sku.length-1);
	var param='goods_sn='+goods_sn;
	param+='&ext_attr_info='+encodeURI(ext_attr_info,'UTF-8');
	param+='&goods_num='+goods_num;
	param+='&price='+goods_money;
	param+='&action='+action;
	Ajax.call(url, param, 
		function (s){
			//s=eval('('+s+')');	
			if(s.code==0){
				window.location.href='/orders/?process_type=spec';
			}else{
				$('#vCode').attr('src','/printpic/do_index?type=spike&'+ Math.random());
				baison.alert(s.msg);
			}
	   }
	, 'POST', 'json');
	}
}
function go_show_order(user_id) {
	if (user_id == '') {
		$('#vCode').click();
		$('#btn_login').click();
	} else {
		if ($("#show_order_comment").css('display') == 'none') {
			Ajax.call('/index.php?app_act=goods/check_show_order_buy&app_page=null&goods_sn='+goods_sn, '', 
					function (s){
						s=eval('('+s+')');	
						if(s.code == 0) {
							$("#show_order_comment").show();
						} else {
							baison.alert(s.msg);
						}
					}	, 'GET', ''); 
		} else {
			$("#show_order_comment").hide();
		}
	}
}