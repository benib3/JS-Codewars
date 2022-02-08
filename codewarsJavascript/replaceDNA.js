var dna=["T","A","C","G"];

console.log(f(dna))
///T - A , A - T , C - G ,G - C

function f(array) {
    var newArr=[];
    for (let i = 0; i < array.length; i++) {
        if(array[i]==="T"){
            newArr.push("A");

        }else if(array[i]==="A"){
            newArr.push("T");

        }else if(array[i]==="C"){
            newArr.push("G");
        }else if(array[i]==="G"){
            newArr.push("C");
        }else {
            return newArr;
        }

        
    }
    
    return Array.from(newArr);



}