createLoadingDom();//创建加载中蒙版
var qhasilver_timer = null;//计时器
var qhasilver_images = document.getElementsByTagName('img');//图片数组
var qhasilver_len = qhasilver_images.length;//图片数量
var qhasilver_i = 0;//计数器
//定义加载器
var qhasilver_t_load = function(img){
	if(qhasilver_i < qhasilver_len){			
		qhasilver_timer = setInterval(function(){
			if(img.complete){
				clearInterval(qhasilver_timer);//清空定时器
				document.getElementById("loadProgress").innerHTML = qhasilver_i+"/"+qhasilver_images.length;
				qhasilver_t_load(qhasilver_images[qhasilver_i++]);
			}
		},50);
	}else{
		document.getElementById("loader").style.display="none";			
		console.log("加载完毕");
	}
}
//定义记载中蒙版
function createLoadingDom(){
	var html = "<div id='loader' style='position:absolute;top:0px;width:100%;height:1000px;background:white;z-index:9999;'><div style='position:absolute;width:200px;height:120px;border:1px solid gray;border-radius:15px;background:white;margin:0 auto;top:25%;left:0px;right:0px;text-align:center;'><img src='loading.gif' style='margin-top:30px'><div style='margin-top:10px'>加载中...</div><div id='loadProgress' style='margin-top:5px'>0/0</div></div></div>";
	document.write(html);
}
qhasilver_t_load(qhasilver_images[qhasilver_i]);//执行加载中方法
