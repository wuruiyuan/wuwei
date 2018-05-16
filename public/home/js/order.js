var need_bill=0;//是否发票
var my_balance=0;//账户余额
var last_balance=0;

var payment_id=0;//支付方式ID
var shipping_id=0;//配送方式ID
var shipping_fee=0;//当前配送方式运费
var is_shipping_free=0;//是否免邮
var shipping_fee_array=new Array();//配送方式费用数组
var shipping_fee_cod_array=new Array();//货到付款运费数组


var use_balance=0;//订单使用余额
var use_integral=0;//订单使用积分
var use_coupon=0;//订单使用现金券
var use_vouchers=0;//订单使用抵用券

var use_zhe = false;//打折
var dazhe = 1;

var ticket_type; //判断是公司还是个人
var inv_type; //判断是电子发票还是普通发票
var  card_sn='';

var final_price=0;//订单需支付金额
var final_goods_price=0;//订单商品金额
//以上变量页面加载完成存入JS缓存，不直接从页面获取
var use_coupon_voucher_list = new Array();
var goods_sn_str='';
var goods_json = '';
//送货地址变化时重新查询支付方式和配送方式
function get_shipping_payment(address,obj,type){
    if(address!=''){
        address_id=address;
        //$('#inv_payee').val($('#consignee_'+address).html());
        /*$('#selectaddress input[type=button]').each(function(){
         $(this).removeClass('addressCurrBtn').addClass('addressBtn');
         });*/
        $(obj).addClass("current").siblings().removeClass("current").attr('checked','true');

        Ajax.call($app_url+'orders/list_shippings&app_page=null&address_id='+address+'&is_shipping_free='+is_shipping_free+'&type='+type, '',
            function (s){
                shipping_id = 0;
                payment_id = 0;
                $('#order_shipping_payment').html(s);
            }
            , 'GET', '');
    }
}
//初始化运费数组
function set_shipping_fee(){
    $('span[name=shipping_fee]').each(function(){
        var id=$(this).attr('id');
        var value=parseFloat($.trim($(this).html()));
        shipping_fee_array[id]=value;
    });
    $('span[name=shipping_fee_cod]').each(function(){
        var id=$(this).attr('id');
        var value=parseFloat($.trim($(this).html()));
        shipping_fee_cod_array[id]=value;
    });
}
//选择发票类型
function check_order_ticket(obj){
    inv_type=$(obj).find('span').attr('inv_type');
    $(obj).addClass('order_selected');
    $(obj).siblings().each( function(){
        $(this).removeClass('order_selected');
    });
    var n =$(obj).index();
    $(".ticket_detail").eq(n).show().siblings().hide();
}
//选择支付方式
function selectPayment(obj){

    //$(obj).addClass("current").siblings('[name=pay_id]').removeClass("current").attr('checked','true');
    var user_price = 0;
    payment_id=$(obj).val();
    //alert(payment_id);
    if($("[name='use_balance']").hasClass('curent')){
        user_price = my_balance;
    }
    $('#shipping_list input[type=redio]').each(function(){
        if($(this).attr('support_cod')!=1){
            $(this).removeAttr("disabled");
        }
    });

    final_price=final_goods_price-use_balance-use_integral-use_coupon-use_vouchers;
    $('li[type="checkbox"]').each(function(){
        if($(this).attr('pay_value') != payment_id) {
            $(this).removeAttr('checked').remoeClass('current');
        }
        if($(this).hasClass('current') && shipping_id!=0){
            if($(this).attr('pay_code')=='cod'){
                shipping_fee=parseFloat(shipping_fee_cod_array[shipping_id]);
            }else{
                shipping_fee=parseFloat(shipping_fee_array[shipping_id]);
            }
        }
    });
    if(typeof(shipping_fee)=='undefined'){
        shipping_fee=0;
    }
    $('#shipping_price').html(shipping_fee.toFixed(2));

    final_price = final_price+shipping_fee;
    use_last_balance();

    /*$("#pay_only").html(parseFloat(shipping_fee)+parseFloat($("#point_by_price").val()));
     if(final_price>0){
     $('#must_pay').html(parseFloat(final_price).toFixed(2));
     }else {
     $('#must_pay').html(0);
     }*/
    order_init();
}
//选择配送方式
function selectShipping(obj){
    shipping_id=$(obj).attr('sid_value');
    $(obj).addClass("current").siblings().removeClass("current");

    final_price=final_goods_price-use_balance-use_integral-use_coupon-use_vouchers;
    var flag = $("[name='pay_id'][class='current']");
    if( flag ){
        if(flag.attr('is_cod')==1 && payment_id!=99){
            shipping_fee=parseFloat(shipping_fee_cod_array[shipping_id]);
        }else{
            shipping_fee=parseFloat(shipping_fee_array[shipping_id]);
        }
    }else{
        shipping_fee=parseFloat(shipping_fee_array[shipping_id]);
    }
    if( typeof(shipping_fee) =='undefined' ){
        shipping_fee=0;
    }

    final_price=final_price+shipping_fee;
    use_last_balance();

    $('#shipping_price').html(shipping_fee.toFixed(2));
    $("#pay_only").html(parseFloat(shipping_fee)+parseFloat($("#point_by_price").val()));
    if(final_price>0) {
        $('#must_pay').html(final_price.toFixed(2));
    }else {
        $('#must_pay').html(0);
    }
    order_init();
}

