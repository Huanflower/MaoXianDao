/**
 * Created by Administrator on 2017/9/16.
 */
$(document).ready(function(){
    //��ά����ʾ
    $("#blockBox").mouseenter(function(){
        $("#hiddenBox").show(400);
    });
    $("#hiddenBox").mouseleave(function(){
        $("#hiddenBox").hide();
    });
    //��Ƶtab��
    $(".btn ").find("button").click(function(){
        $(this).addClass("active").parent().siblings().find("button").removeClass("active");
        var index=$(this).parent().index();
        $(".main").eq(index).addClass("selected").siblings().removeClass("selected");

    })
    //con4�ֲ�ͼ
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
    //con4 �ֲ�ͼ
    //1 ��ȡԪ��
//    var box=id("lunbo");
//    var imgWid=1366;
//    var ul=id("slider").children[0];
//    var lisUl = ul.children;//���е�ͼƬli
//    var ol =tagName("slider").children[1];//����С�����λ��
//    var lisOl = ol.children;//Ҫ������С����
//    var arrBox = box.children[1];
//    var arrLeft = arrBox.children[0];
//    var arrRight = arrBox.children[1];
//    //2.����С����
//    var li;
//    for (var i = 0; i <lisUl.length; i++) {
//        li=document.createElement("li");
//        li.innerText=i+1;
//        ol.appendChild(li);
//    }
//    //����һ��С��������Ĭ����ɫ
//    lisOl[0].className="current";
//    //3.���ֲ�ͼЧ��
//    for (var i = 0; i < lisOl.length; i++) {
//        lisOl[i].index=i;
//        lisOl[i].onclick=function(){
//            //�����ť1ʱ���жϣ������ǰΪ�ٵĵ�һ�ţ�ֱ�ӳ�ص�0
//            if(count==lisOl.length){
//                ul.style.left=0+"px";
////       count=0;
//            }
//            for (var i = 0; i < lisOl.length; i++) {
//                lisOl[i].className="";
//            }
//            this.className="current";
//            //���ݵ�ǰ����ֵλ�ã�����ul�ƶ���λ��
//            animate(ul,-this.index*imgWid);
//            //��Ҫ�����Ҽ�ͷ��С�������������
//            //��Ҫ�ڵ��С����ʱͬ��count��ֵ������ǰ��ť����ֵ��ͬ
//            count=this.index;
//
//        }
//    }
//    //4.���ҽ���Ч��
//    //��������Ƴ���ʾ���ؼ�ͷ
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
//    //�����Ч��
//    var count=0;
//    //��ul�еĵ�һ��li���п�¡������Ϊ�������޷����Ч��
//    ul.appendChild(lisUl[0].cloneNode(true));
//    arrLeft.onclick=function(){
//        //����ʾ��ͼƬΪ��һ��ʱ����������ť����Ҫ��ص��ٵĵ�һ����ʾ��λ�ã�countҲ��Ҫ��Ӧ����
//        if(count==0){
//            ul.style.left=-(lisUl.length-1)*imgWid+"px";
//            count=lisOl.length;
//        }
//        count--;
//        animate(ul,-count*imgWid);
//        //����count��ֵ,���ö�Ӧ��С�����ɫ
//        for (var i = 0; i < lisOl.length; i++) {
//            lisOl[i].className="";
//        }
//        lisOl[count].className="current";
//    }
//    //�Ҳ���Ч��
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
//    //5.�Զ�����
//    var timer=null;
//    timer=setInterval(function(){
//        arrRight.click();
//    },2000);
})
//setInterval(function () {
//    arrow-right.click();
//}, 1000);
//con4 �ֲ�ͼ
//1 ��ȡԪ��
var box= document.getElementById("lunbo");
var imgWid=1366;
var ul=document.getElementsByClassName("slider").children[0];
var lisUl = ul.children;//���е�ͼƬli
var ol =document.getElementsByClassName("slider").children[1];//����С�����λ��
var lisOl = ol.children;//Ҫ������С����
var arrBox = box.children[1];
var arrLeft = arrBox.children[0];
var arrRight = arrBox.children[1];
//2.����С����
var li;
for (var i = 0; i <lisUl.length; i++) {
    li=document.createElement("li");
    li.innerText=i+1;
    ol.appendChild(li);
}
//����һ��С��������Ĭ����ɫ
lisOl[0].className="current";
//3.���ֲ�ͼЧ��
for (var i = 0; i < lisOl.length; i++) {
    lisOl[i].index=i;
    lisOl[i].onclick=function(){
        //�����ť1ʱ���жϣ������ǰΪ�ٵĵ�һ�ţ�ֱ�ӳ�ص�0
        if(count==lisOl.length){
            ul.style.left=0+"px";
//       count=0;
        }
        for (var i = 0; i < lisOl.length; i++) {
            lisOl[i].className="";
        }
        this.className="current";
        //���ݵ�ǰ����ֵλ�ã�����ul�ƶ���λ��
        animate(ul,-this.index*imgWid);
        //��Ҫ�����Ҽ�ͷ��С�������������
        //��Ҫ�ڵ��С����ʱͬ��count��ֵ������ǰ��ť����ֵ��ͬ
        count=this.index;

    }
}
//4.���ҽ���Ч��
//��������Ƴ���ʾ���ؼ�ͷ
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
//�����Ч��
var count=0;
//��ul�еĵ�һ��li���п�¡������Ϊ�������޷����Ч��
ul.appendChild(lisUl[0].cloneNode(true));
arrLeft.onclick=function(){
    //����ʾ��ͼƬΪ��һ��ʱ����������ť����Ҫ��ص��ٵĵ�һ����ʾ��λ�ã�countҲ��Ҫ��Ӧ����
    if(count==0){
        ul.style.left=-(lisUl.length-1)*imgWid+"px";
        count=lisOl.length;
    }
    count--;
    animate(ul,-count*imgWid);
    //����count��ֵ,���ö�Ӧ��С�����ɫ
    for (var i = 0; i < lisOl.length; i++) {
        lisOl[i].className="";
    }
    lisOl[count].className="current";
}
//�Ҳ���Ч��
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
//5.�Զ�����
var timer=null;
timer=setInterval(function(){
    arrRight.click();
},2000);
