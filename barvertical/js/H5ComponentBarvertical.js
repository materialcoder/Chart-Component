/* 柱状图（立式）表组件对象 */

var H5ComponentBarvertical = function(name, cfg) {
	var component = new H5ComponentBase(name, cfg);
	var height = cfg.height;
	$.each(cfg.data, function(idx, item) {
		var line = $('<div class="line">');
		var name = $('<div class="name">');
		var rate = $('<div class="rate">');
		var per = $('<div class="per">');

		var barheight = item[1]*height/2 + 'px';
		var marginTop = (1-item[1])*height/2 + 'px';

		if(item[2]) {
			var bgStyle = 'style="background-color:' + item[2] + '"';
			name.css("color", item[2]);
			per.css("color", item[2]);
		}
		rate.html('<div class="bg" '+ bgStyle +'></div>')

		rate.css('height',barheight);
		rate.css('marginTop',marginTop);

		name.text(item[0]);

		per.text(item[1]*100+"%");
		rate.append(name).append(per);
		line.append(rate);

		component.append(line);
	});
	return component;
}