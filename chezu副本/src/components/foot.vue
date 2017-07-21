<template>
	<div class="foot">
		<div style="clear: both;"></div>
		<div class="yj-foot">
			<!--底部包裹-->
			<div class="yj-foot-wrap">
				<!--帮助 关于-->
				<div class="yj-foot-header">
					<!--帮助-->
					<div class="yj-foot-link">
						<ul>
							<li class="p"><strong>帮助中心</strong></li>
							<li><i class="i"></i> &nbsp;
								<a href="">购买流程</a>
							</li>
							<li><i class="i"></i> &nbsp;
								<a href="">找回密码</a>
							</li>

						</ul>
					</div>
					<!--官方微博-->
					<div class="yj-foot-link">
						<ul>
							<li class="p"><strong>官方微博</strong ></li>
						<li><i class="i"></i> &nbsp;<a href="">新浪微博</a></li>
						<li><i class="i"></i> &nbsp;<a href="">腾讯微博</a></li>
						
					</ul>
				</div>
				<!--商务合作-->
				<div class="yj-foot-link">
					<ul>
						
						<li class="p"><strong >商务合作</strong ></li>
						<li><i class="i"></i> &nbsp;<a href="">商户登录</a></li>
						<li><i class="i"></i> &nbsp;<a href="">业务合作</a></li>
						<li><i class="i"></i> &nbsp;<a href="">开放API</a></li>
					</ul>
				</div>
				<!--关于我们-->
				<div class="yj-foot-link">
					<ul>
						<li class="p"><strong >关于我们</strong ></li>
						<li><i class="i"></i> &nbsp;<a href="">公司简介</a></li>
						<li><i class="i"></i> &nbsp;<a href="">联系我们</a></li>
						<li><i class="i"></i> &nbsp;<a href="">加入我们</a></li>
					</ul>
				</div>
				<!--联系电话-->
				<div class="yj-foot-phone">
					<ul>
						<li>客服电话(免费长途)</li>
						<li>4006-630-363</li>
											</ul>
				</div >
				
				
			</div>
			<!--证件-->
			<p class="yj-foot-copyright">
					<a href="">京ICP证110457号</a>
					<a href="">京ICP备11014893号</a>
					<a href="">京公网安备11010802015559</a>
					<a href="">北京双立人网络科技有限公司</a>
					<a href="">版权所有 Copyright © 2011</a>
					<a href="" >All Rights Reserved</a>
					<a href="">360安全检测平台	</a>
				</p>
				<!--支付图片-->
				<div class="yj-foot-pay">
					<img src="../../static/img/pay1.png" alt="" />
					<img src="../../static/img/pay2.png" alt="" />
					<img src="../../static/img/pay3.png" alt="" />
					<img src="../../static/img/pay4.png" alt="" />
				</div>
				<!--推广链接-->
				<a class="a" href="Javascript:void(0)">友情链接</a>
				<a class="a" href="Javascript:void(0)">合作伙伴</a>
				<a class="a" href="Javascript:void(0)">QQ链接请求</a>
				<div class="yj-foot-active show"><span style="color: #ccc;">友情链接:</span>
				
				<a href="">seo优化</a>
				<a href="">北京汽车团购</a>
				<a href="">北京网站建设</a>
				<a href="">汽车团购</a>
				<a href="">大连租车</a>
				<a href="">电子狗品牌</a>
				<a href="">二手车</a>
				<a href="">汽车隔音</a>
				<a href="">广州租车公司</a>
				<a href="">北方汽修学校</a>
				<a href="">网站主持人</a>
				<a href="">汽车改装店</a>
				<a href="">郑州车市</a>
				<a href="">北京宝马4s店</a>
				<a href="">全球汽车用品网</a>
				<a href="">汽车用品批发</a>
				<a href="">拼车网</a>
				<a href="">京顺驾校</a>
				<a href="">合成树脂瓦</a>
				<a href="">上海拼车网</a>
				</div>
				<div class="yj-foot-active"><a href="">点击一下由于车族网合作伙伴较多，无法再这里一一展示出来，所以请链接查看车族网的合作伙伴，为您带来的任何不便，车族网深表歉意！以上信息解释版权归车族网所有。</a></div>
				<div class="yj-foot-active"><a href=""><img src="../../static/img/qq.gif"/></a></div>
			</div>
		</div>
	</div>
</template>

<script>
</script>

<style scoped>
	.yj-foot {
	width: 100%;
	height: 420px;
	background: #fbfbfb;
	border-top: 7px solid #2a4e91;
}

.yj-foot-wrap {
	width: 980px;
	height: 383px;
	/*border: 1px solid;*/
	margin: 10px auto;
}

.yj-foot-header {
	padding: 0 40px;
	/*width: 980px;*/
	height: 131px;
	/*border: 1px solid;*/
}

