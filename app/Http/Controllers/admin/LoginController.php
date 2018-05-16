<?php

namespace App\Http\Controllers\admin;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use DB;
use Hash;
use session;
use App\Http\Requests\FeRequest;

class LoginController extends Controller
{
    public function login()
    {
    	return view('admin.login.login',['title'=>'后台的登录页面']);
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


    	// $pas = decrypt($data->password);

        // dd($pas);

    	//哈希加密进行检测
    	if(!Hash::check($pass,$data->password)){

    		return back()->with('err','用户名或者密码错误!!!');
    	}

    	//密码解密
    	/*if($pass != $pas){

    		return back()->with('err','用户名或者密码错误!!!');

    	}
*/
    	//存储session
    	session(['uid'=>$data->uid]);

    	return redirect('admin/index');


    }

    public function signout(Request $request)
    {
    	//清除session
    	// session(['uid'=>'']);

    	//删除session
    	$request->session()->forget('uid');

    	return redirect('admin/login');
    }


    //
    public function pass()
    {	

    	return view('admin.login.pass',['title'=>'修改密码']);
    }

    public function changePass(Request $request)
    {
        //表单验证


        //获取旧密码
        $pass = $request->input('oldpass');

        $res = DB::table('user')->where('uid',session('uid'))->first();

        //哈希
        if(!Hash::check($pass,$res->password)){

            return back()->with('msg','输入的旧密码错误');
        }

        $foo['password'] = Hash::make($request->input('password'));

        $data = DB::table('user')->where('uid',session('uid'))->update($foo);

        if($data){

            return redirect('admin/login');

        }

    }

    public function toxiang()
    {
        return view('admin.login.toxiang',['title'=>'修改头像']);
    }

    public function chengeToxiang(FeRequest $request,$uid)
    {
        // 表单验证
        $res = DB::table('user')->where('uid',$uid)->first();

        $data = '@'.unlink('.'.$res->profile);

        if(!$data){

            return back();
        }

        // 文件上传
        if ($request->hasFile('profile')){

            //文件名
            $name = rand(1111,9999).'_'.time();

            //获取后缀
            $suffix = $request->file('profile')->getClientOriginalExtension(); 

            //移动到哪去
            $path = $request->file('profile')->move('./uploads/', $name.'.'.$suffix);

            // dump($path);
        }
    }
}
