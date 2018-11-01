//컨텐츠 페이지를 대상으로 코드를 실행해주세요. 
chrome.tabs.executeScript({
  code:'var bodyText = document.getSelection().toString();alert(bodyText);'
});