function cart_set_close(key) {
    $("#set_info_" + key).hide();
}
function cart_set_open(key) {
    $("#set_info_" + key).show();
}
function cart(id,sku_sn,num,type){
	if(id=='all'){
		id='';
		$('input[type=checkbox][name=check]').each(function(){
			id += ","+this.value;
		});
	}else if(id=='check'){
		id='';
		$('input[type=checkbox][name=check]').each(function(){
			if(this.checked){
				id += ","+this.value;
			}
		});
	}else if(id=='do_one'){
		id = sku_sn;
	}
	if(id!=''){		
		var params ='id='+id+'&app_fmt=json&app_page=null&type='+type+'&sku_sn='+sku_sn+'&oldnum='+num;
		var url='/carts/cart_add_del';
		if( type=='del' && num<=1 ){
			baison.confirm('确定要删除这件商品吗？',function(e){
				if(e){
					Ajax.call(url,params, 
							function (s){
								if(s.code==0){
									location.reload();
								}else{
									baison.alert(s.msg);
								}
						   }
					, 'POST', 'json');
				}
			});
		}else{
			Ajax.call(url,params, 
					function (s){
						if(s.code==0){
							location.reload();
						}else{
							baison.alert(s.msg);
						}
				   }
			, 'POST', 'json');
		}
	}
}
function cart_edit(id,sku_sn,type){
	
        var n=0;
        var inputObj = $("#"+id.replace(/,/g,""));
		if (!(/(^[1-9]\d*$)/.test(inputObj.val())))
        {       
            baison.alert("请输入正确的数字",function(){location.reload()});
            return false;
        }
        if(type=='add'){
            n = parseInt(inputObj.val())+1;
        }else if(type=='del'){
            n = parseInt(inputObj.val())-1;
        }else if(type=='put'){
            n = parseInt(inputObj.val());
        }
        if(n<0){
            n = 0;
        }
		if(n > 10000){
             baison.alert("数量过大，请重新输入数量",function(){location.reload()});
			 
             return false;
		}
        var lprice = (parseFloat(inputObj.parent().parent().prev().text().replace("￥",""))).toFixed(2);
        
	if(id!=''){		
		var params ='id='+id+'&app_fmt=json&app_page=null&cart_type=edit&type='+type+'&sku_sn='+sku_sn+'&num='+n;
		var url='/carts/cart_edit';
		if( type=='del' && n==0 ){
			baison.confirm('确定要删除这件商品吗？',function(e){
				if(e){
					Ajax.call(url,params, 
							function (s){
								if(s.code==0){
									location.reload();
								}else{
									baison.alert(s.msg);
								}
						   }
					, 'POST', 'json');
				}
			});
		}else{
			Ajax.call(url,params, 
					function (s){
						if(s.code==0){
							//location.reload();
                                                        inputObj.val(n);
                                                        inputObj.parent().parent().next().html("￥"+(n*lprice).toFixed(2));
                                                        var total_price = 0;
                                                        $('input[type=checkbox][name=check]').each(function(){
                                                            if($(this).attr('checked')){
                                                                total_price = (parseFloat(total_price) + parseFloat($(this).parent().parent().children().last().prev().text().replace("￥",""))).toFixed(2);
                                                            }
                                                        });
                                                        $("#total_price").html(total_price);
						}else{
							baison.alert(s.msg);
						}
				   }
			, 'POST', 'json');
		}
	}
}
var pr_id = '';
var goods_sn = '';
var color_code = '';
var size_code = '';
function choose_gift(obj, goods_sn) {
    //pr_id=prid;
    //goods_sn=$(obj).val();
    Ajax.call('/carts/get_gift_info&app_fmt=json&app_page=null&goods_sn=' + goods_sn, '',
            function (s) {
                s = eval('(' + s + ')');
                var option = "";
                //var color = new array();
                for (i = 0; i < s.length; i++) {
                    if (s[i].color_code) {
                        if (i == 0) {
                            option = "<option value=''>选择颜色</option>";
                        }
                        option += "<option value='color_code=" + s[i].color_code + "'>" + s[i].color_name + "</option>";
                    } else if (s[i].size_code) {
                        if (i == 0) {
                            option = "<option value=''>选择尺码</option>";
                        }
                        option += "<option value='color_code=" + s[i].size_code + "'>" + s[i].size_name + "</option>";
                    } else {
                        var temp = s[i].ext_attr;
                        if (temp.length >= 1) {
                            if (i == 0) {
                                option = "<option value=''>选择" + temp[0].name + "</option>";
                            }
                            if (temp.length == 1) {
                                $(obj).attr('id', goods_sn);
                                $(obj).removeAttr('onchange');
                                $.each(temp[0].values, function (k, v) {
                                    option += "<option value='" + s[i].sku_sn + "'>" + v + "</option>";
                                })
                            } else {
                                $.each(temp[0].values, function (k, v) {
                                    option += "<option value='ext_code=" + temp[0].code + "&ext_value=" + k + "'>" + v + "</option>";
                                })
                            }

                        } else {
                            if (i == 0) {
                                option = "<option value=''>选择条码</option>";
                            }
                            option += "<option value='" + s[i].sku_sn + "'>" + s[i].sku_sn + "</option>";
                        }
                    }
                }
                $(obj).html(option);
            }, 'GET', '');
}

