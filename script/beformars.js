/////////////////////基础类///////////////////////////
//--------------------打印--------------------------
function zzyalert(isignalout, ikey) {
    alert(isignalout + "+" + JSON.stringify(ikey))
}

function zzyalerts(isignal) {
    api.addEventListener({
        name: isignal
    }, function(ret, err) {
        zzyalert(isignal, ret)
    });
}

function zzyalerttest(isignalout, ikey) {
    alert(isignalout + "+" + this.test0 + "+" + JSON.stringify(ikey));
    var st = this.test0;
    this.test0 = st + 1;
}
//--------------------------------------------------
//--------------------发送信号-----------------------
function zzysendcmdp(isignalout, idata) {
    api.sendEvent({
        name: 'cmdp',
        extra: {
            "signalout": isignalout,
            "data": idata
        }
    });
}


function zzysend(isignalout, idata) {

    api.sendEvent({
        name: isignalout,
        extra: idata
    });
}

function zzysends(is) {
    api.addEventListener({
        name: 'zzysends'
    }, function(ret, err) {
        // zzyalert('aa');
        if (ret.value.key == "nna") {

            if (is.length == 0) {

            } else {
                zzyalert('aa');

                for (var i = 0; i < is.length; i++) {
                    zzysend(is[i].signal, is[i].key)
                }
            };

            zzysend(ret.value.signal, ret.value.key)

        } else {
            is.push({
                "signal": ret.value.signal,
                "key": ret.value.key
            })
        }

    });
}



function zzysendsend(isignalout, idata) {

    zzysend('zzysends', {
        "signal": isignalout,
        "key": idata
    })

}


function zzysendk(isignalout, ikey) {
    zzyget('getee', "hello", {
        "name": "hello"
    });
    api.addEventListener({
        name: 'getee'
    }, function(ret, err) {
        zzysend(isignalout, ikey)
    });
}

function zzyget(isignalout, iclass, iwhere) {
    var client = new Resource("A6059729225688", "0E97313E-44B6-D5F0-1055-409C1C190DC0")

    var get = client.Factory(iclass);
    get.query({
            filter: {
                limit: 1000,

                where: iwhere,
            }
        },
        function(ret, err) {
            zzysend(isignalout, {
                "key": ret
            })
        })
}

function zzydel(isignalout, iclass, iid) {
    var client = new Resource("A6059729225688", "0E97313E-44B6-D5F0-1055-409C1C190DC0");
    var del = client.Factory(iclass);
    del.delete({
        "_id": iid
    }, function(ret, err) {

    });
}



function zzygetadd() {
    api.addEventListener({
        name: 'zzygets'
    }, function(ret, err) {
        //  zzyalert('555',ret)
        zzyget(ret.value.isignalout, ret.value.iclass, ret.value.iwhere)
    });

}

function zzygetsend(jsignalout, jclass, jwhere) {
    zzysend('zzygets', {
        "isignalout": jsignalout,
        "iclass": jclass,
        "iwhere": jwhere
    })
}

function zzysave(isignalout, iclass, idata) {
    var client = new Resource("A6059729225688", "0E97313E-44B6-D5F0-1055-409C1C190DC0");
    var zs = client.Factory(iclass);
    zs.save(idata, function(ret, err) {
        zzysend(isignalout, {
            "key": ret
        })
    })
}

function zget(isignalout, iclass, iwhere) {

    var client = new Resource("A6059729225688", "0E97313E-44B6-D5F0-1055-409C1C190DC0")

    var get = client.Factory(iclass);
    get.query({
            filter: {
                limit: 1000,

                where: iwhere,
            }
        },
        function(ret, err) {
            zzysend(isignalout, {
                "key": ret
            });
            return (ret)
        })

}

function zzysaves() {
    api.addEventListener({
        name: 'zzysaves'
    }, function(ret, err) {
        zzysave(ret.value.isignalout, ret.value.iclass, ret.value.idata)
    });

}



function zzyconnets() {
    var count = 0;
    var content = new Array;

    api.addEventListener({
        name: 'zzyconnets'
    }, function(ret, err) {
        content[count] = ret.value.key;
        count += 1
        if (count > ret.value.icount) {
            zzysend(ret.value.isignalout, ret.value.key)
        }
    });
}




function zzysaveid(isignalout, iclass, iid, idata) {
    var client = new Resource("A6059729225688", "0E97313E-44B6-D5F0-1055-409C1C190DC0");
    var deviceId1 = client.Factory(iclass);
    //var deviceId = api.deviceId
    deviceId1.save({
        "_id": iid
    }, idata, function(ret, err) {
        zzysend(isignalout, ret)
    })
}

function zzysaveids() {
    api.addEventListener({
        name: 'zzysaveids'
    }, function(ret, err) {
        zzysaveid(ret.value.isignalout, ret.value.iclass, ret.value.iid, ret.value.idata)
    });
}









/////////////////////////////////////////////////////////////////

//\\\\\\\\\\\\\\\\\\\\\\\\\\大车道\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
/////////////////////////////////in/out类///////////////////////

