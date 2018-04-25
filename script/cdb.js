

    function cdb(a) {
        this.data = a;
        this.deviceId = api.deviceId
    };


/**
 * @test: return
 */

function test() {

    this.aa = 'aa'

};


function luptabe(a,b) {
    var ary = []
    for (var i = b.length - 1; i >= 0; i--) {
        ary.push(a[b[i]])
    };
    return(ary)
}

function fapi() {
  

};





fapi.prototype.alert = function (e) {
    alert(e)
}

fapi.prototype.init = function () {
    // this.data = getsendt();
      this.data ={
        '0':{
        'id':'0',
        'name':'start',
        'leave':['1','2','3']
        },
         '1':{
        'id':'1',
        'name':'aa',
        'leave':[]
        },
         '2':{
        'id':'2',
        'name':'bb',
        'leave':[]
        },
         '3':{
        'id':'3',
        'name':'cc',
        'leave':[]
        }
      };

    // alert(JSON.stringify(luptabe(this.data,this.data[0].leave)))
}


/**
 * @title:创建
 * @content:在对象相应的位置按照模板创建对象
 * @argument:e,创建的键值对
 */


fapi.prototype.create = function (e) {
    var vale = cMode(e);
   
    this.data[val.id] = vale;

    

}


/**
 * @title:修改
 * @content:查找相应键按照模板修改对应的属性
 */

fapi.prototype.edit = function (a,b) {
    this.data[a] = cMode(b,this.data[a])
    // alert(JSON.stringify(this.data[a]));
}


/**
 * @title:删除
 * @content:查找并删除相应的键
 * @content:使用递归和 异步删除树下的所有值
 */
// fapi.prototype.delete = function (arguments) {
//     // body...
// };

// fapi.prototype.deleteall = function (arguments) {
//     // body...
// }



/**
 * @title:查询信息
 * @content:根据字典查询，不需要同步数据库
 */

fapi.prototype.fval = function (arg) {
    this.ndata = this.data[arg]

    // alert(JSON.stringify(this.ndata))
}



/**
 * @title: 模板函数
 * @content: 
 *     1 0aug：输入默认值
 *     2 1aug: 替换成新值，其余部分补充默认值
 *     3 2aug: 有新值的地方替换成新值，无新值有老值的地方替换成老值，其余部分补充默认值
 * 
 */




function cMode() {
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

                data.id = hex_sha1(new Date().getTime()+'wlist'+Math.random()*100000);
                
                if (arguments[0][list[i][0]] === undefined) {
                    data[list[i][0]] = list[i][1];
                    
                } else {
                    data[list[i][0]] = arguments[0][list[i][0]];
                   
                }
            }
            return(data);






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


