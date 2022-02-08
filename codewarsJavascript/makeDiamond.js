
var n=3;


console.log(diamond2(n));
console.log("//////////");
// console.log("  *\n ***\n*****\n ***\n  *\n");
function diamond(n) {
    var star="*";
    var string="";

    



  

    // while(n>0){
    //     string+=star;
    //     string+="\n";
    //     n--;
    // }
    
}
function diamond2(n){
  
    // kind of hacky solution with playing around with top diamond value
    
    if(n < 0 || n % 2 === 0) return null;
  
  
  
    // bottom diamond 
    let bResult = "";
    let bCounter = 0;
    for(let i = n; i > 0; i-=2){
        let space = " ".repeat(bCounter);
        bResult += `${space}${`*`.repeat(i)}\n`;
        bCounter++;
    }
  
    // top diamond
    let tResult = "";
    let tCounter = bCounter-1;
  
    for(let i = 1; i < n; i+=2){
       let space = " ".repeat(tCounter);
       tResult += `${space}${`*`.repeat(i)}\n`;
       tCounter--;
    }
  
  
  
    return tResult.concat(bResult)
  }

