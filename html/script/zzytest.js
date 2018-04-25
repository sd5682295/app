


function FFun() {
	
}

	FFun.prototype.alt = function() {
		// alert(this.data)
		alert('bb')
	};
	FFun.prototype.post = function() {
		$.post(this.ary[0],
this.ary[1],function(data,status){
	console.log(data);
		alert("数据: " + data + "\n状态: " + status);
			}
		);
	};


// function event() {
 
// }

function value(a,b,c) {

	a.value = b
}


function zzyDoc() {

			this.data = "";
			this.ary = [];
	for (var i = arguments.length - 1; i >= 0; i--) {
		this.ary[i] =  document.getElementById(arguments[i]).value;

		this.data+=this.ary[i]
	}

};
 zzyDoc.prototype = new FFun();


function zzyVar() {
			this.data = "";
			this.ary = [];
	for (var i = arguments.length - 1; i >= 0; i--) {
		
		this.ary[i] = arguments[i];

		this.data+= this.ary[i]
		// alert(this.data)
	}
}

zzyVar.prototype = new FFun();




function ftest() {
	
};
ftest.prototype.ssa = function () {
	alert('cc')
}



function fapi() {
	
};
fapi.prototype.alert = function (e) {
	alert(e)
}



/**
 * @titile:初始化对象
 */
function fnapi() {
	
}

/**
 * @title: 模板函数
 * @content: 
 *     1 0aug：输入默认值
 *     2 1aug: 替换成新值，其余部分补充默认值
 *     3 2aug: 有新值的地方替换成新值，无新值有老值的地方替换成老值，其余部分补充默认值
 * 
 */

fnapi.prototype.cMode = function () {
	

        var dary = []
        var list = [
            ['name', 'start'],
            ['leave', dary]
        ];
        
        var data = {};
        if (arguments.length === 0) {
           
            for (let i = 0; i < list.length; i++) {
                // alert(hex_sha1(new Date().getTime()+'wlist'+Math.random()*100000));
                data.id = hex_sha1(new Date().getTime()+'wlist'+Math.random()*100000);
                
                data[list[i][0]] = list[i][1];
            }
            return(data);
        } else if (arguments.length === 1) {

            for (let i = 0; i < list.length; i++) {
                if (arguments[0][list[i][0]] === undefined) {
                    data[list[i][0]] = list[i][1];
                    
                } else {
                    data[list[i][0]] = arguments[0][list[i][0]];
                   
                }
            }
            return(data);
//arguments[0]
//data[list[i][0]]
//arguments.length === 2
//return

        } else if (arguments.length === 2) {
            
            for (let i = 0; i < list.length; i++) {
                if ((arguments[0][list[i][0]] === undefined) && (arguments[1][list[i][0]] === undefined)) {
                    data[list[i][0]] = list[i][1];
                    
                } else if (arguments[0][list[i][0]] !== undefined) {
                    data[list[i][0]] = arguments[0][list[i][0]];
                    
                } else {
                    data[list[i][0]] = arguments[1][list[i][0]];
                    
                }
            };
            return(data);
        }
    }
}

/**
 * @title:getsendt,getsend测试版
 */
fnapi.prototype.getsendt = function () {
	return(
	[
	    {
	    'id':'0',
	    'name':start,
	    'leave':['1','2','3']
		},
		 {
	    'id':'1',
	    'name':aa,
	    'leave':[]
		},
		 {
	    'id':'2',
	    'name':bb,
	    'leave':[]
		},
		 {
	    'id':'3',
	    'name':cc,
	    'leave':[]
		}
		    ]
	   )
}


/**
 * @title:初始化缓存
 * @content:创建一个属性赋值从服务器获取的信息
 */

fnapi.prototype.init = function () {
	this.data = this.getsendt();
	alert(this.data)
}


/**
 * @title:创建
 * @content:在对象相应的位置按照模板创建对象
 */




/**
 * @title:修改
 * @content:查找相应键按照模板修改对应的属性
 */




/**
 * @title:删除
 * @content:查找并删除相应的键
 * @content:使用递归和 异步删除树下的所有值
 */




/**
 * @title:查询信息
 * @content:根据字典查询，不需要同步数据库
 */



