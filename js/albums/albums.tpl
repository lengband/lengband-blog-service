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
<div class="lunbo">
	<ul class="moveUl">
		<li><div class="img"><img src="images/lunbo/1.jpg" alt=""></div><div class="layer"><a href=""><span><i class="glyphicon glyphicon-plus"></i> 丨 <b>share</b></span><i class="glyphicon glyphicon-eye-open eyeWP"></i></a></div></li>
		<li><div class="img"><img src="images/lunbo/2.jpg" alt=""></div><div class="layer"><a href=""><span><i class="glyphicon glyphicon-plus"></i> 丨 <b>share</b></span><i class="glyphicon glyphicon-eye-open eyeWP"></i></a></div></li>
		<li><div class="img"><img src="images/lunbo/3.jpg" alt=""></div><div class="layer"><a href=""><span><i class="glyphicon glyphicon-plus"></i> 丨 <b>share</b></span><i class="glyphicon glyphicon-eye-open eyeWP"></i></a></div></li>
		<li><div class="img"><img src="images/lunbo/4.jpg" alt=""></div><div class="layer"><a href=""><span><i class="glyphicon glyphicon-plus"></i> 丨 <b>share</b></span><i class="glyphicon glyphicon-eye-open eyeWP"></i></a></div></li>
		<li><div class="img"><img src="images/lunbo/5.jpg" alt=""></div><div class="layer"><a href=""><span><i class="glyphicon glyphicon-plus"></i> 丨 <b>share</b></span><i class="glyphicon glyphicon-eye-open eyeWP"></i></a></div></li>
	</ul>
	<a href="javascript:;" class="left_btn btn1" ng-click="ToLeft()">&lt;</a>
	<a href="javascript:;" class="right_btn btn1" ng-click="ToRight()">&gt;</a>
</div>
<div class="midBar1 row">
	<div class="left col-md-4">
		<i class="glyphicon glyphicon-list"></i>
		<span>ORDER BY</span>
		<button class="btn btn-default b1 btn-sm">MOST LIKES</button>
		<button class="btn btn-default btn-sm">MOST VIEWS</button>
	</div>
	<div class="mid col-md-4">
		<i class="glyphicon glyphicon-hourglass"></i>
		<span>FILTER</span>
		<button class="btn btn-default b1 btn-sm">DESSERTS</button>
		<button class="btn btn-default btn-sm">MAIN DISH</button>
	</div>
	<div class="right col-md-4">
		<span>FORMAT</span>
		<i class="glyphicon glyphicon-camera i1" data-toggle="tooltip" data-placement="top" title="Tooltip on top"></i>
		<i class="glyphicon glyphicon-bell" data-toggle="tooltip" data-placement="left" title="Tooltip on top"></i>
		<i class="glyphicon glyphicon-picture" data-toggle="tooltip" data-placement="bottom" title="Tooltip on top"></i>
		<i class="glyphicon glyphicon-shopping-cart" data-toggle="tooltip" data-placement="right" title="Tooltip on top"></i>
	</div>
</div>
<!-- <img src="../../images/gallery/image-1.jpg" height="500" width="605" alt=""> -->
<div class="pubuliu">
	<ul>
		<li></li>
		<li></li>
		<li></li>

	</ul>
	<div class="loading" ng-show="showLoading"><img ng-src="images/pubuliu/loading.gif" alt=""></div>

</div>