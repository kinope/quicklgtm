'use strict';

document.addEventListener('DOMContentLoaded', function(e) {
  window.onload = function() {
    let submitButton = document.getElementById('submit-button');
    submitButton.disabled = true;
    let textArea = document.getElementById('lgtm-word');

    textArea.addEventListener('input', function (e) {
      displaySubmit(submitButton, textArea.value);
    }, false);
    submitButton.addEventListener('click', function(){
      let inputWord = textArea.value;
      chrome.storage.sync.set({'lgtm_word': inputWord});
    }, false);
  }
});

function displaySubmit(submit, val) {
  if (val == '') {
    submit.disabled = true;
  } else {
    submit.disabled = false;
  }
}
