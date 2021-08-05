document.getElementById('tform').onsubmit = function() {
  let text = document.getElementById('text').value;
  let wordcount = document.getElementById('wordcount').value;
  let currentcount = 0;
  for(let i = 0; i < text.length; i++){
    if(text[i] == ' '){
      currentcount = currentcount + 1;
    }
  }
  currentcount = currentcount + 1;
  if(currentcount < wordcount){
    alert("Your current wordcount exceeds the desired word count");
  }
  else{
    let replacecount = currentcount - wordcount;
    for(let j = 0; j < replacecount; j++){
      text = text.replace(' ', '\u205F');
    }
    document.getElementById('text').value = text;
    alert("Replacement done");
  }
  return false;
};