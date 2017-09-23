'use strict';

const defaultLGTM = '👍';
let lgtm = '';

window.onload = function () {

  chrome.storage.sync.get('lgtm_word', function(v) {
    let word = v.lgtm_word;
    lgtm = word == undefined ? defaultLGTM : word;
    displayLGTMButton(lgtm)
  });

  chrome.storage.onChanged.addListener(function(objects, areaName){
    console.log(objects);
    if (areaName == 'sync') {
      let new_word = objects.lgtm_word.newValue;
      document.querySelector('.btn.lgtm-button').textContent = new_word;
      console.log(new_word);
    }
  });

};

function displayLGTMButton(lgtm) {
  let formBox = document.querySelector('.js-new-comment-form .form-actions');
  let textArea = document.getElementById('new_comment_field');
  let parentButtonBox = document.getElementById('partial-new-comment-form-actions');

  const button = document.createElement('BUTTON');
  button.setAttribute('class', 'btn lgtm-button');
  button.innerHTML = lgtm;
  button.addEventListener('click', function(){
    textArea.value = lgtm;
  }, false);

  parentButtonBox.appendChild(button);
}
