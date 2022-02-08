var starrr=["zone", "abigail", "theta", "form", "libe", "zas"];
var k=2;

console.log(longestConsec(starrr,k));



function longestConsec(strarr, k) {
    // your code
    var n=strarr.length;
    var Lword="";
    var word="";

    if(n==0 || k>n || k<=0){return "";}

    for (let i = 0; i < n; i++) {
        word=strarr.slice(i,i+k);
        if(word.join('').length>Lword.length){
            Lword=word.join('');
        }
   
    }

       return Lword;
    


}


function longestConsec2(strarr, k) {
    if (strarr.length == 0 || k > strarr.length || k <= 0) return '';
    
    let longStr = '';
    
    let newStr = '';
    
    for (let i = 0; i < strarr.length; i++){
      newStr = strarr.slice(i, i+k);
      if (newStr.join('').length > longStr.length ){
        longStr = newStr.join('');
      }
    }
    
    return longStr;
}