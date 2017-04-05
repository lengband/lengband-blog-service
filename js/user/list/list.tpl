<div class="main-nav">
	<ol class="breadcrumb">
		<li><i class="glyphicon glyphicon-home">&nbsp;</i><a href="#/">Home</a></li>
		<!-- <li><a href="#">2013</a></li>
		<li class="active">十一月</li> -->
		<li ng-repeat="item in path" ng-class="{'active': $last}">
			<span ng-show="$last">{{item}}</span>
			<a href="" ng-hide="$last">{{item}}</a>
		</li>
	</ol>
	 <form class="navbar-form navbar-right wp-search">
        <div class="form-group">
          <input type="text" class="form-control" placeholder="Search">
        </div>
      </form>
</div>
<div class="container">
	<div class="row">
		<div class="col-md-2">
			<div class="list-group littleNav" id="userList">
			  <a href="#home" class="list-group-item active" ng-click="showTab($event)">用户列表</a>
			  <a href="#profile" class="list-group-item" ng-click="showTab($event,$elements)">用户搜索</a>
			  <a href="#" class="list-group-item"  data-toggle="modal" data-target="#addUsers">添加用户</a>
			</div>
		</div>
		<div class="col-md-10">
			<div class="page-header">
				<h1>用户管理</h1>
			</div>
			<div>
			  <!-- Nav tabs -->
			    <ul class="nav nav-tabs" role="tablist" id="tabList">
			    	<li role="presentation" class="active"><a href="#home" aria-controls="home" role="tab" data-toggle="tab" ng-click="showTabs($event)">用户列表</a></li>
			    	<li role="presentation"><a href="#profile" aria-controls="profile" role="tab" data-toggle="tab" ng-click="showTabs($event)">用户搜索</a></li>
			    	<li role="presentation"><a href="#" data-toggle="modal" data-target="#addUsers">添加用户</a></li>
			    </ul>
			  <!-- Tab panes -->
			    <div class="tab-content">
			    	<div role="tabpanel" class="tab-pane active" id="home">
			    		<div class="alert alert-info" role="alert">技巧提示： 支持模糊搜索和匹配搜索，匹配搜索使用*代替！</div>
			    		<table class="table table-striped">
						  <thead>
						    <tr>
						      <th>ID</th>
						      <th>姓名</th>
						      <th>性别</th>
						      <th>电话</th>
						      <th>用户简介</th>
						    </tr>
						  </thead>
						  <tbody>
						    <tr ng-repeat="item in list">
						    	<td><a ng-href="#/userdetail/"+{{item.id}}>{{item.id}}</a></td>
						    	<td><a ng-href="#/userdetail/"+{{item.id}}>{{item.username}}</a></td>
						    	<td><a ng-href="#/userdetail/"+{{item.id}}>{{item.sex}}</a></td>
						    	<td><a ng-href="#/userdetail/"+{{item.id}}>{{item.telephone}}</a></td>
						    	<td><a ng-href="#/userdetail/"+{{item.id}}>{{item.info}}</a></td>
						    </tr>
						  </tbody>
						</table>
			    	</div>
			    	<div role="tabpanel" class="tab-pane" id="profile">
			    		 <form action="#">
		                    <div class="form-group">
		                        <label for="addname">用户名</label>
		                        <input type="text" id="addname" class="form-control" placeholder="用户名">
		                    </div>
		                    <div class="form-group">
		                        <label for="addpassword">用户密码</label>
		                        <input type="text" id="addpassword" class="form-control" placeholder="请输入用户密码">
		                    </div>
		                    <div class="form-group">
		                        <label for="addpassword1">确认用户密码</label>
		                        <input type="text" id="addpassword1" class="form-control" placeholder="请确认输入用户密码">
		                    </div>
		                    <div class="form-group">
		                        <label for="addemail">请输入用户邮箱</label>
		                        <input type="email" id="addemail" class="form-control" placeholder="请输入用户邮箱">
		                    </div>
		                    <div class="form-group">
		                        <label for="addyonghuzu">所属用户组</label>
		                        <select id="addyonghuzu" class="form-control">
		                            <option>限制会员</option>
		                            <option>新手上路</option>
		                            <option>组册会员</option>
		                            <option>中级会员</option>
		                            <option>高级会员</option>
		                        </select>
		                    </div>
		                </form>
			    	</div>
			    	<!-- <div role="tabpanel" class="tab-pane" id="messages">添加用户</div> -->
			    </div>
			</div>
			<!-- 页脚的分页器 -->
			<nav aria-label="Page navigation">
			    <ul class="pagination pull-right" id="right">
			    	<li>
			        	<a href="#/userlist/{{num - 1 < 1 ? 1 : num - 1}}" aria-label="Previous">
			       	    	<span aria-hidden="true">&laquo;</span>
			        	</a>
			    	</li>
			    	<li><a href="#/userlist/1">1</a></li>
			    	<li><a href="#/userlist/2">2</a></li>
			    	<li><a href="#/userlist/3">3</a></li>
			    	<li><a href="#/userlist/4">4</a></li>
			    	<li><a href="#/userlist/5">5</a></li>
			    	<li>
			        	<a href="#/userlist/{{+num + 1}}" aria-label="Next">
			        		<span aria-hidden="true">&raquo;</span>
			      		</a>
			    	</li>
			    </ul>
			</nav><!-- 页脚的分页器 -->
		</div><!-- col-md-10 -->

	</div>
</div>


<div class="modal fade" id="addUsers" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
        <h4 class="modal-title" id="myModalLabel">添加用户</h4>
      </div>
      <div class="modal-body">
            <form action="#">
                <div class="form-group">
                    <label for="addname">用户名</label>
                    <input type="text" id="addname" class="form-control" placeholder="用户名">
                </div>
                <div class="form-group">
                    <label for="addpassword">用户密码</label>
                    <input type="text" id="addpassword" class="form-control" placeholder="请输入用户密码">
                </div>
                <div class="form-group">
                    <label for="addpassword1">确认用户密码</label>
                    <input type="text" id="addpassword1" class="form-control" placeholder="请确认输入用户密码">
                </div>
                <div class="form-group">
                    <label for="addemail">请输入用户邮箱</label>
                    <input type="email" id="addemail" class="form-control" placeholder="请输入用户邮箱">
                </div>
                <div class="form-group">
                    <label for="addyonghuzu">所属用户组</label>
                    <select id="addyonghuzu" class="form-control">
                        <option>限制会员</option>
                        <option>新手上路</option>
                        <option>组册会员</option>
                        <option>中级会员</option>
                        <option>高级会员</option>
                    </select>
                </div>
            </form>  
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>






<!-- 	<div class="pull-right">
	<ul class="pagination">
		<li><a ng-href="#/userlist/{{num - 1 < 1 ? 1 : num - 1}}">前一页</a></li>
		<li><a ng-href="#/userlist/{{+num + 1}}">后一页</a></li>
	</ul>
</div>
</div>  -->