function zzygetd(isignalout) {
    zzyget(isignalout, "deviceId", {
        "deviceId": api.deviceId
    })
}

function zzygetds() {
    api.addEventListener({
        name: 'zzygetds'
    }, function(ret, err) {
        zzygetd(ret.value.isignalout)
    });
}

////////////////////////////////////////////////////////////
// function zzygetida(isignalout, iid) {
//     zzygetsend(isignalout, "list", {
//         "id": iid
//     })
// }





/**
 * 右划反悔操作
 *
 *
 */

// function zzygetidb() {
//     api.addEventListener({
//         name: 'oreturn'
//     }, function(ret, err) {
//         // zzyalert('oreturn',this.faa)
//
//         zzygetsend('o3', "list", {
//             "id": this.faa.kind
//         });
//     });
//
//     api.addEventListener({
//         name: 'o3'
//     }, function(ret, err) {
//         // zzyalert('o3',ret);
//         this.faa = ret.value.key[0];
//         this.fclick = this.faa.id
//         zzygetsend('getout', "list", {
//             "kind": this.fclick
//         })
//     });
/**
 * 右划反悔操作
 *
 *
 */



// api.addEventListener({
//     name: 'o4'
// }, function(ret, err) {
//     zzygetsend('getout', "list", {
//         "kind": ret.value.key[0].id
//     })
// });


// };



function zzygetsendid(isignalout, iid) {
    zzygetsend(isignalout, "list", {
        "id": iid
    })
}
///////////////////////////////////////////////////////////////

function zzygetsendkind(isignalout, ikind) {
    zzygetsend(isignalout, "list", {
        "kind": ikind
    })
}

function zzysaved(isignalout, idata) {
    zzysave(isignalout, "deivceId", idata)
}

function zzysaveds() {
    api.addEventListener({
        name: 'zzysaveds'
    }, function(ret, err) {
        zzysaved(ret.value.isignalout, ret.value.idata)
    });
}


function zzysaveg(isignalout, idata) {
    zzysave(isignalout, "gps", idata)
}

function zzysavegs() {
    api.addEventListener({
        name: 'zzysavegs'
    }, function(ret, err) {
        zzysaveg(ret.value.isignalout, ret.value.idata)
    });
}

function zzygetidsave(isignalout, iclass, iwhere, idata) {
    zzyget('zzyid', iclass, iwhere);
    api.addEventListener({
        name: 'zzyid'
    }, function(ret, err) {
        zzyalert('iid', ret)
        zzysaveid(isignalout, iclass, ret.value.key[0].id, idata)
    });
}

function zzygetidsaves() {
    api.addEventListener({
        name: 'zzygetidsaves'
    }, function(ret, err) {
        zzygetidsave(ret.value.isignalout, ret.value.iclass, ret.value.iwhere, ret.value.idata)
    });


}

/////////////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////////////////
function zzygetidsaveds(isignalin, isignalout) {
    api.addEventListener({
        name: isignalin
    }, function(ret, err) {
        zzygetidsave(isignalout, "deviceId", {
            "deviceId": api.deviceId
        }, ret.value.key)
    });
}

function zzygetidsaveed(isignalout, iid, ikind) {

    zzygetidsave(isignalout, "list", {
        "id": iid
    }, {
        "kind": ikind
    })

}

/////////////////////////////////////////////////////////////////////////

//////////定位并发出信号和数据-------------------------------------------------------------------
function zzygetlocation(isignalout, iautostop) {
    var map = api.require('aMap')

    map.getLocation({
            accuracy: '100m',
            autoStop: iautostop,
            filter: 1
        },
        function(ret, err) {
            zzysend(isignalout, ret)
        })
}

function zzygetlocations(isignalout, tf) {
    api.addEventListener({
        name: 'zzygetlocations'
    }, function(ret, err) {
        zzygetlocation(isignal, tf)
    });
}

function zzygetlocationsavesave(isignalout, idata) {
    zzygetlocation('locationsignal', true);
    zzysavegs('locationsignal', 'save1');
    api.addEventListener({
        name: 'save1'
    }, function(ret, err) {
        //  zzyalert('save', ret)
        zzysaveid(isignalout, "gps", ret.value.key.id, idata)
    });
}

function zzygetlocationsavesaves(isignalin, isignalout) {
    api.addEventListener({
        name: isignalin
    }, function(ret, err) {
        zzygetlocationsavesave(isignalout, ret.value.key)
    });
}


// function oopenfrmh(aa, bb, xx, yy, ww, hh) {
//
//     var header = $api.dom('header');
//     $api.fixStatusBar(header);
//     var headerPos = $api.offset(header);
//     //zzyalert('hh',headerPos)
//     var body_h = $api.offset($api.dom('body')).h;
//     var body_w = $api.offset($api.dom('body')).w;
//     api.openFrame({
//         name: aa,
//         url: bb,
//         bounces: true,
//         reload: true,
//         rect: {
//             x: xx,
//             y: yy,
//             w: ww,
//             h: hh
//         }
//     });
// }

