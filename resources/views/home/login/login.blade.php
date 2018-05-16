@extends('layout.home')

@section('title',$title)

@section('content')

<script src="/home/js/jquery.validate.js" type="text/javascript"></script>
<script src="/home/js/login.js" type="text/javascript"></script>
<script type="text/javascript" src="/home/js/auto-img.js"></script>
<script type="text/javascript" src="/home/js/public.js"></script>
<script src="/home/js/free_code.js" type="text/javascript"></script>
<script type="text/javascript">
    $(function () {
        tabFun(".login_tab a", ".login_form>form", "current");
        $("#login_button").click(function () {
            $(".login_tab a").each(function(){
                if($(this).hasClass("current")){
                    var num =$(this).index();
                    $(".login_form>form").eq(num).submit(); 
                }
            });
        });
    $("#free_code").bind("click", function () {
            var phone_value = $("#d_user_phone").val();
            var checknumber= $("#t_checknumber").val();
             if(!/^1[3-9]\d{9}$/.test(phone_value)){
                baison.alert("请输入正确的手机");
                return;
            }
            $.post("/feike_pc/index/check_graphic_verify&app_fmt=json", {checknumber:checknumber,phone:phone_value}, function (s) { 
                    s=eval('('+s+')');  
                    if(s.statusCode == 0){
                            $.post("/feike_pc/index/check_send_phone&app_fmt=json", {phone:phone_value}, function (data) {
                                    data=eval('('+data+')');
                                    if(data.statusCode == 0){
                                        get_phoneCode(phone_value); 
                                    }else if(data.statusCode == 2){
                                        baison.alert('该手机号短信发送过于频繁，请稍候再试');
                                    }      
                            });
                    }else{
                        baison.alert(s.status);
                    }                
            });              
        });
        $("#d_user_name").focus(function () {
            $('#d_user_name').css("border", "");
            $("#login_name_p").addClass('none');
            $("#user_name").removeClass("error_tip");
            $("#login_name_p").text("");
        });
        $("#d_password").focus(function () {
            $('#d_password').css("border", "");
            $("#user_psw").removeClass("error_tip");
            $("#login_pw_p").addClass('none');
            $("#login_pw_p").text("");
        });
        $("#d_user_phone").focus(function () {
            $('#d_user_phone').css("border", "");
            $("#tel_user_name").removeClass("error_tip");
            $("#tel_p_name").addClass('none');
            $("#tel_p_name").text("");
        });
        $("#d_checkcode").focus(function () {
            $('#d_checkcode').css("border", "");
            $("#tel_psw").removeClass("error_tip");
            $("#tel_p_psw").addClass('none');
            $("#tel_p_psw").text("");
        });
    });
</script>


