function setDisabledClass(obj) {
  if (obj.enableWideGCPDocs)
  {
    document.body.classList.remove('gcpdoc-disabled');
  }
  else
  {
    document.body.classList.add('gcpdoc-disabled');
  }
}

chrome.runtime.onMessage.addListener(function(request, sender, callback) {
  setDisabledClass(request);
});

chrome.runtime.sendMessage({reload: true}, setDisabledClass);