function integral_item_show(){
                if( $("#use_integral").attr("ck")==0 ){
                        $("#use_integral").addClass("current");
			$("#use_integral").attr("ck","1");
			//$("#use_integral").parent().parent().find(".integral-item").show();
		}
		else{
                        $("#use_integral").removeClass("current");
			$("#use_integral").attr("ck","0");
			//$("#use_integral").parent().parent().find(".integral-item").hide();
		}
                order_use_integral();
    }
//使用积分
function order_use_integral(){
    if(!order_rate){
        baison.alert('该订单不能使用积分');
        return false;
    }
    if( $("#use_integral").attr("ck")==1 ){
		var flag = arguments[0] ? arguments[0] : 0;
		if(flag){
			var jifen = $("#pay_point").val();
		}else{
			var jifen = total;
		}
        
        if(integrals){
            if( jifen =='' || jifen*integral_rate > total*order_rate ){
                jifen = Math.floor((total*order_rate)/integral_rate);
            }
			if(jifen>integrals){
				jifen=integrals;
			}
        }else{
            jifen=0;
        }
        jifen = parseInt(jifen);
        $("#pay_point").val(jifen);
        $("#integral_input").html(jifen);
        $("#youhui").html((jifen*integral_rate).toFixed(2));
        $("#total_use_intergral").html((jifen*integral_rate).toFixed(2));
    }else{
        $("#pay_point").val('');
        $("#integral_input").html('');
        $("#youhui").html('0');
        $("#total_use_intergral").html('0.00');
    }
    order_init();
}

