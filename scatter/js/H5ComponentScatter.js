/* 散点图表组件对象 */

var H5ComponentScatter = function(name, cfg) {
	var component = new H5ComponentBase(name, cfg);

	var base = cfg.data[0][1]; //以第一个数据的比例为大小的100%

	//输出每一个 Scatter
	$.each(cfg.data, function(idx, item) {
		var scatter = $('<div class="scatter scatter_"'+idx+'>');
		
		var name = $('<div class="name">'+item[0]+'</div>');
		var rate = $('<div class="per">'+(item[1]*100)+'%</div>');
		name.append(rate);
		scatter.append(name);

		var per = (item[1]/base*100)+'%';

		scatter.width(per).height(per);

		if(item[2]) {
			scatter.css('backgroundColor',item[2]);
		}

		if(item[3] !== undefined && item[4] !== undefined) {
			scatter.css('left',item[3]).css('top',item[4]);
		}

		component.append(scatter);
	});

	return component;
}