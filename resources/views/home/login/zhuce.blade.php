@extends('layout.home')

@section('title',$title)

@section('content')
<div class="w1240 bc wrapper">
        <div class="login_wapper bc">
            <h1 class="tc f24 blue fm">欢迎注册飞科商城</h1>
            <if 1="=2"><!-- 隐藏选择 -->
        <!--     <div class="reg_tab tc mt15"> 
            
                 <a href="javascript:;" class="mr30 in_b">用电子邮箱注册</a> 
                 <a href="javascript:;" class="in_b current">用手机号码注册</a> 
             </div> -->
                 </if>
             
        <div class="reg_content bc">
            <div class="reg_form">
            <if 1="=2"><!-- 隐藏邮箱 -->
                <!-- <form class="none" id="d_register" name="d_register" method="post">
                    <ul class="user_reg bc">
                        <li class="ccode pr">
                            <span class="in_b pa"></span>
                            <input type="text" class="txt code fl" id="t_checknumber" name="t_checknumber" maxlength="4" placeholder="请输入验证码"/>
                            <div class="printpic fl" >
                                <img class="dynamic" id="dregvCode" src="picture/ead0b0f432fb4b4ca52916c174e2d69f.gif" onclick="jQuery('#dregvCode').attr('src', '/printpic/do_index?type=register&amp;' + Math.random());" alt="图片" />
                                <a href="javascript:;" class="blue" id="change_dregvCode" onclick="jQuery('#dregvCode').attr('src', '/printpic/do_index?type=register&amp;' + Math.random());">换一张</a>
                            </div>
                        </li>
                        <li class="user pr">
                            <span class="in_b pa"></span>
                            <input type="text" class="txt" name="d_reg_email" id="d_reg_email" maxlength="64" show="class" placeholder="请输入邮箱"/>
                            <p style="margin-left: 40px;display: none;" id="checkd_reg_email"></p>
                        </li>
                        <li class="pwd pr">
                            <span class="in_b pa"></span>
                            <input class="txt" type="password"  name="d_reg_pwd1" id="d_reg_pwd1" maxlength="16" show="class" placeholder="请输入密码"/>
                            <p class="none pl30 colorPink" id="checkd_reg_pwd1"></p>
                        </li>
                        <li class="pwd pr">
                            <span class="in_b pa"></span>
                            <input type="password" class="txt" name="d_reg_pwd2" id="d_reg_pwd2" maxlength="16" show="class" placeholder="请输入密码"/>
                            <p class="none pl30 colorPink" id="checkd_reg_pwd2"></p>
                        </li>
                    </ul>
                </form> -->
                </if>
                <form id="t_register" name="t_register" method="post">
                    <ul class="user_reg bc">
                        <li class="ccode pr">
                            <span class="in_b pa"></span>
                            <input class="txt code fl" id="t_checknumber" name="t_checknumber" maxlength="4" placeholder="请输入验证码" style="color: rgb(169, 169, 169);" type="text">
                            <div class="printpic fl">
                                <img class="dynamic" src="picture/ead0b0f432fb4b4ca52916c174e2d69f.gif" id="dregvCode_mobile" onclick="jQuery('#dregvCode_mobile').attr('src', '/printpic/do_index?type=register&amp;' + Math.random());" alt="图片">
                                <a href="javascript:;" style="margin-top: 0px;margin-right:6px;float :right;font-weight: bold;color: #0c82d9;" class="blue" id="change_dregvCode_mobile" onclick="jQuery('#dregvCode_mobile').attr('src', '/printpic/do_index?type=register&amp;' + Math.random());">换一张</a>
                            </div>
                        </li>
                        <li class="user pr">
                            <span class="in_b pa"></span>
                            <input class="txt muser fl phone" name="t_reg_email" id="t_reg_email" maxlength="11" placeholder="请输入手机号" style="color: rgb(169, 169, 169);" type="text">
                            <input id="free_code" value="获取动态验证码" class="fcode fl" type="button">
                            <p class="none pl30 colorPink" id="checkt_reg_email"></p>
                        </li>
                        <li class="mcode pr">
                            <span class="in_b pa"></span>
                            <input class="txt" id="tr_checknumber" name="tr_checknumber" maxlength="6" placeholder="请输入手机验证码" style="color: rgb(169, 169, 169);" type="text">
                        </li>
                        <li class="pwd pr">
                            <span class="in_b pa"></span>
                            <input class="txt" name="t_reg_pwd1" id="t_reg_pwd1" maxlength="16" placeholder="请输入密码" style="color: rgb(169, 169, 169);" type="password">
                            <p class="none pl30 colorPink" id="checkt_reg_pwd1"></p>
                        </li>
                        <li class="pwd pr">
                            <span class="in_b pa"></span>
                            <input class="txt" name="t_reg_pwd2" id="t_reg_pwd2" maxlength="16" placeholder="请输入密码" style="color: rgb(169, 169, 169);" type="password">
                            <p class="none pl30 colorPink" id="checkt_reg_pwd2"></p>
                        </li>
                    </ul>
                </form>
            </div>
                <a href="http://www.flyco.com/help-95.html" target="_blank" class="block tc blue mt30 mb10 f14 fm">《飞科商城用户服务协议》</a>
                <div class="regBtn bc"><input id="register_button" class="bc block pointer" value="同意协议并注册" type="button"></div>
        </div>
        </div>
    </div>

@endsection