//使用余额付款
function user_balance(total){
    var $obj = $("#use_balance");
    if(my_balance === 0){
        baison.alert('余额为0');
        $obj.removeClass("current");
        return false;
    }
    if($obj.hasClass('current')){
        $obj.removeClass("current");
    }else{
        $("#use_balance").addClass("current");
    }
    order_init();
}
function cancel_voucher(){
    use_coupon = 0;
    use_vouchers = 0;
    use_zhe =false;
    order_init();
    //$("#gift_voucher").removeClass("current");
    $(".gift-form").html("<span>填写优惠券码：</span><input type='text' id='voucher_value' class='txt' /><input type='button' class='btnOk fm pointer' onclick='check_voucher();' value='使用' />");
}
function check_voucher(){

    card_sn=$('#voucher_value').val();
    if(!card_sn){
        baison.alert("请输入礼品券码");
        return false;
    }
    var url = "/orders/check_voucher&app_page=null&app_fmt=json";
    $.post(url,{"card_sn":card_sn,"goods_sn_str":goods_sn_str},function(data){
        var data=jQuery.parseJSON(data);
        if(data.code){
            //$("#gift_voucher").addClass('current');
            if(data.code==1){
                //if( typeof use_coupon_voucher_list[ card_sn ] =="undefined" ){
                    use_coupon = parseFloat(data.amount);
                    use_coupon_voucher_list[ card_sn ] = use_coupon;
                    order_init();
                //}
            }
            if(data.code==2){
                //if( typeof use_coupon_voucher_list[ card_sn ] =="undefined" ){
                    use_vouchers = parseFloat(data.amount);
                    use_coupon_voucher_list[ card_sn ] = use_vouchers;
					$(".gift-form").html("<span>使用优惠券码："+card_sn+"&nbsp;&nbsp;优惠"+use_vouchers+"元</span><input type='button' class='btnCc fm pointer' onclick='cancel_voucher()' value='取消' />");
                    order_init();
                //}
            }
            //临时修改114活动的打折
            if(data.code==114){
                //if( typeof use_coupon_voucher_list[ card_sn ] =="undefined" ){
                    use_vouchers = 0;
                    use_zhe = true;
                    dazhe = parseFloat(data.amount);
                    use_coupon_voucher_list[ card_sn ] = use_vouchers;
                    $(".gift-form").html("<span>使用优惠券码："+card_sn+"&nbsp;&nbsp;(电信老用户特权："+(dazhe*10).toFixed(1)+"折)</span><input type='button' class='btnCc fm pointer' onclick='cancel_voucher()' value='取消' />");
                    order_init();
                //}
            }
        }else{
            baison.alert(data.msg);
        }

    })
}
//使用抵用券
function user_vouchers(obj, total){
    if($(obj).attr('chk')=='0'){
        $(obj).addClass("current").siblings().removeClass("current");
        $('li[name="vouchers"]').attr('chk','0');
        $(obj).attr('chk','1');
    }else{
        $(obj).removeClass('current');
        $(obj).attr('chk','0');
    }

    //更新
    var vouchers_sn = "";
    $('li[name=vouchers]').each(function(){
        if($(this).attr('chk')=='1'){
            vouchers_sn = $(this).attr('card_sn');
        }
    });
    if( typeof id != "undefined" && id !="" ){
        $.post("/orders/edit_vouchers&app_fmt=json&app_page=null",{id:id,vouchers:vouchers_sn},function(data){
            //编辑抵用券
            /*
             var data = $.parseJSON(data);
             if( data.code == 0 ){
             //0k
             order_init();
             }else{
             baison.alert(data.msg);
             }
             */
            var is_market = 0;
            if($(obj).attr('pr_type')==1 && $(obj).hasClass('current')){
                is_market = 1;
            }
            //$(obj).addClass("current").siblings().removeClass("current");
            if(false){
                var url = $app_url+'orders/pay_info&is_market='+is_market+'&app_page=null';
                if( typeof id != "undefined" && id !="" ){
                    url +="&is_active=2&type=_edit&id="+id;
                }
                Ajax.call(url,'',function(s){
                    if(s !='') {
                        $("#payinfo_list").html(s);
                        //var $vouchers=$('li[name="vouchers"]');
                        //$vouchers.removeAttr('checked').removeClass('current');

                        //choose_vouchers();
                        //order_init();
                    }
                },'post','');
            }else{
                order_init();
                //choose_vouchers();
            }

        });
    }else{
        //0k
        //order_init();
        var is_market = 0;
        if($(obj).attr('pr_type')==1 && $(obj).hasClass('current')){
            is_market = 1;
        }
        //$(obj).addClass("current").siblings().removeClass("current");
        if(false){
            var url = $app_url+'orders/pay_info&is_market='+is_market+'&app_page=null';
            if( typeof id != "undefined" && id !="" ){
                url +="&is_active=2&type=_edit&id="+id;
            }
            Ajax.call(url,'',function(s){
                if(s !='') {
                    $("#payinfo_list").html(s);
                    //var $vouchers=$('li[name="vouchers"]');
                    ///$vouchers.removeAttr('checked').removeClass('current');

                    //choose_vouchers();
                    order_init();
                }
            },'post','');
        }else{

            order_init();
            //choose_vouchers();
        }

    }



    //order_init();
}
//编辑订单选择抵用券
function choose_vouchers(){
    var vouchers_sn = "";
    $('li[name=vouchers]').each(function(){
        if($(this).attr('chk')=='1'){
            vouchers_sn = $(this).attr('card_sn');
        }
    });
    if( typeof id != "undefined" && id !="" ){
        $.post("/orders/edit_vouchers&app_fmt=json&app_page=null",{id:id,vouchers:vouchers_sn},function(data){
            //编辑抵用券
            var data = $.parseJSON(data);
            if( data.code == 0 ){
                //0k
                order_init();
            }else{
                baison.alert(data.msg);
            }
        });
    }else{
        //0k
        order_init();
    }
}
//绑定抵用券
function binding_card(type, total_money){
    var order_url = $("#order_url").val();
    var params="app_fmt=json&pwd="+$('#id_'+type).val()+"&type="+type;
    Ajax.call('/index.php?app_act=mem_center/index/binding_card', params,
        function (s){
            if(s.statusCode!=0) {
                baison.alert(s.status);
            }else {
                baison.alert(s.status);
                if(type == 'coupon') {
                    var url = $app_url+'orders/get_user_info&app_page=null&app_fmt=json';
                    Ajax.call(url, '',
                        function (u){
                            u = eval('('+u+')');
                            $("#my_balance").html(u.user_money);
                            //判断是否使用余额支付
                            if($("input[type='checkbox'][name='use_balance']").attr('checked')) {
                                user_balance(must_pay);
                            }
                            $("#use_coupon_id").hide();
                            $("#use_coupon_id_title").click();
                            $('#id_'+type).val('');
                        },
                        'POST',
                        'JSON'
                    );
                } else if (type == 'vouchers') {
                    if(s['data']['lowest_amount'] <= total_money) {
                        var str = $("#my_vourchers_list").html();
                        $("#my_vourchers_list").append('<li><input type=\"checkbox\" onclick=\"user_vouchers(this,'+must_pay+')\" mon=\"'+s['data']['card']['amount']+'\" name=\"vouchers\" value=\"'+s['data']['card']['card_sn']+'\"> 抵用券：'+s['data']['card']['card_sn']+'(可用金额：'+s['data']['card']['amount']+' 元)</li>');
                    }
                    $("#use_vouchers_id").hide();
                    $("#use_coupon_id_title").click();
                    $('#id_'+type).val('');
                }
            }
        }
        , 'POST', 'json');
}
//使用现金券
function user_coupon(obj, total){
    //$(obj).addClass("current").siblings().removeClass("current");
    var coumon_money = parseFloat($(obj).attr('mon'));
    if($(obj).attr('chk')=='0'){
        $(obj).addClass("current");
        $(obj).attr('chk','1');
    }else{
        $(obj).removeClass("current");
        $(obj).attr('chk','0');
    }
    var coupon='';
    $('li[name="coupon[]"]').each(function(){
        if($(this).hasClass('current')){
            coupon+=','+$(this).attr('card_sn');
        }
    });
    if(coupon!=''){
        coupon = coupon.substring(1);
    }
    if( typeof id != "undefined" && id !="" ){
        $.post("/orders/edit_coupon&app_fmt=json&app_page=null",{id:id,coupon:coupon},function(data){
            //编辑抵用券
            var data = $.parseJSON(data);
            if( data.code == 0 ){
                //0k
                order_init();
            }else{
                baison.alert(data.msg);
            }
        });
    }else{
        //0k
        order_init();
    }
}
function use_last_balance(){
    if(last_balance>=final_price){
        last_balance=last_balance-final_price;
        use_balance=use_balance+final_price;
        final_price=0;
    }else{
        final_price=final_price-last_balance;
        use_balance=last_balance;
        last_balance=0;
    }
}
/**
 * 订单计算
 * @return
 */
