var i=0,text;
text =  "Click on the Arc Reactor to talk to JARVIS....";

function typing() {
  if(i<text.length){
    document.getElementById("text").innerHTML += text.charAt(i);
    i++;
    setTimeout(typing,70);
  }
}
typing();