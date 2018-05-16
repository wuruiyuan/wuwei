    var index = 10;
    var code_save_time  =   0;
    var set,set1;
    function change_time() {
        $("#free_code").css("background-color", "#C9CACB");
        $("#free_code").val(index + "秒后重新获取");
        $("#free_code").addClass("free_code");
        if (index > 0) {
            index--;
            set = setTimeout("change_time()", 1000);
        } else {
            set = clearTimeout(set);
            $("#free_code").css("background-color", "#0C82D9");
            $("#free_code").attr("disabled",false);
            $("#free_code").val("重新获取");
            $("#free_code").removeClass("free_code");
			
            index = 60;
        }
    }
    
    function code_change_time(){
        if(code_save_time>0){
            --code_save_time;
            set1 = setTimeout("code_change_time()",1000);
        }else{
            set1 = clearTimeout(set1);
            code_save_time = 300;
            $.post('/feike_pc/index/des_code&app_fmt=json', '', function () {
//                $("#free_code").bind("click", function () {
//                    get_phoneCode();
//                });
            });
        }
    }

    function get_phoneCode(phone) {
        var pattern = /^1[3-9]\d{9}$/;
        if (phone == "") {
            baison.alert("请输入手机号");
        } else if (!pattern.test(phone)) {
            baison.alert("请输入正确的手机号");
        } else {
            $("#free_code").val("发 送 中");
			$("#free_code").css("background-color","#C1C4C6");
			$("#free_code").attr("disabled",true).addClass("free_code");
            if(code_save_time){
                $.post('/feike_pc/index/des_code&app_fmt=json', '', function () {

                });
            }
            var checknumber= $("#t_checknumber").val();
            $.post("/feike_pc/index/send_phone&app_fmt=json", {teleNumber: phone,checknumber:checknumber}, function (data) {  
                data=eval('('+data+')');
                if(data.statusCode == 0){
                                index = 60;
                                code_save_time = 300;
                                change_time();
                                code_change_time(); 
                }else if(data.statusCode == 2){
                    baison.alert(data.msg);
                } 
            });
        }
    }

$(document).ready(function() {	
	$(".phone").bind('input',function(e){ 
		if(/^1[3-9]\d{9}$/.test($('.phone').val())){
			$("#free_code").css({"background-color":"#0C82D9","color":"#ffffff"});
			$("#free_code").attr("disabled",false);
		}else{
			$("#free_code").css({"background-color":"#C9CACB","color":"#999999"});	
			$("#free_code").attr("disabled",true);
		}
	} );
});

