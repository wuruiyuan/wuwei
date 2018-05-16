<?php

namespace App\Http\Controllers\home;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class LoginController extends Controller
{
    public function login()
    {
    	return view('home.login.login',['title'=>'前台的登录页面']);
    }

    public function doLogin(Request $request)
    {
    	//表单验证

    	$res = $request->input('username');

    	$data = DB::table('user')->where('username',$res)->first();

    	if(!$data){

    		return back()->with('err','用户名或者密码错误!!!');

    	}

    	$pass = $request->input('password');

    	//哈希加密进行检测
    	if(!Hash::check($pass,$data->password)){

    		return back()->with('err','用户名或者密码错误!!!');
    	}
   	
    	//存储session
    	session(['uid'=>$data->uid]);

    	return redirect('/home/index');


    }

    public function zhuce()
    {
    	return view('home.login.zhuce',['title'=>'前台的注册页面']);
    }
}
