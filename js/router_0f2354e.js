define('js/router', function(require, exports, module) {

  // 定义配置
  // console.log(require("./init"))
  require("js/init").config(function ($stateProvider) {
  	// console.log('222');
  	$stateProvider
  		// 首页状态
  		.state('home', {
  			url: '/',
  			templateUrl: 'js/home/home.tpl',
  			controller: 'homeCtrl'
  		})
  		// 登录页状态
  		.state('login', {
  			url: '/login',
  			templateUrl: 'js/login/login.tpl',
  			controller: 'loginCtrl'
  		})
  		// 用户列表页面
  		.state('userList', {
  			url: '/userlist/:pageNum',
  			templateUrl: 'js/user/list/list.tpl',
  			controller: 'userListCtrl'
  		})
  		// 用户详情页面
  		.state('userDetail', {
  			url: '/userdetail/:userId',
  			templateUrl: 'js/user/detail/detail.tpl',
  			controller: 'userDetailCtrl'
  		})
  		// 新闻列表
  		.state('newsList', {
  			url: '/newslist/:pageNum',
  			templateUrl: 'js/news/list/list.tpl',
  			controller: 'newsListCtrl'
  		})
  		// 新闻详情
  		.state('newsDetail', {
  			url: '/newsdetail/:newsId',
  			templateUrl: 'js/news/detail/detail.tpl',
  			controller: 'newsDetailCtrl'
  		})
  		// 创建新闻
  		.state('createNews', {
  			url: '/createnews',
  			templateUrl: 'js/news/create/create.tpl',
  			controller: 'createNewsCtrl'
  		})
  		//相册
  		.state('albums', {
  			url: '/albums',
  			templateUrl: 'js/albums/albums.tpl',
  			controller: 'albumsCtrl'
  		})
  		//个人信息管理
  		.state("msg",{
  			url:"/msg",
  			templateUrl:"js/msg/msg.tpl",
  			controller:"msgCtrl"
  		})
  		//定义邮件
  		.state("mail",{
  			url:"/mail/:pageNum",
  			templateUrl:"js/mail/mail.tpl",
  			controller:"mailCtrl"
  		})
  })
  
  // 根作用域检测是否登录
  .run(function ($rootScope, $http, $location,Observer) {
  	// 检测是否登录
  	$http
  		.get('action/checkLogin.php')
  		// 成功时候回调函数
  		.success(function (res) {
  			// 检测是否有data数据，
  			// 有data数据，说明登录了
  			if (res && res.errno === 0 && res.data) {
  				// 存储数据
  				$rootScope.username = res.data.username;
  				// 登录成功，进入首页
  				$location.path('/')
  			} else {
  				// 进入登录页面
  				$location.path('/login')
  			}
  		})
  	//是否显示头部
  	$rootScope.isShowNav = false;
  	// 在路由事件中检测登录，就不需要在每一个页面中检测了
  	$rootScope.$on('$stateChangeSuccess', function () {
  		if ($rootScope.username === undefined) {
  			// 没有登录跳转到登录页
  			$location.path('/login')
  		}else{
  			$rootScope.isShowNav = true;
  		}
  	})
  
  	// 在主面板里的各个模块里显示面包屑导航
  	$rootScope.$on("$stateChangeSuccess",function () {
  		var path = $location.$$path.slice(1);
  		$rootScope.path = path.split("/");
  	})
  })
  //定义观察者模式
  // 定义服务
  .service('Observer', function () {
  	var __message = {};
  	// 暴漏接口通过this
  	this.regist = function (type, fn) {
  		// 将回调函数注册到__message变量中
  		// 对于message消息管道来说，我们要根据type开辟不同的存储空间，来存储fn（放在数组中）
  		// 判断有没有type类型的存储空间
  		if (__message[type]) {
  			// 存储回调函数
  			__message[type].push(fn);
  		} else {
  			// 开辟新的存储空间存储回调函数
  			__message[type] = [fn];
  		}
  	}
  	this.fire = function (type, data) {
  		// 将类对象转化成数组的最快捷方式，调用数据slice方法执行它
  		var arg = [].slice.call(arguments, 0)
  		// 在消息管道中，寻找有没有该类型的消息，所以遍历消息管道
  		if (__message[type]) {
  			// __message[i] 是一个数组，遍历这个数组并执行
  			for (var i = 0; i < __message[type].length; i++) {
  				// 我们要将自定义数据传递进来
  				// __message[type][i](data)
  				// 我们想实现jqyery的Callbacks触发方式
  				// call 将参数意义列举进来，apply将参数作为数组传递
  				__message[type][i].apply(null, arg)
  			}
  		}
  	}
  })
  

});
