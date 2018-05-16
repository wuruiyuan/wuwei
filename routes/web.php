<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Route::get('admin/login','admin\LoginController@login');
Route::post('admin/dologin','admin\LoginController@doLogin');
Route::get('admin/signout','admin\LoginController@signout');


Route::get('admin/index','admin\IndexController@index');
Route::get('home/index','home\IndexController@index');

//前台
Route::group([],function(){

  Route::get('home/login','home\LoginController@login');
  Route::post('home/dologin','home\LoginController@dologin');
  Route::get('home/zhuce','home\LoginController@zhuce');




});

// 后台
Route::group([],function(){

	Route::resource('admin/user','admin\UserController');

	Route::get('admin/pass','admin\LoginController@pass');
	Route::post('admin/changepass','admin\LoginController@changePass');
	route::get('admin/toxiang','admin\LoginController@toxiang');
	route::post('admin/changetoxiang','admin\LoginController@chengeToxiang');

});
    