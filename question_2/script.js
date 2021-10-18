
function palindrome(str) {

    var len = str.length;
    var mid = Math.floor(len/2);

    for ( var i = 0; i < mid; i++ ) {
        if (str[i] !== str[len - 1 - i]) {
            return false;
        }
    }

    return true;
}

let elForm = document.getElementById("formId")
elForm.addEventListener("click", function(){
    let elWords = document.getElementById("words")
    let elOutput = document.getElementById("output")
    let elPalindrome = palindrome(elWords.value)
    elOutput.innerHTML = "is the inserted word is known as palindrome? " + elPalindrome

})