function choose_color(obj, goods_sn) {
    color_code = $(obj).val();
    //color_code=$("select[goods_sn='"+goods_sn+"']").val();
    if (color_code) {
        color_code = '&' + color_code;
    }
    Ajax.call('/carts/get_gift_info&app_fmt=json&app_page=null&goods_sn=' + goods_sn + color_code, '',
            function (s) {
                s = eval('(' + s + ')');
                var option = '';

                for (i = 0; i < s.length; i++) {
                    if (s[i].size_code && color_code.indexOf('color_code')) {
                        if (i == 0) {
                            option = "<option value=''>选择尺码</option>";
                        }
                        option += "<option value='color_code=" + s[i].size_code + "'>" + s[i].size_name + "</option>";
                    } else {
                        var temp = s[i].ext_attr;
                        if (temp.length >= 1) {
                            if (i == 0) {
                                option = "<option value=''>选择" + temp[0].name + "</option>";
                            }
                            if (temp.length == 1) {
                                $(obj).attr('id', goods_sn);
                                $(obj).removeAttr('onchange');
                                $.each(temp[0].values, function (k, v) {
                                    option += "<option value='" + s[i].sku_sn + "'>" + v + "</option>";
                                })
                            } else {
                                $.each(temp[0].values, function (k, v) {
                                    option += "<option value='ext_code=" + temp[0].code + ":" + k + "'>" + v + "</option>";
                                })
                            }

                        } else {
                            if (i == 0) {
                                option = "<option value=''>选择条码</option>";
                            }
                            option += "<option value='" + s[i].sku_sn + "'>" + s[i].sku_sn + "</option>";
                        }
                    }
                }
                if (option) {
                    option = '<p class="mb5"><select>' + option + '</select></p>';
                }
                $("#gift_choose").append(option);
            }, 'GET', '');
}

