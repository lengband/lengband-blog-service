define('js/news/detail/detail', function(require, exports, module) {

  // 新闻详情控制器
  var A = require("js/init");
  A.controller('newsDetailCtrl', function ($scope, $http, $stateParams) {
  	window.onscroll=null;
  	// 请求数据，渲染页面
  	$http
  		.get('action/newsdetail.php?id=' + $stateParams.newsId)
  		// 成功获取数据，存储数据，渲染页面
  		.success(function (res) {
  			if (res && res.errno === 0 && res.data) {
  				$scope.data = res.data;
  			} else {
  				alert('请求失败')
  			}
  		})
  })

});
