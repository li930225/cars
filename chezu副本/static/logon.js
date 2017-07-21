//var city = document.getElementById("gq-city");
//var sheng = document.getElementById("gq-sheng");
//var shi = document.getElementById("gq-shi");
//
//sheng.options[0] = new Option("请选择...");
//shi.options[0] = new Option("请选择...");
//
//var country = [
//{"name":"北京","city":["东城区","西城区","朝阳区","丰台区","石景山区","海淀区","顺义区","通州区","大兴区","房山区","门头沟区","昌平区","平谷区","密云区","怀柔区","延庆区"]},
//
//{"name": "上海", "city": ["黄浦区", "卢湾区", "徐汇区", "长宁区", "静安区", "普陀区", "闸北区", "虹口区", "杨浦区", "宝山区", "闵行区", "嘉定区", "松江区", "金山区", "青浦区", "南汇区", "奉贤区", "浦东新区", "崇明县", "其他"]},
//
//{"name":"天津","city":["滨海新区","和平区","河北区","河东区","河西区","南开区","红桥区","东丽区","西青区","津南区","北辰区","武清区","宝坻区","静海区","宁河区","蓟州区"]},
//
//{"name": "重庆", "city": ["渝中区","大渡口区","江北区","南岸区","北碚区","渝北区","巴南区","长寿区","双桥区","沙坪坝区","万盛区","万州区","涪陵区","黔江区","永川区","合川区","江津区","九龙坡区","南川区","綦江县","潼南县","荣昌县","璧山县","大足县","铜梁县","梁平县","开县","忠县","城口县","垫江县","武隆县","丰都县","奉节县","云阳县","巫溪县", "巫山县","石柱土家族自治县","秀山土家族苗族自治县","酉阳土家族苗族自治县","彭水苗族土家族自治县","其他"]},
//
//{"name": "河北", "city": ["石家庄","唐山","秦皇岛","邯郸","邢台","保定","张家口","承德","沧州","廊坊","衡水"]},
//
//{"name": "山西", "city": ["太原","大同","阳泉","长治","晋城","朔州","忻州","吕梁","晋中","临汾","运城"]},
//
//{"name": "内蒙古", "city": ["呼和浩特","包头","乌海","赤峰","呼伦贝尔","兴安盟","通辽","锡林郭勒盟","乌兰察布盟","伊克昭盟","巴彦淖尔盟","阿拉善盟"]},
//
//{"name": "辽宁", "city": ["沈阳","大连","鞍山","抚顺","本溪","丹东","锦州","营口","阜新","辽阳","盘锦","铁岭","朝阳","葫芦岛","其他"]},
//
//{"name": "吉林", "city": ["长春","吉林","四平","辽源","通化","白山","松原","白城","延边朝鲜族自治州","其他"]},
//
//{"name": "黑龙江", "city": ["哈尔滨","齐齐哈尔","鹤岗","双鸭山","鸡西","大庆","伊春","牡丹江","佳木斯","七台河","黑河","绥化","大兴安岭地区","其他"]},
//
//{"name": "江苏", "city": ["南京","苏州","无锡","常州","镇江","南通","泰州","扬州","盐城","连云港","徐州","淮安","宿迁","其他"]},
//
//{"name": "浙江", "city": ["杭州","宁波","温州","嘉兴","湖州","绍兴","金华","衢州","舟山","台州","丽水","其他"]},
//
//{"name": "安徽", "city": ["合肥","芜湖","蚌埠","淮南","马鞍山","淮北","铜陵","安庆","黄山","滁州","阜阳","宿州","巢湖","六安","亳州","池州","宣城","其他"]},
//
//{"name": "福建", "city": ["福州","厦门","莆田","三明","泉州","漳州","南平","龙岩","宁德","其他"]},
//
//{"name": "江西", "city": ["南昌","景德镇","萍乡","九江","新余","鹰潭","赣州","吉安","宜春","抚州","上饶","其他"]},
//
//{"name": "山东", "city": ["济南","青岛","淄博","枣庄","东营","烟台","潍坊","济宁","泰安","威海","日照","莱芜","临沂","德州","聊城","滨州","菏泽","其他"]},
//
//{"name": "河南", "city": ["郑州","开封","洛阳","平顶山","安阳","鹤壁","新乡","焦作","濮阳","许昌","漯河","三门峡","南阳","商丘","永城市","信阳","周口","驻马店","焦作","其他"]},
//
//{"name": "湖北", "city": ["武汉","黄石","十堰","荆州","宜昌","襄樊","鄂州","荆门","孝感","黄冈","咸宁","随州","恩施土家族苗族自治州","仙桃","天门","潜江","神农架林区","其他"]},
//
//{"name": "湖南", "city": ["长沙","株洲","湘潭","衡阳","邵阳","岳阳","常德","张家界","益阳","郴州","永州","怀化","娄底","湘西土家族苗族自治州","其他"]},
//
//{"name": "广东", "city": ["广州","深圳","东莞","中山","潮州","揭阳","云浮","珠海","汕头","韶关","佛山","江门","湛江","茂名","肇庆","惠州","梅州","汕尾","河源","阳江","清远",]},
//
//{"name": "广西", "city": ["南宁","柳州","桂林","梧州","北海","防城港","钦州","贵港","玉林","百色","贺州","河池","来宾","崇左","其他"]},
//
//{"name": "海南", "city": ["海口","三亚","五指山","琼海","儋州","文昌","万宁","东方","澄迈县","定安县","屯昌县","临高县","白沙黎族自治县","昌江黎族自治县","乐东黎族自治县","陵水黎族自治县","保亭黎族苗族自治县","琼中黎族苗族自治县","其他"]},
//
//{"name": "四川", "city": ["成都","自贡","攀枝花","泸州","德阳","绵阳","广元","遂宁","内江","乐山","南充","眉山","宜宾","广安","达州","雅安","巴中","资阳","阿坝藏族羌族自治州","甘孜藏族自治州","凉山彝族自治州","其他",]},
//
//{"name": "贵州", "city": ["贵阳","六盘水","遵义","安顺", "铜仁地区","毕节地区","黔西南布依族苗族自治州","黔东南苗族侗族自治州","黔南布依族苗族自治州","其他"]},
//
//{"name": "云南", "city": ["昆明","曲靖","玉溪","保山","昭通","丽江", "普洱","临沧","德宏傣族景颇族自治州","怒江傈僳族自治州", "迪庆藏族自治州","大理白族自治州","楚雄彝族自治州","红河哈尼族彝族自治州","文山壮族苗族自治州","西双版纳傣族自治州","其他"]},
//
//{"name": "西藏", "city": ["拉萨","那曲地区","昌都地区","林芝地区","山南地区","日喀则地区","阿里地区","其他"]},
//
//{"name": "陕西", "city": ["西安","铜川","宝鸡","咸阳","渭南", "延安","汉中", "榆林","安康","商洛", "其他"]},
//
//{"name": "甘肃", "city": ["兰州", "嘉峪关","金昌","白银","天水","武威","酒泉","张掖", "庆阳","平凉","定西","陇南","临夏回族自治州","甘南藏族自治州","其他"]},
//
//{"name": "青海", "city": ["西宁","海东地区","海北藏族自治州","海南藏族自治州","黄南藏族自治州","果洛藏族自治州","玉树藏族自治州","海西蒙古族藏族自治州","其他"]},
//
//{"name": "宁夏", "city": ["银川","石嘴山","吴忠","固原","中卫","其他",]},
//
//{"name": "新疆", "city": [ "乌鲁木齐","克拉玛依","吐鲁番地区","哈密地区","和田地区","阿克苏地区","喀什地区","克孜勒苏柯尔克孜自治州","巴音郭楞蒙古自治州","昌吉回族自治州","博尔塔拉蒙古自治州","石河子","阿拉尔","图木舒克","五家渠","伊犁哈萨克自治州", "其他"]},
//
//{"name": "台湾", "city": ["台湾","其他"]},
//
//{"name": "澳门", "city": ["澳门"]},
//
//{"name": "香港", "city": [ "香港"]},
//
//{"name": "钓鱼岛", "city": [ "钓鱼岛"]}
//
//];


