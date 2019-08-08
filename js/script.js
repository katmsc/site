var wrapper = document.querySelector(".introduction");
var text = document.querySelector(".introduction-text");
var button = document.querySelector(".button_hola");

var textCont = text.textContent;
text.style.display = "none";

for (var i = 0; i < textCont.length; i++) {
  (function(i) {
    setTimeout(function() {
      // Created textNode to append
      var texts = document.createTextNode(textCont[i])
      var span = document.createElement('span');
      span.appendChild(texts);

      span.classList.add("wave");
      wrapper.appendChild(span);

    }, 75 * i);
    if (textCont.length - 1 === i) {
      setTimeout(function() {
        button.style.opacity = '1';
      }, 75 * i);
    }
  }(i));
}


