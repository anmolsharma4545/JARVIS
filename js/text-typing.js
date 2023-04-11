
var hearts = "<p>&hearts;&hearts;</p>";
var i=0,text;
text =  'Hey! I am JARVIS , talk to me by clicking the Arc Reactor';

function typing() {
  if(i<text.length){
    document.getElementById("text").innerHTML += text.charAt(i);
    i++;
    
    setTimeout(typing,70);
  }
}
typing();