
<div class="container app-login">
	<div class="accounts">
	    <h1>SpAdmin</h1>
	    <div id="user" class="users" ng-click="goLogin()">
	        <img src="./images/login/person1.png" alt="" />
	    </div>
	    <div id="user2" class="users" ng-click="goLogin()">
	        <img src="./images/login/person2.png" alt="" />
	    </div>
	    <div id="user3" class="users" ng-click="goLogin()">
	        <img src="./images/login/person3.png" alt="" />
	    </div>
	</div>
	<form class="form-signin login-container" name="login" id="login">
		<h2 class="form-signin-heading">请登录...</h2>
		<div class="form-group has-feeback" ng-class="{'has-success':login.username.$dirty && login.username.$valid,'has-error':login.username.$dirty && login.username.$invalid}">
			<label for="inputUser" class="sr-only"></label>
			<input  ng-model="data.username" name="username" type="text" id="inputUser" class="form-control margin-auto" placeholder="username" ng-required="true" ng-pattern="/^[\w]{4,8}$/">
		</div>
		<div class="form-group has-feeback" ng-class="{'has-success':login.password.$dirty && login.password.$valid,'has-error':login.password.$dirty && login.password.$invalid}">
			<label for="inputPassword" class="sr-only"></label>
			<input  ng-model="data.password" name="password" type="text" id="inputPassword" class="form-control" placeholder="Password" ng-required="true" ng-pattern="/^\w{6,}$/">
		</div>
		<div class="checkbox">
			<label>
				<input type="checkbox" value="remember-me">记住我
			</label>
		</div>
		<div class="text-container text-danger">
			<!-- 输入过并且不合法 -->
			<p ng-show="login.username.$dirty && login.username.$invalid">请检查用户名</p>
			<p ng-show="login.password.$dirty && login.password.$invalid">请检查密码</p>
		</div>
		<button class="btn btn-lg btn-primary btn-block" type="submit" ng-click="goToLogin()" ng-disabled="login.$invalid">登录</button>
	</form> 
</div>
