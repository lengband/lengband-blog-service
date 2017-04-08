define('js/albums/albums', function(require, exports, module) {

  var A = require("js/init");
  console.log($)
  //相册
  A.controller("albumsCtrl",function ($scope,$interval,$element,$timeout,$http){
  	// 定义节流锁
  	var lock = true;
  	$scope.ToRight = function () {
  	 	if(!lock) return;
  	 	lock = false;
  	 	// 因为每次删除的都是第一张图片,随意oldIndex的值是不变的
  	 	var oldIndex = 0;
  	 	$(".moveUl").animate({"left":-290},1000,function() {
  	 		// 把第一张图片删除
  	 		var dom = $(".moveUl li").eq(oldIndex).remove();
  	 		// 把删除的图片加到ul队列尾部,去头加尾
  		 	$(this).css("left",0).append(dom)
  		 	lock = true;//开锁
  	 	})
  	}
  	$scope.ToLeft = function () {
  	 	if(!lock) return;
  	 	lock = false;
  	 	var oldIndex = 4;
  	 	var dom = $(".moveUl li").eq(oldIndex).remove();
  	 	$(".moveUl").prepend(dom);//直接把最后一张添加到第一张
  	 	$(".moveUl").css("left",-290)//所以要直接显示第二张
  	 	$(".moveUl").animate({"left":0},1000,function() {
  		 	$(this).css("left",0);
  		 	lock = true;
  	 	})
  	}
  	//自动播放
  	var timer = $interval(function() {
  	 	$scope.ToRight();
  	},2000)
  	$element.find($("#lunbo")).hover(function(){
  		// angular中清除定时器
  		$interval.cancel(timer)
  	} , function(){
  		timer = $interval(function() {
  		 	$scope.ToRight();
  		},2000)
  	})
  	//激活bootstrap tooltips
  	 $timeout(function(){
  	 	$("[data-toggle='tooltip']").tooltip();
  	 },100)
  
  
  
  	//瀑布流业务
  	$scope.lock = true;//滚动加载时一次只能取一页数据
  	$scope.iPage = 1;	//初始化第一页
  	$scope.showLoading = true;//是否显示loading图片
  	$scope.getList = function ($http) {
  		$http.get("action/getPics.php?cpage=" + $scope.iPage).success(function (res) {
  				if(!res.length){
  					// 后边没有数据了,并且此时的lock是false,门是关着的
  					return
  				}
  				$scope.getImg(res)
  				// 把锁打开,可以取下一页的数据了
  				$scope.lock = true;
  		})//success
  
  	}//getList
  	//获取到最短的li
  	$scope.getShort = function () {
  		//默认向第一个li里面添加
  		var index = 0;
  		var ih = $(".pubuliu ul > li").eq(index).height();
  		// 循环比对,分别用第一列li的长度和2 3列的长度做对比
  		for (var i = 1; i < $(".pubuliu ul > li").length; i++) {
  			if($(".pubuliu ul > li").eq(i).height() < ih) {
  				index = i;
  				ih = $(".pubuliu ul > li").eq(index).height();
  			}
  		}
  		return index;
  	}
  	$scope.getTop = function (obj) {
  		var iTop = 0;
  		// 当li加载出来的时候进入if语句
  		if(obj){
  			iTop = obj.offsetTop;
  		}
  		return iTop;
  	}
  	//直接在window上监听滚动事件
  	window.onscroll = function (e) {
  		// 获取到最短的li
  		var _index = $scope.getShort();
  		var oLi = $(".pubuliu ul > li")[_index];
  		// 当最矮的li和自身滚动值比屏幕的高度加上屏幕的滚动值小的时候,发出请求
  		if($scope.getTop(oLi) + oLi.offsetHeight < document.documentElement.clientHeight + $(document).scrollTop()){
  			if($scope.lock){
  				//关门上锁，一次只能取一页的数据,然后在getList里面把锁打开
  				$scope.lock = false;
  				$scope.iPage++;
  				$scope.getList($http);
  			}
  		}
  
  
  	}
  
  	//核心业务 加载图片并渲染
  	$scope.getImg = function (res) {
  		for (var i = 0; i < res.length; i++) {
  			$scope.num = parseInt(Math.random()*3000);
  					var html = $(
  			'<div class="boxWP">'+
  				'<div class="imgDiv">'+
  					'<img src="'+res[i].preview+'">'+
  					'<div>'+
  						'<h3>Orange carrot smoothie</h3>'+
  						'<p>'+res[i].title+'</p>'+
  						'<a href="">Read More</a>'+
  					'</div>'+
  				'</div>'+
  				'<div class="bottom">'+
  					'<span class="btn btn-primary btn-sm">Image & Text</span>'+
  					'<span class="midText">'+
  						'<i class="glyphicon glyphicon-time">'+
  						'</i>&emsp;<i class="txt">MAY 5</i>'+
  					'</span>'+
  					'<span class="like" ng-click="dianzan()">'+
  						'<i class="glyphicon glyphicon-heart"></i>&emsp;<span> '+$scope.num+'</span>'+
  					'</span>'+
  				'</div>'+
  			'</div>');
  					// 问题：在模板里面ng-click是被看成单纯的字符串了吗？？？
  			/*$scope.dianzan = function () {
  				console.log(111)
  			}	*/
  
  			html.find(".imgDiv img").eq(i).width(306)
  			html.find(".imgDiv img").eq(i).height(res[i].height * (306 / res[i].width))
  
  			// console.log(html.find(".imgDiv img").eq(i).get(i))
  			//问题：为什么有一个是有JS原生对象,其他49个都没有？？？？？？
  			var idx = $scope.getShort();
  			$(".pubuliu ul > li").eq(idx).append(html)
  			// 隐藏加载图片
  			$scope.showLoading = false;	
  			}//for循环
  			
  			// 问题：1 为什么在大括号外部点击无反应  2 为什么在这里会触发两次 ？？？？？
  			$(".boxWP .bottom .like").click(function (e) {
  					if($(e.currentTarget).find("i").css("color")==="rgb(255, 0, 0)"){
  						// console.log(1)
  					}else{
  						// console.log(2)
  						var num = +$(e.currentTarget).find("span").html()+1;
  						$(e.currentTarget).find("span").html(num);
  						$(e.currentTarget).find("i").css("color","red")
  					}
  			})
  	}
  	
  	$scope.getList($http);
  
  })

});
