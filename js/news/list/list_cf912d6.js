define('js/news/list/list', function(require, exports, module) {

  // 新闻列表控制器
  var A = require("js/init");
  A.controller('newsListCtrl', function ($scope, $stateParams, $http) {
  	window.onscroll=null;
  	// 获取页码
  	$scope.num = $stateParams.pageNum;
  	// 根据页码请求数据
  	$http
  		.get('action/newslist.php?num=' + $scope.num)
  		// 请求成功，将数据存储
  		.success(function (res) {
  			if (res && res.errno === 0) {
  				$scope.list = res.data;
  			} else {
  				alert('请求失败')
  			}
  		})
  })

});
