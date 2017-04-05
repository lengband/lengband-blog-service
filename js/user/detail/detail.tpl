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
<div class="app-user-detail app-inner">
	<h1>用户详情</h1>
	<div class="row">
		<div class="col-lg-2">用户名：</div>
		<div class="col-lg-10">{{data.username}}</div>
	</div>
	<div class="row">
		<div class="col-lg-2">性&emsp;别：</div>
		<div class="col-lg-10">{{data.sex}}</div>
	</div>
	<div class="row">
		<div class="col-lg-2">电&emsp;话：</div>
		<div class="col-lg-10">{{data.telephone}}</div>
	</div>
	<div class="row">
		<div class="col-lg-2">密&emsp;码：</div>
		<div class="col-lg-10">{{data.password}}</div>
	</div>
	<div class="row">
		<div class="col-lg-2">简&emsp;介：</div>
		<div class="col-lg-10">{{data.info}}</div>
	</div>
</div>