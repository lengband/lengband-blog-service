define('js/user/list/list', function(require, exports, module) {

  var A = require("js/init");
  // 用户列表控制器
  A.controller('userListCtrl', function ($scope, $stateParams, $http) {
  	window.onscroll=null;
  	// 保存页码
  	$scope.num = $stateParams.pageNum;
  	$http
  		// 获取数据
  		.get('action/userlist.php', {
  			params: {
  				num: $scope.num
  			}
  		})
  		// 监听返回的数据
  		.success(function (res) {
  			if (res && res.errno === 0 && res.data) {
  				// 存储数据
  				$scope.list = res.data;
  			} else {
  				alert('请求的数据不村咋')
  			}
  		})
  	$scope.showTab = function (e) {
  		$(".col-md-2 .littleNav a").removeClass("active");
  		e.currentTarget.className += " active";
  		var href = e.target.hash;
  		$("#tabList a[href='"+href+"']").tab("show")
  	}
  	$scope.showTabs = function (e) {
  		$(".col-md-2 .littleNav a").removeClass("active");
  		var href = e.currentTarget.getAttribute("href")
  		$(".littleNav a[href='"+href+"']").addClass("active")
  	}
  })

});
