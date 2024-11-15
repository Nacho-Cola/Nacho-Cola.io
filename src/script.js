function adjustDivHeight() {
  const mainTitleBox = document.querySelector('.main_title_box');
    if (mainTitleBox) {
        mainTitleBox.style.height = `${window.innerHeight - 58 - 78}px`;
    }
}

adjustDivHeight();

window.addEventListener('resize', adjustDivHeight);


document.addEventListener('DOMContentLoaded', function(event){
  var dataText = ["AI.", "data.", "backend.", "개발자 ### 입니다."];

  function typeWriter(text, i, fnCallback) {
    // Check if text isn't finished yet
    if (i < (text.length)) {

      let displayText = text.substring(0, i + 1);
      if (displayText.includes("#")) {
        displayText = displayText.replace("#", '<span class="highlight">김</span>');
      }
      if (displayText.includes("#")) {
        displayText = displayText.replace("#", '<span class="highlight">성</span>');
      }
      if (displayText.includes("#")) {
        displayText = displayText.replace("#", '<span class="highlight">규</span>');
      }
      // Add next character to h1
      document.querySelector("h2").innerHTML = displayText + '<span class = "caret" aria-hidden="true"></span>';

      // Wait for a while and call this function again for next character
      setTimeout(function() {
        typeWriter(text, i + 1, fnCallback);
      }, 100);
    }
    // Text finished, call callback if there is a callback function
    else if (typeof fnCallback == 'function') {
      // Call callback after timeout
      setTimeout(fnCallback, 700);
    }
  }

  function StartTextAnimation(i) {
    if (typeof dataText[i] == 'undefined'){
      setTimeout(function() {
        StartTextAnimation(0);
      }, 20000);
    }
    // Check if dataText[i] exists
    if (i < dataText.length) {
      // Text exists! Start typewriter animation
      typeWriter(dataText[i], 0, function(){
        // After callback (and whole text has been animated), start next text
        StartTextAnimation(i + 1);
      });
    }
  }
  // Start the text animation
  StartTextAnimation(0);
});
