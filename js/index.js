/**
 * Created by linchun on 16/9/5.
 */
//颜色选择器插件
'use strict'

$(document).ready(function() {
    $("#myFontColor").spectrum({
        color: "#ffffff",
        preferredFormat: "hex",
        showInput: true,
        cancelText: ''
    });

    $("#myBgColor").spectrum({
        color: "#4199fb",
        preferredFormat: "hex",
        showInput: true,
        cancelText: ''
    });
    $("#startColor").spectrum({
        color: "#4199fb",
        preferredFormat: "hex",
        showInput: true
    });
    $("#endColor").spectrum({
        color: "#9fc5ec",
        preferredFormat: "hex",
        showInput: true
    });

    //开场动画效果,左右模块移动位置
    $('.left').animate({
        left: 0
    }, 1000);
    $('.right').animate({
        right: 0
    }, 1000);

    //光标获取事件
    $('#startContent').focus(function() {
        $(this).css({
            "border": "1px solid #F96437",
            "box-shadow": "0 0 5px rgba(0, 0, 0, 0.3)"
        });
        if ($(this).val() != null) {
            $('.clean-btn').eq(0).animate({
                "opacity": 1,
                "right": "6px"
            }, 300)
        };
    });
    //satrt光标移除事件
    $('#startContent').blur(function() {
        var startContent = $(this).val();
        $('#startPut').val(startContent);
        $(this).css({
            "border": "1px solid #dddddd",
            "box-shadow": "none"
        });
        $('#rightStart').html(startContent);
        $('.clean-btn').eq(0).animate({
            "opacity": 0,
            "right": 0
        }, 300);
    });
    //光标获取事件
    $('#myContent').focus(function() {
        $(this).css({
            "border": "1px solid #F96437",
            "box-shadow": "0 0 5px rgba(0, 0, 0, 0.3)"
        })
    });
    //光标移除事件
    var arr = [];
    $('#myContent').blur(function() {
        var myContent = $(this).val()
            //识别回车键并换行
        myContent = myContent.replace(/\n/g, "<br>");
        arr = myContent.split('<br>');
        // console.log(arr.length);
        var h = "";
        var t = ""
        for (var i = 0; i < arr.length; i++) {
            h += "<p class='content indent'>" + arr[i] + "</p>";
        }
        //console.log(myContent)
        $(this).css({
            "border": "1px solid #dddddd",
            "box-shadow": "none"
        })
        $('#rightContent').html(h);
        $('.storageText').html(myContent);
        $('#headPut').val(myContent);
    });

    //输入银行光标获取事件
    $('#bankContent').focus(function() {
        $(this).css({
            "border": "1px solid #F96437",
            "box-shadow": "0 0 5px rgba(0, 0, 0, 0.3)"
        });
        if ($(this).val() != null) {
            $('.clean-btn').eq(1).animate({
                "opacity": 1,
                "right": "6px"
            }, 300)
        }
    });
    //输入银行光标移除事件
    $('#bankContent').blur(function() {
        var bankContent = $(this).val();
        $(this).css({
            "border": "1px solid #dddddd",
            "box-shadow": "none"
        })
        $('#rightBank').html(bankContent);
        $('.clean-btn').eq(1).animate({
            "opacity": 0,
            "right": 0
        }, 300);
        $('#bankPut').val(bankContent);
    });
    //输入日期光标获取事件
    $('#dateContent').focus(function() {
        $(this).css({
            "border": "1px solid #F96437",
            "box-shadow": "0 0 5px rgba(0, 0, 0, 0.3)"
        });
        if ($(this).val() != null) {
            $('.clean-btn').eq(2).animate({
                "opacity": 1,
                "right": "6px"
            }, 300)
        }
    });
    //输入日期光标移除事件
    $('#dateContent').blur(function() {
        var dateContent = $(this).val();
        $(this).css({
            "border": "1px solid #dddddd",
            "box-shadow": "none"
        })
        $('#rightDate').html(dateContent);
        $('.clean-btn').eq(2).animate({
            "opacity": 0,
            "right": 0
        }, 300);
        $('#timePut').val(dateContent);
    });
    //色值十进制值,获取焦点和失去焦点的事件
    $('.sp-input').focus(function() {
        $(this).css({
            border: "1px solid orange"
        })
    });
    $('.sp-input').blur(function() {
        $(this).css({
            border: "none"
        })
    });
    //点击选择字体大小
    $('.arrow').click(function() {
        if ($('.fontSizeList').hasClass('hide')) {
            $('.fontSizeList').removeClass('hide');
            $('.fontSizeList').addClass('show');
        } else {
            $('.fontSizeList').removeClass('show');
            $('.fontSizeList').addClass('hide');
        }
    })
    $('.fontSizeList li').click(function() {
        $('#myFontSize').html($(this).html());
        var rightFontSize = $('#myFontSize').html();
        var indent = 2 * parseInt(rightFontSize) + 'px';
        var lineHeight = parseInt(rightFontSize) + 5 + 'px';
        var paddingTop = 4 * parseInt(rightFontSize) + 'px';
        $('.fontSizeList').removeClass('show');
        $('.fontSizeList').addClass('hide');
        $('.main').css({
            'padding-top': paddingTop,
            'padding-left': rightFontSize,
            'padding-right': rightFontSize
        });
        $('.main p').css({
            'fontSize': rightFontSize,
            'line-height': lineHeight
        });
        $('#rightContent').css({
            'margin-top': rightFontSize,
        });
        var oldFontSize = "";
        $('#rightContent').css('text-indent', indent);
        oldFontSize = parseInt(rightFontSize) * 0.533 / 17 + 'rem';
        $('.oldFontSize').html(oldFontSize);
        $('#sizePut').val(oldFontSize);
    })
});

