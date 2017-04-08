define('js/login/login', function(require, exports, module) {

  // 登录页控制器
  var A = require("js/init")
  A.controller('loginCtrl', function ($scope, $http, $location, $rootScope) {
  	window.onscroll = null;
  	// 进入登录页面
  	$scope.goLogin = function () {
  	    $(".accounts").animate({"opacity":0},700,function () {
  	    	$(".accounts").css({"display":"none"})
  	    	 $("#login").css({"display":"block"})
  	    })
  	}
  
  	// 定义提交事件
  	$scope.goToLogin = function () {
  		$(".app-login").animate({"opacity":0},1000,function(){
  			$http
  				.post('action/login.php', $scope.data)
  				.success(function (res) {
  					// console.log(res)
  					// 判断请求成功返回数据
  					if (res && res.errno === 0) {
  						// 保存数据
  						$rootScope.username = res.data.username;
  						// $scope.$emit('username', res.data.username)
  						// 跳转页面
  						$location.path('/')
  					} else {
  						alert('登录失败')
  					}
  				})
  		})
  		
  	}
  })

});
