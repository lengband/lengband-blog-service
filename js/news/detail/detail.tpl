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
<div class="app-news-detail app-inner">
	<h1>新闻详情</h1>
	<div class="row">
		<div class="col-lg-2">新闻标题：</div>
		<div class="col-lg-10">{{data.title}}</div>
	</div>
	<div class="row">
		<div class="col-lg-2">新闻作者：</div>
		<div class="col-lg-10">{{data.writer}}</div>
	</div>
	<div class="row">
		<div class="col-lg-2">发布时间：</div>
		<div class="col-lg-10">{{data.date | date : 'yyyy-MM-dd HH:mm:ss'}}</div>
	</div>
	<div class="row">
		<div class="col-lg-2">新闻内容：</div>
		<div class="col-lg-10">{{data.content}}</div>
	</div>
</div>