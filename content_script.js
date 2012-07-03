function sendSearch(info, tab) {	
	var text = info.selectionText;
	
	var url = 'http://tw.dictionary.yahoo.com/dictionary?p=' + text;
	chrome.tabs.create({
		'url':url,
	});
}


chrome.contextMenus.create({"title": "在 Yahoo! 字典中查詢 '%s'", "contexts":["selection"], "onclick": sendSearch});