function oopenfrm(iname, ix, iy, iw, ih) {

    var header = $api.dom('header');
    $api.fixStatusBar(header);
    var headerPos = $api.offset(header);
    // zzyalert('hh',headerPos)
    var body_h = $api.offset($api.dom('body')).h;
    var body_w = $api.offset($api.dom('body')).w;

    api.openFrame({
        name: iname,
        url: "../html/" + iname + ".html",
        bounces: false,
        vScrollBarEnabled: false,
        reload: true,
        bgColor: 'rgba(0,0,0,0.0)',
        rect: {
            x: ix,
            y: iy,
            w: iw,
            h: ih
        }
    });
};

function oopenfrmyh(iname, iy, ih) {

    // var header = $api.dom('header');
    // $api.fixStatusBar(header);
    // var headerPos = $api.offset(header);
    // // zzyalert('hh',headerPos)
    // var body_h = $api.offset($api.dom('body')).h;
    // var body_w = $api.offset($api.dom('body')).w;
    //
    // api.openFrame({
    //     name: iname,
    //     url: "../html/" + iname + ".html",
    //     bounces: true,
    //     reload: true,
    //     rect: {
    //         x: 0,
    //         y: iy,
    //         w: 'auto',
    //         h: ih
    //     }
    // });
    oopenfrm(iname, 0, iy, 'auto', ih)
}



function pop(location) {
    var popup = new auiPopup();
    popup.init({
        frameBounces: true, //当前页面是否弹动，（主要针对安卓端）
        location: location, //位置，top(默认：顶部中间),top-left top-right,bottom,bottom-left,bottom-right
        buttons: [{
            text: '微信',
            value: 'wx' //可选
        }, {
            image: '../image/share/wx-circle.png',
            text: '朋友圈',
            value: 'wx-circle'
        }, {
            image: '../image/share/qq.png',
            text: 'QQ好友',
            value: 'qq'
        }, {
            image: '../image/share/qzone.png',
            text: 'QQ空间',
            value: 'qq-qzone'
        }, {
            image: '../image/share/sina-weibo.png',
            text: '新浪微博'
        }],
    }, function(ret) {
        if (ret) {

            //  zzyalert('11',ret)
        }
    })
}


function dotarray(isignalout, idata, itemp, ii) {

    var listi = doT.template($api.dom(itemp).innerHTML);
    $api.dom(ii).innerHTML = listi(idata);
    zzysend(isignalout, idata)

}

function dotarrayadd() {
    api.addEventListener({
        name: 'dotarrays'
    }, function(ret, err) {
        dotarray(ret.value.isignalout, ret.value.idata, ret.value.itemp, ret.value.ii)
    });

}

function dotarraysend(jsignalout, jdata, jtemp, ji) {
    zzysend('dotarrays', {
        "isignalout": jsignalout,
        "idata": jdata,
        "itemp": jtemp,
        "ii": ji
    })
};
//////////判断数据库中是否有数据，有数据就给出信号-----------------------------------------------------

function sws(isignall, isignalr) {
    api.addEventListener({
        name: 'swipeleft'
    }, function(ret, err) {
        zzysend(isignall, ret)
    });
    api.addEventListener({
        name: 'swiperight'
    }, function(ret, err) {
        zzysend(isignalr, ret)
    })
}

function sequence(aa, bb) {
    var cc = aa;
    aa = bb;
    bb = cc
}

function zzytouchmove(isignalout, ibody, xw, yw) {
    $(ibody).bind('touchstart', function(e) {    
        startX = e.originalEvent.touches[0].pageX,     startY = e.originalEvent.touches[0].pageY;


        //zzysend('startt',{"startX":startX,"startY":startY,"xr":xr,"yr":yr})

    })

    $(ibody).bind('touchmove', function(e) {

        //zzyalert('tt')
             //获取滑动屏幕时的X,Y
            
        endX = e.originalEvent.touches[0].pageX,     endY = e.originalEvent.touches[0].pageY;     //获取滑动距离
            
        distanceX = endX - startX;    
        distanceY = endY - startY;
        var xr = Math.round(startX / xw);
        var yr = Math.round(startY / yw);     //判断滑动方向
            
        if (Math.abs(distanceX) > Math.abs(distanceY) && distanceX > 10) {        
            zzysend(isignalout, {
                "direction": "right",
                "distance": Math.abs(distanceX),
                "startX": startX,
                "startY": startY,
                "xr": xr,
                "yr": yr
            });

                
        } else if (Math.abs(distanceX) > Math.abs(distanceY) && distanceX < -10) {         
            zzysend(isignalout, {
                "direction": "left",
                "distance": Math.abs(distanceX),
                "startX": startX,
                "startY": startY,
                "xr": xr,
                "yr": yr
            });    
        } else if (Math.abs(distanceX) < Math.abs(distanceY) && distanceY < -10) {        
            zzysend(isignalout, {
                "direction": "up",
                "distance": Math.abs(distanceY),
                "startX": startX,
                "startY": startY,
                "xr": xr,
                "yr": yr
            });    
        } else if (Math.abs(distanceX) < Math.abs(distanceY) && distanceY > 10) {        
            zzysend(isignalout, {
                "direction": "down",
                "distance": Math.abs(distanceY),
                "startX": startX,
                "startY": startY,
                "xr": xr,
                "yr": yr
            });    
        }
    }) 
};

