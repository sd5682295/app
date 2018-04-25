

    function cdb(a) {
        this.data = a;
        this.deviceId = api.deviceId
    };


/**
 * @test: return
 */

function test() {

    this.aa = 'aa'

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
        var list = [
            ['name', 'start'],
            ['leave', '00']
        ];
        var data = {};
        if (aug.length === 0) {
            for (let i = 0; i < list.length; i++) {
                data.id = rsha(new Date().getTime()+wlist+Math.random()*100000)
                data[list[i][0]] = list[i][1];
                return(data);
            }
        } else if (aug.length === 1) {

            for (let i = 0; i < list.length; i++) {
                if (aug[0][list[i][0]] === undefined) {
                    data[list[i][0]] = list[i][1];
                    return(data);
                } else {
                    data[list[i][0]] = aug[0][list[i][0]];
                    return(data);
                }
            }
//?aug[0]
//?data[list[i][0]]
//?aug.length === 2
//?return

        } else if (aug.length === 2) {
            for (let i = 0; i < list.length; i++) {
                if ((aug[0][list[i][0]] === undefined) && (aug[1][list[i][0]] === undefined)) {
                    data[list[i][0]] = list[i][1];
                    return(data);
                } else if (list[i][0] !== undefined) {
                    data[list[i][0]] = aug[0][list[i][0]];
                    return(data);
                } else {
                    data[list[i][0]] = aug[1][list[i][0]];
                    return(data);
                }
            }
        }
    }


