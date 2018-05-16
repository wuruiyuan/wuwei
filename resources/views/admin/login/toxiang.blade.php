@extends('layout.admin')

@section('title',$title)

@section('content')
<div class="mws-panel grid_8">
    <div class="mws-panel-header">
        <span>{{$title}}</span>
    </div>
    <div class="mws-panel-body no-padding">
        
        @if (count($errors) > 0)
            <div class="mws-form-message error">
                <ul>
                    @foreach ($errors->all() as $error)
                        <li style='color:blue;font-size:17px;list-style:none'>{{ $error }}</li>
                    @endforeach
                </ul>
            </div>
        @endif

            <?php

                $res = DB::table('user')->where('uid',session('uid'))->first();

             

            ?>


        <form action="/admin/changetoxiang" method='post' class="mws-form" enctype='multipart/form-data'>
            <div class="mws-form-inline">

                <div class="mws-form-row">
                    <label class="mws-form-label">原头像</label>
                    <div class="mws-form-item">
                        <img src="{{$res->profile}}" alt="" width='80px' height='70px'>
                       
                    </div>
                </div>
                <div class="mws-form-row">
                    <label class="mws-form-label">新头像</label>
                    <div class="mws-form-item">
                        <input type="file" name='profile' class="small">
                    </div>
                </div>

            <div class="mws-button-row">

                {{csrf_field()}}
                <input type="submit" class="btn btn-danger" value="修改">
                
            </div>
        </form>
    </div>      
</div>


@endsection