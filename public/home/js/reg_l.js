

$(document).ready(function() {
	var emailInfo = {
	        email:function(){
	            return jQuery("#t_email").val();
	        }
	 };
	var t_emailInfo = {email:function(){ return jQuery("#t_reg_email").val();}};
	var nickname = {nickname:function(){ return jQuery("#t_nickname").val();}};
	var  t_emailremoteInfo= GetRemoteInfo('/index.php?app_act=user/index/do_check_user_id', t_emailInfo);  
	var  nicknameremoteInfo= GetRemoteInfo('/index.php?app_act=user/index/do_check_nickname', nickname);  
	//var  emailremoteInfo= GetRemoteInfo('/index.php?app_act=user/index/do_check_email', emailInfo);  
       
	$("#t_register").validate({
		event: "blur", 
		rules: {
			t_reg_email:{
				required:true,
				isMobile:true,
				remote:t_emailremoteInfo 
			},	
			t_nickname:{
				required:true,
				string:true,
				remote:nicknameremoteInfo 
			},
			t_reg_pwd1:{
				required: true,
				string:true,    
				minlength:6,
				maxlength:20
			},
			t_reg_pwd2:{
				required: true,
				string:true,    
				minlength:6,
				maxlength:20,
				equalTo:"#t_reg_pwd1" 
			},
			tr_checknumber1:{
				required: true,
				string:true
			}
		},  
		messages: { 
			t_reg_email: {    
				required:"手机号不能为空",    
				isUserName:"请输入合法手机号" 
			},			
			t_reg_pwd1: {    
				required: "密码不能为空",    
				minlength: jQuery.validator.format("密码不能小于 {0}位数")   
			},			
			t_nickname:{
				required:"昵称不能为空"
			},			
			t_reg_pwd2:{
			   required: "重复密码不能为空",  
				minlength: jQuery.validator.format("密码不能小于 {0}位数"),
				equalTo	:"两次密码输入不一样"
			},
			tr_checknumber1: {    
				required: "图文验证不能为空" 
			}
	    },
	    showErrors: showErrors,
		focusInvalid: false,    
		onkeyup: false,
		submitHandler: function(form){
			$('#t_register_button').val('注册申请中,请稍后...');
	    	var params="app_fmt=json&nickname="+base64encode(encodeURI($('#t_reg_email').val(),'utf-8'))+"&tel="+$('#t_reg_email').val()+"&password="+base64encode($('#t_reg_pwd1').val())+"&repassword="+base64encode($('#t_reg_pwd2').val())+"&checknumber="+$('#tr_checknumber').val()+"&checknumber1="+$('#tr_checknumber1').val()+"&u="+request('u')+"&c="+request('c');	

	    	Ajax.call('/index.php?app_act=user/index/do_adduser', params, 
					function (s){
						s = eval('(' + s + ')');
		                if(s['statusCode']==1) {
		                    baison.alert(s['status']);
		                    location.href="/user/index/active"
		                }else{
		                    if(s['statusCode']==0) {
		                        baison.alert(s['status']);
		                        location.href="/mem_center/index/do_index";									
		                    }else{
								$('#t_register_button').val('同意协议并注册');
		                        baison.alert(s['status']);
		                        if(s['statusCode'] == -102){
		                            $("#tregvCode").click();
		                        }
		                        $("#misun_btn_agree").attr('class','misun_btn_agree1');
		                    }
		                }
				
				   }
			, 'POST', 'JSON');
		}
		
	});
});