function choose_size(obj) {
    size_code = $(obj).val();
}
function add_shop_cart(goods_sn) {
    var select_opt = new Array();
    var i = 0;
    $("#gift_" + goods_sn).find('select').each(function () {
        select_opt[i] = $(this).find('option:selected').html();
        i++;
        //select_opt+=$(this).find('option:selected').html()+',';
    });

    select_opt = select_opt.join(',');//.substring(0,select_opt.length-1);

    if (select_opt == '') {
        baison.alert('请选择赠品属性!');
    }
    var sku_sn = '';
    $.each(ext_all_values, function (k, v) {

        if (select_opt == v) {
            sku_sn = k;
        }
    });


    var sku_sn = $("#" + goods_sn).val();
    if ($('select[name=gift][goods_sn=' + goods_sn + ']').val() == '') {
        baison.alert('请选择赠品颜色');
        return false;
    }
    if (sku_sn == 0 || sku_sn == '') {
        baison.alert('请选择赠品属性');
        return false;
    }
    $("#add_shop_cart").attr('disabled', true);
    Ajax.call('/carts/add_gift_to_cart&app_fmt=json&app_page=null&sku_sn=' + sku_sn + '&pr_id=' + pr_id, '',
            function (s) {
                if (s.code == 0) {
                    location.reload();
                } else {
                    $("#add_shop_cart").attr('disabled', false);
                    baison.alert(s.msg);
                }
            }, 'POST', 'json');
}
function order(choose_gift, is_login, loginurl, gotourl, type) {
    //edit 2015年7月22日10:24:23 mhb 
    var items = $('input[type=checkbox][name=check]');
    if(items.length == 0 || !items){
        baison.alert("购物车为空,点击后返回首页！",function(){
            location.href = '/';
        });
        return false;
    }
    //edit end
    var sn = '';
    if (type != '') {
        sn = request('id');
    }
    //edit 2015年7月15日09:24:33 mhb 取消下面登录代码块注释

    if (is_login == '') {
        location.href = loginurl;
        baison.alert('请登录后继续操作！', function () {
            location.href = loginurl;
        });
        return false;
    }

    if (choose_gift == 'no') {
        baison.confirm('您还有赠品没有选择，您确认现在要结账吗？', function (e) {
            if (e) {
                check_cart_stock();
            } else {
                return false;
            }
        });
    } else {
        /*
         if( type != 'returns' && $('input[type=checkbox][name=check]').length < 1 ){
         baison.alert('您还没有选购任何商品！',function(){
         location.href='/';	
         });
         return false;
         }
         */
        check_cart_stock();
    }
    function check_cart_stock() {
        var url = '/carts/check_cart_stock&app_fmt=json&app_page=null';
        if (type != '') {
            url = url + '&type=' + type + '&order_sn=' + sn;
        }
        
        Ajax.call(url, '',
                function (s) {
                    if (s.code == 0) {
                        //edit 2015年7月22日10:24:23 mhb 
                        var id = '';
                        $('input[type=checkbox][name=check]').each(function () {
                            if (this.checked) {
                                id += "," + this.value;
                            }
                        });
                        if (id == '') {
                            baison.alert("请选择商品！");
                            return false;
                        }
                        gotourl += "&rec_id=" + id;
                        //end edit
                        location.href = gotourl;
                    } else {
                        var msg = '';
                        if (s.msg != null && s.msg.length > 0) {
                            msg += s.msg;
                        }
                        if (s.gift_list != null && s.gift_list.length > 0) {
                            msg += '以下商品：\n';
                            for (i = 0; i < s.gift_list.length; i++) {
                                msg += s.gift_list[i].name + '　' + s.gift_list[i].ext_attr + '\n';
                            }
                            msg += '赠品不允许单独购买';
                        }
                        if (s.sell_list != null && s.sell_list.length > 0) {
                            msg += '以下商品：\n';
                            for (i = 0; i < s.sell_list.length; i++) {
                                msg += s.sell_list[i].name + '　' + s.sell_list[i].ext_attr + '\n';
                            }
                            msg += '已下架';
                        }
                        if (s.stock_list != null && s.stock_list.length > 0) {
                            msg += '以下商品：\n';
                            for (i = 0; i < s.stock_list.length; i++) {
                                msg += s.stock_list[i].name + '　' + s.stock_list[i].ext_attr + '\n';
                            }
                            msg += '库存不足';
                        }
                        if (s.second_list != null && s.second_list.length > 0) {
                            msg = '以下商品：\n';
                            for (i = 0; i < s.second_list.length; i++) {
                                msg += s.second_list[i].name + '\n';
                            }
                            msg += '秒杀已结束';
                        }
                        baison.alert(msg);
                    }
                }, 'GET', 'json');
    }
}
$(document).ready(function () {
    $('#checkAll').click(function () {
        var allCheck = $('input[type=checkbox][name=check]');
        if (this.checked) {
            allCheck.each(function () {
                this.checked = true;
            });
        } else {
            allCheck.each(function () {
                this.checked = false;
            });
        }
    });
});