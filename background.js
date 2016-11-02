chrome.browserAction.onClicked.addListener(function(tab) {
  chrome.tabs.create({
    url: 'https://web.archive.org/save/' + tab.url,
    active: true
  })
});