//for (var i = 0; i < country.length; i++) {
//	sheng.options[sheng.length] = new Option(country[i].name);
//	sheng.onchange = function(){
//		shi.options.length = 0;
//		shi.options[shi.length] = new Option("请选择...");
//		for (var j = 0; j < country[sheng.selectedIndex-1].city.length; j++) {
//			shi.options[shi.length] = new Option(country[sheng.selectedIndex-1].city[j]);
//		}	
//	}
//};

var code;
function createCode(){
	code="";
	name="";
	var codeLength = 4;
	var checkCode = document.getElementById("gq-checkCode");
	console.log(checkCode.value);
	var codeChart = new Array(2,3,4,5,6,7,8,9,'A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z');
	for (var i = 0; i < codeLength; i++) {
		var codeIndex = Math.floor(Math.random()*34);
		code+= codeChart[codeIndex];
	}
	if (checkCode) {
		checkCode.className = "code";
		checkCode.value = code;
	}
	for (var j = 0; j < 4; j++) {
		var codeIndex = Math.floor(Math.random()*34);
		name+= codeChart[codeIndex];
	}
	
	
}
function validate(){
	var inputCode = document.getElementsByClassName("gq-putCode")[0].value.toUpperCase();
	if (inputCode.length<=0) {
	document.getElementsByClassName("gq-cuoCode")[0].style.display="inline-block";
	document.getElementsByClassName("icon-dui")[0].style.display="none";
	} else if(inputCode != code){	document.getElementsByClassName("icon-dui")[0].style.display="none";	document.getElementsByClassName("gq-cuoCode")[0].style.display="inline-block";
	}else{	document.getElementsByClassName("gq-cuoCode")[0].style.display="none";
	document.getElementsByClassName("gq-dui")[0].style.display="inline-block";
	}
}
var agree = document.getElementsByClassName("gq-agree")[0];
agree.onclick = function(){
	document.getElementsByClassName("gq-userName")[0].innerHTML=name;
}

