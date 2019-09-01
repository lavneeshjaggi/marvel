var more = document.getElementById("more");
var less = document.getElementById("less");

more.addEventListener("click",loadmore);
less.addEventListener("click",close);

function loadmore() {
    var div = document.querySelectorAll("div");
    var section = document.querySelectorAll("section");
    for(var i= 0; i < div.length; i++){
      if(div[i].className == "hide1") {
        div[i].className = "about-2";
        more.className = "hide1";
        less.className = "";
      } 
      if(div[i].className == "hide2") {
        div[i].className = "characters-2";
        more.className = "hide2";
        less.className = "";
      } 
      if(div[i].className == "hide3") {
        div[i].className = "comics-2";
        more.className = "hide3";
        less.className = "";
      }
      if(div[i].className == "hide4") {
        div[i].className = "movies-2";
        more.className = "hide4";
        less.className = "";
      }
      if(div[i].className == "hide5") {
        div[i].className = "threats-2";
        more.className = "hide5";
        less.className = "";
      }
      if(div[i].className == "hide6") {
        div[i].className = "tvshows-2";
        more.className = "hide6";
        less.className = "";
      }
      if(div[i].className == "hide7") {
        div[i].className = "x-universe-2";
        more.className = "hide7";
        less.className = "";
      }
    }
    for(var i=0; i < section.length; i++) {
      if(section[i].className == "features2-1") {
        section[i].className ="features2-2";  
      } 
      if(section[i].className == "features3-1") {
        section[i].className ="features3-2";  
      }
      if(section[i].className == "features4-1") {
        section[i].className ="features4-2";  
      } 
      if(section[i].className == "features5-1") {
        section[i].className ="features5-2";  
      }
      if(section[i].className == "features6-1") {
        section[i].className ="features6-2";  
      }
      if(section[i].className == "features7-1") {
        section[i].className ="features7-2";  
      }
      if(section[i].className == "features8-1") {
        section[i].className ="features8-2";  
      }
    }
}

function close() {
  var div = document.querySelectorAll("div");
  var section = document.querySelectorAll("section");
  for(var i= 0; i < div.length; i++){
    if(div[i].className == "about-2") {
      div[i].className = "hide1";
      less.className = "hide1"; 
      more.className = ""; 
    }
    if(div[i].className == "characters-2") {
      div[i].className = "hide2";
      less.className = "hide2"; 
      more.className = ""; 
    } 
    if(div[i].className == "comics-2") {
      div[i].className = "hide3";
      less.className = "hide3"; 
      more.className = ""; 
    }
    if(div[i].className == "movies-2") {
      div[i].className = "hide4";
      less.className = "hide4"; 
      more.className = ""; 
    }
    if(div[i].className == "threats-2") {
      div[i].className = "hide5";
      less.className = "hide5"; 
      more.className = ""; 
    }
    if(div[i].className == "tvshows-2") {
      div[i].className = "hide6";
      less.className = "hide6"; 
      more.className = ""; 
    }
    if(div[i].className == "x-universe-2") {
      div[i].className = "hide7";
      less.className = "hide7"; 
      more.className = ""; 
    }
  }
  for(var i=0; i < section.length; i++) {
    if(section[i].className == "features2-2") {
      section[i].className ="features2-1";  
    }
    if(section[i].className == "features3-2") {
      section[i].className ="features3-1";  
    } 
    if(section[i].className == "features4-2") {
      section[i].className ="features4-1";  
    }
    if(section[i].className == "features5-2") {
      section[i].className ="features5-1";  
    }
    if(section[i].className == "features6-2") {
      section[i].className ="features6-1";  
    }
    if(section[i].className == "features7-2") {
      section[i].className ="features7-1";  
    }
    if(section[i].className == "features8-2") {
      section[i].className ="features8-1";  
    }
  }
}

