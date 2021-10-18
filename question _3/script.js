function vowelCount(str1)
{
  var vowel_list = 'hadimdnor';
  var vcount = 0;
  
  for(var x = 0; x < str1.length ; x++)
  {
    if (vowel_list.indexOf(str1[x]) !== -1)
    {
      vcount += 1;
    }
  
  }
  return vcount;
}

let elForm = document.getElementById("findVowel")
elForm.addEventListener("click", function(){
    let elWords = document.getElementById("words")
    let elOutput = document.getElementById("output")
    let elVowel = vowelCount(elWords.value)
    elOutput.innerHTML = " the number of vowel is" + elVowel

})
