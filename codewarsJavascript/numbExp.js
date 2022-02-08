

var num=12;
console.log(expandedForm(num))

function expandedForm(num) {
    var myArr = String(num).split("").map((num)=>{
        return Number(num).toString()
      })
      for(let i = 0 ; i < myArr.length; i++ ){
        
        for(let y = myArr.length - i; y > 1; y--){
            myArr[i] += '0'; 
            
        }
    }
    
   myArr=myArr.filter(value => !value.startsWith(0));
   return myArr.join("+")

    

  }

function expandedForm2(num) {
    // Your code here
    let numStr = num.toString().split('');
    console.log(numStr);
    
    for(let i = 0 ; i < numStr.length; i++ ){
        for(let y = numStr.length - i; y > 1; y--){
           numStr[i] += '0'; 
              
        }
    }
    numStr = numStr.filter(value => !value.startsWith(0));
    return numStr.join(' + ')
  }

