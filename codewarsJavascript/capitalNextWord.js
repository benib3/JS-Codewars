str="beni bambur kako si";
str2="kako si"
alert(bigV(str,str2));
//ovaj program svaku rijec kapitalizuje sem one koje korisnik unese da ne :D
function capitalize(str){
    return str[0].toUpperCase()+str.slice(1);
}
function bigV(str,minorWords){
    if(str.length==0){return ""};

    let MinorArray = minorWords.toLowerCase().split(" ");
    let titleArray = str.toLowerCase().split(" ");
    titleArray[0] = capitalize(titleArray[0]);

    for(let i = 1; i < titleArray.length; i++){
        if(MinorArray.indexOf(titleArray[i]) === -1){
           titleArray[i] = capitalize(titleArray[i]);
        }
      }
    return titleArray.join(" ");
}