function order_init(){
    //初始化运费

    var is_cod = 0;
    $("[name=pay_id]").each(function(){
        if($(this).hasClass('current')){
            if($(this).attr('pay_code') == 'cod'){
                is_cod = 1;
            }
        }
    });
    $("[name=sid]").each(function(){
        if($(this).hasClass('current')){
            shipping_id = $(this).attr('sid_value');
        }
    });
    if(is_cod){
        if(shipping_fee_cod_array.hasOwnProperty(shipping_id)){
            shipping_fee=parseFloat(shipping_fee_cod_array[shipping_id]);
        }else{
            shipping_fee = 0;
        }
    }else{
        if(shipping_fee_array.hasOwnProperty(shipping_id)){
            shipping_fee=parseFloat(shipping_fee_array[shipping_id]);
        }else{
            shipping_fee = 0;
        }
    }
    $("#shipping_price").html(shipping_fee.toFixed(2));

    if (use_zhe) {
        use_vouchers = final_goods_price*(1-dazhe);
    }
    //初始化金额
    final_price = final_goods_price + shipping_fee;


    final_price = final_price - use_vouchers;



    final_price = final_price - use_coupon;

    $("#total_use_vouchers").html((use_coupon+use_vouchers).toFixed(2));

    //-----积分----------
    if($("#use_integral").attr("ck")==1){
        use_integral = $('#pay_point').val()*integration_rate;
    }else{
        $("#pay_point").val("");
        use_integral = 0;
    }

    if(final_price>use_integral){
        final_price = final_price - use_integral;
    }else{
        use_integral = final_price;
        final_price = 0;
    }
    //$("#integrate_monney_id").html(use_integral.toFixed(2));

    //余额
    if($("#use_balance").hasClass('current')){
        use_balance = my_balance;
    }else{
        use_balance = 0;
    }

    if(final_price>use_balance){
        final_price = final_price - use_balance;
    }else{
        use_balance = final_price;
        final_price = 0;
    }
    //$("#user_pay_monney_id").html(use_balance.toFixed(2));

    if(final_price>=0) {
        $('#must_pay').html(final_price.toFixed(2));
		$('#must_pay_total').html(final_price.toFixed(2));
    }else {
        $('#must_pay').html('0.00');
		$('#must_pay_total').html('0.00');
    }
    
}

