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
<div class="page-content">
	<div class="page-header">
		<h1 id="h1">User Profile Page</h1>
		<small><i class="glyphicon glyphicon-hand-right"></i> 3 styles with inline editable feature</small>
	</div>
</div>
<div class="pull-right">
	<span class="green middle bolder">Choose profile: &nbsp;</span>
	<nav aria-label="..." class="rightNav">
	    <ul class="pager">
	    	<li><a href="#">Previous</a></li>
	    	<li><a href="#">Next</a></li>
	    </ul>
	</nav>
</div>
<div class="clearfixWP"></div>
<div class="alert alert-success alert-dismissible" role="alert">
  <button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>
  <i class="glyphicon glyphicon-user"></i>&emsp;<strong>fight!</strong> &emsp; Click on the image below or on profile fields to edit them ...
</div>
<div class="hr dootted"></div>
<div class="container">
	<div class="row">
		<div class="col-xs-12 col-sm-3 center">
			<span class="profile-picture">
				<img src="./avatars/profile-pic.jpg" alt="" class="img-rounded center">
				<div class="space-4"></div>
				<div class="bg-success">Alex M.Doe</div>
			</span>
			<div class="list-group list70">
				<button type="button" class="list-group-item"><i class="glyphicon glyphicon-plus"></i> &emsp;Add as a friend</button>
				<button type="button" class="list-group-item"><i class="glyphicon glyphicon-envelope"></i>&emsp;Send a message</button>
				<button type="button" class="list-group-item"><i class="glyphicon glyphicon-globe"></i>&emsp;www.alexdoe.com</button>
			</div>
			<div class="hr width70"></div>
			<div class="clearfix width70">
				<div class="grid2 firstG">
					<span class="primary bigFontWp">25</span><br>关注
				</div>
				<div class="grid2">
					<span class="primary bigFontWp">25</span><br>粉丝
				</div>
			</div>
			<div class="hr width70"></div>
		</div>

		<div class="col-xs-12 col-sm-9 center btnsWP">
			<div class="center">
				<span class="btn btn-app btn-sm btn-default no-hover">
					<span class="line-height-1 bigger-170 blue"> 1,411 </span>
					<br />
					<span class="line-height-1 smaller-90"> Views </span>
				</span>
				<span class="btn btn-app btn-sm btn-success no-hover">
					<span class="line-height-1 bigger-170"> 25 </span>
					<br />
					<span class="line-height-1 smaller-90"> Followers </span>
				</span>
				<span class="btn btn-app btn-sm btn-info no-hover">
					<span class="line-height-1 bigger-170"> 4 </span>
					<br />
					<span class="line-height-1 smaller-90"> Projects </span>
				</span>
				<span class="btn btn-app btn-sm btn-warning no-hover">
					<span class="line-height-1 bigger-170"> 23 </span>
					<br />
					<span class="line-height-1 smaller-90"> Reviews </span>
				</span>
				<span class="btn btn-app btn-sm btn-danger no-hover">
					<span class="line-height-1 bigger-170"> 7 </span>
					<br />
					<span class="line-height-1 smaller-90"> Albums </span>
				</span>
				<span class="btn btn-app btn-sm btn-primary no-hover">
					<span class="line-height-1 bigger-170"> 55 </span>
					<br />
					<span class="line-height-1 smaller-90"> Contacts </span>
				</span>
			</div>
			<table class="table tableWP">
			  	<tbody>
				    <tr class="active">
				      	<td>Username</td>
				     	 <td>alexdoe</td></tr>
				    <tr class="success">
				    	<td>Location</td>
				      	<td>Netherlands Amsterdam</td></tr>
				    <tr class="warning">
				        <td>Age</td>
				     	 <td>38</td></tr>
				    <tr class="danger">
				     	<td>Joined</td>
				      	<td>20/06/2010</td></tr>
				    <tr class="active">
				      	<td>Last Online</td>
				     	 <td>3 hours ago</td></tr>
				    <tr class="success">
				      	<td>About Me</td>
				     	 <td>Editable as WYSIWYG</td></tr>				     	 			      	
			    </tbody>
			</table>
		
			<nav id="navbar-example" class="navbar navbar-default navbar-static" role="navigation">
			    <div class="container-fluid"> 
			        <div class="navbar-header">
			            <button class="navbar-toggle" type="button" data-toggle="collapse" 
			                    data-target=".bs-js-navbar-scrollspy">
			                <span class="sr-only">切换导航</span>
			                <span class="icon-bar"></span>
			                <span class="icon-bar"></span>
			                <span class="icon-bar"></span>
			            </button>
			            <a class="navbar-brand" href="#">Skilled</a>
			        </div>
			        <div class="collapse navbar-collapse bs-js-navbar-scrollspy">
			            <ul class="nav navbar-nav">
			                <li><a href="#ios">iOS</a></li>
			                <li><a href="#svn">SVN</a></li>
			                <li class="dropdown">
			                    <a href="" id="navbarDrop1" class="dropdown-toggle" 
			                       data-toggle="dropdown">Java
			                        <b class="caret"></b>
			                    </a>
			                    <ul class="dropdown-menu" role="menu" 
			                        aria-labelledby="navbarDrop1">
			                        <li><a href="#jmeter" tabindex="-1">jmeter</a></li>
			                        <li><a href="#ejb" tabindex="-1">ejb</a></li>
			                        <li class="divider"></li>
			                        <li><a href="#spring" tabindex="-1">spring</a></li>
			                    </ul>
			                </li>
			            </ul>
			        </div>
			    </div> 
			</nav>
			<div data-spy="scroll" data-target="#navbar-example" data-offset="0" 
			     style="height:200px;overflow:auto; position: relative;">
			    <h4 id="ios">iOS</h4>
			    <p>iOS 是一个由苹果公司开发和发布的手机操作系统。最初是于 2007 年首次发布 iPhone、iPod Touch 和 Apple 
			        TV。iOS 派生自 OS X，它们共享 Darwin 基础。OS X 操作系统是用在苹果电脑上，iOS 是苹果的移动版本。
			    </p>
			    <h4 id="svn">SVN</h4>
			    <p>Apache Subversion，通常缩写为 SVN，是一款开源的版本控制系统软件。Subversion 由 CollabNet 公司在 2000 年创建。但是现在它已经发展为 Apache Software Foundation 的一个项目，因此拥有丰富的开发人员和用户社区。
			    </p>
			    <h4 id="jmeter">jMeter</h4>
			    <p>jMeter 是一款开源的测试软件。它是 100% 纯 Java 应用程序，用于负载和性能测试。
			    </p>
			    <h4 id="ejb">EJB</h4>
			    <p>Enterprise Java Beans（EJB）是一个创建高度可扩展性和强大企业级应用程序的开发架构，部署在兼容应用程序服务器（比如 JBOSS、Web Logic 等）的 J2EE 上。
			    </p>
			    <h4 id="spring">Spring</h4>
			    <p>Spring 框架是一个开源的 Java 平台，为快速开发功能强大的 Java 应用程序提供了完备的基础设施支持。
			    </p>
			    <p>Spring 框架最初是由 Rod Johnson 编写的，在 2003 年 6 月首次发布于 Apache 2.0 许可证下。
			    </p>
			</div>
		</div>
	</div>
</div>
