function enterPrompt() {
  if (document.getElementById("inputText").value.length == 0) {
    alert("Please Enter Text!")
  }
  else
  {
    var x = document.getElementById("introText");
    x.style.display = "none";
    var y = document.getElementById("go");
    y.style.display = "none";
    document.getElementById('firstMessage').appendChild(createPhrase())
    
    var z = document.getElementById("tmmText");
    z.style.display = "block";
  }
}

function createPhrase() {
  let phrase = document.createElement('p');
  phrase.classList.add('prompt','phrase')
  phrase.textContent = "paragraph";
  return phrase;
}

function generatePhrases() {
  document.getElementById('firstMessage').appendChild(createPhrase())
  document.getElementById('firstMessage').appendChild(createPhrase())
  document.getElementById('firstMessage').appendChild(createPhrase())
}