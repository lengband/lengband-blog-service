<div class="mail">
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
	</div><!-- 面包屑 -->


	<div class="container">
		<div class="page-content">
			<div class="page-header">
				<h1 id="h1">Inbox</h1>
				<small><i class="glyphicon glyphicon-hand-right"></i> &emsp; Mailbox with some customizations as described in docs</small>
			</div>
		</div>

		<div>
		    <!-- Nav tabs -->
		    <ul class="nav nav-tabs" role="tablist" id="myTabs">
			    <li role="presentation" class="active"><a href="#Inbox" aria-controls="home" role="tab" data-toggle="tab">Inbox</a></li>
			    <li role="presentation"><a href="#Sent" aria-controls="profile" role="tab" data-toggle="tab">Sent</a></li>
			    <li role="presentation"><a href="#Draft" aria-controls="messages" role="tab" data-toggle="tab">Draft</a></li>
			    <li role="presentation"><a href="#Tags" aria-controls="settings" role="tab" data-toggle="tab">Tags</a></li>
			    <div class="btn btn-primary pull-right" ng-click="write($event)"><i class="glyphicon glyphicon-envelope"></i> Write Mail</div>
		    </ul><!-- 分页 -->
		   
		    <!-- Tab panes -->
		    <div class="tab-content">
			    <div role="tabpanel" class="tab-pane active" id="Inbox">
			    	<div class="row row1">
			    		<div class="col-md-4">
			    			<input type="checkbox">
							<a class="dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
							<span class="caret"></span>
							</a>
							<ul class="dropdown-menu">
							    <li><a href="" ng-click="chooseAll()">All</a></li>
							    <li><a href="" ng-click="chooseNone()">None</a></li>
							    <li role="separator" class="divider"></li>
							    <li><a href="">Read</a></li>
							    <li><a href="">Unread</a></li>
							</ul>
							<div class="inputWP">
								<input type="search" class="input" ng-focus="search($event)">
								<i class="glyphicon glyphicon-search"></i>
							</div>
			    		</div>
			    		<div class="col-md-4">
			    			<div class="text-center">
			    				<span class="text-primary text-uppercase">Inbox</span> <span class="text-lowercase">(2 unread messages)</span>
			    			</div>
			    		</div>
			    		<div class="col-md-4">
			    			<div class="text-center">
			    				<a class="dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">sort <span class="caret"></span></a>
			    				<ul class="dropdown-menu pull-right">
								    <li><a href="">Data</a></li>
								    <li><a href="">From</a></li>
								    <li><a href="">Subject</a></li>
								</ul>
			    			</div>
			    		</div>
			    	</div>
			    	<div class="clearfix"></div>
			    	<div class="containerWP">
			    		<ul>
			    			<li class="row" ng-repeat="item in list">
			    				<div class="col-md-3">
			    					<input type="checkbox">
			    					<i class="glyphicon glyphicon-star-empty" ng-click="changeStar($event)"></i>
			    					<b class="primary">{{item.name}}</b>
			    				</div>
			    				<div class="col-md-7">
				    				<a href="">
					    				<b class="primary">{{item.title}}</b>
				    				</a>
			    				</div>
			    				<div class="col-md-2">
			    					<b class="primay">{{item.time}}</b>
			    				</div>
			    			</li>
			    			  
			    		</ul>
			    	</div>
			    </div><!-- 默认第一页 -->


				<!-- 第二页，写邮件 -->
			    <div role="tabpanel" class="tab-pane" id="Sent">
			    	<div class="mailHead row container">
			    	<!-- 这种方式添加返回的话上边的nav没变化？？？？？？ -->
			    		<div class="col-md-4" href="#Inbox" role="tab" data-toggle="tab" ng-click="Back($event)">
			    			<i class="glyphicon glyphicon-arrow-left"></i>
			    			<span>Back</span>
			    		</div>
			    		<div class="col-md-4 text-center">
			    			<span class="btn btn-default btn-sm">
			    				<i class="glyphicon glyphicon-folder-open"></i>
			    				<span>Save Draft</span>
			    			</span>
			    			<span class="btn btn-default btn-sm">
			    				<i class="glyphicon glyphicon-remove"></i>
			    				<span>Discard</span>
			    			</span>
			    		</div>
			    		<div class="col-md-4 text-right">
			    			<span class="btn btn-primary">
			    				<span>Send</span>
			    				<i class="glyphicon glyphicon-arrow-right"></i>
			    			</span>
			    		</div>
			    	</div>
			    	<div class="container mailContent">
			    		<form class="form-horizontal">
						    <div class="form-group">
							    <label class="col-sm-2 control-label" for="formGroupInputLarge">Recipient:</label>
							    <div class="col-sm-3">
							        <input class="form-control" type="text" id="formGroupInputLarge" placeholder="alex@doe.com">
							    </div>
						    </div>
						    <div class="hr hr-18 dotted"></div>
						    <div class="form-group">
						    <label class="col-sm-2 control-label" for="formGroupInputSmall">Subject:</label>
						        <div class="col-sm-6">
						            <input class="form-control" type="text" id="formGroupInputSmall" placeholder="Subject">
						        </div>
						    </div>
						    <div class="hr hr-18 dotted"></div>
						    <div class="row">
						    	<div class="col-md-offset-5" id="chajian">
						    	<!-- active 通过添加这个类给按钮表示按下的感觉 -->
						    		<span class="btn btn-sm" ng-click="bold($event)"><i class="glyphicon glyphicon-bold"></i></span>
						    		<span class="btn btn-sm" ng-click="italic($event)"><i class="glyphicon glyphicon-italic"></i></span>
						    		<span class="btn btn-sm" ng-click="font($event)"><i class="glyphicon glyphicon-font"></i></span>&emsp;|&emsp;
						    		<span class="btn btn-sm" ng-click="left($event)"><i class="glyphicon glyphicon-align-left"></i></span>
						    		<span class="btn btn-sm" ng-click="center($event)"><i class="glyphicon glyphicon-align-center"></i></span>
						    		<span class="btn btn-sm" ng-click="right($event)"><i class="glyphicon glyphicon-align-right"></i></span>
						    	</div>
						    </div>
          					<div class="form-group">
						    <label class="col-sm-2 control-label" for="formGroupInputSmall">Subject:</label>
						        <div class="col-sm-6" id="textareaWP">
						            <textarea class="form-control" rows="5" type="text" id="formGroupInputSmall"></textarea>
						        </div>
						    </div>
						    <div class="hr hr-18 dotted"></div>
						    <div class="form-group">
							    <label class="col-sm-2 control-label" for="formGroupInputLarge">Attachments:</label>
							    <div class="col-sm-3" id="flieWPParent">
							        <input class="form-control" type="text" id="formGroupInputLarge" placeholder="No Files ...">
							        <input type="file" id="flieWP">
							    </div>
						    </div>
						   
						   	 <div class="pull-right btn btn-danger lastBtn">
						    	<i class="glyphicon glyphicon-paperclip"></i>
						    	Add Attachment
						    </div>
						    
						  
						</form>
						
			    	</div>
			    </div>
			    <!-- 第三页 -->
			    <div role="tabpanel" class="tab-pane" id="Draft">
			    	<div class="container">
					    <div class="row">
					        <div class='col-sm-6'>
					            <div class="form-group">
					                <div class='input-group date' id='datetimepicker5'>
					                    <input type='text' class="form-control" />
					                    <span class="input-group-addon">
					                        <span class="glyphicon glyphicon-calendar"></span>
					                    </span>
					                </div>
					            </div>
					        </div>
					    </div>
					</div>
			    </div>
			    <div role="tabpanel" class="tab-pane" id="Tags">4</div>
		    </div>
		</div>
	</div>










</div><!-- mail -->