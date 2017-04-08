define('js/home/home', function(require, exports, module) {

  // 首页控制器
  var A = require("js/init")
  
  A.controller('homeCtrl', function ($scope, $interval) {
  		window.onscroll=null;
  		// hightCharts
  		$(".main .container .hightCharts")
  			.highcharts({
  				chart:{
  					type:"spline",
  					events: {
  						load: function () {
  							// 第一步获取这条要被操作的线
  							var series = this.series[0];
  							// 第二步，通过addPoint方法定时添加点
  							$interval(function (){
  								series.addPoint(parseInt(Math.random() * 10),true,true)
  							}, 2000)
  						}
  					}
  				},
  				// 定义主标题
  				title: {
  					// 问题：怎么才能加标签？
  					text:'<i class="glyphicon glyphicon-signal"></i>近期销售统计',
  					style: {
  						color:"#4383b4",
  						fontSize:"20px"
  					},
  					x:-210
  				},
  				// 通过series绘制一条线
  				series: [
  					{
  						data:(function () {
  							var arr = [];
  							for(var i = 0;i < 10; i++) {
  								arr.push(parseInt(Math.random()*10))
  							}
  							return arr
  						})()
  					}
  				],
  				// 定义纵坐标轴
  				yAxis: {
  					title:{
  						text:"波动百分比",
  						style:{
  							color:"#4383b4",
  							fontSize:"16px"
  						},
  						y:50
  					},
  					labels:{
  						format:"{value}%"
  					}
  				},
  				// 定义署名
  				credits: {
  					// 定义内容
  					text: '冷板凳',
  					// 定义；链接
  					href: 'http://www.cnblogs.com/bandeng/',
  					// 设置显示的样式
  					style: {
  						color: '#4383b4',
  						fontSize: '20px'
  					},
  					// 隐藏
  					// enabled: false,
  					position: {
  						x: -20
  					}
  				}
  			})
  		// 定义toTwo方法
  		$scope.toTwo = function  ( n ) {
  			return n < 10 ?  '0' + n : '' + n;
  		}
  		var clock = document.getElementById("clock");
  		var aImg = clock.getElementsByTagName("img");
  		$scope.fnTime = function  () {
  			
  			var myTime = new Date();
  			var iHours = myTime.getHours();
  			var iMin = myTime.getMinutes();
  			var iSec = myTime.getSeconds();
  			var str = $scope.toTwo(iHours)+$scope.toTwo(iMin)+$scope.toTwo(iSec);
  			// str = '214204';
  			// aImg[4].src = 'img/' + str.charAt(4) + '.JPG';
  			// aImg[5].src = 'img/' + str.charAt(5) + '.JPG';
  			for ( var i=0; i<str.length; i++ ) {
  				aImg[i].src = 'images/clock/' + str.charAt(i) + '.JPG';
  			}
  	}
  	$scope.fnTime()
  	$interval($scope.fnTime, 1000 );
  })

});
