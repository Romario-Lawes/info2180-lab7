"use strict";
window.onload = function() {
    
  function init() {
    let xhr = new XMLHttpRequest();
    
    document.getElementById("lookup").addEventListener("click", function() {
      xhr.onreadystatechange = function() {
        if (this.readyState === 4 && this.status === 200) {
          document.getElementById("result").innerHTML = this.responseText;
          // alert(this.responseText);
        }
      };
      if (document.getElementById("all").checked) {
        xhr.open("GET", "world.php?all=true", true);
      } else {
        xhr.open("GET", "world.php?country=" + document.getElementById("country").value, true);
      }
      xhr.send();
    });
    
  }
  
  init();
};