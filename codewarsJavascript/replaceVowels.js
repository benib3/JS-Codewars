
str="Beni";
alert(disemvowel(str));
function disemvowel(str) {
 var vowels = new Array("a", "e", "i", "o", "u");
  str.toLowerCase();
    return str.replace(/[aeiou]/ig,"");
  }