$(".gq-top ul li:eq(0)").click(function(){
	$(".gq-mail-logon").show();
	$(".gq-phone-logon").hide();
	$(this).addClass("gq-bg");
	$(".gq-top ul li:eq(1)").removeClass("gq-bg");
});
$(".gq-top ul li:eq(1)").click(function(){
	$(".gq-mail-logon").hide();
	$(".gq-phone-logon").show();
	$(this).addClass("gq-bg");
	$(".gq-top ul li:eq(0)").removeClass("gq-bg");
});


var bol = true;
$(function () {
    // 邮件
    $(".gq-mail input").focus(function(){
    	  $(".gq-mail span").hide();
      $(".gq-mail span").eq(1).show();
      $(".gq-mail").css({"background":"#fdf0e3"})
    })
    $(".gq-mail input").blur(function(){
      	$(".gq-mail").css({"background":"#fff"})
      var str = $(".gq-mail input").val();
      var ret = /^[\w-]+(\.[\w-]+)*@[\w-]+(\.[\w-]+)+$/;
      if (str=="") {
      	$(".gq-mail span").hide();
        $(".gq-mail span ").eq(2).show();
        bol=false;
        $(this).css({"border":"1px solid red"});
      } else if(ret.test(str)){
        $(".gq-mail span").hide();
        $(".gq-mail span").eq(4).show();
        $(this).css({"border":"1px solid #c5c5c5"});
      }else{
      	$(".gq-mail span").hide();
        $(".gq-mail span ").eq(3).show();
        bol=false;
        $(this).css({"border":"1px solid red"});
      }
    });
    
    //用户名
    $(".gq-user input").focus(function(){
    	  $(".gq-user span").hide();
      $(".gq-user span").eq(0).show();
      $(".gq-user").css({"background":"#fdf0e3"})
   
    })
    $(".gq-user input").blur(function(){
    	  $(".gq-user").css({"background":"#fff"})
      var str = $(".gq-user input").val();
      var ret = /^[a-zA-Z\u0391-\uFFE5].{3,15}$/;
      if(ret.test(str)){
        $(".gq-user span").hide();
        $(".gq-user span").eq(2).show();
        $(this).css({"border":"1px solid #c5c5c5"});
      }else{
      	$(".gq-user span").hide();
        $(".gq-user span ").eq(1).show();
        bol=false;
        $(this).css({"border":"1px solid red"});
      }
    });
    
    //密码
    $(".gq-psw input").focus(function(){
    	  $(this).parent(".gq-psw").children("span").hide();
      $(this).parent(".gq-psw").children("span").eq(0).show();
      $(this).parent(".gq-psw").css({"background":"#fdf0e3"})
   
    })
    $(".gq-psw input").blur(function(){
    	  $(this).parent(".gq-psw").css({"background":"#fff"})
      var str = $(this).parent(".gq-psw").children("input").val();
      var ret = 	/^[A-z0-9]{6,32}/;
      if(ret.test(str)){
        $(this).parent(".gq-psw").children("span").hide();
        $(this).parent(".gq-psw").children("span").eq(2).show();
        $(this).css({"border":"1px solid #c5c5c5"});
      }else{
      	$(this).parent(".gq-psw").children("span").hide();
        $(this).parent(".gq-psw").children("span").eq(1).show();
        $(this).css({"border":"1px solid red"});
        bol=false;
      }
    });
    
    //密码
    $(".gq-psw1 input").focus(function(){
    	  $(this).parent(".gq-psw1").children("span").hide();
      $(this).parent(".gq-psw1").children("span").eq(0).show();
      $(this).parent(".gq-psw1").css({"background":"#fdf0e3"})
    })
    $(".gq-psw1 input").blur(function(){
    	  $(this).parent(".gq-psw1").css({"background":"#fff"})
      var str = $(this).parent(".gq-psw1").siblings(".gq-psw").children("input").val();
      var str1 = $(this).parent(".gq-psw1").children("input").val();
      if (str1.length<6) {
      	$(this).parent(".gq-psw1").children("span").hide();
        $(this).parent(".gq-psw1").children("span").eq(1).show();
        bol=false;
        $(this).css({"border":"1px solid red"});
      } else if(str==str1){
        $(this).parent(".gq-psw1").children("span").hide();
        $(this).parent(".gq-psw1").children("span").eq(2).show();
        $(this).css({"border":"1px solid #c5c5c5"});
      }else{
      	$(this).parent(".gq-psw1").children("span").hide();
        $(this).parent(".gq-psw1").children("span").eq(1).show();
        bol=false;
        $(this).css({"border":"1px solid red"});
      }
    });
    
    //验证码
    $(".gq-code .gq-putCode").focus(function(){
    	  $(".gq-code span").hide();
      $(".gq-code span").eq(0).show();
      $(".gq-code").css({"background":"#fdf0e3"})
    });
    $(".gq-code .gq-putCode").blur(function(){
      $(".gq-code span").eq(0).hide();
      $(".gq-code").css({"background":"#fff"})
    })

    // 手机
    $(".gq-phone input").focus(function(){
    	  $(".gq-phone span").hide();
      $(".gq-phone span").eq(0).show();
      $(".gq-phone").css({"background":"#fdf0e3"})
    })
    $(".gq-phone input").blur(function(){
    	  $(".gq-phone").css({"background":"#fff"})
      var str = $(".gq-phone input").val();
      var ret = /^1[34578]\d{9}$/;
      if(ret.test(str)){
        $(".gq-phone span").hide();
        $(".gq-phone span").eq(2).show();
        $(this).css({"border":"1px solid #c5c5c5"});
      }else{
      	$(".gq-phone span").hide();
        $(".gq-phone span ").eq(1).show();
        bol=false;
        $(this).css({"border":"1px solid red"});
      }      
    });
    
    
  });

  
$(".gq-agree").click(function(){
	
if (bol) {
	if ($(".gq-phone input").val()=="") {
		$(".gq-userNumber").text("尚未绑定手机号");
	}else{
		$(".gq-userNumber").text($(".gq-phone input").val());
	}
		$("#gq-content").css({"display":"none"});
		$(".gq-logonWin").css({"display":"block"});
	
} else{
	alert("请输入正确信息");
}
})