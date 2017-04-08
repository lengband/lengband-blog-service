define('js/mail/mail', function(require, exports, module) {

  // 定义邮件
  var A = require("js/init");
  A.controller("mailCtrl",function ($scope,$http,$stateParams) {
  	// 在这里把相册的onscroll事件注销掉
  	window.onscroll = null;
  	$scope.changeStar = function (e) {
  		if(e.target.className ==="glyphicon glyphicon-star changeBig"){
  			e.target.className = "glyphicon glyphicon-star-empty"
  		}else{
  			e.target.className = "glyphicon glyphicon-star changeBig"
  		}
  	}
  	$scope.num = $stateParams.pageNum;
  	$http.get("action/mailList.json",{
  		params: {
  			num: $scope.num
  		}
  	}).success(function (res) {
  		if(res && res.errno ===0){
  			//$scope.listfuben为缓存的数据
  			$scope.listfuben = res.data
  			$scope.list = $scope.listfuben
  		}
  	})
  
  	$scope.chooseAll = function () {
  		$(".tab-content .row").find("input[type='checkbox']").attr("checked","checked")
  	}
  
  	$scope.chooseNone = function () {
  		$(".tab-content .row").find("input[type='checkbox']").attr("checked",false)
  	}	
  	// 根据人名进行搜索
  	$scope.search = function (e) {
  		// 搜索icon加个颜色
  		$(e.currentTarget).next().css("color","#337ab7")
  		$(e.currentTarget).keyup(function (event) {
  			if(event.keyCode===13){//回车键
  				console.log($(e.currentTarget).val())
  				$scope.list.forEach(function (value,index) {
  					// 如果输入的和请求到的数据中name一致,那么更新数据list
  					if(value["name"] == $(e.currentTarget).val()){
  						$scope.list=[value];
  					// 如果没输入,那么更新数据list为原来请求到的数据
  					}else if($(e.currentTarget).val()===""){
  						$scope.list=$scope.listfuben;
  					}
  				})
  			}
  		})
  	}
  	//写邮件
  	$scope.write = function (e) {
  		 $('#myTabs a[href="#Sent"]').tab('show')
  	}
  
  	// 写邮件页的插件
  	 $scope.lockBold = true;
  	 $scope.lockItalic = true;
  	 $scope.lockFont = true;
  	 $scope.lockLeft = true;
  	 $scope.lockCenter = true;
  	 $scope.lockRight = true;
  	//写邮件textarea里边的插件 bold italic font left center right
  	// 加粗
  	$scope.bold = function (e) {
  		$(e.currentTarget).toggleClass("active")
  		if($scope.lockBold){
  			$("#textareaWP textarea").css("fontWeight","bold")
  			  $scope.lockBold=false;
  		}else{
  			$("#textareaWP textarea").css("fontWeight","normal")
  			  $scope.lockBold=true;
  		}
  	}
  	// 倾斜
  	$scope.italic = function (e) {
  		$(e.currentTarget).toggleClass("active")
  		if($scope.lockItalic){
  			$("#textareaWP textarea").css("fontStyle","italic")
  			 $scope.lockItalic=false;
  		}else{
  			$("#textareaWP textarea").css("fontStyle","normal")
  			  $scope.lockItalic=true;
  		}
  	}
  	// 放大字体
  	$scope.font = function (e) {
  		$(e.currentTarget).toggleClass("active")
  		if($scope.lockFont){
  			$("#textareaWP textarea").css("fontSize","20px")
  			 $scope.lockFont=false;
  		}else{
  			$("#textareaWP textarea").css("fontSize","14px")
  			  $scope.lockFont=true;
  		}
  	}
  	// 左对齐
  	$scope.left = function (e) {
  		$(e.currentTarget).toggleClass("active")
  		if($scope.lockLeft){
  			$("#textareaWP textarea").addClass("text-left")
  			$scope.lockLeft=false;
  		}else{
  			$("#textareaWP textarea").removeClass("text-left")
  			  $scope.lockLeft=true;
  		}
  	}
  	// 居中对齐
  	$scope.center = function (e) {
  		$(e.currentTarget).toggleClass("active")
  		if($scope.lockCenter){
  			$("#textareaWP textarea").addClass("text-center")
  			$scope.lockCenter=false;
  		}else{
  			$("#textareaWP textarea").removeClass("text-center")
  			  $scope.lockCenter=true;
  		}
  	}
  	// 右对齐
  	$scope.right = function (e) {
  		$(e.currentTarget).toggleClass("active")
  		if($scope.lockRight){
  			$("#textareaWP textarea").addClass("text-right")
  			$scope.lockRight=false;
  		}else{
  			$("#textareaWP textarea").removeClass("text-right")
  			  $scope.lockRight=true;
  		}
  	}
  	// 返回mail主页
  	$scope.Back = function (e) {
  		// 只能通过这种方式吗？？？？
  		$('#myTabs a[href="#Inbox"]').tab('show')
  	}
  })

});
