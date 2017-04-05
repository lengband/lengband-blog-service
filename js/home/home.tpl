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
	<div class="page-header">
		<h1>控制台  <small><i class="icon-double-angle-right"></i> &nbsp;查看</small></h1>
	</div>
	<div class="alert alert-success alert-dismissible" role="alert">
	    <button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>
	    <strong>Think You!</strong> &emsp;<i class="glyphicon glyphicon-ok success"></i>   欢迎使用 wp后台管理系统 (v1.2) ,轻量级好用的后台管理系统模版.
	</div>
	<div class="row rowWP">
		<div class="hightCharts col-md-6"></div>
		<div class="col-md-6">
				<div class="infobox infobox-green  ">
					<div class="infobox-icon">
						<i class="icon-comments"></i>
					</div>
					<div class="infobox-data">
						<span class="infobox-data-number">32</span>
						<div class="infobox-content">2个评论</div>
					</div>
					<div class="stat stat-success">8% <i class="glyphicon glyphicon-arrow-up"></i></div>
				</div>
				<div class="infobox infobox-blue  ">
					<div class="infobox-icon">
						<i class="icon-twitter"></i>
					</div>
					<div class="infobox-data">
						<span class="infobox-data-number">11</span>
						<div class="infobox-content">新粉丝</div>
					</div>
					<div class="badge badge-success stat">
						+32%
						<i class="icon-arrow-up"></i>
					</div>
				</div>
				<div class="infobox infobox-pink  ">
					<div class="infobox-icon">
						<i class="icon-shopping-cart"></i>
					</div>

					<div class="infobox-data">
						<span class="infobox-data-number">8</span>
						<div class="infobox-content">新订单</div>
					</div>
					<div class="stat stat-important">4% <i class="glyphicon glyphicon-arrow-down"></i> </div>
				</div>
				<div class="infobox infobox-red  ">
					<div class="infobox-icon">
						<i class="icon-beaker"></i>
					</div>

					<div class="infobox-data">
						<span class="infobox-data-number">7</span>
						<div class="infobox-content">调查</div>
					</div>
				</div>
				<div class="infobox infobox-orange2 ">
					<div class="infobox-icon">
						<i class="glyphicon glyphicon-stats bg-primary"></i>
					</div>
					<div class="infobox-data">
						<span class="infobox-data-number">6,251</span>
						<div class="infobox-content">页面查看次数</div>
					</div>
					<div class="badge badge-success stat">
						7.2%
						<i class="icon-arrow-up"></i>
					</div>
				</div>
				<div class="infobox infobox-blue2  ">
					<div class="infobox-icon">
						<i class="glyphicon glyphicon-indent-left"></i>
					</div>
					<div class="infobox-data">
						<span class="infobox-text">交易使用</span>
						<div class="infobox-content">
							<span class="bigger-110">~</span>
							剩余42%
						</div>
					</div>
				</div>
				<div id="clock">
					<h3>现在时间是</h3>
					<img src="../../images/clock/0.jpg" />
					<img src="../../images/clock/0.jpg" />&emsp;
					<img src="../../images/clock/0.jpg" />
					<img src="../../images/clock/0.jpg" />&emsp;
					<img src="../../images/clock/0.jpg" />
					<img src="../../images/clock/0.jpg" />
				</div>
		</div>
	</div>
</div><!-- container -->
