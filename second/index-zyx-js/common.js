/**
 * Created by 王冰洋 on 2017/8/29.
 */


/**
 * 根据id名获取元素
 * @param idName  需要获取的元素的id名
 */
function id(idName) {
    return document.getElementById(idName)
}


/**
 * 根据标签名获取元素
 * @param tagName
 * @returns {NodeList} 返回值为伪元素
 */
function tagName(tagName) {
    return document.getElementsByTagName(tagName)
}


/**
 * 用于对标签进行指定类名的修改
 * @param element 要进行类名修改的元素
 * @param searchValue 要修改的类名部分，字符串类型
 * @param replaceValue 要设置为的新类名，字符串类型
 */
function changeClass(element, searchValue, replaceValue) {
    //获取到标签当前的类名
    var oldClass = element.className;
    //先将获取到的类名按照" "分割，再去查看内部的每个类名部分
    var classArr = oldClass.split(" ");
    //从classArr中找到需要的部分，修改为新的类名
    var index = classArr.indexOf(searchValue);
    //设置为新的类名值
    classArr[index] = replaceValue;
    //将设置完的类名合并后，设置给className属性
    element.className = classArr.join(" ");
}


/**tab
 * 设置tab栏---div下有复制点击转换的span栏和点击后进行显示或者的li
 * @param element 父盒子div
 */
function createTab(element) {
    //1 获取元素
    var sps = element.getElementsByTagName("span");
    var lis = element.getElementsByTagName("li");
    var count = 0;//设置当前变色的span的索引值
    //2 遍历sps，设置点击事件
    for (var i = 0; i < sps.length; i++) {
        //设置每个span的索引值属性
        sps[i].index = i;
        //设置点击事件
        sps[i].onclick = function () {
            //3 清除上次显示的span和li的类名
            sps[count].className = "";
            lis[count].className = "";

            //4 设置当前点击的span以及对应的li变色或显示
            this.className = "current";
            lis[this.index].className = "show";

            //5 更新count值
            count = this.index;
        };
    }
}


/**
 * 根据class类名获取元素
 * @param className
 * @param element 是可选参数，如果不写默认表示默认在body中获取，如果传入，表示指定标签内获取
 * @returns {*}
 */
function getByClass(className, element) {
    //可以通过给可选参数设置默认值
    //1 如果用户传入了标签，element取值不变
    //2 如果用户没有传入参数2，element会取默认值body
    element = element || document.body;

    //1 能力检测
    if (typeof element.getElementsByClassName == "function") {
        return element.getElementsByClassName(className);
    } else {
        //2 自己书写功能进行实现
        //2.1 先获取出所有标签(在body中获取)
        var tags = element.getElementsByTagName("*");
        var resultArr = [];//声明一个数组用于保存结果
        //2.2 遍历每个标签，检测className属性
        for (var i = 0; i < tags.length; i++) {
            //2.3 取出每个标签的类名
            var tempClass = tags[i].className;
            //2.4 为了检测准确，先将当前类名按照空格分隔
            var tempArr = tempClass.split(" ");
            //2.5 遍历tempArr检测是否含有指定的类名
            for (var j = 0; j < tempArr.length; j++) {
                if (tempArr[j] == className) {
                    //2.6 将当前类名所属的标签取出
                    resultArr.push(tags[i]);
                    break;
                }
            }
        }
        return resultArr;
    }
}


/**文本操作
 * 设置标签内文本,获取或者添加新文本;
 * @param element 操作的元素节点,标签
 * @param xinText 需要添加的文本内容;参数2,可以不写,不写为获取文本
 * @returns {*}
 */
function text(element, xinText) {
    //法1 使用arguments进行判断
    if (arguments.length == 1) {
        //获取内容功能
        return typeof element.innerText == "string" ? element.innerText : element.textContent;
    } else {
        //设置内容功能
        (typeof element.innerText == "string") ? (element.innerText = xinText ) : ( element.textContent = xinText);
    }
}


