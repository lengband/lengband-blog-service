define('js/nav/nav', function(require, exports, module) {

  var A = require("js/init");
  
  A.controller('navCtrl', function ($scope) {
  	window.onscroll=null;
  	console.log('111');
  	// 绑定切换导航内容事件
  	$scope.toggleList = function (e) {
  		// 获取点击的元素
  		var dom = $(e.target);
  		dom.siblings().slideToggle()
  	}
  })

});