function zzytest(a) {
    api.addEventListener({
        name: 'ppp'
    }, function(ret, err) {
        if (a == 0) {
            a = 1;
            //  zzyalert('++',a)
            zzysend('ppp')
        } else if (a == 1) {
            a = 2;
            //  zzyalert('++',a)
            zzysend('ppp');
        } else if (a == 2) {
            a = 0;
            //  zzyalert('99','99')

        }
    });

}

//

//function delall(isignalout,opid,isequence){
//api.addEventListener({
//  name: 'delall'
////    var opid = ret.value.key[0].id;
//    zzysaveid('sdel', "list", opid, {
//            "pro": isequence;
//        });});}
//////////////////////////////////////////////////////////


/////////////////////////////////////////////////////////
function zzyiobj(iiobj) {
    api.addEventListener({
        name: 'zzyiobj'
    }, function(ret, err) {
        if (iiobj == 0) {
            iiobj = 1
        } else if (iiobj == 1) {
            iiobj = 0;
            zzysend()

            for (var i = 0; i < this.aaobj.length; i++) {
                //  zzyalert("666",this.sequence);
                //  zzyalert("+", this.sequence[i]);

                this.listobj[i] = {
                    "name": this.aaobj[this.sequence[i]].name
                };
                this.idobj[i] = {
                    "id": this.aaobj[this.sequence[i]].id
                }
            };
            zzyalert('888', this.idobj)
            zzysend('bb')
        }
    });

};



function zzyodel() {
    api.addEventListener({
        name: 'odel'
    }, function(ret, err) {
        //  zzyalert('odel',ret)
        var edel = ret.value.key;
        if (edel.length > 0) {
            for (var i = 0; i < edel.length; i++) {
                zzygetsendkind('odel', edel[i].no);
                zzydel('fss', "list", edel[i].id);
            }
        }
    });

}



function zzytestad() {
    api.addEventListener({
        name: 'zzytestad'
    }, function(ret, err) {

        if (this.test < ret.value.test) {
            zzyalert('666', this.test);
            var tt = this.test;
            this.test = tt + 1;
            zzysend(ret.value.signalm, ret.value.ret)

        } else {
            zzyalert('777', this.test);
            this.test = 0
            zzysend(ret.value.signalout, ret.value.ret)


        }


        //zzyalert('bb',ret.value);

    });
}

function zzytestsend(isignalm, isignalout, itest, iret) {
    //  zzyalert('555','aa');
    zzysend('zzytestad', {
        "signalm": isignalm,
        "signalout": isignalout,
        "test": itest
    })


};

function zzyrecord() {
    var speechRecognizer = api.require('speechRecognizer');
    speechRecognizer.record({
        vadbos: 5000,
        vadeos: 5000,
        rate: 16000,
        asrptt: 1,
        //audioPath: 'fs://speechRecogniser/speech.mp3'
    }, function(ret, err) {
        zzyalert('ret', ret)
    });
}

function zzyactionsheet(isignalout, ititle, icanceltitle, iredtitle, ibuttons) {
    //zzyalert('777',isignalout+ititle+icanceltitle+iredtitle+ibuttons)
    var actionsheet = new auiActionsheet();
    actionsheet.init({
        frameBounces: true, //当前页面是否弹动，（主要针对安卓端）
        title: ititle, //"这里是标题",
        cancelTitle: icanceltitle, //'这里取消按钮',
        destructiveTitle: iredtitle, //'红色警告按钮',
        buttons: ibuttons //['拍照','图库选择']
    }, function(ret, err) {
        zzyalert(isignalout, ret)
        zzysend(isignalout, ret)
    })
}

function zzyactionsheets() {
    api.addEventListener({
        name: 'zzyactionsheets'
    }, function(ret, err) {
        zzyalert('666', ret)
        zzyactionsheet(ret.value.isignalout, ret.value.ititle, ret.value.icanceltitle, ret.value.iredtitle, ret.value.ibuttons)
    });

}

function zzysendactionsheets(jsignalout, jtitle, jcanceltitle, jredtitle, jbuttons) {
    zzysend('zzyactionsheets', {
        "isignalout": jsignalout,
        "ititle": jtitle,
        "icanceltitle": jcanceltitle,
        "iredtitle": jredtitle,
        "ibuttons": jbuttons
    })
}


function zzyzalert(isignalout, ititle, imsg, ibuttons) {
    api.confirm({
        title: ititle,
        msg: imsg,
        buttons: ibuttons
    }, function(ret, err) {
        zzysend(isignalout, ret.buttonIndex)

    });

}

