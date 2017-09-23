'use strict';

let LGTM = '👍';

window.onload = function () {
  let formBox = document.querySelector('.js-new-comment-form .form-actions');
  let textArea = document.getElementById('new_comment_field');
  let parentButtonBox = document.getElementById('partial-new-comment-form-actions');

  const button = document.createElement('BUTTON');
  button.setAttribute('class', 'btn');
  button.innerHTML = LGTM;
  button.addEventListener('click', function(){
    textArea.value = LGTM;
  }, false);

  parentButtonBox.appendChild(button);

};
