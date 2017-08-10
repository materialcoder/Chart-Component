/* 环图表组件对象 */

var H5ComponentRing = function(name, cfg) {
	var component = new H5ComponentBase(name, cfg);

	var w = cfg.width;
	var h = cfg.height;
	var len = cfg.data.length;
	var sAngle = 1.5 * Math.PI;

	// 加入一个画布
	var cns = document.createElement('canvas');
	var ctx = cns.getContext('2d');
	cns.width = ctx.width = w;
	cns.height = ctx.height = h;
	$(cns).css('zIndex',1);
	component.append(cns);

	var r = w/(2*len);

	// 绘制文本和数据
	for(var i=0;i<len;i++) {
		var color = cfg.data[i][2] ? cfg.data[i][2] : "#f00";
		var text = $('<div class="text">');
		text.text(cfg.data[i][0]);
		text.width(r);
		text.css("left",r*i).css("top","-14px");

		var per = $('<div class="per">');
		per.text(cfg.data[i][1]*100 + "%");
		per.width(r).height(r);
		per.css("left",r*i).css("color", color);
		per.css("transition","all .5s 1s");

		component.append(text).append(per);
	}

	ctx.lineWidth = 10;

	// 动态绘制环条
	var draw = function(percent) {
		ctx.clearRect(0,0,w,h);
		for(var i=0;i<len;i++) {
			ctx.beginPath();
			var color = cfg.data[i][2] ? cfg.data[i][2] : "#f00";
			ctx.strokeStyle = color;
			if(percent <= 0) {
				component.find(".per").css("opacity", 0);
			} else {
				component.find(".per").css("opacity", 1);
				component.find(".text").css("opacity", 1);
				ctx.arc(r*(i*2+1),r,r-30,sAngle,2*Math.PI*cfg.data[i][1]*percent + sAngle,false);
			}
			ctx.stroke();
		}
	}
	

	draw(0);

	component.on("onLoad", function() {
		var s = 0;
		for(var i=0;i<100;i++) {
			setTimeout(function() {
				s += 0.01;
				draw(s);
			}, i*10+500);
		}
	});

	component.on("onLeave", function() {
		var s = 1;
		for(var i=0;i<100;i++) {
			setTimeout(function() {
				s -= 0.01;
				draw(s);
			}, i*10);
		}
	});
	
	return component;
}