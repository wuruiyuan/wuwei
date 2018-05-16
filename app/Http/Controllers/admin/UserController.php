<?php

namespace App\Http\Controllers\admin;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use DB;
use Hash;
use App\Http\Requests\FeRequest;

class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
           $arr = $request->all();


        //获取数据
        $res = DB::table('user')->
        where('username','like','%'.$request->input('search').'%')->
        paginate($request->input('num',5));


        $num = $request->input('num');
        $search = $request->input('search');

        return view('admin.user.index',[
            'title'=>'用户的列表页',
            'res'=>$res,
            'num'=>$num,
            'search'=>$search,

            'request'=>$arr


        ]);

    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return view('admin.user.add',['title'=>'用户的添加页面']);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        // dump($request->all());

       //  $this->validate($request, [
        
       //  'username' => 'required|unique:user|regex:/^\w{6,12}$/',
       //  'password' => 'required|regex:/^\S{8,16}$/',
       //  'email'=>'email',
       //  'phone'=>'required|regex:/^1[345678]\d{9}$/'    
        
       //  ],[
       // 'username.required'=>"用户名不能为空",
       //  'username.regex'=>'用户名格式不正确',
       //  'password.required'=>'密码不能为空',
       //  'password.regex'=>'密码格式不正确',
       //  'email.email'=>'邮箱格式不正确',
       //  'phone.required'=>'手机号不能为空',
       //  'phone.regex'=>'手机号码格式不正确'          
       //  ]);
        
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

       
        $res = $request->except('_token','addtime');

         // 保存在数据表中

         $res['profile'] = '/uploads/'.$name.'.'.$suffix;

         // 密码哈希加密

         $res['password'] = Hash::make($request->input('password'));

         $data = DB::table('user')->insert($res);

         dump($data);

         if($data){

            return redirect('/admin/user');
         } else {

            return back();
         }
         
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($uid)
    {   
        $res = DB::table('user')->where('uid',$uid)->first();

       
        return view('admin.user.edit',[
            'title'=>'用户的修改页面',
            'res' => $res,


        ]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(FeRequest $request, $id)
    {   
        //
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

       
        $res = $request->except('_token','addtime');

         // 保存在数据表中

         $res['profile'] = '/uploads/'.$name.'.'.$suffix;

         // 密码哈希加密

         $res['password'] = Hash::make($request->input('password'));

         $data = DB::table('user')->insert($res);

         dump($data);

         if($data){

            return redirect('/admin/user');
         } else {

            return back();
         }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($uid)
    {
        $req = DB::table('user')->where('uid',$uid)->first();

       //      if($req){
                $data = $req->profile;

                // dd($data);

                
       //      }
              
        $res = DB::table('user')->where('uid',$uid)->delete();

        $file = unlink('.'.$data);  // true   false

        if ($file) {

            return redirect('/admin/user')->with('msg','删除成功');
         } else {
            return back(); 
        }

    }
}