function zzydate() {
    var myDate = new Date();
    var itime = myDate.getTime(); 
    zzyalert('time:', itime)

}

function zzyread(isignalout, istr) {
    var speechRecognizer = api.require('speechRecognizer');
    speechRecognizer.read({
        readStr: istr,
        speed: 60,
        volume: 60,
        voice: 'vixyan',
        rate: 16000,
        //audioPath: 1s://speechRecoxqiangiser/read.mp3'
    }, function(ret, err) {
        //zzyalert('ret',ret)
        zzysend('isignalout', istr)
    });
};

function test() {
    oopenfrm('test', '../html/test.html', 0, 'auto');
}

function alarm() {

    api.addEventListener({
        name: 'alarmbegin'
    }, function(ret, err) {
        this.timeout = setInterval("down()", 1000);
    });
    api.addEventListener({
        name: 'alarmstop'
    }, function(ret, err) {
        clearInterval(this.timeout);
    });

    api.addEventListener({
        name: 'alsetclock'
    }, function(ret, err) {
        alsetclock(ret.value.clhours, ret.value.clminutes)
    });


};

function zzyalarmbegin() {
    zzysend('alarmbegin')
};

function zzyalarmstop() {
    zzysend('alarmstop')
};

function zzysetclock(ihours, iminutes) {
    zzysend('alsetclock', {
        "clours": ihours,
        "clminutes": iminutes
    })
}



function down(alsecond, alminutes, alhours) {
    alsecond -= 1;

    if (alsecond == 0 && alminutes == 0 && alhours == 0) {
        window.alert("干正事了！！！");
        clearInterval(this.timeout);

    }


    if (alsecond == -1) {
        alsecond = 59;
        alminutes -= 1;
    }
    if (alminutes == -1) {
        alminutes = 59;
        alhours -= 1;
    }
}


function alsetclock(clhours, clminutes) {
    var dt = new Date();
    var hours = clhours - dt.getHours();
    var minutes = clminutes - dt.getMinutes();
    if (minutes < 0) {
        if (hours < 0) {
            alminutes = 60 - Math.abs(minutes);
            alhours = 24 - Math.abs(hours);
        } else if (hours == 0) {
            alminutes = 60 - Math.abs(minutes);
            alhours = Math.abs(hours);
        } else {
            alminutes = 60 - Math.abs(minutes);
            alhours = Math.abs(hours) - 1;
        }
    } else if (minutes == 0) {
        if (hours < 0) {
            alminutes = Math.abs(minutes);
            alhours = 24 - Math.abs(hours);
        } else if (hours == 0) {
            alminutes = Math.abs(minutes);
            alhours = Math.abs(hours) + 24;
        } else {
            alminutes = Math.abs(minutes);
            alhours = Math.abs(hours);
        }
    } else {
        if (hours < 0) {
            alminutes = 60 - Math.abs(minutes);
            alhours = 24 - Math.abs(hours);
        } else if (hours == 0) {
            alminutes = Math.abs(minutes);
            alhours = Math.abs(hours);
        } else {
            alminutes = Math.abs(minutes);
            alhours = Math.abs(hours);
        }
    }
}

function alreset(itime) {
    var time = itime;
    for (i = 0; i < time.length; i++) {
        time[i].value = 0;
    }
}

function zzydialog(isignalout, ititle, itext) {

    var dialog = new auiDialog();
    dialog.prompt({

        title: ititle,
        text: itext,
        buttons: ['取消', '确定'] //['取消', '确定']
    }, function(ret) {
        zzysend(isignalout, ret)
    })
};


function zzydialogs() {
    api.addEventListener({
        name: 'pdialogs'
    }, function(ret, err) {
        zzydialog(ret.value.isignalout, ret.value.ititle, ret.value.itext)
    });
};

function zzydialogsend(isignalout, ititle, itext) {
    zzysend('pdialogs', {
        "isignalout": isignalout,
        "ititle": ititle,
        "itext": itext
    })
}







function fchance(iseq, iindex, iaa) {

    for (var i = 0; i < iaa.length; i++) {
        if (iaa[i] == iindex) {
            this.findex = i
        }

    }





}

function write2() {
    api.addEventListener({
        name: 'fwrite2'
    }, function(ret, err) {
        zzyalert('fwrite2', ret)
    });

    zzygetsend('fwrite2', "list", {
        "kind": this.fclick
    })
}

function fbringFrameToFront(ipage1) {
    api.bringFrameToFront({
        from: 'ipage1'

    });

}

function fopenweb(isignalout, iurl, iy, ih) {
    // var osections= $api.offset($api.dom(iclass));;
    // zzyalert('osection',osections)
    var obj = api.require('UIWebBrowser');
    obj.open({
        rect: {
            x: 0,
            y: iy,
            w: 'auto',
            h: ih
        },
        path: iurl,
        // fixedOn: 'web',
        // fixed: false,
        // button: {
        //     normal: 'widget://res/UIWebBrowser/normal.png',
        //     highlight: 'widget://res/UIWebBrowser/highlight.png',
        //     selected: 'widget://res/UIWebBrowser/selected.png',
        //     title: 'test',
        //     width: 55,
        //     height: 30,
        //     position: 'bottom'
        // }
    }, function(ret) {
        zzysend(isignalout, ret)
    });
};

