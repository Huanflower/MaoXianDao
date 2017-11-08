/**
 * Created by ������ on 2017/8/29.
 */


/**
 * ����id����ȡԪ��
 * @param idName  ��Ҫ��ȡ��Ԫ�ص�id��
 */
function id(idName) {
    return document.getElementById(idName)
}


/**
 * ���ݱ�ǩ����ȡԪ��
 * @param tagName
 * @returns {NodeList} ����ֵΪαԪ��
 */
function tagName(tagName) {
    return document.getElementsByTagName(tagName)
}


/**
 * ���ڶԱ�ǩ����ָ���������޸�
 * @param element Ҫ���������޸ĵ�Ԫ��
 * @param searchValue Ҫ�޸ĵ��������֣��ַ�������
 * @param replaceValue Ҫ����Ϊ�����������ַ�������
 */
function changeClass(element, searchValue, replaceValue) {
    //��ȡ����ǩ��ǰ������
    var oldClass = element.className;
    //�Ƚ���ȡ������������" "�ָ��ȥ�鿴�ڲ���ÿ����������
    var classArr = oldClass.split(" ");
    //��classArr���ҵ���Ҫ�Ĳ��֣��޸�Ϊ�µ�����
    var index = classArr.indexOf(searchValue);
    //����Ϊ�µ�����ֵ
    classArr[index] = replaceValue;
    //��������������ϲ������ø�className����
    element.className = classArr.join(" ");
}


/**tab
 * ����tab��---div���и��Ƶ��ת����span���͵���������ʾ���ߵ�li
 * @param element ������div
 */
function createTab(element) {
    //1 ��ȡԪ��
    var sps = element.getElementsByTagName("span");
    var lis = element.getElementsByTagName("li");
    var count = 0;//���õ�ǰ��ɫ��span������ֵ
    //2 ����sps�����õ���¼�
    for (var i = 0; i < sps.length; i++) {
        //����ÿ��span������ֵ����
        sps[i].index = i;
        //���õ���¼�
        sps[i].onclick = function () {
            //3 ����ϴ���ʾ��span��li������
            sps[count].className = "";
            lis[count].className = "";

            //4 ���õ�ǰ�����span�Լ���Ӧ��li��ɫ����ʾ
            this.className = "current";
            lis[this.index].className = "show";

            //5 ����countֵ
            count = this.index;
        };
    }
}


/**
 * ����class������ȡԪ��
 * @param className
 * @param element �ǿ�ѡ�����������дĬ�ϱ�ʾĬ����body�л�ȡ��������룬��ʾָ����ǩ�ڻ�ȡ
 * @returns {*}
 */
function getByClass(className, element) {
    //����ͨ������ѡ��������Ĭ��ֵ
    //1 ����û������˱�ǩ��elementȡֵ����
    //2 ����û�û�д������2��element��ȡĬ��ֵbody
    element = element || document.body;

    //1 �������
    if (typeof element.getElementsByClassName == "function") {
        return element.getElementsByClassName(className);
    } else {
        //2 �Լ���д���ܽ���ʵ��
        //2.1 �Ȼ�ȡ�����б�ǩ(��body�л�ȡ)
        var tags = element.getElementsByTagName("*");
        var resultArr = [];//����һ���������ڱ�����
        //2.2 ����ÿ����ǩ�����className����
        for (var i = 0; i < tags.length; i++) {
            //2.3 ȡ��ÿ����ǩ������
            var tempClass = tags[i].className;
            //2.4 Ϊ�˼��׼ȷ���Ƚ���ǰ�������տո�ָ�
            var tempArr = tempClass.split(" ");
            //2.5 ����tempArr����Ƿ���ָ��������
            for (var j = 0; j < tempArr.length; j++) {
                if (tempArr[j] == className) {
                    //2.6 ����ǰ���������ı�ǩȡ��
                    resultArr.push(tags[i]);
                    break;
                }
            }
        }
        return resultArr;
    }
}


/**�ı�����
 * ���ñ�ǩ���ı�,��ȡ����������ı�;
 * @param element ������Ԫ�ؽڵ�,��ǩ
 * @param xinText ��Ҫ��ӵ��ı�����;����2,���Բ�д,��дΪ��ȡ�ı�
 * @returns {*}
 */
