$(document).ready(function() {
	//登录、注册、找回密码表单样式
	$(".loginRegister input,.loginRegister label").focus(function(){
		$(this).closest("li").addClass("focus").siblings().removeClass("focus");
	});
	$("#login_name input").focus(function(){
		$(this).closest("li").removeClass('error').andSelf().siblings(".prompt").find("span").text("会员名/邮箱地址/手机号");
	});
	$("#login_pw input").focus(function(){
		$(this).siblings(".prompt").hide();
	});
	
	$("#d_password").keypress(function(e){
		if(e.which==13){
			$('#login_button').click();
			return false;
		}
	})
	$("#phone_login").validate({
		submitHandler:function(form){
			if($('#d_user_phone').val()==""){
        		$('#d_user_phone').css("border","1px solid #f64c3b");
        		$("#tel_p_name").text("手机不能为空");
        		$("#tel_p_name").removeClass('none');
        		return;
        	}
			var params="app_fmt=json&teleNumber="+$('#d_user_phone').val()+"&checkCode="+$('#d_checkcode').val();
			Ajax.call('index.php?app_act=feike_pc/index/phone_login', params, 
	                function (s){
	                    s = eval('(' + s + ')');
                        //console.log(s);
	                    switch(s['statusCode']){
	                        case 0:
	                        	window.location.reload();
	                        	if(request('return')=='') {
	                                if($("#returnurl").val()==''){
	                                    location.href='/';
	                                }else{
	                                    location.href=$("#returnurl").val();
	                                }
	                            }else {
	                                location.href=URLdecode(request('return'));
	                            }
	                            break;
	                        case 20:
	                        	baison.alert(s['status']);
	                        	location.href='/';
	                            break;
	                        case 13:
								baison.alert(s['status']);
	                            break;
	                        case -110:
	                        	$("#tel_user_name").addClass("error_tip");
	                        	
								$("#tel_p_name").text("请输入邮箱或手机号码！");
	                        	//baison.alert(s['status']);
	                            return false;
	                            break;
	                        case -120:
	                        	$("#tel_psw").addClass("error_tip");
	                        	$("#tel_p_psw").removeClass('none');
	                        	$("#tel_p_psw").text("验证码不正确");
	                        	//baison.alert(s['status']);
	                            return false;
	                            break;
	                        case -100:
                                    $("#tel_psw").addClass("error_tip");
                                    $("#tel_p_psw").removeClass('none');
                                    $("#tel_p_psw").text("请输入动态验证码");
	                            //baison.alert(s['status']);
	                            $("#dvCode").click();
	                            break;
	                        case -135:
	                            baison.alert(s['status']);
	                            return false;
	                            break;
	                        default:
	                            baison.alert(s['status']);							
	                    }
	                }
	                , 'POST', 'JSON');
		}
	});
    $("#d_login").validate({
    	
        focusInvalid: false,    
        onkeyup: false,
        submitHandler: function(form){
        	if($('#d_user_name').val()==""){
        		$('#d_user_name').css("border","1px solid #f64c3b");
        		$("#login_name_p").text("用户名不能为空");
        		$("#login_name_p").removeClass('none');
        		return;
        	}
        	if($('#d_password').val()==""){
        		$('#d_password').css("border","1px solid #f64c3b");
        		$("#login_pw_p").text('密码不能为空');
        		$("#login_pw_p").removeClass('none');
        		return;
        	}
            var params="&app_fmt=json&user_name="+base64encode(encodeURI($('#d_user_name').val(),'utf-8'))+"&password="+base64encode($('#d_password').val());
            Ajax.call('/index.php?app_act=user/index/do_login', params, 
                function (s){
                    s = eval('(' + s + ')');
                    switch(s['statusCode']){
                        case 0:							
                            //location.reload();
                            if(request('return')=='') {
                                if($("#returnurl").val()==''){
                                    location.href='/';
                                }else{
                                    location.href=$("#returnurl").val();
                                }
                            }else {
                                location.href=URLdecode(request('return'));
                            }
                            break;
                        case -150:
							//账号未激活
                            //$("#login_name").addClass("error");
							//$("login_name_p").text("账号未激活！");
                            //location.href='/user/index/active';
                            baison.alert(s['status']);
                          
                            break;
                        case -110:
							//账号不存在
                            $("#user_name").addClass("error_tip");
							$("#login_name_p").text(s['status']);
							$("#login_name_p").removeClass('none');
                            
//                        	baison.alert(s['status']);
                            return false;
                            break;
                        case -120:
							//密码错误！
//                        	baison.alert(s['status']);
                            //$("#login_pw").addClass("error").find('.prompt').show();
                        	$("#user_psw").addClass("error_tip");
                        	$("#login_pw_p").text(s['status']);
                        	$("#login_pw_p").removeClass('none')
                            return false;
                            break;
                        case -100:
							//验证码错误！
                            baison.alert(s['status']);
                            $("#dvCode").click();
                            break;
                        default:
                            baison.alert(s['status']);
                            break;							
                    }
                }
                , 'POST', 'JSON');
        }
    });

    var emailInfo = {
        email:function(){
            return jQuery("#email").val();
        }
    };
	
    var  emailremoteInfo= GetRemoteInfo('/index.php?app_act=user/index/do_check_email', emailInfo);  

    $("#active").validate({
        focusInvalid: false,    
        onkeyup: false,
        submitHandler: function(form){
            var params="user_name="+$('#ac_user_name').val()+"&password="+$('#ac_password').val()+"&active_code="+$('#checkac_number_active').val();
		
            Ajax.call('/index.php?app_act=user/index/do_active', params, 
                function (s){
                    s = eval('(' + s + ')');
                    if(s.statusCode !=0) {
                        baison.alert(s.status); 
                    }else {
                        baison.alert(s.status); 
                        location.href="/mem_center/index/do_index";	
                    }
                }
                , 'POST', '');
        }
    });

});