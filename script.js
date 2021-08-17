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
    let currentpos = 0;
    let replacedcount = 0;
    let j = 0;
    while(replacedcount < replacecount){
      if(text[j] == ' '){
        text = text.substring(0,j) + '\u205F' + text.substring(j+1,text.length);
        currentpos = j;
        replacedcount++;
      }
      else if(text[j] == '\n'){
        text = text[j] = text.substring(0,currentpos) + '\u205F' + text.substring(currentpos+1,text.length);
        replacedcount--;
      }
      j++;
    }
    document.getElementById('text').value = text;
    alert("Replacement done");
  }
  return false;
};