.yj-foot-link {
	width: 69px;
	height: 80px;
	border-left: 1px solid;
	display: inline-block;
	float: left;
	padding: 24px 35px;
}

.yj-foot-link ul li a {
	color: black;
}

.yj-foot-phone {
	width: 265px;
	height: 128px;
	border-left: 1px solid;
	display: inline-block;
	float: right;
	padding: 0 35px;
}

.yj-foot-phone ul {
	width: 225px;
	height: 74px;
	background: #d1d1d1;
	border-radius: 5px;
	margin-top: 36px;
	margin-left: 40px;
}

.yj-foot-phone ul li:nth-child(1) {
	font-size: 14px;
	font-family: MicrosoftYaHei Regular;
	color: #b0b0b0;
}

.yj-foot-phone ul li:nth-child(2) {
	font-size: 26px;
	font-family: Arial Regular;
	color: #555;
}

.yj-foot-copyright {
	width: 980px;
	height: 14px;
	margin: 38px 0;
	/*border: 1px solid;*/
}

.yj-foot-copyright a {
	float: left;
	margin-left: 13px;
	color: #6f6f6f;
	/*英文与汉语对不起 设置一样的字体*/
	font-family: Adobe 黑体 Std R;
}

.yj-foot-pay {
	margin-top: 28px;
	height: 40px;
	width: 500px;
	margin: 0 auto;
	/*border: 1px solid;*/
}

.yj-foot-pay img {
	float: left;
	margin-left: 15px;
}

.yj-foot-active {
	border: 3px solid #d1d1d1;
	width: 980px;
	height: 40px;
	padding: 30px 0 20px;
	font-family: Adobe 黑体 Std R;
	display: none;
}

.yj-foot-active a {
	color: #6f6f6f;
}

.yj-foot-active a:hover {
	color: lightskyblue;
}


/*回到顶部*/

.yj-recur {
	width: 54px;
	/*height: 54px;*/
	background: #666;
	font-size: 16px;
	text-align: center;
	border-radius: 5px;
	position: fixed;
	bottom: 20px;
	left: 50%;
	margin-left: 500px;
	color: white;
}


/*js交互css*/


/*基于yj-nav-bottom定位*/

.yj-site-city {
	width: 564px;
	height: 116px;
	border: 3px solid #2a4e91;
	position: absolute;
	background: #fff;
	z-index: 1;
	position: absolute;
	bottom: 0;
	top: 100%;
	display: none;
}

.yj-site-city h3 {
	width: 100%;
	height: 34px;
	background: #2a4e91;
	position: relative;
}

.yj-site-city h3 a {
	color: #fff;
	font-size: 16px;
	line-height: 34px;
	margin-left: 20px;
	text-decoration: underline;
}

.yj-site-city h3 img {
	width: 16px;
	height: 16px;
	position: absolute;
	right: 0;
	top: -5px;
}

.yj-site-city h4 {
	width: 100%;
	height: 78px;
	color: #ccc;
	padding: 30px;
	/*border: 1px solid red;*/
	font-size: 16px
}

.yj-site-city h4 em {
	width: 100px;
	/*border: 1px solid;*/
	display: inline-block;
}


/*购物车*/


/*yj-pay定位*/

/*.yj-pay {
	position: relative;
	z-index: 100;
}*/

.yj-message-pay {
	width: 200px;
	background: #fff;
	height: 50px;
	margin-top: 15px;
	border-radius: 5px;
	padding: 10px;
	position: absolute;
	top: 24px;
	left: -50%;
	display: none;
	z-index: -99;
}

.yj-message-pay p {
	border: 1px solid;
	width: 100px;
	background: #2a4e91;
	text-align: center;
	margin: 20px 50px;
	padding: 3px;
	border-radius: 3px;
	cursor: pointer;
	color: white;
}

.icon {
	width: 1.1em;
	height: 1.1em;
	vertical-align: -0.15em;
	fill: currentColor;
	overflow: hidden;
}

.icon1 {
	width: 2.4em;
	height: 2em;
	vertical-align: -0.15em;
	fill: currentColor;
	overflow: hidden;
	color: white;
	margin-top: 5px;
}

.p {
	font-size: 14px;
	font-weight: 900px;
	font-family: SimSun Regular;
	text-align: left;
	margin-bottom: 15px;
}

.i {
	display: inline-block;
	width: 8px;
	height: 8px;
	border: 1px solid;
	transform: rotateZ(45deg);
}

.a {
	display: inline-block;
	margin-right: 10px;
	border-style: solid solid none;
	border-width: 5px 5px medium;
	padding: 5px;
	color: black;
}

.a:hover {
	border-color: rgb(42, 78, 145);
	background: rgb(139, 132, 180);
}

.show {
	display: block;
}
</style>