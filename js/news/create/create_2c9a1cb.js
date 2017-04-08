define('js/news/create/create', function(require, exports, module) {

  // 创建新闻控制器
  var A = require("js/init");
  A.controller('createNewsCtrl', function ($scope, $http, $location) {
  	window.onscroll=null;
  	// 点击提交按钮时候，提交数据
  	$scope.goToCreateNews = function () {
  		// 提交表单中，没有日期字段，我们可以适配data数据
  		$scope.data.date = new Date().getTime();
  		// 提交数据
  		$http
  			.post('action/createnews.php', $scope.data)
  			// 成功进入列表页
  			.success(function (res) {
  				if (res && res.errno === 0) {
  					// 进入列表页
  					$location.path('/newslist/1')
  				} else {
  					alert('提交失败')
  				}
  			})
  	}
  	
  })

});
