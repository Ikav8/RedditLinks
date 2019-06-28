// var x = document.getElementsByClassName("title may-blank loggedin");
// for(i = 0; i < x.length; i++){
	// window.open(x[i].href, '_blank')	
// }
chrome.runtime.onMessage.addListener(function(message,sender,sendResponse){
	var x = document.getElementsByClassName("title may-blank loggedin");
	var response = []
	for(i = 0; i < x.length; i++){
		url = x[i].href
		response.push(url);
		// chrome.tabs.create({url: url, selected: false});
		//window.open(x[i].href, '_blank')	
	}
	sendResponse(response);
});