<div class="w1240 bc wrapper">
    <div class="reg_wapper bc">
        <h1 class="f20 tc fm blue">欢迎登录飞科商城</h1>
        <div class="login_tab fm f16 clearfix mt5">
            <a href="javascript:void(0)" class="in_b current fl tc">注册用户登录</a>
            <a href="javascript:void(0)" class="in_b fl tc">手机动态验证码登录</a>
        </div>
        <div class="login_content bc">
            <div class="login_form">
            <form action="/home/login/dologin" id="d_login" name="d_login" method="post">
                <ul class="user_login bc" id="login_user">
                    <li class="user pr "><span class="in_b pa"></span>
                        <input type="text" name="d_user_name" id="d_user_name" class="txt f1" placeholder="邮箱/手机"  maxlength="64"/>
                        <h2 class="red pa none" id="login_name_p"></h2>
                    </li>

                    <li class="pwd pr"><span class="in_b pa"></span>
                        <input type="password" id="d_password" class="txt f1" placeholder="密码" value="" maxlength="16"/>
                        <h2 class="red pa none" id="login_pw_p"></h2>
                    </li>
                </ul>
            </form>
            
            <form class="none" id="phone_login" name="phone_login" method="post">
                <ul class="user_login bc" id="login_phone">
                    <li class="ccode pr clearfix"><span class="in_b pa"></span>
                        <input type="text" class="txt code fl" id="t_checknumber" name="dr_checknumber" maxlength="4" value=""  placeholder="请输入验证码"/>
                        <div class="printpic fl">
                        <img class="dynamic" id="dregvCode" src="/home/picture/ead0b0f432fb4b4ca52916c174e2d69f.gif" onclick="jQuery('#dregvCode').attr('src','/printpic/do_index?type=register&amp;'+ Math.random());" alt="图片" /> 
                        <a href="javascript:void(0);" onclick="jQuery('#dregvCode').attr('src','/printpic/do_index?type=register&amp;'+ Math.random());">换一张</a>
                        </div>
                    </li>
                    <li class="user pr "><span class="in_b pa"></span>
                        <input type="text" class="txt phone" name="d_user_phone" id="d_user_phone" placeholder="请输入手机号" maxlength="11" />
                        <h2 class="red pa none" id="tel_p_name"></h2>
                    </li>
                    <li class="mcode pr clearfix"><span class="in_b pa"></span>
                        <input type="text" class="txt code fl" id="d_checkcode" value=""  placeholder="请输入手机验证码" maxlength="6" />
                        <input type="button" id="free_code" value="获取动态验证码" class="fcode  fl" />
                        <h2 class="red pa none" id="tel_p_psw"></h2>
                    </li>
                </ul>
            </form>
            </div>
                
            <div class="loginBtn bc"><input type="button" class="block bc fm mt10" id="login_button" value="登录"  /></div>

            <div class="clearfix reg_forget">
                <span class="fl pr pl20"><input type="checkbox" class="pa" />两周内免登录</span>|
                <a href="/user/index/find_pwd" class="blue">忘记密码？</a>
            </div>
            <div class="go_reg clearfix">
                <span><a href="/user/index/register" class="block blue">立即注册</a></span>
                <span>还没有账号？</span>
            </div>
            
                <!-- 联合登录 -->
                <div class="quick_login">
                <fieldset class="quick_login_tit">
                    <legend align="center" class="quick_login_txt">其他方式登录</legend>
                </fieldset>
                <ul class="account_list clearfix bc">
                                        <li>
                        <a target="_blank" class="wx in_b ml8" href="https://open.weixin.qq.com/connect/qrconnect?appid=wx32822e49411f40bf&redirect_uri=http%3A%2F%2Fwww.flyco.com%2Frespond%2Fdo_login%3Flogin_type%3Dwx&response_type=code&scope=snsapi_login&state=95c75dbd629930e22939e73a251a8f10#wechat_redirect" title="微信"></a>
                    </li>
                                                            <li>
                        <a target="_blank" class="qq in_b ml8" href="https://graph.qq.com/oauth2.0/authorize?response_type=code&client_id=101215078&redirect_uri=http%3A%2F%2Fwww.flyco.com%2Frespond%2Fdo_login%3Flogin_type%3Dqq&state=a0af1e787cda415cf0e7714c76076e4f&scope=get_user_info" title="QQ"></a>
                    </li>
                                                            <li>
                        <a target="_blank" class="sina in_b ml8" href="https://api.weibo.com/oauth2/authorize?client_id=2419619432&redirect_uri=https%3A%2F%2Fwww.flyco.com%2Frespond%2Fdo_login%3Flogin_type%3Dsina&response_type=code" title="新浪微博"></a>
                    </li>
                                                            <li>
                        <a target="_blank" class="alipay in_b ml8" href="https://mapi.alipay.com/gateway.do?_input_charset=utf-8&partner=2088701048088053&return_url=https://www.flyco.com/respond/do_login?login_type=alipay&service=alipay.auth.authorize&target_service=user.auth.quick.login&sign=1e9cca6ab276b302ea5b47355ccf162a&sign_type=MD5" title="支付宝"></a>
                    </li>
                                        
                                    </ul>
                </div>
                <!-- 联合登录 end -->
        </div>
    </div>
</div><!--</div>-->

@endsection