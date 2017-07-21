<template>
	<div class="app">
		<div class="yj-nav">
			<!--/*收藏订阅帮助*/-->
			<div class="yj-nav-top" id="top">
        
				<a href="">
					<svg class="icon" aria-hidden="true">
						<use xlink:href="#icon-wenhao"></use>
					</svg> 帮助</a>
				<a href="">
					<svg class="icon" aria-hidden="true">
						<use xlink:href="#icon-icon-p_xinfeng"></use>
					</svg> 订阅</a>
				<a href="">
					<svg class="icon" aria-hidden="true">
						<use xlink:href="#icon-xing"></use>
					</svg> 收藏</a>

			</div>
			<!--/*遮盖层div*/-->
			<div class="yj-nav-bottom">
				<!--/*导航展示图片  logo 城市 搜索 联系电话*/-->
				<div class="yj-nav-body">
					<!--/*导航展示图片*/-->
					<div class="yj-nav-img">
						<img src="../../static/img/nav-img.png" />
						<img src="../../static/img/nav-rmove.png" />
					</div>
					<!--/*导航内容框*/-->
					<div class="yj-body-cont">
						<!--/*导航  logo*/-->
						<img src="../../static/img/logo.png" alt="" />
						<!--/*导航 城市*/-->
						<div class="yj-cont-site">
							<p><strong>北京</strong></p>
							<span>[切换城市]</span>
							<div class="yj-site-city">
								<!--<h3><a href="javascript:void(0)">城市切换</a><img src="../image/nav-rmove.png" alt="" /></h3>-->
							
						   <h4><em>核心城市</em>		
						   <a href="javascript:void(0)">北京</a>
						   <a href="javascript:void(0)">天津</a>
						   <a href="javascript:void(0)">上海</a></h4>  
							</div>
							</div>
						
						<!--/*导航 搜索*/-->
						<div class="yj-cont-input">
							<!--/*导航 搜索商品服务类型*/-->
							<div class="yj-input-top">
								<ul>
									<li>
										<a href="">贴膜</a>
									</li>
									<li>
										<a href="">镀膜</a>
									</li>
									<li>
										<a href="">庆红</a>
									</li>
									<li>
										<a href="">封釉</a>
									</li>
									<li>
										<a href="">爱义行</a>
									</li>
									<li>
										<a href="">3M</a>
									</li>
								</ul>
							</div>
							<!--/*导航 搜索框*/-->
							<div class="yj-input-bottom">
								<input type="text" />
								<em><svg class="icon" aria-hidden="true">
  <!--<use xlink:href="#icon-luyin"></use>-->
</svg></em>
								<!--/*导航 搜索按钮*/-->
								<button>搜索</button>
							</div>

						</div>
						<!--/*导航联系电话*/-->
						<div class="yj-cont-phone">
							<h3 class="h3">4006-630-636</h3>
							<i>每日9:00-21:00</i>
						</div>
					</div>
				</div>
			</div>

		</div>
		
		<!--/*导航条*/-->

		<div class="yj-list">
			<!--/*首页 服务 团购*/-->
			<div class="yj-list-cont">
				<router-link to="/" class="color">首页</router-link>
				<a href="">服务</a>
				<a href="">团购</a>
				<!--/*个人 购物车 最近浏览*/-->
				<div class="yj-list-message">
					<ul>

						<li>
							<router-link to="/logon">注册</router-link>
						</li>
						<li>
							<router-link to="/register">登录</router-link>
						</li>
						<li>
							<a href="">最近浏览
								<svg class="icon" aria-hidden="true">
									<use xlink:href="#icon-xiasanjiao"></use>
								</svg>
							</a>
						</li>
						<li class="yj-pay">
							<a href="" >
								<svg class="icon" aria-hidden="true">
									<use xlink:href="#icon-gouwuche"></use>
								</svg> &nbsp;购物车
								<svg class="icon" aria-hidden="true">
									<use xlink:href="#icon-xiasanjiao"></use>
								</svg>
								</a>
							<div class="yj-message-pay">
								<p>查看我的购物车</p>
							</div>
						</li>
						
					</ul>

				</div>
			</div>
		</div>
	<div style="clear: both;"></div>
	</div>
</template>

<script scoped>
	export default{
	name:"app",
	data(){
		return {
			
		}		
	}
}
	
</script>

<style>
	html,
body {
	background: #fbfbfb;
	position: relative;
}
/*顶部导航*/

.yj-nav {
	width: 100%;
	height: 208px;
	background: #fbfbfb;
	/*border: 1px solid;*/
}


/*收藏订阅帮助*/

.yj-nav-top {
	width: 980px;
	height: 38px;
	margin: 0 auto;
	text-align: center;
}
svg{
	width: 12px;
	height: 12px;
}
.yj-nav-top a:nth-child(2) {
	border-right: 1px solid;
	border-left: 1px solid;
	padding: 0 10px;
}

.yj-nav-top a {
	float: right;
	width: 66px;
	height: 15px;
	margin-top: 14px;
	color: #666;
	padding: 0 10px;
}


/*遮盖层div*/