/**  用于获取页面可视区域的尺寸(宽高)
 *    直接  myClient().width ,myClient().height
 *    配合下面函数使用
 *    window.onresize=function(){
			console.log(myClient().width,myClient().height);
            };
 * @returns {Object}
 */
// 用于获取页面可视区域的尺寸(宽高)
function myClient() {
    var obj = new Object();
    obj.width = window.innerWidth || document.body.clientWidth || document.documentElement.clientWidth
    obj.height = window.innerHeight || document.body.clientHeight || document.documentElement.clientHeight
    return obj;
}


/**
 * 获取卷曲内容的高度和宽度
 * @returns {{scrollTop: (Number|number), scrollLeft: (Number|number)}}
 */
function myScroll() {
    return {
        scrollTop: window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop,
        scrollLeft: window.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft
    };
}


/**
 * //获取鼠标针对页面可视区域的坐标的封装函数,包括能力检测问题
 * @param e
 * @returns {*}
 */

function getPageX(e) {
    if (typeof e.pageX == "number") {
        return e.pageX;
    } else {
        return e.clientX + myScroll().scrollLeft;
    }
}
function getPageY(e) {
    if (typeof e.pageY == "number") {
        return e.pageY;
    } else {
        return e.clientY + myScroll.scrollTop
    }
}


/**
 * 变速运动最终优化,可以同时设置多种样式变动,兼容透明度和层级函数,以及变速玩可以增加一个函数事件
 * @param element  要进行animate的元素标签
 * @param datas    需要变动的属性的对象集合
 * @param fn      运动完毕后添加的回调函数
 */
function animate(element, datas, fn) {

    clearInterval(element.timer);
    element.timer = setInterval(function () {

        //1 设置假设条件：假设本轮定时器执行后可以进行清除
        var flag = true;

        //先对获取到的数据进行遍历，对每一组数据进行相同操作即可
        for (var k in datas) {
            //针对透明度和层级进行单独处理
            if (k == "opacity") {
                var styleName = k;
                var target = datas[k] * 100;

                //opacity是c3属性，使用getStyle获取后不会出现"auto"
                //js中的小数进行加减计算会出现精度问题
                var current = getStyle(element, styleName) * 100;
                var step = (target - current) / 10;
                step = step > 0 ? Math.ceil(step) : Math.floor(step);
                current = current + step;
                //设置透明度时，除以设置过的对应倍数
                element.style[styleName] = current / 100;

                if (current != target) {
                    flag = false;
                }
            } else if (k == "zIndex") {
                //层级为整数值，所以不需要设置运动效果,直接设置为指定值即可
                element.style.zIndex = datas[k];
            } else {
                //styleName： 实际上是k
                //target： 实际上是obj[k]
                var styleName = k;
                var target = datas[k];

                //下面这段代码可以让某一个样式运动到指定的位置
                var current = parseInt(getStyle(element, styleName)) || 0;
                var step = (target - current) / 10;
                step = step > 0 ? Math.ceil(step) : Math.floor(step);
                current = current + step;
                element.style[styleName] = current + "px";

                //此位置原来是书写清除定时器的代码位置，但是某个样式运动完毕并不能进行清除，其他样式可能没到，使用假设成立法解决
                //2 找到假设失败的条件：如果某个样式运动时没有到达指定位置，阻止清除
                if (current != target) {
                    flag = false;
                }
            }
        }
        //需要整体检测，只有每个样式都到达了指定位置才可以设置清除
        //3 验证flag的值
        if (flag) {
            clearInterval(element.timer);
            if (typeof fn == "function") {
                fn();
            }
        }

    }, 20);
}


/**
 * 获取元素style样式样式
 * @param element
 * @param styleName
 * @returns {*}
 */
function getStyle(element, styleName) {
    //currentStyle   getComputedStyle
    if (element.currentStyle) {
        return element.currentStyle[styleName];
    } else {
        return getComputedStyle(element, null)[styleName];
    }
}