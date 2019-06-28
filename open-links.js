chrome.runtime.onMessage.addListener(function(message,sender,sendResponse){
	var x = document.getElementsByClassName("title may-blank loggedin");
	var response = []
	for(i = 0; i < x.length; i++){
		url = x[i].href
		response.push(url);
	}
	sendResponse(response);
});