function fopenwebs() {
    api.addEventListener({
        name: 'fopenwebs'
    }, function(ret, err) {
        // zzyalert('fs',ret)
        fopenweb(ret.value.osignalout, ret.value.ourl, ret.value.oy, ret.value.oh);
    });

};

function fopenwebsend(isignalout, iurl, iy, ih) {
    zzysend('fopenwebs', {
        "osignalout": isignalout,
        "ourl": iurl,
        "oy": iy,
        "oh": ih
    })
}

// ---------------------------------------------------------------

function zzymsg(isignalout, iid, idata) {
    var app = new Vue({
        el: iid,
        data: idata
    })
    zzysend(isignalout, idata);
}

function zzymsgs() {
    api.addEventListener({
        name: 'zzymsgs'
    }, function(ret, err) {
        zzymsg(ret.value.osignalout, ret.value.oid, ret.value.odata)
    });
}

function zzymsgsend(isignalout, iid, idata) {
    zzysend('zzymsgs', {
        "osignalout": isignalout,
        "oid": iid,
        "odata": idata
    })
}

// -----------------------------------------------------------------

function zzyvon(iid, idata, ion) {
    var app = new Vue({
        el: iid,
        data: idata,
        methods: ion
    })

}

function zzyvons(isi) {
    api.addEventListener({
        name: isi
    }, function(ret, err) {
        zzyvon(ret.value.oid, ret.value.odata, ret.value.oon)
    });
}

function zzyvonsend(isi, iid, idata, ion) {
    zzysend(isi, {

        "oid": iid,
        "odata": idata,
        "oon": ion
    })
}


// ----------------------------------------------------

function zzyvonlist(iid, idata) {
    zzyvon(iid, idata, {
        dddo: function(is, ia) {
            zzysend(is, ia)
        }
    })
}


function zzyvonlists(isignalin) {
    api.addEventListener({
        name: isignalin
    }, function(ret, err) {
        zzyvonlist(ret.value.oid, ret.value.odata)
    });
}

function zzyvonlistsend(isignalin, iid, idata) {
    zzysend(isignalin, {

        "oid": iid,
        "odata": idata,
    })
}


function fctx(ifctg, ifcta) {
    ifctg[0] = ifcta
}

function fmath() {
    this.pdisdance = function(ilat1, ilon1, ilat2, ilon2) {

        this.ffmth = (6371.004 * Math.acos(Math.sin(ilat1 / 57.2958) * Math.sin(ilat2 / 57.2958) + Math.cos(ilat1 / 57.2958) * Math.cos(ilat2 / 57.2958) * Math.cos((ilon1 - ilon2) / 57.2958)))
    }
}

//-----------------------------------------------------------------------------
//
//        功能:打开地图
//        可调参数：  iclass     打开地图的位置 class选择器
//
//----------------------------------------------------------------------------
function bopenmaph(isignalout, ih) {

    var amap = api.require('aMap');
    amap.open({
        rect: {
            x: 0,
            y: 115,
            w: 'auto',
            h: ih

        },
        showUserLocation: true,
        zoomLevel: 18,
        showUserLocation: true,

        fixed: true
    }, function(ret) {
        zzysend(isignalout, ret)
    });
}

function ftrace() {
    var aMap = api.require('aMap');
    aMap.setTrackingMode({
        animation: false,
        trackingMode: 'heading'
    });
}

function setc(loc) {
    var aMap = api.require('aMap');
    aMap.setCenter({
        coords: {
            lon: loc.lon,
            lat: loc.lat
        },
        animation: false
    });
}

function bopenmap0(isignalout) {

    var map = api.require('aMap');
    map.open({
        rect: {
            x: 0,
            y: 115,
            w: 'auto',
            h: 473

        },

        zoomLevel: 18,
        showUserLocation: true,

        fixed: true
    }, function(ret) {
        zzysend(isignalout, ret)
    });
}

function bopenmap1(isignalout) {

    var map = api.require('aMap');
    map.open({
        rect: {
            x: 0,
            y: 144,
            w: 'auto',
            h: 350
        },

        zoomLevel: 18,
        showUserLocation: true,

        fixed: true
    }, function(ret) {
        zzyalert(isignalout, ret)
    });
}

//----------------------------------------------------------------------------

function bopenmaps() {
    api.addEventListener({ //----------------------------------------
        name: 'bopenmaps' //     打开地图接收端
    }, function(ret, err) {
        bopenmap(ret.value.fsignalout, ret.value.fh) //----------------------------------------
    });

};

//---------------------------------------------------------------------------

function bopenmapsend(isignalout, ih) { //----------------------------------------
    zzysend('bopenmaps', { //     打开地图控制端
            "fsignalout": isignalout,
            "fh": ih
        }) //----------------------------------------
}