var button='';
function checkForm(gotourl,type,sn){

    var msg='';
    var remark = $("#remark");
    if(remark.length>0 && remark.val() !='') {
        remark_value = remark.val();
        var remark_num = countByteLength(remark_value, 1);
        if(remark_num>35) {
            baison.alert('留言不能超过35字');
            return false;
        }
    }

    var curr_addr=$('[name="address"]');
    var address_id = 0;
    curr_addr.each(function(){
        if($(this).hasClass('order_selected')){
            address_id = $(this).attr('add_value');
        }
    });
    if(typeof address_id == 'undefined'){
        msg+="请选择送货地址\n";
    }else if(address_id == 0){
        msg+="请提交送货地址\n";
    }
    
    if(payment_id==0){
        msg+="请选择支付方式\n";
    }
	
	$(".ticket_list").each(function(){
        if($(this).hasClass('order_selected')){
            inv_type=$(this).find('span').attr('inv_type');
        }
    });
    $(".ticket_detail").each(function(){
        if($(this).attr('inv_type')==inv_type){
            $(this).find('.ticket_content').each(function(){
                if($(this).hasClass('ticket_select')){
                    ticket_type=$(this).find('span').attr('ticket_type');
                }
            });
        }
    });
    if(ticket_type==1){
        if($("#invoice_title").val()==""){
            msg+="请输入公司抬头\n";
        }
        if($("#taxpayerNum").val()==""){
            msg+="请输入公司纳税人识别号\n";
        }
    }

    if(shipping_id==0){
        msg+="请选择配送方式\n";
    }else{
        $('[name="pay_id"]').each(function(){
            if($(this).hasClass('current')){
                if($(this).attr('pay_code')=='cod'){
                    shipping = $('#is_cod_'+shipping_id).val();
                    if(shipping==0){
                        msg+="该配送方式不支持货到付款！\n";
                    }
                }
            }
        });
    }
    var last_payment_id = 0;
    $('[name="pay_id"]').each(function(){
        if($(this).attr('checked')) {
            last_payment_id = $(this).attr('pay_value');
            return false;
        }
    })
    if(last_payment_id == 0){
        var total_money = parseFloat($('#must_pay').html() ) || parseFloat( $('#pay_only').html());
        if( total_money > 0 && payment_id > 0 ){
            msg+="请选择支付方式\n";
        }
    }
    order_all_fee=final_goods_price+shipping_fee;
    order_after_rate=order_all_fee*order_rate;
    pay_point_money=parseInt($('#pay_point').val())*integration_rate;
    if(order_after_rate<pay_point_money){
        msg+="积分支付只能占订单的"+order_rate*100+'%';
    }
    if(msg==''){
        var params = '';
        button=$('#suborderbutton').html();
        $('#suborderbutton').html("<font color='#fff'>提交中……</font>");
        
        $.post($app_url+'carts/check_cart_stock&app_page=null&app_fmt=json', params,
            function (s){
                //s=eval('('+s+')');
                if(s.code==0){
                    delaycheck(gotourl,type,sn);
                    return true;
                }else{
                    msg='';
                    if(s.msg!=null && s.msg.length>0){
                        msg+=s.msg;
                    }
                    if(s.gift_list!=null && s.gift_list.length>0){
                        msg+='以下商品：\n';
                        for(i=0;i<s.gift_list.length;i++){
                            msg+=s.gift_list[i].name+'　'+s.gift_list[i].ext_attr+'\n';
                        }
                        msg+='赠品不允许单独购买';
                    }
                    if(s.sell_list!=null && s.sell_list.length>0){
                        msg+='以下商品：\n';
                        for(i=0;i<s.sell_list.length;i++){
                            msg+=s.sell_list[i].name+'　'+s.sell_list[i].ext_attr+'\n';
                        }
                        msg+='已下架';
                    }
                    if(s.stock_list!=null && s.stock_list.length>0){
                        msg='以下商品：\n';
                        for(i=0;i<s.stock_list.length;i++){
                            msg+=s.stock_list[i].name+'　'+s.stock_list[i].ext_attr+'\n';
                        }
                        msg+='库存不足';
                    }
                    if(s.second_list!=null && s.second_list.length>0){
                        msg='以下商品：\n';
                        for(i=0;i<s.second_list.length;i++){
                            msg+=s.second_list[i].name+'\n';
                        }
                        msg+='秒杀已结束';
                    }
                    baison.alert(msg,function(data){location.href='/index/failure?fail_type=order_fail';});
                }
            }, 'json'
        );
    }else{
        baison.alert(msg);
    }
}

