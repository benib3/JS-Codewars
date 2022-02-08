
var arr=[1,1,2,1,];
var arr2=[5,4,2,1,];


console.log(f(arr));





function f(numbers) {
   
    let strayChar = numbers[0];

    // see if it is different from the next 2
    if (strayChar !== numbers[1] && strayChar !== numbers[2]) 
        return strayChar;

    // if not find the first value that is different
    for(let i = 1; i < numbers.length; i++){
      if(strayChar !== numbers[i])
        return numbers[i];
    }


}