window.onload = function() {
    // var getKey;
    // var str = '';
    // document.onkeydown=function(event){
    //     console.log(event);
    //     str += event.key;
    //     console.log(str)
    //     var e = event || window.event || arguments.callee.caller.arguments[0];
    //     if(e && e.keyCode==27){ // 按 Esc 
    //         //要做的事情
    //       }
    //     if(e && e.keyCode==113){ // 按 F2 
    //          //要做的事情
    //        }            
    //      if(e && e.keyCode==13){ // enter 键
    //          //要做的事情
    //     }
    // }; 
    //页面初始化时调http://10.180.186.179:8068/getAnnouncementBefore
    // getKey = document.getElementById('result').contentWindow.document.body.innerHTML;;
    // console.log(getKey)
    // document.querySelector('input[name=_csrf]').value = getKey;

    //初始字体颜色
    var fontColor = document.getElementsByClassName('sp-input')[0].value;
    document.querySelector('input[name=fontColor]').value = fontColor;
    document.getElementsByClassName('main')[0].style.color = fontColor;
    console.log(document.getElementsByClassName('sp-input')[0].value);

    /*初始背景色
     **定义两个全局变量来检测色值的变化
     */
    var bgColor = document.getElementsByClassName('sp-input')[1].value;
    var hexStart = document.getElementsByClassName('sp-input')[2].value;
    document.querySelector('input[name=headColor]').value = hexStart;
    var hexEnd = document.getElementsByClassName('sp-input')[3].value;
    document.querySelector('input[name=footColor]').value = hexEnd;
    //console.log(hexStart)
    document.getElementsByClassName('main')[0].style.backgroundColor = bgColor;

    var checkColor = document.getElementById("checkColor");
    var initStart = "亲爱的用户:";
    document.querySelector('input[name=headContent]').value = initStart;
    var initContent = "尊敬的客户您好，为了给您提供更优质的服务，我们计划在2016年8月27日0:00-8:00进行系统维护，期间影响非紫金银行的银行卡往紫金银行的电子账户充值，给您带来不便，深表歉意。";
    // var initEnd = "感谢您的理解，谢谢。";
    document.querySelector('input[name=mainContent]').value = initContent;
    var initBank = "紫金农商银行";
    document.querySelector('input[name=bankName]').value = initBank;
    var initDate = "2016年9月26日";
    document.querySelector('input[name=time]').value = initDate;
    document.querySelector('input[name=fontSize]').value = 0.533;
    var isFirefox = navigator.userAgent.indexOf('Firefox') >= 0;
    //初始样式,初始勾选渐变,初始内容显示
    if (checkColor.checked == false) {
        checkColor.checked = true;
        document.getElementsByClassName('main')[0].style.background = "-webkit-linear-gradient(top," + hexStart + "," + hexEnd + ")";
    } else {
        console.log('fail');
    };
    document.getElementById("rightStart").innerHTML = initStart;
    document.getElementById("rightContent").innerHTML = initContent;
    document.getElementById("rightBank").innerHTML = initBank;
    document.getElementById("rightDate").innerHTML = initDate;
    document.getElementById('startContent').value = initStart;
    document.getElementById('myContent').value = initContent;
    document.getElementById('bankContent').value = initBank;
    document.getElementById('dateContent').value = initDate;

    //点击X按钮清除内容
    document.getElementsByClassName('clean-btn')[0].onclick = function() {
        document.getElementById('startContent').value = "";
        document.getElementById('rightStart').innerHTML = "";
    };
    document.getElementsByClassName('clean-btn')[1].onclick = function() {
        document.getElementById('bankContent').value = "";
        document.getElementById('rightBank').innerHTML = "";
    };
    document.getElementsByClassName('clean-btn')[2].onclick = function() {
        document.getElementById('dateContent').value = "";
        document.getElementById('rightDate').innerHTML = "";
    };
    //check方法,判断是否选中,是否渐变显示
    function check() {
        if (checkColor.checked == true) {
            document.getElementsByClassName('main')[0].style.background = "-webkit-linear-gradient(top," + hexStart + "," + hexEnd + ")";
            document.querySelector('input[name=gradient]').value = true;
            document.querySelector('input[name=headColor]').value = hexStart;
        } else {
            document.getElementsByClassName('main')[0].style.background = bgColor;
            document.querySelector('input[name=gradient]').value = false;
            document.querySelector('input[name=headColor]').value = bgColor;
        }
    };
    //判断浏览器类型
    var isChrome = window.navigator.userAgent.indexOf("Chrome") !== -1;
    if (!isChrome) {
        console.log("不是Chrome浏览器");
    } else {
        var spChoose = document.getElementsByClassName('sp-choose');
        for (var i = 0; i < 4; i++) {
            spChoose[i].style.display = "none";
        }
        //spChoose[0].style.display = "none"
    }

    //choose应用按钮
    var choose = document.getElementsByClassName('sp-choose')[0];
    choose.onclick = function() {
        console.log('ok');
        var hex = document.getElementsByClassName('sp-input')[0].value;
        //console.log(hex)
        document.getElementsByClassName('main')[0].style.color = hex;
    }

    //色板点击事件
    var sp = document.getElementsByClassName('sp-top')[0];
    sp.onclick = function() {
        var hex = document.getElementsByClassName('sp-input')[0].value;
        //console.log(hex)
        document.getElementsByClassName('main')[0].style.color = hex;
        document.querySelector('input[name=fontColor]').value = hex;
    };
    //色板输入
    var fontColorInset = document.getElementsByClassName('sp-input')[0];

    fontColorInset.onblur = function() {
        var value = fontColorInset.value;
        document.getElementsByClassName('main')[0].style.color = value;
        document.querySelector('input[name=fontColor]').value = value;
    };

    var spChoose = document.getElementsByClassName('sp-choose')[1];
    spChoose.onclick = function() {
        bgColor = document.getElementsByClassName('sp-input')[1].value;
        check();
    };

    //背景选择
    var spBg = document.getElementsByClassName('sp-top')[1];
    spBg.onclick = function() {
        bgColor = document.getElementsByClassName('sp-input')[1].value;
        //console.log(bgColor)
        check();
    };

    //背景色板输入
    var bgColorInset = document.getElementsByClassName('sp-input')[1];
    bgColorInset.onblur = function() {
        bgColor = bgColorInset.value;
        check();
    };

    //点击选择背景色时,不渐变,设为当前纯色背景
    var bgButton = document.getElementsByClassName('sp-replacer')[1];
    bgButton.onclick = function() {
        checkColor.checked = false;
        document.getElementsByClassName('main')[0].style.background = bgColor;
    }

    //判断checkbox的状态,选择是否渐变
    checkColor.onclick = function() {
        check();
    };

    var startChoose = document.getElementsByClassName('sp-choose')[2];
    startChoose.onclick = function() {
        hexStart = document.getElementsByClassName('sp-input')[2].value;
        document.querySelector('input[name=headColor]').value = hexStart;
        check();
    };

    //bgStart色板点击事件
    var spStart = document.getElementsByClassName('sp-top')[2];

    spStart.onclick = function() {
        hexStart = document.getElementsByClassName('sp-input')[2].value;
        document.querySelector('input[name=headColor]').value = hexStart;
        //console.log("hexStart:"+hexStart + "+hexEnd:" + hexEnd)
        check();
        //当点击了选择背景色之后
        checkColor.onclick = function() {
            check();
        }
    };

    //bgStart色板输入事件
    var bgStartInsert = document.getElementsByClassName('sp-input')[2];
    bgStartInsert.onblur = function() {
        hexStart = bgStartInsert.value;
        document.querySelector('input[name=headColor]').value = hexStart;
        check();
    }

    //点击应用按钮(主要是用于safari浏览器,Chrome浏览器按钮是隐藏的)
    var endChoose = document.getElementsByClassName('sp-choose')[3];
    endChoose.onclick = function() {
        hexEnd = document.getElementsByClassName('sp-input')[3].value;
        document.querySelector('input[name=footColor]').value = hexEnd;
        check();
    };
    //bgEnd色板点击事件
    var spEnd = document.getElementsByClassName('sp-top')[3];
    spEnd.onclick = function() {
        hexEnd = document.getElementsByClassName('sp-input')[3].value;
        document.querySelector('input[name=footColor]').value = hexEnd;
        //console.log("hexEnd:"+hexEnd)
        check();
    };
    //bgEnd色板输入事件
    var bgEndInsert = document.getElementsByClassName('sp-input')[3];
    bgEndInsert.onblur = function() {
        hexEnd = bgEndInsert.value;
        document.querySelector('input[name=footColor]').value = hexEnd;
        check();
    };

    // 上传背景
    var fileInput = document.getElementById('test-image-file');
    var info = document.getElementsByClassName('showImgName')[0];
    var photo;
    var photoUrl;
    fileInput.addEventListener('change', function() {
        console.log('change...');
        var imgSize = fileInput.files[0].size;
        console.log(imgSize);
        var imgKb = Math.floor(imgSize / 1024);
        // preview.style.backgroundImage = '';
        if (!fileInput.value) {
            info.innerHTML = '没有选择文件';
            return;
        }
        var file = fileInput.files[0];
        // info.innerHTML = '文件:' + file.name + '<br>' + '大小:' + file.size + '<br>' + '修改:' + file.lastModifiedDate;
        if (file.type !== 'image/jpeg' && file.type !== 'image/png' && file.type !== 'image/gif') {
            alert('请选择有效的图片文件!');
            return;
        }

        var reader = new FileReader();
        // 限制图片大小小于120kb,前端页面展示为小于80kb
        if (imgKb <= 120) {
            info.innerHTML = file.name;
            reader.onload = function(e) {
                console.log('reader.onload');
                var data = e.target.result;
                // console.log(data);
                photo = data;
                photoUrl = photo.substring((photo.indexOf(',') + 1), photo.length);
                // console.log(photoUrl);
                // 可设置背景图片
                document.getElementsByClassName('main')[0].style.background = 'url(' + data + ')';
                document.getElementsByClassName('main')[0].style.backgroundSize = '100%';
                //上传图片后清除文字
                document.getElementsByClassName('main')[0].innerHTML = '';
                document.querySelector('input[name=headColor]').value = '';
                document.querySelector('input[name=footColor]').value = '';

            };
            reader.readAsDataURL(file);
        } else {
            document.querySelector('input[name=bgImg]').value = '';
            alert('请上传小于80kb的背景图片!')
        }
    });

    /*点击download
     **定义数据,传给后台.
     */
    // var button = document.getElementsByClassName('button')[0];
    // var myGradient,
    //     myHeadContent,
    //     myMainContent,
    //     myFootContent,
    //     headColor,
    //     bankName,
    //     time,
    //     fontSize,
    //     bgImg;
    // button.onclick = function() {
    //     //gradient,是否渐变
    //     if (checkColor.checked == true) {
    //         myGradient = true;
    //         headColor = hexStart;
    //     } else {
    //         myGradient = false;
    //         headColor = bgColor;
    //     }
    //     myHeadContent = document.getElementById("rightStart").innerHTML;
    //     myMainContent = document.getElementsByClassName('storageText')[0].innerHTML;
    //     console.log(myMainContent)

    //     bankName = document.getElementById("rightBank").innerHTML;
    //     time = document.getElementById("rightDate").innerHTML;
    //     fontSize = document.getElementsByClassName('oldFontSize')[0].innerHTML;
    //     var jsondata = {
    //         gradient: encodeURIComponent(myGradient),
    //         headColor: encodeURIComponent(headColor),
    //         footColor: encodeURIComponent(hexEnd),
    //         headContent: encodeURIComponent(myHeadContent),
    //         mainContent: encodeURIComponent(myMainContent).replace(/%3Cbr%3E/g, "<br>"),
    //         bankName: encodeURIComponent(bankName),
    //         time: encodeURIComponent(time),
    //         fontColor: encodeURIComponent(fontColor),
    //         fontSize: encodeURIComponent(fontSize)
    //     };

    //     //ajax
    //     ajax({
    //         // url: "http://10.180.184.109:8068/getAnnouncement", //请求地址
    //         url: "http://test.pinganh5.com/getAnnouncement", //请求地址
    //         type: "POST", //请求方式
    //         data: jsondata,
    //         dataType: "JSON",
    //         success: function(res, xml) {
    //             console.log(res);
    //             jsondata;
    //             var str = '';
    //             for (var key in jsondata) {
    //                 if (str != '') {
    //                     str += '&';
    //                 }
    //                 str += key + '=' + jsondata[key];
    //             }
    //             console.log(str)
    //             var url = "http://test.pinganh5.com/getAnnouncement?" + str;
    //             // console.log(url);
    //             window.location.href = url;

    //         }
    //     });
    // };

    // //封装好的ajax方法
    // function ajax(options) {
    //     options = options || {};
    //     options.type = (options.type || "GET").toUpperCase();
    //     options.dataType = options.dataType || "json";
    //     var params = formatParams(options.data);

    //     //创建 - 非IE6 - 第一步
    //     if (window.XMLHttpRequest) {
    //         var xhr = new XMLHttpRequest();
    //     } else {
    //         //IE6及其以下版本浏览器
    //         var xhr = new ActiveXObject('Microsoft.XMLHTTP');
    //     }

    //     //接收 - 第三步
    //     xhr.onreadystatechange = function() {
    //         if (xhr.readyState == 4) {
    //             var status = xhr.status;
    //             if (status >= 200 && status < 300) {
    //                 options.success && options.success(xhr.responseText, xhr.responseXML);
    //             } else {
    //                 options.fail && options.fail(status);
    //             }
    //         }
    //     }

    //     //连接 和 发送 - 第二步
    //     if (options.type == "GET") {
    //         xhr.open("GET", options.url + "?" + params, true);
    //         xhr.send(null);
    //     } else if (options.type == "POST") {
    //         xhr.open("POST", options.url, true);
    //         //设置表单提交时的内容类型
    //         xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    //         xhr.send(params);
    //     }
    // }

    // //格式化参数
    // function formatParams(data) {
    //     var arr = [];
    //     for (var name in data) {
    //         arr.push(encodeURIComponent(name) + "=" + encodeURIComponent(data[name]));
    //     }
    //     arr.push(("v=" + Math.random()).replace(".", ""));
    //     return arr.join("&");
    // }
}