function delaycheck(gotourl,type,sn){
    var curr_addr=$("[name='address']");
    var address_id = 0;
    curr_addr.each(function(){
        if($(this).hasClass('order_selected')){
            address_id = $(this).attr('add_value');
        }
    });
    var param='address_id='+address_id+'&payment_id='+payment_id+'&shipping_id='+shipping_id+'&need_bill='+need_bill;
    if($('#remark').length>0){
        param+='&remark='+$('#remark').val();
    }
    
    //发票
    param +="&inv_type="+inv_type;
    param +="&ticket_type="+ticket_type;
    if(ticket_type==1)
        param +="&inv_payee="+$("#invoice_title").val();
        param +="&taxpayerNum="+$("#taxpayerNum").val();

    if(typeof(shipping_fee)!="undefined"){
        param+='&shipping_fee='+shipping_fee;
    }
    if($('#stairs_fee').attr('checked')){
        param+='&stairs_fee=1';
    }
    if($('#fix_fee').attr('checked')){
        param+='&fix_fee=1';
    }
	if($("#use_integral").attr("ck")==1){
        param+='&points_pay=1&integral='+$('#pay_point').val();
    }
    if(use_coupon!=''){
        param+='&coupon='+card_sn;
    }
    if(use_vouchers != 0 || use_zhe){
        param+='&vouchers='+card_sn;
    }
    var best_time='';
    $('[name=best_time]').each(function(){
        if($(this).attr("checked")){
            best_time=$(this).val();
        }
    });
    if(best_time!=''){
        param+='&best_time='+best_time;
    }

    /*
     var user_money = parseFloat($("#user_money").val());
     if(user_money >0) {
     param+='&user_money='+user_money;
     }
     */
    var user_money = 0;//余额支付金额
    if($("[name='use_balance']").hasClass('current')) {
        user_price = my_balance;
        user_money = my_balance;
        param+='&user_money='+user_money;
    }
    if(type!=''){
        param+='&process_type='+type;
    }

    if(sn!=''){
        param+='&goods_sn='+sn;
    }

    // console.log( eval('[' + goods_json + ']'));
    // _hmt.push(['_trackOrder', {
    //             "orderId": s.order_sn,
    //             "orderTotal": $('#must_pay').val(),
    //             "item":eval('[' + goods_json + ']') 
    //         }]);
    $.post($app_url+'orders/add_order&app_fmt=json', param,
        function (s){
            
            if(s.code==0){
                _hmt.push(['_trackOrder', {
                "orderId": s.order_sn,
                "orderTotal": $('#must_pay').val(),
                "item":eval('[' + goods_json + ']') 
            }
            ]);
                location.href=gotourl+"&order_sn="+s.order_sn;
            }else if(s.code<0){
                baison.alert(s.msg,function(data){location.href='/index/failure?fail_type=order_fail';});
                //location.href = '/';
                /*
                 }else if(s.code==1){
                 alert(s.msg);
                 location.href = '/user/index/';
                 */
            }else{
                //baison.alert(s.msg,function(data){location.href='/index/failure?fail_type=order_fail';});
                baison.alert(s.msg);
                $('#suborderbutton').html("<font color='#fff'>提交订单</font>");
                return false;
            }
        }, 'json'
    );
}
/*function check_phone(){
    $("#check_code").focus();
    var pattern=/^1[34578]\d{9}$/;
    var teleNumber=$("#phone").val();
    if(''==teleNumber){
        baison.alert("请输入手机号");
    }else if(!pattern.test(teleNumber)){
        baison.alert("请输入正确的手机!");
    }else{
        $.post('/feike_pc/index/check_phone&app_fmt=json',{teleNumber:teleNumber},function(s){
            s=eval('('+s+')');
            if(s.statusCode==1){
                $(".receipt_info").hide();
                $("#order_quick_login").show();
                get_phoneCode(teleNumber);
            }else if(s.statusCode==2){
                $('#li_code').css("margin-bottom","15px");
                $("#order_quick_login").hide();
                $(".receipt_info").show();
                get_phoneCode(teleNumber);
            }else{
                loacation.reload();
            }
        });
    }
}*/

function quick_login() {
            var params = "app_fmt=json&teleNumber=" + $('#phone').val() + "&checkCode=" + $('#check_code').val();
            Ajax.call('index.php?app_act=feike_pc/index/phone_login', params,
                    function(s) {
                        s = eval('(' + s + ')');
                        if(s['statusCode']==0){
                            location.reload();
                        }else{
                            alert(s['status']);
                        }
                    }
            , 'POST', 'JSON');
}


