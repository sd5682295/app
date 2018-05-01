


class FFun {
	constructor() {
	}
	alt() {
		alert(this.data);
	}
	post() {
		$.post(this.ary[0], this.ary[1], function (data, status) {
			console.log(data);
			alert("数据: " + data + "\n状态: " + status);
		});
	}
}






class ZzyDoc {
	constructor() {
		this.data = "";
		this.ary = [];
		for (var i = arguments.length - 1; i >= 0; i--) {
			this.ary[i] = document.getElementById(arguments[i]).value;
			this.data += this.ary[i];
		}
	}
}
;
 ZzyDoc.prototype = new FFun();


class ZzyVar {
	constructor() {
		this.data = "";
		this.ary = [];
		for (var i = arguments.length - 1; i >= 0; i--) {
			this.ary[i] = arguments[i];
			this.data += this.ary[i];
			// alert(this.data)
		}
	}
}

ZzyVar.prototype = new FFun();

/**
 * @test
 */
class fftest {
	constructor() {
		this.gga = 'bb';
	}
	alt() {
		alert(this.gga);
	}
}
;
fftest.prototype.ggb = "cc";


/**
 * @title: mode
 */
function cMode() {
	var list = [
		['name', 'start'],
		['leave', '00']
	];
	var data = {};
	if (arguments.length === 0) {
		// alert('cc')
		for (let i = 0; i < list.length; i++) {
			data.id = (new Date().getTime()+'wlist'+Math.random()*100000)
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