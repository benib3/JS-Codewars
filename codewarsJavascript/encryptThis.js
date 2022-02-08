
var s="Beni Bambur";


console.log(encryptThis(s))

function encryptThis(text) {
    const words = text.split(" ")
    let answer = []
    let i;
  
    for (i of words) {
      console.log("i of words: "+i)
      let newStr = ""
      let temp = ""
  
      for (let j = 0; j < i.length; j++) {
        if (j == 0) {
          newStr += i.charCodeAt(0);
          console.log(newStr)
        }
        else if (j == 1) {
          temp += i[j];
          newStr += i.slice(-1);
          console.log(newStr)
        }
        else if (j == i.length - 1) {
          newStr += temp
          console.log(newStr)
        }
        else {
          newStr += i[j]
          console.log(newStr)
        } 
      }
      answer.push(newStr)
    }
    return answer.join(" ")
  }





    