@extends('layout.admin')

@section('title',$title)


@section('content')
<div class="mws-panel grid_8">
	<div class="mws-panel-header">
    	<span><i class="icon-table"></i>{{$title}}</span>
    </div>

    <div class="mws-panel-body no-padding">
        <div role="grid" class="dataTables_wrapper" id="DataTables_Table_1_wrapper">

        	<form action="/admin/user" method='get'>
        	<div id="DataTables_Table_1_length" class="dataTables_length">
        		<label>显示
        			
	        		<select name="num" size="1" aria-controls="DataTables_Table_1">

	        			<option value="5" 
	        			@if($num == 5) 
	        			selected="selected"
						@endif
	        			>5</option>



	        			<option value="10"
						@if($num == 10) 
	        			selected="selected"
						@endif
	        			>10</option>


	        			<option value="15"
						@if($num == 15) 
	        			selected="selected"
						@endif

	        			>15</option>
	        			
	        		</select> 条数据
        		</label>
        	</div>

        	<div class="dataTables_filter" id="DataTables_Table_1_filter">
    			<label>关键字: 
    				<input type="text" name='search' aria-controls="DataTables_Table_1" value="{{$search}}">
    			</label>

    			<button class='btn btn-info'>搜索</button>
    		</div>



    		</form>

        <table class="mws-datatable-fn mws-table dataTable" id="DataTables_Table_1" aria-describedby="DataTables_Table_1_info">
            <thead>
                <tr role="row">
                	<th class="sorting_asc" role="columnheader" tabindex="0" aria-controls="DataTables_Table_1" rowspan="1" colspan="1" style="width: 198px;" aria-sort="ascending" aria-label="Rendering engine: activate to sort column descending">ID</th>
                	<th class="sorting" role="columnheader" tabindex="0" aria-controls="DataTables_Table_1" rowspan="1" colspan="1" style="width: 126px;" aria-label="CSS grade: activate to sort column ascending">权限</th>    
                	<th class="sorting" role="columnheader" tabindex="0" aria-controls="DataTables_Table_1" rowspan="1" colspan="1" style="width: 180px;" aria-label="Browser: activate to sort column ascending">用户名</th>
                	<th class="sorting" role="columnheader" tabindex="0" aria-controls="DataTables_Table_1" rowspan="1" colspan="1" style="width: 180px;" aria-label="Browser: activate to sort column ascending">性别</th>
                	<th class="sorting" role="columnheader" tabindex="0" aria-controls="DataTables_Table_1" rowspan="1" colspan="1" style="width: 180px;" aria-label="Browser: activate to sort column ascending">地址</th>
                	<th class="sorting" role="columnheader" tabindex="0" aria-controls="DataTables_Table_1" rowspan="1" colspan="1" style="width: 180px;" aria-label="Browser: activate to sort column ascending">电话</th>
                	<th class="sorting" role="columnheader" tabindex="0" aria-controls="DataTables_Table_1" rowspan="1" colspan="1" style="width: 247px;" aria-label="Platform(s): activate to sort column ascending">邮箱</th>
                	<th class="sorting" role="columnheader" tabindex="0" aria-controls="DataTables_Table_1" rowspan="1" colspan="1" style="width: 126px;" aria-label="CSS grade: activate to sort column ascending">头像</th> 
                	<th class="sorting" role="columnheader" tabindex="0" aria-controls="DataTables_Table_1" rowspan="1" colspan="1" style="width: 126px;" aria-label="CSS grade: activate to sort column ascending">状态</th>              	
                	<th class="sorting" role="columnheader" tabindex="0" aria-controls="DataTables_Table_1" rowspan="1" colspan="1" style="width: 126px;" aria-label="CSS grade: activate to sort column ascending">操作</th>
                </tr>
            </thead>
            
        <tbody role="alert" aria-live="polite" aria-relevant="all">
				
				@foreach($res as $k => $v)

        		<tr class="
					@if($k % 2 == 1) 
						odd 
					@else
						even
					@endif 

        		">

        		    <td class="">{{$v->uid}}</td>

        		    <td class=" ">
        		    	@if($v->quanxian == 1)
                    		超级管理员
                    	@else 
                    		普通管理员
            
                    	@endif

        		    	
        		    </td>
                    
                    <td class=" ">{{$v->username}}</td>
                    <td class=" ">{{$v->sex}}</td>
                    <td class=" ">{{$v->address}}</td>
                    <td class=" ">{{$v->phone}}</td>
                    <td class=" ">{{$v->email}}</td>
                    <td class=" "><img src="{{$v->profile}}" alt=""></td>

                     <td class=" ">
						<!-- 这是一种方式 -->
                    	@if($v->status == 1)
                    		启用
                    	@else
                    		禁止
                    	@endif

                    	

                    </td>
                    
                    <td class=" ">
                    	<a href="/admin/user/{{$v->uid}}/edit" class='btn btn-primary'>修改</a>

                    	
                    	<form action="/admin/user/{{$v->uid}}" method='post' style='display:inline'>
							{{csrf_field()}}

							{{method_field('DELETE')}}

							<button class='btn btn-danger'>删除</button>

						</form>
                    </td>

                </tr>
               <!--  <tr class="even">
                   <td class="">Gecko</td>
                   <td class=" ">Firefox 1.5</td>
                   <td class=" ">Win 98+ / OSX.2+</td>
                   <td class=" ">1.8</td>
                   <td class=" ">A</td>
               </tr> -->
                @endforeach

               </tbody></table><div class="dataTables_info" id="DataTables_Table_1_info">Showing 1 to 10 of 57 entries</div>
				
				<style>
					.pagination li{
						float: left;
					    height: 20px;
					    padding: 0 10px;
					    display: block;
					    font-size: 12px;
					    line-height: 20px;
					    text-align: center;
					    cursor: pointer;
					    outline: none;
					    background-color: #444444;
					   
					    text-decoration: none;
					    border-right: 1px solid #232323;
					    border-left: 1px solid #666666;
					    border-right: 1px solid rgba(0, 0, 0, 0.5);
					    border-left: 1px solid rgba(255, 255, 255, 0.15);
					    -webkit-box-shadow: 0px 1px 0px rgba(0, 0, 0, 0.5), inset 0px 1px 0px rgba(255, 255, 255, 0.15);
					    -moz-box-shadow: 0px 1px 0px rgba(0, 0, 0, 0.5), inset 0px 1px 0px rgba(255, 255, 255, 0.15);
					    box-shadow: 0px 1px 0px rgba(0, 0, 0, 0.5), inset 0px 1px 0px rgba(255, 255, 255, 0.15);

					}

					.pagination li a{
 					color: #fff;
					}

					.pagination .active{
					background-color: #88a9eb;
					color: #323232;
				    border: none;
				    background-image: none;
				    box-shadow: inset 0px 0px 4px rgba(0, 0, 0, 0.25);
					}

					.pagination .disabled{

						color: #666666;
    					cursor: default;
					}

					

					.pagination{
						margin:0px;
					}
				
				</style>

               <div class="dataTables_paginate paging_full_numbers" id="DataTables_Table_1_paginate">
				
				<!-- {{$res->links()}} -->

				<!-- {{$res->render()}} -->



				<!-- 第一种方式 -->
				<!-- {{ $res->appends(['num' => $num,'search'=>$search])->links() }} -->

				<!-- 第二种方式 -->
				{{ $res->appends($request)->links() }}




               </div>
    </div>
</div>

@endsection