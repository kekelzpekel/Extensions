chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    chrome.tabs.sendRequest(tabs[0], {}, function(address) {
        console.log(address);
    })
});