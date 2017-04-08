define('js/user/detail/detail', function(require, exports, module) {

  
  var A = require("js/init");
  // 用户详情控制器
  A.controller('userDetailCtrl', function ($scope, $stateParams, $http) {
  	window.onscroll=null;
  	// 根据id请求数据
  	$http
  		.get('action/userdetail.json?id=' + $stateParams.userId)
  		// 将返回的数据存储，并渲染到页面中
  		.success(function (res) {
  			if (res && res.errno === 0 && res.data) {
  				$scope.data = res.data;
  			} else {
  				alert('请求失败');
  			}
  		})
  })

});