var index=120;
var code_save_time = 300;
var set,set1;
function change_time() {
    $("#free_code").css("background-color", "#C9CACB");
    $("#free_code").css("cursor", "default");
    $("#free_code").val(index + "秒后重新获取");
    $("#free_code").addClass("free_code");
	
    if (index> 0) {
        index--;
        code_save_time--;
        set1 = setTimeout("change_time()", 1000);
    } else{
        set1 = clearTimeout(set1);
        $("#free_code").css("background-color", "#0C82D9");
        $("#free_code").css("cursor", "pointer");
        $("#free_code").val("重新获取");
        $("#free_code").removeClass("free_code");
		$("#free_code").attr("disabled",false);
        index = 120;      
//        $("#free_code").bind("click", function () {
//                get_phoneCode();
//        });
        
    }
    if(index == 0) {       
        change_save_time();
    }
    //change_save_time();
}
function change_save_time(){
    if(code_save_time>0){
        code_save_time--;
        set = setTimeout("change_save_time()",1000);
    }else{
        set = clearTimeout(set);
        $.post('/feike_pc/index/des_code&app_fmt=json', '', function () {
//            $("#free_code").bind("click", function () {
//                get_phoneCode();
//            });
        });
    }
}

            
function get_phoneCode(){
    $("#check_code").focus();
    var pattern=/^1[3-9]\d{9}$/;
    var teleNumber=$("#phone").val();
    if(''==teleNumber){
        baison.alert("请输入手机号");
    }else if(!pattern.test(teleNumber)){
        baison.alert("请输入正确的手机");
    }else{
        if(code_save_time){//session存在验证码
            $.post('/feike_pc/index/des_code&app_fmt=json','',function(){                               
            });
            //code_save_time = 0;
        }
        set = clearTimeout(set);
        //$("#free_code").unbind("click");
        $("#free_code").val("发送中").attr("disabled",true).css("background-color","#C1C4C6");
        var checknumber= $("#t_checknumber").val();
        $.post('/feike_pc/index/check_phone&app_fmt=json',{teleNumber:teleNumber},function(s){
            s=eval('('+s+')');
            if(s.statusCode==1){//edit 2015年7月1日11:31:00 mhb 同上
                code_save_time = 300;
                index = 120;
                $("#order_quick_login").show();
                $.post("/feike_pc/index/send_phone&app_fmt=json",{checknumber:checknumber,teleNumber:teleNumber},function(data){

					data=eval('('+data+')');
                    if(data.statusCode == 0){
                    change_time();
                    $("#title_msg").html("");
                    $("#free_code").show();
                    $("#li_code").show();
                    }else if(data.statusCode == 2){
                        baison.alert(data.msg);
                    } 
                });
            }else if(s.statusCode==2){
                code_save_time = 300;
                index=120;
                $('#li_code').css("margin-bottom","15px");
                $(".receipt_info").show();
				$("#fix_phone").hide();
                $("#zipcode").hide();
                $.post("/feike_pc/index/send_phone&app_fmt=json",{checknumber:checknumber,teleNumber:teleNumber},function(data){      
                 data=eval('('+data+')');
                if(data.statusCode == 0){
                     change_time();
                    $("#title_msg").html("");
                    $("#free_code").show();
                    $("#li_code").show(); 
                }else if(data.statusCode == 2){
                    baison.alert(data.msg);
                } 
                });

            }else{

                $("#title_msg").html("请手机号保持畅通!");
            }
        });
        
    }
}

