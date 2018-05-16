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
                                <div class="widget-title am-fl">{{$title}}</div>
                               
                            </div>
                           
                                <form action="/admin/user/{{$res->uid}}" method='post' class="mws-form" enctype='multipart/form-data'>
                                    <div class="mws-form-inline">

                                        <div class="mws-form-row">
                                            <label class="mws-form-label">用户名</label>
                                            <div class="mws-form-item">
                                                <input type="text" name='username' class="small" value="{{$res->username}}">
                                            </div>
                                        </div>

                                        
                                        <div class="mws-form-row">
                                            <label class="mws-form-label">性别</label>
                                            <div class="mws-form-item">
                                                <input type="text" name='sex' class="small" value="{{$res->sex}}">
                                            </div>
                                        </div>

                                        <div class="mws-form-row">
                                            <label class="mws-form-label">地址</label>
                                            <div class="mws-form-item">
                                                <input type="text" name='address' class="small" value="{{$res->address}}">
                                            </div>
                                        </div>

                                        <div class="mws-form-row">
                                            <label class="mws-form-label">手机号</label>
                                            <div class="mws-form-item">
                                                <input type="text" name='phone' class="small" value="{{$res->phone}}">
                                            </div>
                                        </div>

                                        <div class="mws-form-row">
                                            <label class="mws-form-label">邮箱</label>
                                            <div class="mws-form-item">
                                                <input type="text" name='email' class="small" value="{{$res->email}}">
                                            </div>
                                        </div>

                                        <div class="mws-form-row">
                                            <label class="mws-form-label">头像</label>
                                            <div class="mws-form-item">
                                            	<img src="{{$res->profile}}" alt="" width='80px' height='70px'>
                                                <input type="file" name='profile' readonly="readonly" style="width: 100%; padding-right: 85px;" class="fileinput-preview" placeholder="No file selected...">
                                            </div>
                                        </div>
						            <div class="mws-button-row">
						                {{method_field('PUT')}}
						    			{{csrf_field()}}
						    			<input type="submit" class="btn btn-danger" value="修改">
						    			
						    		</div>
                                </form>
                           
                        </div>
                    </div>
                </div>

@endsection


@section('js')
<script>
	/*setTimeout(function(){

		$('.mws-form-message').slideUp(1000);

	},3000)
*/
	$('.mws-form-message').delay(3000).slideUp(1000);

</script>

@endsection