//============================================================

//-----------------------------------------------------------------------------
//        功能:定位
//        可调参数：
//                iaccuracy  定位精度
//                iautostop  是否自动停止定位
//                ifilter    位置更新所需的最小距离
//----------------------------------------------------------------------------

function fgetlocation(isignalout) {
    var bMap = api.require('aMap');
    bMap.getLocation({
        // accuracy: iaccuracy, //     获取到位置信息后是否自动停止定位 10m 100m 1km 3km
        autoStop: false, //     获取到位置信息后是否自动停止定位
        // filter: ifilter //     位置更新所需的最小距离（单位米），autoStop 为 true 时，此参数有效
    }, function(ret, err) {
        zzysend(isignalout, ret)
    }); //--------------------------------------------
} //     status: true,布尔型；true||false
//     lon: 116.213  数字类型；经度
//     lat: 39.213,数字类型；纬度
//     accuracy: 65, 数字类型；本次定位的精度，仅支持 iOS 平台
//     timestamp: 1396068155591,数字类型；时间戳
//     locationType:netWork        //字符串；定位类型；GPS||NetWork||OffLine(仅限Android)
//---------------------------------------------
//--------------------------------------------------------------------------------




//---------------------------------------------



//--------------------------------------------------------------------------------

function bgetlocationsend(isignalout) { //---------------------------------------------
    zzysend('bgetlocations', { //     定位控制端
            "signalout": isignalout //     用于控制层
        }) //---------------------------------------------
}

//=================================================================================

function ssg() {
    var map = api.require('aMap');
    map.startSearchGPS(
        function(ret) {
            zzyalert('ssg', ret)

        }
    );

}

function zzysetzoom(ilevel) {
    var map = api.require('aMap');
    map.setZoomLevel({
        level: ilevel
    });
}

function zzysetzooms() {
    api.addEventListener({
        name: 'zzysetzooms'
    }, function(ret, err) {
        zzysetzoom(ret.value.olevel)
    });

}


function zzysetzoomsend(ilevel) {
    zzysend('zzysetzooms', {
        "olevel": ilevel
    })
}


function zzydeviceid() {
    this.deviceid = api.deviceId
};

function zzydeviceidsend(isignalout) {
    var deviceid = api.deviceId
    zzysend(isignalout, deviceid)
}

function sgetlocation(isignalout) {
    bgetlocation(isignalout, '10m', true, 1)
};

function bacc(isignalout) {
    var linearAcceleration = api.require('linearAcceleration');
    linearAcceleration.startListener({
        type: 1
    }, function(ret, err) {
        zzysend(isignalout, ret)
    });

};

// function ffmath() {
//     var ffmth = new fmath();
//     ffmth.pdisdance(32, 121, 32.1, 121.5);
//     // zzyalert('1',ffmth);
//     zzyalert('0', ffmth.ffmth);
//
// }

// function fchancesend(iflength,iseq,iindex){
// zzysend('fchances',{
//   "flength":iflength,
//   "seq":iseq,
//   "index":iindex
// })
//
// }

function fshowlocation() {
    var map = api.require('aMap');
    map.showUserLocation({
        isShow: true,
        trackingMode: 'none'
    });
};

function fsetcenter(ilon, ilat) {
    var map = api.require('aMap');
    map.setCenter({
        coords: {
            lon: ilon,
            lat: ilat
        },
        animation: true
    });
}

///////////////////////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////////////////////////



function sroute(isignalout, iid, islon, islat, ielon, ielat) {
    var map = api.require('aMap');
    map.searchRoute({
        id: iid,
        type: 'drive',
        policy: 'ecar_fee_first',
        start: {
            lon: islon,
            lat: islat
        },
        end: {
            lon: ielon,
            lat: ielat
        }
    }, function(ret, err) {
        zzyalert(isignalout, ret)
    })
};

function sroutes() {
    api.addEventListener({
        name: 'sroutes'
    }, function(ret, err) {
        sroute(ret.value.osignalout, ret.value.oid, ret.value.oslon, ret.value.oslat, ret.value.oelon, ret.value.oelat)
    });

};

function sroutesend(isignalout, iid, islon, islat, ielon, ielat) {
    zzysend('sroutes', {
        "osignalout": isignalout,
        "oid": iid,
        "oslon": islon,
        "oslat": islat,
        "oelon": ielon,
        "oelat": ielat
    })
}

function fsetrect(ih) {
    var map = api.require('aMap');
    map.setRect({
        rect: {
            x: 0,
            y: 145,
            w: 'auto',
            h: ih
        }
    });
}

function fsetrects() {
    api.addEventListener({
        name: 'fsetrects'
    }, function(ret, err) {
        fsetrect(ret.oh)
    });
}


function fsetrectsend(ih) {
    zzysend('fsetrects', {
        "oh": ih
    })
}