.yj-nav-bottom {
	width: 100%;
	height: 169px;
	margin-top: 11px;
	background: #fff;
	margin: 0 auto;
	border-top: 1px solid #ccc;
}


/*导航展示图片  logo 城市 搜索 联系电话*/

.yj-nav-body {
	width: 980px;
	height: 169px;
	/*border: 1px solid ;*/
	margin: 0 auto;
}


/*导航展示图片*/

.yj-nav-img {
	width: 980px;
	height: 70px;
	position: relative;
}

.yj-nav-img img {
	width: 100%;
	height: 70px;
}

.yj-nav-img img:nth-child(2) {
	width: 16px;
	height: 16px;
	position: absolute;
	right: 0;
	top: 0;
}


/*导航内容框*/

.yj-nav-cont {
	width: 980px;
	height: 99px;
	/*border: 1px solid red;*/
}


/*导航  logo*/

.yj-body-cont img {
	width: 156px;
	height: 74px;
	float: left;
	margin-top: 13px;
	/*border: 1px solid red;*/
}


/*导航 城市*/

.yj-cont-site {
	float: left;
	width: 137px;
	height: 74px;
	/*border: 1px solid;*/
	margin-top: 13px;
	position: relative;
}

.yj-cont-site p {
	font-size: 16px;
	font-weight: 900px;
	font-family: SimSun Regular;
	margin-left: 10px;
	text-align: left;
	margin-top: 35px;
}

.yj-cont-site span {
	color: #213f7b;
	font-family: SimSun Regular;
	margin-left: 10px;
}


/*导航 搜索*/

.yj-cont-input {
	width: 375px;
	height: 98px;
	/*border: 1px solid red;*/
	float: left;
}


/*导航 搜索商品服务类型*/

.yj-input-top {
	width: 307px;
	height: 39px;
	/*border: 1px solid;*/
	overflow: hidden;
}

.yj-input-top ul {
	width: 3200px;
	height: 19px;
	/*border: 1px solid red;*/
	margin-top: 20px;
}

.yj-input-top ul li {
	display: inline-block;
	float: left;
	height: 12px;
	padding: 0 13px;
	border-right: 1px solid;
	font-size: 12px;
	font-family: SimSun Regular;
	line-height: 12px;
	color: #666;
}


/*导航 搜索框*/

.yj-input-bottom {
	width: 375px;
	height: 61px;
	/*border: 1px solid;*/
	position: relative;
}

.yj-input-bottom em {
	position: absolute;
	right: 70px;
	top: 10px;
	font-size: 16px;
}

.yj-input-bottom input {
	width: 307px;
	height: 34px;
	float: left;
	border: 2px solid #2a4e91;
}


/*导航 搜索按钮*/

.yj-input-bottom button {
	width: 60px;
	height: 38px;
	float: left;
	background: #2a4e91;
}

.yj-input-bottom button:hover {
	box-shadow: 1px 1px 1px 1px #2a4e91;
}


/*导航联系电话*/

.yj-cont-phone {
	height: 100px;
	width: 200px;
	float: right;
	/*border: 1px solid;*/
}

.h3 {
	float: right;
	font-size: 25px;
	font-family: MicrosoftYaHei Regular;
	color: #2a4e91;
	margin-top: 30px;
}

.yj-cont-phone i {
	float: right;
	font-size: 12px;
	font-family: MicrosoftYaHei Regular;
	color: #666;
	line-height: 16px;
}


/*导航条*/


/*首页 服务 团购*/

.yj-list {
	width: 100%;
	height: 40px;
	background: #2a4e91;
	position: relative;
	float: left;
}

.yj-list-cont {
	width: 980px;
	height: 38px;
	border: dashed 1px transparent;
	margin: 0 auto;
}

.yj-list-cont a {
	display: inline-block;
	padding: 0 23px;
	height: 38px;
	/*border: 1px solid;*/
	font-size: 14px;
	font-family: SimSun Regular;
	text-align: center;
	line-height: 40px;
	color: #fff;
}


/*个人 购物车 最近浏览*/

.yj-list-message {
	float: right;
	width: 500px;
	/*overflow: hidden;*/
}

.yj-list-message ul {
	width: 503px;
}

.yj-list-message ul li {
	position: relative;
	display: inline-block;
	float: right;
	height: 38px;
}

.yj-list-message ul li a {
	padding: 0 16px;
	font-size: 12px;
	border-right: 1px solid;
	height: 15px;
	line-height: 15px;
	margin-top: 10px;
}

.yj-list-message ul li:hover {
	background: #fff;
}
.yj-pay:hover .yj-message-pay{
	display: block;
}

.yj-list-message ul li:hover a {
	color: #2a4e91;
}

.color {
	background: #101f4b;
}
.yj-message-pay{
	position: absolute;
	top: 38px;
	left: -25px;
	width: 150px;
	height: 50px;
	background: #fff;
	border: 1px solid #ddd;
	box-shadow: 1px 1px 1px 1px #eee;
	z-index: 10;
	display: none;
}
.yj-message-pay p{
	width: 100px;
	height: 30px;
	margin: 10px auto;
	text-align: center;
	line-height: 30px;
	background-color: #2a4e91;
	color: #fff;
	border-radius: 2px;
}
	
	
</style>