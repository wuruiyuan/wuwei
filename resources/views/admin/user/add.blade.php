@extends('layout.admin')


@section('title',$title)


@section('content')

<div class="row">

                    <div class="am-u-sm-12 am-u-md-12 am-u-lg-12">
                        <div class="widget am-cf">
                            <div class="widget-head am-cf">
                                @if (count($errors) > 0)
                                    <div class="mws-form-message error">
                                        <ul>
                                            @foreach ($errors->all() as $error)
                                                <li style='color:blue;font-size:17px;list-style:none'>{{ $error }}</li>
                                            @endforeach
                                        </ul>
                                    </div>
                                @endif
                                <div class="widget-title am-fl">添加用户</div>
                                <div class="widget-function am-fr">
                                    <a href="javascript:;" class="am-icon-cog"></a>
                                </div>
                            </div>
                            <div class="widget-body am-fr">

                                <form action="/admin/user" method='post' class="mws-form" enctype='multipart/form-data'>
                                    <div class="mws-form-inline">
                                        <div class="mws-form-row">
                                            <label class="mws-form-label">权限</label>
                                            <div class="mws-form-item clearfix">
                                                <ul class="mws-form-list inline">
                                                    <li><input type="radio" name='quanxian' value='1' checked> <label>超级管理员</label></li>
                                                    <li><input type="radio" name='quanxian' value='0'> <label>普通管理员</label></li>
                                                   
                                                    
                                                </ul>
                                            </div>
                                        </div>

                                        <div class="mws-form-row">
                                            <label class="mws-form-label">用户名</label>
                                            <div class="mws-form-item">
                                                <input type="text" name='username' class="small">
                                            </div>
                                        </div>

                                        <div class="mws-form-row">
                                            <label class="mws-form-label">密码</label>
                                            <div class="mws-form-item">
                                                <input type="password" name='password' class="small">
                                            </div>
                                        </div>

                                        <div class="mws-form-row">
                                            <label class="mws-form-label">性别</label>
                                            <div class="mws-form-item">
                                                <input type="password" name='sex' class="small">
                                            </div>
                                        </div>

                                        <div class="mws-form-row">
                                            <label class="mws-form-label">地址</label>
                                            <div class="mws-form-item">
                                                <input type="text" name='address' class="small">
                                            </div>
                                        </div>

                                        <div class="mws-form-row">
                                            <label class="mws-form-label">手机号</label>
                                            <div class="mws-form-item">
                                                <input type="text" name='phone' class="small">
                                            </div>
                                        </div>

                                        <div class="mws-form-row">
                                            <label class="mws-form-label">邮箱</label>
                                            <div class="mws-form-item">
                                                <input type="text" name='email' class="small">
                                            </div>
                                        </div>

                                        <div class="mws-form-row">
                                            <label class="mws-form-label">头像</label>
                                            <div class="mws-form-item">
                                                <input type="file" name='profile' readonly="readonly" style="width: 100%; padding-right: 85px;" class="fileinput-preview" placeholder="No file selected...">
                                            </div>
                                        </div>


                                        <div class="mws-form-row">
                                            <label class="mws-form-label">状态</label>
                                            <div class="mws-form-item clearfix">
                                                <ul class="mws-form-list inline">
                                                    <li><input type="radio" name='status' value='1' checked> <label>启用</label></li>
                                                    <li><input type="radio" name='status' value='0'> <label>禁止</label></li>
                                                    
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="mws-button-row">

                                        {{csrf_field()}}
                                        <input type="submit" class="btn btn-danger" value="提交">
                                        
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>

@endsection