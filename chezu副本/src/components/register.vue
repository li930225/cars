<template>
	<div class="register">
		<div class="gq-top">
			<h2>登录</h2>
			<span>尚未注册？</span>
			<router-link to="/logon">免费注册</router-link>
		</div>
		<div class="gq-register">
			<div class="gq-phone-register">
			<a href="javascript:void(0)" class="iconfont icon-shouji"> 手机动态码登录</a>
		<div class="gq-account">
			<label>账号：</label>
			<input type="text" placeholder="手机号/用户名/邮箱"/>
		</div>
		<div class="gq-password">
			<label>密码：</label>
			<input type="password"/>
			<a href="find.html">忘记密码？</a>
		</div>
		<div class="gq-auto">
			<input type="checkbox"/>记住账号
		    <input type="checkbox"/>下次自动登录
		</div>
		
		<button class="gq-enter">登录</button>	
		</div>
		<div class="gq-move-register">
			<a href="javascript:void(0)" class="iconfont icon-xiaolian"> 普通方式登录</a>
		<div class="gq-account">
			<label>账号：</label>
			<input type="text" placeholder="手机号/用户名/邮箱"/>
			<span class="iconfont icon-gantan">用于登录和找回密码,不会公开</span>
		</div>
		<button class="gq-move-code">免费获取手机动态码</button><span></span>
		<div class="gq-password">
			<label>动态码：</label>
			<input type="password"/>
			<span class="iconfont icon-gantan">请输入收到的手机动态码</span>
		</div>
		<div class="gq-auto">
			<input type="checkbox"/>记住手机
		</div>
		
		<button class="gq-enter">登录</button>	
		</div>
		<div class="gq-share">
		  <p>尚未注册？</p>
          <button><router-link to="/logon">免费注册 》</router-link></button>             
					
		</div>		
		</div>
		</div>
</template>

<script>
</script>

<style scoped>
.register{
	width: 977px;
	height: 383px;
	border: 1px solid #c5c5c5;
	margin: 10px auto;
}
.gq-top{
	width: 100%;
	height: 60px;
	line-height: 60px;
	border-bottom: 1px solid #c5c5c5;
}
.gq-top h2{	
	font-size: 27px;
	display: inline-block;
	padding-left: 25px;
	padding-right: 15px;
}
.gq-top span{
	font-size: 14px;
}
.gq-top a{
	color: #1978CF;
	font-size: 14px;
}
.gq-register{
	width: 100%;
	height: 320px;
	background-color: #fff;
}
.gq-phone-register,.gq-move-register{
	width: 650px;
	float: left;
}
.gq-move-register{
	display: none;
}
.gq-phone-register>a,.gq-move-register>a{
	display: block;
	height: 65px;
	width: 355px;
	line-height: 65px;
	text-align: right;
}


.gq-account input,.gq-password input{
	width: 244px;
	height: 25px;
	margin-bottom: 20px;
	outline: none;
}
.gq-phone-register label,.gq-move-register label{
	display: inline-block;
	width: 110px;
	text-align: right;
}
.gq-auto{
	margin-left: 85px;
	margin-bottom: 35px;
}
.gq-auto input{
	margin-left: 25px;
}
.gq-enter{
	font-size: 14px;
	width: 75px;
	height: 30px;
	background-color: #2870B2;
	color: #fff;
	margin-left:110px;
}
.gq-move-code{
	width: 160px;
	height: 25px;
	background-color: #f3f3f3;
	border: none;
	border: 1px solid #c5c5c5;
	border-radius: 5px;
	margin-left:113px;
	margin-bottom: 20px;
}
.icon-gantan{
	font-size: 12px;
	line-height: 22px;
	padding: 0 10px;
	display: inline-block;
	background-color: #ebf7fe;
	border:1px solid #d3edfb;
	border-radius: 3px;
}


.gq-share{
	float: right;
	width: 250px;
	height: 300px;
	border-left: 1px solid #c5c5c5;
	padding-left: 23px;
	padding-top: 23px;
}
.gq-share p{
	font-size: 14px;
	margin-bottom: 20px;
}
.gq-share button{
	width: 105px;
	height: 35px;
	background-color: #f3f3f3;
	border: none;
}

</style>