/**
 * Created by Administrator on 2017/9/16.
 */
$(document).ready(function(){
    //二维码显示
    $("#blockBox").mouseenter(function(){
        $("#hiddenBox").show(400);
    });
    $("#hiddenBox").mouseleave(function(){
        $("#hiddenBox").hide();
    });
    //视频tab栏
    $(".btn ").find("button").click(function(){
        $(this).addClass("active").parent().siblings().find("button").removeClass("active");
        var index=$(this).parent().index();
        $(".main").eq(index).addClass("selected").siblings().removeClass("selected");

    })
    //con4轮播图
    //var count=0;
    //var $lis=$(".slider li");
    //$(".arrow-right").click(function () {
    //    count++;
    //    (count==$lis.length)&&(count=0);
    //    $lis.eq(count).stop().fadeIn(1000).siblings().stop().fadeOut(1000)
    //
    //})
    //$(".arrow-left").click(function () {
    //    count--;
    //    (count==-1)&&(count=$lis.length-1);
    //    $lis.eq(count).stop().fadeIn(1000).siblings().stop().fadeOut(1000)
    //
    //});
    //con4 轮播图
    //1 获取元素
//    var box=id("lunbo");
//    var imgWid=1366;
//    var ul=id("slider").children[0];
//    var lisUl = ul.children;//所有的图片li
//    var ol =tagName("slider").children[1];//放置小方块的位置
//    var lisOl = ol.children;//要操作的小方块
//    var arrBox = box.children[1];
//    var arrLeft = arrBox.children[0];
//    var arrRight = arrBox.children[1];
//    //2.创建小方块
//    var li;
//    for (var i = 0; i <lisUl.length; i++) {
//        li=document.createElement("li");
//        li.innerText=i+1;
//        ol.appendChild(li);
//    }
//    //给第一个小方块设置默认颜色
//    lisOl[0].className="current";
//    //3.简单轮播图效果
//    for (var i = 0; i < lisOl.length; i++) {
//        lisOl[i].index=i;
//        lisOl[i].onclick=function(){
//            //点击按钮1时，判断，如果当前为假的第一张，直接抽回到0
//            if(count==lisOl.length){
//                ul.style.left=0+"px";
////       count=0;
//            }
//            for (var i = 0; i < lisOl.length; i++) {
//                lisOl[i].className="";
//            }
//            this.className="current";
//            //根据当前索引值位置，设置ul移动的位置
//            animate(ul,-this.index*imgWid);
//            //需要让左右箭头与小方块操作联动，
//            //需要在点击小方块时同步count的值，跟当前按钮索引值相同
//            count=this.index;
//
//        }
//    }
//    //4.左右焦点效果
//    //鼠标移入移出显示隐藏箭头
//    box.onmouseover=function(){
//        arrBox.style.display="block";
//        clearInterval(timer);
//    }
//    box.onmouseout=function(){
//        arrBox.style.display="none";
//        timer = setInterval(function () {
//            arrRight.click();
//        }, 2000);
//    }
//    //左侧点击效果
//    var count=0;
//    //对ul中的第一个li进行克隆操作，为了制作无缝滚动效果
//    ul.appendChild(lisUl[0].cloneNode(true));
//    arrLeft.onclick=function(){
//        //当显示的图片为第一张时，如果点击左按钮，需要抽回到假的第一张显示的位置，count也需要对应设置
//        if(count==0){
//            ul.style.left=-(lisUl.length-1)*imgWid+"px";
//            count=lisOl.length;
//        }
//        count--;
//        animate(ul,-count*imgWid);
//        //根据count的值,设置对应的小方块变色
//        for (var i = 0; i < lisOl.length; i++) {
//            lisOl[i].className="";
//        }
//        lisOl[count].className="current";
//    }
//    //右侧点击效果
//    arrRight.onclick=fun;
//    function fun(){
//        if(count==lisOl.length){
//            ul.style.left=0+"px";
//            count=0;
//        }
//        count++;
//        animate(ul,-count*imgWid);
//
//        for (var i = 0; i < lisOl.length; i++) {
//            lisOl[i].className="";
//        }
//        if(count==lisOl.length){
//            lisOl[0].className="current";
//        }else{
//            lisOl[count].className="current";
//        }
//    }
//    //5.自动播放
//    var timer=null;
//    timer=setInterval(function(){
//        arrRight.click();
//    },2000);
})
//setInterval(function () {
//    arrow-right.click();
//}, 1000);
//con4 轮播图
//1 获取元素
var box= document.getElementById("lunbo");
var imgWid=1366;
var ul=document.getElementsByClassName("slider").children[0];
var lisUl = ul.children;//所有的图片li
var ol =document.getElementsByClassName("slider").children[1];//放置小方块的位置
var lisOl = ol.children;//要操作的小方块
var arrBox = box.children[1];
var arrLeft = arrBox.children[0];
var arrRight = arrBox.children[1];
//2.创建小方块
var li;
for (var i = 0; i <lisUl.length; i++) {
    li=document.createElement("li");
    li.innerText=i+1;
    ol.appendChild(li);
}
//给第一个小方块设置默认颜色
lisOl[0].className="current";
//3.简单轮播图效果
for (var i = 0; i < lisOl.length; i++) {
    lisOl[i].index=i;
    lisOl[i].onclick=function(){
        //点击按钮1时，判断，如果当前为假的第一张，直接抽回到0
        if(count==lisOl.length){
            ul.style.left=0+"px";
//       count=0;
        }
        for (var i = 0; i < lisOl.length; i++) {
            lisOl[i].className="";
        }
        this.className="current";
        //根据当前索引值位置，设置ul移动的位置
        animate(ul,-this.index*imgWid);
        //需要让左右箭头与小方块操作联动，
        //需要在点击小方块时同步count的值，跟当前按钮索引值相同
        count=this.index;

    }
}
//4.左右焦点效果
//鼠标移入移出显示隐藏箭头
box.onmouseover=function(){
    arrBox.style.display="block";
    clearInterval(timer);
}
box.onmouseout=function(){
    arrBox.style.display="none";
    timer = setInterval(function () {
        arrRight.click();
    }, 2000);
}
//左侧点击效果
var count=0;
//对ul中的第一个li进行克隆操作，为了制作无缝滚动效果
ul.appendChild(lisUl[0].cloneNode(true));
arrLeft.onclick=function(){
    //当显示的图片为第一张时，如果点击左按钮，需要抽回到假的第一张显示的位置，count也需要对应设置
    if(count==0){
        ul.style.left=-(lisUl.length-1)*imgWid+"px";
        count=lisOl.length;
    }
    count--;
    animate(ul,-count*imgWid);
    //根据count的值,设置对应的小方块变色
    for (var i = 0; i < lisOl.length; i++) {
        lisOl[i].className="";
    }
    lisOl[count].className="current";
}
//右侧点击效果
arrRight.onclick=fun;
function fun(){
    if(count==lisOl.length){
        ul.style.left=0+"px";
        count=0;
    }
    count++;
    animate(ul,-count*imgWid);

    for (var i = 0; i < lisOl.length; i++) {
        lisOl[i].className="";
    }
    if(count==lisOl.length){
        lisOl[0].className="current";
    }else{
        lisOl[count].className="current";
    }
}
//5.自动播放
var timer=null;
timer=setInterval(function(){
    arrRight.click();
},2000);