function raffletest(isignalout) {
    var a
    var b = Math.random();
    var c = Math.random();
    var d = Math.random();
    var e
    var f
    var g
    var h
    var prize
    var prize1 = "1000"
    var prize2 = "100"
    var prize3 = "10"
    var prize4
    var prize5
    a = Math.random();
    //alert(a+"+"+"0");

    if (a < 0.4) {
        //alert(a+"+"+"1");
        e = d * 100
        f = Math.round(e)
            //alert(d+"+"+e+"1.1");
        if (f == 99) {
            // h = "1",
            prize = "1";
        };
    } else if (a >= 0.4 & a < 0.7) {
        e = d * 10
        f = Math.round(e)
        if (f == 9) {
            //alert(d+"+"+e+"2.1");
            // h = "1",
            prize = "2";
        }
    } else {
        //alert(a+"+"+"3");

        // h = "1",
        prize = "3"

    }
    zzysend(isignalout, {
        "prize": prize
    })
}

function ffind(isignalout, ilist, ikey, idata) {
    var obj = new Array;
    for (var i = 0; i < ilist.length; i++) {
        if (ilist[i].ikey = idata) {
            obj.push(ilist[i])
        };
        zzysend(isignalout, {
            key: obj
        })
    }
}

function objadd(ia, ib, ic) {
    api.addEventListener({
        name: 'objadd'
    }, function(ret, err) {
        if (ib.sonn == "n") {
            ib.sonn = ia.no;
            ia.nbr = ib.sonn
        } else {
            ic[ibbr]
        }
    });

}

function getlist(iaa, no, ilist) {
    // zzyalert('1',iaa.length);
    ilist.length = 0;
    var aalen = iaa.length;

    for (var i = 0; i < aalen; i++) {
        if (iaa[i].kind == no) {
            ilist.push(aaobj[i])
        };


    };
    // zzyalert('2',ilist)
}


//本地查找数据
function zzysearchlist(ia, ib) {
    var len = ia.length;
    for (var i = 0; i < len; i++) {
        if (ia[i].no == ib) {
            return (ia[i])
        }
    }
}

function zzygetid(ino) {
    zzygetsend('getid', 'list', {
        deviceId: api.deviceId,
        no: ino
    })
}

//本地添加数据
function bsave(iaa, ibb) {
    var data = {
        'no': iaa.no,
        'kind': iaa.kind,
        'name': iaa.name,
        'deviceId': api.deviceId
    };
    ibb.push(data)
}


//加密

function fmd5(idata, ivalue) {
    var signature = api.require('signature');
    ivalue.name = signature.md5Sync({
        data: idata
    });
    // zzyalert('s1',ivalue)
};

function fsha1(idata, ivalue) {
    var signature = api.require('signature');
    ivalue.name = signature.sha1Sync({
        data: idata
    });
    // zzyalert('s1',ivalue)
}


function rsha(idata) {
    var signature = api.require('signature');
    var ivalue = signature.sha1Sync({
        data: idata
    });
    return (ivalue)
}
// function fClean(iData) {
//   var dLen = iData.length;
//   for(var i = 0;i<dLen;i++){
//     for(var j = 0;j<dLen;j++){
//         if(iData[i].kind == iData[j].no){
//           iData[i].kind = iData[j].id
//         }
//     }
//   };
//   var iii;
//   var iia;
//   for (i = 0;i<dLen;i++){
//     if(iData[i].no == 0){
//       // zzyalert('666',iData[i]);
//       iii=i;
//       iia = iData[i]
//     }
//   }
//   iData.splice(iii,1);
//   iData.unshift(iia);
// // zzyalert('333',iia);
//
// return(iData);
//
// };


function bgetno(idata, iid) {
    var dlen = idata.length;
    var iii
    for (var i = 0; i < dlen; i++) {
        if (idata[i].id == iid) {
            iii = i
        }
    };
    return (iii);
}

function countchn(ival) {
    var vlen = ival.length
        // zzyalert('vlen',vlen)
    var clen = 0;
    for (var i = 0; i < vlen; i++) {
        var vca = ival.charAt(i);
        if (vca.match(/[^\x00-\xff]/ig) != null) {
            clen += 2;
        } else {
            clen += 1;
        }
    }
    return clen;
}


function setfont(iid, ilen) {
    var fm = $api.byId(iid);
    var fml = ilen;
    if (fml >= 10 && fml < 15) {
        fm.style.fontSize = 40 + "px"
    } else if (fml >= 15 && fml < 30) {
        fm.style.fontSize = 30 + "px"
    } else if (fml >= 30) {
        fm.style.fontSize = 20 + "px"
    } else if (fml > 5 && fml < 10) {
        fm.style.fontSize = 50 + "px"
    }
}




///////////////////////////////////////////////////////////////////////////////


function zaget() {
    var request = new XMLHttpRequest();
    request.open("GET", 'http://47.97.173.233:3000', true);

    request.send();
    request.onreadystatechange = function() {
        alert('111');

        if (request.readstate == 4 && request.status == 200) {

            alert(request.responseText)

        }

    }
}
