function sendSearch(info, tab) {	
	var text = info.selectionText;
	
	var url = 'http://tw.dictionary.yahoo.com/dictionary?p=' + text;
	chrome.tabs.create({
		'url':url,
	});
}


chrome.contextMenus.create({"title": "Query '%s' in Yahoo! Dictionary", "contexts":["selection"], "onclick": sendSearch});
