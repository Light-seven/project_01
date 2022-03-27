//c="img/Animations/angry/angry_00.jpg"
//计时器变量
var timer;
var music = document.getElementById('music');
//封装函数,开始动画
//start(动画名称,动作总数)
function start(name,count){
    clearInterval(timer);
//	初始化下标
	var index=0;
//	获取猫
	var cat=document.getElementById("cat");
//	设置计时器 setInterval(执行函数,间隔时间);
	timer=setInterval(function(){
		if(++index<count){
//			继续切换动画
			cat.src=imgSrc(name,index);
		}else{
//			清除计时器
			clearInterval(timer);
		}
	},80);
}

//封装函数,拼接图片路径
//imgSrc(动画名称,图片下标)
function imgSrc(name,index){
	return "img/Animations/"+name+"/"+name+"_"+imgIndex(index)+".jpg";
}

//00 01 02 03 04....09 10 11 12..
//封装函数,处理图片名是否带0
function imgIndex(index){
	if(index<10){
		return "0"+index;
	}else{
		return index;
	}
}
//点击事件
//获取元素---嚓
var cymbal=document.getElementById("cymbal");
cymbal.onclick=function(){
    
	start("cymbal",13);
	music.src="";

	music.src="mp3/cymbal.wav";
	music.play();
}
var drink=document.getElementById("drink");
drink.onclick=function(){
	start("drink",80);
	setTimeout(function(){

		music.src="mp3/pour_milk.wav"
		music.play();
	},700)
	setTimeout(function(){
		music.src="mp3/p_drink_milk.wav";
		music.play();
	},2000)
}
var eat=document.getElementById("eat");
eat.onclick=function(){
	start("eat",39);
	music.src="mp3/p_eat.wav";
	music.play();
}
var fart=document.getElementById("fart");
fart.onclick=function(){
	start("fart",27);
   /*  music.src="../mp3/drink.wav";
    music.play(); */
	music.src="mp3/fart001.wav";
	music.play();
}
var pie=document.getElementById("pie");
pie.onclick=function(){
	start("pie",23);
    setTimeout(function(){
		
		music.src="mp3/fall.wav";
		music.play();
	},1000)

}
var scratch=document.getElementById("scratch");
scratch.onclick=function(){

	start("scratch",55);
	setTimeout(function(){
		music.src="mp3/scratch_kratzen.wav";
		music.play();
	},1200)

}

var angry = document.getElementById('angry');
angry.onclick=function(){
	start("angry",26);
	music.src="mp3/angry.wav";
	music.play();

}

var knockout = document.getElementById('knockout');
knockout.onclick=function(){
	music.pause();
	start("knockout",81);
	knockout.style.display="none";
	setTimeout(function(){
		knockout.style.display="block";
	},6000)
	setTimeout(function(){
		
		music.src="mp3/purr.wav";
		music.play();
	},1000)
	setTimeout(function(){
		music.src="mp3/p_stars2s.wav";
		music.play();
	},1500)

}
var footLeft = document.getElementById('footLeft');
footLeft.onclick=function(){
	music.pause();
	start("footLeft",30);
	footLeft.style.display="none";
	setTimeout(function(){
		footLeft.style.display="block";
	},2000)
	setTimeout(function(){
	
		music.src="mp3/p_foot3.wav";
		music.play();
	},500)
	

}
var footRight = document.getElementById('footRight');
footRight.onclick=function(){
	music.pause();
	start("footRight",30);
	footRight.style.display="none";
	setTimeout(function(){
		footRight.style.display="block";
	},2000)
	setTimeout(function(){
	
		music.src="mp3/p_foot4.wav";
		music.play();
	},500)
	

}
var stomach = document.getElementById('stomach');
stomach.onclick=function(){
	music.pause();
	start("stomach",34);
	stomach.style.display="none";
	setTimeout(function(){
		stomach.style.display="block";
	},2000)
	setTimeout(function(){
	
		music.src="mp3/p_noo.wav";
		music.play();
	},500)
	

}