function text(element, xinText) {
    //��1 ʹ��arguments�����ж�
    if (arguments.length == 1) {
        //��ȡ���ݹ���
        return typeof element.innerText == "string" ? element.innerText : element.textContent;
    } else {
        //�������ݹ���
        (typeof element.innerText == "string") ? (element.innerText = xinText ) : ( element.textContent = xinText);
    }
}


/**  ���ڻ�ȡҳ���������ĳߴ�(���)
 *    ֱ��  myClient().width ,myClient().height
 *    ������溯��ʹ��
 *    window.onresize=function(){
			console.log(myClient().width,myClient().height);
            };
 * @returns {Object}
 */
// ���ڻ�ȡҳ���������ĳߴ�(���)
function myClient() {
    var obj = new Object();
    obj.width = window.innerWidth || document.body.clientWidth || document.documentElement.clientWidth
    obj.height = window.innerHeight || document.body.clientHeight || document.documentElement.clientHeight
    return obj;
}


/**
 * ��ȡ�������ݵĸ߶ȺͿ��
 * @returns {{scrollTop: (Number|number), scrollLeft: (Number|number)}}
 */
function myScroll() {
    return {
        scrollTop: window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop,
        scrollLeft: window.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft
    };
}


/**
 * //��ȡ������ҳ��������������ķ�װ����,���������������
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
 * �����˶������Ż�,����ͬʱ���ö�����ʽ�䶯,����͸���ȺͲ㼶����,�Լ��������������һ�������¼�
 * @param element  Ҫ����animate��Ԫ�ر�ǩ
 * @param datas    ��Ҫ�䶯�����ԵĶ��󼯺�
 * @param fn      �˶���Ϻ���ӵĻص�����
 */
function animate(element, datas, fn) {

    clearInterval(element.timer);
    element.timer = setInterval(function () {

        //1 ���ü������������豾�ֶ�ʱ��ִ�к���Խ������
        var flag = true;

        //�ȶԻ�ȡ�������ݽ��б�������ÿһ�����ݽ�����ͬ��������
        for (var k in datas) {
            //���͸���ȺͲ㼶���е�������
            if (k == "opacity") {
                var styleName = k;
                var target = datas[k] * 100;

                //opacity��c3���ԣ�ʹ��getStyle��ȡ�󲻻����"auto"
                //js�е�С�����мӼ��������־�������
                var current = getStyle(element, styleName) * 100;
                var step = (target - current) / 10;
                step = step > 0 ? Math.ceil(step) : Math.floor(step);
                current = current + step;
                //����͸����ʱ���������ù��Ķ�Ӧ����
                element.style[styleName] = current / 100;

                if (current != target) {
                    flag = false;
                }
            } else if (k == "zIndex") {
                //�㼶Ϊ����ֵ�����Բ���Ҫ�����˶�Ч��,ֱ������Ϊָ��ֵ����
                element.style.zIndex = datas[k];
            } else {
                //styleName�� ʵ������k
                //target�� ʵ������obj[k]
                var styleName = k;
                var target = datas[k];

                //������δ��������ĳһ����ʽ�˶���ָ����λ��
                var current = parseInt(getStyle(element, styleName)) || 0;
                var step = (target - current) / 10;
                step = step > 0 ? Math.ceil(step) : Math.floor(step);
                current = current + step;
                element.style[styleName] = current + "px";

                //��λ��ԭ������д�����ʱ���Ĵ���λ�ã�����ĳ����ʽ�˶���ϲ����ܽ��������������ʽ����û����ʹ�ü�����������
                //2 �ҵ�����ʧ�ܵ����������ĳ����ʽ�˶�ʱû�е���ָ��λ�ã���ֹ���
                if (current != target) {
                    flag = false;
                }
            }
        }
        //��Ҫ�����⣬ֻ��ÿ����ʽ��������ָ��λ�òſ����������
        //3 ��֤flag��ֵ
        if (flag) {
            clearInterval(element.timer);
            if (typeof fn == "function") {
                fn();
            }
        }

    }, 20);
}


/**
 * ��ȡԪ��style��ʽ��ʽ
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