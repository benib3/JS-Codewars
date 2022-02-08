string="testMe";

alert(solution(string));



function solution(string) {
    return(string.replace(/([A-Z])/g, ' $1'));
    
  
  }