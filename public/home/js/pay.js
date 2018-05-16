/**
*	追加支付网关
*/
function add_pay_gate(gate_id,order_sn){
	if(!Utils.isEmpty(gate_id)){
		jQuery('#GateId').val(gate_id);
	}
	var order_sn =order_sn;
	if(order_sn==undefined||order_sn==""){
		baison.alert("订单编码不正确！");return false;
	}	
	$.ajax({
		 url : '/pay/check_order&app_page=null&app_fmt=json&order_sn='+order_sn,
	        type : "POST",
	        dataType : "JSON",
	        cache : false,
	        async: false,
	        data : '',
	        success : function(data){
				if(typeof(data) == 'string'){                 		
		      		s = eval('(' + data + ')');
		       	}
		   		if(s.code){
					jQuery("#pay_form").submit();
					countrol_open_hui('1');
		   		}else{
		   			baison.alert(s.msg);
		       		return false;
		   		}
			}
	});
}
/**
 * 控制遮拦层
 */
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
function common_pay_gate(type,gate_id)
{
	var order_sn = request('order_sn');
	if(order_sn==undefined||order_sn==""){
		baison.alert("订单编码不正确！");return false;
	}
	var params={
		"sn":order_sn,
		"act":"check"
	};
	if(gate_id){
		jQuery("#gateid").val(gate_id);
	}

	jQuery("#pay_form").submit();
}

function goto_bank(params,obj,gotype){
	var order_sn = request('order_sn');
	if(order_sn==undefined||order_sn==""){
		baison.alert("订单编码不正确！");return false;
	}
	$.ajax({
        url : '/pay/check_order&app_page=null&app_fmt=json&order_sn='+order_sn,
        type : "POST",
        dataType : "JSON",
        cache : false,
        async: false,
        data : '',
        success : function(data){        	
        	if(typeof(data) == 'string'){                 		
          		data = eval('(' + data + ')');
           	}
        	if(data.code){
       			switch(gotype){
       				case 'form':       					  					
       					$("#"+params).submit();
       					break;
       				case 'url':
       					baison.alert("前往去支付...");
       					location.href=params;
       					//window.open(params);
       					break;
       				default:
       					break;
       			}
       			if(obj){
       				obj.disabled=true;
       			}
       			return true;
       		}else{
       			baison.alert(data.msg);
           		return false;
       		}            
        }
    });
}

function showtab(id,content,current){	
	var conNum = 0;
	$(id).click(function(){
		$(this).addClass(current).siblings().removeClass(current);
		conNum =$(this).index()-1;
		$(content+conNum).addClass(current).siblings().removeClass(current);	
	});	
}