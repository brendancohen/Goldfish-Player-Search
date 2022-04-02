searchGoldfish = function(word){
    var query = word.selectionText;
    chrome.tabs.create({url: "https://www.mtggoldfish.com/player/"
+ query});  };

chrome.contextMenus.removeAll(function() {
    chrome.contextMenus.create({
     id: "1",
     title: "MTGGoldfish Player Search",
     contexts:["selection"],  // ContextType
    }); })

chrome.contextMenus.onClicked.addListener(searchGoldfish);