function change_goods_num(id, sku_sn, type, goods_price) {
    var n = 0;
    var inputObj = $("#" + id.replace(/,/g, ""));
    if (!(/(^[1-9]\d*$)/.test(inputObj.val())))
    {
        baison.alert("请输入正确的数字", function() {
            location.reload();
        });
        return false;
    }
    if (type == 'add') {
        n = parseInt(inputObj.val()) + 1;
    } else if (type == 'del') {
        n = parseInt(inputObj.val()) - 1;
    } else if (type == 'put') {
        n = parseInt(inputObj.val());
    }
    if (n < 0) {
        n = 0;
    }
	if(n > 10000){
             baison.alert("数量过大，请重新输入数量",function(){location.reload()});
             return false;
    }
    var lprice = inputObj.parent().parent().prev().text().replace("￥","");
    var tprice = inputObj.parent().parent().next().text().replace("￥","");
    if (id != '') {
        var params = 'id=' + id + '&app_fmt=json&app_page=null&type=' + type + '&sku_sn=' + sku_sn + '&num=' + n;
        var url = '/carts/cart_edit';
        if (type == 'del' && n <= 0) {
            baison.confirm('确定要删除这件商品吗？', function(e) {
                if (e) {
                    Ajax.call(url, params,
                            function(s) {
                                if (s.code == 0) {
                                    location.reload();
                                } else {
                                    baison.alert(s.msg);
                                }
                            }
                    , 'POST', 'json');
                }
            });
        } else {
            Ajax.call(url, params,
                    function(s) {
                        if (s.code == 0) {
                            inputObj.val(n);
                            inputObj.parent().parent().next().html("￥"+(n*lprice).toFixed(2));
                            final_goods_price += (lprice*n - tprice);
                            var fp = 0;
                            $(".ttl").each(function(){
                                fp+=parseFloat($(this).text().replace("￥",""));
                            });
                            final_goods_price = fp;
                            order_init();
                            
                            var gn = 0;
                            $(".gn").each(function(){
                                gn+=parseInt($(this).val());
                            });
                            $("#goods_total_num").html(gn);
                            
                            $("#goods_total").html(final_goods_price.toFixed(2));
                            if(goods_price){
                                total += (goods_price*n - tprice);
                            }
                            order_use_integral();
                            $("#intg_enb").html((order_rate*total/integral_rate)>integrals?parseInt(integrals):parseInt((order_rate*total/integral_rate)));
                            $.post(window.location.href, '', function () {});
                        } else {
                            baison.alert(s.msg);
                        }
                    }
            , 'POST', 'json');
        }
    }
}

$(document).ready(function(){
    $("#invoice").click();
    shipping_fee=0;
    shipping_id=0;//select_shipping
    is_shipping_free=0;//shipping_free

    final_price=parseFloat($('#baseprice').html());
    my_balance=parseFloat($("#my_balance").html());

    final_goods_price=final_price;
    var curr_addr=$("li[name=address][checked]");
    if(curr_addr.length>0 && curr_addr.attr('value')!=0){
        get_shipping_payment($("li[name='address'][checked]").attr('value'),$("li[name='address'][checked]"),'')
    };

    $("#free_code").bind("click",function(){
        //check_phone();    
            var teleNumber = $("#phone").val();
            var checknumber= $("#t_checknumber").val();
            $.post("/feike_pc/index/check_graphic_verify&app_fmt=json", {checknumber:checknumber,phone:teleNumber}, function (s) { 
                    s=eval('('+s+')');  
                    if(s.statusCode == 0){
                            $.post("/feike_pc/index/check_send_phone&app_fmt=json", {phone:teleNumber}, function (data) {
                                    data=eval('('+data+')');
                                    if(data.statusCode == 0){
                                            get_phoneCode();
                                    }else if(data.statusCode == 2){
                                            baison.alert('该手机号短信发送过于频繁，请稍候再试');
                                    }      
                            });
                    }else{
                            baison.alert(s.status);
                    }               
            });              
    });
	
	$(".ticket_content").click(function(){
    	$(this).addClass("ticket_select").siblings().removeClass("ticket_select");
    	 ticket_type=$(this).find('span').attr('ticket_type');
    	if($(this).attr('rel')==1){
    		
    	  $("#commany_name").hide();
    	}else{
    		$("#commany_name").show();
    	}   	
    });
    
	$("#gift_voucher").click(function(){
		if( $(this).attr("value")==0 ){
                        $("#gift_voucher").addClass("current");
			$(this).attr("value","1");
			$(this).parent().parent().find(".gift-item").show();
			$(".gift-form").html("<span>填写优惠券码：</span><input type='text' id='voucher_value' class='txt' /><input type='button' class='btnOk fm pointer' onclick='check_voucher();' value='使用' />");
		}
		else{
			cancel_voucher();
			$("#gift_voucher").removeClass("current");
			$(this).attr("value","0");
			$(this).parent().parent().find(".gift-item").hide();
		}
		
    });
	
	$(window).scroll(function(){
		if(document.getElementById("suborderbutton")) {
        var bt_top = document.getElementById("suborderbutton").getBoundingClientRect().top;
        var bt_height = document.getElementById("suborderbutton").offsetHeight;
        var wb_height = document.documentElement.clientHeight; 
        if(bt_top + bt_height <= wb_height && bt_top > 0 ) {
            $("#ceilinglamp_current").hide();
        }else{
            $("#ceilinglamp_current").show();
        }
		}
    });
});   