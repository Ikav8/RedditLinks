chrome.runtime.onInstalled.addListener(function() {
  
  chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
   
    chrome.declarativeContent.onPageChanged.addRules([
      {
        
        conditions: [
          new chrome.declarativeContent.PageStateMatcher({
            pageUrl: { urlContains: 'reddit' },
          })
        ],
        
        actions: [ new chrome.declarativeContent.ShowPageAction() ]
      }
    ]);
  });
});

chrome.pageAction.onClicked.addListener(function(tab){
	chrome.tabs.sendMessage(tab.id,{message:"Go"}, function(response){
		for(i = 0; i < response.length; i++){
			chrome.tabs.create({url: response[i], selected: false});
		}
	});
});